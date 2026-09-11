##  Appendix B.i: Dummy "Tree" File Format

A "dummy" is not a special model, rather it is a normal model in which the connectivity of parts is defined in a specific hierarchy using a "tree" file.

The following terminology needs to be understood:

| **"Dummy"** | Is the name of a model, or subset of a model, which constitutes a connected series of assemblies which can be manipulated in a hierarchical fashion. In fact it need not be a dummy (occupant) at all: any mechanism could be represented in this way so long as its assemblies form a discrete "tree" (or trees). |
| --- | --- |
| **"Assembly"** | Is one or more PARTs and/or SETS of parts. These are manipulated as a rigid body for the purposes of positioning, although they may contain both rigid and/or deformable materials. Assemblies are connected via JOINT\_ STIFFNESS definitions in a strictly defined parent/child hierarchy. |
| **"Point"** | A location attached to an assembly that can be used to drive mechanism-style positioning, and also to impose restraints at a point. |
| **"Tree"** | Assemblies must be connected in a strict hierarchy. The "root" assembly is grand ^N^-parent to all other assemblies, which are arranged in a parent/child order. For example the pelvis is parent to the upper leg, which in turn is parent to the lower leg, with the foot being the youngest child. |
| **"Parent/child"** | This terminology is used to represent the relationship between assemblies. A "child" assembly always follows the motion of its "parent", to the &lt;nth&gt; generation. For example waggling the upper leg also moves the lower leg and foot, all in a rigid-body sense. <br> <br>An assembly may have: <ol> <li>Any number of children, </li> <li>Zero Parent assembly (such an assembly is call a &quot;Root&quot; assembly). A child with no parents (an orphan) is usually the &quot;root&quot; of a dummy, though it is not illegal to have more than one &quot;orphan&quot; in a model, it is not advisable to do so.. </li> <li>Only one parent with the regular degrees of freedom as Rotational directions along any or all of X, Y and Z axes. </li> <li>Zero, one or more parents with degrees of freedom as PIN (rotational freedom about a node) or HINGE/LINE (rotational freedom about an axis defined by two nodes). It is illegal to have a parent assembly connection with PIN/HINGE or LINE degrees of freedom <strong>without </strong>having a parent assembly with the regular X/Y/Z degrees of freedom. </li> </ol> |
| **** |

A "tree" file is made up of an extra set of keywords, and one such file for each dummy in a model is appended to the normal Ansys LS-DYNA (keyword) file after its \*END card, where it is ignored by Ansys LS-DYNA, but read by PRIMER. A model may contain any number of dummies, and each must have a unique label within that model.

The purposes of appending the "tree" section to the analysis input deck are to try to make sure that a dummy and its tree data don't get separated; that any renumbering which takes place is consistent in both dummy and tree file; and to permit adjustment of a dummy in a complete deck without having to go through the rigmarole of reading it in and repositioning it from scratch each time.

![](../Storage/primer-22-1/primer_links/appen_2/fig_app_2a.gif)

This figure illustrates "tree" file usage by showing an exploded diagram of the arm assemblies in a typical dummy. The assemblies are "upper arm", "elbow", "lower arm", "wrist" and "hand"; and the joint stiffnesses between them are shown.

It can be seen from the geometry of the connections that in this particular dummy, rotation can only take place about one axis at each joint, and that the coordinate systems of the joint stiffnesses are aligned to these. It is also clear that angular rotations must be limited, which is done by using "stop angles" in the joint stiffnesses.

![](../Storage/primer-22-1/primer_links/appen_2/fig_app_2b.gif)

Here the connection between wrist and hand has been enlarged (still artificially separated) to show its organisation in more detail.

Clearly rotation of the hand can only take place in the "up and down" direction, which is about the local Z (Psi) axis of the joint stiffness.

The two sides of the joint stiffness definition can be seen in terms of their coordinate systems, and it is clear from this image that the following sensible modelling rules have been followed for them:

| (1) | Both coordinate systems have their origins at the same point in space. Ansys LS-DYNA does not require this, but it is difficult to visualise a connection clearly unless it is the case. |
| --- | --- |
| (2) | Both coordinate systems are defined in terms of nodes attached to parts on their respective assemblies: either structural or extra nodes on rigid bodies. In this way the coordinate systems move with their parent parts. |
| (3) | The node at the origin of the "parent" coordinate system on the wrist is the designated node about which the hand rotates. Again, not required but sensible. |

![](../Storage/primer-22-1/primer_links/appen_2/fig_app_2c.gif)

Here the NOTATE option in VIS\_2 has been turned on to add to the joint stiffness graphics their loadcurves and stop angles. This shows that parameters have only been defined for rotation about local Z (Psi), that the "stop angles" are +/- 90 degrees, and that only damping is applied (so the initial angle between the coordinate systems generates no moment).

There is a separate revolute joint, not shown, through the wrist which constrains rotation to this axis only, so the joint stiffness does not need to restrict others. However to prevent PRIMER allowing positioning about axes other than Psi the "tree" file restricts rotation at this joint to local Z (axis 3). Here is the fragment of the tree file defining wrist to hand connection:


```
*ASSEMBLY
        16Wrist left
         1         0         1
         9
$ Child #1 is the left hand (Assy #18, Joint stiff #52, rotates
$ about node #3980, rotation restricted to Z (3) axis)
        18        52      3980         3
```


From release 13 onwards the rule that "nodes used to define the coordinate system (used as the nodes in \*DEFINE\_COORDINATE\_SYSTEM\_NODES) on the parent side of a joint stiffness definition must be in the parent assembly" has been relaxed, and these nodes may also be in any assembly that is an ancestor of the child assembly. This change has been made since some dummies have been modelled in the following way:

![](../Storage/primer-22-1/primer_links/appen_2/fig_app_2d.png)

This method of modelling means that angles for the core Pelvis, Torso and Head assemblies are always reported as "relative to global" rather than "relative to parent". This can make setup easier for some models when comparing to test since measuring the angle of an assembly with respect to some global reference, typically vertical, is easier than measuring relative to some other assembly.

This makes no difference to the way in which dummies work in PRIMER , only to the values of the reported angles.

The syntax of a "tree" file is as follows. All cards other than \*DUMMY\_START and \*DUMMY\_END are optional, and may appear in any order within these two \_START/\_END cards.

**\*DUMMY\_START &lt;Label&gt; &lt;Title&gt;**

The following line is **optional** .

*&lt;move\_xsec&gt;*

| &lt;Label&gt; | I10 | Must be unique within a model, as this identifies the dummy. |
| --- | --- | --- |
| &lt;Title&gt; | A70 | An arbitrary character string describing the dummy. |
| The line below is  ***optional***, it was added in release 12. If it is omitted data fields will be given their default values. |
| &lt;move\_xsec&gt; | I10 | Default = 1 | Whether to move \*DATABASE\_CROSS\_SECTION\_PLANE definitions with parts in an assembly with the assembly as it is positioned. <br> <br>1 = Yes, 0 = No. |

\*H\_POINT 
&lt;Hx&gt; &lt;Hy&gt; &lt;Hz&gt; *&lt;Root Assembly label&gt; &lt;Root initial X angle&gt; &lt;Root initial Y angle&gt; &lt;Root initial Z angle&gt;*

The following 3 lines are **optional** . Either they must be omitted, or all 3 lines must be supplied:

*&lt;XX Cosine&gt; &lt;XY Cosine&gt; &lt;XZ Cosine&gt; &lt;YX Cosine&gt; &lt;YY Cosine&gt; &lt;YZ Cosine&gt; &lt;ZX Cosine&gt; &lt;ZY Cosine&gt; &lt;ZZ Cosine&gt;*

| &lt;Hx&gt; | E10.0 | X coordinate of dummy H-Point |
| --- | --- | --- |
| &lt;Hy&gt; | E10.0 | Y ditto |
| &lt;Hz&gt; | E10.0 | Z ditto |
| *&lt;Root assembly label&gt;* | I10 | ***Optional***  : The label of the assembly below that will be treated as containing the H point, and to which initial dummy orientations will apply.<br> <br>If this is omitted the H-Point will be assigned automatically to the lowest numbered assembly that has no parent. |
| *&lt;Initial X angle&gt;* | E10.0 | ***Optional***  : Initial rotations about [X,Y,Z] axes for root assembly (degrees)<br> <br>By default the root assembly is assumed to have initial angles [0,0,0], and this is what will appear in the positioning panel if nothing is defined here, but you can optionally set initial angle values to be used instead. These will not affect the orientation of the root part, rather they can be considered to be initial numeric offsets.<br> <br>These angles will be updated when the dummy is positioned. |
| *&lt;Initial Y angle&gt;* | E10.0 |
| *&lt;Initial Z angle&gt;* | E10.0 |
| The following 3 rows of **optional** direction cosines were added to define the orientation of the Dummy as a whole.<br> <br>They will only be written out if the Dummy's cosines are not a unit matrix, which will only be the case of the Dummy has been rotated either via Orient or by using the Rotate or Reflect options in the Dummy positioning panel itself. (Positioning individual Dummy assemblies will not modify these overall Dummy cosines.)<br> <br>If they are not present a set of unit cosines is assumed, implying that the Dummy as a whole has not been rotated. |
| *&lt;X Cosines&gt;* | 3E20.0 | The X row of cosines: XX, XY, XZ |
| *&lt;Y Cosines&gt;* | 3E20.0 | The Y row of cosines: YX, YY, YZ |
| *&lt;Z Cosines&gt;* | 3E20.0 | The Z row of cosines: ZX, ZY, ZZ |

The H-Point need not be defined. If this definition is absent then [0,0,0] is assumed. Rotations of any orphan assemblies, generally the root assembly, take place about the H-Point.

\*UNITS 
&lt;mass unit&gt; &lt;length unit&gt; &lt;time unit&gt;

| &lt;mass unit&gt; | A10 | A valid mass unit name: kg, Te, lb |
| --- | --- | --- |
| &lt;length unit&gt; | A10 | A valid length unit name: m, mm, in |
| &lt;time unit&gt; | A10 | A valid time unit name: s |

Units may be upper or lower case, anywhere in the A10 field. Units need not be consistent, e.g. kg, in, s is legal (if daft!). If this definition is absent then no units are assumed and the dummy is dimensionless.

\*AXES 
&lt;Coord system label&gt;

| Csys label | I10 | (Optional) An existing \*DEFINE\_COORDINATE system label. |
| --- | --- | --- |

This defines a local axis system for the dummy, which is used when calculating the rotation angles of the "root" part. If this definition is absent then the internal reference axes of the dummy will be aligned with the global Cartesian axes when initially read in, so this card may be omitted if you want your root part's angles to be expressed as rotations about the global axes.

Some sort of reference system for root assembly rotations is required since this needs to rotate with the dummy if the whole dummy is oriented, otherwise root angles would change in a confusing manner.

\*DYNA\_POSITION 
&lt;node\_1&gt; &lt;node\_2&gt;

| Node label &lt;node\_1&gt; | I10 | Node at base of dummy neck |
| --- | --- | --- |
| Node label &lt;node\_2&gt; | I10 | Node on dummy left or right hip |

These nodes are used during the "Dyna method" positioning process. This keyword may be omitted if only PRIMER positioning is to be used.


```
*ASSEMBLY
<label>     <Title>
<#SET_PARTs> <#PARTs> <#children>  <#SET_NODES>  <locked>   (<csys>) <#contacts> <dyna_pos>
<SET_PART_1> <SET_PART_2> ...      <SET_PART_n>
<PART_1>     <PART_2> ...          <PART_n>
<SET_NODE_1> <SET_NODE_2> ...      <SET_NODE_n>
<Part set>   <Box>      <tk factor><active> ... (1 line per contact)
<CHILD_1>    <JSTF_1>   <NODE_1a>  <dof codes>  (<NODE_1b>) (<soft angles>)
(<min_X>     <max_X>    <min_Y>    <max_Y>       <min_Z>     <max_Z>)
<CHILD_2>    <JSTF_2>   <NODE_2a>  <dof codes>  (<NODE_2b>) (<soft angles>)
(<min_X>     <max_X>    <min_Y>    <max_Y>       <min_Z>     <max_Z>)
 : : : 
<DYNA_POS_NODES: 3-nodes or 1-node_set>
​
```


| &lt;Label&gt; | I10 | Label number for this assembly. This must be unique within this dummy, (but assemblies are "local" to a dummy, so the same label may occur in different dummies). |
| --- | --- | --- |
| &lt;Title&gt; | A70 | Arbitrary name for this assembly. |
|  |
| &lt;#set\_parts&gt; | I10 | The number of \*SET\_PARTs in this assembly. |
| &lt;#parts&gt; | I10 | The number of \*PARTs in this assembly. |
| &lt;#children&gt; | I10 | How many "child" assemblies this assembly is "parent" to. |
| &lt;#set nodes&gt; | I10 | The number of \*SET\_NODES in this assembly. |
| &lt;locked&gt; | I10 | Locked degrees of freedom during mechanism-style positioning. Any permutation of 123456, or 0 for none. |
| &lt;csys&gt; | I10 | Optional local coordinate system for assembly restraints during mechanism-style positioning. |
| &lt;#contacts&gt; | I10 | Number of contact definitions. |
| &lt;dyna\_pos&gt; | I10 | Dyna position data flag (bitwise):<br><br>**|1**: data to be read;<br><br>**|2**: assembly flagged to be rigidified; (so value of 3 means 1 and 2 apply);<br><br>**|4**: no cables created for assembly;<br><br>**|8**: cable attachment nodes are kept in a SET\_NODE;<br>**|16**: more than three cable attachment nodes in the assembly;<br>**|(dyna\_pos & 31) &gt;&gt; 5**: gives the number of nodes |
|  |
| &lt;set\_part\_1... | 8I10 | Define &lt;#set\_parts&gt; entries | 8 entries per line, using as many lines as required |
|  |
| &lt;part\_1 ... | 8I10 | Define &lt;#parts&gt; entries | 8 entries per line, using as many lines as required |
|  |
| &lt;set\_node\_1... | 8I10 | Define &lt;#set\_nodes&gt; entries | 8 entries per line, using as many lines as required |
| An assembly may be made up of any number of SET\_PARTs and/or PARTs and/or SET\_NODEs, whichever is more convenient. Parts may be defined more than once, i.e. occur both explicitly and in sets, only a single instance will be used. For visualisation purposes you should have at least one part since node sets are not easy to interpret visually. |
|  |
| &lt;Part set&gt; | I10 | Part set for contact | &lt;#contacts&gt; lines of data, each definition starts a new line. |
| &lt;Box&gt; | I10 | Optional box to delimit contact |
| &lt;tk factor&gt; | E10.0 | Factor on true shell thickness for contact purposes |
| &lt;active&gt; | I10 | Flag to denote contact active (1) or inactive (0) |
|  |
| &lt;child\_n&gt; | I10 | The &lt;nth&gt; child assembly label. Required. |
| &lt;jstf\_n&gt; | I10 | The GENERALIZED\_STIFFNESS connecting parent assembly to child &lt;n&gt;. If omitted free rotation about dummy axes is assumed unless node NB is defined. |
| &lt;node\_na&gt; | I10 | The NODE on the parent assembly about which child &lt;n&gt; rotates. If omitted the child rotates about the dummy H-Point. |
| &lt;dofs\_n&gt; | I10 | The degrees of freedom about which child &lt;n&gt; may rotate with respect to the parent.<br> <br>The codes are "1", "2", "3" for local Phi, Theta, Psi (X,Y,Z) axes respectively. Given in any order, for example 13 = rotation permitted about Phi and Psi. If omitted no rotation about any axes will be permitted.<br> <br>From PRIMER 17.0 onwards, extra degrees of freedom codes have been added. PIN (-1) permits rotation of the child assembly about the specified &lt;node\_na&gt;. HINGE/LINE (-2/-3) permits rotation of the child assembly about an axis determined by nodes &lt;node\_na&gt; and &lt;node\_nb&gt;. This allows assemblies to have multiple parents, forming a mechanism, see [Assembly Creation and Editing](assemblycreation-and-editing.md#dof_code)for more information. |
| &lt;node\_nb&gt; | I10 | Optional second node. If no joint stiffness is defined then if NB is defined the rotation axis will be about the vector NA - NB.<br> <br>This node value is required to define the axis of rotation for the dof = HINGE/LINE |
| &lt;soft\_angles&gt; | I10 | ***Optional***. If zero, or omitted, then the second line of "soft stop angles" is not read. <br>If 1 then the soft angles line is read. |
| The following line is only read if field **&lt;soft\_angles&gt;** above is set to 1. It defines alternative "soft" stop angles for the 3 degrees of freedom of rotation of the child to be used during positioning, instead of the stop angles on the Generalized Stiffness card. The purpose of these angles is to limit articulation during positioning so that penetrations of the structure on either side of the joint do not occur. They are ignored during actual analysis where the "true" stop angles on the Generalized stiffness cards will be used. |
| &lt;min\_X&gt; | E10.0 | Most -ve permitted "soft" rotation angle about local X axis | These values are defined in degrees, must lie in the range +/-180.0, and the -ve value must be less than or equal to the +ve value. <br>If  ***both***  "soft" stop angles for a given degree of freedom are 0.0 (or omitted) then the "true" stop angles on the Generalized Stiffness card will be used instead for that degree of freedom. |
| &lt;max\_X&gt; | E10.0 | Most +ve permitted "soft" rotation angle about local X axis |
| &lt;min\_Y&gt; | E10.0 | Most -ve permitted "soft" rotation angle about local Y axis |
| &lt;max\_Y&gt; | E10.0 | Most +ve permitted "soft" rotation angle about local Y axis |
| &lt;min\_Z&gt; | E10.0 | Most -ve permitted "soft" rotation angle about local Z axis |
| &lt;max\_Z&gt; | E10.0 | Most +ve permitted "soft" rotation angle about local Z axis |
| This ability to define "soft" stop angles is available in PRIMER release 12 and later. The format is backwards compatible, and decks from older releases will read without modification.<br> <br>The single line if &lt;soft\_angles&gt; is zero or omitted<br> <br><br>>  <br>> **&lt;child&gt; &lt;jstf&gt; &lt;node\_a&gt; &lt;dofs&gt; &lt;node\_b&gt;**<br>>  <br><br> <br>or the pair of lines if **&lt;soft\_angles&gt;** = 1<br> <br><br>>  <br>> **&lt;child&gt; &lt;jstf&gt; &lt;node\_a&gt; &lt;dofs&gt; &lt;node\_b&gt; &lt;soft\_angles&gt; &lt;min\_X&gt; &lt;max\_X&gt; &lt;min\_Y&gt; &lt;max\_Y&gt; &lt;min\_Z&gt; &lt;max\_Z&gt;**<br>>  <br><br> <br>is repeated for **&lt;#children&gt;** child assemblies |
| The next card is only read if field **&lt;dyna\_pos&gt;** on line #2 is non-zero.<br> <br>These cards define positioning cable nodes to be used for positioning by the Ansys LS-DYNA method.<br> <br>The card can contain up to three fields - all \*NODE entities. **This is valid for all ATDs/Dummies/HBMs.**<br> <br>Or, this can be just a single \*SET\_NODE entity label - this node set can contain any number of nodes. **This is valid only for Human body models (HBMs).** |
| &lt;node\_1&gt; <br>&lt;node\_2&gt; <br>&lt;node\_3&gt; | I10 <br>I10 <br>I10 | LS-DYNA positioning node #1 <br>LS-DYNA positioning node #2 <br>LS-DYNA positioning node #3 |
| OR |
| &lt;set\_node&gt; | I10 | Node set containing multiple LS-DYNA positioning nodes |

\*POINT\_NODE 
&lt;title&gt; 
&lt;assembly id&gt; &lt;node id&gt; &lt;restrained DoFs&gt; (&lt;csys&gt;) (&lt;h\_pt&gt;)

| &lt;title&gt; | A80 | Title for the point |
| --- | --- | --- |
|  |
| &lt;assembly id&gt; | I10 | Label of assembly to which point is attached |
| &lt;node id&gt; | I10 | Label of node from which point coordinates are taken |
| &lt;restrained DoFs&gt; | I10 | A restraint code made up of any permutation of 123456, or 0 for none |
| &lt;csys&gt; | I10 | Optional: a coordinate system to give restraint in local axes. |
| &lt;h\_pt&gt; | I10 | Optional: set to 1 if this is an automatically generated point at the dummy H-Point |

\*POINT\_LOCATION 
&lt;title&gt; 
&lt;assembly id&gt; &lt;px&gt; &lt;py&gt; &lt;pz&gt; &lt;restrained DoFs&gt; (&lt;csys&gt;) (&lt;h\_pt&gt;)

| &lt;title&gt; | A80 | Title for the point |
| --- | --- | --- |
|  |
| &lt;assembly id&gt; | I10 | Label of assembly to which point is attached |
| &lt;px&gt; | E10.0 | X coordinate of point |
| &lt;py&gt; | E10.0 | Y coordinate of point |
| &lt;pz&gt; | E10.0 | Z coordinate of point |
| &lt;restrained DoFs&gt; | I10 | A restraint code made up of any permutation of 123456, or 0 for none |
| &lt;csys&gt; | I10 | Optional: a coordinate system to give restraint in local axes. |
| &lt;h\_pt&gt; | I10 | Optional: set to 1 if this is an automatically generated point at the dummy H-Point |

Points are optional. They are relevant only during mechanism-style positioning, and provide two related functions:

* By restraining degrees of freedom at a point an assembly can be given a "point" restraint. This can be in a local system if &lt;csys&gt; is defined for the point.
* Points can also be used to "drive" mechanism-style movement by giving them new target coordinates and letting PRIMER iterate to achieve these.

Any number of points may be defined for a dummy, and an assembly may have any number attached to it.

\*POSITION

Any number of positions may be stored for a dummy, and position information is identical for dummies and mechanisms. A description of these and their card format is given [below](position-card-format.md#pos_format).

**\*DUMMY\_END**

Terminates the dummy definition. This is assumed if a physical &lt;end of file&gt; is found, but is mandatory if a second dummy definition (or other keyword) is to follow.

[Previous](a-standard-object-names-and-acronyms.md)  |  [Next](rules-for-tree-files.md)