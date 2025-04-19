function EllipseTool(){
    this.name = "ellipse";
    this.icon = "assets/ellipse.jpg"

    //Initial coords
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
                noFill()
                ellipseMode(CORNERS);
                ellipse(startMouseX, startMouseY, mouseX, mouseY);
			}
        }

        else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}

    }

}