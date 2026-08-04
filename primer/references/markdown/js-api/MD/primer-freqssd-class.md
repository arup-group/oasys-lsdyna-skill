# FreqSSD class

The FreqSSD class gives you access to \*FREQUENCY\_DOMAIN\_SSD keyword in PRIMER. [More...](primer-freqssd-class.md#FreqSSD_details)

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

* [Create](primer-freqssd-class.md#FreqSSD::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-freqssd-class.md#FreqSSD::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-freqssd-class.md#FreqSSD::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-freqssd-class.md#FreqSSD::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-freqssd-class.md#FreqSSD::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-freqssd-class.md#FreqSSD::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-freqssd-class.md#FreqSSD::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-freqssd-class.md#FreqSSD::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-freqssd-class.md#FreqSSD::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-freqssd-class.md#FreqSSD::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-freqssd-class.md#FreqSSD::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AddLoadData](primer-freqssd-class.md#FreqSSD::AddLoadData)()
* [AddSubcaseData](primer-freqssd-class.md#FreqSSD::AddSubcaseData)()
* [AssociateComment](primer-freqssd-class.md#FreqSSD::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-freqssd-class.md#FreqSSD::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-freqssd-class.md#FreqSSD::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-freqssd-class.md#FreqSSD::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-freqssd-class.md#FreqSSD::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-freqssd-class.md#FreqSSD::Edit)(modal (optional)*[boolean]*)
* [Error](primer-freqssd-class.md#FreqSSD::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-freqssd-class.md#FreqSSD::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-freqssd-class.md#FreqSSD::GetComments)()
* [GetErpData](primer-freqssd-class.md#FreqSSD::GetErpData)(index*[integer]*)
* [GetLoadData](primer-freqssd-class.md#FreqSSD::GetLoadData)(index*[integer]*)
* [GetParameter](primer-freqssd-class.md#FreqSSD::GetParameter)(prop*[string]*)
* [GetSubcaseData](primer-freqssd-class.md#FreqSSD::GetSubcaseData)(index*[integer]*)
* [Keyword](primer-freqssd-class.md#FreqSSD::Keyword)()
* [KeywordCards](primer-freqssd-class.md#FreqSSD::KeywordCards)()
* [Next](primer-freqssd-class.md#FreqSSD::Next)()
* [Previous](primer-freqssd-class.md#FreqSSD::Previous)()
* [RemoveLoadData](primer-freqssd-class.md#FreqSSD::RemoveLoadData)(index*[integer]*)
* [RemoveSubcaseData](primer-freqssd-class.md#FreqSSD::RemoveSubcaseData)(index*[integer]*)
* [SetErpData](primer-freqssd-class.md#FreqSSD::SetErpData)(index*[integer]*, data*[Array of data]*)
* [SetFlag](primer-freqssd-class.md#FreqSSD::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetLoadData](primer-freqssd-class.md#FreqSSD::SetLoadData)(index*[integer]*, data*[Array of data]*)
* [SetSubcaseData](primer-freqssd-class.md#FreqSSD::SetSubcaseData)(index*[integer]*, caseid*[string]*, title*[string]*, nload*[integer]*, data*[Array of data]*)
* [ViewParameters](primer-freqssd-class.md#FreqSSD::ViewParameters)()
* [Warning](primer-freqssd-class.md#FreqSSD::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-freqssd-class.md#FreqSSD::Xrefs)()
* [toString](primer-freqssd-class.md#FreqSSD::toString)()

## FreqSSD constants

| **Name** | **Description** |
| --- | --- |
| FreqSSD.DIRECT | FreqSSD option for \*FREQUENCY\_DOMAIN\_SSD\_DIRECT. |
| FreqSSD.DIRECT\_FD | FreqSSD option for \*FREQUENCY\_DOMAIN\_SSD\_DIRECT\_FREQUENCY\_DEPENDENT. |
| FreqSSD.ERP | FreqSSD option for \*FREQUENCY\_DOMAIN\_SSD\_ERP. |
| FreqSSD.FATIGUE | FreqSSD option for \*FREQUENCY\_DOMAIN\_SSD\_FATIGUE. |
| FreqSSD.FRF | FreqSSD option for \*FREQUENCY\_DOMAIN\_SSD\_FRF. |
| FreqSSD.SUBCASE | FreqSSD option for \*FREQUENCY\_DOMAIN\_SSD\_SUBCASE. |

## FreqSSD properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| c | real | Sound speed of the fluid (for option [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP) only). |
| dampf | real | Modal damping coefficient. |
| dmpflg | integer | Damping flag. |
| dmpmas | real | Mass proportional damping constant in Rayleigh damping. |
| dmpstf | real | Stiffness proportional damping constant in Rayleigh damping. |
| erpref | real | ERP reference value (for option [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP) only). |
| erprlf | real | ERP radiation loss factor (for option [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP) only). |
| exists (read only) | logical | true if \*FREQUENCY\_DOMAIN\_SSD exists, false if referred to but not defined. |
| fnmax | real | The maximum natural frequency in modal superposition method (optional). |
| fnmin | real | The minimum natural frequency in modal superposition method (optional). |
| include | integer | The [Include](primer-include-class.md) file number that the \*FREQUENCY\_DOMAIN\_SSD is in. |
| istress | integer | Stress computation flag (for option [FreqSSD.DIRECT](primer-freqssd-class.md#FreqSSD.DIRECT) only). |
| label (read only) | integer | The label the \*FREQUENCY\_DOMAIN\_SSD has in PRIMER. |
| lcdam | integer | [Load Curve](primer-curve-class.md) ID defining mode dependent modal damping coefficient. |
| lcflag | integer | Load curve definition flag. |
| lcftg | integer | [Load Curve](primer-curve-class.md) ID defining duration of excitation for each frequency (for option [FreqSSD.FATIGUE](primer-freqssd-class.md#FreqSSD.FATIGUE) only). |
| lctyp | integer | Type of load curve defining modal damping coefficient. |
| mdmax | integer | The last mode in modal superposition method (optional). |
| mdmin | integer | The first mode in modal superposition method (optional). |
| memory | integer | Memory flag. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*FREQUENCY\_DOMAIN\_SSD is in. |
| nerp | integer | Number of ERP panels. |
| notyp | integer | Type of NOUT. |
| nout | integer | [Part](primer-part-class.md), [part set, segment set, or node set](primer-set-class.md) ID for response output. |
| nova | integer | Response output type. |
| option | constant | The \*FREQUENCY\_DOMAIN\_SSD option. Can be [FreqSSD.DIRECT](primer-freqssd-class.md#FreqSSD.DIRECT), [FreqSSD.DIRECT_FD](primer-freqssd-class.md#FreqSSD.DIRECT_FD), [FreqSSD.FATIGUE](primer-freqssd-class.md#FreqSSD.FATIGUE), [FreqSSD.FRF](primer-freqssd-class.md#FreqSSD.FRF), [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP) or [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE). |
| radeff | integer | Radiation efficiency computation flag (for option [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP) only). |
| relatv | integer | Flag for displacement, velocity and acceleration results. |
| restdp | integer | Restart option. |
| restmd | integer | Restart option. |
| ro | real | Fluid density (for option [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP) only). |
| strtyp | integer | Stress used in fatigue analysis. |

| Detailed Description<br>The FreqSSD class allows you to create, modify, edit and manipulate \*FREQUENCY\_DOMAIN\_SSD.<br>See the documentation below for more details. |
| --- |

| Constructor
new FreqSSD(Model*[[Model](primer-model-class.md)]*, option*[constant]*)

Description<br>Create a new [FreqSSD](primer-freqssd-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*FREQUENCY\_DOMAIN\_SSD will be created in.

* option (constant)
 
Specify the type of \*FREQUENCY\_DOMAIN\_SSD. Can be [FreqSSD.DIRECT](primer-freqssd-class.md#FreqSSD.DIRECT), [FreqSSD.DIRECT_FD](primer-freqssd-class.md#FreqSSD.DIRECT_FD), [FreqSSD.FATIGUE](primer-freqssd-class.md#FreqSSD.FATIGUE), [FreqSSD.FRF](primer-freqssd-class.md#FreqSSD.FRF), [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP) or [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE).

| Returns
<br>[FreqSSD](primer-freqssd-class.md) object<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To create a new \*FREQUENCY\_DOMAIN\_SSD in model m, of type FATIGUE<br>
```
var f = new FreqSSD(m, FreqSSD.FATIGUE);
```
 |
| --- |

| Details of functions 
AddLoadData()

Description<br><br><br>Allows user to add a new load card in \*FREQUENCY\_DOMAIN\_SSD. This method is only applicable when option is not [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE).<br> <br>The new card has uninitialised fields and should be updated by [FreqSSD.SetLoadData()](primer-freqssd-class.md#FreqSSD::SetLoadData). |
| --- |

#### Arguments

No arguments

| Returns
<br>Index of the new load<br>
Return type
<br>integer |
| --- |

| Example
<br>To add a new load data card in \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.AddLoadData();
```
 |
| --- |

* * *

| AddSubcaseData()

Description<br><br><br>Allows user to add new subcase cards in \*FREQUENCY\_DOMAIN\_SSD. This method is only applicable when option is [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE).<br> <br>The new cards have uninitialised fields and should be updated by [FreqSSD.SetSubcaseData()](primer-freqssd-class.md#FreqSSD::SetSubcaseData). |
| --- |

#### Arguments

No arguments

| Returns
<br>Index of the new subcase<br>
Return type
<br>integer |
| --- |

| Example
<br>To add a new load data card in \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.AddSubcaseData();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*FREQUENCY\_DOMAIN\_SSD. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*FREQUENCY\_DOMAIN\_SSD

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*FREQUENCY\_DOMAIN\_SSD f:<br>
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
<br>To Browse \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*FREQUENCY\_DOMAIN\_SSD. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*FREQUENCY\_DOMAIN\_SSD

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*FREQUENCY\_DOMAIN\_SSD. The target include of the copied \*FREQUENCY\_DOMAIN\_SSD can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>FreqSSD object<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To copy \*FREQUENCY\_DOMAIN\_SSD f into \*FREQUENCY\_DOMAIN\_SSD z:<br>
```
var z = f.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a \*FREQUENCY\_DOMAIN\_SSD |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the \*FREQUENCY\_DOMAIN\_SSD will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>FreqSSD object (or null if not made).<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To start creating a \*FREQUENCY\_DOMAIN\_SSD in model m:<br>
```
var f = FreqSSD.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*FREQUENCY\_DOMAIN\_SSD. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*FREQUENCY\_DOMAIN\_SSD

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*FREQUENCY\_DOMAIN\_SSD f:<br>
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
<br>To Edit \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*FREQUENCY\_DOMAIN\_SSD. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*FREQUENCY\_DOMAIN\_SSD in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*FREQUENCY\_DOMAIN\_SSD in

| Returns
<br>FreqSSD object (or null if there are no \*FREQUENCY\_DOMAIN\_SSDs in the model).<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To get the first \*FREQUENCY\_DOMAIN\_SSD in model m:<br>
```
var f = FreqSSD.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*FREQUENCY\_DOMAIN\_SSDs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*FREQUENCY\_DOMAIN\_SSDs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*FREQUENCY\_DOMAIN\_SSDs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*FREQUENCY\_DOMAIN\_SSDs with flag f in model m:<br>
```
FreqSSD.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*FREQUENCY\_DOMAIN\_SSD is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*FREQUENCY\_DOMAIN\_SSD

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*FREQUENCY\_DOMAIN\_SSD f has flag f set on it:<br>
```
if (f.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*FREQUENCY\_DOMAIN\_SSD in the model.<br> **Note that ForEach has been designed to make looping over \*FREQUENCY\_DOMAIN\_SSDs as fast as possible and so has some limitations. Firstly, a single temporary FreqSSD object is created and on each function call it is updated with the current \*FREQUENCY\_DOMAIN\_SSD data. This means that you should not try to store the FreqSSD object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*FREQUENCY\_DOMAIN\_SSDs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*FREQUENCY\_DOMAIN\_SSDs are in

* func (function)
 
Function to call for each \*FREQUENCY\_DOMAIN\_SSD

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*FREQUENCY\_DOMAIN\_SSDs in model m:<br>
```
FreqSSD.ForEach(m, test);
function test(f)
{
// f is FreqSSD object
}
```
<br><br>To call function test for all of the \*FREQUENCY\_DOMAIN\_SSDs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
FreqSSD.ForEach(m, test, data);
function test(f, extra)
{
// f is FreqSSD object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of FreqSSD objects or properties for all of the \*FREQUENCY\_DOMAIN\_SSDs in a model in PRIMER. If the optional property argument is not given then an array of FreqSSD objects is returned. If the property argument is given, that property value for each \*FREQUENCY\_DOMAIN\_SSD is returned in the array instead of a FreqSSD object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*FREQUENCY\_DOMAIN\_SSDs from

* property (optional) (string)
 
Name for property to get for all \*FREQUENCY\_DOMAIN\_SSDs in the model

| Returns
<br>Array of FreqSSD objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of FreqSSD objects for all of the \*FREQUENCY\_DOMAIN\_SSDs in model m:<br>
```
var a = FreqSSD.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*FREQUENCY\_DOMAIN\_SSD in model m:<br>
```
var a = FreqSSD.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*FREQUENCY\_DOMAIN\_SSD. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var comm_array = f.GetComments();
```
 |
| --- |

* * *

| GetErpData(index*[integer]*)

Description<br><br><br>Returns the ERP data for a specific ERP part as an array. For each ERP part there will be 2 values. There are [nerp](primer-freqssd-class.md#nerp) ERP parts.<br> <br>This method is only applicable when option is [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP). |
| --- |

#### Arguments

* index (integer)
 
Index you want the ERP data for. **Note that indices start at 0**.

| Returns
<br>An array containing the ERP data (values: pid[integer], ptyp[integer]). The array length will be 2.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 3rd ERP part for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var edata = f.GetErpData(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of FreqSSD objects for all of the flagged \*FREQUENCY\_DOMAIN\_SSDs in a model in PRIMER If the optional property argument is not given then an array of FreqSSD objects is returned. If the property argument is given, then that property value for each \*FREQUENCY\_DOMAIN\_SSD is returned in the array instead of a FreqSSD object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*FREQUENCY\_DOMAIN\_SSDs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*FREQUENCY\_DOMAIN\_SSDs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*FREQUENCY\_DOMAIN\_SSDs in the model

| Returns
<br>Array of FreqSSD objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of FreqSSD objects for all of the \*FREQUENCY\_DOMAIN\_SSDs in model m flagged with f:<br>
```
var f = FreqSSD.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*FREQUENCY\_DOMAIN\_SSDs in model m flagged with f:<br>
```
var a = FreqSSD.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the FreqSSD object for a \*FREQUENCY\_DOMAIN\_SSD ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*FREQUENCY\_DOMAIN\_SSD in

* number (integer)
 
number of the \*FREQUENCY\_DOMAIN\_SSD you want the FreqSSD object for

| Returns
<br>FreqSSD object (or null if \*FREQUENCY\_DOMAIN\_SSD does not exist).<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To get the FreqSSD object for \*FREQUENCY\_DOMAIN\_SSD 100 in model m<br>
```
var f = FreqSSD.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetLoadData(index*[integer]*)

Description<br><br><br>Returns the data for a specific excitation load as an array. For each load there will be 8 values. There can be as many loads as needed.<br> <br>This method is only applicable when option is not [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index you want the load data for. **Note that indices start at 0**.

| Returns
<br><br><br>An array containing the load data (values: nid[integer], ntyp[integer], dof[integer], vad[integer], lc1[integer], lc2[integer], sf[real], vid[integer]).<br> <br>The array length will be 8.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 4th load for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var ldata = f.GetLoadData(3);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a FreqSSD property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [FreqSSD.ViewParameters()](primer-freqssd-class.md#FreqSSD::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*FREQUENCY\_DOMAIN\_SSD property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if FreqSSD property f.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (f.GetParameter(f.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if FreqSSD property f.example is a parameter by using the GetParameter method:<br>
```
if (f.ViewParameters().GetParameter(f.example) ) do_something...
```
 |
| --- |

* * *

| GetSubcaseData(index*[integer]*)

Description<br><br><br>Returns the data for a specific subcase as an array. For each subcase there will be 3 + 8 x nload values. There can be as many subcases as needed.<br> <br>This method is only applicable when option is [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index you want the subcase data for. **Note that indices start at 0**.

| Returns
<br><br><br>An array containing the subcase data (values: caseid[string], title[string], nload[integer], nid[integer], ntyp[integer], dof[integer], vad[integer], lc1[integer], lc2[integer], sf[real], vid[integer], ...)<br> <br>Where values nid to vid are repeated nload times in the array. The array length will be 3 + 8 x nload.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 2nd subcase for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var sdata = f.GetSubcaseData(1);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*FREQUENCY\_DOMAIN\_SSD. **Note that a carriage return is not added**. See also [FreqSSD.KeywordCards()](primer-freqssd-class.md#FreqSSD::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var key = f.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*FREQUENCY\_DOMAIN\_SSD. **Note that a carriage return is not added**. See also [FreqSSD.Keyword()](primer-freqssd-class.md#FreqSSD::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var cards = f.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*FREQUENCY\_DOMAIN\_SSD in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*FREQUENCY\_DOMAIN\_SSD in

| Returns
<br>FreqSSD object (or null if there are no \*FREQUENCY\_DOMAIN\_SSDs in the model).<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To get the last \*FREQUENCY\_DOMAIN\_SSD in model m:<br>
```
var f = FreqSSD.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*FREQUENCY\_DOMAIN\_SSD in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>FreqSSD object (or null if there are no more \*FREQUENCY\_DOMAIN\_SSDs in the model).<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To get the \*FREQUENCY\_DOMAIN\_SSD in model m after \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var f = f.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*FREQUENCY\_DOMAIN\_SSD in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>FreqSSD object (or null if there are no more \*FREQUENCY\_DOMAIN\_SSDs in the model).<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To get the \*FREQUENCY\_DOMAIN\_SSD in model m before \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var f = f.Previous();
```
 |
| --- |

* * *

| RemoveLoadData(index*[integer]*)

Description<br><br><br>Allows user to remove a specified load card in \*FREQUENCY\_DOMAIN\_SSD.<br> <br>This method is only applicable when option is not [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index of the load card you want to remove. **Note that indices start at 0**.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove first load card in \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.RemoveLoadData(0);
```
 |
| --- |

* * *

| RemoveSubcaseData(index*[integer]*)

Description<br><br><br>Allows user to remove cards for a specified subcase in \*FREQUENCY\_DOMAIN\_SSD.<br> <br>This method is only applicable when option is [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index of the subcase you want to remove cards for. **Note that indices start at 0**.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove cards corresponding to the second subcase in \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.RemoveSubcaseData(1);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*FREQUENCY\_DOMAIN\_SSDs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*FREQUENCY\_DOMAIN\_SSDs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*FREQUENCY\_DOMAIN\_SSDs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*FREQUENCY\_DOMAIN\_SSDs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*FREQUENCY\_DOMAIN\_SSDs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*FREQUENCY\_DOMAIN\_SSDs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*FREQUENCY\_DOMAIN\_SSDs from model m, flagging those selected with flag f, giving the prompt 'Select \*FREQUENCY\_DOMAIN\_SSDs':<br>
```
FreqSSD.Select(f, 'Select *FREQUENCY_DOMAIN_SSDs', m);
```
<br><br>To select \*FREQUENCY\_DOMAIN\_SSDs, flagging those selected with flag f but limiting selection to \*FREQUENCY\_DOMAIN\_SSDs flagged with flag l, giving the prompt 'Select \*FREQUENCY\_DOMAIN\_SSDs':<br>
```
FreqSSD.Select(f, 'Select *FREQUENCY_DOMAIN_SSDs', l);
```
 |
| --- |

* * *

| SetErpData(index*[integer]*, data*[Array of data]*)

Description<br><br><br>Set the data for a specific ERP part. For each ERP part there will be 2 values. There are [nerp](primer-freqssd-class.md#nerp) ERP parts.<br> <br>This method is only applicable when option is [FreqSSD.ERP](primer-freqssd-class.md#FreqSSD.ERP). |
| --- |

#### Arguments

* index (integer)
 
Index you want to set ERP data for. **Note that indices start at 0**.

* data (Array of data)
 
An array containing the ERP data (values: pid[integer], ptyp[integer]). The array length should be 2.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd ERP part data for \*FREQUENCY\_DOMAIN\_SSD f to the values in array edata:<br>
```
f.SetErpData(2, edata);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*FREQUENCY\_DOMAIN\_SSD. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*FREQUENCY\_DOMAIN\_SSD

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.SetFlag(f);
```
 |
| --- |

* * *

| SetLoadData(index*[integer]*, data*[Array of data]*)

Description<br><br><br>Set the data for a specific excitation load. For each load there will be 8 values. There can be as many loads as needed.<br> <br>This method is only applicable when option is not [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index you want to set load data for. **Note that indices start at 0**.

* data (Array of data)

An array containing the load data (values: nid[integer], ntyp[integer], dof[integer], vad[integer], lc1[integer], lc2[integer], sf[real], vid[integer]).
 
The array length should be 8.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 4th load data for \*FREQUENCY\_DOMAIN\_SSD f to the values in array ldata:<br>
```
f.SetLoadData(3, ldata);
```
 |
| --- |

* * *

| SetSubcaseData(index*[integer]*, caseid*[string]*, title*[string]*, nload*[integer]*, data*[Array of data]*)

Description<br><br><br>Set the data for a specific subcase. For each subcase, data will have 8 x nload values. There can be as many subcases as needed.<br> <br>This method is only applicable when option is [FreqSSD.SUBCASE](primer-freqssd-class.md#FreqSSD.SUBCASE). |
| --- |

#### Arguments

* index (integer)
 
Index you want to set subcase data for. **Note that indices start at 0**.

* caseid (string)
 
Identification string to be used as the case ID (must include at least one letter).

* title (string)
 
A description of the current loading case (can be blank).

* nload (integer)
 
Number of loads for this loading case.

* data (Array of data)

An array containing the subcase load data (values: nid[integer], ntyp[integer], dof[integer], vad[integer], lc1[integer], lc2[integer], sf[real], vid[integer], ...)
 
Where values nid to vid are repeated nload times in the array. The array length should be 8 x nload.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 2nd subcase data for \*FREQUENCY\_DOMAIN\_SSD f to have caseid "ID2", no title, 2 load cards and load data of ldata:<br>
```
f.SetSubcaseData(1, "ID2", "", 2, ldata);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*FREQUENCY\_DOMAIN\_SSDs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*FREQUENCY\_DOMAIN\_SSDs should be counted. If false or omitted
referenced but undefined \*FREQUENCY\_DOMAIN\_SSDs will also be included in the total.

| Returns
<br>number of \*FREQUENCY\_DOMAIN\_SSDs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*FREQUENCY\_DOMAIN\_SSDs in model m:<br>
```
var total = FreqSSD.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*FREQUENCY\_DOMAIN\_SSDs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*FREQUENCY\_DOMAIN\_SSDs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*FREQUENCY\_DOMAIN\_SSDs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*FREQUENCY\_DOMAIN\_SSDs in model m:<br>
```
FreqSSD.UnflagAll(m, f);
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
<br>[FreqSSD](primer-freqssd-class.md) object.<br>
Return type
<br>FreqSSD |
| --- |

| Example
<br>To check if FreqSSD property f.example is a parameter by using the [FreqSSD.GetParameter()](primer-freqssd-class.md#FreqSSD::GetParameter) method:<br>
```
if (f.ViewParameters().GetParameter(f.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*FREQUENCY\_DOMAIN\_SSD. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
f.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*FREQUENCY\_DOMAIN\_SSD. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*FREQUENCY\_DOMAIN\_SSD f:<br>
```
var xrefs = f.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the \*FREQUENCY\_DOMAIN\_SSD data in keyword format. Note that this contains the keyword header and the keyword cards. See also [FreqSSD.Keyword()](primer-freqssd-class.md#FreqSSD::Keyword) and [FreqSSD.KeywordCards()](primer-freqssd-class.md#FreqSSD::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for \*FREQUENCY\_DOMAIN\_SSD f in keyword format<br>
```
var s = f.toString();
```
 |
| --- |

* * *