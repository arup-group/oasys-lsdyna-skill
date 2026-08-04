###  Controlling Suppression of Text Box Warnings

The parent panel of assign mass has several warning options which the user can select or deselect as they wish:

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assm_10.gif)

The selection boxes allow the user to suppress warnings and errors that they feel are unnecessary.

assign mass done - reports the completion of the assign mass and the number of lumped masses added

excluded part inertia - gives the warning described above that part/nrbc \_inertia cannot be included

massed by previous/recalculation needed - warn that there are hierarchy conflicts in the definitions which require resolving

check RB merges - warns that a subset of constrained/lead rigid parts are included in the assign mass group. Whilst not an error this can cause confusion about the total mass (as Dyna assigns mass of constrained parts to the lead part).

[Previous](problems-with-assign-mass.md)  |  [Next](/articles/primer-22-1/write-assign-mass-to-excel)