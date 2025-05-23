//constructor for the Zombies
function zombie(y) {
	//initial x so all zombies start to the left of the screen
	this.x = -10;
	this.y = y;
	//set a random speed
	this.speed = random(0.2, 0.5);
    //give each zombie health property
    this.health = 10;

	//draw the zombie to the screen
	this.draw = function() {
		push();
		//arms
		fill(128, 0, 128);
		rect(this.x - 10, this.y - 50, 65, 15);
		rect(this.x - 10, this.y + 35, 65, 15);
		//shoulders
		rect(this.x - 20, this.y - 50, 35, 100, 10);
		//head
		fill(50);
		ellipse(this.x, this.y, 50);
        //health
        fill(255,255,255)
        text(this.health,this.x,this.y);
		pop();
	}

      //update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		this.x += this.speed;
	}

	this.updateHealth = function(){
		this.health -= 1;
	}

    
}