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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bee_js__ = __webpack_require__(1);


class Game {
  constructor(bee) {
    this.bee = new __WEBPACK_IMPORTED_MODULE_0__bee_js__["a" /* default */](bee, 0, Game.DIM_Y/2, 100, 100, 3);
    this.enemies = [];
  }

  start(canvas, ctx) {
    // let that = this;

    // bee.fly();
    // setInterval(bee.fall(), 1000);
    // bee.draw();
    // ctx.drawImage(bee, 0, canvas.height/2, 90, 90);
    // let img = new Image();

    // this.bee.draw(ctx);
    // this.bee.fall(ctx);
    // img.onload = () => {
    //   this.animateBg(canvas, ctx, img);
    // };

    // img.src = 'images/cloudy-sky-2.jpg';

  }

  allObjects() {
    return [this.bee].concat(this.enemies);
  }

  moveObjects() {
    let allObjects = this.allObjects();
    allObjects.forEach( object => (
      object.move()
    ));
  }



  draw(ctx) {
    console.log(Game.DIM_Y);
    const bee = this.bee;
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    bee.draw(ctx);
  }

  step() {
    this.moveObjects();
  }


}

Game.DIM_X = 700;
Game.DIM_Y = 600;

/* harmony default export */ __webpack_exports__["a"] = Game;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Bee {
  constructor(bee, x, y, width, height, vel) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.bee = bee;
    this.vel = vel;
    // this.player = new Image();
    // this.player.src = './images/bee2.png';
  }

  draw(ctx) {
    // this.player.onload = () => {
      // ctx.rect(20, 20, 150, 100);
      // ctx.stroke();

      // console.log('draw');
      // console.log(this.bee);

      // ctx.clearRect(0, 0, this.width, this.height);
      ctx.drawImage(this.bee, this.x, this.y, this.width, this.height);

  }

  move() {
    // console.log('move');
    // console.log(this.vel);

    this.vel += 0.7;
    this.vel *= 0.9;
    this.y += this.vel;

    // console.log('vel');
    // console.log(this.vel);
    // console.log('x');
    // console.log(this.x);
    // console.log('y');
    // console.log(this.y);

    if (this.y > 500) {
      this.y = 500;
      this.vel = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.vel = 0;
    }

  }

  hop() {
    console.log('hop');
    console.log(this.y);
    this.y -= 20;
    console.log(this.y);
  }

  fall() {
    this.y +=5;
    console.log(this.y);
    console.log('height');
    if (this.y > 600) {
      this.y = 600;
      this.vel = 0;
    }
  }


}


Bee.GRAVITY = 1;
Bee.ANTI_GRAVITY = -7;
Bee.RADIUS = 10;

/* harmony default export */ __webpack_exports__["a"] = Bee;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__game_view_js__);


// import { start } from './background.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const bee = document.getElementById("bee");
  // canvasEl.width = 1000;
  // canvasEl.height = 800;


  const ctx = canvasEl.getContext("2d");

  const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](bee);
  const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view_js___default.a(game, ctx);
  gameView.start();

  // const game = new Game(bee);
  // game.start(canvasEl, ctx);
  // ctx.scale(1.10,1.10);
  // ctx.drawImage(bee, 10, 10, 80, 80);
  // ctx.fillRect(10, 10, 1000, 800);
  // ctx.fill('#808080');
});

document.addEventListener('keydown', (event) => {
  const bee = document.getElementById("bee");
  const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](bee);
  if (event.keyCode === 32) {
    game.bee.hop();
  }
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class GameView {
  constructor(game ,ctx){
    this.game = game;
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.img = new Image();
    this.img.src = './images/cloudy-sky-2.jpg';
  }

  start(){
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));

  }

  animate(time){
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  // bindKeyHandlers(){
  //   const bird = this.bird;
  //   assignKey("space", () => { bird.jump(); });
  // }

}

module.exports = GameView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map