###  Position: Analysing Mechanisms

Once a mechanism has been defined, or read in from file, it can be analysed (positioned) in a variety of ways.
 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_9.png) 
When you enter the mechanism positioner several operations are performed:

* Correctness of the mechanism definition is checked. Parts and nodes should not appear in more than one assembly, and you are warned if they do and given some options for diagnosing and correcting these errors. A more detailed treatment of potential errors and good mechanism modelling practice is given under [Modelling Rules in Appendix B.i](rules-for-tree-files.md#tree_modelling_rules). (Although these rules refer to Dummies they apply equally to mechanisms.)
* You cannot have both Dummy and Mechanism positioning active at the same time in the same model. (This is because of the way positioning data is stored: the two processes would conflict.) If you attempt this you will be forced to shut down one operation before you can start the other.
* The current mechanism position is saved as an "initial position". If things go wrong in the positioner you can return to this as any time by using Reset all , and if you abort positioning using [Reject](nan)the mechanism will automatically be restored to this position.

[Previous](automake-creating-mechanisms-automatically.md)  |  [Next](the-main-positioning-panel-mechanism.md)