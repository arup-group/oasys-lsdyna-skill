## 

###  (DEFINE_) CURVE/TABLE: Defining Load Curves

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](define-curvetable-defining-load-curves.md#delete)

Other curve suffices:

[_COMPENSATION](define-curvetable-defining-load-curves.md#curve_compensation) 
 [_ENTITY](define-curvetable-defining-load-curves.md#curve_entity) 
 [_FEEDBACK](define-curvetable-defining-load-curves.md#curve_feedback) 
 [_FUNCTION](define-curvetable-defining-load-curves.md#curve_func) 
 [_SMOOTH](define-curvetable-defining-load-curves.md#curve_smooth) 
 [_TRIM](define-curvetable-defining-load-curves.md#curve_trim)
 
The \*DEFINE\_CURVE keyword is used to create "loadcurves". These are lists of two or more (x, y) data points which are used extensively for defining loading (e.g. force vs. time), material properties (e.g. stress vs. strain) and other varying data in an Ansys LS-DYNA analysis.

The \*DEFINE**\_**TABLE keyword defines a table of loadcurves. A table is an ordered set of data pairs consisting of a value and a loadcurve id, typically a strain rate and a stress:strain characteristic. It is an unfortunate quirk of the Ansys LS-DYNA keyword input that the loadcurves belonging to a table **must follow it in sequential order**. PRIMER endeavours to maintain this ordering but care must be taken if decks are edited manually, or split into \*INCLUDE files, to ensure that this order is adhered to. In later versions of Ansys LS-DYNA the \_2D option has been added to remove the need for this strict ordering. PRIMER offers a model check to warn of existing \*DEFINE\_TABLE cards and offers an autofix to convert them to \*DEFINE\_TABLE\_2D.

Loadcurves do not have any explicit data types or units associated with them, this is implied by the items which reference them. It is legal, but generally not sensible, for any number of unrelated items to use the same loadcurve. It may cause problems for Unit change operations.

PRIMER keeps track of what references each loadcurve, and hence the implied data types and units for each axis, which makes it possible to detect and correct conflicting usage.

Loadcurves use unique labels and, although part of the \*DEFINE  ****    **** keyword, their labels do not clash with other \*DEFINE\_xxx entities  ***except tables***  ([see below](define-curvetable-defining-load-curves.md#LoadcurvesandTables)). For example it is legal to have (\*DEFINE\_)BOX #1 and (\*DEFINE\_)CURVE #1.

####  LOADCURVES

**NOTE: TABLE** and **CURVE**   **** definitions occupy the same labelling space, and are interchangeable in some contexts. Thus it is  ***not***  legal to have **TABLE#1** and **CURVE#1** .

| This figure shows the main menufor the editing of curves. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions). The COMPARE option is specific to curves, and is described [below](define-curvetable-defining-load-curves.md#curve_compare).<br> <br>The table and curve main menu panels are similar. | ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_lcurmenu.gif) |
| --- | --- |

#####  CREATE Making a new loadcurve definition

 This figure shows the basic
CREATE
/
UPDATE CURVE
panel. 

![](../Storage/primer-22-1/primer_links/sect_5/define/create_loadcurve.PNG) 

| The loadcurve editing panel layout is shown in this figure. <br>There are six main areas in the panel, each area grouping together buttons of similar function.<br><ol><li><a href="define-curvetable-defining-load-curves.md#createabort"><strong>Create/abort loadcurve</strong></a></li> <li><b style="font-size: 11pt;"><a href="define-curvetable-defining-load-curves.md#displaybuttons">Loadcurve display buttons</a></b></li> <li><b style="font-size: 11pt;"><a href="define-curvetable-defining-load-curves.md#options">*DEFINE_CURVE options</a></b></li> <li><b style="font-size: 11pt;"><a href="define-curvetable-defining-load-curves.md#plot">Loadcurve plot</a></b></li> <li><b style="font-size: 11pt;"><a href="define-curvetable-defining-load-curves.md#points">Loadcurve points</a></b></li> <li><b style="font-size: 11pt;"><a href="define-curvetable-defining-load-curves.md#pointmodify">Loadcurve modification</a></b></li> </ol> | ![](../Storage/primer-22-1/curve_sections.PNG) |
| --- | --- |

| **(1) Create/abort loadcurve**<br><br>![](../Storage/primer-22-1/primer_links/sect_5/define/curve_create_abort.PNG) |
| --- |
| CREATE <br>This will exit the current loadcurve creation, saving the curve in the database. This button will be inactive (greyed out) until a label ( **LCID**) is given for the loadcurve and there are at least two points in the curve. |
| CANCEL<br><br>Aborts from the current loadcurve creation without saving any of the modifications. |
| X\_REFS <br>If the loadcurve has any cross references in the database they are displayed in a dialogue window. If there are no cross references to this curve [ **no cross references found**] will be displayed.<br> ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_xref.gif) |
| RESET ALL <br>Resets the curve back to its initial state. Any points which have been added or modified are lost. |
| COPY IN <br>Copies the data from an existing loadcurve into the loadcurve currently being created. Any points which have been added since starting the create will be lost. |
| CHECK <br>Checks the loadcurve currently being created for any errors.<br> ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_check.gif) |
| SKETCH <br>Sketch is currently inoperative. |

| **(2)**  **Loadcurve display buttons**   ****  **![](../Storage/primer-22-1/loadcurve_display_buttons.PNG)** |
| --- |
| **GRID, LINES & SYMBOLS**  <br>These buttons toggle whether the grid, the curve line and the curve symbols are drawn on the plot. |
| **AUTOSCALE**  <br>Resets the scaling on the loadcurve plot so the curve just fits the screen and replots the loadcurve. |
| **ZOOM**  <br>Two points are selected using the left mouse button. **Xmin, Xmax, Ymin** and **Ymax**   **** are updated and the curve is replotted |
| **PLOT**  <br>The curve is replotted as the scale currently selected by  ****  **Xmin, Xmax, Ymin** and **Ymax** . |
| **Xmin, Xmax, Ymin & Ymax**  <br>Typing in a value changes the limits for plotting the curve.<br> <br>By default when creating a curve **Xmin** and **Ymin** are -1. **Xmax** and **Ymax** are 1. When modifying an existing curve they are set so the curve just fits on the screen (equivalent to **AUTOSCALE** ) |
| **LOG** <br>The two log buttons can be used to set the graph x and/or y axis to a logarithmic scale. When a log button is selected, the axis min gets set to the closest power of 10 less than the positive minimum value and the max is set to the closest power of 10 greater than the positive maximum value. The same applies when the ‘Autoscale’ button is pressed when in log mode. The axis min/max can be changed to any value in the corresponding textboxes. |
| **Plot DY** **NA**  <br>Will display the curve points discretized according to Ansys LS-DYNA rules. |
| **WHITE BGD**  <br>Toggle between white and black background |
| **EDIT**  <br>When toggled on, this button can be used to drag, insert or delete points from the displayed curve(s). Right click on the button to change the option. In drag mode, left mouse click and hold on a point on the curve, then drag. In insert mode, left mouse click at a point on the curve where you wish to add a point. In delete mode, either left mouse click on a point on the curve to delete it, or left mouse click hold to drag a box around a number of points to delete them. |
| **INC SCALE+OFFSET**  <br>By default when a curve is plotted on the screen the offsets ( **SFA, SFO** ) and scale factors ( **OFFA, OFFO** ) are not included. If this button is pressed then they are included in the plot. To ensure that the user is aware of this the **SFA, SFO, OFFA** and **OFFO** text boxes turn green (by default they are blue) and the curve line and symbols are plotted in green. Pressing the button again toggles the inclusion off.<br> <br>Loadcurve values are scaled after the offsets are applied.<br> <br>*Abcissa value = SFA* x *(Defined value + OFFA)*<br> <br>*Ordinate value = SFO* x *(Defined value + OFFO)* |

| **(3) \*DEFINE\_CURVE options**<br> <br>**![](../Storage/primer-22-1/primer_links/sect_5/define/fig_curve_3.gif)** |
| --- |
| **LCID**  <br>Label for loadcurve. If there is no label then the label is shown as **&lt;none&gt;** and the box is red rather than the default blue. A new label can be typed in the box or the right mouse button pressed to get the standard label popup box. |
| **SIDR**  <br>Sets whether the loadcurve will be used in a transient or dynamic relaxation analysis. Either type in the value or use the right mouse button to bring up a popup menu.<br> ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_sidr_pop.gif) |
| **SFA, SFO, OFFA & OFFO**  <br>Scale factors and offsets for the loadcurve abcissa (x) and ordinate (y) values. |
| **DATTYP**  <br>Sets the type of data in the loadcurve: generally this is set to zero. Either type in a value or use the right mouse button to bring up a popup menu.<br> ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_datt_pop.gif) |

| **(4)**  **Loadcurve plot** <br>The loadcurve currently being created or modified is plotted in the bottom left of the loadcurve panel.<br> <br>If the curve has no cross references then the units for the X and Y axes are shown as Unknown units. If there are cross references, the first reference that PRIMER finds is used and the units displayed on the X and Y axes. All the cross references for the curve can be displayed with the LIST\_XREFS button.<br> <br>The visibility of the curve lines, symbols and the grid is controlled by the GRID, LINES and SYMBOLS buttons.<br> <br>If the INC\_SCALE+OFFSET button is selected, the curve is drawn in green instead of the default yellow to inform the user that the scale factors and offsets are included in the plot.<br> <br>The plot can be updated at any time by pressing the  **PLOT**  button.<br> ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_curve_4.gif) |
| --- |

| **(5) Loadcurve points** <br>When a curve is created the user is forced into INS\_AFTER mode until a point is created. The user will not be able to change to another mode ( MODIFY, INS\_BEFORE or DELETE ) until this point is created.<br> <br>The **X** and **Y**   ****  **value** boxes for this initial point are blank and coloured green to indicate that a number is required. If a number is typed into one of the boxes the box turns blue.<br> <br>When numbers are present for X and Y the line for point 1 becomes blue and point 2 becomes green. As many points as necessary can be added using this method. | ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_points_1.gif) |
| --- | --- |
| When there is more than one point the current mode can be changed at any time by pressing the MODIFY, INS\_BEFORE or DELETE buttons. <br>Any incomplete points (i.e. if either the X or Y values [or both] are blank) will be deleted when changing mode. If the number of points in the loadcurve is greater than 10 a sliding bar appears by the side of the points. The mouse can be used to select which points are visible in the text box. Drag the bar up and down with the left mouse button to move between the points. Alternatively clicking on the up (or down) arrow with the left, middle or right mouse button, increases (or decreases) the points shown by 1, 10 or 100 respectively. The value of a point can be changed in any mode by clicking on the X or Y value box and typing in a number. | ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_points_2.gif) |

| **(6) Loadcurve modification**<br> <br><br> <br><br>| **MODIFY** |<br>| --- |<br><br> <br>Selects modify mode for loadcurve point editing. In this mode only the values of the points can be changed. No points can be added or deleted.<br> <br>When in this mode the point buttons are greyed out so they cannot be selected.<br> <br>If a point is currently being edited in INS\_BEFORE or INS\_AFTER mode it is deleted before the modify mode is selected. | **![](../Storage/primer-22-1/primer_links/sect_5/define/xy_modify.gif)** |
| --- | --- |

 **** 

| | **INS\_BEFORE & INS\_AFTER** |<br>| --- |<br><br><br>Select either INS\_BEFORE or INS\_AFTER mode for loadcurve point editing. This allows points to be added to the curve.<br> <br>When in these modes the point buttons turn green. If a point is selected by clicking with the mouse a new point is created either before or after (depending on which mode) the selected point. If a point is currently being added in this mode and another point is selected the current point is deleted and the new point added. | ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_insert.gif) |
| --- | --- |
| **INS\_BEFORE & INS\_AFTER** |
| | **DELETE** |<br>| --- |<br><br><br>Selects delete mode for loadcurve point editing. In this mode points can be deleted as well as being able to change the values of the points.<br><br>When in this mode the point buttons turn red. If a point is selected by clicking with the mouse it is deleted. If a point is currently being edited in INS\_BEFORE or INS\_AFTER mode it is deleted before the delete mode is selected. | **![](../Storage/primer-22-1/primer_links/sect_5/define/xy_delete.gif)** |
| **DELETE** |
| TOP & END  <br>Moves the slider automatically to the top or end of the points for the loadcurve |  |
| **GOTO\_POINT**   <br>Moves the slider so that the point number which is typed in is visible. |  |
| **IMPORT**<br> <br>Allows a loadcurve to be read from an external file or from a database in PRIMER . Pressing the  **IMPORT**  button brings up a new set of buttons instead of the loadcurve points.<br> <br>Two types of file can be read into the loadcurve editor. T/HIS curve files and raw x,y data. The formats of these files is given in [Appendix H](1-this-curve-file-format.md). The format of the file to import is selected by using the RADIO buttons. The filename can then either be typed in the file text box or selected by browsing using the ? button. T/HIS curve files can contain multiple curves in one file. In this case the curve number in the file to read should be given. If no number is given the first curve in the file will be read. For the XY data/CSV data option you can specify the number of lines to skip at the start of the file, and also the columns for the X and Y data, should they not be in column 1 and 2. | ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_import.gif)<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_import_2.gif) |
| **EXPORT**   <br>Allows a loadcurve to be written to an external file from PRIMER . Pressing the  **EXPORT**  button brings up a new set of buttons instead of the loadcurve points.<br> <br>Two types of file can be written from the loadcurve editor. T/HIS curve files and CSV x,y data. The formats of the T/HIS curve data is given in [Appendix H](1-this-curve-file-format.md). The format of the file to import is selected by using the RADIO buttons. The filename can then either be typed in the file text box or selected by browsing using the ? button. | ![](../Storage/primer-22-1/primer_links/sect_5/define/xy_export.gif) |
| READ  <br>Reads the selected file into the loadcurve editor and plots the curve. Any modifications to the current curve will be lost when importing a file. |  |
| CANCEL  <br>Aborts the import and returns to the normal loadcurve editor window. |  |
| DATABASE  <br>The DATABASE button starts the loadcurve database function in PRIMER .<br> <br>A list of the available loadcurve databases will be shown on the screen. When one is selected a curve can be read from the database.<br> <br>For further details on databases see [Databases: Importing Data from Pre-Defined Database Files](databases-importing-data-from-pre-defined-database-files.md) and [Appendix A](i-primer-database-format.md). | ![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_4.gif) |

#####  COPY Copy existing loadcurve(s) to make a new loadcurve(s).

The selected loadcurves are copied. (Loadcurves do not "own" anything, so the concept of recursive copying does not apply.)

#####  MODIFY Modifying the attributes of an existing loadcurve.

MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the loadcurve definition will not be made permanent until the UPDATE\_CURVE button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

#####  DELETE Delete existing loadcurve definitions.

The selected loadcurves are deleted.

Loadcurves do not "own" anything, so the concept of recursive deletion does not apply, however a loadcurve that is referred to (i.e. "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the loadcurve removed.
 
#####  SKETCH Sketch loadcurve definitions.

SKETCH is currently inoperative.
 
#####  LIST List loadcurve summaries to screen

The selected loadcurves are summarised on the screen.
 
#####  CHECK Check loadcurve definitions for errors

The selected loadcurve definitions are run through the standard checking routines.

| TEXT_EDIT  <br>The standard "Text edit" function works on Curves, Tables and Functions in the normal way with one special exception for \*DEFINE\_TABLE.<br> <br>A \*DEFINE\_TABLE keyword in Ansys LS-DYNA is exceptional since it takes the form <br> <br> \*DEFINE\_TABLE  <br> *N lines of factors on loadcurves*   <br> \*DEFINE\_CURVE  *first of N following loadcurves*  <br> \*DEFINE\_CURVE  *second of N following loadcurves etc to the Nth following loadcurve*<br> <br>This means that the order of keywords in the keyword deck is significant and PRIMER must take care that a table is not separated from "its" associated loadcurves during keyword input and output. |
| --- |
| As a consequence when a file is written out for text editing it will contain both the \*DEFINE\_TABLE definition itself, as you would expect, but also vestigial \*DEFINE\_CURVE definitions for all the associated loadcurves. These "vestigial" definitions will only contain the first line of the curve giving its label and factors SFA, etc. This gives the impression that the values on these first lines can be edited and that these changes will be re-imported back into PRIMER when the Text edit process is complete.<br> <br>Prior to version 18 this was not the case: such changes would be ignored. From version 18 onwards these changes  ***are***  read and applied.<br> <br>Any such changes are made directly to the loadcurve definitions in the database, so the sequence:<br><ul> <li>Open editor on *DEFINE_TABLE </li> <li>Use Text edit to edit it externally </li> <li>Change a value on any of the *DEFINE_CURVE definitions </li> <li>Save and exit the editor </li> </ul> <br>Will import the changes to the loadcurves immediately. If the editing panel is then "Aborted" the \*DEFINE\_TABLE itself will not be changed, since editing takes place on a scratch definition, however any changes to the associated loadcurves  ***will***  remain.<br> <br>PRIMER detects this situation and warns you when you quit the edit. However if the changes need to be reverted you will have to do this manually. |

| RENUMBER Change loadcurve labels  <br>RENUMBER lets you change any or all loadcurve labels within a given model using [the standard renumbering panel.](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel)To change the label of an individual loadcurve it may be simpler just to MODIFY it. |
| --- |

#####  T/HIS Send load curve to T/HIS

T/HIS lets you send any load curve to the linked session of T/HIS, which lets you perform various operation on the curve(s), before sending them back to PRIMER . To send a load curve, go to a load curve edit panel and hit T/HIS . In case there is no T/HIS session linked to PRIMER , it will launch T-HIS and then load the curve. A limit of 1200 points on the curve is set that can be sent to T/HIS without a linked T-HIS session. After an active T-HIS linked session, it should be fine to send curves more than 1200 points. See [The POST Panel](the-post-panel.md#how_it_works) for more details about shared memory link between T-HIS and PRIMER .

It is also possible to send DEFINE\_CURVE\_FUNCTION curve definitions from PRIMER to T/HIS for evaluation, as long as the expression only depends on TIME and not any other values that can change during the run. If the curve is suitable, the T/HIS button will be active. The curve will be plotted from TIME = 0 until the termination time specified on the DATABASE\_CONTROL\_TERMINATION card and any parameters appearing in the expression will be preserved. The equation can be edited in T/HIS by right-clicking and seleting 'Edit equation', before being sent back to PRIMER to update the original deifinition, again by right-clicking and selecting 'Update curve in PRIMER'.

![this_curve](../Storage/primer-22-1/primer_links/sect_5/define/curve_send_to_this.PNG)
 
####  CURVE COMPARE

From the main \*DEFINE\_CURVE panel, there is a COMPARE option. This is used to visually plot and compare multiple curves on one graph.

![](../Storage/primer-22-1/primer_links/sect_5/define/curve_compare_1.png)

After selecting the curves you wish to compare, the curve compare panel will open.

![](../Storage/primer-22-1/curve_compare_v20.PNG)

The curve compare panel is similar to the normal curve edit panel, but there is a list of the selected curves on the left hand side. Selecting different curves in this list will display the data associated with that curve in the points list. You still have all the same options for editing the curve data on this panel.

####  TABLES

#####  CREATE/MODIFY Making/modifying a table definition

This figure shows the CREATE/UPDATE TABLE panel.

![](../Storage/primer-22-1/tablev20.PNG)

The functionality of the table editing panel is similar to the panel for loadcurves. The following features are briefly described.

**Adding a new entry:** when a value and loadcurve id (select, create, or type in) are entered into the top box ADD\_ENTRY will become active. The new entry will automatically be added to the correct row.

**Deleting an entry:** a row is deleted from the table using popup of the row id button. The curve itself is NOT deleted.

**Sketching an entry:** the same popup may be used to sketch a single curve

**Blanking/Unblanking an entry:** clicking on the green (unblanked) row id button will toggle it to red (blanked)

**Editing an entry:** any row may be modified by typing in a new value and new loadcurve id. The latter may also be selected through the SELECT popup. Further, a loadcurve itself may be created/edited as the loadcurve editing panel can be accessed directly via the CREATE & EDIT popup. You are also able to interactively drag/insert/delete points from the curves on tables using the EDIT button.

**Reordering entries** : If entries become out of order the REORDER button will sort them.

**Exporting a table:** exports all the table curves to a T/HIS format (2e20) curve file. The table values are output as a step diagram.

**Importing a table:** imports all the table curves from a T/HIS format. Curves are created independently from the table creation. The table values are imported as a step diagram.

**&lt;none&gt;, \_3D, \_3D:** toggles between the various \*DEFINE\_TABLE options.

#####  *DEFINE_CURVE_COMPENSATION

This definition defines a curve for local compensation..

PRIMER will read them in and write them out, but no interactive editing of them is provided

#####  *DEFINE_CURVE_ENTITY

This definition defines a curve of straight line segments and circular arcs that defines an axisymmetric surface.

PRIMER will read them in and write them out, but no interactive editing of them is provided

#####  *DEFINE_CURVE_FEEDBACK

These definitions do not create a loadcurve, rather they add special metal-forming attributes to an existing curve definition.

PRIMER will read them in and write them out, but no interactive editing of them is provided.

#####  *DEFINE_CURVE_FUNCTION

These definitions are an alternative way of creating a loadcurve. Instead of explicit &lt;x,y&gt; data the user enters up to 10 rows of pseudo-fortran syntax, which may also contain references to functions that return the current state of Ansys LS-DYNA entities during an analysis.

It is possible to send these curve definitions from PRIMER to T/HIS for evaluation, as long as the expression only depends on TIME and not any other values that can change during the run. If the curve is suitable, the T/HIS button will be active. The curve will be plotted in T/HIS from TIME = 0 until the termination time specified on the DATABASE\_CONTROL\_TERMINATION card and any parameters appearing in the expression will be preserved. The equation can be edited in T/HIS by right-clicking and seleting 'Edit equation', before being sent back to PRIMER to update the original definition, again by right-clicking and selecting 'Update curve in PRIMER'.

The only checking performed on these expressions is suitability for evaluation in T/HIS, other than this PRIMER just reads these in and writes them out, but does not attempt to evaluate them.

These definitions may be edited in the normal curve editor as follows:

* Select CURVE\_FUNCTION in the options box of the curve editor
* Enter rows of data.

![](../Storage/primer-22-1/primer_links/sect_5/define/lc_func.png)

#####  *DEFINE_CURVE_SMOOTH

This is yet another way to define a loadcurve. In this case a smoothly varying "hump" function is defined in terms of its parameters.

These definitions may be edited in the normal curve editor as follows:

* Select \_SMOOTH in the options box of the curve editor
* Enter the relevant parameters

![](../Storage/primer-22-1/primer_links/sect_5/define/lc_smooth.gif).

#####  *DEFINE_CURVE_TRIM

These are not loadcurves at all (the name is misleading), rather they are geometrical definitions used with \*ELEMENT\_TRIM during springback analyses. Their label sequence is totally separate from that of conventional loadcurves, and there is no relationship between the two types.

PRIMER reads in and writes out these definitions, but does not provide any interactive editing or visualisation of them.

[Previous](define-coordinate-defining-coordinate-systems.md)  |  [Next](define-death-times.md)