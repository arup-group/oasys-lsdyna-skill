###  Move Parts: Positioning Dummy Assemblies

![](../Storage/primer-22-1/primer_links/sect_6/dummies/position-panel-move-parts.png)The rest of this section describes the process of positioning the dummy assemblies, i.e.  ***with***  articulation of its limbs.
 
When you enter the dummy positioner with the Move Parts command several operations are performed:

* Correctness of the dummy definition is checked. Parts and nodes should not appear in more than one assembly, and you are warned if they do and given some options for diagnosing and correcting these errors.
* You cannot have both Dummy and Mechanism positioning active at the same time in the same model. (This is because of the way positioning data is stored: the two processes would conflict.) If you attempt this you will be forced to shut down one operation before you can start the other.
* The current dummy position is saved as an "initial position". If things go wrong in the positioner you can return to this as any time by using Reset all , and if you abort positioning using [Reject](nan)the dummy will automatically be restored to this position.

[Previous](position-positioning-dummies.md)  |  [Next](the-main-positioning-panel.md)