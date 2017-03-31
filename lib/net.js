import FlyingObjects from './flying_objects.js';


class Net {
  constructor(net, canvas) {
    this.x = 600 ;
    this.net = net;
    this.y = this.randomPosition(0, 325);
    this.canvas = canvas;
  }

  draw(ctx, speed) {
    // setInterval(()=> {
      ctx.drawImage(this.net, this.x , this.y, 70, 100);
      if (this.x < 0) {
        this.x = this.canvas.width;
        this.y = this.randomPosition(0, 325);
      } else {
        this.x -= speed;
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

export default Net;
