function RectangleTool() {
    this.name = "rectangleTool";
    this.icon = "assets/rectangle.png";

    // Initialize start
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false

    this.draw = function () {
        if (mouseIsPressed) {
            if (startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels()
            }

            else {
                updatePixels();

                //top
                line(startMouseX, startMouseY, mouseX, startMouseY)
                //right
                line(mouseX, startMouseY, mouseX, mouseY)
                //bottom
                line(startMouseX, mouseY, mouseX, mouseY)
                //left
                line(startMouseX, startMouseY, startMouseX, mouseY)
            }
        }

        // Finish shape and set shape on canvaas
        else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }
} 