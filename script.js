var x, y, r, v;
function setup() {
	createCanvas(400, 400);
  y = 50;
  x = 30;
  r = 25;
  v = 5;
xspeed = 5;
yspeed = 1;
}


function draw() {
	background(169);

  circle(x, 130, 20);

  x = x + v;
 
if(x < 0 || x > 400){
   v = v * -1;
}

if(x < 0){
  v = 5;
}

ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

}

