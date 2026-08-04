###  Using Mechanisms and Dummies as "Children" of Mechanisms

Both mechanisms and dummies may be defined as "children" of a mechanism.

A "child" is a separate Dummy or Mechanism in which one or more assemblies are linked to an assembly in the master in any combination of Tx, Ty and Tz degrees of freedom. When the master mechanism is positioned then its motion also drives the motion of the linked assemblies in the child causing it to be positioned too.

Force feedback from child to master takes place, so the master will feel resistance if it tries to push the child where it doesn't want to go. However this is a one-way treatment: while child assemblies can be moved within their own child mechanism this will not transmit force to their master, so dragging child assemblies will not move the master mechanism.

Child  ***mechanisms***  may be nested to any depth: a child mechanism may itself have children.

Child  ***dummies***  may not be nested: dummies cannot have children.

The principal use of this capability is to position a dummy on a seat mechanism, and this is described in [Using dummies as "children" of mechanisms](using-dummies-as-children-of-mechanisms.md#child).

The process of defining and linking together master and child is described in [CHILD mechanisms](child-mechanisms.md#children) above.

|  |
| --- |

[Previous](batch-command-line-positioning-1.md)  |  [Next](importing-mechanisms-and-dummies.md)