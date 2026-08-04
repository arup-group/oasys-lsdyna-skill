###  EQOS: Equation of State

* [Top level menu](contact-defining-contact-surfaces.md#topmenu)
* [Creating](define-transform.md#create)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deleting](Editing%20a%20Model%20Database.html#delete)
* [Sketch](define-transform.md#sketch)
* [List](RADIOSS%20block%20format.html#list)
* [Check](define-transform.md#check)
* [Renumber](define-transform.md#renumber)

Equations of State are used to define material properties for special or typical fluids or null material types. Consequently, they are controlled in a similar fashion to the \* Material keywords.

| This figure shows the main equation of stateediting panel. <br>TRANSFER opens the main window for the transfer data function ([TRANSFER DATA](transfer-data.md#TransferData) for more detail)<br> <br>The other functions currently available have their standard meanings. (See [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions)). | ![](../Storage/primer-22-1/primer_links/sect_5/eos/fig_eos_1.gif) |
| --- | --- |

#### CREATE Making a new equation of state definition
 
![](../Storage/primer-22-1/primer_links/sect_5/eos/fig_eos_2.gif)

CREATE produces this blank equation of state creation panel, since no equation of state type has been defined yet.

| Type:  <br>The equation of state type can be defined from this button.<br> <br>The [...] Shortcut button can be used to browse through a list of equation of state types as shown here.<br> <br>**Note on selecting an Equation of State:**<br> <br>An equation of state may be selected by one of two ways:<br><ul> <li>by invoking the browse [...] button and selecting the equation of state with the mouse from the list </li> <li>by typing in the equation of state name to the &quot;Type&quot; box, e.g. &quot;ideal_gas&quot; for &quot;* <span class="courierbold">EOS_IDEAL_GAS </span>&quot; </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/eos/fig_eos_3.gif) |
| --- | --- |

#####  ROW/COL

The data relevant to each equation of state type is displayed in row and column format identical to that of DYNA keyword.
 Once a equation of state type has been defined the panel will become populated with that equation of state's format. For example the type \* EOS\_LINEAR\_POLYNOMIAL has been chosen here: ![](../Storage/primer-22-1/primer_links/sect_5/eos/fig_eos_4.gif)

The data can then be typed into the relevant boxes. The expected data type is indicated on the grey button, which also shows the acronym for that data value:

| **F** | White **F** floating value |
| :--- | :--- |
| **I** | White **I** integer value |
| **+LC** | Green **LC** +ve loadcurve |
| **-LC** | Red **LC** -ve loadcurve |

Information about each individual data component can be requested by pressing the grey data component button. For example; to request information about data component ' **C1**' (1 ^st^row, 3 ^rd^column) press the grey button with the C1.

| This will create a new window with detailed information about that data component showing:<ul> <li> <p align="left"> A one-line description of it; </p> </li> </ul><ul> <li> <p align="left">Its current units type </p> </li> </ul><ul> <li> <p align="left">Its current value. </p> </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/eos/fig_eos_5.gif) |
| --- | --- |

Once all of the data has been input , press CREATE\_EQOS to install the equation of state permanently in the model.

As with other creation/editing functions a standard check is made of the new definition prior to saving it, and you are warned about errors found.

####  COPY Copy existing equation of state(s) to make a new equation of state(s).

COPY makes new equation of states, in the same model(s), that are identical to their originals apart from their labels. By default only the equation of state definitions themselves are duplicated.
 
Where RECURSIVE COPY is requested, all items associated with that equation of state (i.e. elements, parts, etc.) are also copied.

####  MODIFY Modifying the attributes of an existing equation of state.

MODIFY functions in the same way as CREATE . Obviously, the equation of state will already have been selected so the panel will resemble that shown in "populated" figure above.
 
\*\*If the equation of state is in use by a PART which has elements then the "element type" of the equation of state is locked to those elements, which will restrict the range of equation of state types you can change it to. For example a equation of state used by springs cannot be changed to a shell type.\*\*
 
Any modifications made to the equation of state definition will not be made permanent until the APPLY\_MODIFY button is pressed. At this point a the local copy which has been updated is used to overwrite the version in the model.

####  DELETE Delete existing equation of state definitions. 
 
The DELETE function deletes the selected equation of states. However you cannot delete a equation of state that is in use by a PART unless you remove it from the part definition, or delete that too. To help with this the following two switches may be used:
 
DELETE\_RECURSIVE Will select for deletion the parts, associated elements, and so on that reference thisequation of state.
 
REMOVE\_FROM\_SETS Is often also needed if parts are to be deleted, as their elements, the connected nodes, and often the parts themselves may be included in sets.
 
A good way of getting rid of surplus (unused) equation of states is to turn these two switches off, then select all equation of states for deletion. Only those which are not used by anything will actually get deleted.

####  SKETCH Sketch elements using an equation of state on the current image. 
 
SKETCH sketches on top of the current image the parts and elements that reference the selected equation of states.
 
####  LIST Summarise the attributes of selected equation of states.

LIST allows the user to individually select equation of states and display a summary listing of their attributes.

####  CHECK Check selected equation of states for correctness

CHECK runs the standard checking function on the selected equation of states, summarising any errors.

***WARNING:***  Checking equations of state thoroughly is a mammoth task, which PRIMER does not at present attempt. Most equations of state are currently only checked for a positive density. Therefore that an equation of state"Checks OK" does not mean that it contains no errors!

####  RENUMBER Renumbering equation of state labels.

RENUMBER lets you change any or all equation of state labels within a given model using the [standard renumbering panel.](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel)

To change the label of an individual equation of state it may be simpler just to MODIFY it.

[Previous](element-defining-structural-elements.md)  |  [Next](fatigue.md)