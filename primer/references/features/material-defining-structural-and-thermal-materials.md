### MATERIAL: Defining Structural and Thermal Materials
 
[**Structural Materials**](material-defining-structural-and-thermal-materials.md#STRUCTURALMATERIALS)

| <ul style="font-size: 14.6667px;"> <li><a href="contact-defining-contact-surfaces.md#topmenu">Top level menu</a></li> <li><a href="define-transform.md#create">Creating</a></li> <li><a href="define-transform.md#copy">Copying</a></li> <li><a href="define-transform.md#modify">Editing</a></li> <li><a href="material-defining-structural-and-thermal-materials.md#delete">Deleting</a></li> </ul> | <ul style="font-size: 14.6667px;"> <li><a href="material-defining-structural-and-thermal-materials.md#IMPORT">Importing</a></li> <li><a href="material-defining-structural-and-thermal-materials.md#Visualisationofmaterials">Visualisation</a></li> <li><a href="material-defining-structural-and-thermal-materials.md#mat_user">MAT_USER rules</a></li> <li><a href="material-defining-structural-and-thermal-materials.md#encrypted">Encrypted materials</a></li> </ul> |
| --- | --- |

**[Thermal Materials](material-defining-structural-and-thermal-materials.md#THERMALMATERIALS)**

* [Top level menu](material-defining-structural-and-thermal-materials.md#thermalmaterialediting)
* [Editing](material-defining-structural-and-thermal-materials.md#typicalthermalmaterialediting)

The **\*MATERIAL**keyword in Ansys LS-DYNA includes both structural and thermal materials, however they are treated separately within PRIMER since their roles are different:

* [Structural materials](material-defining-structural-and-thermal-materials.md#STRUCTURALMATERIALS) are required for all structural analyses. (In keyword format all types of structural material, including those for discrete and seatbelt elements, form part of the same numbering sequence. The distinction between "structural", "discrete" and "seatbelt" material numbering found in formatted input decks does not exist.

* [Thermal materials](material-defining-structural-and-thermal-materials.md#THERMALMATERIALS)are used for "thermal only" analyses, and may also be defined for combined structural and thermal analyses.

Structural and thermal materials use separate labelling sequences, so it is possible to have both structural material #1 and thermal material #1.

#### STRUCTURAL MATERIALS
 
The structural material editing functions allow all structural material types to be processed.
 
PRIMER does not draw materials directly, but material labels may be appended to the graphics of structural items, see VIS\_1 ; and Parts, Elements, etc. may be selected by material for subsequent graphics operations such as SKETCH and BLANK

| This figure shows the main structural material editing panel. <br>[IMPORT](material-defining-structural-and-thermal-materials.md#IMPORT)permits material definitions to be "imported" from databases of material definitions to populate undefined materials in a model.<br> <br>TRANSFER opens the main window for the transfer data function (see [TRANSFER DATA](transfer-data.md#TransferData) for more detail)<br> <br>[STRESS/STRAIN](material-defining-structural-and-thermal-materials.md#stress_strain) is used to visualise stress strain curves for a material.<br> <br>The other functions currently available have their standard meanings. (see [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions)).<br> <br>Switch to thermal materials toggles the editing panel (for more detail on thermal materials [see below](material-defining-structural-and-thermal-materials.md#THERMALMATERIALS)). | ![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1.gif) |
| --- | --- |

##### CREATE Making a new material definition
 
![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1a.gif)

CREATE produces this blank material creation panel, since no material type has been defined yet.

######  Elem types:

Indicates the types of elements which are applicable to the currently defined material type.

This is a brand new material definition with no previous context, therefore **&lt;Any type&gt;** is shown. Had this material been created from a **PART** of known element type the relevant type would be shown here, and only materials valid for this element type would be selectable.

| Type:  <br>The material type can be defined from this button.<br> <br>The [...] browse button can be used to browse through a list of material types as shown here.<br> <br>Each material is listed with its Ansys LS-dyna material number.<br> <br>**Note on selecting a Material:**<br> <br>A Material may be selected by one of three ways:<br><ul> <li>by invoking the shortcut button and selecting the material with the mouse from the list </li> <li>by typing in the material number to the &quot;Type&quot; box, e.g. &quot;1&quot; for * <span class="courierbold">MAT_ELASTIC </span> </li> <li>by typing in the material name to the &quot;Type&quot; box, e.g. &quot;rigid&quot; for &quot;* <span class="courierbold">MAT_RIGID </span>&quot; </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1b.gif) |
| --- | --- |

| Suffix:  <br>Underneath the material type you can define the suffix.<br> <br>There are two ways of selecting suffices:<br><ul> <li>by browsing with the [...] button </li> <li>by typing in the suffix name to the &quot;Suffix&quot; box, e.g. &quot;stochastic&quot; for the &quot;* <span class="courierbold">_STOCHASTIC </span>&quot; suffix </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1c.gif) |
| --- | --- |

######  ROW/COL

The data relevant to each material type is displayed in row and column format identical to that of DYNA keyword.
 
Once a material type has been defined the panel will become populated with that material's format. For example the type \* MAT\_PLASTIC\_KINEMATIC has been chosen here:
 
![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1d.gif)
 
The material data can then be typed into the relevant boxes. The expected data type is indicated on the grey button, which also shows the acronym for that data value:

| **F** | White **F** floating value |
| --- | --- |
| **I** | White **I** integer value |
| **+LC** | Green **LC** +ve loadcurve |
| **-LC** | Red **LC** -ve loadcurve |

Information about each individual data component can be requested by pressing the grey data component button. For example; to request information about data component ' **E** ' (1^st^row, 3^rd^column) press the grey button with the E.

| This will create a new window with detailed information about that data component showing:<ul> <li> <p align="left">A one-line description of it; </p> </li> </ul><ul> <li> <p align="left">Its current units type </p> </li> </ul><ul> <li> <p align="left">Its current value</p> </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1e.gif) |
| --- | --- |

###### MAT_ADD_EROSION
 
From Ansys LS-Dyna version 950 onwards any structural material type can have "erosion" properties defined for it. This provides a range of failure parameters that can be used to delete ("erode") the elements using the material.
 
![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1f.gif)

By default erosion properties are not defined for a material, and this option defaults to Inactive.

If it is made Active then you can EDIT it:

![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1g.gif)

\*MAT\_ADD\_PORE\_AIR , \*MAT\_ADD\_PERMEABILITY , \*MAT\_ADD\_AIRBAG\_POROSITY and \*MAT\_ADD\_FATIGUE are also available to edit in the same way as \*MAT\_ADD\_EROSION.

 Import from database...  **Importing pre-defined material data from a database** 
Material data can be stored in a database, and "imported" to populate a definition. The information imported is:

* All the data fields in the material definition, except for its label, are overwritten.

* If the material in the database is of a different type to the current material, the type is also changed.

* If the database definition refers to loadcurves (\* DEFINE\_CURVE ) or tables (\* DEFINE\_TABLE ) then these will be imported too. They will be given labels &lt;highest current curve/table number + 1&gt; onwards.

Note: Import from database... in this context differs slightly from the same command in the top material panel:

* Here: it imports data unconditionally for a single material definition.

* In the top panel it imports definitions for a range materials by matching up the names of the database definitions against those in the model.

![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1h.gif)
Here is an example of a database containing seven materials. The stored Material Name and the Ansys LS-Dyna **Material Model**type for each are listed.
To import a material click on its **Name**or **Model**definition, either will do, and press APPLY . This will overwrite the definition in the current create/edit panel with the imported data (only the label is left unchanged).

| **FILTER OFF/ON**  **Filtering the material list**  <br>By default the filter is **OFF** , and all materials in the database are shown. | **![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1i.gif)** |
| --- | --- |
| If the filter is **ON** then only those materials with names containing the character string given will be shown. <br>In this example "D" has been chosen, restricting the list to just two materials.<br> <br>The filter is case-sensitive: "D" and "d" are treated as distinct. | ![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1j.gif) |

**Sort Alphabetically** 
By default materials appear in the order in which they are defined in the database.
 
Turning **Sort Alphabetically**on sorts them alphabetically by name. The sort is not case-sensitive.
 **![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_1k.gif)**

Once all of the data has been input on the material card, press CREATE\_MATERIAL to install the material permanently in the model.

As with other creation/editing functions a standard check is made of the new definition prior to saving it, and you are warned about errors found. However note that comprehensive checking of materials is nearly impossible, and for most types PRIMER simply ensures that a positive density has been used.

Material database format and instructions for setting up a database are given in [Appendix A](https://help.oasys-software.com/articles/primer-publication-1/i-primer-database-format).

#####  COPY Copy existing material(s) to make a new material(s).

COPY makes new materials, in the same model(s), that are identical to their originals apart from their labels. By default only the material definitions themselves are duplicated.
 
Where RECURSIVE COPY is requested, all items associated with that material (i.e. elements, parts, etc.) are also copied.

#####  MODIFY Modifying the attributes of an existing material.

MODIFY functions in the same way as CREATE . Obviously, the material type will already have been selected so the panel will resemble that shown in "populated" figure above.
 
If the material is in use by a PART which has elements then the "element type" of the material is locked to those elements, which will restrict the range of material types you can change it to. For example a material used by springs cannot be changed to a shell type.
 
Any modifications made to the material definition will not be made permanent until the APPLY\_MODIFY button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

#####  DELETE Delete existing material definitions.

The DELETE function deletes the selected materials. However you cannot delete a material that is in use by a PART unless you remove it from the part definition, or delete that too. To help with this the following two switches may be used:
 
DELETE\_RECURSIVE Will select for deletion the parts, associated elements, and so on that reference this material.
 
REMOVE\_FROM\_SETS Is often also needed if parts are to be deleted, as their elements, the connected nodes, and often the parts themselves may be included in sets.
 
A good way of getting rid of surplus (unused) materials is to turn these two switches off, then select all materials for deletion. Only those which are not used by anything will actually get deleted.

#####  IMPORT Matching up and restoring material definitions from a database.

When an Ansys LS-Dyna model is taken into a 3rd-party pre-processor for modification it often loses most of its material definitions, as they are too complex for "general" software. This frequently happens when models are partially remeshed.

A model that comes back into PRIMER from such a source is referred to as being "stripped" of its materials.

This option allows you to maintain a separate database of material definitions, and to "marry" them up with the "stripped" model by matching their names.

This figure shows the material IMPORT menu.
At the top of the menu the current material database is displayed along with an option to select an alternative material database. If this option is greyed out then PRIMER has been unable to locate any material databases.
 
By default the menu contains a complete list of all the materials the model contains ( sorted by Material ID ), along with the Material Name and the current material status.
 
![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_2.gif)
 
#####  MATCH ALL NAMES

This option will search through **ALL** of the materials in the current model ( ignoring the current material status ) and will attempt to match them with the material definitions in the current material database.

#####  MATCH UNDEFINED NAMES

This option will search through only the &lt;&lt;Undefined&gt;&gt; materials in the current model and will attempt to match them with the material definitions in the current material database.

If the current material database is changed after selecting either of the 2 options above and then the MATCH ALL NAMES option is selected then any material that was matched in the first database and also matches an entry in the second database will be replaced with the entry from the second database.

#####  Material Names

The material name displayed for each material can come from a number of sources.

If the model being edited has been read in from a KEYWORD input deck then the material name is taken from one of the following sources ( listed in order of preference )

* \* MAT\_...\_TITLE card ( LS-960 input files and above)
* **$HMNAME** - Hypermesh material name comment card.
* **$PRTITLE** - PRIMER material name comment card.

If the model has been read in from an IDEAS Master Series Universal file then the material names are taken from the material database cards in the universal file.
 
##### Material Status
 
Each material is displayed using one of the following statuses.

| **&lt;&lt; Undefined &gt;&gt;** | The material is a Latent material without any material properties defined for it yet. (RED) |
| --- | --- |
| **Automatically Found in Database** | The material has been automatically matched with a material in the current material database. (GREEN) |
| **User Selected From Database** | A material definition in the current material database has been selected by the user for this material. (BLUE) |
| **Defined by User** | The material definition has been edited by the user. (BLUE) |
| **Already Defined** | The material is already defined in the model and has not been modified by the user. (BLUE) |

In addition to the material status the entries in the list are colour coded using the colours above.
 
#####  Automatic Material Import

The Material name can be used to automatically locate a material definition in the current material database. To locate a material in the database the following rules are applied.

* The material name in the current model is converted to upper case.
* The name is compared to each name in the material database (also converted to upper case) to see if there is an exact match. If the name matches more than one entry in the material database then the first entry in used.
* If none of the database names match exactly then a second search through the database is carried out to see if the material name is a subset of one of the names in the database of if the database name is a subset of material name.

If for example the current material database contained the following names

| Database Names | : STEEL H350 - 1 |
| --- | --- |
|  | : STEEL H350 |
|  | : STEEL H420 |

Then the following materials would be matched as follows

| Material Name | Database Material |  |
| --- | --- | --- |
| STEEL H350 | STEEL H350 | *(Exact match)* |
| NEW STEEL H350 | STEEL H350 | (Database subset of material name) |
| STEEL H | STEEL H350 - 1 | (Material name subset of database 1 ^st^match) |

| | Manual Material Import In addition to automatically selecting a material from the database the user can manually select a material from the database by using the POPUP menu attached to the status button of each material. | ![](../Storage/primer-22-1/primer_links/sect_5/material/fig_matl_3.gif) |<br>| --- | --- |<br>|  | | **SELECT FROM DATABASE...** | This option will display a list of all the materials in the current material database. |<br>| --- | --- |<br>| **EDIT...** | This option will bring up the standard create (undefined material) or edit material panel. | | |
| --- |

#####  SKETCH Sketch elements using a material on the current image.

**SKETCH**  sketches on top of the current image the parts and elements that reference the selected materials.

#####  LIST Summarise the attributes of selected materials.

LIST allows the user to individually select materials and display a summary listing of their attributes.

#####  CHECK Check selected materials for correctness

CHECK runs the standard checking function on the selected materials, summarising any errors.

***WARNING:***  Checking materials thoroughly is a mammoth task, which PRIMER does not at present attempt. Most structural materials are currently only checked for a positive density. Therefore that a material "Checks OK" does not mean that it contains no errors!

#####  RENUMBER Renumbering material labels.

RENUMBER lets you change any or all material labels within a given model using the [standard renumbering panel.](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel)

To change the label of an individual material it may be simpler just to MODIFY it.

#####  STRESS / STRAIN Visualise stress strain information

STRESS / STRAIN lets you visualise stress / strain curves for various material types. Select the materials you wish to visualise and click Apply . A panel will open displaying the stress/strain curve(s).

![](../Storage/primer-22-1/primer_links/sect_5/material/stress_strain_1.png)

If displaying information for more than one material, you can click through the materials displayed in a list on the right hand side of the panel.

The curves displayed are constructed from the appropriate material information. The following rules are used:

* If the material uses a \*DEFINE\_CURVE that is what is displayed. The curve data can be modified on the stress/strain panel.
* If the material used a \*DEFINE\_TABLE the first curve in the table is displayed. The curve data can be modified on the stress/strain panel.
* If the material has stress/strain data defined by a series of points on the material card (for example, with MAT24 you can specify stress/strain data using the EPS/ES fields), these points are displayed as a curve. The curve points can be modified, and the material data will be updated accordingly, however you will not be able to add more than the maximum number of points that can be defined on the card (in the MAT24 example there is a maximum of 8 points).
* If the material stress/strain data is defined by a yield stress and tangent modulus (for example SIGY and ETAN on MAT24) than a curve is constructed from these two values. SIGY is the first point, and the second point is derived from ETAN and a max strain value. This max strain value is 1.0 by default and can be changed on the options panel which can be opened from the stress/strain main panel. The curve points can be modified, and the material data will be updated accordingly, but for this method you cannot have more/less than 2 points.
* If the material stress/strain information is defined by a power law (for example MAT\_JOHSON\_COOK...), a curve is created from the card information. You can specify the number of points on the created curve (default 100) and also a strain rate (default 1.0) on the options panel which can be opened from the main stress/strain panel. The curve points cannot be modified using this method.

| THERMAL MATERIALS  <br>The thermal material editing functions allow all thermal material types to be processed.<br> <br>This is done in exactly the same way as structural materials, save that:<br><ul> <li>The panels are somewhat simpler, reflecting the less complex nature of thermal materials. </li> <li>The concept of &quot;Erosion&quot; does not exist for thermal materials. </li> <li>There is no database &quot;Import&quot; capability for thermal materials. </li> </ul> <br>PRIMER does not draw thermal materials explicitly. Like structural materials they can be SKETCH ed by drawing the parts and elements that reference them. |
| --- |

| This is the main panel for thermal material editing. <br>The functions currently available have their standard meanings. (see [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions)).<br> <br>(There is no IMPORT facility for thermal materials.) | ![](../Storage/primer-22-1/primer_links/sect_5/material/fig_tmat_1.gif) |
| --- | --- |

This is a typical thermal material editingpanel. It functions in exactly the same way as structural materials.

![](../Storage/primer-22-1/primer_links/sect_5/material/fig_tmat_2.gif)

#### Visualisation of materials
 
Materials cannot be drawn explicitly (there is no ENTity Viewing setting for them), however they can be visualised in the following ways:

* By a [SKETCH](define-transform.md#sketch)command in the top menu or editing panels above;
* By selecting **MATERIAL**as the native colour for part-based elements: see "[controlling the colour of elements](element-defining-structural-elements.md#Controllingthecolour)".

Selected material properties can also be contoured: see ["Data plotting commands"](data-plotting-commands.md#42DataPlottingCommands).

####  Special rules for *MAT_USER and loadcurves

Material type MAT\_USER (types 41-50 and 281-290) is special in that the input is a series of arguments for a user-supplied subroutine, but the definition of that subroutine is supplied separately outside the keyword deck.

In many cases such materials reference load-curves or tables, and this can cause problems during [Cleanup Unused](cleanup-unused-example.md#cleanupexample)****if these curves are not referenced by anything else because it makes them look "unused" and hence eligible for deletion during the Cleanup operation. Therefore from V11 onwards the following special rules apply:

* By default all \*MAT\_USER definitions in a given include file (or the master file) generate internal references to all loadcurves, tables or functions in that include file. This locks them against deletion, solving the Cleanup Unused problem described above.
* This behaviour can be modified using the preference primer\*mat\_user\_ref\_curves as described below. 

    | Arguments for the primer\*mat\_user\_ref\_curves preference |
    | --- |
    | IFILE\_ONLY (default) | All \*MAT\_USER definitions in an include file (or the master file) make internal references to all loadcurves, tables and functions in that file **only** . |
    | ALL | All \*MAT\_USER definitions in the model reference **all** loadcurves, tables and functions in the model - regardless of include file membership |
    | NONE | No such references are made. |

Further information for User defined materials ( MAT\_USER, types 41-50 and 281-290) can also be defined using CSV files. CSV files can be created that give PRIMER more information about the fields in the user defined material. PRIMER can then use that information to display correct field headers, correct links to \*DEFINE\_CURVE and \*DEFINE\_TABLE (including associated cross references) and Youngs modulus and Poisson's ratio can be specified which is then used internally in PRIMER for timestep calculation, colouring etc. A CSV file can be created for each MAT\_USER from number 41 to 50 and 281 to 290. It is recommended to store the CSV files in a central location accessible to every user who will need to use them. You then specify preferences that point to the location of the CSV files as follows:

* oa\_pref options for user defined materials ( MAT\_USER ): 
 primer\*mat\_45\_user\_defined: give location of the CSV file for mat\_45  
 primer\*mat\_46\_user\_defined: give location of the CSV file for mat\_46  
 primer\*mat\_47\_user\_defined: give location of the CSV file for mat\_47  
and so on for materials from mat\_41 to mat\_50 and mat\_281 to mat\_290.

The lines in the CSV file should use the following format:

| Column data for user defined materials CSV file |
| --- |
| Column 1 | Define the **field location** in this column. For example, LMC1, LMC2 LMCA1 and LMCA2, etc. |
| Column 2 | Define the **field name (field headers)** in this column. This will relate to the specific user defined material you are using. |
| Column 3 | Define the **field type** in this column. Available types: FLOAT, INTEGER, LCUR and TABLE. |
| Column 4 | Optional. Define **Young's modulus (YM)** or **Poisson's Ratio (PR).** Use only YM and PR in this column. |

####  Special rules for encrypted materials

Input decks of proprietary models such as crash dummies often contain wholly or partially encrypted material data using PGP ("Pretty Good Privacy") encryption.

Since PRIMER does not have the private key required to decrypt these definitions it cannot "see inside" them, meaning that both material label and any references to loadcurves from within the material are unknown. Therefore PRIMER provides special support for such material definitions, and this is described in section [PGP Encrypted keyword data](free-standing-pgp-encrypted-data-blocks.md#free_standing).

[Previous](load-defining-loading-conditions.md)  |  [Next](node-defining-nodes.md)