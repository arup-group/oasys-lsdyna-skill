# UnitSystem class

The UnitSystem class contains constants relating to curve unit systems. [More...](this-unitsystem-class.md#UnitSystem_details)

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

## UnitSystem constants

| **Name** | **Description** |
| --- | --- |
| UnitSystem.U1 | U1 unit system (m, kg, s) |
| UnitSystem.U2 | U2 unit system (mm, t, s) |
| UnitSystem.U3 | U3 unit system (mm, kg, ms) |
| UnitSystem.U4 | U4 unit system (mm, g, ms) |
| UnitSystem.U5 | U5 unit system (ft, slug, s) |
| UnitSystem.U6 | U6 unit system (m, t, s) |

| Detailed Description<br>The UnitSystem class is used to define the Unit System for a curve: |
| --- |


```
p.UnitSystem = UnitSystem.U1
```
