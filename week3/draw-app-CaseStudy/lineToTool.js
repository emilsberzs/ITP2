function LineToTool() {
	// Grab icon image, import it into js file and add as a property of LineToTool object
	this.icon = "assets/lineTo.jpg";

	// Give object a name
	this.name = "LineTo";

	// Initialize start coordinates
	var startMouseX = -1;
	var startMouseY = -1;

	// Initialize as not drawing yet
	var drawing = false;

	// Method of LineToTool object
	this.draw = function () {

		if (mouseIsPressed) {
			// If not drawing yet
			if (startMouseX == -1) {

				// Set coordinates for start of line to be drawn
				startMouseX = mouseX;
				startMouseY = mouseY;

				// Start drawing 
				drawing = true;

				// Loads the current value of each pixel on the canvas into the pixels array
				loadPixels();
			}

			else {
				// Needs to be called after changing values in pixels array, after loadPixels for example.
				updatePixels();

				// Draws line from start coordinates to end coordinates
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		// Stops drawing, resets coordinates and drawing flag, setting the shape
		else if (drawing) {
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
