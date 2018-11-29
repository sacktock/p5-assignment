var yoff = 0.0

function setup() {
  createCanvas(1280,720);
  background(0);
}

function draw() {
	// background(0, 1);
  stroke(255,20);
  noFill();

  beginShape();
    
  var xoff= 0;
    
  for (var x = 0; x <= width; x += 10) {
  // Map noise value (between 0 and 1) to y-value of canvas
    var y = map(noise(xoff, yoff), 0, 1, 100, 500);
    // Set the vertex
    curveVertex(x, y); 
    xoff += 0.05;
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
