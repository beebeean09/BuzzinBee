
class GameView {
  constructor(game , ctx, background, canvas ){
    this.canvas = canvas;
    this.game = game;
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.background = background;
    this.img = new Image();
    this.img.src = './images/cloudy-sky-2.jpg';
  }

  gameMenu() {
    $('.start-control').hide();
    $('.restart-button').show();

    this.start();
  }

  gameRestart() {
    $('.restart-control').show();

  }

  start(){
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time){
    const timeDelta = time - this.lastTime;

    if (GameView.gameOver) {
      this.background.stopBg(this.ctx);
      this.gameRestart();
      return;
    } else {
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  bindKeyHandlers(){
    window.addEventListener("keydown", (event) => {
      event.preventDefault();
      if (event.keyCode === 32) {
        this.bee.hop();
      }
    });

  }

}

GameView.gameOver = false;

export default GameView;
