ace.define("ace/mode/verb_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){/* This file was autogenerated from Assembly x86.tmLanguage (uuid: ) */
"use strict";
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var VerbCommentHighlightRules = function () {
    this.$rules = {
        "start": [
            {
                token: "comment.doc.tag",
                regex: "@\\w+(?=\\s|$)"
            }, VerbCommentHighlightRules.getTagRule(), {
                defaultToken: "comment.doc.body",
                caseInsensitive: true
            }
        ]
    };
};

oop.inherits(VerbCommentHighlightRules, TextHighlightRules);

VerbCommentHighlightRules.getTagRule = function(start) {
    return {
        token : "comment.doc.tag.storage.type",
        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
};

VerbCommentHighlightRules.getStartRule = function(start) {
    return {
        token : "comment.doc", // doc comment
        regex: "\\(",
        next  : start
    };
};

VerbCommentHighlightRules.getEndRule = function (start) {
    return {
        token : "comment.doc", // closing comment
        regex : "\\)",
        next  : start
    };
};


function comments(next) {
    return [
        {
            token : "comment", // multi line comment
            regex : "\\(",
            next: [
                VerbCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "\\)", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }
    ];
}

exports.VerbCommentHighlightRules = VerbCommentHighlightRules;
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var VerbHighlightRules = function () {
    this.$rules = {
        start: 
        [   
            {
                token: 'comment',
                regex: /\((.*\R*.*)*\)/
            },
            comments("start"),
            {
                token: 'operation',
                regex: /\b(product|sum|quotient|remained|division|whole|part|power|element|difference|remainder)\b/,
            },
            {
                token: 'action',
                regex: /\b(adding|substracting|multiplying|letting|putting|printing|removing|returning|getting|setting)\b/,
            },
            {
                token: 'action',
                regex: /\b(add|substract|multiply|let|put|print|remove|return|get|set|take|exit)\b/,
            },
            {
                token: 'info',
                regex: /\b(define|structure|procedure|operation|with|where|is|if|else|equal|not|and|or|argument|input)\b/,
            },
            {
                token: 'special',
                regex: /\b(own)\b/,
            },
            {
                token: 'separator',
                regex: /\b(of|by|be|into|to)\b/,
            },
            {
                token: 'th',
                regex: /-(th|st|nd|rd)\b/,
            }
            
        ],
    };
    this.normalizeRules();
};
VerbHighlightRules.metaData = { fileTypes: ['verb'],
    name: 'Verb',
    scopeName: 'source.verb' };
oop.inherits(VerbHighlightRules, TextHighlightRules);
exports.VerbHighlightRules = VerbHighlightRules;

});

ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"], function(require, exports, module){"use strict";
var oop = require("../../lib/oop");
var BaseFoldMode = require("./fold_mode").FoldMode;
var Range = require("../../range").Range;
var FoldMode = exports.FoldMode = function () { };
oop.inherits(FoldMode, BaseFoldMode);
(function () {
    this.getFoldWidgetRange = function (session, foldStyle, row) {
        var range = this.indentationBlock(session, row);
        if (range)
            return range;
        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        if (startLevel == -1 || line[startLevel] != "#")
            return;
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        while (++row < maxRow) {
            line = session.getLine(row);
            var level = line.search(re);
            if (level == -1)
                continue;
            if (line[level] != "#")
                break;
            endRow = row;
        }
        if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
        }
    };
    this.getFoldWidget = function (session, foldStyle, row) {
        var line = session.getLine(row);
        var indent = line.search(/\S/);
        var next = session.getLine(row + 1);
        var prev = session.getLine(row - 1);
        var prevIndent = prev.search(/\S/);
        var nextIndent = next.search(/\S/);
        if (indent == -1) {
            session.foldWidgets[row - 1] = prevIndent != -1 && prevIndent < nextIndent ? "start" : "";
            return "";
        }
        if (prevIndent == -1) {
            if (indent == nextIndent && line[indent] == "#" && next[indent] == "#") {
                session.foldWidgets[row - 1] = "";
                session.foldWidgets[row + 1] = "";
                return "start";
            }
        }
        else if (prevIndent == indent && line[indent] == "#" && prev[indent] == "#") {
            if (session.getLine(row - 2).search(/\S/) == -1) {
                session.foldWidgets[row - 1] = "start";
                session.foldWidgets[row + 1] = "";
                return "";
            }
        }
        if (prevIndent != -1 && prevIndent < indent)
            session.foldWidgets[row - 1] = "start";
        else
            session.foldWidgets[row - 1] = "";
        if (indent < nextIndent)
            return "start";
        else
            return "";
    };
}).call(FoldMode.prototype);

});

ace.define("ace/mode/verb",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/verb_highlight_rules","ace/mode/folding/coffee"], function(require, exports, module){/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/
"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var VerbHighlightRules = require("./verb_highlight_rules").VerbHighlightRules;
var FoldMode = require("./folding/coffee").FoldMode;
var Mode = function () {
    this.HighlightRules = VerbHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);
(function () {
    this.lineCommentStart = [";"];
    this.$id = "ace/mode/verb";
}).call(Mode.prototype);
exports.Mode = Mode;

});
(function() {
    ace.require(["ace/mode/verb"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
