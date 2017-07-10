/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imgspace__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mathStuff__ = __webpack_require__(7);
//jshint esversion:6
var messages = __webpack_require__(1);






var newMessage = function newMessage() {
  return '<p>' + messages.message + " " + messages.mes + '</p>';
};
var newButton = function newButton() {
  return __WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */].button;
};
var math = function math() {
  return __WEBPACK_IMPORTED_MODULE_3__mathStuff__["a" /* add */](3, 3);
};
var newImage = function newImage() {
  return __WEBPACK_IMPORTED_MODULE_1__image__["a" /* default */] + __WEBPACK_IMPORTED_MODULE_2__imgspace__["a" /* default */];
};

var app = document.getElementById('app');
app.innerHTML = newButton() + newMessage() + math() + newImage();

__WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */].attachEl();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  message: 'Webpack is awesome, awesome!',
  mes: 'Is so cool!'
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//jshint esversion:6

var Button = {
  button: '<button id="myBtn">Press me</button>',
  attachEl: function attachEl() {
    document.getElementById('myBtn').addEventListener('click', function () {
      console.log("It's working!");
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//jshint esversion:6
var kitten = __webpack_require__(4);

var Image = '<img src=' + kitten + '>';
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/ea29d6f8cc8f.[text]";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//jshint esversion:6
var space = __webpack_require__(6);

var Image = '<img src=' + space + '>';
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/1772471b062e.[text]";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* unused harmony export substract */
/* unused harmony export multiply */
//jshint esversion:6
function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map