# SensorDefine class

The SensorDefine class gives you access to \*SENSOR\_DEFINE keyword in PRIMER. [More...](primer-sensordefine-class.md#SensorDefine_details)

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

* [Create](primer-sensordefine-class.md#SensorDefine::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-sensordefine-class.md#SensorDefine::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-sensordefine-class.md#SensorDefine::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-sensordefine-class.md#SensorDefine::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-sensordefine-class.md#SensorDefine::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-sensordefine-class.md#SensorDefine::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-sensordefine-class.md#SensorDefine::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-sensordefine-class.md#SensorDefine::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-sensordefine-class.md#SensorDefine::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-sensordefine-class.md#SensorDefine::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-sensordefine-class.md#SensorDefine::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-sensordefine-class.md#SensorDefine::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-sensordefine-class.md#SensorDefine::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-sensordefine-class.md#SensorDefine::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-sensordefine-class.md#SensorDefine::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-sensordefine-class.md#SensorDefine::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-sensordefine-class.md#SensorDefine::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-sensordefine-class.md#SensorDefine::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-sensordefine-class.md#SensorDefine::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-sensordefine-class.md#SensorDefine::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-sensordefine-class.md#SensorDefine::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-sensordefine-class.md#SensorDefine::Edit)(modal (optional)*[boolean]*)
* [Error](primer-sensordefine-class.md#SensorDefine::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-sensordefine-class.md#SensorDefine::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-sensordefine-class.md#SensorDefine::GetComments)()
* [GetParameter](primer-sensordefine-class.md#SensorDefine::GetParameter)(prop*[string]*)
* [Keyword](primer-sensordefine-class.md#SensorDefine::Keyword)()
* [KeywordCards](primer-sensordefine-class.md#SensorDefine::KeywordCards)()
* [Next](primer-sensordefine-class.md#SensorDefine::Next)()
* [Previous](primer-sensordefine-class.md#SensorDefine::Previous)()
* [SetFlag](primer-sensordefine-class.md#SensorDefine::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-sensordefine-class.md#SensorDefine::ViewParameters)()
* [Warning](primer-sensordefine-class.md#SensorDefine::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-sensordefine-class.md#SensorDefine::Xrefs)()
* [toString](primer-sensordefine-class.md#SensorDefine::toString)()

## SensorDefine constants

| **Name** | **Description** |
| --- | --- |
| SensorDefine.DEFINE\_CALC\_MATH | Sensor define is \*SENSOR\_DEFINE\_CALC\_MATH. |
| SensorDefine.DEFINE\_ELEMENT | Sensor define is \*SENSOR\_DEFINE\_ELEMENT. |
| SensorDefine.DEFINE\_ELEMENT\_SET | Sensor define is \*SENSOR\_DEFINE\_ELEMENT\_SET. |
| SensorDefine.DEFINE\_FORCE | Sensor define is \*SENSOR\_DEFINE\_FORCE. |
| SensorDefine.DEFINE\_FUNCTION | Sensor define is \*SENSOR\_DEFINE\_FUNCTION. |
| SensorDefine.DEFINE\_MISC | Sensor define is \*SENSOR\_DEFINE\_MISC. |
| SensorDefine.DEFINE\_NODE | Sensor define is \*SENSOR\_DEFINE\_NODE. |
| SensorDefine.DEFINE\_NODE\_SET | Sensor define is \*SENSOR\_DEFINE\_NODE\_SET. |

## SensorDefine properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| calc | string | Mathematical calculation. Can be "ABSSUM", "MIN", "MAX", "MAXMAG", "MINMAG", "MULTIPLY", "SQRE", "SQRTSQRE", "SQRT", "SUMABS", "SUM" . |
| comp | string | Component type. Can be "XX", "YY", "ZZ", "XY", "YZ", "ZX", "HYDR", "MAXS", "PRIN1", "PRIN2", PRIN3", "VM", "F[ID]", "AXIAL", "SHEARS", "SHEART". |
| crd | integer | Optional coordinate system. |
| ctype | string | Sensor type or Output component type. Can be "STRAIN", "STRESS", "FORCE", "MOMENT", "DLEN" or "FAIL" for [SensorDefine.DEFINE_ELEMENT](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT) or [SensorDefine.DEFINE_ELEMENT_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT_SET) and "ACC", "VEL", "COORD" or "TEMP" for [SensorDefine.DEFINE_NODE](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE) or [SensorDefine.DEFINE_NODE_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE_SET) |
| elemid | integer | Element ID or element set ID when option\_SET is active. |
| etype | string | Element type. Can be "BEAM", "SHELL", "SOLID", "DISC-ELE", "SEATBELT" or "TSHELL". |
| exists (read only) | logical | true if \*SENSOR\_DEFINE exists, false if referred to but not defined. |
| ftype | string | Force type. Can be "AIRBAG", "CONTACT", "CONTACT2D", "CPM", "JOINT", "JOINTSTIF", "PRESC-MOT", "RWALL", "SPC", "SPOTWELD", "X-SECTION". |
| func | integer | Function ID. |
| func\_sens1 | integer | 1st Sensor ID if positive or number of sensor ID if negative. |
| func\_sens10 | integer | 10th Sensor ID. |
| func\_sens11 | integer | 11th Sensor ID. |
| func\_sens12 | integer | 12th Sensor ID. |
| func\_sens13 | integer | 13th Sensor ID. |
| func\_sens14 | integer | 14th Sensor ID. |
| func\_sens15 | integer | 15th Sensor ID. |
| func\_sens16 | integer | 16th Sensor ID. |
| func\_sens2 | integer | 2nd Sensor ID. |
| func\_sens3 | integer | 3rd Sensor ID. |
| func\_sens4 | integer | 4th Sensor ID. |
| func\_sens5 | integer | 5th Sensor ID. |
| func\_sens6 | integer | 6th Sensor ID. |
| func\_sens7 | integer | 7th Sensor ID. |
| func\_sens8 | integer | 8th Sensor ID. |
| func\_sens9 | integer | 9th Sensor ID. |
| i0 | string | I0. Can be "ADDMASS", "KINETIC", "INTERNAL", "ERODEKE", or "ERODEIE" when MTYPE = "MATSUM" or "SOLID", "SHELL", "TSHELL", "BEAM", or "DISC" when MTYPE = "NFAILE" or "TEMP", or "VOL" when MTYPE = "CVBAG", or "PRES", or "VOL" when MTYPE = "ICVOL", or "PULLRATE", "PULLOUT" or "FORCE" when MTYPE = "RETRACTOR". |
| i1 | integer/string | I1. Applicable for "ANGLE", "BNDOUT", "CURVE", "CVBAG", "ICVOL", "MATSUM" or "NFAILE". |
| i2 | integer/string | I2. Applicable only for when MTYPE = "ANGLE". |
| i3 | integer/string | I3. Applicable only for MTYPE = "ANGLE". |
| i4 | integer/string | I4. Applicable only for MTYPE = "ANGLE". |
| i5 | string | I5. |
| include | integer | The [Include](primer-include-class.md) file number that the \*SENSOR\_DEFINE is in. |
| label | integer | [SensorDefine](primer-sensordefine-class.md) number. The [sensid](primer-sensordefine-class.md#sensid) property is an alternative name for this. |
| layer | integer/string | Layer of integration. Can be "BOT", "TOP" or "i" to monitor the stress of the ith integration point when ctype = "STRESS". |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*SENSOR\_DEFINE is in. |
| mtype | string | Entity to be traced. Can be "ANGLE", "BNDOUT", "CURVE", "CVBAG", "ICVOL",'MATSUM', "NFAILE", "RETRACTOR", "RIGIDBODY" . |
| node1 | integer | Node or Node set ID based on option SET for an accelerometer sensor. |
| node2 | integer | Node ID for an accelerometer sensor. |
| option | constant | SENSOR\_DEFINE suffix. Can be [SensorDefine.DEFINE_CALC_MATH](primer-sensordefine-class.md#SensorDefine.DEFINE_CALC_MATH), [SensorDefine.DEFINE_ELEMENT](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT), [SensorDefine.DEFINE_ELEMENT_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT_SET), [SensorDefine.DEFINE_FORCE](primer-sensordefine-class.md#SensorDefine.DEFINE_FORCE), [SensorDefine.DEFINE_MISC](primer-sensordefine-class.md#SensorDefine.DEFINE_MISC), [SensorDefine.DEFINE_NODE](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE), [SensorDefine.DEFINE_NODE_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE_SET) or [SensorDefine.DEFINE_FUNCTION](primer-sensordefine-class.md#SensorDefine.DEFINE_FUNCTION). |
| pwr | real | Power (Optional parameters). |
| sens1 | integer | 1st Sensor ID. |
| sens2 | integer | 2nd Sensor ID. |
| sens3 | integer | 3rd Sensor ID. |
| sens4 | integer | 4th Sensor ID. |
| sens5 | integer | 5th Sensor ID. |
| sens6 | integer | 6th Sensor ID. |
| sensid | integer | [SensorDefine](primer-sensordefine-class.md) number. The [label](primer-sensordefine-class.md#label) property is an alternative name for this. |
| setopt | string | Option to process set of data when SET option is specified. Can be "AVG", "MAX", "MIN" or "SUM". |
| sf | real | Scale factor (Optional parameters). |
| typeid | integer | ID defined in the associated KEYWORD command. |
| vid | integer/string | Vector along which the forces is measured. Can be "X", "Y", "Z", "XL", "YL", "ZL", "XMOMENT", "YMOMENT", "ZMOMENT", "XLMOMENT", "YLMOMENT", "ZLMOMENT" or vector ID n in coordinate system CRD for [SensorDefine.DEFINE_FORCE](primer-sensordefine-class.md#SensorDefine.DEFINE_FORCE) or ID of vector along which the nodal values for [SensorDefine.DEFINE_NODE](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE) and [SensorDefine.DEFINE_NODE_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE_SET). |

| Detailed Description<br>The SensorDefine class allows you to create, modify, edit and manipulate \*SENSOR\_DEFINE.<br>See the documentation below for more details. |
| --- |

| Constructor
new SensorDefine(Option*[constant]*, Model*[[Model](primer-model-class.md)]*, Define ID*[integer]*, Type or Entity 1*[string/label]*, Entity 2*[label]*)

Description<br>Create a new [SensorDefine](primer-sensordefine-class.md) object. |
| --- |

#### Arguments

* Option (constant)
 
SENSOR\_DEFINE suffix. Can be [SensorDefine.DEFINE_CALC_MATH](primer-sensordefine-class.md#SensorDefine.DEFINE_CALC_MATH), [SensorDefine.DEFINE_ELEMENT](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT), [SensorDefine.DEFINE_ELEMENT_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT_SET), [SensorDefine.DEFINE_FORCE](primer-sensordefine-class.md#SensorDefine.DEFINE_FORCE), [SensorDefine.DEFINE_MISC](primer-sensordefine-class.md#SensorDefine.DEFINE_MISC), [SensorDefine.DEFINE_NODE](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE), [SensorDefine.DEFINE_NODE_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE_SET) or [SensorDefine.DEFINE_FUNCTION](primer-sensordefine-class.md#SensorDefine.DEFINE_FUNCTION).

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*SENSOR\_DEFINE will be created in

* Define ID (integer)
 
[SensorDefine](primer-sensordefine-class.md) id.

* Type or Entity 1 (string/label)
 
For [SensorDefine.DEFINE_NODE](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE), [SensorDefine.DEFINE_NODE_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE_SET) option it is Node ID or NODE set ID respectively, For [SensorDefine.DEFINE_FUNCTION](primer-sensordefine-class.md#SensorDefine.DEFINE_FUNCTION) option it is DEFINE\_FUNCTION ID, For [SensorDefine.DEFINE_CALC_MATH](primer-sensordefine-class.md#SensorDefine.DEFINE_CALC_MATH) option it is Calc string, For [SensorDefine.DEFINE_ELEMENT](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT) and [SensorDefine.DEFINE_ELEMENT_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT_SET) option it is Etype string, For [SensorDefine.DEFINE_FORCE](primer-sensordefine-class.md#SensorDefine.DEFINE_FORCE) option it is Ftype string, For [SensorDefine.DEFINE_MISC](primer-sensordefine-class.md#SensorDefine.DEFINE_MISC) option it is Mtype string.

* Entity 2 (label)
 
Applicable only for [SensorDefine.DEFINE_NODE](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE), [SensorDefine.DEFINE_NODE_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE_SET), [SensorDefine.DEFINE_CALC_MATH](primer-sensordefine-class.md#SensorDefine.DEFINE_CALC_MATH), [SensorDefine.DEFINE_ELEMENT](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT), [SensorDefine.DEFINE_ELEMENT_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT_SET) or [SensorDefine.DEFINE_FORCE](primer-sensordefine-class.md#SensorDefine.DEFINE_FORCE). It is NODE or NODE set ID for [SensorDefine.DEFINE_NODE](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE) or [SensorDefine.DEFINE_NODE_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_NODE_SET) respectively, Sensor Define ID for [SensorDefine.DEFINE_CALC_MATH](primer-sensordefine-class.md#SensorDefine.DEFINE_CALC_MATH), Element ID or Element set ID for [SensorDefine.DEFINE_ELEMENT](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT) or [SensorDefine.DEFINE_ELEMENT_SET](primer-sensordefine-class.md#SensorDefine.DEFINE_ELEMENT_SET) respectively or Type ID for [SensorDefine.DEFINE_FORCE](primer-sensordefine-class.md#SensorDefine.DEFINE_FORCE).

| Returns
<br>[SensorDefine](primer-sensordefine-class.md) object<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To create a new \*SENSOR\_DEFINE\_CALC-MATH in model m with label 100 with CALC option as MAX and SENS1 as -2:<br>
```
var sd1 = new SensorDefine(SensorDefine.DEFINE_CALC_MATH, m, 100, "MAX", -2);
```
<br>To create a new \*SENSOR\_DEFINE\_MISC in model m with label 10 with MTYPE option as ANGLE:<br>
```
var sd2 = new SensorDefine(SensorDefine.DEFINE_MISC, m, 10, "ANGLE");
```
<br>To create a new \*SENSOR\_DEFINE\_NODE in model m with label 11 with NODE1 and NODE2 as 5 and 6:<br>
```
var sd3 = new SensorDefine(SensorDefine.DEFINE_NODE, m, 11, 5, 6);
```
<br>To create a new \*SENSOR\_DEFINE\_FUNCTION in model m with label 12 and FUNCTION ID as 6:<br>
```
var sd4 = new SensorDefine(SensorDefine.DEFINE_FUNCTION, m, 12, 6);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*SENSOR\_DEFINE. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*SENSOR\_DEFINE

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*SENSOR\_DEFINE sd:<br>
```
sd.AssociateComment(c);
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
<br>To Browse \*SENSOR\_DEFINE sd:<br>
```
sd.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*SENSOR\_DEFINE. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*SENSOR\_DEFINE

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*SENSOR\_DEFINE sd:<br>
```
sd.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*SENSOR\_DEFINE. The target include of the copied \*SENSOR\_DEFINE can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>SensorDefine object<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To copy \*SENSOR\_DEFINE sd into \*SENSOR\_DEFINE z:<br>
```
var z = sd.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a \*SENSOR\_DEFINE |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the \*SENSOR\_DEFINE will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>SensorDefine object (or null if not made).<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To start creating a \*SENSOR\_DEFINE in model m:<br>
```
var sd = SensorDefine.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*SENSOR\_DEFINE. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*SENSOR\_DEFINE

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*SENSOR\_DEFINE sd:<br>
```
sd.DetachComment(c);
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
<br>To Edit \*SENSOR\_DEFINE sd:<br>
```
sd.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*SENSOR\_DEFINE. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*SENSOR\_DEFINE sd:<br>
```
sd.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*SENSOR\_DEFINE in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*SENSOR\_DEFINE in

| Returns
<br>SensorDefine object (or null if there are no \*SENSOR\_DEFINEs in the model).<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To get the first \*SENSOR\_DEFINE in model m:<br>
```
var sd = SensorDefine.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free \*SENSOR\_DEFINE label in the model. Also see [SensorDefine.LastFreeLabel()](primer-sensordefine-class.md#SensorDefine::LastFreeLabel), [SensorDefine.NextFreeLabel()](primer-sensordefine-class.md#SensorDefine::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free \*SENSOR\_DEFINE label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>SensorDefine label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free \*SENSOR\_DEFINE label in model m:<br>
```
var label = SensorDefine.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*SENSOR\_DEFINEs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_DEFINEs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*SENSOR\_DEFINEs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*SENSOR\_DEFINEs with flag f in model m:<br>
```
SensorDefine.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*SENSOR\_DEFINE is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*SENSOR\_DEFINE

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*SENSOR\_DEFINE sd has flag f set on it:<br>
```
if (sd.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*SENSOR\_DEFINE in the model.<br> **Note that ForEach has been designed to make looping over \*SENSOR\_DEFINEs as fast as possible and so has some limitations. Firstly, a single temporary SensorDefine object is created and on each function call it is updated with the current \*SENSOR\_DEFINE data. This means that you should not try to store the SensorDefine object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*SENSOR\_DEFINEs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_DEFINEs are in

* func (function)
 
Function to call for each \*SENSOR\_DEFINE

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*SENSOR\_DEFINEs in model m:<br>
```
SensorDefine.ForEach(m, test);
function test(sd)
{
// sd is SensorDefine object
}
```
<br><br>To call function test for all of the \*SENSOR\_DEFINEs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
SensorDefine.ForEach(m, test, data);
function test(sd, extra)
{
// sd is SensorDefine object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SensorDefine objects or properties for all of the \*SENSOR\_DEFINEs in a model in PRIMER. If the optional property argument is not given then an array of SensorDefine objects is returned. If the property argument is given, that property value for each \*SENSOR\_DEFINE is returned in the array instead of a SensorDefine object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*SENSOR\_DEFINEs from

* property (optional) (string)
 
Name for property to get for all \*SENSOR\_DEFINEs in the model

| Returns
<br>Array of SensorDefine objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of SensorDefine objects for all of the \*SENSOR\_DEFINEs in model m:<br>
```
var a = SensorDefine.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*SENSOR\_DEFINE in model m:<br>
```
var a = SensorDefine.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*SENSOR\_DEFINE. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*SENSOR\_DEFINE sd:<br>
```
var comm_array = sd.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of SensorDefine objects for all of the flagged \*SENSOR\_DEFINEs in a model in PRIMER If the optional property argument is not given then an array of SensorDefine objects is returned. If the property argument is given, then that property value for each \*SENSOR\_DEFINE is returned in the array instead of a SensorDefine object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*SENSOR\_DEFINEs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_DEFINEs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*SENSOR\_DEFINEs in the model

| Returns
<br>Array of SensorDefine objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of SensorDefine objects for all of the \*SENSOR\_DEFINEs in model m flagged with f:<br>
```
var sd = SensorDefine.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*SENSOR\_DEFINEs in model m flagged with f:<br>
```
var a = SensorDefine.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the SensorDefine object for a \*SENSOR\_DEFINE ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*SENSOR\_DEFINE in

* number (integer)
 
number of the \*SENSOR\_DEFINE you want the SensorDefine object for

| Returns
<br>SensorDefine object (or null if \*SENSOR\_DEFINE does not exist).<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To get the SensorDefine object for \*SENSOR\_DEFINE 100 in model m<br>
```
var sd = SensorDefine.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a SensorDefine property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [SensorDefine.ViewParameters()](primer-sensordefine-class.md#SensorDefine::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*SENSOR\_DEFINE property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if SensorDefine property sd.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (sd.GetParameter(sd.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if SensorDefine property sd.example is a parameter by using the GetParameter method:<br>
```
if (sd.ViewParameters().GetParameter(sd.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*SENSOR\_DEFINE. **Note that a carriage return is not added**. See also [SensorDefine.KeywordCards()](primer-sensordefine-class.md#SensorDefine::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for SensorDefine sd:<br>
```
var key = sd.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*SENSOR\_DEFINE. **Note that a carriage return is not added**. See also [SensorDefine.Keyword()](primer-sensordefine-class.md#SensorDefine::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for sensor define sd:<br>
```
var cards = sd.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*SENSOR\_DEFINE in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*SENSOR\_DEFINE in

| Returns
<br>SensorDefine object (or null if there are no \*SENSOR\_DEFINEs in the model).<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To get the last \*SENSOR\_DEFINE in model m:<br>
```
var sd = SensorDefine.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free \*SENSOR\_DEFINE label in the model. Also see [SensorDefine.FirstFreeLabel()](primer-sensordefine-class.md#SensorDefine::FirstFreeLabel), [SensorDefine.NextFreeLabel()](primer-sensordefine-class.md#SensorDefine::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free \*SENSOR\_DEFINE label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>SensorDefine label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free \*SENSOR\_DEFINE label in model m:<br>
```
var label = SensorDefine.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*SENSOR\_DEFINE in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>SensorDefine object (or null if there are no more \*SENSOR\_DEFINEs in the model).<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To get the \*SENSOR\_DEFINE in model m after \*SENSOR\_DEFINE sd:<br>
```
var sd = sd.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) \*SENSOR\_DEFINE label in the model. Also see [SensorDefine.FirstFreeLabel()](primer-sensordefine-class.md#SensorDefine::FirstFreeLabel), [SensorDefine.LastFreeLabel()](primer-sensordefine-class.md#SensorDefine::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free \*SENSOR\_DEFINE label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>SensorDefine label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free \*SENSOR\_DEFINE label in model m:<br>
```
var label = SensorDefine.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*SENSOR\_DEFINE in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>SensorDefine object (or null if there are no more \*SENSOR\_DEFINEs in the model).<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To get the \*SENSOR\_DEFINE in model m before \*SENSOR\_DEFINE sd:<br>
```
var sd = sd.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the \*SENSOR\_DEFINEs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*SENSOR\_DEFINEs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*SENSOR\_DEFINEs in model m, from 1000000:<br>
```
SensorDefine.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged \*SENSOR\_DEFINEs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged \*SENSOR\_DEFINEs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*SENSOR\_DEFINEs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*SENSOR\_DEFINEs in model m flagged with f, from 1000000:<br>
```
SensorDefine.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*SENSOR\_DEFINEs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*SENSOR\_DEFINEs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*SENSOR\_DEFINEs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*SENSOR\_DEFINEs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*SENSOR\_DEFINEs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*SENSOR\_DEFINEs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*SENSOR\_DEFINEs from model m, flagging those selected with flag f, giving the prompt 'Select \*SENSOR\_DEFINEs':<br>
```
SensorDefine.Select(f, 'Select *SENSOR_DEFINEs', m);
```
<br><br>To select \*SENSOR\_DEFINEs, flagging those selected with flag f but limiting selection to \*SENSOR\_DEFINEs flagged with flag l, giving the prompt 'Select \*SENSOR\_DEFINEs':<br>
```
SensorDefine.Select(f, 'Select *SENSOR_DEFINEs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*SENSOR\_DEFINE. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*SENSOR\_DEFINE

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*SENSOR\_DEFINE sd:<br>
```
sd.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*SENSOR\_DEFINEs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*SENSOR\_DEFINEs should be counted. If false or omitted
referenced but undefined \*SENSOR\_DEFINEs will also be included in the total.

| Returns
<br>number of \*SENSOR\_DEFINEs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*SENSOR\_DEFINEs in model m:<br>
```
var total = SensorDefine.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*SENSOR\_DEFINEs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*SENSOR\_DEFINEs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*SENSOR\_DEFINEs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*SENSOR\_DEFINEs in model m:<br>
```
SensorDefine.UnflagAll(m, f);
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
<br>[SensorDefine](primer-sensordefine-class.md) object.<br>
Return type
<br>SensorDefine |
| --- |

| Example
<br>To check if SensorDefine property sd.example is a parameter by using the [SensorDefine.GetParameter()](primer-sensordefine-class.md#SensorDefine::GetParameter) method:<br>
```
if (sd.ViewParameters().GetParameter(sd.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*SENSOR\_DEFINE. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*SENSOR\_DEFINE sd:<br>
```
sd.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*SENSOR\_DEFINE. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*SENSOR\_DEFINE sd:<br>
```
var xrefs = sd.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the sensor define data in keyword format. Note that this contains the keyword header and the keyword cards. See also [SensorDefine.Keyword()](primer-sensordefine-class.md#SensorDefine::Keyword) and [SensorDefine.KeywordCards()](primer-sensordefine-class.md#SensorDefine::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for sensor define sd in keyword format<br>
```
var str = sd.toString();
```
 |
| --- |

* * *