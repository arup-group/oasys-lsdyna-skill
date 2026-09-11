###  Creating a WebGL File

Selecting the WebGL command in the Images menu starts the WebGL menu.

![](../Storage/primer-22-1/primer_links/sect_8/images/webgl_menu.png)

Give the name of the HTML file to write by either using the File textbox or using the Select button. 
WebGL files can contain a large amount of data for big models so PRIMER tries to reduce the file size, compressing the coordinates by rounding them to a tolerance. This is given by the Coord tol textbox. In the above examples nodal coordinates will be rounded to 0.1 units. If your model is in metres rather than millimetres this value may need to be adjusted. Increasing the value will give smaller file sizes but may alter the visual appearance of the model.

Currently PRIMER can only write whole parts to WebGL files. Use the Select parts button to choose which parts to write to the file. The parts will be written in shaded mode to the file with the current colour and transparency set in PRIMER . Only solids, shells and beams are supported at present. Beams will be drawn with their true section properties.

Once the parts have been chosen and a filename is given Write file will write the WebGL file.

[Previous](webgl.md)  |  [Next](viewing-webgl-files-in-a-browser.md)