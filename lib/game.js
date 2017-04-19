import Bee from './bee.js';
import Net from './net.js';
import Honey from './honey.js';
// import Background from './background.js';

class Game {
  constructor(bee, net, honey, canvasEl) {
    this.bee = new Bee(bee, 80, canvasEl.height/2, 75, 75, 2, this);
    this.canvas = canvasEl;
    this.net = net;
    this.net1 = new Net(net, canvasEl);
    this.net2 = new Net(net, canvasEl);
    this.net3 = new Net(net, canvasEl);
    this.honey = new Honey(honey, canvasEl);
    // this.background = new Background(background, canvasEl);
    // this.nets = [this.net1, this.net2, this.net3];
    // this.honey = [];

    this.score = 0;
    // this.scoreboard();
  }

  makeNets() {
    return new Net(this.net, this.canvas);
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
    console.log('startBg');
    let img = new Image();
    img.onload = () => {
      this.animateBg(canvas, ctx, img);
    };

    img.src = 'images/cloudy-sky-2.jpg';
    console.log(img);
  }

  // addBg() {
  //   document.getElementById('background').innerHTML = this.startBg();
  // }

  addNets() {
    this.nets.push(new Net(this.net, this.canvas));
  }

  addHoney() {
    this.honey.push(new Honey(this.honey, this.canvas));
  }

  moveBee() {
    return this.bee.move();
  }

  allObjects() {
    return [this.bee].concat(this.nets, this.honey);
  }

  moveObjects() {
    this.moveBee();
    // let allObjects = this.allObjects();
    // allObjects.forEach( object => (
    //   object.move()
    // ));
  }

  draw(ctx) {
    // console.log(Game.DIM_Y);
    const bee = this.bee;
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    const net1 = this.net1;
    const net2 = this.net2;
    const net3 = this.net3;
    const honey = this.honey;
    const canvas = this.canvas;
    // const background = this.background;
    // TRYING TO ADD ALL OBJECTS TO DRAW
    // let allObjects = this.allObjects();
    // allObjects.forEach( object => (
    //   object.draw(ctx)
    // ));

    setInterval(() => {
      this.makeNets().draw(ctx, 5);
    }, 2000);

    bee.draw(ctx);
    // net1.draw(ctx, 5);
    // net2.draw(ctx, 7);
    // net3.draw(ctx, 9);
    honey.draw(ctx);

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


    // }
  }

  scoreHoney(num) {
    this.score += num;
  }

  // scoreboard() {
  //   setInterval(() => {
  //     this.score += (1);
  //   }, 1000);
  // }

  addScoreboard() {
    document.getElementById('score').innerHTML = this.score;
  }

  step() {
    this.moveObjects();
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
      // this.score += 50;

      console.log(this.score);
    }
  }

}

Game.DIM_X = 700;
Game.DIM_Y = 600;

export default Game;
