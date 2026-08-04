###  
 
### CONTROL: Defining Analysis Control Cards

### 

* [Main **CONTROL** menu](control-defining-analysis-control-cards.md#mainpanel)
* [Modification](define-transform.md#modify)
* [Checking](define-transform.md#check)

The **\*CONTROL** keyword in Ansys LS-DYNA refers to the unique keywords which control the main parameters of an analysis. 
Each control card occurs either once or not at all, and none are labelled, therefore the PRIMER control and editing panels are slightly non-standard. Merging control cards presents some special problems - see [the notes on this below](control-defining-analysis-control-cards.md#notes).
 
**Note for users of PRIMER prior to release 8.2:** The layout of the control card editor has been totally revised, since the increasing number of control cards (44 in LS960) made the original panel unwieldy. In addition the distinction between "create", "modify" and "copy" modes has been removed and replaced by a single panel that performs all these functions.

| The main CONTROL panel <br>Since each control card can only exist once or not at all in a model the concept of separate "create", "modify", "copy", etc modes has been removed.<br> <br><br>| **[MODIFY](define-transform.md#modify)** | Maps the control card editing panel, in which cards can be created, modified, deleted and copied from other models. |<br>| --- | --- |<br>| **[CHECK](define-transform.md#check)** | Runs the standard check routines on control cards. |<br>| [CALC DT2MS](control-defining-analysis-control-cards.md#calc_dt2ms) | Calculate relationship between %age added mass and timestep |<br>| [CONVERT TO IMPLICIT](control-defining-analysis-control-cards.md#convert_to_implicit) | Make modifications to the model to convert it to an implicit analyses. |<br><br> <br>As with all PRIMER MODIFY functions edits and other changes only take place on a "scratch" definition, which is only made permanent when explicitly UPDATEd.<br> <br>CONTROL\_CHECK\_SHELL (CHECK SHELL) and CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION (MPP DECOMP) are open ended cards with their own edit panels which can be accessed directly or via MODIFY<br> <br>CALC DT2MS is only active if DT2MS on the \*CONTROL\_TIMESTEP is set to 0 or less (see below) | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_0.gif) |
| --- | --- |

| MODIFY: Creating, editing, deleting and copying control card definitions <br><br> <br><br>| The single panel shown below is used to carry out all these operations.<br> <br>For ease of selection, Control card are now grouped into 6 categories.<br> <br>ALL available Control options will be displayed (but not activated) by pressing [ALL](control-defining-analysis-control-cards.md#update)****and all the active ones by pressing [ACTIVE](control-defining-analysis-control-cards.md#update)<br> <br>All changes in this panel are performed on a "scratch" definition, and changes only become permanent in the database when [UPDATE](control-defining-analysis-control-cards.md#update)****is pressed. | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_01.gif) |<br>| --- | --- | |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_1.gif) |

| Selecting which control cards are displayed <br>The scrolling menu on the left lists all control cards of current category (in this case STANDARD), using the following colour convention:<br> <br><br>| White on Blue | Control card is present (active) in model |<br>| --- | --- |<br>| Black on Grey | Control card is not defined in the model (inactive) |<br><br> <br>To select a card (active or inactive) for display toggle it on/off using its row in this menu. Note: Selection makes the card active, whereas deselection just removes the card from the display panel. Thus deactivation of a card must be done explicitly.<br> <br>You may also select:<br> <br><br>| ALL | All control cards, both active and inactive, are displayed |<br>| --- | --- |<br>| ACTIVE | All active cards are displayed |<br>| DONE | Return to card categories |<br><br> <br><br> <br>Whenever a card is displayed and active its data fields can be updated by the normal text entry method. In addition all pre-defined lists of integers have popup menus giving the legal list of entries. | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_2.gif) |
| --- | --- |

| Making individual control cards active and inactive  <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_4.gif) | Individual (visible) rows are toggled between active and inactive by clicking on their "name" button. |<br>| --- | --- | |
| --- |
| In this example:<br> <br><br>| ENERGY | Has been made active |<br>| --- | --- |<br>| OUTPUT | Has been made inactive |<br><br> <br>It can be seen that the (in)active status is also reflected in the selection menu on the left.<br> <br>Note that inactive cards are "greyed out", and that entries cannot be made to them unless they are made active again.<br> <br>Inactive cards will  ***not***  be saved in the database following an UPDATE even if they contain (greyed out) values as here. | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_3.gif) |

| SET... (re)setting values for a control card <br>The data fields in a card may be (re)set back using the popup menu to:<br> <br><br>| Original values | The values in the current database, prior to any edits |<br>| --- | --- |<br>| LS-DYNA defaults | The default values quoted in the Ansys LS-DYNA keyword manual |<br>| All zero values | All fields are set to zero |<br><br> <br>Note that the local SET... option only affects this card. To reset  ***all***  cards back to their original, unedited values use the [RESET\_ALL](control-defining-analysis-control-cards.md#reset_all)button at the top of the panel. | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_5.gif) |
| --- | --- |

| COPY... Copy data into a control card from another model  <br>If one or more other models are present which also contain this control card then the COPY... button will be made live. This will give a list of possible models from which to copy this card's data. If no other models containing a definition for this card exist then the button will be greyed out.<br> <br>Data copied in from another model supersedes the current data.<br> <br>The COPY... option only affects this card. To copy data in from all cards in another model use the  [COPY_ALL...](control-defining-analysis-control-cards.md#copy_all) button at the top of the panel. | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_6.gif) |
| --- | --- |

| RESET_ALL: Restoring all control cards to their initial values <br>RESET\_ALL cancels the effect of all edit, copy, set and (in)activate operations by restoring all cards to their initial state as in the database. | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_7.gif) |
| --- | --- |
| UPDATE: Making control card edits permanent  <br>All changes above are carried out on a "scratch" definition. Changes are only saved permanently in the database when UPDATE is pressed.<br> <br>To exit leaving the control cards unchanged use ABORT.<br>  CHECK Running the standard checking function on control cards <br><br>>  <br>> The CHECK\_CTRL command runs the standard syntax and context checker. Most errors checking for control cards is based on detecting "out of range" parameters, but some interactions with data defined elsewhere in the model are also checked.<br>> |

| COPY_ALL: Copying all control cards from another model  <br>COPY\_ALL copies in all cards from another model, superseding any such definitions in this model.<br> <br>Cards that are not active in the origin (copied from) model are not changed in the current model.<br> <br><br>  Setting model title and memory size.  <br>In addition to editing the contents of the control cards:<br><ul> <li>A <strong>MODEL TITLE </strong> <strong> </strong>of up to 80 characters can be specified within this panel. </li> <li>The <strong>MEMORY SIZE </strong>can also be set here. (This is optional, it is expressed in words of memory.) </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_8.gif) |
| --- | --- |

> 

####  CALC_DT2MS Calculates relationship of timestep to %age added mass

If DT2MS on the \*CONTROL\_TIMESTEP cards is set to less than zero, timestep added mass is active.

The CALC DT2MS function will report the %age added mass for the current model timestep (expressed as DT2MS x TSSFAC).

Model timestep may be input directly or determined

* by specifying %age added mass
* by specifying target mass, which is the sum of structural mass and timestep added mass.

SET DT2MS and SET DT2MSF will update the values on the timestep control card.

Note: TSSFAC is used for element timestep calculation and **should never exceed 0.9**. CALC DT2MS will never change TSSFAC.

![](../Storage/primer-22-1/control-defining-analysis-control-cards/control-defining-analysis-control-cards-2024-11-04.png)

Ansys LS-DYNA has a special method of adding mass to spotweld elements using the setting **DT** on the MAT100 card.

For beam spotwelds this added mass is included in the normal total and will appear in the %age added mass box.

For solid spotwelds, Ansys LS-DYNA calculates the added mass differently and reports it separately. This added mass will appear in the MAT100&lt;DT&gt; Hex mass % box (it is also included in %age added mass given).

See note in [Appendix Q](q-mat100-dt-added-mass-for-solid-spotwelds.md#mat100_added_mass) for more details.

**CONVERT TO IMPLICIT**

![](../Storage/primer-22-1/primer_links/sect_5/control/convert_to_implicit.png)

The convert to implicit panel is a simple method of converting an explicit analysis to an implicit analysis by creating appropriate control cards (if not already present) and assigning default values. Also, element formulations are set to recomended defaults.

Original hourglass cards and materials cards are not modified if you select to change these. PRIMER will create duplicate cards with the relevant data copied from the original cards, and with the required changes for implicit analyses. The offset specified on this panel is applied to the original label to create the new cards. This offset must be higher than the highest material and hourglass label in the model.

####  Notes on Control Cards and the model MERGE operation

In common with other "static" (occurring either once or not at all) data in PRIMER, control cards may conflict when models are merged. The model merger allows you to select globally from source model #A or #B when cards exist in both models, but this may be too unselective for some cases.

It is recommended that you review the control cards in the destination model generated by a merge operation, and make selective use of the COPY function above where required.

####  Notes on Control Cards and the include selection operation

As in other editing panels, \* CONTROL cards can be moved to a chosen include file using the include selection buttons at the top of the panel. All \* CONTROL cards will be moved when this operation is carried out. When the \* CONTROL cards are in more than one inlcude file, the include display within the editing panel will tell the user this is the case. Positioning the mouse over the include display area will print hover text to the screen listing all the include files the control cards are in.

![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_9.gif)

The include file for each individual control card is displayed along side the control card information.

![](../Storage/primer-22-1/primer_links/sect_5/control/fig_ctrl_10.gif)

The include file can be modified by clicking on the folder button next to where the include name is displayed. Note the control card is only moved into the newly selected include file when Update is pressed on the top of the control card panel.

[Previous](contact-defining-contact-surfaces.md)  |  [Next](cosim.md)