# Component class

The following component constants can be used in [GetDataFlagged()](this-model-class.md#Model::GetDataFlagged) in T/HIS.

## Component constants

### Constants for MODEL

| **Name** | **Description** |
| --- | --- |
| Component.GSTP | Time step |
| Component.GKE | Kinetic energy |
| Component.GIE | Internal energy |
| Component.GSWE | Stonewall energy |
| Component.GSPE | Spring and damper energy |
| Component.GHG | Hourglass energy |
| Component.GSDE | System damping energy |
| Component.GJE | Joint internal energy |
| Component.GSIE | Sliding interface energy |
| Component.GEW | External work |
| Component.GRBE | Rigid Body stopper energy |
| Component.GTE | Total energy |
| Component.GTER | Total/initial energy |
| Component.GVX | Average X velocity |
| Component.GVY | Average Y velocity |
| Component.GVZ | Average Z velocity |
| Component.GTZC | Time per zone cycle |
| Component.GMASS | Total mass |
| Component.GMADD | Added mass |
| Component.GPM | %age Mass increase |
| Component.GEKE | Eroded Kinetic energy |
| Component.GEIE | Eroded Internal energy |
| Component.GEHG | Eroded Hourglass energy |
| Component.GER | Energy Ratio w/o Eroded |
| Component.DRCE | Current Distortional KE |
| Component.DRMX | Maximum Distortional KE |
| Component.DRCO | Convergence Factor |
| Component.DRKE | Total Kinetic energy |
| Component.LKE | Lumped Kinetic energy |
| Component.GMPE | Mat Plastic energy |
| Component.GMEE | Mat Elastic energy |
| Component.GMDE | Mat Damage energy |
| Component.GDIE | Dissipated IE |
| Component.GDKE | Dissipated KE |
| Component.GDE | Drilling energy |

### Constants for PART

| **Name** | **Description** |
| --- | --- |
| Component.GKE | Kinetic energy |
| Component.GIE | Internal energy |
| Component.GHG | Hourglass energy |
| Component.GTE | Total energy |
| Component.GMX | X momentum |
| Component.GMY | Y momentum |
| Component.GMZ | Z momentum |
| Component.GVX | Average X velocity |
| Component.GVY | Average Y velocity |
| Component.GVZ | Average Z velocity |
| Component.GMASS | Mass |
| Component.GAM | Added mass |
| Component.GEKE | Eroded Kinetic energy |
| Component.GEIE | Eroded Internal energy |
| Component.GMPE | Mat Plastic energy |
| Component.GMEE | Mat Elastic energy |
| Component.GMDE | Mat Damage energy |

### Constants for NODE

| **Name** | **Description** |
| --- | --- |
| Component.TEMP | Temperature |
| Component.DX | X Displacement |
| Component.DY | Y Displacement |
| Component.DZ | Z Displacement |
| Component.DM | Displacement Magnitude |
| Component.VX | X Velocity |
| Component.VY | Y Velocity |
| Component.VZ | Z Velocity |
| Component.VM | Velocity Magnitude |
| Component.AX | X Acceleration |
| Component.AY | Y Acceleration |
| Component.AZ | Z Acceleration |
| Component.AM | Acceleration Magnitude |
| Component.CX | X co-ordinate |
| Component.CY | Y co-ordinate |
| Component.CZ | Z co-ordinate |
| Component.CV | Current Vector |
| Component.BX | Basic X co-ordinate |
| Component.BY | Basic Y co-ordinate |
| Component.BZ | Basic Z co-ordinate |
| Component.BV | Basic Vector |
| Component.RDX | X rotation |
| Component.RDY | Y rotation |
| Component.RDZ | Z rotation |
| Component.RDM | Rotation Magnitude |
| Component.RVX | X rotational velocity |
| Component.RVY | Y rotational velocity |
| Component.RVZ | Z rotational velocity |
| Component.RVM | Rotation Vel Magnitude |
| Component.RAX | X rotational acceleration |
| Component.RAY | Y rotational acceleration |
| Component.RAZ | Z rotational acceleration |
| Component.RAM | Rotation Accel Magnitude |
| Component.TFX | X Thermal Flux |
| Component.TFY | Y Thermal Flux |
| Component.TFZ | Z Thermal Flux |
| Component.TFM | Thermal Flux Magnitude |
| Component.TTOP | Top Temperature |
| Component.TBOT | Bottom Temperature |

### Constants for SOLID

| **Name** | **Description** |
| --- | --- |
| Component.SXX | Stress in XX |
| Component.SYY | Stress in YY |
| Component.SZZ | Stress in ZZ |
| Component.SXY | Stress in XY |
| Component.SYZ | Stress in YZ |
| Component.SZX | Stress in ZX |
| Component.SMAX | MAX principal stress |
| Component.SMIN | MIN principal stress |
| Component.SMS | MAX shear stress |
| Component.SVON | von Mises stress |
| Component.SAV | Average stress (Pressure) |
| Component.STR | Triaxiality Factor |
| Component.EPL | Effective plastic strain |
| Component.EXX | Strain in XX |
| Component.EYY | Strain in YY |
| Component.EZZ | Strain in ZZ |
| Component.EXY | Strain in XY |
| Component.EYZ | Strain in YZ |
| Component.EZX | Strain in ZX |
| Component.EMAX | MAX principal strain |
| Component.EMIN | MIN principal strain |
| Component.EMS | MAX shear strain |
| Component.EVON | von Mises strain |
| Component.EAV | Average strain |
| Component.PEMAG | Plastic Strain Magnitude |
| Component.SOX | Extra data |

### Constants for BEAM

| **Name** | **Description** |
| --- | --- |
| Component.BFX | Axial force |
| Component.BFY | Shear force in Y |
| Component.BFZ | Shear force in Z |
| Component.BMXX | Torsional moment |
| Component.BMYY | Moment in Y |
| Component.BMZZ | Moment in Z |
| Component.BSAX | Axial strain |
| Component.BPE1 | Bending energy: end 1 |
| Component.BPE2 | Bending energy: end 2 |
| Component.BRY1 | Y rotation: end 1 |
| Component.BRY2 | Y rotation: end 2 |
| Component.BRZ1 | Z rotation: end 1 |
| Component.BRZ2 | Z rotation: end 2 |
| Component.BRXX | Torsional rotation |
| Component.BMY1 | Y Bending moment: end 1 |
| Component.BMY2 | Y Bending moment: end 2 |
| Component.BMZ1 | Z Bending moment: end 1 |
| Component.BMZ2 | Z Bending moment: end 2 |
| Component.BACE | Axial collapse energy |
| Component.BIE | Internal energy |
| Component.BSXX | Axial stress |
| Component.BSXY | XY Shear stress |
| Component.BSZX | ZX Shear stress |
| Component.BEP | Effective plastic strain |
| Component.BEAX | Axial strain |
| Component.BDX | Relative Axial displacement |
| Component.BDY | Relative S - Displacement |
| Component.BDZ | Relative T - Displacement |
| Component.BRY | Rotation in S |
| Component.BRZ | Rotation in T |
| Component.BDNA | Relative Axial force |
| Component.BDNS | Resultant S - Force |
| Component.BDNT | Resultant T - Force |
| Component.BDMA | Axial moment |
| Component.BDMS | Moment in S |
| Component.BDMT | Moment in T |
| Component.BDDX | Axial Direction X |
| Component.BDDY | Axial Direction Y |
| Component.BDDZ | Axial Direction Z |
| Component.BDSX | S - Direction X |
| Component.BDSY | S - Direction Y |
| Component.BDSZ | S - Direction Z |
| Component.BDTX | T - Direction X |
| Component.BDTY | T - Direction Y |
| Component.BDTZ | T - Direction Z |
| Component.BEX | Extra data |

### Constants for SHELL

| **Name** | **Description** |
| --- | --- |
| Component.SXX | Stress in XX |
| Component.SYY | Stress in YY |
| Component.SZZ | Stress in ZZ |
| Component.SXY | Stress in XY |
| Component.SYZ | Stress in YZ |
| Component.SZX | Stress in ZX |
| Component.SMAX | MAX principal stress |
| Component.SMIN | MIN principal stress |
| Component.SMS | MAX shear stress |
| Component.SVON | von Mises stress |
| Component.SAV | Average stress (Pressure) |
| Component.STR | Triaxiality Factor |
| Component.EPS | Effective plastic strain |
| Component.EXX | Strain in XX |
| Component.EYY | Strain in YY |
| Component.EZZ | Strain in ZZ |
| Component.EXY | Strain in XY |
| Component.EYZ | Strain in YZ |
| Component.EZX | Strain in ZX |
| Component.EMAX | MAX principal strain |
| Component.EMIN | MIN principal strain |
| Component.EMS | MAX shear strain |
| Component.EVON | von Mises strain |
| Component.EAV | Average strain |
| Component.PEMAG | Plastic Strain Magnitude |
| Component.RMX | Moment in X |
| Component.RMY | Moment in Y |
| Component.RMXY | Moment in XY |
| Component.RQX | Shear force in X |
| Component.RQY | Shear force in Y |
| Component.RFX | Normal force in X |
| Component.RFY | Normal force in Y |
| Component.RFXY | Normal force in XY |
| Component.THK | Thickness |
| Component.EDEN | Internal energy density |
| Component.SHX | Extra data |

### Constants for THICK\_SHELL

| **Name** | **Description** |
| --- | --- |
| Component.SXX | Stress in XX |
| Component.SYY | Stress in YY |
| Component.SZZ | Stress in ZZ |
| Component.SXY | Stress in XY |
| Component.SYZ | Stress in YZ |
| Component.SZX | Stress in ZX |
| Component.SMAX | MAX principal stress |
| Component.SMIN | MIN principal stress |
| Component.SMS | MAX shear stress |
| Component.SVON | von Mises stress |
| Component.SAV | Average stress (Pressure) |
| Component.STR | Triaxiality Factor |
| Component.EPL | Effective plastic strain |
| Component.EXX | Strain in XX |
| Component.EYY | Strain in YY |
| Component.EZZ | Strain in ZZ |
| Component.EXY | Strain in XY |
| Component.EYZ | Strain in YZ |
| Component.EZX | Strain in ZX |
| Component.EMAX | MAX principal strain |
| Component.EMIN | MIN principal strain |
| Component.EMS | MAX shear strain |
| Component.EVON | von Mises strain |
| Component.EAV | Average strain |
| Component.PEMAG | Plastic Strain Magnitude |
| Component.SHX | Extra data |

### Constants for RIGIDWALL

| **Name** | **Description** |
| --- | --- |
| Component.FN | Normal force |
| Component.FX | Global X force |
| Component.FY | Global Y force |
| Component.FZ | Global Z force |
| Component.EN | Energy |

### Constants for SPRING

| **Name** | **Description** |
| --- | --- |
| Component.SP\_F | Resultant Force |
| Component.SP\_E | Elongation |
| Component.SP\_FE | Res Force v Elongation |
| Component.SP\_FX | Global X force |
| Component.SP\_FY | Global Y force |
| Component.SP\_FZ | Global Z force |
| Component.SP\_EN | Energy |
| Component.SP\_M | Resultant Moment |
| Component.SP\_R | Rotation |
| Component.SP\_MR | Res Moment v Rotation |
| Component.SP\_MX | Moment in X |
| Component.SP\_MY | Moment in Y |
| Component.SP\_MZ | Moment in Z |

### Constants for SEATBELT

| **Name** | **Description** |
| --- | --- |
| Component.SB\_F | Force |
| Component.SB\_S | Strain |
| Component.SB\_FS | Force v Strain |
| Component.SB\_L | Current Length |

### Constants for RETRACTOR

| **Name** | **Description** |
| --- | --- |
| Component.RT\_F | Force |
| Component.RT\_P | Pullout |
| Component.RT\_FP | Force v Pullout |

### Constants for SLIPRING

| **Name** | **Description** |
| --- | --- |
| Component.SR\_P | Pull through |
| Component.SR\_W | Warp Angle |
| Component.SR\_S | Skew Angle |
| Component.SR\_F | Friction Coeff |
| Component.SR\_N | Normal Force |
| Component.SR\_B1 | Side 1 Belt Force |
| Component.SR\_B2 | Side 2 Belt Force |

### Constants for PRETENSIONER

| **Name** | **Description** |
| --- | --- |
| Component.PR\_FI | 'Fired' (= 1) |

### Constants for CONTACT

| **Name** | **Description** |
| --- | --- |
| Component.CFXA | A Surface X force |
| Component.CFXS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface X force (alternative name for Component.CFXA) [deprecated] |
| Component.CFYA | A Surface Y force |
| Component.CFYS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface Y force (alternative name for Component.CFYA) [deprecated] |
| Component.CFZA | A Surface Z force |
| Component.CFZS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface Z force (alternative name for Component.CFZA) [deprecated] |
| Component.CFMA | A Surface Force Mag |
| Component.CFMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface Force Mag (alternative name for Component.CFMA) [deprecated] |
| Component.CFXB | B Surface X force |
| Component.CFX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface X force (alternative name for Component.CFXB) [deprecated] |
| Component.CFYB | B Surface Y force |
| Component.CFY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface Y force (alternative name for Component.CFYB) [deprecated] |
| Component.CFZB | B Surface Z force |
| Component.CFZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface Z force (alternative name for Component.CFZB) [deprecated] |
| Component.CFMB | B Surface Force Mag |
| Component.CFM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface Force Mag (alternative name for Component.CFMB) [deprecated] |
| Component.CMXA | A Surface X moment |
| Component.CMXS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface X moment (alternative name for Component.CMXA) [deprecated] |
| Component.CMYA | A Surface Y moment |
| Component.CMYS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface Y moment (alternative name for Component.CMYA) [deprecated] |
| Component.CMZA | A Surface Z moment |
| Component.CMZS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface Z moment (alternative name for Component.CMZA) [deprecated] |
| Component.CMXB | B Surface X moment |
| Component.CMX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface X moment (alternative name for Component.CMXB) [deprecated] |
| Component.CMYB | B Surface Y moment |
| Component.CMY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface Y moment (alternative name for Component.CMYB) [deprecated] |
| Component.CMZB | B Surface Z moment |
| Component.CMZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface Z moment (alternative name for Component.CMZB) [deprecated] |
| Component.CMA | A Surface Mass |
| Component.CMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface Mass (alternative name for Component.CMA) [deprecated] |
| Component.CMB | B Surface Mass |
| Component.CMM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface Mass (alternative name for Component.CMB) [deprecated] |
| Component.CENA | A Surface side energy |
| Component.CENS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>A Surface side energy (alternative name for Component.CENA) [deprecated] |
| Component.CENB | B Surface side energy |
| Component.CENM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>B Surface side energy (alternative name for Component.CENB) [deprecated] |
| Component.CFRI | Frictional energy |
| Component.CTEN | Total energy |

### Constants for NODE\_GROUP

| **Name** | **Description** |
| --- | --- |
| Component.RFX | X force |
| Component.RFY | Y force |
| Component.RFZ | Z force |
| Component.RFM | Force Magnitude |
| Component.EN | Energy |
| Component.LFX | Local X force |
| Component.LFY | Local Y force |
| Component.LFZ | Local Z force |
| Component.GRFX | X force |
| Component.GRFY | Y force |
| Component.GRFZ | Z force |
| Component.GRFM | Force Magnitude |
| Component.GEN | Energy |

### Constants for AIRBAG

| **Name** | **Description** |
| --- | --- |
| Component.PR | Pressure |
| Component.EPR | Exact Pressure |
| Component.VOL | Volume |
| Component.DE | Density |
| Component.EDE | Exact Density |
| Component.IE | Internal energy |
| Component.EIE | Exact Internal energy |
| Component.IN | Mass flow rate in |
| Component.OU | Mass flow rate out |
| Component.MIN | Mass in |
| Component.MOU | Mass out |
| Component.MASS | Total mass |
| Component.SA | Surface area |
| Component.TEMP | Gas temperature |
| Component.FR | Reaction force |
| Component.TKE | Translational KE |
| Component.IFE | Inflator Energy |
| Component.DMP | Damping Energy |
| Component.PP | Ave Particle Pressure |
| Component.MAF | Mass flow rate via fabric |
| Component.MAV | Mass flow rate via vent |
| Component.MOF | Mass out via fabric |
| Component.MOV | Mass out via vent |
| Component.A\_WO | Work Atmospheric |
| Component.U\_WO | Work Useful |
| Component.NP | Num Particles |
| Component.AR | Total area |
| Component.PRP | +ve Pressure |
| Component.PRN | -ve Pressure |
| Component.HCE | Heat Convection Energy |
| Component.EV | Enhanced Vent Flag |
| Component.LE | Leak Energy |
| Component.GAS | Gas Flow rate |
| Component.PVO | Por Volume |
| Component.PTE | Part Temperature |
| Component.UN | Unblocked Area |
| Component.BA | Blocked Area |
| Component.LK | Leakage |
| Component.FX | X Force |
| Component.FY | Y Force |
| Component.FZ | Z Force |
| Component.SPR | Static Pressure |
| Component.TPR | Total Pressure |
| Component.STEMP | Static Temperature |
| Component.TTEMP | Total Temperature |
| Component.VFR | Volume Flow Rate |
| Component.MFR | Mass Flow Rate |
| Component.HT | Heat Transfer |
| Component.HTR | Heat Transfer Rate |
| Component.TRE | Translational Energy |
| Component.X | X co-ordinate |
| Component.Y | Y co-ordinate |
| Component.Z | Z co-ordinate |
| Component.VX | X Velocity |
| Component.VY | Y Velocity |
| Component.VZ | Z Velocity |
| Component.VM | Velocity Magnitude |

### Constants for JOINT

| **Name** | **Description** |
| --- | --- |
| Component.FX | X force |
| Component.FY | Y force |
| Component.FZ | Z force |
| Component.FM | Force Magnitude |
| Component.MX | Moment in X |
| Component.MY | Moment in Y |
| Component.MZ | Moment in Z |
| Component.MM | Moment Magnitude |
| Component.EN | Energy |
| Component.PHA | Phi angle |
| Component.PHDT | d(Phi)/dt |
| Component.PHS | Phi stiffness moment |
| Component.PHD | Phi damping moment |
| Component.PHT | Phi total moment |
| Component.THA | Theta angle |
| Component.THDT | d(Theta)/dt |
| Component.THS | Theta stiffness moment |
| Component.THD | Theta damping moment |
| Component.THT | Theta total moment |
| Component.PSA | Psi angle |
| Component.PSDT | d(Psi)/dt |
| Component.PSS | Psi stiffness moment |
| Component.PSD | Psi damping moment |
| Component.PST | Psi total moment |
| Component.AA | Alpha angle |
| Component.ADT | d(Alpha)/dt |
| Component.ALS | Alpha stiffness moment |
| Component.ALD | Alpha damping moment |
| Component.ALT | Alpha total moment |
| Component.BA | Beta angle |
| Component.BDT | d(Beta)/dt |
| Component.BES | Beta stiffness moment |
| Component.BED | Beta damping moment |
| Component.BET | Beta total moment |
| Component.GA | Gamma angle |
| Component.GDT | d(Gamma)/dt |
| Component.GSF | Gamma scale factor |
| Component.DX | X displacement |
| Component.DXDT | d(X)/dt |
| Component.DY | Y displacement |
| Component.DYDT | d(Y)/dt |
| Component.DZ | Z displacement |
| Component.DZDT | d(Z)/dt |
| Component.SFX | X stiffness force |
| Component.SFY | Y stiffness force |
| Component.SFZ | Z stiffness force |
| Component.DFX | X damping force |
| Component.DFY | Y damping force |
| Component.DFZ | Z damping force |
| Component.TFX | X total force |
| Component.TFY | Y total force |
| Component.TFZ | Z total force |
| Component.DP | P displacement |
| Component.DPDT | d(P)/dt |
| Component.DR | R displacement |
| Component.DRDT | d(R)/dt |
| Component.SFP | P stiffness force |
| Component.SFR | R stiffness force |
| Component.DFP | P damping force |
| Component.DFR | R damping force |
| Component.TFP | P total force |
| Component.TFR | R total force |

### Constants for X\_SECTION

| **Name** | **Description** |
| --- | --- |
| Component.XSEC\_FX | X force |
| Component.XSEC\_FY | Y force |
| Component.XSEC\_FZ | Z force |
| Component.XSEC\_FM | Force Magnitude |
| Component.XSEC\_MX | Moment in X |
| Component.XSEC\_MY | Moment in Y |
| Component.XSEC\_MZ | Moment in Z |
| Component.XSEC\_MM | Moment Magnitude |
| Component.XSEC\_CX | X centroid coord |
| Component.XSEC\_CY | Y centroid coord |
| Component.XSEC\_CZ | Z centroid coord |
| Component.XSEC\_A | Area of section |

### Constants for SUBSYSTEM

| **Name** | **Description** |
| --- | --- |
| Component.GKE | Kinetic energy |
| Component.GIE | Internal energy |
| Component.GHG | Hourglass energy |
| Component.GKR | Kinetic Energy Ratio |
| Component.GIR | Internal Energy Ratio |
| Component.GMX | X momentum |
| Component.GMY | Y momentum |
| Component.GMZ | Z momentum |
| Component.MASS | Total mass |
| Component.GCM | Center of mass |
| Component.GXCM | X Center of mass |
| Component.GYCM | Y Center of mass |
| Component.GZCM | Z Center of mass |
| Component.GI11 | Inertia Tensor Row11 |
| Component.GI12 | Inertia Tensor Row12 |
| Component.GI13 | Inertia Tensor Row13 |
| Component.GI21 | Inertia Tensor Row21 |
| Component.GI22 | Inertia Tensor Row22 |
| Component.GI23 | Inertia Tensor Row23 |
| Component.GI31 | Inertia Tensor Row31 |
| Component.GI32 | Inertia Tensor Row32 |
| Component.GI33 | Inertia Tensor Row33 |
| Component.GI1 | Principal inertia i11 |
| Component.GI2 | Principal inertia i22 |
| Component.GI3 | Principal inertia i33 |
| Component.GP11 | Principal Directions Row11 |
| Component.GP12 | Principal Directions Row12 |
| Component.GP13 | Principal Directions Row13 |
| Component.GP21 | Principal Directions Row21 |
| Component.GP22 | Principal Directions Row22 |
| Component.GP23 | Principal Directions Row23 |
| Component.GP31 | Principal Directions Row31 |
| Component.GP32 | Principal Directions Row32 |
| Component.GP33 | Principal Directions Row33 |

### Constants for PART\_GROUP

| **Name** | **Description** |
| --- | --- |
| Component.GKE | Kinetic energy |
| Component.GIE | Internal energy |
| Component.GHG | Hourglass energy |
| Component.GTE | Total energy |
| Component.GMADD | Added mass |

### Constants for GEOMETRIC\_CONTACT

| **Name** | **Description** |
| --- | --- |
| Component.FX | X force |
| Component.FY | Y force |
| Component.FZ | Z force |
| Component.FM | Force Magnitude |
| Component.MX | Moment in X |
| Component.MY | Moment in Y |
| Component.MZ | Moment in Z |
| Component.MM | Moment Magnitude |

### Constants for NODAL\_RB

| **Name** | **Description** |
| --- | --- |
| Component.DX | X Displacement |
| Component.DY | Y Displacement |
| Component.DZ | Z Displacement |
| Component.DM | Displacement Magnitude |
| Component.VX | X Velocity |
| Component.VY | Y Velocity |
| Component.VZ | Z Velocity |
| Component.VM | Velocity Magnitude |
| Component.AX | X Acceleration |
| Component.AY | Y Acceleration |
| Component.AZ | Z Acceleration |
| Component.AM | Acceleration Magnitude |
| Component.CX | X co-ordinate |
| Component.CY | Y co-ordinate |
| Component.CZ | Z co-ordinate |
| Component.RDX | X rotation |
| Component.RDY | Y rotation |
| Component.RDZ | Z rotation |
| Component.RDM | Rotation Magnitude |
| Component.RVX | X rotational velocity |
| Component.RVY | Y rotational velocity |
| Component.RVZ | Z rotational velocity |
| Component.RVM | Rotation Vel Magnitude |
| Component.RAX | X rotational acceleration |
| Component.RAY | Y rotational acceleration |
| Component.RAZ | Z rotational acceleration |
| Component.RAM | Rotation Accel Magnitude |
| Component.D11 | Direction Cosine 11 |
| Component.D12 | Direction Cosine 12 |
| Component.D13 | Direction Cosine 13 |
| Component.D21 | Direction Cosine 21 |
| Component.D22 | Direction Cosine 22 |
| Component.D23 | Direction Cosine 23 |
| Component.D31 | Direction Cosine 31 |
| Component.D32 | Direction Cosine 32 |
| Component.D33 | Direction Cosine 33 |
| Component.LDX | Local X Displacement |
| Component.LDY | Local Y Displacement |
| Component.LDZ | Local Z Displacement |
| Component.LVX | Local X Velocity |
| Component.LVY | Local Y Velocity |
| Component.LVZ | Local Z Velocity |
| Component.LAX | Local X Acceleration |
| Component.LAY | Local Y Acceleration |
| Component.LAZ | Local Z Acceleration |
| Component.LRDX | Local X rotation |
| Component.LRDY | Local Y rotation |
| Component.LRDZ | Local Z rotation |
| Component.LRVX | Local X rotational vel |
| Component.LRVY | Local Y rotational vel |
| Component.LRVZ | Local Z rotational vel |
| Component.LRAX | Local X rotational accel |
| Component.LRAY | Local Y rotational accel |
| Component.LRAZ | Local Z rotational accel |

### Constants for WELD

| **Name** | **Description** |
| --- | --- |
| Component.SW\_F | Axial force |
| Component.SW\_S | Shear force |
| Component.SW\_FAIL | Failure |
| Component.SW\_MF | Maximum Failure |
| Component.SW\_LE | Length |
| Component.SW\_TIME | Failure Time |
| Component.SW\_TO | Torsion |
| Component.SW\_MM | Moment Magnitude |
| Component.SW\_FF | DC Failure Function |
| Component.SW\_NF | Normal Failure |
| Component.SW\_SF | Shear Failure |
| Component.SW\_BF | Bending Failure |
| Component.SW\_AREA | Spotweld Area |

### Constants for SPC

| **Name** | **Description** |
| --- | --- |
| Component.SPC\_FX | X Force |
| Component.SPC\_FY | Y Force |
| Component.SPC\_FZ | Z Force |
| Component.SPC\_FM | Force Magnitude |
| Component.SPC\_MX | Moment in X |
| Component.SPC\_MY | Moment in Y |
| Component.SPC\_MZ | Moment in Z |
| Component.SPC\_MM | Moment Magnitude |
| Component.SPC\_XTF | X Total Set Force |
| Component.SPC\_YTF | Y Total Set Force |
| Component.SPC\_ZTF | Z Total Set Force |
| Component.SPC\_RF | Resultant Set Force |
| Component.SPC\_XMF | X Total Model Force |
| Component.SPC\_YMF | Y Total Model Force |
| Component.SPC\_ZMF | Z Total Model Force |
| Component.SPC\_RMF | Resultant Model Force |

### Constants for BOUNDARY

| **Name** | **Description** |
| --- | --- |
| Component.FX | Applied X Force |
| Component.FY | Applied Y Force |
| Component.FZ | Applied Z Force |
| Component.FR | Applied Resultant force |
| Component.MX | Applied X Moment |
| Component.MY | Applied Y Moment |
| Component.MZ | Applied Z Moment |
| Component.MM | Applied Moment Magnitude |
| Component.EN | Energy from applied force |

### Constants for FSI

| **Name** | **Description** |
| --- | --- |
| Component.PR | Pressure |
| Component.FX | X force |
| Component.FY | Y force |
| Component.FZ | Z force |
| Component.FM | Force Magnitude |
| Component.MP | Mass (Porous+Vent) |
| Component.ML | Mass (Leakage) |
| Component.LFX | Leakage X Force |
| Component.LFY | Leakage Y Force |
| Component.LFZ | Leakage Z Force |
| Component.LFM | Leakage Force Magnitude |
| Component.TEMP | Temperature |
| Component.TC | Temperature Change |
| Component.X | X co-ordinate |
| Component.Y | Y co-ordinate |
| Component.Z | Z co-ordinate |
| Component.SO | Cpld Solid ID |

### Constants for SPH

| **Name** | **Description** |
| --- | --- |
| Component.DE | Density |
| Component.EXX | Strain in XX |
| Component.EYY | Strain in YY |
| Component.EZZ | Strain in ZZ |
| Component.EXY | Strain in XY |
| Component.EYZ | Strain in YZ |
| Component.EZX | Strain in ZX |
| Component.EFS | Effective Stress |
| Component.SXX | Stress in XX |
| Component.SYY | Stress in YY |
| Component.SZZ | Stress in ZZ |
| Component.SXY | Stress in XY |
| Component.SYZ | Stress in YZ |
| Component.SZX | Stress in ZX |
| Component.SM | Smoothing Length |
| Component.TEMP | Temperature |
| Component.ERXX | Strain in XX |
| Component.ERYY | Strain in YY |
| Component.ERZZ | Strain in ZZ |
| Component.ERXY | Strain in XY |
| Component.ERYZ | Strain in YZ |
| Component.ERZX | Strain in ZX |

### Constants for TRACER

| **Name** | **Description** |
| --- | --- |
| Component.CX | X co-ordinate |
| Component.CY | Y co-ordinate |
| Component.CZ | Z co-ordinate |
| Component.CV | Current Vector |
| Component.VX | X Velocity |
| Component.VY | Y Velocity |
| Component.VZ | Z Velocity |
| Component.VM | Velocity Magnitude |
| Component.SXX | Stress in XX |
| Component.SYY | Stress in YY |
| Component.SZZ | Stress in ZZ |
| Component.SXY | Stress in XY |
| Component.SYZ | Stress in YZ |
| Component.SZX | Stress in ZX |
| Component.EPL | Effective Plastic Strain |
| Component.DE | Density |
| Component.RV | Relative Volume |
| Component.AC | Active |

### Constants for PULLEY

| **Name** | **Description** |
| --- | --- |
| Component.PL\_FT | Force |
| Component.PL\_SL | Slip |
| Component.PL\_SR | Slip Rate |
| Component.PL\_AN | Wrap Angle |

### Constants for ICFD

| **Name** | **Description** |
| --- | --- |
| Component.FPX | X Pressure Drag |
| Component.FPY | Y Pressure Drag |
| Component.FPZ | Z Pressure Drag |
| Component.FPM | Pressure Drag Magnitude |
| Component.FVX | X Viscous Drag |
| Component.FVY | Y Viscous Drag |
| Component.FVZ | Z Viscous Drag |
| Component.FVM | Viscous Drag Magnitude |
| Component.MPX | MX Pressure Drag |
| Component.MPY | MY Pressure Drag |
| Component.MPZ | MZ Pressure Drag |
| Component.MPM | Pressure Drag Magnitude |
| Component.MVX | MX Viscous Drag |
| Component.MVY | MY Viscous Drag |
| Component.MVZ | MZ Viscous Drag |
| Component.MVM | Viscous Drag Magnitude |
| Component.CX | X co-ordinate |
| Component.CY | Y co-ordinate |
| Component.CZ | Z co-ordinate |
| Component.CV | Current Vector |
| Component.VX | X Velocity |
| Component.VY | Y Velocity |
| Component.VZ | Z Velocity |
| Component.VM | Velocity Magnitude |
| Component.AVX | X AVelocity |
| Component.AVY | Y AVelocity |
| Component.AVZ | Z AVelocity |
| Component.AVM | AVelocity Magnitude |
| Component.PR | Pressure |
| Component.PA | Average Pressure |
| Component.DE | Density |
| Component.VTX | X Vorticity |
| Component.VTY | Y Vorticity |
| Component.VTZ | Z Vorticity |
| Component.VTM | Vorticity Magnitude |
| Component.QC | Q Criterion |
| Component.VC | Viscosity |
| Component.VT | Viscous Turbulence |
| Component.LS | Level Set Function |
| Component.A | Alpha |
| Component.TEMP | Temperature |
| Component.TAA | Temp Area Average |
| Component.TSA | Temp Sum Average |
| Component.TEH | Average Heat Flux |
| Component.AR | Total Area |
| Component.HTC | Heat Transfer Coeff |
| Component.VO | Volume |
| Component.FR | Flow Rate |

### Constants for CESE

| **Name** | **Description** |
| --- | --- |
| Component.CX | X co-ordinate |
| Component.CY | Y co-ordinate |
| Component.CZ | Z co-ordinate |
| Component.CV | Current Vector |
| Component.VX | X Velocity |
| Component.VY | Y Velocity |
| Component.VZ | Z Velocity |
| Component.VM | Velocity Magnitude |
| Component.VTX | X Vorticity |
| Component.VTY | Y Vorticity |
| Component.VTZ | Z Vorticity |
| Component.VTM | Vorticity Magnitude |
| Component.DE | Density |
| Component.PR | Pressure |
| Component.TEMP | Temperature |
| Component.FPX | X Pressure Force |
| Component.FPY | Y Pressure Force |
| Component.FPZ | Z Pressure Force |
| Component.FPM | Pressure Force Magnitdue |
| Component.FVX | X Viscous Force |
| Component.FVY | Y Viscous Force |
| Component.FVZ | Z Viscous Force |
| Component.FVM | Viscous Force Magnitude |
| Component.AR | Total Area |

### Constants for EM

| **Name** | **Description** |
| --- | --- |
| Component.CX | X co-ordinate |
| Component.CY | Y co-ordinate |
| Component.CZ | Z co-ordinate |
| Component.CV | Current Vector |
| Component.ECX | X Current |
| Component.ECY | Y Current |
| Component.ECZ | Z Current |
| Component.ECM | Current Magnitude |
| Component.BFDX | X BField |
| Component.BFDY | Y BField |
| Component.BFDZ | Z BField |
| Component.BFDM | BField Magnitude |
| Component.AFX | X AField |
| Component.AFY | Y AField |
| Component.AFZ | Z AField |
| Component.AFM | AField Magnitude |
| Component.S | Sigma |
| Component.MUR | Relative Permeability |
| Component.JHR | Joule Heating Rate |
| Component.LOFX | X Lorentz Force |
| Component.LOFY | Y Lorentz Force |
| Component.LOFZ | Z Lorentz Force |
| Component.LOFM | Lorentz Force Magnitude |
| Component.EFX | X EField |
| Component.EFY | Y EField |
| Component.EFZ | Z EField |
| Component.EFM | EField Magnitude |
| Component.SP | Scalar Potential |
| Component.ECV | Voltage |
| Component.ECC | Charge |
| Component.ECCT | Current |
| Component.ECRD | Circuit Resistance |
| Component.ECRJ | Equivalent Resistance |
| Component.ECI | Inductance |
| Component.ECM1 | Mutual Inductance 1 |
| Component.ECM2 | Mutual Inductance 2 |
| Component.ECM3 | Mutual Inductance 3 |
| Component.ECDV | Voltage |
| Component.ECDC | Charge |
| Component.ECDT | Current |
| Component.ECDE | Total Energy |
| Component.PLFX | X Lorentz Force |
| Component.PLFY | Y Lorentz Force |
| Component.PLFZ | Z Lorentz Force |
| Component.PLFM | M Lorentz Force |
| Component.PJHE | Joule Heating Energy |
| Component.PMAG | Magnetic Energy |
| Component.PKIN | Kinetic Energy |
| Component.PPLA | Plastic Energy |
| Component.EIV | Voltage |
| Component.EICT | Current |
| Component.ECRC | Contact Current |
| Component.ECRR | Contact Resistance |
| Component.ECRA | Contact Area |
| Component.EBV | Voltage |
| Component.EBC | Current |
| Component.EBA | Area |
| Component.ECT | Current |
| Component.ERD | Contact Resistance |
| Component.POW | Power |
| Component.ENE | Energy |
| Component.TVO | TotVoltage |
| Component.OCV | OCV |
| Component.DVO | DampVoltage |
| Component.RCT | Current |
| Component.SOC | SOC |
| Component.SOF | SOCFunc |
| Component.SOS | SOCShift |
| Component.SOM | SOCSum |
| Component.RR0 | R0 |
| Component.R10 | R10 |
| Component.C10 | C10 |
| Component.TEM | Temp |
| Component.CNM | Ckt Number |
| Component.ERVC | Volume Current |
| Component.ERSC | Surface Current |
| Component.ERVM | Magnetic Field |
| Component.RUN | Run timestep |
| Component.CFL | Condition timestep |
| Component.RBC | Ratio |
| Component.VC2 | VC2 |
| Component.VC3 | VC3 |
| Component.R20 | R20 |
| Component.R30 | R30 |
| Component.C20 | C20 |
| Component.C30 | C30 |
| Component.OHP | Ohm Heat Power |
| Component.RHP | Reversible Heat Power |
| Component.ECP | Equivalent Capacity Power |
| Component.OHE | Ohm heat energy |
| Component.RHE | Reversible heat energy |
| Component.ECE | Equivalent Capacity energy |
| Component.ESE | Equivalent storage energy |
| Component.ECJH | Ext ckt Joule Heating |
| Component.ECME | Ext ckt Magnetic Energy |
| Component.ECCE | Ext ckt Capacitor Energy |
| Component.MJH | Mesh conductor Joule Heating |
| Component.MME | Mesh conductor Mag Energy |
| Component.AME | Air Magnetic Energy |
| Component.TEE | Total EM Energy |
| Component.TPE | Total Plastic Energy |
| Component.TKE | Total kinetic Energy |
| Component.MSR | Maximum short resistance |
| Component.NSC | Number of short circuits |
| Component.TNC | Total number of circuits |
| Component.TSR | Total short resistance |
| Component.MXR | Maximum resistance |
| Component.SHC | Short circuits |
| Component.TOC | Total circuits |
| Component.TOR | Total resistance |
| Component.ARS | Area short |

### Constants for PBLAST

| **Name** | **Description** |
| --- | --- |
| Component.AIE | Air Internal Energy |
| Component.DPIE | Detn Product IE |
| Component.OIE | Outside Domain IE |
| Component.ATE | Air Translational E |
| Component.DPTE | Detn Product Trans E |
| Component.OTE | Outside Domain Trans E |
| Component.APR | Air Pressure |
| Component.DPPR | Detn Product Pressure |
| Component.RPR | Resultant Pressure |
| Component.AR | Surface Area |
| Component.AFX | Air X Force |
| Component.AFY | Air Y Force |
| Component.AFZ | Air Z Force |
| Component.DPFX | Detn Product X Force |
| Component.DPFY | Detn Product Y Force |
| Component.DPFZ | Detn Product Z Force |
| Component.RFX | Resultant X Force |
| Component.RFY | Resultant Y Force |
| Component.RFZ | Resultant Z Force |

### Constants for PRTUBE

| **Name** | **Description** |
| --- | --- |
| Component.AR | Cross section area |
| Component.DE | Density |
| Component.PR | Pressure |
| Component.VEL | Velocity |

### Constants for BEARING

| **Name** | **Description** |
| --- | --- |
| Component.FX | X Force |
| Component.FY | Y Force |
| Component.FZ | Z Force |
| Component.MX | X Moment |
| Component.MY | Y Moment |
| Component.MZ | Z Moment |
| Component.DX | X Displacement |
| Component.DY | Y Displacement |
| Component.DZ | Z Displacement |
| Component.AX | X Angle |
| Component.AY | Y Angle |
| Component.AZ | Z Angle |
| Component.LFX | Local X Force |
| Component.LFY | Local Y Force |
| Component.LFZ | Local Z Force |
| Component.LMX | Local X Moment |
| Component.LMY | Local Y Moment |
| Component.LMZ | Local Z Moment |
| Component.LDX | Local X Displacement |
| Component.LDY | Local Y Displacement |
| Component.LDZ | Local Z Displacement |
| Component.LAX | Local X Angle |
| Component.LAY | Local Y Angle |
| Component.LAZ | Local Z Angle |

### Constants for CURVOUT

| **Name** | **Description** |
| --- | --- |
| Component.COUT | CURVOUT |

### Constants for DEMRCF

| **Name** | **Description** |
| --- | --- |
| Component.DCFX | X force |
| Component.DCFY | Y force |
| Component.DCFZ | Z force |
| Component.DCFM | Force Mag |
| Component.DCMX | X moment |
| Component.DCMY | Y moment |
| Component.DCMZ | Z moment |
| Component.DCMM | Moment Mag |
| Component.DCM | Mass |

### Constants for index

| **Name** | **Description** |
| --- | --- |
| Component. js\_label | button\_label |