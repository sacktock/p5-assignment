


var waves;

function setup() {
	createCanvas(1280,720);
	clearCanvas();
	waves = new Waves();
	createP('')
	setupDOM();
}

function setupDOM() {
	colLabel = createDiv("Colour Sliders:");
	colLabel.position(10,736);
	
	otherLabel = createDiv("Other Sliders:");
	otherLabel.position(384,736);
	
	funcLabel = createDiv("Functions:");
	funcLabel.position(758,736)
	
	var clear = createButton("clear");
	clear.position(1200,680);
	clear.mousePressed(clearCanvas);
	
	hueLabel = createDiv("Hue");
	hueLabel.position(10,768);
	var hueSlider = createSlider(0,360,0);
	hueSlider.parent(hueLabel);
	hueSlider.input(function() {
		waves.setRGB(hueSlider.value(),map(satSlider.value(),0,100,0,1),map(litSlider.value(),0,100,0,1));
	});
	
	satLabel = createDiv("Saturation");
	satLabel.position(10,800);
	var satSlider = createSlider(0,100,0);
	satSlider.parent(satLabel);
	satSlider.input(function() {
		waves.setRGB(hueSlider.value(),map(satSlider.value(),0,100,0,1),map(litSlider.value(),0,100,0,1));
	});
	
	litLabel = createDiv("Lightness");
	litLabel.position(10,832);
	var litSlider = createSlider(0,100,100);
	litSlider.parent(litLabel);
	litSlider.input(function() {
		waves.setRGB(hueSlider.value(),map(satSlider.value(),0,100,0,1),map(litSlider.value(),0,100,0,1));
	});
	
	aLabel = createDiv("Opactity");
	aLabel.position(10,864);
	var aSlider = createSlider(0,100,20);
	aSlider.parent(aLabel);
	aSlider.input(function() {
		waves.setAlpha(aSlider.value());
	});
	
	ySLabel = createDiv("Wave Speed");
	ySLabel.position(384,768);
	var ySpeedSlider = createSlider(0,100,50);
	ySpeedSlider.parent(ySLabel);
	ySpeedSlider.input(function() {
		waves.setYSpeed(map(ySpeedSlider.value(),0,100,0.0,0.016));
	});
	
	xSLabel = createDiv("Waviness");
	xSLabel.position(384,800);
	var xSpeedSlider = createSlider(0,100,50);
	xSpeedSlider.parent(xSLabel);
	xSpeedSlider.input(function() {
		waves.setXSpeed(map(xSpeedSlider.value(),0,100,0.0,0.1));
	});
	
	sRLabel = createDiv("Waviness 2");
	sRLabel.position(384,832);
	var sampleRateSlider = createSlider(1,100,10);
	sampleRateSlider.parent(sRLabel);
	sampleRateSlider.input(function() {
		waves.setSampleRate(sampleRateSlider.value());
	});
}

function draw() {
	// background(0, 1);
	waves.draw();
}

class Waves {
	constructor() {
		//default values
		this.yoff = 0.0; //0.0
		this.red = 255; //255
		this.green = 255; //255
		this.blue = 255; //255
		this.alpha = 20; //20
		this.ySpeed = 0.008; //0.008
		this.xSpeed = 0.05; //0.05
		this.sampleRate = 10; //10
	}
	
	draw() {
		stroke(this.red,this.green,this.blue,this.alpha);
		noFill();

		beginShape();
    
		var xoff = 0;
    
		for (var x = 0; x <= width; x += this.sampleRate) {
		// Map noise value (between 0 and 1) to y-value of canvas
			var y = map(noise(xoff, this.yoff), 0, 1, 100, 500);
			// Set the vertex
			curveVertex(x, y); 
			xoff += this.xSpeed;
		}
    
		//Speed of moving waves
		this.yoff += this.ySpeed;
		curveVertex(width, height);
		curveVertex(0, height);
		endShape(CLOSE);
	}
	
	setRed(red){
		this.red = red;
	}
	
	setGreen(green){
		this.green = green;
	}
	
	setBlue(blue){
		this.blue = blue;
	}
	
	setAlpha(alpha){
		this.alpha = alpha;
	}
	
	setYSpeed(ySpeed){
		this.ySpeed = ySpeed;
	}
	
	setXSpeed(xSpeed){
		this.xSpeed = xSpeed;
	}
	
	setSampleRate(sampleRate) {
		this.sampleRate = sampleRate;
	}
	
	//getters
	getRed() {
		return red;
	}
	
	getGreen(){
		return green;
	}
	
	getBlue(){
		return blue;
	}
	
	getAlpha(){
		return alpha;
	}
	
	getYSpeed(){
		return ySpeed;
	}
	
	getXSpeed(){
		return xSpeed;
	}
	
	getSampleRate() {
		return sampleRate;
	}
	
	//other methods
	setRGB(H,S,L){
		var C = (1-abs(2*L - 1))*S;
		var X = C*(1 - abs(((H/60) % 2) - 1));
		var m = L - C/2;
		var R;
		var G;
		var B;
		if (H <= 60){
			R = C;
			G = X;
			B = 0;
		} else if (H <= 120){
			R = X;
			G = C;
			B = 0;
		} else if (H <= 180){
			R = 0;
			G = C;
			B = X;
		} else if (H <= 240){
			R = 0;
			G = X;
			B = C;
		} else if (H <= 300) {
			R = X;
			G = 0;
			B = C;
		} else {
			R = C;
			G = 0;
			B = X;
		}
		this.red = (R+m)*255;
		this.green = (G+m)*255;
		this.blue = (B+m)*255;
	}
	
	
}


function clearCanvas(){
	background(0);
}

function mousePressed() {
	//setup();
}