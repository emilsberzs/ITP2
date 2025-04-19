function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
	
	//Set initial mouse coords to -1, because it possibnly cannot ne within canvas, as all coords are positive
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			//if coord are still -1. it means that drawing has not been started yet
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
