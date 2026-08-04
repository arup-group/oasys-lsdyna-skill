####  Why Split the Calculation Up by Element Types?

The calculation method that works well for a multi-cellular structure made with thin shells, which treats the shear stress distribution across cell walls as constant, is wholly inappropriate for sections through "thick" structure made of solids and thick shells, where there will be a variation of shear stress.

Calculating beam properties is yet another problem since each beam's shape, derived from its section properties, must be considered.

Finally in a composite section that contains solids and/or thin shells and/or beams is it true to say that each element type is working separately? Or are they all working together in a composite form?

This is why each class of elements is treated separately, and two sorts of combined results are presented. Each class of elements will be described separately below, and then the different ways of combining results will be discussed.

| Jsh: Thin shells only  Calculation of open and closed-cell structures modelled with thin shells, using a "thin" calculation method suited to these elements. | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_34.png) |
| --- | --- |
| For thin shells the structure is broken down into "closed cells" and "open structure".<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_35.png)<br> <br>The torsion constant for the **closed** cells (red) is calculated by solving a series of linear equations based on shear flow in the walls and the constraint that the angular twist of the whole section must be constant. This approach assumes that the distribution of shear stress in the cell walls is constant, which is a reasonable assumption for "thin" elements - hence its use for thin shell elements. |
| The torsion constant for the **open** structure (green) is the sum of the individual torsion constants of each separate shell, treating each one as an independent thin flat plate of breadth b and thickness t as follows:<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_36.png)<br> <br>Thus the total Jsh value is Sum (Jclosed) + Sum (Jopen) |

| Draw thin shells - checking that the diagnosis of closed cells is correct <br>The determination of what is in a closed cell is  ***not***  based on the connectivity of the original mesh, rather it is performed by projecting the cut section onto a raster grid and determining connectivity from adjacent cells being occupied. It is done this way, rather than by mesh connectivity, since many "real world" structures connect materials by spotwelds, contacts or other non-topological means. Consider the following example of a crush tube: |
| --- |
| In this example a platen (blue) will crush a tube made of two separate "U" sections (red and green) that are spotwelded together (purple). The "U" sections form separate meshes, the only connectivity between them being the welds.<br> <br>A section has been cut through the tube giving the cut section shown below:<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_38.png) | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_37.png) |
| Calculating the torsion properties and then selecting Draw Thin Shells gives the following results. The fact that the difference in J values between "closed" and "open" solutions is a factor of 1000x illustrates the importance of making sure that the structure's connectivity has been interpreted correctly. |
| On the left hand side the two halves of the structure are close enough to be treated as "connected", and the structure as displayed by Draw Thin shells is filled in confirming that it is a closed cell. Its J values is ~ 1e6. | On the right hand side the original geometry has been moved apart so that the two halves are not longer close enough to be "connected", and the structure is no longer treated as a closed cell, but rather as "open structure". The J value is three orders of magnitude less at ~ 1e3 |

| JBeam Beam elements only  <br>Beam elements are considered to act independently in torsion, so that the value Jbeam is the sum of the J values of each individual beam.<br> <br>This section describes how the J values are calculated for beams. | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_40.png) |
| --- | --- |
| Ansys LS-DYNA provides several different ways of defining beam section properties, and these affect how the J value is calculated.<br> <br><br>| Definition method | How J value is calculated here. |<br>| --- | --- |<br>| By supplying A, Ixx, Iyy and - for some section type - a J value | The explicit J value is used directly if it is non-zero, otherwise the method below is used. |<br>| By supplying dimensions for rectangular or circular shapes | The section is represented as a series of polygons, as used for graphics, and the "thick" calculation method is used to derive a J value. |<br>| By defining dimensions for one of a library of standard shapes. |<br><br> <br>Some examples of using the "thick"calculation method to derive values are given below. |

| The left hand side shows a solid rectangular section for which a published solution for J is available.<br> <br>Correlation between published formula and calculated solution is better than 3% | The right hand side shows an imaginary I section, and correlation between the value based on the sum of flanges and web treated as thin plates and the calculated value is reasonable.<br> <br>As noted below some texts would apply a multiplier &gt; 1.0 to the "sum of thin plates" solution for this section. It is difficult to say what the right answer is. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_41a.png) | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_41b.png) |
| The J value for each beam is calculated separately, then Jbeam is the sum of J for all beams in the section. |

| J3d solid and thick shell elements  <br>J values for 3d solids and thick shells are calculated via a "thick walled" method that evaluates the Prandtl torsion function.<br> <br>Also J2d and Jcomb which, optionally, apply this "thick" method to both 2d thin shell structure and the combination of 2d and 3d elements if both are present in the section. These are greyed out by default and their use is [discussed later](why-split-the-calculation-up-by-element-types.md#jcomb). | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_42.png) |
| --- | --- |
| Example of cut section through an arbitrary thick walled structure made from solids and thick shells. In this example the torsion constant has been evaluated as 9.1e7 using the default resolution |

| This first image shows just the shape of the section, which is a simplified cut through a dummy model showing head, torso, pelvis, ribs and some internal structure. | This plot is the "shape" which shows how the structure has been rasterised onto a grid for calculation. Check this to make sure that no structure has been omitted or mis-diagnosed. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_43a.png) | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_43b.png) |
| Two further plotting modes are provided: Draw stress and Draw field . These are really just for debugging purposes and can be ignored. |

| Resolution: controlling the raster resolution | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_44.png) |
| --- | --- |
| For "thick" torsion calculations the default resolution is based on the smaller dimension of the bounding box round the section (ie the green rectangle above right) divided by 500. In this example the default resolution is 1.6737.<br> <br>If you feel, for example from the "shape" plot, that some structure is not being rasterised correctly then you can make the resolution finer (smaller). This might be necessary to resolve narrow gaps between elements, or perhaps if some narrow regions are present. As a rule of thumb a "narrow" section should have at least 5 cells across its width, and 10 would be better.<br> <br>However for most genuinely "thick" examples the default resolution is satisfactory: changing the resolution in this example from 1.6737 to 1.0 changed the J value from 9.131e7 to 8.908e7.<br> <br>**WARNING** : The calculation of the Prandtl torsion field is an iterative procedure using finite differences. Calculation time is a function of resolution  ***cubed***  , so making the resolution unnecessarily small will result in very long run times. |
| Halting the calculation if it is taking a long time | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_45.png) |
| The progress of the torsion calculation is reported at the bottom right hand corner, and if it seems to be taking a long time you can halt it prematurely with the red [X] button. A result will be reported but you should regard it with some suspicion. |

| Calculate 2d & Comb  <br>Combining "thin" and "thick" results using the "thick" calculation method.<br> <br>Useful when shell and solid structure is working together in torsion. | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_46.png) |
| --- | --- |
| You may have the situation that a structure combines both 2d thin shells and 3d solids, and that for the purposes of torsion these have to be considered as acting together. In this case calculating Jsh and J3d in isolation and then adding the results may result in an underestimate of the torsion capacity of the structure, and it becomes necessary to combine the two elements types in a single calculation.<br> <br>Consider the following (artificial) example of a bridge section in which<br> <ul> <li>the deck is modelled with shells 0.1m thick (red) <br>and <br> </li> <li>the channel structure below is modelled in solids 1m thick (green). </li> </ul> <br>Clearly the torsional capacity of the combination of deck and channel working together to form a closed cell is many times greater than that of the individual parts, as the images below will show. |
| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_47.png) |
| Below is a Jco plot of the Prandtl field for the combined case, demonstrating that the two structural components are working together. The various results and their meaning are explained in the table underneath. |
| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_48.png) |

######  Understanding the results from the combined image above.

| Solid element results | J value | Explanation |
| --- | --- | --- |
| J3d (under thick wall method) | 9.18125 | This is the "thick" calculation of the solid elements only, and represents the torsional capacity of the open "U" shaped channel that they form. |
|  |
| Thin shell results | J value | Explanation |
| Jsh (under thin shells only) | 8.667e-3 | This is the "thin" calculation of the top deck shells in isolation, based on 1/3.b.t\*\*3 |
| J2d (under thick wall method) | 1.453e-2 | This is the "thick" calculation of the top deck shells in isolation. It acts as a check on the accuracy of the "thick" calculation as applied to this "thin" structure. If the value of J2d is very different to Jsh , and this difference is deemed to be important, then it will be necessary to refine the resolution of the J2d calculation.<br> <br>J2d is likely to be less accurate than Jsh , and should not be used as an independent property. It is shown here to give a measure of the accuracy - or otherwise - of the calculation method. |
|  |
| Beam results | J value | Explanation |
| Jbeam (under beams only) | 0.0 | There are no beams in this model, so the result is zero. However had there been any beams the J value for each one would have been calculated separately, then Jbeam would be the simple some of these individual J values. |
|  |
| Combined results | J value | Explanation |
| Jcomb (under thick wall method) | 184.284 | This is the result of running the combination of thin shells and solid elements through the thick wall calculation, resulting in the two forming a closed cell.<br> <br>It is clear from inspection that the result of this calculation is over 20x greater than that of the individual components acting alone, and this demonstrates clearly the importance of getting the connectivity of the structure right for this calculation. |
| Jsh + J3d + Jbeam <br> (Under Combined results) | 9.1899 | This is the linear sum of the individual thin shell, solid and beam torsional constants **calculated in isolation** . Therefore it does **not** consider the possibility of these element types acting together. |
| Jcomb + Jbeam  <br>(Under Combined results) | 184.284 | This is the linear sum of the **combined** solid and shell Jcomb value plus the value for beams, and is the result of the structure "working together". (Beams are always considered to act independently in torsion.) |

| Adjusting the resolutions of the combined calculation process | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_49.png) |
| --- | --- |
| If the combined calculation method has been enabled all three resolutions will be enabled for editing. From left to right they are<br> <ul> <li>That for the solids only J3d value </li> <li>That for the shells only &quot;thick method&quot; J2d value </li> <li>That for the combined Jcomb value </li> </ul> <br>The default values are chosen to give a reasonable compromise between accuracy and speed (recall that the time taken for a "thick" calculation rises as a function of resolution cubed!). You will normally only have to adjust these values if:<br> <ul> <li>The calculation method fails. This will generate a warning message explaining why, and the relevant result will be reported as &quot;Failed&quot;. This is normally due to selecting too coarse a resolution resulting in a failure to project the section correctly onto the raster grid. Choosing a finer value will normally cure the problem. <br> <br> </li> <li>Examination of the &quot;shape&quot; (or other) plots reveals that the section is not working as intended. Again, selecting a finer resolution will usually solve the problem. <br> <br> </li> <li>In the combined case the thin shell <span class="buttontext">Jsh </span>and <span class="buttontext">J2d </span>values are significantly different, and thin shells contribute a significant amount of the torsional stiffness. In this case it will be necessary to refine the <span class="buttontext">J2d </span>resolution until a reasonable result is obtained, and then to apply this result to the <span class="buttontext">Jcomb </span>case as well so that the combined value is calculated accurately. </li> </ul> |

[Previous](why-a-separate-panel.md)  |  [Next](options-1.md)