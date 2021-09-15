var x, y, vx, vy;

function setup() {
	createCanvas(300, 300);

  x = 30;
  y = 200;
  vx = 5;
  vy = 5;
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  if(x < 0 || x > 300){
    vx = vx * -1;
  }

  if(y < 0 || y > 300){
    vy = vy * -1;
  }
}

