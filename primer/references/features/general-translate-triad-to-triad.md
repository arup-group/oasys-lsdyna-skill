###  General Translate Triad to Triad

GENERAL\_TR\_TRIAD 
Model, interior.key 
Impactor, impactor.key  
. 
. as above 
. 
$ loadcase lines consist of output directory, X, Y, Z, X', Y', Z', X", Y", Z" coords, optional velocity 
 RUN1, 1897.38, 602.244, 1205.9, 1900.0, 620.0, 1210.0, 1910.0, 620.0, 1210.0 
RUN2, 1679.84, 661.876, 1087.1, 1700.0, 670.0, 1090.0, 1710.0, 680.0, 1090.0  
Etc.

For the triad to triad transformation, a triad PP'P" is defined for each loadcase. The impactor is rotated such that its base triad (as defined by the orient tag) aligns with the target triad.

[Previous](general-translate-vector-to-vector.md)  |  [Next](list-of-options.md)