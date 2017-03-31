// import { startBg } from './background.js';

class GameView {
  constructor(game , ctx, canvas ){
    this.canvas = canvas;
    this.game = game;
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.img = new Image();
    this.img.src = './images/cloudy-sky-2.jpg';
  }

  gameMenu() {
    console.log('start again');
    $('.start-control').hide();
    $('.restart-control').hide();

    this.start();
  }

  gameRestart() {
    $('.restart-control').show();
  }

  start(){
    // this.game.startBg(this.canvas, this.ctx);
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time){
    const timeDelta = time - this.lastTime;

    if (GameView.gameOver) {
      console.log('animate');
      console.log(GameView.gameOver);
      this.gameRestart();
      return;
    } else {
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  bindKeyHandlers(){
    const bird = this.bird;
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 32) {
        // console.log('SPACE');
        this.bee.hop();
      }
    });

  }

}

GameView.gameOver = false;

export default GameView;
