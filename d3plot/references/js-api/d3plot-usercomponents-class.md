# UserComponents

Functions and constants relating to UserComponents

## Functions

* [CreateUbinComponent](d3plot-usercomponents-class.md#UserComponents::CreateUbinComponent)(component\_name*[string]*, component\_type*[integer]*, data\_type*[integer]*, if\_existing*[integer]*, dispose (optional)*[integer]*, location (optional)*[integer or string]*)
* [DeleteUbinComponent](d3plot-usercomponents-class.md#UserComponents::DeleteUbinComponent)(handle*[integer]*)
* [GetUbinData](d3plot-usercomponents-class.md#UserComponents::GetUbinData)(handle*[integer]*, item\_type*[integer]*, item*[integer]*, int\_pt*[object | integer]*, state\_id (optional)*[integer]*)
* [LocateUbinComponent](d3plot-usercomponents-class.md#UserComponents::LocateUbinComponent)(component\_name*[string]*)
* [PutUbinData](d3plot-usercomponents-class.md#UserComponents::PutUbinData)(handle*[integer]*, item\_type*[integer]*, item*[integer]*, int\_pt*[object | integer]*, data*[real|array of reals]*, state\_id (optional)*[integer]*)

## UserComponents constants

| **Name** | **Description** |
| --- | --- |
| UBMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Beam scalar. Use [Component.UBMS](d3plot-component-class.md#Component.UBMS) instead [deprecated] |
| UBMV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Beam vector. Use [Component.UBMV](d3plot-component-class.md#Component.UBMV) instead [deprecated] |
| UNOS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Node scalar. Use [Component.UNOS](d3plot-component-class.md#Component.UNOS) instead [deprecated] |
| UNOV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Node vector. Use [Component.UNOV](d3plot-component-class.md#Component.UNOV) instead [deprecated] |
| USSS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Solid and shell scalar. Use [Component.USSS](d3plot-component-class.md#Component.USSS) instead [deprecated] |
| USST | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Solid and shell tensor. Use [Component.USST](d3plot-component-class.md#Component.USST) instead [deprecated] |

### Constants for Component Type

| **Name** | **Description** |
| --- | --- |
| U\_BEAM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>User-defined beam component. Use [Component.BEAM](d3plot-component-class.md#Component.BEAM) instead [deprecated] |
| U\_NODE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>User-defined nodal component. Use [Component.NODE](d3plot-component-class.md#Component.NODE) instead [deprecated] |
| U\_OTHR | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>User-defined other (LSDA) component. Use [Component.OTHER](d3plot-component-class.md#Component.OTHER) instead [deprecated] |
| U\_SOSH | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>User-defined solid, shell and thick shell component. Use [Component.SOLID_SHELL_TSHELL](d3plot-component-class.md#Component.SOLID_SHELL_TSHELL) instead [deprecated] |

### Constants for Data Type

| **Name** | **Description** |
| --- | --- |
| U\_SCALAR | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Scalar data (1 value). Use [Component.SCALAR](d3plot-component-class.md#Component.SCALAR) instead [deprecated] |
| U\_TENSOR | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Tensor data (6 values). Use [Component.TENSOR](d3plot-component-class.md#Component.TENSOR) instead [deprecated] |
| U\_VECTOR | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Vector data (3 values). Use [Component.VECTOR](d3plot-component-class.md#Component.VECTOR) instead [deprecated] |

### Constants for Existing

| **Name** | **Description** |
| --- | --- |
| RENAME | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Rename. Use [Component.RENAME](d3plot-component-class.md#Component.RENAME) instead [deprecated] |
| REPLACE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Replace. Use [Component.REPLACE](d3plot-component-class.md#Component.REPLACE) instead [deprecated] |

### Constants for Location

| **Name** | **Description** |
| --- | --- |
| IN\_CORE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>held in memory. Use [Component.IN_CORE](d3plot-component-class.md#Component.IN_CORE) instead [deprecated] |

| Details of functions 
CreateUbinComponent(component\_name*[string]*, component\_type*[integer]*, data\_type*[integer]*, if\_existing*[integer]*, dispose (optional)*[integer]*, location (optional)*[integer or string]*) [static]
Description<br><br><br><br>Create a new user-defined binary (UBIN) component<br>
<br>Note that user-defined components are "program wide", so once created the data "slots" exist in all models.<br>Data values that are not populated will return a value of zero. |
| --- |

#### Arguments

* component\_name (string)
 
A name for this component, up to 30 characters long. If the name is not unique, D3PLOT's behaviour
will depend on the value of the 'if\_existing' argument to this function.

* component\_type (integer)
 
One of the constants

* [U_NODE](d3plot-usercomponents-class.md#UserComponents.U_NODE) for nodal data
* [U_SOSH](d3plot-usercomponents-class.md#UserComponents.U_SOSH) for solid, shell and thick shell data
* [U_BEAM](d3plot-usercomponents-class.md#UserComponents.U_BEAM) for beam data
* [U_OTHR](d3plot-usercomponents-class.md#UserComponents.U_OTHR) for LSDA (Other) data

User-defined components must fall into one of these four categories.
It is not possible to have a component of a given name that contains data for more than one of these types.

* data\_type (integer)
 
One of the constants

* [U_SCALAR](d3plot-usercomponents-class.md#UserComponents.U_SCALAR) for scalar data (any type)
* [U_VECTOR](d3plot-usercomponents-class.md#UserComponents.U_VECTOR) for vector data (U\_NODE, U\_BEAM and U\_OTHR only)
* [U_TENSOR](d3plot-usercomponents-class.md#UserComponents.U_TENSOR) for tensor data (U\_SOSH only)
* [U_OTHR](d3plot-usercomponents-class.md#UserComponents.U_OTHR) for LSDA (Other) data

Choose the data type that matches the information you want to store.

* if\_existing (integer)

Action to take if UBIN component 'component\_name' already exists.

One of the constants

* [REPLACE](d3plot-usercomponents-class.md#UserComponents.REPLACE) deletes the existing UBIN component, replacing it with this definition.
This means that any existing data for the user-defined component of this name is deleted and the component is re-initialised.* [RENAME](d3plot-usercomponents-class.md#UserComponents.RENAME) changes the 'component\_name' argument of this function call by adding a
suffix to make it unique, so the existing component of this name (and data) will be left unchanged and the new one will not clash with it.

* dispose (optional) (integer)

What to do with the ".ubd" files when the model is closed or D3PLOT exits.

One of the constants

* [LEAVE](d3plot-sharedconstants-class.md#SharedConstants.LEAVE) (default) will leave any ".ubd" files on disk so that they are available for any
future D3PLOT sessions.* [DELETE](d3plot-sharedconstants-class.md#SharedConstants.DELETE) will delete these files when then model is closed or D3PLOT exits.

If this argument is ommitted or set to zero then LEAVE behaviour is used. However alternative default behaviour may be specified by setting the preference

**d3plot\*ubd\_file\_dispose:** to **LEAVE** or **DELETE**

* location (optional) (integer or string)

Specify where the data for this component is to be stored, one of

* A valid &lt;pathname&gt; .ubd files will be written to this directory instead of the original analysis. This will usually be a better solution than the alternative
options of keeping data "in core" since it allows D3PLOT memory management to operate normally, writing data to disk if space is needed in memory. The directory &lt;pathname&gt;
must exist, and you must have write permission to it.* **JOBDIR**(&lt;pathname&gt;) the path of the directory containing the results, in other words the default
location for the files. However you can append a further &lt;pathname&gt; to this in order to specify a directory relative to JOBDIR, for example:    * **JOBDIR/..** Means the directory above the current results
    * **JOBDIR/../../my\_results** Means two directories above, in the sub-directory 'my\_results'
* [IN_CORE](d3plot-usercomponents-class.md#UserComponents.IN_CORE) stipulates that this component's data will always be held in memory, and will never be written to disk.
This solves the problem of data files being in read-only directories since no .ubd files are written. However it also means that D3PLOT will not dump data for currently unused
states to disk, meaning that you may run out of memory if you generate too much data in your JavaScripts.

If IN\_CORE is used the value of 'dispose' above is ignored.

If this argument is omitted then the default behaviour of creating .ubd files in the same directory as the analysis database files will be used. However an alternative default
directory may also be specified by the preference:

**d3plot\*ubd\_file\_location:** &lt;pathname&gt; or **IN\_CORE** or **JOBDIR**(&lt;pathname&gt;)

If both &lt;location&gt; and this preferenceare defined then &lt;location&gt; in this function call takes precedence.

Notes on pathnames:

1. On Windows platforms forward slash / and backslash \ can be used interchangeably in pathnames. On Linux platforms you must use forward slash / only, so in a multi-system
environment it is recommended that you use forward slash syntax only.2. If &lt;pathname&gt; contains white space then you must enclose the whole string in "...", for example "C:\my results".

| Returns
<br>integer handle for the newly created component that should be used in subsequent UBIN processing function calls.<br>This handle should be regarded as private data and not modified in any way. In addition, if a UBIN component is created and<br>then recreated and over-written in a script (**if\_existing = REPLACE**) the handle from each call may be different - don't<br>assume that is has not changed.<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Create a component for nodal scalar data
var handle_1 = CreateUbinComponent("My nodal data", U_NODE, U_SCALAR, REPLACE);

// Create a tensor component for solid, shell and thick shell data
var handle_2 = CreateUbinComponent("My shell tensor data", U_SOSH, U_TENSOR, REPLACE);

```
<br><br> |
| --- |

* * *

| DeleteUbinComponent(handle*[integer]*) [static]
Description<br><br><br><br>Deletes an existing UBIN component handle. The component is deleted from memory, and any associated .ubd files cached on disk are also deleted.<br>
<br>If this succeeds it returns JS\_TRUE, otherwise JS\_FALSE. |
| --- |

#### Arguments

* handle (integer)
 
The handle of an existing UBIN component

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Delete the UBIN component handle_1
if(!DeleteUbinComponent(handle_1))
{
    ...deal with failure...
}

```
<br><br> |
| --- |

* * *

| GetUbinData(handle*[integer]*, item\_type*[integer]*, item*[integer]*, int\_pt*[object | integer]*, state\_id (optional)*[integer]*) [static]
Description<br><br><br><br>Retrieves data for type/item from a UBIN component.<br>
<br>If the data has not previoulsy been written, values of 0.0 will be returned. |
| --- |

#### Arguments

* handle (integer)
 
The handle of an existing UBIN component as returned by [CreateUbinComponent](d3plot-usercomponents-class.md#UserComponents::CreateUbinComponent)().

* item\_type (integer)
 
An [item type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) constant, NODE, SOLID, SHELL, etc.
This must match the underlying type of the UBIN component, thus NODE for components of type U\_NODE, and so on.
It is illegal to attempt to store data for a type that does not match the underlying UBIN component type thus,
for example, you cannot store NODE data for a U\_SOSH component.

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* int\_pt (object) | integer

Integration point: must be a +ve layer number (lowest = 1).

Or zero for item type / data component combinations that
do not consider integration points in this context. (for example
nodal displacements or beam forces).

Or, for fully integrated elements with on plan integration
points, an object with properties "ip" and "op". For a further
explanation see Defining the Integration point argument in [GetData](d3plot-data-class.md#Data::GetData)().

"Top", "Middle" and "Bottom" are not allowed in this context since "middle" is not directly readable in cases with
an even number of points.

A value of 1 should normally be used for solid elements.

Note, from D3PLOT 11.0 onwards, the order of the integration points for SHELLS and TSHELLS is &lt;int\_pnt&gt; 1-&gt;n: BOTTOM-&gt;TOP surface
(so long as a ZTF file is present). See Section 13.8.2.2.

Prior to this they were in the order of the integration points output by Ansys LS-DYNA, e.g. for &lt;maxint&gt;=3 &lt;int\_pnt&gt; 1 was
the MIDDLE surface, &lt;int\_pnt&gt; 2 was the BOTTOM surface and &lt;int\_pnt&gt; 3 was the TOP surface.
 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Through thickness integration point. |
| op (optional) | integer | On plan integration point. Defaults to the first one. |

* state\_id (optional) (integer)
 
State number to be used. If omitted, the current state is used.

| Returns
<br>real|Array of reals<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Retrieve an array of tensor data for solid #27, which implies that the UBIN data
// component <handle_1> is of type U_SOSH, and that its data type is U_TENSOR.
dvec = GetUbinData(handle_1, SOLID, 27, 1);
sxx = dvec[0];
szx = dvec[5];

// Retrieve the scalar value of node #17, in state <istate>.
// This implies that the UBIN component <handle_2> is of type U_NODE and its data is U_SCALAR.
nval = GetUbinData(handle_2, NODE, 17, 0, istate);

```
<br><br> |
| --- |

* * *

| LocateUbinComponent(component\_name*[string]*) [static]
Description<br><br><br><br>Locates an existing UBIN component by name and returns its handle.<br>This is useful when a previous run has created a UBIN component and this script wishes to work with it.<br>
<br>'component\_name' is not case-sensitive, but an exact character match is required, so embedded white space is significant.<br>
<br>If the lookup succeeds this function returns an object with with properties about the component, if it<br>fails it returns the value JS\_FALSE. |
| --- |

#### Arguments

* component\_name (string)
 
A name to search for, a character string up to 30 characters long.
Component names are not case-sensitive, but searching only succeeds if an exact match is found.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ctype | integer | the component type, [U_NODE](d3plot-usercomponents-class.md#UserComponents.U_NODE), [U_SOSH](d3plot-usercomponents-class.md#UserComponents.U_SOSH), [U_BEAM](d3plot-usercomponents-class.md#UserComponents.U_BEAM) or [U_OTHR](d3plot-usercomponents-class.md#UserComponents.U_OTHR) |
| dtype | integer | the data type, [U_SCALAR](d3plot-usercomponents-class.md#UserComponents.U_SCALAR), [U_VECTOR](d3plot-usercomponents-class.md#UserComponents.U_VECTOR) or [U_TENSOR](d3plot-usercomponents-class.md#UserComponents.U_TENSOR) |
| handle | integer | the integer handle of the UBIN component |

#### Return type

object

| Example
<br><br><br>
```

// Look for component "My nodal data" and put the result of a successful lookup in object 'udata'.
if(udata = LocateUbinComponent("My nodal data"))
{
    handle = udata.handle;
    ...
}
else
{
    ... deal with failure
}

```
<br><br> |
| --- |

* * *

| PutUbinData(handle*[integer]*, item\_type*[integer]*, item*[integer]*, int\_pt*[object | integer]*, data*[real|array of reals]*, state\_id (optional)*[integer]*) [static]
Description<br><br><br><br>Stores data for type/item in a UBIN component handle.<br>
<br>This will overwrite any existing data in that "slot", which will be lost. |
| --- |

#### Arguments

* handle (integer)
 
The handle of an existing UBIN component as returned by [CreateUbinComponent](d3plot-usercomponents-class.md#UserComponents::CreateUbinComponent)().

* item\_type (integer)
 
An [item type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) constant, NODE, SOLID, SHELL etc.
This must match the underlying type of the UBIN component, thus NODE for components of type U\_NODE, and so on.
It is illegal to attempt to store data for a type that does not match the underlying UBIN component type thus,
for example, you cannot store NODE data for a U\_SOSH component.

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal
numbers will be many times faster to process.

* int\_pt (object) | integer

Integration point: must be a +ve layer number (lowest = 1)

Or zero for item type / data component combinations that
do not consider integration points in this context (for example
nodal displacements or beam forces).

Or, for fully integrated elements with on plan integration points, an object with properties "ip" and "op". For a further
explanation see Defining the Integration point argument in [GetData](d3plot-data-class.md#Data::GetData)().

"Top", "Middle" and "Bottom" are not allowed in this context since "middle" is not directly readable in cases with
an even number of points.

A value of 1 should normally be used for solid elements.

Note from D3PLOT 11.0 onwards, the order of the integration points for SHELLS and TSHELLS is &lt;int\_pnt&gt; 1-&gt;n: BOTTOM-&gt;TOP surface
(so long as a ZTF file is present). See Section 13.8.2.2.

Prior to this they were in the order of the integration points output by Ansys LS-DYNA, e.g. for &lt;maxint&gt;=3 &lt;int\_pnt&gt; 1 was
the MIDDLE surface, &lt;int\_pnt&gt; 2 was the BOTTOM surface and &lt;int\_pnt&gt; 3 was the TOP surface.
 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Through thickness integration point. |
| op (optional) | integer | On plan integration point. Defaults to the first one. |

* data (real|array of reals)
 
The data to be stored. Its format depends on the "data type" of the component:

U\_SCALAR: Scalar or array of length &gt;=1

U\_VECTOR: Array of length &gt;= 3

U\_TENSOR: Array of length &gt;= 6

The alignment of array members should be as follows:

Vector: [[X](d3plot-sharedconstants-class.md#SharedConstants.X), [Y](d3plot-sharedconstants-class.md#SharedConstants.Y), [Z](d3plot-sharedconstants-class.md#SharedConstants.Z)]

Tensor: [[XX](d3plot-sharedconstants-class.md#SharedConstants.XX), [YY](d3plot-sharedconstants-class.md#SharedConstants.YY), [ZZ](d3plot-sharedconstants-class.md#SharedConstants.ZZ), [XY](d3plot-sharedconstants-class.md#SharedConstants.XY), [YZ](d3plot-sharedconstants-class.md#SharedConstants.YZ), [ZX](d3plot-sharedconstants-class.md#SharedConstants.ZX)]

* state\_id (optional) (integer)
 
State number to be used. If omitted, the current state is used.

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Write an array of tensor data for solid #27, which implies that the UBIN data component <handle_1>
// is of type U_SOSH,and that its data type is U_TENSOR.
dvec = new Array(6);
dvec[XX] = sxx;
dvec[YZ] = syz;
PutUbinData(handle_1, SOLID, 27, 1, dvec);

// Write the scalar value 19.5 for node #17, in state <istate>.
// This implies that the UBIN component <handle_2> is of type U_NODE and its data is U_SCALAR.
PutUbinData(handle_2, NODE, 17, 0, 19.5, istate);

```
<br><br> |
| --- |

* * *