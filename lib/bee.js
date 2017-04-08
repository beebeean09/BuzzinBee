import Net from './net.js';
import Honey from './honey.js';
import GameView from './game_view.js';

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
    // this.player = new Image();
    // this.player.src = './images/bee2.png';
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
    console.log('hop');
    console.log(this.y);
    // if (this.y < 500) {
    //   this.vel += -20;
    // } else {
      // this.vel += -9;

      this.vel -= 20;
      this.vel *= 0.5;
    // }

  }

  died() {
    console.log('dont die!');
    // this.y = 305;
    GameView.gameOver = true;
  }

  collideWith(otherObject) {
    if (otherObject instanceof Net) {
      this.died();
      return true;
    } else if (otherObject instanceof Honey) {
      console.log(otherObject);
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


export default Bee;
