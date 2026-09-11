###  Notes on Contact Penetration Checking

* The checking algorithms used in PRIMER aim to mimic those in Ansys LS-DYNA, but they are not identical. You must expect that the penetrations detected will differ slightly, although they should agree well in most cases. An exception is self-contact where Ansys LS-DYNA's initialization process of depenetrating nodes as it finds them will always yield appearance of less penetrating nodes (in otf file) than PRIMER's static geometric approach.

* It is a known "feature" of Ansys LS-DYNA that the contact penetrations reported by the SMP and MPP versions are different in some cases. Where a contact has the MPP flag set PRIMER knows it is destined for the MPP version and will use the relevant logic, otherwise where differences between the two versions of Ansys LS-DYNA are known to exist it will use the current penetration checking mode as set in the [Check, Options](options-setting-model-check-options.md#options) panel, which defaults to MPP mode.

* When "old type" segment-based contacts (non-automatic surface to surface, nodes to surface and singe surface) are used, the default penetration depth "behind" a segment in Ansys LS-DYNA is "infinite" (= 1e20 or thereabouts). For efficiency in its bucket sort PRIMER limits the depth behind such a segment to be the longest distance from a node on it to an imaginary box containing the contact. Therefore "as\_thick" plots, and reported penetration distances, will be limited to this value.

* Certain 2D geometries are not yet checked, these are:

> 
> * "Edge to ..." contacts: Shell or segment edge contact is not considered;
> * "Beam to ..." contacts: Contact along the length of a beam is not considered.
> 
>  
> However the (one way) penetration of nodes on edges and beams into segments is considered.
>  
> 
>  
> 
>  

### CONTACT_AUTOMATIC_GENERAL

CONTACT\_AUTOMATIC\_GENERAL tries to capture beam on beam, beam to shell edge and shell edge on shell edge contact. These physical contacts are often missed by the simplistic node to segment contact.

As PRIMER performs a one off calculation, it does not have to be as computationally efficient as Ansys LS-DYNA. PRIMER offers an enhanced method setting on the program options panel.

![](../Storage/primer-22-1/notes-on-contact-penetration-checking-2022-09-28.png)

Contact\_automatic\_general misses penetrations as the beams diverge.

![](../Storage/primer-22-1/notes-on-contact-penetration-checking-2022-09-28-1.png)

Enhanced beam on beam contact captures them.

![](../Storage/primer-22-1/notes-on-contact-penetration-checking-2022-09-28-2.png)

The same setting improves beam to shell contact, which the standard treatment only captures at the edge.

![](../Storage/primer-22-1/notes-on-contact-penetration-checking-2022-09-28-3.png)

Enhanced treatment captures beams that spear shells.

![](../Storage/primer-22-1/notes-on-contact-penetration-checking-2022-09-28-4.png)

> 
> 
> 

[Previous](checking-a-tied-contact.md)  |  [Next](contouring-panel-gaps-for-sliding-contact.md)