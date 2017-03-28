/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background_js__ = __webpack_require__(2);
// const Game = require("./game");


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  // canvasEl.width = 1000;
  // canvasEl.height = 800;


  const ctx = canvasEl.getContext("2d");
  ctx.scale(1.15,1.15);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__background_js__["a" /* start */])(canvasEl, ctx);
  // ctx.fillRect(10, 10, 1000, 800);
  // ctx.fill('#808080');
  // const game = new Game();
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const animateBg = function (canvas, ctx, img) {
  let x = canvas.width;
  let speed = 2;
  let h = canvas.height;
  let w = canvas.width;

  setInterval(function() {
    // ctx.drawImage(img, 0, 0, w, h, 0, y, w, h);
    // ctx.drawImage(img, 0, h - y, w, h, 0, 0, w, h);
    //
    // ctx.drawImage(img, w/2, h/2, w, h);
    // ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);

    ctx.drawImage(img, 0, 0, w, h, x, 0, w, h);
    ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);

    // ctx.drawImage(img, w/2, h/2, w, h );
    // ctx.drawImage(img, w, 0, w, h);

    x = x < 0 ? canvas.width : x - speed;

  }, 1000/30);


};

const start = function(canvas, ctx) {
  let img = new Image();
  img.onload = function() {
    animateBg(canvas, ctx, img);
  };

  img.src = 'images/cloudy-sky-2.jpg';
};
/* harmony export (immutable) */ __webpack_exports__["a"] = start;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map