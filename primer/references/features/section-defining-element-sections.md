###  SECTION: Defining Element Sections

  **** 

[Top level menu](section-defining-element-sections.md#Thisfigureshowsthemainsectioncreateeditpanel)
 
 * [Create](define-transform.md#create)
 * [Copy](define-transform.md#copy)
 * [Edit](define-transform.md#modify)
 * [Delete](Editing%20a%20Model%20Database.html#delete)
 * [Visualisation](section-defining-element-sections.md#VisualisingSECTIONdefinitions)

The \*SECTION keyword in Ansys LS-DYNA are used to define the section properties of elements. Sections are referred to from \* PART cards. For the possible options see the type pop-up menu in [Making a new section definition](define-transform.md#create) below.
 
Sections of all types share a common numbering sequence (thus you cannot have \*SECTION\_SHELL  **#1*****and***\*SECTION\_SOLID  **#1**).

| **This figure shows the main section create/edit panel.** <br>All functions have their standard meanings as described in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions). | ![](../Storage/primer-22-1/primer_links/sect_5/section/fig_sect_0.gif) |
| --- | --- |

**CREATE** **: Making a new section definition**
 
Initially a new section has no **\_type**defined, and it is necessary to define one.
 
Use the Type: popup menu, as shown in this figure to define an element type.
 
![](../Storage/primer-22-1/primer_links/sect_5/section/fig_sect_1a.gif)
 Once the section type has been defined, the relevant keyword cards appear on the editing panel, organised as shown in the Ansys LS-DYNA manual.
In this example the user has selected type \_BEAM , and filled in the basic data for a section.
 ![](../Storage/primer-22-1/primer_links/sect_5/section/fig_sect_1b.gif)

####  COPY Copy existing section(s) to make a new section(s).

When sections are copied the default is only to copy the section definitions themselves.

When RECURSIVE COPY is used all parts, elements, etc using the sections are also copied.

####  MODIFY Modify the attributes of an existing section.

Existing sections may be edited using MODIFY , which maps the same panel as above, except that data fields are already populated.

Where the section is referenced by a Part which contains elements, the topological type of the section cannot be altered. For example if a section is associated with a part containing shell elements, PRIMER will not allow the section type to be changed to \_SOLID .

Any modifications made to the section definition will not be made permanent until the UPDATE\_SECTION button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.
 
#### DELETE Delete existing section definitions
 
The DELETE function deletes the selected sections. However you cannot delete a section that is in use by a **PART**unless you remove it from the part definition, or delete that too. To help with this the following two switches may be used:
 
* DELETE\_RECURSIVE Will select for deletion the parts, associated elements, and so on that reference this section.
* REMOVE\_FROM\_SETS Is often also needed if parts are to be deleted, as their elements, the connected nodes, and often the parts themselves may be included in sets.

A good way of getting rid of surplus (unused) sections is to turn these two switches off, then select all sections for deletion. Only those which are not used by anything will actually get deleted.
 
#### KEYWORD Generic keyword editor
 
KEYWORD starts the [generic keyword editor](the-generic-keyword-editing-panel.md#keywordedit) which allows creation, deleting and modification of multiple section cards. This is useful for modifying multiple section cards in a single operation.
 
#### SKETCH Sketch elements belonging to sections on the current image.
 
SKETCH sketches on top of the current image the elements of the parts which reference the selected sections.

####  LIST List a summary of selected sections

The main attributes of the selected sections are listed to the screen.

####  CHECK Check selected sections for correctness

The selected sections are processed through the section checking functions, and any errors found are summarised to the screen.

Section checking is comprehensive: it detects both numerical errors (eg -ve area) and parameter errors (eg &lt;type&gt; indices out of range).

Individual sections may also be checked during creation and modification by the CHECK\_DEFN command on those panels.

####  RENUMBER Change the labels of sections in a model

RENUMBER lets you change any or all section labels within a given model using the [standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel).

To change the label of an individual section it may be simpler just to MODIFY it.

END\_SECTION terminates the section editing process.

####  Visualising *SECTION definitions

Sections are not drawn explicitly, but may be displayed by [SKETCH](define-transform.md#sketch)ing the parts and elements that reference them.

In addition the colour of part-based elements may be related to section id using the Display &gt; Colour &gt; Colour all by... . method as described in [COLOUR... Setting Item Colours in Plots](colour-setting-item-colours-in-plots.md#colour).

[Previous](rigidwall-defining-rigid-stone-walls.md)  |  [Next](sensor.md)