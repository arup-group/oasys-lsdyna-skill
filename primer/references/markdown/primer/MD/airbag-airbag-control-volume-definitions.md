###  AIRBAG: Airbag (Control Volume) Definitions

* [**AIRBAG\_&lt;type&gt;** sub level menu](airbag-airbag-control-volume-definitions.md#type)
* [Creating a new definition](define-transform.md#create)
* [Copying a definition](define-transform.md#copy)
* [Editing an existing definition](define-transform.md#modify)
* [Deleting airbag definitions](Editing%20a%20Model%20Database.html#delete)
* [Other operations](define-transform.md#sketch)
* [Visualising airbags.](airbag-airbag-control-volume-definitions.md#visualising)
* Partially encrypted airbags
* [**&lt;\_INTERACTION&gt;** menu](airbag-airbag-control-volume-definitions.md#interaction)

"Airbags" are definitions which determine the gas pressure inside an enclosed volume by applying one of a range of gas expansion laws. This pressure then acts upon the elements that form the volume, generating pressure loads. The gas pressure is a function of incoming and outgoing gas flow, its thermodynamics and the size of the volume; the pressure is updated during the analysis as these parameters change and interact.

The name "airbag" is really a misnomer as they don't have to be used solely for vehicle airbags (which don't contain "air" anyway). They can, for example, be used to model the pressure inside tyres or indeed any structure where changes in volume may affect internal pressure. The term "control volume" is better, and is in fact used in formatted Ansys LS-DYNA input.

![](../Storage/primer-22-1/primer_links/sect_5/airbag/airbag_menu.gif)

Select the sub menu desired using the AIRBAG popups in the KEYWORD menu.

####  AIRBAG

This figure shows the main AIRBAG menu as selected from the Keywords panel. The functions currently available have their standard meanings ([see Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions)). Greyed out functions are not currently available:

![](../Storage/primer-22-1/primer_links/sect_5/airbag/fig_abag_0b.gif)

####  CREATE Making a new airbag definition

This figure shows the standard CREATE / EDIT panel for airbags. Here CREATE has been used, so a blank airbag creation panel is displayed.

![](../Storage/primer-22-1/primer_links/sect_5/airbag/fig_abag_1a.gif)

The static buttons in the top section of the panel have functions which are common to the other editing panels within PRIMER.

Only once sufficient data has been input by the user will the CREATE\_AIRBAG button become active. Until that time it will remain greyed out.

The data on the panel is as follows:

| **LABEL** | This is an internal label used by PRIMER and is not written out in the keyword deck. It is set to the first free airbag label within the model as a default. This value can be changed if necessary though existing labels cannot be overwritten. The popup window allows the **FIRST-FREE** label or the **HIGHEST + 1** label to be automatically selected. |
| --- | --- |
| **GIVE\_LABEL** | This button allows the optional numeric ID to be used. (Airbag definitions in Ansys LS-DYNA do not have to have an explicit number, although PRIMER requires this.) If an internal **LABEL** is already set then this is used by default. A new **LABEL** is selected as described above. |
| **TYPE** | The airbag type is defined using this button. The [...] Shortcut button can be used to browse through a list of airbag types. The browse panel is shown in figure below. |
| **ROW/COL** | The data relevant to each airbag type is displayed in row and column format identical to that of DYNA keywords |

To start creating an airbag you must first define the type. You can type in a standard keyword if known, or invoke the selection menu in this figure with the [...] button.

![](../Storage/primer-22-1/primer_links/sect_5/airbag/fig_abag_1b.gif)

Once the material type has been defined the keyword data will be displayed on the panel, as shown in figure below. Initially all values will be set to zero.

![](../Storage/primer-22-1/primer_links/sect_5/airbag/fig_abag_1c.gif)

The airbag data can then be typed into the relevant boxes. The expected data type is indicated on the grey button, which also shows the acronym for that data value:

| **F** | White **F** floating value |
| --- | --- |
| **I** | White **I** integer value |
| **+LC** | Green **LC** +ve loadcurve |
| **-LC** | Red **LC** -ve loadcurve |

(Note that the component **'RBID'** is not available for editing. This is required for user defined activation subroutines which are not yet enabled from this panel.)

Information about each individual data component can be requested by pressing the grey data component button. For example; to request information about data component '
**CN**' (2
^nd^row, 1
^st^column) press the grey button with
**CN**.

This will create a new sub-window with detailed information about the data component showing:

* A one-line description of it;
* Its current units type
* Its current value.

![](../Storage/primer-22-1/primer_links/sect_5/airbag/fig_abag_1d.gif)

Once all of the data has been input on the airbag card, CREATE\_AIRBAG installs the airbag permanently in the model.

####  COPY Copy existing airbag(s) to make a new airbag(s)

**COPY**  makes new airbags, in the same model(s), that are identical to their originals apart from their labels. By default only the airbag definitions themselves are duplicated.

Where  **RECURSIVE COPY**  is requested, all items associated with that airbag (i.e. elements, parts, etc.) are also copied.

####  MODIFY Modifying the attributes of an existing airbag

**MODIFY**  functions in the same way as  **CREATE**. Obviously, the airbag type will already have been selected so the panel will resemble that shown above.

Any modifications made to the airbag definition will not be made permanent until the  **APPLY\_MODIFY**  button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing airbag definitions

The  **DELETE**  function deletes the selected airbag. Two switches may be used:

| **DELETE\_RECURSIVE** | Also elects for deletion any segment sets, their segments and associated nodes that are used uniquely to define this airbag. Where airbags are defined by Part or other non-unique "structural" methods these items are not selected for deletion. |
| --- | --- |
| **REMOVE\_FROM\_SETS** | Is needed if segments are to be deleted as it stops their definition in sets "locking" them against deletion. |

####  SKETCH Sketch elements used by an airbag on the current image

**SKETCH**  sketches on top of the current image the parts and elements that are referenced by the selected airbags.

####  LIST Not yet active

####  CHECK Not yet active

####  RENUMBER Renumbering airbag labels

**RENUMBER**  lets you change any or all airbag labels within a given model using the [standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel).

To change the label of an individual airbag it may be simpler just to MODIFY it.

####  Visualising Airbags

Airbags can be drawn (activate in the ENTity Viewing panel). Alternatively,

* **SKETCH**  it, or
* **MODIFY**  it and sketch it.

It will be drawn in terms of the parts and elements, or segments if defined by  **SET\_SEGMENT**  , that defines it.

####  Partially encrypted *AIRBAGs

It can be desirable to encrypt airbag definitions in order to protect the intellectual property within them. PRIMER supports this subject to the following syntax rules

| \*AIRBAG\_xxx\_ID | The \_ID suffix must be used in order to define a specific label for the airbag <br>Each encrypted airbag must start with a new \*AIRBAG card. |
| --- | --- |
| &lt;label&gt; &lt;Title&gt; | The first line of [label, title] must be in clear so that the label can be read. <br> PRIMER does not attempt to interpret the title in any way so it can be anything. |
| --- BEGIN PGP MESSAGE --- | Thereafter data may be encrypted. |

More information about this is given in the following sections:

* [PGP Encrypted keyword data](pgp-encrypted-keyword-data.md#pgp_main)A general introduction
* [PGP data within an *AIRBAG definition](pgp-data-within-an-airbag-definition.md#pgp_airbag) Specific information about partially encrypted airbags
* [Further considerations affecting encrypted *AIRBAG, *MAT and *DEFINE_CURVE definitions](further-considerations-affecting-encrypted-airbag-mat-and-define-curve-definitions.md#further)

* * *

####  *AIRBAG_INTERACTION

This is available through the standard keyword editing panel in [The Generic KEYWORD Editing Panel](the-generic-keyword-editing-panel.md#keywordedit).

![](../Storage/primer-22-1/primer_links/sect_5/airbag/airbag_interaction.gif)

[Previous](editing-multiple-items-using-the-keyword-editor.md)  |  [Next](ale.md)