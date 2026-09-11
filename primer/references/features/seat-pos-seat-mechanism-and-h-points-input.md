# Seat Mechanism and H-Points Input

## Visualise and Sketch

In this panel, you can view assemblies and sketch connections. Select the relevant assemblies/connections from the drop-down and press Sketch/Visualise.

![](../Storage/primer-22-1/seat-pos-seat-mechanism-and-h-points-input/seat-pos-seat-mechanism-and-h-points-input-2025-04-28.png)

## Select Seat Track Points

![](../Storage/primer-22-1/seat-pos-seat-mechanism-and-h-points-input/seat-pos-seat-mechanism-and-h-points-input-2025-04-22-1.png)

You can define the seat track curve points using an .iges file, a CSV file, or by selecting nodes directly in the model. After selecting the points, click Process Points to extract the seating positions—this will activate the Position Seat button.

**Seat Track File (.igs)**: This option allows you to load points from an IGES file (.iges). Make sure the file contains exactly six curves (as shown below, highlighted in black) with curve IDs labeled from 1 to 6. The dotted red curve represents the centerline, which is calculated automatically by the tool. For seats without height adjustment, the file should contain only one curve labeled as ID 1.![](../Storage/primer-22-1/seat-pos-seat-mechanism-and-h-points-input/seat-pos-seat-mechanism-and-h-points-input-2025-04-28-1.png)

**H-Point File**: Select this option to load points from a CSV text file. The file should follow this format

![](../Storage/primer-22-1/seat-pos-seat-mechanism-and-h-points-input/seat-pos-seat-mechanism-and-h-points-input-2025-04-28-2.png)

**Seat Track Nodes**: Select this option to pick points directly from the model. You can either use the currently loaded model or load new model that contains the seat track points you want to select.

Once the seat points are successfully extracted, the image on the right will update, and a red point will appear to indicate the currently selected regulation.

## Select a Regulation

You can select a different regulation for performing multiple seat positioning.

![](../Storage/primer-22-1/seat-pos-seat-mechanism-and-h-points-input/seat-pos-seat-mechanism-and-h-points-input-2025-04-28-4.png)

## Position Seat

After specifying the Seat Track Points and selecting a valid seat position, the Position Seat button becomes active. Click Position Seat to begin positioning the seat.

To apply a different seat position, select another regulation from the "Mechanism and H-Points" section and click Position Seat again.

[Previous](seat-pos-seat-part-node-set-input.md)  |  [Next](seat-pos-final-seat-and-model-output.md)