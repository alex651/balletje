var x;
function setup() {
	createCanvas(300, 300);

  x = 30;
}


function draw() {
	background(225);

  circle(x, 130, 20);

  x = x +5;

if(x > 300){
   x = 0;
}

}

