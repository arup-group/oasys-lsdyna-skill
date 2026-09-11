####  Max Taper

Taper checks are only calculated for quadrilateral SHELL elements. Triangular SHELL elements are given a taper value of 0 so as to not flag a warning in the Error tree, though this means that they will be drawn in a taper CT/SI plot.

The quad is first split along one of its diagonals such that it is made up of two triangular areas (as shown below). The area of each triangle is then divided by half of the area of the quad. This is repeated for the 'alternative' split (see below). The smallest of these fractions is then taken away from 1, the result of which is the element's taper value.

Due to the way in which the area of the quad is defined, the taper value can become negative for warped SHELLs. This area definition may also cause discrepencies between taper values provided by other pre-processor software.

![](../Storage/primer-22-1/primer_links/sect_3/images/Max_taper_img.png)

![](../Storage/primer-22-1/primer_links/sect_3/images/Max_taper_eq.PNG)
[Previous](max-jacobian.md)  |  [Next](min-tet-collapse.md)