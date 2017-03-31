//
// class Background {
//   constructor(background, canvas) {
//     this.background = background;
//     this.canvas = canvas;
//     this.x = 1;
//     this.y = 1;
//   }
//
//   draw(ctx) {
//     // let x = this.canvas.width;
//     // let h = this.canvas.height;
//     // let w = this.canvas.width;
//     // let speed = 2;
//     // ctx.drawImage(this.background, 50, 50, w, h);
//     //
//     //
//     //   if (this.x < 0) {
//     //     this.x = this.canvas.width;
//     //   } else {
//     //   console.log(this.x);
//     //     this.x -= speed;
//     //   }
//     // setInterval(() => {
//     //   ctx.drawImage(this.background, w - x, 0, w, h);
//     //
//     //   console.log(this.canvas.width);
//     //   // x = x < 0 ? this.canvas.width : x - speed;
//     // }, 1000/30);
//     setInterval(() => {
//       ctx.drawImage(this.background, this.x, this.y, 800, 500);
//
//       if (this.x < 0) {
//         this.x = this.canvas.width;
//       } else {
//         this.x -= 1;
//       }
//     }, 1000/30);
//     ctx.drawImage(this.background, this.x, this.y, 800, 500);
//
//   }
//
//   randomPosition(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//
//   animateBg(canvas, ctx) {
//     let x = canvas.width;
//     let speed = 2;
//     let h = canvas.height;
//     let w = canvas.width;
//
//     setInterval(function() {
//       // ctx.drawImage(img, 0, 0, w, h, 0, y, w, h);
//       // ctx.drawImage(img, 0, h - y, w, h, 0, 0, w, h);
//       //
//       // ctx.drawImage(img, w/2, h/2, w, h);
//       // ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);
//       ctx.drawImage(this.background, 0, 0, w, h, x, 0, w, h);
//       ctx.drawImage(this.background, w - x, 0, w, h, 0, 0, w, h);
//
//       x = x < 0 ? canvas.width : x - speed;
//
//     }, 1000/30);
//
//   }
//
//   startBg(canvas, ctx) {
//
//     let img = new Image();
//     img.onload = () => {
//       this.animateBg(canvas, ctx, img);
//     };
//
//     img.src = 'images/cloudy-sky-2.jpg';
//     console.log(img);
//   }
// }
//
//
// export default Background;
// // const animateBg = function (canvas, ctx, img) {
// //   let x = canvas.width;
// //   let speed = 2;
// //   let h = canvas.height;
// //   let w = canvas.width;
// //
// //   setInterval(function() {
// //     // ctx.drawImage(img, 0, 0, w, h, 0, y, w, h);
// //     // ctx.drawImage(img, 0, h - y, w, h, 0, 0, w, h);
// //     //
// //     // ctx.drawImage(img, w/2, h/2, w, h);
// //     // ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);
// //
// //     ctx.drawImage(img, 0, 0, w, h, x, 0, w, h);
// //     ctx.drawImage(img, w - x, 0, w, h, 0, 0, w, h);
// //
// //     x = x < 0 ? canvas.width : x - speed;
// //
// //   }, 1000/30);
// //
// //
// // };
// //
// // export const startBg = (canvas, ctx) => {
// //   let img = new Image();
// //   img.onload = () => {
// //     animateBg(canvas, ctx, img);
// //   };
// //
// //   img.src = 'images/cloudy-sky-2.jpg';
// // };
