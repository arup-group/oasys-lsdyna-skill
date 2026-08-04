# Termination class

The Termination class gives you access to \*TERMINATION\_XXXX cards in PRIMER. [More...](primer-termination-class.md#Termination_details)

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

* [Create](primer-termination-class.md#Termination::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-termination-class.md#Termination::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-termination-class.md#Termination::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-termination-class.md#Termination::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-termination-class.md#Termination::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-termination-class.md#Termination::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-termination-class.md#Termination::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-termination-class.md#Termination::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-termination-class.md#Termination::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-termination-class.md#Termination::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-termination-class.md#Termination::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-termination-class.md#Termination::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-termination-class.md#Termination::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-termination-class.md#Termination::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-termination-class.md#Termination::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-termination-class.md#Termination::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-termination-class.md#Termination::Edit)(modal (optional)*[boolean]*)
* [Error](primer-termination-class.md#Termination::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-termination-class.md#Termination::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-termination-class.md#Termination::GetComments)()
* [GetParameter](primer-termination-class.md#Termination::GetParameter)(prop*[string]*)
* [Keyword](primer-termination-class.md#Termination::Keyword)()
* [KeywordCards](primer-termination-class.md#Termination::KeywordCards)()
* [Next](primer-termination-class.md#Termination::Next)()
* [Previous](primer-termination-class.md#Termination::Previous)()
* [SetFlag](primer-termination-class.md#Termination::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-termination-class.md#Termination::ViewParameters)()
* [Warning](primer-termination-class.md#Termination::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-termination-class.md#Termination::Xrefs)()
* [toString](primer-termination-class.md#Termination::toString)()

## Termination constants

### Constants for Direction for Degrees of Freedom (field: dof)

| **Name** | **Description** |
| --- | --- |
| Termination.DOF\_X | Degree of freedom in X direction for Force magnitude. Used for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT). |
| Termination.DOF\_Y | Degree of freedom in Y direction for Force magnitude. Used for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT). |
| Termination.DOF\_Z | Degree of freedom in Z direction for Force magnitude. Used for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT). |

### Constants for Global Direction for Stop Criterion (field: stop)

| **Name** | **Description** |
| --- | --- |
| Termination.STOP\_MAG | Stop if displacement magnitude is exceeded. Used for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.NODE](primer-termination-class.md#Termination.NODE). |
| Termination.STOP\_X | Stop criterion is in Global X direction. Used for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.NODE](primer-termination-class.md#Termination.NODE). |
| Termination.STOP\_Y | Stop criterion is in Global Y direction. Used for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.NODE](primer-termination-class.md#Termination.NODE). |
| Termination.STOP\_Z | Stop criterion is in Global X direction. Used for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.NODE](primer-termination-class.md#Termination.NODE). |

### Constants for Type of Keyword

| **Name** | **Description** |
| --- | --- |
| Termination.BODY | TERMINATION is \*TERMINATION\_BODY. |
| Termination.CONTACT | TERMINATION is \*TERMINATION\_CONTACT. |
| Termination.CURVE | TERMINATION is \*TERMINATION\_CURVE. |
| Termination.DELETED\_SHELLS | TERMINATION is \*TERMINATION\_DELETED\_SHELLS. |
| Termination.DELETED\_SHELLS\_SET | TERMINATION is \*TERMINATION\_DELETED\_SHELLS\_SET. |
| Termination.DELETED\_SOLIDS | TERMINATION is \*TERMINATION\_DELETED\_SOLIDS. |
| Termination.DELETED\_SOLIDS\_SET | TERMINATION is \*TERMINATION\_DELETED\_SOLIDS\_SET. |
| Termination.NODE | TERMINATION is \*TERMINATION\_NODE. |
| Termination.SENSOR | TERMINATION is \*TERMINATION\_SENSOR. |

## Termination properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| actTime | real | Activation time value. Used for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT) or [Termination.CURVE](primer-termination-class.md#Termination.CURVE). |
| dof | integer | Directions to consider for Force Magnitude. Valid values are: [Termination.DOF_X](primer-termination-class.md#Termination.DOF_X) or [Termination.DOF_Y](primer-termination-class.md#Termination.DOF_Y) or [Termination.DOF_Z](primer-termination-class.md#Termination.DOF_Z). Used for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT). |
| duration | real | Time duration of null resultant force prior to termination. Used for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT). |
| exists (read only) | logical | true if termination exists, false if referred to but not defined. |
| id | integer | Can be [Part](primer-part-class.md) or [NRBC](primer-nodalrigidbody-class.md) ID based on [ptype](primer-termination-class.md#ptype) value for [Termination.BODY](primer-termination-class.md#Termination.BODY), OR [Contact](primer-contact-class.md) ID for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT), OR [Node](primer-node-class.md) ID for [Termination.NODE](primer-termination-class.md#Termination.NODE), OR [Curve](primer-curve-class.md) ID for [Termination.CURVE](primer-termination-class.md#Termination.CURVE), OR [Part](primer-part-class.md) for [Termination.DELETED_SHELLS](primer-termination-class.md#Termination.DELETED_SHELLS) or [Termination.DELETED_SOLIDS](primer-termination-class.md#Termination.DELETED_SOLIDS), OR [Part Set](primer-set-class.md) ID for [Termination.DELETED_SHELLS_SET](primer-termination-class.md#Termination.DELETED_SHELLS_SET) or [Termination.DELETED_SOLIDS_SET](primer-termination-class.md#Termination.DELETED_SOLIDS_SET), OR [Sensor Switch](primer-sensorswitch-class.md) ID for [Termination.SENSOR](primer-termination-class.md#Termination.SENSOR). |
| include | integer | The [Include](primer-include-class.md) file number that the termination is in. |
| maxc | real | Maximum (most positive) displacement. If value is 0.0, it is set to 1.0e21. Value should be more than [minc](primer-termination-class.md#minc). Used for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.NODE](primer-termination-class.md#Termination.NODE). |
| minc | real | Minimum (most negative) displacement. If value is 0.0, it is set to -1.0e21. Value should be less than [maxc](primer-termination-class.md#maxc). Used for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.NODE](primer-termination-class.md#Termination.NODE). |
| model (read only) | integer | The [Model](primer-model-class.md) number that the termination is in. |
| numDeletedElems | integer | Number of elements that must be deleted for the specified Part ID's, before an error termination occurs. Used for [Termination.DELETED_SHELLS_SET](primer-termination-class.md#Termination.DELETED_SHELLS_SET) or [Termination.DELETED_SOLIDS_SET](primer-termination-class.md#Termination.DELETED_SOLIDS_SET). |
| ptype (read only) | integer | Gives the type of Part for [Termination.BODY](primer-termination-class.md#Termination.BODY). Values can be 0 for [Part](primer-part-class.md) or 1 for [NRBC](primer-nodalrigidbody-class.md) |
| stop | integer | Stop Criterion. Valid values are: [Termination.STOP_X](primer-termination-class.md#Termination.STOP_X) or [Termination.STOP_Y](primer-termination-class.md#Termination.STOP_Y) or [Termination.STOP_Z](primer-termination-class.md#Termination.STOP_Z) or [Termination.STOP_MAG](primer-termination-class.md#Termination.STOP_MAG). Used for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.NODE](primer-termination-class.md#Termination.NODE). |
| threshold | real | Any measured force magnitude below or equal to this specified threshold is taken as a null force. Used for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT). |
| type (read only) | integer | Gives the type of \*TERMINATION keyword. |

| Detailed Description<br>The Termination class allows you to create, modify, edit and manipulate termination cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Termination(Model*[[Model](primer-model-class.md)]*, Type*[constant]*, id *[integer]*)

Description<br>Create a new [Termination](primer-termination-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that termination will be created in

* Type (constant)
 
Specify the type of Termination (Can be [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT) or [Termination.CURVE](primer-termination-class.md#Termination.CURVE) or [Termination.DELETED_SHELLS](primer-termination-class.md#Termination.DELETED_SHELLS) or [Termination.DELETED_SOLIDS](primer-termination-class.md#Termination.DELETED_SOLIDS) or [Termination.NODE](primer-termination-class.md#Termination.NODE) or [Termination.SENSOR](primer-termination-class.md#Termination.SENSOR)).

* id  (integer)
 
Can be [Part](primer-part-class.md) ID for [Termination.BODY](primer-termination-class.md#Termination.BODY) or [Termination.DELETED_SHELLS](primer-termination-class.md#Termination.DELETED_SHELLS) or [Termination.DELETED_SOLIDS](primer-termination-class.md#Termination.DELETED_SOLIDS), OR [Contact](primer-contact-class.md) ID for [Termination.CONTACT](primer-termination-class.md#Termination.CONTACT), OR [Node](primer-node-class.md) ID for [Termination.NODE](primer-termination-class.md#Termination.NODE), OR [Curve](primer-curve-class.md) ID for [Termination.CURVE](primer-termination-class.md#Termination.CURVE), OR [Part Set](primer-set-class.md) ID for [Termination.DELETED_SHELLS_SET](primer-termination-class.md#Termination.DELETED_SHELLS_SET) or [Termination.DELETED_SOLIDS_SET](primer-termination-class.md#Termination.DELETED_SOLIDS_SET), OR [Sensor Switch](primer-sensorswitch-class.md) ID for [Termination.SENSOR](primer-termination-class.md#Termination.SENSOR).

| Returns
<br>[Termination](primer-termination-class.md) object<br>
Return type
<br>Termination |
| --- |

| Example
<br>To create a new termination in model m, type BODY, part id 100:<br>
```
var term = new Termination(m, Termination.BODY, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a termination. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the termination

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the termination term:<br>
```
term.AssociateComment(c);
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
<br>To Browse termination term:<br>
```
term.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the termination. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the termination

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for termination term:<br>
```
term.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the termination. The target include of the copied termination can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Termination object<br>
Return type
<br>Termination |
| --- |

| Example
<br>To copy termination term into termination z:<br>
```
var z = term.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a termination |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the termination will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Termination object (or null if not made).<br>
Return type
<br>Termination |
| --- |

| Example
<br>To start creating a termination in model m:<br>
```
var term = Termination.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a termination. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the termination

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the termination term:<br>
```
term.DetachComment(c);
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
<br>To Edit termination term:<br>
```
term.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for termination. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for termination term:<br>
```
term.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first termination in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first termination in

| Returns
<br>Termination object (or null if there are no terminations in the model).<br>
Return type
<br>Termination |
| --- |

| Example
<br>To get the first termination in model m:<br>
```
var term = Termination.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the terminations in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all terminations will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the terminations

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the terminations with flag f in model m:<br>
```
Termination.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the termination is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the termination

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if termination term has flag f set on it:<br>
```
if (term.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each termination in the model.<br> **Note that ForEach has been designed to make looping over terminations as fast as possible and so has some limitations. Firstly, a single temporary Termination object is created and on each function call it is updated with the current termination data. This means that you should not try to store the Termination object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new terminations inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all terminations are in

* func (function)
 
Function to call for each termination

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the terminations in model m:<br>
```
Termination.ForEach(m, test);
function test(term)
{
// term is Termination object
}
```
<br><br>To call function test for all of the terminations in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Termination.ForEach(m, test, data);
function test(term, extra)
{
// term is Termination object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Termination objects or properties for all of the terminations in a model in PRIMER. If the optional property argument is not given then an array of Termination objects is returned. If the property argument is given, that property value for each termination is returned in the array instead of a Termination object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get terminations from

* property (optional) (string)
 
Name for property to get for all terminations in the model

| Returns
<br>Array of Termination objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Termination objects for all of the terminations in model m:<br>
```
var a = Termination.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each termination in model m:<br>
```
var a = Termination.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a termination. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the termination term:<br>
```
var comm_array = term.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Termination objects for all of the flagged terminations in a model in PRIMER If the optional property argument is not given then an array of Termination objects is returned. If the property argument is given, then that property value for each termination is returned in the array instead of a Termination object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get terminations from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the terminations that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged terminations in the model

| Returns
<br>Array of Termination objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Termination objects for all of the terminations in model m flagged with f:<br>
```
var term = Termination.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the terminations in model m flagged with f:<br>
```
var a = Termination.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Termination object for a termination ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the termination in

* number (integer)
 
number of the termination you want the Termination object for

| Returns
<br>Termination object (or null if termination does not exist).<br>
Return type
<br>Termination |
| --- |

| Example
<br>To get the Termination object for termination 100 in model m<br>
```
var term = Termination.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Termination property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Termination.ViewParameters()](primer-termination-class.md#Termination::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
termination property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Termination property term.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (term.GetParameter(term.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Termination property term.example is a parameter by using the GetParameter method:<br>
```
if (term.ViewParameters().GetParameter(term.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Termination (\*TERMINATION\_xxxx) **Note that a carriage return is not added**. See also [Termination.KeywordCards()](primer-termination-class.md#Termination::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for Termination termination:<br>
```
var key = Termination.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Termination. **Note that a carriage return is not added**. See also [Termination.Keyword()](primer-termination-class.md#Termination::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Termination termination:<br>
```
var cards = Termination.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last termination in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last termination in

| Returns
<br>Termination object (or null if there are no terminations in the model).<br>
Return type
<br>Termination |
| --- |

| Example
<br>To get the last termination in model m:<br>
```
var term = Termination.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next termination in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Termination object (or null if there are no more terminations in the model).<br>
Return type
<br>Termination |
| --- |

| Example
<br>To get the termination in model m after termination term:<br>
```
var term = term.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous termination in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Termination object (or null if there are no more terminations in the model).<br>
Return type
<br>Termination |
| --- |

| Example
<br>To get the termination in model m before termination term:<br>
```
var term = term.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select terminations using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting terminations

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only terminations from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only terminations that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any terminations can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of terminations selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select terminations from model m, flagging those selected with flag f, giving the prompt 'Select terminations':<br>
```
Termination.Select(f, 'Select terminations', m);
```
<br><br>To select terminations, flagging those selected with flag f but limiting selection to terminations flagged with flag l, giving the prompt 'Select terminations':<br>
```
Termination.Select(f, 'Select terminations', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the termination. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the termination

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for termination term:<br>
```
term.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of terminations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing terminations should be counted. If false or omitted
referenced but undefined terminations will also be included in the total.

| Returns
<br>number of terminations<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of terminations in model m:<br>
```
var total = Termination.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the terminations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all terminations will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the terminations

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the terminations in model m:<br>
```
Termination.UnflagAll(m, f);
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
<br>[Termination](primer-termination-class.md) object.<br>
Return type
<br>Termination |
| --- |

| Example
<br>To check if Termination property term.example is a parameter by using the [Termination.GetParameter()](primer-termination-class.md#Termination::GetParameter) method:<br>
```
if (term.ViewParameters().GetParameter(term.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for termination. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for termination term:<br>
```
term.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this termination. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for termination term:<br>
```
var xrefs = term.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Termination data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Termination.Keyword()](primer-termination-class.md#Termination::Keyword) and [Termination.KeywordCards()](primer-termination-class.md#Termination::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Termination termination in keyword format<br>
```
var term = termination.toString();
```
 |
| --- |

* * *