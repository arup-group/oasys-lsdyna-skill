##  UNITS

T/HIS 9.4 onwards can automatically add unit information to graph labels and it can convert results from one unit system to another.

Each model in T/HIS can have a Unit System defined for it and a separate Unit System can be defined for displaying results. T/HIS will automatically convert results from the model Unit System to the display Unit System. T/HIS has 6 built in unit systems.

| Unit System name | Units |
| --- | --- |
| U1 | m, kg, s |
| U2 | mm, t, s |
| U3 | mm, kg, ms |
| U4 | mm, g, ms |
| U5 | ft, slug, s |
| U6 | m, t, s |

###  Setting the unit system for a model

To set the unit system for a model  ****

| Keyword | second word | third word | fourth word | notes |
| --- | --- | --- | --- | --- |
| units | model | n | U1 | Set the unit system for model 'n' to U1 |
| U2 | Set the unit system for model 'n' to U2 |
| U3 | Set the unit system for model 'n' to U3 |
| U4 | Set the unit system for model 'n' to U4 |
| U5 | Set the unit system for model 'n' to U5 |
| U6 | Set the unit system for model 'n' to U6 |
| all | *as above* | Set the unit system for all models |

###  

### Setting the DISPLAY unit system

To set the display unit system

| Keyword | second word | third word | notes |
| --- | --- | --- | --- |
| units | display | U1 | Set the display unit system to U1 |
| U2 | Set the display unit system to U2 |
| U3 | Set the display unit system to U3 |
| U4 | Set the display unit system to U4 |
| U5 | Set the display unit system to U5 |
| U6 | Set the display unit system to U6 |

###  

### Curve Axis units

By default T/HIS will automatically set the Unit System for any curves read from a model to those of the model. In addition to setting the curve Unit System, T/HIS will automatically set a unit type for the X and Y axis of the curve. These unit types are maintained through curve operations so that the correct units can be displayed for each curve.

The X and Y Axis units for a curve can be manually set if required.

| Keyword | second word | third word | additional words | notes |
| --- | --- | --- | --- | --- |
| unit | cx | curve #1 | curve #2 to curve #n | ## | *Unit name* | ## ends the curve list <br>Set the X axis unit for curves |
| \* | ## |  | *Unit name* | ## ends the curve list <br>Set the X axis unit for all curves |
| cy | curve #1 | curve #2 to curve #n | ## | *Unit name* | ## ends the curve list <br>Set the Y axis unit for curves |
| \* | ## |  | *Unit name* | ## ends the curve list <br>Set the Y axis unit for all curves |

The Unit name can be any of the following

| **Time** | **Rotation** | **Momentum** | **Energy Den** |
| --- | --- | --- | --- |
| **Energy** | **Rot Vel** | **Density** | **Mass Flow** |
| **Work** | **Rot Accel** | **Stress** | **Frequency** |
| **Temperature** | **Length** | **Strain** | **Power** |
| **Displacement** | **Area** | **Force** | **Thermal Flux** |
| **Velocity** | **Volume** | **Moment** | **Force width** |
| **Accel** | **Mass** | **Pressure** | **Moment width** |
| **Viscosity** | **Thermal Diffusivity** | **Vorticity** | **Q Criterion** |
| **Current** | **Vec Potential** | **Magnetic Flux Vec** | **Elec Field Vec** |
| **Conductivity** |

####  Curve Unit Systems

If a curve has been read in from any source other than a model then the Unit System can also be set.

| Keyword | second word | third word | additional words | notes |
| --- | --- | --- | --- | --- |
| units | cu | curve #1 | curve #2 to curve #n | ## | *Unit System name* | ## ends the curve list <br>Set the Unit System for curves |
| \* | ## |  | *Unit System name* | ## ends the curve list <br>Set the Unit System for all curves |

####  Other UNIT options

If a CSV file is written out from within a FAST-TCF script (see [FAST-TCF CURVE OUTPUT](fast-tcf-curve-output.md#curve_output)) then by default it will contain rows containing UNIT information for the curves if UNITS have been defined.

Some third party applications and scripts can not read T/HIS CSV files containing this additional UNIT information correctly. The following option can be added to FAST-TCF scripts to turn on and off the output of this additional information.

| Keyword | second word | third word | notes |
| --- | --- | --- | --- |
| unit | csv | on | Turns on the output of UNIT information to CSV files |
| off | Turns off the output of UNIT information to CSV files |

Previous: data-extraction-reference-table  |  Next: curve-tags-2