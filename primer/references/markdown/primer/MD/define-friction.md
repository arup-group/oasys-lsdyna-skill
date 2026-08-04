###  

### (DEFINE_) FRICTION

These can be edited through their own specific editing panel (see below).

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [List](RADIOSS%20block%20format.html#list)
* [Check](define-transform.md#check)
* [Renumber](define-transform.md#renumber)

| This figure shows the main menufor the editing of friction definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_friction_1.gif) |
| --- | --- |

####  CREATE Making a new friction definition
 
This shows the create/edit panel for friction. New friction data lines can be added by clicking on the Add a part pair friction data line button.
 
![](../Storage/primer-22-1/primer_links/sect_5/define/fig_friction_2.gif)

Export to CSV lets you export part pair friction details to a CSV file which can be used later to create multiple part pair friction data lines in the card using Import from CSV .

####  COPY Copy existing define friction(s) to make a new define friction(s)
 
The selected define frictions are copied. (Define frictions do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing friction
 
MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the define friction definition will not be made permanent until the UPDATE button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing define friction definitions
 
The selected define frictions are deleted.
 
Define frictions do not "own" anything, so the concept of recursive deletion does not apply, however a connection property that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the define friction removed.

####  LIST List friction summaries to screen

The selected define frictions are summarised on the screen.

####  CHECK Check define friction definitions for errors

The selected define friction definitions are run through the standard checking routines.

####  RENUMBER Change define friction labels

RENUMBER lets you change any or all define friction labels within a given model using [the standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel). To change the label of an individual define friction it may be simpler just to MODIFY it.

[Previous](define-death-times.md)  |  [Next](define-sd-orientation-defining-spring-damper-orientation-vectors.md)