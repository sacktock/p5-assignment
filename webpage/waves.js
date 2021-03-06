class Waves {
	constructor(r,g,b,a,ySpeed,xSpeed,sampleRate,amplitude) {
		//default values
		this.yoff = 0.0; //0.0
		this.xoff =0; //0
		this.bgColor = 0; //0 (black)
		this.paused = false; //false
		this.stickyMouse = false;//false
		this.fill = false;//false
		//other properties
		this.r = r || 255; //255
		this.g = g ||255; //255
		this.b = b ||255; //255
		this.alpha = a ||20; //20
		this.ySpeed = ySpeed || 0.008; //0.008
		this.xSpeed = xSpeed || 0.05; //0.05
		this.sampleRate = sampleRate || 10; //10
		this.amplitude = amplitude || 400; //400
		
		createCanvas(1280,720);
		
		this.clearCanvas();
	}
	
	draw() {
		if (!this.paused){
			stroke(this.r,this.g,this.b,this.alpha);
			if (!this.fill){
				noFill();
			} else {
				fill(this.r,this.g,this.b);
			}
			beginShape();
			this.xoff = 0;
		
			for (var x = 0; x <= width; x += this.sampleRate) {
			// Map noise value (between 0 and 1) to y-value of canvas
				var y = this.mapPoint(x);
			}
		
			//Speed of moving waves
			this.yoff += this.ySpeed;
			curveVertex(width, height);
			curveVertex(0, height);
			endShape(CLOSE);
		}
	}
	
	mapPoint(x){
		var y= 0;
		if (this.stickyMouse && mouseX < 1280 && mouseY < 720) {
				y = map(noise(this.xoff, this.yoff), 0, 1, mouseY-(this.amplitude/2), (this.amplitude/2)+ mouseY);
				// Set the vertex
				curveVertex(x, y); 
				this.xoff += map(mouseX, 1280,0,0,0.1)
			} else {
				y = map(noise(this.xoff, this.yoff), 0, 1, 360-(this.amplitude/2), 360+(this.amplitude/2));
				// Set the vertex
				curveVertex(x, y); 
				this.xoff += this.xSpeed;
			}
		return y;
	}
	
	setRed(r){
		this.r = r;
	}
	
	setGreen(g){
		this.g = g;
	}
	
	setBlue(b){
		this.b = b;
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
	
	setAmplitude(amplitude){
		this.amplitude = amplitude;
	}
	
	setFill(fill){
		this.fill = fill;
	}
	
	//getters
	getRed() {
		return this.r;
	}
	
	getGreen(){
		return this.g;
	}
	
	getBlue(){
		return this.b;
	}
	
	getAlpha(){
		return this.alpha;
	}
	
	getYSpeed(){
		return this.ySpeed;
	}
	
	getXSpeed(){
		return this.xSpeed;
	}
	
	getSampleRate() {
		return this.sampleRate;
	}
	
	getAmplitude(){
		return this.amplitude;
	}
	
	isPaused() {
		return this.paused;
	}
	
	isStickyMouse() {
		return this.stickyMouse;
	}
	
	isFill(){
		return this.fill;
	}
	
	//other methods
	clearCanvas(){
		background(this.bgColor);
	}

	setRGB(H,S,L){
		//sets the RGB components of the colour of the wave based on given HSL components of colour
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
		this.r=(R+m)*255;
		this.g=(G+m)*255;
		this.b=(B+m)*255;
	}
	
	Pause(){
		this.paused = true;
	}
	
	Unpause(){
		this.paused = false;
	}
	
	StickyMouse(){
		//toggles stickMouse on/off
		this.stickyMouse = !this.stickyMouse;
	}
	
	InvertColour(){
		//inverts the RGB colour components of the wave
		this.r = 255 - this.r;
		this.b = 255 - this.b;
		this.g = 255 - this.g;
		
		//sets the background colour of the canvas to white if black or black if white
		if (this.bgColor == 0){
				background(16777215);
				this.bgColor = 16777215;
			} else {
				background(0);
				this.bgColor = 0;
			}
	}
	
	Random(){
		//generates a random RGB colour
		var h=random()*360;
		var s=random();
		var l=random();
		this.setRGB(h,s,l)
	}
}