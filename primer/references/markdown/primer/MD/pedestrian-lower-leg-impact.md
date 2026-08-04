###  Pedestrian Lower Leg Impact

PEDLEG\_LOWER 
model, /data/DEMO/PEDESTRIAN\_LEG\_LOWER/biw.key 
impactor, child\_head.key  
$define 3 coordinates on impactor either by method=define or method=nodes 
$orient, define, &lt;name/id of csys&gt; 
$orient, nodes, &lt;name/id&gt;, &lt;name/id&gt;, &lt;name/id&gt; 
 orient, nodes, base node, x node, y node  
$ 
$ following lines up to loadcase are optional 
$tag to activate depenetration 
$ method = contact, contact name/id, dof &lt;x, xz or xyz&gt; 
$ method = partset, partset name/id, dof 
 depenetrate, contact, head to bonnet contact, XZ  
$ 
$ z coordinate 
 z, 200.0  
$ 
$ tag for root directory for output 
 rootdir, /data/DEMO/NCAP\_RUN\_2  
$ tag for root name for output files 
 rootname, childhead 
$  
 reporter, individual.opt 
reporter\_summary, summary.opt  
$ 
$ loadcase lines consist of 
$ directory name, zone name(as dir if blank), X coord, Y coord 
 C1A, C1A, 899.98401, 1393.1749 
C1A\_2, , 889.98401, 1393.1749 
C1B, , 841.03717, 1276.2445 
C2A, C2A, 804.94501, 1171.8967  
Etc.

The pedestrian lower leg impact model involves an impactor translation without rotation. The "Orient" line is used to specify base, X, and Y coordinates.

"Depenetration" is specified as in the Pedestrian Head Impact case.

A constant Z can be specified here. The impactor will not be moved in the Z direction.

templates, root directory, and name may also be specified.

Finally, the loadcase lines consist of a unique directory name, zone name, an X coordinate, and a Y coordinate.

[Previous](pedestrian-head-impact-with-approach-angle.md)  |  [Next](pedestrian-upper-leg-impact.md)