####  More Details About Meshing 2D Seatbelt Elements.

2D seatbelt elements, introduced in Ansys LS-DYNA 971R4, can be meshed by PRIMER but they are quite intricate and the following explanation has been added at the request of users to try to explain in more details how this is done.

#####  What is a 2D seatbelt element, and how does it work?

Ansys LS-DYNA imports these elements using the \*ELEMENT\_SEATBELT card which traditionally has been used to define 1D seatbelt elements, however if nodes 3 and 4 are defined on this card it becomes a 2D seatbelt element. Confusingly 2D seatbelt elements are actually shells, albeit special ones, and their label range forms part of that used by \*ELEMENT\_SHELL . Therefore PRIMER is also forced to treat them as shells to avoid conflict. The following summary may help:

* 2D seatbelt elements are defined on the \*ELEMENT\_SEATBELT card by defining nodes N3 and N4.
* Internally they are actually SHELL elements, and their labels must not clash with existing shells.
* They should refer to a conventional \*PART card.
* The \*PART card should refer to a \*SECTION\_SHELL card (  ***not***    *\*SECTION\_SEATBELT*  ) which should be unique to each stretch of 2D belt elements.
* The \*PART card should refer to a \*MAT\_SEATBELT definition.
* \*ELEMENT\_SEATBELT\_RETRACTOR and \*ELEMENT\_SEATBELT\_SLIPRING definitions must also obey special 2D syntax, using sets of nodes and elements.
* A node set (field &lt; edgset &gt;) on the \*SECTION\_SHELL card is used to tell Ansys LS-DYNA where the end of the belt is, and the ordering of nodes across it.
* The ordering of nodes, seatbelt elements and the sets of these used in retractors and sliprings must be topologically consistent throughout the belt.

Inside the Ansys LS-DYNA keyword reader the following happens when these elements are read in:

* The N parallel lines of 2D \*ELEMENT\_SEATBELT elements making up a belt are used to generate N+1 parallel lines of conventional 1D seatbelt elements.
* The 2D seatbelt elements, which are really shells, are retained as shells and are given notional non-structural properties. The properties used are not known, but their job is to hold the parallel lines of 1D belt elements together during the analysis and also to provide a 2D contact between belt and dummy.
* 2D retractors and sliprings are also decomposed into N+1 parallel rows of their 1D equivalents, and the rows of 1D seatbelt elements pass through these.
* During the analysis these rows of 1D belt elements carry the force in the seatbelt, although the details of how they work with the 2D shells are not known.
* Examining the output during post-processing reveals how this decomposition from 2D belt items to their 1D equivalents has taken place.

| The following image, showing (during post-processing) the shoulder slipring detail of a model containing a 2D seatbelt with 2 rows of "belt" shells demonstrates how this decomposition has taken place. The three sliprings and parallel rows of 1D belt elements superimposed on the shell mesh (green) are clearly visible.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/expl_2d_a.png) |
| --- |

#####  How 2D belts are meshed in PRIMER

During the fitting operation PRIMER maintains a "scratch" belt definition showing the number of parallel rows of elements that the user has defined. During 2D belt meshing these simply become 2D \*ELEMENT\_SEATBELT definitions, but the following extra work has to be performed:

* At any retractor and slipring positions a \*SET\_NODE is required to define the structure to which the retractor/slipring is attached. This is defined as field sbrnid on the retractor and slipring cards using -ve label to designate "set for 2D element".
* Sets of shell elements ( \*SET\_SHELL ) have to be created (data field sbid on the retractor card, sbid1 and sbid2 on the slipring card, all using -ve labels) to define the row of 2D seatbelt elements, which are really shells, adjacent the the retractor/slipring.
* At any free end of the belt PRIMER will create a nodal rigid body to act as a rigid fixing using the set of nodes at the free end, unless the end node location is already on a rigid part in which case these nodes become "extra nodes" on that rigid part instead.
* PRIMER will also place a node set at a free end of the belt into field edgset on the \*SECTION\_SHELL card of the belt elements. This is required to tell LS\_DYNA both where the end of the belt is, and what its topology and orientation are. Since edgset can only refer to a single belt this explains why a separate \*SECTION\_SHELL card is required for every 2D belt in a model. If a retractor has been used PRIMER will use its node set sbrnid , otherwise it will use the node set of the free end.

Special care has to be taken to ensure that the topology of all elements and the ordering nodes in the belt, and in all sets, is consistent so thatAnsys LS-DYNA can rely on it to determine the belt geometry.

Special geometrical rules also have to be applied at slipring locations to make sure that the 2D belt mesh is continuous through them and aligned sensibly. This has been described previously in " [The effect of sliprings on the belt path](the-effect-of-sliprings-on-the-belt-path.md#slipring_special_cases)".

#####  Special considerations affecting node set numbering on 2d sliprings.

There is a bug in the Ansys LS-DYNA structured format which means that the label of the node set NSID used to define the location of a 2d slipring cannot be more than 7 digits long. This limitation will be removed in future versions of Ansys LS-DYNA, and is also not relevant if "wide" format is used. In the meantime PRIMER applies the following rules:

* It maintains separate internal label ranges for "node sets used for 2d sliprings" and "node sets used for everything else in the belt".
* In the case of remeshing a belt where node sets for sliprings are 7 or fewer digits, and all others 8 or more digits, the separation is maintained so that new sliprings retain their small node set labels.
* When meshing from scratch you are free to set separate initial labels for "node sets generally" and "node sets used for 2d sliprings".

In PRIMER V12, which can handle "wide" format these restrictions are removed if the model is using large (ie &gt; 8 digit) labels, and they will also be made Ansys LS-DYNA version dependent once a version is released in which this bug has been fixed.

#####  Output from 2D Seatbelt elements

Time-history output of 2D seatbelt data appears in the ascii file sbtout , generated by \*DATABASE\_SBTOUT , and has changed slightly over time:

* In LS971R4.2.1 and older output reveals how the internal representation of these belts is split up into parallel 1D rows as above.
* In later Ansys LS-DYNA versions output is merged back into single sliprings and retractors, as it appears in the input.
* There is an undocumented data field 1p1dblt in row 2, column 7 of the \*CONTROL\_OUTPUT card which will cause output to revert back to the raw 1D output if set to 1.
* LSTC recommend that forces in 2D seatbelt elements are obtained by creating \*DATABASE\_CROSS\_SECTION definitions cutting the belt. From release 11 PRIMER can generate these automatically as part of the belt fitting and meshing process.

Output of data for plotting is possible because Ansys LS-DYNA will generate beams on top of "discrete" elements, which includes 1D seatbelt elements, if the beam field in column 3 of the \*DATABASE\_D3PLOT card is set correctly. Therefore beam plotting can be used to visualise the forces in the belt elements.

[Previous](changing-and-remeshing-an-existing-belt-definition.md)  |  [Next](contact-creating-a-contact-between-belt-and-dummy.md)