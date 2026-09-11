# FreqFRF class

The FreqFRF class gives you access to \*FREQUENCY\_DOMAIN\_FRF keyword in PRIMER. [More...](primer-freqfrf-class.md#FreqFRF_details)

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

* [First](primer-freqfrf-class.md#FreqFRF::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-freqfrf-class.md#FreqFRF::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-freqfrf-class.md#FreqFRF::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-freqfrf-class.md#FreqFRF::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-freqfrf-class.md#FreqFRF::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-freqfrf-class.md#FreqFRF::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-freqfrf-class.md#FreqFRF::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-freqfrf-class.md#FreqFRF::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-freqfrf-class.md#FreqFRF::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-freqfrf-class.md#FreqFRF::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AddSubcaseData](primer-freqfrf-class.md#FreqFRF::AddSubcaseData)()
* [AssociateComment](primer-freqfrf-class.md#FreqFRF::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-freqfrf-class.md#FreqFRF::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-freqfrf-class.md#FreqFRF::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-freqfrf-class.md#FreqFRF::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-freqfrf-class.md#FreqFRF::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-freqfrf-class.md#FreqFRF::Edit)(modal (optional)*[boolean]*)
* [Error](primer-freqfrf-class.md#FreqFRF::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-freqfrf-class.md#FreqFRF::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-freqfrf-class.md#FreqFRF::GetComments)()
* [GetParameter](primer-freqfrf-class.md#FreqFRF::GetParameter)(prop*[string]*)
* [GetSubcaseData](primer-freqfrf-class.md#FreqFRF::GetSubcaseData)(index*[integer]*)
* [Keyword](primer-freqfrf-class.md#FreqFRF::Keyword)()
* [KeywordCards](primer-freqfrf-class.md#FreqFRF::KeywordCards)()
* [Next](primer-freqfrf-class.md#FreqFRF::Next)()
* [Previous](primer-freqfrf-class.md#FreqFRF::Previous)()
* [SetFlag](primer-freqfrf-class.md#FreqFRF::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetSubcaseData](primer-freqfrf-class.md#FreqFRF::SetSubcaseData)(index*[integer]*, title*[string]*, vad1*[integer]*, data*[Array of data]*)
* [ViewParameters](primer-freqfrf-class.md#FreqFRF::ViewParameters)()
* [Warning](primer-freqfrf-class.md#FreqFRF::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-freqfrf-class.md#FreqFRF::Xrefs)()
* [toString](primer-freqfrf-class.md#FreqFRF::toString)()

## FreqFRF constants

| **Name** | **Description** |
| --- | --- |
| FreqFRF.BLANK | FreqFRF option for \*FREQUENCY\_DOMAIN\_FRF\_BLANK. |
| FreqFRF.SUBCASE | FreqFRF option for \*FREQUENCY\_DOMAIN\_FRF\_SUBCASE. |

### Constants for ID type for n1/ n11

| **Name** | **Description** |
| --- | --- |
| FreqFRF.IGA\_EDGE\_UVW | Property n1typ/ n11typ value EQ.5.0: n1/ n11 is IGA edge UVW ID. |
| FreqFRF.IGA\_EDGE\_UVW\_SET | Property n1typ/ n11typ value EQ.6.0: n1/ n11 is IGA edge UVW Set ID. |
| FreqFRF.IGA\_FACE\_XYZ | Property n1typ/ n11typ value EQ.7.0: n1/ n11 is IGA face XYZ Set ID. |
| FreqFRF.IGA\_FACE\_XYZ\_SET | Property n1typ/ n11typ value EQ.8.0: n1/ n11 is IGA face XYZ Set ID. |

### Constants for ID type for n2

| **Name** | **Description** |
| --- | --- |
| FreqFRF.IGA\_POINT\_UVW | Property n1typ/ n11typ value EQ.3.0: n2 is IGA point UVW ID. |
| FreqFRF.IGA\_POINT\_UVW\_SET | Property n1typ/ n11typ value EQ.4.0: n2 is IGA point UVW Set ID. |
| FreqFRF.NODE | Property n1typ/ n2typ value EQ.0.0: n2 is Node ID (default). |
| FreqFRF.NODE\_SET | Property n1typ/ n11typ value EQ.1.0: n2 is Node Set ID. |
| FreqFRF.SEGMENT\_SET | Property n1typ/ n11typ value EQ.2.0: n2 is Segment Set ID. |

## FreqFRF properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dampf | real | Modal damping coefficient. |
| dmpmas | real | Mass proportional damping constant in Rayleigh damping. |
| dmpstf | real | Stiffness proportional damping constant in Rayleigh damping. |
| dof1 | integer | Applicable degrees-of-freedom for excitation input (ignored if vad1 = 4). |
| dof2 | integer | Applicable degrees-of-freedom for response output. |
| exists (read only) | logical | true if \*FREQUENCY\_DOMAIN\_FRF exists, false if referred to but not defined. |
| fmax | real | Maximum frequency for FRF output (cycles/time). |
| fmin | real | Minimum frequency for FRF output (cycles/time). |
| fnmax | real | Optional maximum natural frequency employed in FRF computation. |
| fspace | integer | Frequency spacing option for FRF output. |
| include | integer | The [Include](primer-include-class.md) file number that the \*FREQUENCY\_DOMAIN\_FRF is in. |
| label (read only) | integer | The label the \*FREQUENCY\_DOMAIN\_FRF has in PRIMER. |
| lcdam | integer | [Load Curve](primer-curve-class.md) ID defining mode dependent modal damping coefficient. |
| lcfreq | integer | [Load Curve](primer-curve-class.md) ID defining the frequencies for FRF output. |
| lctyp | integer | Type of load curve defining modal damping coefficient. |
| mdmax | integer | The last mode employed in FRF computation (optional). |
| mdmin | integer | The first mode employed in FRF computation (optional). |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*FREQUENCY\_DOMAIN\_FRF is in. |
| n1 | integer | [Node](primer-node-class.md)/ [Node Set/ Segment Set](primer-set-class.md) ID for excitation input. |
| n11 | integer | [Node](primer-node-class.md)/ [Node Set/ Segment Set](primer-set-class.md) ID for excitation input. |
| n11typ | integer | Type of n11. Values can be [FreqFRF.NODE](primer-freqfrf-class.md#FreqFRF.NODE),
[FreqFRF.NODE_SET](primer-freqfrf-class.md#FreqFRF.NODE_SET),
[FreqFRF.SEGMENT_SET](primer-freqfrf-class.md#FreqFRF.SEGMENT_SET),
[FreqFRF.IGA_POINT_UVW](primer-freqfrf-class.md#FreqFRF.IGA_POINT_UVW),
[FreqFRF.IGA_POINT_UVW_SET](primer-freqfrf-class.md#FreqFRF.IGA_POINT_UVW_SET),
[FreqFRF.IGA_EDGE_UVW](primer-freqfrf-class.md#FreqFRF.IGA_EDGE_UVW),
[FreqFRF.IGA_EDGE_UVW_SET](primer-freqfrf-class.md#FreqFRF.IGA_EDGE_UVW_SET),
[FreqFRF.IGA_FACE_XYZ](primer-freqfrf-class.md#FreqFRF.IGA_FACE_XYZ) or
[FreqFRF.IGA_FACE_XYZ_SET](primer-freqfrf-class.md#FreqFRF.IGA_FACE_XYZ_SET) |
| n1typ | integer | Type of n1. Values can be [FreqFRF.NODE](primer-freqfrf-class.md#FreqFRF.NODE),
[FreqFRF.NODE_SET](primer-freqfrf-class.md#FreqFRF.NODE_SET), [FreqFRF.SEGMENT_SET](primer-freqfrf-class.md#FreqFRF.SEGMENT_SET).
[FreqFRF.IGA_POINT_UVW](primer-freqfrf-class.md#FreqFRF.IGA_POINT_UVW),
[FreqFRF.IGA_POINT_UVW_SET](primer-freqfrf-class.md#FreqFRF.IGA_POINT_UVW_SET),
[FreqFRF.IGA_EDGE_UVW](primer-freqfrf-class.md#FreqFRF.IGA_EDGE_UVW),
[FreqFRF.IGA_EDGE_UVW_SET](primer-freqfrf-class.md#FreqFRF.IGA_EDGE_UVW_SET),
[FreqFRF.IGA_FACE_XYZ](primer-freqfrf-class.md#FreqFRF.IGA_FACE_XYZ) or
[FreqFRF.IGA_FACE_XYZ_SET](primer-freqfrf-class.md#FreqFRF.IGA_FACE_XYZ_SET) |
| n2 | integer | [Node](primer-node-class.md)/ [Node Set/ Segment Set](primer-set-class.md) ID for response output. |
| n2typ | integer | Type of n2. Values can be [FreqFRF.NODE](primer-freqfrf-class.md#FreqFRF.NODE),
[FreqFRF.NODE_SET](primer-freqfrf-class.md#FreqFRF.NODE_SET) , [FreqFRF.SEGMENT_SET](primer-freqfrf-class.md#FreqFRF.SEGMENT_SET),
[FreqFRF.IGA_POINT_UVW](primer-freqfrf-class.md#FreqFRF.IGA_POINT_UVW) or
[FreqFRF.IGA_POINT_UVW_SET](primer-freqfrf-class.md#FreqFRF.IGA_POINT_UVW_SET), |
| ncases | integer | Number of subcases. |
| nfreq | integer | Number of frequencies for FRF output. |
| option | constant | The \*FREQUENCY\_DOMAIN\_FRF option. Can be [FreqFRF.BLANK](primer-freqfrf-class.md#FreqFRF.BLANK) or [FreqFRF.SUBCASE](primer-freqfrf-class.md#FreqFRF.SUBCASE) |
| output | integer | Output option. |
| relatv | integer | Flag for displacement, velocity and acceleration results. |
| restrt | integer | Restart option. |
| vad1 | integer | Excitation input type. |
| vad2 | integer | Response output type. |
| vid1 | integer | [Vector](primer-vector-class.md) ID (for dof1 = 0) for excitation input. |
| vid2 | integer | [Vector](primer-vector-class.md) ID (for dof2 = 0) for response direction. |

| Detailed Description<br>The FreqFRF class allows you to create, modify, edit and manipulate \*FREQUENCY\_DOMAIN\_FRF.<br>See the documentation below for more details. |
| --- |

| Constructor
new FreqFRF(Model*[[Model](primer-model-class.md)]*, option*[constant]*)

Description<br>Create a new [FreqFRF](primer-freqfrf-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*FREQUENCY\_DOMAIN\_FRF will be created in.

* option (constant)
 
Specify the type of \*FREQUENCY\_DOMAIN\_FRF. Can be [FreqFRF.BLANK](primer-freqfrf-class.md#FreqFRF.BLANK), [FreqFRF.SUBCASE](primer-freqfrf-class.md#FreqFRF.SUBCASE).

| Returns
<br>No return value |
| --- |

| Example
<br>To create a new \*FREQUENCY\_DOMAIN\_FRF in model m for BLANK option<br>
```
var f = new FreqFRF(m, FreqFRF.BLANK);
```
 |
| --- |

| new FreqFRF(Model*[[Model](primer-model-class.md)]*, n1*[integer]*, n1typ*[integer]*, n2*[integer]*, n2typ*[integer]*) [deprecated]
<br>This function is deprecated in version 22.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [FreqFRF](primer-freqfrf-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*FREQUENCY\_DOMAIN\_FRF will be created in.

* n1 (integer)
 
[Node](primer-node-class.md)/ [Node Set/ Segment Set](primer-set-class.md) ID for excitation input.

* n1typ (integer)
 
Type of n1. Values can be [FreqFRF.NODE](primer-freqfrf-class.md#FreqFRF.NODE),
[FreqFRF.NODE_SET](primer-freqfrf-class.md#FreqFRF.NODE_SET) or [FreqFRF.SEGMENT_SET](primer-freqfrf-class.md#FreqFRF.SEGMENT_SET).

* n2 (integer)
 
[Node](primer-node-class.md)/ [Node Set/ Segment Set](primer-set-class.md) ID for response output.

* n2typ (integer)
 
Type of n2. Values can be [FreqFRF.NODE](primer-freqfrf-class.md#FreqFRF.NODE),
[FreqFRF.NODE_SET](primer-freqfrf-class.md#FreqFRF.NODE_SET) or [FreqFRF.SEGMENT_SET](primer-freqfrf-class.md#FreqFRF.SEGMENT_SET).

| Returns
<br>[FreqFRF](primer-freqfrf-class.md) object<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To create a new \*FREQUENCY\_DOMAIN\_FRF in model m with node 10 for excitation output and node set 2 for response output<br>
```
var f = new FreqFRF(m, 10, FreqFRF.NODE, 2, FreqFRF.NODE_SET);
```
 |
| --- |

| Details of functions 
AddSubcaseData()

Description<br><br><br>Allows user to add new subcase cards in \*FREQUENCY\_DOMAIN\_SSFRF. This method is only applicable when option is [FreqFRF.SUBCASE](primer-freqfrf-class.md#FreqFRF.SUBCASE).<br> <br>The new cards have uninitialised fields and should be updated by [FreqFRF.SetSubcaseData()](primer-freqfrf-class.md#FreqFRF::SetSubcaseData). |
| --- |

#### Arguments

No arguments

| Returns
<br>Index of the new subcase<br>
Return type
<br>integer |
| --- |

| Example
<br>To add a new load data card in \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.AddSubcaseData();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*FREQUENCY\_DOMAIN\_FRF. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*FREQUENCY\_DOMAIN\_FRF

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.AssociateComment(c);
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
<br>To Browse \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*FREQUENCY\_DOMAIN\_FRF. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*FREQUENCY\_DOMAIN\_FRF

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*FREQUENCY\_DOMAIN\_FRF. The target include of the copied \*FREQUENCY\_DOMAIN\_FRF can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>FreqFRF object<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To copy \*FREQUENCY\_DOMAIN\_FRF f into \*FREQUENCY\_DOMAIN\_FRF z:<br>
```
var z = f.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*FREQUENCY\_DOMAIN\_FRF. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*FREQUENCY\_DOMAIN\_FRF

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.DetachComment(c);
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
<br>To Edit \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*FREQUENCY\_DOMAIN\_FRF. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*FREQUENCY\_DOMAIN\_FRF in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*FREQUENCY\_DOMAIN\_FRF in

| Returns
<br>FreqFRF object (or null if there are no \*FREQUENCY\_DOMAIN\_FRFs in the model).<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To get the first \*FREQUENCY\_DOMAIN\_FRF in model m:<br>
```
var f = FreqFRF.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*FREQUENCY\_DOMAIN\_FRFs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*FREQUENCY\_DOMAIN\_FRFs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*FREQUENCY\_DOMAIN\_FRFs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*FREQUENCY\_DOMAIN\_FRFs with flag f in model m:<br>
```
FreqFRF.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*FREQUENCY\_DOMAIN\_FRF is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*FREQUENCY\_DOMAIN\_FRF

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*FREQUENCY\_DOMAIN\_FRF f has flag f set on it:<br>
```
if (f.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*FREQUENCY\_DOMAIN\_FRF in the model.<br> **Note that ForEach has been designed to make looping over \*FREQUENCY\_DOMAIN\_FRFs as fast as possible and so has some limitations. Firstly, a single temporary FreqFRF object is created and on each function call it is updated with the current \*FREQUENCY\_DOMAIN\_FRF data. This means that you should not try to store the FreqFRF object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*FREQUENCY\_DOMAIN\_FRFs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*FREQUENCY\_DOMAIN\_FRFs are in

* func (function)
 
Function to call for each \*FREQUENCY\_DOMAIN\_FRF

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*FREQUENCY\_DOMAIN\_FRFs in model m:<br>
```
FreqFRF.ForEach(m, test);
function test(f)
{
// f is FreqFRF object
}
```
<br><br>To call function test for all of the \*FREQUENCY\_DOMAIN\_FRFs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
FreqFRF.ForEach(m, test, data);
function test(f, extra)
{
// f is FreqFRF object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of FreqFRF objects or properties for all of the \*FREQUENCY\_DOMAIN\_FRFs in a model in PRIMER. If the optional property argument is not given then an array of FreqFRF objects is returned. If the property argument is given, that property value for each \*FREQUENCY\_DOMAIN\_FRF is returned in the array instead of a FreqFRF object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*FREQUENCY\_DOMAIN\_FRFs from

* property (optional) (string)
 
Name for property to get for all \*FREQUENCY\_DOMAIN\_FRFs in the model

| Returns
<br>Array of FreqFRF objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of FreqFRF objects for all of the \*FREQUENCY\_DOMAIN\_FRFs in model m:<br>
```
var a = FreqFRF.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*FREQUENCY\_DOMAIN\_FRF in model m:<br>
```
var a = FreqFRF.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*FREQUENCY\_DOMAIN\_FRF. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
var comm_array = f.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of FreqFRF objects for all of the flagged \*FREQUENCY\_DOMAIN\_FRFs in a model in PRIMER If the optional property argument is not given then an array of FreqFRF objects is returned. If the property argument is given, then that property value for each \*FREQUENCY\_DOMAIN\_FRF is returned in the array instead of a FreqFRF object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*FREQUENCY\_DOMAIN\_FRFs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*FREQUENCY\_DOMAIN\_FRFs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*FREQUENCY\_DOMAIN\_FRFs in the model

| Returns
<br>Array of FreqFRF objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of FreqFRF objects for all of the \*FREQUENCY\_DOMAIN\_FRFs in model m flagged with f:<br>
```
var f = FreqFRF.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*FREQUENCY\_DOMAIN\_FRFs in model m flagged with f:<br>
```
var a = FreqFRF.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the FreqFRF object for a \*FREQUENCY\_DOMAIN\_FRF ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*FREQUENCY\_DOMAIN\_FRF in

* number (integer)
 
number of the \*FREQUENCY\_DOMAIN\_FRF you want the FreqFRF object for

| Returns
<br>FreqFRF object (or null if \*FREQUENCY\_DOMAIN\_FRF does not exist).<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To get the FreqFRF object for \*FREQUENCY\_DOMAIN\_FRF 100 in model m<br>
```
var f = FreqFRF.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a FreqFRF property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [FreqFRF.ViewParameters()](primer-freqfrf-class.md#FreqFRF::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*FREQUENCY\_DOMAIN\_FRF property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if FreqFRF property f.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (f.GetParameter(f.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if FreqFRF property f.example is a parameter by using the GetParameter method:<br>
```
if (f.ViewParameters().GetParameter(f.example) ) do_something...
```
 |
| --- |

* * *

| GetSubcaseData(index*[integer]*)

Description<br><br><br>Returns the data for a specific subcase as an array. For each subcase there will be 13 values when vad1=12 else 11 values . There can be as many subcases as needed.<br> <br>This method is only applicable when option is [FreqFRF.SUBCASE](primer-freqfrf-class.md#FreqFRF.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index you want the subcase data for. **Note that indices start at 0**.

| Returns
<br><br><br>An array containing the subcase data (values: title[string], n1[integer], n1typ[integer], n1typ[integer], dof1[integer], vad1[integer], vid1[integer], n2[integer], n2typ[integer],dof2[integer], vad2[integer], vid2[integer], n11[integer], n11typ[integer])<br> <br>n11 and n11typ are present only when vad1 =12<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 2nd subcase for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
var sdata = f.GetSubcaseData(1);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*FREQUENCY\_DOMAIN\_FRF **Note that a carriage return is not added**. See also [FreqFRF.KeywordCards()](primer-freqfrf-class.md#FreqFRF::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
var key = f.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*FREQUENCY\_DOMAIN\_FRF. **Note that a carriage return is not added**. See also [FreqFRF.Keyword()](primer-freqfrf-class.md#FreqFRF::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
var cards = f.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*FREQUENCY\_DOMAIN\_FRF in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*FREQUENCY\_DOMAIN\_FRF in

| Returns
<br>FreqFRF object (or null if there are no \*FREQUENCY\_DOMAIN\_FRFs in the model).<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To get the last \*FREQUENCY\_DOMAIN\_FRF in model m:<br>
```
var f = FreqFRF.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*FREQUENCY\_DOMAIN\_FRF in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>FreqFRF object (or null if there are no more \*FREQUENCY\_DOMAIN\_FRFs in the model).<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To get the \*FREQUENCY\_DOMAIN\_FRF in model m after \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
var f = f.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*FREQUENCY\_DOMAIN\_FRF in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>FreqFRF object (or null if there are no more \*FREQUENCY\_DOMAIN\_FRFs in the model).<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To get the \*FREQUENCY\_DOMAIN\_FRF in model m before \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
var f = f.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*FREQUENCY\_DOMAIN\_FRFs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*FREQUENCY\_DOMAIN\_FRFs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*FREQUENCY\_DOMAIN\_FRFs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*FREQUENCY\_DOMAIN\_FRFs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*FREQUENCY\_DOMAIN\_FRFs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*FREQUENCY\_DOMAIN\_FRFs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*FREQUENCY\_DOMAIN\_FRFs from model m, flagging those selected with flag f, giving the prompt 'Select \*FREQUENCY\_DOMAIN\_FRFs':<br>
```
FreqFRF.Select(f, 'Select *FREQUENCY_DOMAIN_FRFs', m);
```
<br><br>To select \*FREQUENCY\_DOMAIN\_FRFs, flagging those selected with flag f but limiting selection to \*FREQUENCY\_DOMAIN\_FRFs flagged with flag l, giving the prompt 'Select \*FREQUENCY\_DOMAIN\_FRFs':<br>
```
FreqFRF.Select(f, 'Select *FREQUENCY_DOMAIN_FRFs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*FREQUENCY\_DOMAIN\_FRF. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*FREQUENCY\_DOMAIN\_FRF

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.SetFlag(f);
```
 |
| --- |

* * *

| SetSubcaseData(index*[integer]*, title*[string]*, vad1*[integer]*, data*[Array of data]*)

Description<br><br><br>Set the data for a specific subcase. There can be as many subcases as needed.<br> <br>This method is only applicable when option is [FreqFRF.SUBCASE](primer-freqfrf-class.md#FreqFRF.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index you want to set subcase data for. **Note that indices start at 0**.

* title (string)
 
A description of the current subcase (can be blank).

* vad1 (integer)
 
Value of vad1.

* data (Array of data)

An array containing the subcase data (values: n1[integer], n1typ[integer], dof1[integer], vad1[integer], vid1[integer], n2[integer], n2typ[integer], dof2[integer], vad2[integer], vid2[integer])
 
For vad1=12 Extra 2 arguments to be given n1[integer], n11typ[integer]

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 2nd subcase data for \*FREQUENCY\_DOMAIN\_FRF to have title "subcase 1" and vad1 as 2:<br>
```
f.SetSubcaseData(1, "subcase 1", 2, ldata);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*FREQUENCY\_DOMAIN\_FRFs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*FREQUENCY\_DOMAIN\_FRFs should be counted. If false or omitted
referenced but undefined \*FREQUENCY\_DOMAIN\_FRFs will also be included in the total.

| Returns
<br>number of \*FREQUENCY\_DOMAIN\_FRFs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*FREQUENCY\_DOMAIN\_FRFs in model m:<br>
```
var total = FreqFRF.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*FREQUENCY\_DOMAIN\_FRFs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*FREQUENCY\_DOMAIN\_FRFs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*FREQUENCY\_DOMAIN\_FRFs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*FREQUENCY\_DOMAIN\_FRFs in model m:<br>
```
FreqFRF.UnflagAll(m, f);
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
<br>[FreqFRF](primer-freqfrf-class.md) object.<br>
Return type
<br>FreqFRF |
| --- |

| Example
<br>To check if FreqFRF property f.example is a parameter by using the [FreqFRF.GetParameter()](primer-freqfrf-class.md#FreqFRF::GetParameter) method:<br>
```
if (f.ViewParameters().GetParameter(f.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*FREQUENCY\_DOMAIN\_FRF. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
f.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*FREQUENCY\_DOMAIN\_FRF. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*FREQUENCY\_DOMAIN\_FRF f:<br>
```
var xrefs = f.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the \*FREQUENCY\_DOMAIN\_FRF data in keyword format. Note that this contains the keyword header and the keyword cards. See also [FreqFRF.Keyword()](primer-freqfrf-class.md#FreqFRF::Keyword) and [FreqFRF.KeywordCards()](primer-freqfrf-class.md#FreqFRF::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for \*FREQUENCY\_DOMAIN\_FRF f in keyword format<br>
```
var str = f.toString();
```
 |
| --- |

* * *