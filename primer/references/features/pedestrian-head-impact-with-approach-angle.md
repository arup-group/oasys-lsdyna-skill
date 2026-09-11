###  Pedestrian Head Impact with Approach Angle

PEDHEAD\_ANGLE 
model, /data/DEMO/PEDESTRIAN\_HEAD/biw.key 
impactor, child\_head.key  
$define 3 coordinates on impactor either by method=define or method=nodes 
$orient, define, &lt;name/id of csys&gt; 
$orient, nodes, &lt;name/id&gt;, &lt;name/id&gt;, &lt;name/id&gt; 
 orient, nodes, base node, x node, y node  
$ 
$tag to activate depenetration 
$ method = contact, contact name/id, dof &lt;x, xz or xyz&gt; 
$ method = partset, partset name/id, dof 
 depenetrate, contact, head to bonnet contact, XZ  
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
$ directory name, zone name(as dir if blank), X coord, Y coord, angle of flight, (optional Z coord) 
 C1A, C1A, 899.98401, 1393.1749, 30, 1000 
C1A\_2, C1A, 889.98401, 1393.1749, 40 
C1B, , 841.03717, 1276.2445, 50.5, 1000 
C2A, , 804.94501, 1171.8967, 60  
Etc.

This is identical to the Pedestrian Head Impact model with the addition that an angle of rotation can be specified for each loadcase line. This angle will be applied to rotate the line of flight in the XZ plane of the impactor. This angle is specified as the fifth field. The Z coordinate, in this case, is not defined.

Automated positioning methods use Include\_Transform. For any method which involves rotational transforms of arbitrary angles, the use of \*DEFINE\_BOX inside the include file is to be discouraged. Ansys LS-Dyna rotates boxes by rotating the two vertices, consequently the process may change the shape and volume of the box adversely.

[Previous](pedestrian-head-impact.md)  |  [Next](pedestrian-lower-leg-impact.md)