###  Contact: Creating a Contact between Belt and Dummy

Once you have created and meshed your seatbelt the final, stage is to create a contact between it and the dummy. In most models this will be done outside the seatbelt fitter since the contact will almost certainly have to include structure not explicitly included in the dummy and belt definition (seat, dashboard, airbag, steering wheel, etc).

However if a simple contact between belt and dummy will suffice PRIMER provides the option of generating these contact definitions automatically for you.

PRIMER works on the assumption that either or both of the following contact surfaces will be required:

\*CONTACT\_AUTOMATIC\_SURFACE\_TO\_SURFACE Between belt shells and dummy.

\*CONTACT\_AUTOMATIC\_NODES\_TO\_SURFACE Between belt nodes and dummy.

The need for the second, node-based contact arises when \*ELEMENT\_SEATBELT elements are used, since these are "line" elements with no effective surface.

| ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/seatbelt%20panel%202.JPG)PRIMER generates "chassis" contact definitions as shown in the adjacent figure.<br> <br>Prototypes of the two contact types defined above are created by assuming that the dummy structure (as segments) form the reference (SURFB) side of both, and creating two further sets:<br> <br>A \*SET\_NODE of all nodes on the belt as the tracked (SURFA) side of the NODES\_TO\_SURFACE contact.<br> <br>A \*SET\_SHELL of all shells in the belt as the tracked (SURFA) side of the SURFACE\_TO\_SURFACE contact.<br> <br>In both cases the "structure"side is defined by a \*SET\_SEGMENT , because this allows it to include an arbitrary mixture of element types.<br> <br>Default parameters are set up for the complete contact, and the main ones are shown here.<br> <br>To create both these contacts with the default settings use CREATE\_ALL . This will turn these "chassis" definitions into actual contact surfaces which, while part of a belt definition, are normal contact definitions which may be viewed and edited just like any other.<br> <br>The default settings will create two contacts, which implies some duplication since all the nodes on shell elements will be included in the \*NODE\_TO\_SURFACE contact, which is a bit wasteful. In addition default parameters may not be suitable for all models. |
| --- |

| To create/edit contacts selectively  <br>Instead of using CREATE\_ALL you can create the surfaces selectively using the appropriate CREATE buttons. Once created they may be EDIT ed or DELETE d at will. | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/seatbelt2.JPG) |
| --- | --- |

| To change default settings  <br>When contacts are created automatically the default parameters shown here will be used.<br> <br>Only the most common ones are given in this box, and to gain access to the full set use EDIT\_FULL\_CONTACT\_PARAMETERS | ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/seatbelt%20panel%203.JPG) |
| --- | --- |

####  Editing seatbelt contacts once they have been defined

There is nothing special about seatbelt contacts and the sets used to define them: they can be changed, deleted and re-created just like any others, either from this panel or (at any time) from the main CONTACT keyword editing command.

For example to remove the nodes on shells from the NODES\_TO\_SURFACE contact in this example edit SET\_NODE #52 to remove the nodes in SET\_SHELL #6. And to define a contact between (say) and airbag and the belt it would make sense to reuse SET\_NODE #52.

####  Saving belt contact information to file

Any contact surfaces made here will be saved in the seatbelt "tree" file structure, together with their sets. These are references to the surface and set definitions, not the definitions themselves, and are useful for reviewing and editing belt to dummy contact.

However if a seatbelt has been remeshed the "old" sets are invalid, so both they and the contact definitions are discarded and new ones must be created for the revised geometry.

[Previous](more-details-about-meshing-2d-seatbelt-elements.md)  |  [Next](related-items-creating-retractors-sliprings-and-other-seatbelt-related-elements.md)