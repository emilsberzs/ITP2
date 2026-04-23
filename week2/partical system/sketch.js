

var emit;

function setup() {
	createCanvas(800, 600);
	emit = new Emmitter(width / 2, height/2, 0, -0.8, 20, color(100, 0, 200, 100));
	emit.startEmitter(20, 20000);
}

function draw() {
	background(10);
	emit.drawParticles();
}