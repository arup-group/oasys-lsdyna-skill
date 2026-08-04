# ConnectionProperties class

The ConnectionProperties class gives you access to \*DEFINE\_CONNECTION\_PROPERTIES keyword in PRIMER. [More...](primer-connectionproperties-class.md#ConnectionProperties_details)

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

* [Create](primer-connectionproperties-class.md#ConnectionProperties::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-connectionproperties-class.md#ConnectionProperties::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-connectionproperties-class.md#ConnectionProperties::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-connectionproperties-class.md#ConnectionProperties::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-connectionproperties-class.md#ConnectionProperties::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-connectionproperties-class.md#ConnectionProperties::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-connectionproperties-class.md#ConnectionProperties::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-connectionproperties-class.md#ConnectionProperties::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-connectionproperties-class.md#ConnectionProperties::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-connectionproperties-class.md#ConnectionProperties::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-connectionproperties-class.md#ConnectionProperties::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [RenumberAll](primer-connectionproperties-class.md#ConnectionProperties::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-connectionproperties-class.md#ConnectionProperties::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-connectionproperties-class.md#ConnectionProperties::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-connectionproperties-class.md#ConnectionProperties::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-connectionproperties-class.md#ConnectionProperties::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AddMaterialDataLine](primer-connectionproperties-class.md#ConnectionProperties::AddMaterialDataLine)()
* [AssociateComment](primer-connectionproperties-class.md#ConnectionProperties::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-connectionproperties-class.md#ConnectionProperties::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-connectionproperties-class.md#ConnectionProperties::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-connectionproperties-class.md#ConnectionProperties::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-connectionproperties-class.md#ConnectionProperties::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-connectionproperties-class.md#ConnectionProperties::Edit)(modal (optional)*[boolean]*)
* [Error](primer-connectionproperties-class.md#ConnectionProperties::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-connectionproperties-class.md#ConnectionProperties::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-connectionproperties-class.md#ConnectionProperties::GetComments)()
* [GetMaterialDataLine](primer-connectionproperties-class.md#ConnectionProperties::GetMaterialDataLine)(row*[integer]*)
* [GetParameter](primer-connectionproperties-class.md#ConnectionProperties::GetParameter)(prop*[string]*)
* [Keyword](primer-connectionproperties-class.md#ConnectionProperties::Keyword)()
* [KeywordCards](primer-connectionproperties-class.md#ConnectionProperties::KeywordCards)()
* [Next](primer-connectionproperties-class.md#ConnectionProperties::Next)()
* [Previous](primer-connectionproperties-class.md#ConnectionProperties::Previous)()
* [RemoveMaterialDataLine](primer-connectionproperties-class.md#ConnectionProperties::RemoveMaterialDataLine)(row*[integer]*)
* [SetFlag](primer-connectionproperties-class.md#ConnectionProperties::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetMaterialDataLine](primer-connectionproperties-class.md#ConnectionProperties::SetMaterialDataLine)(row*[integer]*, mid*[integer]*, sigy (optional)*[real]*, etan (optional)*[real]*, dg\_pr (optional)*[real]*, rank (optional)*[real]*, sn (optional)*[real]*, sb (optional)*[real]*, ss (optional)*[real]*, exsn (optional)*[real]*, exsb (optional)*[real]*, exss (optional)*[real]*, lcsn (optional)*[integer]*, lcsb (optional)*[integer]*, lcss (optional)*[integer]*, gfad (optional)*[real]*, sclmrr (optional)*[real]*)
* [ViewParameters](primer-connectionproperties-class.md#ConnectionProperties::ViewParameters)()
* [Warning](primer-connectionproperties-class.md#ConnectionProperties::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-connectionproperties-class.md#ConnectionProperties::Xrefs)()
* [toString](primer-connectionproperties-class.md#ConnectionProperties::toString)()

## ConnectionProperties properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| add | integer | To \_ADD case's parent definition |
| areaeq | integer | Area equation number. |
| con\_id | integer | \*DEFINE\_CONNECTION\_PROPERTIES id. |
| d\_dg\_pr | real | Default damage parameter. |
| d\_dg\_prf | integer | Default damage parameter(function if proprul == 2). |
| d\_etan | real | Default tangent modulus. |
| d\_etanf | integer | Default tangent modulus(function if proprul == 2). |
| d\_exsb | real | Default bending stress exponent. |
| d\_exsbf | integer | Default bending stress exponent(function if proprul == 2). |
| d\_exsn | real | Default normal stress exponent. |
| d\_exsnf | integer | Default normal stress exponent(function if proprul == 2). |
| d\_exss | real | Default shear stress exponent. |
| d\_exssf | integer | Default shear stress exponent(function if proprul == 2). |
| d\_gfad | real | Default fading energy. |
| d\_gfadf | integer | Default fading energy(function if proprul == 2). |
| d\_lcsb | integer | Default LC of bending stress scale factor wrt strain rate. |
| d\_lcsn | integer | Default LC of normal stress scale factor wrt strain rate. |
| d\_lcss | integer | Default LC of shear stress scale factor wrt strain rate. |
| d\_rank | real | Default rank value. |
| d\_sb | real | Default bending strength. |
| d\_sbf | integer | Default bending strength(function if proprul == 2). |
| d\_sclmrr | real | Default scaling factor for torsional moment in failure function. |
| d\_sigy | real | Default yield stress. |
| d\_sigyf | integer | Default yield stress(function if proprul == 2). |
| d\_sn | real | Default normal strength. |
| d\_snf | integer | Default normal strength(function if proprul == 2). |
| d\_ss | real | Default shear strength. |
| d\_ssf | integer | Default shear strength(function if proprul == 2). |
| dg\_typ | integer | Damage type. |
| exists (read only) | logical | true if \*DEFINE\_CONNECTION\_PROPERTIES exists, false if referred to but not defined. |
| heading | string | The title of the \*DEFINE\_CONNECTION\_PROPERTIES or the empty string if \_TITLE is not set |
| include | integer | The [Include](primer-include-class.md) file number that the \*DEFINE\_CONNECTION\_PROPERTIES is in. |
| moarfl | integer | Modelled area flag. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the \*DEFINE\_CONNECTION\_PROPERTIES is in. |
| proprul | integer | Property rule number. |

| Detailed Description<br>The ConnectionProperties class allows you to create, modify, edit and manipulate \*DEFINE\_CONNECTION\_PROPERTIES.<br>See the documentation below for more details. |
| --- |

| Constructor
new ConnectionProperties(Model*[[Model](primer-model-class.md)]*, con\_id*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [*DEFINE_CONNECTION_PROPERTIES](primer-connectionproperties-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that \*DEFINE\_CONNECTION\_PROPERTIES will be created in

* con\_id (integer)
 
[*DEFINE_CONNECTION_PROPERTIES](primer-connectionproperties-class.md) id.

* heading (optional) (string)
 
Title for the \*DEFINE\_CONNECTION\_PROPERTIES

| Returns
<br>[ConnectionProperties](primer-connectionproperties-class.md) object<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To create a new \*DEFINE\_CONNECTION\_PROPERTIES in model m with label 100:<br>
```
var c = new ConnectionProperties(m, 100);
```
 |
| --- |

| Details of functions 
AddMaterialDataLine()

Description<br>Allows user to add material data line in \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To Add Material data line in \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.AddMaterialDataLine();
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the \*DEFINE\_CONNECTION\_PROPERTIES

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
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
<br>To Browse \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the \*DEFINE\_CONNECTION\_PROPERTIES

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the \*DEFINE\_CONNECTION\_PROPERTIES. The target include of the copied \*DEFINE\_CONNECTION\_PROPERTIES can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>ConnectionProperties object<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To copy \*DEFINE\_CONNECTION\_PROPERTIES c into \*DEFINE\_CONNECTION\_PROPERTIES z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a \*DEFINE\_CONNECTION\_PROPERTIES |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the \*DEFINE\_CONNECTION\_PROPERTIES will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>ConnectionProperties object (or null if not made).<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To start creating a \*DEFINE\_CONNECTION\_PROPERTIES in model m:<br>
```
var c = ConnectionProperties.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the \*DEFINE\_CONNECTION\_PROPERTIES

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
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
<br>To Edit \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for \*DEFINE\_CONNECTION\_PROPERTIES. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first \*DEFINE\_CONNECTION\_PROPERTIES in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first \*DEFINE\_CONNECTION\_PROPERTIES in

| Returns
<br>ConnectionProperties object (or null if there are no \*DEFINE\_CONNECTION\_PROPERTIESs in the model).<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To get the first \*DEFINE\_CONNECTION\_PROPERTIES in model m:<br>
```
var c = ConnectionProperties.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free \*DEFINE\_CONNECTION\_PROPERTIES label in the model. Also see [ConnectionProperties.LastFreeLabel()](primer-connectionproperties-class.md#ConnectionProperties::LastFreeLabel), [ConnectionProperties.NextFreeLabel()](primer-connectionproperties-class.md#ConnectionProperties::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free \*DEFINE\_CONNECTION\_PROPERTIES label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>ConnectionProperties label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free \*DEFINE\_CONNECTION\_PROPERTIES label in model m:<br>
```
var label = ConnectionProperties.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the \*DEFINE\_CONNECTION\_PROPERTIESs in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*DEFINE\_CONNECTION\_PROPERTIESs will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*DEFINE\_CONNECTION\_PROPERTIESs

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the \*DEFINE\_CONNECTION\_PROPERTIESs with flag f in model m:<br>
```
ConnectionProperties.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the \*DEFINE\_CONNECTION\_PROPERTIES is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the \*DEFINE\_CONNECTION\_PROPERTIES

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if \*DEFINE\_CONNECTION\_PROPERTIES c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each \*DEFINE\_CONNECTION\_PROPERTIES in the model.<br> **Note that ForEach has been designed to make looping over \*DEFINE\_CONNECTION\_PROPERTIESs as fast as possible and so has some limitations. Firstly, a single temporary ConnectionProperties object is created and on each function call it is updated with the current \*DEFINE\_CONNECTION\_PROPERTIES data. This means that you should not try to store the ConnectionProperties object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new \*DEFINE\_CONNECTION\_PROPERTIESs inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*DEFINE\_CONNECTION\_PROPERTIESs are in

* func (function)
 
Function to call for each \*DEFINE\_CONNECTION\_PROPERTIES

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the \*DEFINE\_CONNECTION\_PROPERTIESs in model m:<br>
```
ConnectionProperties.ForEach(m, test);
function test(c)
{
// c is ConnectionProperties object
}
```
<br><br>To call function test for all of the \*DEFINE\_CONNECTION\_PROPERTIESs in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
ConnectionProperties.ForEach(m, test, data);
function test(c, extra)
{
// c is ConnectionProperties object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ConnectionProperties objects or properties for all of the \*DEFINE\_CONNECTION\_PROPERTIESs in a model in PRIMER. If the optional property argument is not given then an array of ConnectionProperties objects is returned. If the property argument is given, that property value for each \*DEFINE\_CONNECTION\_PROPERTIES is returned in the array instead of a ConnectionProperties object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*DEFINE\_CONNECTION\_PROPERTIESs from

* property (optional) (string)
 
Name for property to get for all \*DEFINE\_CONNECTION\_PROPERTIESs in the model

| Returns
<br>Array of ConnectionProperties objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ConnectionProperties objects for all of the \*DEFINE\_CONNECTION\_PROPERTIESs in model m:<br>
```
var a = ConnectionProperties.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each \*DEFINE\_CONNECTION\_PROPERTIES in model m:<br>
```
var a = ConnectionProperties.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
var comm_array = c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ConnectionProperties objects for all of the flagged \*DEFINE\_CONNECTION\_PROPERTIESs in a model in PRIMER If the optional property argument is not given then an array of ConnectionProperties objects is returned. If the property argument is given, then that property value for each \*DEFINE\_CONNECTION\_PROPERTIES is returned in the array instead of a ConnectionProperties object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get \*DEFINE\_CONNECTION\_PROPERTIESs from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*DEFINE\_CONNECTION\_PROPERTIESs that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged \*DEFINE\_CONNECTION\_PROPERTIESs in the model

| Returns
<br>Array of ConnectionProperties objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ConnectionProperties objects for all of the \*DEFINE\_CONNECTION\_PROPERTIESs in model m flagged with f:<br>
```
var c = ConnectionProperties.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the \*DEFINE\_CONNECTION\_PROPERTIESs in model m flagged with f:<br>
```
var a = ConnectionProperties.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the ConnectionProperties object for a \*DEFINE\_CONNECTION\_PROPERTIES ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the \*DEFINE\_CONNECTION\_PROPERTIES in

* number (integer)
 
number of the \*DEFINE\_CONNECTION\_PROPERTIES you want the ConnectionProperties object for

| Returns
<br>ConnectionProperties object (or null if \*DEFINE\_CONNECTION\_PROPERTIES does not exist).<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To get the ConnectionProperties object for \*DEFINE\_CONNECTION\_PROPERTIES 100 in model m<br>
```
var c = ConnectionProperties.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetMaterialDataLine(row*[integer]*)

Description<br>Returns the material data at given row in \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

* row (integer)
 
Material data row number, eg. for first material data, row = 0

| Returns
<br>Array of numbers containing the material id, sigy, e\_tan etc. .<br>
Return type
<br>Number |
| --- |

| Example
<br>To get material data at first row, row = 0 in \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.GetMaterialData(0);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a ConnectionProperties property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [ConnectionProperties.ViewParameters()](primer-connectionproperties-class.md#ConnectionProperties::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
\*DEFINE\_CONNECTION\_PROPERTIES property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if ConnectionProperties property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if ConnectionProperties property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this \*DEFINE\_CONNECTION\_PROPERTIES **Note that a carriage return is not added**. See also [ConnectionProperties.KeywordCards()](primer-connectionproperties-class.md#ConnectionProperties::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for ConnectionProperties c:<br>
```
var key = c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the \*DEFINE\_CONNECTION\_PROPERTIES. **Note that a carriage return is not added**. See also [ConnectionProperties.Keyword()](primer-connectionproperties-class.md#ConnectionProperties::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for connection\_properties c:<br>
```
var cards = c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last \*DEFINE\_CONNECTION\_PROPERTIES in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last \*DEFINE\_CONNECTION\_PROPERTIES in

| Returns
<br>ConnectionProperties object (or null if there are no \*DEFINE\_CONNECTION\_PROPERTIESs in the model).<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To get the last \*DEFINE\_CONNECTION\_PROPERTIES in model m:<br>
```
var c = ConnectionProperties.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free \*DEFINE\_CONNECTION\_PROPERTIES label in the model. Also see [ConnectionProperties.FirstFreeLabel()](primer-connectionproperties-class.md#ConnectionProperties::FirstFreeLabel), [ConnectionProperties.NextFreeLabel()](primer-connectionproperties-class.md#ConnectionProperties::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free \*DEFINE\_CONNECTION\_PROPERTIES label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>ConnectionProperties label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free \*DEFINE\_CONNECTION\_PROPERTIES label in model m:<br>
```
var label = ConnectionProperties.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next \*DEFINE\_CONNECTION\_PROPERTIES in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ConnectionProperties object (or null if there are no more \*DEFINE\_CONNECTION\_PROPERTIESs in the model).<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To get the \*DEFINE\_CONNECTION\_PROPERTIES in model m after \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) \*DEFINE\_CONNECTION\_PROPERTIES label in the model. Also see [ConnectionProperties.FirstFreeLabel()](primer-connectionproperties-class.md#ConnectionProperties::FirstFreeLabel), [ConnectionProperties.LastFreeLabel()](primer-connectionproperties-class.md#ConnectionProperties::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free \*DEFINE\_CONNECTION\_PROPERTIES label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>ConnectionProperties label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free \*DEFINE\_CONNECTION\_PROPERTIES label in model m:<br>
```
var label = ConnectionProperties.NextFreeLabel(m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous \*DEFINE\_CONNECTION\_PROPERTIES in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ConnectionProperties object (or null if there are no more \*DEFINE\_CONNECTION\_PROPERTIESs in the model).<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To get the \*DEFINE\_CONNECTION\_PROPERTIES in model m before \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| RemoveMaterialDataLine(row*[integer]*)

Description<br>Allows user to remove material data line in \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

* row (integer)
 
Material data row number, eg. for first material data, row = 0

| Returns
<br>No return value |
| --- |

| Example
<br>To remove first material data line in \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.RemoveMaterialDataLine(0);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the \*DEFINE\_CONNECTION\_PROPERTIESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all \*DEFINE\_CONNECTION\_PROPERTIESs will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*DEFINE\_CONNECTION\_PROPERTIESs in model m, from 1000000:<br>
```
ConnectionProperties.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged \*DEFINE\_CONNECTION\_PROPERTIESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged \*DEFINE\_CONNECTION\_PROPERTIESs will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the \*DEFINE\_CONNECTION\_PROPERTIESs that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the \*DEFINE\_CONNECTION\_PROPERTIESs in model m flagged with f, from 1000000:<br>
```
ConnectionProperties.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select \*DEFINE\_CONNECTION\_PROPERTIESs using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting \*DEFINE\_CONNECTION\_PROPERTIESs

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only \*DEFINE\_CONNECTION\_PROPERTIESs from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only \*DEFINE\_CONNECTION\_PROPERTIESs that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any \*DEFINE\_CONNECTION\_PROPERTIESs can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of \*DEFINE\_CONNECTION\_PROPERTIESs selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select \*DEFINE\_CONNECTION\_PROPERTIESs from model m, flagging those selected with flag f, giving the prompt 'Select \*DEFINE\_CONNECTION\_PROPERTIESs':<br>
```
ConnectionProperties.Select(f, 'Select *DEFINE_CONNECTION_PROPERTIESs', m);
```
<br><br>To select \*DEFINE\_CONNECTION\_PROPERTIESs, flagging those selected with flag f but limiting selection to \*DEFINE\_CONNECTION\_PROPERTIESs flagged with flag l, giving the prompt 'Select \*DEFINE\_CONNECTION\_PROPERTIESs':<br>
```
ConnectionProperties.Select(f, 'Select *DEFINE_CONNECTION_PROPERTIESs', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the \*DEFINE\_CONNECTION\_PROPERTIES

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| SetMaterialDataLine(row*[integer]*, mid*[integer]*, sigy (optional)*[real]*, etan (optional)*[real]*, dg\_pr (optional)*[real]*, rank (optional)*[real]*, sn (optional)*[real]*, sb (optional)*[real]*, ss (optional)*[real]*, exsn (optional)*[real]*, exsb (optional)*[real]*, exss (optional)*[real]*, lcsn (optional)*[integer]*, lcsb (optional)*[integer]*, lcss (optional)*[integer]*, gfad (optional)*[real]*, sclmrr (optional)*[real]*)

Description<br>Allows user to set fields for material data line at given row in \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

* row (integer)
 
Material data row number, eg. for first material data, row = 0

* mid (integer)
 
Material ID

* sigy (optional) (real)
 
Default yield stress

* etan (optional) (real)
 
Default tangent modulus

* dg\_pr (optional) (real)
 
Default damage parameter

* rank (optional) (real)
 
Default rank value

* sn (optional) (real)
 
Default normal strength

* sb (optional) (real)
 
Default bending strength

* ss (optional) (real)
 
Default shear strength

* exsn (optional) (real)
 
Default normal stress exponent

* exsb (optional) (real)
 
Default bending stress exponent

* exss (optional) (real)
 
Default shear stress exponent

* lcsn (optional) (integer)
 
Default LC of normal stress scale factor wrt strain rate

* lcsb (optional) (integer)
 
Default LC of bending stress scale factor wrt strain rate

* lcss (optional) (integer)
 
Default LC of shear stress scale factor wrt strain rate

* gfad (optional) (real)
 
Default fading energy

* sclmrr (optional) (real)
 
Default scaling factor for torsional moment in failure function

| Returns
<br>No return value |
| --- |

| Example
<br>To set material data at first row ( row = 0) to mat 111 in \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.SetMaterialData(0,111);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of \*DEFINE\_CONNECTION\_PROPERTIESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing \*DEFINE\_CONNECTION\_PROPERTIESs should be counted. If false or omitted
referenced but undefined \*DEFINE\_CONNECTION\_PROPERTIESs will also be included in the total.

| Returns
<br>number of \*DEFINE\_CONNECTION\_PROPERTIESs<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of \*DEFINE\_CONNECTION\_PROPERTIESs in model m:<br>
```
var total = ConnectionProperties.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the \*DEFINE\_CONNECTION\_PROPERTIESs in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all \*DEFINE\_CONNECTION\_PROPERTIESs will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the \*DEFINE\_CONNECTION\_PROPERTIESs

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the \*DEFINE\_CONNECTION\_PROPERTIESs in model m:<br>
```
ConnectionProperties.UnflagAll(m, f);
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
<br>[ConnectionProperties](primer-connectionproperties-class.md) object.<br>
Return type
<br>ConnectionProperties |
| --- |

| Example
<br>To check if ConnectionProperties property c.example is a parameter by using the [ConnectionProperties.GetParameter()](primer-connectionproperties-class.md#ConnectionProperties::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for \*DEFINE\_CONNECTION\_PROPERTIES. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this \*DEFINE\_CONNECTION\_PROPERTIES. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for \*DEFINE\_CONNECTION\_PROPERTIES c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the connection\_properties data in keyword format. Note that this contains the keyword header and the keyword cards. See also [ConnectionProperties.Keyword()](primer-connectionproperties-class.md#ConnectionProperties::Keyword) and [ConnectionProperties.KeywordCards()](primer-connectionproperties-class.md#ConnectionProperties::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for connection\_properties c in keyword format<br>
```
var str = c.toString();
```
 |
| --- |

* * *