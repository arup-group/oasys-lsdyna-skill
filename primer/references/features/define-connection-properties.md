###  

### (DEFINE_) CONNECTION_PROPERTIES

### 

These can be edited through their own specific editing panel (see below).

* [Main Menu](define-transform.md#themainmenu)
* [Creation](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deletion](Editing%20a%20Model%20Database.html#delete)
* [List](RADIOSS%20block%20format.html#list)
* [Check](define-transform.md#check)
* [Renumber](define-transform.md#renumber)

| This figure shows the main menufor the editing of connection properties definitions. <br>All functions have their standard meanings as given in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions) | ![](../Storage/primer-22-1/primer_links/sect_5/define/fig_connection_properties_1.gif) |
| --- | --- |

####  CREATE Making a new connection properties definition.

This shows the create/edit panel for connection properties. New material data lines can be added by clicking on the Add another material data line button. The \_ADD option can be activatied by clicking on the \_ADD button. With the \_ADD option active, cards 2 and 3 are greyed out.
 
![](../Storage/primer-22-1/primer_links/sect_5/define/fig_connection_properties_2.gif)

####  COPY Copy existing connection properties(s) to make a new connection properties(s).

The selected connection properties are copied. (connection properties do not "own" anything, so the concept of recursive copying does not apply.)

####  MODIFY Modifying the attributes of an existing connection properties.

MODIFY functions in the same way as CREATE , except that an initial definition will be present. Any modifications made to the connection properties definition will not be made permanent until the UPDATE button is pressed. At this point the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing connection properties definitions.

The selected connection properties are deleted.
 
Connection properties do not "own" anything, so the concept of recursive deletion does not apply, however a connection property that is referred to (ie "owned") by some higher order item will not be deletable unless that item is deleted too, or its reference to the connection propertie removed.

####  LIST List connection properties summaries to screen

The selected connection properties are summarised on the screen.

####  CHECK Check connection properties definitions for errors

The selected connection properties definitions are run through the standard checking routines.

####  RENUMBER Change connection properties labels

RENUMBER lets you change any or all connection properties labels within a given model using [the standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel). To change the label of an individual connection properties it may be simpler just to MODIFY it.

[Previous](define-box-defining-boxes.md)  |  [Next](define-contact-volume.md)