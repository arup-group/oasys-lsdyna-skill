###  General Translate

GENERAL\_TR 
model, interior.key 
impactor, impactor.key  
$orient tag uses method=nodes or method=define 
 orient, nodes, 4675, 4685, 4679  
$ 
$ following lines up to loadcase are optional 
$ depenetrate tag, method = contact or method = partset 
 depenetrate, partset, 10, XZ  
$ 
$ tag to set root directory for output files 
 Rootdir, /data/DEMO  
$ tag to set root name for output files 
 Rootname, ihi\_test  
$ tags for reporter templates 
 reporter, individual.opt 
reporter\_summary, summary.opt  
$ 
$ loadcase lines consist of 
$ directory, X, Y, Z target cords, optional velocity 
 RUN1, 1897.38, 602.244, 1205.9, -2000.0  
Etc.

If the impactor is to be translated without rotation, this format is applicable. The impactor is moved such that the base coordinate (node 4675) lies on the the target point and then is depenetrated appropriately.

[Previous](pedestrian-upper-leg-impact-with-explicit-z.md)  |  [Next](general-translate-parameter.md)