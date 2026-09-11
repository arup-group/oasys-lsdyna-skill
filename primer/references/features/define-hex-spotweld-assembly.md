##  

### (DEFINE_) HEX_SPOTWELD_ASSEMBLY

## 

These can be edited through their own specific editing panel (see below).

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [Sketching](define-transform.md#sketch)
* [List](RADIOSS%20block%20format.html#list)
* [Check](define-transform.md#check)
* [Renumber](define-transform.md#renumber)

| This figure shows the main menufor the editing of hex spotweld assembly definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_spotweld_hex_1.gif) |
| --- | --- |

####  CREATE Making a new hex spotweld assembly definition
 
This shows the create/edit panel for hex spotweld assemblies. The second row of the card will change depending on the value chosen for 'N'. 'N' can be set to 4, 8 or 16 from a drop down list for that button.
 
![](../Storage/primer-22-1/primer_links/sect_5/define/fig_spotweld_hex_2.gif)

The Select SOLIDs button can be used to select multiple solids, which will then be added to the list in ascending order.

####  COPY Copy existing hex spotweld assembly(s) to make a new hex spotweld assembly(s)
 
The selected hex spotweld assemblies are copied. (hex spotweld assemblies do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing hex spotweld assembly
 
MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the hex spotweld assembly definition will not be made permanent until the UPDATE button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing hex spotweld assembly definitions
 
The selected hex spotweld assemblies are deleted.
 
Hex spotweld assemblies do not "own" anything, so the concept of recursive deletion does not apply, however a hex spotweld assembly that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the hex spotweld assembly removed.

####  SKETCH Sketch hex spotweld assembly definitions
 
SKETCH draws the hex spotweld assembly on top of the current graphics image.

####  LIST List hex spotweld assembly summaries to screen 
 
The selected hex spotweld assemblies are summarised on the screen.

####  CHECK Check hex spotweld assembly definitions for errors

The selected hex spotweld assembly definitions are run through the standard checking routines.

####  RENUMBER Change hex spotweld assembly labels

RENUMBER lets you change any or all hex spotweld assembly labels within a given model using [the standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel). To change the label of an individual hex spotweld assembly it may be simpler just to MODIFY it.

[Previous](define-spotweld-failure-resultants.md)  |  [Next](define-spotweld-rupture-stress.md)