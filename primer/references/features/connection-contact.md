###  Connection Contact

Mesh independent spotweld beams/solids and adhesive solids (connections in PRIMER) are tied to their respective panel shells using tied contacts in Ansys LS-DYNA. For solids the preferred contact is \*CONTACT\_TIED\_NODES\_TO\_SURFACE, for beams it is \*CONTACT\_SPOTWELD. These constrained contacts give the correct shear stiffness for a weld connection. Penalty (\_OFFSET) contacts will generally not give adequate stiffness - vehicle models can show 10% underestimate of torsional stiffness when penalty contact is used for all spotwelds.

*Modelling constrained contacts:* Constrained contacts require rigorously correct modelling as they are incompatible with other forms of constraint and may interfer with one another. For example, if a \*CONSTRAINED\_NODAL\_RIGID\_BODY attaches to a node of a shell to which a spotweld beam is attached by \*CONTACT\_SPOTWELD, the spotweld will be released. Similarly, if a piece of foam is tied to a panel by a constrained tied contact, spotwelds cannot be attached to the same shells by a \*CONTACT\_SPOTWELD. The best solution to this problem is to transfer the nodes which will not tie out of the constrained contact to an \_OFFSET contact.

PRIMER's CONNECTION &gt; CONTACT function has been designed to create spotweld/adhesive contact(s) with automated deployment of \_OFFSET contact where necessary.

[Previous](writing-spotwelds-to-file.md)  |  [Next](checking-the-connection-contact.md)