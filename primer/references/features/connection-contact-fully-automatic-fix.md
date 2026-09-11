####  Connection &gt; Contact: Fully Automatic Fix

If there is no connection contact CREATE CONNECTION CONTACT will make one. If contacts already exists, the sister function DELETE & REMAKE CONNECTION CONTACT will delete the existing connection contacts and re-make them. These functions work on all connections and will yield an optimum solution with the minimum number of connection contacts. In a model with multiple contacts you may prefer to fix a sub-set of connections. To this end the functions NOT-CONNECTED-&gt;contact and NOT-STICKING-&gt;offset contact [are available](connection-contact-semi-automatic-fix.md#connection_contact_2).

| ![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_5.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_5a.gif) |
| --- | --- |

*Models with beams and solids* : A model with both spotweld beams and spotweld/adhesive solids will normally require separate contacts as CONTACT\_TIED\_XXX\_TO\_SURFACE cannot be used for beams (as it has no rotational constraint) and CONTACT\_SPOTWELD is inefficient for tying solid elements.

However, if spotweld beams are embedded in a solid adhesive one may prefer to use a single CONTACT\_SPOTWELD rather than have to create an \_OFFSET contact (to avoid constraint clash). Therefore PRIMER will offer the choice.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_6.gif)

If we take the TWO CONTACTS option PRIMER will create both contacts with the SURFA side initially defined by PART or PART-SET. PRIMER will then automatically check for any constraint clashes.

**Offset backup contact**. If clashes are detected, PRIMER will create a copy of the original contact which is identical but for being of type \_OFFSET (penalty). This preserves the preferred definition by PART on the contact. For all nodes which tie by the constrained contact contact, the penalty one is an irrelevance, but those which release due to constraint conflict will be captured by the offset contact.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_7.gif)

If the output version is R7.0 (or higher) there is no need to create an explicit second contact as setting the IPBACK flag on the constrained contact will achieve exactly this.

![](../Storage/primer-22-1/primer_links/sect_6/connection/contact_7a.gif)

Keeping contacts defined by PART/PART-SET. This is the method much preferred by users and PRIMER will attempt to maintain definition of SURFB and SURFA slides in this way. However, to tie internal nodes of solid elements (such as occur with 3T nugget welds or adhesive runs) Ansys LS-Dyna requires definition of the SURFA side by node set. The internal nodes do not tie if definition is by part set! Therefore PRIMER will use NODE\_SET\_GENERAL referencing parts in this case to overcome the problem.

*Handling mixed contacts on re-make:* Contacts may already exist which contain on the SURFA side both connection and non-connection items (e.g. solid spotwelds and solid foam). In this case, PRIMER will create connection contact as before, but in addition will add the non-connection nodes to the SURFA side, and their corresponding parts to the SURFB side. Thus connectivity of the non-connection part should not be lost.

*Handling constrained contacts with no connections:* To avoid clashes it it advantageous to have the minimum number of constrained contacts in a model. If PRIMER finds, when creating or re-making connection contacts, that constrained contacts already exist in the model which have no connections on the SURFA side, you will be given the option to merge these into the connection contact to be created. This action is recommended if you intend all the SURFA nodes to tie. If you choose to LEAVE you may find that PRIMER has to convert more of the connection contact to \_OFFSET.

![](../Storage/primer-22-1/primer_links/sect_6/connection/merge%20into%20spotweld%20help%20panel.JPG)

[Previous](using-connection-contact.md)  |  [Next](connection-contact-semi-automatic-fix.md)