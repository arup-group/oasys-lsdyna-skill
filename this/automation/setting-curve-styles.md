###  Setting Curve Styles

| Description | keyword | second word | following words |
| --- | --- | --- | --- |
| Plot style setup | style | style name | style options |
| Individual curve style | stylec | curve number or tag | style options |

This section explains how to set up the styles for the curves in a plot. The two types of syntax available in the table above effect when and how the curves are styled.

The "plot style setup" (keyword style) allows the user to define a plot-specific styling that applies the styles to the curves only when they are requested for a plot. It is independent of the curve id, but dependent on the order the curves are requested in the plot command. The style is given its own "tag" which the user can request on the image FAST-TCF line.

This is useful for producing plots from FAST-TCF that all have the same curve appearance. For the following words, each space represents a new curve style definition. The styles for each curve are defined by the type keywords below, separated by commas.

| e.g. | style ENERGIES | solid,green,norm | dash,blue,heavy | sol,W5,yel,500 |
| --- | --- | --- | --- | --- |
|  | (style name) | (curve #1) | (curve #2) | (curve #3) |

When a plot is requested, FAST-TCF will apply the curve styles to the list of curves (in order) in the plot. So in the example above, the first curve would appear green, the second curve blue and the third yellow.
 
The "individual curve style" (keyword stylec) is the more traditional way of styling a curve that a T/HIS user would be more familiar with - FAST-TCF styles the single curve id instantly. The user can only define one style at a time.

| e.g. | stylec #12 | solid,green,W9 |
| --- | --- | --- |
|  | (style curve number 12) | style to apply |

####  Line Styles 

| Style options | word options | default |
| --- | --- | --- |
| Line style | solid | solid |
| dash |
| none |

####  Line Colours 

| Style options | word options | default |
| --- | --- | --- |
| Line colour | white | dependent on curve # |
| red |
| green |
| blue |
| cyan |
| magenta |
| yellow |
| orange |
| turquoise |
| indigo |
| lime |
| sky |
| pink |
| black |
| foreground |
| background |

####  Line Width 

| Style options | word options | default |
| --- | --- | --- |
| Line width | fine | normal |
| normal |
| bold |
| heavy |

####  Line Symbols 

| Style options | word options | default |
| --- | --- | --- |
| Line symbols | triangle | dependent on curve # |
| square |
| diamond |
| hourglass |
| cross |
| circle |
| star |
| dot |
| null |
| Symbol frequency | frequency number | - |

Previous: fast-tcf-image-output-options  |  Next: setting-curve-styles-by-model