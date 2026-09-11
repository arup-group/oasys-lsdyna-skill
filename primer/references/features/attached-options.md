###  Attached Options
 
There are several options available to the user to increase the flexibility of the attached panel.
 
* Beam 3rd nodes
* Beam PID's
* Tied Contacts
* Recursive

**Beam 3rd nodes**will find attached entities through a beam's 3rd node (and vice versa).
 
**Beam PID's**will find attached beams that refer to a part displayed through their PID1 and PID2 fields.
 
**Tied contacts**will find attached elements through DYNA tied contacts using PRIMER 's contact penetration checker.
 
**Recursive** If iteration limit is set to zero, **Attache** **d** will be repeated until no more items can be found or timeout is reached (default 60s). In this mode we speedup the attached operation so each step is not necessarily an iteration. On the other hand, If iteration limit is set to N, then that precise number of iterations will be performed. This will run considerably slower than the original recursive method.
 
**Reduced Recheck of tied contact** Checking of tied contacts is the slowest part of attached process. Normally if any data in the model has changed (e.g. edit update), contacts will have to be recalculated. If you are confident that contacts have not changed you can use Reduced Recheck (at your own risk)
 
![](../Storage/primer-22-1/attached-options/attached-options-2025-04-29.png)
 
When recursive attached has completed successfully pressing reverse all blanking (shortcut R) will usefully show items unattached to the original selection.
 
Instead of finding attached to all the visible entities, the user can select the entity/entities they wish to find entities attached to. This is done by selecting Selected for the method instead of Visible .
 
In selected mode, an object menu is used to select the "seed" items. Use Clear Selected to reset your selection.
 
### ![](../Storage/primer-22-1/primer_links/sect_6/attached/fig_6_6_7.gif)

### Recursive Find Attached using 40 iterations

### ![](../Storage/primer-22-1/attached-options/attached-options-2025-04-29-1.png)

![](../Storage/primer-22-1/attached-options/attached-options-2025-04-29-3.png)

### ![](../Storage/primer-22-1/attached-options/attached-options-2025-04-29-2.png)

[Previous](what-does-attached-to-actually-mean.md)  |  [Next](restricting-the-extent-of-attached-to-propagation.md)