###  Rules for "Tree" Files

####  Syntax:

| \* - Syntax is based on Ansys LS-DYNA keyword format. Thus numbers should be right-justified in their respective fields, and comment lines ($....) may be inserted anywhere. Character strings should be left justified. |
| --- |
| \* Any \*DUMMY\_... cards must appear after the \*END card in an input file, as Ansys LS-DYNA will not recognise them. |
| \* - Only the keywords described above may appear between the \*DUMMY\_START and \*DUMMY\_END cards. |

####  Numbering:

| \* There are no restrictions on the labels for dummies or assemblies, other than that they must be valid, positive integers. |
| --- |
| \* Dummy numbers must be unique: you cannot have two dummies numbered "2" within a model. |
| \* Assembly numbers within a dummy must be unique: you cannot have two assemblies numbered "10" within a dummy. Assembly numbers are "private" to their parent dummy definition. Thus if you have two dummies in a model both may have an assembly numbered "8" without there being any conflict. |
| \* Thus when dummies are merged into a model, or models already containing dummies are merged, the dummy numbers may need to be incremented but the assembly numbering within a model will not be changed. Note that the merge operation may result in the numbering of part/set/node/etc entities being changed, this will be reflected in the dummy definition too. |
| \* Assemblies can only refer to PARTs, SET\_PARTs, NODEs, JSTFs, etc that are within their current model. Thus a dummy tree file definition cannot be used independently of a model and, more importantly, when transferring dummy definitions between input decks by hand take great care to ensure that the node/part/set/etc numbering in the new deck matches that in the old one. (If PRIMER is used to merge decks this is handled automatically.) |

| Modelling rules:  <br>Problems are likely to arise if "free-standing" items such as \*DEFINE\_BOX , \*DEFINE\_COORDINATE\_SYSTEM s defined other than by nodes, and such like, are used. |
| --- |

The reason is that these items do not belong unambiguously to PARTs, so they may not be flagged for rotation/translation/reflection when a part is so operated upon. As a consequence orienting a dummy or its assemblies may move items in or out of them. Therefore it is recommended that:

| \*DEFINE\_BOX | Should not be used, since this may not be oriented correctly. Contacts, walls, etc should avoid selecting tracked entities by volume, and use instead PART, SET, SEGMENT or NODE ids. |
| --- | --- |
| \*DEFINE\_VECTOR | Should also not be used, for the same reasons. |
| \*DEFINE\_COORDINATE | Should only be used in its \_NODES variant, and the nodes employed should be attached to the parent PART that is supposed to control its orientation. The attachment method doesn't matter: explicit nodes on elements, extra nodes on rigid bodies, rigid body merges, nodal rigid bodies, etc; so long as the nodes are subordinate to the PART in question. |
| \*DEFINE\_SD\_ORIENT.. | Can be used so long as some thought is given to its use. These orientation vectors are unambiguously subordinate to their parent DISCRETE elements, so they meet the requirement that they are attached to PARTs. But, obviously, problems will arise if a single orientation vector is used for springs in different PARTs which may be rotated independently. You should use separate orientation vectors for all springs unless it is clear that a group of springs will always be rotated together (effectively rigidly). It is not mandatory to use the two node method for defining these vectors, although this may help to make the display of them clearer since it will both locate them in space and give them an explicit length **.** |

The restrictions on BOX es and VECTOR s may be eased in the future if a method of defining them by nodes becomes available. This will move them to the same status as the \*DEFINE\_COORDINATE\_NODES option.

| \*MAT\_RIGID | May be used, but if the options to constrain the material or request output in local coordinate systems are used, then separate \*MAT\_RIGID definitions should be repeated for each assembly of parts. For restraining motion of rigid bodies it might be preferable to use the \*BOUNDARY\_PRESCRIBED\_ MOTION\_RIGID method, but not its \_LOCAL variant! |
| --- | --- |
| \*MAT\_xx orthotropic | Where orthotropic materials are used problems will only arise if global orthotropicity is defined. This presents the same problem as above in a different guise, since different PARTs sharing a common material can only have a single set of material axes defined. Again, the solution is to have separate material definitions for each part (or rigidly connected set of parts). |

These two restrictions on the use of material models may be removed in the future, as PRIMER may detect this conflict and generate separate material definitions automatically; but for the time being they stand, and represent good modelling practice anyway.

A PART may not appear in more than one assembly in a dummy, otherwise a conflict will arise when it is positioned because more than one assembly will be trying to update the part's nodal positions. This will be detected as an error and the dummy definition will be rejected.

Similarly a NODE should not have its motion "driven" during positioning by more than one assembly. This could happen if a part defined in assembly A extended to include elements and/or nodes common with parts in assembly B. This too will be detected and flagged as an error. However there are some specific exceptions to this rule:

1. **Extra nodes on a rigid part in assembly A may legally be part of structure in assembly B.**  
 
This is common modelling practice where two assemblies need to be able to articulate during positioning, but to be clamped together during analysis. The positioner detects this situation and ensures that motion of assembly A does not update the coordinates of its "extra" nodes in assembly B. 
 
   ****
2. **Rigid parts in assembly B that are constrained to a lead part in Assembly A are permitted.**  
 
This is also common modelling practice to achieve articulation during positioning, but a rigid connection during analysis. Normally PRIMER carries motion of a lead rigid part through to its constrained parts, but in the positioner this is detected and the constrained part's nodes will not be updated if they are found to be present on a different assembly to that of the lead part.
3. **If a part consisting of null shells (material type 9) is used to "skin" the Dummy in order to give a continuous surface for contact it is legal for this part to cover more than one assembly.**  
 
Such a part will not be included when nodal coordinates are updated following positioning, so the assemblies in question should also include "structural" parts (as would be required during analysis anyway). However such a part may still only be defined once in the dummy, even if its connectivity spans multiple assemblies. However there is an exception to this exception: 
 
 **Exception: "Isolated" null shell parts *are* included when an assembly is positioned.**  
 
Experience with working dummies has shown that some modellers build target markers into their dummies by creating targets made out of null shell parts, attached to the dummy by tied contacts. The "exclude null shell parts" rule implicit in exception (3) above meant that these target markers got left behind when the dummy moved since their nodes were not on parts in the assembly. 
 
To fix this problem null shell parts  ***are***  moved with an assembly if their nodes are not common to any "structural" (meaning on non-null parts or on node sets) nodes in the assembly. The restriction that such parts should not span more than one assembly remains, meaning that target markers defined in this way must have separate null shell parts for each assembly's markers.
4. **Orientation ("3rd") nodes on beams in assembly A that are located in assembly B may *optionally* be ignored.**  
 
Normally it would be both illegal and also extremely poor modelling practice to locate the 1st two nodes of a beam in one assembly and its "3rd node" in another one. However there are occasions when this might occur, for example when beams are circular in section so their orientation is not important, and any old node will suffice for orientation. 
 
The pre-positioning check will detect this and warn you, and strictly speaking you should correct the model to eliminate the problem. However there is an " Ignore B3 " option following the check which, if chosen, will suppress propagation to 3rd nodes of beams. This setting is "remembered" for the Dummy or Mechanism for the duration of this PRIMER session so that the warning will not pop up again each time you perform a positioning operation. 
 
This should be regarded as a quick and dirty way to deal with an annoying problem, and not as a solution. In particular if you are preparing models for others to use you should not rely on this flag since your future users will have to select it every time they position your model. 
   ****
5. **PRIMER connections between assemblies may *optionally* be ignored**  
 
Connections in PRIMER may be "made" if they have been explicitly realised, or "potential" if they would be realised via a pass through the Connection menu. The Dummy and Mechanism positioner considers a "made" connection between two assemblies to be something that links them together, and it will give a warning about this in the pre-positioning check. However it will not consider "potential" connections in the same location. 
 
You can choose to ignore connections in the pre-positioning check via the " Ignore Conn " option, but you need to think through what this will imply. In particular a "made" connection which straddles two assemblies may be pulled apart when they are positioned causing it to become invalid. For example a spotweld beam may not longer be tied to its surface, or a weld may become too long. 
 
On the whole it is probably best to avoid joining Dummy and Mechanism assemblies via PRIMER connections, but if it is to be done this way then it is recommend that they are rechecked when the positioning process is completed.

The list above is almost certainly not exhaustive: builders of dummy models should think through carefully what happens when assemblies of PARTs are oriented independently of each other.

[Previous](bi-dummy-tree-file-format.md)  |  [Next](example-of-a-tree-file.md)