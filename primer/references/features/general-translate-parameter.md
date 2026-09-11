###  General Translate Parameter

GENERAL\_TR\_PARAMETER 
Model, interior.key 
Impactor, impactor.key  
. 
. as above 
. 
$ loadcase lines consist of output directory, zone, X, Y, Z target coords, Horizontal angle (rotation about Z), Vertical angle (rotation about Y), Velocity, Optional Parameter Value, Optional Parameter Name 
 LH\_1, LH\_1, 162.957, -441.114, 536, 60, 0, 6.1, 5.82E-06,RHO 
LH\_2, LH\_2, 147.729, -387.247, 536, 60, 0, 6.1, 5.82E-06,RHO

If the impactor is to be translated and rotated about Y or Z and, optionally, furnished a parameter value and corresponding parameter name, this format is applicable. Rotations will be applied to the impactor before it is translated. The centre of rotation is the impactor base coordinate.
 
**Note on parameter specification** : A parameter name and value may be specified for each loadcase. These are usually intended to furnish different mass values for different loadcases. This may be done by, for example, specifying a parameter for material density and the corresponding desired value
 
**Note on 'Zone' field** : Unlike other GENERAL types, GENERAL\_TR\_PARAMETER includes a zone field (2nd column) which defaults to directory name if left blank
 
**Note on interactive editing** : Interactive editing is currently not available for this build type

[Previous](general-translate.md)  |  [Next](general-translate-rotate.md)