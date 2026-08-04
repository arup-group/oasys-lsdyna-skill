##  Operational Hierarchy 
 
Operations in PRIMER act internally using a "hierarchy" of entity types, and it is important that you appreciate how this is applied. A cut down summary of this internal hierarchy is:

| Highest level |  | **===&gt;** |  | Lowest level |
| --- | --- | --- | --- | --- |
|  | DUMMIES | CONTACTS | ELEMENTS | L.CURVES |
| MODELS | SETS | PARTS | RIG WALLS | NODES |
|  | MATERIALS | GEN STIFF | BND CONDS | LOADS |
|  | SECTIONS | AIRBAGS |  |  |

When you select an object for operations it implicitly selects all entities below its level, but not those at or above its own level.
 
For example selecting a model has the effect of operating on everything in that model, while selecting a **MATERIAL** in that model acts as follows:
 
* The **MATERIAL** selects **PARTs** , **ELEMENTs** , etc that refer to it;

* The **ELEMENTs** select **NODEs** on them;

* The **BOUNDARY CONDITIONs** might select **L.CURVES** , etc.

But note that selecting a **PART** does not (directly) affect a contact surface that references that part; although operating on its nodes might affect the contact geometry. Likewise selecting an **ELEMENT** will affect its nodes, but not boundary conditions applying to those nodes.
 [Previous](formulae-in-edit-panels.md)  |  [Next](selecting-entities-for-operations.md)