##  Appendix N: Automated Model Build from Command Line

PRIMER offers the ability to build multiple models from a csv input file.

The command line syntax is simply: **BUILD READ filename.csv** . This may be typed onto the command line of the PRIMER dialogue box or into a file which PRIMER reads in batch mode.

Each csv file contains a header line which determines the type of build and consequent format.

Currently the following types are supported:

DATABASE uses the database/template method as used by MODEL-&gt;BUILD function 
 IHI interior head impact 
 PEDHEAD pedestrian head impact 
 PEDHEAD\_ANGLE pedestrian head impact with approach angle 
 PEDLEG\_LOWER pedestrian lower leg impact 
 PEDLEG\_UPPER pedestrian upper leg impact 
 PEDLEG\_UPPER\_2 pedestrian upper leg impact with explicit Z specification

And the following general formats: 
 GENERAL\_TRANSLATE 
GENERAL\_TRANSLATE\_PARAMETER 
GENERAL\_TRANSLATE\_ROTATE 
GENERAL\_TRANSLATE\_VECTOR 
GENERAL\_TRANSLATE\_TRIAD

Here are examples of each type, with $comments included.

[Previous](environment-variables-that-affect-primer.md)  |  [Next](database.md)