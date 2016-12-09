(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueEventCalendar"] = factory();
	else
		root["VueEventCalendar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  en: {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'All Events',
    notHaveEvents: 'Not Have Events'
  },
  zh: {
    dayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    format: 'yyyy年MM月',
    fullFormat: 'yyyy年MM月dd日',
    dayEventsTitle: '全部事件',
    notHaveEvents: '没有事件'
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = dateTimeFormatter;
function dateTimeFormatter(date, format) {
    // 时间格式化辅助函数 date:毫秒数 format:'yyyy-MM-dd hh:mm:ss'
    if (!date || date == "") {
        return "";
    }

    if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        if (mts && mts.length >= 3) {
            date = parseInt(mts[2]);
        }
    }

    date = new Date(date);
    if (!date || date.toUTCString() == "Invalid Date") {
        return "";
    }

    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };

    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });

    return format;
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(10)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(7)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "@media screen and (min-width:768px){.__vev_calendar-wrapper{max-width:1200px;margin:0 auto}.__vev_calendar-wrapper .cal-wrapper{width:50%;padding:100px 50px}.__vev_calendar-wrapper .cal-wrapper .date-num{line-height:50px}.__vev_calendar-wrapper .events-wrapper{width:50%;background-color:#f29543;color:#fff;padding:40px 50px;position:absolute;left:50%;top:0;bottom:0}}@media screen and (max-width:768px){.__vev_calendar-wrapper .cal-wrapper{width:100%;padding:10px 5px}.__vev_calendar-wrapper .cal-wrapper .date-num{line-height:42px}.__vev_calendar-wrapper .events-wrapper{width:100%;margin-top:10px;padding:10px}}.__vev_calendar-wrapper{position:relative;overflow:hidden;width:100%}.__vev_calendar-wrapper *{box-sizing:border-box}.__vev_calendar-wrapper .cal-wrapper .cal-header{position:relative;width:100%;background-color:#fff;font-weight:500;overflow:hidden;padding-bottom:10px}.__vev_calendar-wrapper .cal-wrapper .cal-header>div{float:left;line-height:20px;padding:15px}.__vev_calendar-wrapper .cal-wrapper .cal-header .title{width:60%;text-align:center}.__vev_calendar-wrapper .cal-wrapper .cal-header .l{text-align:left;width:20%;cursor:pointer;user-select:none}.__vev_calendar-wrapper .cal-wrapper .cal-header .r{text-align:right;width:20%;cursor:pointer;user-select:none}.__vev_calendar-wrapper .cal-wrapper .cal-body{width:100%}.__vev_calendar-wrapper .cal-wrapper .cal-body .weeks{width:100%;overflow:hidden;text-align:center;font-size:1rem}.__vev_calendar-wrapper .cal-wrapper .cal-body .weeks .item{line-height:50px;float:left;width:14.285%}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates{width:100%;overflow:hidden;text-align:center;font-size:1rem}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item{position:relative;float:left;display:block;width:14.285%;cursor:default}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .date-num{font-size:1rem}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.event{color:#f29543;cursor:pointer}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.event:after{content:'';border:1px solid #f29543;background-color:#fff;border-radius:50%;width:36px;height:36px;position:absolute;left:50%;top:50%;z-index:-2;margin-left:-18px;margin-top:-19px}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.today{color:#fff}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.today:before{content:'';border:1px solid #f29543;background-color:#f29543;border-radius:50%;width:36px;height:36px;position:absolute;left:50%;top:50%;z-index:-1;margin-left:-18px;margin-top:-19px}.__vev_calendar-wrapper .events-wrapper{border-radius:10px}.__vev_calendar-wrapper .events-wrapper .cal-events{height:100%}.__vev_calendar-wrapper .events-wrapper .date{width:40%;min-width:200px;text-align:center;color:#fff;background-color:rgba(0,0,0,.2);border-radius:20px;margin:0 auto;font-size:22px}.__vev_calendar-wrapper .events-wrapper .event-item{padding:5px 20px;margin-top:15px;box-shadow:0 3px 11px 2px rgba(0,0,0,.1);background-color:#fff;border-radius:5px;color:#323232;position:relative}.__vev_calendar-wrapper .events-wrapper .event-item .title{height:40px;line-height:40px;color:#323232;font-size:16px;border-bottom:1px solid #f2f2f2}.__vev_calendar-wrapper .events-wrapper .event-item .time{position:absolute;right:30px;top:17px;color:#9b9b9b;font-size:14px}.__vev_calendar-wrapper .events-wrapper .event-item .desc{color:#9b9b9b;font-size:14px;padding:7px 0}.arrow-left.icon{color:#000;position:absolute;left:6%;margin-top:10px}.arrow-left.icon:before{content:'';position:absolute;left:1px;top:-5px;width:10px;height:10px;border-top:1px solid currentColor;border-right:1px solid currentColor;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.arrow-right.icon{color:#000;position:absolute;right:6%;margin-top:10px}.arrow-right.icon:before{content:'';position:absolute;right:1px;top:-5px;width:10px;height:10px;border-top:1px solid currentColor;border-right:1px solid currentColor;-webkit-transform:rotate(45deg);transform:rotate(45deg)}p{margin:0;padding:0}", ""]);

// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 6 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/.0.25.0@css-loader/index.js!./../node_modules/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-15dac72a!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vue-event-calendar.vue", function() {
			var newContent = require("!!./../node_modules/.0.25.0@css-loader/index.js!./../node_modules/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-15dac72a!./../node_modules/.2.2.3@less-loader/index.js!./../node_modules/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vue-event-calendar.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(13)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "wrapper"
  }, [_h('h3', {
    staticClass: "title"
  }, [_vm._s(_vm.index + 1) + ". " + _vm._s(_vm.event.title)]), " ", _h('p', {
    staticClass: "time"
  }, [_vm._s(_vm.dateTimeFormatter(Date.parse(new Date(_vm.event.date)), _vm.i18n[_vm.locale].fullFormat))]), " ", _h('p', {
    staticClass: "desc"
  }, [_vm._s(_vm.event.desc)])])
},staticRenderFns: []}

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "__vev_calendar-wrapper"
  }, [_h('cal-panel', {
    attrs: {
      "events": _vm.events,
      "calendar": _vm.calendarOptions
    },
    on: {
      "cur-day-changed": _vm.handleChangeCurDay
    }
  }), " ", _h('cal-events', {
    attrs: {
      "dayEvents": _vm.selectdDayEvents,
      "locale": _vm.calendarOptions.options.locale
    }
  }, [_vm._t("default", null, {
    showEvents: _vm.selectdDayEvents.events
  })])])
},staticRenderFns: []}

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "events-wrapper"
  }, [_h('h2', {
    staticClass: "date"
  }, ["\n    " + _vm._s(_vm.dayEventsTitle) + "\n  "]), " ", _h('div', {
    staticClass: "cal-events"
  }, [_vm._t("default", [_vm._l((_vm.dayEvents.events), function(event, index) {
    return _h('div', {
      staticClass: "event-item"
    }, [_h('cal-event-item', {
      attrs: {
        "event": event,
        "index": index,
        "locale": _vm.locale
      }
    })])
  })])])])
},staticRenderFns: []}

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "cal-wrapper"
  }, [_h('div', {
    staticClass: "cal-header"
  }, [_h('div', {
    staticClass: "l",
    on: {
      "click": _vm.preMonth
    }
  }, [_h('div', {
    staticClass: "arrow-left icon"
  }, [" "])]), " ", _h('div', {
    staticClass: "title"
  }, [_vm._s(_vm.curYearMonth)]), " ", _h('div', {
    staticClass: "r",
    on: {
      "click": _vm.nextMonth
    }
  }, [_h('div', {
    staticClass: "arrow-right icon"
  }, [" "])])]), " ", _h('div', {
    staticClass: "cal-body"
  }, [_h('div', {
    staticClass: "weeks"
  }, [_vm._l((_vm.i18n[_vm.calendar.options.locale].dayNames), function(dayName) {
    return _h('span', {
      staticClass: "item"
    }, [_vm._s(dayName)])
  })]), " ", _h('div', {
    staticClass: "dates"
  }, [_vm._l((_vm.dayList), function(date) {
    return _h('div', {
      staticClass: "item",
      class: {
        today: date.status ? (_vm.today == date.date) : false,
          event: date.status ? (date.title != undefined) : false
      }
    }, [_h('p', {
      staticClass: "date-num",
      on: {
        "click": function($event) {
          _vm.handleChangeCurday(date)
        }
      }
    }, [_vm._s(date.status ? date.date.split('/')[2] : ' ')])])
  })])])])
},staticRenderFns: []}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(1);
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  data: function data() {
    return {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */]
    };
  },

  props: {
    event: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    locale: {
      type: String,
      required: true
    }
  },
  methods: {
    dateTimeFormatter: __WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */]
  }
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'cal-events',
  data: function data() {
    return {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */]
    };
  },

  props: {
    dayEvents: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      required: true
    }
  },
  computed: {
    dayEventsTitle: function dayEventsTitle() {
      if (this.dayEvents.date !== 'all') {
        if (this.dayEvents.events.length !== 0) {
          var tempDate = Date.parse(new Date(this.dayEvents.events[0].date));
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */])(tempDate, __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].fullFormat);
        } else {
          return __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].notHaveEvents;
        }
      } else {
        return __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].dayEventsTitle;
      }
    },
    events: function events() {
      return dayEvents.events;
    }
  },
  created: function created() {
    console.log(this.$slots);
  },

  methods: {
    dateTimeFormatter: __WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */]
  }
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var inBrowser = typeof window !== 'undefined';
/* harmony default export */ exports["default"] = {
  name: 'cal-panel',
  data: function data() {
    return {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */]
    };
  },

  props: {
    events: {
      type: Array,
      required: true
    },
    calendar: {
      type: Object,
      required: true
    }
  },
  computed: {
    dayList: function dayList() {
      var firstDay = new Date(this.calendar.params.curYear + '/' + (this.calendar.params.curMonth + 1) + '/01');
      var startTimestamp = firstDay - 1000 * 60 * 60 * 24 * firstDay.getDay();
      var item = void 0,
          status = void 0,
          tempArr = [],
          tempItem = void 0;
      for (var i = 0; i < 42; i++) {
        item = new Date(startTimestamp + i * 1000 * 60 * 60 * 24);
        if (this.calendar.params.curMonth === item.getMonth()) {
          status = 1;
        } else {
          status = 0;
        }
        tempItem = {
          date: item.getFullYear() + '/' + (item.getMonth() + 1) + '/' + item.getDate(),
          status: status
        };
        this.events.forEach(function (event) {
          if (event.date === tempItem.date) {
            tempItem.title = event.title;
            tempItem.desc = event.desc || '';
          }
        });
        tempArr.push(tempItem);
      }
      return tempArr;
    },
    today: function today() {
      var dateObj = new Date();
      return dateObj.getFullYear() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getDate();
    },
    curYearMonth: function curYearMonth() {
      var tempDate = Date.parse(new Date(this.calendar.params.curYear + '/' + (this.calendar.params.curMonth + 1) + '/01'));
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */])(tempDate, this.i18n[this.calendar.options.locale].format);
    }
  },
  methods: {
    nextMonth: function nextMonth() {
      this.$Calendar.nextMonth();
    },
    preMonth: function preMonth() {
      this.$Calendar.preMonth();
    },
    handleChangeCurday: function handleChangeCurday(date) {
      if (date.title != undefined) {
        this.$emit('cur-day-changed', date.date);
      }
    }
  }
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var inBrowser = typeof window !== 'undefined';
/* harmony default export */ exports["default"] = {
  name: 'vue-event-calendar',
  components: {
    'cal-events': __WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue___default.a,
    'cal-panel': __WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue___default.a
  },
  data: function data() {
    return {
      selectdDayEvents: {
        date: 'all',
        events: this.events || [] //default show all event
      }
    };
  },

  props: {
    events: {
      type: Array,
      required: true
    }
  },
  computed: {
    calendarOptions: function calendarOptions() {
      var dateObj = new Date();
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA;
      } else {
        return {
          options: {
            locale: 'en', //zh
            color: ' #f29543'
          },
          params: {
            curYear: dateObj.getFullYear(),
            curMonth: dateObj.getMonth(),
            curDate: dateObj.getDate(),
            curEvents: {
              title: 'all'
            }
          },
          events: []
        };
      }
    }
  },
  created: function created() {
    if (this.calendarOptions.params.curEventsDate !== 'all') {
      this.handleChangeCurDay(this.calendarOptions.params.curEventsDate);
    }
  },

  methods: {
    handleChangeCurDay: function handleChangeCurDay(date) {
      this.selectdDayEvents = {
        date: date,
        events: this.events.filter(function (event) {
          if (event.date === date) {
            return true;
          } else {
            return false;
          }
        })
      };
    }
  }
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_event_item_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_event_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_cal_event_item_vue__);
/* harmony export (binding) */ __webpack_require__.d(exports, "install", function() { return install; });
'use strict';




function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var isVueNext = Vue.version.split('.')[0] === '2';
    var inBrowser = typeof window !== 'undefined';

    var DEFAULT_OPTION = {
        locale: 'zh', //en
        color: ' #f29543'
    };
    var Calendar = {
        $vm: null,
        bindEventBus: function bindEventBus(vm) {
            this.$vm = vm;
        },
        toDate: function toDate(dateString) {
            var dateArr = dateString.split('/');
            dateArr = dateArr.map(function (item) {
                return parseInt(item, 10);
            });
            this.$vm.CALENDAR_EVENTS_DATA.params = {
                curYear: dateArr[0],
                curMonth: dateArr[1] - 1,
                curDate: dateArr[2],
                curEventsDate: dateString
            };
        },
        nextMonth: function nextMonth() {
            if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth < 11) {
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth++;
            } else {
                this.$vm.CALENDAR_EVENTS_DATA.params.curYear++;
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 0;
            }
        },
        preMonth: function preMonth() {
            if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth > 0) {
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth--;
            } else {
                this.$vm.CALENDAR_EVENTS_DATA.params.curYear--;
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 11;
            }
        }
    };

    var calendarOptions = Object.assign(DEFAULT_OPTION, options);
    var dateObj = new Date();
    var VueCalendarBarEventBus = new Vue({
        data: {
            CALENDAR_EVENTS_DATA: {
                options: calendarOptions,
                params: {
                    curYear: dateObj.getFullYear(),
                    curMonth: dateObj.getMonth(),
                    curDate: dateObj.getDate(),
                    curEventsDate: 'all'
                }
            }
        }
    });

    if (inBrowser) {
        window.VueCalendarBarEventBus = VueCalendarBarEventBus;
        Calendar.bindEventBus(VueCalendarBarEventBus);
    }

    Vue.component('vue-event-calendar', __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue___default.a);
    Vue.component('cal-event-item', __WEBPACK_IMPORTED_MODULE_1__components_cal_event_item_vue___default.a);

    Vue.prototype.$Calendar = Calendar;
}
/* harmony default export */ exports["default"] = {
    install: install
};
// dist can use


/***/ }
/******/ ]);
});
//# sourceMappingURL=index.js.map