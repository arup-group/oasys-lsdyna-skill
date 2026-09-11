##  

### (DEFINE_) TRANSFORM
 
* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [List](RADIOSS%20block%20format.html#list)
* [Check](define-transform.md#check)
* [Renumber](define-transform.md#renumber)

| ![](../Storage/primer-22-1/primer_links/sect_5/define/trans.gif) | This figure shows the main menufor the editing of co-ordinate systems. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) |
| --- | --- |

#### CREATE Making a transformation definition

See [Edit of Define Transform](edit-of-define-transform.md#editdeftrans). for more details about the Create / Modify panel for Transformations.

####  COPY Copy existing transformation(s) to make a new transformation

The selected coordinates are copied. (Transformations do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing transformation

MODIFY functions in the same way as CREATE , except that an initial definition will be present.

Any modifications made to the section definition will not be made permanent until the UPDATE\_TRANSFORMATION button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing transformation definitions

The selected transformations are deleted.

Transformation definitions do not "own" anything, so the concept of recursive deletion does not apply, however a transformation that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the transformation removed.

####  SKETCH Sketch transformation summaries

The selected transformation definitions are sketched on the screen.

####  LIST List transformation summaries to screen

The selected transformation definitions are summarised on the screen.

####  CHECK Check definitions for errors 
 
The selected transformation definitions are run through the standard checking routines.

####  RENUMBER Change transformation labels 
 
Lets you change any or all transformation labels within a given model using the standard renumbering panel.
 
To change the label of an individual transformation may be simpler just to MODIFY it.

[Previous](define-spotweld-rupture-stress.md)  |  [Next](define-vector.md)