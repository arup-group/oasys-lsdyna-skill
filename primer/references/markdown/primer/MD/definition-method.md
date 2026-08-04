###  Definition Method
 
![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_5.gif)There are six different ways of defining a cut section, chosen from the pull-down menu. The data entry panel changes for each mode. Click on a method below for details.

| | **[Ansys LS-DYNA method](definition-method.md#ls_dyna_method)** | Tail, Head and Edge head coordinates are defined. |<br>| --- | --- |<br>| **[Origin and vectors](definition-method.md#o_and_v)** | Origin coordinate is defined, then vectors for local X axis and XY plane |<br>| **[N3 Three nodes](definition-method.md#n3)** | Three nodes: N1 at origin, N2 giving X axis, N3 the XY plane |<br>| **[Constant X](definition-method.md#const_xyz)** | Cut at constant X value |<br>| **[Constant Y](definition-method.md#const_xyz)** | Cut at constant Y value |<br>| **[Constant Z](definition-method.md#const_xyz)** | Cut at constant Z value |<br><br><br>Regardless of how the plane is defined its actual characteristics and geometry will be the same. | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6.gif) |
| --- | --- |

| Ansys LS-DYNA method  <br>This entry method mimics the data format of the \*DATABASE\_CROSS\_SECTION card in the Ansys LS-DYNA input deck. You define:<br> <ul> <li>The Tail coordinate of the normal vector (origin) </li> <li>The Head coordinate of the normal vector (local Z axis) </li> <li>A Head coordinate of a vector on the XY plane </li> </ul> <br>If there are any \*DATABASE\_CROSS\_SECTION cards in any models the definition can be built from those using Import... | ![](../Storage/primer-22-1/definition-method-2022-08-03.png) |
| --- | --- |

| Origin and Vectors  <br>Here you give:<br> <ul> <li>An origin coordinate </li> <li>A vector defining the local X axis </li> <li>A vector on the local XY plane </li> </ul> <br>The normal (local Z) vector is obtained from the vector cross product of these. | ![](../Storage/primer-22-1/definition-method-2022-08-03-1.png) |
| --- | --- |

#### N3 Three nodes
 
![](../Storage/primer-22-1/definition-method-2022-08-03-2.png)Here three nodes are defined:
 
* N1 is the plane origin
* N2 is on the local X axis (vector N1N2)
* N3 is on the local XY plane

The normal (local Z) vector is obtained from the vector cross product of these.

#### Constant X Constant Y Constant Z
 
![](../Storage/primer-22-1/definition-method-2022-08-03-3.png)In these cases define either:

* A coordinate on the relevant axis

or
* A node, or a mesh node, from which the relevant coordinate will be extracted. (The N keyboard shortcut will jump straight to this mode.)

A plane will be defined at a constant value of the relevant axis at that point.
 [Previous](dragging-the-cut-section.md)  |  [Next](positive-negative-action.md)