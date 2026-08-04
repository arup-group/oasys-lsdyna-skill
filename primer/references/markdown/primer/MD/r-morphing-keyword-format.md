##  Appendix R: Morphing Keyword Format

When morph boxes are created on the interactive Morph panel, keyword files written from PRIMER will contain tghe morph point and morph box information after \*END. This is to ensure that the boxes are available again in later PRIMER sessions. Likewise, morph flow definitions created on the Variables tab of the Morph panel will be written after \*END.

If the morph entities are only created interactively inside PRIMER , they can be used without detailed knowledge of the keyword format described here. This appendix has only been written for completeness and to make it easier to understand some of the more advanced functions in the JavaScript API classes MorphPoint, MorphBox and MorphFlow.

\*MORPH\_POINT  
&lt;label&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;

| &lt;label&gt; | I10 | Must be unique within a model to identify the morph point for references. |
| --- | --- | --- |
| &lt;x&gt; | E10.0 | X-coordinate |
| &lt;y&gt; | E10.0 | Y-coordinate |
| &lt;z&gt; | E10.0 | Z-coordinate |

This card defines a morph point in the model with its coordinates. Morph points need to be defined for the corner points of morph boxes, and in high order boxes, whose format is described below, there will be more morph points on the edges and faces as well as internal points.

\*MORPH\_BOX(\_HIGH\_ORDER)  
&lt;label&gt; &lt;title&gt;

The following line should be included **if and only if** the \_HIGH\_ORDER suffix is set:

&lt;nx&gt; &lt;ny&gt; &lt;nz&gt;

The following cards are required again regardless of the \_HIGH\_ORDER suffix:

&lt;point1&gt; &lt;point2&gt; ... &lt;pointn&gt; 
&lt;init\_x1&gt; &lt;init\_y1&gt; &lt;init\_z1&gt; 
: : : 
&lt;init\_xn&gt; &lt;init\_yn&gt; &lt;init\_zn&gt; 
&lt;set\_node&gt;

| &lt;label&gt; | I10 | Label for the morph box |
| --- | --- | --- |
| &lt;title&gt; | A70 | Title for the morph box |
| The line below is included  ***if and only if***  the \_HIGH\_ORDER\_SUFFIX is set. |
| &lt;nx&gt; | I10 | Number of morph points along local (parametric) X-direction |
| &lt;ny&gt; | I10 | Number of morph points along local (parametric) Y-direction |
| &lt;nz&gt; | I10 | Number of morph points along local (parametric) Z-direction |
| The following lines are needed for all morph boxes (independently of their suffix). If the \_HIGH\_ORDER suffix is set, the value **n = nx \* ny \* nz** should be used for the number of points below. Otherwise **nx** , **ny** , **nz** will default to 2 for linear boxes, so **n** will be 8 for the number of corners of the cuboid. |
| &lt;point1&gt;, &lt;point2&gt;, ... | 8I10 | Morph point IDs for the box | 8 entries per line, using as many lines as required to specify **n** points. In particular, when the \_HIGH\_ORDER suffix is not used, there will be one such card with 8 entries. |
|  |
| &lt;init\_x1&gt;, ... | E10.0 | Initial X-coordinates for the morph points, used for the **Reset** functions (interactive and JS API) | The initial coordinates for one morph point are next to each other on one data row. A new row is used for each morph point. |
| &lt;init\_y1&gt;, ... | E10.0 | Initial Y-coordinates for the morph points, used for the **Reset** functions (interactive and JS API) |
| &lt;init\_z1&gt;, ... | E10.0 | Initial Z-coordinates for the morph points, used for the **Reset** functions (interactive and JS API) |
|  |
| &lt;set\_node&gt; | I10 | \*SET\_NODE\_COLUMN ID for a set containing all nodes which will be morphed with the box. The values A1, A2, A3 on the open-ended cards on that node set card are parametric X, Y and Z coordinates, and A4 is used to determine how the node should update during morphing. This node set is automatically created and the parametric coordinates are automatically calculated when a morph box is created on the interactive panel or the constructor on the MorphBox JS API class. |

This card is used to define a morph box, which can be either linear or of high order.

\*MORPH\_FLOW  
&lt;name&gt;

The following card is required when &lt;type&gt; is **CONTINUOUS** :

&lt;type&gt; &lt;min&gt; &lt;max&gt;

The following card is required when &lt;type&gt; is **STEP** :

&lt;type&gt; &lt;min&gt; &lt;max&gt; &lt;step&gt;

The following cards are required when &lt;type&gt; is **DISCRETE** :

&lt;type&gt; &lt;nvals&gt; 
&lt;value1&gt; &lt;value2&gt; ...

The following cards are an open-ended list needed for all options of &lt;type&gt;:

&lt;point1&gt; &lt;dx1&gt; &lt;dy1&gt; &lt;dz1&gt; 
&lt;point2&gt; &lt;dx2&gt; &lt;dy2&gt; &lt;dz2&gt; 
: : :

| &lt;name&gt; | A80 | Name for the morph flow. When the morph flow is used to apply morphing with a JSON file passed to the command line, then this name should match the variable name in the JSON file. |
| --- | --- | --- |
|  |
| &lt;type&gt; | A10 | Range type for a variable associated with the morph flow. This is not used in PRIMER except that it is written to JSON design variable files, where it can be used by optimisation programs like LS-OPT to pre-populate variable ranges. This character string should be **CONTINUOUS** (for a continuous variable range between two bounds), **STEP** (for a discrete variable list of uniform step size between two bounds) or **DISCRETE** (for an explicitly specified discrete list not necessarily with uniform step size). |
| &lt;min&gt; | E10.0 | Minimal variable value when &lt;type&gt; is **CONTINUOUS** or **STEP** |
| &lt;max&gt; | E10.0 | Maximal variable value when &lt;type&gt; is **CONTINUOUS** or **STEP** |
| &lt;step&gt; | E10.0 | Variable step size when &lt;type&gt; is **STEP** |
| &lt;nvals&gt; | I10 | Number of variable values when &lt;type&gt; is **DISCRETE** . This option allows to specify a discrete list of variable values, and this field specifies the length of this list. |
| The following fields are present if &lt;type&gt; is set to **DISCRETE** : |
| &lt;value1&gt;, &lt;value2&gt;, ... | 8E10.0 | Variable values for the case of a discrete list. The number of values is as specified in &lt;nvals&gt;. | 8 entries per line, using as many lines as required to specify &lt;nvals&gt; many values |
| This open-ended list of cards is defined independently of &lt;type&gt;: |
| &lt;point1&gt;, ... | I10 | Morph point ID | There are as many such data rows as morph points are controlled by the flow. The keyword ends at the next keyword header (or at the end of the file). |
| &lt;dx1&gt;, ... | E10.0 | X-component of vector along which the respective point moves when a variable from a JSON file is applied |
| &lt;dy1&gt;, ... | E10.0 | Y-component of vector along which the respective point moves when a variable from a JSON file is applied |
| &lt;dz1&gt;, ... | E10.0 | Z-component of vector along which the respective point moves when a variable from a JSON file is applied |

[Previous](q-mat100-dt-added-mass-for-solid-spotwelds.md)  |  [Next](s-battery-cell-keyword-format.md)