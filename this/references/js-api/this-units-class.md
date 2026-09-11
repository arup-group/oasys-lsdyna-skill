# Units class

The Units class contains constants relating to curve units. [More...](this-units-class.md#Units_details)

The T/HIS JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [USER](this-units-class.md#Units::USER)(mass*[real]*, time*[real]*, length*[real]*, angle*[real]*, temperature*[real]*, current (optional)*[real]*)

## Member functions

* [GetDisplayUnits](this-units-class.md#Units::GetDisplayUnits)()
* [SetDisplayUnits](this-units-class.md#Units::SetDisplayUnits)(unit system*[String]*)

## Units constants

| **Name** | **Description** |
| --- | --- |
| Units.ACCELERATION | Acceleration units |
| Units.AREA | Area units |
| Units.CHARGE | Charge units |
| Units.CONDUCTIVITY | Conductivity units |
| Units.CURRENT | Current units |
| Units.DENSITY | Density units |
| Units.DISPLACEMENT | Displacement units |
| Units.ELECTRIC\_FIELD\_VECTOR | Electric Field Vector units |
| Units.ENERGY | Energy units |
| Units.ENERGY\_DENSITY | Energy Density units |
| Units.FLOW\_RATE | Flow Rate units |
| Units.FLUX | Thermal Flux units |
| Units.FORCE | Force units |
| Units.FORCE\_WIDTH | Force per unit width units |
| Units.FREQUENCY | Frequency units |
| Units.HEAT\_TRANSFER\_COEFF | Heat Transfer coefficient units |
| Units.INDUCTANCE | Inductance units |
| Units.INERTIA | Inertia units |
| Units.LENGTH | Length units |
| Units.MAGNETIC\_FLUX\_VECTOR | Magnetic Flux Vector units |
| Units.MASS | MAss units |
| Units.MASS\_FLOW | Mass Flow rate units |
| Units.MOMENT | Moment units |
| Units.MOMENTUM | Momentum units |
| Units.MOMENT\_WIDTH | Moment per unit width units |
| Units.NONE | No units |
| Units.POWER | Power units |
| Units.PRESSURE | Pressure units |
| Units.Q\_CRITERION | Q Criterion units |
| Units.RESISTANCE | Resistance units |
| Units.ROTATION | Rotation units |
| Units.ROTATIONAL\_ACCELERATION | Rotational Acceleration units |
| Units.ROTATIONAL\_VELOCITY | Rotational Velocity units |
| Units.STRAIN | Strain units |
| Units.STRESS | Stress units |
| Units.TEMPERATURE | Temperature units |
| Units.THERMAL\_DIFFUSIVITY | Thermal Diffusivity units |
| Units.TIME | Time units |
| Units.UNKNOWN | Unknown units |
| Units.VECTOR\_POTENTIAL | Vector Potential units |
| Units.VELOCITY | Velocity units |
| Units.VISCOSITY | Viscosity units |
| Units.VOLTAGE | Voltage units |
| Units.VOLUME | Volume units |
| Units.VORTICITY | Vorticity units |
| Units.WORK | Work units |

| Detailed Description<br>The Units class is used to define the units for each axis of a curve: |
| --- |


```
p.x_axis_units = Units.LENGTH
      
```


| Details of functions 
GetDisplayUnits()

Description<br>Returns the Display units |
| --- |

#### Arguments

No arguments

| Returns
<br>String indicating the display unit system<br>
Return type
<br>String |
| --- |

| Example
<br>To get the display units<br>
```
var units = Units.GetDisplayUnits();
```
 |
| --- |

* * *

| SetDisplayUnits(unit system*[String]*)

Description<br>Sets the display units to the units provided by the user |
| --- |

#### Arguments

* unit system (String)
 
The unit system you want to set the display units to

| Returns
<br>TRUE if the Display units are set successfully else FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set the display units to "U2"<br>
```
Units.SetDisplayUnits("U2");
```
 |
| --- |

* * *

| USER(mass*[real]*, time*[real]*, length*[real]*, angle*[real]*, temperature*[real]*, current (optional)*[real]*) [static]
Description<br>Setup a user defined UNIT |
| --- |

#### Arguments

* mass (real)
 
Power for mass dimensions.

* time (real)
 
Power for time dimensions.

* length (real)
 
Power for length dimensions.

* angle (real)
 
Power for angle dimensions.

* temperature (real)
 
Power for temperature dimensions.

* current (optional) (real)
 
Power for current dimensions.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To set the y-axis unit of curve l to (m/s)^2:<br>
```
l.y_unit = Units.USER(0.0,2.0,-2.0,0.0,0.0,0.0);
```
 |
| --- |

* * *