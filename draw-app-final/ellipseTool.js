//TODO - Edge of ellipse still arent exactly where cursor is.
//TODO - Circle follows cursor around the canvas.

function ellipseTool() {
  this.icon = "assets/ellipse.png";
  this.name = "Ellipse";
  this.description = "Ellipse: Hold Shift for circle";

  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  this.draw = function () {
    strokeWeight(setStrokeWeight);
    if (mouseIsPressed) {
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels();
      } else {
        updatePixels();
        applyShapeFill();

        // Variables to enable drawing from corner instead
        // of center, as that seems more natural for painting app

        let w = mouseX - startMouseX;
        let h = mouseY - startMouseY;
        // With shift pressed, draw a circle
        if (keyIsDown(SHIFT)) {
          ellipse(
            startMouseX + w / 2,
            startMouseY + h / 2,
            // Take the smallest (absolute) of two values
            min(abs(w), abs(h)),
          );
        } else {
          // Otherwise draw a regular/irregular ellipse
          ellipse(startMouseX + w / 2, startMouseY + h / 2, w, h);
        }
      }
    } else if (drawing) {
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
