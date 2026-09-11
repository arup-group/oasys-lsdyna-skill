##  Appendix A: Standard Object Names and Acronyms

Inside PRIMER every class of object (nodes, parts, solids, etc...) has a standard "acronym" that is used when labelling items on the screen, and which can sometimes be needed when the user types in a specific object label. For example the acronym for a node is "N", thus node 27 will always be labelled as "N27".

In addition, when PRIMER has more than one model in memory it is necessary to prefix the object label with its model number. The acronym for a model is "M", thus if node 27 exists in both models 1 and 3 the two labels will be respectively:

| M1/N27 | (Model #1, Node #27) |
| --- | --- |
| M3/N27 | (Model #3, Node #27) |

You only have to remember these when using the Key in method of defining objects (section 6.2), and even then only when the object type is not implicit. For example to select node 10 in model #1 you will need to "key in":

| 10 | If both object type (NODE), and the model id (1) are preset. |
| --- | --- |
| N10 | If object type is ambiguous, but model id is preset. |
| M1/N10 | If neither object type or model id are preset |

In most situations the &lt;model&gt; and &lt;object type&gt; are implicit: either because of the context of the operation, or because of prior selections, or because of "filter" settings, and only numbers are required.

As well as acronyms every object has a "formal" name that is used when referring to it in error messages, diagnostic output, panel buttons, etc. This is the same as its Ansys LS-DYNA keyword where relevant, although PRIMER adds a few categories which are not found in Ansys LS-DYNA input.

The complete list of object types, their standard acronyms and their formal names is:

|  |  |  |
| --- | --- | --- |
|  |  |  |  |
| **Model** | M | MODEL |
|  |  |  |
| **Include File** | INC | INCLUDE FILE |
|  |  |  |  |
| **Airbag definition** | ABAG | AIRBAG |
|  | Interaction | AINT | AIRBAG\_INTERACTION |
|  | Reference Geometry | ARDT | AIRBAG\_REFERENCE |
|  | Shell Reference Geometry | ASRG | AIRBAG\_SHELL\_REFERENCE |
| **ALE Arbitrary Lagrange/Euler** | ALEX | ALE |
|  | Multi-Material Group | ALMM | ALE\_MULTI-MATERIAL\_GROUP |
|  | Reference System Curve | ALRC | ALE\_REFERENCE\_SYSTEM\_CURVE |
|  | Reference System Node | ALRN | ALE\_REFERENCE\_SYSTEM\_NODE |
|  | Reference Syetem Switch | ALRS | ALE\_REFERENCE\_SYSTEM\_SWITCH |
|  | FSI Switch MMG | ALFS | ALE\_FSI\_SWITCH\_MMG |
| **Boundary conditions (general)** | BNDY | BOUNDARY |
|  | Prescribed Motion | BPRM | PRESCRIBED\_MOTION |
|  | Spc | BSPC | SPC |
| **Component** | COMP | COMPONENT |
|  | Gebod | CGBD | COMPONENT\_GEBOD |
|  | Hybrid III | CHB3 | COMPONENT\_HYBRIDIII |
| **Constrained (generic types)** | CNST | CONSTRAINED |
|  | Generalized Weld | GWLD | GENERALIZED\_WELD |
|  | Interpolation | ITRP | INTERPOLATION |
|  | Joint | JNTC | JOINT |
|  | Joint Stiffness | JSTF | JOINT\_STIFFNESS |
|  | Lagrange in Solid | LAIS | LAGRANGE\_IN\_SOLID |
|  | Linear | LINC | LINEAR |
|  | Nodal Rigid Body | NRBC | NODAL\_RIGID\_BODY |
|  | Node Set | NSET | NODE\_SET |
|  | Points | PNTS | POINTS |
|  | Rivet | RIVT | RIVET |
|  | Spotweld | SWLD | SPOTWELD |
|  | Spline | SPLN | SPLINE |
| **Generalized stiffnesses** | JSTF | GENERALIZED |
| **Contact (generic)** | CGEN | CONTACT |
|  | "Sliding" (general 3D) | CONT | CONTACT\_SLIDING |
|  | Geometric | CENT | CONTACT\_GEOMETRIC |
|  | Gebod | CGEB | CONTACT\_GEBOD |
|  | Interior | CINT | CONTACT\_INTERIOR |
|  | Rigid Surface | CRIG | CONTACT\_RIGID\_SURFACE |
|  | 1D (rebar) | C\_1D | CONTACT\_1D |
|  | 2D (slide lines) | C\_2D | CONTACT\_2D |
|  | Auto Move | C\_AM | CONTACT\_AUTOMOVE |
|  | Coupling | C\_CO | CONTACT\_COUPLING |
|  | Guided Cable | C\_GC | CONTACT\_GUIDED\_CABLE |
| **Control cards (all)** | CTRL | CONTROL |
| **Damping (general)** | DAMP | DAMPING |
|  | Global | GDMP | DAMPING\_GLOBAL |
|  | Modal | MDMP | DAMPING\_MODAL |
| **Database (general)** | DBAS | DATABASE |
|  | Ascii | DASC | DATABASE\_ASCII |
|  | Binary | DBIN | DATABASE\_BINARY |
|  | Extent ascii | DAEX | DATABASE\_EXTENT\_ASCII |
|  | Extent binary | DBEX | DATABASE\_EXTENT\_BINARY |
|  | Extent ssstat | DASS | DATABASE\_EXTENT\_SSSTAT |
|  | History | DH | DATABASE\_HISTORY |
|  | &lt;Scalar Item&gt; | DSCA | DATABASE\_&lt;scalar item&gt; |
|  | Cross-section | XSEC | DATABASE\_CROSS\_SECTION |
|  | Nodal force group | NFGR | DATABASE\_NODAL\_FORCE\_GROUP |
|  | PWP Flow | PWPF | DATABASE\_PWP\_FLOW |
|  | Tracer particles | TRAC | DATABASE\_TRACER |
| **Define (generic)** | DEFN | DEFINE |
|  | Alebag Bag | ALBG | DEFINE\_ALEBAG\_BAG |
|  | Alebag Hole | ALHL | DEFINE\_ALEBAG\_HOLE |
|  | Alebag Inflator | ALIN | DEFINE\_ALEBAG\_INFLATOR |
|  | Box | BOX | DEFINE\_BOX |
|  | Connection Properties | CPRP | DEFINE\_CONNECTION+PROPERTIES |
|  | Coordinate System | CSYS | DEFINE\_COORDINATE |
|  | Contact Volume | CVOL | DEFINE\_CONTACT\_VOLUME |
|  | Staged Construction Part | DSCP | DEFINE\_STAGED\_CONSTRUCTION\_PART |
|  | Construction Stages | DSTG | DEFINE\_CONSTRUCTION\_STAGES |
|  | Death Times | DTIM | DEFINE\_DEATH\_TIMES |
|  | Friction | FRIC | DEFINE\_FRICTION |
|  | Hex Spotweld Assembly | HSWA | DEFINE\_HEX\_SPOTWELD\_ASSEMBLY |
|  | Load Curve | LC | DEFINE\_CURVE |
|  | Curve Entity | LENT | DEFINE\_CURVE\_ENTITY |
|  | Curve Compensation | LCMP | DEFINE\_CURVE\_COMPENSATION |
|  | Curve Feedback | LFBK | DEFINE\_CURVE\_FEEDBACK |
|  | Curve Trim | LTRM | DEFINE\_CURVE\_TRIM |
|  | Spring/Damper Orientation Vector | SDOV | DEFINE\_SD\_ORIENTATION |
|  | Set Adaptive | STAD | DEFINE\_SET\_ADAPTIVE |
|  | Transformation | TFRM | DEFINE\_TRANSFOR ATION |
|  | Table | TABL | DEFINE\_TABLE |
|  | Vector | VECT | DEFINE\_VECTOR |
|  | Spotweld Failure Resultants | SWFR | DEFINE\_SWFR |
|  | Spotweld Rupture Parameter | SWRP | DEFINE\_SWRS |
|  | Spotweld Rupture Stress | SWRS | DEFINE\_SWRP |
| **Deformable to Rigid** | DTOR | DEFORMABLE\_TO\_RIGID |
| **Element (generic)** | EL | ELEMENT |
|  | Solid | H | SOLID |
|  | Beam | B | BEAM |
|  | Shell | S | SHELL |
|  | Shell Source Sink | SHSS | SH\_SS |
|  | Thick shell | T | TSHELL |
|  | Discrete (spring/damper) | D | DISCRETE |
|  | Lumped inertia | IN | INERTIA |
|  | Lumped mass | MA | MASS |
|  | Mass Part | MP | MASS\_PART |
|  | Seatbelt | SB | SEATBELT |
|  | Accelerometer | ACC | ACCELEROMETER |
|  | Pretensioner | PRET | PRETENSIONER |
|  | Retractor | RETR | RETRACTOR |
|  | Sensor | SENS | SENSOR |
|  | Slipring | SLIP | SLIPRING |
|  | SPH | SPH | SPH |
|  | Trim | TRIM | TRIM |
| **Encrypted** | CRYP | ENCRYPTED |
| **Equation of State** | EOS | EOS |
| **Hourglass** | HG | HOURGLASS |
| **Initial conditions (generic)** | INIT | INITIAL |
|  | Stress Section | INSS | INITIAL\_STRESS\_SECTION |
|  | Axial Force Beam | IAFB | INITIAL\_AXIAL\_FORCE\_BEAM |
| **Integration Beam** | INTB | INTEGRATION\_BEAM |
| **Integration Shell** | INTS | INTEGRATION\_SHELL |
| **Interface** | IFCE | INTERFACE |
| **Loads (general)** | LOAD | LOAD |
|  | ALE Convection | LALE | LOAD\_ALE\_CONVECTION |
|  | Moving Pressure | LMOV | LOAD\_MOVING\_PRESSURE |
|  | Body | LBOD | LOAD\_BODY |
|  | Segment | LSEG | LOAD\_SEGMENT |
|  | Segment Set | LSSG | LOAD\_SEGMENT\_SET |
|  | Shell | LSHE | LOAD\_SHELL |
|  | Segment Nonuniform | LSGN | LOAD\_SEGMENT\_NONUNIFORM |
|  | Segment Set Nonuniform | LSSN | LOAD\_SEGMENT\_SET\_NONUNIFORM |
|  | Thermal Variable Shell | LTVS | LOAD\_THERMAL\_VARIABLE\_SHELL |
| **Material (structural)** | MAT | MATERIAL |
|  | (Thermal) | TMAT | THERMAL\_MATERIAL |
| **Node** | N | NODE |
|  | Node Scalar | N\_SC | NODE\_SCLAR |
|  | Node Rigid Surface | N\_RS | NODE\_RIGID\_SURFACE |
|  | Node Transform | N\_TR | NODE\_TRANSFORM |
| **Parameter** | PARM | PARAMETER |
| **Part** | P | PART |
| **Part Adaptive Failure** | PADF | PART\_ADAPTIVE\_FAILURE |
| **Part Modes** | PMOD | PART\_MODES |
| **Part Senor** | PSEN | PART\_SENSOR |
| **Part Move** | PMOV | PART\_MOVE |
| **Perturbation** | PERT | PERTURBATION |
| **Rail (general)** | RAIL | RAIL |
|  | Train | RTRN | RAIL\_TRAIN |
|  | Track | RTRK | RAIL\_TRACK |
| **Rigid (stone) walls** | WALL | RIGIDWALL |
| **Section** | SECT | SECTION |
| **Segment (for contact, etc)** | SEG | SEGMENT |
| **Sensor (general)** | SNSR | SENSOR |
|  | Control | SCON | SENSOR\_CONTROL |
|  | Switch | SSWT | SENSOR\_SWITCH |
|  | Define | SDEF | SENSOR\_DEFINE |
| **Set (generic)** | SET | SET |
|  | Beam | S\_BM | SET\_BEAM |
|  | Discrete | S\_DS | SET\_DISCRETE |
|  | Multi-Material Group | S\_MM | SET\_MULTI-MATERIAL\_GROUP |
|  | Node | S\_NO | SET\_NODE |
|  | Part | S\_PT | SET\_PART |
|  | Segment | S\_SG | SET\_SEGMENT |
|  | 2D Segment | S\_2D | SET\_2D\_SEGMENT |
|  | Shell | S\_SH | SET\_SHELL |
|  | Solid | S\_SO | SET\_SOLID |
|  | Thick shell | S\_TS | SET\_TSHELL |
| **Termination** | TERM | TERMINATION |
| **Translate (Nastran, etc)** | TRAN | TRANSLATE |
| **User-defined data/subroutines** | USER | USER |


```

```


The following object names are unique to PRIMER, although they can be written to an Ansys LS-DYNA input deck after the \*END card:

|  |  |  |
| --- | --- | --- |
|  |  |  |  |
| **Airbag "Origami"** | ORIG | ORIGAMI |
|  | Fold defn | FOLD | FOLD |
|  | Orientation | ORNT | ORIENTATION |
| **Assembly (subset)** | SASS | ASSEMBLY |
| **Assign Mass** | ASSM | ASSIGN MASS |
| **Connection** | CONX | CONNECTION |
| **Dummy definition** | DUMM | DUMMY |
|  | A ssembly | ASSY | ASSEMBLY |
| **Headform** | HEAD | HEADFORM |
|  | Target Point | TARG | TARGET POINT |
|  | Headform Position | POSN | HEADFORM POSITION |
| **IP Pendulum** | IPPI | IP Pendulum |
| **Group** | GROP | GROUP |
| **Mechanism** | MECH | MECHANISM |
|  | Connection | MCON | CONNECTION |
|  | Point | MPNT | POINT |
|  | Child | MMCH | CHILD |
| **Seatbelt fitting** | BDEF | SBELT Defn |

[Previous](plain-versus-anti-aliased-fonts.md)  |  [Next](bi-dummy-tree-file-format.md)