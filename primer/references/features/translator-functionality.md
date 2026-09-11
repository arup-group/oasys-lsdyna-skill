####  Translator Functionality

This section of the appendix is meant to give a brief insight into the methods that the translator uses to process and store data, and the types of SAP2000 data which are understood.

#####  Alternative Coordinate Systems

Alternative coordinate systems are supported by the translator in cartesian, cylindrical and spherical forms. Internally these are all mapped onto a cartesian system. The coordinate system will only be installed in the PRIMER database if it is specifically referenced by an entity in the model; i.e. a nodal restraint.

#####  Joints

Joints (or nodes) can be read into PRIMER in cartesian, cylindrical or spherical coordinates systems (global or alternative). The joint coordinates are always transformed and stored in a global cartesian system. Note that the joint number will be retained in the final Ansys LS-DYNA model.

SAP2000 JOINT = LS-DYNA \*NODE

#####  Local Joint coordinate Systems

These are supported, but only when defined in a cartesian coordinate system. These joint local systems are stored identically to normal coordinate systems.

#####  Restraints

Restraints are supported in either local, alternative or global coordinate systems (cartesian only). If a joint references a coordinate system, the coordinate system will be installed in the PRIMER database.

SAP2000 RESTRAINT = LS-DYNA \*BOUNDARY\_SPC  
SAP2000 COORDINATE SYSTEM = LS-DYNA \*DEFINE\_COORDINATE\_SYSTEM

#####  Constraints

The following constraint types are recognised by the translator - the rest are ignored:

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_08.gif)

Each constraint type will be translated into PRIMER as a nodal rigid body where all degrees of freedom are constrained together for all nodes in the constraint group irrespective of the constraint type. Alternatively, it is possible to turn off and ignore constraints of a specific type.

SAP2000 CONSTRAINT = LS-DYNA \*CONSTRAINED\_NODAL\_RIGID\_BODY

Please refer to the section on [Rigid Links](translator-functionality.md#rigidlinks)etc for more details.

#####  Welds

Welds are supported. If the nodes in the group are within the required distance, the nodes are grouped together in a nodal rigid body.

SAP2000 WELD = LS-DYNA \*CONSTRAINED\_NODAL\_RIGID\_BODY

Please refer to the section on [Rigid Links](translator-functionality.md#rigidlinks)etc for more details.

#####  Patterns

Both gradient and standard pattern types are supported, but are stored in a binary scratch file. These are never installed in the PRIMER database as there is no Ansys LS-DYNA equivalent.

#####  Spring Elements

Spring elements in SAP2000 are roughly equivalent to grounded springs in Ansys LS-DYNA, having only one node.

Spring elements in Ansys LS-DYNA cannot be coupled across freedoms, hence only the diagonal terms of the stiffness tensor of a coupled spring are translated. Each different component is translated as an individual element.

A new node is created adjacent to the original node. The new coexistent node is then fully restrained using a \*BOUNDARY\_SPC .

The orientation of each spring component is preserved by creating spring-damper orientation vectors ( \*DEFINE\_SD\_ORIENTATION ). The translator will first check to see if an existing vector is parallel to the required direction. If a parallel vector is found it is referenced by the discrete element. Else, a new sd-orientation vector is created.

SAP2000 SPRING ELEMENT = LS-DYNA collection of \*ELEMENT\_DISCRETE s

#####  Mass Elements

Mass elements are translated, and can be defined in global, local or alternative coordinate system space.

The translational mass defined in SAP2000 has directional components. This is not supported in Ansys LS-DYNA, hence the average value is used. Rotational masses are transformed into a global inertia tensor.

SAP2000 MASS ELEMENT = LS\_DYNA \*ELEMENT\_MASS & \*ELEMENT\_INERTIA

#####  Materials

Elastic isotropic materials are the only material type translated into Ansys LS-DYNA (Young's Modulus, Poisson's Ratio, mass density and weight density). All thermal materials are ignored.

SAP2000 MATERIAL = LS-DYNA \*MAT\_ELASTIC

#####  Frame Elements & Sections

######  Frame Sections

*PRISMATIC FRAMES:*  
 
The \*SECTION\_BEAM formulation used for a particular frame section depends on the data available: if the area (A) and the second moments of area (Iss, Itt & J) are present in the SAP2000 ascii file, a Belytschko-Schwer (resultant) beam formulation will be used (note that the shear area defaults to half the geomertic area, and that if different values of shear area are defined for the 's' and 't' axes an average value will be used), else the section geometry will be used to define a Hughes-Lieu (integrated) beam formulation. If there is inadequate data for either resultant or integrated formulations are present, then the translator will error terminate. Also note that for the more complex section shapes, if a Hughes-Lieu beam section is created, the associated \*INTEGRATION\_BEAM cards will also be generated. The component ( \*PART ) will tie together the frame section name, the newly created section card, and the associated material.

*NON-PRISMATIC FRAMES:*

These frame sections are defined using existing frame sections. In these cases two new parts are created which reference the existing beam section definitions. Both parts will use the same frame section name.

SAP2000 FRAME SECTION = LS-DYNA \*SECTION\_BEAM (& \*INTEGRATION\_BEAM where required) & \*PART

######  Frame Orientation

The beta angle system of orienting frame elements in SAP2000 is converted into a third node system in Ansys LS-DYNA. In the process of conversion the element axes become reversed (i.e. if the strong axis direction in SAP2000 was axis 1, then it would become axis 2 in Ansys LS-DYNA). This does not cause concern though as all frame elements will retain the correct orientation with respect to strong and weak axes.

######  Rigid Offsets

Where horizontal beams interface with vertical columns, the centre line geometry attributed to a one dimensional beam element is incorrect. The horizontal beam elements should terminate at the outer face of the vertical column. To facilitate this rigid links are created.

These rigid offsets are modelled in Ansys LS-DYNA as groups of rigid beam elements with small mass. Each rigid offset group will have its own component part. In this way the separate rigid offset groups can move independently. If the master node (i.e. the node at the centre of the rigid offset) has any kind of restraint associated with it, the rigid material definition associated with that particular rigid offset will also be restrained in a similar manner. However, these master node restraints must be in the global axis system.

The proximity check distance can be used as a model checking feature.

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_09a.gif)

If any two nodes in the same rigid offset are further apart than the specified distance a warning will be printed in the dialogue box.

Please refer to the section on [Rigid Links](translator-functionality.md#rigidlinks)etc. for more details on how the rigid offsets are dealt with.

######  End Releases

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_10.gif)

End releases are used to 'release' a selection of degrees of freedom at the end of a frame element. Note that if the frame element has a rigid offset, the end release will occur at the point that the flexible region of the frame attaches to the rigid region (i.e. at the free end).

The translation of end releases into Ansys LS-DYNA will vary according to which translation option is selected in the DEFAULTS panel.

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_11.gif)

1. Simply ignore the end release definitions.
2. Use the 'simple' definition of end releases. This is a fairly crude translation, but utilises the fact that the majority of end releases are simple pins; i.e. all rotational freedoms (rx, ry & rz) are released leaving the translational freedoms fixed (ux, uy & uz). The simple end release definition separates the released joint into two coexistent nodes. These two nodes are then connected by a single translational 
spring with a stiffness defined on the DEFAULTS panel. 

 ![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_12.gif)

The spring has no orientation vector and merely holds the two nodes together while allowing the two nodes to rotate freely relative to each other. This form of end release, while fast to translate and simple to understand, it does not read which freedoms have been released: it always assumes a pure pin.
3. The 'complex' end release definition is by far the most correct method, but it can become very slow and difficult to implement. With this in mind, it should not be used where there are a huge number of end releases to be translated in the model. The end release itself is a combination of linear constraint equations, nodal restraints and oriented discrete springs. The following table outlines what is used where and when:
    * ux, uy & uz are not released; 
The LS-DYNA \*CONSTRAINED\_LINEAR keyword is used to create a set of linear constraint equations between the two coexistent nodes linking all translational freedoms. Note that if either of the two nodes is included in any rigid part or an existing constraint a series of oriented springs will be used - see below.
    * rx, ry & rz are not released; 
As type (I) but for all rotational freedoms.
    * uy & uz are not released, ux is released; 
One translational spring defined to work in the plane normal to the axis of the beam.
    * ry & rz are not released, rx is released; 
One rotational spring defined to work in the plane normal to the axis of the beam.
    * rx is not released; 
A nodal restraint is used to prevent the node on the beam side of the pair of nodes from twisting. A coordinate system is created to ensure that the restrained freedom is aligned with the axis of the beam.
    * all other combinations; 
Translational or rotational springs using spring-damper orientation vectors are used to hold the non-released freedoms together.

Note that where oriented springs (using spring-damper orientation vectors) or the coordinate system in the fifth case are used, the program searches through all existing vectors or coordinate systems to locate a parallel vector or coordinate system. Only if a parallel vector / system cannot be found will a new vector / system be created. This searching for parallel vectors can take a considerable amount of time on large models.

######  Frame Splitting

It is often desirable to split a frame element into a number of beam elements. Where splitting occurs one of the beam elements within the frame will use the element number of the original frame element. Also the two extreme node numbers will be retained.

Frames can only be split into an even number of beams, and the mid node will always be equally spaced between the two end nodes even if different length end releases are specified for the frame.

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_13.gif)

The geometry of the split frame is shown above. As shown in the figure beams are oriented in such a way that the 'end 2' node of a beam always occurs at the extreme end of the frame. This is because seismic beams only develop plasticity at end 2. Hence if a seismic beam is split, it can develop a plastic hinge at both ends. The necessity of having end 2 nodes at the extreme ends of the frame requires the local beam coordinate system to be swapped halfway along the frame. Note that the local 'z' axis (generally the strong axis) is maintained in the same direction whilst the local 'y' axis is modified.

Defining which beams are to be split is done on a component by [component basis](frame-translation-options.md#frame_translation). Each frame component can be split into a different number of beam elements. The basic choices are as follows:

1. Split into 'nseg' (or nearest even number), as defined for the frame element in the SAP2000 ascii deck.
2. Split into the default number of beams which is set on the SAP2000 [main panel](main-translation-panel.md#main_panel). 

 ![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_14.gif)
3. Split into an arbitrary number of beam elements as defined on the [frame translations options pane](frame-translation-options.md#frame_translation)l.

A fourth option 'no split' can be specified. If this option is selected the frame component will not be split.

Non-prismatic sections which are split require an additional piece of information to be defined: what section properties are to be used. The choices are:

1. Use the section properties from end one for all beams.
2. Use the section properties from end two for all beams.
3. Interpolate the section properties along the length of the frame.

This option is a global parameter set for the whole model on the SAP2000 [main panel](main-translation-panel.md#main_panel).

Where the section data is interpolated from end one to end two, entirely new parts and sections are created. Clearly this has the potential for becoming very messy if the frame is split into too many beams each with their own section.

######  Frame Material Conversion

The basic translation converts all frame elements into linear elastic beams. However, two further options are available:

*Seismic beams (only available for Belytschko-Schwer beam formulations)*

A new \*MAT\_SEISMIC\_BEAM material is generated and the plastic data calculated from the yield stress and the section geometry data defined in the SAP2000 ascii deck. If no geometry data is present then default unit values will be used for the plastic data which must be modified prior to running the analysis.

*Cables*

Frame components flagged as cable elements will be turned into discrete spring elements. Currently the spring materials are linear elastic with stiffness as the product of Young's modulus and cross sectional area. Each element, however, has a scale factor on the stiffness of the inverse of the element length. Hence the element stiffness is EA/L. Note that cables cannot be split and that end releases are ignored as they have no meaning in this context.

######  Mass and Self Weight

Additional non-structural mass is distributed applied to the model as lumped mass elements at the free ends of the frame, and where the frame is split also at all mid-nodes.

A similar method is used to distribute the self-weight and additional non-structural self-weight. Point loads are created at the free-ends of the frame and, if split, at the mid-node. If the frame has been split then the point loads will be arranged such that the correct moment will be achieved at the free ends of the frame - refer to the loading section for more details on this arrangement.

#####  Shell Elements & Sections

######  Shell Sections

The SAP2000 'Shell' and 'Membrane' formulation are identically translated into Ansys LS-DYNA. However the 'Plate' formulation does not exist. In this case the translator employs a standard shell formulation.

SAP2000 SHELL SECTION = LS-DYNA \*SECTION\_SHELL

######  Shell Elements

Shell elements are directly translated into Ansys LS-DYNA, although the topology for the element has to be modified. The same element number is used in Ansys LS-DYNA as for SAP2000.

SAP2000 SHELL ELEMENT = LS-DYNA \*ELEMENT\_SHELL

######  Self Weight

The weight associated with each node on the shell element is estimated, and applied to the element as a series of point loads in the negative z-direction.

#####  Solid Elements & Sections

######  Solid Sections

SAP2000 does not define any section properties for solid elements. Instead all the 'section' data is lifted directly from the material definition. Ansys LS-DYNA requires that these sections are defined.

SAP2000 [SOLID SECTION] = LS-DYNA \*SECTION\_SOLID

######  Solid Elements

Solid elements are translated directly into Ansys LS-DYNA, although the topology of the element has to be modified. The shorthand definition of the solid element is also supported by the translator.

SAP2000 SOLID ELEMENT = LS-DYNA \*ELEMENT\_SOLID

######  Self Weight

The weight associated with each node on the solid element is estimated, and applied to the element as a series of point loads in the negative z-direction.

#####  Nllink Elements & Nlprop Data

######  Nonlinear properties (Nlprop)

The nonlinear properties are defined in terms of shear properties are non-shear properties. The various property types and their Ansys LS-DYNA counterparts are list below:

SAP2000 NLPROP (no type) = LS-DYNA \*MAT\_SPRING\_ELASTIC (stiffness = ke, effective elastic stiffness from SAP2000 definition) (shear & non-shear)

SAP2000 NLPROP (damper) = LS-DYNA \*MAT\_SPRING\_ELASTIC (stiffness = ke, effective elastic stiffness from SAP2000 definition) & \*MAT\_DAMPER\_VISCOUS (damping coefficient = c, from SAP2000 definition) (shear & non-shear)

SAP2000 NLPROP (gap & hook) = LS-DYNA \*MAT\_SPRING\_ELASTIC with clearance defined on the discrete section card (stiffness = ke, effective elastic stiffness from SAP2000 definition) (shear & non-shear)

SAP2000 NLPROP (plastic1) = LS-DYNA \*MAT\_SPRING\_ELASTIC & \*MAT\_SPRING\_ELASTOPLASTIC (These two springs combine to give a kinematic hardening hysteresis response. The elastic spring controls the post-yield stiffness and the elastoplastic spring defines the yield strength. The pre-yield strength of the elastoplastic spring when added to the elastic spring gives the correct pre-yield stiffness, ke. The post-yield stiffness of the elastoplastic spring is zero.) (shear and non-shear)

SAP2000 NLPROP (isolator1) = LS-DYNA \*MAT\_SPRING\_ELASTIC (stiffness = ke, effective elastic stiffness from SAP2000 definition) (non-shear) LS-DYNA \*MAT\_SPRING\_ELASTIC & \*MAT\_SPRING\_ELASTOPLASTIC (as for 'plastic1' type) (shear)

SAP2000 NLPROP (isolator2) cannot be translated

######  Nonlinear Link Elements

A single nllink element will be translated into a collection of discrete elements using spring-damper orientation vectors to imitate the local coordinate system to the nllink element.

The first element discrete element defined will use the same element number as the nllink element.

Where zero length single node elements have been defined in SAP2000, the translator will generate a second node and then fully restrain it.

SAP2000 NLLINK = LS-DYNA \*ELEMENT\_DISCRETE (collection of ...)

######  Mass, Inertia & Self Weight

The mass associated with nllink elements can be defined for each translational direction. This is not possible in Ansys LS-DYNA, so the average mass is used and distributed evenly between the two nodes defining the nllink element.

The inertia of the nllink element is converted into a global inertia tensor and then evenly distributed between the two nodes defining the nllink element.

The self weight of the nllink element is distributed evenly between the two nodes and represented as point loads.

#####  Loading

Each load case defined in the SAP2000 model can be individually selected or deselected. Each selected load case has a scale factor applied to it (default = 1.0) for the translation. The translator will then take all load cases that have been selected and apply them to the model. A global scale factor is also defined which is applied to every load in the model on top of the individual scale factor discussed previously. Note that each load case that is selected will be associated with its own load curve. This enables the scale factor on each load case to be changed at a later date.

The self weight load case is a special case. The self weight loading can either be applied to the model as a series of point loads which have been defined according to the self weight of each element in the model (which may or may not be equivalent to the product of mass and gravitational acceleration), or as a acceleration body load to the whole structure ( \*LOAD\_BODY\_Z ). If the later is the case, the scale factor on the self weight load case should be the gravitational acceleration parameter (i.e. 9.81 m/s2). The point loads should need no additional scale factor as these will already be defined in terms of structure weight.

######  Joint Forces

These are simple point loads. Each point load defined will be split into a global load vector comprising of up to three point loads, each parallel with a global axis.

SAP2000 JOINT FORCE = LS-DYNA \*LOAD\_NODE\_POINT

######  Joint Displacement

These are nodal displacement boundary conditions. Each displacement boundary condition is split into a global load vector, each non-zero component of the vector having a separate displacement boundary condition.

SAP2000 JOINT DISPLACEMENT = LS-DYNA \*BOUNDARY\_PRESCRIBED\_MOTION\_NODE

######  Spring Displacement

As for Joint Displacement, but for the grounded node of a spring element.

SAP2000 SPRING DISPLACEMENT = LS-DYNA \*BOUNDARY\_PRESCRIBED\_MOTION\_NODE

######  Concentrated & Distributed Span Loads

All frame loading types are supported by the translator, converting the applied load into a global load vector. Each non-zero component of the load vector is then split into a collection of point loads.

If the frame element to which the load is applied has not been split, two point loads are applied to the free ends of the frame. The point loads are equal and opposite to the reaction force the beam would create if it were fully fixed.

If the frame element has been split then the loading arrangement attempts to ensure that the correct moment is achieved at the free ends of the frame. A point load and moment are applied to the mid-node of the frame which create the same end moment conditions as the original loading condition. Two additional point loads are used to balance up the total load on the frame.

![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_15.gif)

SAP2000 SPAN LOADING = LS-DYNA \*LOAD\_NODE\_POINT

######  Uniform Shell Loading

All forms of uniform shell loading are translated. The applied load is split into a global load vector. The area associated with each node on the shell element is estimated and for each non-zero component, a point load is applied to each node on the element.

SAP2000 UNIFORM SHELL LOADING = LS-DYNA \*LOAD\_NODE\_POINT

######  Surface Loading

The surface loading for shells (faces and edges) and solids (faces) is applied normal to the face of the element. This load is then converted into a global load vector and a point load applied to each node on the face / edge for each non-zero component.

SAP2000 SURFACE LOADING = LS-DYNA \*LOAD\_NODE\_POINT

######  Dynamic Relaxation Loading

If dynamic relaxation is required then an additional set of loads will be created for dynamic relaxation only, except for any displacement loads. The load curve used to apply dynamic relaxation loads will ramp the loading from zero to the full working load. This ramping period is used to prevent dynamic shock to the model caused by instantaneous application of loading.

#####  Rigid Links and Rigid Bodies

A node in Ansys LS-DYNA cannot be a member of more than one rigid body or constraint system. If such a case did occur, Ansys LS-DYNA would fail to initialise. To avoid such a problem the translator performs a check to ensure that no nodes occur in more than one nodal rigid body or offset. If a clash is detected, then the two rigid groups of which the offending node is a member will merged into one new rigid group.

[Previous](load-translation-options.md)  |  [Next](iges-file-format.md)