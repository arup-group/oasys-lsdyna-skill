###  CONTACT: Defining Contact Surfaces
[**CONTACT(\_sliding)**](contact-defining-contact-surfaces.md#CONTACTSLIDING) 
* [Top level menu](contact-defining-contact-surfaces.md#slidingmenu)
* [Creating a new contact](define-transform.md#create)
* [Keyword editor](define-box-defining-boxes.md#keyword)
* [Copying](define-transform.md#copy)
* [Editing](define-transform.md#modify)
* [Deleting](Editing%20a%20Model%20Database.html#delete)

 * [Penetration Checking](contact-defining-contact-surfaces.md#pencheck)
 * [Visualisation](contact-defining-contact-surfaces.md#Visualisingcontactsurfaces) 
 [Duplicates during input](contact-defining-contact-surfaces.md#dup)

The **\*CONTACT** keyword has 10 sub-categories. The following can be edited in PRIMER: 

| **\***  [**CONTACT**](contact-defining-contact-surfaces.md#CONTACTSLIDING) | Traditional Ansys LS-DYNA contact types. |
| --- | --- |
| \*CONTACT\_1D | One-dimensional "slidelines" for reinforcing bars in concrete. |
| \*CONTACT\_ENTITY | Geometric definitions of rigid bodies. Generally used when DYNA is coupled to other codes. |
| \*CONTACT\_GUIDED\_CABLE | A sliding contact that guides 1D elements. |
| \*CONTACT\_INTERIOR | Internal contact for solid elements. Used to prevent crushable materials collapsing in on themselves and turning inside-out. |
| \*CONTACT\_RIGID\_SURFACE | A rigid surface contact definition. |
| The following contact sub-types cannot be edited in PRIMER. |
| \*CONTACT\_AUTO\_MOVE | Moves the surface B in a contact definition to close the initial gap between surface A and surface B. |
| \*CONTACT\_COUPLING | Defines a coupling surface for MADYMO to couple Ansys LS-DYNA with deformable and rigid parts within MADYMO |
| \*CONTACT\_GEBOD | Contact between a "Gebod" dummy and the structural FE mesh. |
| \*CONTACT\_2D | Two dimensional contact for use with 2D and Axisymmetric elements. |

| This figure shows the main contact menu. <br><br> <br>**PEN\_CHECK**   **** Runs the penetration checker for contacts.<br> <br><br>>  <br>> The penetration checker detects initial penetrations and crossed edges. It displays them graphically and also generates "null beams" on the crossed edges to identify them during external remeshing. Its use is [summarised below](contact-defining-contact-surfaces.md#pencheck).<br>>  <br><br> <br>The functions currently available have their standard meanings. (See [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions))<br> <br>Only is a function for dispalying contact contents, and is described below. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_1.png) |
| --- | --- |

| | CREATE Making a new contact surface |<br>| --- |<br>| ![](../Storage/primer-22-1/contact-defining-contact-surfaces-2022-10-31-1.png) | ![](../Storage/primer-22-1/contact-defining-contact-surfaces-2022-10-31-3.png) |<br>| The figure on the left shows the initial state of the contact creation panel: no type has been given yet, so both surface A and B definition areas are greyed out | The figure on the right shows the same panel now that an ERODING\_SINGLE\_SURFACE contact type has been defined. This is a single surface contact, so only the surface A side is available; had it been a two-sided contact type then both surface A and B sides would have been available for input. | |
| --- |

The data on the front panel here is required (even if zero) for all "sliding" contact types, but there are extra, optional data entries at the top of the panel that may be required:

| **GIVE\_LABEL/TITLE** Allows you to define the name and label. <br>Ansys LS-DYNA has an optional **\_TITLE** suffix to the \* CONTACT\_&lt;type&gt; keyword that is enabled if this is defined. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_1c.gif) |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_1d.gif) | **Optional data...**<br> <br>Defining data on optional \*CONTACT cards A, B, C, D & E<br> <br>All contact types may have additional data for optional cards A, B, C, D & E in Ansys LS-DYNA.<br> <br>The exact options available will depend upon the contact type, for example the Airbag thickness vs time loadcurve is not valid for the (eroding) contact type used in this example.<br> <br>The red [ **?-LC** ] symbol on this panel is used to denote the fact that a loadcurve value is implied in this context if a negative number is input, whereas zero or a positive number is a simple constant. Pressing this button will give a selection menu of possible loadcurves.<br> <br>(A green [ **?LC** ] means that a positive value implies a loadcurve.)<br> <br>When you have completed entries on this panel ==&gt; MAIN PANEL returns you to the master panel shown above. |
| --- | --- |

| **\_&lt;type&gt; data...** Special data input for this contact surface type.<br> <br>A few contact surface types have mandatory &lt;type&gt; data cards. If this is the case the [\_&lt;type&gt;\_data...] button on the main panel will be live.<br> <br>In this example the \_ERODING\_...   **** contact type requires the extra data shown here; but other contact types will require different data.<br> <br>As with the optional data cards, ==&gt; MAIN PANEL will return you to the main contact input panel. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_1e.gif) |
| --- | --- |

| \_THERMAL data... Special input for thermal contact types.<br> <br>Where a contact surface type supports the **\_THERMAL** or **\_THERMAL\_FRICTION** qualifier, and this is turned on, the \_THERMAL data... button may be used to enter the thermal parameters.<br> <br>As with the other optional card panels the  ****  ==&gt;MAIN PANEL button will return you to the master contact definition panel. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_1f.gif) |
| --- | --- |

CREATE\_CONTACT Saving the contact definition.

Once you have entered the minimum amount of data required to define this contact the CREATE\_CONTACT button will be made live, and this permits you to save this definition. (If it is not live the missing fields will be highlighted in red.) The definition will be checked and any errors listed, an then it will saved permanently in this model.

Until you press this the definition remains volatile, and will be lost if you exit this panel in any other way.

ONLY will display only the contents of the contact.

| KEYWORD Using the generic keyword editor to process contacts  <br>![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_kw_1.png) |
| --- |

| The generic keyword editor for \*CONTACT works in exactly the same way as normal, with the exception that an extra "pseudo" keyword has been added to manage the display of the five optional contact cards A to E. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_kw_2.png) |
| --- | --- |
| The reason for this is that all \*CONTACT definitions occupy at least three rows of data, some use four, and if extra keyword suffices are added then more lines may be used. Adding all five optional cards makes each keyword entry very tall, and most optional fields are not used, so the keyword editor would show many lines - mostly full of zeros - for only one or two contacts if these were always shown. |
| Therefore, for each contact, you must choose how many optional cards are to be "live" by setting the pseudo-suffix " Opt A-E ".<br> <br>When the keyword editor is started each contact definition will have this suffix initialised to the current status, determined by scanning optional cards A to E for non-zero values or parameter usages, and will be preset accordingly.<br> <br>If you want to add data to later rows, not currently active, you will first need to change this suffix to the appropriate setting, just like changing any other keyword suffix, whereupon the relevant rows will be shown in the editor.<br> <br>This pseudo-suffix is purely an artifice in the keyword editor, the suffix will not be shown on the \*CONTACT card when the deck is written to a keyword file. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_kw_3.png) |

| | COPY Copying existing contact surface(s) to make a new one(s) |<br>| --- |<br>| You can COPY any number of contacts, in multiple models.<br> <br>Selection of subject models is from the menu shown in this figure.<br> <br>When APPLY is pressed you are asked to confirm what is to be copied, and then the operation is carried out.<br> <br>For each model the &lt;n&gt; contacts chosen in that model are copied using labels &lt;previous highest + 1&gt; to &lt;previous highest +n&gt;, there is currently no control available over the new labels assigned. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_2a.gif) | |
| --- |

| **RECURSIVE\_COPY** Controlling the extent of a copy operation for segment based contacts.<br> <br>If "recursive" copying is used then any segment sets, (and thus their associated segments), in the subject contacts are duplicated; and the newly created contacts will reference these duplicates. Without "recursive" copying the new contacts will reference the same segment sets as the old ones. This is illustrated in the examples below, using the same 3 contacts: |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_2b.gif) | ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_2c.gif) |
| With **RECURSIVE\_COPY** selected.<br> <br>In the left box recursive copying has picked up segment sets and their constituent segment. | With no recursive copying. <br>In the right box, without recursive copying, only the contact definitions are copied. |
| Note that for contacts recursive copying only affects segment sets and their segments. A contact defined by parts, elements or nodes will not attempt to copy these in the "recursive" case. |

####  MODIFY Modifying the attributes of an existing contact surface

This functions in exactly the same way as CREATE , using the same panels as above. The only difference is that the initial state of the panels is already set with the attributes of the contact surface to be modified.

####  DELETE Deleting existing contact surfaces

The DELETE operation works exactly the same way as COPY described above, except that the chosen surfaces are deleted. The DELETE\_RECURSIVE switch also operates in a similar fashion:

* If DELETE\_RECURSIVE is switched on any segment sets, plus their segments, referenced by the contacts to be deleted are marked for deletion.

* If recursive deletion is not used only the contact definitions themselves are removed.

Note also that the standard deletion rules described in Section 6.4.1 still apply: contacts and/or segment sets will only be deleted if nothing else (which is to remain) depends on them.

####  SKETCH Sketch the chosen contact surfaces on the current image

SKETCH allows the user to select and sketch individual contact surfaces on the current graphics image. Contacts are drawn in terms of the parts, elements, segments and nodes that they include.

Contact surfaces can be sketched using custom colours, which can be adjusted via Display &gt; Colour, see [COLOUR... Setting Item Colours in Plots](colour-setting-item-colours-in-plots.md#h5_993437812). When the display colours are set to their 'Default', the sketching colours for surfA and surfB will be green and red respectively.

| Default colour | Contact sketch |
| --- | --- |
| ![](../Storage/primer-22-1/contact-defining-contact-surfaces/s131ivwh.png) | ![](../Storage/primer-22-1/contact-defining-contact-surfaces/default%20sketching%20colours.png) |
| **User defined contact colour (white and grey)** | **Contact sketch** |
| ![](../Storage/primer-22-1/contact-defining-contact-surfaces/changed%20contact%20colours.png) | ![](../Storage/primer-22-1/contact-defining-contact-surfaces/changed%20contact%20colours%20sketching.png) |

| LIST Summarise the contents of contacts  <br>LIST allows the user to select any or all contacts and to list a summary of their attributes to the screen.<br> <br>A listing shows contact number, title and type, plus the total in each model. A typical listing is shown here. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_7.gif) |

####  CHECK

Runs the standard checking function on the selected contacts. Each contact will be listed either as "OK", or a summary of the errors encountered will be printed. (This is the same as the CHECK\_DEFN command during contact editing.)

| RENUMBER  <br>Raises the [standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel) for contacts in the chosen model, allowing you to renumber some or all of them. To renumber a single contact it may be easier to MODIFY it and update its label. |
| --- |

####  ONLY

Allows you to visualize what is included in the contact.

![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_only.png)

Select contacts you wish to display and click Apply . Only Contact will display the contacts selected. Only Contents will display the contents of the contacts selected. For the contents option, you can also optionaly choose to just display currently visible contents of the selected contacts.

####  PART

Allows you to get a popup listing of which contacts the selected part(s) are in.

![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_part.gif)

Select one or more parts and click Apply .

![](../Storage/primer-22-1/primer_links/sect_5/contact/cont_part_list.gif)
 
If multiple parts are selected, the output will start with a list of contacts that includes any of the selected parts and will later include details of individual parts.
 
####  WRITE 
 
To write a Contact file, type a file-name into the text box or use the folder button to find the path where you want the file to be written.
 
![](../Storage/primer-22-1/primer_links/sect_5/contact/contactWrite.png)
 
Once a valid file-name and file-path have been selected, the user can choose to immediately write all the contacts which have been loaded by clicking on the Write All button.
 
The other option is to select the required contact from the contact list and then write the selected contacts by clicking on the Apply button which will become active if at least one contact is selected.
 
The Images are written out on a white background by default but this can be changed to the currently loaded background colour by clicking on the White Background toggle button. You can also change the image height and width by entering the required pixel values into the corresponding text boxes.
 
![](../Storage/primer-22-1/primer_links/sect_5/contact/contactExcel.png)
 
The user also has the option of deciding whether the images or the penetration data is written into the excel file. This can be done by using the Export Images to file and Write Penetration Values toggle buttons.
 
####  FRICTION 
 
There are now a variety of ways of setting friction coefficient values used in contacts:

* The \*CONTACT card.
* The \*CONTROL\_CONTACT card.
* \*PART\_CONTACT cards.
* \*DEFINE\_FRICTION cards.

If you have a combination of the above methods, it can be difficult to understand which friction coefficient values are used in your model. FRICTION tools in PRIMER allow you to investigate these values.
 
![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_friction.png)

#####  Write Friction Values 
 
Select one or more CONTACT(s) for which you wish to write friction details into an Excel or a CSV file.
 
![fric_write](../Storage/primer-22-1/primer_links/sect_5/contact/cont_fric_write.png)
 
Type a file-name into the text box or use the folder button to find the path where you want the file to be written. Once a valid file-name and file-path have been selected, hit Apply .
 
The Images are written out on a white background by default but this can be changed to the currently loaded background colour by clicking on the White Background toggle button. You can also change the image height and width by entering the required pixel values into the corresponding text boxes.
 
![fric_excel_file](../Storage/primer-22-1/primer_links/sect_5/contact/cont_fric_excel.png)

#####  Visualise Friction Values 
 
Once in a Visualise mode, select a PART to investigate contact friction values. After part selection, list of all the contact which refers to the selected part will be shown.
 
![fric_vis_part](../Storage/primer-22-1/primer_links/sect_5/contact/fric_vis_part.png) ![fric_vis_part](../Storage/primer-22-1/primer_links/sect_5/contact/fric_vis_cont.png)
 
Select a CONTACT from the list followed by Apply. All the parts in the selected contact will be shown in the exploded views. Lines with friction values will be drawn between the selected part and all the exploded parts.
 
![fric_vis_contour](../Storage/primer-22-1/primer_links/sect_5/contact/fric_vis_contour.png)
 
![fric_vis_explode_parts](../Storage/primer-22-1/primer_links/sect_5/contact/cont_fric_explode.png)
 
The number of contour levels can be between 1 and 13. You can control the number of levels used for contouring, or provide min and max value to set up contour bands automatically.

| PEN_CHECK Checking initial penetrations and crossed edges  <br>The contact penetration checker may be run from:<br><ul> <li>The <span class="buttontext">PEN_CHECK </span>command in the <a href="contact-defining-contact-surfaces.md#topmenu">top level menu here </a> </li> <li>The <span class="buttontext">PEN_CHECK </span>command in any <a href="contact-defining-contact-surfaces.md#fromtheCreateEditpanel">contact create/edit panel </a> </li> <li>The main <span class="buttontext">MODEL &gt; CHECK </span>command as part of <a href="model-check.md#39MODELCHECK">model checking</a></li> </ul> |
| --- |
| Calling the penetration checker from the top menu panel <br>Summarise all Runs the checker on all contacts in turn in "summary" mode, producing a listing of penetrations and crossed edges for each one, but no details. Note - the number of penetrations may exceed the number of penetrating nodes as there may be &gt;1 penetration on a node.<br> <br>This is useful as an initial scan to look for problems meriting further attention.<br> ![](../Storage/primer-22-1/primer_links/sect_5/pen_check/summarise_pen.PNG)
<br>Contact Tree As Summarise all but displayed as Quality check warnings on tree. This allows the user to access the detailed Pen Check for each contact directly.<br> <br><br>
![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_tree.GIF)
<br>-&gt; pencheck.csv writes all qualifying (above user threshold) part vs part interactions to a .csv file.<br> <br>Explicit selection from menu<br> <br>Runs the checker in detailed mode on the contact selected.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_12.gif)<br> <br>By default the contact check will be performed using MPP methods with the exception of the minimum threshold for reported penetrations. PRIMER uses the minimum of the SMP threshold (calculated from element sizes) and 0.001 (the hard-wired Ansys LS-Dyna threshold). This is far more sensible for models in metre units. However, the user may over-ride this and apply their own value for MPP threshold. |
| Calling the penetration checker from the Create/Edit panel  <br>The PEN\_CHECK command in this context runs the checker on the current (scratch) contact definition currently being edited.<br> <br>Contact penetration checking is covered in more detail in [Contact Penetration Checking](contact-penetration-checking.md)<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_10.gif) |

| Visualising contact surfaces Contacts may be selected for explicit display in the ENT ity Viewing panel panel. <br>They are drawn in terms of the parts, elements, nodes and segments that define them. Where boxes are used to delimit contacts these are displayed if switched on in the "Associated data" section.<br> <br><br> <br>They may also be drawn via the [SKETCH](define-transform.md#sketch)functions above. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/fig_cont_9.png) |
| --- | --- |
| Special display modes for contact surfaces  <br>Since contacts are drawn in terms of the structural elements or segments that define them it would be difficult to distinguish a contact from normal structure if both were rendered in the same way. Therefore PRIMER use different forms of display to distinguish contacts from ordinary structure.<br> <br>By default contacts are drawn using a technique called "stippling", as shown here, in which alternate pixels are omitted. This gives a distinctive slighty fuzzy appearance, but also allows graphics of other items behind the contact to be visible.<br> <br>In this example a contact covers the whole of the dummy's head, but internal structure (beams and accelerometers) is visible through the stippled contact. | ![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_graphics_1.png) |
| Other display modes for contacts are available in the  [Display Options](display-options-controlling-plot-parameters.md#options) panel.<br> <br>Various degrees of stippling give different effects. It is also possible to revert to the "old" PRIMER method of drawing the contacts solid shaded with cross-hatched lines added, however this is slow to render and is not recommended.<br> <br>Rather than trying to describe the effects here it is suggested that the curious try experimenting | ![](../Storage/primer-22-1/primer_links/sect_5/contact/contact_graphics_2.png) |

| Duplicates during input  <br>\*CONTACT cards can have the suffix \_TITLE in which case they must also be given a specific label. If two or more such cards have the same label then normally PRIMER would treat this as an input error and reject the input deck.<br> <br>However it transpires that Ansys LS-DYNA has some special logic to deal with this situation, meaning that duplicate contact definitions are (semi) legal:<br><ul> <li>Before Ansys LS-DYNA R7: It issued a warning and continued to run with both contact definitions, leaving them both as having the same label. This could make post-processing confusing! <br> </li> <li>From&#160;Ansys LS-DYNA R7 onwards: It also issued a warning and continued to run, but relabelled the duplicate contact to the next &quot;highest + 1&quot; label. </li> </ul> <br>Therefore from PRIMER 13 onwards the treatment of duplicate contact cards during keyword input has been modified as follows:<br><ul> <li>Duplicate contact cards are read silently, and the excess definitions are given temporary internal labels that prevent label clashes. </li> <li>When keyword input is complete these duplicates are listed on the screen, together with their include files and whether or not they are referenced. </li> <li>The user must then choose one of three options for dealing with them: </li> </ul> <br><br>| Relabel | The excess definitions are kept. but are relabelled to "highest + 1" labels, respecting any label ranges defined for their include files.<br> <br>This is the Ansys LS-DYNA behaviour, although the label that PRIMER assigns may not be identical to that assigned by Ansys LS-DYNA.<br> <br>If the deck is written out then the duplicate contact definitions will remain, but with their newly assigned labels. |<br>| --- | --- |<br>| Clone | The excess definitions are deleted, and are replaced with PRIMER "clone" definitions that refer to the first instance of the contact that was read.<br> <br>In PRIMER a "clone" is a reference to a keyword, and not a keyword itself. It means that only a single definition of a given labelled keyword exists, but on keyword output this definition is duplicated exactly in every include file that has a "clone" reference to the original.<br> <br>Therefore if all the original duplicate definitions were identical to the first one read then on output nothing will appear to have changed, however if there were any differences then these will be lost as teh 2nd and subsequent "cloned" output keywords will be identical to the first. |<br>| Merge | The excess definitions are deleted, leaving only the first one read.<br> <br>Therefore on output the 2nd and subsequent definitions encountered will disappear completely. |<br><br> <br>**Warning:**<br> <br>Although Ansys LS-DYNA will accept this practice  ***it is recommended that you do not use it***  . Not only is it a "hostage to fortune" that relies on non-standard and undocumented Ansys LS-DYNA behaviour, but also the labels ultimately assigned to contact surfaces in Ansys LS-DYNA will depend on the order in which they are read, and changing include file order will affect this.<br> <br>It is strongly recommended that you either eliminate duplicate definitions, or relabel them explicitly to make them unique.<br> <br><br> <br>**Note:**<br> <br>This treatment of duplicate contact definitions is not standard PRIMER behaviour, and applies only to the \*CONTACT keyword.<br> <br>The standard treatment of duplicate labelled keyword is controlled by the Options panel during keyword input, and is described in [Options: Permit duplicate definitions](options-controls-many-aspects-of-reading-ls-dyna-files.md#opt_dupl). |
| --- |

 [Previous](constrained-imposed-constraints-joints-welds-etc.md)  |  [Next](control-defining-analysis-control-cards.md)