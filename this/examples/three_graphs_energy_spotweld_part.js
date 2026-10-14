// T/HIS script:
// Create exactly three graphs:
// 1) Model energy check (total, internal, kinetic)
// 2) Spotweld axial force curves for a selected PART, plus a horizontal datum
// 3) Internal energy for every part in the model

var modelId = Model.HighestID();
if (modelId <= 0) {
    ErrorMessage("No time-history model is loaded in T/HIS.");
    Exit();
}

var m = Model.GetFromID(modelId);
if (!m) {
    ErrorMessage("Failed to access model ID " + modelId + ".");
    Exit();
}

// Build a part list so the user can pick from available parts instead of typing IDs.
var partOptions = [];
var nParts = m.GetNumberOf(Entity.PART);
for (var i = 1; i <= nParts; i++) {
    var partLabel = m.GetLabel(Entity.PART, i);
    if (!partLabel) {
        continue;
    }
    var partName = m.GetName(Entity.PART, -partLabel);
    var text = "Part " + partLabel;
    if (partName && partName !== "") {
        text = text + " - " + partName;
    }
    partOptions.push({
        label: partLabel,
        text: text
    });
}

if (partOptions.length === 0) {
    ErrorMessage("No parts were found in the loaded model.");
    Exit();
}

partOptions.sort(function (a, b) {
    return a.label - b.label;
});

var picker = {
    cancelled: true,
    selectedPartLabel: null,
    selectedPartText: "",
    datumY: 0.0
};

var pickerWindow = new Window("Three Graph Inputs", 0.30, 0.70, 0.30, 0.74);
pickerWindow.showClose = true;

new Widget(pickerWindow, Widget.LABEL, 3, 97, 3, 10, "Select part and datum value");
new Widget(pickerWindow, Widget.LABEL, 3, 97, 13, 19, "Available parts in model:");

var partList = new Widget(pickerWindow, Widget.LISTBOX, 3, 97, 20, 63);
partList.select = Widget.SELECT_SINGLE;

for (var p = 0; p < partOptions.length; p++) {
    var partItem = new WidgetItem(partList, partOptions[p].text);
    partItem._label = partOptions[p].label;
    if (p === 0) {
        partItem.selected = true;
    }
}

new Widget(pickerWindow, Widget.LABEL, 3, 52, 66, 72, "Horizontal datum value:");
var datumBox = new Widget(pickerWindow, Widget.TEXTBOX, 53, 97, 66, 72, "0.0");

var statusLabel = new Widget(pickerWindow, Widget.LABEL, 3, 97, 74, 80, "");
statusLabel.foreground = Widget.COLOUR_WARNING;

var runBtn = new Widget(pickerWindow, Widget.BUTTON, 56, 76, 84, 94, "Create Graphs");
runBtn.category = Widget.CATEGORY_SAFE_ACTION;
var cancelBtn = new Widget(pickerWindow, Widget.BUTTON, 78, 97, 84, 94, "Cancel");

runBtn.onClick = onPickerRun;
cancelBtn.onClick = onPickerCancel;
pickerWindow.onClose = onPickerClose;

pickerWindow.Show();
Window.StartLoop();

if (picker.cancelled) {
    ErrorMessage("Input window cancelled.");
    Exit();
}

var selectedPartLabel = picker.selectedPartLabel;
var selectedPartText = picker.selectedPartText;
var datumY = picker.datumY;

var g1 = Graph.GetFromID(1);
if (!g1) {
    g1 = new Graph();
}

// Remove curves left on the retained graph from an earlier session or script run.
var existingCurveIds = g1.GetAllCurveIDs();
for (var curveIndex = 0; curveIndex < existingCurveIds.length; curveIndex++) {
    g1.RemoveCurveID(existingCurveIds[curveIndex]);
}

// Create only two new graphs; together with retained g1 this gives exactly three.
var g2 = new Graph();
var g3 = new Graph();

g1.active = Graph.OFF;
g2.active = Graph.OFF;
g3.active = Graph.OFF;

function onPickerRun() {
    var items = partList.WidgetItems();
    var selectedItem = null;
    for (var ii = 0; ii < items.length; ii++) {
        if (items[ii].selected) {
            selectedItem = items[ii];
            break;
        }
    }

    if (!selectedItem) {
        statusLabel.text = "Select one part from the list.";
        return;
    }

    var datumValue = parseFloat(datumBox.text);
    if (isNaN(datumValue)) {
        statusLabel.text = "Datum must be a valid number.";
        return;
    }

    picker.selectedPartLabel = selectedItem._label;
    picker.selectedPartText = selectedItem.text;
    picker.datumY = datumValue;
    picker.cancelled = false;

    pickerWindow.Hide();
    Window.EndLoop();
}

function onPickerCancel() {
    picker.cancelled = true;
    pickerWindow.Hide();
    Window.EndLoop();
}

function onPickerClose() {
    picker.cancelled = true;
    Window.EndLoop();
}

// Graph 1: Model energy check.
var totalCurves = m.GetDataFlagged(0, Component.GTE);
var internalCurves = m.GetDataFlagged(0, Component.GIE);
var kineticCurves = m.GetDataFlagged(0, Component.GKE);

var g1Count = 0;
if (totalCurves && totalCurves.length > 0 && totalCurves[0]) {
    totalCurves[0].title = "Total Energy";
    totalCurves[0].style = LineStyle.SOLID;
    totalCurves[0].width = LineWidth.NORMAL;
    totalCurves[0].AddToGraph(g1.id);
    g1Count++;
}
if (internalCurves && internalCurves.length > 0 && internalCurves[0]) {
    internalCurves[0].title = "Internal Energy";
    internalCurves[0].style = LineStyle.SOLID;
    internalCurves[0].width = LineWidth.NORMAL;
    internalCurves[0].AddToGraph(g1.id);
    g1Count++;
}
if (kineticCurves && kineticCurves.length > 0 && kineticCurves[0]) {
    kineticCurves[0].title = "Kinetic Energy";
    kineticCurves[0].style = LineStyle.SOLID;
    kineticCurves[0].width = LineWidth.NORMAL;
    kineticCurves[0].AddToGraph(g1.id);
    g1Count++;
}

g1.auto_title = Graph.OFF;
g1.auto_xlabel = Graph.OFF;
g1.auto_ylabel = Graph.OFF;
g1.title = "Model Energy Check";
g1.xlabel = "Time [s]";
g1.ylabel = "Energy [J]";

if (g1Count === 0) {
    Message("Graph 1: no global energy curves were found.");
}

// Graph 2: Spotweld axial force plus datum line.
var spotweldCurves = [];
var fPart = AllocateFlag();
var partFlagged = m.SetFlag(fPart, Entity.PART, -selectedPartLabel);

if (partFlagged) {
    var swCurves = m.GetDataFlagged(fPart, Component.SW_F);
    if (swCurves && swCurves.length > 0) {
        for (var j = 0; j < swCurves.length; j++) {
            if (swCurves[j] && swCurves[j].is_null !== 1 && swCurves[j].npoints > 0) {
                spotweldCurves.push(swCurves[j]);
            }
        }
    }

    // Fallback for models where spotweld data is represented as beam axial force.
    if (spotweldCurves.length === 0) {
        var bfxCurves = m.GetDataFlagged(fPart, Component.BFX);
        if (bfxCurves && bfxCurves.length > 0) {
            for (var k = 0; k < bfxCurves.length; k++) {
                if (bfxCurves[k] && bfxCurves[k].is_null !== 1 && bfxCurves[k].npoints > 0) {
                    spotweldCurves.push(bfxCurves[k]);
                }
            }
        }
    }
}

ReturnFlag(fPart);

for (var sc = 0; sc < spotweldCurves.length; sc++) {
    spotweldCurves[sc].style = LineStyle.SOLID;
    spotweldCurves[sc].width = LineWidth.NORMAL;
    spotweldCurves[sc].AddToGraph(g2.id);
}

g2.auto_title = Graph.OFF;
g2.auto_xlabel = Graph.OFF;
g2.auto_ylabel = Graph.OFF;
g2.title = "Spotweld Axial Forces: " + selectedPartText;
g2.xlabel = "Time [s]";
g2.ylabel = "Axial Force [N]";

var datumAcronym = "SW_PART_DATUM";
if (Datum.Exists(datumAcronym)) {
    Datum.Delete(datumAcronym);
}

// Datum constructor auto-adds to active graphs, so make only g2 active.
g1.active = Graph.OFF;
g2.active = Graph.ON;
g3.active = Graph.OFF;

var d = new Datum(datumAcronym, Datum.CONSTANT_Y, datumY);
d.label = "Datum = " + datumY;
d.line_colour = Colour.BLACK;
d.line_style = LineStyle.SOLID;
d.line_width = LineWidth.BOLD;
d.label_position = Datum.LABEL_ABOVE_RIGHT;
d.AddToGraph(g2.id);

g1.active = Graph.OFF;
g2.active = Graph.OFF;
g3.active = Graph.OFF;

if (!partFlagged) {
    Message("Graph 2: selected part could not be flagged.");
} else if (spotweldCurves.length === 0) {
    Message("Graph 2: no spotweld axial force curves were found for selected part.");
}

// Graph 3: Internal energy of all parts.
var fAllParts = AllocateFlag();
m.FlagAll(fAllParts, Entity.PART);
var partEnergyCurves = m.GetDataFlagged(fAllParts, Component.GIE);
ReturnFlag(fAllParts);

var g3Count = 0;
if (partEnergyCurves && partEnergyCurves.length > 0) {
    for (var q = 0; q < partEnergyCurves.length; q++) {
        if (!partEnergyCurves[q] || partEnergyCurves[q].is_null === 1 || partEnergyCurves[q].npoints <= 0) {
            continue;
        }
        partEnergyCurves[q].style = LineStyle.SOLID;
        partEnergyCurves[q].width = LineWidth.NORMAL;
        partEnergyCurves[q].AddToGraph(g3.id);
        g3Count++;
    }
}

g3.auto_title = Graph.OFF;
g3.auto_xlabel = Graph.OFF;
g3.auto_ylabel = Graph.OFF;
g3.title = "Internal Energy of All Parts";
g3.xlabel = "Time [s]";
g3.ylabel = "Internal Energy [J]";

if (g3Count === 0) {
    Message("Graph 3: no part internal energy curves were found.");
}

Plot();

Message("Created exactly 3 graphs in T/HIS.");
Message("Selected part: " + selectedPartText + ", datum: " + datumY);
Message("Graph 1 curves: " + g1Count);
Message("Graph 2 spotweld axial curves: " + spotweldCurves.length);
Message("Graph 3 part internal energy curves: " + g3Count);
