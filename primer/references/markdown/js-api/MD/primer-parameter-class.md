# Parameter class

The Parameter class allows you to access the parameters in a model. [More...](primer-parameter-class.md#Parameter_details)

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

* [AutoReorder](primer-parameter-class.md#Parameter::AutoReorder)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-parameter-class.md#Parameter::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetAll](primer-parameter-class.md#Parameter::GetAll)(Model*[[Model](primer-model-class.md)]*)
* [GetAllOfName](primer-parameter-class.md#Parameter::GetAllOfName)(Model*[[Model](primer-model-class.md)]*)
* [GetFromName](primer-parameter-class.md#Parameter::GetFromName)(Model*[[Model](primer-model-class.md)]*, parameter name*[string]*)
* [SaveAll](primer-parameter-class.md#Parameter::SaveAll)(Model*[[Model](primer-model-class.md)]*)
* [UnflagAll](primer-parameter-class.md#Parameter::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UpdateAll](primer-parameter-class.md#Parameter::UpdateAll)(Model*[[Model](primer-model-class.md)]*)

## Member functions

* [ClearFlag](primer-parameter-class.md#Parameter::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Error](primer-parameter-class.md#Parameter::Error)(message*[string]*, details (optional)*[string]*)
* [Evaluate](primer-parameter-class.md#Parameter::Evaluate)()
* [Flagged](primer-parameter-class.md#Parameter::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Keyword](primer-parameter-class.md#Parameter::Keyword)()
* [KeywordCards](primer-parameter-class.md#Parameter::KeywordCards)()
* [SetFlag](primer-parameter-class.md#Parameter::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Warning](primer-parameter-class.md#Parameter::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-parameter-class.md#Parameter::Xrefs)()
* [toString](primer-parameter-class.md#Parameter::toString)()

## Parameter constants

| **Name** | **Description** |
| --- | --- |
| Parameter.CHARACTER | Parameter is a character. |
| Parameter.INTEGER | Parameter is an integer. |
| Parameter.LOCAL | Parameter has \_LOCAL suffix (used in suffix argument for constructor). |
| Parameter.MUTABLE | Parameter has \_MUTABLE suffix (used in suffix argument for constructor). |
| Parameter.NOECHO | Parameter has \_NOECHO suffix (used in suffix argument for constructor). |
| Parameter.REAL | Parameter is a real. |

## Parameter properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| expression (read only) | logical | true if this parameter is a \*PARAMETER\_EXPRESSION, false otherwise. |
| include | integer | The [Include](primer-include-class.md) file number that the parameter is in. |
| local | logical | true if this parameter is a \*PARAMETER\_... \_LOCAL, false otherwise. |
| model | integer | The [Model](primer-model-class.md) number that the parameter is in. |
| mutable | logical | true if this parameter is a \*PARAMETER\_... \_MUTABLE, false otherwise. |
| name (read only) | string | [Parameter](primer-parameter-class.md) name. |
| noecho | logical | true if this parameter is a \*PARAMETER\_... \_NOECHO, false otherwise. |
| type (read only) | constant | Can be [Parameter.INTEGER](primer-parameter-class.md#Parameter.INTEGER), [Parameter.REAL](primer-parameter-class.md#Parameter.REAL) or [Parameter.CHARACTER](primer-parameter-class.md#Parameter.CHARACTER). |
| value | integer/real/string | [Parameter](primer-parameter-class.md) value. The value will be a string for parameter [expressions](primer-parameter-class.md#expression), or a number for normal parameters.<br> By default when a parameter value is changed PRIMER will re-evaluate and update all of the parameters in the model as changing this parameter could cause others to change because of parameter expressions. There could be some situations where changing parameters one at a time could cause problems with re-evaluation. For example, changing parameter A could temporarily cause a division by zero when re-evaluating parameter expression B until parameter C is changed. In this case the automatic re-evaluation can be prevented by using [Parameter.SaveAll](primer-parameter-class.md#Parameter::SaveAll) and [Parameter.UpdateAll](primer-parameter-class.md#Parameter::UpdateAll). |

| Detailed Description<br>The Parameter class allows to create and query parameters in a model.<br>See the documentation below for more details. |
| --- |

| Constructor
new Parameter(Model*[[Model](primer-model-class.md)]*, name*[string]*, type*[constant]*, expression*[boolean]*, value*[integer/real/string]*, suffix (optional)*[constant]*)

Description<br>Create a new [Parameter](primer-parameter-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that parameter will be created in

* name (string)
 
[Parameter](primer-parameter-class.md) name

* type (constant)
 
Can be [Parameter.INTEGER](primer-parameter-class.md#Parameter.INTEGER), [Parameter.REAL](primer-parameter-class.md#Parameter.REAL) or [Parameter.CHARACTER](primer-parameter-class.md#Parameter.CHARACTER).

* expression (boolean)
 
true if [*PARAMETER_EXPRESSION](primer-parameter-class.md#expression), false otherwise.

* value (integer/real/string)
 
Parameter value. The value will be a string for character parameters or parameter [expressions](primer-parameter-class.md#expression), or a number for integer or real parameters.

* suffix (optional) (constant)
 
Keyword suffix
Can be [Parameter.LOCAL](primer-parameter-class.md#Parameter.LOCAL) for \*PARAMETER\_...\_LOCAL, [Parameter.MUTABLE](primer-parameter-class.md#Parameter.MUTABLE) for \*PARAMETER\_...\_MUTABLE, or [Parameter.NOECHO](primer-parameter-class.md#Parameter.NOECHO) for \*PARAMETER\_...\_NOECHO.
These may be bitwise ORed together, ie Parameter.LOCAL | Parameter.MUTABLE | Parameter.NOECHO.
If omitted the parameter will not be local or mutable.

| Returns
<br>[Parameter](primer-parameter-class.md) object<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To create a new real parameter THK in model m with value 5.0<br>
```
var p = new Parameter(m, "THK", Parameter.REAL, false, 5.0);
```
<br><br>To create a new LOCAL integer parameter INDEX in model m with value 3<br>
```
var p = new Parameter(m, "INDEX", Parameter.INTEGER, false, 3, Parameter.LOCAL);
```
 |
| --- |

| Details of functions 
AutoReorder(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Auto Reorders all the parameters in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that contains all parameters that will be re-ordered

| Returns
<br>No return value |
| --- |

| Example
<br>To auto-reorder all parameters in model m:<br>
```
Parameter.AutoReorder(m);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the parameter. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the parameter

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for parameter p:<br>
```
p.ClearFlag(f);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for a parameter. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for parameter p:<br>
```
p.Error("My custom error");
```
 |
| --- |

* * *

| Evaluate()

Description<br>Evaluates a parameter expression, updating the evaluated value stored in PRIMER and returns the value. If the parameter is not an expression then the parameter value will just be returned.<br> If evaluating the expression cannot be done because of an error (e.g. dividing by zero) an exception will be thrown. |
| --- |

#### Arguments

No arguments

| Returns
<br>number (real and integer parameters) or string (character parameters)<br>
Return type
<br>Number |
| --- |

| Example
<br>To evaluate parameter p:<br>
```
var value = p.Evaluate();
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the parameters in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parameters will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the parameters

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the parameters with flag f in model m:<br>
```
Parameter.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the parameter is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the parameter

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if parameter p has flag f set on it:<br>
```
if (p.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns an array of Parameter objects for all of the parameters in a model in Primer |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get parameters from

| Returns
<br>Array of Parameter objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Parameter objects for all of the parameters in model m<br>
```
var p = Parameter.GetAll(m);
```
 |
| --- |

* * *

| GetAllOfName(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns an array of Parameter objects for all parameters in a model matching Name. If none are found<br>that match it will return NULL. (Multiple parameters of the same name may exist if they use the \_LOCAL or \_MUTABLE suffices.<br>PRIMER will also store multiple illegal instances of parameter name, using the instance as determined by the<br>PARAMETER\_DUPLICATION card.) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get parameters from

| Returns
<br>Array of Parameter objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Parameter objects for all of the parameters of name in model m<br>
```
var p = Parameter.GetAllOfName(m, name);
```
 |
| --- |

* * *

| GetFromName(Model*[[Model](primer-model-class.md)]*, parameter name*[string]*) [static]
Description<br>Returns the stored Parameter object for a parameter name.<br>WARNING: if more than one parameter Name exists (eg \_LOCAL, \_MUTABLE) then only the first occurrence is returned.<br>To return all parameters matching Name use GetAllOfName() instead. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the parameter in

* parameter name (string)
 
name of the parameter you want the Parameter object for

| Returns
<br>Parameter object (or null if parameter does not exist).<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To get the Parameter object for parameter "THK" in model m<br>
```
var p = Parameter.GetFromName(m, "THK");
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this parameter (\*PARAMETER, \*PARAMETER\_EXPRESSION). **Note that a carriage return is not added**. See also [Parameter.KeywordCards()](primer-parameter-class.md#Parameter::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for parameter p:<br>
```
var key = p.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the parameter. **Note that a carriage return is not added**. See also [Parameter.Keyword()](primer-parameter-class.md#Parameter::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for parameter p:<br>
```
var cards = p.KeywordCards();
```
 |
| --- |

* * *

| SaveAll(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Saves the current status and values of all of the parameters in the model. Calling this will also have the effect of turning off re-evaluating and updating of all parameters in the model when a parameter [value](primer-parameter-class.md#value) is changed.<br> To update several parameters in a model without re-evaluating all the parameters after each one is changed first call this, then update all of the parameter [values](primer-parameter-class.md#value), and then call [Parameter.UpdateAll](primer-parameter-class.md#Parameter::UpdateAll) to apply the update.<br> [Parameter.SaveAll](primer-parameter-class.md#Parameter::SaveAll) **must** be called before using [Parameter.UpdateAll](primer-parameter-class.md#Parameter::UpdateAll). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the parameters will be saved in

| Returns
<br>No return value |
| --- |

| Example
<br>To save the status of all of the parameters in model m:<br>
```
Parameter.SaveAll(m);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the parameter. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the parameter

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for parameter p:<br>
```
p.SetFlag(f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the parameters in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all parameters will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the parameters

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all of the parameters in model m:<br>
```
Parameter.UnflagAll(m, f);
```
 |
| --- |

* * *

| UpdateAll(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Updates all of the parameters in the model after saving the state of all parameters using [Parameter.SaveAll](primer-parameter-class.md#Parameter::SaveAll) and modifying the parameter [values](primer-parameter-class.md#value). As parameter re-evaluation has been suppressed by [Parameter.SaveAll](primer-parameter-class.md#Parameter::SaveAll) you should ensure that all parameters in the model can be [evaluated](primer-parameter-class.md#Parameter::Evaluate) correctly before calling this to ensure that there are no errors. If any of the parameters cannot be evaluated then the values saved in [Parameter.SaveAll](primer-parameter-class.md#Parameter::SaveAll) will be restored, the update will be aborted and an exception thrown. Calling this will also have the effect of turning back on re-evaluating and updating of all parameters in the model when a parameter [value](primer-parameter-class.md#value) is changed.<br> [Parameter.SaveAll](primer-parameter-class.md#Parameter::SaveAll) **must** be called before this method can be used. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the parameters will be updated in

| Returns
<br>No return value |
| --- |

| Example
<br>To update all of the parameters in model m:<br>
```
Parameter.UpdateAll(m);
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for a parameter. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for parameter p:<br>
```
p.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this parameter. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for parameter p:<br>
```
var xrefs = p.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the parameter data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Parameter.Keyword()](primer-parameter-class.md#Parameter::Keyword) and [Parameter.KeywordCards()](primer-parameter-class.md#Parameter::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for parameter p in keyword format<br>
```
var s = p.toString();
```
 |
| --- |

* * *