###  Interior Head Impact

IHI 
Model, /data/DEMO/interior.key 
Impactor, fmh.key  
$ 
$ following lines up to loadcase are optional 
$ tag to activate depenetration function 
$ method = contact, contact name/id, dof &lt;x, xz or xyz&gt; 
 Depenetrate, contact, head to trim, XZ  
$ 
$ tag to activate auto-vertical angle positioning 
$ chin shell set name/id, dof &lt;x, xz or xyz&gt; 
 Vertical, 5000, XZ  
$ 
$ tag to set root directory for output files 
 Rootdir, /data/DEMO  
$ tag to set root name for output files 
 Rootname, ihi\_test  
$ tags for reporter templates 
 Reporter, individual.opt 
Reporter\_summary, summary.opt  
$ 
$ loadcase lines consist of 
$ directory, x, y, z target coords, horizontal angle, vertical angle, velocity for each 
 AP1, 1897.38, 602.244, 1205.9, 140, 40, 5364.0 
AP3, 1679.84, 661.876, 1087.14, 120, 30, 5364.0 
BP1, 2495.27, 578.925, 1237.79, 90, 23, 6705.0 
 $ for automatic vertical angle positioning, the loadcase line contains two more entries, 
$ AUTO to tell PRIMER this is the automatic case, and the angle to rotate back by 
$ after the chin has touched the trim. In this case, the vertical angle is the 
$ maximum vertical angle the headform can rotate to. 
 BP2, 1997.65, 567.356, 13455.8, 160, 50, 5364.0, AUTO, 10.0

It is also possible to define a positional node for each loadcase line. This headform node is used to position the headform. In the absence of a positional node, PRIMER will just use the headform default node. The positional node is always defined after the velocity on the loadcase line, so the following lines are all valid:

BP2, 1997.65, 567.356, 13455.8, 160, 50, 5364.0, 1000000 - (positional node defined, no automatic vertical angle positioning) 
 BP2, 1997.65, 567.356, 13455.8, 160, 50, 5364.0, AUTO, 10.0 - (positional node not defined, but the automatic vertical angle positioning has been activated) 
 BP2, 1997.65, 567.356, 13455.8, 160, 50, 5364.0, 1000000, AUTO, 10.0 - (Both positional node and automatic vertical angle positioning have been activated)

In the case of the Oasys Ltd free motion headform the base coordinates of the impactor are taken from the head coordinate system and so do not need to be defined here.

**Note - the unpositioned head must face in +ve global X (local X aligned with global X axis) and the vehicle must face in -ve global X** . This is applicable for all model build applications.

For each loadcase the horizontal and vertical angles of the impactor are set by rotating about the base node, then the head is moved such that the base node is on the target point.

If the depenetrate option is active and the contact is valid, i.e. the latent ids of the trim parts have been added to the surfA side, PRIMER will automatically depenetrate the head. The motion during depenetration is controlled by the dof setting: 
Dof = X, head is locked onto the local X axis and depenetrated without changing local y or z coordinates 
Dof = XZ, (recommended) head is locked in the local XZ plane and depenetrated without changing the local y coordinate 
Dof = XYZ, head is moves freely during depenetration 
The advantage of using the xz or xyz methods is that the additional freedom will allow the initial impact point to be achieved more closely to the target point.

For more information on the auto vertical angle positioning, see [Selecting a Target](selecting-a-target.md#auto_verical_tool). The CSV model build method works in the same way as the method within PRIMER's FMH positioning panel.

On completion of the build, a master dyna keyword will be output to directories, /&lt;rootdir&gt;/AP1/ihi\_test.key, etc. in which the main model is referenced by \*INCLUDE and the impactor by \*INCLUDE\_TRANSFORM.

Additionally, in &lt;rootdir&gt; a submission (.lst) file will be written which may be read by the Shell.

By default reporter variables XCOORD, YCOORD,ZCOORD,H\_ANG,V\_ANG,VELOCITY are passed into the file. These may be accessed by the individual reporter templates.

Automated positioning methods use Include\_Transform. For any method which involves rotational transforms of arbitrary angles, the use of \*DEFINE\_BOX inside the include file is to be discouraged. Ansys LS-Dyna rotates boxes by rotating the two vertices, consequently the process may change the shape and volume of the box adversely.

Note the headform model should contain post-end \*HEADFORM cards with a blank line under \*TARGET. It should not have any \*TARGET\_POINT cards.

[Previous](database.md)  |  [Next](pedestrian-head-impact.md)