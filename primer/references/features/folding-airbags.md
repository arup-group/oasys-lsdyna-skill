###   Folding Airbags

The airbag folder is designed to produce folded meshes from ones that are initially flat. Additionally, some facilities are provided to deal with 3-D initial configurations

The airbag folder can also generate an airbag mesh from scratch for some pre-defined geometries. At present this is limited to a star folded or a circular folded airbag. In future releases this functionality will be further enhanced.

During folding the airbag can be checked for distorted elements and initial penetrations. Once folded the airbag it can be positioned.

If you are starting from an existing mesh then each airbag must be a subset of only one model. Airbags usually consist of shell elements only and other element types should be avoided.

| The airbag start up screen allows you to choose one of 3 possible modes.<br> <br>1) Selecting **FOLD EXISTING MESH** will start the airbag folding process with an existing mesh.<br> <br>2) **CREATE STAR MESH** can be used to create a new star or circular fold. To select whether to create a star fold or circular fold use the new mesh type popup box.<br> <br>3) **MESH-INDEPENDENT FOLDING** allows you to create a circular airbag or import a mesh that is suitable for mesh independent folding. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_startup.gif) |
| --- | --- |

#### Definitions: ORIGAMIs, FOLDs and ORIENTs 

This section defines some of the terms which are used in the airbag folder.

The use of the term "Airbag", has the potential to cause some confusion. The actual \*AIRBAG card in Ansys LS-DYNA consists of the surface of an airbag and the physical properties (gas thermodynamics) of the inflator. The tethers which might be included in a bag, for example, do not form part of the free surface of the airbag control volume, and thus they are not included in an Ansys LS-DYNA "airbag". The tethers, however, must be folded along with the remainder of the airbag, so they may need to be included in a geometrical definition.

Thus, to distinguish between the Ansys LS-DYNA \*AIRBAG and the airbag as described here, the term ORIGAMI is used in PRIMER . In fact, an ORIGAMI could potentially involve things which are completely unrelated to airbags: it is the umbrella definition containing everything required to define the geometrical extent of an airbag, and its associated folding operations:

* The origami label (which must be unique within a model) and title;
* A list of elements and nodes (as sets) which comprise the bag;
* A list of folds;
* A local coordinate system.
* A list of orientations

A **FOLD** is a generalised term for the many fold types available; eg Rolling a bag up is described as a "FOLD", as is a "Tuck" or a "Scrunch". Each FOLD definition contains:

* The fold number and type (thin, thick, roll, tuck, ...)
* An optional coordinate system;
* Geometrical data (location, direction, angle, thickness, ...)
* Optional subsets of nodes and elements for special cases.

An **ORIENT** is a transformation which is applied to the folded airbag to position it in the model. The different types available are translation, rotation and scaling. Each ORIENT contains:

* The orient number and type (translate, rotate or scale)
* Geometrical data (location, distance, angle ...)
* Optional nodes for special cases.

An ORIGAMI definition may contain any number of folds and orients, and a model may contain any number of ORIGAMIS. Elements and nodes may be referenced in more than one ORIGAMI, but this would not normally be sensible as the different fold operations might conflict: remember that a node can only have one current coordinate!

| Creating and folding a new airbag from scratch   <br>At present the following types of airbag mesh can be created:<br> <br>A circular folded airbag. The airbag is compressed radially. To enable this the excess fabric forms folds.<br> <br>A ‘star’ folded airbag. This is formed identically to the circular bag but an extra operation is performed. The airbag is pushed inwards at various points forming a star shape.<br> <br>The star fold panel is shown in the figure to the right. This panel allows you to define the parameters which will be used to generate the mesh for the airbag. The parameters that can be changed are:<br> <br><br>| | No. of points | The number of points on the star fold. |<br>| --- | --- |<br>| No. of folds | The number of out of plane folds which are done. |<br>| Element size | The optimum size of elements which will be used when generating the airbag mesh. |<br>| Inflator rad | The radius of the inflator at the centre of the airbag. This area will not be folded in any way. The inflator area on the bottom surface of the airbag will also be put into a different part. This allows the inflator part to be made rigid if necessary. |<br>| Unfolded rad | The external radius of the airbag when unfolded flat. |<br>| External rad | The maximum radius of each point on the star. i.e. the radius at the point tip. |<br>| Internal rad | The minimum radius of each point on the star. |<br>| Section style | The cross section style of the folds used. The popup can be used to select two different styles. |<br>| Separation | The separation between the upper and lower surfaces of the airbag when unfolded flat. |<br>| Mesh with | The airbag can be meshed either with trias or with a mixture of (mainly) quads and trias. This popup can be used to select which you want | |  |<br>| --- | --- |<br><br> <br>If you change any of the options the graphic also changes showing you the effect of the change. For example, the right-hand figure shows the effect of changing the number of points in the star fold to 24. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_starfold.gif) |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/airbag_starfold_24pnts.gif) |

| The following figures show a starfold with 10 points before and after folding.<br> <br><br><br>| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/starfold_unfolded.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/starfold_folded.gif) |<br>| --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/starfold_folded_iso_shaded.gif) | |
| --- |

Once the star fold has been created you will be placed in the normal airbag folder. You can then position the bag, check for distorted elements etc.

Once the star fold has been meshed (created) you cannot change the number of points or other parameters. This is because the mesh is dependant on these parameters. If the airbag is not what you expected or required then the process needs to be repeated.
 
### Mesh independent folding

| Mesh independent folding allows you to create folds on the airbag at any position, regardless of the mesh on the airbag. It does this by remeshing the airbag after each fold to create a suitable mesh. <br>For this to work the airbag (or origami) has to be set up in a specific way.<br> <br>Currently there are 2 methods for doing this. <br>1) [Create a flat circular bag](nan)from scratch. <br>2) [Import a mesh](nan)<br> <br>Alternatively, if an airbag has already been defined by one of these methods you can select the existing airbag. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh_indep_fold.gif) |
| --- | --- |

#### Creating a circular airbag 

This option is only available if you have not read an airbag into PRIMER.

If you have read a model then the option will be greyed out. To enable it DELETE the models or restart PRIMER.

| 1) From the airbag shape popup select the Circular option. <br>2) Give suitable values for: <br>a) the airbag radius. <br>b) the separation between the top and bottom fabric layers. <br>c) the element size for the initial mesh. <br>3) Press the MESH-INDEPENDENT FOLDING button. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/circ_bag.gif) |
| --- | --- |

The airbag will be created and you will be placed in the main folding screen. See section below for details of how to perform mesh-independent folding.

#### Importing mesh for mesh independent folding 

This option allows you to use a mesh that has previously been read into folder for mesh-independent folding.

1) Read an airbag file into PRIMER. 
2) From the airbag shape popup select the Mesh option. 
3) Press the MESH-INDEPENDENT FOLDING button. 
4) Select the parts that make up the airbag. 
5) Select fixed points on the airbag for remeshing.

| Selecting parts for mesh-independent folding  <br>Folder needs to know which parts make up the airbag before mesh-independent folding can be done. There are limitations on parts that can be used:<br> <br>1) Parts must be flat <br>2) Parts must not contain holes. <br>The algorithms that Folder uses when folding mesh-independent bags do not allow parts to have holes. If your airbag contains holes the parts need to be split. <br>For example<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh_indep_holes_1.gif) | would become | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh_indep_holes_2.gif) |<br>| --- | --- | --- |<br><br> <br><br> <br>3) The top and bottom surfaces of the airbag must be different parts <br>4) If a fold will occur on a part, there must only a single fold line. |
| --- |

| This part can be folded without problem.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh_indep_1_cut.gif) | This part cannot be folded as the fold line cuts the polygon in two places.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh_indep_2_cuts.gif) |
| --- | --- |

| Select the parts that make up the airbag and press  ****  SELECT PARTS.<br> <br>You can sketch the parts you have selected by pressing  ****  SKETCH PARTS. <br>In this figure 4 parts are selected.<br> <br>The following section shows some examples of meshes suitable for mesh-independent folding. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/select_parts.gif) |
| --- | --- |

#### EXAMPLE 1
 
A square airbag is needed for mesh-independent folding.

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh2.gif)<br><br>Top surface of airbag |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh1.gif)<br>Bottom surface of airbag |
| --- |

This airbag can be used for mesh-independent folding. The top and bottom surfaces of the airbag are different parts, both are flat, and neither have holes.

**EXAMPLE 2**

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh3.gif)<br><br>Bottom surface of airbag |
| --- |

This mesh cannot be used . The bottom surface of the airbag has holes in it.

To overcome this we can split the bottom surface into 2 parts. We also split the top surface to match

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/split1.gif) <br>Bottom surface of airbag |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/airbag/split0.gif) <br>Top surface of airbag |
| --- |

We have now eliminated the holes on the bottom surface so this airbag mesh can be used. Note that there would still be a problem if we were going to fold the airbag along the dashed line. In this case the fold line cuts the part in more than one place so will cause problems. If folds such as this are not going to be done the mesh is suitable.
 
#### Selecting fixed points for mesh-independent folding![](../Storage/primer-22-1/primer_links/sect_6/airbag/nodeswithangle.gif)
 
Once the parts have been selected, folder needs to know about the fixed points on the mesh.
 
The fixed points are required so that folder can remesh the parts in the airbag as a folding is done.
 
For example, to remesh the simple airbag shown in example 1 above folder would need to know that the corners of the square are 'fixed' in space and so cannot be moved. All the other nodes on the boundary of the parts can be moved without changing the airbag shape.
 
The 4 corner nodes must be selected as fixed points. If no fixed points are selected folder does not know which nodes are essential and so cannot remesh the airbag as folding is done.
 
ADD NODES WITH ANGLE can be used to add nodes on the boundaries of parts which have an angle less than the specified value. For example the corner nodes on the square mesh in example 1 have edge angles of 90° so will be selected (&lt; 135°). All the other boundary nodes have angles of 180° so will not be selected.
 
To enable folder to determine the different surfaces of the airbag you must enter the layer separation (the distance between the top and bottom surfaces of the fabric). In the screenshot above the value has not been entered yet so the APPLY button is not active.
 
Once all the fixed nodes that you require are selected, APPLY will create the origami and take you to the main folding screen.

| PICK NODES can be used to manually pick nodes to become fixed nodes from the airbag.<br> <br>When you have selected the nodes on the screen press DONE to add them to the fixed nodes | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/picknodes.gif) |
| --- | --- |

For another example, the mesh with holes in the bottom surface in example 2 earlier would need the following fixed nodes selecting (shown by the dots).

![](../Storage/primer-22-1/primer_links/sect_6/airbag/fixednode0.gif)

![](../Storage/primer-22-1/primer_links/sect_6/airbag/fixednode1.gif)

| Selecting an existing mesh-independent origami  <br><br>| If you have previously created a mesh-independent origami you can return to the mesh-independent folder by selecting the origami. In the screenshot on the right another option USE ORIG is available. For each mesh-independent origami that exists an option will be shown.<br> <br>An origami will only be shown if **ALL** the folds in it are mesh-independent folds. If it is not shown it is because one or more folds have been done in the normal airbag folder. In this case to be able to return to the mesh-independent folder these folds would need to be deleted. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/mesh_indep_restart.gif) |<br>| --- | --- | |
| --- |

#### Performing mesh independent folding 

If the airbag has been created for mesh-independent folding or imported the SPLIT MESH and REMESH buttons will be available in the main folding window. 
Mesh-independent folding is available for the following fold types:

* Thin folds
* Tuck folds
* Thick folds
* Spiral folds

Other fold types are incompatible with mesh free folding and are not allowed (as the airbag is remeshed after each fold the fold definitions would change).

To perform a mesh-independent fold select the fold type, position angle etc as normal (see section 5.5.9). In the example a thin fold will be performed.

Set the tramline size and element size to the required values in the options panel (see section 5.5.14)

Press  ****  SPLIT MESH.

![](../Storage/primer-22-1/primer_links/sect_6/airbag/indep002.gif)

The mesh is split and remeshed. The following example shows the result of a thin fold. 
The top and bottom surfaces of the airbag are split into new parts as required (as shown by the different colours) and then remeshed. Fixed points are automatically added to the airbag as required.

To undo a split DELETE the fold. The parts will be recombined and remeshed (as long as there are fixed points to enable folder to remesh)

![](../Storage/primer-22-1/primer_links/sect_6/airbag/indep003.gif)

At any time the element size in the options size can be changed and the airbag remeshed using the REMESH button. For example the airbag above has a tramline size of 5mm and an element size of 10mm. Changing the element size to 5mm and remeshing gives the mesh on the right.

Note that as the thin fold was made with a tramline size of 5mm, the airbag should not be meshed with elements smaller than 5mm as this could lead to more than one element across the tramline parts. This will cause problems with the thin fold.

![](../Storage/primer-22-1/primer_links/sect_6/airbag/indep004.gif)

[Previous](post-linking-primer-with-post-processors.md)  |  [Next](folding-an-existing-mesh.md)