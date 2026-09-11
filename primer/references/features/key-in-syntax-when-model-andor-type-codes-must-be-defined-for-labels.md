###  "Key In" Syntax When Model and/or Type Codes Must Be Defined for Labels

In the example above, the model id and type code (Part) were both known, so simple numbers were adequate.

However, in some situations multiple types may be possible (for example "element" permits "solid, shell, beam, ...") and the type code acronym must prefix the labels.

| For example to select: | * **Solid 27 *and***<br> * **Shells 1 to 20 *and***<br> * **Beam 99** | You must define | **H27 S1:S20 B99** |
| --- | --- | --- | --- |

It is also possible that selection across multiple models will be permissible.

| For example to select: | * **Model 1: Solid 27 and**<br> * **Model 2: Shells 1 to 20 and**<br> * **Model 3: Beam 99** | You must define | **M1/H27 M2/S1:M2/S20 M3/B99** |
| --- | --- | --- | --- |

[Previous](area-pick-what-is-visible-when-area-or-polygon-picking.md)  |  [Next](how-explicit-menu-selection-screen-picking-and-keying-in-work-together.md)