###  CT and SI Plots

| CT (continuous tone) and SI (shaded image) plotting modes both display the same data, but the former is unlit whereas the latter is shaded.<br>
<br>Both modes are used primarily to display data for 2D and 3D elements, so the underlying plotting mode is always "hidden surface with fill".<br>
<br>Current data components available are: | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_2_1b.gif) |
| --- | --- |

| Timestep | Contours of timestep size in elements. |
| --- | --- |
| Shell Thk | Contours of (thin) shell thickness, and % thinning and % remaining of those shells after a forming analysis. |
| Load Shell Dir | Contours of Load Shell Direction (AWAY, TOWARDS, BOTH, NONE), representing the direction of the loading applied to the shell |
| Mass Scale | Contours of mass added during mass scaling, both by elements and by parts. |
| Matl Props | Contours of Density, Yield stress, Poisson's ratio & Young's modulus. Also material number (eg 20 for MAT\_RIGID) |
| Shell Normals | Contours of Shell normals (AWAY or TOWARDS) or Arrows representing the direction of shell normals. |
| Elem Props | Formulation, #Int points, plastic strain, area (shells only) and volume |
| Elem Qual | Contour of element quality. |
| Init Vels | Contours of initial velocity components and resultant initial velocity. |

[Previous](spc-translational-and-rotational-plots.md)  |  [Next](ct-plot-of-element-timesteps.md)