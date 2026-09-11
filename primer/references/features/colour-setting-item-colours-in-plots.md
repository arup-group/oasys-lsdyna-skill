###  COLOUR... Setting Item Colours in Plots

| All options in this panel have popup menus giving a range of colours, with the current selection being shown.<br> <br>The special colour Not bg means "not the background". This is a colour guaranteed to show up well against the current graphics window background, and is the default for text, labels and sketched items.<br> <br>This colour will change automatically as required if the background colour changes. | ![](../Storage/primer-22-1/primer_links/sect_4/images/display%20colours%20updated.png) |
| --- | --- |

| Background | Sets the background colour of the graphics window. Default: black. This can be configured in the oa\_pref file using: <br><br>>  <br>> primer\*background\_colour: &lt;   *colour*   &gt;<br>> |
| --- | --- |
| Screen Text | Sets the colour for title, date, contour bar values, etc. Default: Not background . This can be configured in the oa\_pref file using: <br><br>>  <br>> primer\*text\_colour: &lt;   *colour*   &gt;<br>> |
| Sketched Items | Sets the colour for anything sketched in any context. By default it is set to " Not background ", the logical opposite of the current background setting so as to establish good contrast. It can also to be set to a fixed colour or Use Text Colour which will use the same setting as Screen Text is set to. |
| Item Labels | Sets the colour for item (e.g. node) labels. Default: white. |

Colours can also be set for several other types of item in PRIMER using the other popups.

| Colour all by gives options of how to colour model items.<br> <ul> <li>MODEL id sets colour by model number. <br> <br> </li> <li>INCLUDE file id sets colour by which include file items belong to. <br> <br> </li> <li>PART TREE ASSEMBLY bases colour on part tree assembly ids <br> <br> </li> <li>PART id sets part-based element colours by part number <br> <br> </li> <li>SECTION id sets part-based element colours by section <br> <br> </li> <li>MATERIAL id sets part-based element colours by material. <br> <br> </li> <li>ASSEMBLY id uses colours based on the selected mechanism or dummy assembly ids. </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_1_10.png) |
| --- | --- |

**Using colour based on PART, SECTION or MATERIAL id:**

>  
> For element types that use parts (solid, shell, beam, tk shell, discrete, seat-belt, sph) the colour may be based on one of these properties. The label of the property is used, for example all elements of part 1 will be the same colour. Where a property is undefined, for example no material defined on a \*PART card, grey is used.
>  
> The default is for all such elements to be drawn by **PART** colour.
>  
> Setting user-defined colours for individual parts or groups of parts can be achieved using [Quick Pick](quick-pick-function.md#quickpick), [Part Table](part-table.md) or [Part Tree](part-tree.md). User -defined colours may also be defined for materials, elements and some other entity types using Quick Pick.
>  
> 
> 

| **Using colour based on Mechanism or Dummy Assembly id:**<br> <br>This is a special case in which the subset of parts in the model which belong to the selected mechanism or dummy receive colours based on the assembly ids in that mechanism / dummy, and the rest of the model is coloured white. This is the default behaviour when positioning mechanisms, but when used in this context it will persist during normal operations. In the example here the seat and dummy form a mechanism.<br> <br>There are some limitations to this display mode. It is computed by assigning an assembly id to each part to give a colour, with parts not in an assembly (or in a different model) receiving an id of zero, which is rendered as white. This assembly id is stored in a special internal storage "slot" on the part, and the contents of this slot can get changed in the following ways:<br>
<ul> <li> Using the dummy or mechanism positioner updates these storage slots, so if this display method is in force and you start positioning a different dummy / mechanism then the colours in a given model will change to those of what is being positioned. <br> <br> </li> <li>Editing or created a dummy / mechanism also updates these storage slots, so the colours will change in a given model to represent the most recently edited definition. <br> <br> </li> <li>Checking (e.g. by model check) a dummy / mechanism also updates these storage slots, so that too may change them to show the most recently checked definition. </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_1_10a.png) |
| --- | --- |
| In addition checking and positioning a dummy does not consider null parts when assigning assembly ids to parts, so if an assembly is coated with null parts these may end up being drawn in white. If this happens the solution is to return to this panel and to redefine the dummy / mechanism which is to be used, which will restore its colours - including those for null parts. |

>  
> 
> 

| **Contacts allows you to apply custom colours to surf A and surf B for contact surfaces. Along with standard core colours, 'Default' and 'Surface A | B' buttons are provided.**<br>**When the model is first loaded and the entities are turned on for contact visualization, the default colours are assigned to contacts.**<br><ul style="line-height: 1.5;"><li><span style="font-size: 12pt;"><b><span style="font-weight: normal; font-size: 10pt;"><span style="font-size: 12pt;">The &#39;Surface A | B&#39; button changes the colour of surf A to green and surf B to red.</span></span></b></span></li><li><span style="font-size: 12pt;"><b><span style="font-weight: normal; font-size: 10pt;"><span style="font-size: 12pt;">The &#39;<span>Default&#39; button will display a colour from standard core colours, based on the contact label value.</span></span></span></b></span></li><li><span style="font-size: 12pt;"><b><span style="font-weight: normal; font-size: 10pt;"><span style="font-size: 12pt;"><span>These colours are also used to sketch the contact surfaces.</span></span></span></b></span></li></ul><br><br>| Default colours based on label | Changing surfA and surfB to white and grey | Selecting Surface A | B |<br>| --- | --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_4/images/default%20sketching%20colours%201-8.png) | ![](../Storage/primer-22-1/primer_links/sect_4/images/changed%20contact%20colours%20to.png) | ![](../Storage/primer-22-1/primer_links/sect_4/images/green%20and%20red%20contact%20colour.png) | | ![](../Storage/primer-22-1/colour-setting-item-colours-in-plots/contacts_colour.png) |
| --- | --- |
| Spotweld beam/solid colour allows you to change the colours used when drawing spotweld beams or solids. The default is from part in which case the normal colour for the element is used. If from Npanels is chosen then the colour of the element will change depending on how many panels the spotweld connects. Popups allow you to change the colours as necessary. | ![](../Storage/primer-22-1/primer_links/sect_4/images/spotweld_colour.gif) |

| Standard Core Colours  <br>The top two rows show the 30 standard core colours. | ![](../Storage/primer-22-1/primer_links/sect_4/images/col_1.png) |
| --- | --- |
| When you hover over the colour the name is shown. <br>This name can be used to specify this colour in preferences and dialogue inputs.<br> <br>When using the name, "\_" is used instead of " ", for example "Hot Pink" becomes "HOT\_PINK". | ![](../Storage/primer-22-1/primer_links/sect_4/images/col_2.png) |

| User-Defined Colours  <br>The lower rows show the user-defined colours. There can be up to 150 user-defined colours.<br>Click on a user-defined colour to apply it, or click on an empty slot to create a new user-defined colour. <br>User-defined colours can be used in the dialogue input by specifying their name. | ![](../Storage/primer-22-1/primer_links/sect_4/images/col_3.png) |
| --- | --- |

| Creating  <br>To create a new user colour click on an empty slot. This maps a colour palette.<br>The colour can be edited a number of ways: <ul> <li>Using sliders to set the red, green and blue value, </li> <li>Inputting a hex colour code, </li> <li>Clicking on the colour wheel and cone, or </li> <li>Using sliders to set the hue, light and saturation levels. </li> </ul> <br><br> <br>When you create a colour it is applied. | ![](../Storage/primer-22-1/primer_links/sect_4/images/col_4.png) |
| --- | --- |

| Editing  <br>Hover over a user colour to edit it. You have the choice to change the name of the colour, Edit it, or Delete it.<br> <br>The user-defined colours are given the standard name, for example "user\_1". They can be renamed. The name must start with a letter and gets set to all lower case. If the name is not unique, a number will be appended to it, for example "green\_1".<br> Edit maps the colour palette. If you edit a colour it is then applied. <br><br> <br>Delete removes a colour. The colour is no longer available when you next open the colour popup. | ![](../Storage/primer-22-1/primer_links/sect_4/images/col_5.png) |
| --- | --- |

| Saving  <br>The user-defined colours can be saved. The same user-defined colour are then available when you next run PRIMER.<br> <br>The user-defined colours are stored in the user\_colours.xml file. If the user has permission to modify things in the INSTALL directory, the user is given the option to either save the user colours to the INSTALL directory (which is sometimes visible to multiple users) or their HOME directory.<br> <br>Alternatively, the preference user\_colour\_file can be set to specify an .xml file.<br> <br>When PRIMER is next started the user\_colours.xml file is read in.<br> <br>If the same colour, for example "user\_1", is defined in the user\_colours.xml file in both the INSTALL and HOME directory, the HOME directory user\_colours.xml file takes precedence.<br> <br>If the preference user\_colour\_file has been set, any user\_colours.xml file in the HOME directory is ignored. If a colour is also defined in the user\_colours.xml file in the INSTALL directory, the user\_colour\_file .xml file takes precedence. | ![](../Storage/primer-22-1/primer_links/sect_4/images/col_6.png) |
| --- | --- |

[Previous](display-options-controlling-plot-parameters.md)  |  [Next](lighting.md)