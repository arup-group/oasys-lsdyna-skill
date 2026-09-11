## Appendix S: Battery Cell Keyword Format

A battery definition is stored in a keyword file after the Ansys LS-DYNA **\*END** card which allows PRIMER to recognise and manipulate battery data.

### Details of *BATT_CELL Cards

The battery cell post **\*END** section contains information about battery structure properties, Randles properties, relevant analysis data and composite entities for a given battery definition and it is organised as follows:

**\*BATT\_CELL\_START**

**&lt;label&gt; &lt;title&gt;**

**&lt;row count&gt; &lt;modelling scale&gt; &lt;meshless mode&gt; &lt;local csys&gt;**

| label | I10 | The label of this battery definition |
| --- | --- | --- |
| title | A70 | The title of this definition |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| modelling scale | I10 | Randles modelling scale |
| meshless mode | I10 | Meshless connected to Macro structure mode |
| local csys | I10 | Battery local coordinate system |

**\*BATT\_CELL\_LAYER**

**&lt;row count&gt; &lt;created flag&gt; &lt;width&gt; &lt;height&gt; &lt;origin mode&gt; &lt;origin node / origin x&gt; &lt;origin y&gt; &lt;origin z&gt;**

**&lt;row count&gt; &lt;mesh mode&gt; &lt;mesh x count/size&gt; &lt;mesh y count/size&gt; &lt;mesh z count/size&gt;**

**&lt;row count&gt; &lt;layers count&gt; &lt;cell multi repetition&gt; &lt;cell repetition x&gt; &lt;cell separation x&gt; &lt;common sections&gt; &lt;em\_mat flag&gt; &lt;cell repetition y&gt; &lt;cell separation y&gt;**

*The following rows are included if the &lt;modelling scale&gt; is set to 0 or 1 (Micro or Meso scale):*

**&lt;row count&gt; &lt;layer 1 material&gt; &lt;layer 1 thermal material&gt; &lt;layer 1 thickness&gt; &lt;layer 1 conductivity&gt;**

***...***

**&lt;row count&gt; &lt;layer 5 material&gt; &lt;layer 5 thermal material&gt; &lt;layer 5 thickness&gt; &lt;layer 5 conductivity&gt;**

*The following row is included if the &lt;modelling scale&gt; is set to 2 or 3 and &lt;meshless mode&gt; set to 1 (Macro or Meshless scale connected to Macro structure):*

**&lt;row count&gt; &lt;cell material&gt; &lt;cell thermal material&gt; &lt;cell thickness&gt; &lt;cell positive conductivity&gt; &lt;cell negative conductivity&gt;**

| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| --- | --- | --- |
| created flag | I10 | Flags whether the layers structure has been created for this definition |
| width | E10 | Y length of the layers |
| height | E10 | Z length of the layers |
| origin mode | I10 | Definition type of the origin point of the layers (node or coordinates) |
| origin node / origin x | I10/E10 | Origin node (if &lt;origin mode&gt; is 0) or the x coordinate of the origin (if &lt;origin mode&gt; is 1) |
| origin y | E10 | Y coordinate of the origin |
| origin z | E10 | Z coordinate of the origin |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| mesh mode | I10 | Mesh density definition mode |
| mesh x count/size | I10/E10 | Mesh element count (if &lt;mesh mode&gt; is 0) or size (if &lt;mesh mode&gt; is 1) in the x-direction |
| mesh y count/size | I10/E10 | Mesh element count (if &lt;mesh mode&gt; is 0) or size (if &lt;mesh mode&gt; is 1) in the y-direction |
| mesh z count/size | I10/E10 | Mesh element count (if &lt;mesh mode&gt; is 0) or size (if &lt;mesh mode&gt; is 1) in the z-direction |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| layers count | I10 | Number of layers per unit cell |
| cell multi repetition | I10 | Multiple unit cell mode |
| cell repetition x | I10 | Number of unit cell repetitions in x direction |
| cell separation x | E10 | Separation between unit cells in x direction |
| common sections | I10 | Controls whether unit cell repetitions reference common **\*SECTIONs** |
| em\_mat flag | I10 | Controls the automatic creation of **\*EM\_MATs** by PRIMER |
|  |
| cell repetition y | I10 | Number of unit cell repetitions in y direction |
| cell separation y | E10 | Separation between unit cells in y direction |
| *The following rows are included if the &lt;modelling scale&gt; is set to 0 or 1 (Micro or Meso scale)* |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| layer 1 material, ... | I10 | Material used by layer 1, ...5 (PCC...NCC) |
| layer 1 thermal material, ... | I10 | Thermal material used by layer 1, ...5 (PCC...NCC) |
| layer 1 thickness, ... | E10 | Thickness of layer 1, ...5 (PCC...NCC) |
| layer 1 conductivity, ... | E10 | Conductivity of layer 1, ...5 (PCC...NCC) |
| *The following row is included if the &lt;modelling scale&gt; is set to 2 or 3 and &lt;meshless mode&gt; set to 1 (Macro or Meshless scale connected to Macro structure)* |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| cell material | I10 | Material used by the layers cell part |
| cell thermal material | I10 | Thermal material used by the layers cell part |
| cell thickness | E10 | Thickness of a unit cell |
| cell positive conductivity | E10 | Positive conductivity of the unit cell |
| cell negative conductivity | E10 | Negative conductivity of the unit cell |

**\*BATT\_CELL\_TAB**

**&lt;row count&gt; &lt;created flag&gt; &lt;position&gt; &lt;width&gt; &lt;length&gt; &lt;separation&gt; &lt;alternate polarities x&gt; &lt;alternate polarities y&gt;**

**&lt;row count&gt; &lt;mesh mode&gt; &lt;mesh x count/size&gt; &lt;mesh y count/size&gt; &lt;mesh z count/size&gt; &lt;nrbc flag&gt;**

**&lt;row count&gt; &lt;positive tab material&gt; &lt;positive tab thermal material&gt; &lt;positive tab conductivity&gt;**

**&lt;row count&gt; &lt;negative tab material&gt; &lt;negative tab thermal material&gt; &lt;negative tab conductivity&gt;**

**&lt;row count&gt; &lt;connecting isopotentials flag&gt; &lt;free isopotentials flag&gt; &lt;isopotential connections flag&gt; &lt;isopotential connections mode&gt; &lt;wire resistance&gt;**

| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| --- | --- | --- |
| created flag | I10 | Flags whether the tabs structure has been created for this definition |
| position | I10 | Position configuration of the tabs |
| width | E10 | Y length of the tabs |
| length | E10 | Z length of the tabs |
| separation | E10 | Separation between the tabs (only applies for &lt;position&gt; 0 and 1) |
| alternate polarities x | I10 | Option to alternate the tabs polarities every other cell in x direction |
| alternate polarities y | I10 | Option to alternate the tabs polarities every other cell in y direction |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| mesh mode | I10 | Mesh density definition mode |
| mesh x count/size | I10/E10 | Mesh element count (if &lt;mesh mode&gt; is 0) or size (if &lt;mesh mode&gt; is 1) in the x-direction |
| mesh y count/size | I10/E10 | Mesh element count (if &lt;mesh mode&gt; is 0) or size (if &lt;mesh mode&gt; is 1) in the y-direction |
| mesh z count/size | I10/E10 | Mesh element count (if &lt;mesh mode&gt; is 0) or size (if &lt;mesh mode&gt; is 1) in the z-direction |
| nrbc flag | I10 | Controls the creation of **\*CONSTRAINED\_NODAL\_RIGID\_BODYs** |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| positive tab material | I10 | Material used by the positive tab |
| positive tab thermal material | I10 | Thermal material used by the positive tab |
| positive tab conductivity | E10 | Conductivity of the positive tab |
|  |
| negative tab material | I10 | Material used by the negative tab |
| negative tab thermal material | I10 | Thermal material used by the negative tab |
| negative tab conductivity | E10 | Conductivity of the negative tab |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| connecting isopotentials flag | I10 | Controls the creation of **\*EM\_RANDLES\_ISOPOTENTIALs** at the layers-tab connection |
| free isopotentials flag | I10 | Controls the creation of **\*EM\_RANDLES\_ISOPOTENTIALs** at the free surfaces of the tabs |
| isopotential connections flag | I10 | Controls the creation of **\*EM\_RANDLES\_ISOPOTENTIAL\_CONNECTs** between tabs |
| isopotential connections mode | I10 | Configuration of the isopotential connections between tabs |
| wire resistance | E10 | Wire resistance of the connections between tabs |

**\*BATT\_CELL\_RANDLES**

**&lt;row count&gt; &lt;created flag&gt; &lt;rdlarea&gt; &lt;q&gt; &lt;socint&gt; &lt;cq&gt; &lt;soctou type&gt; &lt;soctou value&gt;**

**&lt;row count&gt; &lt;rdltype&gt; &lt;same type&gt; &lt;definition type&gt;**

**&lt;R0 charge mode&gt; &lt;R10 charge mode&gt; &lt;C10 charge mode&gt; &lt;R20 charge mode&gt; &lt;C20 charge mode&gt; &lt;R30 charge mode&gt; &lt;C30 charge mode&gt;**

**&lt;R0 charge&gt; &lt;R10 charge &gt; &lt;C10 charge&gt; &lt;R20 charge &gt; &lt;C20 charge &gt; &lt;R30 charge &gt; &lt;C30 charge &gt;**

**&lt;R0 discharge mode&gt; &lt;R10 discharge mode&gt; &lt;C10 discharge mode&gt; &lt;R20 discharge mode&gt; &lt;C20 discharge mode&gt; &lt;R30 discharge mode&gt; &lt;C30 discharge mode&gt;**

**&lt;R0 discharge&gt; &lt;R10 discharge &gt; &lt;C10 discharge&gt; &lt;R20 discharge&gt; &lt;C20 discharge&gt; &lt;R30 discharge&gt; &lt;C30 discharge&gt;**

**&lt;row count&gt; &lt;frther&gt; &lt;temp&gt; &lt;tempu&gt; &lt;dudt&gt; &lt;r0toth&gt;**

**&lt;row count&gt; &lt;usesocs&gt; &lt;tau&gt; &lt;flcid&gt;**

| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| --- | --- | --- |
| created flag | I10 | Flags whether the **\*EM\_RANDLES\_** cards have been created for this definition |
| rdlarea | I10 | Randles area type |
| q | E10 | Cell capacity |
| socint | E10 | Initial SOC |
| cq | E10 | SOC conversion factor |
| soctou type | I10 | Equilibrium voltage type |
| soctou value | E10/I10 | Equilibrium voltage value (constant if &lt;soctou type&gt; is 0 and a curve if 1) |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| rdltype | I10 | Randles circuit type |
| same type | I10 | Controls whether the same definition type is used for all charge/discharge parameters |
| definition type | I10 | Common definition type used for all charge/discharge parameters |
|  |
| R0-C30 charge mode | 7I10 | Randles circuit charge properties definition mode |
|  |
| R0-C30 charge | 7E10/7I10 | Randles circuit charge properties value (constant if corresponding &lt;charge mode&gt; is 0 and curve if 1) |
|  |
| R0-C30 discharge mode | 7I10 | Randles circuit discharge properties definition mode |
|  |
| R0-C30 discharge | 7E10 | Randles circuit discharge properties value (constant if corresponding &lt;discharge mode&gt; is 0 and curve if 1) |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| frther | I10 | Flag setting where the temperature is coming from |
| temp | E10 | Constant temperature value used for the Randles circuit parameters (only applies if &lt;frther&gt; is 0) |
| tempu | I10 | Temperature unit |
| dudt | I10 | Load curve ID of the reversible heat as a function of SOC |
| r0toth | I10 | r0 to Thermal |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| usesocs | I10 | Flag determining if SOC shift is used |
| tau | E10 | Damping time in the SOC shift equation |
| flcid | I10 | Load curve giving f(i) where i is the total current in the unit cell |

**\*BATT\_CELL\_ANALYSIS**

**&lt;row count&gt; &lt;ctrl sol flag&gt; &lt;ctrl term flag&gt; &lt;ctrl time flag&gt;**

**&lt;row count&gt; &lt;ctrl sol type&gt; &lt;ctrl term time&gt; &lt;ctrl time step&gt;**

**&lt;row count&gt; &lt;ctrl thml time flag&gt; &lt;ctrl thml sol flag&gt;**

**&lt;row count&gt; &lt;ctrl thml time step&gt; &lt;ctrl thml sol atype&gt; &lt;ctrl thml sol ptype&gt;**

**&lt;row count&gt; &lt;em ctrl flag&gt; &lt;em ctrl time flag&gt; &lt;em exoth flag&gt; &lt;em short flag&gt;**

**&lt;row count&gt; &lt;fem&gt; &lt;bem&gt; &lt;em time step&gt; &lt;em assembly out&gt; &lt;em solver out&gt;**

**&lt;row count&gt; &lt;heat area type&gt; &lt;res area type&gt; &lt;exoth function&gt; &lt;short function&gt;**

| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| --- | --- | --- |
| created flag | I10 | Flags whether the analysis **** cards have been created for this definition |
| ctrl sol flag | I10 | Flag determining the activation of **\*CONTROL\_SOLUTION** |
| ctrl term flag | I10 | Flag determining the activation of **\*CONTROL\_TERMINATION** |
| ctrl time flag | I10 | Flag determining the activation of **\*CONTROL\_TIMESTEP** |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| ctrl sol type | I10 | Analysis type for **\*CONTROL\_SOLUTION** |
| ctrl term time | E10 | Termination time for **\*CONTROL\_TERMINATION** |
| ctrl time step | E10 | Initial time step for **\*CONTROL\_TIMESTEP** |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| ctrl thml time flag | I10 | Flag determining the activation of **\*CONTROL\_THERMAL\_TIMESTEP** |
| ctrl thml sol flag | I10 | Flag determining the activation of **\*CONTROL\_THERMAL\_SOLVER** |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| ctrl thml time step | E10 | Time step for **\*CONTROL\_THERMAL\_TIMESTEP** |
| ctrl thml sol atype | I10 | Analysis type for **\*CONTROL\_THERMAL\_SOLVER** |
| ctrl thml sol ptype | I10 | Problem type for **\*CONTROL\_THERMAL\_SOLVER** |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| em ctrl flag | I10 | Flag determining the activation of **\*EM\_CONTROL** |
| em ctrl time flag | I10 | Flag determining the activation of **\*EM\_CONTROL\_TIMESTEP** |
| em out flag |  | Flag determining the activation of **\*EM\_OUTPUT** |
| em exoth flag | I10 | Flag determining the activation of **\*EM\_RANDLES\_EXOTHERMIC\_REACTION** |
| em short flag | I10 | Flag determining the activation of **\*EM\_RANDLES\_SHORT** |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| fem | I10 | EM cycles for FEM for **\*EM\_CONTROL** |
| bem | I10 | EM cycles for BEM for **\*EM\_CONTROL** |
| em time step | E10 | Time step for **\*EM\_CONTROL\_TIMESTEP** |
| em assembly out | I10 | Level of matrix assembly output for **\*EM\_OUTPUT** |
| em solver out | I10 | Level of solver output for **\*EM\_OUTPUT** |
|  |
| row count | I10 | Number of rows to process in this card (for maintenance purposes) |
| heat area type | I10 | Heat source area type for **\*EM\_RANDLES\_EXOTHERMIC\_REACTION** |
| res area type | I10 | Resistance area type for **\*EM\_RANDLES\_SHORT** |
| exoth function | I10 | Function for **\*EM\_RANDLES\_EXOTHERMIC\_REACTION** |
| short function | I10 | Function for **\*EM\_RANDLES\_SHORT** |

**\*BATT\_CELL\_LAYER\_PARTS**

**&lt;top nset&gt; &lt;bottom nset&gt;**

*The following rows are included if the &lt;modelling scale&gt; is set to 0 (Micro scale):*

***&lt;pcc part 1&gt; &lt;cathode part 1&gt; &lt;separator part 1&gt; &lt;anode part 1&gt; &lt;ncc part 1&gt;***

***....***

***&lt;pcc part n&gt; &lt;cathode part n&gt; &lt;separator part n&gt; &lt;anode part n&gt; &lt;ncc part n&gt;***

*The following rows are included if the &lt;modelling scale&gt; is set to 1, 2, or 3 (Meso, Macro and Meshless connected to Macro scales):*

***&lt;layers cell pset 1&gt;***

***....***

***&lt;layers cell pset n&gt;***

| top nset | I10 | Node set containing all nodes at the top surfaces of all layers |
| --- | --- | --- |
| bottom nset | I10 | Node set containing all nodes at the bottom surfaces of all layers |
| *The following rows are included if the &lt;modelling scale&gt; is set to 0 (Micro scale)* |
| pcc part 1... | I10 | Part modelling the PCC layer for unit cell 1,... |
| cathode part 1... | I10 | Part modelling the cathode layer for unit cell 1,... |
| separator part 1... | I10 | Part modelling the separator layer for unit cell 1,... |
| anode part 1... | I10 | Part modelling the anode layer for unit cell 1,... |
| ncc part 1... | I10 | Part modelling the NCC layer for unit cell 1,... |
| *The following rows are included if the &lt;modelling scale&gt; is set to 1, 2, or 3 (Meso, Macro and Meshless connected to Macro scales)* |
| layers cell pset 1... | I10 | Part set containing the part modelling unit cell 1,... |

**\*BATT\_CELL\_TAB\_PARTS**

**&lt;pos tab nset&gt; &lt;neg tab nset&gt;**

**&lt;pos tab part 1&gt; &lt;neg tab part 1&gt;**

**...**

**&lt;pos tab part n&gt; &lt;neg tab part n&gt;**

| pos tab nset | I10 | Node set containing all nodes at the top and bottom surfaces of all positive tabs |
| --- | --- | --- |
| neg tab nset | I10 | Node set containing all nodes at the top and bottom surfaces of all negative tabs |
|  |
| pos tab part 1... | I10 | Part modelling the positive tab for unit cell 1,... |
| neg tab part 1... | I10 | Part modelling the negative tab for unit cell 1,... |

**\*BATT\_CELL\_TAB\_NRB**

**&lt;pos tab nrbc 1&gt; &lt;neg tab nrbc 1&gt;**

**...**

**&lt;pos tab nrbc n&gt; &lt;neg tab nrbc n&gt;**

| pos tab nrbc 1... | I10 | Id of the **\*CONSTRAINED\_NODAL\_RIGID\_BODY** at the positive tab-layers connection for unit cell 1, ... |
| --- | --- | --- |
| neg tab nrbc 1... | I10 | Id of the **\*CONSTRAINED\_NODAL\_RIGID\_BODY** at the negative tab-layers connection for unit cell 1, ... |

*The following keyword is included if the &lt;modelling scale&gt; is set to 0 or 1 (Micro and Meso scales) and &lt;connecting isopotentials flag&gt; is 1:*

**\*BATT\_CELL\_TAB\_CON\_ISOP**

**&lt;pos tab-layer isop 1&gt; &lt;neg tab-layer isop 1&gt;**

**...**

**&lt;pos tab-layer isop n&gt; &lt;neg tab-layer isop n&gt;**

| pos tab-layer isop 1... | I10 | Id of the **\*EM\_RANDLES\_ISOPOTENTIAL** at the positive tab-layers connection for unit cell 1, ... |
| --- | --- | --- |
| neg tab-layer isop 1... | I10 | Id of the **\*EM\_RANDLES\_ISOPOTENTIAL** at the negative tab-layers connection for unit cell 1, ... |

*The following keyword is included if the &lt;modelling scale&gt; is set to 2 or 3 (Macro and Meshless connected to Macro scales) and &lt;connecting isopotentials flag&gt; is 1:*

**\*BATT\_CELL\_TAB\_CON\_ISCO**

**&lt;pos tab-layer isco 1&gt; &lt;neg tab-layer isco1&gt;**

**...**

**&lt;pos tab-layer isco n&gt; &lt;neg tab-layer isco n&gt;**

| pos tab-layer isco1... | I10 | Id of the **\*EM\_RANDLES\_ISOPOTENTIAL\_CONNECT** at the positive tab-layers connection for unit cell 1, ... |
| --- | --- | --- |
| neg tab-layer isco1... | I10 | Id of the **\*EM\_RANDLES\_ISOPOTENTIAL\_CONNECT** at the negative tab-layers connection for unit cell 1, ... |

**\*BATT\_CELL\_TAB\_FREE\_ISOP**

**&lt;pos tab free isop 1&gt; &lt;neg tab free isop 1&gt;**

**...**

**&lt;pos tab free isop n&gt; &lt;neg tab free isop n&gt;**

| pos tab free isop 1... | I10 | Id of the **\*EM\_RANDLES\_ISOPOTENTIAL** at the free surface of the positive tab for unit cell 1, ... |
| --- | --- | --- |
| neg tab free isop 1... | I10 | Id of the **\*EM\_RANDLES\_ISOPOTENTIAL** at the free surface of the negative tab for unit cell 1, ... |

**\*BATT\_CELL\_INTER\_TAB\_ISCO**

**&lt;inter tab isco 1&gt;**

**...**

**&lt;inter tab isco n&gt;**

| inter tab isco 1... | I10 | Id of the **\*EM\_RANDLES\_ISOPOTENTIAL\_CONNECT** modelling the inter-tab connection****1, ... |
| --- | --- | --- |

**\*BATT\_CELL\_SECT\_LIST**

**&lt;section 1&gt;**

**...**

**&lt;section n&gt;**

| section 1... | I10 | All **\*SECTIONs** created by the tool and used by the layers and tabs parts |
| --- | --- | --- |

**\*BATT\_CELL\_RAND\_LIST**

**&lt;randles 1&gt;**

**...**

**&lt;randles n&gt;**

| randles 1... | I10 | **\*EM\_RANDLES\_SOLID** **or \*EM\_RANDLES\_TSHELL** or **\*EM\_RANDLES\_BATMAC** or **\*EM\_RANDLES\_MESHLESS** (depending in the selected Randles modelling scale) for unit cell 1, ... |
| --- | --- | --- |

**\*BATT\_CELL\_END**

*No data fields.*
[Previous](r-morphing-keyword-format.md)  |  [Next](installation-organisation.md)