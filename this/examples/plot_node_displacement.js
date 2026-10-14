// T/HIS script: plot displacement vs time for node 1500001 in the currently loaded model.

var modelId = Model.HighestID();
if (modelId <= 0) {
    ErrorMessage("No time-history model is currently loaded in T/HIS.");
} else {
    var m = Model.GetFromID(modelId);
    if (!m) {
        ErrorMessage("Failed to get model with ID " + modelId + ".");
    } else {
        var f = AllocateFlag();

        // Node labels are external IDs in THIS, so use negative item for label 1001.
        var nodeFlagged = m.SetFlag(f, Entity.NODE, -1500001);
        if (!nodeFlagged) {
            ReturnFlag(f);
            ErrorMessage("Node label 1500001 was not found in the loaded model.");
        } else {
            // Use displacement magnitude versus time.
            var curves = m.GetDataFlagged(f, Component.DM);
            ReturnFlag(f);

            if (!curves || curves.length === 0) {
                ErrorMessage("No displacement data was returned for node 1500001.");
            } else {
                var c = curves[0];

                var g = null;
                if (Graph.Total() > 0) {
                    g = Graph.GetFromID(1);
                }
                if (!g) {
                    g = new Graph();
                }

                c.AddToGraph(g.id);
                
                // Apply custom graph title and axis labels.
                g.auto_title = Graph.OFF;
                g.auto_xlabel = Graph.OFF;
                g.auto_ylabel = Graph.OFF;
                g.title = "Node 1500001 Displacement vs Time";
                g.xlabel = "Time";
                g.ylabel = "Displacement";

                Plot();
                Message("Plotted displacement vs time for node 1500001.");
            }
        }
    }
}