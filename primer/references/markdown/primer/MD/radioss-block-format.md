###  RADIOSS Block Format

The RADIOSS Translator function is aimed specifically at translating RADIOSS starter and engine files into Ansys LS-DYNA keyword format data. The block format is the default format for the RADIOSS translator.

| ![](../Storage/primer-22-1/primer_links/appen_6/radfig1.gif) | The RADIOSS translator is invoked identically to all other formats read into PRIMER. Please refer to [MODEL &gt; READ](model-read.md) of the main manual for details on the READ function, remembering to select the RADIOSS sub-type.<br> <br>For a translation the starter file must be present. An engine file can optionally be selected. The generic file extension for a starter file is 00 (Radioss starter files usually end with d00 or D00), but this can easily be modified in the file selector panel. Once the correct file has been selected and the APPLY button pushed, another window will be created which allows an engine file to be selected and some options to be set. |
| --- | --- |

| ![RADIOSS Engine file input](../Storage/primer-22-1/primer_links/appen_6/radfig8.gif)The buttons in the Radioss Translation Defaults box are as follows:<br> <br>APPLY accept the defaults in the panel and proceed with the translation.<br> <br>DISMISS terminate the translation process, returning to the generic READ panel.<br> <br>HELP will create a message box full of useful information about the function of this panel.<br> <br>READ ENGINE FILE button can be checked to select an engine file by either typing in the name in the text box or by pressing the button which will bring up the file selection box. Engine files by default have the extension 01 (Radioss engine files usually end with d01 or D01). The engine file is translated by default as long as a \*01 file exists that corresponds to the \*00 starter file.<br> <br>CONVERT \_GENERAL sets to \_LIST   can be used to convert sets that use the \_GENERAL option to \_LIST sets.<br> <br>Translate ADMAS to? can be used to specify the method of translation for /ADMAS cards. |
| --- |

####  Current known issues

* Not all options are supported for defining groups and surfaces.
* Only a small number of materials are translated at present.

####  Notes on specific keywords

Please see the following table which uses the following colours to indicate how well supported the keyword is.

| Not supported |
| --- |
| Limited support. A small subset of the options is supported (details given) |
| Reasonable support. Most options supported (details given) |
| Radioss 4.4 only - Reasonable support (details given) |
| Fully supported |
| Radioss 4.4 only - Fully supported |

#####  Starter file

| **Keyword** | **Notes** |
| --- | --- |
| /ACCEL | Accelerometers are translated to \*DATABASE\_HISTORY\_NODE\_LOCAL\_ID. <br> **Note that Fcut is not translated and the output will not be filtered.** |
| /ADMAS | Masses are translated to \*ELEMENT\_MASS. Additionally so you can tell which masses are created for each original /ADMAS card, a \*GROUP is created for each /ADMAS containing the \*ELEMENT\_MASS masses created. |
| /ANALY | Not supported. |
| /BCS | /BCS cards using a node group will be translated to \*BOUNDARY\_SPC\_SET\_ID. Any secondary nodes will be translated to \*BOUNDARY\_SPC\_NODE. |
| /BEAM | Translated to \*ELEMENT\_BEAM. |
| /BRICK | Translated to \*ELEMENT\_SOLID. |
| /BRIC20 | Translated to \*ELEMENT\_SOLID. Midside nodes are ignored. |
| /CLOAD | /CLOAD cards using a node group will be translated to \*LOAD\_NODE\_SET. Any secondary nodes will be translated to \*LOAD\_NODE\_POINT. **Note that the sensor input is not translated** . |
| /CYL\_JOINT | Not supported. |
| /DEF\_SHELL | Element formulation value is set to 2 (Belytschko-Tsay). If Ishell in input deck &lt;&gt; 1 (Belytschko), a warning is issued. |
| /DEF\_SOLID | A warning is issued and the element formulation value set to 1. |
| /END | Anything after /END is ignored. |
| /FUNCT | Translated to \*DEFINE\_CURVE. |
| /GRAV | Not supported. |
| /GRBEAM | All types are supported. <br>BEAM is translated to a \*SET\_BEAM. <br>PART is translated to a \*SET\_BEAM\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_BEAM\_GENERAL using option BOX (box is created). <br>SUBSET, MAT and PROP are translated to a \*SET\_BEAM\_GENERAL using option PART (an equivalent list of parts is generated). |
| /GRBRIC | All types are supported. <br>BRIC is translated to a \*SET\_SOLID. <br>PART is translated to a \*SET\_SOLID\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_SOLID\_GENERAL using option BOX (box is created). <br>SUBSET, MAT and PROP are translated to a \*SET\_SOLID\_GENERAL using option PART (an equivalent list of parts is generated). |
| /GRNOD | All types **except SURF and NODENS** are supported. <br>NODE is translated to a \*SET\_NODE. <br>GENE is translated to \*SET\_NODE\_GENERATE. <br>PART is translated to a \*SET\_NODE\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_NODE\_GENERAL using option BOX (box is created). <br>SUBSET, MAT and PROP are translated to a \*SET\_NODE\_GENERAL using option PART (an equivalent list of parts is generated). |
| /GRQUAD | All types are supported. <br>QUAD is translated to a \*SET\_SHELL. <br>PART is translated to a \*SET\_SHELL\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_SHELL\_GENERAL using option BOX (box is created). <br>SUBSET, MAT and PROP are translated to a \*SET\_SHELL\_GENERAL using option PART (an equivalent list of parts is generated). |
| /GRSH3N | All types are supported. <br>SH3N is translated to a \*SET\_SHELL. <br>PART is translated to a \*SET\_SHELL\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_SHELL\_GENERAL using option BOX (box is created). <br>SUBSET, MAT and PROP are translated to a \*SET\_SHELL\_GENERAL using option PART (an equivalent list of parts is generated). |
| /GRSHEL | All types are supported. <br>SHEL is translated to a \*SET\_SHELL. <br>PART is translated to a \*SET\_SHELL\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_SHELL\_GENERAL using option BOX (box is created). <br>SUBSET, MAT and PROP are translated to a \*SET\_SHELL\_GENERAL using option PART (an equivalent list of parts is generated). |
| /GRSPRI | All types are supported. <br>SPRI is translated to a \*SET\_BEAM. <br>PART is translated to a \*SET\_BEAM\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_BEAM\_GENERAL using option BOX (box is created). <br>SUBSET and PROP are translated to a \*SET\_BEAM\_GENERAL using option PART (an equivalent list of parts is generated). |
| /GRTRUS | All types are supported. <br>TRUS is translated to a \*SET\_BEAM. <br>PART is translated to a \*SET\_BEAM\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_BEAM\_GENERAL using option BOX (box is created). <br>SUBSET and PROP are translated to a \*SET\_BEAM\_GENERAL using option PART (an equivalent list of parts is generated). |
| /IMPDISP | If a node group is used it is translated to \*BOUNDARY\_PRESCRIBED\_MOTION\_SET with VAD=2. Secondary nodes are translated to \*BOUNDARY\_PRESCRIBED\_MOTION\_NODE with VAD=2. **Note that the sensor input is not translated** . If a skew system is used a \*DEFINE\_VECTOR card is created using the skew system and direction and the DOF is set to 4. |
| /IMPVEL | If a node group is used it is translated to \*BOUNDARY\_PRESCRIBED\_MOTION\_SET with VAD=0. Secondary nodes are translated to \*BOUNDARY\_PRESCRIBED\_MOTION\_NODE with VAD=0. **Note that the sensor input is not translated** . If a skew system is used a \*DEFINE\_VECTOR card is created using the skew system and direction and the DOF is set to 4 for translation or 8 for rotation. |
| /INISTA | Not supported. |
| /INIVEL | If a node group is used it is translated to \*INITIAL\_VELOCITY. Secondary nodes are translated to \*INITIAL\_VELOCITY\_NODE. <br> **Note that the title will be lost as the Ansys LS-DYNA keywords do not support it** . |
| /INTER | TYPE2: Converted to \*CONTACT\_TIED\_SHELL\_EDGE\_TO\_SURFACE\_OFFSET. This is used instead of \*CONTACT\_TIED\_NODES\_TO\_SURFACE as it is better for tying spotweld beams onto shells (the rotational dof is handled correctly with tied shell edge, with tied nodes to surface it is not). The \_OFFSET option is used so that the contact will work correctly if any nodes on the contact segments are in constraints (e.g. nodal rigid bodies<br> <br>TYPE 3: Converted to \*CONTACT\_AUTOMATIC\_SURFACE\_TO\_SURFACE<br> <br>TYPE5: Converted to \*CONTACT\_AUTOMATIC\_NODES\_TO\_SURFACE<br> <br>TYPE6: Converted to \*CONTACT\_RIGID\_BODY\_TWO\_WAY\_TO\_RIGID\_BODY<br> <br>TYPE7: Converted to \*CONTACT\_AUTOMATIC\_NODES\_TO\_SURFACE<br> <br>Types 8, 10, 11 and 14 not supported.<br> <br>**Note that some contacts will be better translated as \*CONTACT\_AUTOMATIC\_SINGLE\_SURFACE. The user will need to review the contacts and decide this** . |
| /IOFLAG | Not supported. |
| /LINE | Only type SEG is supported. It is translated to a \*SET\_SEGMENT. |
| /MADYMO | Not supported. |
| /MAT | ELAST (law 1): Translated to \*MAT\_ELASTIC.<br> <br>PLAS\_JOHNS (law 2): If m is zero then there are no temperature effects and \*MAT\_SIMPLIFIED\_JOHNSON\_COOK is used. Otherwise \*MAT\_JOHNSON\_COOK is used.<br> <br>PLAS\_BRIT (law 27): Translated to \*MAT\_098 (Simplified Johnson Cook).<br> <br>HONEYCOMB (law 28): Translated to either \*MAT\_HONEYCOMB or to \*MAT\_MODIFIED\_HONEYCOMB. <br>If iflag1 != iflag2 - Translated to \*MAT\_126 along with a warning message. <br>If iflag1= iflag2=0 - x = x/(1+x) ; New entry is inserted into beginning of load curve if current 1st entry is positive; Translated to \*MAT\_026. <br>If iflag1 = iflag2 = 1 - Translated to \*MAT\_126. <br>If iflag1 = iflag2 = 1 - Translated to \*MAT\_126; SFA = 1; AOPT, MACF set to 0. <br>Checks are thrown in to see whether any MAT\_MODIFIED\_HONEYCOMB types use a solid section. If yes, and if no other material type uses that section, element formulation value is set to 9. A warning is issued and the element formulation value is retained at 1 if other types use the section as well.<br> <br>PLAS\_TAB (law 36): Translated to \*MAT\_024 (Piecewise Linear Plasticity). Material card refers to a table that contains relevant load curves and strain rates if multiple load curves are specified. \*MAT\_ADD\_EROSION is invoked if failure is specified.<br> <br>VISC\_TAB (law 38): Translated to \*MAT\_057 (Low Density Foam ). |
| /MEMORY | Not supported. |
| /MONVOL | **Types AREA and COMMU are not supported** . <br>Type PRES is translated to \*AIRBAG\_SIMPLE\_PRESSURE\_VOLUME. <br>Type GAS is translated to \*AIRBAG\_ADIABATIC\_GAS\_MODEL. <br>Type AIRBAG is translated to \*AIRBAG\_SIMPLE\_AIRBAG\_MODEL. **No attempt is made to translate the airbag properties** . Only the surface is translated (to a \*SET\_SEGMENT). |
| /NODE | Translated to \*NODE |
| /PART | Translated to \*PART |
| /PENTA6 | Translated to \*ELEMENT\_SOLID |
| /PLOAD | Not supported. |
| /PROP | /PROP/SHELL (pid 1) translated to \*SECTION\_SHELL<br> <br>/PROP/TRUSS (pid 2) translated to \*SECTION\_BEAM with ELFORM = 3 (truss).<br> <br>/PROP/BEAM (pid 3) translated to \*SECTION\_BEAM with ELFORM = 2 (resultant beam).<br> <br>/PROP/SPRING (pid 4) translated to \*SECTION\_BEAM with ELFORM = 6 (discrete beam). A \*MAT\_ELASTIC\_SPRING\_DISCRETE\_BEAM material is created for linear and non-linear elastic springs. For elasto-plastic springs a \*MAT\_INELASTIC\_SPRING\_DISCRETE\_BEAM material is created. <br>Note that if B is non-zero the log term used in the Radioss and Dyna formulations will be used and this is not the same. <br>Note that hardening types &gt; 1 have no equivalent.<br> <br>/PROP/RIVET (pid 5) properties are copied to any \*CONSTRAINED\_SPOTWELD elements created from /RIVET elements. Fn is translated to SN. Ft is translated to SS. N and M on the \*CONSTRAINED\_SPOTWELD are set to 1.0. **The maximum length and rotation flag are not supported** .<br> <br>/PROP/SOL\_ORTHO (pid 6) translated to \*SECTION\_SOLID. <br>Relevant \*ELEMENT\_SOLID cards are converted to \*ELEMENT\_SOLID\_ORTHO cards. <br>Local material directions are also inserted.<br> <br>/PROP/SPR\_GENE (pid 8) and /PROP/SPR\_BEAM (pid 13) translated to \*SECTION\_BEAM with ELFORM = 6 (discrete beam). A \*MAT\_GENERAL\_SPRING\_DISCRETE\_BEAM material is created. <br>Note that if B is non-zero the log term used in the Radioss and Dyna formulations will be used and this is not the same. <br>Note that hardening types &gt; 1 have no equivalent. <br>SCOOR is set to 2 if all beams that refer to parts that, in turn, refer to this section are of finite length <br>SCOOR is set to 0 if all beams that refer to parts that, in turn, refer to this section are of zero length <br>SCOOR is set to 2 if we have a mixture; zerolength beams are then added to a set and a warning issued.<br> <br>/PROP\_SH\_SANDW (pid 11) translated to \*SECTION\_SHELL. <br>\*PART cards are created for each layer. <br>Relevant \*INTEGRATION\_SHELL card written.<br> <br>/PROP/SOLID (pid 14) translated to \*SECTION\_SOLID. <br>Calls DEF\_SOLID if elform is set to 0. |
| /QUAD | Translated to \*ELEMENT\_SHELL |
| /RANDOM | Not supported. |
| /RBODY | Translated to \*CONSTRAINED\_NODAL\_RIGID\_BODY with a PNODE node. <br>Note values of ICOG other than 1 are ignored (there is no equivalent in Ansys LS-DYNA). Mass and inertia properties are ignored (there is no equivalent in Ansys LS-DYNA). <br>INERTIA option is now invoked if positive components of inertia tensor are input along with positive value of mass. <br>If the tensor is spherical a small perturbation is added to Ixx. <br>If a local coordinate system is given and the tensor has off diagonal terms this is illegal for IRCS=1 in Ansys LS-DYNA. In this case the tensor is rotated back to the global system and IRCS, CID and CID2 are all set to zero. |
| /REFSTA | Not supported. |
| /RIVET | Translated to \*CONSTRAINED\_SPOTWELD |
| /RLINK | Not supported. |
| /RWALL | /RWALL/CYL is translated to \*RIGIDWALL\_GEOMETRIC\_CYLINDER. <br>/RWALL/SPHER is translated to \*RIGIDWALL\_GEOMETRIC\_SPHERE <br>/RWALL/PLANE is translated to \*RIGIDWALL\_PLANAR <br>/RWALL/PARAL is translated to \*RIGIDWALL\_PLANAR\_FINITE<br> <br>Moving rigid walls are only supported for the PLANE and PARAL types. |
| /SECT | Translated to \*DATABASE\_CROSS\_SECTION\_SET cards. <br> **Note that the 3 nodes defining the plane are ignored and the output will be in the global coordinate system. To get output in a local coordinate system in LS-DYNA an \*ELEMENT\_SEATBELT\_ACCELEROMETER would need to be made with the 3 nodes (which would be referenced on the \*DATABASE\_CROSS\_SECTION\_SET card). This is not done because the \*ELEMENT\_SEATBELT\_ACCELEROMETER needs to be on a rigid body. Making the 3 nodes part of a rigid body could significantly alter the results** . <br>If a triangle group is used as well as a shell group the shells in the triangle group will be added to the shell group. Check that this will not cause problems elsewhere. <br>If secondary nodes are used as well as a node group the secondary nodes will be added to the node group. Check that this will not cause problems elsewhere. |
| /SENSOR | Not supported. |
| /SH3N | If the shell has a thickness it is translated to \*ELEMENT\_SHELL\_THICKNESS, otherwise \*ELEMENT\_SHELL.<br> <br>It is assumed that there are no label clashes with /SHELL elements. |
| /SHELL | If the shell has a thickness it is translated to \*ELEMENT\_SHELL\_THICKNESS, otherwise \*ELEMENT\_SHELL |
| /SKEW | /SKEW/FIX translated to \*DEFINE\_COORDINATE\_VECTOR <br>/SKEW/MOV translated to \*DEFINE\_COORDINATE\_NODES |
| /SPMD | Not supported. |
| /SPRING | Translated into \*ELEMENT\_BEAM (discrete beams). Numbering may change to prevent clashes with beam and truss elements |
| /SUBSET | Subset hierarchy and part contents are reproduced in PRIMER (see the part tree). Each subset is also translated to a \*SET\_PART. Note that as \*SET\_PARTs cannot be nested like subsets they will just be expanded to the list of parts. e.g. if subset 1 has child subsets 2 and 3, \*SET\_PART 2 will contain the parts in subset 2, \*SET\_PART 3 will contain the parts in subset 3, but \*SET\_PART 1 will contain the parts in subsets 1, 2 and 3. |
| /SURF | SEG is translated to a \*SET\_SEGMENT in DYNA. <br>PART is translated to a \*SET\_SEGMENT\_GENERAL using option PART. <br>BOX and BOX2 are translated to a \*SET\_SEGMENT\_GENERAL using option BOX (box is created). <br>SUBSET, MAT and PROP are translated to a \*SET\_SEGMENT\_GENERAL using option PART (an equivalent list of parts is generated) <br> **SURF, GRSHEL, GRSH3N, ELLIPS and MDELLIPS are not supported.** |
| /TETRA4 | Translated to \*ELEMENT\_SOLID |
| /TETRA10 | Translated to \*ELEMENT\_SOLID |
| /TITLE | Translated to \*TITLE |
| /TH | Only types NODE, SHEL, SH3N, BRIC, QUAD, BEAM, TRUSS and SPRING (i.e. nodes and elements) are translated. For type NODE, if there is a skew frame it is translated to \*DATABASE\_HISTORY\_NODE\_LOCAL\_ID. Everything else is translated to \*DATABASE\_HISTORY\_xxx\_ID where xxx is the appropriate type.<br> <br>\*DATABASE\_RWFORC and \*DATABASE\_SECFORC files are used by both the /TH cards and the RADIOSS Engine keyword /ANIM/VECT/FOPT. The /TH keywords grab their DT value from the /TFILE keyword (if present). The /ANIM/VECT/FOPT keyword gets its DT value from the /ANIM/DT keyword (if present). In case of a clash, the /TH and /TFILE keywords take preference over the /ANIM keywords. |
| /TRUSS | Translated into \*ELEMENT\_BEAM (truss). Numbering may change to prevent clashes with beam and spring elements |

#####  Engine file

| **Engine file Keyword** | **Notes** |
| --- | --- |
| /ANIM | The following options are translated: <br>/DT - Start time is ignored; Frequency of output is specified <br>/BRICK/TENS/STRAIN <br>/SHELL/TENS/STRAIN <br>/NODA/DT <br>/NODA/DMAS <br>/VECT/CONT <br>/VECT/FOPT <br>The following options are handled by default: <br>/MASS <br>/BEAM/FORC <br>/TRUS/FORC <br>/SPRING/FORC |
| /BCS | Modifies or inserts new \*BOUNDARY cards. |
| /BCSR | Modifies or inserts new \*BOUNDARY cards. |
| /DEL | Initiates a delete panel that permits the user to leave or delete elements specified in the /DEL card. |
| /DELINT | Not supported . |
| /DT | Cycle frequency (scale factor) is read in and translated. <br>deltatmin is ignored. <br>Options are ignored. |
| /DT1 | Not supported. |
| /DTIX | Not supported. |
| /DYREL | Not supported. |
| /FUNCT | Redefines existing \*DEFINE\_CURVE cards. <br>Inserts new card if the given curve Ifunc does not exist. |
| /GFILE | Not supported. |
| /INIV | Redefines existing \*DEFINE\_CURVE cards. <br>Inserts new card if the given curve Ifunc does not exist. |
| /INTER | Not supported. |
| /KEREL | Not supported. |
| /KILL | User gets a warning to the effect that the restart file is written anyway (as in STOP) |
| /MADYMO | Not supported. |
| /MON | /OFF option warns the user that CPU time information is written by default. |
| /OUTP | Not supported. |
| /PARITH | Not supported. |
| /PATRAN | Not supported. |
| /PRINT | Not supported. |
| /PROC | Translated to \*CONTROL\_PARALLEL. |
| /RBODY | The RADIOSS Starter keyword is supported. The Engine keyword, however, is not. |
| /RFILE | Translated to \*DATABASE\_BINARY cards. |
| /RUN | Mandatory keyword translated to \*CONTROL\_TERMINATION. |
| /SHFRA | Not supported. |
| /STOP | Translated to \*CONTROL\_TERMINATION. |
| /TFILE | Translated to \*DATABASE\_BINARY cards. (refer /TH in the Starter file section). |
| /@TFILE | Not supported. |
| /TH | Version 31 is not currently supported. The VERS option is hence ignored. |
| /TITLE | Supported. |
| /VEL | Not supported. |
| /VERS | Mandatory keyword - 31 option warns the user that the translator was written <br>to support version 4.1 |

####  Other notes

\*DATABASE\_ABSTAT 
\*DATABASE\_GLSTAT 
\*DATABASE\_MATSUM 
\*DATABASE\_RCFORC 
\*DATABASE\_RWFORC 
\*DATABASE\_SECFORC 
cards are automatically generated (as there is no Ansys LS-DYNA equivalent for most of the RADIOSS time history output (e.g. /TH/RWALL) unless one or more card has already been generated during translation..

Additionally a \*CONTROL\_CONTACT card is created with RWPNAL=1 so nodes on rigid bodies can interact with rigid walls.

During translation any keywords that are not supported will be written to a file *&lt;filename&gt;* .skipped. Any warnings that are generated will be written to a file *&lt;filename&gt;* .warnings

[Previous](radioss-fixed-file-format.md)  |  [Next](sap2000-file-format.md)