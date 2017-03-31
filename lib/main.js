import Game from './game.js';
import GameView from './game_view.js';
import FlyingObjects from './flying_objects.js';
// import { start } from './background.js';


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const bee = document.getElementById("bee");
  const net = document.getElementById("net");
  const honey = document.getElementById("honey");
  // const background = document.getElementById("background");
  const ctx = canvasEl.getContext("2d");

  $('.restart-control').hide();

  // canvasEl.width = 1000;
  // canvasEl.height = 800;
  $('.start-button').click(() => {
    const game = new Game(bee, net, honey, canvasEl);
    const gameView = new GameView(game, ctx, canvasEl);

    gameView.gameMenu();
  });

  $('.restart-button').click(() => {
    ctx.clearRect(0,0, 700, 390);
    GameView.gameOver = false;
    const game = new Game(bee, net, honey, canvasEl);
    const gameView = new GameView(game, ctx, canvasEl);
    console.log(gameView.gameOver);
    gameView.gameMenu();
  });

  // const game = new Game(bee, net, honey, canvasEl);
  // // game.startBg(canvasEl, ctx);
  // // console.log(game.score());
  // const gameView = new GameView(game, ctx, canvasEl);
  // gameView.start();

});
