### Importing Dummies and other Mechanisms into an existing mechanism.

Although both Dummies and Mechanisms can be moved as "children" this approach has limitations:

* The parent can "drive" motion of the child, but not vice-versa.
* Only a single connection between parent and child is allowed.

The "import" process works differently by importing the mechanism or dummy definition directly so that its assemblies and connections are siblings of those already in the mechanism, with no parent/child hierarchy. This permits arbitrary connections between assemblies and means that motion of any assembly can drive that of any other.

To import a mechanism or assembly either create a new mechanism or edit an existing one and use the Import button:

![](../Storage/primer-22-1/importing-mechanisms-and-dummies-2022-12-12.png) ![](../Storage/primer-22-1/importing-mechanisms-and-dummies-2022-12-12-1.png)

In this example a Dummy #1 is being added to existing Mechanism #1.

Importing a Mechanism definition is a simply process of adding the contents of the mechanism, suitably relabelled to avoid clashes, to the existing mechanism.

The process of importing a Dummy definition works as follows:

* Assemblies are added verbatim, but have their "child" assembly information removed.
* Mechanism connections are added between assemblies to reproduce the tree connectivity of the dummy.

Connections permitted to move in more than one degree of freedom are modelled as mechanism PIN joints. If a \*CONSTRAINED\_JOINT\_STIFFNESS definition is used to limit movement in some local coordinate system ("stop angles") this is copied over and will limit rotation about the pin in the mechanism in the same way.

Connections limited to rotation about a single degree of freedom are modelled as mechanism HINGE joint. If joint stiffness definition is used to define stop angles these will use the existing angular limits in the mechanism to limit rotation.
* Stretch definitions are copied over verbatim and will act in the same way.

Initially there will be no connection between the existing Mechanism and the newly imported data so it will be necessary to create at least one new connection between existing and new assemblies if they are to influence each other.

Importing a Mechanism or Dummy does not change it in any way: both original definition and the copy in the target of the copy will exist. Since both refer to the same underlying nodes and elements this means that either can be used to articulate these, but to avoid confusion it is probably best to use only one of them.

You can only import Mechanisms and Dummies which already exist in this model, to import them from a different model it will be necessary first to merge the new definition into this model. The reason for this restriction is that \*MECHANISM and \*DUMMY definitions only contain *references* to structure within this model, not the elements and nodes themselves. In order to import a definition from a different model it will also be necessary to import its associated structure and this is quite likely to involve quite a lot of complexity which is best handled separately by PRIMER's [Model Merge](model-merge.md) process.

It is also possible to create a free-standing Mechanism directly from a Dummy, see [Dummies, Exporting Dummies as Mechanisms](exporting-dummies-as-mechanisms.md).
[Previous](using-mechanisms-and-dummies-as-children-of-mechanisms.md)  |  [Next](mechanisms-and-include-transform.md)