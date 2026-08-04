###  

### Apply Inertia Loading

Select "Apply inertia load" to install a bar for applying inertia load.

Select "Auto" to scale inertia device automatically or manual to provide inertia bar length and gap.

Provide value of inertia load or let it calculate as per the specification using seat part set and vehicle category options.

To attach the inertia bar to the seat, you can either use the "Extra node set" option to apply constraints using \*CONSTRAINED\_EXTRA\_NODES, or select "Rigid bodies parts" to constrain it using \*CONSTRAINED\_RIGID\_BODIES.

Centre of Gravity can be calculated by inputting your own coordinates, or CofG can be calculated on the fly using the seat structure part set selected in 'Seat Part Set for CofG'.

![](../Storage/primer-22-1/inertia-constrains-contacts/inertia-constrains-contacts-2025-05-09.png)

### Constrain the Vehicle

Select "create \*BOUNDARY\_SPC card" option as shown below to constrain the vehicle by creating a \*BOUNDARY\_SPC card. Use "Node set for SPC" text box to provide a set id for \*BOUNDARY\_SPC card.

![](../Storage/primer-22-1/constrain-the-vehicle-1-2022-07-29.png)

### Create Contact

Select "create \*AUTO\_SINGLE\_SURFACE contact" option as shown below to create a \*CONTACT\_AUTOMATIC\_SINGLE\_SURFACE with an exempted part set on the SURFA side. Impactor parts will get added automatically to the exempted part set. Use "Exempted part set" option to add any other part sets in the exempted set.

![](../Storage/primer-22-1/create-contact-1-2022-07-29.png)

### Create Set part

### Create a \*SET\_PART\_COLLECT\_TITLE to add the body blocks, seatbelt and parts created by the SBA tool so that it is out of global contact. Take the next free ID or provide a Set Part ID to use.

### \*PART\_INERTIA for body blocks

Select this option if you wish to change the body blocks to have the \*PART\_INERTIA option. The values added into \*PART\_INERTIA such as total mass, inertia tensor components and coordinates of centre of mass are taken from the body blocks themselves using the 'Mass Prop' tool.

[Previous](seat-settings-and-belt-fitting-inputs.md)  |  [Next](calculate-1.md)