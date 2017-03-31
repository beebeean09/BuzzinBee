import Bee from './bee.js';
import Net from './net.js';
import Honey from './honey.js';

class Game {
  constructor(bee, net, honey, canvasEl) {
    this.bee = new Bee(bee, 100, Game.DIM_Y/2, 80, 80, 2);
    this.canvas = canvasEl;
    // this.net = net;
    this.net1 = new Net(net, canvasEl);
    this.net2 = new Net(net, canvasEl);
    // this.net3 = new Net(net, canvasEl);
    this.honey = new Honey(honey, canvasEl);
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
      this.nets.push(new Net(this.net, this.canvas));
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
    const net1 = this.net1;
    const net2 = this.net2;
    // const net3 = this.net3;
    const honey = this.honey;

    // TRYING TO ADD ALL OBJECTS TO DRAW
    // let allObjects = this.allObjects();
    // allObjects.forEach( object => (
    //   object.draw(ctx)
    // ));


    bee.draw(ctx);
    net1.draw(ctx, 3);
    net2.draw(ctx, 5);
    // net3.draw(ctx, 6);
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

  step() {
    this.moveObjects();
  }

}

Game.DIM_X = 700;
Game.DIM_Y = 600;

export default Game;
