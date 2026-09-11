####  Creating Bolts

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/bolts_1.gif)A bolt may be a single rigid entity (RB merge or NRB) joining multiple panels or when 2 panels are being joined, it may be 2 rigid entities (rigid patches or NRBs) connected by a beam, zero length discrete beam, revolute joint or ball joint.<br> <br>The geometry of a **one point bolt**is described by a point, a diameter and a maximum length. The orientation of the bolt is calculated by PRIMER from the shells to be joined. This method is appropriate for short bolts.<br> <br>The geometry of a **two point bolt**is described by two points and a diameter. In this case, "length" is max thickness of the connection at each end, the actual bolt length being unrestricted. The axis of the bolt is defined by the vector between the points.<br> <br>In the case of merge or rigid patch bolts, extra lead parts (with no elements of their own) are created which allow the unlabelled rigid body merge to be identified.<br> <br>These also provides parts which can be converted to PART\_INERTIA should the mass properties of the bolt require adjustment.<br> <br>Optional material id. The user may enter a rigid material id to be used for the rigid patches, otherwise PRIMER creates one with properties derived from the panels being attached.<br> <br>If creating a bolt at a hole, the maximum washer diameter (Settings ...) must be set to a sufficient value. The default of 20mm should be sufficient for most models.<br> <br>Bolts are **drawn in preview**and will only be created when APPLY is pressed. |
| --- |

#### 

##### Creating single point bolts
 
A single point set by a variety of methods (see below) determines the position of the bolt head.
 
For bolts which are created on panel mesh (i.e. excluding those at a hole) Bolt head diameter is specified. If a bolt is being created at a hole, the diameter is determined by the choice of shape control flag (see below). Bolts may be made at positions which combine meshes both with and without holes, in which case the shape control will be applied at the holes.The Max length parameter sets the maximum possible length of the connection. PRIMER will search for shells along the bolt axis in both directions to this length from the connection point. So the connection point should be defined at the head/nut of the bolt not in the middle. The table function update & remake (repos) can be used to reposition the connection point.

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_nrb_methods.gif) | NRB methods use NODAL\_RIGID\_BODY to rigidify the panel shells. Spherical/cylindrical NRB form a single rigid body, the other methods will form 2 rigid bodies connected by the applicable FE.<br> <br>Cylindrical methods determine a bolt axis and will only incorporate shells where the normal aligns (using Angle tol) with it.<br> <br>Spherical method requires no alignment of shells and will simply sweep out a radius from the connection point.<br> <br>For bolt at hole, spherical methods are not applicable and therefore greyed. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_patch_methods.gif) | Cylindrical merge forms rigid patches connecting layers which are constrained to single rigid lead part. Other methods form 2 rigid patches connected by the applicable FE.<br> <br>These methods will attach to rigid parts by making additional \*Constrained\_rigid\_body definitions as necessary. |

#####  Single point bolt at hole

![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_hole.gif)

Picking a node on the edge of a hole in the mesh will set up the data for creating a bolt with its head at the centre of the hole.

The prospective bolt will be sketched in preview.

The diameter of the bolt is determined by the shape control setting.

![](../Storage/primer-22-1/primer_links/sect_6/connection/nrb_shape_opts.gif)

For NRB type bolts the options are

1 ring - rigidify nodes of all shells around the hole

2 rings - rigidify node of all shells around hole and all that attach to them

edge only - rigidify only the nodes around the hole

auto - calculate diameter from mesh density

user diam - use the input diameter

For patch type bolts the options are

1 ring - rigidify all the shells around the hole

2 rings - rigidify those around the hole and those that attach to them

Preview of Nodal Rigid Body bolt with deformable beam formed by picking node on edge of hole. The free edge detected is drawn in green.

![](../Storage/primer-22-1/primer_links/sect_6/connection/nrb_beam_preview2.gif)

Preview of patch type "bolt" with ball joint connecting the rigid parts.

![](../Storage/primer-22-1/primer_links/sect_6/connection/patch_revol_preview2.gif)

#####  Single point bolt from coordinates

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_coords.gif)Type the X, Y, Z coord inates into the box and the bolt will be previewed if it can be made.<br> <br>If the bolt cannot be made an error message in the dialogue box will give the reason why.<br> <br>T option enables you to drag translate the point in global system<br> <br>APPLY will create the bolt<br> <br>UNDO CREATE will remove it |
| --- |

##### 

#####  Single point bolt from screen point

screen point

Using the cursor, select a point on the screen at which you wish the bolt to be created.

The bolt will be previewed if it can be made.

APPLY will create the bolt UNDO CREATE will remove it

#####  Single point bolt from existing (empty) connection

connection

If you pick an existing empty connection, PRIMER will preview the bolt.

APPLY will create the bolt UNDO CREATE will remove it

#####  Single point bolt at a node

single node

If you pick a node, PRIMER will preview the bolt that can be created.

APPLY will create the bolt UNDO CREATE will remove it

#####  Single point bolt between picked nodes

between nodes

The "between nodes" function provides a way to create a bolt between N nodal points. Once you have selected a minimum of 2 nodes the connection can be previewed by pressing PREVIEW .

Nodes are picked by a left click and may be deselected by a middle click on the mouse.

#####  Creating two point bolts

For longer bolts the 2 point method is recommended. Each point may be defined by coordinate, screen point pick or node pick. If a node on the edge of a hole is picked, the centre of the hole will be taken as the connection point.

In this mode each of the two layers may contain multiple parts. Only one value of Max end thickness is specified. If less than half the distance between the two points the same value will be applied at each end. If greater this length will be applied at end 1 up to a maximum thickness of 90% and what remains (with a minimum of 10%) will be applied at end 2.

Once picked, the point may be dragged in global XYZ using T tool.

![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_2pt_2.gif)

Two separate rigid bodies are made (NRB or rigid parts) and may be joined by deformable beam, optional rigid beam or revolute joint according to the method option.

![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_2pt.gif)

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_2pt_patch_beam.gif) | Preview of two point patch type bolt with beam made by pick screen point.<br> <br>Note - multiple parts may included at each end |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_2pt_nrb_beam_at_hole.gif) | Preview of two point NRB type bolt made by picking a node on edge of hole with beam between rigid parts. |
| --- | --- |

#####  Creating generic two point bolts

These bolts are designed to give a generic method for two point connection. They may be formed using nodal rigid bodies or overlying rigid shells.

![](../Storage/primer-22-1/primer_links/sect_6/connection/generic4.gif)

If no Beam Pid is specified a rigid connection will be made encompassing both ends. Otherwise a beam will be created between the centre points of each cylinder or a zero length beam if the section is of type discrete.

![](../Storage/primer-22-1/primer_links/sect_6/connection/generic_3.gif)

For generic bolts the layer definition is pre-determined by the create panel with the Set layer A and Set layer B functions. The method should then be chosen. With edge of hole a single pick on a hole edge will establish the centre of the hole P1 and the points P2, P3 such that P1P2 and P1P3 are non-parallel vectors which describe the central plane of the cylinder. Alternately, pick 3 nodes or pick 3 points may be used to establish the points or they may be typed in. Once established the coordinate may be adjusted by XYZ dragging T or rotation of the cylinders R .

![](../Storage/primer-22-1/primer_links/sect_6/connection/generic5.gif)

Once the orientation is correct, the diameters and lengths (thicknesses) of the cylinders can be increased. Also the angle tolerance which compares shell normal to cylindrical axis may be set.

![](../Storage/primer-22-1/primer_links/sect_6/connection/generic6.gif)

PRIMER will then preview the prospective bolt. Adjusting the "recipe" (e.g. the diameters) should dynamically update the preview, if it does not Refresh Preview Bolt can be pressed. Once the bolt looks right it may be created by pressing Apply

![](../Storage/primer-22-1/primer_links/sect_6/connection/generic_2.gif)

In this example Part 612 is a discrete beam part. Consequently a zero length ELEMENT\_BEAM\_THICKNESS has been created wihich references \*DEFINE\_COORDINATE\_SYSTEM to describe the base orientation of the bolt axis.

![](../Storage/primer-22-1/primer_links/sect_6/connection/generic7.gif)

#####  Creating library bolts

The library bolt is an FE model created by the user which represents a two layer line connection. This feature allows the user to create multiple complex bolts designed to their own specification.

The model contains additional information needed to connect to deformable shell panels in a bespoke \*COMMENT. This is best set up by selecting a model and using the
Library function under connections.

![](../Storage/primer-22-1/creating-bolts/creating-bolts-2025-03-12.png)

With this tool the user can select the head and tail nodes which will locate to the connection points, the nodes sets to attach by \*CONTRAINED\_NRB or the rigid parts to be connected by \*CONSTRAINED\_EXTRA\_NODES. By default a stretch will be applied to the nodes which lie between the head and tail nodes and others will be translated. But the user may configure this by setting translation node sets. More detail is available under HELP .

Once set up the module can be saved with a unique name to CWD (current working directory) or HOME area (single user) or INSTALL area (all users). Whenever PRIMER is started all library modules will be loaded and available. Note - on windows machines if using CWD you will need to read a file to set the CWD and then tick the Library option on the bolt creation panel.

![](../Storage/primer-22-1/creating-bolts/creating-bolts-2025-03-12-1.png)

Creation is very similar to two-point bolt with options for node/point picking and shape control, the first point will locate the head, the second the tail. A module must be selected from the library. These are all listed in a searchable drop-down box.

![](../Storage/primer-22-1/creating-bolts/creating-bolts-2025-03-12-2.png)

If Resize to points is set the bolt will be stretched so that the head/tail node coincide with the picked points.

Contact Fit will do the same and further adjust the bolt so there are no contact penetrations.

Some global options are also available:

![](../Storage/primer-22-1/creating-bolts/creating-bolts-2025-04-17.png)

When creating multiple bolts, by default bolts will use the same part id for deformable parts.

This option will create unique deformable parts for each bolt. Rigid parts are always unique.

![](../Storage/primer-22-1/creating-bolts/creating-bolts-2025-04-17-1.png)

If the modular bolt contains \*SET\_SEGMENT\_GENERAL, this option will create a single contact using \*SET\_SEGMENT\_ADD to reference the \*SET\_SEGMENT\_GENERALs.

This avoids creation of multiple \*CONTACTs which would happen if the \*CONTACT was defined in the module.

![](../Storage/primer-22-1/creating-bolts/creating-bolts-2025-04-17-2.png)

A \*CONSTRAINED\_NRB or EXTRA\_NODE will be created to attach to deformable shell panels according to the information contained in the \*COMMENT of the module.

![](../Storage/primer-22-1/primer_links/sect_6/connection/library_4.png)

As with standard bolts the library module is also supported by in the xml connection file so multiple bolts can easily be created in batch process. The unique module name should be given with path.

To avoid unnecessary creation of deformable parts, sections and materials, the titles of these are checked against those already in the model and if matched the extant card will be referenced rather than imported. The titles for these should therefore be carefully chosen in the module. When connections are deleted these parts will not be and may be left empty in the model.

![](../Storage/primer-22-1/primer_links/sect_6/connection/library_5.png)

##### Drilling holes for bolts
 
The bolt creation function now includes an option to drill holes through all relevant layers. This option is only supported for single point, cylindrical nodal rigid body type bolts while using one of the following creation methods:

* X, Y, Z coords
* Screen point
* Single node
* Connection

![Hole creation options for bolts](../Storage/primer-22-1/creating-bolts/panel_from_ppt.png)

Hole drilling is not carried out if any existing holes are located. However, bolt creation may still be executed successfully in such cases.

A bolt preview is first generated and upon pressing Create, PRIMER first creates holes through all relevant layers before creating the bolt.

![Combined bolt and hole creation](../Storage/primer-22-1/creating-bolts/drilled_cropped.png)

##### Bolt options

| ![](../Storage/primer-22-1/creating-bolts/creating-bolts-2024-06-04.png) | Options ...<br> <br>on the main connection create panel gives access to global options for bolt creation |
| --- | --- |

Min mass on 'bolt' joint nodes - will add mass to the nodes of the joint to meet the target value (if necessary). Increasing mass of a joint increases its stiffness and stability.

Minimum 'bolt' joint length - will increase the length of the revolute joint (if necessary) to meet the target value

Sketch volume of bolt - PRIMER will sketch the cylinder or cylinders (for 2 pt bolts) which show the nominal geometry of the bolt. This is useful for adjusting the diameter.

Add database history beam - on creation of bolt, PRIMER will automatically make a Database History Beam id using the title of the bolt.

Use parent layer for bolt FE - creation normally will put all FE into the current layer. However, for bolts if this option is set, bolts will try to use the parent layer. If parent panels are all in the same include, all FE will go into that include. If they are in different includes, shells/parts/ materials will be put with the overlaid parent part and any other items will go into the current include. On the connection table the layer of the connection itself and layer(s) of the FE data can be displayed using **view ...** conx include/FE include.

Enforce layer method for bolt FE - if numbering rule is set to a layer type method and this option is set, it will block creation of the bolt if include file number ranges have not been set. Without this setting, PRIMER will create the bolt using highest+1 in model when number range is missing.

Entity numbering rule - by default the same rule applies to welds/adhesive and bolts. The default is *model highest+1* but oa\_pref **connection\_node\_element\_numbering\_rule**   can modify this. For bolts only, oa\_pref **bolt\_entity\_numbering\_rule** will always over-rule any other setting.

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_pref.gif) | These may be configured using [oa_pref settings](m-summary-of-oa-pref-command-line-and-environment-variable-settings.md#dialoguecommands)<br> <br>If oa\_pref bolt\_entity\_numbering\_rule is set. It will overrule the label rule set in the options panel which is therefore greyed.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_pref2.gif) |
| --- | --- |

Adjust bolt mass on creation - small merge type bolts can lead to stability problems in mass scaled models. The problem arises because added mass on the deformable elements which attach to the rigid bolt gets lost. The mass of the bolt itself needs to be sufficient to compensate for this loss. By default PRIMER will automatically calculate the mass required, however user may set a target mass which will be used in preference ( [check &gt; options &gt; rigid](options-setting-model-check-options.md#options)). Nodal rigid bodies are implicitly stable in Ansys LS-Dyna so there is no stability criterion for these type of bolts, however user may set a target mass for these too.

If this option is active and the requested mass exceeds the actual mass, PRIMER will convert the lead part (merge type bolt) or nodal rigid body to an \_INERTIA definition with mass properties appropriately scaled up. If it is not the mass of the bolt created may be too small for stability. The table will give the mass and the factor which should be &gt;= 1.0 for stability.

![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_mass.gif)

The mass can be corrected by re-making the bolt with adjust bolt mass on creation active or by performing a model check and auto-fixing the lead part/nodal rigid body. The table will then show that \_INERTIA is being used.

![](../Storage/primer-22-1/primer_links/sect_6/connection/bolt_mass2.gif)

|  |
| --- |

[Previous](creating-rivets.md)  |  [Next](creating-adhesive.md)