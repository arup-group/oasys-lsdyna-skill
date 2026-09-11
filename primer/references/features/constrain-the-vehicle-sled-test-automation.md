###  Constrain the Vehicle

Click Create vehicle constraint/contact to create vehicle constraint and contact. All the options available on "Vehicle constraint/contact" input panel are optional.

Select "Constrain bottom rigid plate" option as shown below in red highlighted box (1) to constrain the bottom rigid plate in all DOFs (including rotations) except X-translations.

Select "Create \*CONSTRAINED\_EXTRA\_NODE" option as shown below in red highlighted box (2) to constrain the vehicle with a rigid plate using \*CONSTRAINED\_EXTRA\_NODES. Use "Constrained extra node set" to provide a node set for the \*CONSTRAINED\_EXTRA\_NODES.

Alternatively, "Create \*CONSTRAINED\_RIGID\_BODIES" option as shown below in red highlighted box (3) can be used to constrain the vehicle on the rigid plate. If this option is selected, use "Const. rigid body parts" to provide parts for the \*CONSTRAINED\_RIGID\_BODIES.

![vehicle constraint panel](../Storage/primer-22-1/primer_links/sect_6/safety/luggage/contraint.png)

[Previous](introduction-sled-test-automation.md)  |  [Next](create-contact-sled-test-automation.md)