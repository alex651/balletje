class ball {
  constructor(x,y,w,h,vx,vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
 }

 drawball(){

 }
}

var ball1, ball2, ball3;

function setup() {
  createcanvas(400, 300);

  ball1 = new Ball(30,200,50,50,5,5, "red");

  ball2 = new Ball(120,210,50,50,3,3, "blue");

  ball3 = new Ball(200,150,50,50,1,1, "green");

}

function draw() {
  Background(225);

  ball1.draw();
  ball2.draw();
  ball3.draw();



}