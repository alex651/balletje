var width = 400, height = 300;

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

    drawball(){
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

var Ball1, Ball2, Ball3;

function setup() {

  Ball1 = new Ball(30,200,50,50,5,5, "red");

  Ball2 = new Ball(120,210,50,50,3,3, "blue");

  Ball3 = new Ball(200,150,50,50,1,1, "green");

}

function draw() {

  Ball1.draw();
  Ball2.draw();
  Ball3.draw();

  }
}