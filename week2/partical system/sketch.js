

var emit;

function setup()
{
	createCanvas(800, 600);
	emit = new Emmitter(width / 2, height - 100, 0, -1.5, 20, color(200, 0, 100, 100));
	emit.startEmitter(10, 2000);
}

function draw()
{
	background(10);
	emit.drawParticles();
}