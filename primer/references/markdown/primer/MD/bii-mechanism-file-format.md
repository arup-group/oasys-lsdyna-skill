##  Appendix B.ii: Mechanism File Format

Mechanisms are similar to Dummies in many ways: they share a common Assembly and Point definition syntax, and when a Dummy is "free dragged" in mechanism-style positioning PRIMER automatically builds an internal mechanism to perform the drag.

However there are also some significant differences:

* Mechanisms do not have the hierarchical parent/child structure of dummies, as their connectivity can be completely arbitrary. Therefore although their keyword card formats are similar it would be misleading to refer to them as a "tree file".
* Because of the absence of a hierarchy Mechanism assemblies are a little different different from Dummy ones, in particular they do not define "child" assemblies.
* Mechanism assemblies are joined together by "Connections" which have to be defined explicitly, whereas Dummy connectivity is defined by the "child" lines on Assembly cards.
* Finally Mechanisms can have child mechanisms or dummies, whereas dummies cannot.

It is not expected that mechanisms will be created outside PRIMER as defining them interactively within the programme is very easy, so the card formats are included mainly for completeness.

\*MECHANISM\_START 
&lt;label&gt; &lt;title&gt;

The following line is **optional** .

*&lt;move\_xsec&gt; &lt;mcon\_labels&gt;*

| &lt;Label&gt; | I10 | Must be unique within a model, as this identifies the Mechanism. |
| --- | --- | --- |
| &lt;Title&gt; | A70 | An arbitrary character string describing the Mechanism. |
| The line below is  ***optional***  , it was added in release 12. If it is omitted in an input file, data fields will be given the default values specified here. |
| &lt;move\_xsec&gt; | I10 | Default = 1 | Whether to move \*DATABASE\_CROSS\_SECTION\_PLANE definitions with parts in an assembly with the assembly as it is positioned.<br> <br>1 = Yes, 0 = No. |
| &lt;mcon\_labels&gt; | I10 | Default = 0 | Whether mechanism connections are written with labels. This option has been added in PRIMER 15.0 to make it possible to reference line or hinge connections by their label from a coupler connection. When writing a keyword file from PRIMER, this option will be turned on (set to 1) if and only if there will be coupler connections written for this mechanism definition.<br> <br>1 = Yes, 0 = No. |

This card starts a new Mechanism definition, giving its label and title, and possibly further optional values. All cards between this and the corresponding \*MECHANISM\_END are "private" to this mechanism definition.


```
*ASSEMBLY
<label>     <Title>
<#SET_PARTs> <#PARTs>    <unused>  <#SET_NODEs>  <locked>   <csys>  <#contacts>
<SET_PART_1> <SET_PART_2> ...      <SET_PART_n>
<PART_1>     <PART_2> ...          <PART_n>
<SET_NODE_1> <SET_NODE_2> ...      <SET_NODE_n>
<Part set><Box><Tk factor> <active>
 : : : 
```
| &lt;Label&gt; | I10 | Label number for this assembly. This must be unique within this mechanism, (but assemblies are "local" to a mechanism, so the same label may occur in different mechanisms). |
| --- | --- | --- |
| &lt;Title&gt; | A70 | Arbitrary name for this assembly. |
|  |
| &lt;#set\_parts&gt; | I10 | The number of \*SET\_PARTs in this assembly |
| &lt;#parts&gt; | I10 | The number of \*PARTs in this assembly |
| &lt;unused&gt; | I10 | This field is unused for mechanism definitions (see [note 1](bii-mechanism-file-format.md#n1)below) |
| &lt;#set\_nodes&gt; | I10 | The number of \*SET\_NODE definitions in this assembly |
| &lt;locked&gt; | I10 | Locked degrees of freedom during positioning. Any permutation of 123456, or 0 for none. |
| &lt;csys&gt; | I10 | Optional local coordinate system for assembly restraints during positioning |
| &lt;#contacts&gt; | I10 | Number of contacts between assemblyand fixed "structure" |
|  |
| &lt;set\_part\_1... | 8I10 | Define &lt;#set\_parts&gt; entries. | 8 entries per line, using as many lines as required |
|  |
| &lt;part\_1 ... | 8I10 | Define &lt;#parts&gt; entries. | 8 entries per line, using as many lines as required |
|  |  |  |
| &lt;set\_node\_1... | 8I10 | Define &lt;#set\_nodes&gt; entries | 8 entries per line, using as many lines as required |
| Note 1: | PRIMER version 9.3RC1 contained Nodal Rigid Bodies in this "slot". These have been withdrawn and replaced with Set Nodes since the latter are more flexible and permit nodes to be defined explicitly in assemblies.<br> <br>Models which contain Nodal Rigid Bodies in assemblies may be converted to the new format by replacing the nodal rigid body labels with the labels of their node sets, which in many cases will be identical. The behaviour of the assembly during mechanism analysis will be identical. |
| An assembly may be made up of any number of SET\_PARTs and/or PARTs and/or SET\_NODEs, whichever is more convenient. Parts may be defined more than once, ie occur both explicitly and in sets, only a single instance will be used. Assemblies should contain at least one part otherwise visualising and dragging them may prove difficult. |
|  |
| &lt;Part set&gt; | I10 | Part set for contact | &lt;#contacts&gt; lines of data, each definition starts a new line. |
| &lt;Box&gt; | I10 | Optional box to delimit contact |
| &lt;tk factor&gt; | E10.0 | Factor on true shell thickness for contact purposes |
| &lt;active&gt; | I10 | Flag to denote contact active (1) or inactive (0) |

\*CONNECTION\_PIN 
&lt;Title&gt; 
&lt;label&gt; 
&lt;assy\_1&gt; &lt;assy\_2&gt; &lt;node&gt; &lt;locked&gt; &lt;cx&gt; &lt;cy&gt; &lt;cz&gt; &lt;jstf&gt;

| &lt;title&gt; | A80 | Optional title for connection |
| --- | --- | --- |
|  |
| &lt;label&gt; | I10 | Label for connection. This data row should be included if and only if the mcon\_labels flag is 1 on the \*MECHANISM\_START card. In particular it did not appear before PRIMER 15.0. |
|  |
| &lt;assy\_1&gt; | I10 | Assembly #1 |
| &lt;assy\_2&gt; | I10 | Assembly #2 |
| &lt;node&gt; | I10 | Node at connection position. |
| &lt;locked&gt; | I10 | 0 for unlocked joint, 1 for locked. |
| &lt;cx&gt; | E10.0 | Connection position X coord | **Note** : These fields are only present in V10 onwards.<br> <br>From V10.0 onwards a pin location may be defined either by a node or by an explicit position. If a node is defined it is used, regardless of any position &lt;cx,cy,cz&gt;, otherwise the stipulated position is used. |
| &lt;cy&gt; | E10.0 | Connection position Y coord |
| &lt;cz&gt; | E10.0 | Connection position Z coord |
| &lt;jstf&gt; | I10 | Joint Stiffness id | From V20 onwards connections may have an optional \*CONSTRAINED\_JOINT\_STIFFNESS, typically used to set "stop angles" in the local coordinate system of the connection. |

\*CONNECTION\_LINE 
&lt;Title&gt; 
&lt;label&gt; 
&lt;assy\_1&gt; &lt;assy\_2&gt; &lt;node\_1&gt; &lt;node\_2&gt; &lt;pos\_slide&gt; &lt;neg\_slide&gt; &lt;cur\_dist&gt; &lt;locked&gt;/&lt;-1&gt;/&lt;-2&gt; 
&lt;pos\_rot&gt; &lt;neg\_rot&gt; &lt;curr\_angle&gt; &lt;locked&gt; &lt;a3\_active&gt; &lt;assy\_3&gt; &lt;factor\_1&gt; &lt;factor\_2&gt; 
&lt;c1\_x&gt; &lt;c1\_y&gt; &lt;c1\_z&gt; &lt;c2\_x&gt; &lt;c2\_y&gt; &lt;c2\_z&gt;

| &lt;title&gt; | A80 | Optional title for connection |
| --- | --- | --- |
|  |
| &lt;label&gt; | I10 | Label for connection. This data row should be included if and only if the mcon\_labels flag is 1 on the \*MECHANISM\_START card. In particular it did not appear before PRIMER 15.0. |
|  |
| &lt;assy\_1&gt; | I10 | Assembly #1 |
| &lt;assy\_2&gt; | I10 | Assembly #2 |
| &lt;node\_1&gt; | I10 | First node on line |
| &lt;node\_2&gt; | I10 | Second node on line |
| &lt;pos\_slide&gt; | E10.0 | Permitted slide distance in +ve direction |
| &lt;neg\_slide&gt; | E10.0 | Permitted slide distance in -ve direction |
| &lt;cur\_dist&gt; | E10.0 | Current slide distance |
| &lt;locked&gt; <br>or <br>&lt;-1&gt; <br>or <br>&lt;-2&gt; <br>or <br>&lt;-3&gt; | I10 | 0 for unlocked joint, 1 for locked. ( 9.3RC1 format)<br> <br>-1 to signify continuation in 9.3RC2 format<br> <br>-2 to signify continuation in 10.0 format<br> <br>-3 to signify continuation in 17.0 format | **Note** : Format of this card changed between 9.3RC1 and RC2. <br>And changed again with 10.0 and then with 17.0 |
|  |
| &lt;pos\_rot&gt; | E10.0 | Permitted +ve rotation (degrees: 0 to +1.0e30) | **Note** : This continuation line is 9.3RC2 format & later only.<br> <br>The stop angle limits have changed with PRIMER 17.0. In previous versions the positive stop angle was limited between 0 and +180 degrees, whereas the negative one was between 0 and -180 degrees. Angles of +/-180 degrees denoted unlimited rotation, which from PRIMER 17.0 onwards is stored as +/-1.0e30 to allow rotations to be limited by angles greater than 180 degrees. |
| &lt;neg\_rot&gt; | E10.0 | Permitted -ve rotation (degrees 0 to -1.0e30 |
| &lt;curr\_angle&gt; | E10.0 | Current rotation angle (degrees) |
| &lt;locked&gt; | I10 | 0 for unlocked joint, 1 for locked. |
| &lt;a3\_active&gt; | I10 | 1 if Assembly #3 active | **Note** : these fields are only present from V10.0 onwards |
| &lt;assy\_3&gt; | I10 | Assembly #3 |
| &lt;factor\_1&gt; | E10.0 | Factor on &lt;assy\_1&gt; motion |
| &lt;factor\_2&gt; | E10.0 | Factor on &lt;assy\_2&gt; motion |
|  |
| &lt;c1\_x&gt; | E10.0 | Point 1 X coordinate | **Note** : This card is only present from V10.0 onwards, signified by &lt;-2&gt; in column 8 of the 1st card.<br> <br>From V10.0 onwards either or both locations may be defined either by a node or by an explicit position. If a node is defined it is used, regardless of any position &lt;cx,cy,cz&gt;, otherwise the stipulated position is used. |
| &lt;c1\_y&gt; | E10.0 | Point 1 Y coordinate |
| &lt;c1\_z&gt; | E10.0 | Point 1 Z coordinate |
| &lt;c2\_x&gt; | E10.0 | Point 2 X coordinate |
| &lt;c2\_y&gt; | E10.0 | Point 2 Y coordinate |
| &lt;c2\_z&gt; | E10.0 | Point 2 Z coordinate |

\*CONNECTION\_HINGE 
&lt;Title&gt; 
&lt;label&gt; 
&lt;assy\_1&gt; &lt;assy\_2&gt; &lt;node\_1&gt; &lt;node\_2&gt; &lt;locked&gt;/&lt;-1&gt;/&lt;-2&gt; 
&lt;pos\_rot&gt; &lt;neg\_rot&gt; &lt;curr\_angle&gt; &lt;locked&gt; 
&lt;c1\_x&gt; &lt;c1\_y&gt; &lt;c1\_z&gt; &lt;c2\_x&gt; &lt;c2\_y&gt; &lt;c2\_z&gt;

| &lt;title&gt; | A80 | Optional title for connection |
| --- | --- | --- |
|  |
| &lt;label&gt; | I10 | Label for connection. This data row should be included if and only if the mcon\_labels flag is 1 on the \*MECHANISM\_START card. In particular it did not appear before PRIMER 15.0. |
|  |
| &lt;assy\_1&gt; | I10 | Assembly #1 |
| &lt;assy\_2&gt; | I10 | Assembly #2 |
| &lt;node\_1&gt; | I10 | First node on line |
| &lt;node\_2&gt; | I10 | Second node on line |
| &lt;locked&gt; <br>or <br>&lt;-1&gt; <br>or <br>&lt;-2&gt; <br>or <br>&lt;-3&gt; | I10 | 0 for unlocked joint, 1 for locked. ( 9.3RC1 format)<br> <br>-1 to signify continuation in 9.3RC2 format<br> <br>-2 to signify continuation in 10.0 format<br> <br>-3 to signify continuation in 17.0 format | **Note** : Format of this card changed between 9.3RC1 and RC2. <br>And changed again with 10.0 and then with 17.0 |
|  |
| &lt;pos\_rot&gt; | E10.0 | Permitted +ve rotation (degrees: 0 to +1.0e30) | **Note** : This continuation line is 9.3RC2 format & later only.<br> <br>The stop angle limits have changed with PRIMER 17.0. In previous versions the positive stop angle was limited between 0 and +180 degrees, whereas the negative one was between 0 and -180 degrees. Angles of +/-180 degrees denoted unlimited rotation, which from PRIMER 17.0 onwards is stored as +/-1.0e30 to allow rotations to be limited by angles greater than 180 degrees. |
| &lt;neg\_rot&gt; | E10.0 | Permitted -ve rotation (degrees 0 to -1.0e30 |
| &lt;curr\_angle&gt; | E10.0 | Current rotation angle (degrees) |
|  |
| &lt;c1\_x&gt; | E10.0 | Point 1 X coordinate | **Note** : This card is only present from V10.0 onwards, signified by &lt;-2&gt; in column 5 of the 1st card.<br> <br>From V10.0 onwards either or both locations may be defined either by a node or by an explicit position. If a node is defined it is used, regardless of any position &lt;cx,cy,cz&gt;, otherwise the stipulated position is used. |
| &lt;c1\_y&gt; | E10.0 | Point 1 Y coordinate |
| &lt;c1\_z&gt; | E10.0 | Point 1 Z coordinate |
| &lt;c2\_x&gt; | E10.0 | Point 2 X coordinate |
| &lt;c2\_y&gt; | E10.0 | Point 2 Y coordinate |
| &lt;c2\_z&gt; | E10.0 | Point 2 Z coordinate |

\*CONNECTION\_COUPLER 
&lt;Title&gt; 
&lt;label&gt; 
&lt;mcon\_1&gt; &lt;mode\_1&gt; &lt;coeff\_1&gt; 
&lt;mcon\_2&gt; &lt;mode\_2&gt; &lt;coeff\_2&gt; 
&lt;mcon\_3&gt; &lt;mode\_3&gt; &lt;coeff\_3&gt;

This card has been added from PRIMER 15.0 onwards.

| &lt;title&gt; | A80 | Optional title for connection |
| --- | --- | --- |
|  |
| &lt;label&gt; | I10 | Label for connection |
|  |
| &lt;mcon\_1&gt; | I10 | Connection #1. This needs to be either a line or a hinge. |
| &lt;mode\_1&gt; | I10 | Coupling mode #1. This should be 0 for translational coupling or 1 for rotational coupling. If connection #1 is a hinge, this needs to be 1. |
| &lt;coeff\_1&gt; | E10.0 | Coefficient c1 in the defining equation for the coupler |
|  |
| &lt;mcon\_2&gt; | I10 | Connection #2. This needs to be either a line or a hinge. |
| &lt;mode\_2&gt; | I10 | Coupling mode #2. This should be 0 for translational coupling or 1 for rotational coupling. If connection #2 is a hinge, this needs to be 1. |
| &lt;coeff\_2&gt; | E10.0 | Coefficient c2 in the defining equation for the coupler |
|  |
| &lt;mcon\_3&gt; | I10 | Optional connection #3. If defined, this needs to be either a line or a hinge. |
| &lt;mode\_3&gt; | I10 | Coupling mode #3. This should be 0 for translational coupling or 1 for rotational coupling. If connection #3 is a hinge, this needs to be 1. This will be ignored when connection #3 is 0. |
| &lt;coeff\_3&gt; | E10.0 | Coefficient c3 in the defining equation for the coupler. This will be ignored when connection #3 is 0. |

\*POINT\_NODE 
&lt;title&gt; 
&lt;assembly id&gt; &lt;node id&gt; &lt;restrained DoFs&gt; (&lt;csys&gt;)

| &lt;title&gt; | A80 | Title for the point |
| --- | --- | --- |
|  |
| &lt;assembly id&gt; | I10 | Label of assembly to which point is attached |
| &lt;node id&gt; | I10 | Label of node from which point coordinates are taken |
| &lt;restrained DoFs&gt; | I10 | A restraint code made up of any permutation of 123456, or 0 for none |
| &lt;csys&gt; | I10 | Optional: a coordinate system to give restraint in local axes. |

\*POINT\_LOCATION 
&lt;title&gt; 
&lt;assembly id&gt; &lt;px&gt; &lt;py&gt; &lt;pz&gt; &lt;restrained DoFs&gt; (&lt;csys&gt;)

| &lt;title&gt; | A80 | Title for the point |
| --- | --- | --- |
|  |
| &lt;assembly id&gt; | I10 | Label of assembly to which point is attached |
| &lt;px&gt; | E10.0 | X coordinate of point |
| &lt;py&gt; | E10.0 | Y coordinate of point |
| &lt;pz&gt; | E10.0 | Z coordinate of point |
| &lt;restrained DoFs&gt; | I10 | A restraint code made up of any permutation of 123456, or 0 for none |
| &lt;csys&gt; | I10 | Optional: a coordinate system to give restraint in local axes. |

\*CHILD\_DUMMY  *or*  \*CHILD\_MECHANISM  *(Card format is the same for both)*  
 &lt;title&gt; 
&lt;parent assy&gt; &lt;child label&gt; &lt;nconstrained&gt; &lt;linked DoFs&gt; &lt;locked&gt; 
&lt;child assy #1&gt; 
&lt;child assy #2&gt; 
: : :

| &lt;title&gt; | A80 | Optional title |
| --- | --- | --- |
|  |
| &lt;parent assy&gt; | I10 | Label of "driving" assembly in parent mechanism |
| &lt;child label&gt; | I10 | Label of "child" mechanism or dummy definition. |
| &lt;nconstrained&gt; | I10 | Number of assemblies in child that are "constrained" to this parent |
| &lt;linked DoFs&gt; | I10 | Any permutation of 123 giving degrees of freedom linking parent to child. |
| &lt;locked&gt; | I10 | 1 if child is fully locked to parent |
|  |
| &lt;child assy *n* &gt; | I10 | Linked child assemblies 1 to &lt;nconstrained&gt;, 1 per line |

\*POSITION

Any number of positions may be stored for a mechanism, and position information is identical for dummies and mechanisms. A description of these and their card format is given in [Position Card Format](position-card-format.md#pos_format).

\*MECHANISM\_END

Terminates the mechanism definition.
[Previous](example-of-a-tree-file.md)  |  [Next](biii-positions-in-dummy-and-mechanism-data.md)