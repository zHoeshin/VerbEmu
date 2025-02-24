"use strict";

const TType = Object.freeze({
    Id:          Symbol("i"),
    Number:      Symbol("n"),
    Punctuation: Symbol("p"),
    Th:          Symbol("t"),
    String:      Symbol("s"),
});

const Types = {
    Literal: 0,
    Number: 1,
    String: 2,
    Temporal: 3,
    Variable: 4,
}

class Token {
    value
    type
    pos

    constructor(value, type, pos){
        this.value = value
        this.type = type
        this.pos = pos
    }
}

const tokenizerspecs = [
    [/\((.*\R*.*)*\)/gm, null],
    [/\s/gm, null],
    [/(['"])((\\\1)|[^\n])*\1/gm, TType.String],
    [/-(th|rd|nd|st)/gm, TType.TH],
    [/[\p{L}_][\p{L}\p{N}_]*((?!(-(th|rd|nd|st)\b))-[\p{L}\p{N}_])*/gmu, TType.Id],
    [/(\.|:|,)/gm, TType.Punctuation],
    [/([-+]?)(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|(?:\d*\.?\d+(?:[eE][-+]?\d+)?|Infinity))/gm, TType.Number]
]
function tokenize(raw) {
    let tokens = [];
    let i = 0;
    let x = 0;
    let y = 0

    while (i < raw.length) {
        var s = false
        if (raw[i] == "\r") {
            i += 1
            continue
        }
        if (raw[i] == "\n") {
            i += 1
            x = 0
            y += 1
            continue
        }
        for (const spec of tokenizerspecs) {
            const regex = spec[0]
            const type = spec[1]
            regex.lastIndex = i
            let match = regex.exec(raw)
            if (match == null) continue
            //console.log(i, match)
            if (match.index == i) {
                s = true
                let l = match[0].length
                i += l
                x += l
                if (type != null){
                    tokens.push(new Token(match[0], type, [i, x, y]))
                }
                break
            }
        }
        if (!s) {
            throw new Error(`Unable to match ${raw[i]} to any token at line ${y + 1} column ${x + 1}`)
        }
    }
    return tokens
}

const expr = [
    [2, [["sum", "of"], ["and"]], "+"],
    [2, [["difference", "of"], ["and"]], "-"],
    [2, [["quotient", "of"], ["and"]], "/"],
    [2, [["multiple", "of"], ["and"]], "*"],
    [2, [["product", "of"], ["and"]], "*"],
    [2, [["remainder", "of", "division", "of"], ["by"]], "%"],
    [1, [["whole", "part", "of"]], "$"],
    [2, [["division", "of"], ["by"]], "/"],
    [2, [["zeroed", "division", "of"], ["by"]], "/0"],
    [2, [["oned", "division", "of"], ["by"]], "/1"],
    [2, [["infined", "division", "of"], ["by"]], "/inf"],
    [2, [["power"], ["of"]], "**"],
    [2, [["element"], ["of"]], "."],
    [2, [["put"], ["into"]], "="],
    [1, [["goto"]], "->"],
    [1, [["go", "to"]], "->"],
    
    [2, [["let"], ["be"]], ":"],
    [1, [["print"]], ">>>"],
    [2, [["take"], ["input", "and", "put", "it", "into"]], "<<<"],
    [1, [["exit"]], "exit"],

    [2, [["add"], ["to"]], "+="],
    [2, [["substract"], ["from"]], "-="],
    [2, [["multiply"], ["by"]], "*="],
    [2, [["divide"], ["by"]], "/="],
]

const operations = {
    "+": [2, (a, b) => {return new v(a.v + b.v)}, false],
    "-": [2, (a, b) => {return new v(a.v - b.v)}, false],
    "/": [2, (a, b) => {return new v(a.v / b.v)}, false],
    "/0": [2, (a, b) => {
        let value = a.v / b.v
        if (isNaN(value)) return new v(0)
        return new v(value)
    }, false],
    "/1": [2, (a, b) => {
        let value = a.v / b.v
        if (isNaN(value)) return new v(1)
        return new v(value)
    }, false],
    "/inf": [2, (a, b) => {
        let value = a.v / b.v
        if (isNaN(value)) return new v(Infinity)
        return new v(infin)
    }, false],
    "*": [2, (a, b) => {return new v(a.v * b.v)}, false],
    "%": [2, (a, b) => {return new v(a.v % b.v)}, false],
    "$": [1, (a) => {return new v(a.v - a.v % 1)}, false],
    "//": [2, (a, b) => {return new v(a.v / b.v)}, false],
    "**": [2, (a, b) => {return new v(b.v ** a.v)}, false],
    ".": [2, (a, b) => {return new v(a.v[b.v])}, false],
    "=": [2, (b, a) => {
        console.log("=",    a, b)
        a.v = b.v; return a
    }, false],

    ":": [2, (a, b) => {a.type = b.v; return a}, false],
    ">>>": [1, (a) => {term.output(a.v)}, false],
    "<<<": [2, (b, a) => {
        VM.running = false
        term.prompt(" ", (result) => {
            let o1 = a
            let o2 = b
            //console.log(">>>", result)
            let text = `: <b style="color: white;">${result}</b>`
            term.output(text)
            if (o2.v == "numeric") result = Number(result)
            o1.v = result
            VM.continue()
        })
        return a
    }, true],
    "exit": [1, (a) => {
        VM.running = false
        term.output(`Program exited with code ${a.v}`)
    }, true],
    "->": [1, (a) => {VM.pc = a.v; return a}, false],
    
    "+=": [2, (a, b) => {a.v = a.v + b.v; return a}, false],
    "-=": [2, (a, b) => {a.v = a.v - b.v; return a}, false],
    "*=": [2, (a, b) => {a.v = a.v * b.v; return a}, false],
    "/=": [2, (a, b) => {a.v = a.v / b.v; return b}, false],
}

function tokensEqualStrings(tokens, strings){
    //console.log(tokens, strings)
    if (tokens.length != strings.length) return false
    for (let i = 0; i < tokens.length; i ++) {
        if (tokens[i].value != strings[i]) {
            //console.log(false)
            return false
        }
    }
    //console.log(true)
    return true
}

class v {
    type
    v
    constructor(value, type = null){
        this.type = type
        this.v = value
    }
    evaluate() {
        return this
    }
}
const VM = {
    exprs: [],
    variables: {},
    pc: 0,
    running: false,
    runner: null,
    t: Array(100),

    make() {
        let parser = new Parser(editor.getValue())
        let tree = parser.parse()
        let code = []
        let tempsused = new v(0)
        console.log(tree)
        for(const instr of tree) {
            //console.log(instr)
            instr.evaluate(code, tempsused)
            tempsused.v --
        }
        for(const line of code) {
            console.log(code)
        }
        this.exprs = code
        this.variables = {
            "numeric": new v("numeric"),
            "e": new v(2.718),
            "pi": new v(3.141592683456),
            "n": new v(-1)
        }
        this.pc = 0
    },

    get(operand) {
        switch(operand[0]){
            case Types.String:
            case Types.Number:
            case Types.Literal:
                return new v(operand[1])
            case Types.Variable:
                if (!(operand[1] in VM.variables)) {
                    VM.variables[operand[1]] = new v(undefined)
                }
                return VM.variables[operand[1]]
            case Types.Temporal:
                return VM.t[operand[1]]
            }
    },
    set(operand, value) {
        switch(operand[0]){
            case Types.String:
            case Types.Number:
            case Types.Literal:
                throw Error(`Cannot set literal ${operand[1]} to value ${value}`)
            case Types.Variable:
                return VM.variables[operand[1]] = value
            case Types.Temporal:
                return VM.t[operand[1]] = value
            }
    },

    *work() {
        while(true){
            let expr = this.exprs[this.pc]
            this.pc += 1
            let opcode = expr[0]
            let r = expr[1]
            let o = expr.slice(2)
            o.forEach((e, i, a) => {
                a[i] = VM.get(e)
            });
            let f = operations[opcode]
            let res = f[1](...o)
            if (f[2]) yield
            VM.set(r, res)
            /*let stack = []
            for (const t of expr) {
                if (t instanceof Token){
                    if (t.type == TType.Id) {
                        if (!(t.value in this.variables)) {
                            this.variables[t.value] = new v(undefined)
                        }
                        stack.push(this.variables[t.value])
                    }else if (t.type == TType.Number) {
                        stack.push(new v(Number(t.value)))
                    }
                }
                else {
                    //console.log(expr, ...stack)
                    let op = operations[t]
                    let operands = []
                    for (let i = 0; i < op[0]; i++){
                        operands.push(stack.pop())
                    }
                    result = op[1](...operands)
                    //console.warn(...operands, op[1], result)
                    stack.push(result)
                    if (op[2]) yield
                }
            }*/
            yield
        }
    },

    start() {
        this.running = true
        this.runner = this.work()
        this.continue()
    },

    continue() {
        this.running = true
        frame()
        //while (this.running && this.pc < this.exprs.length) {
        //    this.runner.next()
        //}
    }
}

class Parser {
    tokens
    i
    l
    constructor(raw) {
        this.tokens = tokenize(raw)
        //console.log(this.tokens)
        this.i = 0
        this.l = this.tokens.length
    }

    consumeId(returntokennotvalue) {
        if (this.i > this.l) return null
        let t = this.tokens[this.i]
        if (t === undefined) return null
        if (t.type != TType.Id) return null
        this.i += 1
        if (returntokennotvalue) return t
        return t.value
    }
    consumeType(type, returntokennotvalue) {
        if (this.i > this.l) return null
        let t = this.tokens[this.i]
        if (t === undefined) return null
        if (t.type != type) return null
        this.i += 1
        if (returntokennotvalue) return t
        return t.value
    }
    consumeNumber(returntokennotvalue) {
        if (this.i > this.l) return null
        let t = this.tokens[this.i]
        if (t === undefined) return null
        if (t.type != TType.Number) return null
        this.i += 1
        if (returntokennotvalue) return t
        return t.value
    }
    consumeExact(type, value) {
        //console.log("consuming", type, value)
        if (this.i > this.l) return null
        let t = this.tokens[this.i]
        //console.log(t, this.i)
        if (t === undefined) return null
        if (t.type != type) return null
        if (t.value != value) return null
        this.i += 1
        return t
    }

    parse() {
        let instructions = []
        let fails = 0
        while (this.i < this.l) {
            let instr = this.parseExpression()
            if (instr == null) {
                fails += 1
                break
            }
            instructions.push(instr)
            this.consumeExact(TType.Punctuation, ".")
        }
        return instructions
    }
    parseVariableDeclaration() {
        let start = this.i
    }
    parseExpression() {
        //console.log("parsing expr from", this.i)
        let start = this.i
        let success = false
        let op = undefined
        let operands = []
        for (const posexpr of expr) {
            let s = true
            let ops = []
            for(let i = 0; i < posexpr[0]; i++) {
                let strings = posexpr[1][i]
                let l = strings.length
                let checktokens = this.tokens.slice(this.i, this.i + l)
                if (tokensEqualStrings(checktokens, strings)) {
                    this.i += l
                    let op = this.parseExpression()
                    ops.push(op)
                    continue
                }
                s = false
                ops = []
                break
            }
            if (s) {
                success = true
                operands = ops
                op = posexpr[2]
                break
            }
            /*let checktokens = this.tokens.slice(this.i, this.i + exprinfo.length)
            if (tokensEqualStrings(checktokens, exprinfo)) {
                this.i += exprinfo.length
                let op1
                op1 = this.parseExpression()
                let b = posexpr[1]
                if (b.length == 0) {
                    success = true
                    seq = [...op1, posexpr[2]]
                    break
                }
                let checkinside = this.tokens.slice(this.i, this.i + b.length)
                let check = tokensEqualStrings(checkinside, b)
                if (check === false) {
                    this.i = start
                    continue
                }
                this.i += b.length
                let op2 = this.parseExpression()
                success = true
                seq = [...op1, ...op2, posexpr[2]]
                break
            }*/
        }
        if (!success){
            let t = this.consumeId(true);
            if (t !== null) {
                return new Leaf(Types.Variable, t.value)
            }
            t = this.consumeNumber(true);
            if (t !== null) {
                console.log("n", t)
                return new Leaf(Types.Number, Number(t.value))
            }
            t = this.consumeType(TType.String, true)
            if (t !== null) {
                return new Leaf(Types.String, t.value.slice(1, t.value.length - 1))
            }
            this.i = start
            return null
        }
        return new Tree(op, operands)
    }
}

function frame(){
    if (!VM.running) return
    /*f += 1
    if(f > 59){
        console.warn(c, gc)
        c = 0
        f = 0
    }*/
    let s = performance.now()
    let e = s + 16
    while((performance.now() <= e) && VM.running && (VM.pc < VM.exprs.length)){VM.runner.next();}

    if (VM.running) requestAnimationFrame(frame)

    /*if(swaprequest){
        monitor.swap()
        swaprequest = false
    }*/
}
class Leaf {
    constructor(type, value) {
        console.warn(type, value)
        this.type = type
        this.v = value
    }

    evaluate(code, tempsused) {
        return [this.type, this.v]
    }
}
class Tree {
    constructor(operation, operands) {
        this.op = operation
        this.operands = operands
        if (operands === undefined) this.operands = []
    }

    evaluate(code, tempsused) {
        var newoperands = []
        var tempsfreed = 0
        for(const operand of this.operands) {
            const newoperand = operand.evaluate(code, tempsused)
            newoperands.push(newoperand)
            console.warn(newoperand)
            if (newoperand[0] == Types.Temporal) {
                tempsfreed ++
                console.warn(tempsfreed)
            }
        }
        console.log(tempsused.v, tempsfreed, tempsused.v - tempsfreed)
        tempsused.v -= tempsfreed
        code.push([this.op, [Types.Temporal, ++(tempsused.v)], ...newoperands])
        return [Types.Temporal, tempsused.v]
    }
}
