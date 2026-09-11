###  Details of *BELT Cards

The description "tree" file is misleading, although it is adopted for historical reasons, since there is no hierarchy as such. Rather the file contains extra information about belt geometry, fitting, meshing and contact, and it is organised as follows.


```
*BELT_START
```


```
<label>       <Title> 

<Solid set>   <Shell set>   <Tshell Set>   <Segm set>    <Part set>
```


```
<#rows>       <width>       <length>       <thickness>   <xoff_b>     <xoff_p>  <xoff_r>    <xoff_f>
```


```
<iter>        <conv_tol>    <tk_flag>      <tk_scale>    <pen_dist>   <overlap> <proj_dist> <curve_ang>

<friction>    <acute_angle><min_shell_tk>

<path order>  <drawn mode>  <offset mode>  <auto depen>  <depen iter> <radial method>       <depen mode>

<sep belt>    <sep factor>  <ramp #iter>   <slip radius> <slip angle> <slip distance>
```


| Label | I10 | The label of this belt definition |
| --- | --- | --- |
| Title | A70 | The title of this definition (optional) |
|  |
| Solid set | I10 | A set of solid elements defining "structure" | The "structure" can be any combination of these sets, and defines the dummy and vehicle elements contacted by the seatbelt. Not all sets need to exist, but at least one is required to give a structure definition. |
| Shell set | I10 | A set of shell elements ditto |
| Tshell set | I10 | A set of thick shell elements ditto |
| Segm set | I10 | The set of segments that PRIMER creates from the three element sets above, used for contact between belt and structure during fitting.<br> <br>*From V12 onwards this reference to a segment set will not be written out here unless it has been referred to on a \*BELT\_CONTACT card. Likewise the set definition itself will not be written to the main deck unless it has been referred to by something other than \*BELT\_START. The reason for these changes is that the segment set is really volatile and gets recreated each time the belt is refitted, so writing it out serves no useful purpose.*<br> <br>*In addition when a new dummy replaces an old one the segment set may reference nodes that no longer exist, and thus become more trouble than it is worth.* |
| Part set | I10 | A set of parts | This may also be used to define structure, with or instead of the element sets above. |
|  |
| #rows | I10 | The number of rows of 2D elements across the belt. This must lie in the range 0 (for all 1D belt elements) to 20. Default = 1 |
| width | E10.0 | The overall belt width. Each 2D element wuill be &lt;width&gt; / &lt;#rows&gt; wide. Default = 50.0 |
| length | E10.0 | The characteristic length of each belt element. Default = 25.0 |
| thickness | E10.0 | The thickness of 2D belt elements. Default = 1.0 |
| xoff\_b | E10.0 | The offset of a database cross-section from a B-Post slipring |
| xoff\_p | E10.0 | The offset of a database cross-section from a free (eg pelvis) slipring |
| xoff\_r | E10.0 | The offset of a database cross-section from a retractor |
| xoff\_f | E10.0 | The offset of a database cross-section from a fixed or end point. |
|  |
| iter | I10 | The number of fitting iterations between contact bucket resorts. Default = 25 |
| conv\_tol | E10.0 | The convergence tolerance at which fitting halts. Default = 1.0e-5 |
| tk\_flag | I10 | Thickness used during fitting: 0 (default) = use true thickness; 1 = use true thickness \* factor; 2 = use neutral axis (no thickness) |
| tk\_scale | E10.0 | Factor used when &lt;tk\_flag&gt; = 1. Default = 1.0 |
| pen\_dist | E10.0 | Maximum penetration distance considered for contact into solid & thick shell elements. Default = 25.0, but also limited to shortest side length \* 0.4. |
| overlap | E10.0 | Fraction by which facets are extended during contact checking to stop nodes "falling into gaps". Default = 0.05 |
| proj\_dist | E10.0 | Initial projection distance by which belt path is "thrown outwards" at start of fitting. Default = 35.0 |
| curve\_ang | E10.0 | Maximum permitted transverse belt curvature in degrees. Default = 0.0, meaning no limit, permitted values are 0 to 180 deg. |
| *The following line was introduced in V12* |
| friction | E10.0 | Transverse friction coefficient in the range 0.0 - 1.0, default 0.0. |
| acute\_angle | E10.0 | Angle (in degrees) considered to be "acute" in belt. Default 90.0, but can be in range 0.0 - 180.0 <br>If this field is zero then the default of 90.0 degrees is assumed. |
| min\_shell\_tk | E10.0 | Minimum thickness used for contact with shells. If defined actual contact thickness is max(true thickness, min thickness) ( *Field added in V14* ) |
| *The following line was introduced in V13* |
| path order | I10 | The curvature of the meshing path. 0 = linear, 1 = mixed linear/spline, 2 = cubic spline |
| drawn mode | I10 | How the fitting path is drawn. 0 = wireframe, 1 = wireframe with thickness, 2 = shaded with thickness |
| offset mode | I10 | How fitting path is offset from basic path points. 0 = full offset distance, 1 = offset distance \* 0.1, 2 = no offset |
| auto depen | I10 | Whether or not to perform automatic depenetration of the belt path prior to fitting. 0 = no, 1 = yes. |
| depen #iter | I10 | Maximum number of iterations of automatic initial depenetration, default = 4. |
| radial method | I10 | How the fitting path twist is computed. 0 = from "Local" normals of nearby structure, 1 = from base path curvature. |
| depen mode | I10 | Method used to determine which of overlapping belt segments is "in front" for automatic initial depenetration. ( *Added in V19* ) <br>0 = automatic (default), 1 = earlier segment in front of later, 2 = later segment in front of earlier, 3 = no belt to belt initial depenetration |
| *The following line was introduced in V13* |
| sep belt | I10 | Whether or not to perform self-contact between adjacent segments of belt. 0 = no, 1 = yes |
| sep factor | E10.0 | Initial factor on true separation distance. Default = 1.0 (ie true thickness) |
| ramp #iter | I10 | Number of fitting iterations over which a separation factor &gt; 1.0 ramps linearly down to 1.0. Default = 500 |
| slip radius | E10.0 | These three attributes are all properties of "radiused", ie explicitly meshed, sliprings if these are used in preference to explicit slipring elements. | The radius of the slipring. |
| slip angle | E10.0 | The angle (in degrees) subtended by elements around the slipring. |
| slip distance | E10.0 | The distance each side of the slipring over which finely meshed elements extend. |


```
*BELT_MESH 
```


```
<node_set>    <nsbo_set>    <elem_set>   <cline_len> <np>        <ns>      <ref_geom>
```


```
<sbelt_f>     <sbelt_l>     <retr_f>     <retr_l>    <slip_f>    <slip_l><xsec_f><xsec_l>
```


```
<nrb_set_f>   <nrb_set_l>
```


```
<pid_1d>      <slen_1d>
```


```
<pid_sh>      <t1_sh>       <t2_sh>      <t3_sh>     <t4_sh>     <psi_sh> 

<pid_2d>      <t1_2d>       <t2_2d>      <t3_2d>     <t4_2d>     <psi_2d>
(If <np> on line 1 is defined the line above is repeated <np> times, otherwise it appears once if the belt
 definition contains 2d belt element data, otherwise not at all.)

<base p1>     <base p2>     <fit p1>     <fit p2>    <mode>      <#belt 1>    <#belt 2>
(The line above appears exactly <ns> times.  In decks prior to V13 neither <ns> nor these lines are written.)
```


| node\_set | I10 | Set of all nodes in seatbelt | These sets are only created if the option to generate a contact for the belt is used. They define the contact between the belt and the structure, the latter being defined via segment set &lt;segm set&gt; on the \*BELT\_START card. |
| --- | --- | --- | --- |
| nsbo\_set | I10 | Set of nodes on 1D seatbelt elements only |
| elem\_set | I10 | Set of shell or 2D seatbelt elements |
| cline\_len | E10.0 | Centreline length | ***Optional***  : This is not an input property, but rather the centreline length of the belt when last meshed in PRIMER. This data field is new in V12, and may be omitted or set to zero if no length is known, or if this card comes from an earlier keyword file. |
| np | I10 | Number of 2d belt element property cards | ***New in V13***  : the number of lines of 2d seatbelt property data that will be written below. This field is not written in earlier decks, and if it is omitted exactly one line of 2d seatbelt property data is output at the end of this keyword if the belt contains 2d seatbelt element property data, otherwise not at all. |
| ns | I10 | Number of "segments" of belt path and their meshing details. | ***New in V13***  : the number of "segments", ie stretches of belt path between fixed ends or acute points or sliprings. This variable defines how many lines of detailed segment meshing data will be written at the end of this keyword. |
| ref\_geom | I10 | \*AIRBAG\_REFERENCE\_ <br>GEOMETRY id | ***New in V18***  : if \*AIRBAG\_REFERENCE\_GEOMETRY has been used to write out the "undeformed" shape of the belt a reference definition with an explicit \_ID is used for each belt. It is assumed that the belt "owns" this definition, meaning that it is will be deleted and recreated during remeshing, so it should not be modified manually or used for other purposes. |
|  |
| sbelt\_f | I10 | First 1D seatbelt element id | Since there is no \*SET\_SEATBELT card in Ansys LS-DYNA the seatbelt fitter stores the first and last 1D belt element ids, assumes that elements are contiguous in this range and that it "owns" all these elements. |
| sbelt\_l | I10 | Last 1D seatbelt element id |
| retr\_f | I10 | First retractor id | Likewise it assumes that the list of retractors is contiguous between first and last, and that it owns all of these. | This is true for both 1D and 2D slipring and retractor elements. |
| retr\_l | I10 | Last retractor id |
| slip\_f | I10 | First slipring id | Likewise it assumes that the list of sliprings is contiguous between first and last, and that it owns all of these. |
| slip\_l | I10 | Last slipring id |
| xsec\_f | I10 | First cross-section id | \*DATABASE\_CROSS\_SECTION definitions are new in PRIMER release 11 and can be added to any path point. These are the first and last definitions which must have explicit labels using the \_ID suffix. | Cross-sections can be added to all belt mesh types: 1d belt, 2d belt and shell. |
| xsec\_l | I10 | Last cross-section id |
|  |
| nrb\_set\_f | I10 | First nodal rigid body set id | There is no \*SET\_NODAL\_RIGID\_BODY card, so it is assumed that this list is contiguous, as above, and that the belt "owns" all these definitions. | Belt fitting in PRIMER pre-dates the optional Nodal RB labels in Ansys LS-DYNA, so set ids are used instead for backwards compatibility. |
| nrb\_set\_l | I10 | Last nodal rigid body set id |
|  |  |  |
| pid\_1d | I10 | The part ID for any 1D seatbelt elements | Only need to be defined if the belt contains 1D belt elements |
| slen\_1d | E10.0 | The initial slack length for any 1D seatbelt elements |
|  |
| pid\_sh | I10 | The part id of any shell elements | Only need to be defined if the belt contains any conventional shell elements |
| t1\_sh *to* t4\_sh | 4E10.0 | ***Optional***  thicknesses at the 4 nodes of these elements |
| psi\_sh | E10.0 | ***Optional***  orthotropic element angle for these elements |
| *From V13 onwards the following line is repeated &lt; **np** &gt; times. In earlier decks where &lt; **np** &gt; is not output the following line appears exactly once if the belt contains 2d belt elements, otherwise not at all.* |
| pid\_2d | I10 | The part id of any 2D seatbelt elements | Only need to be defined if the belt contains any 2D seatbelt shell elements |
| t1\_2d *to* t4\_2d | 4E10.0 | ***Optional***  thicknesses at the 4 nodes of these elements |
| psi\_2d | E10.0 | ***Optional***  orthotropic element angle for these elements |
| *The following line is only written from V13 onwards. It is repeated &lt; **ns** &gt; times, once for each belt meshing segment.* |
| base pt 1 | I10 | The point number in the basic belt path at end #1 of this segment | This information is repeated for each of &lt;  ***ns***  &gt; meshing segments and is used when the belt is remeshed either manually or automatically.<br> <br>Prior to V13, when this information was not written, the belt fitter "crawled up" any existing belt to extract this information - not always with 100% reliability! |
| base pt 2 | I10 | The point number in the basic belt path at end #2 of this segment |
| fit pt 1 | I10 | The point in the belt fitting path at end #1 of this segment |
| fit pt 2 | I10 | The point in the belt fitting path at end #2 of this segment |
| mode | I10 | **In "old style"** the meshing mode for this segment. 0 = 1d belt elements only, 1 = 2d belt elements only, 2 = shell elements only, 3 = mixed shells and 1d belt elements, 4 = mixed shells and 2d belt elements. I old style only the bottom byte, ie mask 0xf, will ever be populated.<br> <br>**In "new style"** , V14 onwards, meshing also the mode, but now a bitwise OR of the following:<br> <br>0x0010 always present to designate "new style", the bottom byte will always be zero.<br> <br><br>| **Span** | **If 1d belt** | **If 2d belt** | **If shell** |<br>| --- | --- | --- | --- |<br>| **E1** | 0x00100 | 0x00200 | 0x00400 |<br>| **CE** | 0x01000 | 0x02000 | 0x04000 |<br>| **E2** | 0x10000 | 0x20000 | 0x40000 |<br><br> <br>For a given row only a single column's entry may be used. For example the code 0x12410 means end 1 is shells, centre is 2d belts, end 2 is 1s belts. |
| #belt 1 | I10 | In an "old style" mixed mode segment (ie mode = 3 or 4) the number of 1d or 2d belt elements at end #1.<br> <br>In "new style"meshing the number of elements of any type in span E1, or zero if the span is of a single element type. |
| #belt 2 | I10 | In an "old style" mixed mode segment (ie mode = 3 or 4) the number of 1d or 2d belt elements at end #2.<br> <br>In "new style"meshing the number of elements of any type in span E2, or zero if the span is of a single element type. |


```

```


```
*BELT_CONTACT
```


```
<no_su_cont>   <su_su_cont>
```


| no\_su\_contact | I10 | Label of Nodes to Surface contact used when contact between nodes on 1D belt elements and dummy structure is defined. | This card is only used if the option to create a contact between belt and dummy "structure" has been used. |
| --- | --- | --- | --- |
| su\_su\_contact | I10 | Label of Surface to Surface contact used when contact between belt shells / 2D belt elements and dummy structure is defined. |


```

```


```

*BELT_PATH
```


```
<npts>
```


```
<bits>       <x1>           <y1>           <z1>     (<nid>)
(Optional row 1 of further data depending on <bits>)
(Optional row 2 of further data depending on <bits>)
(Optional row 3 of further data depending on <bits>)
(Optional row 4 of further data depending on projection, curl and other attributes)
(Optional row 5 of further data depending on transverse stiffness
```


```
 : : : :
```


```
<bits>       <xn>           <yn>           <zn>     (<nid>)
(Optional row 1 of further data depending on <bits>)
(Optional row 2 of further data depending on <bits>)
(Optional row 3 of further data depending on <bits>)
(Optional row 4 of further data depending on projection, curl and other attributes) 
(Optional row 5 of further data depending on transverse stiffness


```


Users wishing to write software to read or skip these cards should use the following logic. 
The notation 0x... means a hexadecimal value, "&" means a bitwise AND..

For (each belt path point)
{
 Always read line 1, and from that line read &lt;bits&gt; as a decimal integer

 if(bits & 0x8800) read optional rows 1 and 2
 if(bits & 0x60000) read optional row 3
 if(bits & 0x1010000) read optional row 4
 if(bits & 0x4000000) read optional row 5
}

```
​
```


| npts | I10 | Number of points in the basic "line" belt path |
| --- | --- | --- |
| There then follow &lt;npts&gt; cards of the following data: |
| bits | I10 | Bitwise encoded integer containing information about the attributes of this point | This encoding is internal to PRIMER |
| X, Y, Z | 3E20.0 | X,Y,Z coordinates of point &lt;n&gt; | Either or both of [X,Y,Z] and &lt;nid&gt; may be defined. However if both are defined and the coordinates differ then the rules used to locate the path point depend on the version of PRIMER:<br> <ul> <li> <b>V13 and earlier: </b>if the node and path point coordinate are within 5mm the path point is moved to the node. If outside 5mm the node is ignored and removed from the path, and the coordinate is used verbatim. <br> <br> </li> <li> <b>V14 onwards </b>: the rules are more flexible and depend on the &quot;belt_path_match_method&quot; and &quot;belt_path_match_tol&quot; preferences. For backwards compatibility the default behaviour is the same as V13, but see &quot; <a href="settings.md#mismatch_action">Action on node/point coordinate mismatch </a>&quot; in section 6 (tools) on seatbelt fitting for an explanation of the new rules. </li> </ul> |
| nid | I10 | ***Optional***  : Node at point &lt;n&gt; |
|  |
| Optional row #1 | I10 | Always 0 | These two rows of data are only written if the twist at this belt point has been controlled during belt fitting. Row #1 defines the twist on side A, and row #2 on side B.<br><br>Twist vectors are written in bit-packed form and are not user-definable.<br><br>From V11 onwards if both "twist nodes" 1 and 2 have been defined the vector between them will supersede any encoded orientation vectors. At fixed end and intermediate points this N1N2 vector will define the belt orientation precisely, at other points it will define the plane in which the belt's transverse vector lies. This provides an alternative way for users to define belt twist.<br><br>The 3rd row of optional orientation vectors is added in V18 |
| 3E20.0 | Encoded orientation vectors |
| I10 | ***Optional***  : orientation "twist" node N1 (V11 onwards) |
| Optional row #2 | I10 | Always 1 |
| 3E20.0 | Encoded orientation vectors |
| I10 | ***Optional***  : orientation "twist" node N2 (V11 onwards) |
|  |
| Optional row #3 | I10 | Always 2 | This row is only written in the "along the path" twist of the belt has been set explicitly at this point. |
| 3E20.0 | Encoded orientation vectors |
|  |
| Optional <br>row #4 | E10.0 | ***Optional***  : Point-specific projection distance (V14 onwards) | This row of data may be written from V14 onwards. It is only required if a non-default projection distance, curl angle or non-standard element length have been specified for this path point. |
| I20 | ***Optional***  : Encoded curl angle and non-standard element length at point (V18 onwards) |
| I20 | ***Optional***  : Encoded local friction coefficient at point (V18 onwards) |
|  |
| Optional row #5 | I10 | ***Optional***: Part id of stiffening transverse beams | This row is only written if transverse beams have been used to stiffen the belt in transverse bending. |
| The format of the \*BELT\_PATH row entries is complex, involving internal bit fields designating retractor, slipring, etc. It may also contain path twist normal information that is similarly bit-packed into data words. These formats are internal to PRIMER and may change in subsequent releases. <br>It is  ***strongly***  recommended that you do not attempt to edit these values. There is an algorithm given at the top of this table which will allow you to decode how many lines to expect for each path point when reading these cards. |

\*BELT\_PARAMETER

&lt;length parameter&gt; &lt;per segm params&gt;

*This card is new in V12 and is entirely optional. If omitted no parameter value will be updated.*

| length\_parameter | A10 | The name of a \*PARAMETER (with no leading "&") that will be updated with the total belt length whenever the belt is remeshed. |
| --- | --- | --- |
| per segm params | I10 | ***Added in V13:***  if this value is 1 then additional parameters will be created for each meshing segment of the belt giving the length of that segment only. The syntax used is the name of the length\_parameter defined above with " \_s *n*  " added where  ***n***  is the segment number.<br> <br>For example if the length parameter is blen , and the belt has three meshing segments, parameters blen\_s1 , blen\_s2 and blen\_s3 will be added. |

*The following card is only written from V20 onwards, if not all fields are null at the time of writing.*

\*BELT\_SLIPRING

&lt;slip\_count&gt;


```
<slip_type>    <part_set>    <pivot_centre>    <left_no>    <right_no>    <control_flag>    <rot_axis_flag>
```


```
<rot_vec_x>    <rot_vec_y>   <rot_vec_z>

```


```
(The line above is written only if <rot_axis_flag> is set to 0.)
```


```
<rot_no_1>    <rot_no_2>
```



```
(The line above is written only if <rot_axis_flag> is set to 1.)

```


| slip\_count | I10 | Number of slipring definitions | Restricted to 1 in v20 as only a single slipring definition can be used per model. |
| --- | --- | --- | --- |
|  |
| slip\_type | I10 | Type of slipring | Restricted to 1 in v20 as only shoulder sliprings are supported. |
| part\_set | I10 | Set of parts forming the slipring |
| pivot\_centre | I10 | Node defining centre of rotation (typically the centre of the slipring pivot) |
| left\_no | I10 | Node at the left lower corner of the slipring slot |
| right\_no | I10 | Node at the right lower corner of the slipring slot |
| control\_flag | I10 | Control flag for automatically pulling the slipring into position during the fitting |
| rot\_axis\_flag | I10 | Mode in which the vector of rotation is defined | Defines which of the following two lines will be written at the end of this card. |
|  |
| rot\_vec\_x | 3E10.0 | X,Y,Z coordinates of rotation vector | Only need to be defined if rot\_axis\_flag = 0. |
| rot\_vec\_y |
| rot\_vec\_z |
|  |
| rot\_no\_1 | I10 | Node defining tip of rotation vector | Only need to be defined if rot\_axis\_flag = 1. |
| rot\_no\_2 | I10 | Node defining head of rotation vector |


```

```


\*BELT\_END

*No data fields*

Users should not attempt to edit this file by hand unless they are very certain about what they are they doing.

Deleting this file from an input deck will not affect its behaviour during analysis, but will cause PRIMER to lose the ability to remesh the belt.

[Previous](writing-belt-cards-in-the-format-of-an-earlier-version-of-primer.md)  |  [Next](compressed-ls-dyna-formats-gz-and-zip.md)