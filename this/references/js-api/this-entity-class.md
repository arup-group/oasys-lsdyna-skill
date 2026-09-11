# Entity class

The Entity class contains constants relating to Entity types. [More...](this-entity-class.md#Entity_details)

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

## Entity constants

| **Name** | **Description** |
| --- | --- |
| Entity.AIRBAG | AIRBAG entity code (for all airbag related entities) |
| Entity.AIRBAG\_CHAMBER\_DATA | AIRBAG CHAMBER DATA entity code |
| Entity.AIRBAG\_CPM\_PART\_DATA | AIRBAG CPM PART DATA entity code |
| Entity.AIRBAG\_CPM\_SENSORS | AIRBAG CPM SENSORS entity code |
| Entity.AIRBAG\_CV\_PART\_DATA | AIRBAG CV PART DATA entity code |
| Entity.AIRBAG\_DATA | AIRBAG DATA entity code |
| Entity.AIRBAG\_PART\_DATA | AIRBAG PART DATA entity code |
| Entity.BEAM | BEAM entity code |
| Entity.BEAM\_DISCRETE | DISCRETE BEAM entity code |
| Entity.BEAM\_NORMAL | NORMAL BEAM entity code |
| Entity.BEARING | BEARING entity code |
| Entity.BOUNDARY | BOUNDARY entity code |
| Entity.BOUNDARY\_DIS\_NODAL\_LOAD | DISCRETE NODAL LOAD entity code |
| Entity.BOUNDARY\_DIS\_RBODY\_LOAD | DISCRETE RIGID BODY LOAD entity code |
| Entity.BOUNDARY\_PRES\_NODAL\_LOAD | PRESSURE NODAL LOAD entity code |
| Entity.BOUNDARY\_VEL\_NODAL\_LOAD | VELOCITY NODAL LOAD entity code |
| Entity.BOUNDARY\_VEL\_RBODY\_LOAD | VELOCITY RIGID BODY LOAD entity code |
| Entity.CESE | CESE entity code |
| Entity.CESE\_DRAG\_DATA | CESE FSI DRAG DATA entity code |
| Entity.CESE\_NODE\_DATA | CESE NODE DATA entity code |
| Entity.CESE\_POINT\_DATA | CESE POINT DATA entity code |
| Entity.CESE\_SEGMENT\_DATA | CESE SEGMENT SET DATA entity code |
| Entity.CONTACT | CONTACT entity code |
| Entity.CONTACT\_ENERGIES | CONTACT ENERGIES entity code |
| Entity.CONTACT\_FORCES | CONTACT FORCES entity code |
| Entity.CURVOUT | CURVOUT entity code |
| Entity.DEMRCF | DEMRCF entity code |
| Entity.EM | EM entity code |
| Entity.EM\_BOUNDARYOUT\_DATA | EM BOUNDARYOUT DATA entity code |
| Entity.EM\_CIRCUIT0D\_DATA | EM CIRCUIT0D DATA entity code |
| Entity.EM\_CIRCUITRES\_DATA | EM CIRCUITRES DATA entity code |
| Entity.EM\_CIRCUIT\_DATA | EM CIRCUIT DATA entity code |
| Entity.EM\_GLOBAL\_DATA | EM GLOBAL DATA entity code |
| Entity.EM\_ISOPOTCONNOUT\_DATA | EM ISOPOTCONNOUT DATA entity code |
| Entity.EM\_ISOPOTOUT\_DATA | EM ISOPOTOUT DATA entity code |
| Entity.EM\_NODE\_DATA | EM NODE DATA entity code |
| Entity.EM\_PARTDATA\_DATA | EM PARTDATA DATA entity code |
| Entity.EM\_POINT\_DATA | EM POINT DATA entity code |
| Entity.EM\_RANDLESCELL\_DATA | EM RANDLESCELL DATA entity code |
| Entity.EM\_RISC\_DATA | EM RANDLESINTSHORTCELL DATA entity code |
| Entity.EM\_ROGOCOIL\_DATA | EM ROGOCOIL DATA entity code |
| Entity.FSI | FSI entity code |
| Entity.FSI\_SENSOR\_DATA | FSI SENSOR DATA entity code |
| Entity.FSI\_SURFACE\_DATA | FSI SURFACE DATA entity code |
| Entity.GEOMETRIC\_CONTACT | GEOMETRIC CONTACT entity code |
| Entity.ICFD | ICFD entity code |
| Entity.ICFD\_DRAG\_DATA | ICFD DRAG DATA entity code |
| Entity.ICFD\_ICVOUT\_ICVI\_DATA | ICFD ICVOUT ICVI DATA entity code |
| Entity.ICFD\_ICVOUT\_ICV\_DATA | ICFD ICVOUT ICV DATA entity code |
| Entity.ICFD\_NODE\_DATA | ICFD NODE DATA entity code |
| Entity.ICFD\_POINT\_DATA | ICFD POINT DATA entity code |
| Entity.ICFD\_THERMAL\_DATA | ICFD THERMAL DATA entity code |
| Entity.JOINT | JOINT entity code |
| Entity.JOINT\_FLEXION\_TORSION | FLEXION TORSION JOINT entity code |
| Entity.JOINT\_GENERALIZED | GENERALIZED JOINT entity code |
| Entity.JOINT\_JOINT | Conventional LS-DYNA JOINT entity code |
| Entity.JOINT\_TRANSLATIONAL | TRANSLATIONAL JOINT entity code |
| Entity.MASS | MASS entity code |
| Entity.MODEL | MODEL entity code |
| Entity.NODAL\_RB | NODAL RIGID BODY entity code |
| Entity.NODAL\_RB\_BODY | BODY in NODAL RIGID BODY entity code |
| Entity.NODAL\_RB\_PART | PART in NODAL RIGID BODY entity code |
| Entity.NODE | NODE entity code |
| Entity.NODE\_GROUP | NODAL FORCE GROUP entity code |
| Entity.NODE\_GROUP\_GROUPS | GROUPS in NODAL FORCE GROUP entity code |
| Entity.NODE\_GROUP\_NODES | NODES in NODAL FORCE GROUP entity code |
| Entity.PART | PART entity code |
| Entity.PART\_GROUP | PART GROUP entity code |
| Entity.PBLAST | PBLAST entity code |
| Entity.PBLAST\_DATA | PBLAST DATA entity code |
| Entity.PBLAST\_PART | PBLAST PART entity code |
| Entity.PRETENSIONER | PRETENSIONER entity code |
| Entity.PRTUBE | PRTUBE entity code |
| Entity.PULLEY | PULLEY entity code |
| Entity.RETRACTOR | RETRACTOR entity code |
| Entity.RIGIDWALL | RIGIDWALL entity code |
| Entity.SEATBELT | SEATBELT entity code |
| Entity.SHELL | SHELL entity code |
| Entity.SLIPRING | SLIPRING entity code |
| Entity.SOLID | SOLID entity code |
| Entity.SPC | SPC entity code |
| Entity.SPC\_FORCES | SPC FORCES entity code |
| Entity.SPC\_MODEL | SPC MODEL entity code |
| Entity.SPC\_MOMENTS | SPC MOMENTS entity code |
| Entity.SPC\_SET | SPC SET entity code |
| Entity.SPH | SPH entity code |
| Entity.SPRING | SPRING entity code |
| Entity.SPRING\_ROTATIONAL | ROTATIONAL SPRING entity code |
| Entity.SPRING\_TRANSLATIONAL | TRANSLATIONAL SPRING entity code |
| Entity.SUBSYSTEM | SUBSYSTEM entity code |
| Entity.THICK\_SHELL | THICK SHELL entity code |
| Entity.TRACER | TRACER entity code |
| Entity.WELD | WELD entity code |
| Entity.WELD\_ASSEMBLY | WELD ASSEMBLY entity code |
| Entity.WELD\_CONSTRAINED | CONSTRAINED WELD entity code |
| Entity.WELD\_GENERALISED | GENERALISED WELD entity code |
| Entity.WELD\_NON\_NODAL | NON-NODAL WELD entity code |
| Entity.WELD\_SOLID | SOLID WELD entity code |
| Entity.WELD\_SPOTWELD\_BEAMS | SPOTWELD BEAMS entity code |
| Entity.X\_SECTION | CROSS SECTION entity code |

| Detailed Description<br>The Entity class is used to define entity type codes that can then be compared with the entity Curve property and input for functions in the Model class. |
| --- |


```
Node = Entity.NODE;
```
