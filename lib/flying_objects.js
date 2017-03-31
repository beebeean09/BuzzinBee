
class FlyingObjects {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.vel = options.vel;
    this.radius = options.radius;
    this.net = options.net;
    this.honey = options.honey;
  }

  isCollidedWith(otherObject) {
    let pos = [this.x, this.y];
    let otherObjPos = [otherObjPos.x, otherObject.y];
    const objDist = this.distance(pos, otherObjPos);
    return objDist < (this.radius + otherObject.radius);
  }

  distance(pos1, pos2) {
    let sum = Math.pow((pos2[0] - pos1[0]), 2) + Math.pow((pos2[1] - pos1[1]), 2);
    return Math.sqrt(sum);
  }

}

export default FlyingObjects;
