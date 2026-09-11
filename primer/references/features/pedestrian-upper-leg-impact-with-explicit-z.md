###  Pedestrian Upper Leg Impact With Explicit Z

PEDLEG\_UPPER\_2 
model, /data/DEMO/PEDESTRIAN\_LEG\_UPPER\_2/biw.key 
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
$ directory name, zone name(as dir if blank), X coord, Y coord, Z coord, Angle, Velocity, optional parameter value, optional parameter name 
 LH\_1, LH\_1,162.957 ,-441.114 , 536, 35.0 ,6.1 ,5.82E-06,RHO 
LH\_2, LH\_2,147.729 ,-387.247 , 536, 35.0 ,6.1 ,5.82E-06,RHO 
LH\_3, LH\_3,165.903 ,-334.394 , 536, 38.5 ,6.8 ,8.71E-06,RHO  
Etc.

This is identical to the PEDLEG\_UPPER type except for the fact that the Z coordinate is explicitly specified here rather than be computed by projection using depenetration information.

Impact angle and velocity can be specified for each loadcase.

**Note on parameter specification**: A parameter name and value may be specified for each loadcase. These are usually intended to furnish different mass values for different loadcases. This may be done by, for example, specifying a parameter for material density and the corresponding desired value

[Previous](pedestrian-upper-leg-impact.md)  |  [Next](general-translate.md)