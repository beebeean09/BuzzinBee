const animateBg = function (canvas, ctx, img) {
  let x = canvas.width;
  let speed = 2;
  let h = canvas.height;
  let w = canvas.width;

  setInterval(function() {
    // ctx.drawImage(img, 0, 0, w, h, 0, y, w, h);
    // ctx.drawImage(img, 0, h - y, w, h, 0, 0, w, h);
    //
    // ctx.drawImage(img, w/2, h/2, w, h);
    // ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);

    ctx.drawImage(img, 0, 0, w, h, x, 0, w, h);
    ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);

    // ctx.drawImage(img, w/2, h/2, w, h );
    // ctx.drawImage(img, w, 0, w, h);

    x = x < 0 ? canvas.width : x - speed;

  }, 1000/30);


};

export const start = function(canvas, ctx) {
  let img = new Image();
  img.onload = function() {
    animateBg(canvas, ctx, img);
  };

  img.src = 'images/cloudy-sky-2.jpg';
};
