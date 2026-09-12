function polygonTool() {
  // This one took a while to get working, but was wrth it in the end.
  // Getting both preview and then the finished vertexes behaving as they should
  // was trickier that i anticipated
  this.icon = "assets/polygon.jpg";
  this.name = "Polygon Tool";

  //Store the confirmed vertices
  let clickedPoints = [];
  let drawing = false;
  // Track mouse button sgtate to detect start of the polygon
  let previousMouse = false;

  this.draw = function () {
    strokeWeight(setStrokeWeight);
    // Detect a new mouse click inside  drawing area
    // Check for click, state, and whether the click was on actual canvas
    // Initially it did take clicks on buttons and icons as a point for vertex.
    if (
      mouseIsPressed &&
      !previousMouse &&
      mouseX >= 0 &&
      mouseX <= width &&
      mouseY >= 0 &&
      mouseY <= height
    ) {
      if (!drawing) {
        drawing = true;
        // Clear the vertices array
        clickedPoints = [];
        loadPixels();
      }
      // Push the clicked point into vertices array
      clickedPoints.push({
        x: mouseX,
        y: mouseY,
      });
    }

    // Set previous mouse to true if shape have been started
    previousMouse = mouseIsPressed;

    if (!drawing) {
      return;
    }

    updatePixels();
    // Already have it, why not use it, or atleast give user option to
    applyShapeFill();

    beginShape();
    // Loop through the array and draw all vertices
    for (let i = 0; i < clickedPoints.length; i++) {
      vertex(clickedPoints[i].x, clickedPoints[i].y);
    }

    // Preview of the line currently being drawn
    vertex(mouseX, mouseY);

    endShape();

    // Press Enter to finish drawing, and connect last vertice back to the start point
    // to create finished shape
    if (keyIsDown(ENTER) && clickedPoints.length >= 3) {
      updatePixels();
      applyShapeFill();

      beginShape();

      for (let i = 0; i < clickedPoints.length; i++) {
        vertex(clickedPoints[i].x, clickedPoints[i].y);
      }

      endShape(CLOSE);

      loadPixels();

      drawing = false;
      clickedPoints = [];
    }
  };
}
