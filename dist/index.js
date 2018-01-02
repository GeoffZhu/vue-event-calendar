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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = dateTimeFormatter;
/* harmony export (immutable) */ __webpack_exports__["a"] = isEqualDateStr;
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
function isEqualDateStr(dateStr1, dateStr2) {
  var dateArr1 = dateStr1.split('/');
  var dateArr2 = dateStr2.split('/');
  if (parseInt(dateArr1[0], 10) !== parseInt(dateArr2[0], 10)) {
    return false;
  }
  if (parseInt(dateArr1[1], 10) !== parseInt(dateArr2[1], 10)) {
    return false;
  }
  if (parseInt(dateArr1[2], 10) !== parseInt(dateArr2[2], 10)) {
    return false;
  }
  return true;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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
  },
  us: {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    format: 'MM/yyyy',
    fullFormat: 'MM/dd/yyyy',
    dayEventsTitle: 'All Events',
    notHaveEvents: 'Not Have Events'
  },
  es: {
    dayNames: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Todos los eventos',
    notHaveEvents: 'Nada'
  },
  'pt-br': {
    dayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Todos os eventos',
    notHaveEvents: 'Nenhum evento'
  },
  ja: {
    dayNames: ["日", "月", "火", "水", "木", "金", "土"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    format: 'yyyy/MM',
    fullFormat: 'yyyy/MM/dd',
    dayEventsTitle: '全てのイベント',
    notHaveEvents: 'イベントはありません'
  },
  ko: {
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    format: 'yyyy/MM',
    fullFormat: 'yyyy/MM/dd',
    dayEventsTitle: '모든 이벤트',
    notHaveEvents: '일정이 없습니다'
  },
  fr: {
    dayNames: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Tous les événements',
    notHaveEvents: 'Aucun événement'
  },
  it: {
    dayNames: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Tutti gli eventi',
    notHaveEvents: 'Nessun evento'
  },
  ru: {
    dayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    format: 'MM.yyyy',
    fullFormat: 'dd.MM.yyyy',
    dayEventsTitle: 'Все события',
    notHaveEvents: 'События отсутствуют'
  },
  sv: {
    dayNames: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
    monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Alla händelser',
    notHaveEvents: 'Inga händelser'
  },
  de: {
    dayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    format: 'MM/yyyy',
    fullFormat: 'dd.MM.yyyy',
    dayEventsTitle: 'Alle Veranstaltungen',
    notHaveEvents: 'Keine Veranstaltungen'
  },
  vi: {
    dayNames: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Tất cả sự kiện',
    notHaveEvents: 'Không có sự kiện nào'
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(0);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
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
    dateTimeFormatter: __WEBPACK_IMPORTED_MODULE_1__tools_js__["b" /* dateTimeFormatter */]
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'cal-events',
  data: function data() {
    return {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */]
    };
  },

  components: {
    'cal-event-item': __WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue___default.a
  },
  props: {
    title: String,
    dayEvents: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    dayEventsTitle: function dayEventsTitle() {
      if (this.title) return this.title;
      if (this.dayEvents.date !== 'all') {
        var tempDate = void 0;
        if (this.dayEvents.events.length !== 0) {
          tempDate = Date.parse(new Date(this.dayEvents.events[0].date));
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["b" /* dateTimeFormatter */])(tempDate, __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].fullFormat);
        } else {
          tempDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["b" /* dateTimeFormatter */])(Date.parse(new Date(this.dayEvents.date)), __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].fullFormat);
          return tempDate + ' ' + __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].notHaveEvents;
        }
      } else {
        return __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].dayEventsTitle;
      }
    },
    events: function events() {
      return this.dayEvents.events;
    },
    bgColor: function bgColor() {
      return { backgroundColor: this.color };
    }
  },
  methods: {
    dateTimeFormatter: __WEBPACK_IMPORTED_MODULE_1__tools_js__["b" /* dateTimeFormatter */]
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(0);
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
/* harmony default export */ __webpack_exports__["default"] = ({
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
    },
    selectedDay: {
      type: String,
      required: false
    }
  },
  computed: {
    dayList: function dayList() {
      var firstDay = new Date(this.calendar.params.curYear, this.calendar.params.curMonth, 1);
      var dayOfWeek = firstDay.getDay();
      // 根据当前日期计算偏移量 // Calculate the offset based on the current date
      if (this.calendar.options.weekStartOn > dayOfWeek) {
        dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn + 7;
      } else {
        dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn;
      }

      var startDate = new Date(firstDay);
      startDate.setDate(firstDay.getDate() - dayOfWeek);

      var item = void 0,
          status = void 0,
          tempArr = [],
          tempItem = void 0;
      for (var i = 0; i < 42; i++) {
        item = new Date(startDate);
        item.setDate(startDate.getDate() + i);

        if (this.calendar.params.curMonth === item.getMonth()) {
          status = 1;
        } else {
          status = 0;
        }
        tempItem = {
          date: item.getFullYear() + '/' + (item.getMonth() + 1) + '/' + item.getDate(),
          status: status,
          customClass: []
        };
        this.events.forEach(function (event) {
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* isEqualDateStr */])(event.date, tempItem.date)) {
            tempItem.title = event.title;
            tempItem.desc = event.desc || '';
            if (event.customClass) tempItem.customClass.push(event.customClass);
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
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["b" /* dateTimeFormatter */])(tempDate, this.i18n[this.calendar.options.locale].format);
    },
    customColor: function customColor() {
      return this.calendar.options.color;
    }
  },
  methods: {
    nextMonth: function nextMonth() {
      this.$EventCalendar.nextMonth();
      this.$emit('month-changed', this.curYearMonth);
    },
    preMonth: function preMonth() {
      this.$EventCalendar.preMonth();
      this.$emit('month-changed', this.curYearMonth);
    },
    handleChangeCurday: function handleChangeCurday(date) {
      if (date.status) {
        this.$emit('cur-day-changed', date.date);
      }
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_events_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_events_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_cal_events_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cal_panel_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cal_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_cal_panel_vue__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-event-calendar',
  components: {
    'cal-events': __WEBPACK_IMPORTED_MODULE_1__components_cal_events_vue___default.a,
    'cal-panel': __WEBPACK_IMPORTED_MODULE_2__components_cal_panel_vue___default.a
  },
  data: function data() {
    return {
      selectedDayEvents: {
        date: 'all',
        events: this.events || [] //default show all event
      }
    };
  },

  props: {
    title: String,
    events: {
      type: Array,
      required: true,
      default: [],
      validator: function validator(events) {
        var validate = true;
        events.forEach(function (event, index) {
          if (!event.date) {
            console.error('Vue-Event-Calendar-Error:' + 'Prop events Wrong at index ' + index);
            validate = false;
          }
        });
        return validate;
      }
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
            curEventsDate: 'all'
          }
        };
      }
    },
    calendarParams: function calendarParams() {
      var dateObj = new Date();
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA.params;
      } else {
        return {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: 'all'
        };
      }
    }
  },
  created: function created() {
    if (this.calendarParams.curEventsDate !== 'all') {
      this.handleChangeCurDay(this.calendarParams.curEventsDate);
    }
  },

  methods: {
    handleChangeCurDay: function handleChangeCurDay(date) {
      var events = this.events.filter(function (event) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tools_js__["a" /* isEqualDateStr */])(event.date, date);
      });
      if (events.length > 0) {
        this.selectedDayEvents = {
          date: date,
          events: events
        };
      }
      this.$emit('day-changed', {
        date: date,
        events: events
      });
    },
    handleMonthChanged: function handleMonthChanged(yearMonth) {
      this.$emit('month-changed', yearMonth);
    }
  },
  watch: {
    calendarParams: function calendarParams() {
      var _this = this;

      if (this.calendarParams.curEventsDate !== 'all') {
        var events = this.events.filter(function (event) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tools_js__["a" /* isEqualDateStr */])(event.date, _this.calendarParams.curEventsDate);
        });
        this.selectedDayEvents = {
          date: this.calendarParams.curEventsDate,
          events: events
        };
      } else {
        this.selectedDayEvents = {
          date: 'all',
          events: this.events
        };
      }
    },
    events: function events() {
      this.selectedDayEvents = {
        date: 'all',
        events: this.events || []
      };
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isVueNext = Vue.version.split('.')[0] === '2';
  var inBrowser = typeof window !== 'undefined';
  var dateObj = new Date();
  var DEFAULT_OPTION = {
    locale: 'zh', // en
    color: ' #f29543',
    className: 'selected-day',
    weekStartOn: 0 // 0 mean sunday
  };
  var Calendar = {
    $vm: null,
    bindEventBus: function bindEventBus(vm) {
      this.$vm = vm;
    },
    toDate: function toDate(dateString) {
      if (dateString === 'all') {
        this.$vm.CALENDAR_EVENTS_DATA.params = {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: 'all'
        };
      } else {
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
      }
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

  Vue.prototype.$EventCalendar = Calendar;
}

/* harmony default export */ __webpack_exports__["default"] = (install);

if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
  module.exports.install = install;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.index + 1) + ". " + _vm._s(_vm.event.title))]), _vm._v(" "), _c('p', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.dateTimeFormatter(Date.parse(new Date(_vm.event.date)), _vm.i18n[_vm.locale].fullFormat)))]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.event.desc))])])
},staticRenderFns: []}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "events-wrapper",
    style: (_vm.bgColor)
  }, [_c('h2', {
    staticClass: "date"
  }, [_vm._v("\n    " + _vm._s(_vm.dayEventsTitle) + "\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "cal-events"
  }, [_vm._t("default", _vm._l((_vm.events), function(event, index) {
    return _c('div', {
      staticClass: "event-item"
    }, [_c('cal-event-item', {
      attrs: {
        "event": event,
        "index": index,
        "locale": _vm.locale
      }
    })], 1)
  }))], 2)])
},staticRenderFns: []}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "__vev_calendar-wrapper"
  }, [_c('cal-panel', {
    attrs: {
      "events": _vm.events,
      "calendar": _vm.calendarOptions,
      "selectedDay": _vm.selectedDayEvents.date
    },
    on: {
      "cur-day-changed": _vm.handleChangeCurDay,
      "month-changed": _vm.handleMonthChanged
    }
  }), _vm._v(" "), _c('cal-events', {
    attrs: {
      "title": _vm.title,
      "dayEvents": _vm.selectedDayEvents,
      "locale": _vm.calendarOptions.options.locale,
      "color": _vm.calendarOptions.options.color
    }
  }, [_vm._t("default", null, {
    showEvents: _vm.selectedDayEvents.events
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cal-wrapper"
  }, [_c('div', {
    staticClass: "cal-header"
  }, [_c('div', {
    staticClass: "l",
    on: {
      "click": _vm.preMonth
    }
  }, [_c('div', {
    staticClass: "arrow-left icon"
  }, [_vm._v(" ")])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.curYearMonth))]), _vm._v(" "), _c('div', {
    staticClass: "r",
    on: {
      "click": _vm.nextMonth
    }
  }, [_c('div', {
    staticClass: "arrow-right icon"
  }, [_vm._v(" ")])])]), _vm._v(" "), _c('div', {
    staticClass: "cal-body"
  }, [_c('div', {
    staticClass: "weeks"
  }, _vm._l((_vm.i18n[_vm.calendar.options.locale].dayNames), function(dayName, dayIndex) {
    return _c('span', {
      key: dayIndex,
      staticClass: "item"
    }, [_vm._v("\n        " + _vm._s(_vm.i18n[_vm.calendar.options.locale].dayNames[(dayIndex + _vm.calendar.options.weekStartOn) % 7]) + "\n      ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "dates"
  }, _vm._l((_vm.dayList), function(date) {
    return _c('div', {
      key: date.date,
      staticClass: "item",
      class: [( _obj = {
        today: date.status ? (_vm.today == date.date) : false,
        event: date.status ? (date.title != undefined) : false
      }, _obj[_vm.calendar.options.className] = (date.date == _vm.selectedDay), _obj ) ].concat( date.customClass)
    }, [_c('p', {
      staticClass: "date-num",
      style: ({
        color: date.title != undefined ? ((date.date == _vm.selectedDay) ? '#fff' : _vm.customColor) : 'inherit'
      }),
      on: {
        "click": function($event) {
          _vm.handleChangeCurday(date)
        }
      }
    }, [_vm._v("\n          " + _vm._s(date.status ? date.date.split('/')[2] : ' '))]), _vm._v(" "), (date.status ? (_vm.today == date.date) : false) ? _c('span', {
      staticClass: "is-today",
      style: ({
        backgroundColor: _vm.customColor
      })
    }) : _vm._e(), _vm._v(" "), (date.status ? (date.title != undefined) : false) ? _c('span', {
      staticClass: "is-event",
      style: ({
        borderColor: _vm.customColor,
        backgroundColor: (date.date == _vm.selectedDay) ? _vm.customColor : 'inherit'
      })
    }) : _vm._e()])
    var _obj;
  }))])])
},staticRenderFns: []}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map