import Game from './game.js';
import GameView from './game_view.js';
import Background from './background.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("canvas");
  const backgroundEl = document.getElementById("background");
  const bee = document.getElementById("bee");
  const net = document.getElementById("net");
  const honey = document.getElementById("honey");
  const ctx = canvasEl.getContext("2d");
  const ctxBg = backgroundEl.getContext("2d");
  const background = new Background();
  // background.startBg(backgroundEl, ctxBg);

  // $('.restart-control').hide();

  $('.start-button').click(() => {
    const game = new Game(bee, net, honey, canvasEl);
    const gameView = new GameView(game, ctx, background, canvasEl);
    background.startBg(backgroundEl, ctxBg);
    gameView.gameMenu();
  });

  $('.restart-button').click(() => {
    ctx.clearRect(0,0, 700, 390);
    ctxBg.clearRect(0,0, 700, 390);
    GameView.gameOver = false;
    const game = new Game(bee, net, honey, canvasEl);
    const gameView = new GameView(game, ctx, background, canvasEl);
    gameView.gameMenu();
});

});
