**"oa\_pref" arguments valid for PRIMER**

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| analysis\_tracking\_tool\_dir\_level | &lt;integer&gt; | The dir level written to the analysis register by the Analysis Tracking Tool, where '0' is the kwd file dir, '1' is its 'parent' dir, '2' is its 'grandparent' dir, etc. |  | 0 |
| default\_keyw\_fav | &lt;logical&gt; | Make the Favourites tab for Keywords the default tab that gets mapped | TRUE, FALSE | FALSE |
| default\_tool\_fav | &lt;logical&gt; | Make the Favourites tab for Tools the default tab that gets mapped | TRUE, FALSE | FALSE |
| error\_handler | &lt;string&gt; | how to handle errors and exceptions | no\_action, mini\_dump, trap\_continue, trace\_exit | mini\_dump |
| icfd\_init\_label\_clash\_part\_type | &lt;string&gt; | Set a part type to be used if there are clashing icfd\_part and icfd\_part\_vol ids | ICFD\_PART, ICFD\_PART\_VOL | ICFD\_PART |
| json\_bookmarks\_file | &lt;string&gt; | File to read the JSON formatted bookmarks for "LS-DYNA Submission" |  | &lt;none&gt; |
| nurbs\_degree\_reduction\_tolerance | &lt;real&gt; | Maximum error tolerance while reducing NURBS curve degree in \*ELEMENT\_SHELL\_NURBS\_PATCH edit panel. |  | 1.0 |
| pdf\_keyword\_args | &lt;string&gt; | Commands to use when opening keyword manual using user specified pdf application. Use %p to indicate a page number, e.g. use the following for Acrobat Reader: /A page=%p |  | &lt;none&gt; |
| save\_dialogue\_dir | &lt;string&gt; | Directory in which to save dialogue info on exit (otherwise deleted) |  | &lt;none&gt; |
| save\_window\_positions | &lt;logical&gt; | Save position of undocked windows between sessions | TRUE, FALSE | TRUE |
| segment\_count\_for\_bucket\_sort\_warning | &lt;integer&gt; | Threshold for warning of excessive number of segments in bucket |  | 1000000 |
| show\_license\_warning | &lt;logical&gt; | Display Window containing License System messages | TRUE, FALSE | TRUE |
| splash\_screen\_seen | &lt;real&gt; | Most recent version (as major.minor, eg 17.1) for which a splash screen has been seen |  | 0.0 |
| start\_in | &lt;string&gt; | Directory to start Primer in |  | &lt;none&gt; |

The following controls the default ascii file output

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| ABSTAT\_asc | &lt;string&gt; | ABSTAT ascii file selected | ON, OFF | OFF |
| BNDOUT\_asc | &lt;string&gt; | BNDOUT ascii file selected | ON, OFF | OFF |
| DEFGEO\_asc | &lt;string&gt; | DEFGEO ascii file selected | ON, OFF | OFF |
| DEFORC\_asc | &lt;string&gt; | DEFORC ascii file selected | ON, OFF | OFF |
| ELOUT\_asc | &lt;string&gt; | ELOUT ascii file selected | ON, OFF | OFF |
| GCEOUT\_asc | &lt;string&gt; | GCEOUT ascii file selected | ON, OFF | OFF |
| GLSTAT\_asc | &lt;string&gt; | GLSTAT ascii file selected | ON, OFF | OFF |
| H3OUT\_asc | &lt;string&gt; | H3OUT ascii file selected | ON, OFF | OFF |
| JNTFORC\_asc | &lt;string&gt; | JNTFORC ascii file selected | ON, OFF | OFF |
| MATSUM\_asc | &lt;string&gt; | MATSUM ascii file selected | ON, OFF | OFF |
| NCFORC\_asc | &lt;string&gt; | NCFORC ascii file selected | ON, OFF | OFF |
| NODFOR\_asc | &lt;string&gt; | NODFOR ascii file selected | ON, OFF | OFF |
| NODOUT\_asc | &lt;string&gt; | NODOUT ascii file selected | ON, OFF | OFF |
| RBDOUT\_asc | &lt;string&gt; | RBDOUT ascii file selected | ON, OFF | OFF |
| RWFORC\_asc | &lt;string&gt; | RWFORC ascii file selected | ON, OFF | OFF |
| SECFORC\_asc | &lt;string&gt; | SECFORC ascii file selected | ON, OFF | OFF |
| RCFORC\_asc | &lt;string&gt; | RCFORC ascii file selected | ON, OFF | OFF |
| SBTOUT\_asc | &lt;string&gt; | SBTOUT ascii file selected | ON, OFF | OFF |
| SLEOUT\_asc | &lt;string&gt; | SLEOUT ascii file selected | ON, OFF | OFF |
| SPCFORC\_asc | &lt;string&gt; | SPCFORC ascii file selected | ON, OFF | OFF |
| SPHOUT\_asc | &lt;string&gt; | SPHOUT ascii file selected | ON, OFF | OFF |
| SWFORC\_asc | &lt;string&gt; | SWFORC ascii file selected | ON, OFF | OFF |
| TPRINT\_asc | &lt;string&gt; | TPRINT ascii file selected | ON, OFF | OFF |
| TRHIST\_asc | &lt;string&gt; | TRHIST ascii file selected | ON, OFF | OFF |

The following relate to assemblies

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| assembly\_output\_format | &lt;string&gt; | Format for writing post \*END assembly data | PRIMER, HYPERMESH, ANSA, CUSTOMER | PRIMER |
| assembly\_read\_mode | &lt;string&gt; | Action for existing assemblies when reading assembly data in part tree | RESET, OVERWRITE, ASK | ASK |

The following relate to assign mass function

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| assign\_mass\_percent\_error\_tolerance | &lt;real&gt; | Error tolerance (percent) for Assign Mass Calculation |  | 5.0 |
| assign\_mass\_includes\_timestep\_mass | &lt;string&gt; | massing up function includes timestep added mass | OFF, ON | OFF |
| assign\_mass\_includes\_attached\_mass | &lt;string&gt; | Default is to include attached mass which is free or belongs to ASSM of lower label if overmassing | FREE\_AND\_LOWER, NONE, ALL | FREE\_AND\_LOWER |
| assign\_mass\_emp\_to\_part\_include | &lt;string&gt; | newly created \*EMP to same include as PART (otherwise same include as ASSM) | ON, OFF | ON |
| assign\_mass\_masses\_to\_part\_include | &lt;string&gt; | newly created \*ELEMENT\_MASS to same include as PART (otherwise same include as ASSM) | ON, OFF | OFF |

The following control attributes of the [attached](https://help.oasys-software.com/articles/project-primer/attached-displaying-what-is-attached-to-things) function

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| attached\_tied\_contact | &lt;string&gt; | Attach through tied contacts (program setting initially ON) | ON, OFF, PROG | PROG |
| attached\_beam\_pid | &lt;string&gt; | Attach through beam PIDs (program setting initially OFF) | ON, OFF, PROG | PROG |
| attached\_beam\_3rd\_node | &lt;string&gt; | Attach through beam third node (program setting initially OFF) | ON, OFF, PROG | PROG |
| attached\_recursive | &lt;string&gt; | Find attached recursively (program setting initially OFF) | ON, OFF, PROG | PROG |
| find\_attached\_through | &lt;string&gt; | Sets up the initial entity switches for attached |  | &lt;none&gt; |

Options to control behaviour of the battery setup tool.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| battery\_undo\_warn | &lt;logical&gt; | Warn before deleting entities from following steps | TRUE, FALSE | TRUE |
| battery\_overwrite\_analysis\_warn | &lt;logical&gt; | Warn before overwriting control keywords in 'Analysis' panel | TRUE, FALSE | TRUE |

The following controls the default binary file output

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| ABSTAT\_bin | &lt;string&gt; | ABSTAT binary file selected | ON, OFF | OFF |
| BNDOUT\_bin | &lt;string&gt; | BNDOUT binary file selected | ON, OFF | OFF |
| DEFGEO\_bin | &lt;string&gt; | DEFGEO binary file selected | ON, OFF | OFF |
| DEFORC\_bin | &lt;string&gt; | DEFORC binary file selected | ON, OFF | OFF |
| ELOUT\_bin | &lt;string&gt; | ELOUT binary file selected | ON, OFF | OFF |
| GCEOUT\_bin | &lt;string&gt; | GCEOUT binary file selected | ON, OFF | OFF |
| GLSTAT\_bin | &lt;string&gt; | GLSTAT binary file selected | ON, OFF | OFF |
| H3OUT\_bin | &lt;string&gt; | H3OUT binary file selected | ON, OFF | OFF |
| JNTFORC\_bin | &lt;string&gt; | JNTFORC binary file selected | ON, OFF | OFF |
| MATSUM\_bin | &lt;string&gt; | MATSUM binary file selected | ON, OFF | OFF |
| NCFORC\_bin | &lt;string&gt; | NCFORC binary file selected | ON, OFF | OFF |
| NODFOR\_bin | &lt;string&gt; | NODFOR binary file selected | ON, OFF | OFF |
| NODOUT\_bin | &lt;string&gt; | NODOUT binary file selected | ON, OFF | OFF |
| RBDOUT\_bin | &lt;string&gt; | RBDOUT binary file selected | ON, OFF | OFF |
| RWFORC\_bin | &lt;string&gt; | RWFORC binary file selected | ON, OFF | OFF |
| SECFORC\_bin | &lt;string&gt; | SECFORC binary file selected | ON, OFF | OFF |
| RCFORC\_bin | &lt;string&gt; | RCFORC binary file selected | ON, OFF | OFF |
| SBTOUT\_bin | &lt;string&gt; | SBTOUT binary file selected | ON, OFF | OFF |
| SLEOUT\_bin | &lt;string&gt; | SLEOUT binary file selected | ON, OFF | OFF |
| SPCFORC\_bin | &lt;string&gt; | SPCFORC binary file selected | ON, OFF | OFF |
| SPHOUT\_bin | &lt;string&gt; | SPHOUT binary file selected | ON, OFF | OFF |
| SWFORC\_bin | &lt;string&gt; | SWFORC binary file selected | ON, OFF | OFF |
| TPRINT\_bin | &lt;string&gt; | TPRINT binary file selected | ON, OFF | OFF |
| TRHIST\_bin | &lt;string&gt; | TRHIST binary file selected | ON, OFF | OFF |

The following control BOM read

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| alternate\_bom\_read\_method | &lt;logical&gt; | when reading BOM set material from title match; create section, hourglass | TRUE, FALSE | FALSE |
| bom\_read\_apply\_target\_massing | &lt;string&gt; | option to process target massing when reading BOM | ASK, TRUE, FALSE | ASK |

The following control attributes of the [model checking](https://help.oasys-software.com/articles/project-primer/model-check) function

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| error\_configuration\_file | &lt;string&gt; | user file to configure error/warning/ignore status |  | &lt;none&gt; |
| check\_tree\_category\_list | &lt;string&gt; | list of user categories to be displayed on check tree e.g. LOW\_PRIORITY:HIGH\_PRIORITY:FATAL |  | &lt;none&gt; |
| error\_tags | &lt;string&gt; | show Primer error code for every error and warning | ON, OFF | OFF |
| rechecking\_level | &lt;string&gt; | Post fix/edit recheck level in error tree viewer | 0, 1, 2, 3 | 2 |
| default\_table\_create | &lt;string&gt; | default option for table create edit panel. \_NONE deprecated, \_2D most preferred ! | NONE, 2D | 2D |
| **beams** |
| beam\_orient\_vector\_min\_angle | &lt;real&gt; | Minimum angle (radians) between beam axis and orientation vector below which it should be flagged as error |  | 0.001 |
| **contact** |
| contact\_check\_mode | &lt;string&gt; | use MPP or SMP treatment for contact analysis | MPP, SMP | MPP |
| beam\_on\_beam\_automatic\_general\_contact\_method | &lt;string&gt; | treatment for Automatic General analysis of beam to beam contact | BASIC, ENHANCED | ENHANCED |
| contact\_check\_shells\_for\_thinning | &lt;string&gt; | report shells where LS-Dyna contact thickness less than 90% of actual | ON, OFF | OFF |
| contact\_check\_contents | &lt;string&gt; | check surfB and surfA side of contact for contents | ON, OFF | ON |
| contact\_rigorous\_cntco\_check | &lt;string&gt; | run rigorous (slow) check for CNTCO=1 needed when shells in contact use OFFSET or NLOC | ON, OFF | OFF |
| contact\_stiffness\_check | &lt;string&gt; | Check for contact stiffness mismatch | ON, OFF | OFF |
| max\_allowable\_contact\_stiffness\_ratio | &lt;real&gt; | Max allowable ratio of contact stiffnesses |  | 100.0 |
| **sliding\_contact** |
| report\_crossed\_3d\_elems | &lt;string&gt; | report crossed edges for 3d elements | ON, OFF | ON |
| contact\_penetration\_threshold | &lt;real&gt; | if set to zero, SMP calculates threshold, MPP will use min(0.001, SMP penetration threshold) |  | 0.0 |
| contact\_penetration\_checks | &lt;string&gt; | Contact penetration checking | ON, OFF | OFF |
| contact\_penetration\_max\_allowable\_value | &lt;real&gt; | allowable penetration expressed as value |  | 0.0 |
| contact\_penetration\_min\_remaining\_depth | &lt;real&gt; | allowable penetration expressed as remaining segment depth |  | 0.0 |
| contact\_penetration\_min\_remaining\_depth\_factor | &lt;real&gt; | allowable penetration expressed as remaining factor on segment depth |  | 0.0 |
| contact\_ignore\_pen\_on\_same\_rigid\_body | &lt;logical&gt; | if node and segment on same rigid body ignore the penetration | TRUE, FALSE | true |
| **tied\_contact** |
| contact\_check\_constrained\_clash | &lt;string&gt; | check for segment clashes between constrained contacts | ON, OFF | ON |
| contact\_check\_all\_connection\_nodes\_tie | &lt;string&gt; | all nodes of connections must tie | ON, OFF | ON |
| contact\_check\_tied | &lt;string&gt; | check that all tied contacts tie at least one node | ON, OFF | OFF |
| contact\_treat\_attached\_node\_as\_tied | &lt;logical&gt; | include attached nodes in tied contact in the tied count | TRUE, FALSE | TRUE |
| contact\_check\_all\_tracked\_nodes\_by\_part\_tie | &lt;string&gt; | all tracked nodes defined by part must tie | ON, OFF | OFF |
| contact\_check\_all\_tracked\_nodes\_by\_node\_set\_tie | &lt;string&gt; | all tracked nodes defined by node set must tie | ON, OFF | OFF |
| contact\_check\_all\_tracked\_nodes\_on\_shell\_edge\_tie | &lt;string&gt; | all tracked nodes on shell edge must tie | ON, OFF | OFF |
| contact\_check\_all\_tracked\_nodes\_on\_solid\_face\_tie | &lt;string&gt; | all tracked nodes on exterior faces of solids must tie | ON, OFF | OFF |
| contact\_allow\_spotweld\_offset\_option | &lt;logical&gt; | allow \*CONTACT\_SPOTWELD\_OFFSET (though Dyna manual prohibits it) | TRUE, FALSE | FALSE |
| **crash\_dump\_handling** |
| cd\_compose\_email | &lt;logical&gt; | Whether or not to offer to compose an email for sending minidump files. | TRUE, FALSE | TRUE |
| cd\_email\_address | &lt;string&gt; | Email address in To: field of crash dump emails. |  | dyna.support@arup,com |
| cd\_cc\_addresses | &lt;string&gt; | Email address(es) in Cc: field of crash dump emails. |  | &lt;none&gt; |
| cd\_custom\_email | &lt;string&gt; | Custom method of sending emails. |  | &lt;none&gt; |
| cd\_dump\_directory | &lt;string&gt; | Directory in which to save crash dump files |  | &lt;none&gt; |
| cd\_email\_method | &lt;string&gt; | Method used to create crash dump emails. | BEST\_EFFORT, SYSTEM\_DEFAULT, OUTLOOK\_CLI, URL\_MAILTO, CUSTOM | BEST\_EFFORT |
| cd\_minidump\_file | &lt;string&gt; | Whether or not to create minidump files, and what to do with them. | NOT\_USED, SAVED\_ONLY, EMAILED\_ONLY, SAVED\_AND\_EMAILED | SAVED\_AND\_EMAILED |
| **dyna\_load\_profile\_graph\_panel** |
| dyna\_profile\_graph\_width | &lt;integer&gt; | Graph's bar width. | 1 - 10 | 4 |
| dyna\_profile\_graph\_gap | &lt;integer&gt; | Gap between graph's bar. | 1 - 10 | 1 |
| minimize\_dyna\_profile\_graph\_after\_only | &lt;logical&gt; | minimize dyna graph panel after sketch/only. | TRUE, FALSE | FALSE |
| **element\_quality\_checks** |
| element\_quality\_checks\_active | &lt;string&gt; | Element quality check settings at program start | ON, OFF, PREF | PREF |
| interpolation\_node\_deviation | &lt;real&gt; | Maximum percentage deviation an interpolation node can have before triggering a warning. (For a node on an edge: % of length of the edge). | 0.0 - 100.0 | 1.0 |
| **shells** |
| shell\_length\_check | &lt;string&gt; | Shell quality length checking | ON, OFF | OFF |
| shell\_min\_length | &lt;real&gt; | Shell quality minimum length. Negative for automatic unit conversion for models in metres. |  | -5 |
| shell\_aspect\_ratio\_check | &lt;string&gt; | Shell quality aspect ratio checking | ON, OFF | OFF |
| shell\_max\_aspect\_ratio | &lt;real&gt; | Shell quality maximum aspect ratio |  | 5 |
| shell\_warpage\_check | &lt;string&gt; | Shell quality warpage checking | ON, OFF | OFF |
| shell\_max\_warpage | &lt;real&gt; | Shell quality maximum warpage | 0.0 - 180.0 | 20 |
| shell\_skew\_check | &lt;string&gt; | Shell quality skew checking | ON, OFF | OFF |
| shell\_max\_skew | &lt;real&gt; | Shell quality maximum skew | 0.0 - 180.0 | 60 |
| shell\_tria\_angle\_check | &lt;string&gt; | Shell quality tria internal angle checking | ON, OFF | OFF |
| shell\_max\_tria\_angle | &lt;real&gt; | Shell quality tria maximum internal angle | 0.0 - 180.0 | 120 |
| shell\_min\_tria\_angle | &lt;real&gt; | Shell quality tria minimum internal angle | 0.0 - 180.0 | 30 |
| shell\_quad\_angle\_check | &lt;string&gt; | Shell quality quad internal angle checking | ON, OFF | OFF |
| shell\_max\_quad\_angle | &lt;real&gt; | Shell quality quad maximum internal angle | 0.0 - 180.0 | 140 |
| shell\_min\_quad\_angle | &lt;real&gt; | Shell quality quad minimum internal angle | 0.0 - 180.0 | 40 |
| shell\_jacobian\_check | &lt;string&gt; | Shell quality jacobian checking | ON, OFF | OFF |
| shell\_min\_jacobian | &lt;real&gt; | Shell quality minimum jacobian | 0.0 - 1.0 | 0.7 |
| shell\_taper\_check | &lt;string&gt; | Shell quality taper check | ON, OFF | OFF |
| shell\_max\_taper | &lt;real&gt; | Shell quality maximum taper |  | 0.5 |
| **solids** |
| solid\_length\_check | &lt;string&gt; | Solid quality length checking | ON, OFF | OFF |
| solid\_min\_length | &lt;real&gt; | Solid quality minimum length. Negative for automatic unit conversion for models in metres. |  | -5 |
| solid\_aspect\_ratio\_check | &lt;string&gt; | Solid quality aspect ratio checking | ON, OFF | OFF |
| solid\_max\_aspect\_ratio | &lt;real&gt; | Solid quality maximum aspect ratio |  | 5 |
| solid\_warpage\_check | &lt;string&gt; | Solid quality warpage checking (use spotweld\_warpage\_check for spotweld/adhesive) | ON, OFF | OFF |
| solid\_max\_warpage | &lt;real&gt; | Solid quality maximum warpage (use spotweld\_max\_warpage for spotweld/adhesive) | 0.0 - 180.0 | 20 |
| solid\_skew\_check | &lt;string&gt; | Solid quality skew checking | ON, OFF | OFF |
| solid\_max\_skew | &lt;real&gt; | Solid quality maximum skew | 0.0 - 180.0 | 60 |
| solid\_tria\_angle\_check | &lt;string&gt; | Solid quality tria internal angle checking | ON, OFF | OFF |
| solid\_max\_tria\_angle | &lt;real&gt; | Solid quality tria maximum internal angle | 0.0 - 180.0 | 120 |
| solid\_min\_tria\_angle | &lt;real&gt; | Solid quality tria minimum internal angle | 0.0 - 180.0 | 30 |
| solid\_quad\_angle\_check | &lt;string&gt; | Solid quality quad internal angle checking | ON, OFF | OFF |
| solid\_max\_quad\_angle | &lt;real&gt; | Solid quality quad maximum internal angle | 0.0 - 180.0 | 140 |
| solid\_min\_quad\_angle | &lt;real&gt; | Solid quality quad minimum internal angle | 0.0 - 180.0 | 40 |
| solid\_jacobian\_check | &lt;string&gt; | Solid quality jacobian checking | ON, OFF | OFF |
| solid\_min\_jacobian | &lt;real&gt; | Solid quality minimum jacobian | 0.0 - 1.0 | 0.7 |
| solid\_tet\_collapse\_check | &lt;string&gt; | Solid quality tetrahedral collapse check | ON, OFF | OFF |
| solid\_min\_tet\_collapse | &lt;real&gt; | Solid quality minimum tetrahedral collapse |  | 0.1 |
| **tshells** |
| tshell\_length\_check | &lt;string&gt; | TShell quality length checking | ON, OFF | OFF |
| tshell\_min\_length | &lt;real&gt; | TShell quality minimum length. Negative for automatic unit conversion for models in metres. |  | -5 |
| tshell\_aspect\_ratio\_check | &lt;string&gt; | TShell quality aspect ratio checking | ON, OFF | OFF |
| tshell\_max\_aspect\_ratio | &lt;real&gt; | TShell quality maximum aspect ratio |  | 5 |
| tshell\_warpage\_check | &lt;string&gt; | TShell quality warpage checking | ON, OFF | OFF |
| tshell\_max\_warpage | &lt;real&gt; | TShell quality maximum warpage | 0.0 - 180.0 | 20 |
| tshell\_skew\_check | &lt;string&gt; | TShell quality skew checking | ON, OFF | OFF |
| tshell\_max\_skew | &lt;real&gt; | TShell quality maximum skew | 0.0 - 180.0 | 60 |
| tshell\_tria\_angle\_check | &lt;string&gt; | TShell quality tria internal angle checking | ON, OFF | OFF |
| tshell\_max\_tria\_angle | &lt;real&gt; | TShell quality tria maximum internal angle | 0.0 - 180.0 | 120 |
| tshell\_min\_tria\_angle | &lt;real&gt; | TShell quality tria minimum internal angle | 0.0 - 180.0 | 30 |
| tshell\_quad\_angle\_check | &lt;string&gt; | TShell quality quad internal angle checking | ON, OFF | OFF |
| tshell\_max\_quad\_angle | &lt;real&gt; | TShell quality quad maximum internal angle | 0.0 - 180.0 | 140 |
| tshell\_min\_quad\_angle | &lt;real&gt; | TShell quality quad minimum internal angle | 0.0 - 180.0 | 40 |
| tshell\_jacobian\_check | &lt;string&gt; | TShell quality jacobian checking | ON, OFF | OFF |
| tshell\_min\_jacobian | &lt;real&gt; | TShell quality minimum jacobian | 0.0 - 1.0 | 0.7 |
| **structural\_elements** |
| check\_min\_length\_timestep | &lt;string&gt; | Use timestep size of elements while checking minimum length | TRUE, FALSE | FALSE |
| maximum\_warpage\_criterion | &lt;real&gt; | Used to condition the calculation for highly warped elements | 0.0 - 180.0 | 180.0 |
| element\_jacobian\_calc\_method | &lt;string&gt; | Element jacobian calculation method | GAUSS, NODAL | GAUSS |
| ignore\_rigid\_element\_checks | &lt;logical&gt; | Element quality checks will not include elements of rigid parts (\*MAT\_20 and \*MAT\_220) | TRUE, FALSE | TRUE |
| ignore\_null\_part\_element\_checks | &lt;logical&gt; | Element quality checks will not include elements of null parts (\*MAT\_NULL) | TRUE, FALSE | TRUE |
| tet\_skew\_check | &lt;string&gt; | Skew check on Tet elements | ON, OFF | OFF |
| elem\_free\_end\_both | &lt;string&gt; | Report 1D elements only if both nodes are free | ON, OFF | OFF |
| elem\_free\_end\_check | &lt;string&gt; | Both nodes of 1D elements should be structural | ON, OFF | OFF |
| elem\_free\_end\_rigid | &lt;string&gt; | Report rigid 1D elements with free ends | ON, OFF | OFF |
| part\_quality\_check | &lt;string&gt; | Part quality check | ON, OFF | OFF |
| part\_quality\_min\_elem | &lt;integer&gt; | Min required number of elements for part quality check |  | 1 |
| part\_quality\_percent\_threshold | &lt;real&gt; | Threshold for part quality check |  | 10.0 |
| **weighting\_factors** |
| quality\_wt\_leng | &lt;real&gt; | Weighting factor for length |  | 1.0 |
| quality\_wt\_aspr | &lt;real&gt; | Weighting factor for aspect ratio |  | 1.0 |
| quality\_wt\_warp | &lt;real&gt; | Weighting factor for warpage |  | 1.0 |
| quality\_wt\_skew | &lt;real&gt; | Weighting factor for skew |  | 0.1 |
| quality\_wt\_lang | &lt;real&gt; | Weighting factor for min angle |  | 1.0 |
| quality\_wt\_uang | &lt;real&gt; | Weighting factor for max angle |  | 1.0 |
| quality\_wt\_jac | &lt;real&gt; | Weighting factor for jacobian |  | 0.0 |
| quality\_wt\_tap | &lt;real&gt; | Weighting factor for taper |  | 0.0 |
| quality\_wt\_tet | &lt;real&gt; | Weighting factor for tetrahedral collapse |  | 0.0 |
| quality\_wt\_tstp | &lt;real&gt; | Weighting factor for min timestep |  | 0.0 |
| quality\_wt\_admass | &lt;real&gt; | Weighting factor for max added mass |  | 0.0 |
| **history** |
| database\_node\_check | &lt;string&gt; | Check for absence of database history node | ON, OFF | OFF |
| database\_shell\_check | &lt;string&gt; | Check for absence of database history shell | ON, OFF | OFF |
| database\_tshell\_check | &lt;string&gt; | Check for absence of database history thick shell | ON, OFF | OFF |
| database\_solid\_check | &lt;string&gt; | Check for absence of database history solid | ON, OFF | OFF |
| database\_beam\_check | &lt;string&gt; | Check for absence of database history beam | ON, OFF | OFF |
| database\_sbelt\_check | &lt;string&gt; | Check for absence of database history seatbelt | ON, OFF | OFF |
| database\_discrete\_check | &lt;string&gt; | Check for absence of database history discrete | ON, OFF | OFF |
| database\_acoustic\_check | &lt;string&gt; | Check for absence of database history acoustic | ON, OFF | OFF |
| database\_des\_check | &lt;string&gt; | Check for absence of database history des | ON, OFF | OFF |
| **include** |
| part\_element\_include\_check | &lt;string&gt; | Check elements in same include as part | ON, OFF | OFF |
| element\_node\_include\_check | &lt;string&gt; | Check nodes in same include as element | ON, OFF | OFF |
| mass\_node\_include\_check | &lt;string&gt; | Check ELEMENT\_MASS(\_NODE) in same include as node | ON, OFF | OFF |
| section\_include\_check | &lt;string&gt; | Check sections in same include as part | ON, OFF | OFF |
| material\_include\_check | &lt;string&gt; | Check materials in same include as part | ON, OFF | OFF |
| **joint** |
| minimum\_joint\_mass\_value | &lt;real&gt; | minimum value of mass on joint node |  | 0.0 |
| minimum\_cylindrical\_joint\_size | &lt;real&gt; | minimum value for size of cylindrical joint |  | 0.0 |
| user\_max\_joint\_node\_separation | &lt;real&gt; | max allowable separation for joint nodes (n/a if zero) |  | 0.0 |
| output\_joint\_coinc\_check\_threshold | &lt;real&gt; | Critical coordinate magnitude (seek help from Support) | 0.0 - 1.0e37 | 8190.0 |
| output\_joint\_coinc\_check\_distance | &lt;real&gt; | Critical separation distance (seek help from Support) | 0.0 - 1.0e37 | 1.5e-3 |
| **label\_clash** |
| element\_label\_clash | &lt;string&gt; | Warn if there is a clash in elements ID | ON, OFF | OFF |
| set\_label\_clash | &lt;string&gt; | Warn if there is a clash in sets ID | ON, OFF | OFF |
| material\_label\_clash | &lt;string&gt; | Warn if there is a clash in materials ID | ON, OFF | OFF |
| **material** |
| mat24\_vp\_check | &lt;string&gt; | Check VP set when strain rate is active | ON, OFF | OFF |
| mat24\_strain\_check\_limit | &lt;real&gt; | Limiting strain value for Matl curve and table check |  | 10.0 |
| mat24\_required\_table\_curve\_separation\_factor | &lt;real&gt; | Minimum required table curve separation factor |  | 0.01 |
| mat24\_check\_curve\_discretization | &lt;string&gt; | Check for accuracy loss from discretization of MAT24 curves | ON, OFF | OFF |
| allowable\_relative\_error\_for\_discretized\_mat24\_curve | &lt;real&gt; | allowable relative error in interpolated Y value for discretized curve |  | 0.01 |
| **model\_check** |
| model\_check\_airbag | &lt;string&gt; | Check category AIRBAG during Model Check | ON, OFF | OFF |
| model\_check\_ale | &lt;string&gt; | Check category ALE during Model Check | ON, OFF | OFF |
| model\_check\_boundary | &lt;string&gt; | Check category BOUNDARY during Model Check | ON, OFF | OFF |
| model\_check\_case | &lt;string&gt; | Check category CASE during Model Check | ON, OFF | OFF |
| model\_check\_component | &lt;string&gt; | Check category COMPONENT during Model Check | ON, OFF | OFF |
| model\_check\_connection | &lt;string&gt; | Check category CONNECTION during Model Check | ON, OFF | OFF |
| model\_check\_constrained | &lt;string&gt; | Check category CONSTRAINED during Model Check | ON, OFF | OFF |
| model\_check\_contact | &lt;string&gt; | Check category CONTACT during Model Check | ON, OFF | OFF |
| model\_check\_control | &lt;string&gt; | Check category CONTROL during Model Check | ON, OFF | OFF |
| model\_check\_damping | &lt;string&gt; | Check category DAMPING during Model Check | ON, OFF | OFF |
| model\_check\_database | &lt;string&gt; | Check category DATABASE during Model Check | ON, OFF | OFF |
| model\_check\_define | &lt;string&gt; | Check category DEFINE during Model Check | ON, OFF | OFF |
| model\_check\_def\_to\_rigid | &lt;string&gt; | Check category DEF\_TO\_RIGID during Model Check | ON, OFF | OFF |
| model\_check\_dummy | &lt;string&gt; | Check category DUMMY during Model Check | ON, OFF | OFF |
| model\_check\_element | &lt;string&gt; | Check category ELEMENT during Model Check | ON, OFF | OFF |
| model\_check\_eos | &lt;string&gt; | Check category EOS during Model Check | ON, OFF | OFF |
| model\_check\_frequency | &lt;string&gt; | Check category FREQUENCY during Model Check | ON, OFF | OFF |
| model\_check\_group | &lt;string&gt; | Check category GROUP during Model Check | ON, OFF | OFF |
| model\_check\_hourglass | &lt;string&gt; | Check category HOURGLASS during Model Check | ON, OFF | OFF |
| model\_check\_include\_file | &lt;string&gt; | Check category INCLUDE FILE during Model Check | ON, OFF | OFF |
| model\_check\_initial | &lt;string&gt; | Check category INITIAL during Model Check | ON, OFF | OFF |
| model\_check\_integration | &lt;string&gt; | Check category INTEGRATION during Model Check | ON, OFF | OFF |
| model\_check\_interface | &lt;string&gt; | Check category INTERFACE during Model Check | ON, OFF | OFF |
| model\_check\_load | &lt;string&gt; | Check category LOAD during Model Check | ON, OFF | OFF |
| model\_check\_material | &lt;string&gt; | Check category MATERIAL during Model Check | ON, OFF | OFF |
| model\_check\_mechanism | &lt;string&gt; | Check category MECHANISM during Model Check | ON, OFF | OFF |
| model\_check\_mesh | &lt;string&gt; | Check category MESH during Model Check | ON, OFF | OFF |
| model\_check\_node | &lt;string&gt; | Check category NODE during Model Check | ON, OFF | OFF |
| model\_check\_parameter | &lt;string&gt; | Check category PARAMETER during Model Check | ON, OFF | OFF |
| model\_check\_part | &lt;string&gt; | Check category PART during Model Check | ON, OFF | OFF |
| model\_check\_particle | &lt;string&gt; | Check category PARTICLE during Model Check | ON, OFF | OFF |
| model\_check\_perturbation | &lt;string&gt; | Check category PERTURBATION during Model Check | ON, OFF | OFF |
| model\_check\_rail | &lt;string&gt; | Check category RAIL during Model Check | ON, OFF | OFF |
| model\_check\_rigidwall | &lt;string&gt; | Check category RIGIDWALL during Model Check | ON, OFF | OFF |
| model\_check\_section | &lt;string&gt; | Check category SECTION during Model Check | ON, OFF | OFF |
| model\_check\_sensor | &lt;string&gt; | Check category SENSOR during Model Check | ON, OFF | OFF |
| model\_check\_set | &lt;string&gt; | Check category SET during Model Check | ON, OFF | OFF |
| model\_check\_termination | &lt;string&gt; | Check category TERMINATION during Model Check | ON, OFF | OFF |
| model\_check\_translate | &lt;string&gt; | Check category TRANSLATE during Model Check | ON, OFF | OFF |
| model\_check\_user | &lt;string&gt; | Check category USER during Model Check | ON, OFF | OFF |
| model\_check\_em\_2daxi | &lt;string&gt; | Check category EM\_2DAXI during Model Check | ON, OFF | OFF |
| model\_check\_em\_boundary | &lt;string&gt; | Check category EM\_BOUNDARY during Model Check | ON, OFF | OFF |
| model\_check\_em\_circuit | &lt;string&gt; | Check category EM\_CIRCUIT during Model Check | ON, OFF | OFF |
| model\_check\_em\_circuit\_rogo | &lt;string&gt; | Check category EM\_CIRCUIT\_ROGO during Model Check | ON, OFF | OFF |
| model\_check\_em\_contact | &lt;string&gt; | Check category EM\_CONTACT during Model Check | ON, OFF | OFF |
| model\_check\_em\_contact\_resistance | &lt;string&gt; | Check category EM\_CONTACT\_RESISTANCE during Model Check | ON, OFF | OFF |
| model\_check\_em\_eos | &lt;string&gt; | Check category EM\_EOS during Model Check | ON, OFF | OFF |
| model\_check\_em\_external\_field | &lt;string&gt; | Check category EM\_EXTERNAL\_FIELD during Model Check | ON, OFF | OFF |
| model\_check\_em\_mat | &lt;string&gt; | Check category EM\_MAT during Model Check | ON, OFF | OFF |
| model\_check\_em\_rotation\_axis | &lt;string&gt; | Check category EM\_ROTATION\_AXIS during Model Check | ON, OFF | OFF |
| model\_check\_em\_solver | &lt;string&gt; | Check category EM\_SOLVER during Model Check | ON, OFF | OFF |
| model\_check\_icfd\_control | &lt;string&gt; | Check category ICFD\_CONTROL during Model Check | ON, OFF | OFF |
| model\_check\_icfd\_database | &lt;string&gt; | Check category ICFD\_DATABASE during Model Check | ON, OFF | OFF |
| model\_check\_icfd\_define | &lt;string&gt; | Check category ICFD\_DEFINE during Model Check | ON, OFF | OFF |
| model\_check\_icfd\_initial | &lt;string&gt; | Check category ICFD\_INITIAL during Model Check | ON, OFF | OFF |
| model\_check\_chemistry\_control | &lt;string&gt; | Check category CHEMISTRY\_CONTROL during Model Check | ON, OFF | OFF |
| model\_check\_chemistry\_det\_initiation | &lt;string&gt; | Check category CHEMISTRY\_DET\_INITIATION during Model Check | ON, OFF | OFF |
| model\_check\_chemistry\_composition | &lt;string&gt; | Check category CHEMISTRY\_COMPOSITION during Model Check | ON, OFF | OFF |
| model\_check\_chemistry\_path | &lt;string&gt; | Check category CHEMISTRY\_PATH during Model Check | ON, OFF | OFF |
| model\_check\_geometry | &lt;string&gt; | Check category GEOMETRY during Model Check | ON, OFF | OFF |
| model\_keyout\_check | &lt;string&gt; | Generate check info on model keyout | ON, OFF | OFF |
| separate\_check\_file | &lt;string&gt; | write check info into fname.check | ON, OFF | OFF |
| **model\_quality\_checks** |
| model\_quality\_checks\_active | &lt;string&gt; | Model quality check settings at program start | ON, OFF, PREF | PREF |
| model\_timestep\_check | &lt;string&gt; | Model timestep check | ON, OFF | OFF |
| model\_min\_timestep | &lt;real&gt; | Model minimum timestep |  | 1.e-6 |
| model\_max\_timestep | &lt;real&gt; | Model maximum timestep |  | &lt;none&gt; |
| model\_added\_mass\_check | &lt;string&gt; | Model added mass check | ON, OFF | ON |
| model\_max\_added\_mass | &lt;real&gt; | Model maximum added mass |  | &lt;none&gt; |
| model\_max\_added\_mass\_percent | &lt;real&gt; | Model maximum added mass percent |  | 5.0 |
| part\_added\_mass\_check | &lt;string&gt; | Part added mass check | ON, OFF | OFF |
| part\_max\_added\_mass | &lt;real&gt; | Part maximum added mass |  | &lt;none&gt; |
| part\_max\_added\_mass\_percent | &lt;real&gt; | Part maximum added mass percent |  | 5.0 |
| spotweld\_part\_max\_added\_mass | &lt;real&gt; | Spotweld Part maximum added mass |  | &lt;none&gt; |
| spotweld\_part\_max\_added\_mass\_percent | &lt;real&gt; | Spotweld Part maximum added mass percent |  | 5.0 |
| **element** |
| element\_timestep\_check | &lt;string&gt; | Element timestep checking | ON, OFF | OFF |
| element\_min\_timestep | &lt;real&gt; | Element minimum timestep |  | 1.e-6 |
| spotweld\_min\_timestep | &lt;real&gt; | Spotweld minimum timestep |  | 1.e-6 |
| element\_added\_mass\_check | &lt;string&gt; | Element added mass check | ON, OFF | OFF |
| element\_max\_added\_mass | &lt;real&gt; | Element maximum added mass |  | &lt;none&gt; |
| element\_max\_added\_mass\_percent | &lt;real&gt; | Element maximum added mass percent |  | 5.0 |
| spotweld\_max\_added\_mass | &lt;real&gt; | Spotweld maximum added mass |  | &lt;none&gt; |
| spotweld\_max\_added\_mass\_percent | &lt;real&gt; | Spotweld maximum added mass percent |  | 5.0 |
| element\_overlap\_check | &lt;string&gt; | Element overlap checking | ON, OFF | OFF |
| element\_overlap\_different\_part | &lt;string&gt; | treat elements in different parts as overlapping | ON, OFF | OFF |
| **part\_checks** |
| empty\_part | &lt;string&gt; | check for empty parts | ON, OFF | ON |
| def\_part\_continuity\_check | &lt;string&gt; | Deformable part mesh continuity check | ON, OFF | OFF |
| deformable\_size | &lt;real&gt; | optional maximum part size for continuity check |  | 0.0 |
| part\_normal\_check | &lt;string&gt; | Part normal consistency check | ON, OFF | OFF |
| part\_crack\_check | &lt;string&gt; | Part crack check | ON, OFF | OFF |
| check\_percent\_of\_trias | &lt;string&gt; | Check the percentage of triangle in shell parts | ON, OFF | OFF |
| max\_percentage\_of\_trias | &lt;real&gt; | Value of the max percentage of triangle admitted in a part |  | 10.0 |
| **rigid** |
| nodal\_rigid\_body\_minimum\_mass | &lt;real&gt; | minimum mass required for nodal rigid body (0.0 for off) |  | 0.0 |
| nrb\_release\_flag\_check | &lt;string&gt; | Warning issued if release flags set on nodal rigid bodies | ON, OFF | OFF |
| rigid\_part\_minimum\_mass | &lt;real&gt; | minimum mass required for rigid part (0.0 for auto) |  | 0.0 |
| accelerometer\_minimum\_mass | &lt;real&gt; | minimum mass required for accelerometer |  | 0.0 |
| rigid\_body\_merge\_check | &lt;string&gt; | Rigid body merge checking | ON, OFF | OFF |
| rigid\_body\_merge\_max\_separation | &lt;real&gt; | Maximum size for rigid body merge |  | 100.0 |
| rigid\_body\_continuity\_check | &lt;string&gt; | Rigid body mesh continuity check | ON, OFF | OFF |
| rigid\_body\_min\_elem | &lt;integer&gt; | Min required num of elems for rigid body continuity check |  | 3 |
| rigid\_part\_size | &lt;real&gt; | optional maximum part size for continuity check |  | 0.0 |
| nodal\_rigid\_body\_size\_check | &lt;string&gt; | Check size of nodal rigid bodies | ON, OFF | OFF |
| maximum\_nodal\_rigid\_body\_size | &lt;real&gt; | Maximum size for nodal rigid body |  | 100.0 |
| **xsec** |
| check\_database\_cross\_section\_parts | &lt;string&gt; | check that parts cut by finite Database Xsec are in PSET (if defined) | TRUE, FALSE | FALSE |
| **other** |
| allow\_unused\_nrb\_master\_node | &lt;string&gt; | allow unused nodal rigid body master node | ON, OFF | OFF |
| control\_solution\_undef\_isnan\_check | &lt;string&gt; | Flag undefined ISNAN parameter as an error | ON, OFF | OFF |
| check\_missing\_output\_fields | &lt;string&gt; | Model check includes tests for non-zero data fields omitted on output due to LS-DYNA version | NO\_CHECK, WARNING, ERROR | WARNING |
| warn\_param\_8\_chars | &lt;string&gt; | Warn if 8 character parameter names found | ON, OFF | ON |
| **section** |
| shell\_thickness\_check | &lt;string&gt; | On section update warn if \*ELEMENT\_SHELL\_THICKNESS is set | ON, OFF | ON |

The following strings and values control checkpoint

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| write\_checkpoint\_files | &lt;logical&gt; | Record checkpoint files for the PRIMER session. | TRUE, FALSE | FALSE |
| checkpoint\_dir | &lt;string&gt; | Directory for checkpoint files. If omitted use cwd. |  | &lt;none&gt; |
| show\_checkpoint\_files | &lt;logical&gt; | Show checkpoint playback panel upon PRIMER startup. | TRUE, FALSE | FALSE |

The following apply to composites

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| create\_composite\_long | &lt;logical&gt; | If TRUE \_LONG is added to \*ELEMENT\_SHELL\_COMPOSITE when creating a composite layup | TRUE, FALSE | TRUE |
| composites\_sketch\_mode | &lt;string&gt; | determines whether the composite ply directions are sketched using lines or arrows | LINES, ARROWS | LINES |
| composites\_mapping\_parameter | &lt;real&gt; | Determines the strength of the map lines on the interpolated composite direction field |  | 1.5 |
| composites\_shell\_qual\_angle | &lt;real&gt; | Angle which determines which shells are sketched as having bad quality during composites orient. |  | 45.0 |
| ztf\_output\_composite\_action | &lt;string&gt; | Action for dialogue box when \*PART\_COMPOSITE/\*ELEMENT\_SHELL\_COMPOSITE cards are being written out in ztf without any piles. | Yes\_Del, Yes, No | &lt;none&gt; |

The following apply to the [connections](https://help.oasys-software.com/articles/project-primer/connections) function

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| conx\_table\_columns | &lt;string&gt; | Columns initially shown in connection table |  | &lt;none&gt; |
| conx\_compare\_table\_columns | &lt;string&gt; | Columns considered in connection compare table |  | &lt;none&gt; |
| connection\_file\_type | &lt;string&gt; | Default spotweld file type | PRIMER\_SPOTWELD, PRIMER\_CONNECTION, CATIA, UG, USER | PRIMER\_CONNECTION |
| connection\_read\_script | &lt;string&gt; | User defined JavaScript to read connections |  | &lt;none&gt; |
| connection\_write\_script | &lt;string&gt; | User defined JavaScript to write connections |  | &lt;none&gt; |
| connection\_same\_part | &lt;logical&gt; | TRUE if a part can be joined to itself with a connection entity (weld or adhesive) | TRUE, FALSE | FALSE |
| connection\_allow\_clinch | &lt;logical&gt; | TRUE if shell elements of different parts meshed together forming a clinch can be connected | TRUE, FALSE | FALSE |
| connection\_node\_element\_numbering\_rule | &lt;string&gt; | default rule for numbering of connection nodes and elements | HIGHEST\_PLUS\_ONE, LAYER\_FIRST\_FREE, LAYER\_HIGHEST\_FREE, LAYER\_HIGHEST\_PLUS\_ONE | LAYER\_HIGHEST\_PLUS\_ONE |
| connection\_general\_item\_numbering\_rule | &lt;string&gt; | default rule for numbering of connection general items | HIGHEST\_PLUS\_ONE, LAYER\_FIRST\_FREE, LAYER\_HIGHEST\_FREE, LAYER\_HIGHEST\_PLUS\_ONE | LAYER\_HIGHEST\_PLUS\_ONE |
| connection\_create\_length\_rigorous | &lt;logical&gt; | TRUE:do not make a connection if it fails max/min length settings. FALSE:connect fewer layers to produce a shorter connection | TRUE, FALSE | FALSE |
| contact\_check\_all\_connection\_nodes\_tie | &lt;string&gt; | all nodes of connections must tie | ON, OFF | ON |
| rigidify\_makes\_contact\_node\_sets | &lt;logical&gt; | Interactive user may set this false and use Connection &gt; Contacts to repair the model | TRUE, FALSE | TRUE |
| connection\_xml\_file\_paths | &lt;string&gt; | Write xml filename to post-end connections with absolute or relative path or not at all | ABSOLUTE, RELATIVE, DONT\_WRITE | DONT\_WRITE |
| connection\_save\_settings | &lt;logical&gt; | TRUE to save current settings with connection during creation | TRUE, FALSE | TRUE |
| **adhesive** |
| adhesive\_solid\_percentage | &lt;real&gt; | Max percentage of solids created for adhesive. Anything less is invalid | 0 - 100 | 50.0 |
| connection\_patch\_cohesive | &lt;logical&gt; | Flag to use the cohesive nodal order for 6 noded solid elements | TRUE, FALSE | TRUE |
| patch\_adhesive\_source\_angle\_tolerance\_setting | &lt;logical&gt; | apply angle tolerance for adhesive patch | TRUE, FALSE | FALSE |
| patch\_angle | &lt;real&gt; | angle tolerance for adhesive patch |  | 30.0 |
| patch\_adhesive\_extruded\_from\_quad\_biased\_grid | &lt;logical&gt; | quad biased grid will apply | TRUE, FALSE | TRUE |
| adhesive\_patch\_mesh\_size | &lt;real&gt; | Mesh size for adhesive patch extruded from quad biased grid |  | 5.0 |
| adhesive\_patch\_mesh\_size\_toggle | &lt;string&gt; | Use user defined mesh size for adhesive patch extruded from quad biased grid | ON, OFF | OFF |
| spotweld\_warpage\_check | &lt;string&gt; | solid spotweld/adhesive warpage checking | ON, OFF | TRUE |
| spotweld\_max\_warpage | &lt;real&gt; | solid spotweld/adhesive maximum warpage (if warpage\_check on) | 0.0 - 180.0 | 20 |
| weld\_adhesive\_angle\_tolerance | &lt;real&gt; | default shell angle tolerance when creating weld/adhesive |  | 30.0 |
| weld\_adhesive\_edge\_distance | &lt;real&gt; | edge distance when creating weld/adhesive |  | 3.0 |
| weld\_adhesive\_search\_thickness | &lt;real&gt; | search thickness when creating weld/adhesive |  | 10.0 |
| **arcweld** |
| max\_contact\_parmax\_for\_arcweld | &lt;real&gt; | max parmax used when creating arc-weld contact (1.01,1.02...) | 1.0 - 2.0 | 1.2 |
| **autoweld** |
| autoweld\_diff\_seam\_proximity | &lt;real&gt; | Proximity check for different autoweld seams | 0 - 1 | 0.5 |
| autoweld\_same\_seam\_proximity | &lt;real&gt; | Proximity check for same autoweld seams | 0 - 1 | 0.5 |
| **bolts** |
| maximum\_washer\_diameter\_for\_bolts | &lt;real&gt; | default max washer diameter for bolts (expressed in mm) |  | 20.0 |
| use\_parent\_layer\_for\_bolts | &lt;logical&gt; | bolt connection items put into parent layer where possible | TRUE, FALSE | TRUE |
| strict\_layer\_method\_for\_bolts | &lt;logical&gt; | abort bolt creation if include range undefined | TRUE, FALSE | FALSE |
| bolt\_entity\_numbering\_rule | &lt;string&gt; | layer rule for numbering of bolt FE (over-ruling setting) | CONNECTION\_LABEL\_RULE, LAYER\_FIRST\_FREE, LAYER\_HIGHEST\_FREE, LAYER\_HIGHEST\_PLUS\_ONE | CONNECTION\_LABEL\_RULE |
| adjust\_bolt\_mass\_on\_create | &lt;logical&gt; | on bolt creation add mass for stability if needed (by creating PART\_INERTIA) | TRUE, FALSE | FALSE |
| bolt\_feature\_line\_hole | &lt;logical&gt; | consider feature lines as potential hole edges for bolt creation | TRUE, FALSE | FALSE |
| add\_database\_history\_beam\_for\_bolts | &lt;logical&gt; | for beam type bolts create DTHB on bolt create/remake | TRUE, FALSE | FALSE |
| use\_zero\_length\_discrete\_beam\_for\_bolts | &lt;logical&gt; | use zero length discrete beam for bolts | TRUE, FALSE | TRUE |
| use\_element\_beam\_thickness\_for\_zero\_length\_discrete\_beam\_bolts | &lt;logical&gt; | use element beam thickness for bolts with zero length beams | TRUE, FALSE | TRUE |
| nrb\_bolts\_may\_use\_set\_collect | &lt;logical&gt; | use set collect for NRB bolts that span includes | TRUE, FALSE | TRUE |
| modified\_bolt\_layer\_method | &lt;logical&gt; | make bolt if at least 2 layers can connect | TRUE, FALSE | FALSE |
| bolt\_angle\_tolerance | &lt;real&gt; | default shell angle tolerance when creating bolts |  | 30.0 |
| simplify\_merge\_bolt | &lt;logical&gt; | This setting removes empty rigid lead parts from merge type bolts | TRUE, FALSE | TRUE |
| set\_bolt\_header | &lt;string&gt; | name for connection bolt (old name 'RIGID' is deprecated) | BOLT, RIGID | BOLT |
| nrb\_bolts\_attach\_to\_existing\_nodal\_rigid\_bodies | &lt;logical&gt; | nrb bolts merge to existing nodal rigid bodies | TRUE, FALSE | TRUE |
| modular\_bolts\_get\_unique\_deformable\_parts | &lt;logical&gt; | multiple modular bolts will share same deformable part unless this is set | TRUE, FALSE | FALSE |
| modular\_bolts\_form\_set\_gen\_add\_contact | &lt;logical&gt; | multiple modular bolts containing SET\_GENERAL will form SET\_ADD and \*CONTACT | TRUE, FALSE | FALSE |
| nrb\_create\_master\_node\_at\_centre | &lt;string&gt; | Create a master node at the centre of an NRB (create at edge of hole / bolt connections) | TRUE, FALSE | TRUE |
| **rivets** |
| create\_new\_c\_spr2\_for\_each\_rivet | &lt;string&gt; | reuse existing C\_SPR2 (OFF) or create new C\_SPR2 for each rivet (ON) | ON, OFF | OFF |
| default\_settings\_for\_rivet\_creation | &lt;string&gt; | d=x, fn=a, ft=b, dn=c, dt=d, xln=e, xlt=f, alpha1=g, alpha2=h, alpha3=i, dens=j, expn=k, expt=m, intp=n |  | &lt;none&gt; |
| **spotweld** |
| allow\_bolt\_at\_hole\_convert\_to\_hexa\_weld | &lt;logical&gt; | allows conversion of bolts on holes to single solid weld | TRUE, FALSE | FALSE |
| consistent\_area\_for\_spotwelds | &lt;logical&gt; | adjust size of spotweld solids so that area = pi\*d\*d/4 | TRUE, FALSE | TRUE |
| spot\_max\_scanlines | &lt;integer&gt; | Max number of lines displayed for spotweld read panel |  | 50 |
| automatically\_create\_connections\_from\_welds | &lt;string&gt; | automatically make connections from existing (MAT100) welds without them | ON, OFF | ON |
| create\_connection\_popup | &lt;string&gt; | option to process connection popups when reading spotweld connections | ASK, TRUE, FALSE | ASK |
| spotweldbeam\_length\_check | &lt;string&gt; | Spotweld beam length checking | ON, OFF | ON |
| spotweldbeam\_min\_length | &lt;real&gt; | Spotweld beam minimum length |  | 0.5 |
| spotweldbeam\_max\_length | &lt;real&gt; | Spotweld beam maximum length |  | 10.0 |
| spotweldbeam\_max\_total\_length | &lt;real&gt; | Spotweld beam maximum total length |  | 20.0 |
| spotweldbeam\_panel\_check | &lt;string&gt; | Spotweld beam panel checking | ON, OFF | ON |
| spotweldbeam\_max\_panels | &lt;integer&gt; | Spotweld beam maximum number of panels |  | 5 |
| spotweldbeam\_distance\_check | &lt;string&gt; | Spotweld beam pitch checking | ON, OFF | ON |
| spotweldbeam\_min\_distance | &lt;real&gt; | Spotweld beam minimum pitch |  | 10.0 |
| spotweld\_warpage\_check | &lt;string&gt; | solid spotweld/adhesive warpage checking | ON, OFF | TRUE |
| spotweld\_max\_warpage | &lt;real&gt; | solid spotweld/adhesive maximum warpage (if warpage\_check on) | 0.0 - 180.0 | 20 |
| weld\_adhesive\_angle\_tolerance | &lt;real&gt; | default shell angle tolerance when creating weld/adhesive |  | 30.0 |
| weld\_adhesive\_edge\_distance | &lt;real&gt; | edge distance when creating weld/adhesive |  | 3.0 |
| weld\_adhesive\_search\_thickness | &lt;real&gt; | search thickness when creating weld/adhesive |  | 10.0 |
| spotweldbeam\_pid | &lt;logical&gt; | TRUE if \_PID option is to be used when creating spotweld beams | TRUE, FALSE | TRUE |
| solid\_spotweld\_consider\_free\_edges | &lt;string&gt; | consider free edges of panels to align solid welds on create/remake | ON, OFF | ON |
| solid\_spotweld\_edge\_search\_dist | &lt;real&gt; | Search distance for finding nearby free edges to align to |  | 50.0 |
| solid\_spotweld\_rotate\_edge\_align | &lt;string&gt; | align a flat edge of solid spotwelds with closest free edge of attaching panels | ON, OFF | OFF |
| solid\_spotweld\_align\_feature | &lt;string&gt; | align to nearby feature lines as well as free edges | ON, OFF | OFF |
| solid\_spotweld\_align\_feature\_angle | &lt;real&gt; | Break angle to define feature line to align to |  | 20.0 |
| solid\_spotweld\_ignore\_inner\_align | &lt;string&gt; | ignore inner layers of panels being joined together when aligning to free edges | ON, OFF | OFF |
| connection\_check\_thickness\_change | &lt;string&gt; | warn if a section change may mandate change of attached spotweld material properties | ON, OFF | OFF |
| warn\_of\_connection\_attached\_to\_shell\_on\_edge | &lt;string&gt; | warn if spotweld connection node attaches to shell with free edge | ON, OFF | OFF |
| allow\_mig\_weld\_to\_feature\_line | &lt;logical&gt; | TRUE if a MIG welds can be created on feature lines as well and free edges | TRUE, FALSE | FALSE |
| suppress\_mig\_line\_drawing | &lt;logical&gt; | prevents any attempt to generate MIG lines | TRUE, FALSE | FALSE |
| additional\_valid\_spotweld\_material\_types | &lt;string&gt; | Additional material types considered valid for PRIMER spotwelds (e.g. '\*MAT\_003;\*MAT\_240' or '003;240'). |  | &lt;none&gt; |
| spotweld\_remesh\_max\_factor | &lt;real&gt; | Factor for maximum mesh size when remeshing spotwelds | 1.0 - 2.0 | 1.2 |
| spotweld\_remesh\_min\_factor | &lt;real&gt; | Factor for minimum mesh size when remeshing spotwelds | 0.0 - 1.0 | 0.8 |
| spotweld\_remesh\_corner\_angle | &lt;real&gt; | Minimum angle for corners on free edges to be preserved during spotweld remeshing | 0.0 - 180.0 | 10.0 |
| spotweld\_remesh\_feature\_line\_angle | &lt;real&gt; | spotweld remesh feature line angle | 0.0 - 180.0 | 20.0 |
| spot\_remesh\_reattach\_node\_merge | &lt;string&gt; | Re-Attach nodes in the HAZ remesh zone | ON, OFF | OFF |
| spot\_remesh\_reattach\_node\_merge\_tol | &lt;real&gt; | Re-Attach node merge tolerance |  | 0.0 |
| spot\_remesh\_preserve\_ring\_around\_hole | &lt;string&gt; | Preserve shells around hole in the HAZ remesh zone | ON, OFF | OFF |
| spot\_remesh\_preserve\_ring\_max\_hole\_size | &lt;real&gt; | Max hole diameter to preserve |  | 20.0 |
| spotweld\_remake\_auto\_remove\_layer | &lt;logical&gt; | TRUE to automatically remove layer(s) that failed to connect when remaking spotwelds | TRUE, FALSE | FALSE |
| haz\_mesh\_reconstruct | &lt;string&gt; | HAZ mesh reconstruct after spotweld remesh | ON, OFF | OFF |
| haz\_mesh\_reconstruct\_dist | &lt;real&gt; | HAZ mesh reconstruct remesh distance |  | 35 |
| haz\_mesh\_reconstruct\_size | &lt;real&gt; | HAZ mesh reconstruct target element size |  | 5 |
| haz\_mesh\_reconstruct\_feature\_line\_angle | &lt;real&gt; | HAZ mesh reconstruct feature line angle | 0.0 - 180.0 | 20.0 |
| haz\_tria\_reduction | &lt;string&gt; | HAZ tria reduction after HAZ remesh | ON, OFF | ON |
| haz\_mesh\_full\_part\_replace | &lt;string&gt; | HAZ mesh reconstruct part replace | ON, OFF | ON |
| haz\_mesh\_element\_replace | &lt;string&gt; | HAZ mesh element replace (select either element or part replace) | ON, OFF | OFF |
| haz\_mesh\_reconstruct\_process\_thread\_timeout | &lt;real&gt; | HAZ mesh reconstruct threads timeout (in minutes) |  | 5 |
| skip\_spotweld\_remesh\_in\_proximity | &lt;string&gt; | Ignore spotweld remesh if the node is on NRB etc. | ON, OFF | ON |
| add\_new\_nodes\_around\_spotweld | &lt;string&gt; | Add new nodes around spotweld to improve mesh quality | ON, OFF | OFF |
| flange\_width | &lt;real&gt; | Flange width limit to skip adding new nodes | 0.0 - 180.0 | 25.0 |
| second\_feature\_line\_angle | &lt;real&gt; | Feature line angle beyond which remesh will be performed, while maintaining that feature line | 0.0 - 180.0 | 2.0 |
| auto\_create\_failed\_welds\_set | &lt;logical&gt; | Automatically create a set of MAT 100 SOLID elements for that a connection entity could not be automatically created | TRUE, FALSE | TRUE |
| **spotweld\_lines** |
| spot\_line\_search\_tolerance | &lt;real&gt; | Search tolerance for finding new starting free edge nodes for edge locked spotweld lines |  | 15.0 |

The following apply to contacts

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| contact\_spr\_initial\_setting | &lt;string&gt; | Initial setting for SPR field of contacts when creating | ON, OFF | ON |
| contact\_mpr\_initial\_setting | &lt;string&gt; | Initial setting for MPR field of contacts when creating | ON, OFF | ON |
| contact\_check\_shells\_for\_thinning | &lt;string&gt; | report shells where LS-Dyna contact thickness less than 90% of actual | ON, OFF | OFF |
| contact\_check\_contents | &lt;string&gt; | check surfB and surfA side of contact for contents | ON, OFF | ON |
| contact\_rigorous\_cntco\_check | &lt;string&gt; | run rigorous (slow) check for CNTCO=1 needed when shells in contact use OFFSET or NLOC | ON, OFF | OFF |
| contact\_stiffness\_check | &lt;string&gt; | Check for contact stiffness mismatch | ON, OFF | OFF |
| max\_allowable\_contact\_stiffness\_ratio | &lt;real&gt; | Max allowable ratio of contact stiffnesses |  | 100.0 |
| contact\_check\_mode | &lt;string&gt; | use MPP or SMP treatment for contact analysis | MPP, SMP | MPP |
| beam\_on\_beam\_automatic\_general\_contact\_method | &lt;string&gt; | treatment for Automatic General analysis of beam to beam contact | BASIC, ENHANCED | ENHANCED |
| contact\_penchk\_dup\_shells | &lt;string&gt; | Allocation of contact segments to duplicate shells | AUTOMATIC, THINNEST, THICKEST | AUTOMATIC |
| contact\_post\_redist\_perc | &lt;integer&gt; | Percentage of unused memory to distribute to free pool after contact checking | 0 - 100 | 90 |
| contact\_post\_redist\_type | &lt;string&gt; | Which memory types to redistribute after contact checking | ANY, CCHKSG, NONE | ANY |
| **sliding\_contact\_checking** |
| contact\_penetration\_threshold | &lt;real&gt; | if set to zero, SMP calculates threshold, MPP will use min(0.001, SMP penetration threshold) |  | 0.0 |
| report\_crossed\_3d\_elems | &lt;string&gt; | report crossed edges for 3d elements | ON, OFF | ON |
| contact\_penetration\_checks | &lt;string&gt; | Contact penetration checking | ON, OFF | OFF |
| contact\_penetration\_max\_allowable\_value | &lt;real&gt; | allowable penetration expressed as value |  | 0.0 |
| contact\_penetration\_min\_remaining\_depth | &lt;real&gt; | allowable penetration expressed as remaining segment depth |  | 0.0 |
| contact\_penetration\_min\_remaining\_depth\_factor | &lt;real&gt; | allowable penetration expressed as remaining factor on segment depth |  | 0.0 |
| contact\_ignore\_pen\_on\_same\_rigid\_body | &lt;logical&gt; | if node and segment on same rigid body ignore the penetration | TRUE, FALSE | true |
| **tied\_contact\_checking** |
| contact\_check\_constrained\_clash | &lt;string&gt; | check for segment clashes between constrained contacts | ON, OFF | ON |
| contact\_check\_all\_connection\_nodes\_tie | &lt;string&gt; | all nodes of connections must tie | ON, OFF | ON |
| contact\_check\_tied | &lt;string&gt; | check that all tied contacts tie at least one node | ON, OFF | OFF |
| contact\_treat\_attached\_node\_as\_tied | &lt;logical&gt; | include attached nodes in tied contact in the tied count | TRUE, FALSE | TRUE |
| contact\_check\_all\_tracked\_nodes\_by\_part\_tie | &lt;string&gt; | all tracked nodes defined by part must tie | ON, OFF | OFF |
| contact\_check\_all\_tracked\_nodes\_by\_node\_set\_tie | &lt;string&gt; | all tracked nodes defined by node set must tie | ON, OFF | OFF |
| contact\_check\_all\_tracked\_nodes\_on\_shell\_edge\_tie | &lt;string&gt; | all tracked nodes on shell edge must tie | ON, OFF | OFF |
| contact\_check\_all\_tracked\_nodes\_on\_solid\_face\_tie | &lt;string&gt; | all tracked nodes on exterior faces of solids must tie | ON, OFF | OFF |
| contact\_allow\_spotweld\_offset\_option | &lt;logical&gt; | allow \*CONTACT\_SPOTWELD\_OFFSET (though Dyna manual prohibits it) | TRUE, FALSE | FALSE |

The following apply to constructed properties

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| construct\_material\_card\_for\_latent | &lt;string&gt; | Construct material card for latent materials in model | ON, OFF | OFF |
| constructed\_material\_card\_density | &lt;real&gt; | Default density for material cards constructed by Primer |  | 7.85e-9 |
| constructed\_material\_card\_stiffness | &lt;real&gt; | Default stiffness for material cards constructed by Primer |  | 200000 |
| constructed\_material\_card\_spring\_stiffness | &lt;real&gt; | Default stiffness for spring material cards constructed by Primer |  | 1.0 |
| constructed\_section\_card\_thickness | &lt;real&gt; | Default thickness for section shell cards constructed by Primer |  | 1.0 |

The following apply to cut section

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| cut\_section\_beam | &lt;string&gt; | Shell capping at cut-section | WIREDRAW, TRUE\_THICKNESS, PART\_CONTACT\_OPTT | WIREDRAW |
| cut\_section\_cap2d | &lt;string&gt; | Shell capping at cut-section | NO\_CAPPING, TRUE\_THICKNESS, FIXED\_THICKNESS, PART\_CONTACT\_OPTT | TRUE\_THICKNESS |
| cut\_section\_cap2d\_fac | &lt;real&gt; | True-thickness factor |  | 1 |
| cut\_section\_cap2d\_val | &lt;real&gt; | Fixed thickness value |  | 10 |
| cut\_section\_neg\_action | &lt;string&gt; | Negative action for cut sections | OMIT, OUTLINE, NORMAL | OMIT |
| cut\_section\_pos\_action | &lt;string&gt; | Positive action for cut sections | OMIT, OUTLINE, NORMAL | OMIT |

The following apply to database cross section

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| cross\_section\_auto\_size\_percent | &lt;real&gt; | Percentage to increase the cross section plane dimensions when auto sized. |  | 10.0 |
| add\_database\_xsec\_location\_to\_title | &lt;logical&gt; | automatically add location to database cross section title | TRUE, FALSE | FALSE |

The drive mappings allow PRIMER to convert equivalent folder names from Windows to Unix and visa versa

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| drive\_a | &lt;string&gt; | Mapping from Windows drive A: to unix path |  | &lt;none&gt; |
| drive\_b | &lt;string&gt; | Mapping from Windows drive B: to unix path |  | &lt;none&gt; |
| drive\_c | &lt;string&gt; | Mapping from Windows drive C: to unix path |  | &lt;none&gt; |
| drive\_d | &lt;string&gt; | Mapping from Windows drive D: to unix path |  | &lt;none&gt; |
| drive\_e | &lt;string&gt; | Mapping from Windows drive E: to unix path |  | &lt;none&gt; |
| drive\_f | &lt;string&gt; | Mapping from Windows drive F: to unix path |  | &lt;none&gt; |
| drive\_g | &lt;string&gt; | Mapping from Windows drive G: to unix path |  | &lt;none&gt; |
| drive\_h | &lt;string&gt; | Mapping from Windows drive H: to unix path |  | &lt;none&gt; |
| drive\_i | &lt;string&gt; | Mapping from Windows drive I: to unix path |  | &lt;none&gt; |
| drive\_j | &lt;string&gt; | Mapping from Windows drive J: to unix path |  | &lt;none&gt; |
| drive\_k | &lt;string&gt; | Mapping from Windows drive K: to unix path |  | &lt;none&gt; |
| drive\_l | &lt;string&gt; | Mapping from Windows drive L: to unix path |  | &lt;none&gt; |
| drive\_m | &lt;string&gt; | Mapping from Windows drive M: to unix path |  | &lt;none&gt; |
| drive\_n | &lt;string&gt; | Mapping from Windows drive N: to unix path |  | &lt;none&gt; |
| drive\_o | &lt;string&gt; | Mapping from Windows drive O: to unix path |  | &lt;none&gt; |
| drive\_p | &lt;string&gt; | Mapping from Windows drive P: to unix path |  | &lt;none&gt; |
| drive\_q | &lt;string&gt; | Mapping from Windows drive Q: to unix path |  | &lt;none&gt; |
| drive\_r | &lt;string&gt; | Mapping from Windows drive R: to unix path |  | &lt;none&gt; |
| drive\_s | &lt;string&gt; | Mapping from Windows drive S: to unix path |  | &lt;none&gt; |
| drive\_t | &lt;string&gt; | Mapping from Windows drive T: to unix path |  | &lt;none&gt; |
| drive\_u | &lt;string&gt; | Mapping from Windows drive U: to unix path |  | &lt;none&gt; |
| drive\_v | &lt;string&gt; | Mapping from Windows drive V: to unix path |  | &lt;none&gt; |
| drive\_w | &lt;string&gt; | Mapping from Windows drive W: to unix path |  | &lt;none&gt; |
| drive\_x | &lt;string&gt; | Mapping from Windows drive X: to unix path |  | &lt;none&gt; |
| drive\_y | &lt;string&gt; | Mapping from Windows drive Y: to unix path |  | &lt;none&gt; |
| drive\_z | &lt;string&gt; | Mapping from Windows drive Z: to unix path |  | &lt;none&gt; |

The following apply to dummy HBM

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| dummy\_hbm\_reflect\_axis\_phi | &lt;logical&gt; | Default mode for negating the phi axis when mirroring dummies/HBM | TRUE, FALSE | TRUE |
| dummy\_hbm\_reflect\_axis\_theta | &lt;logical&gt; | Default mode for negating the theta axis when mirroring dummies/HBM | TRUE, FALSE | FALSE |
| dummy\_hbm\_reflect\_axis\_psi | &lt;logical&gt; | Default mode for negating the psi axis when mirroring dummies/HBM | TRUE, FALSE | TRUE |
| dynain\_fix\_slipring\_sbelts | &lt;logical&gt; | Automatically update the seatbelts on slipring elements after reading in a dynain file. | TRUE, FALSE | FALSE |
| dynain\_fix\_thums\_angle\_params | &lt;logical&gt; | Automatically update the joint angles stored in the parameters after reading a dynain file. | TRUE, FALSE | FALSE |
| dummy\_rotate\_show\_sig\_fig | &lt;integer&gt; | Number of significant figures shown in the Dummy Move Parts, Rotate Angles panel. | 0 - 7 | 2 |
| hbm\_use\_new\_cable\_node\_panel | &lt;logical&gt; | The new cable nodes attachment panel will be activated by default while working with human body models. | TRUE, FALSE | FALSE |
| hbm\_treat\_bones\_as\_rigid | &lt;logical&gt; | PRIMER rigidifies all Bone related parts in a human body model for LS-DYNA positioning analysis. | TRUE, FALSE | FALSE |
| dummy\_hbm\_use\_new\_cable\_equation | &lt;logical&gt; | Use the new equation to create the DEFINE\_CURVE used while pulling positioning cables for Dummies/HBMs during LS-DYNA analysis. | TRUE, FALSE | TRUE |
| hbm\_use\_encrypted\_mats\_for\_cables | &lt;logical&gt; | PRIMER will use the encrypted materials for finding cable attachment nodes. | TRUE, FALSE | FALSE |

Dynamic label settings.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| dynamic\_label\_format | &lt;string&gt; | Number format type for dynamic labels | AUTO, SCIENTIFIC, GENERAL | AUTO |
| dynamic\_label\_dec\_places | &lt;integer&gt; | Number of decimal places to display on dynamic labels | 0 - 9 | 3 |

The following apply to edit panels

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| edit\_find\_option | &lt;string&gt; | default on the Only/Find button chosen when opening an edit panel | ONLY, FIND, BLANK, UNBLANK | ONLY |
| edit\_modify\_mode | &lt;logical&gt; | Start edit panel in modify mode if 1 or more items exist | TRUE, FALSE | TRUE |
| edit\_panel\_colours | &lt;string&gt; | Edit panel button colours when using original GUI theme | ORIGINAL, MATCHING | ORIGINAL |
| edit\_panel\_numbering\_rule | &lt;string&gt; | default rule for numbering of created entities in edit panels | HIGHEST\_PLUS\_ONE, LABEL\_FIRST\_FREE, LABEL\_FIRST\_LATENT, LAYER\_FIRST\_FREE, LAYER\_HIGHEST\_FREE, LAYER\_HIGHEST\_PLUS\_ONE | LAYER\_HIGHEST\_PLUS\_ONE |
| formula\_req\_equal | &lt;logical&gt; | Treat text box input as formula only with equal sign = | TRUE, FALSE | TRUE |
| modify\_single\_item | &lt;logical&gt; | In modify mode automatically edit the item if only one item exists in the active models | TRUE, FALSE | FALSE |
| remember\_values\_on\_element\_edit\_panel | &lt;string&gt; | option to 'remember' integer, float values on edit panel across incarnations | ASK, TRUE, FALSE | FALSE |
| text\_button\_just | &lt;string&gt; | Justification of numbers in editing panel buttons | LEGACY, LEFT, CENTRE, RIGHT | CENTRE |

The following apply to element seatbelt accelerometer

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| element\_seatbelt\_accelerometer\_intopt | &lt;string&gt; | Used for setting INTOPT = 1 on \*Element\_seatbelt\_accelerometer card. | ON, OFF | OFF |

The following apply to encryption

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| gpg\_location | &lt;string&gt; | file location for the gpg executable for encryption tool |  | &lt;none&gt; |

The following apply to forming

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| forming\_shell\_thickness\_interpolation | &lt;string&gt; | Forming to interpolate shell thickness rather than averaging it. | ON, OFF | ON |

The following options control many aspects of image appearance. The overlay\_&lt;*xxx*&gt; options affect only the hidden-line overlay on [shaded](https://help.oasys-software.com/articles/project-primer/basic-drawing-commands-li-ne-hi-dden-line-sh-aded-image) and all [data-bearing](https://help.oasys-software.com/articles/project-primer/data-plotting-commands)plots. They have no effect on wireframe (LINE) or hidden-line plots.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| background\_mode | &lt;string&gt; | Draw background using SOLID or FADED colours | SOLID, FADED | SOLID |
| background\_colour | &lt;string&gt; | Background colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, AUTO | BLACK |
| background\_bottom\_colour | &lt;string&gt; | Background bottom colour for Faded backgrounds | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, AUTO | AUTO |
| coatpart\_display | &lt;string&gt; | How newly created shells coating a solid are drawn in the Coat Part tool | SOLID, STIPPLE\_1, STIPPLE\_2, STIPPLE\_4, STIPPLE\_8, STIPPLE\_16 | STIPPLE\_8 |
| label\_colour | &lt;string&gt; | Label colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, NOT\_BACKGROUND, TEXT | NOT\_BACKGROUND |
| nodal\_force\_moment\_colour | &lt;string&gt; | Nodal Force/Moment colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | CYAN |
| trans\_velocity\_colour | &lt;string&gt; | Trans Velocity colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | MAGENTA |
| rotl\_velocity\_colour | &lt;string&gt; | Rot'l Velocity colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | RED/MAGENTA |
| tracer\_particle\_colour | &lt;string&gt; | Tracer Particle colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | CYAN |
| constrained\_extra\_nodes\_colour | &lt;string&gt; | Constrained Extra Nodes colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, MODEL\_COLS, IFILE\_COLS, ASSY\_COLS, DEFAULT | DEFAULT |
| node\_symbol\_colour | &lt;string&gt; | Node Symbol colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, NOT\_BACKGROUND, TEXT | NOT\_BACKGROUND |
| airbag\_symbol\_colour | &lt;string&gt; | Airbag Symbol colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | BLUE |
| time\_history\_block\_colour | &lt;string&gt; | Time History Block colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | RED |
| cross\_section\_colour | &lt;string&gt; | Cross Section colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | GREEN |
| constrained\_rigid\_bodies\_colour | &lt;string&gt; | Constrained Rigid Bodies colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, MODEL\_COLS, IFILE\_COLS, ASSY\_COLS, DEFAULT | DEFAULT |
| nodal\_rigid\_body\_colour | &lt;string&gt; | Nodal Rigid Body colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, MODEL\_COLS, IFILE\_COLS, ASSY\_COLS, DEFAULT | DEFAULT |
| spotweld\_beam\_solid\_colour | &lt;string&gt; | Spotweld Beam Solid colour | PART, NPANELS | PART |
| spotweld\_beam\_solid\_colour\_projected | &lt;string&gt; | Spotweld Beam Solid Colour 2 panels colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | WHITE |
| spotweld\_beam\_solid\_colour\_2\_panels | &lt;string&gt; | Spotweld Beam Solid Colour 2 panels colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | RED |
| spotweld\_beam\_solid\_colour\_3\_panels | &lt;string&gt; | Spotweld Beam Solid Colour 3 panels colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | GREEN |
| spotweld\_beam\_solid\_colour\_4\_panels | &lt;string&gt; | Spotweld Beam Solid Colour 4 panels colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | BLUE |
| spotweld\_beam\_solid\_colour\_5\_panels | &lt;string&gt; | Spotweld Beam Solid Colour 5 panels colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | CYAN |
| constrained\_spr | &lt;string&gt; | Constrained SPR/SPR2/SPR3 | RED\_HEAD/GREEN\_TAIL, NODE\_SET | RED\_HEAD/GREEN\_TAIL |
| backing\_store | &lt;string&gt; | Backing store refresh switch and method | OFF, ON, PIXMAP, PBUFFER | ON |
| beam\_min\_size | &lt;integer&gt; | Screen length at which to swap to blob beam symbols | 1 - 100 | 25 |
| beam\_blob\_diameter | &lt;integer&gt; | Beam blob diameter | 1 - 100 | 15 |
| beams\_use\_optt | &lt;string&gt; | Turn ON OFF the Use OPTT option for beams in Display options | OFF, ON | OFF |
| contact\_shaded\_display | &lt;string&gt; | How contact segments are rendered in shaded display mode | SOLID\_HATCHED, SOLID, STIPPLE\_1, STIPPLE\_2, STIPPLE\_4, STIPPLE\_8, STIPPLE\_16 | STIPPLE\_1 |
| contact\_colour | &lt;string&gt; | Colour used to draw contact surfaces | DEFAULT, BY\_SIDE, WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | DEFAULT |
| contour\_text\_pt\_size | &lt;string&gt; | Contour bar text point size | 8, 10, 12, 14, 18, 24, AUTOMATIC | AUTOMATIC |
| contour\_levels | &lt;integer&gt; | Number of contour (CT/SI/VEC) levels | 2 - 13 | 6 |
| contour\_ramp | &lt;string&gt; | Contour ramp colour option | DEFAULT, VIRIDIS, PLASMA, MAGMA, INFERNO | DEFAULT |
| curve\_white\_background | &lt;logical&gt; | When TRUE, set the background of DEFINE\_CURVE/TABLE graphs to white | TRUE, FALSE | FALSE |
| draw\_database\_crossection\_parts | &lt;string&gt; | If YES, outline of part cross section will be drawn when xsec cuts it | YES, NO | YES |
| title\_date\_pt\_size | &lt;string&gt; | Title and date (clock) point size | 8, 10, 12, 14, 18, 24, AUTOMATIC | AUTOMATIC |
| feature\_angle | &lt;real&gt; | Feature line angle |  | 60.0 |
| force\_back\_buffer | &lt;string&gt; | Whether to draw always to back buffer (for remote rendering) | OFF, ON | OFF |
| **geometry** |
| geometry\_highlight\_failed\_surface\_boundaries | &lt;logical&gt; | When TRUE, trim curves of geometry surfaces that failed to render are copied to a new model and drawn | TRUE, FALSE | FALSE |
| geometry\_write\_tessellation\_error\_log | &lt;logical&gt; | When TRUE, error messages related to geometry surface tessellation are written to a log file in the same directory as the parent model | TRUE, FALSE | FALSE |
| geometry\_add\_failed\_surfaces\_to\_clipboard | &lt;logical&gt; | When TRUE, surfaces that have failed to render will be added to the clipboard | TRUE, FALSE | FALSE |
| geometry\_curve\_max\_edge\_length\_factor | &lt;real&gt; | Max edge length, as a factor of the model diagonal, for segments used to draw geometry surface trim curves | 1.1754944E-38 - 1.0 | 0.01 |
| geometry\_curve\_min\_edge\_length\_factor | &lt;real&gt; | Min edge length, as a factor of the model diagonal, for segments used to draw geometry surface trim curves | 1.1754944E-38 - 1.0 | 0.0008 |
| geometry\_surface\_max\_edge\_length\_factor | &lt;real&gt; | Max edge length, as a factor of the model diagonal, of trias used to draw geometry surfaces | 1.1754944E-38 - 1.0 | 0.08 |
| geometry\_surface\_min\_edge\_length\_factor | &lt;real&gt; | Min edge length, as a factor of the model diagonal, of trias used to draw geometry surfaces | 1.1754944E-38 - 1.0 | 0.001 |
| geometry\_element\_max\_separation\_factor | &lt;real&gt; | Max separation, as a factor of the model diagonal, between the centres/edges of trias, used to draw geometry surfaces, and a surface | 1.1754944E-38 - 1.0 | 0.0001 |
| geometry\_surface\_refinement | &lt;integer&gt; | Number of iterations to refine the tessellation of a geometry surface | 0 - 10 | 2 |
| geometry\_refinement\_distance\_tolerance | &lt;real&gt; | Distance tolerance of tessellation to actual geometry surface | 1E-6 - 1.0 | 1E-5 |
| geometry\_refinement\_angle\_tolerance | &lt;real&gt; | Dot product tolerance between two trias on a geometry surface tessellation | 0.0 - 1.0 | 0.999 |
| geometry\_max\_trim\_split | &lt;integer&gt; | Maximum number of trias that can be split by a trim curve segment before aborting | 1 - 2147483646 | 1000 |
| geometry\_coord\_tolerance | &lt;real&gt; | Parametric tolerance for point coincidence in NURB surfaces | 1.1754944E-38 - 1.0 | 1E-3 |
| geometry\_vertex\_tolerance | &lt;real&gt; | Parametric tolerance at which we are on a vertex in NURB surfaces | 0.0 - 1.0 | 2.5e-5 |
| geometry\_edge\_tolerance | &lt;real&gt; | Parametric tolerance for facet edges in NURB surfaces | 0.0 - 1.0 | 1E-6 |
| geometry\_free\_edge\_tolerance | &lt;real&gt; | Parametric tolerance for facet free edges in NURB surfaces | 0.0 - 1.0 | 2.5E-4 |
| geometry\_invert\_grid | &lt;integer&gt; | Size of initial grid when inverting points in NURB surfaces | 5 - 100 | 25 |
| geometry\_curve\_segs | &lt;integer&gt; | Number of segments to draw curve with | 2 - 1000 | 20 |
| geometry\_surf\_segs | &lt;integer&gt; | Number of segments to draw surface with | 2 - 500 | 10 |
| geometry\_sh\_overlay | &lt;string&gt; | NURB Hidden/Shaded overlay edge display | OFF, ON | ON |
| geometry\_tolerance | &lt;real&gt; | NURB tolerance for coincident points | 1.1754944E-38 - 1 | 1.0E-5 |
| geometry\_merge\_tolerance | &lt;real&gt; | Tolerance for merging points | 1.1754944E-38 - 1 | 0.05 |
| geometry\_ignore\_curves | &lt;real&gt; | Length below which curves are ignored | 1.1754944E-38 - 1 | 0.01 |
| graphics\_refresh | &lt;string&gt; | Refresh graphics window when exposed | OFF, ON | ON |
| graphics\_type | &lt;string&gt; | Graphics format to start Primer with | X8, X24, X, Opengl, Default | Opengl |
| graticule\_active | &lt;string&gt; | Turns graticule ON or OFF | OFF, ON | OFF |
| graticule\_mode | &lt;string&gt; | Graticule mode - 2D/3D | 2D, 3D | 2D |
| graticule\_decimal\_places | &lt;integer&gt; | Number of decimal places for graticule numbers | 0 - 9 | 3 |
| graticule\_display\_numbers | &lt;string&gt; | When ON, graticule numbers are displayed. | OFF, ON | ON |
| graticule\_exponent | &lt;integer&gt; | Exponent for graticule number format | -99 - 99 | 3 |
| graticule\_line\_colour | &lt;string&gt; | Graticule line colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, NOT\_BACKGROUND, TEXT | TEXT |
| graticule\_number\_format | &lt;string&gt; | Format for graticule numbers | AUTOMATIC, MANUAL, SCIENTIFIC, GENERAL | AUTOMATIC |
| graticule\_plane\_colour | &lt;string&gt; | Graticule plane colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE | GREY |
| graticule\_show\_grid | &lt;string&gt; | Shows the graticule grid | OFF, ON | OFF |
| graticule\_text\_colour | &lt;string&gt; | Graticule text colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, NOT\_BACKGROUND, TEXT | TEXT |
| graticule\_text\_size | &lt;integer&gt; | Graticule text size | 0 - 500 | 25 |
| graticule\_transparency | &lt;integer&gt; | Transparency for graticule | 0 - 100 | 100 |
| **graticule\_3D** |
| **for\_X** |
| graticule3D\_Plane\_X\_active | &lt;string&gt; | Show plane X= | OFF, ON | ON |
| graticule3D\_Plane\_X\_type | &lt;string&gt; | Shows the plane at X= | MIN, MAX, AUTO | AUTO |
| graticule3D\_minimum\_X | &lt;real&gt; | Minimum value for X |  | &lt;none&gt; |
| graticule3D\_min\_X\_auto | &lt;string&gt; | Puts the default value for Minimum value of X | ON, OFF | &lt;none&gt; |
| graticule3D\_maximum\_X | &lt;real&gt; | Maximum value for X |  | &lt;none&gt; |
| graticule3D\_max\_X\_auto | &lt;string&gt; | Puts the default value for Maximum value of X | ON, OFF | &lt;none&gt; |
| graticule3D\_tick\_X\_auto | &lt;string&gt; | Puts the default value for tick interval of X | ON, OFF | &lt;none&gt; |
| graticule3D\_tick\_interval\_X | &lt;real&gt; | Tick interval for X |  | &lt;none&gt; |
| **for\_Y** |
| graticule3D\_Plane\_Y\_active | &lt;string&gt; | Show plane Y= | OFF, ON | ON |
| graticule3D\_Plane\_Y\_type | &lt;string&gt; | Shows the plane at Y= | MIN, MAX, AUTO | AUTO |
| graticule3D\_minimum\_Y | &lt;real&gt; | Minimum value for Y |  | &lt;none&gt; |
| graticule3D\_min\_Y\_auto | &lt;string&gt; | Puts the default value for Minimum value of Y | ON, OFF | &lt;none&gt; |
| graticule3D\_maximum\_Y | &lt;real&gt; | Maximum value for Y |  | &lt;none&gt; |
| graticule3D\_max\_Y\_auto | &lt;string&gt; | Puts the default value for Maximum value of Y | ON, OFF | &lt;none&gt; |
| graticule3D\_tick\_interval\_Y | &lt;real&gt; | Tick interval for Y |  | &lt;none&gt; |
| graticule3D\_tick\_Y\_auto | &lt;string&gt; | Puts the default value for tick interval of Y | ON, OFF | &lt;none&gt; |
| **for\_Z** |
| graticule3D\_Plane\_Z\_active | &lt;string&gt; | Show plane Y= | OFF, ON | ON |
| graticule3D\_Plane\_Z\_type | &lt;string&gt; | Shows the plane at Z= | MIN, MAX, AUTO | AUTO |
| graticule3D\_minimum\_Z | &lt;real&gt; | Minimum value for Z |  | &lt;none&gt; |
| graticule3D\_min\_Z\_auto | &lt;string&gt; | Puts the default value for Minimum value of Z | ON, OFF | &lt;none&gt; |
| graticule3D\_maximum\_Z | &lt;real&gt; | Maximum value for Z |  | &lt;none&gt; |
| graticule3D\_max\_Z\_auto | &lt;string&gt; | Puts the default value for Maximum value of Z | ON, OFF | &lt;none&gt; |
| graticule3D\_tick\_interval\_Z | &lt;real&gt; | Tick interval for Z |  | &lt;none&gt; |
| graticule3D\_tick\_Z\_auto | &lt;string&gt; | Puts the default value for tick interval of Z | ON, OFF | &lt;none&gt; |
| image\_format | &lt;string&gt; | Default image format | BMP\_8\_C, BMP\_8\_UN, PNG\_8, GIF\_8, BMP\_24\_UN, PNG\_24, JPG\_24, PPM\_24 | PNG\_24 |
| initial\_plot\_mode | &lt;string&gt; | Initial drawing mode | LINE, HIDDEN, SHADED | SHADED |
| initial\_view\_orientation | &lt;string&gt; | Initial view orientation for the graphics window. | +XY, +YZ, +XZ, +ISO, -XY, -YZ, -XZ, -ISO | +XY |
| intel\_hd\_use\_shaders | &lt;string&gt; | Control usage of hardware shaders on Intel HD graphics cards | AUTO\_DETECT, FORCE\_OFF, FORCE\_ON | AUTO\_DETECT |
| label\_pt\_size | &lt;string&gt; | Label text point size | 8, 10, 12, 14, 18, 24, AUTOMATIC | AUTOMATIC |
| label\_background | &lt;string&gt; | Label background display | ON, OFF | ON |
| line\_antialias | &lt;string&gt; | Draw lines using antialiasing | OFF, ON | OFF |
| lumped\_mass\_size | &lt;integer&gt; | Lumped mass symbol size | 1 - 100 | 25 |
| lumped\_mass\_symbol | &lt;string&gt; | Lumped mass symbol type | square, cube, automatic | automatic |
| mesh\_fixed\_point\_size | &lt;integer&gt; | Size to draw fixed points at when (re)meshing | 1 - 100 | 10 |
| no\_discrete\_contouring | &lt;logical&gt; | Draw continuous contours as discrete bands when less than 14 unique values are present | TRUE, FALSE | FALSE |
| overlay\_colour | &lt;string&gt; | Overlay colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, ELEMENT | GREY |
| overlay\_mode | &lt;string&gt; | Overlay drawn | OFF, FREE, FREE\_IGN\_PART, FEATURE, ALL | FREE |
| overlay\_line\_width | &lt;integer&gt; | Width of overlay lines | 1 - 10 | 1 |
| placement | &lt;string&gt; | Location for initial window on multi-screen display | LEFT, CENTRE, RIGHT, BOTTOM, TOP, LEFT\_BOTTOM, LEFT\_TOP, CENTRE\_BOTTOM, CENTRE\_TOP, RIGHT\_BOTTOM, RIGHT\_TOP | &lt;none&gt; |
| plot\_border | &lt;string&gt; | Border drawn on plot | OFF, ON | ON |
| plot\_date | &lt;string&gt; | Date drawn on plot | OFF, ON | OFF |
| plot\_model\_names | &lt;string&gt; | Model names drawn on plot | OFF, ON | ON |
| plot\_triad | &lt;string&gt; | Triad for coordinate axes drawn on plot | OFF, ON | OFF |
| recursive\_blanking | &lt;string&gt; | How blanking propagates recursively | NO\_RECURSION, DRAWABLE\_ONLY, UNCONDITIONAL | NO\_RECURSION |
| seatbelt\_size | &lt;integer&gt; | Notional seatbelt size | 1 - 1000 | 50 |
| segment\_hatching | &lt;string&gt; | Contact and other segment hatching | OFF, ON | ON |
| shell\_graphics\_mode | &lt;string&gt; | Drawing method for shell elements, flat and smooth use true thickness | THIN, FLAT, SMOOTH | THIN |
| shell\_normal\_length | &lt;real&gt; | Multiplier for determining the length of shell normals. |  | 0.01 |
| sketch\_colour | &lt;string&gt; | Sketch colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, NOT\_BACKGROUND, TEXT | WHITE |
| spotweld\_size | &lt;integer&gt; | Spotweld beam graphics size | 1 - 100 | 40 |
| spring\_size | &lt;integer&gt; | Spring beam graphics size | 0 - 500 | 100 |
| swap\_nodal\_coords | &lt;string&gt; | Whether to swap ordinary and reference nodal coordinates | ALWAYS, ASK | ASK |
| swap\_shell\_topology | &lt;string&gt; | Whether to swap ordinary and airbag reference shell topology | ALWAYS, ASK | ASK |
| target\_size | &lt;integer&gt; | Target graphics size | 0 - 100 | 20 |
| text\_colour | &lt;string&gt; | Text colour | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW, RED/MAGENTA, YELLOW/ORANGE, YELLOW/GREEN, GREEN/CYAN, CYAN/BLUE, RED/ORANGE, LIGHT\_BLUE, NOT\_BACKGROUND | WHITE |
| true\_beam\_sections | &lt;logical&gt; | Whether or not to draw beam elements using true sections | TRUE, FALSE | FALSE |
| white\_background\_image | &lt;logical&gt; | Write images with white background | TRUE, FALSE | FALSE |
| window\_size\_control | &lt;string&gt; | Define the Window size control fro PRIMER | AUTOMATIC, STATIC, FIXED\_ASPECT, LOCKED | AUTOMATIC |

The following options control graphical user interface

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| gui\_theme | &lt;string&gt; | Graphical User Interface (GUI) theme | LIGHT, DARK, CLASSIC, LEGACY | LIGHT |
| gui\_styling\_mode | &lt;string&gt; | Graphical User Interface (GUI) styling and decoration | NOT\_USED, TIME\_LIMIT, ALWAYS | TIME\_LIMIT |
| gui\_styling\_tlimit | &lt;integer&gt; | Graphical User Interface (GUI) menu repaint time limit to turn off decorations | 0 - 100000 | 500 |
| show\_icon\_text | &lt;logical&gt; | Whether or not to show text on picture-style icons | TRUE, FALSE | TRUE |

The following control settings and warnings when reading include files

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| auto\_offset\_user\_clash | &lt;string&gt; | Handling of clashes involving \*INCLUDE\_AUTO\_OFFSET\_USER | IGNORE, REMOVE\_USER | IGNORE |
| doppelganger\_listing\_order | &lt;string&gt; | How doppelganger/alternative include filenames appear in include and part trees | AS\_READ\_FIRST, ON\_INCL\_FIRST | AS\_READ\_FIRST |
| include\_file\_exceeds\_80\_char\_warning | &lt;string&gt; | message handling when include file exceeding 80 char is read | WARNING, ERROR, NO\_CHECK | WARNING |
| missing\_include\_file\_action | &lt;string&gt; | Whether or not to remember missing (skipped on input) include file definitions | REMEMBER, FORGET | REMEMBER |
| read\_set\_collect\_include\_trans | &lt;string&gt; | If \*SET\_COLLECT in \*INCLUDE\_TRANSFORM with IDSOFF is unreferenced remap references | AS\_DYNA, REMAP | AS\_DYNA |
| warn\_set\_collect\_include\_trans | &lt;logical&gt; | Warn if \*SET\_COLLECT in \*INCLUDE\_TRANSFORM with IDSOFF non-zero may have errors | TRUE, FALSE | TRUE |

The following control settings and warnings when reading files

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| **comments** |
| anchored\_comment\_handling | &lt;string&gt; | Anchor \*COMMENT cards to the single following keyword or to the following block of multiple cards | SINGLE, MULTIPLE | SINGLE |
| anchored\_comment\_dollar\_alone | &lt;logical&gt; | Anchored \*COMMENTs will include empty comment lines '$' (dollar alone) | TRUE, FALSE | TRUE |
| anchored\_comment\_dollar\_wspace | &lt;logical&gt; | Anchored \*COMMENTs will include comment lines starting '$ ' (dollar + white space) | TRUE, FALSE | TRUE |
| anchored\_comment\_dollar\_primer | &lt;logical&gt; | Anchored \*COMMENTs will include PRIMER special comment lines starting '$:' (dollar + colon) | TRUE, FALSE | TRUE |
| anchored\_comment\_dollar\_lspp | &lt;logical&gt; | Anchored \*COMMENTs will include LSPP special comment lines starting '$#' (dollar + hash) | TRUE, FALSE | TRUE |
| anchored\_comment\_dollar\_any\_nw | &lt;logical&gt; | Anchored \*COMMENTs will include comment lines starting '$...' (dollar + any non-white space character) | TRUE, FALSE | TRUE |
| anchored\_comment\_truncation | &lt;logical&gt; | Anchored \*COMMENTs will truncate multiple empty '$' lines to a single such line | TRUE, FALSE | TRUE |
| copy\_hm\_comment\_title | &lt;string&gt; | Set material and section titles to HM comment titles if no current title is set | ON, OFF | ON |
| ignore\_lspp\_comments | &lt;logical&gt; | Ignore comment lines from LSPP starting '$#' when storing comments | TRUE, FALSE | TRUE |
| read\_ansa\_comments | &lt;string&gt; | read ANSA comments upon input (comments used to construct assemblies) | ON, OFF | ON |
| read\_embedded\_comments | &lt;logical&gt; | Read and store embedded comments in the keyword file | TRUE, FALSE | TRUE |
| read\_hm\_comments | &lt;string&gt; | read HM comments upon input (comments used to construct assemblies, colours and in some cases, titles) | ON, OFF | ON |
| **compressed** |
| keyin\_compress\_threaded | &lt;logical&gt; | TRUE if compressed input runs in a separate thread (faster) | TRUE, FALSE | TRUE |
| keyin\_compress\_diag\_level | &lt;integer&gt; | Diagnostic level for compressed input. (0 = off, 1 to 3 progressively more ) | 0 - 3 | 0 |
| keyin\_compress\_bsize | &lt;integer&gt; | Compression buffer size in kbytes (4 - 16384 permitted, advanced setting) | 4 - 16384 | 1024 |
| keyin\_compress\_nspin\_m | &lt;integer&gt; | Threaded master spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyin\_compress\_nspin\_s | &lt;integer&gt; | Threaded output spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyin\_compress\_yield\_m | &lt;integer&gt; | Threaded master yield threshold in ms (0 - 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyin\_compress\_yield\_s | &lt;integer&gt; | Threaded output yield threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyin\_compress\_sleep\_m | &lt;integer&gt; | Threaded master sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 60 |
| keyin\_compress\_sleep\_s | &lt;integer&gt; | Threaded output sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 40 |
| keyin\_compress\_timeout | &lt;integer&gt; | Threaded timeout threshold in ms (0 = 100000 permitted, advanced setting) | 0 - 100000 | 10000 |
| **normal** |
| keyin\_normal\_threaded | &lt;logical&gt; | TRUE if normal input runs in a separate thread (faster) | TRUE, FALSE | TRUE |
| keyin\_normal\_diag\_level | &lt;integer&gt; | Diagnostic level for normal input. (0 = off, 1 to 3 progressively more ) | 0 - 3 | 0 |
| keyin\_normal\_bsize | &lt;integer&gt; | Threaded buffer size in kbytes (4 - 16384 permitted, advanced setting) | 4 - 16384 | 1024 |
| keyin\_normal\_nspin\_m | &lt;integer&gt; | Threaded master spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyin\_normal\_nspin\_s | &lt;integer&gt; | Threaded output spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyin\_normal\_yield\_m | &lt;integer&gt; | Threaded master yield threshold in ms (0 - 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyin\_normal\_yield\_s | &lt;integer&gt; | Threaded output yield threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyin\_normal\_sleep\_m | &lt;integer&gt; | Threaded master sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 60 |
| keyin\_normal\_sleep\_s | &lt;integer&gt; | Threaded output sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 40 |
| keyin\_normal\_timeout | &lt;integer&gt; | Threaded timeout threshold in ms (0 = 100000 permitted, advanced setting) | 0 - 100000 | 10000 |
| **dyna\_check** |
| dyna\_output\_source | &lt;string&gt; | Process to get the LS-DYNA outputs checks | EXISTING\_DYNA\_RESULTS, INITIALISE\_IN\_DYNA | EXISTING\_DYNA\_RESULTS |
| additional\_dyna\_output | &lt;string&gt; | Additional search string for dyna output files |  | &lt;none&gt; |
| additional\_dyna\_output\_search | &lt;logical&gt; | Action to search for dyna output files using additional search string (provided search string is not empty) | TRUE, FALSE | FALSE |
| compressed\_dyna\_output\_search | &lt;logical&gt; | Action to search for compressed (.gz and .zip) dyna output files | TRUE, FALSE | FALSE |
| dyna\_output\_initialise\_type | &lt;string&gt; | LS-DYNA option to set to initialise the model | NCYCLE, MCHECK | NCYCLE |
| dyna\_output\_initialise\_ncycle | &lt;integer&gt; | Number of cycles to run to initialise model in LS-DYNA, used only if db\_dyna\_output\_initialise\_type is set to NCYCLE | 1 - 2147483646 | 10 |
| dyna\_output\_mpp\_decomp\_numproc | &lt;integer&gt; | Number of processors to run MPP decomposition while submitting the model to LS-DYNA | 1 - 8192 | 4 |
| convert\_implicit\_parameter | &lt;logical&gt; | Action to convert implicit parameters in [...] to values | TRUE, FALSE | FALSE |
| correct\_seatbelt\_topology | &lt;string&gt; | Action to correct errors in 1D seatbelt topology on input | AUTOMATIC, MANUAL | MANUAL |
| duplicated\_keyword\_warning | &lt;string&gt; | Give 'Stop and acknowledge' style warning whenever duplicated keyword is read | ON, OFF | ON |
| duplicate\_batch\_default | &lt;string&gt; | Action to use when reading entities with duplicate labels in batch mode | USE\_LAST, USE\_FIRST, MASTER\_OR\_LAST, MASTER\_OR\_FIRST, ABORT | USE\_LAST |
| extensions\_for\_file\_read | &lt;string&gt; | considered extensions for file read (e.g. \*.k\* \*.gz). |  | \*.k\* \*.dyn \*.gz \*.zip |
| find\_data\_for\_scan | &lt;logical&gt; | Find missing parameter and/or include transform data during model scan | TRUE, FALSE | FALSE |
| force\_keyword\_format | &lt;string&gt; | Force the size of data fields to be SMALL (8 or 10 columns wide), I10 (min 10 wide) or LARGE (min 20 wide) | SMALL, I10, LARGE | SMALL |
| inherit\_file\_format | &lt;logical&gt; | Include file inherits large/i10/small keyword format of parent if no explicit size defined | TRUE, FALSE | TRUE |
| input\_buffer\_size | &lt;integer&gt; | File buffer size for reading ascii files | 2 - 2147483646 | 4096 |
| input\_echo\_frequency | &lt;integer&gt; | Progress echo interval when reading ascii files | 1 - 2147483646 | 1000 |
| input\_exception\_BOUNDARY | &lt;string&gt; | Allow 'excess' input \*BOUNDARY cards to be skipped or ignored. READ: all cards are read and stored as normal; SKIP: cards are not read into memory but are written to a 'skip' file; IGNORE: cards are neither read nor written to a 'skip' file | READ, SKIP, IGNORE | READ |
| input\_exception\_INITIAL | &lt;string&gt; | Allow 'excess' input \*INITIAL cards to be skipped or ignored. READ: all cards are read and stored as normal; SKIP: cards are not read into memory but are written to a 'skip' file; IGNORE: cards are neither read nor written to a 'skip' file | READ, SKIP, IGNORE | READ |
| input\_exception\_LOAD | &lt;string&gt; | Allow 'excess' input \*LOAD cards to be skipped or ignored. READ: all cards are read and stored as normal; SKIP: cards are not read into memory but are written to a 'skip' file; IGNORE: cards are neither read nor written to a 'skip' file | READ, SKIP, IGNORE | READ |
| keyin\_filename\_syntax | &lt;string&gt; | For include files (and master if not found) permute filename with .gz, .zip, .kby etc and find newest version on disk | NEWEST, VERBATIM, PREFER\_EXACT | PREFER\_EXACT |
| large\_format\_80cols | &lt;logical&gt; | Wrap large format at 80 columns | TRUE, FALSE | FALSE |
| preread\_parameters | &lt;logical&gt; | Enable pre-read scan of input deck for \*PARAMETER definitions | TRUE, FALSE | FALSE |
| read\_despite\_error\_warning | &lt;string&gt; | Give 'Stop and acknowledge' style warning when file read succeeds despite errors | ON, OFF | ON |
| read\_duplicates | &lt;string&gt; | How duplicate labelled items are handled during keyword input | ALL, NONE, LS971, R9, NODE | R9 |
| drag\_drop\_files\_are\_LSDYNA | &lt;logical&gt; | Drag and Drop files are LS-DYNA | TRUE, FALSE | FALSE |
| read\_missing\_include\_file | &lt;logical&gt; | set to TRUE/FALSE to enable/disable the 'Missing include file browse panel' | TRUE, FALSE | TRUE |
| save\_read\_log\_dir | &lt;string&gt; | Directory in which a copy of the PRIMER keyword read log, primer\_readlog.txt, is written |  | JOBDIR |
| single\_card\_ABAG | &lt;logical&gt; | Ignore 'extra' data lines when reading \*ABAG headers | TRUE, FALSE | FALSE |
| single\_card\_EQOS | &lt;logical&gt; | Ignore 'extra' data lines when reading \*EQOS headers | TRUE, FALSE | FALSE |
| single\_card\_HGLS | &lt;logical&gt; | Ignore 'extra' data lines when reading \*HGLS headers | TRUE, FALSE | FALSE |
| single\_card\_MATL | &lt;logical&gt; | Ignore 'extra' data lines when reading \*MATL headers | TRUE, FALSE | FALSE |
| skip\_severe\_errors | &lt;logical&gt; | Whether PRIMER should skip severe errors or not. | TRUE, FALSE | FALSE |
| skip\_severe\_errors\_dynain | &lt;logical&gt; | Whether PRIMER should temporarily skip severe errors when reading a dynain file in. | TRUE, FALSE | TRUE |
| suppress\_text\_box\_messages\_on\_keyin | &lt;string&gt; | suppress all text box messages on keyin (just write to log) | ON, OFF | OFF |
| threaded\_elem\_node\_lookup\_limit | &lt;integer&gt; | Threshold test time (ms) for element topology lookup to consider threading | 0 - 2147483646 | 1000 |
| threaded\_elem\_node\_lookup\_spin | &lt;integer&gt; | Number of spin iterations in threaded element topology lookup before sleep | 1 - 2147483646 | 10000 |
| threaded\_elem\_node\_lookup\_yield | &lt;logical&gt; | Permit thread to yield its time slice while waiting | TRUE, FALSE | FALSE |
| warn\_num\_implicit\_parameters | &lt;integer&gt; | Number of [...] implicit parameters to trigger warning, zero to turn off | 0 - 2000000000 | 100000 |
| warn\_parameter\_order | &lt;logical&gt; | Warn if parameters in INCLUDE\_TRANSFORM used before being defined | TRUE, FALSE | TRUE |
| zero\_field\_spillover | &lt;logical&gt; | Allow zero field spillover when reading keyword files | TRUE, FALSE | FALSE |
| zero\_volume\_warning | &lt;logical&gt; | Warn about shells of zero area or solids of zero volume | TRUE, FALSE | TRUE |
| **STEP** |
| step\_component\_name\_source | &lt;string&gt; | Which STEP entity type to use as the source for component names | PRODUCT, PRODUCT\_DEFINITION | PRODUCT |

These settings control the attributes and behaviour of Primer's IPP model build tool.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| ipp\_replacement\_impactor | &lt;string&gt; | set filename substitute user defined impactor on completion of IPP build |  | None |
| ipp\_positioning\_method | &lt;string&gt; | control positioning bias of impactor at 'difficult' points | bias aim point to target, bias contact point to target, combined | combined |

These settings control the attributes and behaviour of Primer's generic Keyword editor.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| formula\_req\_equal | &lt;logical&gt; | Treat text box input as formula only with equal sign = | TRUE, FALSE | TRUE |
| kw\_edit\_init\_defs | &lt;integer&gt; | Number of definitions to show initially | 1 - 100 | 5 |
| kw\_edit\_init\_rows | &lt;integer&gt; | Maximum number of rows to show initially | 1 - 100 | 10 |
| scale\_kw\_editor | &lt;logical&gt; | Whether or not to scale the KW editor horizontally to show large labels | TRUE, FALSE | TRUE |

The following control element labelling

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| clabel\_case\_sensitive | &lt;string&gt; | Whether or not character labels are case sensitive | KEYIN\_ONLY, NEVER, ALWAYS | KEYIN\_ONLY |
| clabel\_syntax | &lt;string&gt; | Syntax permitted for character labels | VERY\_LOOSE, LOOSE, RATIONAL | VERY\_LOOSE |
| label\_warning | &lt;logical&gt; | Display a warning if the maximum number of labels is reached | TRUE, FALSE | TRUE |
| max\_labels | &lt;integer&gt; | Maximum number of labels to display | 1 - 2147483646 | 1000 |
| NODE\_labelled | &lt;string&gt; | Nodes labelled | ON, OFF | OFF |
| SOLID\_labelled | &lt;string&gt; | Solids labelled | ON, OFF | OFF |
| BEAM\_labelled | &lt;string&gt; | Beams labelled | ON, OFF | OFF |
| SHELL\_labelled | &lt;string&gt; | Shells labelled | ON, OFF | OFF |
| TSHELL\_labelled | &lt;string&gt; | Thick shells labelled | ON, OFF | OFF |
| DISCRETE\_labelled | &lt;string&gt; | Springs/dampers labelled | ON, OFF | OFF |
| MASS\_labelled | &lt;string&gt; | Lumped masses labelled | ON, OFF | OFF |

The following strings and values control[laser plotting](https://help.oasys-software.com/articles/project-primer/laser-introduction-to-laser-plotting) setup

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| laser\_paper\_size | &lt;string&gt; | Default paper size | US, A4 | A4 |
| laser\_orientation | &lt;string&gt; | Default page orientation | Portrait, Landscape | Landscape |
| laser\_mode | &lt;string&gt; | Default laser mode | Colour, Greyscale | Greyscale |
| laser\_insert\_file | &lt;string&gt; | Valid filename |  | &lt;none&gt; |
| laser\_top\_margin | &lt;real&gt; | Top margin size in mm |  | 10 |
| laser\_bottom\_margin | &lt;real&gt; | Bottom margin size in mm |  | 30 |
| laser\_left\_margin | &lt;real&gt; | Left margin size in mm |  | 20 |
| laser\_right\_margin | &lt;real&gt; | Right margin size in mm |  | 10 |

The following control overall window layout, organisation and behaviour

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| auto\_minimise | &lt;string&gt; | If an edit panel obscures the graphics window, it will automatically minimise when the mouse moves off the panel | OFF, ON, PICK, ALWAYS | OFF |
| existing\_panel\_action | &lt;string&gt; | Action for existing panels when new one mapped | NONE, IN\_SITU, TIDY | NONE |
| keep\_rhs\_lowered | &lt;logical&gt; | (Superseded) Keep all of docked area on Right Hand Side lowered in stacking order | TRUE, FALSE | FALSE |
| keep\_rhs\_top\_lowered | &lt;logical&gt; | Keep top half of docked area on Right Hand Side lowered in stacking order | TRUE, FALSE | TRUE |
| keep\_rhs\_bottom\_lowered | &lt;logical&gt; | Keep bottom half of docked area on Right Hand Side lowered in stacking order | TRUE, FALSE | FALSE |
| keep\_gbox\_lowered | &lt;logical&gt; | Keep graphics box lowered in stacking order | TRUE, FALSE | TRUE |
| maximise | &lt;logical&gt; | Maximise window when PRIMER started | TRUE, FALSE | TRUE |
| panel\_placement | &lt;string&gt; | Where new floating panels are located | LEFT, R\_BORD, RIGHT, TOP, B\_BORD, BOTTOM, FREE | FREE |
| permit\_duplicate\_edit | &lt;logical&gt; | Whether or not to allow a 2nd and subsequent editing panel on the same entity | TRUE, FALSE | FALSE |
| reset\_layout | &lt;logical&gt; | Reset standard layout after change in master window size or shape | TRUE, FALSE | TRUE |
| rhs\_initial\_keywords\_state | &lt;string&gt; | Initial appearance of Keywords button area | EXPANDED, CONTRACTED | EXPANDED |
| rhs\_initial\_tools\_state | &lt;string&gt; | Initial appearance of Tools button area | EXPANDED, CONTRACTED | EXPANDED |
| rhs\_number\_columns | &lt;integer&gt; | Number of columns of Tools, Keywords and Tabs buttons | 3 - 100 | 4 |
| scale\_edit\_panels | &lt;logical&gt; | Whether or not to scale editing panels horizontally to show large labels | TRUE, FALSE | TRUE |
| scale\_kw\_editor | &lt;logical&gt; | Whether or not to scale the KW editor horizontally to show large labels | TRUE, FALSE | TRUE |

The following options control image lighting

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| shaded\_ambient | &lt;real&gt; | Percentage ambient light (0-100) | 0.0 - 100.0 | 30 |
| shaded\_diffuse | &lt;real&gt; | Percentage diffuse brightness (0-100) | 0.0 - 100.0 | 70 |
| shaded\_shininess | &lt;real&gt; | Percentage specular brightness (0-100) | 0.0 - 100.0 | 70 |
| shaded\_saturation | &lt;real&gt; | Percentage colour saturation (0-100) | 0.0 - 100.0 | 50 |

The following relate to the load path tool

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| load\_path\_intersection\_warning | &lt;logical&gt; | Warn about unexpected intersections when auto-creating a load path | TRUE, FALSE | TRUE |
| load\_path\_exclude\_solids | &lt;logical&gt; | Exclude solid elements by default when auto-creating a load path | TRUE, FALSE | FALSE |
| load\_path\_exclude\_beams | &lt;logical&gt; | Exclude beam elements by default when auto-creating a load path | TRUE, FALSE | FALSE |
| load\_path\_exclude\_shells | &lt;logical&gt; | Exclude shell elements by default when auto-creating a load path | TRUE, FALSE | FALSE |
| load\_path\_exclude\_tshells | &lt;logical&gt; | Exclude thick shell elements by default when auto-creating a load path | TRUE, FALSE | FALSE |
| load\_path\_psid\_mode | &lt;string&gt; | Default mode for Xsec PSID definition | AUTO, MANUAL | AUTO |
| load\_path\_orientation\_mode | &lt;string&gt; | Default xsec orientation mode | NORMAL\_TO\_PATH, CONSTANT\_X, CONSTANT\_Y, CONSTANT\_Z | NORMAL\_TO\_PATH |
| load\_path\_position\_mode | &lt;string&gt; | Default xsec position mode | PITCH, COUNT, SNAP | PITCH |
| load\_path\_pitch | &lt;real&gt; | Default pitch value |  | 0.0 |
| load\_path\_xsec\_count | &lt;integer&gt; | Default number of xsecs |  | 0 |
| load\_path\_snap\_axis | &lt;string&gt; | Default snap to grid global axis | X\_AXIS, Y\_AXIS, Z\_AXIS, DEFAULT | DEFAULT |
| load\_path\_snap\_grid | &lt;real&gt; | Default 'snap to grid' grid size |  | 0.0 |
| load\_path\_offset | &lt;real&gt; | Default start offset |  | 0.0 |
| load\_path\_size\_mode | &lt;string&gt; | Default xsec size mode | AUTO, FIXED | AUTO |
| load\_path\_auto\_size\_perc\_increase | &lt;real&gt; | Default percentage increase for the auto-size mode |  | 10.0 |
| load\_path\_auto\_size\_only\_vis | &lt;logical&gt; | Default 'only visible' status for the auto-size mode | TRUE, FALSE | FALSE |
| load\_path\_auto\_size\_max | &lt;real&gt; | Default max size for the auto-size mode |  | 0.0 |
| load\_path\_l\_length | &lt;real&gt; | Default L length for the fixed-size mode |  | 0.0 |
| load\_path\_m\_length | &lt;real&gt; | Default M length for the fixed-size mode |  | 0.0 |
| load\_path\_add\_loc\_to\_title | &lt;logical&gt; | Default status of the 'Automatically add location to title' | TRUE, FALSE | TRUE |

The following options control display of local material directions

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| locaxes\_type | &lt;string&gt; | Set size of triad as a function of raw or screen coordinates, or as a function of average element length | SCREEN\_SPACE, MODEL\_SPACE, AVG\_EL\_LENGTH | SCREEN\_SPACE |
| locaxes\_size | &lt;real&gt; | Triad size |  | 75 |
| locaxes\_scale | &lt;real&gt; | Triad scale factor |  | 0.2 |
| locaxes\_colour | &lt;string&gt; | Display triads for composite parts | DEFAULT, MTL\_COLOUR | DEFAULT |

The following options relate to macros

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| macro\_auto\_record | &lt;string&gt; | Filename to automatically record macro to |  | &lt;none&gt; |
| macro\_directory | &lt;string&gt; | Directory in which PRIMER looks for macros |  | $OA\_INSTALL/primer\_library/macros |
| macro\_echo\_to\_dialogue | &lt;string&gt; | Echo of recorded macro commands to dialogue box | ON, OFF | ON |
| macro\_echo\_to\_terminal | &lt;string&gt; | Echo of recorded macro commands to terminal window | ON, OFF | OFF |

The following options relate to mass display

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| include\_mass\_for\_2d\_seatbelt\_elements | &lt;string&gt; | include mass of 2d seatbelt elements in the part mass | ON, OFF | ON |
| information\_mass\_display | &lt;string&gt; | switch to turn off mass information in the quick-pick information panel | OFF, ON | ON |

The following options affect the properties and behaviour of materials (see [Materials section](https://help.oasys-software.com/articles/project-primer/material-defining-structural-and-thermal-materials))

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| **user\_defined\_materials** |
| mat\_41\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_41 |  | &lt;none&gt; |
| mat\_42\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_42 |  | &lt;none&gt; |
| mat\_43\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_43 |  | &lt;none&gt; |
| mat\_44\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_44 |  | &lt;none&gt; |
| mat\_45\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_45 |  | &lt;none&gt; |
| mat\_46\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_46 |  | &lt;none&gt; |
| mat\_47\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_47 |  | &lt;none&gt; |
| mat\_48\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_48 |  | &lt;none&gt; |
| mat\_49\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_49 |  | &lt;none&gt; |
| mat\_50\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_50 |  | &lt;none&gt; |
| mat\_281\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_281 |  | &lt;none&gt; |
| mat\_282\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_282 |  | &lt;none&gt; |
| mat\_283\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_283 |  | &lt;none&gt; |
| mat\_284\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_284 |  | &lt;none&gt; |
| mat\_285\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_285 |  | &lt;none&gt; |
| mat\_286\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_286 |  | &lt;none&gt; |
| mat\_287\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_287 |  | &lt;none&gt; |
| mat\_288\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_288 |  | &lt;none&gt; |
| mat\_289\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_289 |  | &lt;none&gt; |
| mat\_290\_user\_defined | &lt;string&gt; | csv file that contains information about user defined material MAT\_290 |  | &lt;none&gt; |
| mat\_user\_ref\_curves | &lt;string&gt; | Whether and how MAT\_USER definitions reference load-curves | NONE, IFILE\_ONLY, ALL | IFILE\_ONLY |
| enable\_integers\_for\_mat\_user\_defined | &lt;string&gt; | For MAT\_USER (MAT\_041) write integers for U\_1.., P\_1.. where rounding permits | ON, OFF | OFF |
| mat\_etan\_max | &lt;real&gt; | MAX Strain for curves with ETAN option |  | 1.0 |
| mat\_database\_sort\_alphabetical | &lt;string&gt; | Switch to sort materials in alphabetical order when importing from a database | FALSE, TRUE | FALSE |
| mat\_database\_import\_title | &lt;string&gt; | Switch to import material titles when importing from a database | FALSE, TRUE | FALSE |
| mat\_254\_r12\_read | &lt;logical&gt; | Set 'TRUE' to read in MAT\_254 keyword in R12 format, allowing for enhanced annealing values, set 'FALSE' otherwise | TRUE, FALSE | FALSE |
| mat\_173\_r14\_read | &lt;logical&gt; | Set 'TRUE' to read in MAT\_173 keyword in R14 format, allowing for additional erosion parameters, set 'FALSE' to use R13 format | TRUE, FALSE | TRUE |

The following apply to measure

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| measure\_text\_bg\_transparent | &lt;logical&gt; | Set to 'TRUE' for PRIMER to write measure text without a background | TRUE, FALSE | FALSE |

These settings apply to mechanisms and dummies

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| mdumm\_check\_centroid\_action | &lt;string&gt; | Action when check of assembly centroids detects a gross change in coordinate | NOTIFY, UPDATE, REBUILD, IGNORE | NOTIFY |
| mdumm\_check\_centroid\_thresh | &lt;real&gt; | %age of assembly bounding box diagonal at which centroid coordinate check triggers NOTIFY action | 0.001 - 1000.0 | 10.0 |
| mechanism\_joint\_check | &lt;string&gt; | Coincidence check for nodal pairs in joints | NO\_CHECK, SILENT, PROMPT | PROMPT |
| mechanism\_accuracy | &lt;real&gt; | Default calculation accuracy (0.1 - 100.0) | 0.1 - 100.0 | 1.0 |
| mechanism\_convergence\_factor | &lt;real&gt; | Mechanism position convergence factor |  | 1.0e-4 |
| mechanism\_end\_movement\_factor | &lt;real&gt; | Mechanism position end movement factor |  | 1.0e-8 |
| mechanism\_step\_size\_factor | &lt;real&gt; | Mechanism position step size factor |  | 1.0e-4 |
| mechanism\_max\_outer\_step | &lt;integer&gt; | Mechanism position max outer steps |  | 100 |
| mechanism\_max\_inner\_step | &lt;integer&gt; | Mechanism position max inner steps |  | 30 |
| mechanism\_rotate\_show\_sig\_fig | &lt;integer&gt; | Number of significant figures shown in the Mechanism Rotate Angles panel | 0 - 7 | 2 |

The following options affect the appearance and behaviour of the graphical user interface (see [Customising the User Interface](https://help.oasys-software.com/articles/project-primer/menu-attributes-customising-menu-size-fonts-dynamic-viewing-and-handedness)), left handed support, and the mouse

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| display\_factor | &lt;real&gt; | Factor on display size (0.5 - 2.0, automatic if undefined) | 0.5 - 2.0 | 1.2 |
| display\_brightness | &lt;real&gt; | Menu brightness (0.0-1.0) | 0.0 - 1.0 | 1.0 |
| display\_saturation | &lt;real&gt; | Menu colour saturation (0.0-1.0) | 0.0 - 1.0 | 1.0 |
| button\_gradation | &lt;real&gt; | Button shade gradation (0.0-1.0) | 0.0 - 1.0 | 0.0 |
| dv\_sync\_windows | &lt;string&gt; | Dyn view method(s) for synchronising windows | ICON, ICON+CAPS, ICON+NUM, ICON+CAPS+NUM | ICON+CAPS |
| dv\_left\_shift | &lt;string&gt; | Dyn view action for shift + Left mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ROTATION\_XYZ |
| dv\_middle\_shift | &lt;string&gt; | Dyn view action for shift + Middle mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | TRANSLATION |
| dv\_right\_shift | &lt;string&gt; | Dyn view action for shift + Right mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ZOOM\_UP\_+VE |
| dv\_left\_ctrl | &lt;string&gt; | Dyn view action for ctrl + Left mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ROTATION\_XYZ |
| dv\_middle\_ctrl | &lt;string&gt; | Dyn view action for ctrl + Middle mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | TRANSLATION |
| dv\_right\_ctrl | &lt;string&gt; | Dyn view action for ctrl + Right mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ZOOM\_UP\_+VE |
| dv\_left\_both | &lt;string&gt; | Dyn view action for shift+ctrl + Left mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ROTATION\_XYZ |
| dv\_middle\_both | &lt;string&gt; | Dyn view action for shift+ctrl + Middle mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | TRANSLATION |
| dv\_right\_both | &lt;string&gt; | Dyn view action for shift+ctrl + Right mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ZOOM\_UP\_+VE |
| dv\_shift\_action | &lt;string&gt; | Dynamic viewing mode for shift + mouse button | CURRENT, WIREFRAME, FREE\_EDGE, UNUSED | CURRENT |
| dv\_ctrl\_action | &lt;string&gt; | Dynamic viewing mode for ctrl + mouse button | CURRENT, WIREFRAME, FREE\_EDGE, UNUSED | WIREFRAME |
| dv\_both\_action | &lt;string&gt; | Dynamic viewing mode for shift+ctrl + mouse button | CURRENT, WIREFRAME, FREE\_EDGE, UNUSED | FREE\_EDGE |
| font\_cache | &lt;logical&gt; | Whether to use cached fonts on Linux machines with no core X11 fonts loaded | TRUE, FALSE | TRUE |
| font\_quality | &lt;string&gt; | The quality of font rendering in the graphical user interface | PLAIN, ANTI-ALIAS | ANTI-ALIAS |
| font\_scaling | &lt;string&gt; | Whether text in GUI buttons can be scaled down to fit (TRUE means both width and height) | FALSE, WIDTH, HEIGHT, TRUE | WIDTH |
| font\_silent | &lt;logical&gt; | whether to write explanatory text if wanted fonts are not found | TRUE, FALSE | FALSE |
| font\_size | &lt;string&gt; | Menu font size | TINY, SMALL, DEFAULT, LARGE, HUGE | DEFAULT |
| font\_type | &lt;string&gt; | Menu font typeface and strength | HELVETICA, HELVETICA-BOLD, TIMES, TIMES-BOLD, COURIER, COURIER-BOLD | HELVETICA |
| unix\_prop\_font | &lt;string&gt; | GUI proportional font for menu panels on Linux/Unix |  | Helvetica |
| unix\_mono\_font | &lt;string&gt; | GUI monospaced font for listing boxes on Linux/Unix |  | Courier New |
| windows\_prop\_font | &lt;string&gt; | GUI proportional font for menu panels on Windows |  | Helvetica |
| windows\_mono\_font | &lt;string&gt; | GUI monospaced font for listing boxes on Windows |  | Courier New |
| left\_handed | &lt;string&gt; | Left handed switching of mouse and/or keyboard | NONE, MOUSE, KEYBOARD, ALL | NONE |
| zoom\_factor | &lt;real&gt; | Zoom Factor for mouse wheel (0.01-1.0) | 0.01 - 1.0 | 0.05 |
| czoom\_factor | &lt;real&gt; | Factor for right mouse dynamic zoom (0.01-0.2) | 0.01 - 0.2 | 0.05 |
| kzoom\_factor | &lt;real&gt; | Factor for +/- keyboard short-cut keys | 0.01 - 100.0 | 2.0 |
| menu\_dragging\_mode | &lt;string&gt; | Mode used when moving menu panels with the mouse | WIREFRAME, OPAQUE | WIREFRAME |
| mouse\_3d\_rotation\_factor | &lt;real&gt; | Factor applied to the speed of rotation when using a 3D mouse |  | 1.0 |
| mouse\_3d\_pan\_factor | &lt;real&gt; | Factor applied to the speed of panning when using a 3D mouse |  | 1.0 |
| mouse\_3d\_zoom\_factor | &lt;real&gt; | Factor applied to the speed of zooming when using a 3D mouse |  | 1.0 |
| mouse\_action\_middle\_button | &lt;string&gt; | Set the action for the middle mouse key during picking | APPLY, REJECT, DESELECT | REJECT |
| mouse\_action\_right\_button | &lt;string&gt; | Set the action for the right mouse key during picking | APPLY, REJECT, DESELECT | DESELECT |

The following settings control meshing and hole properties

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| align\_solid\_axes\_tol\_angle | &lt;real&gt; | Angle tolerance for aligning solid elements | 0.0 - 90.0 | 15.0 |
| hole\_element\_method | &lt;string&gt; | Elements around hole specified by number/size | NUMBER, SIZE | NUMBER |
| hole\_element\_number | &lt;integer&gt; | Number of elements around hole | 3 - 1000 | 4 |
| hole\_element\_size | &lt;real&gt; | Size of elements around hole |  | 10.0 |
| hole\_diameter | &lt;real&gt; | Hole diameter |  | 10.0 |
| hole\_rotate\_angle | &lt;real&gt; | Rotation angle |  | 10.0 |
| remesh\_area | &lt;logical&gt; | Remesh area when removing hole | TRUE, FALSE | TRUE |
| washer | &lt;logical&gt; | Create washer elements around hole | TRUE, FALSE | TRUE |
| washer\_diameter | &lt;real&gt; | Washer diameter |  | 20.0 |
| washer\_elements | &lt;integer&gt; | Number of washer elements | 1 - 5 | 1 |
| mesh\_element\_size | &lt;real&gt; | Element size for shells |  | 5.0 |
| mesh\_feature\_line | &lt;logical&gt; | Limit mesh area by feature lines | TRUE, FALSE | FALSE |
| mesh\_feature\_line\_angle | &lt;real&gt; | Mesh feature line angle |  | 20.0 |
| swage\_auto\_pid | &lt;logical&gt; | PID for Swage Mesh shells be picked automatically | TRUE, FALSE | TRUE |
| swage\_base\_width | &lt;real&gt; | BASE width for Swage Mesh |  | 40.0 |
| swage\_top\_width | &lt;real&gt; | TOP surface width for Swage Mesh |  | 20.0 |
| swage\_height | &lt;real&gt; | Height for Swage Mesh |  | 10.0 |
| swage\_radius1 | &lt;real&gt; | Radius for fillets at the TOP surface for Swage Mesh |  | 0.0 |
| swage\_break\_angle | &lt;real&gt; | Angle to consider sharp bends for Swage Mesh path |  | 30.0 |
| swage\_element\_pitch | &lt;real&gt; | Element pitch size for Swage Mesh shells |  | 5.0 |
| swage\_top\_element\_method | &lt;string&gt; | TOP surface shells of the Swage Mesh specified by number/size | NUMBER, SIZE | SIZE |
| swage\_top\_element\_number | &lt;integer&gt; | Number of shells at the TOP surface of the Swage Mesh | 3 - 1000 | 2 |
| swage\_top\_element\_size | &lt;real&gt; | Size of shells at the TOP surfaces of the Swage Mesh |  | 5.0 |
| swage\_side\_element\_method | &lt;string&gt; | SIDE surface shells of the Swage Mesh specified by number/size | NUMBER, SIZE | SIZE |
| swage\_side\_element\_number | &lt;integer&gt; | Number of shells at the SIDE surfaces of the Swage Mesh | 3 - 1000 | 2 |
| swage\_side\_element\_size | &lt;real&gt; | Size of shells at the SIDE surfaces of the Swage Mesh |  | 5.0 |
| swage\_side\_ends\_type | &lt;string&gt; | Types of the Ends of the SIDE surface of the Swage Mesh | CHAMFERED, SLANTED, VERTICAL | CHAMFERED |
| swage\_side\_mesh\_type | &lt;string&gt; | Method to create the SIDE Surface shells of the Swage Mesh | STRUCTURED, FREE | STRUCTURED |
| swage\_remesh\_distance | &lt;real&gt; | Distance to remesh the original surface for Swage Mesh |  | 20.0 |
| swage\_remesh\_break\_angle | &lt;real&gt; | Shell normals break angle to identify the Re-mesh surface for the Swage Mesh |  | 20.0 |
| swage\_remesh\_length | &lt;real&gt; | Element size for the remeshed surface for the Swage Mesh |  | 5.0 |
| **user\_defined\_meshing\_parameters** |
| enable\_user\_defined\_meshing\_parameters | &lt;logical&gt; | Enable user defined meshing parameters | TRUE, FALSE | false |
| user\_def\_mesh\_minimum\_element\_length | &lt;real&gt; | Minimum edge length of generated elements | 0.0 - 999.9 | 2.43 |
| user\_def\_mesh\_maximum\_element\_length | &lt;real&gt; | Maximum edge length of generated elements | 0.0 - 999.9 | 7.0 |
| user\_def\_mesh\_minimum\_tria\_angle | &lt;real&gt; | Minimum tria angle of generated elements | 0.0 - 180 | 20.0 |
| user\_def\_mesh\_maximum\_tria\_angle | &lt;real&gt; | Maximum tria angle of generated elements | 0.0 - 180 | 140.0 |
| user\_def\_mesh\_maximum\_quad\_angle | &lt;real&gt; | Maximum quad angle of generated elements | 0.0 - 180 | 140.0 |
| user\_def\_mesh\_maximum\_warpage\_angle | &lt;real&gt; | Maximum warpage angle of generated elements | 0.0 - 180 | 20.0 |

The following affect [model build](https://help.oasys-software.com/articles/project-primer/model-build)

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| set\_database\_dir | &lt;string&gt; | Default directory for databases when using model database |  | &lt;none&gt; |
| set\_template\_dir | &lt;string&gt; | Default directory for templates when using model database |  | &lt;none&gt; |
| model\_build\_delete\_latent\_items | &lt;string&gt; | on build remove missing items if possible | ON, OFF | ON |
| move\_include\_to\_master | &lt;string&gt; | on build move extra data file to master if any delete | OFF, ON, ASK | ASK |
| extensions\_for\_database\_from\_dir | &lt;string&gt; | considered extensions for database from dir |  | .key;.k;.dyn |
| build\_csv\_impact\_abs\_path | &lt;logical&gt; | build from csv - use full path for impactor, relative for others | TRUE, FALSE | false |
| write\_all\_includes | &lt;logical&gt; | Write all includes to model build directories (default is master only) | TRUE, FALSE | FALSE |
| model\_build\_load\_range\_info | &lt;logical&gt; | load model build label range info from .csv file | TRUE, FALSE | TRUE |
| database\_template\_block\_error | &lt;logical&gt; | halt database/template build process if errors detected | TRUE, FALSE | FALSE |
| model\_build\_diffcheck | &lt;string&gt; | Run model modified diff check (to detect edit of models in memory) before commencing build | OFF, ON | OFF |
| model\_build\_use\_old\_naming\_convention | &lt;logical&gt; | use old names for built models (deprecated) | TRUE, FALSE | FALSE |
| model\_build\_generate\_contact\_boxes\_for\_depenetration | &lt;string&gt; | speed up contact check by forming box around impactor | AUTOMATIC, USER, NO\_BOX | AUTOMATIC |
| time\_limit\_in\_secs\_for\_impactor\_positioning | &lt;real&gt; | timeout in sec for impactor positioning (no timeout if zero) | 0.0 - 3600.0 | 600.0 |

The following control settings when merging models

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| merge\_range\_location | &lt;string&gt; | Choose the model to take any master file numbering range information from upon model merge | FIRST, SECOND, NEITHER | FIRST |
| merge\_thumb\_location | &lt;string&gt; | Choose the model to take any master file thumbnail information from upon model merge | FIRST, SECOND, NEITHER | NEITHER |
| merge\_incl\_path\_location | &lt;string&gt; | Choose the model to take any master file INCLUDE\_PATH information from upon model merge | FIRST, SECOND, NEITHER | FIRST |
| merge\_set\_collect | &lt;logical&gt; | Merge clashing \*SET\_COLLECT cards rather than renumbering them | TRUE, FALSE | FALSE |

The following options relate to model modified

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| threshold\_for\_modified\_nodal\_coordinates | &lt;real&gt; | Threshold difference for comparing nodal coordinates |  | 0.0 |
| sig\_fig\_for\_modified\_floats | &lt;integer&gt; | Number of significant figures for comparing real numbers | 1 - 7 | 6 |
| check\_for\_modified\_header\_comments | &lt;string&gt; | Check for differences in (include) header comments | OFF, ON | ON |
| check\_for\_modified\_kw\_comments | &lt;string&gt; | Check for differences in keyword comments | OFF, ON | ON |

The following options relate to model submit

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| job\_monitor\_total\_timeout | &lt;integer&gt; | Maximum time interval in milli-seconds until the LS-DYNA job monitor process must run when the d3hsp file is not getting updated | 5000 - 100000000 | 1000000 |
| job\_monitor\_sub\_wait\_interval | &lt;integer&gt; | Time interval in milli-seconds between the instances for the LS-DYNA job monitor process to enquire the d3hsp file | 100 - 10000000 | 10000 |
| job\_monitor\_min\_bytes\_to\_read | &lt;integer&gt; | Minimum bytes to read in one instance of LS-DYNA job monitor process while checking the LS-DYNA d3hsp file | 1000 - 1000000 | 10000 |
| job\_monitor\_max\_bytes\_to\_read | &lt;integer&gt; | Maximum bytes to read in one instance of LS-DYNA job monitor process while checking the LS-DYNA d3hsp file | 1000 - 10000000 | 50000 |

Options to control setup and processing morphing.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| edge\_morph\_point\_interpolation | &lt;string&gt; | Interpolation method for morph points on edges of a high order box. | LINEAR\_FROM\_CORNERS, FROM\_SELECTED\_EDGE\_POINTS | FROM\_SELECTED\_EDGE\_POINTS |
| interpolated\_morph\_points | &lt;string&gt; | Morph points on high order boxes whose movement is interpolated while selected points are moved. | NONE, HIDDEN, ALL | HIDDEN |
| morph\_box\_min\_size | &lt;real&gt; | Minimum side length of morph boxes created. When the bounding box around selected entities is smaller, the morph box corners are moved outside to attain the minimum size. |  | 10.0 |
| morph\_connections | &lt;logical&gt; | Positions of connections will be moved when morphing. | TRUE, FALSE | TRUE |
| morph\_find\_new\_connections\_automatically | &lt;logical&gt; | Automatically search for and add new connections to morph boxes, and update positions/add new nodes for existing connections. | TRUE, FALSE | TRUE |
| morph\_find\_new\_connections\_warning | &lt;logical&gt; | Display a warning message when searching for new connections/updating existing connections in morph boxes. | TRUE, FALSE | TRUE |
| morph\_cad\_bolt\_warning | &lt;logical&gt; | If FALSE PRIMER will not print a warning when cad type bolts are altered during morphing. | TRUE, FALSE | TRUE |
| morph\_interpolation\_combination | &lt;string&gt; | Method of combining different linear interpolations for face and internal morph points of a high order box. | SUPERPOSE, AVERAGE | SUPERPOSE |
| morph\_node\_clash\_error | &lt;string&gt; | Action for nodes already in other morph boxes when creating a new one. | SKIP, ERROR | ERROR |

The following options relate to nastran read

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| nastran\_read\_retain\_parabolic\_nodes | &lt;string&gt; | Retain mid-side nodes for parabolic solids and shells. | ON, OFF | OFF |
| nastran\_read\_convert\_2\_noded\_RBE2\_to\_weld | &lt;string&gt; | Convert 2-noded RBE2 to Constrained\_Spotweld rest to Constrained\_NRB. OFF to convert all to Constrained\_NRB. | ON, OFF | ON |

The following options relate to nastran write

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| nastran\_write\_continuation\_strings | &lt;string&gt; | Write continuation strings | TRUE, FALSE | FALSE |
| nastran\_write\_merge\_overlapping\_nrbs | &lt;string&gt; | merge overlapping Nodal Rigid Bodies before Nastran write | ON, OFF | ON |
| nastran\_write\_process\_mat169\_into\_new\_parts\_by\_thickness | &lt;string&gt; | Split adhesive parts into different parts containing solids of similar thickness | ON, OFF | ON |
| nastran\_write\_convert\_tied\_contact\_to\_RBE3 | &lt;string&gt; | Convert DYNA tied contact to RBE3 | ON, OFF | ON |
| nastran\_write\_contact\_rbe3\_placement | &lt;string&gt; | RBE3s created from tied contact written to same include as elem of dependent node, elem of independent node, or of Dyna contact | DNODE, INODE, CONT | DNODE |
| nastran\_enable\_rotational\_dof\_on\_RBE3\_shell\_nodes | &lt;string&gt; | Consider rotational d.o.f on RBE3 nodes attached to shells (default is translational only) | ON, OFF | OFF |
| nastran\_write\_suppress\_rigid\_elements | &lt;string&gt; | Do not write elements when rendering rigid part into Nastran use CONM2 instead (unconditional for Part\_inertia) | ON, OFF | ON |
| nastran\_write\_rigid\_element\_limit | &lt;string&gt; | If n.gt.0 rigid parts with numel.gt.n will be written using reduced RBE2, otherwise all (external) nodes are included |  | 1000 |
| nastran\_write\_translate\_matl\_with\_uncalc\_poisson\_ratio | &lt;string&gt; | apply user value for Poisson ratio if it cannot be calculated | ON, OFF | OFF |
| nastran\_write\_poissons\_ratio | &lt;real&gt; | Value of Poisson ratio that will be used for materials with undefined Poisson ratio |  | 0.3 |
| nastran\_write\_mat67\_with\_cbush\_stiffness\_values | &lt;string&gt; | MAT67 written using 6 stiffness values as defined on Nastran writeout properties panel | ON, OFF | OFF |
| nastran\_write\_cbush\_prop\_tkr | &lt;real&gt; | Value of cbush stiffness TKR that will be used while writing MAT\_67 |  | 1e6 |
| nastran\_write\_cbush\_prop\_tks | &lt;real&gt; | Value of cbush stiffness TKS that will be used while writing MAT\_67 |  | 1e6 |
| nastran\_write\_cbush\_prop\_tkt | &lt;real&gt; | Value of cbush stiffness TKT that will be used while writing MAT\_67 |  | 1e6 |
| nastran\_write\_cbush\_prop\_rkr | &lt;real&gt; | Value of cbush stiffness RKR that will be used while writing MAT\_67 |  | 1e7 |
| nastran\_write\_cbush\_prop\_rks | &lt;real&gt; | Value of cbush stiffness RKS that will be used while writing MAT\_67 |  | 1e7 |
| nastran\_write\_cbush\_prop\_rkt | &lt;real&gt; | Value of cbush stiffness RKT that will be used while writing MAT\_67 |  | 1e7 |

The following control options used during creation of nodal rigid bodies

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| nrb\_create\_master\_node\_at\_centre | &lt;string&gt; | Create a master node at the centre of an NRB (create at edge of hole / bolt connections) | TRUE, FALSE | TRUE |
| nrb\_pick\_create\_centre\_node | &lt;string&gt; | Create a master node at the centre of an NRB when in the picking nodes mode | TRUE, FALSE | FALSE |
| nrb\_creation\_method | &lt;string&gt; | Sets the default creation method for NRBs | PICK\_NODES, PICK\_POINTS, PICK\_WITH\_TOL, PICK\_CLOSEST\_NODES, STANDARD\_MENU, EDGE\_OF\_HOLE | PICK\_CLOSEST\_NODES |
| nrb\_iga\_option | &lt;string&gt; | IGA option for NRBs | TRUE, FALSE | FALSE |

The following options relate to node merge/replace

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| replace\_shell\_reference\_geometry | &lt;logical&gt; | If nodes in shell reference geometry will be replaced by node merge/replace | TRUE, FALSE | true |
| replace\_collapse\_shell | &lt;logical&gt; | When using the node replace feature, if this setting is on quad shells will be collapsed to tria shells if possible | TRUE, FALSE | true |
| replace\_morb\_entry | &lt;string&gt; | Sets the condition for which morph box a node will be stored in when using node merge/replace with nodes owned by different morph boxes selected | HIGHEST, LOWEST | HIGHEST |

If a selection menu is not wide enough to display all the contents, it can be expanded automatically by the following (see [Panel Behaviour](https://help.oasys-software.com/articles/project-primer/panel-behaviour-controlling-panel-placement-menu-expansion-and-action-when-picking))

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| menu\_expand | &lt;string&gt; | Automatic menu expansion or undocking on/off switch | OFF, ON, EXPAND, UNDOCK | UNDOCK |
| menu\_expand\_delay | &lt;real&gt; | Factor on delay time before expansion | 0.1 - 5.0 | 1.0 |
| menu\_expand\_speed | &lt;real&gt; | Factor on menu expansion speed | 0.1 - 5.0 | 1.0 |
| menu\_sketch | &lt;string&gt; | Whether or not to show sketch menu items when cursor hovered over menu row | OFF, ON | ON |
| menu\_label | &lt;string&gt; | Whether or not menu sketching also shows item labels | OFF, ON | ON |
| entity\_on\_object\_menu\_only\_shows\_visible | &lt;string&gt; | restrict object menu Entity... to types where vis switch is ON | OFF, ON | OFF |
| vis\_menu\_position | &lt;string&gt; | Position of the Vis menu - graphics area or docked to parent | FLOATING, DOCKED | DOCKED |

These settings apply to object picking

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| area\_select | &lt;string&gt; | Whether being inside an area pick is based on element/face centre or any node | CENTRE, NODE | CENTRE |
| area\_through | &lt;string&gt; | Whether all 3d elements inside a mesh, or only external ones, are selected in a screen area pick | ALL, EXTERNAL | ALL |
| a\_through\_factor | &lt;real&gt; | Factor on depth testing when using EXTERNAL area through selection mode | 0.001 - 1000.0 | 1.0 |
| predictive\_pick | &lt;string&gt; | Whether or not to show what will be picked based on the current cursor position | OFF, ON | ON |
| predictive\_label | &lt;string&gt; | Whether or not predictive picking also shows item labels | OFF, ON | ON |
| query\_ambiguous | &lt;string&gt; | If screen picking is ambiguous, ON will offer the selection menu, OFF will select nearest | OFF, ON | ON |

These settings apply to orientation

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| box\_rotation\_mode | &lt;string&gt; | Controls how boxes are oriented during rotation | AUTO, LOCAL, NO\_LOCAL | AUTO |
| distorted\_element\_warning | &lt;logical&gt; | Warn if nodes of element are moved when element itself is not selected | TRUE, FALSE | FALSE |
| elements\_in\_new\_part | &lt;logical&gt; | Move elements to a new part | TRUE, FALSE | TRUE |
| move\_attached\_extra\_nodes | &lt;logical&gt; | Automatically orient constrained nodes of a rigid part which is oriented | TRUE, FALSE | TRUE |
| move\_beam\_third\_nodes | &lt;logical&gt; | Orient third node of beams (affecting their transverse axes) | TRUE, FALSE | TRUE |
| move\_connection\_with\_fe | &lt;logical&gt; | Automatically orient connection entity whenever all its FE entities are moved | TRUE, FALSE | TRUE |
| move\_secondary\_rigid\_bodies | &lt;logical&gt; | Orient secondary (constrained) rigid bodies whenever the lead in a rigid body merge is moved | TRUE, FALSE | FALSE |
| move\_weld\_with\_panels | &lt;logical&gt; | Automatically orient a weld whenever all shells it attaches to are oriented | TRUE, FALSE | FALSE |
| orient\_child\_include\_with\_parent | &lt;logical&gt; | orient child include(s) when parent is oriented | TRUE, FALSE | TRUE |
| orient\_copy\_include | &lt;string&gt; | Include file which copied items are put into | SAME, CURRENT, DUPLICATE | SAME |
| orient\_mat\_fabric\_axes | &lt;logical&gt; | Orient the axes of \*MAT\_FABRIC cards | TRUE, FALSE | TRUE |
| orient\_reference\_geometry | &lt;logical&gt; | Orient airbag reference geometry | TRUE, FALSE | TRUE |
| orient\_constraint\_with\_node | &lt;logical&gt; | orient whole constraint when any node is oriented | TRUE, FALSE | FALSE |
| propagate\_orient | &lt;logical&gt; | Option to orient items cross referenced by the oriented part/node | TRUE, FALSE | FALSE |
| copy\_related\_items | &lt;logical&gt; | if FALSE, copy orient will only copy part (with section,etc) elements and nodes | TRUE, FALSE | TRUE |
| propagate\_copy\_orient\_part | &lt;logical&gt; | Option to copy orient items referenced by a copy-oriented part | TRUE, FALSE | FALSE |
| propagate\_copy\_orient\_node | &lt;logical&gt; | Option to copy orient items referenced by a copy-oriented node | TRUE, FALSE | FALSE |
| use\_old\_sections | &lt;logical&gt; | Reuse existing sections and materials for copied parts | TRUE, FALSE | FALSE |
| welds\_in\_new\_part | &lt;logical&gt; | Move welds to a new part | TRUE, FALSE | FALSE |
| clear\_selection\_on\_orient\_apply | &lt;logical&gt; | Clear object menu selection on apply of orient | TRUE, FALSE | FALSE |
| interpolation\_tolerance\_angle | &lt;real&gt; | Interpolation 'Select Items' mode tolerance angle |  | 2.0 |

The following control settings when writing files

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| add\_dyna\_key\_file\_extension | &lt;logical&gt; | Add file extension to dyna keyword files if unspecified | TRUE, FALSE | TRUE |
| dyna\_key\_file\_extension\_master | &lt;string&gt; | file extension for Dyna master keyword files |  | .key |
| dyna\_key\_file\_extension\_include | &lt;string&gt; | file extension for Dyna include files |  | .key |
| **binary** |
| keyout\_binary\_format | &lt;string&gt; | Whether or not to use binary output format | OFF, KEEP, ON | KEEP |
| keyout\_binary\_kby\_extension | &lt;logical&gt; | Output files with binary content given extension .kby | TRUE, FALSE | TRUE |
| keyout\_binary\_master\_ascii | &lt;logical&gt; | When writing in binary format master file is all ASCII | TRUE, FALSE | FALSE |
| keyout\_binary\_top\_c\_ascii | &lt;logical&gt; | When writing in binary format header and initial cards are ASCII | TRUE, FALSE | TRUE |
| **compressed** |
| keyout\_compress\_switch | &lt;string&gt; | If ON, keyword output (ascii or binary) is compressed to .gz or .zip format. KEEP copies input. | OFF, ON, KEEP | KEEP |
| keyout\_zip\_extension | &lt;string&gt; | For file name.key APPEND writes filename name.key.zip. REPLACE writes name.zip. | APPEND, REPLACE | APPEND |
| keyout\_compress\_format | &lt;string&gt; | Format used to compress files in ON case: individual .gz, individual .zip, package in .zip | GZ, ZIP, ZPACK | GZ |
| keyout\_compress\_level | &lt;integer&gt; | Compression level (1 = least and fastest, to 9 = most and slowest) | 1 - 9 | 1 |
| keyout\_compress\_threaded | &lt;logical&gt; | TRUE if compressed output runs in a separate thread (faster) | TRUE, FALSE | TRUE |
| keyout\_compress\_raw\_io | &lt;logical&gt; | TRUE if compressed output does not use system level i/o buffering | TRUE, FALSE | TRUE |
| keyout\_compress\_diag\_level | &lt;integer&gt; | Diagnostic level for compressed output. (0 = off, 1 to 3 progressively more ) | 0 - 3 | 0 |
| keyout\_compress\_bsize | &lt;integer&gt; | Compression buffer size in kbytes (4 - 16384 permitted, advanced setting) | 4 - 16384 | 1024 |
| keyout\_compress\_nspin\_m | &lt;integer&gt; | Threaded master spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyout\_compress\_nspin\_s | &lt;integer&gt; | Threaded output spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyout\_compress\_yield\_m | &lt;integer&gt; | Threaded master yield threshold in ms (0 - 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyout\_compress\_yield\_s | &lt;integer&gt; | Threaded output yield threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyout\_compress\_sleep\_m | &lt;integer&gt; | Threaded master sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 60 |
| keyout\_compress\_sleep\_s | &lt;integer&gt; | Threaded output sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 40 |
| keyout\_compress\_timeout | &lt;integer&gt; | Threaded timeout threshold in ms (0 = 100000 permitted, advanced setting) | 0 - 100000 | 10000 |
| **coordinates** |
| any\_coord\_clamp\_zero | &lt;real&gt; | Any nodal coordinates less than this |clamp value| will be set to zero during output | 0.0 - 1.0e-3 | 0.0 |
| trans\_coord\_clamp\_zero | &lt;real&gt; | Transformed nodal coordinates less than this |clamp value| will be set to zero during output | 0.0 - 1.0e-3 | 5.0e-15 |
| **double\_precision** |
| dp\_genio\_prec\_gui | &lt;string&gt; | General DP values in GUI data fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 | 10 |
| dp\_genio\_prec\_10 | &lt;string&gt; | General DP values in 10 wide fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10 | MAX\_POSSIBLE |
| dp\_genio\_prec\_16 | &lt;string&gt; | General DP values in 16 wide fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 | MAX\_ROUNDED |
| dp\_genio\_prec\_20 | &lt;string&gt; | General DP values in 20 wide fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 | MAX\_ROUNDED |
| dp\_ncio\_prec\_gui | &lt;string&gt; | DP coordinate values in GUI button fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 | 10 |
| dp\_ncio\_prec\_10 | &lt;string&gt; | DP coordinate values in 10 wide fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10 | MAX\_POSSIBLE |
| dp\_ncio\_prec\_16 | &lt;string&gt; | DP coordinate values in 16 wide fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 | MAX\_ROUNDED |
| dp\_ncio\_prec\_20 | &lt;string&gt; | DP coordinate values in 20 wide fields: number of significant figures to use | MAX\_POSSIBLE, MAX\_ROUNDED, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 | MAX\_ROUNDED |
| **excel** |
| excel\_drawing\_mode | &lt;string&gt; | Type of Images in excel output for keywords | HI, LI, SH | SH |
| excel\_find\_volume | &lt;real&gt; | Find volume for database history node images in excel output for keywords |  | 200.0 |
| excel\_image\_column | &lt;string&gt; | Column in which images are written in excel | FIRST, LAST | LAST |
| excel\_image\_height | &lt;integer&gt; | Height of Images(pixels) in excel output for keywords |  | 166 |
| excel\_image\_orientation | &lt;string&gt; | View of Images in excel output for keywords | +XY, -XY, +XZ, -XZ, +YZ, -YZ, +ISO, -ISO | +ISO |
| excel\_image\_width | &lt;integer&gt; | Width of Images(pixels) in excel output for keywords |  | 257 |
| excel\_recursive\_loops | &lt;integer&gt; | No of recursive loops in find attached for database history beam images in excel output |  | 3 |
| **normal** |
| keyout\_normal\_threaded | &lt;logical&gt; | TRUE if normal output runs in a separate thread (faster) | TRUE, FALSE | TRUE |
| keyout\_normal\_raw\_io | &lt;logical&gt; | TRUE if normal output does not use system level i/o buffering | TRUE, FALSE | TRUE |
| keyout\_normal\_diag\_level | &lt;integer&gt; | Diagnostic level for normal output. (0 = off, 1 to 3 progressively more ) | 0 - 3 | 0 |
| keyout\_normal\_bsize | &lt;integer&gt; | Threaded buffer size in kbytes (4 - 16384 permitted, advanced setting) | 4 - 16384 | 1024 |
| keyout\_normal\_nspin\_m | &lt;integer&gt; | Threaded master spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyout\_normal\_nspin\_s | &lt;integer&gt; | Threaded output spin limit (0 - 100000000 permitted, advanced setting) | 0 - 100000000 | 4000 |
| keyout\_normal\_yield\_m | &lt;integer&gt; | Threaded master yield threshold in ms (0 - 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyout\_normal\_yield\_s | &lt;integer&gt; | Threaded output yield threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 1 |
| keyout\_normal\_sleep\_m | &lt;integer&gt; | Threaded master sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 60 |
| keyout\_normal\_sleep\_s | &lt;integer&gt; | Threaded output sleep threshold in ms (0 = 1000 permitted, advanced setting) | 0 - 1000 | 40 |
| keyout\_normal\_timeout | &lt;integer&gt; | Threaded timeout threshold in ms (0 = 100000 permitted, advanced setting) | 0 - 100000 | 10000 |
| **ztf** |
| autocreate\_ztf | &lt;logical&gt; | Write out jobname.ztf file for D3PLOT | TRUE, FALSE | FALSE |
| ztf\_composite | &lt;string&gt; | Write out ztf modules pertaining to composites | ON, OFF | ON |
| ztf\_load | &lt;string&gt; | Write out ztf modules pertaining to loads | ON, OFF | ON |
| ztf\_orthotropic | &lt;string&gt; | Write out ztf modules pertaining to orthotropic material data | ON, OFF | ON |
| ztf\_set | &lt;string&gt; | Write out ztf modules pertaining to sets | ON, OFF | ON |
| ztf\_spotweld | &lt;string&gt; | Write out ztf modules pertaining to spotwelds | ON, OFF | ON |
| allow\_wmode\_r61 | &lt;logical&gt; | Show field WMODE on \*CONTROL\_SHELL in special OEM release of 9716.1 | TRUE, FALSE | FALSE |
| ascii\_file\_format | &lt;string&gt; | Output format for ascii files (use output\_os for keyword file) | NATIVE, UNIX | NATIVE |
| assembly\_output\_format | &lt;string&gt; | Format for writing post \*END assembly data | PRIMER, HYPERMESH, ANSA, CUSTOMER | PRIMER |
| write\_free\_format | &lt;string&gt; | Writing out keywords in free format | NO, ONLY\_INITIAL, YES | PRIMER |
| check\_for\_clashing\_element\_and\_set\_labels\_on\_keyout | &lt;logical&gt; | Report and offer to fix clashing element and set labels | TRUE, FALSE | TRUE |
| constrained\_solid\_in\_solid\_field\_swapping\_version | &lt;string&gt; | The version of dyna that the keyword \*CONSTRAINED\_SOLID\_IN\_SOLID is read from, to swap the fields accordingly from R14 | R12.0, R13.0, R14.0 | R13.0 |
| curve\_output\_style | &lt;string&gt; | The floating point format used when writing the define\_curve keyword to output file | FULL, ROUNDED | FULL |
| customer\_comment\_output\_name | &lt;string&gt; | Name that appears on customer comment output button. Limited to 10 characters |  | customer |
| define\_transformation\_transl2nd\_a3\_zero | &lt;string&gt; | Behaviour for \*DEFINE\_TRANSFORMATION TRANSL2ND option with a3 zero | warn, R12, R14 | warn |
| directory\_name\_for\_include\_keyout | &lt;string&gt; | Directory name for include keyout IN\_SUBDIR mode |  | INCL |
| dyna\_output\_version | &lt;string&gt; | The version of dyna used when writing a keyword file | 940, 950, 960, 960+, 970v3858, 970v5434, 970v6763, 971R2, 971R3, 971R4, 971R5, 971R6, 971R6.1, R7.0, R7.1, R8.0, R9.0, R10.0, R11.0, R12.0, R13.0, R14.0, R15.0, R16.0 dev | R11.0 |
| dyna\_output\_style | &lt;string&gt; | The floating point format used when writing a keyword file | NATIVE, COMMON, ROUNDED, FAST\_FULL, FAST\_ROUNDED | FAST\_FULL |
| dyna\_v3\_title\_output\_version | &lt;string&gt; | Global ON/OFF switch for \_TITLE in Vol 3 keywords | ON, OFF | ON |
| dyna\_v3\_battery\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_cese\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_chemistry\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_dualcese\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_em\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_icfd\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_mesh\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_stochastic\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| dyna\_v3\_lso\_title\_output\_version | &lt;string&gt; | Handles \_TITLE in Vol 3 keywords | ALWAYS, NEVER, PER\_MANUAL | PER\_MANUAL |
| emergency\_keyout\_dir | &lt;string&gt; | Directory for emergency keyout dump following a crash (otherwise default used) |  | &lt;none&gt; |
| element\_mass\_part\_970 | &lt;logical&gt; | TRUE if \*ELEMENT\_MASS\_PART can be written to a 970 deck | TRUE, FALSE | FALSE |
| freestanding\_pgp\_output\_location | &lt;string&gt; | Where to write free-standing PGP blocks in a keyword file) | BEFORE\_END, TOP\_OF\_FILE, AFTER\_PARAMETERS, AFTER\_INCLUDES | BEFORE\_END |
| freestanding\_pgp\_output\_method | &lt;string&gt; | How to write free-standing PGP blocks in a keyword file) | EMBEDDED, AS\_INCLUDE | EMBEDDED |
| **include** |
| include\_file\_paths | &lt;string&gt; | Write absolute/relative pathnames in INCLUDE statements | ABSOLUTE, RELATIVE | ABSOLUTE |
| include\_file\_method | &lt;string&gt; | Default method of writing include files | IN\_SUBDIR, IN\_SAME\_DIR, SELECT\_FILES | IN\_SUBDIR |
| include\_mass\_comment | &lt;string&gt; | Write the mass of an include file as a comment | ON, OFF | OFF |
| write\_include\_filename\_comment | &lt;string&gt; | Option for what is written as a comment at the top of include files | FULL, FILENAME, NONE | FULL |
| write\_include\_filename\_to\_its\_own\_line | &lt;logical&gt; | unconditionally write filename to its own line | TRUE, FALSE | false |
| write\_latent\_includes | &lt;logical&gt; | Suppress reference to unscanned includes | TRUE, FALSE | FALSE |
| keyout\_auto\_detail | &lt;string&gt; | How Automatic keyout format handles data too large for small format | PROMOTE\_MODEL, PROMOTE\_INCLUDE, PROMOTE\_KEYWORD, RENUMBER\_MODEL | PROMOTE\_INCLUDE |
| keyout\_auto\_promote | &lt;string&gt; | Automatically promote keywords to i10 or long format (deprecated: TRUE = I10\_ALWAYS, FALSE = NONE) | NONE, I10\_IF\_REQ, I10\_ALWAYS, I10\_LARGE, FALSE, TRUE | NONE |
| keyout\_orig\_detail | &lt;string&gt; | Default Keep Original keyout behaviour when data too large for existing format | PROMOTE\_MODEL, PROMOTE\_INCLUDE, PROMOTE\_KEYWORD, RENUMBER\_MODEL | PROMOTE\_INCLUDE |
| keyout\_large\_warning | &lt;logical&gt; | Display a warning if the keyout format is changed from small to i10 or large | TRUE, FALSE | TRUE |
| keyout\_mutable\_at\_top | &lt;string&gt; | Which mutable parameters to write out in the PARAMETER block at the top of the file | ALL, FIRST, NONE | FIRST |
| keyout\_mutable\_post\_include | &lt;string&gt; | The status of mutable parameters in the parent file after reading child INCLUDE file | UNKNOWN, UNCHANGED | UNKNOWN |
| keyout\_mutable\_scope | &lt;string&gt; | Whether the scope of mutable parameters persists across include files during output | MODEL, FILE | MODEL |
| keyword\_order\_style | &lt;string&gt; | Order of keywords in output | ALPHABETICAL, CLASSIC | CLASSIC |
| keyout\_post\_end\_encrypted | &lt;string&gt; | Whether and how to output post END invented keywords inside \*ENCRYPTED\_START ... \_END cards | OMIT, COMBINED, INDIVIDUAL | COMBINED |
| keyout\_set\_adjacent | &lt;logical&gt; | Output \*SET cards next to the first keyword that refers to them | TRUE, FALSE | TRUE |
| long\_structured\_deck | &lt;string&gt; | Addition of long=s to \*KEYWORD to make LS-DYNA use long structured format | NEVER, AUTO, ALWAYS | AUTO |
| post\_end\_keyout\_format | &lt;string&gt; | Output format of \*BELT, \*DUMMY, \*MECHANISM and \*LOAD\_PATH keywords | V11, V12, V13, V14, V15, V16, V17, V18, V19, V20, V21, CURRENT | CURRENT |
| model\_mass\_comment | &lt;string&gt; | Write the model mass and C of G as a comment | ON, OFF | OFF |
| omitted\_message\_limit | &lt;integer&gt; | Limit to per-keyword type messages about omitted data fields | 0 - 100 | 20 |
| output\_971R5\_control\_shell\_in\_old\_format | &lt;logical&gt; | True will keyout \*Control\_shell in old (971R5.0) format | TRUE, FALSE | FALSE |
| output\_buffer\_size | &lt;integer&gt; | File buffer size for writing ascii files | 2 - 2147483646 | 4096 |
| output\_control\_solid\_tet13v\_r11 | &lt;logical&gt; | Output field TET13V on \*CONTROL\_SOLID in R11 | TRUE, FALSE | FALSE |
| output\_define\_title | &lt;logical&gt; | If TRUE \_TITLE suffix will be written out for all \*DEFINE keywords | TRUE, FALSE | FALSE |
| output\_echo\_frequency | &lt;integer&gt; | Progress echo interval when writing ascii files | 1 - 2147483646 | 1000 |
| output\_card\_format | &lt;string&gt; | Card format for keyout (ORIG is deprecated, use KEEP instead) | SMALL, I10, LARGE, KEEP, AUTO, ORIG | KEEP |
| output\_joint\_coinc\_check\_distance | &lt;real&gt; | Critical separation distance (seek help from Support) | 0.0 - 1.0e37 | 1.5e-3 |
| output\_joint\_coinc\_check\_threshold | &lt;real&gt; | Critical coordinate magnitude (seek help from Support) | 0.0 - 1.0e37 | 8190.0 |
| output\_os | &lt;string&gt; | Operating system type for include file naming | NATIVE, WINDOWS, UNIX | NATIVE |
| parameter\_in\_string | &lt;string&gt; | Processing of parameters in text and titles during keyout | AUTOMATIC, REPLACE\_AMPERSAND, INSERT\_VALUE, VERBATIM | AUTOMATIC |
| preselect\_master\_file | &lt;logical&gt; | pre-select master file for select files keyout | TRUE, FALSE | TRUE |
| rigidwall\_force\_transducer\_version | &lt;string&gt; | The version of dyna that \*RIGIDWALL\_FORCE\_TRANSDUCER is supported from | 971R6.1, R7.0, R7.1 | R7.1 |
| sensor\_keyout\_pattern | &lt;string&gt; | Handles keyout pattern of \*SENSOR\_ keywords | COUPLED, NORMAL | NORMAL |
| short\_matl\_name | &lt;string&gt; | Option to write materials as \*MAT\_NNN | ON, OFF | OFF |
| skip\_undefined\_message | &lt;string&gt; | Preference for skipping the writing of undefined item message | ON, OFF | OFF |
| solid\_two\_line\_output | &lt;logical&gt; | Write out all solids in LS Dyna version 970 and above 2 line format | TRUE, FALSE | FALSE |
| **suppress** |
| suppress\_keyout\_all\_connections | &lt;string&gt; | suppress write of all connections | ON, OFF | OFF |
| suppress\_keyout\_autocreated\_connections | &lt;string&gt; | Don't write connections created from welds by Primer | ON, OFF | OFF |
| suppress\_keyout\_geometry | &lt;string&gt; | Don't write geometry to keyword file | ON, OFF | OFF |
| tied\_rounding | &lt;string&gt; | How tied values exactly between upper and lower bounds will be rounded | AWAY\_FROM\_ZERO, TIED\_TO\_EVEN | AWAY\_FROM\_ZERO |
| **write\_options** |
| write\_ansa\_comments | &lt;logical&gt; | Write ANSA comments to keyword file | TRUE, FALSE | FALSE |
| write\_data\_field\_headers | &lt;logical&gt; | Write comment line of data field acronyms to keyword file | TRUE, FALSE | FALSE |
| write\_embedded\_comments | &lt;logical&gt; | Write embedded comments to keyword file | TRUE, FALSE | TRUE |
| write\_existing\_include\_path | &lt;logical&gt; | Write existing \*INCLUDE\_PATH | TRUE, FALSE | TRUE |
| write\_group\_attributes | &lt;logical&gt; | Write group attributes (colours, transparency etc) to keyword file | TRUE, FALSE | FALSE |
| write\_hm\_comments | &lt;string&gt; | Write HM comments to keyword file (auto writes if they have been read) | TRUE, FALSE, AUTO | AUTO |
| write\_overflowing\_character\_data | &lt;logical&gt; | Write out character data overflowing the width of the data field, potentially truncating it | TRUE, FALSE | FALSE |
| write\_parameters\_as\_values | &lt;logical&gt; | Write parameters as numerical values | TRUE, FALSE | FALSE |
| write\_post\_end\_data | &lt;logical&gt; | Write post \*END data to keyword file | TRUE, FALSE | TRUE |
| write\_primer\_part\_colours | &lt;logical&gt; | Write primer part colour comments to keyword file | TRUE, FALSE | TRUE |
| write\_spaces\_for\_set\_segments | &lt;logical&gt; | write spaces for default a1 ... a4 rather than zeroes | TRUE, FALSE | true |
| write\_thumbnails | &lt;logical&gt; | Write any include file thumbnail images to keyword file | TRUE, FALSE | TRUE |
| write\_timestamp\_comments | &lt;logical&gt; | Write timestamp comments to keyword file | TRUE, FALSE | TRUE |
| write\_xref\_comments | &lt;logical&gt; | Write cross reference comments to keyword file | TRUE, FALSE | TRUE |

The following control settings when processing parameters

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| update\_params\_on\_unused\_curves | &lt;logical&gt; | Following a units change whether to change parameterised data fields on unreferenced loadcurves | TRUE, FALSE | TRUE |

The following options relate part

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| part\_table\_columns | &lt;string&gt; | Columns initially shown in part table |  | &lt;none&gt; |
| **part\_tree** |
| ptree\_parts\_top\_level | &lt;logical&gt; | If TRUE parts are always expanded at the top level | TRUE, FALSE | TRUE |
| part\_tree\_blank\_mode | &lt;string&gt; | Sets the mode for blanking/unblanking/only for includes/assemblies in the part tree | PART, ELEMENT, LEGACY | ELEMENT |
| part\_tree\_drag\_material | &lt;string&gt; | Take or leave materials referenced by the part card when moving parts in the part tree | TAKE, LEAVE | TAKE |
| part\_tree\_drag\_section | &lt;string&gt; | Take or leave sections referenced by the part card when moving parts in the part tree | TAKE, LEAVE | TAKE |
| part\_tree\_drag\_hourglass | &lt;string&gt; | Take or leave hourglass cards referenced by the part card when moving parts in the part tree | TAKE, LEAVE | LEAVE |
| part\_tree\_drag\_equation\_of\_state | &lt;string&gt; | Take or leave equation of state cards referenced by the part card when moving parts in the part tree | TAKE, LEAVE | LEAVE |
| part\_tree\_drag\_other | &lt;string&gt; | Take or leave junior items that reference parts when moving parts in the part tree | TAKE, LEAVE | LEAVE |
| part\_tree\_include\_hovertext | &lt;string&gt; | If set to ON, hover text will be displayed for the full path of the include in the part tree | ON, OFF | ON |
| part\_tree\_show\_blanking\_status | &lt;string&gt; | If set to ON, the blanking status for includes/parts will be displayed in the part tree | ON, OFF | OFF |
| part\_tree\_show\_blanking\_mode | &lt;string&gt; | The blanking status display on the part tree can either be based on blanked/unblanked parts or elements | PART, ELEMENT | PART |
| part\_tree\_show\_latent\_entities | &lt;string&gt; | If set to ON, the latent items are displayed on the part tree contents and its list | ON, OFF | OFF |
| ptree\_show\_beam | &lt;logical&gt; | If TRUE a Beam category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_define\_box | &lt;logical&gt; | If TRUE a Define box category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_define\_coordinate | &lt;logical&gt; | If TRUE a Define coordinate category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_contact | &lt;logical&gt; | If TRUE a Contact category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_define\_curve | &lt;logical&gt; | If TRUE a Define curve category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_database\_history | &lt;logical&gt; | If TRUE a Database history category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_eos | &lt;logical&gt; | If TRUE an Equation of state category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_define\_function | &lt;logical&gt; | If TRUE a Define function category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_group | &lt;logical&gt; | If TRUE a Groups category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_hourglass | &lt;logical&gt; | If TRUE an Hourglass category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_joint | &lt;logical&gt; | If TRUE a Joints category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_mass | &lt;logical&gt; | If TRUE a Mass category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_nodal\_rigid\_body | &lt;logical&gt; | If TRUE a Nodal RB category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_prescribed\_motion | &lt;logical&gt; | If TRUE a Boundary prescribed motion category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_pretensioner | &lt;logical&gt; | If TRUE a Pretensioner category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_retractor | &lt;logical&gt; | If TRUE a Retractor category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_rigidwall | &lt;logical&gt; | If TRUE a Rigidwall category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_seatbelt | &lt;logical&gt; | If TRUE a Seatbelt category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_define\_sd\_orientation | &lt;logical&gt; | If TRUE a Define spring/damper orientation category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_section | &lt;logical&gt; | If TRUE a Section category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_beam | &lt;logical&gt; | If TRUE a Set beam category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_discrete | &lt;logical&gt; | If TRUE a Set discrete category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_node | &lt;logical&gt; | If TRUE a Set node category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_part | &lt;logical&gt; | If TRUE a Set part category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_segment | &lt;logical&gt; | If TRUE a Set segment category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_shell | &lt;logical&gt; | If TRUE a Set shell category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_solid | &lt;logical&gt; | If TRUE a Set solid category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_set\_tshell | &lt;logical&gt; | If TRUE a Set tshell category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_shell | &lt;logical&gt; | If TRUE a Shell category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_slipring | &lt;logical&gt; | If TRUE a Slipring category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_solid | &lt;logical&gt; | If TRUE a Solid category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_spc | &lt;logical&gt; | If TRUE a Boundary SPC category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_discrete | &lt;logical&gt; | If TRUE a Spring category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_define\_table | &lt;logical&gt; | If TRUE a Define table category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_tshell | &lt;logical&gt; | If TRUE a Thick Shell category will be included in the tree | TRUE, FALSE | FALSE |
| ptree\_show\_define\_vector | &lt;logical&gt; | If TRUE a Define vector category will be included in the tree | TRUE, FALSE | FALSE |
| **part\_replace** |
| part\_replace\_process\_haz\_connection | &lt;string&gt; | undo HAZ welds and remake if 'remake connection' option is active in part replace | ON, OFF | ON |
| part\_replace\_remake\_connection | &lt;string&gt; | remake affected Primer connections after part replace | ON, OFF | ON |
| part\_replace\_node\_merge\_tolerance | &lt;real&gt; | default tolerance for node merge of part replace |  | 0.0 |
| **transfer\_options** |
| part\_replace\_transfer\_section | &lt;string&gt; | If defined in source model, change PID-&gt;SECID and transfer section card to target model | ON, OFF | OFF |
| part\_replace\_transfer\_material | &lt;string&gt; | If defined in source model, change PID-&gt;MID and transfer material card and load-curves to target model | ON, OFF | OFF |
| part\_replace\_transfer\_hourglass | &lt;string&gt; | If defined in source model, change PID-&gt;HGID and transfer hourglass card to target model | ON, OFF | OFF |
| part\_replace\_cleanup\_obsolete | &lt;string&gt; | after transfer delete obsolete sect/matl/hgls/lcur\nfrom target model | ON, OFF | ON |
| part\_replace\_transfer\_intial\_str | &lt;string&gt; | transfer relevant initial stress and initial strain cards from source model to target model | ON, OFF | ON |
| part\_replace\_transfer\_part\_title | &lt;string&gt; | transfer part title from source model to target model | ON, OFF | OFF |

The following are used for some of the pedestrian tools in PRIMER

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| hic\_yellow | &lt;real&gt; | HIC value below which = 'green', above = 'yellow' (ENCAP reg) |  | 650.0 |
| hic\_orange | &lt;real&gt; | HIC value below which = 'yellow', above = 'orange' (ENCAP reg) |  | 1000.0 |
| hic\_brown | &lt;real&gt; | HIC value below which = 'orange', above = 'brown' (ENCAP reg) |  | 1350.0 |
| hic\_red | &lt;real&gt; | HIC value below which = 'brown', above = 'red' (ENCAP reg) |  | 1700.0 |
| hic\_low | &lt;real&gt; | Low HIC value used in pedestrian area calculator (GTR reg) |  | 800.0 |
| hic\_high | &lt;real&gt; | High HIC value used in pedestrian area calculator (GTR reg) |  | 1700.0 |
| hic\_grid | &lt;integer&gt; | Grid spacing used in pedestrian area calculator (GTR reg) |  | 10 |
| hic\_area\_sensitivity | &lt;real&gt; | HIC area sensitivity used in pedestrian area calculator (GTR reg) |  | -50.0 |
| hic\_band\_sensitivity | &lt;real&gt; | HIC band sensitivity used in pedestrian area calculator (ENCAP reg) |  | 50.0 |

The following control permissions when writing files

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| directory\_permission | &lt;integer&gt; | Octal permission code for new directories | 0 - 777 | &lt;none&gt; |

The following control what property save and reload operations consider

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| properties\_save\_blanking | &lt;logical&gt; | Whether to consider blanking | TRUE, FALSE | TRUE |
| properties\_save\_colour | &lt;logical&gt; | Whether to consider colour | TRUE, FALSE | TRUE |
| properties\_save\_transparency | &lt;logical&gt; | Whether to consider transparency | TRUE, FALSE | TRUE |
| properties\_save\_plot\_mode | &lt;logical&gt; | Whether to consider plotting mode (current, shaded, hidden, wire) | TRUE, FALSE | TRUE |
| properties\_save\_entity | &lt;logical&gt; | Whether to consider entity visibility switches | TRUE, FALSE | TRUE |
| properties\_save\_view | &lt;logical&gt; | Whether to consider the current view | TRUE, FALSE | TRUE |

The following control settings when renumbering entities

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| database\_norenumber | &lt;string&gt; | If set to ON, DATABASE\_HISTORY cards will not be renumbered | OFF, ON | OFF |
| nset\_norenumber | &lt;string&gt; | SET\_NODE cards used by 2d seatbelts will not be renumbered beyond the 7 digit range for versions older than 971R7.1 | OFF, ON | ON |
| material\_norenumber | &lt;string&gt; | If set to ON, MAT cards will not be renumbered | OFF, ON | OFF |
| section\_norenumber | &lt;string&gt; | If set to ON, SECTION cards will not be renumbered | OFF, ON | OFF |
| label\_declash | &lt;string&gt; | If set to ON, elements are declashed to avoid problems when reading models into other software | OFF, ON | OFF |
| nrb\_declash | &lt;string&gt; | If set to ON, PRIMER will avoid labelling NRB's with the same label as parts, and vice-versa | OFF, ON | ON |
| disable\_safe\_ranges | &lt;string&gt; | If set to ON, safe ranges will be ignored during renumbering | OFF, ON | OFF |
| range\_norenumber | &lt;string&gt; | If set to ON, labels in the specified range will not be renumbered | OFF, ON | OFF |
| rigid\_patch\_ref\_size | &lt;real&gt; | Rigid parts with diagonals smaller than this value are designated as rigid patches |  | 50 |
| norenumber\_min | &lt;integer&gt; | Min label that will not be renumbered |  | 1 |
| norenumber\_max | &lt;integer&gt; | Max label that will not be renumbered |  | 1 |
| edit\_panel\_numbering\_rule | &lt;string&gt; | default rule for numbering of created entities in edit panels | HIGHEST\_PLUS\_ONE, LABEL\_FIRST\_FREE, LABEL\_FIRST\_LATENT, LAYER\_FIRST\_FREE, LAYER\_HIGHEST\_FREE, LAYER\_HIGHEST\_PLUS\_ONE | LAYER\_HIGHEST\_PLUS\_ONE |
| renumber\_latent\_in\_main\_renumber\_panel | &lt;logical&gt; | If TRUE Primer will renumber latent entities in the main model renumber panel and in individual entity renumbering panels | TRUE, FALSE | FALSE |
| label\_lock\_csv | &lt;string&gt; | csv file that contains locked and safe label ranges |  | &lt;none&gt; |

The following control settings related to quickfind

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| quickfind\_search\_keyword\_menus | &lt;logical&gt; | Whether to search for items in the keyword menus | TRUE, FALSE | TRUE |
| quickfind\_search\_other\_menus | &lt;logical&gt; | Whether to search for items in other menus | TRUE, FALSE | TRUE |
| quickfind\_search\_keyword\_manual | &lt;logical&gt; | Whether to search for items in the LS-DYNA keyword manual | TRUE, FALSE | TRUE |
| quickfind\_search\_models | &lt;logical&gt; | Whether to search for items in models | TRUE, FALSE | TRUE |
| quickfind\_unmatched\_text\_colour | &lt;string&gt; | Text colour for unmatched characters | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW | BLACK |
| quickfind\_matched\_text\_colour | &lt;string&gt; | Text colour for matched characters | WHITE, GREY, BLACK, RED, GREEN, BLUE, CYAN, MAGENTA, YELLOW | BLUE |
| quickfind\_found\_list\_length | &lt;integer&gt; | Number of items to display in the found list | 1 - 20 | 10 |
| quickfind\_recent\_history | &lt;integer&gt; | Number of recently selected items to store | 0 - 2147483646 | 10 |
| quickfind\_sequential\_bonus | &lt;integer&gt; | Modifier for two successful adjacent matches | 1 - 100 | 50 |
| quickfind\_word\_start\_bonus | &lt;integer&gt; | Modifier for successful match at word beginning | 1 - 100 | 10 |
| quickfind\_box\_size | &lt;string&gt; | Size and layout of Search box | SMALL, LARGE | SMALL |

The following control settings related to target marker

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| tmark\_type | &lt;string&gt; | size determination method for target marker | MODEL\_SPACE, SCREEN\_SPACE | MODEL\_SPACE |

The following affect [scripting](https://help.oasys-software.com/articles/project-primer/introduction)

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| **crash\_test\_setup** |
| crash\_test\_setup\_admin\_loc | &lt;string&gt; | Admin location for .xml read only files |  | &lt;none&gt; |
| custom\_tools\_script\_directory | &lt;string&gt; | Directory for PRIMER to look for custom tool scripts in |  | &lt;none&gt; |
| custom\_tools\_name | &lt;string&gt; | Name for custom tools button |  | &lt;none&gt; |
| javascript\_memory\_size | &lt;integer&gt; | Initial memory allocated for garbage collection (MB) | 1 - 4095 | 25 |
| modules\_directory | &lt;string&gt; | Directory for PRIMER to look for modules in |  | &lt;none&gt; |
| script\_directory | &lt;string&gt; | Directory for PRIMER to look for scripts in |  | $OA\_INSTALL/primer\_library/scripts |
| set\_class | &lt;string&gt; | Whether the Set class is used for the LS-DYNA \*SET keyword or the ECMAScript Set object | Keyword, ECMAScript | Keyword |
| script\_copy\_nonexistent\_include\_warning | &lt;logical&gt; | Whether to show a warning if a keyword is copied into a non-existent include. | TRUE, FALSE | TRUE |
| **ejection\_mitigation** |
| em\_ihi\_template | &lt;string&gt; | CSV template for interior head impact model build |  | &lt;none&gt; |
| **free\_motion\_headform** |
| fmh\_ihi\_template | &lt;string&gt; | CSV template for interior head impact model build |  | &lt;none&gt; |
| **pedestrian\_markup** |
| pm\_adult\_head\_template | &lt;string&gt; | CSV template for adult head model build |  | &lt;none&gt; |
| pm\_child\_head\_template | &lt;string&gt; | CSV template for child head model build |  | &lt;none&gt; |
| pm\_cyclist\_head\_template | &lt;string&gt; | CSV template for cyclist head model build |  | &lt;none&gt; |
| pm\_lower\_leg\_template | &lt;string&gt; | CSV template for lower leg model build |  | &lt;none&gt; |
| pm\_upper\_leg\_template | &lt;string&gt; | CSV template for upper leg model build |  | &lt;none&gt; |

Options to control setup and processing seatsquash.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| squash\_x\_increment | &lt;real&gt; | X displacement that the dummy will move per iteration to move the dummy out of the seat |  | 0.0 |
| squash\_y\_increment | &lt;real&gt; | Y displacement that the dummy will move per iteration to move the dummy out of the seat |  | 0.0 |
| squash\_z\_increment | &lt;real&gt; | Z displacement that the dummy will move per iteration to move the dummy out of the seat |  | 0.0 |
| squash\_max\_iter | &lt;integer&gt; | Maximum number of iterations that PRIMER will try to do when moving the dummy out of the seat. |  | 100 |
| squash\_vol | &lt;real&gt; | If any solid element becomes excessively deformed and reaches this threshold, the seat squash process will stop |  | 0.2 |
| squash\_imp\_exp\_coords | &lt;logical&gt; | Import and export coordinates of a specific part | TRUE, FALSE | TRUE |
| squash\_init\_stress\_solid | &lt;logical&gt; | Initial stress field for solid elements | TRUE, FALSE | TRUE |
| squash\_init\_stress\_shell | &lt;logical&gt; | Initial stress field for shell elements | TRUE, FALSE | TRUE |
| squash\_init\_stress\_beam | &lt;logical&gt; | Initial stress field for beam elements | TRUE, FALSE | TRUE |
| squash\_init\_foam\_ref\_geom\_create | &lt;logical&gt; | NONE | TRUE, FALSE | FALSE |
| squash\_init\_foam\_ref\_geom\_remove | &lt;logical&gt; | NONE | TRUE, FALSE | TRUE |
| squash\_init\_stress\_delete | &lt;logical&gt; | NONE | TRUE, FALSE | TRUE |
| squash\_remove\_ammg | &lt;logical&gt; | NONE | TRUE, FALSE | TRUE |
| squash\_redraw\_after\_each\_iter | &lt;logical&gt; | If you want to see the progress of the seatsquash then select the Redraw after each iteration checkbox. | TRUE, FALSE | TRUE |
| squash\_try\_improve\_tet\_mesh | &lt;logical&gt; | PRIMER can try to 'smooth' tet meshes to make them better. | TRUE, FALSE | TRUE |
| squash\_create\_foam\_ref\_geom | &lt;logical&gt; | You can opt to create \*INITIAL\_FOAM\_REFERENCE\_GEOMETRY cards for the nodes in the seat foam before the deformation. This is only available for hyperelastic materials and certain solid element formulations. | TRUE, FALSE | TRUE |
| squash\_time\_posit\_dummy | &lt;real&gt; | Time to position dummy |  | 7.5E-2 |
| squash\_total\_analysis\_time | &lt;real&gt; | Total analysis time |  | 0.1 |
| squash\_dumping\_glob | &lt;real&gt; | Value assigned to global dumping (\*DAMPING\_GLOBAL). |  | 50.0 |
| squash\_use\_define\_construction | &lt;logical&gt; | Use DEFINE\_CONSTRUCTION cards to output the dynain file (the default is to use INTERFACE\_SPRINGBACK) | TRUE, FALSE | FALSE |

Options to control setup and processing of seatbelt fitting.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| belt\_rows | &lt;integer&gt; | Number of rows of elements across belt |  | 1 |
| belt\_width | &lt;real&gt; | Width of belt (total across all rows) | 1e-10 - 1e10 | 40.0 |
| belt\_thickness | &lt;real&gt; | Thickness of belt elements | 1e-10 - 1e10 | 1.0 |
| belt\_length | &lt;real&gt; | Characteristic length of belt elements | 1e-10 - 1e10 | 25.0 |
| belt\_xsec\_bpost\_slipring\_offset | &lt;real&gt; | Database Cross-section offset at B-Post slipring | 0.0 - 1e10 | 200.0 |
| belt\_xsec\_pelvis\_slipring\_offset | &lt;real&gt; | Database Cross-section offset at Pelvis slipring | 0.0 - 1e10 | 150.0 |
| belt\_xsec\_retractor\_offset | &lt;real&gt; | Database Cross-section offset at Retractor | 0.0 - 1e10 | 0.0 |
| belt\_xsec\_fixed\_point\_offset | &lt;real&gt; | Database Cross-section offset at fixed and end points | 0.0 - 1e10 | 0.0 |
| belt\_xsec\_naming\_convention | &lt;string&gt; | Database Cross-section naming convention | NONE, AUTO, CUSTOM | AUTO |
| belt\_xsec\_custom\_pre\_text | &lt;string&gt; | Additional pre-text for Database Cross-section e.g. Dummy 1 |  | &lt;none&gt; |
| belt\_iterations | &lt;integer&gt; | Number of iterations between resorts during fitting |  | 25 |
| belt\_convergence | &lt;real&gt; | Convergence tolerance during fitting | 1e-10 - 1.0 | 1.0e-5 |
| belt\_contact\_thickness | &lt;string&gt; | Contact thickness used for shell elements during fitting | TRUE, FACTORED, NEUTRAL | TRUE |
| belt\_contact\_tfact | &lt;real&gt; | Factor used on FACTORED contact thickness during fitting | 0.0 - 1.0 | 1.0 |
| belt\_contact\_tmin | &lt;real&gt; | Minimum thickness for shells used during fitting (it uses max(true thickness, this value)) | 0.0 - 1.0e10 | 1.0 |
| belt\_penetration\_dist | &lt;real&gt; | Maximum permitted contact penetration distance into solids | 0.0 - 1e10 | 5.0 |
| belt\_overlap | &lt;real&gt; | Overlap between adjacent segments during contact | 0.0 - 1e10 | 0.05 |
| belt\_projection\_dist | &lt;real&gt; | Initial projection distance during fitting | 0.0 - 1e10 | 35.0 |
| belt\_max\_curvature | &lt;real&gt; | Limiting transverse angular difference (deg). 0 = no limit. | 0.0 - 1e10 | 0.0 |
| belt\_friction | &lt;real&gt; | Transverse friction coefficient for belt to structure contact. | 0.0 - 1.0 | 0.0 |
| belt\_acute\_angle | &lt;real&gt; | Angle considered to be acute in the belt path during fitting. | 0.0 - 180.0 | 90.0 |
| belt\_growth\_percent | &lt;real&gt; | Permitted %age growth of belt element length during fitting. | 0.0 - 500.0 | 0.0 |
| belt\_refit\_max\_iter | &lt;integer&gt; | Maximum number of iterations performed during auto-refit operation |  | 2000 |
| belt\_parallel\_fit | &lt;logical&gt; | Whether to use parallelised belt fitting. | TRUE, FALSE | TRUE |
| belt\_fitting\_options\_menu | &lt;string&gt; | Whether to map the fitting options panel automatically during fitting | AUTO\_MAP, MANUAL | AUTO\_MAP |
| belt\_fitting\_path\_order | &lt;string&gt; | Shape of belt fitting path interpolated from basic path points | SPLINE, MIXED, LINEAR | SPLINE |
| belt\_fitting\_path\_display\_mode | &lt;string&gt; | Method used to display belt fitting path | SKELETON\_WIRE, THICK\_WIRE, THICK\_SHADED | THICK\_SHADED |
| belt\_fitting\_path\_offset\_mode | &lt;string&gt; | Distance by which fitting path is projected outwards from basic path | FIXED\_OFFSET, TENTH\_OF\_FIXED, NO\_OFFSET | FIXED\_OFFSET |
| belt\_fitting\_auto\_depenetration | &lt;string&gt; | Whether belt is depenetrated prior to start of fitting process | OFF, ON | OFF |
| belt\_auto\_depen\_b2b\_mode | &lt;string&gt; | How in front vs behind status of belt path segments is determined for initial depenetration | AUTO, LOWER, HIGHER, NONE | AUTO |
| belt\_auto\_depen\_max\_iter | &lt;integer&gt; | Max number of iterations used for automatic depenetration | 1 - 10 | 4 |
| belt\_fitting\_radial\_method | &lt;string&gt; | Method used to determine the outward (radial) direction at belt path points | LOCAL\_NORMAL, PATH\_TWIST | LOCAL\_NORMAL |
| belt\_fitting\_self\_depenetration | &lt;string&gt; | Whether the belt considers contact against itself during fitting | OFF, ON | ON |
| belt\_self\_depen\_factor | &lt;real&gt; | Initial factor on belt thickness for contact against itself | 1e-5 - 100.0 | 1.0 |
| belt\_self\_depen\_ramp\_iter | &lt;integer&gt; | Number of iterations over which self depen factor ramps down to 1.0 | 1 - 10000 | 500 |
| belt\_mesh\_definition\_method | &lt;string&gt; | Method of defining element types used to mesh each belt segment | AUTOMATIC, OLD, NEW | AUTOMATIC |
| belt\_meshed\_slipring\_radius | &lt;real&gt; | Meshed slipring radius | 1e-5 - 1e5 | 5.0 |
| belt\_meshed\_slipring\_angle | &lt;real&gt; | Angle (deg) that elements subtend when passing around the slipring radius | 0.1 - 90 | 15.0 |
| belt\_meshed\_slipring\_distance | &lt;real&gt; | Distance that short elements span either side of the slipring | 1e-5 - 1e5 | 20.0 |
| belt\_path\_show\_drag\_handles | &lt;logical&gt; | Whether to show translation drag handles on belt fitting path | TRUE, FALSE | TRUE |
| belt\_path\_show\_twist\_handles | &lt;logical&gt; | Whether to show curvature/twist drag handles on belt fitting path | TRUE, FALSE | TRUE |
| belt\_path\_show\_inter\_points | &lt;logical&gt; | Whether to show intermediate points on belt fitting path | TRUE, FALSE | TRUE |
| belt\_path\_symbol\_transparency | &lt;integer&gt; | Transparency of otherwise obscured symbols in belt fitting. | 0 - 100 | 30 |
| belt\_path\_max\_handle\_size | &lt;integer&gt; | Maximum size of drag and twist handles (screen space units). | 10 - 4000 | 400 |
| belt\_path\_lock\_twist | &lt;logical&gt; | Whether or not belt twist is locked in advanced fitting mode. | TRUE, FALSE | TRUE |
| belt\_path\_match\_method | &lt;string&gt; | How to deal with mismatch between belt path point and nodal coordinates | PREFER\_COORD, PREFER\_NODE | PREFER\_COORD |
| belt\_path\_match\_tol | &lt;real&gt; | Tolerance to match nodes to path points when fitting existing path to new dummy. | 0.0 - 1e10 | 1.0 |
| belt\_path\_nfind\_tol | &lt;real&gt; | Tolerance when finding new nodes at path points when fitting existing path to new dummy. | 0.0 - 1e10 | 10.0 |
| belt\_reference\_geometry | &lt;string&gt; | Whether or not reference geometry is created (for all fabric belts). | AUTOMATIC, TRUE, FALSE | AUTOMATIC |
| belt\_label\_gap\_allowed | &lt;integer&gt; | Permitted gap in start/end label ranges |  | 0 |
| initial\_belt\_readjust\_accept | &lt;string&gt; | Readjust initial belt points around sliprings after accepting belt path | All, None, Shoulder, Pelvis | All |
| belt\_buckle\_rot\_iter\_per\_mode | &lt;integer&gt; | Number of iterations per buckle rotation mode |  | 100 |
| belt\_refit\_xsec\_rename | &lt;string&gt; | Rename Cross section titles when doing a belt auto-refit | UPDATE, REPLACE, KEEP\_OLD | UPDATE |
| belt\_ignore\_pelvis\_rotation\_check | &lt;string&gt; | Show the pelvis buckle rotation warning about lap belt point type. | SHOW, IGNORE | SHOW |

The following affect how \*SET\_NODE\_GENERAL are treated in PRIMER

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| speedup\_set\_handling\_for\_node\_set\_general | &lt;string&gt; | speeds up edit create ops for models with many SET\_GENERAL | TRUE, FALSE | TRUE |

The following affect how \*SET\_GENERATE are treated in PRIMER

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| check\_set\_generate\_on\_renumber | &lt;string&gt; | check SET\_GENERATE content on renumber selected | ON, OFF | ON |
| highest\_label\_considers\_set\_generate\_entries | &lt;string&gt; | Consider SET\_GENERATE upper bounds when determining highest label? | TRUE, FALSE, PROMPT | FALSE |

Keys can have functions assigned to them:

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| F1\_key | &lt;string&gt; | Shortcut for F1 |  | &lt;none&gt; |
| F2\_key | &lt;string&gt; | Shortcut for F2 |  | &lt;none&gt; |
| F3\_key | &lt;string&gt; | Shortcut for F3 |  | &lt;none&gt; |
| F4\_key | &lt;string&gt; | Shortcut for F4 |  | &lt;none&gt; |
| F5\_key | &lt;string&gt; | Shortcut for F5 |  | &lt;none&gt; |
| F6\_key | &lt;string&gt; | Shortcut for F6 |  | &lt;none&gt; |
| F7\_key | &lt;string&gt; | Shortcut for F7 |  | &lt;none&gt; |
| F8\_key | &lt;string&gt; | Shortcut for F8 |  | &lt;none&gt; |
| F9\_key | &lt;string&gt; | Shortcut for F9 |  | &lt;none&gt; |
| F10\_key | &lt;string&gt; | Shortcut for F10 |  | &lt;none&gt; |
| F11\_key | &lt;string&gt; | Shortcut for F11 |  | &lt;none&gt; |
| F12\_key | &lt;string&gt; | Shortcut for F12 |  | &lt;none&gt; |
| A\_key | &lt;string&gt; | Shortcut for A |  | AUTOSCALE |
| B\_key | &lt;string&gt; | Shortcut for B |  | BLANK |
| C\_key | &lt;string&gt; | Shortcut for C |  | CLOSE\_ALL |
| D\_key | &lt;string&gt; | Shortcut for D |  | DRAG\_CUT |
| E\_key | &lt;string&gt; | Shortcut for E |  | ENTITIES |
| F\_key | &lt;string&gt; | Shortcut for F |  | FRINGE |
| G\_key | &lt;string&gt; | Shortcut for G |  | &lt;none&gt; |
| H\_key | &lt;string&gt; | Shortcut for H |  | HIDDEN |
| I\_key | &lt;string&gt; | Shortcut for I |  | ICONISE |
| J\_key | &lt;string&gt; | Shortcut for J |  | ATTACHED |
| K\_key | &lt;string&gt; | Shortcut for K |  | RESET\_ATTR |
| L\_key | &lt;string&gt; | Shortcut for L |  | LINE |
| M\_key | &lt;string&gt; | Shortcut for M |  | MEASURE |
| N\_key | &lt;string&gt; | Shortcut for N |  | CUT\_PLANE |
| O\_key | &lt;string&gt; | Shortcut for O |  | DISPLAY |
| P\_key | &lt;string&gt; | Shortcut for P |  | TOGGLE\_ALL\_PP |
| Q\_key | &lt;string&gt; | Shortcut for Q |  | QUICK\_PICK |
| R\_key | &lt;string&gt; | Shortcut for R |  | REVERSE |
| S\_key | &lt;string&gt; | Shortcut for S |  | SHADED |
| T\_key | &lt;string&gt; | Shortcut for T |  | TIDY\_MENUS |
| U\_key | &lt;string&gt; | Shortcut for U |  | UNBLANK |
| V\_key | &lt;string&gt; | Shortcut for V |  | VIEW\_MENU |
| W\_key | &lt;string&gt; | Shortcut for W |  | IMAGE\_MENU |
| X\_key | &lt;string&gt; | Shortcut for X |  | CUT\_SECTION |
| Y\_key | &lt;string&gt; | Shortcut for Y |  | CYCLE\_OVERLAY |
| Z\_key | &lt;string&gt; | Shortcut for Z |  | ZOOM |
| a\_key | &lt;string&gt; | Shortcut for a |  | AUTOSCALE |
| b\_key | &lt;string&gt; | Shortcut for b |  | BLANK |
| c\_key | &lt;string&gt; | Shortcut for c |  | CLOSE\_ALL |
| d\_key | &lt;string&gt; | Shortcut for d |  | DRAG\_CUT |
| e\_key | &lt;string&gt; | Shortcut for e |  | ENTITIES |
| f\_key | &lt;string&gt; | Shortcut for f |  | FRINGE |
| g\_key | &lt;string&gt; | Shortcut for g |  | &lt;none&gt; |
| h\_key | &lt;string&gt; | Shortcut for h |  | HIDDEN |
| i\_key | &lt;string&gt; | Shortcut for i |  | ICONISE |
| j\_key | &lt;string&gt; | Shortcut for j |  | ATTACHED |
| k\_key | &lt;string&gt; | Shortcut for k |  | RESET\_VIS |
| l\_key | &lt;string&gt; | Shortcut for l |  | LINE |
| m\_key | &lt;string&gt; | Shortcut for m |  | MEASURE |
| n\_key | &lt;string&gt; | Shortcut for n |  | CUT\_PLANE |
| o\_key | &lt;string&gt; | Shortcut for o |  | DISPLAY |
| p\_key | &lt;string&gt; | Shortcut for p |  | TOGGLE\_CURR\_PP |
| q\_key | &lt;string&gt; | Shortcut for q |  | QUICK\_PICK |
| r\_key | &lt;string&gt; | Shortcut for r |  | REVERSE |
| s\_key | &lt;string&gt; | Shortcut for s |  | SHADED |
| t\_key | &lt;string&gt; | Shortcut for t |  | TIDY\_MENUS |
| u\_key | &lt;string&gt; | Shortcut for u |  | UNBLANK |
| v\_key | &lt;string&gt; | Shortcut for v |  | VIEW\_MENU |
| w\_key | &lt;string&gt; | Shortcut for w |  | IMAGE\_MENU |
| x\_key | &lt;string&gt; | Shortcut for x |  | CUT\_SECTION |
| y\_key | &lt;string&gt; | Shortcut for y |  | CYCLE\_OVERLAY |
| z\_key | &lt;string&gt; | Shortcut for z |  | ZOOM |
| SPACE\_key | &lt;string&gt; | Shortcut for space |  | &lt;none&gt; |
| ONE\_key | &lt;string&gt; | Shortcut for 1 |  | VIEW\_P\_XY |
| TWO\_key | &lt;string&gt; | Shortcut for 2 |  | VIEW\_P\_YZ |
| THREE\_key | &lt;string&gt; | Shortcut for 3 |  | VIEW\_P\_XZ |
| FOUR\_key | &lt;string&gt; | Shortcut for 4 |  | VIEW\_P\_ISO |
| FIVE\_key | &lt;string&gt; | Shortcut for 5 |  | VIEW\_N\_XY |
| SIX\_key | &lt;string&gt; | Shortcut for 6 |  | VIEW\_N\_YZ |
| SEVEN\_key | &lt;string&gt; | Shortcut for 7 |  | VIEW\_N\_XZ |
| EIGHT\_key | &lt;string&gt; | Shortcut for 8 |  | VIEW\_N\_ISO |
| NINE\_key | &lt;string&gt; | Shortcut for 9 |  | &lt;none&gt; |
| ZERO\_key | &lt;string&gt; | Shortcut for 0 |  | &lt;none&gt; |
| EXCLAMATION\_key | &lt;string&gt; | Shortcut for ! |  | &lt;none&gt; |
| DOUBLEQUOTE\_key | &lt;string&gt; | Shortcut for " |  | &lt;none&gt; |
| HASH\_key | &lt;string&gt; | Shortcut for # |  | &lt;none&gt; |
| DOLLAR\_key | &lt;string&gt; | Shortcut for $ |  | &lt;none&gt; |
| PERCENT\_key | &lt;string&gt; | Shortcut for % |  | &lt;none&gt; |
| AMPERSAND\_key | &lt;string&gt; | Shortcut for & |  | &lt;none&gt; |
| SINGLEQUOTE\_key | &lt;string&gt; | Shortcut for ' |  | &lt;none&gt; |
| LEFTBRACKET\_key | &lt;string&gt; | Shortcut for ( |  | &lt;none&gt; |
| RIGHTBRACKET\_key | &lt;string&gt; | Shortcut for ) |  | &lt;none&gt; |
| ASTERISK\_key | &lt;string&gt; | Shortcut for \* |  | &lt;none&gt; |
| PLUS\_key | &lt;string&gt; | Shortcut for + |  | ZOOM\_IN |
| COMMA\_key | &lt;string&gt; | Shortcut for , |  | &lt;none&gt; |
| MINUS\_key | &lt;string&gt; | Shortcut for - |  | ZOOM\_OUT |
| DOT\_key | &lt;string&gt; | Shortcut for . |  | &lt;none&gt; |
| SLASH\_key | &lt;string&gt; | Shortcut for / |  | SHORTCUT |
| COLON\_key | &lt;string&gt; | Shortcut for : |  | &lt;none&gt; |
| SEMICOLON\_key | &lt;string&gt; | Shortcut for ; |  | &lt;none&gt; |
| LESSTHAN\_key | &lt;string&gt; | Shortcut for &lt; |  | &lt;none&gt; |
| EQUALS\_key | &lt;string&gt; | Shortcut for = |  | ZOOM\_IN |
| GREATERTHAN\_key | &lt;string&gt; | Shortcut for &gt; |  | &lt;none&gt; |
| QUESTIONMARK\_key | &lt;string&gt; | Shortcut for ? |  | SHORTCUT |
| AT\_key | &lt;string&gt; | Shortcut for @ |  | &lt;none&gt; |
| LEFTSQUAREBRACKET\_key | &lt;string&gt; | Shortcut for [ |  | &lt;none&gt; |
| BACKSLASH\_key | &lt;string&gt; | Shortcut for \ |  | &lt;none&gt; |
| RIGHTSQUAREBRACKET\_key | &lt;string&gt; | Shortcut for ] |  | &lt;none&gt; |
| CIRCUMFLEX\_key | &lt;string&gt; | Shortcut for ^ |  | &lt;none&gt; |
| UNDERSCORE\_key | &lt;string&gt; | Shortcut for \_ |  | ZOOM\_OUT |
| BACKTICK\_key | &lt;string&gt; | Shortcut for ` |  | &lt;none&gt; |
| LEFTCURLYBRACKET\_key | &lt;string&gt; | Shortcut for { |  | &lt;none&gt; |
| PIPE\_key | &lt;string&gt; | Shortcut for | |  | &lt;none&gt; |
| RIGHTCURLYBRACKET\_key | &lt;string&gt; | Shortcut for } |  | &lt;none&gt; |
| TILDE\_key | &lt;string&gt; | Shortcut for ~ |  | SAVED\_PROPS |
| SM\_BUTTON1\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 1 |  | VIEW\_P\_XY |
| SM\_BUTTON2\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 2 |  | VIEW\_N\_XZ |
| SM\_BUTTON3\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 3 |  | VIEW\_P\_XZ |
| SM\_BUTTON4\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 4 |  | VIEW\_P\_YZ |
| SM\_BUTTON5\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 5 |  | &lt;none&gt; |
| SM\_BUTTON6\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 6 |  | &lt;none&gt; |
| SM\_BUTTON7\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 7 |  | &lt;none&gt; |
| SM\_BUTTON8\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 8 |  | &lt;none&gt; |
| SM\_BUTTON9\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 9 |  | &lt;none&gt; |
| SM\_BUTTON10\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 10 |  | &lt;none&gt; |
| SM\_BUTTON11\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 11 |  | &lt;none&gt; |
| SM\_BUTTON12\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 12 |  | &lt;none&gt; |
| SM\_BUTTON13\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 13 |  | &lt;none&gt; |
| SM\_BUTTON14\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 14 |  | &lt;none&gt; |
| SM\_BUTTON15\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 15 |  | &lt;none&gt; |
| SM\_BUTTON16\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 16 |  | &lt;none&gt; |
| SM\_BUTTON17\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 17 |  | &lt;none&gt; |
| SM\_BUTTON18\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 18 |  | &lt;none&gt; |
| SM\_BUTTON19\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 19 |  | &lt;none&gt; |
| SM\_BUTTON20\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 20 |  | &lt;none&gt; |
| SM\_BUTTON21\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 21 |  | &lt;none&gt; |
| SM\_BUTTON22\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 22 |  | &lt;none&gt; |
| SM\_BUTTON23\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 23 |  | &lt;none&gt; |
| SM\_BUTTON24\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 24 |  | &lt;none&gt; |
| SM\_BUTTON25\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 25 |  | &lt;none&gt; |
| SM\_BUTTON26\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 26 |  | &lt;none&gt; |
| SM\_BUTTON27\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 27 |  | &lt;none&gt; |
| SM\_BUTTON28\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 28 |  | &lt;none&gt; |
| SM\_BUTTON29\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Button 29 |  | &lt;none&gt; |
| SM\_APPLICATION\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Application Button |  | SHORTCUT\_3D |
| SM\_FIT\_key | &lt;string&gt; | Shortcut for 3D SpaceMouse Fit Button |  | AUTOSCALE |

The following settings control the interactive text editor, and the contents of files.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| text\_editor | &lt;string&gt; | Text editor to use for editing comments |  | &lt;none&gt; |
| text\_edit\_show\_names | &lt;logical&gt; | Whether to show field header names in file to be edited | TRUE, FALSE | TRUE |
| text\_edit\_show\_rules | &lt;logical&gt; | Whether to show rules about editing files as comments | TRUE, FALSE | TRUE |
| hide\_text\_edit\_pref\_comments | &lt;logical&gt; | hide # comment lines in text edit of preferences (## are preserved) | TRUE, FALSE | FALSE |

The following options relate title

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| show\_title\_prefix\_suffix | &lt;logical&gt; | display PREFIX,SUFFIX if defined on include transform | TRUE, FALSE | TRUE |
| dyna\_title\_placement | &lt;string&gt; | placement of \*TITLE in written deck | default, top, bottom, both | default |

The following settings control in fine detail how threading (parallelism) is used to speed up operations. It is recommended that you do not edit these in the preferences editor, but rather use Model, Utilities, Details and then Save\_settings.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| memory\_helper\_thread | &lt;string&gt; | Threaded assistance for memory pre-allocation | TRUE, FALSE | TRUE |
| threading\_status | &lt;string&gt; | Bitwise encoded threading status word #0 - do not hand edit!! |  | &lt;none&gt; |
| threading\_status\_1 | &lt;string&gt; | Bitwise encoded threading status word #1 - do not hand edit!! |  | &lt;none&gt; |
| threading\_status\_2 | &lt;string&gt; | Bitwise encoded threading status word #2 - do not hand edit!! |  | &lt;none&gt; |
| threading\_status\_3 | &lt;string&gt; | Bitwise encoded threading status word #3 - do not hand edit!! |  | &lt;none&gt; |

The following settings allow high performance graphics settings to be tuned. It is recommended that you do not modify these in the preferences editor, but rather use the Display, Tuning option and then SAVE\_SETTINGS.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| gtune\_varray | &lt;integer&gt; | Whether or not to use vertex arrays | 0 - 2 | 0 |
| gtune\_vbo\_verts | &lt;integer&gt; | Whether or not to use VBOs for vertices | 0 - 2 | 0 |
| gtune\_vbo\_coords | &lt;integer&gt; | Whether or not to use VBOs for coordinates | 0 - 2 | 0 |
| gtune\_vbo\_limit | &lt;integer&gt; | How VBO usage is limited (explicit size in MBytes, or -1 for auto) | -1 - 1048576 | -1 |
| gtune\_vbo\_mult | &lt;integer&gt; | The number of GDSIZE cache blocks in a VBO | 1 - 1048576 | 1024 |
| gtune\_shader | &lt;integer&gt; | Whether or not to use shaders | 0 - 2 | 0 |
| gtune\_mbr | &lt;integer&gt; | Whether or not to use the MBR extension for VBOs | 0 - 3 | 0 |
| gtune\_gdsize | &lt;integer&gt; | Size of graphics data cache storage in KWords | 1 - 1048576 | 64 |

The following parameters can be used to preset [TRANSFER\_DATA](https://help.oasys-software.com/articles/project-primer/transfer-data) operations

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| transfer\_source\_file | &lt;string&gt; | Source model filename |  | &lt;none&gt; |
| transfer\_data\_type | &lt;list&gt; | One or more datatypes to be matched from the list | MAT, SECTION, EOS, HOURGLASS, TMAT | &lt;none&gt; |
| transfer\_match\_by | &lt;string&gt; | The method for matching items between source and target models | ID, NAME, BOTH, ALL | NAME |
| transfer\_action | &lt;string&gt; | Where in the target model to copy transferred data | CS, CO, CM, RO | CS |
| transfer\_name\_match | &lt;string&gt; | The name matching method used | T\_IN\_S, S\_IN\_T, EITHER, EXACT | EITHER |
| transfer\_superseded | &lt;string&gt; | What happens to superseded data | SAVE, DELETE | SAVE |
| transfer\_missing | &lt;string&gt; | Transfer missing items into target model | TRUE, FALSE | FALSE |
| transfer\_populate | &lt;string&gt; | items for populate during transfer | DISCRETE, JOINT, NONE | NONE |

The following control undo functionality

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| undo\_enabled | &lt;logical&gt; | Undo enabled | TRUE, FALSE | TRUE |
| undo\_deletion | &lt;logical&gt; | Turn on/off undo of deletion | TRUE, FALSE | TRUE |
| undo\_create\_entity | &lt;logical&gt; | Turn on/off undo of entity creation | TRUE, FALSE | TRUE |
| undo\_modify\_entity | &lt;logical&gt; | Turn on/off undo of modifying an entity | TRUE, FALSE | TRUE |
| undo\_merge\_nodes | &lt;logical&gt; | Turn on/off undo of merging nodes | TRUE, FALSE | TRUE |
| undo\_align\_elements | &lt;logical&gt; | Turn on/off undo of aligning elements | TRUE, FALSE | TRUE |
| undo\_split\_elements | &lt;logical&gt; | Turn on/off undo of splitting elements | TRUE, FALSE | TRUE |
| undo\_replace\_nodes | &lt;logical&gt; | Turn on/off undo of node replace | TRUE, FALSE | TRUE |
| undo\_coat\_shell | &lt;logical&gt; | Turn on/off undo of coat shell | TRUE, FALSE | TRUE |
| undo\_simple\_mesh | &lt;logical&gt; | Turn on/off undo of simple mesh | TRUE, FALSE | TRUE |
| undo\_tet\_mesh | &lt;logical&gt; | Turn on/off undo of tetrahedral mesh | TRUE, FALSE | TRUE |
| undo\_drag\_node | &lt;logical&gt; | Turn on/off undo of node dragging | TRUE, FALSE | TRUE |
| undo\_beam\_on\_nodes | &lt;logical&gt; | Turn on/off undo of beams creation on nodes | TRUE, FALSE | TRUE |
| undo\_binary\_format | &lt;logical&gt; | Use binary keywords format for undo files (faster i/o) | TRUE, FALSE | TRUE |
| undo\_renumber\_entity | &lt;logical&gt; | Turn on/off undo of renumbering entities | TRUE, FALSE | TRUE |
| undo\_parameter\_change | &lt;logical&gt; | Turn on/off undo of changing parameters while renumbering | TRUE, FALSE | TRUE |
| undo\_max\_percent\_memory | &lt;integer&gt; | Maximum percentage of memory to use for storing undo info | 0 - 100 | 5 |

The following control treatment of unicode

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| cjk\_unix\_font | &lt;string&gt; | Font to use for CJK text on unix machines |  | -misc-fixed-medium-r-normal-\*-12-\*-\*-\*-\*-\*-\*-\* |
| cjk\_windows\_font | &lt;string&gt; | Font to use for CJK text on windows machines |  | MS Gothic 10 |
| file\_encoding | &lt;string&gt; | Character encoding for script files | Latin-1, BIG5, EUC-CN, EUC-JP, EUC-KR, GB, GBK, ISO-2022-CN, ISO-2022-CN-EXT, ISO-2022-JP, ISO-2022-JP-2, ISO-2022-KR, JOHAB, Shift-JIS, UTF-8, UTF-16BE, UTF-16LE, UTF-16, UTF-32BE, UTF-32LE, UTF-32 | Latin-1 |

The following control automatic unit determination

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| configure\_model\_units | &lt;string&gt; | To configure model length unit. AUTO will determine whether length units are m or mm per model | AUTO, METRES, MM | AUTO |
| dimension\_limit\_for\_diagonal\_upper | &lt;real&gt; | If set, if model diagonal exceeds this value, model units presumed mm | 0.0 - 1e10 | 100.0 |
| dimension\_limit\_for\_diagonal\_lower | &lt;real&gt; | If model diagonal below this value, model units presumed m | 0.0 - 1e10 | 10.0 |
| dimension\_limit\_for\_max\_shell\_thickness | &lt;real&gt; | if set, if maximum struct shell thickness exceeds this value model units presumed mm | 0.0 - 1e10 | 0.5 |
| dimension\_limit\_for\_min\_shell\_thickness | &lt;real&gt; | if minimum struct shell thickness below this value model units presumed m | 0.0 - 1e10 | 0.1 |
| dimension\_limit\_for\_characteristic\_element\_length\_upper | &lt;real&gt; | if set, if characteristic element length above this value model units presumed mm | 0.0 - 1e10 | 2.0 |
| dimension\_limit\_for\_characteristic\_element\_length\_lower | &lt;real&gt; | if characteristic element length below this value model units presumed m | 0.0 - 1e10 | 0.5 |
| dimension\_limit\_for\_min\_density | &lt;real&gt; | if set, if minimum struct material density below this value model units presumed mm else m | 0.0 - 1e10 | 0.01 |

The following control element visibility

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| NODE\_drawn | &lt;string&gt; | Nodes drawn | ON, OFF | OFF |
| SOLID\_drawn | &lt;string&gt; | Solids drawn | ON, OFF | ON |
| BEAM\_drawn | &lt;string&gt; | Beams drawn | ON, OFF | ON |
| SHELL\_drawn | &lt;string&gt; | Shells drawn | ON, OFF | ON |
| TSHELL\_drawn | &lt;string&gt; | Thick shells drawn | ON, OFF | ON |
| DISCRETE\_drawn | &lt;string&gt; | Springs/dampers drawn | ON, OFF | ON |
| MASS\_drawn | &lt;string&gt; | Lumped masses drawn | ON, OFF | OFF |

**"oa\_pref" arguments valid for all programs**

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| file\_names | &lt;string&gt; | Controls input filename syntax. LSTC = d3\*, OASYS = job.ptf\* | OASYS, LSTC | OASYS |
| html\_application | &lt;string&gt; | Location of HTML browser |  | &lt;none&gt; |
| html\_application\_linux | &lt;string&gt; | Location of HTML browser for linux (use if the same oa\_pref file is used for windows and linux) |  | &lt;none&gt; |
| html\_application\_windows | &lt;string&gt; | Location of HTML browser for windows (use if the same oa\_pref file is used for windows and linux) |  | &lt;none&gt; |
| image\_format | &lt;string&gt; | Default image format | BMP\_8\_C, BMP\_8\_UN, PNG\_8, GIF\_8, BMP\_24\_UN, PNG\_24, JPG\_24, PPM\_24 | PNG\_24 |
| intel\_hd\_use\_shaders | &lt;string&gt; | Control usage of hardware shaders on Intel HD graphics cards | AUTO\_DETECT, FORCE\_OFF, FORCE\_ON | AUTO\_DETECT |
| javascript\_maximum\_memory\_size | &lt;integer&gt; | Maximum memory allocated for garbage collection (MB) | 1 - 4095 | 4095 |
| locale | &lt;string&gt; | Language and country locale to use (overrides system one) |  | &lt;none&gt; |
| manuals\_url | &lt;string&gt; | URL of the online manuals |  | help.oasys-software.com/articles/?readerUiPreview=1#! |
| maximise | &lt;logical&gt; | Maximise window when Program is started | TRUE, FALSE | TRUE |
| online\_manuals | &lt;logical&gt; | Open the online version of the manuals from Help buttons (TRUE) or open the local (offline) HTML copy (FALSE) | TRUE, FALSE | TRUE |
| pdf\_application | &lt;string&gt; | Location of PDF browser |  | &lt;none&gt; |
| pdf\_application\_linux | &lt;string&gt; | Location of PDF browser for linux (use if the same oa\_pref file is used for windows and linux) |  | &lt;none&gt; |
| pdf\_application\_windows | &lt;string&gt; | Location of PDF browser for windows (use if the same oa\_pref file is used for windows and linux) |  | &lt;none&gt; |
| placement | &lt;string&gt; | Location for initial window on multi-screen display | LEFT, CENTRE, RIGHT, BOTTOM, TOP, LEFT\_BOTTOM, LEFT\_TOP, CENTRE\_BOTTOM, CENTRE\_TOP, RIGHT\_BOTTOM, RIGHT\_TOP | &lt;none&gt; |
| start\_in | &lt;string&gt; | Directory to start Program in |  | &lt;none&gt; |
| temp\_file\_expiry | &lt;integer&gt; | Age in days after which a temporary filename can be reused, 0 = never | 0 - 10000 | 31 |
| show\_license\_warning | &lt;logical&gt; | Display Window containing License System messages | TRUE, FALSE | TRUE |
| post\_uses\_primer | &lt;logical&gt; | ADMIN/INSTALL pref which allows D3Plot, T/his to take an available Primer license | TRUE, FALSE | TRUE |
| save\_window\_positions | &lt;logical&gt; | Save position of undocked windows between sessions | TRUE, FALSE | TRUE |

The following control whether and how crash dump information is sent by email following a crash

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| cd\_compose\_email | &lt;logical&gt; | Whether or not to offer to compose an email for sending minidump files. | TRUE, FALSE | TRUE |
| cd\_email\_address | &lt;string&gt; | Email address in To: field of crash dump emails. |  | dyna.support@arup,com |
| cd\_cc\_addresses | &lt;string&gt; | Email address(es) in Cc: field of crash dump emails. |  | &lt;none&gt; |
| cd\_custom\_email | &lt;string&gt; | Custom method of sending emails. |  | &lt;none&gt; |
| cd\_dump\_directory | &lt;string&gt; | Directory in which to save crash dump files |  | &lt;none&gt; |
| cd\_email\_method | &lt;string&gt; | Method used to create crash dump emails. | BEST\_EFFORT, SYSTEM\_DEFAULT, OUTLOOK\_CLI, URL\_MAILTO, CUSTOM | BEST\_EFFORT |
| cd\_minidump\_file | &lt;string&gt; | Whether or not to create minidump files, and what to do with them. | NOT\_USED, SAVED\_ONLY, EMAILED\_ONLY, SAVED\_AND\_EMAILED | SAVED\_AND\_EMAILED |

The following control directories

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| home\_dir | &lt;string&gt; | "home" directory for user |  | &lt;none&gt; |
| manuals\_dir | &lt;string&gt; | Directory user manuals are installed in |  | &lt;none&gt; |
| temp\_dir | &lt;string&gt; | temporary directory for user |  | &lt;none&gt; |
| write\_checkpoint\_files | &lt;logical&gt; | Record checkpoint files for the PRIMER, D3PLOT or T/His sessions. | TRUE, FALSE | FALSE |
| checkpoint\_dir | &lt;string&gt; | Directory for checkpoint files. If omitted use cwd. |  | &lt;none&gt; |
| show\_checkpoint\_files | &lt;logical&gt; | Show checkpoint playback panel upon PRIMER, D3PLOT or T/His startup. | TRUE, FALSE | FALSE |

General graphics initialisation and settings.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| initial\_view\_orientation | &lt;string&gt; | Initial view orientation for the graphics window. | +XY, +YZ, +XZ, +ISO, -XY, -YZ, -XZ, -ISO | +XY |

The following options control graphical user interface

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| gui\_theme | &lt;string&gt; | Graphical User Interface (GUI) theme | LIGHT, DARK, CLASSIC, LEGACY | LIGHT |
| gui\_styling\_mode | &lt;string&gt; | Graphical User Interface (GUI) styling and decoration | NOT\_USED, TIME\_LIMIT, ALWAYS | TIME\_LIMIT |
| gui\_styling\_tlimit | &lt;integer&gt; | Graphical User Interface (GUI) menu repaint time limit to turn off decorations | 0 - 100000 | 500 |

The following control laser options

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| laser\_paper\_size | &lt;string&gt; | Default paper size | US, A4 | A4 |
| laser\_orientation | &lt;string&gt; | Default page orientation | Portrait, Landscape | Landscape |
| laser\_top\_margin | &lt;real&gt; | Top margin size in mm |  | 10 |
| laser\_bottom\_margin | &lt;real&gt; | Bottom margin size in mm |  | 30 |
| laser\_left\_margin | &lt;real&gt; | Left margin size in mm |  | 20 |
| laser\_right\_margin | &lt;real&gt; | Right margin size in mm |  | 10 |

The following control menu and mouse attributes

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| display\_factor | &lt;real&gt; | Factor on display size (0.5 - 2.0, automatic if undefined) | 0.5 - 2.0 | 1.2 |
| display\_brightness | &lt;real&gt; | Menu brightness (0.0-1.0) | 0.0 - 1.0 | 1.0 |
| display\_saturation | &lt;real&gt; | Menu colour saturation (0.0-1.0) | 0.0 - 1.0 | 1.0 |
| button\_gradation | &lt;real&gt; | Button shade gradation (0.0-1.0) | 0.0 - 1.0 | 0.0 |
| dv\_sync\_windows | &lt;string&gt; | Dyn view method(s) for synchronising windows | ICON, ICON+CAPS, ICON+NUM, ICON+CAPS+NUM | ICON+CAPS |
| dv\_left\_shift | &lt;string&gt; | Dyn view action for shift + Left mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ROTATION\_XYZ |
| dv\_middle\_shift | &lt;string&gt; | Dyn view action for shift + Middle mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | TRANSLATION |
| dv\_right\_shift | &lt;string&gt; | Dyn view action for shift + Right mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ZOOM\_UP\_+VE |
| dv\_left\_ctrl | &lt;string&gt; | Dyn view action for ctrl + Left mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ROTATION\_XYZ |
| dv\_middle\_ctrl | &lt;string&gt; | Dyn view action for ctrl + Middle mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | TRANSLATION |
| dv\_right\_ctrl | &lt;string&gt; | Dyn view action for ctrl + Right mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ZOOM\_UP\_+VE |
| dv\_left\_both | &lt;string&gt; | Dyn view action for shift+ctrl + Left mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ROTATION\_XYZ |
| dv\_middle\_both | &lt;string&gt; | Dyn view action for shift+ctrl + Middle mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | TRANSLATION |
| dv\_right\_both | &lt;string&gt; | Dyn view action for shift+ctrl + Right mouse | ROTATION\_XYZ, ROTATION\_XY, ROTATION\_Z, ROTATION\_SPHERE, TRANSLATION, ZOOM\_UP\_+VE, ZOOM\_DOWN\_+VE, UNUSED | ZOOM\_UP\_+VE |
| dv\_shift\_action | &lt;string&gt; | Dynamic viewing mode for shift + mouse button | CURRENT, WIREFRAME, FREE\_EDGE, UNUSED | CURRENT |
| dv\_ctrl\_action | &lt;string&gt; | Dynamic viewing mode for ctrl + mouse button | CURRENT, WIREFRAME, FREE\_EDGE, UNUSED | WIREFRAME |
| dv\_both\_action | &lt;string&gt; | Dynamic viewing mode for shift+ctrl + mouse button | CURRENT, WIREFRAME, FREE\_EDGE, UNUSED | FREE\_EDGE |
| font\_cache | &lt;logical&gt; | Whether to use cached fonts on Linux machines with no core X11 fonts loaded | TRUE, FALSE | TRUE |
| font\_quality | &lt;string&gt; | The quality of font rendering in the graphical user interface | PLAIN, ANTI-ALIAS | ANTI-ALIAS |
| font\_scaling | &lt;string&gt; | Whether text in GUI buttons can be scaled down to fit (TRUE means both width and height) | FALSE, WIDTH, HEIGHT, TRUE | WIDTH |
| font\_silent | &lt;logical&gt; | whether to write explanatory text if wanted fonts are not found | TRUE, FALSE | FALSE |
| font\_size | &lt;string&gt; | Menu font size | TINY, SMALL, DEFAULT, LARGE, HUGE | DEFAULT |
| font\_type | &lt;string&gt; | Menu font typeface and strength | HELVETICA, HELVETICA-BOLD, TIMES, TIMES-BOLD, COURIER, COURIER-BOLD | HELVETICA |
| unix\_prop\_font | &lt;string&gt; | GUI proportional font for menu panels on Linux/Unix |  | Helvetica |
| unix\_mono\_font | &lt;string&gt; | GUI monospaced font for listing boxes on Linux/Unix |  | Courier New |
| windows\_prop\_font | &lt;string&gt; | GUI proportional font for menu panels on Windows |  | Helvetica |
| windows\_mono\_font | &lt;string&gt; | GUI monospaced font for listing boxes on Windows |  | Courier New |
| left\_handed | &lt;string&gt; | Left handed switching of mouse and/or keyboard | NONE, MOUSE, KEYBOARD, ALL | NONE |
| zoom\_factor | &lt;real&gt; | Zoom Factor for mouse wheel (0.01-1.0) | 0.01 - 1.0 | 0.05 |
| czoom\_factor | &lt;real&gt; | Factor for right mouse dynamic zoom (0.01-0.2) | 0.01 - 0.2 | 0.05 |
| kzoom\_factor | &lt;real&gt; | Factor for +/- keyboard short-cut keys | 0.01 - 100.0 | 2.0 |
| menu\_dragging\_mode | &lt;string&gt; | Mode used when moving menu panels with the mouse | WIREFRAME, OPAQUE | WIREFRAME |
| mouse\_3d\_rotation\_factor | &lt;real&gt; | Factor applied to the speed of rotation when using a 3D mouse |  | 1.0 |
| mouse\_3d\_pan\_factor | &lt;real&gt; | Factor applied to the speed of panning when using a 3D mouse |  | 1.0 |
| mouse\_3d\_zoom\_factor | &lt;real&gt; | Factor applied to the speed of zooming when using a 3D mouse |  | 1.0 |
| mouse\_action\_middle\_button | &lt;string&gt; | Set the action for the middle mouse key during picking | APPLY, REJECT, DESELECT | REJECT |
| mouse\_action\_right\_button | &lt;string&gt; | Set the action for the right mouse key during picking | APPLY, REJECT, DESELECT | DESELECT |

The following control treatment of recent files popups

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| recent\_files\_dropdown | &lt;string&gt; | Turn the recent files popup on or off | OFF, ON | ON |
| recent\_files\_max\_but | &lt;integer&gt; | Maximum number of buttons displayed in a recent files popup | 1 - 50 | 10 |
| recent\_files\_max\_char | &lt;integer&gt; | Maximum number of characters displayed on each recent files button | 1 - 512 | 50 |

The following control treatment of unicode

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| cjk\_unix\_font | &lt;string&gt; | Font to use for CJK text on unix machines |  | -misc-fixed-medium-r-normal-\*-12-\*-\*-\*-\*-\*-\*-\* |
| cjk\_windows\_font | &lt;string&gt; | Font to use for CJK text on windows machines |  | MS Gothic 10 |
| file\_encoding | &lt;string&gt; | Character encoding for script files | Latin-1, BIG5, EUC-CN, EUC-JP, EUC-KR, GB, GBK, ISO-2022-CN, ISO-2022-CN-EXT, ISO-2022-JP, ISO-2022-JP-2, ISO-2022-KR, JOHAB, Shift-JIS, UTF-8, UTF-16BE, UTF-16LE, UTF-16, UTF-32BE, UTF-32LE, UTF-32 | Latin-1 |

The drive mappings allow PRIMER to convert equivalent folder names from Windows to Unix and visa versa. This is currently only in use for the JavaScript function DriveMapFilename for D3PLOT and T/HIS.

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| drive\_a | &lt;string&gt; | Mapping from Windows drive A: to unix path |  | &lt;none&gt; |
| drive\_b | &lt;string&gt; | Mapping from Windows drive B: to unix path |  | &lt;none&gt; |
| drive\_c | &lt;string&gt; | Mapping from Windows drive C: to unix path |  | &lt;none&gt; |
| drive\_d | &lt;string&gt; | Mapping from Windows drive D: to unix path |  | &lt;none&gt; |
| drive\_e | &lt;string&gt; | Mapping from Windows drive E: to unix path |  | &lt;none&gt; |
| drive\_f | &lt;string&gt; | Mapping from Windows drive F: to unix path |  | &lt;none&gt; |
| drive\_g | &lt;string&gt; | Mapping from Windows drive G: to unix path |  | &lt;none&gt; |
| drive\_h | &lt;string&gt; | Mapping from Windows drive H: to unix path |  | &lt;none&gt; |
| drive\_i | &lt;string&gt; | Mapping from Windows drive I: to unix path |  | &lt;none&gt; |
| drive\_j | &lt;string&gt; | Mapping from Windows drive J: to unix path |  | &lt;none&gt; |
| drive\_k | &lt;string&gt; | Mapping from Windows drive K: to unix path |  | &lt;none&gt; |
| drive\_l | &lt;string&gt; | Mapping from Windows drive L: to unix path |  | &lt;none&gt; |
| drive\_m | &lt;string&gt; | Mapping from Windows drive M: to unix path |  | &lt;none&gt; |
| drive\_n | &lt;string&gt; | Mapping from Windows drive N: to unix path |  | &lt;none&gt; |
| drive\_o | &lt;string&gt; | Mapping from Windows drive O: to unix path |  | &lt;none&gt; |
| drive\_p | &lt;string&gt; | Mapping from Windows drive P: to unix path |  | &lt;none&gt; |
| drive\_q | &lt;string&gt; | Mapping from Windows drive Q: to unix path |  | &lt;none&gt; |
| drive\_r | &lt;string&gt; | Mapping from Windows drive R: to unix path |  | &lt;none&gt; |
| drive\_s | &lt;string&gt; | Mapping from Windows drive S: to unix path |  | &lt;none&gt; |
| drive\_t | &lt;string&gt; | Mapping from Windows drive T: to unix path |  | &lt;none&gt; |
| drive\_u | &lt;string&gt; | Mapping from Windows drive U: to unix path |  | &lt;none&gt; |
| drive\_v | &lt;string&gt; | Mapping from Windows drive V: to unix path |  | &lt;none&gt; |
| drive\_w | &lt;string&gt; | Mapping from Windows drive W: to unix path |  | &lt;none&gt; |
| drive\_x | &lt;string&gt; | Mapping from Windows drive X: to unix path |  | &lt;none&gt; |
| drive\_y | &lt;string&gt; | Mapping from Windows drive Y: to unix path |  | &lt;none&gt; |
| drive\_z | &lt;string&gt; | Mapping from Windows drive Z: to unix path |  | &lt;none&gt; |

The following control workflows functionality

| **Preference** | **Type** | **Description** | **Valid arguments** | **Default** |
| --- | --- | --- | --- | --- |
| workflow\_definitions\_directory | &lt;string&gt; | Location that will be scanned for Workflow definitions |  | &lt;none&gt; |
| workflow\_only\_use\_specified\_directory | &lt;logical&gt; | Only scan location set by preference oasys\*workflow\_definitions\_directory for Workflow definitions (if it is set) | TRUE, FALSE | FALSE |
| workflow\_user\_data\_directory\_name | &lt;string&gt; | Name of a folder to search in for workflow user data |  | &lt;none&gt; |
| workflow\_auto\_open\_post\_menu | &lt;logical&gt; | Automatically open the Workflow menu in D3PLOT or T/HIS when reading in a model that has workflow data | TRUE, FALSE | FALSE |
| workflow\_max\_upward\_folder\_search\_depth | &lt;integer&gt; | Maximum number of folders to search up to look for workflow user data | 0 - 100 | 4 |

 command-line-arguments-to-primer.md