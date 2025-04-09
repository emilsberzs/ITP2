//Constructor for the horde
function Horde() {
	//an array of zombies
	this.zombies = [];

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
			//is.zombies[i].updateHealth()
		}
	}

	//add n zombies to the horde
	this.addZombies = function(n) {
		for (var i = 0; i < n; i++) {
			this.zombies.push(new zombie(random(20, height - 50)))
		}
	}
	//if clicked on zombie, reduce its health
	this.whack = function (){
		for (var i = 0; i<this.zombies.length; i++){
			if(dist(mouseX,mouseY,this.zombies[i].x,this.zombies[i].y)<=30){
				this.zombies[i].health -= 1;
			}
		}
	}

	//check health and remove dead zombies, add new zombie
	this.checkHealth = function(){
		for (var i = 0; i<this.zombies.length;i++){
			if (this.zombies[i].health < 1){
				this.zombies.splice(i,1)
				this.addZombies(2)

			}
		}
	}

	this.checkScore = function (){
		for(var i = 0; i<this.zombies.length; i++){
			if(this.zombies[i].x>width){
				alert("gameover") 
			}
		}
	}
}
