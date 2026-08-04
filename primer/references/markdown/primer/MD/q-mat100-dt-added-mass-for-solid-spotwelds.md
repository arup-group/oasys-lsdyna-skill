##  Appendix Q: MAT100 &lt;DT&gt; Added Mass for Solid Spotwelds

Ansys LS-Dyna has a special method of adding mass to MAT100 spotweld solids, which may result in a rather higher true %age added mass than the user is lead to expect.

The method is only applied when the parameter &lt;DT&gt; on the MAT100 card is greater than zero.

In this case, in addition to the normal calculation of added mass (let's call it X), Ansys LS-Dyna scales the density of the MAT100 solids on a per element basis and reports this extra added mass (let's call this Y) in the otf (d3hsp) file as

"added mass for type 100 hexahedron spot welds=Y"

The true added mass ratio is **(X + Y) / physical mass.**

Ansys LS-Dyna (LS971R4), however, takes the physical mass as original physical mass (before density adjusted) + Y, and reports the added mass ratio as **X / physical mass** .

PRIMER (version 12.1 onward) contour functions and added mass reports on the part table will use the the Ansys LS-Dyna method to give consistency with d3hsp file.

The CALC DT2MS function accessed under KEYWORD &gt; CONTROL will report the MAT100 DT added mass. This applies for spotweld beams and solids, but it is only for solids that the mass is counted as physical mass.

It is worth noting that changing DT2MS on the \*CONTROL\_TIMESTEP card will not affect the MAT100 added mass.

[Previous](template-file.md)  |  [Next](r-morphing-keyword-format.md)