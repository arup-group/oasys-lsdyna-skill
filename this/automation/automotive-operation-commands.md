###  Automotive operation commands

| **Description** | **Keyword** | **Operation command** | **Following word #1** | **Following word #2** | **Additional words** | **Notes** |
| --- | --- | --- | --- | --- | --- | --- |
| **Delta V** | oper | acu | curve #1 | offset | time period |  |
| **Acceleration severity index** | oper | asi | Accn x curve # | Accn y curve # | Accn z curve # | word6 = acceleration conversion factor |
| word7 = x limit |
| word8 = y limit |
| word9 = z limit |
| **Butterworth filter** | oper | but | curve #1 | cut off frequency | order |  |
| **C60 filter** | oper | c60 | curve #1 | - | - |  |
| **C180 filter** | oper | c180 | curve #1 | - | - |  |
| **C600 filter** | oper | c600 | curve #1 | - | - |  |
| **C1000 filter** | oper | c1000 | curve #1 | - | - |  |
| **Clip value** | oper | cva | curve #1 | time window | Label displayed on screen *(optional)* | Value is stored with the output curve |
| **Exceedence** | oper | exc | curve #1 | auto / pos / neg | - |  |
| **Fir filter** | oper | fir | curve #1 | - | - |  |
| **Hic** | oper | hic | curve #1 | division scale factor | time period | Value is stored with the output curve |
| **Hicd** | oper | hicd | curve #1 | division scale factor | time period | Value is stored with the output curve |
| **Neck injury criteria** | oper | nij | Shear curve # | Axial curve # | Moment curve # | word6 = Fzc tension |
| word7 = Fzc compression |
| word8 = Myc flexion |
| word9 = Myc extension |
| word10 = Distance from joint |
| **Regularise** | oper | reg | curve #1 | new dt value | - |  |
| **THIV** | oper | thi | Accn x curve # | Accn y curve # | Yaw rate curve # | word6 = Horizontal distance |
| word7 = Lateral distance |
| word8 = Head to vehicle distance |
| **TTI** | oper | tti | Upper rib curve # | Lower rib curve # | Lower spine curve # | Value is stored with the output curve |
| **Viscous criteria ECER95** | oper | vc | curve #1 | constant A | constant B | ECER95 method |
| **Viscous criteria IIHS** | oper | vc2 | curve #1 | constant A | constant B | IIHS method |
| **Curve Correlation (strict)** | oper | corr | strict | curve #1 | curve #2 | Value is stored with the output curves |
| **Curve Correlation (loose)** | oper | corr | loose | curve #1 | curve #2 | Value is stored with the output curves |
| **Weighted Integrated Factor Curve Correlation (WIFAC)** | oper | wif | curve #1z | curve #2 | - | Value is stored with the output curve |
| **Occupant Load Criterion (OLC)** | oper | olc | X Acceleration curve # | X Velocity curve # or Initial velocity as constant | - | - |
| **Tibia Index (TI)** | oper | ti | Axial curve # | X Moment curve # | Y Moment Curve # | word6 = Fzc Critical Force |
| word7 = Mrc Critical Bending Moment |
| **DAMAGE (DMG)** | oper | dmg | X Rot. Vel Curve# | Y Rot. Vel Curve# | Z Rot. Vel Curve# | Calculation method<br><br>word6 = rk4 / rkf45 / nbm |

Previous: maths-operation-commands  |  Next: seismic-operation-commands