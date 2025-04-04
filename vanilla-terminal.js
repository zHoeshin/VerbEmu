(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/VanillaTerminal.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./src/VanillaTerminal.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.VanillaTerm {\\n  background-color: #222222;\\n  color: white;\\n  font-family: \\\"Inconsolata\\\", \\\"Courier New\\\", Courier, monospace;\\n  font-weight: bold;\\n  overflow: hidden;\\n  padding: 0.75em 1em;\\n}\\n\\n  .VanillaTerm .container {\\n    width: 100%;\\n    height: 100%;\\n    overflow-y: scroll;\\n  }\\n    .VanillaTerm .container ::selection {\\n      background-color: #f3e5ab;\\n      text-shadow: none !important;\\n    }\\n\\n    .VanillaTerm output {\\n      clear: both;\\n      line-height: 1.25em;\\n      width: 100%;\\n    }\\n      .VanillaTerm output pre {\\n        margin: 0;\\n      }\\n      .VanillaTerm output span {\\n        display: block;\\n        font-weight: normal;\\n        color: #dddddd;\\n      }\\n\\n    .VanillaTerm .prompt, .VanillaTerm a {\\n      color: #f3e5ab;\\n      font-weight: bold;\\n    }\\n\\n    .VanillaTerm .prompt {\\n      line-height: 1.25em;\\n      margin-right: 0.5em;\\n    }\\n\\n    .VanillaTerm .command {\\n      display: flex;\\n    }\\n\\n      .VanillaTerm .command.input .prompt {\\n        color: white;\\n        font-weight: normal;\\n      }\\n\\n      .VanillaTerm .command.idle .input {\\n        display: none;\\n      }\\n\\n      .VanillaTerm .command.hidden .prompt {\\n        display: none;\\n      }\\n\\n      .VanillaTerm .command.hidden .input {\\n        max-width: 1px;\\n      }\\n\\n      .VanillaTerm .command .input {\\n        background-color: transparent;\\n        border: none;\\n        color: inherit;\\n        font: inherit;\\n        flex: 1;\\n        margin: 0;\\n        outline: none;\\n        padding: 0;\\n      }\\n\\n      .VanillaTerm .command .spinner:before {\\n        display: inline-block;\\n        content: '\\\\280B';\\n        animation: spin 1s linear infinite;\\n        vertical-align: middle;\\n        margin-right: 10px;\\n      }\\n\\n\\n@keyframes spin {\\n   0% { content: '\\\\280B' }\\n  10% { content: '\\\\2819' }\\n  20% { content: '\\\\2839' }\\n  30% { content: '\\\\2838' }\\n  40% { content: '\\\\283C' }\\n  50% { content: '\\\\2834' }\\n  60% { content: '\\\\2826' }\\n  70% { content: '\\\\2827' }\\n  80% { content: '\\\\2807' }\\n  90% { content: '\\\\280F' }\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/VanillaTerminal.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, keywords, repository, license, main, bin, homepage, bugs, devDependencies, scripts, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"vanilla-terminal\",\"version\":\"0.0.11\",\"description\":\"🍦A simple and lightweight Javascript web browser terminal\",\"keywords\":[\"terminal\",\"console\",\"xterm\",\"shell\",\"tool\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/soyjavi/vanilla-terminal.git\"},\"license\":\"MIT\",\"main\":\"./dist/vanilla-terminal.js\",\"bin\":\"./dist/vanilla-terminal.js\",\"homepage\":\"https://github.com/soyjavi/vanilla-terminal\",\"bugs\":\"https://github.com/soyjavi/vanilla-terminal/issues\",\"devDependencies\":{\"babel-eslint\":\"^9.0.0\",\"babel-jest\":\"^23.4.2\",\"babel-loader\":\"^7.1.0\",\"babel-plugin-transform-class-properties\":\"^6.24.1\",\"babel-polyfill\":\"^6.26.0\",\"babel-preset-env\":\"^1.7.0\",\"css-loader\":\"^1.0.0\",\"eslint\":\"^5.4.0\",\"eslint-config-airbnb\":\"latest\",\"eslint-plugin-import\":\"^2.13.0\",\"identity-obj-proxy\":\"^3.0.0\",\"jest\":\"^23.5.0\",\"release-it\":\"^7.4.3\",\"style-loader\":\"^0.23.0\",\"webpack\":\"^4.12.0\",\"webpack-cli\":\"^3.0.6\"},\"scripts\":{\"build\":\"webpack\",\"start\":\"node index.js\",\"test\":\"jest\",\"lint\":\"eslint src/**\",\"release\":\"release-it\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/VanillaTerminal.css":
/*!*********************************!*\
  !*** ./src/VanillaTerminal.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./VanillaTerminal.css */ \"./node_modules/css-loader/index.js!./src/VanillaTerminal.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/VanillaTerminal.css?");

/***/ }),

/***/ "./src/VanillaTerminal.js":
/*!********************************!*\
  !*** ./src/VanillaTerminal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _VanillaTerminal = __webpack_require__(/*! ./VanillaTerminal.css */ \"./src/VanillaTerminal.css\");\n\nvar _VanillaTerminal2 = _interopRequireDefault(_VanillaTerminal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// eslint-disable-line\n\nvar KEY = 'VanillaTerm';\n\nvar _window = window,\n    addEventListener = _window.addEventListener,\n    localStorage = _window.localStorage;\n\nvar Terminal = function () {\n  function Terminal() {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Terminal);\n\n    _initialiseProps.call(this);\n\n    var _props$container = props.container,\n        container = _props$container === undefined ? 'vanilla-terminal' : _props$container,\n        _props$commands = props.commands,\n        commands = _props$commands === undefined ? {} : _props$commands,\n        _props$welcome = props.welcome,\n        welcome = _props$welcome === undefined ? 'Welcome to <a href=\"\">Vanilla</a> terminal.' : _props$welcome,\n        _props$prompt = props.prompt,\n        prompt = _props$prompt === undefined ? '' : _props$prompt,\n        _props$separator = props.separator,\n        separator = _props$separator === undefined ? '&gt;' : _props$separator;\n\n    this.commands = Object.assign({}, commands, _modules.COMMANDS);\n    this.history = localStorage[KEY] ? JSON.parse(localStorage[KEY]) : [];\n    this.historyCursor = this.history.length;\n    this.welcome = welcome;\n    this.shell = { prompt: prompt, separator: separator };\n\n    var el = document.getElementById(container);\n    if (el) {\n      this.cacheDOM(el);\n      this.addListeners();\n      if (welcome) this.output(welcome);\n    } else throw Error('Container #' + container + ' doesn\\'t exists.');\n  }\n\n  _createClass(Terminal, [{\n    key: 'clear',\n    value: function clear() {\n      this.DOM.output.innerHTML = '';\n      this.resetCommand();\n    }\n  }, {\n    key: 'idle',\n    value: function idle() {\n      var DOM = this.DOM;\n\n\n      DOM.command.classList.add('idle');\n      DOM.prompt.innerHTML = '<div class=\"spinner\"></div>';\n    }\n  }, {\n    key: 'prompt',\n    value: function prompt(_prompt) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n\n      this.state.prompt = true;\n      this.onAskCallback = callback;\n      this.DOM.prompt.innerHTML = _prompt + ':';\n      this.resetCommand();\n      this.DOM.command.classList.add('input');\n    }\n  }, {\n    key: 'onInput',\n    value: function onInput(callback) {\n      this.onInputCallback = callback;\n    }\n  }, {\n    key: 'output',\n    value: function output() {\n      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '&nbsp;';\n\n      this.DOM.output.insertAdjacentHTML('beforeEnd', '<span>' + html + '</span>');\n      this.resetCommand();\n    }\n  }, {\n    key: 'setPrompt',\n    value: function setPrompt() {\n      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.shell.prompt;\n      var DOM = this.DOM,\n          separator = this.shell.separator;\n\n\n      this.shell = { prompt: prompt, separator: separator };\n      DOM.command.classList.remove('idle');\n      DOM.prompt.innerHTML = '' + prompt + separator;\n      /*DOM.input.focus();*/\n    }\n  }]);\n\n  return Terminal;\n}();\n\nvar _initialiseProps = function _initialiseProps() {\n  var _this = this;\n\n  this.state = {\n    prompt: undefined,\n    idle: undefined\n  };\n\n  this.cacheDOM = function (el) {\n    el.classList.add(KEY);\n    el.insertAdjacentHTML('beforeEnd', (0, _modules.markup)(_this));\n\n    // Cache DOM nodes\n    var container = el.querySelector('.container');\n    _this.DOM = {\n      container: container,\n      output: container.querySelector('output'),\n      command: container.querySelector('.command'),\n      input: container.querySelector('.command .input'),\n      prompt: container.querySelector('.command .prompt')\n    };\n  };\n\n  this.addListeners = function () {\n    var DOM = _this.DOM;\n\n    DOM.output.addEventListener('DOMSubtreeModified', function () {\n      setTimeout(function () {\n        return DOM.input.scrollIntoView();\n      }, 10);\n    }, false);\n\n    addEventListener('click', function () {\n      return /*DOM.input.focus()*/;\n    }, false);\n    DOM.output.addEventListener('click', function (event) {\n      return event.stopPropagation();\n    }, false);\n    DOM.input.addEventListener('keyup', _this.onKeyUp, false);\n    DOM.input.addEventListener('keydown', _this.onKeyDown, false);\n    DOM.command.addEventListener('click', function () {\n      return /*DOM.input.focus()*/;\n    }, false);\n\n    addEventListener('keyup', function (event) {\n      /*DOM.input.focus()*/;\n      event.stopPropagation();\n      event.preventDefault();\n    }, false);\n  };\n\n  this.onKeyUp = function (event) {\n    var keyCode = event.keyCode;\n    var DOM = _this.DOM,\n        _history = _this.history,\n        history = _history === undefined ? [] : _history,\n        historyCursor = _this.historyCursor;\n\n\n    if (keyCode === 27) {\n      // ESC key\n      DOM.input.value = '';\n      event.stopPropagation();\n      event.preventDefault();\n    } else if ([38, 40].includes(keyCode)) {\n      if (keyCode === 38 && historyCursor > 0) _this.historyCursor -= 1; // {38} UP key\n      if (keyCode === 40 && historyCursor < history.length - 1) _this.historyCursor += 1; // {40} DOWN key\n\n      if (history[_this.historyCursor]) DOM.input.value = history[_this.historyCursor];\n    }\n  };\n\n  this.onKeyDown = function (_ref) {\n    var keyCode = _ref.keyCode;\n    var _commands = _this.commands,\n        commands = _commands === undefined ? {} : _commands,\n        DOM = _this.DOM,\n        history = _this.history,\n        onInputCallback = _this.onInputCallback,\n        state = _this.state;\n\n    var commandLine = DOM.input.value.trim();\n    if (keyCode !== 13 || !commandLine) return;\n\n    var _commandLine$split = commandLine.split(' '),\n        _commandLine$split2 = _toArray(_commandLine$split),\n        command = _commandLine$split2[0],\n        parameters = _commandLine$split2.slice(1);\n\n    if (state.prompt) {\n      state.prompt = false;\n      _this.onAskCallback(commandLine);\n      _this.setPrompt();\n      _this.resetCommand();\n      return;\n    }\n\n    // Save command line in history\n    history.push(commandLine);\n    localStorage[KEY] = JSON.stringify(history);\n    _this.historyCursor = history.length;\n\n    // Clone command as a new output line\n    DOM.output.appendChild((0, _modules.cloneCommandNode)(DOM.command));\n\n    // Clean command line\n    DOM.command.classList.add('hidden');\n    DOM.input.value = '';\n\n    // Dispatch command\n    if (Object.keys(commands).includes(command)) {\n      var callback = commands[command];\n      if (callback) callback(_this, parameters);\n      if (onInputCallback) onInputCallback(command, parameters);\n    } else {\n      _this.output('<u>' + command + '</u>: command not found.');\n    }\n  };\n\n  this.resetCommand = function () {\n    var DOM = _this.DOM;\n\n\n    DOM.input.value = '';\n    DOM.command.classList.remove('input');\n    DOM.command.classList.remove('hidden');\n    if (DOM.input.scrollIntoView) DOM.input.scrollIntoView();\n  };\n};\n\nif (window) window.VanillaTerminal = Terminal;\n\nexports.default = Terminal;\n\n//# sourceURL=webpack:///./src/VanillaTerminal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _VanillaTerminal = __webpack_require__(/*! ./VanillaTerminal */ \"./src/VanillaTerminal.js\");\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_VanillaTerminal).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/cloneCommandNode.js":
/*!*****************************************!*\
  !*** ./src/modules/cloneCommandNode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (el) {\n  var line = el.cloneNode(true);\n  var input = line.querySelector('.input');\n\n  input.autofocus = false;\n  input.readOnly = true;\n  input.insertAdjacentHTML('beforebegin', input.value);\n  input.parentNode.removeChild(input);\n  line.classList.add('line');\n\n  return line;\n};\n\n//# sourceURL=webpack:///./src/modules/cloneCommandNode.js?");

/***/ }),

/***/ "./src/modules/commands.js":
/*!*********************************!*\
  !*** ./src/modules/commands.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _package = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\nvar _package2 = _interopRequireDefault(_package);\n\nvar _help = __webpack_require__(/*! ./help */ \"./src/modules/help.js\");\n\nvar _help2 = _interopRequireDefault(_help);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _window = window,\n    localStorage = _window.localStorage;\n\nvar KEY = 'VanillaTerm';\n\nexports.default = {\n  clear: function clear(terminal) {\n    return terminal.clear();\n  },\n\n  help: function help(terminal, _ref) {\n    var _ref2 = _slicedToArray(_ref, 1),\n        command = _ref2[0];\n\n    if (command) {\n      terminal.output('help: ' + (_help2.default[command] || 'no help topics match <u>' + command + '</u>'));\n    } else {\n      terminal.output('These shell commands are defined internally. Type <u>help</u> for see the list.');\n      terminal.output('Type <u>help name</u> to find out more about the function <u>name</u>.');\n      terminal.output(Object.keys(terminal.commands).join(', '));\n    }\n  },\n\n  version: function version(terminal) {\n    return terminal.output('Vanilla Terminal v' + _package2.default.version);\n  },\n\n  wipe: function wipe(terminal) {\n    terminal.prompt('Are you sure remove all your commands history? Y/N', function (value) {\n      if (value.trim().toUpperCase() === 'Y') {\n        localStorage.removeItem(KEY);\n        terminal.history = []; // eslint-disable-line\n        terminal.historyCursor = 0; // eslint-disable-line\n        terminal.output('History of commands wiped.');\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/commands.js?");

/***/ }),

/***/ "./src/modules/help.js":
/*!*****************************!*\
  !*** ./src/modules/help.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  clear: 'clear the terminal screen',\n  version: 'print the terminal version',\n  wipe: 'Remove all your history of command lines'\n};\n\n//# sourceURL=webpack:///./src/modules/help.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.markup = exports.COMMANDS = exports.cloneCommandNode = undefined;\n\nvar _cloneCommandNode = __webpack_require__(/*! ./cloneCommandNode */ \"./src/modules/cloneCommandNode.js\");\n\nvar _cloneCommandNode2 = _interopRequireDefault(_cloneCommandNode);\n\nvar _commands = __webpack_require__(/*! ./commands */ \"./src/modules/commands.js\");\n\nvar _commands2 = _interopRequireDefault(_commands);\n\nvar _markup = __webpack_require__(/*! ./markup */ \"./src/modules/markup.js\");\n\nvar _markup2 = _interopRequireDefault(_markup);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.cloneCommandNode = _cloneCommandNode2.default;\nexports.COMMANDS = _commands2.default;\nexports.markup = _markup2.default;\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/markup.js":
/*!*******************************!*\
  !*** ./src/modules/markup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (_ref) {\n  var _ref$shell = _ref.shell,\n      prompt = _ref$shell.prompt,\n      separator = _ref$shell.separator;\n  return \"\\n  <div class=\\\"container\\\">\\n    <output></output>\\n    <div class=\\\"command\\\">\\n      <div class=\\\"prompt\\\">\" + prompt + separator + \"</div>\\n      <input class=\\\"input\\\" spellcheck=\\\"false\\\" autofocus />\\n    </table>\\n  </div>\\n\";\n};\n\n//# sourceURL=webpack:///./src/modules/markup.js?");

/***/ }),

/***/ 0:
/*!*******************!*\
  !*** multi ./src ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src?");

/***/ })

/******/ });
});