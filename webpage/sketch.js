


var obj;

function setup() {
	createCanvas(1280,720);
	background(0);
	obj = new waves();
}

function draw() {
	// background(0, 1);
	obj.display();

}

//wave class
function waves(){
	this.yoff = 0.0; //0.0
	this.xoff = 0; //0
	this.red = 255; //255
	this.green = 255; //255
	this.blue = 255; //255
	this.alpha = 20; //20
	this.ySpeed = 0.008; //0.008
	this.xSpeed = 0.05; //0.05
	
	this.display = function(){
		stroke(this.red,this.green,this.blue,this.alpha);
		noFill();

		beginShape();
    
		this.xoff= 0;
    
		for (var x = 0; x <= width; x += 10) {
		// Map noise value (between 0 and 1) to y-value of canvas
			var y = map(noise(this.xoff, this.yoff), 0, 1, 100, 500);
			// Set the vertex
			curveVertex(x, y); 
			this.xoff += this.xSpeed;
		}
    
		//Speed of moving waves
		this.yoff += this.ySpeed;
		curveVertex(width, height);
		curveVertex(0, height);
		endShape(CLOSE);
	}
	
	this.setRed = function(red){
		this.red = red;
	}
	
	this.setGreen = function(green){
		this.green = green;
	}
	
	this.setBlue = function(blue){
		this.blue = blue;
	}
	
	this.setAlpha = function(alpha){
		this.alpha = alpha;
	}
	
	this.setYSpeed = function(ySpeed){
		this.ySpeed = ySpeed;
	}
	
	this.setXSpeed = function(xSpeed){
		this.xSpeed = xSpeed;
	}

}

function mousePressed() {
	setup();
}