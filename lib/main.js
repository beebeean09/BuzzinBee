import Game from './game.js';
import GameView from './game_view.js';
import FlyingObjects from './flying_objects.js';
// import { start } from './background.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const bee = document.getElementById("bee");
  const net = document.getElementById("net");
  const honey = document.getElementById("honey");

  // canvasEl.width = 1000;
  // canvasEl.height = 800;


  const ctx = canvasEl.getContext("2d");
  const game = new Game(bee, net, honey, canvasEl);
  // game.startBg(canvasEl, ctx);
  const gameView = new GameView(game, ctx, canvasEl);
  gameView.start();

  // const flying = new FlyingObjects( 10, 10, 5);
  // flying.randomPosition(0, 500);
  // const game = new Game(bee);
  // game.start(canvasEl, ctx);
  // ctx.scale(1.10,1.10);
  // ctx.drawImage(bee, 10, 10, 80, 80);
  // ctx.fillRect(10, 10, 1000, 800);
  // ctx.fill('#808080');
});
