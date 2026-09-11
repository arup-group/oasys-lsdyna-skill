###  

### (DEFINE_) CONTACT_VOLUME:

### 

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

| This figure shows the main menufor the editing of contact volume definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_contact_volume_1.gif) |
| --- | --- |

####  CREATE Making a new contact volume definition.

This shows the create/edit panel for contact volumes. The second row of the card will change depending on the value chosen for TYPE.
 
![](../Storage/primer-22-1/primer_links/sect_5/define/fig_contact_volume_2.gif)

####  COPY Copy existing contact volume(s) to make a new contact volume(s).

The selected contact volumes are copied. (contact volumes do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing contact volume.

MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the contact volume definition will not be made permanent until the UPDATE\_CONTACT\_VOL button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing contact volume definitions.

The selected contact volumes are deleted.
 
Contact volumes do not "own" anything, so the concept of recursive deletion does not apply, however a contact volume that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the contact volume removed.

####  SKETCH Sketch contact volume definitions.

SKETCH draws the contact volume on top of the current graphics image.

####  LIST List contact volume summaries to screen

The selected contact volumes are summarised on the screen.

####  CHECK Check contact volume definitions for errors

The selected contact volume definitions are run through the standard checking routines.

####  RENUMBER Change contact volume labels

RENUMBER lets you change any or all contact volume labels within a given model using [the standard renumbering panel.](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel)To change the label of an individual contact volume it may be simpler just to MODIFY it.

[Previous](define-connection-properties.md)  |  [Next](define-coordinate-defining-coordinate-systems.md)