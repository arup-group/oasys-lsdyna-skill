###  General Translate Vector to Vector

GENERAL\_TR\_VECT 
Model, interior.key 
Impactor, impactor.key  
. 
. as above 
. 
$ loadcase lines consist of output directory, X, Y, Z, X', Y', Z' coords, optional velocity 
 RUN1, 1897.38, 602.244, 1205.9, 1900.0, 620.0, 1210.0 
RUN2, 1679.84, 661.876, 1087.1, 1700.0, 670.0, 1090.0  
Etc.

For the vector to vector transformation format, a vector PP' is defined for each loadcase. The impactor is rotated so that the line of flight vector coincides with the PP' vector. The axis of rotation is the normal to the two vectors.

[Previous](general-translate-rotate.md)  |  [Next](general-translate-triad-to-triad.md)