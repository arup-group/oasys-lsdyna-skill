###  Related Items: Creating Retractors, Sliprings, and Other Seatbelt-Related Elements

The main seatbelt control panel allows you to create and manipulate the other "seatbelt-related" items:

| RETRACTORS | Spool in seatbelt elements, are triggered by sensors. |
| --- | --- |
| SLIPRINGS | Feed seatbelt elements through themselves to model material passing from one side to the other. |
| PRETENSIONERS | Pulls in material to tighten a belt, having been triggered by various means. |
| SENSORS | Provide a "trigger" for items above by detecting acceleration thresholds, relative movement, etc. |
| ACCELEROMETERS | Attach to a rigid body and provide accelerations in the frame of reference of that body for post-processing. |
| (There is nothing special about creating these elements from inside the seatbelt fitting panel, they may equally well be created from the normal ELEMENT keyword.) |

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7a.png)

####  Generic top level panel for all types

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7b.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7c.gif) |
| --- | --- |
| Top RETRACTOR panel | Top Pretensioner panel |

All types have the same options and layout in their top panel, so only two examples are shown. In this example a retractor already exists, so the MODIFY and DELETE options are available, but no pretensioners have been defined yet, so only the CREATE and KEYWORD options are available.

![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7d.gif) 
Creating a RETRACTOR

This panel shows the process of creating a retractor, with some items still to be defined. The layout and controls are standard for all seatbelt-related types:

* Boxes with a red background are mandatory data that is missing (here the first sensor and a loadcurve id). The CREATE / UPDATE button will be "live" only when these missing items have been filled in.
* Boxes with a blue background have already been filled in or are optional data.

#####  The top options

| RESTORE / RESET | Resets the definition to its original state (modify) or zero (create). |
| --- | --- |
| COPY\_EXISTING | Copies an existing definition into this one. |
| LIST\_XREFS | Lists what (if anything) references this element. |
| CHECK\_DEFN | Checks the definition so far, listing any errors found. |
| CREATE / UPDATE | Creates a new (create) or overwrites the existing (modify) definition. |
| ABORT | Abandons this operation leaving any original definition unchanged. |

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7g.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7f.gif) |
| --- | --- |
| Create SENSORS | Create PRETENSIONERS |
| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7e.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_7h.gif) |
| Create SLIPRINGS | Create ACCELEROMETERS |

These figures show the create/modify panels for the remaining types. All follow the same standard layout, and use the same box colour and top options. With reference to the analysis code user manual the input required is self-explanatory.

Note, when SLIPRINGs and RETRACTORs are sketched, a vector is drawn from the first to the last node in the set to help visualise the direction of the *SBRNID*node sets. (The same is done for **\*SECTION\_SHELL** *EDGSET.*)

####  The model in which elements are created

When only one model exists there is no ambiguity, but if more than one model is present in the database you will need to define the model in which the element(s) are to be created.

[Previous](contact-creating-a-contact-between-belt-and-dummy.md)  |  [Next](auto-refit-refitting-a-belt-automatically-when-the-dummy-moves.md)