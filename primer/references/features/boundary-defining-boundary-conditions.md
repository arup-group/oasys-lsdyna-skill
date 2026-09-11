###  BOUNDARY: Defining boundary conditions.

* [Selecting the *BOUNDARY sub-keyword](boundary-defining-boundary-conditions.md#BOUNDARY)
* [Explicitly drawn sub-types](boundary-defining-boundary-conditions.md#DrawingBOUNDARYitems)
* [Drawing of other sub-types](boundary-defining-boundary-conditions.md#AllotherBOUNDARYsubkeywords)
* [Labelling of *BOUNDARY items](boundary-defining-boundary-conditions.md#LabellingofBOUNDARYitemswithinPrimer)

Boundary conditions within Ansys LS-DYNA apply a range of restraints and other imposed conditions to models. 
All \*BOUNDARY sub-keywords except \*BOUNDARY\_ELEMENT are editable within PRIMER. (Boundary elements do not logically belong here: really they merit their own section since they imply a totally different type of analysis.)

| **\*BOUNDARY**cards can at present be edited only with the [generic "Keyword" editor](the-generic-keyword-editing-panel.md#keywordedit): no specific Create/Edit panels have been written yet. <br>All **\*BOUNDARY** keywords except **\_ELEMENT\_METHOD** may be edited in this way.<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/boundary/fig_boundary.gif) |<br>| --- |<br><br> <br><br> <br>The other commands ( COPY, DELETE, ...) function in the standard manner described in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions).<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_home.gif) |<br>| --- |<br>| All of the boundary keywords are selected from the pop-up menu produced after Boundary is selected in the Keywords panel. | |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_basic.png) |
| --- |
| This shows an example of the [Keyword editor](the-generic-keyword-editing-panel.md#keywordedit) for **\*BOUNDARY\_SPC** . <br>There are two sub-keywords: **\_NODE** and **\_SET** , with different formats.<br> <br>The **\_SET** variant is being edited here. |

| | Drawing *BOUNDARY Items <br>These definitions can be viewed using the ENT ity viewing &gt; BOUNDARY options. At present only the following keywords are fully visualised: |<br>| --- |<br><br> <br><br>| \*BOUNDARY\_SPCRestraints ("single point constraints") at nodes. |<br>| --- |<br>| Restraint codes are drawn as vectors in the relevant X, Y or Z directions, using the colour scheme: <br>X Red<br> <br>Y Green<br> <br>Z Blue<br> <br>The symbols used at vector ends are:<br> <br>Trans: Cross<br> <br>Rot'l: Square<br> <br>Both: Cross + Square | ![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_symbols.gif) |<br>| Symbols are drawn at every restrained node. |  | |
| --- |

| This example shows a node which has been fully restrained in all of X, Y and Z, both in translation and rotation. <br>Labels have been turned on for this, and they show that this node is restrained via node set 1111. | ![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_restr.gif) |
| --- | --- |

| \*BOUNDARY\_PRESCRIBED\_MOTION |  |
| --- | --- |
| This is visualised as<br><ul> <li> <p align="left">An arrow in the relevant direction, coloured (X=red, Y=green, Z=blue). For rotational motion an arrow circling the relevant vector is used. </p> </li> </ul><ul> <li> <p align="left">A description at the arrow head, eg &quot; <strong>VEL_T_Z </strong>&quot; for Z translational velocity. </p> </li> </ul> <br>This example shows:<br><ul> <li>Translational Acceleration in Y </li> <li>Translational Velocity in X </li> <li>Rotational Displacement in Z </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_prmot.gif) |

| All other*BOUNDARY sub-keywords: <br>Are visualised only in terms of the components that they reference: sets, elements, nodes, etc. Turn on the relevant items in ENTity viewing to see these.<br> <br>Turning on the relevant \*BOUNDARY sub-keyword labels will annotate them correctly. | ![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_extra.gif) |
| --- | --- |

####  Labelling of *BOUNDARY items within PRIMER.

Ansys LS-Dyna keyword input has optional labels for \*BOUNDARY items: the conversion from "keyword" to "formatted" input that precedes every Ansys LS-Dyna analysis converts them from discrete definitions to attributes applied to other items.

For internal consistency, for items not already labelled in the input model, and for items that cannot be labelled in LS\_DYNA, PRIMER assigns new labels to everything that can be defined "once or many times", so \*BOUNDARY definitions are given labels based on their order of appearance in the keyword input file.

Where LS\_DYNA offers optional labels, (e.g. \*BOUNDARY\_SPC\_ID versus \*BOUNDARY\_SPC), the labelling option is invoked in the keyword editor by selecting option "ID" (see below).

![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_key.gif)

PRIMER's new labels; where generated:

* May safely be ignored - you don't have to worry about them if you don't want to!
* Are treated sequentially, starting at 1. (Thus **BNDY\_1, BNDY\_2, ... BNDY\_n** )
* Are not grouped by sub-type: **BNDY\_1** might be an **SPC, BNDY\_2** a prescribed motion - they are based solely on the order in which they appear in the input deck. Each \*BOUNDARY definition encountered gets the next label in the sequence.
* Are used in selection menus (eg for blanking, deletion, etc). Are also used in the output deck when defining what is referenced by what.

####  Animation of **BOUNDARY\_PRESCRIBED\_MOTION and BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY.**

Primer can animate prescribed motion as defined by \*BOUNDARY\_PRESCRIBED\_MOTION and \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY cards. Any number of the aforementioned cards may be selected for animation.

![](../Storage/primer-22-1/primer_links/sect_5/boundary/boundary_bpma.gif)

The following \*BOUNDARY\_PRESCRIBED\_MOTION options are currently supported:

* Keyword options \_NODE, \_SET, \_RIGID, \_RIGID\_LOCAL
* DOF options 1, 2, 3, 4, -4, 5, 6, 7, 8, -8
* VAD options 0 (velocity), 1 (accleration), 2 (displacement)

BOUNDARY\_PRESCRIBED\_MOTION and BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY\_CARDS may be selected using appropriate buttons in the 'Animate' panel. Users may then play the animation in a continuous loop using the 'Play' button or may choose to navigate through specific frames or time instances manually. 
 
Additional factors such as start and end times, frame rate and number of frames can be controlled using appropriate text boxes.

[Previous](ale.md)  |  [Next](case.md)