
class Honey {
  constructor(honey, canvas) {
    this.x = 600 ;
    this.honey = honey;
    this.y = this.randomPosition(0, 300);
    this.canvas = canvas;
  }

  draw(ctx) {
    ctx.drawImage(this.honey, this.x, this.y, 70, 85);

    if (this.x < 0) {
      this.x = this.canvas.width;
      this.y = this.randomPosition(0, 300);
    } else {
      this.x -= 7;
    }
  }

  randomPosition(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default Honey;
