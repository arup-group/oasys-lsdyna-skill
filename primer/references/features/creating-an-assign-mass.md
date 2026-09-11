###  Creating an Assign Mass

![](../Storage/primer-22-1/creating-an-assign-mass-2022-09-28.png)

On CALCULATE the achievable mass properties are calculated, these may fall short of the target values set above.

![](../Storage/primer-22-1/creating-an-assign-mass-2022-09-28-1.png)

Assign mass may be used to add mass to a group of entities (typically a set of parts or part assembly) or to achieve a target mass (which must exceed their native mass). The drop-down under Set Mass will set this mode.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assm_2.gif)

The user needs to select (a) the group which constitutes that mass of interest and (b) the group to which mass is to be added. (b) may be a sub-group of (a) or both groups may be the same (as in the above example). By default, Assign mass is hierarchical, meaning that ASSM at label n+1 will not apply mass to elements massed by ASSM at label n. Thus the definitions should be ordered component (e.g.wheel), sub-assembly (e.g. from suspension), whole vehicle. This feature may be unlocked to allow ASSM to add mass to definitions at lower labels.

Group (a) may consist of a PRIMER group, a part-set or an assembly. Group (b) may consist of a PRIMER group or a part-set.

The PRIMER group definition is versatile, but will require maintenance by the user, should the contents of the model change, therefore use of \*ASSIGN\_MASS\_PART\_SET (or \*ASSIGN\_MASS\_ASSEMBLY) is often preferred as the contents are easier to maintain as the model updates (e.g. by using PART\_SET\_GENERATE).

\*ASSIGN\_MASS(\_GROUP) is still available for backward compatibility.

Once the selection is made mass properties are displayed at the bottom of the panel the panel.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assm_3.gif)

By default, Incl attached mass is active, which means the mass of any attached lumped masses is implicitly included.

Timestep added mass is not included in the calculation by default, but may be by activation of the setting Include timestep added mass .

Reset All will set the target mass and CofG to the original properties of the selection. The drop-downs off Set CofG and Set Inertia may also be used to set the original values

By typing in to the text boxes, target values may be set for individual terms of centre of gravity and inertia or these may be left free (indicated by the wildcard symbol) to assume their own value.

Target mass must be increased above the original mass. Press CALCULATE to determine the mass distribution which will best meet the assigned properties.

![](../Storage/primer-22-1/primer_links/sect_6/assign_mass/assm_4.gif)
 
Plot mass to be added will show the proposed mass distribution. In this case, lowering the CofG has biased the mass toward the bottom
 
Create ASSM will then implement and save the solution.
 [Previous](advanced-assign-mass-operation.md)  |  [Next](assign-mass-by-element-mass-part.md)