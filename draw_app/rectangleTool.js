function RectangleTool(){
    this.icon = "assets/square.png";
    this.name = "rectangle";

    //Set initial coords and state
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    this.draw = function(){
        if(mouseIsPressed){
            if(startMouseX == -1){
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            }

        else{
            updatePixels();
            
            //left vertical
            line(startMouseX,startMouseY,startMouseX,mouseY)
            //right vertical
            line(mouseX,startMouseY,mouseX,mouseY)
            //top horizontal
            line(startMouseX,startMouseY,mouseX,startMouseY)
            //bottm horizontal
            line(startMouseX, mouseY,mouseX,mouseY)
            
            /*square prototype
            size = Math.abs(startMouseX-mouseX)
            //left vertical
            line(startMouseX,startMouseY,startMouseX,startMouseY+size)
            //right vertical
            line(mouseX,startMouseY,mouseX,startMouseY+size)
            //top horizontal
            line(startMouseX,startMouseY,startMouseX +size,startMouseY)
            //bottm horizontal
            line(startMouseX, startMouseY + size,mouseX,startMouseY+size)
            */
        }
        }
        else if(drawing){
            drawing = false;
            startMouseX =-1;
            startMouseY= -1;
    
        }
    }

}