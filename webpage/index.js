
var w;

function setup() {
	w = new Waves();
}

function draw() {
	w.draw();	
}

function keyPressed() {
	var pause = document.getElementById("pause");
	if (key == " ") {
		//If spacebar is pressed pause or unpause the animation
		if (w.isPaused()){
			w.Unpause();
			pause.innerText="Pause";
		} else {
			w.Pause();
			pause.innerText="Unpause";
		}	
	}
}

function setColSliders(){
	//sets colour sliders to the correct values by converting the RGB components of the wave colour to HSL components of colour.
	var R = w.getRed()/255;
	var G = w.getGreen()/255;
	var B = w.getBlue()/255;
	var maximum = max(R,G,B);
	var minimum = min(R,G,B);
	var L = (max(R,G,B)+min(R,G,B))/2;
	var S=0;
	var H=0;
	if (maximum != minimum){
		if (L > 0.5){
			S = (maximum-minimum)/(2.0-maximum-minimum);
		
		} else {
			S = (maximum-minimum)/(maximum+minimum);
		}
		if (R == maximum){
			H = (G-B)/(maximum-minimum);
		} else if (G == maximum){
			H = 2.0 + (B-R)/(maximum-minimum);
		} else {
			H = 4.0 + (R-G)/(maximum-minimum);
		}
		H = H*60;
		if (H < 0){
			H += 360;
		}
	}
	var hueSlider = document.getElementById("hueSlider");
	var satSlider = document.getElementById("satSlider");
	var litSlider = document.getElementById("litSlider");
	
	hueSlider.value = H;
	satSlider.value = map(S,0,1,0,100);
	litSlider.value = map(L,0,1,0,100);
}

function resetDOM(){
	//resets DOM components to their default values/state
	var hueSlider = document.getElementById("hueSlider");
	var satSlider = document.getElementById("satSlider");
	var litSlider = document.getElementById("litSlider");
	var aSlider = document.getElementById("aSlider");
	var ySpeedSlider = document.getElementById("ySpeedSlider");
	var xSpeedSlider = document.getElementById("xSpeedSlider");
	var sampleRateSlider = document.getElementById("sampleRateSlider");
	var ampSlider = document.getElementById("ampSlider");
	
	var pause = document.getElementById("pause");
	var s_mouse = document.getElementById("sticky_mouse");
	var fill = document.getElementById("fill");
	
	hueSlider.value = 0;
	satSlider.value =0;
	litSlider.value = 100;
	aSlider.value =20;
	ySpeedSlider.value = 50;
	xSpeedSlider.value = 50;
	sampleRateSlider.value = 50;
	ampSlider.value = 400;
	pause.innerText="Pause";
	s_mouse.innerText="Sticky Mouse";
	fill.innerText="Fill";
}