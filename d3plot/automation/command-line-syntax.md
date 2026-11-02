####  Command-Line Syntax

For batch usage it may be more convenient to specify transformations using the command line. The operations above are under /DEFORM, TRANSFORM and are organised as follows:

| ---+--- TRANSLATE <br>| <br>| |  |  | Tx Ty Tz |  | Translate by Tx Ty Tz, eg: <br> translate 10.0 0.0 -100.0 <br>translate off |
| --- | --- | --- | --- | --- | --- |
| or | OFF |
| | <br>+--- REFLECT <br>| <br>| |  |  | Axis Distance |  | "Axis" is X or Y or Z , "distance" is position on axis, eg: <br> reflect Y -1500.0 <br>reflect off |
| or | OFF |
| | <br>+--- ROTATE <br>| <br>| |  |  | Tx Ty Tz Cx Cy Cz |  | Tx Ty Tz are rotation angles in degrees, Cx Cy Cz is centre of rotation, eg: <br> rotate 0 0 30 100.0 10.0 -20.0 <br>rotate off |
| or | OFF |
| | <br>+--- SCALE <br>| <br>| |  |  | Sx Sy Sz |  | Scaling by factors Sx Sy Sz, eg: <br> scale 2.0 2.0 2.0 <br>scale off |
| or | OFF |
| | <br>+--- CANCEL |  |  | &lt;No arguments&gt; |  | Turns off  ***ALL***  transformations (leaving values unchanged) |

There is no "Apply" command in command-line syntax, as transformations are active as soon as they are specified.

Previous: saving-and-reloading-transform-data  |  Next: freeze_coordinates