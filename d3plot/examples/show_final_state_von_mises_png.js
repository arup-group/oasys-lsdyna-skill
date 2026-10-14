// D3PLOT script: show the final state with von Mises stress contours and export a PNG.

var model = Model.First();
if (!model) {
    ErrorMessage("No model is loaded in D3PLOT.");
} else {
    var gw = GraphicsWindow.First();
    if (!gw) {
        ErrorMessage("No graphics window is available in D3PLOT.");
    } else {
        // Move both the scripting state and the displayed window to the last state.
        model.state = model.states;
        gw.state = gw.states;

        // Switch to contour mode and select von Mises stress.
        View.Ct();
        DialogueInputNoEcho("COMPONENT VON_MISES_STRESS");

        // Set an isometric view and refresh the plot.
        View.Show(View.ISO);
        View.Redraw();

        // Export the current graphics window as a PNG image.
        Image.WriteImage("final_state_von_mises_stress.png", { graphicsWindow: gw, format: Image.PNG });

        Message("Exported final-state von Mises stress plot to final_state_von_mises_stress.png.");
    }
}