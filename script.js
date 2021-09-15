class Ball {

  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
  }
  drawBall() {
    ellipse(this.x, this.y, this.w, this.h)
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x <= 0 || this.x > 400) {
      this.vx = this.vx * -1;
    }
    if (this.y <= 0 || this.y > 400) {
      this.vy = this.vy * -1;
    }
  }
}


function setup() {
  createCanvas(400, 400);
  
  ball1 = new Ball(250, 50, 30, 30,4, 6)
  
}
  
function draw() {
  background(110, 0, 32);
  ball1.drawBall();
}

  
