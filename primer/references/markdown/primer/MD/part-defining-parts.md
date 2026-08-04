###  PART: Defining Parts

| [Top level menu](part-defining-parts.md#mainPARTcontrolpanel) <ul style="font-size: 14.6667px;"> <li><a href="define-transform.md#create">Creating</a></li> <li><a href="define-transform.md#copy">Copying</a></li> <li><a href="define-transform.md#modify">Editing</a></li> <li><a href="Editing a Model Database.html#delete" target="_top">Deleting</a></li> </ul> <br> * [Rigid Parts](part-defining-parts.md#PARTRIGID)<br> * [Visualisation](part-defining-parts.md#VisualisingandLabellingparts) | Options: <ul style="font-size: 14.6667px;"> <li><a href="part-defining-parts.md#PARTINERTIA">_INERTIA</a></li> <li><a href="part-defining-parts.md#PARTCONTACT">_CONTACT</a></li> <li><a href="part-defining-parts.md#PARTREPOSITION">_REPOSITION</a></li> <li><a href="part-defining-parts.md#PARTPRINT">_PRINT</a></li> <li><a href="part-defining-parts.md#PARTATTACHMENTNODES">_ATT.._NODES</a></li> </ul>
Sub-keywords: <ul style="font-size: 14.6667px;"> <li><a href="part-defining-parts.md#PARTADAPTIVEFAILURE">_ADA.._FAIL..</a></li> <li><a href="part-defining-parts.md#PARTCOMPOSITE">_COMPOSITE</a></li> <li><a href="part-defining-parts.md#PARTMODES">_MODES</a></li> <li><a href="part-defining-parts.md#PARTSENSOR">_SENSOR</a></li> <li><a href="part-defining-parts.md#PARTMOVE">_MOVE</a></li> </ul> <br>[Moving elems in/out](part-defining-parts.md#PARTCONTENTS)<br> <br>[Calculating properties](part-defining-parts.md#PARTPROPERTIES) |
| --- | --- |

  **** 
The \*PART keyword is central to Ansys LS-DYNA usage: it acts as a "collector" of material, section property and other data for groups of elements. It is also commonly used as a means of splitting up large models into manageable components which can be given part names.
 
Parts in Ansys LS-DYNA are only used by BEAM, DISCRETE, SEATBELT, SHELL, SOLID and TSHELL element types, and elements of these types must reference exactly one part. Parts do not have an element type defined explicitly but, since Ansys LS-DYNA only permits a part to be referenced by a single element type, there is an implicit type associated with them. PRIMER honours this by associating an internal "type" with each part, which is defined by the first encountered element that references the part, and only material, section and other definitions valid for that element type are permitted.
 
\*PART\_( *OPTION1*)\_( *OPTION2*)\_( *OPTION3*)\_( *OPTION4*) cards and \*PART\_COMPOSITE cards are defined by choosing PART from the drop-down list in the Keywords panel in PRIMER. The other \*PART types (\_MOVE, \_MODES, \_SENSOR and \_ADAPTIVE\_FAILURE) are defined from their own individual selection button from the part dropdown list.
 
![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_selection.gif)

| This figure shows the main **PART** control panel. <br>All options have their standard meanings as described in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions). | ![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_0.gif) |
| --- | --- |

####  CREATE Creating a new part

This figure shows the initial creation panel, in which nothing is defined.

In order to create the part you must define the following:

| **PID** | The part id (label), which must be unique. |
| --- | --- |
| **SECID** | The section id. The section type must match the type of the elements in this part. |
| **MID** | Material id. Again, this must be a formulation valid for the elements in this part |

This represents the bare minimum required to create a part, and you can now use CREATE\_PART to make the definition permanent.

The remaining data fields (hourglass id, etc) are optional: limited on-line help is provided in their popup menus, but you should refer to an Ansys LS-DYNA manual for details of their meaning.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_1.gif)

| **CONTENTS...** | The elements which make up the part. This is described below under section [PART_CONTENTS](part-defining-parts.md#PARTCONTENTS). |
| --- | --- |
| **PROPERTIES...** | Calculates and lists the structural properties (mass, C of G, inertia tensor) of this part - see [PART_PROPERTIES](part-defining-parts.md#PARTPROPERTIES). |

The optional sub-keywords ( \_INERTIA, \_REPOSITION, \_CONTACT, \_COMPOSITE, \_PRINT ) are described in sections [**PART\_INERTIA**](part-defining-parts.md#PARTINERTIA)****to [**PART\_PRINT**](part-defining-parts.md#PARTPRINT)****below.

####  COPY Copying selected parts

The selected parts will be copied to the next free labels in the relevant models.

RECURSIVE\_COPY is an extremely important flag in this context:

* When **OFF** Only the actual \* PART card and the data on it are copied. The new definition contains no elements, but has the same properties as the original part.
* When **ON** Both the \* PART card, and everything "owned by" (ie lower in the hierarchy than) the part are copied. Thus the elements and nodes will be duplicated, and the new part will refer to a set of new elements which are identical to but separate from the originals.

Note that the section and material definitions are  ***not***  copied, since they are above parts in the programme hierarchy.

####  MODIFY Editing existing parts

The part editing panel is identical to the creation one, except that it will be populated with data when mapped. This figure shows a typical example, here for a part containing 24 SHELL elements. Changes are made as for [CREATE](define-transform.md#create) above.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_3.gif)

| REPLACE Replacing part(s) with those from another model  ![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_replace_v22.png) |
| --- |

#####  The process of replacing part(s)

The REPLACE function offers a powerful method of replacing a part or multiple parts in the target model with part(s) taken from **another** model (the source), typically a similar part remeshed or reshaped.

If replacing a single part, there is no need for the Part id to match.

If replacing multiple parts the target and source part ids must be the same. The element type (if specified) of the target and source parts must be the same. For multiple parts, all parts selected must have the same element type.

For single part, the replacement is achieved by simply selecting the target part and then the source part from the object menu.

For multiple parts, the target model is selected and then the parts from the source model which are to be imported. If the id of one or more selected source parts does not match any part is in the target model, the user is given the option of ignoring such parts or creating new ones in the target model. There is no longer a restriction on mixing parts of different element types, so an assembly of shells and solids can be replaced in one operation.

If any of the re-attach option are active on completion of transfer of elements & nodes into the target model, PRIMER will offer you a panel which allows you to view details of the possible merge options available and options on how to proceed.

![](../Storage/primer-22-1/primer_links/sect_5/part/rep1.gif)

Show unattached nodes and Show unattached items will sketch the items concerned.

![](../Storage/primer-22-1/primer_links/sect_5/part/reattach_sketch.gif)

List Details will provide a detailed listing of what may require re-attachment.

![](../Storage/primer-22-1/primer_links/sect_5/part/reattach_listing.gif)

Generate View will apply blanking automatically and give a blob plot to show how the nodes will be re-attached. The old nodes are plotted in blue and the corresponding new node in green. Any nodes which cannot be re-attached will be plotted in red.

![](../Storage/primer-22-1/primer_links/sect_5/part/rep2.gif)

The user now has the option to Re-Attach the sketch items by merging the blue node to the green node, Leave unattached (for attention later) or Delete unattached items.

![](../Storage/primer-22-1/primer_links/sect_5/part/rep3.gif)

Delete unattached items will bring up the interactive deletion panel, giving the user control over what is deleted.

The user may control exactly which nodes are to be merged by applying a merge tolerance or picking tracked nodes (blue blobs) to be excluded from merge.

![](../Storage/primer-22-1/part-defining-parts/part-defining-parts-2023-09-28.png)

If Re-Attach nodes is applied, the user may wish to Only the parts concerned and run a Find Attached operation to check that the process has been done correctly.

![](../Storage/primer-22-1/primer_links/sect_5/part/rep4.gif)

#####  Re-attach options for part replace

![](../Storage/primer-22-1/primer_links/sect_5/part/opt_reatt_v22.png)

Remake connections PRIMER will remake any connections attached to the target parts, once the part replace operation is completed. Any that fail to remake will be displayed on the connection table.
 
- When the **Rem missing layer(s)** option is ON, layers that failed to connect when remaking spotwelds will be automatically removed after part replace.

Process HAZ welds The default treatment of HAZ (meshed in) welds is

- undo the weld at the beginning of part replace (reverting any HAZ rings to the native part before deletion of elements)

- remake the weld on the new mesh if Remake connections is ON.

This has the disadvantage that shell mesh may be changed on layers of the weld which are NOT the part being replaced. If Process HAZ welds is switched OFF, the weld and the HAZ rings (they need to be different part to the native part) will not be deleted. If the imported source mesh contains holes which are configured to mate to the outer edge of the HAZ these can be re-attached using the merge function. There will be no remake of the HAZ welds, so there is no disturbance to mesh on other layers.

Non-structural items The nodal merge action will be offered for items such as \*Initial\_velocity, \*Database\_history\_node or \*Load\_node (referenced directly or by conventional node set [see below](part-defining-parts.md#replace4))

Structural items The nodal merge action will be offered for items such as node attached to structral element, node on a \*Nodal\_Rigid\_Body or a \*Boundary\_spc (referenced directly or by conventional node set [see below](part-defining-parts.md#replace4))

Masses Preserve lumped masses (excluding Assign mass) on the nodes of the target part.

Null shells on solid part This is available for single part replace only. If active, when replacing a solid part coated with null shells, PRIMER will delete the old null shells and import those on the source part (if present) into the original null shell part in the target model.

#####  Set control options for part replace

![](../Storage/primer-22-1/primer_links/sect_5/part/opt_set.gif)

Reform node sets and Reform element sets These options apply only to conventional sets. This option ensures that if all nodes of a target part are in a node/element set, all nodes of the new part replacing it will also be in the set. Thus node sets for initial velocity or load can be maintained when the source part is more densely meshed than the target part.

Check S\_NO generate As users may be using this type of set to deliberately control the contents PRIMER will make no attempt to modify the definition. It will however check the contents both before and after the part replace operation and report if there appears to be a discrepancy. Likely modelling errors are if all the nodes of a part were in the set and now some are missing, no nodes of a part were in the set and now some are, or some nodes of a part were in the set and now none are. PRIMER also warns of empty sets and offers to remove them.

![](../Storage/primer-22-1/primer_links/sect_5/part/rep5.gif)

#####  Transfer options for part replace

![](../Storage/primer-22-1/primer_links/sect_5/part/opt_trans.gif)

Transfer section / Transfer Material / Transfer hourglass PRIMER will import the section card, etc from the source model and change the target part to reference it. In the case of the Material card the load curves will be imported also.

Delete obsolete On completion of transfer, PRIMER will remove the original section, material, etc from the target model if it is unused by anything else.

Transfer Initial PRIMER will import any initial stress (or strain) cards which refer directly to elements of the source parts. Note - this will not apply if the \_SET definition has been used in the source model.

#####  Renumber clash options for part replace

![](../Storage/primer-22-1/primer_links/sect_5/part/opt_renum.gif)

By default if any of the nodes/elements of the source part(s) clash with labels that already exist in the target model PRIMER will put these to highest label + 1. In models with set\_generate, where an upper bound is above the highest label of any item, then the upper bound value will count as the highest label.

You may instead set a seed label. Note that if include label ranges are set on completion of part replace the generic relabelling routine will be applied to ant items that are out of their designated include range.

#####  Connection options for part replace

![](../Storage/primer-22-1/primer_links/sect_5/part/opt_conx.gif)

You can set options for remaking welds and adhesive which will apply if the [remake connections](part-defining-parts.md#replace3) option is active. Additionally, you can activate/de-activate the option to reform the free edge geometry for MIG type spotwelds.

#####  Assign mass options for part replace

![](../Storage/primer-22-1/primer_links/sect_5/part/opt_assm.gif)

If the target parts are subject to [Assign mass statement](assign-mass.md#assignmass), PRIMER will (by default) warn of this and offer the option to recalculate/modify/ignore the assign mass. This option can be pre-configured.

The include for the mases created on the imported part will by default be that of the assign mass definition (as it is if we create an Assign mass), you can, however, switch this to be the same include as the nodes of the part.

#####  Replacing an assembly of parts using a model as source

![](../Storage/primer-22-1/primer_links/sect_5/part/assrep0.png)

Multiple part replace as described in the previous secttion, serves well when there is a reasonable mapping between the target parts and the source parts which replace them. In such a case, the remake of old connections in the target model will hopefully give the correct connectivity for the new parts. However, consider the case where the new parts have completely different shape to the old, or where two parts replace one and the welds that join them do not exist in the target model. For such cases, we need a more generic tool which removes a set of parts (the target assembly) from the target model and all their internal connections and references, imports a complete source model which contains not only parts but their internal connections and then weaves the imported items into the target model making connections at the external boundaries of the assembly and reforms the relevant external references. It is not easy to achieve this.

![](../Storage/primer-22-1/primer_links/sect_5/part/asstorep.png)

The assembly to replace is best described using a Part Tree Assembly (in this case the parts shown with zero transparency). However, the parts may be described by any collector, e.g. part-set, group, include file or may simply be selected off the object menu.

![](../Storage/primer-22-1/primer_links/sect_5/part/new_ass.png)

The source (or replacing) assembly is the complete contents of the designated source model. As this contains internal connections, the part geometry may be extensively different from the target model and there is no requirement that the parts map reasonably onto one another. Source parts that match target parts by label will implicitly be put into their correct set. If the source parts are at different labels, PRIMER may have difficulties putting the un-matched parts into the correct part-sets. This will also apply to any new parts. This problem may be obviated by the use of the preferred PART\_SET\_GENERATE instead of conventional sets. For a conventional set, the best automatic maintenance we can do is if all parts of the target assembly are in such a set, then all parts imported are put into the set.

![](../Storage/primer-22-1/primer_links/sect_5/part/assrep1.png)

Action for (PRIMER) Connections - the default is to keep (and remake) only those that connect between the target assembly and external parts. This may be changed to keep none or keep all. The latter would only be appropriate if the source model contained no connections and the part mapping was very close and part labels correlated, i.e. a conventional part-replace operation.

The handling of connectivity is represented schematically in this diagram, where the dark blue target assembly is replaced by the modified pink source assembly.

| ![](../Storage/primer-22-1/primer_links/sect_5/part/assrep4.jpg) | ![](../Storage/primer-22-1/primer_links/sect_5/part/assrep5.jpg) | ![](../Storage/primer-22-1/primer_links/sect_5/part/assrep6.jpg) |
| --- | --- | --- |

Action for \*PART data - If part labels match across source/target model, the default is set data from source , i.e. set the labels for matl, sect, etc on the target part to match that of the source part. If the option import source matl, sect , etc is active the matl, sect, etc card from the source model will be imported. Alternately, user may choose to retain target data which means reference on target part to matl, sect, etc will be unchanged.

| ![](../Storage/primer-22-1/primer_links/sect_5/part/assrep2.png) | ![](../Storage/primer-22-1/primer_links/sect_5/part/assrep3.png) |
| --- | --- |

####  DELETE Deleting parts

The selected parts are deleted. As with COPY the choice of flags is very important:

The DELETE\_RECURSIVE flag determines whether or not the items "owned" by (lower in the programme hierarchy than) the part are handled:

* When **OFF** Only the part definition itself will be deleted, and this will only happen if it is not referenced by anything else, eg elements, that depend on it. If it has any dependants then it will not be deleted.
* When **ON** Its dependants (elements, nodes, ...) will also be marked for deletion. The part itself will still only be deleted if *all* its dependent items are themselves deleted.

The Remove from sets flag determines whether or not a part is barred from deletion by virtue of being part of ("owned by") a SET\_PART .

* When **OFF** If the part is in a set it will not be deleted, even if it has no dependants, although its dependants may be deleted.
* When **ON** If the only thing stopping the part being deleted is its membership of a set then it will be removed from the set and deleted.

####  
 
#### SKETCH Sketching parts
 
The selected parts are sketched in white on top of the current graphics image. Parts are drawn by drawing their constituent elements
 
#### A summary of the selected parts (name, material type, element type and #elements) is listed to the screen.LIST Listing a summary of parts

####  CHECK Checking parts

The selected parts are run through the standard checking routines, and any errors found are summarised on the screen.
 
#### PENCHECK Checking parts for penetrations

| ![](../Storage/primer-22-1/primer_links/sect_5/part/part_pencheck.gif) | The selected parts will be put into a "private" automatic surface to surface contact (or single surface if more than 2 parts) and checked for penetrations. The standard [penetration check panel](checking-a-sliding-contact.md#WhatPenetrationCheckingDoes) is displayed.<br> <br>This will allow you to contour any penetrations between the panels or if you switch mode, to [contour gaps](contouring-panel-gaps-for-sliding-contact.md#gapcheck) between panels.<br> <br>When you dismiss the panel the vapid contact will be deleted. |
| --- | --- |

#### RENUMBER Renumbering part labels

The [standard renumbering panel](standard-category-renumbering-panel.md#505Standardcategoryrenumberingpanel) is mapped for the relevant model, allowing part labels to be updated. To update a single part label it may be easier just to MODIFY it.

**PART\_CONTENTS...**   **** **Adding and removing elements to and from parts**

**![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_4.gif)**

| ![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_cont_1.gif) | Both the CREATE and MODIFY functions use the CONTENTS... option to list part contents, and also to add and remove elements. <br>This maps the content editing sub-window, in which you can<br> <br><br>| ADD\_ITEMS | To specify elements to be added to the part; |<br>| --- | --- |<br>| REMOVE\_ITEMS | Specify elements to be removed from the part. |<br>| EMPTY\_PART | Empty the part of all elements. |<br><br> <br>In both the  **ADD**  and  **REMOVE**  cases the standard object selection menu is shown, and you select (by element, part. model, or anything else) what is to be added or removed. |
| --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_cont_2.gif) | For example in this **ADD** case the user has selected two materials. <br> <br><br>| ADD\_ITEMS | Adds the elements in these materials to the list of elements for this part. |<br>| --- | --- |<br>| SKETCH\_SEL | Sketches the items that have been selected, to confirm they are correct. |<br>| ABORT\_ADD | Aborts the ADD operation. |<br><br> <br>If the part already contains elements then its implicit type is already defined, and only elements of the relevant types are selected for processing.<br> <br>If the part is empty then the first element type encountered in the addition list is used to determine its type.<br> <br>Therefore when creating a new part take care to choose elements of the correct type. However when adding to or subtracting from an existing part you can choose broader categories, eg materials as here, knowing that only the relevant items will be selected for addition or removal.<br> <br>It is legal to select for addition elements that are already in the part: they will not be duplicated since the outcome of an **ADD** operation is a logical (inclusive) OR of the existing and new elements. |

Once the part contains some elements these become visible in the CONTENTS... sub-panel as shown below, and can be scrolled through individually.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_cont_3.gif)

Popup menus are available for every element, giving a list of options that allow you to examine the elements in more detail. Here the user is about to look in detail at shell 415 using the VIEW/LABEL option.

| Note that while creating or editing a part, as elsewhere in PRIMER, you are always working with a "scratch" definition of the part. <br>Elements are not actually transferred to or from this part at this stage, as its permanent definition is not updated until you CREATE or UPDATE it explicitly. At that time you will be required to confirm the transfer of elements between parts, and to determine how elements deleted from this part are to be disposed of. This is described in section PART\_UPDATE below. |
| --- |

##### PART_UPDATE How element addition and deletion is processed on update/create

When part operations have added elements to or removed them from a part this only takes place in the scratch definition, so some extra processing is required when the permanent part definition is updated on CREATE or UPDATE .

This is done via the **ADD/REMOVE ACTIONS** panel, as shown here, which is automatically displayed.

| ![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_update_1.gif) | In this example one shell has been added to this part and one has been removed from it. <br>Before user can apply the change they must determine what to do with the elements flagged for removal. These must be deleted or moved into another part. |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_update_2.gif) | If the deletion option DELETE is chosen the elements and any associated items will be marked for deletion, and you will get the standard deletion confirmation panel. <br>In this example 2 shells are flagged for removal, and they own 8 nodes.<br> <br>These will be deleted from the part once you confirm the action. If you abort the deletion the part update will be blocked as it cannot proceed without corrupting the model. |
| --- | --- |

**PART\_PROPERTIES** **Calculating and displaying structural properties.**

The PROPERTIES... command calculates the mass, C of G and Inertias of the part based on its known element properties. A typical output is shown:

**![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_prop_0.gif)**

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_prop_1.gif)

"Known element properties" means:

* Element topologies must be defined, and node coordinates specified.
* Section definitions for shells and beams must be defined.
* Material definitions must be defined for all types to give density values.

####  Note the following exclusions from property calculations:

Any contributions due to items not in this part, but which are connected to it, are  ***ignored.***  An example would be \* ELEMENT\_MASS  ****    **** and \* ELEMENT\_INERTIA elements which are connected to nodes on elements in this part, but not formally of it.

"Rigid" parts (see **PART\_RIGID** below) for which mass and/or centroid and/or inertia have been externally specified still have their properties calculated on the basis of element properties,  ***not***  on the stipulated values, and also do  ***not***  include the effects of any rigid body merges.

####  PART_RIGID Parts using rigid materials (*MAT_RIGID)

"Rigid" parts in Ansys LS-DYNA are those which use the special rigid material \*  **MAT\_RIGID**   ****   **,** and they have a whole range of special attributes which make them computationally efficient, but which can complicate their use. First a bit of theory - skip this if you already know about rigid bodies:

| | Rigid vs Deformable parts - some theory. |<br>| --- |<br>| >  <br>> "  ***Deformable***  " elements in Ansys LS-DYNA have their mass lumped at their nodes, and at each timestep the forces acting at each node are determined and Newton's 2nd law:<br>>  <br><br> <br><br>>  <br>> <br>> >  <br>> > **F = M.a**   **** (Force = Mass x Acceleration)<br>> >  <br>> <br>>  <br><br> <br><br>>  <br>> is used to determine the acceleration vector of each node, then by integration the velocity and displacement vectors are also found. Strains in elements arise due to differential displacements at nodes, and from these stresses are calculated leading to further forces for the next time-step. Each element can deform independently.<br>> |<br>| >  <br>> "  ***Rigid***  " elements are treated quite differently: the total mass, C of G and inertia for each rigid part is calculated. Then at each timestep the forces acting on the centroid of this part are summed from all sources, and the resultant displacement vector calculated from its total mass and inertia terms. The resulting motion is then extrapolated to each node such that the whole part moves as a "rigid body", with no relative displacement between nodes. All element strains and stresses are zero.<br>>  <br><br> <br><br>>  <br>> This leads to the following special properties of rigid bodies:<br>>  <br><br> <br><br>> <ul> <li>Because in the &quot;rigid&quot; case motions are imposed at each node (the &quot;a&quot; part of Newton&#39;s equation above) by the rigid body formulation, all six degrees of freedom at each node on a rigid body are effectively constrained. Therefore no other conflicting constraints may act upon them. </li> </ul> <br><br> <br><br>> <ul> <li>Although the default is for the properties (mass, etc) of a rigid part to be computed from its constituent elements this need not be the case, and these properties can be overwritten. The <span class="courierbold">_INERTIA </span>keyword appended to a part allows some or all of these properties to be defined. </li> </ul> <br><br> <br><br>> <ul> <li>Rigid parts can be merged together such that one or more &quot;tracked&quot; parts become subsumed into a &quot;reference&quot; part, and all have their motion updated together during an analysis. The * <span class="courierbold">CONSTRAINED_RIGID_BODIES </span>card defines these merges. </li> </ul> <br><br> <br><br>>  <br>> This is not a complete treatment of rigid bodies in Ansys LS-DYNA, and you are referred to the theory, example and user manuals for more information, but it suffices for the purposes of explaining the options below.<br>> | |
| --- |

PRIMER provides some special facilities for processing and checking rigid parts.

**PART\_INERTIA**
**Overriding calculated properties for rigid parts.**

The sub-keyword \_INERTIA appended to a rigid part definition means that some or all of its mass, centre of gravity and inertia tensor terms are externally defined. For such a part no mass, C of G or inertia properties are calculated and the externally supplied values are used.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_iner_1.gif)

Initial velocities may also be defined: if they are not then the part is assumed to have no initial velocity.

PRIMER reports the rigid property fields in the create/edit panel, as shown below, and you are free to update any of these.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_iner_2.gif)

In this example the C. of G. ( **XC, YC, ZC** ), mass ( **TM** ) and inertia tensor ( **Ixx .. Izz** ) have all been defined. The tensor here is in the global system: a local system can be defined by setting **IRCS** to 1, then defining local axes.

**Rigid attributes**  **Calculating and (re-)setting rigid properties and restraints.**

(At present **RESTRAINTS etc** , which will help with the definition of restraints and constraints for this rigid part, is not available. This is required since restraints and constraints applied directly to the nodes of rigid parts do not work, and these must instead be applied to the part itself. In addition rigid body merges, prescribed motion, "stoppers", and so on all merit special attention.)

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_iner_3.gif)

**INSERT PROPS** calculates properties from the elements of this part, (exactly as described in PART\_PROPERTIES above), and allows you to insert some or all of these as the "externally" defined terms above.

Use the popup menu, as shown here, to select which properties to overwrite.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_iner_4.gif)

| Notes on using "rigid" parts  <br>The definition of a "rigid" part is one that uses material type \* MAT\_RIGID . |
| --- |

* You should still give sensible density, Young's modulus and section properties for rigid parts. This is because these values are used when computing stiffness and geometry (for shells) for contact, and also mass, C of G and inertia properties if these are not externally defined.

* \_INERTIA definitions are optional for rigid parts, and if omitted the properties will be calculated from the part's elements as described above.

* \_INERTIA definitions *cannot* be defined for non-rigid parts. PRIMER will allow you to specify them in the editing panel on the premise that you will subsequently change the material type. However checking on UPDATE , or when using CHECK\_DEFN , will flag this as an error.

* The rule that parts can only contain one type of element still holds true for rigid parts. To assemble a rigid body containing different element types create one (or more) parts for each element type, then merge them together using \* CONSTRAINED\_RIGID\_BODIES . The parts need not be physically connected in any way.

* Rigid parts may have common nodes with other non-rigid parts, but they may not share common nodes with other rigid parts *unless* the parts have been merged as above. (Otherwise the common nodes would be subject to multiple constraints.)

* "Extra" nodes, not necessarily attached to any elements, may be added to rigid parts using \* CONSTRAINED\_EXTRA\_NODES . These have their positions updated by the rigid body equations and can be extremely useful for connecting to rigid bodies.

* The Ansys LS-DYNA manual claims that rigid parts for which mass, C of G and inertia properties are defined need not contain any elements. In practice this seems not to work, and it is recommended that you have at least one element in a rigid part, even if it is a dummy that serves no purpose.

The part checking functions detect many errors associated with the use of rigid bodies, but for a comprehensive check it is necessary also to run the \* NODE and \* CONSTRAINED    ****    **** checking functions. These will, for example, detect multiple constraints on nodal degrees of freedom, and attempts to apply "rigid" constraints to non-rigid parts.

The MODEL &gt; CHECK command, which runs all checking routines, will perform these checks for you.

**PART\_REPOSITION**
**Special options for coupled analyses**

This is a specialist option which applies only to deformable parts that are to control the motion of rigid components in a coupled (CAL3D, MADYMO) analysis.

Refer to the Ansys LS-DYNA user manual for more information.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_repo_1.gif)

**PART\_CONTACT** **Specifying part-specific contact parameters for part-based contact**

When part-based contact (using parts or part sets) is used for the "automatic" contact types it can be convenient to have specific contact parameters for each part which supersede the default ones on the \* CONTACT card.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_contact_1.gif)

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_contact_2.gif)

PRIMER allows you to set the \_CONTACT parameter and define its values:

Refer to the Ansys LS-DYNA manual for the exact meaning of these parameters, and also the contact types to which they apply.

**PART\_COMPOSITE** **Specifying composite layers within a part**

The part composite option changes the part panel to allow the user to create layers within the part. The MID and SECID are removed because it is all contained within the part cards

The user can enter layer information at the bottom of the panel, and it is possible to move layers up / down and create duplicate layers using the right-click popup to the right of each layer.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_7.gif)

**PART\_PRINT**
****
**Allows user control over whether output is written into the ASCII files MATSUM and RBDOUT**

PRIMER allows you to set the \_PRINT parameter and define its options. Refer to the Ansys LS-DYNA manual for the exact meaning of these.

**![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_print_1.gif)**

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_print_2.gif)

**PART\_ATTACHMENT\_NODES**  ****  **Allows user control over which nodes are treated as attachment nodes**

PRIMER allows you to set the \_ATTACHMENT\_NODES parameter and define its options. Refer to the Ansys LS-DYNA manual for the exact meaning of these.

**![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_print_1.gif)**

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_print_2.gif)

**PART\_ADAPTIVE\_FAILURE**  ****  **Allows user control over which nodes are treated as attachment nodes**

PRIMER allows you to set up a \_ADAPTIVE\_FAILURE card. Refer to the Ansys LS-DYNA manual for the exact meaning of this card.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_adaptive_failure.gif)

**PART\_MODES**  ****  **Allows user control over which nodes are treated as attachment nodes**  ****

PRIMER allows you to set up a \_MODES card. Refer to the Ansys LS-DYNA manual for the exact meaning of this card.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_modes.gif)

**PART\_SENSOR**  ****  **Allows user control over which nodes are treated as attachment nodes**

PRIMER allows you to set up a \_SENSOR card. Refer to the Ansys LS-DYNA manual for the exact meaning of this card.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_sensor.gif)

**PART\_MOVE**  ****  **Allows user control over which nodes are treated as attachment nodes**

PRIMER allows you to set up a \_MOVE card. Refer to the Ansys LS-DYNA manual for the exact meaning of this card.

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_move.gif)

####  Visualising and Labelling parts

Parts are not drawn explicitly, but PRIMER can draw parts, by drawing their constituent elements, and can also label them by adding part ids to element label strings. Part visibility and labelling is therefore inherent in element visibility, controlled in ENT ity Viewing.

Parts may also be sketched in wireframe mode on the current image using the main and create/edit [SKETCH](define-transform.md#sketch) options above.
 
#### COLOUR Colouring parts![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_colour.PNG)
 
Colours of parts can be set in two ways. The first method (as shown to the right) is to locate the part in the part tree, right click to bring up the edit pop-up menu and then select the desired colour option. You can select:

* A constant colour from the predefined range
* An arbitrary constant colour using ' + '. This allows mixing of a colour from the full range of shades supported by the hardware.
* The DEFAULT colour for this item. The actual colour(s) are a function of item type, i.e. an element with a part id will inherit the colour of its part. Other items are based on their constituent sets or perhaps their labels.
* By Model will apply the colour based on **Model**number modulo 13 (standard PRIMER sequence red, green, blue etc).
* By Include will apply the colour based on **Include file**number modulo 13 (standard PRIMER sequence red, green, blue etc).
* By Assembly , By Material , By Section and By Part colours only apply to element types with a part id.

Alternatively, it is possible to use the [Quick Pick](quick-pick-function.md#quickpick) tool. The same options as above are available which will then be applied to selected parts:

![](../Storage/primer-22-1/primer_links/sect_5/part/fig_part_colour_1.gif)

[Previous](parameters.md)  |  [Next](perturbation.md)