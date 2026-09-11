###  PROJECT: Project to a Line, Plane, or Surface

| The projection option operates on the nodes of the items selected through the object menu.<br> <br>The project-to-line operation will move them to the nearest point on the defined line.<br> <br>Projection-to-plane can use either a global plane, defined by a single coordinate or a node pick, or an arbitrary plane defined by 3 nodes. Projection may be done normal to the plane or along a vector.<br> <br>Projection-to-mesh requires a direction vector and the mesh can be defined using shells, shell sets, or shell parts.<br> <br>To apply the orient press APPLY . You will then have the option to UNDO\_ALL , if the orient is not as you wanted it.<br> <br><br> ![](../Storage/primer-22-1/primer_links/sect_6/orient/fig_6_3_6.gif) |
| --- |

####  Projecting across models

Project to mesh can be used to project across models, i.e. the projected items and the mesh to which they project do not need to be in the same model.

![](../Storage/primer-22-1/primer_links/sect_6/orient/copy_proj.gif)

* a gap value may be set to offset the projection
* [COPY](copy-and-orient.md#ORIENTCOPY)may be used with project

![](../Storage/primer-22-1/primer_links/sect_6/orient/copy_proj2.gif)

[Previous](example-use-of-interpolate-select-items-mode.md)  |  [Next](trans-rot-translate-and-rotate.md)