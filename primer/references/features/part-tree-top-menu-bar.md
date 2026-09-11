###  Part Tree Top Menu Bar

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13.png)

The top menu bar allows quick access top common PRIMER functions, as well as controlling how the part tree behaves and is displayed.

| Opts  ![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-1.png) |
| --- |

There is a range of options for controlling the part tree available via the Opts pop-up menu. These include how items are labeled and ordered as well as whether assemblies, tree lines and icons are drawn. The Drag option controls which items are moved when using the part tree to move items between include files/assemblies. For example when moving parts to a different include file you may wish to move the sections and materials as well. The Incl/Assem blank option allows you to control how items are treated when using blank/unblank/only on the part tree. For example, the elements within a part may be in a different include file to the part, but you may still wish to blank/unblank/only the elements. Show incl colours will display include colours if colours are set for each individual include file. Include hover text will display hover text as your cursor moves over the part tree contents. Turning on Blanking status will display in the part tree information for blanked/unblanked parts/entities. For example, if half the parts are blanked within one include file, a graphical bar will be shown for that include file displaying that half the contents are blanked. The blanking status can be changed from part based (default) to either element based or entity based.

| Type ![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-3.png) |
| --- |

From the Type pop-up menu it possible to select a variety of different item types to be displayed in the tree in addition to parts. These appear below the parts in the tree, and most of the options (edit, blank etc.) are available through the "right-click" menu.

####  Blank / Unblank / Only / Sketch

One use of the part tree is as easy way access to blanking commands. Blank , Unblank , Only (blank all other items) and Sketch commands can be applied to the currently selected items.

####  Sel all / Clear

The Sel all and Clear buttons can be used to select all items and empty the selection respectively.

| Select <br>![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-5.png) |
| --- |

The Select button invokes an object menu for selecting parts. Selection can also be made via the Quick Pick option "Locate in Tree".Note that selections can be Include files, Assemblies or Models as well as parts. For example, click Only then an Include file to display only that Include file.

####  Include

The Include, Assembly and SET PART TREE options of the popup determine what type of hierarchy is displayed.

When in Include mode, the Include file structure of the model is shown. Parts can be dragged from one Include to another- this has the same effect as putting the parts on the Clipboard and moving to an include file with the "find referenced items" option (nodes and elements are moved in addition to the part cards). It is also possible to "Make current layer" which sets the current layer to the relevant include file (the layer is where PRIMER creates new entities).

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-6.png)

You can also cut and paste parts using the "right-click" menu. When a single or multiple selection of parts is shown, right click and cut parts. Then right-click over the include file and paste parts (shown above).

#####  Read include stamped part

\*INCLUDE\_STAMPED\_PART definitions are also shown in the part tree with S.P. shown before the filename and a grey coloured folder icon. The stamped part definitions cannot be dragged. An option "Read SP as new Model" is available when right clicking on them (see below).

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-10.png)

When "Read SP as new Model" is clicked, a new model will be read into PRIMER and PLASTIC STRAIN contours will be automatically contoured.

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-11.png)

It is also possible to read all the \*INCLUDE\_STAMPED\_PART definitions in the entire model by right clicking on the model icon and clicking on the 'Read all S.P." button. This read function automatically merges any nodes which may be present and a summary of the labels decashed/merged is presented to the user. Stamped parts can also be read in using the quick pick menu for \*PART.

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-12.png)

| Assembly  <br>Assemblies are user-defined hierarchical groupings of entities. They exist only in PRIMER and do not effect the output analysis file (they are written in comment lines). Assemblies provide a way of grouping entities together to enable quick model manipulation and viewing. Entities from different include files can be grouped together, and the hierarchy is stored in what is known as an **assembly file** . Note in earlier versions of PRIMER, only parts could be placed in assemblies. Now, any entity type can be placed in an assembly.<br> <br>The assemblies are created by right-clicking on a model (or existing assembly) in the part tree. Parts can then be dragged into the assembly as shown below. The clipboard can also be used to move entities into an assembly.<br> <br>![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-13.png) ![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-14.png) |
| --- |

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-15.png) ![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-16.png)

When the keyword file is written out, the assembly to which each entity belongs will be written with the entity data as a comment. The hierarchical structure can be written only as a separate assembly file (right-click on the model in the part tree) - this is to avoid duplicated or missing assembly hierarchies when working with the model in Include files. If the keyword file is written but not the assembly file, when the model is next read in, the part tree will show a list of any assemblies that contain entities but flattened into a 1-layer-deep structure.

Note that assembly hierarchies are automatically created from Hypermesh and ANSA hierarchy comment data should this exist in the input deck. Upon keyout you can choose if you wish to save the assembly hierarchy data in PRIMER, Hypermesh or ANSA format.

####  

#### 

#### SET PART TREE

SET PART TREE is similar to Assembly (user-defined hierarchical groupings of entities) but it is linked to the SET PART TREE keyword.

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-22.png)![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-23.png)

SET PART TREE is a special type of set that can have either parts and/or child set part trees (sub-branches). Negative values in the keyword refer to part IDs, and positive values in the keyword refer to child set part trees.

For example, SET PART TREE with ID=4 has 3 parts (with ID 11, 12 and 13), and a child set part tree (with ID 2):

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-24.png)

Changes in the keyword editor are automatically reflected in the treeview and vice-versa.

#### 

#### Find

The Find button is available only when Contents is switched off, and it gives a search option. Text or an ID number is entered in the text field. PRIMER finds a part whose title contains the text, or a part with an ID matching the number. The arrows determine whether the search direction is up or down from the current selection. Next will find the next matching item. The search will only find matches for currently enabled options (i.e. if id is disabled and items are labeled by name only a search for part 15 will return no matches regardless of its presence in the tree).

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-17.png)

####  Contents

When Contents is switched on, the part tree displays each keyword in the model along with the number of entities of that particular keyword type arranged in alphabetical order of keywords. If Include is switched on in conjunction with Contents , the part tree displays the keywords and their numbers by include files. On the other hand, if Include is switched off, the keywords and their numbers are displayed for the entire model. The following illustrations depict the part tree in Contents mode with Include switched off and on respectively:

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-18.png) ![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-19.png)

Branches can be selected from the tree and operations such as blanking, unblanking, etc., can be performed. Not all operations are permitted for all keywords, and the buttons for the non-permitted operations are greyed-out in the popup box as seen below:

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-20.png)

In addition to the options available at the top of the tree, the pop-up box offers the following new options when the part tree is in Contents mode:

* Keyword : This option is available if the entities that belong to a selected keyword can be manipulated via a generic keyword editor in PRIMER. When clicked, this option invokes the generic keyword editor containing all the entities that belong to the selected branch. This option is obviously not available when multiple keyword are selected in the part tree.
* Create : Create option is permitted for entities which have edit panels.
* Edit : If only one keyword is selected from the part tree, and if only one entity of the selected keyword type exists in the model, the editing panel for the selected entity can be directly invoked using this option.
* Cut/Paste : Allows you to move entities to different include files.
* List : This button invokes the **Contents List** window for the selected keyword. The Contents List window is described in the following section.
* Delete : This will bring up the standard deletion panel to allow you to delete the selected entities and associated entities.

####  List

This button replaces the Find button when Contents is switched on, and is therefore available only when the part tree is in Contents mode. If multiple entities of a keyword type are permitted in a model, the entities of that type can be listed in a single **Contents List** window by means of the List button. Keywords such as \*CONTROL\_ and \*DATABASE\_ASCII\_ are exceptions as only one entity of each of such keyword types are allowed in a model. The **Contents List** window can alternatively be invoked by means of the List option in the pop-up box for the keyword selected in the part tree. The **Contents List** window can be seen in the illustration below:

![](../Storage/primer-22-1/part-tree-top-menu-bar/part-tree-top-menu-bar-2024-03-13-21.png)

The entries in the Contents List window can be selected and subjected to operations such Keyword , Edit , Blank , Unblank , Only and Sketch . Note that not all operations are available for every keyword type, and that the buttons for the non-permitted operations are greyed-out in the popup box as seen above.

Just as in the part tree itself, option Keyword invokes the generic keyword editor for the selection (if permitted by PRIMER), and option Edit invokes the editing panel for one single entity selected in the **Contents List** window. Right click Delete will allow you to delete the selected entities.

The **Contents List** window also has a Find button that looks and functions in a similar fashion to the one in the main **Part Tree** .

[Previous](part-tree-behaviour.md)  |  [Next](part-table.md)