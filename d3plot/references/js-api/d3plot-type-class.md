# Type class

The Type class defines constants for the types in D3PLOT. [More...](d3plot-type-class.md#Type_details)

The D3PLOT JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Type constants

| **Name** | **Description** |
| --- | --- |
| Type.BEAM | Beam elements |
| Type.BOLT | Bolts (contributes to the count of total connections, but can't provide data or be visualised) |
| Type.BWLD | Beam spotwelds |
| Type.CONTACT | Contact surfaces |
| Type.CONX | All connection types |
| Type.CWLD | \*CONSTRAINED\_SPOTWELD spotwelds |
| Type.DES | Discrete Element Sphere |
| Type.ELEMENT | Generic elements |
| Type.GROUP | Groups |
| Type.GWLD | \*CONSTRAINED\_GENERALIZED spotwelds |
| Type.HSWA | Hex spotweld assemblies |
| Type.HWLD | Hex (Solid) spotwelds |
| Type.JOINT | Joints |
| Type.MASS | Lumped masses |
| Type.MATERIAL | Materials |
| Type.MIG | MIG welds (contributes to the count of total connections, but can't provide data or be visualised) |
| Type.MODEL | Model |
| Type.NODE | Nodes |
| Type.NRB | Nodal Rigid Bodies |
| Type.PART | Parts |
| Type.PRETENSIONER | Pretensioners |
| Type.RBOLT | Rigid bolts (contributes to the count of total connections, but can't provide data or be visualised) |
| Type.RETRACTOR | Retractors |
| Type.RIGIDWALL | Rigidwalls |
| Type.SBENT | Seatbelt types generally |
| Type.SEATBELT | Seatbelt elements |
| Type.SECTION | (Element) section definitions |
| Type.SEGMENT | Contact segments |
| Type.SET\_BEAM | \*SET\_BEAM sets |
| Type.SET\_DISCRETE | \*SET\_DISCRETE sets |
| Type.SET\_NODE | \*SET\_NODE sets |
| Type.SET\_PART | \*SET\_PART sets |
| Type.SET\_SHELL | \*SET\_SHELL sets |
| Type.SET\_SOLID | \*SET\_SOLID sets |
| Type.SET\_TSHELL | \*SET\_TSHELL sets |
| Type.SHELL | Shell elements |
| Type.SLIPRING | Slip-rings |
| Type.SOLID | Solid elements |
| Type.SPC | Single Point Constraint |
| Type.SPH | Smoothed Particle Hydrodynamics |
| Type.SPRING | Springs (discrete elements) |
| Type.TSHELL | Thick shell elements |
| Type.WINDOW | D3PLOT window id |
| Type.XSEC | Database cross-sections |

| Detailed Description<br>The Type class gives you access to the different types that are used in the D3PLOT API.<br>See the documentation below for more details. |
| --- |