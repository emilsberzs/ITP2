function HelperFunctions() {
  //p5.dom click click events. Notice that there is no this. at the
  //start we don't need to do that here because the event will
  //be added to the button and doesn't 'belong' to the object

  //event handler for the clear button event. Clears the screen
  select("#clearButton").mouseClicked(function () {
    // Clear button simply sets background to white, effectively wiping all
    // exisiting drawing off
    background(255);

    //call loadPixels to update the drawing state
    //this is needed for the mirror tool
    loadPixels();
  });

  //event handler for the save image button. saves the canvsa to the
  //local file system.
  select("#saveImageButton").mouseClicked(function () {
    // Using built in saveCanvas funtion, only two parameters needed are filename and extension,
    saveCanvas("Drawing", "jpg");
  });

  // START OWN CODE
  // Toggles fill button between filled and non filled shape
  select("#fillButton").mouseClicked(function () {
    fillShapes = !fillShapes;

    if (fillShapes) {
      this.html("Solid");
    } else {
      this.html("Outline");
    }
  });

  var alphaSlider = select("#alphaSlider");
  var alphaValue = select("#alphaValue");

  alphaSlider.input(function () {
    fillAlpha = Number(alphaSlider.value());

    // Update the display number shown beside the slider
    alphaValue.html(fillAlpha);
  });

  // Display values
  var strokeWeightSlider = select("#strokeWeight");
  var strokeWeightValue = select("#strokeValue");
  //Get value from slider and convert to number
  strokeWeightSlider.input(function () {
    setStrokeWeight = Number(strokeWeightSlider.value());

    // Update the display number beside the slider
    strokeWeightValue.html(setStrokeWeight);
  });
}


// Carry out the filling of the shape in color fetched from colour palette
function applyShapeFill() {
  if (!fillShapes) {
    noFill();
    return;
  }

  fill(
    red(colourP.selectedColour),
    green(colourP.selectedColour),
    blue(colourP.selectedColour),
    fillAlpha,
  );
}
// END OWN CODE
