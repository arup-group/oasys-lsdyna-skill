####  Assembly Creation and Editing

| | Label and title | An assembly must have a label. Labels are "private" to this dummy, thus in a model with 2 dummies each may have assembly label 1 and they will not clash.<br> <br>A title is optional but is recommended. |<br>| --- | --- |<br>| Restraints and coord system | Assemblies may have optional restraints. These are used during "free drag" positioning to constrain movement.<br> <br>If a coordinate system is defined restraints are in that system, otherwise they are in the global system. |<br>| Part sets and parts | An assembly must contain at least one part, and any number may be used in any permutation of explicit parts and part sets. It is legal to define a part more than once (e.g. in a set and explicitly): it will only be used once.<br> <br>See "[Good modelling Practice](assemblycreation-and-editing.md#gmp)" below for some further rules and suggestions. |<br>| Node sets | Assemblies may also contain node sets. These can be a useful way of "associating" nodes with an assembly since all nodes in the set will be moved with it. |<br>| Contact | Contact between dummy assembly and structure.<br> <br>Any number of part sets of "structure" may be specified, with an optional box to limit the volume of space in contact.<br> <br>Tk factor is a factor on true thickness used for contact, and Active enables contact to be turned on/off at will. (It can also be switched on/off on the positioning panel.)<br> <br>This is not a true \*CONTACT definition, but rather a pseudo contact used during positioning only. | | ![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_edit_2.png) |
| --- | --- |

| Child assemblies | Dummies assume an explicit parent -&gt; child hierarchy, and an assembly may have any number of children (or none).<br> <br>Child assemblies are connected at a point (node #1) on the parent. Rotation axes are defined by one of:<br> <ul> <li>A <a name="jstf"> </a>joint stiffness (<span class="courierbold">*CONSTRAINED_JOINT_STIFFNESS</span>) giving local axes and stop angles. </li> <li>A second node #2, limiting rotation to about the axis N1N2. </li> <li>Neither stiffness nor N2, leaving rotation axes implicitly global. </li> </ul> <br>The &lt; DoF code&gt; is also used at joints which only permit rotation about a single axis to limit rotation to that axis. |
| --- | --- |

##### Child assemblies with Circular Connections

Options PIN, LINE and HINGE are designed to permit assemblies to be "children" of multiple parents. This works as follows:

![](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_edit_3.png)
 
* If an assembly is to be connected to two or more parents, they must set the &lt;DoF code&gt; to be PIN for a single point connection node A, or LINE or HINGE for a two noded connection using nodes A and B.

* In the image below Parent P has two children C1 and C2 which is normal for a Dummy. However grandchild G has two parents C1 and C2. This means that all the C1, C2 and G must be treated as a composite rigid body that rotates about Node A on Parent P, and must not be allowed to rotate independently.
* Because this implies circular and/or multiple connections, until PRIMER V20.1, it was not possible to position these assemblies using the **[Rotate Angles](rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes.md#rotate_angles)**method using simple "rotation about a single parent node" trigonometry and therefore this option was greyed out for them, and the positioning of these assemblies was only possible by **Drag assembly**or **Move points**methods. But from PRIMER V21.0, it is made possible to position the assemblies with multiple parents by the  method as well and the rotation of these assemblies happens in mechanism style.

![closed_loop](../Storage/primer-22-1/primer_links/sect_6/dummies/fig_posn_16.jpg)

#####  Visualising assemblies

An assembly is made up from standard components, parts and sets. To visualise an assembly in isolation use the standard Only button at the top of the panel, which will blank everything except for this assembly.

#####  Assembly contents and special rules for deletion

It is normally the case that Dummy "tree files" are made by specialist suppliers and that users should not change the dummy contents. Therefore the following exceptions apply to PRIMER 's normal deletion logic when using [REMOVE, DELETE\_UNWANTED](delete-unwanted.md#641DELETEUNWANTED).

* Parts, Part sets and Node sets used to define the structure of a Dummy assembly are "locked" against deletion. 
 
However part sets used to define contact between a Dummy assembly and structure are not locked, since removing them will not affect the validity of the assembly structure.
* This introduces an inconsistency in that the  ***contents***  of Part and Node sets used to define a Dummy assembly, ie the individual parts and nodes, are not locked by standard PRIMER deletion rules which allow items to be removed from sets. 
 
From V11 onwards, where locking of set contents is available (see [Locking set contents against deletion](set-defining-sets.md#lock_contents)) this inconsistency is removed because the contents of these Part and Node sets are also locked against deletion.

Note that there is a distinction between the treatment of Dummy and Mechanism assembly contents: Mechanism assemblies do not "lock" their contents in this way.

#####  Good Assembly modelling practice

When defining assemblies the following rules should be borne in mind:

* **It is illegal for a part to be defined in more than one assembly.**  
 
The reason is obvious: since moving an assembly will move a part then having the part in two assemblies would cause conflicting movements at the assembly nodes. This will be detected and flagged as an error during the pre-positioning check.
* **It is illegal for a node in assembly A also to be defined in assembly B - with three exceptions.**  
 
The reason is the same as for parts above: a node may not have more than one possible source of motion, otherwise its position will be updated wrongly. This will be detected during pre-positioning checks and flagged as an error. 
 
However there are three important exceptions to this rule: 
   ****  
    1. **It is legal to have "extra nodes" on rigid parts in assembly A when their parent part is in assembly B.**  
 
This is a special case that is detected during the pre-positioning checks, and the normal PRIMER logic that moving a rigid part also moves any "extra" nodes is not applied in this case. This permits joints to articulate during positioning, but then to be locked during analysis in their "as positioned" configuration. (However where extra nodes on a part are in the same assembly as the part they will be moved in the normal way.)
    2. **It is also legal to have a connected rigid part (from a rigid body merge) in assembly A when its master part is in assembly B.**  
 
This is another special case, like "extra nodes" above, that is detected and handled differently during positioning. This is again to permit articulation during positioning but locking during analysis.
    3. **Parts made of null shells (Material type 9) may legally cover multiple assemblies, but must not be defined in more than one.**  
 
Many dummies are covered by a "skin" of null shells that allow contacts to track across the gaps between the various assemblies. Inevitably these will include nodes common to assemblies A and B at such a gap, and may in fact extend further over the dummy model so that a single null shell part covers several assemblies. 
 
The pre-positioning check detects these parts, which must be shells referencing material type 9, and excludes them from the positioning algorithms - effectively making them non-structural in this context. But see (4) below for an exception. 
 
However if any nodes on these null shell parts are not also "structural" nodes on assemblies their positions will not be updated during positioning. This would be bad modelling practice anyway since all nodes on null shell parts need to be attached to real structure in order to give them stability during the analysis and stiffness for the contact.
    4. **An exception to an exception (3) is made for "isolated" null shell parts, which *are* moved with their assembly**  
 
Experience has shown that some modellers include target markers on their dummies made up of pairs of null shell parts, and they attach these using tied contacts. Exception (3) above resulted in these target markers being left behind when an assembly was moved because they did not share any structural nodes with the assembly. 
 
Therefore the "null shell" test has been extended and these parts  ***are***  moved with the assembly if they do not share any structural nodes with it. 
 
The "is it isolated?" test needs to be quick as it is invoked during dragging operations, so it is not fool-proof and sufficiently devious modelling practice may defeat it. Users taking advantage of this should ensure that the null parts used for "isolated" parts are unique to their assembly. 
 
   ****
* **Coordinate systems used for Joint Stiffness definitions must be defined by nodes in the relevant assembly.**  
 
When defining coordinate systems for Joint Stiffnesses it is important that these use nodes (\*DEFINE\_COORDINATE\_NODES) on the assembly to define their axes, otherwise they will not be updated as the assembly moves and the joint axes will not rotate correctly. PRIMER can visualise coordinate systems and joint stiffnesses, but some modellers add a triad of rigid beams at these locations to visualise coordinate systems during post-processing.

Further hints on good modelling practice may be found in the section on [Rules for "tree" files in Appendix B.i](rules-for-tree-files.md#tree_rules).

[Previous](creating-and-editing-dummies.md)  |  [Next](point-creation-and-editing.md)