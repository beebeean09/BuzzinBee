
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  animateBg(canvas, ctx, img) {
    let x = canvas.width;
    let speed = 2;
    let h = canvas.height;
    let w = canvas.width;

    setInterval(function() {
      ctx.drawImage(img, 0, 0, w, h, x, 0, w, h);
      ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);

      x = x < 0 ? canvas.width : x - speed;

    }, 1000/50);

  }

  startBg(canvas, ctx) {

    let img = new Image();
    img.onload = () => {
      this.animateBg(canvas, ctx, img);
    };

    img.src = './images/cloudy-sky-2.jpg';
  }

  stopBg(ctx) {
    let img = new Image();
    img.src = './images/cloudy-sky-2.jpg';

    ctx.drawImage(img, 0,0, 700, 390);
    ctx.font = "65px Permanent Marker";
    ctx.color = "yello";
    ctx.fillText("Game Over", 180, 190);
  }
}




export default Background;
