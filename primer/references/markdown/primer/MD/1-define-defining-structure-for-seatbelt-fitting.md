###  1.Define: Defining "Structure" for Seatbelt Fitting

Belt elements are fitted directly onto "structure" elements, (it is not necessary to have predefined contact surfaces), so clearly you must have some structure to which to fit your belt definition!

In PRIMER this may be any combination of SHELL , SOLID and THICK SHELL elements., the only limitation being that they must be in a single model. (If you have separate models, for instance #1 is a car and #2 a dummy, you will have to merge them before fitting a seatbelt.)

Before fitting can take place you must SELECT an existing belt definition (implicitly containing structure) or CREATE a new one. Selecting Define from the main seatbelt menu as shown on the right brings up the menu shown below.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_1a.png) 

| CREATE | Manages the creation of a new seatbelt definition. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_1b.png) |
| --- | --- | --- |
| DELETE | Deletes existing definitions. |
| LIST | Lists existing definitions and their contents. |
| SELECT | Selects an existing definition and makes it the current one. |
| ADD | Edits the current definition by adding new elements. |
| REMOVE | Edits it by removing elements. |
| DONE | Exits this panel to return to the main seatbelt menu. |

| CREATE Creating a new belt definition.  <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_1c.png)You must first select the model in which the new definition will reside.<br> <br>Then you must give a label and title for this new definition, and press APPLY .<br> <br>Labels are arbitrary, but must be unique within a model. |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fig_7_2_3_1d.gif)Then select the PARTS and/or SHELL , SOLID and THICK SHELL elements that will constitute the structure for this definition.<br> <br>PRIMER will create sets of these element types ( SET\_SHELL , etc) when you press APPLY .<br> <br>Then SELECT this new definition to make it current, and use DONE to return to the top seatbelt menu.<br> <br>The most efficient, and usually also the most convenient, method is to select whole PARTs. This means that the belt fitter can amalgamate the "structure" definition into a \*SET\_PART definition, which is convenient for contact and other definitions. However you can choose any mixture of individual elements, including subsets of a part if you wish. |
| --- |

#####  Efficient selection of structure elements

It is tempting, and quite legal, to select the whole model here; but you should consider the following:

1. These sets are used during the iterative belt form-finding process to create the pseudo-contacts against which the belt elements are fitted. The time taken in this process rises a linear function of the number of elements, so it is wasteful to select elements which will never be needed: for instance internal structure and elements on the rear facing sides.
2. These sets may also be used to define the master side of the belt-to-dummy contacts for the actual analysis, so the same efficiency and speed considerations apply there.
3. Many dummies are "coated" with a layer of null shells in order to give a continuous contact surface between assemblies that will move during the analysis. Sometimes these shells are given very small thickness values, for example much less than 1mm, and if these shells are included in the dummy structure then belt fitting may be slow as the "quantum" of movement between successive iterations will be very small in order to avoid penetrating through to the wrong side of these elements. Try to avoid selecting such shells, or if they are selected make sure that their thickness has a sensible value (at least the same thickness as the belt elements themselves).
4. Dummies tend to have quite complex internal structure, and it can sometimes confuse the belt-fitting contact algorithms (especially automatic depenetration) if they have to try to distinguish between "surface" and "internal" elements very close to the outer surface. It is best to try to define only those elements that make up the outer surface against which the belt will be fitted.

The best structure definition is one which includes only those elements actually required for the fitting process and contact during subsequent analysis, and it is worth taking some trouble to achieve this - especially with large and complex dummies.

[Previous](four-noded-2d-seatbelt-shell-elements.md)  |  [Next](2-fit-creating-a-belt-path.md)