
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

    if (this.y > 290) {
      this.y = 290;
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

      this.vel -= 9;
      // this.vel *= 1.5;
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

export default Bee;
