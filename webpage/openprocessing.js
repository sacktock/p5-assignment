var yoff = 0.0

function setup() {
  createCanvas(800,500);
  background(0);
}

function draw() {
  stroke(255, 20);
  noFill();

  beginShape();
    
  var xoff= 0;
    
  for (var x = 0; x <= width; x += 10) {
  // Map noise value (between 0 and 1) to y-value of canvas
    var y = map(noise(xoff, yoff), 0, 1, 100, 500);
    // Set the vertex
    vertex(x, y); 
    xoff += 0.05;
  }
    
  //Speed of moving waves
  yoff += 0.008;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}

function mousePressed() {
  setup();
}