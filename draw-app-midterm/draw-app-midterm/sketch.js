//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

// START OWN CODE

// Global flag for the outline/solid helper tool
var fillShapes = false;
// ALpha variable for transparency slider, default at completely solid
var fillAlpha = 255;
// Variable for line thickness adjustment, default at 1
var setStrokeWeight = 1;
// END OWN CODE

function setup() {
  //create a canvas to fill the content div from index.html
  canvasContainer = select("#content");
  var c = createCanvas(
    canvasContainer.size().width,
    canvasContainer.size().height,
  );
  c.parent("content");

  //create helper functions and the colour palette
  helpers = new HelperFunctions();
  colourP = new ColourPalette();

  //create a toolbox for storing the tools
  toolbox = new Toolbox();

  //add the tools to the toolbox.
  toolbox.addTool(new FreehandTool());
  toolbox.addTool(new LineToTool());
  toolbox.addTool(new mirrorDrawTool());
  // MY OWN CODE
  toolbox.addTool(new rectangleTool());
  toolbox.addTool(new ellipseTool());
  toolbox.addTool(new polygonTool());

  // MY OWN CODE END
  toolbox.addTool(new sprayCanTool());
  background(255);
}

function draw() {
  //call the draw function from the selected tool.
  //hasOwnProperty is a javascript function that tests
  //if an object contains a particular method or property
  //if there isn't a draw method the app will alert the user
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
  } else {
    alert("it doesn't look like your tool has a draw method!");
  }
}
