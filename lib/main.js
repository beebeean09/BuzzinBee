// const Game = require("./game");
import { start } from './background.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  // canvasEl.width = 1000;
  // canvasEl.height = 800;


  const ctx = canvasEl.getContext("2d");
  ctx.scale(1.15,1.15);
  start(canvasEl, ctx);
  // ctx.fillRect(10, 10, 1000, 800);
  // ctx.fill('#808080');
  // const game = new Game();
});
