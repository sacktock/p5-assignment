class Waves {
	constructor(r,g,b,a,ySpeed,xSpeed,sampleRate,paused,stickyMouse) {
		//default values
		this.yoff = 0.0; //0.0
		this.xoff =0;
		this.bgColor = 0;
		this.cube;
		//other fields
		this.r = r || 255; //255
		this.g = g ||255; //255
		this.b = b ||255; //255
		this.alpha = a ||20; //20
		this.ySpeed = ySpeed || 0.008; //0.008
		this.xSpeed = xSpeed || 0.05; //0.05
		this.sampleRate = sampleRate || 10; //10
		this.paused = paused || false; //false
		this.stickyMouse = stickyMouse || false; //false
		
		createCanvas(1280,720);
		
		this.clearCanvas();
	}
	
	draw() {
		
		stroke(this.r,this.g,this.b,this.alpha);
		noFill();

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
	
	mapPoint(x){
		var y= 0;
		if (this.stickyMouse && mouseX < 1280 && mouseY < 720) {
				y = map(noise(this.xoff, this.yoff), 0, 1, mouseY-200, 200+ mouseY);
				// Set the vertex
				curveVertex(x, y); 
				this.xoff += map(mouseX, 1280,0,0,0.1)
			} else {
				y = map(noise(this.xoff, this.yoff), 0, 1, 160, 560);
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
	
	isPaused() {
		return this.paused;
	}
	
	isStickyMouse() {
		return this.stickyMouse;
	}
	
	//other methods
	clearCanvas(){
		background(this.bgColor);
	}

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
		this.stickyMouse = !this.stickyMouse;
	}
	
	InvertColour(){
		this.r = 255 - this.r;
		this.b = 255 - this.b;
		this.g = 255 - this.g;
		
		if (this.bgColor == 0){
				background(16777215);
				this.bgColor = 16777215;
			} else {
				background(0);
				this.bgColor = 0;
			}
	}
	
	Random(){
		var h=random()*360;
		var s=random();
		var l=random();
		this.setRGB(h,s,l)
	}
}