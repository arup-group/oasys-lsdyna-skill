// D3PLOT script: export one PNG per state for the currently loaded model.

function padStateNumber(n) {
    var s = String(n);
    while (s.length < 4) {
        s = "0" + s;
    }
    return s;
}

var model = Model.First();
if (!model) {
    ErrorMessage("No model is loaded in D3PLOT.");
} else {
    var gw = GraphicsWindow.First();
    if (!gw) {
        ErrorMessage("No graphics window is available in D3PLOT.");
    } else {
        var outputDir = "state_images";

        // Create output folder if it does not already exist.
        if (File.Exists(outputDir) && !File.IsDirectory(outputDir)) {
            ErrorMessage("Output path exists but is not a directory: " + outputDir);
        } else {
            if (!File.IsDirectory(outputDir)) {
                if (!File.Mkdir(outputDir)) {
                    ErrorMessage("Failed to create output directory: " + outputDir);
                }
            }

            if (File.IsDirectory(outputDir)) {
                var totalStates = model.states;
                Message("Exporting " + totalStates + " state image(s) to: " + outputDir);

                for (var state = 1; state <= totalStates; state++) {
                    model.state = state;
                    gw.state = state;
                    View.Redraw();

                    var fileName = outputDir + "/state_" + padStateNumber(state) + ".png";
                    Image.WriteImage(fileName, { graphicsWindow: gw, format: Image.PNG });
                }

                Message("Finished exporting state images.");
            }
        }
    }
}