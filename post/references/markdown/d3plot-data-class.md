# Data

Functions and constants relating to Data

## Functions

* [GetConditionParts](d3plot-data-class.md#Data::GetConditionParts)(component*[integer]*, value*[real]*, mode*[integer]*, int\_pt (optional)*[object | integer]*, extra (optional)*[integer]*)
* [GetContourLimit](d3plot-data-class.md#Data::GetContourLimit)(mode*[integer]*, component (optional)*[string]*)
* [GetData](d3plot-data-class.md#Data::GetData)(component*[integer]*, type\_code*[integer]*, item*[integer]*, int\_pt (optional)*[object | integer]*, extra (optional)*[integer]*, fr\_of\_ref (optional)*[integer]*, state\_id (optional)*[integer]*, dda (optional)*[integer]*, consider\_blanking (optional)*[integer]*, mag\_or\_cur (optional)*[integer]*)
* [GetMultipleData](d3plot-data-class.md#Data::GetMultipleData)(component*[integer]*, type\_code*[integer]*, item\_1*[integer]*, item\_2*[integer]*, int\_pt (optional)*[object | integer]*, extra (optional)*[integer]*, fr\_of\_ref (optional)*[integer]*, state\_id (optional)*[integer]*, dda (optional)*[integer]*, consider\_blanking (optional)*[integer]*, mag\_or\_cur (optional)*[integer]*)
* [GetNumOnPlanIntPts](d3plot-data-class.md#Data::GetNumOnPlanIntPts)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [GetNumberOf](d3plot-data-class.md#Data::GetNumberOf)(type\_code*[integer]*, options (optional)*[object]*)
* [GetNumberOf](d3plot-data-class.md#Data::GetNumberOf_deprecated)(type\_code*[integer]*, state\_id (optional)*[integer]*) [deprecated]
* [QueryDataPresent](d3plot-data-class.md#Data::QueryDataPresent)(component*[integer]*, type\_code (optional)*[integer]*)

## Data constants

### Constants for Frame of Reference

| **Name** | **Description** |
| --- | --- |
| CYLINDRICAL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Cylindrical coordinate system. Use [Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL) instead [deprecated] |
| GLOBAL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Global coordinate system. Use [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) instead [deprecated] |
| LOCAL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Element local coordinate system. Use [Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL) instead [deprecated] |
| MATERIAL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Material axes coordinate system. Use [Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL) instead [deprecated] |
| USER\_DEFINED | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>User-defined coordinate system. Use [Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED) instead [deprecated] |

### Constants for GetNumberOf

| **Name** | **Description** |
| --- | --- |
| CUT\_SECTION | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of non-parallel cut plane directions. Use [Constant.CUT_SECTION](d3plot-constant-class.md#Constant.CUT_SECTION) instead [deprecated] |
| FAMILY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of families. Use [Constant.FAMILY](d3plot-constant-class.md#Constant.FAMILY) instead [deprecated] |
| GROUP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of groups. Use [Type.GROUP](d3plot-type-class.md#Type.GROUP) instead [deprecated] |
| INCLUDE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of includes. Use [Constant.INCLUDE](d3plot-constant-class.md#Constant.INCLUDE) instead [deprecated] |
| MODEL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of models. Use [Type.MODEL](d3plot-type-class.md#Type.MODEL) instead [deprecated] |
| NEIPH | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of "Extra" Solid variables. Use [Constant.NEIPH](d3plot-constant-class.md#Constant.NEIPH) instead [deprecated] |
| NEIPS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of "Extra" Shell variables. Use [Constant.NEIPS](d3plot-constant-class.md#Constant.NEIPS) instead [deprecated] |
| NEIPT | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of "Extra" Thick Shell variables. Use [Constant.NEIPT](d3plot-constant-class.md#Constant.NEIPT) instead [deprecated] |
| NIP\_B | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of Beam integration points. Use [Constant.NIP_B](d3plot-constant-class.md#Constant.NIP_B) instead [deprecated] |
| NIP\_H | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of Solid integration points. Use [Constant.NIP_H](d3plot-constant-class.md#Constant.NIP_H) instead [deprecated] |
| NIP\_S | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of Shell integration points. Use [Constant.NIP_S](d3plot-constant-class.md#Constant.NIP_S) instead [deprecated] |
| NIP\_T | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of Thick Shell integration points. Use [Constant.NIP_T](d3plot-constant-class.md#Constant.NIP_T) instead [deprecated] |
| N\_ON\_PLAN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of on-plan integration points written. Use [Constant.N_ON_PLAN](d3plot-constant-class.md#Constant.N_ON_PLAN) instead [deprecated] |
| N\_UBMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of user-defined beam scalar components. Use [Constant.N_UBMS](d3plot-constant-class.md#Constant.N_UBMS) instead [deprecated] |
| N\_UBMV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of user-defined beam vector components. Use [Constant.N_UBMV](d3plot-constant-class.md#Constant.N_UBMV) instead [deprecated] |
| N\_UNOS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of user-defined node scalar components. Use [Constant.N_UNOS](d3plot-constant-class.md#Constant.N_UNOS) instead [deprecated] |
| N\_UNOV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of user-defined node vector components. Use [Constant.N_UNOV](d3plot-constant-class.md#Constant.N_UNOV) instead [deprecated] |
| N\_USSS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of user-defined solid/shell scalar components. Use [Constant.N_USSS](d3plot-constant-class.md#Constant.N_USSS) instead [deprecated] |
| N\_USST | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of user-defined solid/shell tensor components. Use [Constant.N_USST](d3plot-constant-class.md#Constant.N_USST) instead [deprecated] |
| STATE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of states. Use [Constant.STATE](d3plot-constant-class.md#Constant.STATE) instead [deprecated] |
| USER | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Number of user-defined components. Use [Constant.USER](d3plot-constant-class.md#Constant.USER) instead [deprecated] |

### Constants for Phase Angle Results

| **Name** | **Description** |
| --- | --- |
| CURRENT\_VAL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Current value result. Use [Constant.CURRENT_VAL](d3plot-constant-class.md#Constant.CURRENT_VAL) instead [deprecated] |
| MAGNITUDE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Magnitude result. Use [Constant.MAGNITUDE](d3plot-constant-class.md#Constant.MAGNITUDE) instead [deprecated] |

| Details of functions 
GetConditionParts(component*[integer]*, value*[real]*, mode*[integer]*, int\_pt (optional)*[object | integer]*, extra (optional)*[integer]*) [static]
Description<br><br><br><br>Returns an object with all parts in current model filtered into two lists (pass\_list<br>and fail\_list). Passing parts must have elements that pass the specified condition (indicated<br>by &lt;value&gt; and &lt;mode&gt;) for the specified &lt;component&gt;.<br>
<br>NOTE: This function only works for scalar components. If &lt;component&gt; is a vector or tensor component, this function will return null. |
| --- |

#### Arguments

* component (integer)
 
A valid [component code](d3plot-component-class.md) (e.g. Component.DX, Component.SXY)

* value (real)
 
A value to compare element data against.

* mode (integer)
 
Determines if condition is [Constant.LT](d3plot-constant-class.md#Constant.LT) (&lt;),
[Constant.LTEQ](d3plot-constant-class.md#Constant.LTEQ) (&lt;=), [Constant.GT](d3plot-constant-class.md#Constant.GT) (&gt;)
or [Constant.GTEQ](d3plot-constant-class.md#Constant.GTEQ) (&gt;=) than &lt;value&gt;.

* int\_pt (optional) (object) | integer

This may be one of three types:
1. A +ve integer that is an integration point id
2. One of the types [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM) for shell surfaces only
3. An object defining both through-thickness and on-plan integration points for fully integrated shells.

Integration points are only meaningful for some element type / data component combinations:

* Shells and Tshells: Stress and strain tensors; Plastic strain; "Extra" data (if written)
* Solids: All data components if NINTSLD on the database extent binary card is 8
* Beams: 3 Stresses and 2 strains in non-resultant beam types if BEAMIP on the database extent binary card is &gt; 0

This has become a complex data field, please see the separate section on
[Defining the Integration](d3plot-integrationpoints-class.md) point argument below.

Where the integration point is not relevant this argument may be omitted.

If &lt;int\_pt&gt; is not defined, this function will loop through all through thickness integration points for
each element to check if the condition is fufilled.

Use zero to define a null "padding" argument
 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Through thickness integration point |
| op (optional) | integer | On plan integration point. Defaults to the first one. |

* extra (optional) (integer)

* The "Extra" solid or shell component id for components [Component.SOX](d3plot-component-class.md#Component.SOX) or [Component.SHX](d3plot-component-class.md#Component.SHX)
* The ALE mulit-material group id for components [Component.AMMG](d3plot-component-class.md#Component.AMMG) and [Component.AMMS](d3plot-component-class.md#Component.AMMS)
* The sub-number for user-defined components [Component.UNOS](d3plot-component-class.md#Component.UNOS), [Component.UNOV](d3plot-component-class.md#Component.UNOV), [Component.USSS](d3plot-component-class.md#Component.USSS), [Component.USST](d3plot-component-class.md#Component.USST), [Component.UBMS](d3plot-component-class.md#Component.UBMS), [Component.UBMV](d3plot-component-class.md#Component.UBMV)

If any of the above component codes are used, the "extra" argument must be set to a non zero value.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fail\_list | array of integers | List of failing parts (indices starting at 1) |
| failed | integer | Number of failing parts |
| pass\_list | array of integers | List of passing parts (indices starting at 1) |
| passed | integer | Number of passing parts |

#### Return type

object

| Example
<br><br><br>
```

// Does the filtering for the (scalar) X stress of part elements at integration point 2,
// checking if they are greater than 0.1
var a = GetConditionParts(Component.SXX, 0.1, Constant.GT, 2);

// Does the filtering for the yield utilisation factor of part elements (looping through all
// integration points), checking if they are greater than or equals to 1.0
var b = GetConditionParts(Component.YUTF, 1.0, Constant.GTEQ);

```
<br><br> |
| --- |

* * *

| GetContourLimit(mode*[integer]*, component (optional)*[string]*) [static]
Description<br>Returns the maximum/ minimum contour plot value of &lt;component&gt; specified for the current window.<br>Returns null if &lt;component&gt; specified is not active. |
| --- |

#### Arguments

* mode (integer)
 
[Constant.MIN](d3plot-constant-class.md#Constant.MIN) for minimum contour plot value, or
[Constant.MAX](d3plot-constant-class.md#Constant.MAX) for maximum contour plot value.

* component (optional) (string)
 
Contour plot component: "SCALAR\_1" for Scalar 1, "SCALAR\_2" for Scalar 2,
"VECTOR\_1" or "VECTOR" for Vector, "VECTOR\_2" or "VEL" for "Vel". If only 1 component is
active, &lt;component&gt; is optional and min/max will be evaluated for the active component.
If more than 1 component is active and &lt;component&gt; is not specified, min/max will be
evaluated for Scalar 1.

| Returns
<br>real (or null if &lt;component&gt; specified is not active)<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Gets the minimum contour plot value for Scalar 1
s1min = GetContourLimit(Constant.MIN, "SCALAR_1");

// Gets the maximum contour plot value for Scalar 2
s2max = GetContourLimit(Constant.MAX, "SCALAR_2");

// Gets the minimum contour plot value for Vector
v1min = GetContourLimit(Constant.MIN, "VECTOR_1");

// Gets the maximum contour plot value for "Vel"
v2max = GetContourLimit(Constant.MAX, "VECTOR_2");

```
<br><br> |
| --- |

* * *

| GetData(component*[integer]*, type\_code*[integer]*, item*[integer]*, int\_pt (optional)*[object | integer]*, extra (optional)*[integer]*, fr\_of\_ref (optional)*[integer]*, state\_id (optional)*[integer]*, dda (optional)*[integer]*, consider\_blanking (optional)*[integer]*, mag\_or\_cur (optional)*[integer]*) [static]
Description<br><br><br><br>Returns the data for &lt;component&gt; of type &lt;type\_code&gt; for the single &lt;item&gt;<br>
<br>WARNING: If the function arguments are grammatically correct but the requested data component is not present in<br>the database, then 1, 3 or 6 zeros are returned as required, and no warning message is output. Therefore it is good<br>practice to use function [QueryDataPresent](d3plot-data-class.md#Data::QueryDataPresent)() to check that<br>an optional data component is actually present in a database before attempting to extract its values.<br>
NOTE: to return the same data for a range of items it will be much faster to call the
[GetMultipleData](d3plot-data-class.md#Data::GetMultipleData)() variant of this function, described below.
<br>In other words instead of something like this, calling GetData()for each item individually:<br>

```


for(item=item_1; item<=item_2; item++)
{
    result = GetData(component, type, item, ...);
}


```
<br><br><br><br>You can write the following to extract data into an array of results using a single call to<br>[GetMultipleData](d3plot-data-class.md#Data::GetMultipleData)():<br>

```


result = GetMultipleData(component, type, item_1, item_2, ...);


```
<br><br><br><br>This reduces the time taken to extract data by a factor nearly equal to #items, and for a large model this can<br>give a dramatic speed increase. |
| --- |

#### Arguments

* component (integer)
 
A valid [component code](d3plot-component-class.md) (e.g. Component.DX, Component.SXY)

* type\_code (integer)
 
A valid element [type code](d3plot-type-class.md) (e.g. Type.SOLID, Type.SHELL)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* int\_pt (optional) (object) | integer

This may be one of three types:
1. A +ve integer that is an integration point id
2. One of the types [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM) for shell surfaces only
3. An object defining both through-thickness and on-plan integration points for fully integrated shells.

Integration points are only meaningful for some element type / data component combinations:

* Shells and Tshells: Stress and strain tensors; Plastic strain; "Extra" data (if written)
* Solids: All data components if NINTSLD on the database extent binary card is 8
* Beams: 3 Stresses and 2 strains in non-resultant beam types if BEAMIP on the database extent binary card is &gt; 0

This has become a complex data field, please see the separate section on
[Defining the Integration](d3plot-integrationpoints-class.md) point argument below.

Where the integration point is not relevant this argument may be omitted. Use zero to define a null "padding" argument.

If the integration point is not defined it will use the integration point defined on the current GUI "data" panel,
which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if
changed by an interactive user. If consistent output from a script is required, independent of any prior interactive
activity, an explicit integration point or surface should be defined.
 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Through thickness integration point |
| op (optional) | integer | On plan integration point. Defaults to the first one. |

* extra (optional) (integer)

* The "Extra" solid or shell component id for components [Component.SOX](d3plot-component-class.md#Component.SOX) or [Component.SHX](d3plot-component-class.md#Component.SHX)
* The ALE mulit-material group id for components [Component.AMMG](d3plot-component-class.md#Component.AMMG) and [Component.AMMS](d3plot-component-class.md#Component.AMMS)
* The sub-number for user-defined components [Component.UNOS](d3plot-component-class.md#Component.UNOS), [Component.UNOV](d3plot-component-class.md#Component.UNOV), [Component.USSS](d3plot-component-class.md#Component.USSS), [Component.USST](d3plot-component-class.md#Component.USST), [Component.UBMS](d3plot-component-class.md#Component.UBMS), [Component.UBMV](d3plot-component-class.md#Component.UBMV)

If any of the above component codes are used, the "extra" argument must be set to a non zero value.

Use zero to define a null "padding" argument if this is not required

* fr\_of\_ref (optional) (integer)
 
The frame of reference to return values in [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL),
[Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL),
[Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL),
[Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED),
[Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL).
This is only necessary for directional components (eg X stress) and then only when something other than
the default [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) coordinate system is to be used. If omitted, or set to zero, it defaults to
[Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) for directional components and is ignore for all others.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

* dda (optional) (integer)

Direct Disk Access flag. Either [Constant.OFF](d3plot-constant-class.md#Constant.OFF) (default) for normal data cacheing
or [Constant.ON](d3plot-constant-class.md#Constant.ON) to enable direct disk reading of data.

If turned on this reads data not currently in core memory directly from disk without loading the complete data vector for the
state into core.

This should be used if you want to extract results for a few items over a range of states, since it will potentially be faster.

* consider\_blanking (optional) (integer)

Consider blanking flag. Either [Constant.OFF](d3plot-constant-class.md#Constant.OFF) (default) to ignore blanking
or [Constant.ON](d3plot-constant-class.md#Constant.ON) to consider blanking.

This argument is relevant for nodal contact force results. By default the sum of all forces at a given node for all surfaces
using that node will be returned. By blanking all but the contact surface(s) of interest and setting this argument to ON the results
can be restricted to the contact surface(s) you want.

* mag\_or\_cur (optional) (integer)

Magnitude or Current Value flag. This argument is relevant for analyses with phase angle results.

Set it to [Constant.MAGNITUDE](d3plot-constant-class.md#Constant.MAGNITUDE) to output the magnitude

Set it to [Constant.CURRENT_VAL](d3plot-constant-class.md#Constant.CURRENT_VAL) to output the current value
[Magniude \* cos(phase + phi)]. This is dependent on the current phi angle displayed in the graphics window and can be
set using [SetWindowFrame](d3plot-windows-class.md#Windows::SetWindowFrame)(). See example below.

If omitted, or set to zero, it defaults to Constant.MAGNITUDE.

| Returns
<br>real|Array of reals<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Returns the (scalar) X stress of internal shell #27 at integration point 2, in the element local coordinate system.
var a = GetData(Component.SXX, Type.SHELL, 27, 2, 0, Constant.LOCAL);

// Returns the (scalar) X stress of the shell with external label 123 with the same options.
var a = GetData(Component.SXX, Type.SHELL, -123, 2, 0, Constant.LOCAL);

// Returns an array[6] of the strain tensor in solid element#93, implicitly in the global coordinate system.
var b = GetData(Component.ETEN, Type.SOLID, 93);
var sxx = b[Constant.XX];
var sxy = b[Constant.XY];

// Returns an array[3] of the 2nd user-defined Nodal Vector component at internal node #inode at state #3.
var c = GetData(Component.UNOV, Type.NODE, inode,0, 2, 0, 3);
var vx = c[Constant.X];
var vy = c[Constant.Y];
var vz = c[Constant.Z];

// For an anlysis with phase angles returns the DZ displacement of internal node #1 at the second frame of state 3.
// (Note that the state has to be set with both SetCurrentState() and a DialogueInput() command to get CURRENT_VAL
// to work as this works off the current settings in the graphics window and SetCurrentState() does not update the
// graphics window, it is only used internally by the Javascript interface).
SetCurrentState(3);
DialogueInput("/STATE 3");
SetWindowFrame(1, 2);
var a = GetData(Componnent.DZ, Type.NODE, 1, 0, 0, 0, 0, Constant.OFF, Constant.OFF, Constant.CURRENT_VAL);

```
<br><br> |
| --- |

* * *

| GetMultipleData(component*[integer]*, type\_code*[integer]*, item\_1*[integer]*, item\_2*[integer]*, int\_pt (optional)*[object | integer]*, extra (optional)*[integer]*, fr\_of\_ref (optional)*[integer]*, state\_id (optional)*[integer]*, dda (optional)*[integer]*, consider\_blanking (optional)*[integer]*, mag\_or\_cur (optional)*[integer]*) [static]
Description<br><br><br><br>Returns the data for &lt;component&gt; of type &lt;type\_code&gt; for the range of items &lt;item1 .. item2&gt;<br>
<br>WARNING #1: If the function arguments are grammatically correct but the requested data component is not present in<br>the database, then 1, 3 or 6 zeros are returned as required, and no warning message is output. Therefore it is good<br>practice to use function [QueryDataPresent](d3plot-data-class.md#Data::QueryDataPresent)() to check that<br>an optional data component is actually present in a database before attempting to extract its values.<br>
<br>WARNING #2: It is possible to extract vary large quantities of data using a single call of this function. Bear in<br>mind that JavaScript representations of values are quite bloated, for example all "numbers"are 64 bit (8 byte) floating<br>double format, and the language imposes further overheads because of the way it organises data. For large models it may<br>be necessary to extract large blocks of data in several smaller chunks, rather than one big one.<br>
<br>WARNING #3: The data return value from this function is an array of length #rows, and the subscripts of this array<br>start at row 0. In other words the result for item\_1 in the call below will be returned in results array row data[0].<br>When extracting results for all items of a type, for example all shells in a model, item\_1 will typically be 1, and it<br>is easy to make the mistake of expecting this to be in results array row data[1]. In addition when you extract data<br>for vector or tensor data the result will be a two-dimensional array, aligned data[#cols][#rows]. See the examples at<br>the bottom of this description for more information about using two-dimensional arrays.<br> |
| --- |

#### Arguments

* component (integer)
 
A valid [component code](d3plot-component-class.md) (e.g. Component.DX, Component.SXY)

* type\_code (integer)
 
A valid element [type code](d3plot-type-class.md) (e.g. Type.SOLID, Type.SHELL)

* item\_1 (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* item\_2 (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.
Must have the same sign as item\_1, so both must be +ve or -ve. It is legal for it to be the same as
item\_1, in which case only values for a single item will be extracted.

* int\_pt (optional) (object) | integer
 
This may be one of three types:

1. A +ve integer that is an integration point id
2. One of the types [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM) for shell surfaces only
3. An object defining both through-thickness and on-plan integration points for fully integrated shells.

Integration points are only meaningful for some element type / data component combinations:

* Shells and Tshells: Stress and strain tensors; Plastic strain; "Extra" data (if written)
* Solids: All data components if NINTSLD on the database extent binary card is 8
* Beams: 3 Stresses and 2 strains in non-resultant beam types if BEAMIP on the database extent binary card is &gt; 0

This has become a complex data field, please see the separate section on
[Defining the Integration](d3plot-integrationpoints-class.md) point argument below.

Where the integration point is not relevant this argument may be omitted. Use zero to define a null "padding" argument.

If the integration point is not defined it will use the integration point defined on the current GUI "data" panel,
which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if
changed by an interactive user. If consistent output from a script is required, independent of any prior interactive
activity, an explicit integration point or surface should be defined.
 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Through thickness integration point |
| op (optional) | integer | On plan integration point. Defaults to the first one. |

* extra (optional) (integer)

* The "Extra" solid or shell component id for components [Component.SOX](d3plot-component-class.md#Component.SOX) or [Component.SHX](d3plot-component-class.md#Component.SHX)
* The ALE mulit-material group id for components [Component.AMMG](d3plot-component-class.md#Component.AMMG) and [Component.AMMS](d3plot-component-class.md#Component.AMMS)
* The sub-number for user-defined components [Component.UNOS](d3plot-component-class.md#Component.UNOS), [Component.UNOV](d3plot-component-class.md#Component.UNOV), [Component.USSS](d3plot-component-class.md#Component.USSS), [Component.USST](d3plot-component-class.md#Component.USST), [Component.UBMS](d3plot-component-class.md#Component.UBMS), [Component.UBMV](d3plot-component-class.md#Component.UBMV)

If any of the above component codes are used, the "extra" argument must be set to a non zero value.

Use zero to define a null "padding" argument if this is not required

* fr\_of\_ref (optional) (integer)
 
The frame of reference to return values in [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL),
[Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL),
[Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL),
[Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED),
[Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL).
This is only necessary for directional components (eg X stress) and then only when something other than
the default [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) coordinate system is to be used. If omitted, or set to zero, it defaults to
[Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) for directional components and is ignore for all others.

* state\_id (optional) (integer)
 
State number to be used instead of the current state

* dda (optional) (integer)

Direct Disk Access flag. Either [Constant.OFF](d3plot-constant-class.md#Constant.OFF) (default) for normal data cacheing
or [Constant.ON](d3plot-constant-class.md#Constant.ON) to enable direct disk reading of data.

If turned on this reads data not currently in core memory directly from disk without loading the complete data vector for the
state into core.

This should be used if you want to extract results for a few items over a range of states, since it will potentially be faster.

* consider\_blanking (optional) (integer)

Consider blanking flag. Either [Constant.OFF](d3plot-constant-class.md#Constant.OFF) (default) to ignore blanking
or [Constant.ON](d3plot-constant-class.md#Constant.ON) to consider blanking.

This argument is relevant for nodal contact force results. By default the sum of all forces at a given node for all surfaces
using that node will be returned. By blanking all but the contact surface(s) of interest and setting this argument to ON the results
can be restricted to the contact surface(s) you want.

* mag\_or\_cur (optional) (integer)

Magnitude or Current Value flag. This argument is relevant for analyses with phase angle results.

Set it to [Constant.MAGNITUDE](d3plot-constant-class.md#Constant.MAGNITUDE) to output the magnitude

Set it to [Constant.CURRENT_VAL](d3plot-constant-class.md#Constant.CURRENT_VAL) to output the current value
[Magniude \* cos(phase + phi)]. This is dependent on the current phi angle displayed in the graphics window and can be
set using [SetWindowFrame](d3plot-windows-class.md#Windows::SetWindowFrame)(). See example below.

If omitted, or set to zero, it defaults to MAGNITUDE.

| Returns |
| --- |

Object with the following properties:

 | **Name** | **Type** | **Description** |
   data |  array of reals |   |
* data[#rows] for data components that return a scalar value, eg DX
* data[#cols][#rows] for data components that return a vector or tensor value, eg UNOV

Take care when dealing with the two-dimensional array of results returned by the vector and tensor component cases,
as the order in which the data is stored is [column][row]. For example if you have a tensor component then in order to
extract the XY shear term for index you need to write:


```


r = GetMultipleData(args...)

shear_term = r.data[Constant.XY][index];


```


Also remember that the rows in this array start at index 0, thus the results for item\_1 will be row index [0]
in the array of results returned, and so on.

  | nc | integer | The number of columns of data. 1 for scalar components, 3 for vector, 6 for tensor |
 | nr | integer | The number of rows of data, ie how many items processed in the range &lt;item\_1 .. item\_2&gt; |

#### Return type

object

| Example
<br><br><br>
```

// Returns the (scalar) X stress of internal shells #1 to #100 inclusive at integration
// point 2, in the element local coordinate system
a = GetMultipleData(Component.SXX, Type.SHELL, 1, 100, 2, 0, Constant.LOCAL);
sxx = a.data[0];  // X stress in first shell
sxx = a.data[99]; // X stress in 100th shell

// Returns an array[6] of the strain tensor in solid elements #1 to #100, implicitly in the
// global coordinate system.
b = GetMultipleData(Component.ETEN, Type.SOLID, 1, 100);
sxx = b.data[Constant.XX][0];  // X strain in 1st solid
sxy = b.data[Constant.XY][99]; // XY strain in 100th solid

// Returns an array[3] of the 2nd user-defined Nodal Vector component at nodes with external
// labels 1 to 100 at state #3.
// Note that when a range of external labels is supplied, ie -ve values for <item_1> and <item_2>,
// you should check the .nr return value to see how many rows of results were actually returned, since
// if there are gaps in that label range the result may not be |item_2| - |item_1| + 1.

c = GetMultipleData(Component.UNOV, Type.NODE, -1, -100, 0, 2, 0, 3);

nres = c.nr; // Number of rows of data returned
vx = c.data[Constant.X][0]; // X component for 1st node
vy = c.data[Constant.Y][1]; // Y component for 2nd node
vz = c.data[Constant.Z][2]; // Z component for 3rd node

```
<br><br> |
| --- |

* * *

| GetNumOnPlanIntPts(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br>Returns the number of on plan points in an element in the current model<br> |
| --- |

#### Arguments

* type\_code (integer)
 
A type code (either [Type.SHELL](d3plot-type-class.md#Type.SHELL) or [Type.TSHELL](d3plot-type-class.md#Type.TSHELL))

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.

* state\_id (optional) (integer)
 
The state to use instead of the current state. Only necessary in adaptively remeshed analyses.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Return the number of on plan points in the first SHELL element in the current model
var a = GetNumOfPlanIntPts(Type.SHELL, 1);

```
<br><br> |
| --- |

* * *

| GetNumberOf(type\_code*[integer]*, options (optional)*[object]*) [static]
Description<br><br><br><br>Returns the number of items of type\_code in the current model<br>
<br>Note that in adaptively remeshed models the current family may affect the number of nodes and elements returned.<br>The family of the current state will be used unless you supply the optional state\_id argument, in which case the<br>family of that state will be used.<br>
<br>**Notes:**<br>
<br>The number of models returned by GetNumberOf(Type.MODEL) is actually the number of active and inactive model "slots"<br>in the database, including those currently not in use. This means that it will always return the highest model number<br>that has been used to date.<br>
<br>Therefore the following sequence:<br><br><ul>
<li>Read in (say) three models M1 to M3</li>
<li>Delete models M1 and M2, leaving only M3 in use</li>
</ul>

<br>Will result in GetNumberOf(Type.MODEL) returning the value 3.<br>
<br>You can use [SetCurrentModel](d3plot-models-class.md#Models::SetCurrentModel)(model\_id) to attempt to set a model and examine its return value to see whether it<br>succeeded or failed:<br>

```

n = GetNumberOf(Type.MODEL);

for(i=1; i<=n; i++)
{
    if(SetCurrentModel(i))  // TRUE if present
    {
        do something
    }
}

```
<br><br> |
| --- |

#### Arguments

* type\_code (integer)
 
A valid [type code](d3plot-type-class.md) or a ['GetNumberOf'](d3plot-constant-class.md#Constant_GetNumberOf_constants) constant

* options (optional) (object)

Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| state\_id (optional) | integer | The state to use instead of the current state. Only necessary in adaptively remeshed analyses. |

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Return the number of models
var a = GetNumberOf(Type.MODEL);

// Return the number of shell integration points
var a = GetNumberOf(Constant.NIP_S);

// Return the number of solid elements in family of state 20
var a = GetNumberOf(Type.SOLID, { state_id:20 });

```
<br><br> |
| --- |

* * *

| GetNumberOf(type\_code*[integer]*, state\_id (optional)*[integer]*) [static] [deprecated]
<br>This function is deprecated in version 19.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br><br><br><br>Returns the number of items of type\_code in the current model<br>
<br>Also see the notes at the non-deprecated function with the same name. |
| --- |

#### Arguments

* type\_code (integer)
 
A valid [type code](d3plot-type-class.md) or a ['GetNumberOf'](d3plot-constant-class.md#Constant_GetNumberOf_constants) constant

* state\_id (optional) (integer)
 
The state to use instead of the current state. Only necessary in adaptively remeshed analyses.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Return the number of models
var a = GetNumberOf(Type.MODEL);

// Return the number of shell integration points
var a = GetNumberOf(Constant.NIP_S);

// Return the number of solid elements in family of state 20
var a = GetNumberOf(Type.SOLID, 20);

```
<br><br> |
| --- |

* * *

| QueryDataPresent(component*[integer]*, type\_code (optional)*[integer]*) [static]
Description<br><br>Returns true if data &lt;component&gt; is present in the current model's database, otherwise false.<br>For some data components that are switchable the &lt;type\_code&gt; must also be supplied, these are listed below.<br> |
| --- |

#### Arguments

* component (integer)
 
A valid [component code](d3plot-component-class.md) (e.g. Component.DX, Component.SXY)

* type\_code (optional) (integer)

One of the type codes [Type.SOLID](d3plot-type-class.md#Type.SOLID),
[Type.SHELL](d3plot-type-class.md#Type.SHELL) or [Type.TSHELL](d3plot-type-class.md#Type.TSHELL) if the component is:

* Stress tensor derived, e.g. SXX, ... SVON
* Strain tensor derived, e.g. EXX, ... EVON
* Effective plastic strain, EPL
* Strain rate, ERATE

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Returns true if Effective Plastic Strain exists for solid
var a = QueryDataPresent(Component.EPL, Type.SOLID);

// Returns true if nodal temperatures exist
var a = QueryDataPresent(Component.TEMP);

```
<br><br> |
| --- |

* * *