####  Checking the Connection Contact

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_1.gif)

Connection contact is checked in a variety of contexts.

* when you run a model check - to report connections in error
* whenever connections are put onto the table - so their status is reported correctly. This is true so long as you have not de-activated the button Use contact check to determine connectivity. This option is only intended for quick edit of connections in very large models with complex contact definitions where user has no interest in their connectivity status.
* using CONNECTION &gt; CHECK &gt; CONNECTIVITY
* using CONNECTION &gt; CONTACT

All use the same checking function and will report error code for each connection such as

* NOTCONNECTED - nodes or shells are missing from the contact definition
* NOT TIED - node and shell are in contact but fail to tie, usually because they are too far away
* NOT STICKING - constraint clash prevents contact from working, typically an NRB on the same panel shell as the weld
* BAD CONTACT - contact type is invalid

The results of model check are displayed in a tree view. The drop-down allows easy transfer of connections to the table, e.g. for re-making.

![](../Storage/primer-22-1/primer_links/sect_6/connection/model_check.gif)

Details on the table provides useful information about the error.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_table.gif)

[Previous](connection-contact.md)  |  [Next](untied-layer-connections-tie-but-to-wrong-layer.md)