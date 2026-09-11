####  Connection &gt; Contact: Semi-Automatic Fix

Repair NOT-CONNECTED. This function is designed to handle cases where the user does not want to  re-make *all connection contacts*   but prefers to fettle the individual contacts.

Connections to be fixed may be selected by part, which gives a better chance of preserving definition by part on the SURFA side of the contact or by connections which will incur conversion of SURFA side to SET\_NODE\_GENERAL and addition of nodes to the contact.

![](../Storage/primer-22-1/primer_links/sect_6/connection/fixcont_option.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_10.gif)

CREATE NEW will create a new constrained connection contact (by PART/PART-SET) of the appropriate type. You may also SELECT an existing contact and add the connections to it. PRIMER will refuse so to do, if the contact type is incompatible.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_11.gif)

If both beam and solid parts have been selected for contact PRIMER's action will depend on the contact you select. The information on the panel will guide you.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_12.gif)

On creation of the contact, PRIMER will check for constraint clashes and invite you to fix them using Repair NOT-STICKING function which will have become active.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_13.gif)

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_14.gif)

Connections may again be selected by part or by connection. PRIMER will then repair the non-sticking contact(s) by creating a duplicate backup penalty contact (or setting IPBACK on the constrained contact).

On completion of the process, on the main panel you should get the report that **all valid connections tie** and the semi-automatic connection fixing options will be greyed.

As a further check on the table all weld/adhesive connections should have REALIZED status and there should be no error messages.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_17.gif)

[Previous](connection-contact-fully-automatic-fix.md)  |  [Next](checking-connections.md)