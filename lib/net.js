
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
    // setInterval(()=> {
      ctx.drawImage(this.net, this.x , this.y, 60, 90);
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

export default Net;
