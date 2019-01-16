
var w;

function setup() {
	w = new Waves();
}

function draw() {
	if (!w.isPaused()){
		w.draw();	
	}
}

function keyPressed() {
	if (key == ' ') {
		if (w.isPaused()){
			w.Unpause();
		} else {
			w.Pause();
		}	
	}
}