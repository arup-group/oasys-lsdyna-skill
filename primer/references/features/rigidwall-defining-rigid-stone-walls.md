###  RIGIDWALL: Defining Rigid ("Stone") Walls
 * [Top level menu](rigidwall-defining-rigid-stone-walls.md#toplevelRIGIDWALLmenu)
 * [Create/Edit](rigidwall-defining-rigid-stone-walls.md#CreateandEditfunctionality)
 * [Keyword edit](rigidwall-defining-rigid-stone-walls.md#RigidwallKeywordeditingpanel)
 * [Dragging walls](rigidwall-defining-rigid-stone-walls.md#drag)
 * [Editing planes](rigidwall-defining-rigid-stone-walls.md#PLANEForGEOMETRICFLATandPLANARwalltypesonly)
 * [Visualisation](rigidwall-defining-rigid-stone-walls.md#VisualisingRIGIDWALLS)
 
Rigidwalls in Ansys LS-DYNA are convenient and computationally cheap rigid geometrical shapes against which nodes on a deformable body can impact.
 
The \* RIGIDWALL keyword in Ansys LS-DYNA supports the following sub-types:

| RIGIDWALL\_GEOMETRIC | \_FLAT | RIGIDWALL\_PLANAR |
| --- | --- | --- |
|  | \_PRISM |  |
|  | \_CYLINDER |  |
|  | \_SPHERE |  |

| This figure shows the top-level RIGIDWALL menu. <br>All rigidwall sub-types may be edited both explicitly (via Create/Edit panels) and via the [generic Keyword editor](the-generic-keyword-editing-panel.md#keywordedit).<br> <br>Options have their standard meanings as defined in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions). | ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_fig_0.gif) |
| --- | --- |

#### Create and Edit functionality
 ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_create.gif)
 This figure shows the standard wall create/edit panel.
 
Its detailed layout changes with wall type: this example shows \_GEOMETRIC\_FLAT, although \_PLANAR is the most commonly used option.

| Selecting a different wall subtype  <br>The detailed layout of the panel above changes as the different wall sub-types are selected.<br> <br>In particular note that the \* RIGIDWALL\_GEOMETRIC types may only have the optional suffix \_MOTION ; whereas \* RIGIDWALL\_PLANAR may have a wider range of suffices. The Ansys LS-DYNA manual pages on the subject describe the various combinations of type and suffices available. | ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_select.gif) |
| --- | --- |

| DRAG: Using the mouse to drag a wall into position. | ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_drag_0.gif) |
| --- | --- |
| All rigidwall types can be dragged into position on the screen using the mouse. The mouse button determines the global axis along which it moves:<br> <ul> <li> <p align="left">X : Left mouse button </p> </li> <li> <p align="left">Y : Middle </p> </li> <li> <p align="left">Z : Right </p> </li> </ul> <br>END\_DRAG terminates the dragging operation. | **** |

#### PLANE: For _GEOMETRIC_FLAT and _PLANAR wall types only **![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_plane_0.gif)**

| For walls defined by a flat plane the standard "plane" editor may be used. <br>This allows graphical definition of the plane geometry via a range of methods. | ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_plane.gif) |
| --- | --- |

##### Rigidwall Keyword editing panel
 
All rigidwall sub-types can also be processed using the [generic Keyword editor](the-generic-keyword-editing-panel.md#keywordedit) panel an example of which is shown below.
 ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_key1.gif)

| **The Keyword editor "**  **AUTO \_suffix"**  **Displaying all**  **\_PLANAR**  **suffices simultaneously**  <br>Because there are so many suffices to the \_PLANAR rigidwall type, which may be used in many permutations, the **AUTO** suffix allows all such types to be displayed at the same time.<br> <br>When UPDATE saves the editor status walls will only have a given suffix appended if the data fields for it are non-zero. | **** |
| --- | --- |

| Visualising RIGIDWALLS  <br>All rigidwall types may be visualised in ENT ity Viewing, also by the SKETCH functions above. | ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_vis4.gif) |
| --- | --- |
|  |

When \_FLAT and \_PLANAR walls have infinite side lengths then a dimension of approximately three times the diagonal of a box enclosing the model is used for graphical purposes. (Drawing an infinite object on a finite computer screen requires some compromise!). If sets and nodes are turned on as "extra" objects in **VIS\_2**then the nodes constrained by the walls will be drawn as well.
 ![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_vis2.gif)

![](../Storage/primer-22-1/primer_links/sect_5/rigidwall/wall_vis5.gif)

#####  Note on scaling of finite RIGIDWALLS during ORIENT operations

Prior to release 9.3RC2 PRIMER did not apply any ORIENT scale factors to the "finite" dimensions of rigidwalls. This was in keeping with the general policy of not applying Orient scale factors to "scalar" length dimensions since, for the most part, this is inappropriate.

However the finite dimensions of Rigidwalls are a special case, and the following scaling logic is now applied:

The local axis system of the rigidwall is calculated, that is:

* N is the normal axis (from tail to head)
* L is the first in-plane axis (defined by vector &lt;hev&gt;)
* M is the second in-plane axis, determined from the cross-product N x L

Any non-zero (ie non-infinite) "length" dimension is projected along the appropriate axis from the wall origin (tail coordinate) and the resulting vector is scaled by the [ Sx,Sy,Sz ] scale factors specified in the ORIENT operation. The length of the resulting vector is calculated and, corrected for sign if necessary, this becomes the new finite length.

The details of which dimension is projected where are as follows:

| **Wall type** | **Dimension** | **Projected onto** | **Notes** |
| --- | --- | --- | --- |
| GEOMETRIC\_FLAT <br>PLANAR | LENL <br>LENM | L axis <br>M axis |  |
| GEOMETRIC\_PRISM | LENL <br>LENM <br>LENP | L axis <br>M axis <br>N axis |  |
| GEOMETIC\_CYLINDER | RADCYL <br>LENCYL | L axis <br>N axis | Asymmetric scale factors (Sx != Sy != Sz) will influence wall radius according to the wall's orientation, since radius operates in both L and M axes, but only L is used here. |
| GEOMETRIC\_SPHERE | RADSPH | N axis | As for \_CYLINDER case above |
[Previous](rail.md)  |  [Next](section-defining-element-sections.md)