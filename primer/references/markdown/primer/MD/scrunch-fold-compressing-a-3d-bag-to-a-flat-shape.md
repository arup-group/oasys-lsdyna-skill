####  Scrunch Fold	(Compressing a 3D Bag to a Flat Shape)

 ![](../Storage/primer-22-1/primer_links/sect_6/airbag/Image66.gif) 

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_scrunch_fold_1.gif) <br>Before scrunch | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_scrunch_fold_2.gif) <br>After scrunch | The adjacent figures show a 3D airbag being scrunch ed to a flat (2D) shape.<br> <br>The option of splaying the sides out has been used. |
| --- | --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/fold_scrunch.gif)This fold type can accomplish two separate functions:<br> <ol style="font-size: 14.6667px;"> <li>It can simply scale an existing bag in the local Z-direction so that it has a smaller final thickness.</li> <li>It can flatten a 3D airbag so that the 2D folder (thin, thick etc) can be used. The bag is reduced in the Z-direction and the sides are pushed out.</li> </ol> <br>The scrunch fold definition and options are shown in the adjacent figure. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/scrunch_sets.gif)The user must tell PRIMER which elements form the side to be pulled out. This is done using the Left and Right sets from the SETS AND LAYERS menu. If neither of these sets is chosen, then a simple scaling is used. In the case shown above this could lead to the vertical elements having a zero side length (which may not be illegal if airbag reference geometry is used during the analysis).<br> <br>When forcing the sides outwards, the top and bottom of the bag are located above and below a side node. The node is then pushed outwards based on the nearest distance to the top or bottom. When using this capability for pushing out side walls, it is important how the bag is oriented. The axis of the cylinder must be parallel with the local X-axis. The sides must be in the YZ plane. |

FOLD\_POINT has no effect here the ORIGAMI is scrunched about the local z=0 plane.

[Previous](spiral-fold-rolling-layers-into-a-spiral.md)  |  [Next](align-fold-aligning-nodes-on-a-fold-line.md)