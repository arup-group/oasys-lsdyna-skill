###  SET: Defining Sets

| [Top level menu](set-defining-sets.md#ommontoplevelmenuf)<br> <br> * [Create](define-transform.md#create)<br> * [Copy](define-transform.md#copy)<br> * [Edit](define-transform.md#modify)<br> * [Delete](Editing%20a%20Model%20Database.html#delete)<br> * [Only](contact-defining-contact-surfaces.md#only)<br> * [Visualisation](set-defining-sets.md#VisualisingSets) | Set type:<br><br> * [_LIST](set-defining-sets.md#SETLIST)<br> * [_COLUMN](set-defining-sets.md#COLUMN)<br> * [_GENERATE](set-defining-sets.md#GENERATE)<br> * [_GENERAL](set-defining-sets.md#general)<br> * [_ADD](set-defining-sets.md#set_part_add)<br> * [_COLLECT](set-defining-sets.md#collect)<br> * [_INTERSECT](set-defining-sets.md#intersect)<br> <br>[Set defaults](set-defining-sets.md#default)<br> <br>[Segment sets](set-defining-sets.md#segment)<br> <br>[Locking set contents](set-defining-sets.md#lock_contents) |
| --- | --- |

The \*SET keyword in Ansys LS-DYNA is used to define groups of items that can be used in many different contexts.
 
There are many different set types and each set type has its own numbering sequence, thus you can safely have \*SET\_SHELL  **#1**, \*SET\_SOLID  **#1,**etc.
 
With the exception of SEGMENTS sets simply reference other structural items, and do not themselves constitute "structure". SEGMENTS are a special case which are dealt with separately below.

| **This figure shows the c** **ommon top-level menu f****or all set types**  <br>On the right is shown the pop-up menu when SET is selected in the Keywords panel. The figure below shows a typical set main control panel, in this case for SET\_PART definitions, but all are the same.<br> <br>Commands have their standard meanings as described in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions). | ![](../Storage/primer-22-1/primer_links/sect_5/set/fig_set_0a.gif) |  |
| --- | --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/set/set_2.png) |

#### CREATE Creating a new set

| ![](../Storage/primer-22-1/primer_links/sect_5/set/set_3.gif) | This figure shows the initial empty set creation panel.<br>Items, here **PARTs**, but the same applies to all valid set types, can be added to or removed from the set using:<br> <br><br>| ADD ... | Inserts items into the set. |<br>| --- | --- |<br>| REMOVE... | Removes them from the set. |<br>| EMPTY... | Completely empty the set of all its contents. |<br><br><br>Items are added or removed using the standard selection menu, as shown in figure below.<br> <br>The set can also be [converted to different formats](set-defining-sets.md#convert) by using the Convert to radio buttons. [GENERAL](set-defining-sets.md#general) sets have a different [editing panel](set-defining-sets.md#general). |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/set/set_3.gif) | This figure shows the initial empty set creation panel.<br>Items, here **PARTs**, but the same applies to all valid set types, can be added to or removed from the set using:<br> <br><br>| ADD ... | Inserts items into the set. |<br>| --- | --- |<br>| REMOVE... | Removes them from the set. |<br>| EMPTY... | Completely empty the set of all its contents. |<br><br><br>Items are added or removed using the standard selection menu, as shown in figure below.<br> <br>The set can also be [converted to different formats](set-defining-sets.md#convert) by using the Convert to radio buttons. [GENERAL](set-defining-sets.md#general) sets have a different [editing panel](set-defining-sets.md#general). |
| ![](../Storage/primer-22-1/primer_links/sect_5/set/set_4.gif) | In this example the user is selecting parts by material: they have selected two materials and ADD\_ITEMS will load the parts which reference these into the set.<br>Only items of the correct type, here parts, will be selected, therefore it is safe to select a super set of the objects required.<br> <br>For example to load all parts in a model into a set you could just select the whole model.<br> <br>It is legal to select items that are already in the set: they will not be duplicated as the addition operation performs a logical (inclusive) OR between the incoming items and the existing set contents.<br> <br>Item removal operates in exactly the same way, except in reverse. |

Once the set contains something you can use VIEW/EDIT to view the detailed contents of the set

![](../Storage/primer-22-1/primer_links/sect_5/set/set_5.gif)

This example shows the VIEW/EDIT panel for a set of nodes.
 
The popup options against each entry may be used to view details of that item, and different labels can be typed in to change the set's contents.

| Defining "Latent" items in a set.  <br>If a "latent" (referenced, but not yet defined) item is included in a set, its colour in the editing table changes to blue text on a dark background to warn you, as shown here.<br> <br>Including latent items in sets is legal, although they will show as an error when the set is checked. You must deal with this before running the analysis: by deleting them explicitly from the set, or by performing a CLEANUP\_UNUSED operation on the model. | ![](../Storage/primer-22-1/primer_links/sect_5/set/fig_set_1d.gif) |
| --- | --- |

#####  Defining set type and default parameters

Sets may be of **\_LIST** (default), **\_COLUMN** , **\_GENERATE,**   [_GENERAL](set-defining-sets.md#general) or **\_ADD** types, default parameters may be defined, and individual parameters given in **\_COLUMN** cases. These options are described in section [SET_OPTIONS](set-defining-sets.md#SETOPTIONS) below.

#### Creating/editing_GENERALsets

In Ansys LS-DYNA 960 \_GENERAL sets have been introduced. These allow flexibility in how the set is defined. For example in a node set they can be used to add all nodes from part 10 and then remove all nodes inside box 1. As the way in which \_GENERAL sets are defined is very different a separate panel is used for creating/editing them. The figure below shows a set with several rows already defined in it. Any of the existing rows in the set can be edited by using the usual popups and object menus in PRIMER or by typing in new labels for the items.

![](../Storage/primer-22-1/primer_links/sect_5/set/set_7.gif)

| There are also 4 main functions that allow the user to [insert](set-defining-sets.md#generalinsert), [edit](set-defining-sets.md#generaledit), [move](set-defining-sets.md#generalmove) or [delete](set-defining-sets.md#generaldelete) rows in the set. The modes are selected by using the Mode popup. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_mode_popup.gif) |
| --- | --- |

| Inserting rows into a _GENERAL set   Example: inserting PARTS 4,5 and 6 to the set after row 4  <br>Make sure INSERT mode is selected by using the Mode popup. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_mode_popup.gif) |
| --- | --- |
| Select PART from the Type popup. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_type_popup.gif) |
| Choose after selected row from the Location popup | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_location_popup.gif) |

We want to insert the parts after row 4 so select row 4.
 
![](../Storage/primer-22-1/primer_links/sect_5/set/set_12.gif)

| Press the Select... button and select the parts to add by either picking them or using the object menu. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_13.gif) |
| --- | --- |

Press Apply to add the parts to the set.
 
![](../Storage/primer-22-1/primer_links/sect_5/set/set_14.png)
The parts have been added on row 5. All of the higher rows have been shifted up by one.
 
This method can be used to add a line (or more than one line if needed) to the set at:

* the top (first row) of the set
* the bottom (last row) of the set
* before a selected row
* after a selected row

##### Editing rows in a _GENERAL set
 
###### **Example: removing BOXES from an existing row**
 
Make sure EDIT mode is selected by using the Mode popup.

| Select remove from selected row(s) from the Action popup. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_action_popup.gif) |
| --- | --- |

Select the rows that we want to edit (in this example; rows 3 and 4).

![](../Storage/primer-22-1/primer_links/sect_5/set/set6.gif)

When selecting more than one row they must be:

* Of the same type. E.g. BOX, PART...
* Adjacent rows. E.g. selecting rows 3 and 4 is OK, selecting rows 3 and 7 is not.

To select a range of rows:

* Select the first row by left clicking
* Move to the last row and shift, left click to select the range

Press the Select... button and select the boxes to remove from the rows by either picking them or using the object menu.

![](../Storage/primer-22-1/primer_links/sect_5/set/set7.gif)

Press Apply to remove the boxes from the selected rows in the set.

![](../Storage/primer-22-1/primer_links/sect_5/set/set8.gif)

The boxes have been removed from the rows. As the entry now only requires one row (there are now only 4 boxes) the empty row is deleted and the higher rows have been shifted up by one.

This method can also be used to add extra items to an existing line instead of removing items by choosing add to selected row(s) from the action popup. Extra rows will automatically be added if they are needed.

#####  Moving rows in a _GENERAL set

######  **Example: Moving selected rows to be after row 1**

Make sure MOVE mode is selected by using the Mode popup.

| Select after row from the Location popup. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_move_popup.gif) |
| --- | --- |
| Select the rows that we want to move (in this example; rows 4 and 5) and type in row 1 for the Location Row .<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/set/set9.gif)<br> <br>When selecting more than one row they must be adjacent rows. E.g. selecting rows 3 and 4 is OK, selecting rows 3 and 7 is not.<br> <br>To select a range of rows:<br><ul> <li>Select the first row by left clicking </li> <li>Move to the last row and shift, left click to select the range </li> </ul> |
| Press Apply to move the rows in the set to be after row 1.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/set/set10.gif) <br> The rows have been moved. |

This method can be used to move a line (or more than one line if needed) to:

* the top (first row) of the set
* the bottom (last row) of the set
* before a selected row
* after a selected row

##### Deleting rows from a _GENERAL set
 
###### Example: Deleting selected rows
 
Make sure DELETE mode is selected by using the Mode popup.
 
Select the rows that we want to delete (in this example; rows 2, 3 and 4).
 
![](../Storage/primer-22-1/primer_links/sect_5/set/set11.gif)
 
Any rows can be selected. They do not need to be adjacent.
 
To select a range of rows:

* Select the first row by left clicking
* Move to the last row and shift, left click to select the range

Press Apply to delete the rows.
 
![](../Storage/primer-22-1/primer_links/sect_5/set/set12.gif)
The rows have been deleted.

####  _ADD option

LS971 introduces the \_ADD option for sets of type BEAM, DISCRETE, NODE, PART, SHELL and SOLID. Keyword \*SET\_PART\_ADD is viable in LS970v6763 onwards. The \_ADD option allows creation of a \*SET that is itself composed of \*SET definitions. For example a \*SET\_PART\_ADD would list any number of other \*SET\_PART definitions. These sets may be created, edited, drawn, etc in exactly the same way as any other set types, with the limitation that Ansys LS-DYNA limits them implicitly to "list" syntax.

It is not clear from the Ansys LS-DYNA documentation whether or not these definitions can be nested to many levels (ie a \*SET\_PART\_ADD contains sets that are themselves of type \*SET\_PART\_ADD). So on the assumption that this is possible PRIMER permits them to be nested to any level, and does not treat this as an error.

PRIMER checks for recursive definitions (ie a \*SET\_PART\_ADD contains a reference to itself, possibly several levels lower down) and flags these as errors. PRIMER handles such definitions by ignoring the 2nd definition, and anything below it.

A \*SET\_PART\_ADD definition may easily contain multiple references to an underlying \*PART. Again Ansys LS-DYNA does not state whether or not this is legal, although from past experience it probably is, so PRIMER also assumes that this is acceptable practice and does not mark this as an error. When using the set for internal purposes, for example graphics, PRIMER detects duplicate PART definitions and simply ignores the 2nd and subsequent ones.

For \*SET\_NODE\_ADD the \_ADVANCED option is available. This allows addition of other \*SET types. NODE, SHELL, BEAM, SOLID, SEGMENT, DISCRETE and THICK SHELL sets can all be added. The keyword format for this option is a set ID followed by a type. The types available are NODE (type 1), SHELL (type 2), BEAM (type 3), SOLID (type 4), SEGMENT (type 5), DISCRETE (type 6)and THICK SHELL (type 7). Pressing VIEW/EDIT allows creation and modification of these keywords.

![](../Storage/primer-22-1/primer_links/sect_5/set/set_add.gif)

If a deck containing \*SET\_...\_ADD is written out in a format pre-dating LS971R2 (LS970v6763 for \*SET\_PART\_ADD), PRIMER will decompose the definition to a conventional \*SET\_... containing all underlying entities.

####  _COLLECT option

LS971 release 5 introduces the \_COLLECT suffix for sets. This allows multiple definitions of a set to exist, all using the same label. These may be in the same file or (more probably) in different include files. During the Ansys LS-DYNA analysis the contents of all the set definitions are "collected" together to form a single set.

This presents problems for PRIMER because it must handle the conflicting requirements of:

* Treating the set as a single entity for graphics, checking and when referenced from other cards.
* Maintaining the individual set definitions as separate for the purposes of editing, and for ultimate output to the keyword file.

PRIMER handles the problem as follows:

1. When a \*SET\_xxx\_COLLECT definition of label N is first encountered the following internal definitions are created 

    * A "parent" set definition which has the label N, but has no contents.
    * A "child" definition that holds the contents of this portion of set N, and this is associated with the "parent".
2. For each subsequent \*SET\_xxx\_COLLECT definition of label N that is found a new "child" set definition is created, and associated with "parent" set N

For example if a model contains three definitions of \*SET\_SHELL\_COLLECT all using label 10 then PRIMER will store:

| ***Parent***  \*SET\_SHELL 10 | This is the parent set, and does not contain any elements |
| --- | --- |
|  | ***Child***  definition #1 | This contains the elements of the 1st set definition |
| ***Child***  definition #2 | The contains the elements of the 2nd set definition |
| ***Child***  definition #3 | The contains the elements of the 3nd set definition |

##### Creating a *SET_xxx_COLLECT definition
 
##### ![](../Storage/primer-22-1/primer_links/sect_5/set/set_collect.gif)
 
For the first set in the collection:

* Create the set in the normal way, giving it a normal label
* Tick the COLLECT box to designate it as the start of a collection
* CREATE it normally.

PRIMER will warn you about what it is doing, and will create both the parent set and its first child. The parent set will automatically be given the title "All collected sets", but you can change this is you wish.
 
For the 2nd and subsequent sets in the collection:

* Create the set in the normal way
* Tick the COLLECT box as above
* Type in, or select, the label of the set used above.

PRIMER will automatically associate this set with the parent above, and this set definition will become its next child. Each child set may be given a separate title, and this is recommended as it will help to identify which is which.
 
There are no rules inside PRIMER about which include files the various sets "live" in: any set in the collection, including the parent, may be in any include file.

##### 

##### Editing a *SET_xxx_COLLECT definition![](../Storage/primer-22-1/primer_links/sect_5/set/set_collect_2.png)
 
Firstly you must decide whether you want to edit the "parent" set, or one of its "children".
 
The menu from which you make this selection makes this parent/child relationship clear by indenting the children, and giving them label suffices \_1, \_2, etc as shown in this example.
 
Editing a ***child***set is performed in exactly the same way as editing a normal set: you can add or remove contents, change its type, and so on, with two exceptions:

1. You can only change its label to that of a different \*SET\_xxx\_COLLECT definition.

PRIMER will not allow you to relabel a child set unless the new label is that of an existing (different) \*SET\_xxx\_COLLECT definition.
2. You can remove it from the collection by unticking its COLLECT box.

This will give it a new label, remove it from its parent, and turn it into a normal set. Note that is will not be referenced by anything else in the model as all existing references will be to its ex-parent.

Editing a ***parent***\*SET\_xxx\_COLLECT definition![](../Storage/primer-22-1/primer_links/sect_5/set/set_collect_3.gif)
 
The only operations you can perform on the parent set are:

* Change its label. This relabels the whole collection meaning that when the keyword deck is written out all child definitions will use this new label.
* Change its title. This title is only used within PRIMER , as the parent definition is not written out to the keyword file, so changing it will be of limited value.
* Edit child opens an object menu to select a child set for editing.
* Merge the collection into a single, ordinary (non \_COLLECT) set definition.

This operation modifies the contents of this parent set definition to be an ordinary set, using \_LIST format, that combines the entire contents of all its child sets. It then deletes all the child sets and converts this parent set into an ordinary (non \_COLLECT) set.

Once updated this merge operation is not reversible.
* Split the collection in N separate, ordinary (non \_COLLECT) sets.

Each child set is given a new (individual) label, and its \_COLLECT status is turned off. This leaves it as an ordinary set, but note that it will not be referenced by anything else.

The parent set remains, using its existing label and with its \_COLLECT status also turned off. However it will have no contents. All references to the original collection will still refer to this set.

Following a Split it will be necessary for you to sort out manually the consequences of having an empty set that is (possibly) referred to elsewhere in the model, and a series of child sets that are populated but not referenced.

Once updated this split operation is not reversible.

#####  Referencing and using a *SET_xxx_COLLECT definition elsewhere in PRIMER

From the point of view of the rest of PRIMER a \_COLLECT set is seen as a single item, just like a normal set, and it will be referred to by the label of the parent definition. In other words no special actions need to be taken when dealing with a \*SET\_xxx\_COLLECT definition, and it can be dealt with just like any other set. For example sketching the parent will automatically sketch all its children.

Object menus will only show the parent set, unless they are in a context in which it would make sense to offer selection of a child.

#####  Changing an existing set to *SET_xxx_COLLECT

As well as creating a \*SET\_xxx\_COLLECT definition from scratch you can edit an existing set to make it a \_COLLECT one. PRIMER handles this as follows:

* By default the set retains its existing label, and it becomes the first set in a new collection using that label.
* You can also change its label to that of an existing collection, whereupon it will become a child of that collection.

This raises the question of "what happens to references to this set on other keywords?" The answer is:

* If this is the start of a new collection, using the same (or a fresh) label, then all references will be to that label.
* If the set is made part of an existing collection then all references to the set are  ***changed to references to that collection***  .

Really these two mean that same thing: references to a set that becomes part of a collection will become references to that collection.

#####  Keyword output of *SET_xxx_COLLECT definitions

During keyword output PRIMER will write out each child set definition in its appropriate include file, using the \_COLLECT suffix and the label of its parent.

The parent definition used inside PRIMER is not written out and will be lost when the model is deleted or PRIMER exits. It will be recreated automatically when the keyword deck is reread, or when \_COLLECT sets are created interactively.

####  _INTERSECT option

LS971R6 introduces the \_INTERSECT option for sets. The \_INTERSECT option allows creation of a \*SET that is itself composed of the intersection of other \*SET definitions. These sets may be created, edited, drawn, etc in exactly the same way as any other set types, with the limitation that Ansys LS-DYNA limits them implicitly to "list" syntax.

It is not clear from the Ansys LS-DYNA documentation whether or not these definitions can be nested to many levels (ie a \*SET\_SHELL\_INTERSECT contains sets that are themselves of type \*SET\_SHELL\_INTERSECT) and whether they can be used in conjunction with other set types (e.g. \*SET\_SHELL\_INTERSECT containing \*SET\_SEHLL\_ADD sets etc). So on the assumption that this is possible PRIMER permits them to be nested to any level, allows somplex set definitions, and does not treat this as an error.

If a deck containing \*SET\_...\_INTERSECT is written out in a format pre-dating LS971R6 the \*SET\_...\_INTERSECT cards will be omitted.

####  COPY Copying sets.

>  
> The selected sets are copied. The RECURSIVE\_COPY flag has an important influence on this:
> 

> 
> * When **OFF** Only the set itself is copied. A new set referencing all the items in the original set is created.
> * When **ON** All the items "owned" by the set are recursively marked for copying. This can select a considerable number of items: use with care.
> 
> 

>  
> Generally recursive copying will only be sensible for SET\_SEGMENT definitions, refer to the [special notes on segment sets below](set-defining-sets.md#segment).
> 

####  MODIFY Modifying sets

>  
> The set modification panel is identical to the CREATE one, except that it will already be populated when entered, and usage is exactly the same.
> 

####  DELETE Deleting sets

>  
> The selected sets, and possibly their contents, are marked for deletion. What is actually deleted, and whether deletion of the set actually takes place, depends on the following switches:
> 

>  
> DELETE\_RECURSIVE Whether or not items "owned" by sets are marked for deletion.
> 

> 
> * When **OFF** Only the set itself is so marked, its contents are not affected.
> * When **ON** The contents, and anything they "own" are also marked for deletion.
> 
> 

>  
> REMOVE\_FROM\_SETS Whether flagged items can be removed from other sets.
> 

> 
> * When **OFF** Items (marked recursively) will not be deleted if they are referred to by other sets. (But that won't stop this set being deleted.)
> * When **ON** Items will be removed from any other sets in which they are referred to.
> 
> 

>  
> Deletion can only take place if the items referred to are not referenced elsewhere in the model. So deleting a set may fail if it is still in use somewhere, even though its contents may have been deleted leaving it empty! This will be picked up by global checking, and can be corrected with CLEANUP\_UNUSED which gives the option of eliminating empty sets.
> 

####  SKETCH Sketching sets

>  
> The selected sets will be sketched on the current graphics image. Sketching is performed by drawing the constituents of a set.
> 

####  ONLY sets

>  
> The selected sets are displayed and everything else is blanked. An option is provided to display either the selected sets or the contents of those sets in the ONLY mode.
> 

####  LIST Listing set summaries

>  
> A summary of the selected sets is listed to the screen.
> 

####  CHECK Check sets for errors

>  
> The selected sets are processed through the standard checking routines, and the results summarised to the screen.
> 

####  RENUMBER Renumber set labels

>  
> The standard [item renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel)is mapped for the chosen model, and any or all labels can be changed. To change a single set label it may be easier just to MODIFY it.
> 

| SET_DEFAULTS Defining the default parameters for sets.  <br>Set types \_NODE, \_PART, \_SEGMENT and \_SHELL can all be used in contexts where additional information may be required to complete input. Examples are:<br><ul> <li>In * <span class="courierbold">CONTACT_TIEBREAK </span>definitions you can define tiebreak failure parameters for a whole set, or on a per node/per element basis. </li> </ul><ul> <li>In many other (see the Ansys LS-DYNA user manual) <strong>* <span class="courierbold">CONTACT_ </span> </strong>... definitions it is possible to vary friction across a surface by defining individual friction parameters for segments or shells. </li> </ul><ul> <li>In * <span class="courierbold">CONSTRAINED_TIE-BREAK </span> <strong> </strong>definitions individual failure parameters can be defined for each node. </li> </ul> <br>In all cases default parameters may be defined for the whole set by filling in the **DA1**  **...**  **DA4** fields in the VIEW/EDIT panel as shown below. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/set/fig_set_def_1.gif)<br> <br>These will apply to every set entry except where individual entries have been made in \_COLUMN mode. |

| SET_OPTIONS Using the _LIST, _COLUMN _GENERATE, _GENERAL and _ADD sub-keywords to change set layout. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_convert.gif) |
| --- | --- |

The simplest, default set layout is SET_LISTin which a simple list of constituent items is given 8 to a line, and in which no optional data is given for any item.
This example shows a typical \_LIST layout for 23 parts.
 
Default attributes ( **DA1 .. 4**) can be given, but no individual values can be defined.
 
![](../Storage/primer-22-1/primer_links/sect_5/set/fig_set_opt_2.gif)

| Changing this definition to _COLUMNresults in the revised layout shown here. <br>It is now possible to give individual values for each item in the set.<br> <br><br> <br>When you change from \_LIST to \_COLUMN formats in PRIMER the code automatically fills in all the new row entries with zeros, ie the default. You can then overwrite any specific values as required. | ![](../Storage/primer-22-1/primer_links/sect_5/set/fig_set_opt_3.gif) |
| --- | --- |

The third method of defining sets is to use _GENERATE, in which item labels are given in [&lt;start&gt;&lt;end&gt;] pairs.

####  Converting between _LIST, _COLUMN, _GENERATE, _GENERAL and _ADD set formats

PRIMER will convert between any of these  ***except to***   \_GENERATE and \_ADD format.

* When a set is initially converted *to* \_ COLUMN format zeros are inserted for all optional data.

* When it is converted *from*  \_COLUMN format the optional data is still stored, but not displayed or output, and is still available if you revert back to that format. So you can convert to and from \_COLUMN format without losing information.

####  Data type and units of "default" and item-specific data

Because a set can be used in so many different contexts PRIMER does not attempt to determine the meaning of default or item-specific data.

Therefore the data are treated as simple numbers, and no units conversion or checking is applied to them.
 
#### SET_SEGMENT The special case of segment sets
 
Segment sets are a special case for two reasons:

* A "segment" is not a structural item, although it may be drawn to look like one, and has no existence outside the context of its parent set definition (or load etc). It has to lie on top of a shell element, or the face of a solid or thick shell.

* Therefore segment sets actually create their constituent segments, rather than just referring to them, which makes the rules for their definition and deletion different to those of other set types.

As a consequence the layout and operation of the SET\_SEGMENT editing panel is slightly different to that of the others.
 
![](../Storage/primer-22-1/primer_links/sect_5/set/fig_set_seg_1.gif)
 
Each segment is defined in terms of 4 nodes (n3 = n4 for a triangle), and the extra item-specific data occupies columns 5 to 8.
 
There is no choice of set format type.
 
Segments may be added to a set by duplicating those elsewhere in the model, or created using the [COAT](coat-entity-coating-entities-with-shells-or-segments.md) function.
 
##### Creating/editingSET\_SEGMENT\_GENERALsets

General segment sets are edited in the same way as other general sets. If needed segment attributes can be defined when inserting rows by using the a1 to a4 Segment attributes boxes.
 
SEG and DSEG rows are added in a different way. These are inserted by selecting the four nodes.
 
###### Example: adding a SEG row to aSET_SEGMENT_GENERAL

We want to add a SEG row to the top of the SET\_SEGMENT\_GENERAL set shown below:

![](../Storage/primer-22-1/primer_links/sect_5/set/set_segment_general_1.gif)
 
Select mode INSERT , type SEG and location at start of set from the popups. 
 
 ![](../Storage/primer-22-1/primer_links/sect_5/set/set_seg_general2.png)

As we have selected SEG the Segment nodes popups are made live to be able to select the 4 nodes on the segment (for a triangular segment N3 = N4). Once the nodes are selected press APPLY to insert the row.

![](../Storage/primer-22-1/primer_links/sect_5/set/set_seg_general3.png)

The row has been inserted at the top of the set.

| Locking set contents against deletion  <br>When items are deleted in PRIMER it has historically been the case that membership of a set does not - by default - "lock" an item against being deleted. This can be controlled globally on the [deletion panel](deletion-rules.md#rules) via the Remove from sets switch.<br> <br>However there are a few cases where this logic can cause problems:<br><ul> <li>Sliprings using 2D seatbelt elements rely on the contents of node and shell sets to define their geometry and connectivity <br> </li> <li>Retractors using 2D seatbelt elements have a similar reliance <br> <br> </li> <li>Nodes and parts used in Dummy assemblies, where deletion of content is likely to be unintended. <br> <br>... and other cases may arise in the future. </li> </ul> <br>Therefore the concept of "locking" set contents against deletion on a "per set" basis has been added in PRIMER release 10.1. | ![](../Storage/primer-22-1/primer_links/sect_5/set/set_locked.gif) |
| --- | --- |
| Contents locking has three possible settings:<br> <br><br>| Automatic <br> (default) | This is the default PRIMER behaviour that membership of a set does not lock contents against deletion  ***unless***  the set is referenced by something known to be sensitive to this problem. At present such items are:<ul> <li>*ELEMENT_SEATBELT_SLIPRING when the slipring is for 2D seatbelt elements </li> <li>*ELEMENT_SEATBELT_RETRACTOR when the retractor is for 2D seatbelt elements </li> </ul> <br>If either if thse types reference the set then its contents will be locked against deletion. This list of items may be added to in the future as the keyword format evolves. |<br>| --- | --- |<br>| Unlocked | This is the original PRIMER behaviour that membership of a set never locks contents against deletion, regardless of what references the set. |<br>| Locked | This is a new option, and if selected membership of a set always locks its contents against deletion |<br><br> <br>As stated above removal from sets during deletion also depends upon the Remove from sets switch being turned on.<br> <br>This setting is not "remembered" in the keyword output deck, so it will be lost when a model is deleted or a PRIMER session is terminated. It is hard to think of a situation in which the default Automatic setting will not be appropriate, and the use of this default is recommended, however the other two options are provided for completeness. |

| Visualising Sets <br>Sets are not drawn explicitly, rather they are displayed by drawing their constituent parts, elements, nodes and segments. They may be SKETCH ed via the commands above, and in most contexts within PRIMER where sets are used it is possible to sketch them via their "daisy chain" popup menus. |
| --- |

[Previous](sensor.md)  |  [Next](termination.md)