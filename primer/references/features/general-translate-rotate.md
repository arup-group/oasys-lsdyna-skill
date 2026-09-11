###  General Translate Rotate

GENERAL\_TR\_ROTATE 
Model, interior.key 
Impactor, impactor.key  
. 
. as above 
. 
$ loadcase lines consist of output directory, X, Y, Z target coords, angle about X, Y, Z, optional velocity 
 RUN1, 1897.38, 602.244, 1205.9, 0, -40, 140, 5340. 
RUN2, 1679.84, 661.876, 1087.1, 0, -30, 120, 5340.

If the impactor is to be rotated into position as well as translated this format is applicable. For each loadcase, three global rotations are defined. These will be applied to the impactor before it is translated. The centre of rotation is the impactor base coordinate.

[Previous](general-translate-parameter.md)  |  [Next](general-translate-vector-to-vector.md)