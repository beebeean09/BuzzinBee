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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class GameView {
  constructor(game , ctx, background, canvas ){
    this.canvas = canvas;
    this.game = game;
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.background = background;
    this.img = new Image();
    this.img.src = './images/cloudy-sky-2.jpg';
  }

  gameMenu() {
    $('.start-control').hide();
    $('.restart-button').show();

    this.start();
  }

  gameRestart() {
    $('.restart-control').show();

  }

  start(){
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time){
    const timeDelta = time - this.lastTime;

    if (GameView.gameOver) {
      this.background.stopBg(this.ctx);
      this.gameRestart();
      return;
    } else {
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  bindKeyHandlers(){
    window.addEventListener("keydown", (event) => {
      event.preventDefault();
      if (event.keyCode === 32) {
        this.bee.hop();
      }
    });

  }

}

GameView.gameOver = false;

/* harmony default export */ __webpack_exports__["a"] = GameView;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Honey {
  constructor(honey, canvas) {
    this.x = canvas.width ;
    this.honey = honey;
    this.y = this.randomPosition(0, 300);
    this.canvas = canvas;
    this.radius = 15;
  }

  draw(ctx, collide = false) {
    ctx.drawImage(this.honey, this.x, this.y, 70, 85);

    if (this.x < 0 || collide === true) {
      this.x = this.canvas.width + 100;
      this.y = this.randomPosition(0, 300);
    } else {
      this.x -= 7;
    }
  }

  randomPosition(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  isCollidedWith(otherObject) {
    let pos = [this.x, this.y];
    let otherObjPos = [otherObject.x, otherObject.y];
    const objDist = this.distance(pos, otherObjPos);
    return objDist < (this.radius + otherObject.radius);
  }

  collideWith() {

  }

  distance(pos1, pos2) {
    let sum = Math.pow((pos2[0] - pos1[0]), 2) + Math.pow((pos2[1] - pos1[1]), 2);
    return Math.sqrt(sum);
  }
}

/* harmony default export */ __webpack_exports__["a"] = Honey;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Net {
  constructor(net, canvas) {

    this.x = canvas.width ;
    this.net = net;
    this.y = this.randomPosition(0, 325);
    this.radius = 30;
    this.canvas = canvas;
    this.render = false;
  }

  draw(ctx, speed) {
    ctx.drawImage(this.net, this.x , this.y, 60, 90);
    if (this.x < 0) {
      this.x = this.canvas.width;
      this.y = this.randomPosition(0, 325);
    } else {
      this.x -= speed;
    }
  }

  randomPosition(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  isCollidedWith(otherObject) {
    let pos = [this.x, this.y];
    let otherObjPos = [otherObject.x, otherObject.y];
    const objDist = this.distance(pos, otherObjPos);
    return objDist < (this.radius + otherObject.radius);
  }

  collideWith() {

  }

  distance(pos1, pos2) {
    let sum = Math.pow((pos2[0] - pos1[0]), 2) + Math.pow((pos2[1] - pos1[1]), 2);
    return Math.sqrt(sum);
  }

}

/* harmony default export */ __webpack_exports__["a"] = Net;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  animateBg(canvas, ctx, img) {
    let x = canvas.width;
    let speed = 2;
    let h = canvas.height;
    let w = canvas.width;

    setInterval(function() {
      ctx.drawImage(img, 0, 0, w, h, x, 0, w, h);
      ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);

      x = x < 0 ? canvas.width : x - speed;

    }, 1000/50);

  }

  startBg(canvas, ctx) {

    let img = new Image();
    img.onload = () => {
      this.animateBg(canvas, ctx, img);
    };

    img.src = './images/cloudy-sky-2.jpg';
  }

  stopBg(ctx) {
    let img = new Image();
    img.src = './images/cloudy-sky-2.jpg';

    ctx.drawImage(img, 0,0, 700, 390);
    ctx.font = "65px Permanent Marker";
    ctx.color = "yello";
    ctx.fillText("Game Over", 180, 190);
  }
}




/* harmony default export */ __webpack_exports__["a"] = Background;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bee_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__net_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__honey_js__ = __webpack_require__(1);




class Game {
  constructor(bee, net, honey, canvasEl) {
    this.bee = new __WEBPACK_IMPORTED_MODULE_0__bee_js__["a" /* default */](bee, 80, canvasEl.height/2, 75, 75, 2, this);
    this.honey = new __WEBPACK_IMPORTED_MODULE_2__honey_js__["a" /* default */](honey, canvasEl);
    this.net = net;
    this.canvas = canvasEl;
    this.honeyCollide = false;
    this.nets = [];
    this.addNets();
    this.score = 0;
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
  }

  addNets() {
    setTimeout(() => this.nets.push(new __WEBPACK_IMPORTED_MODULE_1__net_js__["a" /* default */](this.net, this.canvas)), 3000);
    setTimeout(() => this.nets.push(new __WEBPACK_IMPORTED_MODULE_1__net_js__["a" /* default */](this.net, this.canvas)), 7000);
    setTimeout(() => this.nets.push(new __WEBPACK_IMPORTED_MODULE_1__net_js__["a" /* default */](this.net, this.canvas)), 13000);
  }

  drawNets(ctx) {
    let speeds = [5,7,10];
    this.nets.forEach((net, i) => net.draw(ctx, speeds[i]));
  }

  moveBee() {
    this.bee.move();
  }

  allObjects() {
    return [this.bee].concat(this.nets, this.honey);
  }

  draw(ctx) {
    const bee = this.bee;
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    const honey = this.honey;
    const canvas = this.canvas;
    const honeyCollide = this.honeyCollide;

    bee.draw(ctx);
    this.drawNets(ctx);
    honey.draw(ctx, honeyCollide);
    this.honeyCollide = false;
  }

  addScoreboard() {
    document.getElementById('score').innerHTML = this.score;
  }

  step() {
    this.moveBee();
    this.checkCollisions();
    this.addScoreboard();
  }

  checkCollisions(){
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        if (i !== j){
          let obj1 = allObjects[i];
          let obj2 = allObjects[j];
          if (obj1.isCollidedWith(obj2)) {
            const collision = obj1.collideWith(obj2);
            if (collision) return;
          }
        }
      }
    }
  }
  //
  collide(object) {
    if (object instanceof __WEBPACK_IMPORTED_MODULE_1__net_js__["a" /* default */]) {
      // this.game.gameOver();
      // this.nets.splice(this.enemies.indexOf(object), 1);
    } else if (object instanceof __WEBPACK_IMPORTED_MODULE_2__honey_js__["a" /* default */]) {
      this.score += 50;
    }
  }

}

Game.DIM_X = 700;
Game.DIM_Y = 600;

/* harmony default export */ __webpack_exports__["a"] = Game;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__net_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__honey_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_view_js__ = __webpack_require__(0);




class Bee {
  constructor(bee, x, y, width, height, vel, game) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.bee = bee;
    this.vel = vel;
    this.radius = 34;
    this.game = game;
  }

  draw(ctx) {
      ctx.drawImage(this.bee, this.x, this.y, this.width, this.height);

  }

  move() {
    this.vel += 0.5;
    this.vel *= 0.9;
    this.y += this.vel;

    if (this.y > 305) {
      this.y = 305;
      this.vel = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.vel = 0;
    }

  }

  hop() {
    // if (this.y < 500) {
    //   this.vel += -20;
    // } else {
      // this.vel += -9;

      this.vel -= 20;
      this.vel *= 0.5;
    // }
  }

  died() {
    __WEBPACK_IMPORTED_MODULE_2__game_view_js__["a" /* default */].gameOver = true;
  }

  collideWith(otherObject) {
    if (otherObject instanceof __WEBPACK_IMPORTED_MODULE_0__net_js__["a" /* default */]) {
      this.died();
      return true;
    } else if (otherObject instanceof __WEBPACK_IMPORTED_MODULE_1__honey_js__["a" /* default */]) {
      this.game.honeyCollide = true;
      this.game.score += 50;
      return true;
    }
  }


  isCollidedWith(otherObject) {
    let pos = [this.x, this.y];
    let otherObjPos = [otherObject.x, otherObject.y];
    const objDist = this.distance(pos, otherObjPos);
    return objDist < (this.radius + otherObject.radius);
  }

  distance(pos1, pos2) {
    let sum = Math.pow((pos2[0] - pos1[0]), 2) + Math.pow((pos2[1] - pos1[1]), 2);
    return Math.sqrt(sum);
  }
}


/* harmony default export */ __webpack_exports__["a"] = Bee;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__background_js__ = __webpack_require__(3);




document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("canvas");
  const backgroundEl = document.getElementById("background");
  const bee = document.getElementById("bee");
  const net = document.getElementById("net");
  const honey = document.getElementById("honey");
  const ctx = canvasEl.getContext("2d");
  const ctxBg = backgroundEl.getContext("2d");
  const background = new __WEBPACK_IMPORTED_MODULE_2__background_js__["a" /* default */]();
  // background.startBg(backgroundEl, ctxBg);

  // $('.restart-control').hide();

  $('.start-button').click(() => {
    const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](bee, net, honey, canvasEl);
    const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view_js__["a" /* default */](game, ctx, background, canvasEl);
    background.startBg(backgroundEl, ctxBg);
    gameView.gameMenu();
  });

  $('.restart-button').click(() => {
    ctx.clearRect(0,0, 700, 390);
    ctxBg.clearRect(0,0, 700, 390);
    __WEBPACK_IMPORTED_MODULE_1__game_view_js__["a" /* default */].gameOver = false;
    const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](bee, net, honey, canvasEl);
    const gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view_js__["a" /* default */](game, ctx, background, canvasEl);
    gameView.gameMenu();
});

});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map