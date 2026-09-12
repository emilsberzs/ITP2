function rectangleTool() {
  this.icon = "assets/rectangle.png";
  this.name = "Rectangle";
  this.description = "Rectangle tool. Hold Shift for square"

  // Will start it the same as lineToTool, as they are in a way similiar
  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  this.draw = function () {
    // noFill() is left only for use with rect tool
    //noFill();
    strokeWeight(setStrokeWeight)
    if (mouseIsPressed) {
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;

        loadPixels();
      } else {
          updatePixels();
          applyShapeFill();
        //// This would be the easy/sensible aproach
        // rect(
        //             startMouseX,
        //             startMouseY,
        //             mouseX - startMouseX,
        //             mouseY - startMouseY
        // )

        //     // But for the sake of understanding, lets use lines
        //     // Top
        //     line(startMouseX, startMouseY, mouseX, startMouseY);
        //     // Right side
        //     line(mouseX, startMouseY, mouseX, mouseY);
        //     // Bottom
        //     line(startMouseX, mouseY, mouseX, mouseY);
        //     // Left side
        //     line(startMouseX, startMouseY, startMouseX, mouseY);

        // Had to switch to vertexes so i can have a properly closed shape for solid/outline shapes
        beginShape();
        vertex(startMouseX, startMouseY);
        vertex(mouseX, startMouseY);
        vertex(mouseX, mouseY);
        vertex(startMouseX, mouseY);
        endShape(CLOSE);
      }
    } else if (drawing) {
      // Reset parameters
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
