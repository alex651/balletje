class Ball {
  constructor(x,y,w,h,vx,vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
 }

  drawball(){
  createcanvas (300,300);
  Background (225);
  ellipse (x,y,50,50);

  this.x = this.x + this.vx;
  this.y = this.y + this.vy;

  if(this.x < 0 || this.x > 300){
    this.vx = this.vx * -1;
  }

  if(this.y < 0 || this.y > 300){
    this.vy = this.vy * -1;
  }
 }
}

var ball1, ball2, ball3;

function setup() {

  ball1 = new Ball(30,200,50,50,5,5, "red");

  ball2 = new Ball(120,210,50,50,3,3, "blue");

  ball3 = new Ball(200,150,50,50,1,1, "green");

}

function draw() {

  Ball1.draw();
  Ball2.draw();
  Ball3.draw();



}