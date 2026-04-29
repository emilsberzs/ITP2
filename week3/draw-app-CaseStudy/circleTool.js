function CircleTool() {
    this.icon = "assets/circle.png";
    this.name = "circleTool";
    var startMouseX = -1;
    var startMouseY = -1;

    var drawing = false;

    this.draw = function () {
        if (mouseIsPressed) {
            if (startMouseX == -1) {
                //alert('Mouse pressed');
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            }
            else {
                updatePixels();
                stroke(0);
                strokeWeight(1);
                noFill();

                ellipseMode(CENTER);
                ellipse(
                    startMouseX,
                    startMouseY,
                    Math.max(
                        abs(mouseX - startMouseX) * 2,
                        abs(mouseY - startMouseY) * 2
                    )
                )


            }
        }

        else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }
}