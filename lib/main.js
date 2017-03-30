import Game from './game.js';
import GameView from './game_view.js';
// import { start } from './background.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const bee = document.getElementById("bee");
  // canvasEl.width = 1000;
  // canvasEl.height = 800;


  const ctx = canvasEl.getContext("2d");

  const game = new Game(bee);
  const gameView = new GameView(game, ctx);
  gameView.start();

  // const game = new Game(bee);
  // game.start(canvasEl, ctx);
  // ctx.scale(1.10,1.10);
  // ctx.drawImage(bee, 10, 10, 80, 80);
  // ctx.fillRect(10, 10, 1000, 800);
  // ctx.fill('#808080');
});

document.addEventListener('keydown', (event) => {
  const bee = document.getElementById("bee");
  const game = new Game(bee);
  if (event.keyCode === 32) {
    game.bee.hop();
  }
});
