

class Wave {

	constructor(yoff,xoff) {
		this.yoff = yoff;
		this.xoff = xoff;

	}
	
	getY() {
		var y = map(noise(this.xoff, this.yoff), 0, 1, 100, 500);
		this.xoff += 0.05;
		return y;
	}
	
	getYoff() {
		return this.yoff;	
	}
	
}


function setup() {
  	createCanvas(1280,720);
  	background(0);
}

function generateRandomNumber(min_value, max_value) {
	return Math.floor(Math.random() * (max_value-min_value) + min_value);
}

function draw() {
	var wave = new Wave(0.0,0);
	// background(0, 1);
  stroke(255,125,244,20);
  noFill();

  beginShape();
    
  var yoff = wave.getYoff();
    
  for (var x = 0; x <= width; x += 10) {
  
    // Set the vertex
    curveVertex(x, wave.getY()); 
  }
    
  //Speed of moving waves
  yoff += 0.008;
  curveVertex(width, height);
  curveVertex(0, height);
  endShape(CLOSE);

}

function mousePressed() {
  setup();
}