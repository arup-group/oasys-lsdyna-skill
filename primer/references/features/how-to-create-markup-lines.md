###  How to Create Markup Lines

The markup procedure assumes the model is in mm. If not you should convert it so that it is.

First read in the vehicle model you want to markup. It needs to be oriented correctly for the script to work. It must be aligned with the global co-ordinate system:

* X from car front to back
* Y from car left to right
* Z from the ground up

The centre line along the vehicle needs to be at y=0.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_8.png)

If the input vehicle model is a CAD model, toggle the top button to "CAD". This will allow you to pick "Surfaces" instead of "Parts" everywhere in the script.

![](../Storage/primer-22-1/how-to-create-markup-lines-2023-02-03-1.png)

The model can be made up of many surfaces and it could be difficult to screen pick these. One easier way is to read in a STEP file in which the surfaces have already been grouped into assemblies. This way, you can use the assembly filter in the object menu to select these surfaces.

**NOTE:** CAD model creates a meshed model based on the tessellated surfaces in PRIMER. The same number of trias are created for each surface regardless of the surface size. Therefore, the resultant mesh size may be larger or smaller than the desired mesh and hence care should be taken. The meshed model created can be inspected or written out. This model is the 'first free available' model after the input model.

With the model in the correct orientation, press the PICK PARTS... button and select the **OUTER** parts of the vehicle.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_9.png)

Next, set the ground Z-coordinate to the correct height (By default it's at 0). Press SKETCH to view it relative to the vehicle.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_10.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_11.png)

Now choose the protocol you want to use to markup the vehicle.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/protocol_list.png)

If you have selected a protocol that requires a Bonnet Rear Reference Line then you will need to press the DEFINE... button for that line (it should be red, to indicate that something needs to be done).

All the other DEFINE... buttons should be green to indicate that they have enough information to create the lines.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_13.png)

This will open a new window.

Press the PICK BONNET... button to select the **OUTER** bonnet part(s) (pick the cowl if you want to include this).

Press the PICK WINDSCREEN... button to select the **OUTER** windscreen part(s).

Once this is done press APPLY . The DEFINE... button for the Rear Reference Line should now be green.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_26.bmp)

The protocols state that for the upper bumper line, if the bumper is identifiable the reference line should be marked on those parts.
Use the BUMPER PARTS button to select the parts that make up the bumper. If you don't select any parts the script will just use the parts selected at the top of the menu (i.e. it assumes the bumper is unidentifiable).

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_104.png)

From v6 of the EuroNCAP protocol the extent of the bumper test zone is defined as the area limited by the bumper corners or the outermost ends of the bumper beam.
Use the BUMPER BEAM button to select the parts that make up the bumper beam. If you don't select any parts the script will just define the test zone via the bumper corners.
From v8 of the EuroNCAP protocol you must select the bumper beam parts as they are used to calculate the Internal Beam Reference Line.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_103.png)

From the 03 series of amendments of the UN R127 protocol (GTR / UN R127 (2022)), as well as the GB 24550 202X protocol, the handling of the windscreen zone calculation must be defined. Clicking DEFINE... for the Windscreen Zone will open the Windscreen Zone Markup Parameters window. In this window, a Windscreen Obscuration part can be specified via the Pick obscuration... button. Alternatively, if the vehicle model does not contain an obscuration part, the windscreen zone calculation method can be altered to instead use the free edge of the windscreen part by selecting the No obscuration part tick box.

![](../Storage/primer-22-1/windscreen_zone_menu.png)

The APPLY button at the bottom of the main menu should now be active. Press this to create the markup the lines. They are created as beam elements in a new model.

####  Additional options

There are some settings that can be changed which control how the lines are created. Normally the default settings will be acceptable and you will not need to modify them. However, below is a description of each setting.

The markup lines are only calculated on the left hand side of the vehicle and reflected to the right hand side. You can turn off the reflection with this option.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_16.png)

To help with debugging you can turn this option on to visualise what the markup process is doing.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_17.png)

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_19.png)

The markup lines are created as beam elements. Turning this option on will write out the elements to keyword files.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_18.png)

For each reference line there is a DEFINE... button where settings for that line can be changed. Normally you will not need to change any of the settings.

#####  Bonnet Leading Edge:

The Car left y-coord is the coordinate of the left hand side of the vehicle. By default it will be set to the extreme left hand side of the selected outer parts, but you can change it if you wish. The line will be calculated up to this coordinate.

The Beam Length is the length the beams will be when creating the lines. A smaller length will give a more accurate line, but will take longer to calculate.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_15.png)

The Offset distance is only valid for some protocols. If selected an additional line will be created, offset from the main line and head impact points will only be created up to the offset line.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_21.png)

#####  Side Reference Line:

The Start x-coord and End X-coord are the coordinates of the front and back of the vehicle. By default they will be set to the extreme front and back of the selected outer parts, but you can change it if you wish. The line will be calculated between to these coordinates.

The Beam Length is the length the beams will be when creating the lines. A smaller length will give a more accurate line, but will take longer to calculate.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_22.png)

The Offset distance is only valid for some protocols. If selected an additional line will be created, offset from the main line and head impact points will only be created up to the offset line.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_23.png)

#####  Wrap Around Distances:

The wrap around distances can be modified here. The number of WADs will depend on the protocol selected.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/wad_menu.png)

#####  Bumper Reference Lines:

The Bumper left y-coord is the coordinate of the left hand side of the vehicle. By default it will be set to the extreme left hand side of the selected outer parts, but you can change it if you wish. The line will be calculated up to this coordinate.

The Beam Length is the length the beams will be when creating the lines. A smaller length will give a more accurate line, but will take longer to calculate.

The calculation of the Lower Line , Upper Line and Corner point can be turned off by unticking the checkboxes.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_25.png)

#####  Rear Reference Line:

The Bonnet left y-coord is the coordinate of the left hand side of the bonnet. By default it will be set to the extreme left hand side of the selected bonnet parts, but you can change it if you wish. The line will be calculated up to this coordinate.

The Beam Length is the length the beams will be when creating the lines. A smaller length will give a more accurate line, but will take longer to calculate.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_26.bmp)

The Offset distance is only valid for some protocols. If selected an additional line will be created, offset from the main line and head impact points will only be created up to the offset line.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_27.png)

Find wrrl using stick method is only valid for protocols that require a windscreen rear reference line. By default it is turned off meaning that the windscreen rear reference line is calculated as the rearmost edge of the windscreen part. If the option is turned on, however, the windscreen rear reference line is calculated by determining where a vertical stick rotated 45 rearwards would come into contact with the windscreen.

##### Windscreen zone offsets:

The Windscreen Zone Markup Parameters window allows the alteration of the Windscreen zone Front line offset, Rear line offset, and Side line offset. If the No obscuration part option has been selected, an optional Pseudo obscuration width can be specified to mimic the existence of an obscuration part. This width will be added to the front and side line offsets - the pseudo obscuration width isn't added to the rear line offset as the rear line is always measured from the windscreen free edge.

![](../Storage/primer-22-1/WindscreenOffsetLines.png)

#####  Angles

If you press the SET ANGLES button you can change the angles of the sticks used to markup the lines.

This can be used for to see how sensitive your results are to changes in how the lines are marked up.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_28.bmp)

#####  Read/Write Settings

The settings used to create the lines can be saved to a file and read in later sessions of PRIMER.

All the settings described above are saved to the file, e.g. protocol, outer part IDs, Z ground coordinate, beam lengths, angles etc.

It is a simple CSV file so could be created from an external source if you would like.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_29.png)

#####  Sketch/Only Parts

The selected parts can be Sketched or Only'd to view what has been selected.

![](../Storage/primer-22-1/primer_links/sect_6/pedestrian_markup/pedmarkup_105.png)

[Previous](introduction-pedestrian-markup.md)  |  [Next](how-to-create-models.md)