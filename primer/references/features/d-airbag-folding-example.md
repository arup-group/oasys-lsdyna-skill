##  Appendix D: Airbag Folding Example

| The following example is of a somewhat simplified geometry of an airbag. This is designed to provide a fairly complete demonstration of the capabilities to make a folded airbag. It is not designed to represent a realistic fold pattern or to represent accurate deployment of an airbag. In fact, there is no \*AIRBAG card in this model so it will not deploy.<br> <br>Figure A4.1 shows the starting geometry for this model. The units are in millimetres and the fabric is 0.25mm thick. The airbag is a simple drivers side (or pancake) airbag.<br> <br>For reference, the model is provided with the PRIMER manual in this appendix and is entitled "[airbag_folding_example.key](../Storage/primer-22-1/primer_links/appen_4/airbag_folding_example.key)".<br> <br>The first issue in folding this model is to create an ORIGAMI. This is done by selecting DEFINE\_ORIGAMI and then CREATE. When choosing the materials, it is important to select only the materials which are to be folded. In this case the whole model is wanted for folding so WHOLE MODEL can be used to select the entire model. SELECT the ORIGAMI and press SET\_FOLD to start folding the airbag.<br> <br><br> **![](../Storage/primer-22-1/primer_links/appen_4/fold_ex1.gif)** |
| --- |

The folding pattern consists of 9 folds. The folds are:

1. Tuck fold along x-axis
2. Tuck fold along x-axis (interferes with first fold)
3. Thin fold along y-axis
4. Thin fold along y-axis using subset folding
5. Thin fold along y-axis using subset folding
6. 90 thick fold along y-axis
7. Align fold using tramlines
8. 90 thin fold along y-axis
9. Spiral fold using a local coordinate system and layers

| ![](../Storage/primer-22-1/primer_links/appen_4/ex2.gif) |
| --- |

The first fold is a tuck fold. The fold is in the x direction and in the xy plane (the default folding plane). The fold point is at 114.5 and the direction is from right to left. The fold point is defined by selecting a node using the FOLD\_POINT button. By default the folder chooses all of the airbag to the right of the fold line. As this is what we want this is OK. Figure A4.2 shows a side view of the airbag after the tuck fold. In this example the fold separation has been set very high (5.0mm) so you can see the tuck fold. In reality the separation would be much smaller (probably the same order as the fabric thickness).

The second fold is defined in exactly the same way except that the direction is from left to right and the fold point is at -114.5. By default the folder chooses all of the airbag to the left of the fold line which is what is required.

| ![](../Storage/primer-22-1/primer_links/appen_4/ex3.gif) |
| --- |

A side view after FOLD 2 is shown in Figure A4.3. As the two tuck folds interfere with each other the first tuck fold has been moved so that no penetrations occur. As the fold separation is very large this effect has been exagerated. In reality the amount would be much smaller.

| ![](../Storage/primer-22-1/primer_links/appen_4/ex4.gif) |
| --- |

Folds 3 to 5 will show how you can use subset folding to quickly fold an airbag. Fold 3 is a thin fold. We want to fold it in the y direction soa 90 fold angle needs to be selected. Figure A4.4 shows the airbag after this fold has been done.

The fourth fold is a thin fold in the opposite direction. By default the folder will fold all of the airbag which is on one side of the fold line to the other side. In this case we only want to fold the top layer of the airbag in figure A4.4. We have three ways of performing this fold.

1. Defining a set to fold rather than the whole origami
2. Using layers to select a specific vertical range of the airbag to fold.
3. Using subset folding.

Subset folding is the easiest option to use. We can use this because all the nodes which we want to fold in this fold (4 ^th^fold) have been folded in the previous fold (fold 3). i.e these folds are a subset of the previous fold nodes. Press the SUBSET FOLDING button. The node selection should autoamtically update to the folds we need. The previous fold was in the left to right direction. This fold needs to be right to left.

The 5 ^th^fold is done in exactly the same way. As we are already using subset folding everything (including the fold direction) will be set correctly. Figure A4.5 shows the airbag after the first 5 folds.

![](../Storage/primer-22-1/primer_links/appen_4/ex5.gif)

Fold 6 can also be done with subset folding. This is to show that subset folding is not just for thin folds. It also works for thick folds. We only want to fold this by 90 instead of 180. This is easily changed by using THICK FOLD OPTIONS and changing the angle. Apart from this complication the process is identical to folds 3 to 5.

Fold 7 is an ALIGN fold. This is used if your nodes are not exactly where you want them to be. In this case we want to make adjacent nodes to the fold line a constant distance of 5mm from the fold line. This is done by setting the fold point as normal. As we were using subset folding in the previous folds we need to make sure that it is turned off as these folds are no longer a subset of the previous fold. To set the align fold options use ALIGN FOLD OPTIONS and make sure that the MAKE TRAMLINES option is set with a constant distance of 5mm.
 
![](../Storage/primer-22-1/primer_links/appen_4/ex6.gif)
 
Fold 8 is a thin fold of 90. This presents no real problems and is similar to previous fold definitions. Figure A4.6 shows the airbag after the first 8 folds have been done.
 
The last fold is a spiral fold. This presents problems because the part of the airbag we want to fold does not lie on the xy plane which is the default folding plane for the folder. This can be overcome by defining a local coordinate system for this fold. To do this press DONE to exit the SET\_FOLD menu and return to the main folding window. LOCAL\_SYSTEM allow you to define a new folding plane. We define a plane which is in the global XZ axis. This is done by selecting N1 somewhere on the vertical part of the airbag where we want to do the spiral fold. N2 is selected so that local x points in the global Z direction. N3 is now chosen so that the 3 points give the local xy plane.
 
This allows us to define the plane for the spiral fold but if we try to fold this we will fold other parts of the airbag which are on the same side of the fold line. We need to either define a subset of the bag to fold or use layers to specify a range of the airbag to fold. In this case it is easier to define the UPPER LAYER so that anything above that local z coordinate is discarded when folding.
 
![](../Storage/primer-22-1/primer_links/appen_4/ex7.gif)
 
Once the airbag has been folded it can be positioned to the desired location using the POSITION FOLDED BAG option. This example model has 4 orientations stored with the origami so that the airbag can be repositioned as needed. They can be modified or deleted easily or new orientations can be added just like folds. The 4 orientations that are stored are:-

1. Translation, 100mm along the X axis
2. Rotation of 45 about X, centred on node 5726
3. Translation along vector using N1-&gt;N2 method with distance 50mm
4. A scale in a local coordinate system of 0.8 in the Y direction only.

As all of the parameters are already stored in the example, airbag\_folding\_example.key, it will not necessarily amount to much experience gained from looking at this file. The best way is to make a copy; edit the file; and remove all of the \*ORIGAMI, \*FOLD and \*ORIENT definitions at the end of the file. Working from this, it should be possible to learn many of the important folding parameters.

[Previous](c-origami-tree-file-example.md)  |  [Next](e-seatbelt-tree-file-structure.md)