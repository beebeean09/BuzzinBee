class GameView {
  constructor(game ,ctx){
    this.game = game;
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.img = new Image();
    this.img.src = './images/cloudy-sky-2.jpg';
  }

  start(){
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));

  }

  animate(time){
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  // bindKeyHandlers(){
  //   const bird = this.bird;
  //   assignKey("space", () => { bird.jump(); });
  // }

}

module.exports = GameView;
