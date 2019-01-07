


var obj;

function setup() {
	createCanvas(1280,720);
	clearCanvas();
	obj = new Waves();
	createP('')
	setupButtons();
}

function setupButtons() {
	var clear = createButton("clear");
	clear.position(1200,680);
	clear.mousePressed(clearCanvas);
	
	var rSlider = createSlider(0,255,255);
	rSlider.input(function() {
		obj.setRed(rSlider.value());
	});
	
	var gSlider = createSlider(0,255,255);
	gSlider.input(function() {
		obj.setGreen(gSlider.value());
	});
	
	var bSlider = createSlider(0,255,255);
	bSlider.input(function() {
		obj.setBlue(bSlider.value());
	});
	
	var aSlider = createSlider(0,100,20);
	aSlider.input(function() {
		obj.setAlpha(aSlider.value());
	});
	
	var ySpeedSlider = createSlider(0,100,50);
	ySpeedSlider.input(function() {
		obj.setYSpeed(map(ySpeedSlider.value(),0,100,0.0,0.016));
	});
	
	var xSpeedSlider = createSlider(0,100,50);
	xSpeedSlider.input(function() {
		obj.setXSpeed(map(xSpeedSlider.value(),0,100,0.0,0.1));
	});
	
	var sampleRateSlider = createSlider(1,100,10);
	sampleRateSlider.input(function() {
		obj.setSampleRate(sampleRateSlider.value());
	});
}

function draw() {
	// background(0, 1);
	obj.display();

}

//wave class
function Waves(){
	//default values
	this.yoff = 0.0; //0.0
	this.xoff = 0; //0
	this.red = 255; //255
	this.green = 255; //255
	this.blue = 255; //255
	this.alpha = 20; //20
	this.ySpeed = 0.008; //0.008
	this.xSpeed = 0.05; //0.05
	this.sampleRate = 10; //10
	
	//display the next wave
	this.display = function(){
		stroke(this.red,this.green,this.blue,this.alpha);
		noFill();

		beginShape();
    
		this.xoff= 0;
    
		for (var x = 0; x <= width; x += this.sampleRate) {
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
	
	//setters
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
	
	this.setSampleRate = function(sampleRate) {
		this.sampleRate = sampleRate;
	}
	
	//getters
	this.getRed = function() {
		return red;
	}
	
	this.getGreen = function(){
		return green;
	}
	
	this.getBlue = function(){
		return blue;
	}
	
	this.getAlpha = function(){
		return alpha;
	}
	
	this.getYSpeed = function(){
		return ySpeed;
	}
	
	this.getXSpeed = function(){
		return xSpeed;
	}
	
	this.getSampleRate = function() {
		return sampleRate;
	}

}

function clearCanvas(){
	background(0);
}

function mousePressed() {
	//setup();
}