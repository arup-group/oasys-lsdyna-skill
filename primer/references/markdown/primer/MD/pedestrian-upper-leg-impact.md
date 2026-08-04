###  Pedestrian Upper Leg Impact

PEDLEG\_UPPER 
model, /data/DEMO/PEDESTRIAN\_LEG\_UPPER/biw.key 
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
$ directory name, zone name(as dir if blank), X coord, Y coord, Angle, Velocity, optional parameter value, optional parameter name 
 C1A, , 899.98401, 1393.1749, -40, 5400.0, 5.1, andy 
C1A\_2, ,889.98401, 1393.1749, -50.5, 5800.5 
C1B, C1B, 841.03717, 1276.2445, -45.0, 4200.3, 5,2, bob 
C2A, C2A, 804.94501, 1171.8967, -30.5, 4800.9, 5,3, fred  
Etc.

Impact angle and velocity can be specified for each loadcase.

The Z-coordinate will be calculated by projection determining the target geometry from the depenetrate information as in the Pedestrian Head impact case.

**Note on parameter specification** : A parameter name and value may be specified for each loadcase. These are usually intended to furnish different mass values for different loadcases. This may be done by, for example, specifying a parameter for material density and the corresponding desired value

[Previous](pedestrian-lower-leg-impact.md)  |  [Next](pedestrian-upper-leg-impact-with-explicit-z.md)