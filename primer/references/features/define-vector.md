##  

### (DEFINE_) VECTOR

## 

These can be edited through their own specific editing panel (see below) and using the generic [Keyword Editor](the-generic-keyword-editing-panel.md#keywordedit).

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)

| This figure shows the main menufor the editing of vector definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/vect.gif) |
| --- | --- |

####  CREATE Making a new vector definition
 
This shows the create/edit panel for vectors.
 
![Edit DEFINE_VECTOR definition](../Storage/primer-22-1/primer_links/sect_5/define/vect_edit.gif)

####  COPY Copy existing vector(s) to make a new vector(s)
 
The selected vectors are copied. ( vectors do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing vector
 
MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the vector definition will not be made permanent until the UPDATE\_VECTOR button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing vector definitions
 
The selected vectors are deleted.
 
Vectors do not "own" anything, so the concept of recursive deletion does not apply, however a vector that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the vector removed.

####  SKETCH Sketch vector definitions
 
SKETCH draws the vector on top of the current graphics image.

####  LIST List vector summaries to screen

The selected vectors are summarised on the screen.

####  CHECK Check orientation vector definitions for errors

The selected vector definitions are run through the standard checking routines.

####  RENUMBER Change orientation vector labels

RENUMBER lets you change any or all vector labels within a given model using [the standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel). To change the label of an individual vector it may be simpler just to MODIFY it.

[Previous](define-transform.md)  |  [Next](deformable-to-rigid-switching-parts.md)