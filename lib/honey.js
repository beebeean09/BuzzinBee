
class Honey {
  constructor(honey, canvas) {
    this.x = canvas.width ;
    this.honey = honey;
    this.y = this.randomPosition(0, 300);
    this.canvas = canvas;
    this.radius = 40;
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

export default Honey;
