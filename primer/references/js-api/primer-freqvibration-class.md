# FreqVibration class

The FreqVibration class gives you access to \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION keyword in PRIMER. [More...](primer-freqvibration-class.md#FreqVibration_details)

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

* [Create](primer-freqvibration-class.md#FreqVibration::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-freqvibration-class.md#FreqVibration::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-freqvibration-class.md#FreqVibration::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-freqvibration-class.md#FreqVibration::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-freqvibration-class.md#FreqVibration::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetAutoPsdLoadData](primer-freqvibration-class.md#FreqVibration::GetAutoPsdLoadData)(index*[integer]*)
* [GetCrossPsdLoadData](primer-freqvibration-class.md#FreqVibration::GetCrossPsdLoadData)(index*[integer]*)
* [GetFlagged](primer-freqvibration-class.md#FreqVibration::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-freqvibration-class.md#FreqVibration::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [GetInftgData](primer-freqvibration-class.md#FreqVibration::GetInftgData)(index*[integer]*)
* [GetSNCurveData](primer-freqvibration-class.md#FreqVibration::GetSNCurveData)(index*[integer]*)
* [Last](primer-freqvibration-class.md#FreqVibration::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-freqvibration-class.md#FreqVibration::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SetAutoPsdLoadData](primer-freqvibration-class.md#FreqVibration::SetAutoPsdLoadData)(index*[integer]*, data*[Array of data]*)
* [SetCrossPsdLoadData](primer-freqvibration-class.md#FreqVibration::SetCrossPsdLoadData)(index*[integer]*, data*[Array of data]*)
* [SetInftgData](primer-freqvibration-class.md#FreqVibration::SetInftgData)(index*[integer]*, filename*[string]*)
* [SetSNCurveData](primer-freqvibration-class.md#FreqVibration::SetSNCurveData)(index*[integer]*, data*[Array of data]*)
* [Total](primer-freqvibration-class.md#FreqVibration::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-freqvibration-class.md#FreqVibration::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AddAutoPsdLoadData](primer-freqvibration-class.md#FreqVibration::AddAutoPsdLoadData)()
* [AddCrossPsdLoadData](primer-freqvibration-class.md#FreqVibration::AddCrossPsdLoadData)()
* [AddInftgData](primer-freqvibration-class.md#FreqVibration::AddInftgData)()
* [AddSNCurveData](primer-freqvibration-class.md#FreqVibration::AddSNCurveData)()
* [AssociateComment](primer-freqvibration-class.md#FreqVibration::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-freqvibration-class.md#FreqVibration::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-freqvibration-class.md#FreqVibration::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-freqvibration-class.md#FreqVibration::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-freqvibration-class.md#FreqVibration::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-freqvibration-class.md#FreqVibration::Edit)(modal (optional)*[boolean]*)
* [Error](primer-freqvibration-class.md#FreqVibration::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-freqvibration-class.md#FreqVibration::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-freqvibration-class.md#FreqVibration::GetComments)()
* [GetParameter](primer-freqvibration-class.md#FreqVibration::GetParameter)(prop*[string]*)
* [Keyword](primer-freqvibration-class.md#FreqVibration::Keyword)()
* [KeywordCards](primer-freqvibration-class.md#FreqVibration::KeywordCards)()
* [Next](primer-freqvibration-class.md#FreqVibration::Next)()
* [Previous](primer-freqvibration-class.md#FreqVibration::Previous)()
* [RemoveAutoPsdLoadData](primer-freqvibration-class.md#FreqVibration::RemoveAutoPsdLoadData)(index*[integer]*)
* [RemoveCrossPsdLoadData](primer-freqvibration-class.md#FreqVibration::RemoveCrossPsdLoadData)(index*[integer]*)
* [RemoveInftgData](primer-freqvibration-class.md#FreqVibration::RemoveInftgData)(index*[integer]*)
* [RemoveSNCurveData](primer-freqvibration-class.md#FreqVibration::RemoveSNCurveData)(index*[integer]*)
* [SetFlag](primer-freqvibration-class.md#FreqVibration::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-freqvibration-class.md#FreqVibration::ViewParameters)()
* [Warning](primer-freqvibration-class.md#FreqVibration::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-freqvibration-class.md#FreqVibration::Xrefs)()
* [toString](primer-freqvibration-class.md#FreqVibration::toString)()

## FreqVibration constants

| **Name** | **Description** |
| --- | --- |
| FreqVibration.FATIGUE | FreqVibration option for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION\_FATIGUE. |
| FreqVibration.VIBRATION | FreqVibration option for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |

## FreqVibration properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dampf | real | Modal damping coefficient. |
| dmpmas | real | Mass proportional damping constant in Rayleigh damping. |
| dmpstf | real | Stiffness proportional damping constant in Rayleigh damping. |
| dmptyp | integer | Tytpe of Damping. |
| exists (read only) | logical | true if \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION exists, false if referred to but not defined. |
| fnmax | real | The maximum natural frequency in modal superposition method (optional). |
| fnmin | real | The minimum natural frequency in modal superposition method (optional). |
| icoarse | integer | Option for PSD curve coarsening. |
| include | integer | The [Include](primer-include-class.md) file number that the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION is in. |
| inftg | integer | Flag for including initial damage ratio. |
| ipanelu | integer | Number of strips in U-direction (used only for vaflag = 5,6,7). |
| ipanelv | integer | Number of strips in V-direction (used only for vaflag = 5,6,7). |
| label (read only) | integer | The label the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION has in PRIMER. |
| lcdam | integer | [Load Curve](primer-curve-class.md) ID defining mode dependent modal damping coefficient. |
| lctyp | integer | Type of load curve defining modal damping coefficient. |
| ldflag | integer | Type of loading curves. |
| ldtyp | Integer | Excitation load type. |
| mdmax | integer | The last mode in modal superposition method (optional). |
| mdmin | integer | The first mode in modal superposition method (optional). |
| method | integer | Method for modal response analysis. |
| mftg | integer | Method for random fatigue analysis. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION is in. |
| napsd | integer | Number of auto PSD load definition. |
| ncpsd | integer | Number of cross PSD load definition. |
| nftg | integer | Field specifying the number of S-N curves to be defined. |
| option | constant | The \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION option. Can be [FreqVibration.VIBRATION](primer-freqvibration-class.md#FreqVibration.VIBRATION), [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE). |
| pref | real | Reference pressure |
| restrm | integer | Restart option. |
| restrt | integer | Restart option. |
| strsf | real | Stress scale factor to accommodate different ordinates in S-N curve (not used if nftg = -999). |
| strtyp | integer | Stress type of S-N curve in fatigue analysis. |
| tcoarse | real | Tolerance for slope change percentage for removing intermediate points from PSD curve for icoarse = 2. |
| temper | real | Temperature. |
| texpos | real | Exposure time. |
| umlt | real | Multiplier for converting g to [length unit]/[time unit]^2 (used only for UNIT = -1). |
| unit | integer | Flag for acceleration unit conversion. |
| vaflag | integer | Loading type. |
| vapsd | integer | Flag for PSD output. |
| varms | integer | Flag for RMS output. |

| Detailed Description<br>The FreqVibration class allows you to create, modify, edit and manipulate \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION.<br>See the documentation below for more details. |
| --- |

| Constructor
new FreqVibration(Model*[[Model](primer-model-class.md)]*, option*[constant]*)

Description<br>Create a new [FreqVibration](primer-freqvibration-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION will be created in.

* option (constant)
 
Specify the type of \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. Can be [FreqVibration.VIBRATION](primer-freqvibration-class.md#FreqVibration.VIBRATION), [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE).

| Returns
<br>[FreqVibration](primer-freqvibration-class.md) object<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To create a new \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in model m, of type FATIGUE<br>
```
var f = new FreqVibration(m, FreqVibration.FATIGUE);
```
 |
| --- |

| Details of functions 
AddAutoPsdLoadData()

Description<br><br><br>Allows user to add a new Auto PSD load card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION.<br> <br>The new card has uninitialised fields and should be updated by [FreqVibration.SetAutoPsdLoadData()](primer-freqvibration-class.md#FreqVibration::SetAutoPsdLoadData). |
| --- |

#### Arguments

No arguments

| Returns
<br>Index of the new auto PSD load<br>
Return type
<br>integer |
| --- |

| Example
<br>To add a new auto PSD load data card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.AddAutoPsdLoadData();
```
 |
| --- |

* * *

| AddCrossPsdLoadData()

Description<br><br><br>Allows user to add a new Cross PSD load card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION.<br> <br>The new card has uninitialised fields and should be updated by [FreqVibration.SetCrossPsdLoadData()](primer-freqvibration-class.md#FreqVibration::SetCrossPsdLoadData). |
| --- |

#### Arguments

No arguments

| Returns
<br>Index of the new cross PSD load<br>
Return type
<br>integer |
| --- |

| Example
<br>To add a new cross PSD load data card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.AddCrossPsdLoadData();
```
 |
| --- |

* * *

| AddInftgData()

Description<br><br><br>Allows user to add new Initial Damage cards in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE).<br> <br>The new cards have uninitialised fields and should be updated by [FreqVibration.SetInftgData()](primer-freqvibration-class.md#FreqVibration::SetInftgData). |
| --- |

#### Arguments

No arguments

| Returns
<br>Index of the new initial damage card<br>
Return type
<br>integer |
| --- |

| Example
<br>To add a new initial damage card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.AddInftgData();
```
 |
| --- |

* * *

| AddSNCurveData()

Description<br><br><br>Allows user to add new S-N curve cards in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE).<br> <br>The new cards have uninitialised fields and should be updated by [FreqVibration.SetSNCurveData()](primer-freqvibration-class.md#FreqVibration::SetSNCurveData). |
| --- |

#### Arguments

No arguments

| Returns
<br>Index of the new S-N curve card<br>
Return type
<br>integer |
| --- |

| Example
<br>To add a new S-N curve card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.AddSNCurveData();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
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
<br>To Browse \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. The target include of the copied \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>FreqVibration object<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To copy \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f into \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION z:<br>
```
var z = f.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>FreqVibration object (or null if not made).<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To start creating a \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in model m:<br>
```
var f = FreqVibration.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
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
<br>To Edit \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in

| Returns
<br>FreqVibration object (or null if there are no \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model).<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To get the first \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in model m:<br>
```
var f = FreqVibration.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs with flag f in model m:<br>
```
FreqVibration.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f has flag f set on it:<br>
```
if (f.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in the model.<br> **Note that ForEach has been designed to make looping over \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs as fast as possible and so has some limitations. Firstly, a single temporary FreqVibration object is created and on each function call it is updated with the current \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION data. This means that you should not try to store the FreqVibration object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs are in

* func (function)
 
Function to call for each \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in model m:<br>
```
FreqVibration.ForEach(m, test);
function test(f)
{
// f is FreqVibration object
}
```
<br><br>To call function test for all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
FreqVibration.ForEach(m, test, data);
function test(f, extra)
{
// f is FreqVibration object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of FreqVibration objects or properties for all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in a model in PRIMER. If the optional property argument is not given then an array of FreqVibration objects is returned. If the property argument is given, that property value for each \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION is returned in the array instead of a FreqVibration object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs from

* property (optional) (string)
 
Name for property to get for all \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model

| Returns
<br>Array of FreqVibration objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of FreqVibration objects for all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in model m:<br>
```
var a = FreqVibration.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in model m:<br>
```
var a = FreqVibration.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetAutoPsdLoadData(index*[integer]*) [static]
Description<br><br><br>Returns the Auto PSD load data for a specific Auto PSD Load definition as an array. For each Auto PSD load definition there will be 8 values. There are [napsd](primer-freqvibration-class.md#napsd) Auto PSD load definitions. |
| --- |

#### Arguments

* index (integer)
 
Index you want the Auto PSD load data for. **Note that indices start at 0**.

| Returns
<br>An array containing the Auto PSD load data (values: sid[integer], stype[integer], dof[integer], ldpsd[integer], ldvel[integer], ldflw[integer], ldspn[integer], cid[integer]). The array length will be 8.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 3rd Auto PSD load data for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var apsd_data = f.GetAutoPsdLoadData(2);
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var comm_array = f.GetComments();
```
 |
| --- |

* * *

| GetCrossPsdLoadData(index*[integer]*) [static]
Description<br><br><br>Returns the Cross PSD load data for a specific Cross PSD Load definition as an array. For each Cross PSD load definition there will be 5 values. There are [ncpsd](primer-freqvibration-class.md#ncpsd) Cross PSD load definitions. |
| --- |

#### Arguments

* index (integer)
 
Index you want the Cross PSD load data for. **Note that indices start at 0**.

| Returns
<br>An array containing the Cross PSD load data (values: load\_i[integer], load\_j[integer], lctyp2[integer], ldpsd1[integer], ldpsd2[integer]). The array length will be 5.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 3rd Cross PSD load data for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var cpsd_data = f.GetCrossPsdLoadData(2);
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of FreqVibration objects for all of the flagged \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in a model in PRIMER If the optional property argument is not given then an array of FreqVibration objects is returned. If the property argument is given, then that property value for each \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION is returned in the array instead of a FreqVibration object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model

| Returns
<br>Array of FreqVibration objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of FreqVibration objects for all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in model m flagged with f:<br>
```
var f = FreqVibration.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in model m flagged with f:<br>
```
var a = FreqVibration.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the FreqVibration object for a \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in

* number (integer)
 
number of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION you want the FreqVibration object for

| Returns
<br>FreqVibration object (or null if \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION does not exist).<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To get the FreqVibration object for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION 100 in model m<br>
```
var f = FreqVibration.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetInftgData(index*[integer]*) [static]
Description<br><br><br>Returns the path and filename of a binary database for fatigue information from a specific initial damage card. There are [inftg](primer-freqvibration-class.md#inftg) filenames.<br> <br>This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE). |
| --- |

#### Arguments

* index (integer)
 
Index of an initial damage card that you want the filename from. **Note that indices start at 0**.

| Returns
<br>Return value from an initial damage card (values: filename[string])<br>
Return type
<br>String |
| --- |

| Example
<br>To get the filename from the 2nd initial damage card for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var fdata = f.GetInftgData(1);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a FreqVibration property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [FreqVibration.ViewParameters()](primer-freqvibration-class.md#FreqVibration::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if FreqVibration property f.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (f.GetParameter(f.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if FreqVibration property f.example is a parameter by using the GetParameter method:<br>
```
if (f.ViewParameters().GetParameter(f.example) ) do_something...
```
 |
| --- |

* * *

| GetSNCurveData(index*[integer]*) [static]
Description<br><br><br>Returns the data of a specific zone for fatigue analysis as an array. For each zone there will be 8 values. There are [nftg](primer-freqvibration-class.md#nftg) zone definitions for fatigue analysis.<br> <br>This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE). |
| --- |

#### Arguments

* index (integer)
 
Index you want the zone data for. **Note that indices start at 0**.

| Returns
<br><br><br>An array containing the zone data (values: pid[integer], lcid[integer], ptype[integer], ltype[integer], a[real], b[real], sthres[real], snlimt[integer]).<br> <br>The array length will be 8.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 4th zone for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var sndata = f.GetSNCurveData(3);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. **Note that a carriage return is not added**. See also [FreqVibration.KeywordCards()](primer-freqvibration-class.md#FreqVibration::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var key = f.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. **Note that a carriage return is not added**. See also [FreqVibration.Keyword()](primer-freqvibration-class.md#FreqVibration::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var cards = f.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in

| Returns
<br>FreqVibration object (or null if there are no \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model).<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To get the last \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in model m:<br>
```
var f = FreqVibration.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>FreqVibration object (or null if there are no more \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model).<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To get the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in model m after \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var f = f.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>FreqVibration object (or null if there are no more \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model).<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To get the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION in model m before \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var f = f.Previous();
```
 |
| --- |

* * *

| RemoveAutoPsdLoadData(index*[integer]*)

Description<br><br><br>Allows user to remove a specified Auto PSD load card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

* index (integer)
 
Index of the auto PSD load card you want to remove. **Note that indices start at 0**.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove first load card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.RemoveAutoPsdLoadData(0);
```
 |
| --- |

* * *

| RemoveCrossPsdLoadData(index*[integer]*)

Description<br><br><br>Allows user to remove a specified Cross PSD load card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

* index (integer)
 
Index of the cross PSD load card you want to remove. **Note that indices start at 0**.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove third load card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.RemoveCrossPsdLoadData(2);
```
 |
| --- |

* * *

| RemoveInftgData(index*[integer]*)

Description<br><br><br>Allows user to remove a specified Initial Damage card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION.<br> <br>This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE). |
| --- |

#### Arguments

* index (integer)
 
Index of the Initrial Damage card you want to remove. **Note that indices start at 0**.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove second Initial Damage card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.RemoveInftgData(1);
```
 |
| --- |

* * *

| RemoveSNCurveData(index*[integer]*)

Description<br><br><br>Allows user to remove a specified S-N curve card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION.<br> <br>This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE). |
| --- |

#### Arguments

* index (integer)
 
Index of the S-N curve card you want to remove. **Note that indices start at 0**.

| Returns
<br>No return value |
| --- |

| Example
<br>To remove second S-N curve card in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.RemoveSNCurveData(1);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs from model m, flagging those selected with flag f, giving the prompt 'Select \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs':<br>
```
FreqVibration.Select(f, 'Select *FREQUENCY_DOMAIN_RANDOM_VIBRATIONs', m);
```
<br><br>To select \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs, flagging those selected with flag f but limiting selection to \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs flagged with flag l, giving the prompt 'Select \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs':<br>
```
FreqVibration.Select(f, 'Select *FREQUENCY_DOMAIN_RANDOM_VIBRATIONs', l);
```
 |
| --- |

* * *

| SetAutoPsdLoadData(index*[integer]*, data*[Array of data]*) [static]
Description<br><br><br>Set the data for a specific Auto PSD load card. For each Auto PSD load card there will be 8 values. There are [napsd](primer-freqvibration-class.md#napsd) Auto PSD load cards. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set Auto PSD load data for. **Note that indices start at 0**.

* data (Array of data)
 
An array containing the Auto PSD load data (values: sid[integer], stype[integer], dof[integer], ldpsd[integer], ldvel[integer], ldflw[integer], ldspn[integer], cid[integer]). The array length should be 8.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd Auto PSD load data for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f to the values in array adata:<br>
```
f.SetAutoPsdLoadData(2, adata);
```
 |
| --- |

* * *

| SetCrossPsdLoadData(index*[integer]*, data*[Array of data]*) [static]
Description<br><br><br>Set the data for a specific Cross PSD load card. For each Cross PSD load card there will be 5 values. There are [ncpsd](primer-freqvibration-class.md#ncpsd) Cross PSD load cards. |
| --- |

#### Arguments

* index (integer)
 
Index you want to set Cross PSD load data for. **Note that indices start at 0**.

* data (Array of data)
 
An array containing the Cross PSD load data (values: load\_i[integer], load\_j[integer], lctyp2[integer], ldpsd1[integer], ldpsd2[integer]). The array length should be 5.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 4th Cross PSD load data for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f to the values in array cdata:<br>
```
f.SetCrossPsdLoadData(2, cdata);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.SetFlag(f);
```
 |
| --- |

* * *

| SetInftgData(index*[integer]*, filename*[string]*) [static]
Description<br><br><br>Set the filename data for an existing binary database for fatigue infromation for a specific initial damage card. There are [inftg](primer-freqvibration-class.md#inftg) filenames.<br> <br>This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE). |
| --- |

#### Arguments

* index (integer)
 
Index of an initial damage card that you want the filename for. **Note that indices start at 0**.

* filename (string)
 
Path and name of existing binary database fro fatigue information.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the file name for the 2nd initial damage card of \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f to have filename "d3ftg":<br>
```
f.SetInftgData(1, "d3ftg");
```
 |
| --- |

* * *

| SetSNCurveData(index*[integer]*, data*[Array of data]*) [static]
Description<br>Set the data for a specific zone for fatigue analysis. For each zone there will be 8 values. There are [nftg](primer-freqvibration-class.md#nftg) zone definitions for fatigue analysis. This method is only applicable when option is [FreqVibration.FATIGUE](primer-freqvibration-class.md#FreqVibration.FATIGUE). |
| --- |

#### Arguments

* index (integer)
 
Index you want to set the fatigue analysis zone data for. **Note that indices start at 0**.

* data (Array of data)
 
An array containing the zone data (values: pid[integer], lcid[integer], ptype[integer], ltype[integer], a[float], b[float], sthres[float], snlimt[integer]). The array length will be 8.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the data for 4th fatigue analysis zone in \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f to the values in array sndata:<br>
```
f.SetSNCurveData(3, sndata);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs should be counted. If false or omitted
referenced but undefined \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs will also be included in the total.

| Returns
<br>number of \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in model m:<br>
```
var total = FreqVibration.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATIONs in model m:<br>
```
FreqVibration.UnflagAll(m, f);
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
<br>[FreqVibration](primer-freqvibration-class.md) object.<br>
Return type
<br>FreqVibration |
| --- |

| Example
<br>To check if FreqVibration property f.example is a parameter by using the [FreqVibration.GetParameter()](primer-freqvibration-class.md#FreqVibration::GetParameter) method:<br>
```
if (f.ViewParameters().GetParameter(f.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
f.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f:<br>
```
var xrefs = f.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION data in keyword format. Note that this contains the keyword header and the keyword cards. See also [FreqVibration.Keyword()](primer-freqvibration-class.md#FreqVibration::Keyword) and [FreqVibration.KeywordCards()](primer-freqvibration-class.md#FreqVibration::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for \*FREQUENCY\_DOMAIN\_RANDOM\_VIBRATION f in keyword format<br>
```
var s = f.toString();
```
 |
| --- |

* * *