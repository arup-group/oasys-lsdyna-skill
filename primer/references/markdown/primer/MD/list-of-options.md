###  List of Options

PRIMER's automated model build function supports a number of csv file options (tags), many of which are common across different build types barring DATABASE. The following tables list all such options along with their applicability:
**Options specifiable in the top part of the csv file** 

| Option | Meaning | Applicability |
| deftrans\_string | User-defined string for \*DEFINE\_TRANSFORMATION title | PEDHEAD, PEDHEAD\_ANGLE. Only applicable to GM and CASE master styles |
| depenetrate | Contact or part set used to depenetrate the impactor, as well as the depenetration method - X, XZ, or XZ | All |
| first\_point\_only | All \*DEFINE\_TRANSFORM definitions are written. However, only the first master model is written | PEDHEAD, PEDHEAD\_ANGLE. Only applicable to GM master style |
| impactor | Impactor model | All |
| master\_style | Can be default (0), GM style (1) or CASE style (2):<br> <ol> <li>Default style will generate one master model per loadcase in individual folders </li> <li>GM style will output all *DEFINE_TRANSFORMATION definitions to one file. Individual aster models minus *DEFINE_TRANSFORMATION will be written for each loadcase as in default style </li> <li>CASE style will output all data to one file. Information pertaining to each loadcase will be written under unique *CASE specifiers </li> </ol> | PEDHEAD, PEDHEAD\_ANGLE |
| model | Vehicle model | All |
| node\_set\_bspc | Generate a \*BOUNDARY\_SPC for the specified node set | All |
| offset | Provide an additional offset for the impactor to, for example, account for deployable hoods | PEDHEAD |
| orient | Specify the line of flight for the impactor | All except IHI |
| projection\_method | Control the movement of the impactor - along global Z or back along the line of flight - in order to obtain target points | PEDHEAD |
| reporter | individual file | All |
| reporter\_summary | summary file | All |
| rootdir | Output folder for master models | All |
| rootname | Master model name | All except CASE master style |
| transform\_file | File that will store all \*DEFINE\_TRANSFORMATION definitions in case of GM master style, and all data in case of CASE master style | PEDHEAD, PEDHEAD\_ANGLE. Only applicable to GM and CASE master styles |
| vertical | Activate auto-vertical angle positioning by specifying a chin shell set and degree of freedom - X, XZ, or XYZ | IHI |
| z | Constant Z for all loadcases | PEDLEG\_LOWER |

 **Options specifiable in loadcase rows** 

| Option | Applicability |
| Directory | All |
| Zone | All except IHI and GENERAL types (other than GENERAL\_TRANSLATE\_PARAMETER) |
| X, Y | All |
| Z | All except PEDLEG\_LOWER |
| Angle(s) | IHI, PEDHEAD\_ANGLE, PEDLEG\_UPPER, GENERAL\_TRANSLATE\_PARAMETER, GENERAL\_TRANSLATE\_ROTATE |
| Velocity | IHI, PEDLEG\_UPPER, PEDLEG\_UPPER2, all GENERAL types |
| Parameter name | PEDLEG\_UPPER, PEDLEG\_UPPER2 |
| Parameter value | PEDLEG\_UPPER, PEDLEG\_UPPER2 |

[Previous](general-translate-triad-to-triad.md)  |  [Next](include-file-mass-c-of-g-inertia.md)