function LineToTool() {
  // Set icon for tool to be displayed in the toolbox
  this.icon = "assets/lineTo.jpg";
  // Tool name so it can be referred to
  this.name = "LineTo";

  this.description = "Straight Line Tool"

  // Stores coordinats for where to start drawing from, -1 placeholders simply fork as flags
  // to indicate that no drawing is being made yet
  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  // Function is being called continuously, while tool is selected
  this.draw = function () {
    strokeWeight(setStrokeWeight)
    // If tool selected, and mouse pressed, start drawing
    if (mouseIsPressed) {
      // If drawing is not started yet, set coordinates where mouse button was pressed as start coordinates
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        // Flag drawing as in progress
        drawing = true;
        // Needed so only the single active line is stored not full trailing history
        loadPixels();
      } else {
        // Restores the saved canvas
        updatePixels();
        // Draws line from coordinates whee mouse button was pressed, to where it is now
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    }
    // Kicks in when mouse button is released
    else if (drawing) {
      // Resets tool parameters to initial ones.
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
