| Length Parameter
<br><br>![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/fopts_parameter_1.png) |
| --- |

An optional parameter to receive the overall belt length, and further optional parameters to receive the length of each segment.
(This is the same setting as that in [Parameter equal to total length](dimensions-setting-width-length-etc.md#dimensions)above, duplicated here to make it easier to adjust during path creation and editing.)
 
If a Length Parameter   ***name***  is defined then each time the belt is fitting PRIMER will update the parameter of that name with the overall length of the belt, creating it if it does not already exist.
 
If \_Sn per segment parameter is ticked then PRIMER will also update parameters of  ***name\_1***  ,  ***name\_2***  , etc for segments 1, 2, etc of the belt with the length of that segment, again creating these parameters of they do not already exist.
 
The purpose of this is to allow belt-related items such as sensors to define properties that are a function of belt length by referring to parameter  ***name***  . The most likely usage is to make  ***name***  a component of a PARAMETER\_EXPRESSION, permitting formulae to be defined.

[Previous](belt-dimensions.md)  |  [Next](path-order.md)