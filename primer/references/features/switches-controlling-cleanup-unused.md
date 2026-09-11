####  Switches Controlling CLEANUP UNUSED

Clearly PRIMER must search through the model(s) chosen to identify things that are no longer needed, and there are several switches which may be used to control this process.

#####  CLEANUP_ITERATIVE Whether to use iterative searching for items.

Sometimes when an item is found to be redundant removing it can lead to other items becoming redundant. It may require multiple passes through the model to identify all these consequential deletions.

For example, if a model contains a part with no elements then in the first iteration the part will be flagged for removal. Iteration 2 will find that the section and material properties etc that this part referenced are also no longer required and will flag them for removal (unless other parts reference these). Iteration 3 will find any loadcurves etc used by the materials that have been flagged for removal (if these aren't used by other materials). And so on until nothing remains to be found.

By default this iterative process will be used, but you can turn it off in order to limit the extent of a clean-up operation to a single pass. This can give more control over what is removed in each **CLEANUP** operation.

| | EMPTY_SET_ACTION Dealing with empty SETS.  <br>![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_2_2a.gif)When all the contents of a SET have been removed (following a **REMOVE** operation) the empty SET definition itself may remain.<br> <br>This is not strictly illegal, but it can cause problems in the analysis code at run-time since Ansys LS-DYNA may crash if sets with no contents are found. |<br>| --- |<br><br> <br>Therefore PRIMER treats it as an error, and provides the following options for dealing with it:<br> <br><br>| No action | The set is not removed, and references to it remain |<br>| --- | --- |<br>| Del Set, Owner = 0 | The set is marked for deletion, and any references to it are replaced with a zero. This can cause unexpected outcomes when &lt; **set id = 0** &gt; implies "use the whole model", as is the case in some contexts - use with care! |<br>| Del Set & Owner | Both the set  ***and the item referring to it***  are marked for deletion. This is the default setting, and generally the most useful. |<br><br> <br>.There is an exception in the last ( Del Set & Owner ) case in that where a reference to a set is optional, for example "set of nodes exempted from ..." where replacing the reference with a zero would be harmless, that solution is adopted instead and the "owner" definition is not marked for deletion. |
| --- |

| EMPTY_PART_ACTION Dealing with empty Parts  <br>![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_2_2b.gif)If all the elements have been deleted from (or transferred out of) a part then it will be empty.<br> <br>As with empty sets this is not strictly illegal, but it can cause problems in Ansys LS-DYNA. |
| --- |

Therefore PRIMER treats it as an error and provides the following options:

| No action | The part is not removed, and references to it remain. |
| --- | --- |
| Del Part, Owner = 0 | The part is marked for deletion, and any references to it are replaced with a zero. This can cause unexpected outcomes when &lt; **part id = 0** &gt; implies "use the whole model", as is the case in some contexts - use with care! |
| Del Part & Owner | Both the part  ***and the item referring to it***    **** are marked for deletion. This is the default setting, and generally the most useful. |

| EMPTY_IFILE_ACTION Dealing with empty include files..  <br>![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_1_1a.png)If cleaning up of the model will leave empty include files the historic behaviour has been not to remove these, but rather to leave the the \*INCLUDE card referencing the empty file.<br> <br>This can be a nuisance since if it is an \*INCLUDE\_TRANSFORM then any \*DEFINE\_TRANSFORMATION that it references will also be locked against deletion, as will any parameters used on either of these cards, even if these are legitimate subjects for a "clean up". |
| --- |
| From release 12 onwards there is now an " Empty Include file action " option:<br> <ul> <li>By default &quot; <span class="buttontext">No action </span>&quot; is taken, meaning that behaviour is exactly the same as before and an empty file and its associated <span class="courierbold">*INCLUDE </span>cards will be left in the model. <br> <br> </li> <li>Choosing &quot; <span class="buttontext">Remove file </span>&quot; will permit the include file to be cleaned up if it is empty. This will, in turn, also permit any <span class="courierbold">*DEFINE_TRANSFORMATION </span>and <span class="courierbold">*PARAMETER </span>cards referenced by that file to be cleaned up </li> </ul> |

| NON_STRUCT_ITEMS Dealing with items that have no structural purpose  <br>Following the removal of other things you can be left with valid and legal objects which are nevertheless "non-structural", meaning that they will not play any part in an analysis. |  |
| --- | --- |

| PRIMER can detect and mark for deletion the following:<br> <br><br>| ACCELEROMETERS | Accelerometers which exist in isolation |<br>| --- | --- |<br>| NODES | Nodes which are not attached to elements, not extra nodes on a rigid part or some other constraint, and not useful in any other context. |<br>| LUMPED MASSES  **** | Lumped mass elements attached to non-structural nodes. |<br>| INERTIAS  **** | Inertia elements attached to non-structural nodes. |<br><br> <br>Some of the seatbelt-related elements (sliprings, pretensioners, etc) can also be non-structural by the definitions above. However they may often be imported as part of pre-meshed dummy models, and will become structural when attached to a vehicle, thus it would be unfortunate if they were accidentally deleted. Therefore they are not included in these checks and will need to be deleted manually if required, but the overhead of leaving them is minimal. |
| --- |

| Other things marked for deletion during a cleanup operation.  <br>As well as items which are unused, plus those which meet the criteria above, the following things are also automatically checked and marked for deletion as required:<br> <br>**CONSTRAINED** definitions which have become redundant or invalid:<br> <ul> <li>Generalized welds referencing sets containing fewer than 2 nodes; </li> <li>Linear constraints ditto </li> <li>Node sets ditto </li> <li>Shell to solid defns ditto </li> <li>Tied nodes ditto </li> <li>Joints for which attached parts are absent, no longer rigid, or non-structural; </li> </ul> <br>**SEGMENTS**   **** that are no longer valid:<br> <ul> <li>Because their parent set, load or other definition has been removed; </li> <li>Because they no longer lie on a shell element, or the face of a 3D element. </li> </ul> <br>"Latent" definitions serving no useful purpose plus their referees:<br> <ul> <li>Items referenced in sets, boundary conditions, database cards, initial definitions, etc that have never been explicitly defined or referenced in other contexts. These can be deleted along with the references to them since they do not serve any independent purpose in isolation. (For example a restraint on a node not referred to anywhere else is redundant.) </li> </ul> |
| --- |

[Previous](cleanup-unused-example.md)  |  [Next](when-multiple-calls-to-cleanup-unused-may-be-required.md)