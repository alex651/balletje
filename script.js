 

class Ball {
  constructor(x,y,w,h,vx,vy,color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.color = color
 }

  draw(){
    fill(this.color);
    ellipse(this.x,this.y,this.w,this.h);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < (this.w / 2) || this.x >= width - (this.w / 2)){
      this.vx = this.vx * -1;
    }

    if(this.y < (this.h / 2) || this.y >= height - (this.h / 2)){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3, ball4, ball5;

function setup() {
  createCanvas(500,500);
  ball1 = new Ball(30,200,50,50,7,5, "red");

  ball2 = new Ball(120,210,50,50,3,3, "blue");

  ball3 = new Ball(200,150,50,50,5,5, "green");

  ball4 = new Ball(90,130,50,50,5,5, "cyan");

  ball5 = new Ball(80,135,50,50,11,5, "yellow");
}

function draw() {
  background(255);
  ball1.draw();
  ball2.draw();
  ball3.draw();
  ball4.draw();
  ball5.draw();
  
}