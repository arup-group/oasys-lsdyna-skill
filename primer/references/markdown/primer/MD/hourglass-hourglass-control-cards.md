###  HOURGLASS: Hourglass Control Cards
 
* [**HOURGLASS** top level menu](airbag-airbag-control-volume-definitions.md#type)
* [Creating a new definition](define-transform.md#create)
* [Copying a definition](define-transform.md#copy)
* [Editing an existing definition](define-transform.md#modify)
* [Deleting hourglass definitions](Editing%20a%20Model%20Database.html#delete)
* [Other operations](define-transform.md#sketch)

Hourglass cards are used in Ansys LS-DYNA to control the zero energy "hourglass modes" that occur with single integration point elements. 
They are also used to specify bulk viscosity coefficients.

| **HOURGLASS MAIN MENU** <br>This figure shows the main **HOURGLASS** menu.<br> <br>The functions currently available have their standard meanings (see [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions)).<br> <br>Greyed out functions are not currently available: | ![](../Storage/primer-22-1/primer_links/sect_5/hourglass/hourglass_1.gif) |
| --- | --- |

Once all of the data has been input on the airbag card, CREATE installs the hourglass card permanently in the model.
 
#### CREATE Making a new hourglass definition

![](../Storage/primer-22-1/primer_links/sect_5/hourglass/hourglass_2.gif)

This figure shows the standard CREATE / EDIT panel for hourglass cards. Here CREATE has been used, so a blank hourglass creation panel is displayed.The static buttons in the top section of the panel have functions which are common to the other editing panels within PRIMER.

The SET\_DEFAULTS button will put the **current default values**into the fields. These will be taken from the CONTROL\_HOURGLASS and the CONTROL\_BULK\_VISCOSITY settings. If the Ansys LS-DYNA default settings are active, after pressing the button the values are set thus:

![](../Storage/primer-22-1/primer_links/sect_5/hourglass/hourglass_3.gif)

####  COPY Copy existing hourglass card(s) to make a new card(s).

COPY makes new hourglass, in the same model(s), that are identical to their originals apart from their labels.
 
RECURSIVE COPY has no effect as hourglass cards do not 'own' anything else.

####  MODIFY Modifying the attributes of an existing hourglass card.

MODIFY functions in the same way as [CREATE](define-transform.md#create).
 
Any modifications made to the hourglass definition will not be made permanent until the APPLY\_MODIFY button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing hourglass definitions.

The DELETE function deletes the selected airbag. The DELETE\_RECURSIVE and REMOVE\_FROM\_SETS switches have no effect here as hourglass cards do not 'own' anything and are not in sets.

####  SKETCH Sketch elements used by an hourglass on the current image.

SKETCH sketches on top of the current image the parts and elements that are referenced by the selected hourglass card.

####  LIST List hourglass cards

LIST gives a list of the selected hourglass cards showing the cross references to each card.

####  CHECK Check hourglass attributes

CHECK checks one or more hourglass cards for errors.

####  RENUMBER Renumbering hourglass labels.

RENUMBER lets you change any or all hourglass labels within a given model using the [standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel).
 
To change the label of an individual hourglass card it may be simpler just to [MODIFY](define-transform.md#modify) it.

DISMISS terminates hourglass processing.

####  Visualising hourglass cards

Hourglass cards are not explicitly drawn, or selectable for drawing. To view an hourglass definition:

* [SKETCH](define-transform.md#sketch)it, or
* [MODIFY](define-transform.md#modify)it and sketch it.

It will be drawn in terms of the parts and elements that use it.

Note that Hourglass data can also be created or modified using [PART TABLE](part-table.md).

[Previous](frequency.md)  |  [Next](iga.md)