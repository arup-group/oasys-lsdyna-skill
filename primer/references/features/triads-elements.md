###  Triads (Elements)

It is possible to draw triads on elements that would depict the local material orientation. Alternatively, the local X direction can be drawn by toggling the appropriate button "On".

![Triad](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_4_8.gif)

The following options are available for drawing element triads/local X direction and can be chosen using the popup:

| **Element Axes** | This is the default option. Element orientation, as defined by its topology is drawn. Local angle specifications are disregarded. |
| --- | --- |
| **Material Axes** | Local angles as defined by MAT, ELEMENT\_SHELL\_BETA, ELEMENT\_SHELL\_MCID, ELEMENT\_SOLID\_ORTHO are computed. A suitable triad/local X is drawn on each element. However, layer-specific angles are not evaluated. |
| **All layers** | This option is only applicable to shells. Local angle calculation is carried out as in the "Material Axes" case. In addition, local direction specification is considered for each integration point. This can be defined using PART\_COMPOSITE cards or using SECTION\_SHELL cards in conjunction with INTEGRATION\_SHELL or Gaussian or Lobatto integration rules. A triad/local X is drawn for each layer. |
| **Top, bottom, middle layers** | Local angle computation is carried out as in the "All layers" case. However, only the top, bottom, and middle layers are sketched. A sensible middle integration point cannot be identified if an INTEGRATION\_SHELL is defined or if the element has even number of integration points. In such cases, only the top and bottom integration points are drawn. |
| **Intg pt &lt;n&gt;** | Local angle computation is identical to the "All layers" case. However, the triad/local X is drawn only for the specified integration point &lt;n&gt;. |

[Previous](how-labelling-on-plots-is-handled-for-nodes-and-elements.md)  |  [Next](non-element-items.md)