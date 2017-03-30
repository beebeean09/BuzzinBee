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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__net_js__ = __webpack_require__(8);



class Game {
  constructor(bee, net, canvasEl) {
    this.bee = new __WEBPACK_IMPORTED_MODULE_0__bee_js__["a" /* default */](bee, 100, Game.DIM_Y/2, 100, 100, 5);
    this.canvas = canvasEl;
    // this.net = net;
    this.net = new __WEBPACK_IMPORTED_MODULE_1__net_js__["a" /* default */](net, canvasEl);
    this.nets = [];

    // this.addNets();
  }

  animateBg(canvas, ctx, img) {
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

      x = x < 0 ? canvas.width : x - speed;

    }, 1000/30);

  }

  startBg(canvas, ctx) {

    let img = new Image();
    img.onload = () => {
      this.animateBg(canvas, ctx, img);
    };

    img.src = 'images/cloudy-sky-2.jpg';
    console.log(img);
  }


  addNets() {
    for (let i = 0; i < 5; i++) {
      this.nets.push(new __WEBPACK_IMPORTED_MODULE_1__net_js__["a" /* default */](this.net, this.canvas));
    }
    console.log(this.nets);
  }

  moveBee() {
    return this.bee.move();
  }

  allObjects() {
    return [this.bee].concat(this.nets);
  }

  moveObjects() {
    this.moveBee();
    // let allObjects = this.allObjects();
    // allObjects.forEach( object => (
    //   object.move()
    // ));
  }

  draw(ctx) {
    console.log(Game.DIM_Y);
    const bee = this.bee;
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    const net = this.net;

    // TRYING TO ADD ALL OBJECTS TO DRAW
    // let allObjects = this.allObjects();
    // allObjects.forEach( object => (
    //   object.draw(ctx)
    // ));


    bee.draw(ctx);
    // for(let i = 1; i > 0; i--) {
    //   const net = new Net(this.net, this.canvas);
    //
    //   console.log('net');
    // console.log(ctx);
    // setInterval(() => {
    //
    //   console.log(ctx);
    //   net.draw(ctx);
    // }, 1000);
    net.draw(ctx);

    // }
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

    // this.vel += 0.5;
    // this.vel *= 1.0;
    // this.y += this.vel;

    this.vel += 0.8;
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
    // if (this.y < 500) {
    //   this.vel += -20;
    // } else {
      // this.vel += -9;

      this.vel -= 10.25;
      // this.vel *= 0.9;
    // }

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flying_objects_js__ = __webpack_require__(6);



// import { start } from './background.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const bee = document.getElementById("bee");
  const net = document.getElementById("net");
  // canvasEl.width = 1000;
  // canvasEl.height = 800;


  const ctx = canvasEl.getContext("2d");
  const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](bee, net, canvasEl);
  // game.startBg(canvasEl, ctx);
  const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view_js__["a" /* default */](game, ctx, canvasEl);
  gameView.start();

  // const flying = new FlyingObjects( 10, 10, 5);
  // flying.randomPosition(0, 500);
  // const game = new Game(bee);
  // game.start(canvasEl, ctx);
  // ctx.scale(1.10,1.10);
  // ctx.drawImage(bee, 10, 10, 80, 80);
  // ctx.fillRect(10, 10, 1000, 800);
  // ctx.fill('#808080');
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import { startBg } from './background.js';

class GameView {
  constructor(game , ctx, canvas ){
    this.canvas = canvas;
    this.game = game;
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.img = new Image();
    this.img.src = './images/cloudy-sky-2.jpg';
  }

  start(){
    // this.game.startBg(this.canvas, this.ctx);
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time){
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  bindKeyHandlers(){
    const bird = this.bird;
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 32) {
        // console.log('SPACE');
        this.bee.hop();
      }
    });

  }

}

/* harmony default export */ __webpack_exports__["a"] = GameView;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class FlyingObjects {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.vel = options.vel;
  }

  // randomPosition(0, 500)
  // randomPosition(min, max){
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

}

/* unused harmony default export */ var _unused_webpack_default_export = FlyingObjects;


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flying_objects_js__ = __webpack_require__(6);



class Net {
  constructor(net, canvas) {
    this.x = 600 ;
    this.net = net;
    this.y = this.randomPosition(0, 550);
    this.canvas = canvas;
  }

  draw(ctx) {
    // setInterval(()=> {
      ctx.drawImage(this.net, this.x , this.y, 80, 120);
      if (this.x < 0) {
        this.x = this.canvas.width;
        this.y = this.randomPosition(0, 550);
      } else {
        this.x -= 4;
      }
      // this.x = this.x < 0 ? this.canvas.width : this.x - 4;
      // this.y = this.x < 0 ? this.randomPosition(0, 550) : this.y;
      // log
    // }, 1000/60);
    // ctx.drawImage(this.net, this.x , this.y, 80, 120);

  }

  randomPosition(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}

/* harmony default export */ __webpack_exports__["a"] = Net;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map