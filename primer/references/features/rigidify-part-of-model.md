###  Rigidify Part of Model

Rigidify Part of Model is designed to make rigid a selection of Parts, Elements or Part Sets in a model. If some elements of a part are selected, it does this by creating new rigid parts and moving the selected elements into them. If a part is selected or all elements of a part, a rigid material card is substituted. All rigidified parts are constrained to a dummy master part.

The density and modulus of newly created materials will normally match those of the deformable ones they replace, to preserve the part mass. If these values cannot be determined, the default values will be used.

The user simply selects items in the usual way with the object menu and presses APPLY.

However, the consequences of applying RIGIDIFY to the model are **considerable and irreversible**. It is therefore recommended that the user always saves the model before they press APPLY .

The user can choose to delete the original elements chosen to rigidify if they wish. In this case, the mass and inertia properties of the original elements are applied to the dummy master part in the for of a \*PART\_INERTIA. This option is activated by checking the Simplify and delete check box.
 ![](../Storage/primer-22-1/primer_links/sect_6/rigidify/rigidify_1.gif)
[Previous](rigidify.md)  |  [Next](create-rigid-patch-bolt.md)