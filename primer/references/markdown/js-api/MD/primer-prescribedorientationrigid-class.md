# PrescribedOrientationRigid class

The PrescribedOrientationRigid class gives you access to define \*BOUNDARY\_PRESCRIBED\_ORIENTATION\_RIGID cards in PRIMER. [More...](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid_details)

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

* [Create](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Edit)(modal (optional)*[boolean]*)
* [Error](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::GetComments)()
* [GetParameter](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::GetParameter)(prop*[string]*)
* [Keyword](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Keyword)()
* [KeywordCards](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::KeywordCards)()
* [Next](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Next)()
* [Previous](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Previous)()
* [SetFlag](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::ViewParameters)()
* [Warning](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Xrefs)()
* [toString](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::toString)()

## PrescribedOrientationRigid constants

| **Name** | **Description** |
| --- | --- |
| PrescribedOrientationRigid.ANGLES | Boundary is \*BOUNDARY\_PRESCRIBED\_ORIENTATION\_RIGID\_ANGLES. |
| PrescribedOrientationRigid.DIRCOS | Boundary is \*BOUNDARY\_PRESCRIBED\_ORIENTATION\_RIGID\_DIRCOS. |
| PrescribedOrientationRigid.EULERP | Boundary is \*BOUNDARY\_PRESCRIBED\_ORIENTATION\_RIGID\_EULERP. |
| PrescribedOrientationRigid.VECTOR | Boundary is \*BOUNDARY\_PRESCRIBED\_ORIENTATION\_RIGID\_VECTOR. |

## PrescribedOrientationRigid properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| birth | real | Time prior to which the body moves freely under the action of other agents. |
| body | integer | Reference axes: 0 for rotations about axes fixed in PIDA or 1 for those fixed in PIDB. |
| death | real | Time when the body is freed from the restriction. |
| exists (read only) | logical | true if prescribed orientation rigid exists, false if referred to but not defined. |
| heading | string | [PrescribedOrientationRigid](primer-prescribedorientationrigid-class.md) heading |
| id | logical | true if \_ID option is set, false if not. |
| include | integer | The [Include](primer-include-class.md) file number that the prescribed orientation rigid is in. |
| intrp | integer | Interpolation method: 1 for linear interpolation or 2 for cubic spline interpolation. |
| intrp | integer | Interpolation method: 1 for linear interpolation or 2 for cubic spline interpolation. |
| iseq | integer | Specifies the sequence in which the rotations are performed. |
| ishft | integer | Angle shift: 1 for unaltered angle curves or 2 for angle data shift in LCIDQi curves eliminating discontinuities. |
| lcidc11 | integer | Load curve ID specifying direction cosine C11 as function of time. |
| lcidc12 | integer | Load curve ID specifying direction cosine C12 as function of time. |
| lcidc13 | integer | Load curve ID specifying direction cosine C13 as function of time. |
| lcidc21 | integer | Load curve ID specifying direction cosine C21 as function of time. |
| lcidc22 | integer | Load curve ID specifying direction cosine C22 as function of time. |
| lcidc23 | integer | Load curve ID specifying direction cosine C23 as function of time. |
| lcidc31 | integer | Load curve ID specifying direction cosine C31 as function of time. |
| lcidc32 | integer | Load curve ID specifying direction cosine C32 as function of time. |
| lcidc33 | integer | Load curve ID specifying direction cosine C33 as function of time. |
| lcide1 | integer | Load curve ID specifying Euler parameter e1 as function of time. |
| lcide2 | integer | Load curve ID specifying Euler parameter e2 as function of time. |
| lcide3 | integer | Load curve ID specifying Euler parameter e3 as function of time. |
| lcide4 | integer | Load curve ID specifying Euler parameter e4 as function of time. |
| lcidq1 | integer | Load curve ID specifying orientation angle q1 as function of time. |
| lcidq2 | integer | Load curve ID specifying orientation angle q2 as function of time. |
| lcidq3 | integer | Load curve ID specifying orientation angle q3 as function of time. |
| lcids | integer | Load curve ID specifying spin speed of PIDB about axis parallel to vector. |
| lcidv1 | integer | Load curve ID specifying vector measure number v1 as function of time. |
| lcidv2 | integer | Load curve ID specifying vector measure number v2 as function of time. |
| lcidv3 | integer | Load curve ID specifying vector measure number v3 as function of time. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the prescribed orientation rigid is in. |
| option | constant | The Boundary Prescribed Orientation Rigid option. Can be [PrescribedOrientationRigid.DIRCOS](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.DIRCOS), [PrescribedOrientationRigid.ANGLES](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.ANGLES), [PrescribedOrientationRigid.EULERP](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.EULERP) or [PrescribedOrientationRigid.VECTOR](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.VECTOR). |
| pida | integer | Part ID for rigid body A. |
| pidb | integer | Part ID for rigid body B whose orientation is prescribed. |
| toffset | integer | Time offset flag. |
| valspin | real | Constant value for spin speed of PIDB about axis parallel to vector. Used when LCIDS is 0. |

| Detailed Description<br>The PrescribedOrientationRigid class allows you to create, modify, edit and manipulate boundary prescribed orientation rigid cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new PrescribedOrientationRigid(Model*[[Model](primer-model-class.md)]*, option*[constant]*, pidb*[integer]*, label (optional)*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [PrescribedOrientationRigid](primer-prescribedorientationrigid-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that prescribed orientation rigid will be created in

* option (constant)
 
Suffix for boundary prescribed orientation rigid. Can be [PrescribedOrientationRigid.DIRCOS](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.DIRCOS) [PrescribedOrientationRigid.ANGLES](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.ANGLES) [PrescribedOrientationRigid.EULERP](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.EULERP) [PrescribedOrientationRigid.VECTOR](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid.VECTOR)

* pidb (integer)
 
Part ID for rigid body B whose orientation is prescribed.

* label (optional) (integer)
 
[PrescribedOrientationRigid](primer-prescribedorientationrigid-class.md) number

* heading (optional) (string)
 
Title for the PrescribedOrientationRigid

| Returns
<br>[PrescribedOrientationRigid](primer-prescribedorientationrigid-class.md) object<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To create a new prescribed orientation rigid in model m with part ID 10 and suffix \_DIRCOS:<br>
```
var por = new PrescribedOrientationRigid(m, PrescribedOrientationRigid.DIRCOS, 10);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a prescribed orientation rigid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the prescribed orientation rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the prescribed orientation rigid por:<br>
```
por.AssociateComment(c);
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
<br>To Browse prescribed orientation rigid por:<br>
```
por.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the prescribed orientation rigid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the prescribed orientation rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for prescribed orientation rigid por:<br>
```
por.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the prescribed orientation rigid. The target include of the copied prescribed orientation rigid can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>PrescribedOrientationRigid object<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To copy prescribed orientation rigid por into prescribed orientation rigid z:<br>
```
var z = por.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a prescribed orientation rigid |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the prescribed orientation rigid will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>PrescribedOrientationRigid object (or null if not made).<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To start creating a prescribed orientation rigid in model m:<br>
```
var por = PrescribedOrientationRigid.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a prescribed orientation rigid. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the prescribed orientation rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the prescribed orientation rigid por:<br>
```
por.DetachComment(c);
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
<br>To Edit prescribed orientation rigid por:<br>
```
por.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for prescribed orientation rigid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for prescribed orientation rigid por:<br>
```
por.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first prescribed orientation rigid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first prescribed orientation rigid in

| Returns
<br>PrescribedOrientationRigid object (or null if there are no prescribed orientation rigids in the model).<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To get the first prescribed orientation rigid in model m:<br>
```
var por = PrescribedOrientationRigid.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the prescribed orientation rigids in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all prescribed orientation rigids will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the prescribed orientation rigids

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the prescribed orientation rigids with flag f in model m:<br>
```
PrescribedOrientationRigid.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the prescribed orientation rigid is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the prescribed orientation rigid

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if prescribed orientation rigid por has flag f set on it:<br>
```
if (por.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each prescribed orientation rigid in the model.<br> **Note that ForEach has been designed to make looping over prescribed orientation rigids as fast as possible and so has some limitations. Firstly, a single temporary PrescribedOrientationRigid object is created and on each function call it is updated with the current prescribed orientation rigid data. This means that you should not try to store the PrescribedOrientationRigid object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new prescribed orientation rigids inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all prescribed orientation rigids are in

* func (function)
 
Function to call for each prescribed orientation rigid

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the prescribed orientation rigids in model m:<br>
```
PrescribedOrientationRigid.ForEach(m, test);
function test(por)
{
// por is PrescribedOrientationRigid object
}
```
<br><br>To call function test for all of the prescribed orientation rigids in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
PrescribedOrientationRigid.ForEach(m, test, data);
function test(por, extra)
{
// por is PrescribedOrientationRigid object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedOrientationRigid objects or properties for all of the prescribed orientation rigids in a model in PRIMER. If the optional property argument is not given then an array of PrescribedOrientationRigid objects is returned. If the property argument is given, that property value for each prescribed orientation rigid is returned in the array instead of a PrescribedOrientationRigid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get prescribed orientation rigids from

* property (optional) (string)
 
Name for property to get for all prescribed orientation rigids in the model

| Returns
<br>Array of PrescribedOrientationRigid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedOrientationRigid objects for all of the prescribed orientation rigids in model m:<br>
```
var a = PrescribedOrientationRigid.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each prescribed orientation rigid in model m:<br>
```
var a = PrescribedOrientationRigid.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a prescribed orientation rigid. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the prescribed orientation rigid por:<br>
```
var comm_array = por.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of PrescribedOrientationRigid objects for all of the flagged prescribed orientation rigids in a model in PRIMER If the optional property argument is not given then an array of PrescribedOrientationRigid objects is returned. If the property argument is given, then that property value for each prescribed orientation rigid is returned in the array instead of a PrescribedOrientationRigid object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get prescribed orientation rigids from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the prescribed orientation rigids that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged prescribed orientation rigids in the model

| Returns
<br>Array of PrescribedOrientationRigid objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of PrescribedOrientationRigid objects for all of the prescribed orientation rigids in model m flagged with f:<br>
```
var por = PrescribedOrientationRigid.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the prescribed orientation rigids in model m flagged with f:<br>
```
var a = PrescribedOrientationRigid.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the PrescribedOrientationRigid object for a prescribed orientation rigid ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the prescribed orientation rigid in

* number (integer)
 
number of the prescribed orientation rigid you want the PrescribedOrientationRigid object for

| Returns
<br>PrescribedOrientationRigid object (or null if prescribed orientation rigid does not exist).<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To get the PrescribedOrientationRigid object for prescribed orientation rigid 100 in model m<br>
```
var por = PrescribedOrientationRigid.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a PrescribedOrientationRigid property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [PrescribedOrientationRigid.ViewParameters()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
prescribed orientation rigid property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if PrescribedOrientationRigid property por.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (por.GetParameter(por.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if PrescribedOrientationRigid property por.example is a parameter by using the GetParameter method:<br>
```
if (por.ViewParameters().GetParameter(por.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this prescribed orientation rigid. **Note that a carriage return is not added**. See also [PrescribedOrientationRigid.KeywordCards()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for prescribed orientation rigid por:<br>
```
var key = por.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the prescribed orientation rigid. **Note that a carriage return is not added**. See also [PrescribedOrientationRigid.Keyword()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for prescribed orientation rigid por:<br>
```
var cards = por.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last prescribed orientation rigid in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last prescribed orientation rigid in

| Returns
<br>PrescribedOrientationRigid object (or null if there are no prescribed orientation rigids in the model).<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To get the last prescribed orientation rigid in model m:<br>
```
var por = PrescribedOrientationRigid.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next prescribed orientation rigid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedOrientationRigid object (or null if there are no more prescribed orientation rigids in the model).<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To get the prescribed orientation rigid in model m after prescribed orientation rigid por:<br>
```
var por = por.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous prescribed orientation rigid in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>PrescribedOrientationRigid object (or null if there are no more prescribed orientation rigids in the model).<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To get the prescribed orientation rigid in model m before prescribed orientation rigid por:<br>
```
var por = por.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select prescribed orientation rigids using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting prescribed orientation rigids

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only prescribed orientation rigids from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only prescribed orientation rigids that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any prescribed orientation rigids can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of prescribed orientation rigids selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select prescribed orientation rigids from model m, flagging those selected with flag f, giving the prompt 'Select prescribed orientation rigids':<br>
```
PrescribedOrientationRigid.Select(f, 'Select prescribed orientation rigids', m);
```
<br><br>To select prescribed orientation rigids, flagging those selected with flag f but limiting selection to prescribed orientation rigids flagged with flag l, giving the prompt 'Select prescribed orientation rigids':<br>
```
PrescribedOrientationRigid.Select(f, 'Select prescribed orientation rigids', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the prescribed orientation rigid. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the prescribed orientation rigid

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for prescribed orientation rigid por:<br>
```
por.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the prescribed orientation rigid. The prescribed orientation rigid will be sketched until you either call [PrescribedOrientationRigid.Unsketch()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Unsketch), [PrescribedOrientationRigid.UnsketchAll()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the prescribed orientation rigid is sketched. If omitted redraw is true. If you want to sketch several prescribed orientation rigids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch prescribed orientation rigid por:<br>
```
por.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged prescribed orientation rigids in the model. The prescribed orientation rigids will be sketched until you either call [PrescribedOrientationRigid.Unsketch()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Unsketch), [PrescribedOrientationRigid.UnsketchFlagged()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged prescribed orientation rigids will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the prescribed orientation rigids that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the prescribed orientation rigids are sketched. If omitted redraw is true. If you want to sketch flagged prescribed orientation rigids several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all prescribed orientation rigids flagged with flag in model m:<br>
```
PrescribedOrientationRigid.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of prescribed orientation rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing prescribed orientation rigids should be counted. If false or omitted
referenced but undefined prescribed orientation rigids will also be included in the total.

| Returns
<br>number of prescribed orientation rigids<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of prescribed orientation rigids in model m:<br>
```
var total = PrescribedOrientationRigid.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the prescribed orientation rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all prescribed orientation rigids will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the prescribed orientation rigids

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the prescribed orientation rigids in model m:<br>
```
PrescribedOrientationRigid.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the prescribed orientation rigid. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the prescribed orientation rigid is unsketched. If omitted redraw is true. If you want to unsketch several prescribed orientation rigids and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch prescribed orientation rigid por:<br>
```
por.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all prescribed orientation rigids. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all prescribed orientation rigids will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the prescribed orientation rigids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all prescribed orientation rigids in model m:<br>
```
PrescribedOrientationRigid.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged prescribed orientation rigids in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all prescribed orientation rigids will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the prescribed orientation rigids that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the prescribed orientation rigids are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all prescribed orientation rigids flagged with flag in model m:<br>
```
PrescribedOrientationRigid.UnsketchAll(m, flag);
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
<br>[PrescribedOrientationRigid](primer-prescribedorientationrigid-class.md) object.<br>
Return type
<br>PrescribedOrientationRigid |
| --- |

| Example
<br>To check if PrescribedOrientationRigid property por.example is a parameter by using the [PrescribedOrientationRigid.GetParameter()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::GetParameter) method:<br>
```
if (por.ViewParameters().GetParameter(por.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for prescribed orientation rigid. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for prescribed orientation rigid por:<br>
```
por.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this prescribed orientation rigid. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for prescribed orientation rigid por:<br>
```
var xrefs = por.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the prescribed orientation rigid data in keyword format. Note that this contains the keyword header and the keyword cards. See also [PrescribedOrientationRigid.Keyword()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::Keyword) and [PrescribedOrientationRigid.KeywordCards()](primer-prescribedorientationrigid-class.md#PrescribedOrientationRigid::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for prescribed orientation rigid por in keyword format<br>
```
var s = por.toString();
```
 |
| --- |

* * *