import Bee from './bee.js';

class Game {
  constructor(bee) {
    this.bee = new Bee(bee, 0, Game.DIM_Y/2, 100, 100, 3);
    this.enemies = [];
  }

  start(canvas, ctx) {
    // let that = this;

    // bee.fly();
    // setInterval(bee.fall(), 1000);
    // bee.draw();
    // ctx.drawImage(bee, 0, canvas.height/2, 90, 90);
    // let img = new Image();

    // this.bee.draw(ctx);
    // this.bee.fall(ctx);
    // img.onload = () => {
    //   this.animateBg(canvas, ctx, img);
    // };

    // img.src = 'images/cloudy-sky-2.jpg';

  }

  allObjects() {
    return [this.bee].concat(this.enemies);
  }

  moveObjects() {
    let allObjects = this.allObjects();
    allObjects.forEach( object => (
      object.move()
    ));
  }



  draw(ctx) {
    console.log(Game.DIM_Y);
    const bee = this.bee;
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    bee.draw(ctx);
  }

  step() {
    this.moveObjects();
  }


}

Game.DIM_X = 700;
Game.DIM_Y = 600;

export default Game;
