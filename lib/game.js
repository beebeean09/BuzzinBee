import Bee from './bee.js';
import Net from './net.js';
import Honey from './honey.js';

class Game {
  constructor(bee, net, honey, canvasEl) {
    this.bee = new Bee(bee, 80, canvasEl.height/2, 75, 75, 2, this);
    this.canvas = canvasEl;
    this.net = net;
    this.honey = new Honey(honey, canvasEl);
    this.nets = [];
    this.addNets();
    this.honeyCollide = false;
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
    setTimeout(() => this.nets.push(new Net(this.net, this.canvas)), 3000);
    setTimeout(() => this.nets.push(new Net(this.net, this.canvas)), 6000);
    setTimeout(() => this.nets.push(new Net(this.net, this.canvas)), 10000);
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
    console.log(allObjects);
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        if (i !== j){
          let obj1 = allObjects[i];
          console.log('obj1');
          console.log(obj1);
          let obj2 = allObjects[j];
          // console.log(allObjects);
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
    if (object instanceof Net) {
      // this.game.gameOver();
      // this.nets.splice(this.enemies.indexOf(object), 1);
    } else if (object instanceof Honey) {
      this.score += 50;
    }
  }

}

Game.DIM_X = 700;
Game.DIM_Y = 600;

export default Game;
