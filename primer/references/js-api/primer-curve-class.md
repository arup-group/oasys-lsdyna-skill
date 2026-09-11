# Curve class

The Curve class gives you access to load curve cards in PRIMER. [More...](primer-curve-class.md#Curve_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [Create](primer-curve-class.md#Curve::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [CreateTable](primer-curve-class.md#Curve::CreateTable)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-curve-class.md#Curve::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-curve-class.md#Curve::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-curve-class.md#Curve::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-curve-class.md#Curve::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-curve-class.md#Curve::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-curve-class.md#Curve::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-curve-class.md#Curve::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-curve-class.md#Curve::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-curve-class.md#Curve::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-curve-class.md#Curve::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-curve-class.md#Curve::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-curve-class.md#Curve::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-curve-class.md#Curve::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-curve-class.md#Curve::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-curve-class.md#Curve::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AddPoint](primer-curve-class.md#Curve::AddPoint)(xvalue*[real]*, yvalue*[real]*)
* [AddTableEntry](primer-curve-class.md#Curve::AddTableEntry)(value*[real]*, load curve*[integer]*)
* [AssociateComment](primer-curve-class.md#Curve::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-curve-class.md#Curve::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-curve-class.md#Curve::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-curve-class.md#Curve::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-curve-class.md#Curve::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-curve-class.md#Curve::Edit)(modal (optional)*[boolean]*)
* [Error](primer-curve-class.md#Curve::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-curve-class.md#Curve::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-curve-class.md#Curve::GetComments)()
* [GetParameter](primer-curve-class.md#Curve::GetParameter)(prop*[string]*)
* [GetPoint](primer-curve-class.md#Curve::GetPoint)(row*[integer]*)
* [GetTableEntry](primer-curve-class.md#Curve::GetTableEntry)(row*[integer]*)
* [InsertPoint](primer-curve-class.md#Curve::InsertPoint)(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*, position*[integer]*)
* [InsertTableEntry](primer-curve-class.md#Curve::InsertTableEntry)(ipt*[integer]*, value*[real]*, lcid*[integer]*, position*[integer]*)
* [Keyword](primer-curve-class.md#Curve::Keyword)()
* [KeywordCards](primer-curve-class.md#Curve::KeywordCards)()
* [Next](primer-curve-class.md#Curve::Next)()
* [Previous](primer-curve-class.md#Curve::Previous)()
* [RemovePoint](primer-curve-class.md#Curve::RemovePoint)(row*[integer]*)
* [RemoveTableEntry](primer-curve-class.md#Curve::RemoveTableEntry)(ipt*[integer]*)
* [SetFlag](primer-curve-class.md#Curve::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetPoint](primer-curve-class.md#Curve::SetPoint)(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*)
* [SetTableEntry](primer-curve-class.md#Curve::SetTableEntry)(ipt*[integer]*, value*[real]*, load curve*[integer]*)
* [ViewParameters](primer-curve-class.md#Curve::ViewParameters)()
* [Warning](primer-curve-class.md#Curve::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-curve-class.md#Curve::Xrefs)()
* [toString](primer-curve-class.md#Curve::toString)()

## Curve constants

| **Name** | **Description** |
| --- | --- |
| Curve.AFTER | Insertion of curve data option. |
| Curve.BEFORE | Insertion of curve data option. |
| Curve.CURVE | Load curve type \*DEFINE\_CURVE |
| Curve.CURVE\_FUNCTION | Load curve type \*DEFINE\_CURVE\_FUNCTION |
| Curve.CURVE\_SMOOTH | Load curve type \*DEFINE\_CURVE\_SMOOTH |
| Curve.FUNCTION | Load curve type \*DEFINE\_FUNCTION |
| Curve.TABLE | Load curve type \*DEFINE\_TABLE |

## Curve properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dattyp | integer | Data type |
| dist | real | Total distance tool will travel |
| exists (read only) | logical | true if curve exists, false if referred to but not defined. |
| function | string | Function expression for [Curve.CURVE_FUNCTION](primer-curve-class.md#Curve.CURVE_FUNCTION) |
| heading | string | [Curve](primer-curve-class.md) heading |
| include | integer | The [Include](primer-include-class.md) file number that the curve is in. |
| label | integer | [Curve](primer-curve-class.md) number. Also see the [lcid](primer-curve-class.md#lcid) property which is an alternative name for this. |
| lcid | integer | [Curve](primer-curve-class.md) number. Also see the [label](primer-curve-class.md#label) property which is an alternative name for this. |
| lcint | integer | Number of discretization points for the curve |
| model (read only) | integer | The [Model](primer-model-class.md) number that the curve is in. |
| ncurves | integer | Number of points in curve or number of curves in table. The [npoints](primer-curve-class.md#npoints) property is an alternative name for this. (read only for tables) |
| npoints | integer | Number of points in curve or number of curves in table. The [ncurves](primer-curve-class.md#ncurves) property is an alternative name for this. (read only for tables) |
| offa | real | Offset for abscissa values |
| offo | real | Offset for ordinate values |
| sfa | real | Scale factor on abscissa value |
| sfo | real | Scale factor on ordinate value |
| sidr | integer | Stress initialisation by dynamic relaxation |
| tend | real | Time curve returns to zero |
| trise | real | Rise time |
| tstart | real | Time curve starts to rise |
| type | constant | Load curve type (Can be [Curve.CURVE](primer-curve-class.md#Curve.CURVE), [Curve.CURVE_FUNCTION](primer-curve-class.md#Curve.CURVE_FUNCTION), [Curve.SMOOTH](primer-curve-class.md#Curve.CURVE_SMOOTH), [Curve.FUNCTION](primer-curve-class.md#Curve.FUNCTION) or [Curve.TABLE](primer-curve-class.md#Curve.TABLE)). |
| version | string | Version for discretization. Can be blank, "3858" or "5434a" |
| vmax | real | Maximum velocity |

| Detailed Description<br>The Curve class allows you to create, modify, edit and manipulate curve cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Curve(Model*[[Model](primer-model-class.md)]*, options *[object]*)

Description<br>Create a new [Curve](primer-curve-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that curve will be created in

* options  (object)

Options for creating the curve 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dattyp (optional) | integer | Data type |
| dist (Type of load curve must be Curve.CURVE\_SMOOTH) (optional) | real | Total distance tool will travel |
| function (load curve type has to be Curve.FUNCTION or Curve.CURVE\_FUNCTION) (optional) | string | Function expression |
| heading (optional) | string | Title for the curve |
| lcid | integer | [Curve](primer-curve-class.md) number |
| lcint (optional) | integer | Data type |
| offa (optional) | real | Offset on abscissa value |
| offo (optional) | real | Offset on ordinate value |
| sfa (optional) | real | Scale factor on abscissa value |
| sfo (optional) | real | Scale factor on ordinate value |
| sidr (optional) | integer | Stress initialisation by dynamic relaxation |
| tend (Type of load curve must be Curve.CURVE\_SMOOTH) (optional) | real | Time curve returns to zero |
| trise (Type of load curve must be Curve.CURVE\_SMOOTH) (optional) | real | Rise time |
| tstart (Type of load curve must be Curve.CURVE\_SMOOTH) (optional) | real | Time curve starts to rise |
| type | constant | Type of load curve. Can be [Curve.CURVE](primer-curve-class.md#Curve.CURVE), [Curve.TABLE](primer-curve-class.md#Curve.TABLE), Note this does not have to be defined. In previous versions of PRIMER you could only construct a basic load curve type, therefore the type argument was not used. PRIMER is still backwards compatible with this method of load curve creation. |
| vmax (Type of load curve must be Curve.CURVE\_SMOOTH) (optional) | real | Maximum velocity |

| Returns
<br>[Curve](primer-curve-class.md) object<br>
Return type
<br>Curve |
| --- |

| Example
<br>To create a new curve in model m with label 200<br>
```
var l = new Curve(Curve.CURVE, m, 200);
```
<br>To create a new curve function in model m with label 200 and function '0.5\*lc9\*vm(22)\*\*3' (example from keyword manual)<br>
```
var l = new Curve(Curve.CURVE_FUNCTION, m, 200, 0, "0.5*lc9*vm(22)**3");
```
<br>To create a new function in model m with label 200 and function 'x(t)=1000\*sin(100\*t)' and title 'x-velo' (example from keyword manual)<br>
```
var l = new Curve(Curve.FUNCTION, m, 200, "x(t)=1000*sin(100*t)", "x-velo");
```
<br>To create a new curve function in model m with label 200' (example from keyword manual)<br>
```
var l = new Curve(Curve.CURVE_SMOOTH, m, 200);
```
 |
| --- |

| new Curve(Load curve type*[constant]*, Model*[[Model](primer-model-class.md)]*, lcid*[integer]*, sidr (optional)*[integer]*, sfa (optional)*[real]*, sfo (optional)*[real]*, offa (optional)*[real]*, offo (optional)*[real]*, dattyp (optional)*[integer]*, heading (optional)*[string]*, lcint (optional)*[integer]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Curve](primer-curve-class.md) object. |
| --- |

#### Arguments

* Load curve type (constant)
 
Type of load curve. Can be [Curve.CURVE](primer-curve-class.md#Curve.CURVE), [Curve.TABLE](primer-curve-class.md#Curve.TABLE), Note this does not have to be defined. In previous versions of PRIMER you could only construct a basic load curve type, therefore the type argument was not used. PRIMER is still backwards compatible with this method of load curve creation.

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that curve will be created in

* lcid (integer)
 
[Curve](primer-curve-class.md) number

* sidr (optional) (integer)
 
Stress initialisation by dynamic relaxation

* sfa (optional) (real)
 
Scale factor on abscissa value

* sfo (optional) (real)
 
Scale factor on ordinate value

* offa (optional) (real)
 
Offset on abscissa value

* offo (optional) (real)
 
Offset on ordinate value

* dattyp (optional) (integer)
 
Data type

* heading (optional) (string)
 
Title for the curve

* lcint (optional) (integer)
 
Number of discretization points for the curve

| Returns
<br>[Curve](primer-curve-class.md) object<br>
Return type
<br>Curve |
| --- |

| Example
<br>To create a new curve in model m with label 200<br>
```
var l = new Curve(Curve.CURVE, m, 200);
```
 |
| --- |

| new Curve(Load curve type*[constant]*, Model*[[Model](primer-model-class.md)]*, lcid*[integer]*, sidr (optional)*[integer]*, function (optional)*[string]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Curve](primer-curve-class.md) \*DEFINE\_CURVE\_FUNCTION object. |
| --- |

#### Arguments

* Load curve type (constant)
 
Type of load curve. Must be [Curve.CURVE_FUNCTION](primer-curve-class.md#Curve.CURVE_FUNCTION).

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that curve will be created in

* lcid (integer)
 
[Curve](primer-curve-class.md) number

* sidr (optional) (integer)
 
Stress initialisation by dynamic relaxation

* function (optional) (string)
 
Function expression

* heading (optional) (string)
 
Title for the curve

| Returns
<br>[Curve](primer-curve-class.md) object<br>
Return type
<br>Curve |
| --- |

| Example
<br>To create a new curve function in model m with label 200 and function '0.5\*lc9\*vm(22)\*\*3' (example from keyword manual)<br>
```
var l = new Curve(Curve.CURVE_FUNCTION, m, 200, 0, "0.5*lc9*vm(22)**3");
```
 |
| --- |

| new Curve(Load curve type*[constant]*, Model*[[Model](primer-model-class.md)]*, lcid*[integer]*, function (optional)*[string]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Curve](primer-curve-class.md) \*DEFINE\_FUNCTION object. |
| --- |

#### Arguments

* Load curve type (constant)
 
Type of load curve. Must be [Curve.FUNCTION](primer-curve-class.md#Curve.FUNCTION).

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that curve will be created in

* lcid (integer)
 
[Curve](primer-curve-class.md) number

* function (optional) (string)
 
Function expression

* heading (optional) (string)
 
Title for the curve

| Returns
<br>[Curve](primer-curve-class.md) object<br>
Return type
<br>Curve |
| --- |

| Example
<br>To create a new function in model m with label 200 and function 'x(t)=1000\*sin(100\*t)' and title 'x-velo' (example from keyword manual)<br>
```
var l = new Curve(Curve.FUNCTION, m, 200, "x(t)=1000*sin(100*t)", "x-velo");
```
 |
| --- |

| new Curve(Load curve type*[constant]*, Model*[[Model](primer-model-class.md)]*, lcid*[integer]*, sidr (optional)*[integer]*, dist (optional)*[real]*, tstart (optional)*[real]*, tend (optional)*[real]*, trise (optional)*[real]*, vmax (optional)*[real]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Curve](primer-curve-class.md) \*DEFINE\_CURVE\_SMOOTH object. |
| --- |

#### Arguments

* Load curve type (constant)
 
Type of load curve. Must be [Curve.CURVE_SMOOTH](primer-curve-class.md#Curve.CURVE_SMOOTH).

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that curve will be created in

* lcid (integer)
 
[Curve](primer-curve-class.md) number

* sidr (optional) (integer)
 
Stress initialisation by dynamic relaxation

* dist (optional) (real)
 
Total distance tool will travel

* tstart (optional) (real)
 
Time curve starts to rise

* tend (optional) (real)
 
Time curve returns to zero

* trise (optional) (real)
 
Rise time

* vmax (optional) (real)
 
Maximum velocity

* heading (optional) (string)
 
Title for the curve

| Returns
<br>[Curve](primer-curve-class.md) object<br>
Return type
<br>Curve |
| --- |

| Example
<br>To create a new curve function in model m with label 200' (example from keyword manual)<br>
```
var l = new Curve(Curve.CURVE_SMOOTH, m, 200);
```
 |
| --- |

| Details of functions 
AddPoint(xvalue*[real]*, yvalue*[real]*)

Description<br>Adds a point to a load curve. |
| --- |

#### Arguments

* xvalue (real)
 
The x value of the point.

* yvalue (real)
 
The y value of the point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add a point with values of x=3 and y=5 to curve l:<br>
```
l.AddPoint(3, 5);
```
 |
| --- |

* * *

| AddTableEntry(value*[real]*, load curve*[integer]*)

Description<br>Adds an entry line to a table. |
| --- |

#### Arguments

* value (real)
 
The value for for this entry in the table.

* load curve (integer)
 
The load curve corresponding to the defined value.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add an entry with a value of 3 for load curve 1000:<br>
```
l.AddTableEntry(3, 1000);
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a curve. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the curve

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the curve c:<br>
```
c.AssociateComment(c);
```
 |
| --- |

* * *

| Browse(modal (optional)*[boolean]*)

Description<br>Starts an edit panel in Browse mode. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Browse curve c:<br>
```
c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the curve. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the curve

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for curve c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the curve. The target include of the copied curve can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Curve object<br>
Return type
<br>Curve |
| --- |

| Example
<br>To copy curve c into curve z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a curve. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the curve will be created in

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>[Curve](primer-curve-class.md) object (or null if not made)<br>
Return type
<br>Curve |
| --- |

| Example
<br>To start creating a curve in model m:<br>
```
var l = Curve.Create(m);
```
 |
| --- |

* * *

| CreateTable(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a table. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the curve will be created in

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>[Curve](primer-curve-class.md) object (or null if not made)<br>
Return type
<br>Curve |
| --- |

| Example
<br>To start creating a table in model m:<br>
```
var l = Curve.CreateTable(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a curve. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the curve

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the curve c:<br>
```
c.DetachComment(c);
```
 |
| --- |

* * *

| Edit(modal (optional)*[boolean]*)

Description<br>Starts an interactive editing panel. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Edit curve c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for curve. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The error message to give

* details (optional) (string)
 
An optional detailed error message

| Returns
<br>No return value |
| --- |

| Example
<br>To add an error message "My custom error" for curve c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first curve in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first curve in

| Returns
<br>Curve object (or null if there are no curves in the model).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the first curve in model m:<br>
```
var c = Curve.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free curve label in the model. Also see [Curve.LastFreeLabel()](primer-curve-class.md#Curve::LastFreeLabel), [Curve.NextFreeLabel()](primer-curve-class.md#Curve::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free curve label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Curve label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free curve label in model m:<br>
```
var label = Curve.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the curves in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all curves will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the curves

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the curves with flag f in model m:<br>
```
Curve.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the curve is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the curve

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if curve c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each curve in the model.<br> **Note that ForEach has been designed to make looping over curves as fast as possible and so has some limitations. Firstly, a single temporary Curve object is created and on each function call it is updated with the current curve data. This means that you should not try to store the Curve object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new curves inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all curves are in

* func (function)
 
Function to call for each curve

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the curves in model m:<br>
```
Curve.ForEach(m, test);
function test(c)
{
// c is Curve object
}
```
<br><br>To call function test for all of the curves in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Curve.ForEach(m, test, data);
function test(c, extra)
{
// c is Curve object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Curve objects or properties for all of the curves in a model in PRIMER. If the optional property argument is not given then an array of Curve objects is returned. If the property argument is given, that property value for each curve is returned in the array instead of a Curve object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get curves from

* property (optional) (string)
 
Name for property to get for all curves in the model

| Returns
<br>Array of Curve objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Curve objects for all of the curves in model m:<br>
```
var a = Curve.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each curve in model m:<br>
```
var a = Curve.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a curve. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the curve c:<br>
```
var comm_array = c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Curve objects for all of the flagged curves in a model in PRIMER If the optional property argument is not given then an array of Curve objects is returned. If the property argument is given, then that property value for each curve is returned in the array instead of a Curve object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get curves from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the curves that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged curves in the model

| Returns
<br>Array of Curve objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Curve objects for all of the curves in model m flagged with f:<br>
```
var c = Curve.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the curves in model m flagged with f:<br>
```
var a = Curve.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Curve object for a curve ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the curve in

* number (integer)
 
number of the curve you want the Curve object for

| Returns
<br>Curve object (or null if curve does not exist).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the Curve object for curve 100 in model m<br>
```
var c = Curve.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Curve property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Curve.ViewParameters()](primer-curve-class.md#Curve::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
curve property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Curve property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Curve property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| GetPoint(row*[integer]*)

Description<br>Returns x and y data for a point in a curve |
| --- |

#### Arguments

* row (integer)
 
The row point you want the data for. **Note that curve points start at 0, not 1**.

| Returns
<br>An array containing the x coordinate and the y coordinate.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the curve data for the 3rd point for curve l:<br>
```
if (l.npoints >= 3)
{
    var point_data = l.GetPoint(2);
}
```
 |
| --- |

* * *

| GetTableEntry(row*[integer]*)

Description<br>Returns the value and curve label for a row in a table |
| --- |

#### Arguments

* row (integer)
 
The row point you want the data for. **Note that curve points start at 0, not 1**.

| Returns
<br>An array containing the value and the load curve label.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd point for table t:<br>
```
if (t.npoints >= 3)
{
    var row_data = t.GetTableEntry(2);
}
```
 |
| --- |

* * *

| InsertPoint(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*, position*[integer]*)

Description<br>Inserts point values before or after a specified row of data on a load curve. |
| --- |

#### Arguments

* ipt (integer)
 
The row you want to insert the data before or after. **Note that the row data starts at 0, not 1**.

* xvalue (real)
 
The x value of the point.

* yvalue (real)
 
The y value of the point.

* position (integer)
 
Specify either before or after the selected row. Use 'Curve.BEFORE' for before, and 'Curve.AFTER' for after.

| Returns
<br>No return value. |
| --- |

| Example
<br>To insert the values after the 3rd row to x=3, y=5 for curve l:<br>
```
l.InsertPoint(2, 3, 5, Curve.AFTER);
```
 |
| --- |

* * *

| InsertTableEntry(ipt*[integer]*, value*[real]*, lcid*[integer]*, position*[integer]*)

Description<br>Inserts a table row before or after a specified row of data on a table. |
| --- |

#### Arguments

* ipt (integer)
 
The row you want to insert the data before or after. **Note that the row data starts at 0, not 1**.

* value (real)
 
The value of the row.

* lcid (integer)
 
The load curve corresponding to the defined value.

* position (integer)
 
Specify either before or after the selected row. Use 'Curve.BEFORE' for before, and 'Curve.AFTER' for after.

| Returns
<br>No return value. |
| --- |

| Example
<br>To insert the values after the 3rd row to value=3, lcur=5 for table t:<br>
```
t.InsertTableEntry(2, 3, 5, Curve.AFTER);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this curve (\*DEFINE\_CURVE\_xxxx). **Note that a carriage return is not added**. See also [Curve.KeywordCards()](primer-curve-class.md#Curve::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for curve l:<br>
```
var key = l.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the curve. **Note that a carriage return is not added**. See also [Curve.Keyword()](primer-curve-class.md#Curve::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for curve l:<br>
```
var cards = l.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last curve in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last curve in

| Returns
<br>Curve object (or null if there are no curves in the model).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the last curve in model m:<br>
```
var c = Curve.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free curve label in the model. Also see [Curve.FirstFreeLabel()](primer-curve-class.md#Curve::FirstFreeLabel), [Curve.NextFreeLabel()](primer-curve-class.md#Curve::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free curve label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Curve label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free curve label in model m:<br>
```
var label = Curve.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next curve in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Curve object (or null if there are no more curves in the model).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the curve in model m after curve c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) curve label in the model. Also see [Curve.FirstFreeLabel()](primer-curve-class.md#Curve::FirstFreeLabel), [Curve.LastFreeLabel()](primer-curve-class.md#Curve::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free curve label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Curve label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free curve label in model m:<br>
```
var label = Curve.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous curve in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Curve object (or null if there are no more curves in the model).<br>
Return type
<br>Curve |
| --- |

| Example
<br>To get the curve in model m before curve c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| RemovePoint(row*[integer]*)

Description<br>Removes a row of data from a curve |
| --- |

#### Arguments

* row (integer)
 
The row point you want to remove. **Note that curve points start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the curve data for the 3rd point for curve l:<br>
```
if (l.npoints >= 3)
{
    var point_data = l.RemovePoint(2);
}
```
 |
| --- |

* * *

| RemoveTableEntry(ipt*[integer]*)

Description<br>Removes the value and loadcurve values for a specified row of data on a load curve. |
| --- |

#### Arguments

* ipt (integer)
 
The row you want to remove the data for. **Note that the row data starts at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove an entry at row 4:<br>
```
t.RemoveTableEntry(4);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the curves in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all curves will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the curves in model m, from 1000000:<br>
```
Curve.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged curves in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged curves will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the curves that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the curves in model m flagged with f, from 1000000:<br>
```
Curve.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select curves using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting curves

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only curves from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only curves that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any curves can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of curves selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select curves from model m, flagging those selected with flag f, giving the prompt 'Select curves':<br>
```
Curve.Select(f, 'Select curves', m);
```
<br><br>To select curves, flagging those selected with flag f but limiting selection to curves flagged with flag l, giving the prompt 'Select curves':<br>
```
Curve.Select(f, 'Select curves', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the curve. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the curve

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for curve c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| SetPoint(ipt*[integer]*, xvalue*[real]*, yvalue*[real]*)

Description<br>Sets the x and y values for a specified row of data on a load curve. |
| --- |

#### Arguments

* ipt (integer)
 
The row you want to set the data for. **Note that the row data starts at 0, not 1**.

* xvalue (real)
 
The x value of the point.

* yvalue (real)
 
The y value of the point.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the values for the 3rd row to x=3, y=5 for curve l:<br>
```
l.SetPoint(2, 3, 5);
```
 |
| --- |

* * *

| SetTableEntry(ipt*[integer]*, value*[real]*, load curve*[integer]*)

Description<br>Sets the value and loadcurve values for a specified row of data on a load curve. |
| --- |

#### Arguments

* ipt (integer)
 
The row you want to set the data for. **Note that the row data starts at 0, not 1**.

* value (real)
 
The value for for this entry in the table.

* load curve (integer)
 
The load curve corresponding to the defined value.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add an entry with a value of 3 for load curve 1000 at row 4:<br>
```
t.SetTableEntry(4, 3, 1000);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of curves in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing curves should be counted. If false or omitted
referenced but undefined curves will also be included in the total.

| Returns
<br>number of curves<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of curves in model m:<br>
```
var total = Curve.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the curves in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all curves will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the curves

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the curves in model m:<br>
```
Curve.UnflagAll(m, f);
```
 |
| --- |

* * *

| ViewParameters()

Description<br>Object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. This function temporarily changes the behaviour so that if a property is a parameter the parameter name is returned instead. This can be used with 'method chaining' (see the example below) to make sure a property argument is correct. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Curve](primer-curve-class.md) object.<br>
Return type
<br>Curve |
| --- |

| Example
<br>To check if Curve property c.example is a parameter by using the [Curve.GetParameter()](primer-curve-class.md#Curve::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for curve. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The warning message to give

* details (optional) (string)
 
An optional detailed warning message

| Returns
<br>No return value |
| --- |

| Example
<br>To add a warning message "My custom warning" for curve c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this curve. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for curve c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the curve data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Curve.Keyword()](primer-curve-class.md#Curve::Keyword) and [Curve.KeywordCards()](primer-curve-class.md#Curve::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for curve l in keyword format<br>
```
var l = d.toString();
```
 |
| --- |

* * *