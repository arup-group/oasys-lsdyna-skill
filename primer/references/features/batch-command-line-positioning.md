###  Batch (Command Line) Positioning

A subset of the interactive positioning commands described above are also available in command-line line form. While these can be used interactively the main purpose of them is to enable positioning to be performed in batch mode. These commands will provide visual feedback if the graphical user interface is running, but if it is not ( PRIMER started with "-d=batch" command line option) they will still function. A full listing of command-line commands is given in [Appendix L](l-dialogue-typed-in-command-syntax.md#dialoguecommands).

The positioning commands are invoked by the [PRIMER &gt;] DUMMY command, and occupy a hierarchy as follows:

| At DUMMY &gt; level |  |  |
| --- | --- | --- |
| ASSEMBLY | Select an assembly by name or number, then perform one of the following operations upon it: | | FIX   *[dof code](The%20Dialogue%20command%20structure.html#dc)* | Restrain the assembly in degrees of freedom  *[dof code](The%20Dialogue%20command%20structure.html#dc)* |<br>| --- | --- |<br>| TRANSLATE   *[dx, dy, dz](The%20Dialogue%20command%20structure.html#tv)* | Translate assembly  ***by***  amount  *[dx,dy,dz](The%20Dialogue%20command%20structure.html#tv)* |<br>| RX or RY or RZ   *[theta](The%20Dialogue%20command%20structure.html#angle)* | Rotate assembly  ***to***  angle  *[theta](The%20Dialogue%20command%20structure.html#angle)* degrees about x/y/z |<br>| **RESET** | Undo all dummy transformations and return to initial state |<br>| **DONE** | Finish with assembly and return to DUMMY &gt; prompt |<br>| **CONTACT** | OFF or ON. Turns assembly contact (if defined) on/off during positioning. | |
| POINT | Select a point by name or number, then perform one of the following operations upon it: <br>(Note: moving the point implicitly moves its "owner" assembly.) | | FIX   *[dof code](The%20Dialogue%20command%20structure.html#dc)* | Restrain the point in degrees of freedom  *[dof code](The%20Dialogue%20command%20structure.html#dc)* |<br>| --- | --- |<br>| TRANSLATE   *[dx, dy, dz](The%20Dialogue%20command%20structure.html#tv)* | Translate point assembly  ***by***  amount  *[dx,dy,dz](The%20Dialogue%20command%20structure.html#tv)* |<br>| POSITION   *[x, y, z](The%20Dialogue%20command%20structure.html#ac)* | Translate point assembly  ***to***  coord  *[x, y, z](The%20Dialogue%20command%20structure.html#ac)* |<br>| **RESET** | Undo all dummy transformations and return to initial state |<br>| **DONE** | Finish with point and return to DUMMY &gt; prompt | |
| CONNECTION | Select a connection by name or number | | SLIDE  *distance* | Applies to LINE connections only, and will slide the joint by *distance* down its AB axis. |<br>| --- | --- |<br>| ANGLE  *theta* | Applies to LINE and HINGE connections only, and rotations the assemblies to achieve angle *theta* (in degrees) about the AB axis. | |
| POSITION | Specify a position *name* or *id* | Retrieves and applies the stored position *name* or *id* |
| SAVE | Specify a position id and (optional) *name* | Saves the current configuration as a saved position id, with optional *name* . |
| H\_POINT | Specify coordinate  *[x, y, z](The%20Dialogue%20command%20structure.html#ac)* | Will move the Dummy H-Point  ***to***  coord  *[x, y, z](The%20Dialogue%20command%20structure.html#ac)* |
| READ\_CONFIG | Specify a *filename* | Retrieves a free-standing dummy configuration file (the keywords and data between \*DUMMY\_START and \*DUMMY\_END ). *Filename* will usually have the extension .dcf |
| READ\_DUMMY\_ANGLE | Specify a *filename* | Retrieves and applies the overall orientation, H-Point and joint angles stored in a Dummy Angles File (usually extension .daf). |
| WRITE\_DUMMY\_ANGLE | Specify a *filename* | Writes out the Dummy Angles File, for the selected Dummy, with the specified filename. |
| ACCURACY | Specify a *value* | Global factor on the accuracy of the mechanism positioning process. Value must lie in the range 0.1 to 100.0 |
| ACCEPT | Accept the current dummy position, save its updated geometry and return to the main [PRIMER &gt;] prompt. |
| RESET | Undo all transformations and restore the initial geometry of the dummy, remaining at this prompt level. |
| QUIT | Undo all transformations and restore the initial geometry of the dummy, then return to the main [PRIMER &gt;] prompt. |

| Meanings of terms in the table above |
| --- |
| *dof code* | Is a numeric Degree of Freedom code made up of any permutation of 123456, where <br>1 = Tx, 2 = Ty, 3 = Tz, 4 = Rx, 5 = Ry, 6 = Rz<br> <br>For example code 136 means restraint in TX, Tz, Rz<br> <br>Code 0 may also be used, meaning "free all restraints" |
| *dx, dy, dz* | Is a translation vector, ie a relative movement from the current position, made up of three numbers. <br>For example 10.0 20.0 30.0 means translate 10.0 in X, 20.0 in Y, 30.0 in Z.<br> <br>"Wildcard" syntax is permitted: any number entered as an asterisk ("\*"), and omitted trailing digits, are treated as "free" values. For example:<br> <br>10.0 means translate 10.0 in X, but permit Y and Z to adopt any value. <br> \* \* 20.0 means translate 20.0 in Z, but permit X and Y to adopt any value |
| *x, y, z* | Is an absolute coordinate. <br>For example 10.0 20.0 30.0 means coordinate X=10, Y=20, Z=30.<br> <br>Wildcards as for translations above are permitted |
| *theta* | Is an angle in degrees for the given degree of freedom. <br>In a dummy model angles are absolute values expressed in the coordinate system of the connection between this assembly and its parent. In most cases this will mean the system implied by the local axes of the joint stiffness definition at the joint. |

[Previous](further-positioning-commands.md)  |  [Next](using-dummies-as-children-of-mechanisms.md)