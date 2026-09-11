# CutSection

Functions and constants relating to CutSection

## Functions

* [GetCutCoords](d3plot-cutsection-class.md#CutSection::GetCutCoords)(options*[object]*)
* [GetCutCoords](d3plot-cutsection-class.md#CutSection::GetCutCoords_deprecated)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [deprecated]
* [GetCutForces](d3plot-cutsection-class.md#CutSection::GetCutForces)(options*[object]*)
* [GetCutForces](d3plot-cutsection-class.md#CutSection::GetCutForces_deprecated)(window\_id*[integer]*, include\_blanked (optional)*[integer]*, part\_id (optional)*[integer]*, state\_id (optional)*[integer]*, model\_id (optional)*[integer]*) [deprecated]
* [GetCutSection](d3plot-cutsection-class.md#CutSection::GetCutSection)(options*[object]*)
* [GetCutSection](d3plot-cutsection-class.md#CutSection::GetCutSection_deprecated)(window\_id*[integer]*, state\_id (optional)*[integer]*, model\_id (optional)*[integer]*) [deprecated]
* [RemoveCutDirection](d3plot-cutsection-class.md#CutSection::RemoveCutDirection_deprecated)(options*[object]*) [deprecated]
* [SetCutSection](d3plot-cutsection-class.md#CutSection::SetCutSection)(options*[object]*)
* [SetCutSection](d3plot-cutsection-class.md#CutSection::SetCutSection_deprecated)(window\_id*[integer]*, attribute*[integer]*, value*[integer | array of reals | array of integers]*) [deprecated]

## CutSection constants

| **Name** | **Description** |
| --- | --- |
| FOLLOW\_N | This constant is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>"Section follows nodes" flag [deprecated] |

### Constants for Action

| **Name** | **Description** |
| --- | --- |
| NORMAL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Positive or negative action Normal. Use [Constant.NORMAL](d3plot-constant-class.md#Constant.NORMAL) instead [deprecated] |
| OMIT | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Positive or negative action Omit. Use [Constant.OMIT](d3plot-constant-class.md#Constant.OMIT) instead [deprecated] |
| OUTLINE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Positive or negative action Outline (wire drawing). Use [Constant.OUTLINE](d3plot-constant-class.md#Constant.OUTLINE) instead [deprecated] |
| TRANSPARENT | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Positive or negative action Transparent. Use [Constant.TRANSPARENT](d3plot-constant-class.md#Constant.TRANSPARENT) instead [deprecated] |

### Constants for Combination

| **Name** | **Description** |
| --- | --- |
| INTERSECTION | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Intersection mode for multiple cut directions. Use [Constant.INTERSECTION](d3plot-constant-class.md#Constant.INTERSECTION) instead [deprecated] |
| UNION | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Union mode for multiple cut directions. Use [Constant.UNION](d3plot-constant-class.md#Constant.UNION) instead [deprecated] |

### Constants for Definition

| **Name** | **Description** |
| --- | --- |
| CONST\_X | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Constant X definition method. Use [Constant.CONST_X](d3plot-constant-class.md#Constant.CONST_X) instead [deprecated] |
| CONST\_Y | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Constant Y definition method. Use [Constant.CONST_Y](d3plot-constant-class.md#Constant.CONST_Y) instead [deprecated] |
| CONST\_Z | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Constant Z definition method. Use [Constant.CONST_Z](d3plot-constant-class.md#Constant.CONST_Z) instead [deprecated] |
| LS\_DYNA | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Ansys LS-DYNA definition method. Use [Constant.LS_DYNA](d3plot-constant-class.md#Constant.LS_DYNA) instead [deprecated] |
| N3 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>3 nodes definition method. Use [Constant.N3](d3plot-constant-class.md#Constant.N3) instead [deprecated] |
| OR\_AND\_V | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Origin and vectors definition method. Use [Constant.OR_AND_V](d3plot-constant-class.md#Constant.OR_AND_V) instead [deprecated] |

### Constants for Space

| **Name** | **Description** |
| --- | --- |
| BASIC | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Basic (eulerian) space. Use [Constant.BASIC](d3plot-constant-class.md#Constant.BASIC) instead [deprecated] |
| DEFORMED | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Deformed (lagrangian) space. Use [Constant.DEFORMED](d3plot-constant-class.md#Constant.DEFORMED) instead [deprecated] |
| SPACE | This constant is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Space system call argument [deprecated] |

| Details of functions 
GetCutCoords(options*[object]*) [static]
Description<br>Returns the coordinates where the cut-section cuts through element &lt;type/item&gt;. |
| --- |

#### Arguments

* options (object)

Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| direction\_id (optional) | integer | Index starting at 1 of the plane direction for multiple non-parallel planes. This should be at most the number of
non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the data for the first plane direction
will be used. |
| item | integer | If +ve, the internal item number starting at 1. If -ve, the external label of the item. |
| model\_id (optional) | integer | A valid model id that exists in &lt;window\_id&gt;. |
| state\_id (optional) | integer | State number to be used instead of the current state |
| type\_code | integer | A valid [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (SHELL etc.)) |
| window\_id (optional) | integer | A valid window id. |

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| n | integer | Number of places the cut-section cuts the item |
| x | array of reals | X coordinates where item is cut |
| y | array of reals | Y coordinates where item is cut |
| z | array of reals | Z coordinates where item is cut |

#### Return type

object

| Example
<br><br><br>
```

// Get the coordinates where the second cut plane in window 1 cuts the first shell in model 3 in state 10.
if(a = GetCutCoords({ type_code:SHELL, item:1, window_id:1, model_id:3, direction_id:2, state_id:10 }))
{
    var n = a.n;
    for(var i=0; i<n; i++)
    {
        Message("Coords: " + a.x[i] + ", " + a.y[i] + ", a.z[i]);
    }
}

```
<br><br> |
| --- |

* * *

| GetCutCoords(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [static] [deprecated]
<br>This function is deprecated in version 19.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Returns the coordinates where the cut-section cuts through element &lt;type/item&gt;. |
| --- |

#### Arguments

* type\_code (integer)
 
A valid [type code](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) (SHELL etc.))

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| n | integer | Number of places the cut-section cuts the item |
| x | array of reals | X coordinates where item is cut |
| y | array of reals | Y coordinates where item is cut |
| z | array of reals | Z coordinates where item is cut |

#### Return type

object

| Example
<br><br><br>
```

// Get the coordinates where the cut section cuts the first shell in the current model.
if(a = GetCutCoords(SHELL, 1))
{
    var n = a.n;
    for(var i=0; i<n; i++)
    {
        Message("Coords: " + a.x[i] + ", " + a.y[i] + ", a.z[i]);
    }
}

```
<br><br> |
| --- |

* * *

| GetCutForces(options*[object]*) [static]
Description<br><br><br><br>Returns the forces, moments, centroid and area of the cut section in &lt;window\_id&gt;.<br>
<br>The coordinate system of these results depends upon the cut section's space system as follows:<br><ul>
<li><a href="d3plot-cutsection-class.md#CutSection.BASIC">BASIC</a> space: Forces are moments are</li>
always returned in the global axis system, about the geometrical centre of the cut elements at the
given state. Therefore the effective origin is likely to change as the model deforms. (This is the
method used by Ansys LS-DYNA) 
<li><a href="d3plot-cutsection-class.md#CutSection.DEFORMED">DEFORMED</a> space: Forces and moments are</li>
returned in the plane local axis system, about the current section origin. The origin and axes will
remain fixed as the model deforms unless one of the &quot;section follows node(s)&quot; options has been used.
</ul>
<br>WARNING #1: Cut-sections in D3PLOT are a "per window" attribute, cutting all models in a window at the current "frame".<br>
<br>If the optional &lt;state\_id&gt; argument is not supplied the forces and moments returned will be at the state of the<br>current "frame" of the window, and while this will normally be the same as the current "state" this is not necessarily the<br>case, since the user may have interpolated results by time<br>
<br>Likewise if the optional &lt;model\_id&gt; argument is not supplied then the model used will be the first in the window<br>(as reported by function [GetWindowModels](d3plot-windows-class.md#Windows::GetWindowModels)()), which may not be the<br>same as the "current model" of the JavaScript interface.<br>
<br>Therefore to avoid ambiguity when extracting cut-section forces and moments it is recommended that:<br><ul>
<li>The window being used should only contain a single model</li>
<li>The window should be set up to display all states without interpolation, thus &lt;state id&gt; == &lt;frame id&gt;. (This is the default for windows.)</li>
</ul>
<br>This "single model in a window" approach is strongly recommended in this context since visual feedback will then match<br>computed values.<br>
<br>WARNING #2: By default computed forces do NOT include blanked elements.<br>
<br>Since cut section display is primarily intended to be used interactively the default behaviour is to omit blanked elements<br>from the forceand moment calculation, since in this way the reported values match what is visible on the screen.<br>
<br>This behaviour is not ideal for batch processing since the user can, by manipulating blanking, change the results which<br>are computed. Therefore the optional argument &lt;include\_blanked&gt; may be used to override this behaviour and to force<br>blanked elements to be considered. If omitted, or set to zero, then the default behaviour of omitting blanked elements will<br>continue.<br>
<br>WARNING #3: Cutting a model exactly at mesh lines can result in ill-conditioned force and moment calculation.<br>
<br>It is tempting to define cut planes at nodes since this is easy to do, however this can give rise to ill-conditioning in a<br>rectilinear mesh since the cut may lie exactly on the border between two adjacent elements and therefore won't "know" which one's<br>results to use. Since Ansys LS-DYNA elements are constant stress there can be a step change in data values at element borders, and<br>moving the cut plane by a tiny amount can result in a correspondingly large change in cut force and moment values.<br>
<br>It is strongly recommended that cut section definitions used for force and moment extraction should be located away from<br>mesh lines so that they cut elements near their centres, thus avoiding any ambiguity about which elements to use.<br>
<br>WARNING #4: Any element types or parts [excluded](https://help.oasys-software.com/smart/project-d3plot/exclude/a/exclude) from the cut section<br>are still included in the force and moment calculation. |
| --- |

#### Arguments

* options (object)

Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| direction\_id (optional) | integer | Index starting at 1 of the plane direction for multiple non-parallel planes. This should be at most the number of
non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the data for the first plane direction
will be used. |
| include\_blanked (optional) | integer | 0 to omit blanked elements (default), 1 to include them |
| model\_id (optional) | integer | Model id that exists in &lt;window\_id&gt;. If omitted the first model in the window will be used. |
| part\_id (optional) | integer | 0 all part ids considered (default), otherwise only forces in the specified part are computed. If +ve this is the internal part index,
if -ve this is the external part label. |
| state\_id (optional) | integer | State number to be used. If omitted the state of the window's current frame will be used. |
| window\_id (optional) | integer | A valid window id. If omitted, cut section data for window 1 will be used. |

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| area | real | Cut section area |
| centroid | array of reals | Cut section centroid, [Cx, Cy, Cz] |
| force | array of reals | 3 Forces, [Fx, Fy, Fz] |
| moment | array of reals | 3 Moments, [Mxx, Myy, Mzz] |

#### Return type

object

| Example
<br><br><br>
```

// Retrieve the results of the cut section in window 1 using all default attributes.
if(a = GetCutForces({window_id: 1}))
{
    var fx = a.force[X];
    var myy = a.moment[Y];
    var area = a.area;
}

// Retrieve the results from unblanked elements in the third part using the section
// in window 2 for state 12 in model 1 for the second non-parallel plane direction.
var b = GetCutForces({window_id: 2, include_blanked: 0, part_id: 3, state_id: 12, model_id: 1, direction_id: 2});

```
<br><br> |
| --- |

* * *

| GetCutForces(window\_id*[integer]*, include\_blanked (optional)*[integer]*, part\_id (optional)*[integer]*, state\_id (optional)*[integer]*, model\_id (optional)*[integer]*) [static] [deprecated]
<br>This function is deprecated in version 19.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br><br><br><br>Returns the forces, moments, centroid and area of the cut section in &lt;window\_id&gt;.<br>
<br>The coordinate system of these results depends upon the cut section's space system as described in the non-deprecated function with the same name. |
| --- |

#### Arguments

* window\_id (integer)
 
A valid window id

* include\_blanked (optional) (integer)
 
0 to omit blanked elements (default), 1 to include them

* part\_id (optional) (integer)
 
0 all part ids considered (default), otherwise only forces in the specified part are computed. If +ve this is the internal part index,
if -ve this is the external part label.

* state\_id (optional) (integer)
 
State number to be used. If omitted the state of the window's current frame will be used.

* model\_id (optional) (integer)
 
Model id that exists in &lt;window\_id&gt;. If omitted the first model in the window will be used.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| area | real | Cut section area |
| centroid | array of reals | Cut section centroid, [Cx, Cy, Cz] |
| force | array of reals | 3 Forces, [Fx, Fy, Fz] |
| moment | array of reals | 3 Moments, [Mxx, Myy, Mzz] |

#### Return type

object

| Example
<br><br><br>
```

// Retrieve the results of the cut section in window 1 using all default attributes.
if(a = GetCutForces(1))
{
    var fx = a.force[X];
    var myy = a.moment[Y];
    var area = a.area;
}

// Retrieve the results from unblanked elements in the third part using the section in window 2 for state 12 in model 1.
var b = GetCutForces(2, 0, 3, 12, 1);

```
<br><br> |
| --- |

* * *

| GetCutSection(options*[object]*) [static]
Description<br>Retrieves all attributes of the cut section in &lt;window\_id&gt;. |
| --- |

#### Arguments

* options (object)

Retrieves all attributes of the cut section in &lt;window\_id&gt;. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| direction\_id (optional) | integer | Index starting at 1 of the plane direction for multiple non-parallel planes. This should be at most the number of
non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the data for the first plane direction
will be used. |
| model\_id (optional) | integer | A valid model id that exists in &lt;window\_id&gt;. If omitted the state of the window's current frame will be used.
This only matters if the section uses the method [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y) or [CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z)
defined by a node or [N3](d3plot-cutsection-class.md#CutSection.N3) and it has been set
to follow nodes with [FOLLOW_N](d3plot-cutsection-class.md#CutSection.FOLLOW_N). In which case the section origin and/or
vectors may change as the node(s) move. |
| state\_id (optional) | integer | State number to be used. If omitted the state of the window's current frame will be used. This only matters if
the section uses the method [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y) or [CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z)
defined by a node or [N3](d3plot-cutsection-class.md#CutSection.N3) and it has been set to follow nodes
with [FOLLOW_N](d3plot-cutsection-class.md#CutSection.FOLLOW_N). In which case the section origin and/or vectors may
change as the node(s) move. |
| window\_id (optional) | integer | A valid window id. If omitted, cut section data for window 1 will be returned. |

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| combination | integer | How positive and negative actions for multiple directions are combined. Can be [UNION](d3plot-cutsection-class.md#CutSection.UNION) or [INTERSECTION](d3plot-cutsection-class.md#CutSection.INTERSECTION). Note that this only has an effect with at least 2 cut plane directions. |
| definition | integer | One of [OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V),
[CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y),
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z),
[N3](d3plot-cutsection-class.md#CutSection.N3),
[LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA) or
zero if no section has been defined yet |
| follow\_n | integer | [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) if the section follows any defining node(s) as appropriate,
[OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) if it does not. This value is
only meaningful for definition == CONST\_X/Y/Z where a node in nodes[0] was supplied, and N3 |
| multi\_custom\_cut | logical | whether or not custom spacing for multiple parallel cuts is on |
| multi\_cut | logical | whether or not multiple parallel cuts are on |
| negative\_action | integer | Negative action for the cut direction. Can be [OMIT](d3plot-cutsection-class.md#CutSection.OMIT), [OUTLINE](d3plot-cutsection-class.md#CutSection.OUTLINE), [NORMAL](d3plot-cutsection-class.md#CutSection.NORMAL) or [TRANSPARENT](d3plot-cutsection-class.md#CutSection.TRANSPARENT). |
| nneg | integer | number of negative parallel planes when multi\_cut is true and multi\_custom\_cut is false, undefined otherwise |
| nodes | array of integers | For definition = CONST\_X/Y/Z: nodes[0] = index of node if supplied<br>
<br>For definition = N3: nodes[0 to 2] = indices of three N3 nodes<br>
<br>This array will always be present and have three entries, with unused entries being set to zero. |
| npos | integer | number of positive parallel planes when multi\_cut is true and multi\_custom\_cut is false, undefined otherwise |
| origin | array of reals | Origin coordinates |
| positive\_action | integer | Positive action for the cut direction. Can be [OMIT](d3plot-cutsection-class.md#CutSection.OMIT), [OUTLINE](d3plot-cutsection-class.md#CutSection.OUTLINE), [NORMAL](d3plot-cutsection-class.md#CutSection.NORMAL) or [TRANSPARENT](d3plot-cutsection-class.md#CutSection.TRANSPARENT). |
| space | integer | Either [BASIC](d3plot-cutsection-class.md#CutSection.BASIC) or
[DEFORMED](d3plot-cutsection-class.md#CutSection.DEFORMED) |
| spacing | real or array of reals | when multi\_custom\_cut is false and multi\_cut is true: spacing value<br> <br>when multi\_custom\_cut is true and multi\_cut is true: array of offsets from the local cut origin<br> <br>when multi\_cut is false: 0.0 |
| status | integer | Either [OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or
[ON](d3plot-sharedconstants-class.md#SharedConstants.ON) |
| thick\_cut | logical | whether or not thick cut is on |
| thickness | real | thickness for thick cuts when thick\_cut is true, 0.0 otherwise |
| visible | integer | [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) if the cut direction is active,
[OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) otherwise. |
| x\_axis | array of reals | Local X axis vector (normalised) |
| y\_axis | array of reals | Local Y axis vector (normalised) |
| z\_axis | array of reals | Local Z axis vector (normalised) |

#### Return type

object

| Example
<br><br><br>
```

// Retrieve the attributes of the cut section in window 1 at the current state and model.
var a = GetCutSection({window_id: 1});

// Retrieve the attributes of the cut section in window 2, at state #10 in model #3.
var a = GetCutSection({window_id: 2, state_id: 10, model_id : 3});

// Retrieve the attributes of the cut section in window 1 for the second of several
// non-parallel plane directions.
var a = GetCutSection({window_id: 1, direction_id: 2});

```
<br><br> |
| --- |

* * *

| GetCutSection(window\_id*[integer]*, state\_id (optional)*[integer]*, model\_id (optional)*[integer]*) [static] [deprecated]
<br>This function is deprecated in version 19.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Retrieves all attributes of the cut section in &lt;window\_id&gt;. |
| --- |

#### Arguments

* window\_id (integer)
 
A valid window id

* state\_id (optional) (integer)
 
State number to be used. If omitted the state of the window's current frame will be used. This only matters if
the section uses the method [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y) or [CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z)
defined by a node or [N3](d3plot-cutsection-class.md#CutSection.N3) and it has been set to follow nodes
with [FOLLOW_N](d3plot-cutsection-class.md#CutSection.FOLLOW_N). In which case the section origin and/or vectors may
change as the node(s) move.

* model\_id (optional) (integer)
 
A valid model id that exists in &lt;window\_id&gt;. If omitted the state of the window's current frame will be used.
This only matters if the section uses the method [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y) or [CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z)
defined by a node or [N3](d3plot-cutsection-class.md#CutSection.N3) and it has been set
to follow nodes with [FOLLOW_N](d3plot-cutsection-class.md#CutSection.FOLLOW_N). In which case the section origin and/or
vectors may change as the node(s) move.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| definition | integer | One of [OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V),
[CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y),
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z),
[N3](d3plot-cutsection-class.md#CutSection.N3),
[LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA) or
zero if no section has been defined yet |
| follow\_n | integer | [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) if the section follows any defining node(s) as appropriate,
[OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) if it does not. This value is
only meaningful for definition == CONST\_X/Y/Z where a node in nodes[0] was supplied, and N3 |
| multi\_custom\_cut | logical | whether or not custom spacing for multiple parallel cuts is on |
| multi\_cut | logical | whether or not multiple parallel cuts are on |
| nneg | integer | number of negative parallel planes when multi\_cut is true and multi\_custom\_cut is false, undefined otherwise |
| nodes | array of integers | For definition = CONST\_X/Y/Z: nodes[0] = index of node if supplied<br>
<br>For definition = N3: nodes[0 to 2] = indices of three N3 nodes<br>
<br>This array will always be present and have three entries, with unused entries being set to zero. |
| npos | integer | number of positive parallel planes when multi\_cut is true and multi\_custom\_cut is false, undefined otherwise |
| origin | array of reals | Origin coordinates |
| space | integer | Either [BASIC](d3plot-cutsection-class.md#CutSection.BASIC) or
[DEFORMED](d3plot-cutsection-class.md#CutSection.DEFORMED) |
| spacing | real or array of reals | when multi\_custom\_cut is false and multi\_cut is true: spacing value<br> <br>when multi\_custom\_cut is true and multi\_cut is true: array of offsets from the local cut origin<br> <br>when multi\_cut is false: undefined |
| status | integer | The status of the cutting switch. Either [OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or
[ON](d3plot-sharedconstants-class.md#SharedConstants.ON) |
| thick\_cut | logical | whether or not thick cut is on |
| thickness | real | thickness for thick cuts when thick\_cut is true, undefined otherwise |
| x\_axis | array of reals | Local X axis vector (normalised) |
| y\_axis | array of reals | Local Y axis vector (normalised) |
| z\_axis | array of reals | Local Z axis vector (normalised) |

#### Return type

object

| Example
<br><br><br>
```

// Retrieve the attributes of the cut section in window 1 at the current state and model.
var a = GetCutSection(1);

// Retrieve the attributes of the cut-section in window 2, at state #10 in model #3.
var a = GetCutSection(2, 10, 3);

```
<br><br> |
| --- |

* * *

| RemoveCutDirection(options*[object]*) [static] [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Turns off a cut plane from a window with multiple non-parallel planes. Note that from D3PLOT 20.0 onwards cut directions can be turned off with the &lt;visible&gt; property in SetCutSection instead. |
| --- |

#### Arguments

* options (object)

Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| direction\_id (optional) | integer | Index starting at 1 of the plane direction to be removed. This should be at most the number of
non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the last plane direction
will be removed. |
| window\_id | integer | A valid window ID |

| Returns
<br><br><br>
Return type |
| --- |

| Example
<br><br><br>
```

// Assuming that there are 3 non-parallel cut planes in window 1, remove the second direction:
RemoveCutDirection({ window_id:1, direction_id:2 });

```
<br><br> |
| --- |

* * *

| SetCutSection(options*[object]*) [static]
Description<br><br><br><br>Sets properties of the cut section in &lt;window\_id&gt;<br>
<br>Each D3PLOT window can have cut planes in up to three directions, which are by default not active. Their location, orientation and type can be defined here,<br>and it can be turned on or off. Forces and moments from the cut sections can be obtained from function<br>[GetCutForces](d3plot-cutsection-class.md#CutSection::GetCutForces)().<br>
<br>Cut section definitions are a "per window" attribute that apply to all models in the window. Thefore if the window has multiple models,<br>and nodes are used to define the section (CONST\_X, CONST\_Y, CONST\_Z with a node or N3), the origin and/or vectors of the section may vary for each model in the window. In<br>addition if the coordinates of these nodes are "followed" (see the &lt;follow\_n&gt; property on the options), then<br>the section locations may change from state to state. |
| --- |

#### Arguments

* options (object)

The cut section properties which should be changed.

    All coordinates and vectors must be defined in model space, and will always form an orthogonal right handed coordinate system in which local Z is normal to the cut plane.

    Vector length is irrelevant (but should be well-conditioned), and the Y axis is obtained automatically from the vector cross product Z\_AXIS x X\_AXIS. If the Z and X
axes as supplied are not at right angles the X will be updated to make it orthogonal to Y and Z.

    &lt;nodes[0]&gt; or &lt;origin&gt; will define the cut section origin coordinate.
The array &lt;nodes&gt; for N3 or origin/x\_axis/xy\_plane will define the cut section orientation.

    Care must be taken when defining nodes for windows that contain multiple models. Since a node index (+ve) may resolve to a different node in each model it is usually
best to use external labels (-ve) in this context to avoid ambiguity. (The speed of the external =&gt; internal lookup will not matter as this function is unlikely to be
called many times.)

    FOLLOW\_N(odes) will only have an effect if the cut section is defined by node(s), i.e. CONST\_X, CONST\_Y or CONST\_Z with nodes[0] or N3.

Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| attribute (optional) | integer | This property is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Can be one of [STATUS](d3plot-sharedconstants-class.md#SharedConstants.STATUS),
[SPACE](d3plot-cutsection-class.md#CutSection.SPACE),
[OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V),
[CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y),
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z),
[N3](d3plot-cutsection-class.md#CutSection.N3),
[LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA),
[FOLLOW_N](d3plot-cutsection-class.md#CutSection.FOLLOW_N).
From D3PLOT 20.0 onwards this property can be omitted in the SPACE, OR\_AND\_V and FOLLOW\_N
cases, whereas in the other cases the &lt;definition&gt; property should be used with the same
value. [deprecated] |
| combination (optional) | integer | How positive and negative actions for multiple directions are combined. Can be [UNION](d3plot-cutsection-class.md#CutSection.UNION) or [INTERSECTION](d3plot-cutsection-class.md#CutSection.INTERSECTION). Note that this only has an effect with at least 2 cut plane directions. |
| definition (optional) | integer | Definition method for the cut plane direction.
Can be one of [OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V),
[CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y),
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z),
[N3](d3plot-cutsection-class.md#CutSection.N3),
[LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA).
This can be omitted when only properties independent from the plane position are changed, for example &lt;follow\_n&gt; or &lt;status&gt;. |
| direction\_id (optional) | integer | Index starting at 1 of the plane direction for multiple non-parallel planes. Can be 1, 2 or 3. It can be either an existing direction index to update or a free index to add a new plane direction. If &lt;direction&gt; is omitted, the data for the first plane direction will be set by this function. |
| follow\_n (optional) | integer | [OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) (default OFF).
Determines whether or not a [DEFORMED](d3plot-cutsection-class.md#CutSection.DEFORMED)space section will track the motion of the node(s) used to define it.
This is only meaningful for sections defined by:<ul>
<li><a href="d3plot-cutsection-class.md#CutSection.N3">N3</a>. The motion of all three nodes will update the origin and axes at each state.</li>
<li><a href="d3plot-cutsection-class.md#CutSection.CONST_X">CONST_X</a>,</li>
<a href="d3plot-cutsection-class.md#CutSection.CONST_Y">CONST_Y</a> or <a href="d3plot-cutsection-class.md#CutSection.CONST_Z">CONST_Z</a> where a node has been used to
define the origin. The node motion will update the section origin at each state, but its axes will remain constant.

</ul> |
| negative\_action (optional) | integer | Negative action for the cut direction. Can be [OMIT](d3plot-cutsection-class.md#CutSection.OMIT), [OUTLINE](d3plot-cutsection-class.md#CutSection.OUTLINE), [NORMAL](d3plot-cutsection-class.md#CutSection.NORMAL) or [TRANSPARENT](d3plot-cutsection-class.md#CutSection.TRANSPARENT). |
| nneg (optional) | integer | number of negative parallel planes for uniform spacing (required when &lt;spacing&gt; is a single positive number for uniform spacing) |
| nodes (optional) | array of integers | Array of +ve indices or -ve labels of the nodes.
For [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y) or
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z) this should have length 1 and
contain the node whose X, Y or Z coordinate defines the plane position.
For [N3](d3plot-cutsection-class.md#CutSection.N3) it should have length 3 containing
the three nodes where the plane passes through. (required for &lt;definition&gt; [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y) or
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z) when origin is not defined or
for &lt;definition&gt; [N3](d3plot-cutsection-class.md#CutSection.N3)) |
| normal\_head (optional) | array of reals | Normal head coordinate (required for &lt;definition&gt; [LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA)) |
| npos (optional) | integer | number of positive parallel planes for uniform spacing (required when &lt;spacing&gt; is a single positive number for uniform spacing) |
| origin (optional) | array of reals | Coordinate array defining the origin of the plane. (for &lt;definition&gt; [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y) or
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z) when nodes is not defined or
for &lt;definition&gt; [OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V) or
[LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA)) |
| positive\_action (optional) | integer | Positive action for the cut direction. Can be [OMIT](d3plot-cutsection-class.md#CutSection.OMIT), [OUTLINE](d3plot-cutsection-class.md#CutSection.OUTLINE), [NORMAL](d3plot-cutsection-class.md#CutSection.NORMAL) or [TRANSPARENT](d3plot-cutsection-class.md#CutSection.TRANSPARENT). |
| space (optional) | integer | [BASIC](d3plot-cutsection-class.md#CutSection.BASIC) or [DEFORMED](d3plot-cutsection-class.md#CutSection.DEFORMED) (default).
Determines whether the section is Lagrangian (BASIC) or Eulerian (DEFORMED).
In the BASIC case the section is tied to the undeformed geometry and will move and distort as the model deforms, in the DEFORMED case the section is fixed in
model space and the structure passes through it. For compatibility with LS\_DYNA the way forces are calculated also varies with section space - see the documentation
on [GetCutForces](d3plot-cutsection-class.md#CutSection::GetCutForces)(). |
| spacing (optional) | real or array of reals | Spacing for multiple parallel cuts. If this is a single positive number, multiple parallel cuts with uniform spacing will be turned on, where &lt;npos&gt; and &lt;nneg&gt; will be required to define the number of planes in the positive and negative directions. If this is an array of real numbers, multiple parallel cuts with custom spacing will be turned on, where this array is the list of offsets from the local cut origin. If spacing is 0.0, multiple parallel cuts will be turned off. If spacing is undefined, then multiple parallel cuts will keep their existing spacing. |
| status (optional) | integer | [OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) (default OFF).
Determines whether or not the cutting switch is on in the current window. The cutting switch does not need to be on in order to compute cut forces and moments. |
| thickness (optional) | real | Thickness for thick cuts. If positive, thick cuts will be turned on. If 0.0, thick cuts will be turned off. If thickness is undefined, then thick cuts and thickness will remain on or off as before. |
| visible (optional) | integer | [OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) (default ON).
Determines whether or not the cut direction at &lt;direction\_id&gt; is active. For it to be visible, in addition to this &lt;visible&gt; property also the cutting switch needs to be turned on with &lt;status&gt;. |
| window\_id (optional) | integer | A valid window id or [ALL](d3plot-sharedconstants-class.md#SharedConstants.ALL) for all active windows. If omitted, the cut section will be set for ALL windows. |
| x\_axis (optional) | array of reals | X axis vector (required for &lt;definition&gt; [OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V)) |
| x\_axis\_head (optional) | array of reals | X axis head coordinate (required for &lt;definition&gt; [LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA)) |
| xy\_plane (optional) | array of reals | XY plane vector (required for &lt;definition&gt; [OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V)) |

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Set the cut section to "deformed" (lagrangian) space in window 1.
SetCutSection({window_id: 1, space: DEFORMED});

// Make the section in window 2 constant in Z, with its origin at
// (1,2,3). Implicitly this means a plane of constant Z = 3.
if(!SetCutSection({window_id: 2, definition: CONST_Z, origin: [1,2,3]}))
{
    ... deal with error
}

// Make a cut-section in window 3 using the LS_DYNA method with the
// origin at (0,0,0), Z axis pointing down the global X vector (head at
// (10,0,0)), and X axis down the global Y vector (0,10,0)
if(!SetCutSection({window_id: 3, definition: LS_DYNA, origin: [0,0,0], normal_head: [10,0,0], x_axis_head: [0,10,0]}))
{
    ... deal with error
}

// In window 1 define the second direction with origin (10, 0, 0), local
// X axis (1,-1,0) and local Y axis (1,1,1). This can be called whether
// direction 2 is defined already or not.
if(!SetCutSection({window_id: 1, definition: OR_AND_V, origin: [10,0,0], x_axis: [1,-1,0], xy_plane: [1,1,1], direction_id: 2}))
{
    ... deal with error
}

// If there is only one cut plane in window 1, turn on a thick cut with
// thickness 4.0:
if(!SetCutSection({window_id: 1, thickness: 4.0}))
{
    ... deal with error
}

// Turn off a thick cut for the second direction in window 1:
if(!SetCutSection({window_id: 1, direction_id: 2, thickness: 0.0}))
{
    ... deal with error
}

// For a single cut plane in window 1 turn on 10 parallel cuts in
// positive and 5 parallel cuts in negative direction with a uniform
// spacing of 20.0 length units:
if(!SetCutSection({window_id: 1, spacing: 20.0, npos: 10, nneg: 5}))
{
    ... deal with error
}

// For the third plane direction in window 1 turn on parallel planes
// with custom spacing such that the offsets from the local cut origin
// are -20.0, 0.0, 10.0 and 20.0 length units:
if(!SetCutSection({window_id: 1, direction_id: 3, spacing: [-20.0, 0.0, 10.0, 20.0]}))
{
    ... deal with error
}

// Turn off parallel cuts for the first direction in window 1:
if(!SetCutSection({window_id: 1, spacing: 0.0}))
{
    ... deal with error
}

// For the first plane direction use normal drawing on the positive
// side and omit items on the negative side:
if(!SetCutSection({direction_id:1, positive_action:NORMAL, negative_action:OMIT}))
{
    ... deal with error
}

// For multiple cut directions use the intersection mode:
if(!SetCutSection({combination:INTERSECTION}))
{
    ... deal with error
}



```
<br><br> |
| --- |

* * *

| SetCutSection(window\_id*[integer]*, attribute*[integer]*, value*[integer | array of reals | array of integers]*) [static] [deprecated]
<br>This function is deprecated in version 19.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br><br><br><br>Sets properties of the cut section in &lt;window\_id&gt;<br>
<br>Each D3PLOT window can have cut planes in up to three directions, which are by default not active. Their location, orientation and type can be defined here,<br>and it can be turned on or off. Forces and moments from the cut sections can be obtained from function<br>[GetCutForces](d3plot-cutsection-class.md#CutSection::GetCutForces)().<br>
<br>Cut section definitions are a "per window" attribute that apply to all models in the window. Thefore if the window has multiple models,<br>and nodes are used to define the section (CONST\_X, CONST\_Y, CONST\_Z with a node or N3), the origin and/or vectors of the section may vary for each model in the window. In<br>addition if the coordinates of these nodes are "followed" (see the &lt;follow\_n&gt; property on the options), then<br>the section locations may change from state to state. |
| --- |

#### Arguments

* window\_id (integer)
 
A valid window id or [ALL](d3plot-sharedconstants-class.md#SharedConstants.ALL) for all active windows

* attribute (integer)
 
Can be one of [STATUS](d3plot-sharedconstants-class.md#SharedConstants.STATUS),
[SPACE](d3plot-cutsection-class.md#CutSection.SPACE),
[OR_AND_V](d3plot-cutsection-class.md#CutSection.OR_AND_V),
[CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y),
[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z),
[N3](d3plot-cutsection-class.md#CutSection.N3),
[LS_DYNA](d3plot-cutsection-class.md#CutSection.LS_DYNA),
[FOLLOW_N](d3plot-cutsection-class.md#CutSection.FOLLOW_N).

* value (integer | array of reals | array of integers)

The value of the specified &lt;attribute&gt;

* STATUS: [OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) (default OFF).
Determines whether or not the cut section is active in the current window. The section does not have to be active in order to compute cut forces and moments.* SPACE: [BASIC](d3plot-cutsection-class.md#CutSection.BASIC) or [DEFORMED](d3plot-cutsection-class.md#CutSection.DEFORMED) (default).
Determines whether the section is Lagrangian (BASIC) or Eulerian (DEFORMED).
In the BASIC case the section is tied to the undeformed geometry and will move and distort as the model deforms, in the DEFORMED case the section is fixed in
model space and the structure passes through it. For compatibility with LS\_DYNA the way forces are calculated also varies with section space - see the documentation
on[GetCutForces](d3plot-cutsection-class.md#CutSection::GetCutForces)().* FOLLOW\_N: [OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or [ON](d3plot-sharedconstants-class.md#SharedConstants.ON) (default OFF).
Determines whether or not a[DEFORMED](d3plot-cutsection-class.md#CutSection.DEFORMED)space section will track the motion of the node(s) used to define it.
This is only meaningful for sections defined by:    * [N3](d3plot-cutsection-class.md#CutSection.N3). The motion of all three nodes will update the origin and axes at each state.
    * [CONST_X](d3plot-cutsection-class.md#CutSection.CONST_X),
[CONST_Y](d3plot-cutsection-class.md#CutSection.CONST_Y)or[CONST_Z](d3plot-cutsection-class.md#CutSection.CONST_Z)where a node has been used to
define the origin. The node motion will update the section origin at each state, but its axes will remain constant.

The section can be defined by any of the following:

* OR\_AND\_V: An array of 9 numbers in three triplets: &lt;origin coordinate&gt;, &lt;X axis vector&gt;, &lt;XY plane vector&gt;. Local Z is obtained from X cross XY.
* CONST\_X: A coordinate array or node id. The plane will be aligned with the X axis with its origin either at the explicit coordinate (array) &lt;coord[3]&gt;, or at the
coordinate of node (integer) &lt;node\_id&gt;.* CONST\_Y: A coordinate array or node id. The plane will be aligned with the Y axis with its origin either at the explicit coordinate (array) &lt;coord[3]&gt;, or at the
coordinate of node (integer) &lt;node\_id&gt;.* CONST\_Z: A coordinate array or node id. The plane will be aligned with the Z axis with its origin either at the explicit coordinate (array) &lt;coord[3]&gt;, or at the
coordinate of node (integer) &lt;node\_id&gt;.* N3: An array of 3 integer node ids. Node 1 is the origin, N1N2 is the local X vector and N1N3 defines the local XY plane. Local Z is obtained from N1N2 cross N1N3.
+ve for internal indices, -ve for labels.* LS\_DYNA: An array of 9 numbers in three triplets: &lt;Normal tail coord (origin)&gt;, &lt;Normal head coord&gt;, &lt;X axis head coord&gt;. Local Z and local X are
obtained directly, and local Y from Z cross X.

All coordinates and vectors must be defined in model space, and will always form an orthogonal right handed coordinate system in which local Z is normal to the cut plane.

Vector length is irrelevant (but should be well-conditioned), and the Y axis is obtained automatically from the vector cross product Z\_AXIS x X\_AXIS. If the Z and X
axes as supplied are not at right angles the X will be updated to make it orthogonal to Y and Z.

&lt;nodes[0]&gt; or &lt;origin&gt; will define the cut section origin coordinate.
The array &lt;nodes&gt; for N3 or origin/x\_axis/xy\_plane will define the cut section orientation.

Care must be taken when defining nodes for windows that contain multiple models. Since a node index (+ve) may resolve to a different node in each model it is usually
best to use external labels (-ve) in this context to avoid ambiguity. (The speed of the external =&gt; internal lookup will not matter as this function is unlikely to be
called many times.)

FOLLOW\_N(odes) will only have an effect if the cut section is defined by node(s), i.e. CONST\_X, CONST\_Y or CONST\_Z with nodes[0] or N3.

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Set the cut section to "deformed" (lagrangian) space in window 1.
SetCutSection(1, SPACE, DEFORMED);

// Make the section in window 2 constant in Z, with its origin at (1,2,3). Implicitly this means a plane of constant Z = 3.
var coord = new Array(1.0, 2.0, 3.0);

if(!SetCutSection(2, CONST_Z, coord))
{
    ... deal with error
}

// Make a cut-section in window 3 using the LS_DYNA method with the origin at (0,0,0), Z axis pointing down the global
// X vector (head at (10,0,0)), and X axis down the global Y vector (0,10,0)
var data = new Array(0.0, 0.0, 0.0, 10.0, 0.0,0.0, 0.0, 10.0, 0.0);

if(!SetCutSection(3, LS_DYNA, data))
{
    ... deal with error
}

```
<br><br> |
| --- |

* * *