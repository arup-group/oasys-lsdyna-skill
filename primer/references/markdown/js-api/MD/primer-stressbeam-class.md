# StressBeam class

The StressBeam class gives you access to define initial stress beam cards in PRIMER. [More...](primer-stressbeam-class.md#StressBeam_details)

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

* [First](primer-stressbeam-class.md#StressBeam::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-stressbeam-class.md#StressBeam::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-stressbeam-class.md#StressBeam::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-stressbeam-class.md#StressBeam::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-stressbeam-class.md#StressBeam::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-stressbeam-class.md#StressBeam::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-stressbeam-class.md#StressBeam::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-stressbeam-class.md#StressBeam::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-stressbeam-class.md#StressBeam::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-stressbeam-class.md#StressBeam::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-stressbeam-class.md#StressBeam::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-stressbeam-class.md#StressBeam::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-stressbeam-class.md#StressBeam::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-stressbeam-class.md#StressBeam::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-stressbeam-class.md#StressBeam::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [ClearFlag](primer-stressbeam-class.md#StressBeam::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-stressbeam-class.md#StressBeam::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-stressbeam-class.md#StressBeam::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-stressbeam-class.md#StressBeam::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-stressbeam-class.md#StressBeam::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-stressbeam-class.md#StressBeam::GetComments)()
* [GetIntegrationPoint](primer-stressbeam-class.md#StressBeam::GetIntegrationPoint)(index*[integer]*)
* [GetLocalAxesValues](primer-stressbeam-class.md#StressBeam::GetLocalAxesValues)()
* [GetParameter](primer-stressbeam-class.md#StressBeam::GetParameter)(prop*[string]*)
* [Keyword](primer-stressbeam-class.md#StressBeam::Keyword)()
* [KeywordCards](primer-stressbeam-class.md#StressBeam::KeywordCards)()
* [Next](primer-stressbeam-class.md#StressBeam::Next)()
* [Previous](primer-stressbeam-class.md#StressBeam::Previous)()
* [SetFlag](primer-stressbeam-class.md#StressBeam::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetIntegrationPoint](primer-stressbeam-class.md#StressBeam::SetIntegrationPoint)(index*[integer]*, data*[Array of data]*)
* [SetLocalAxesValues](primer-stressbeam-class.md#StressBeam::SetLocalAxesValues)(data*[Array of data]*)
* [Sketch](primer-stressbeam-class.md#StressBeam::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-stressbeam-class.md#StressBeam::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-stressbeam-class.md#StressBeam::ViewParameters)()
* [Warning](primer-stressbeam-class.md#StressBeam::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-stressbeam-class.md#StressBeam::Xrefs)()
* [toString](primer-stressbeam-class.md#StressBeam::toString)()

## StressBeam constants

### Constants for Coordinate system for stresses

| **Name** | **Description** |
| --- | --- |
| StressBeam.GLOBAL\_CSYS | Stress components are defined in the global coordinate system. |
| StressBeam.LOCAL\_CSYS | Stress components are defined in the local beam system. |

### Constants for Number of Axes

| **Name** | **Description** |
| --- | --- |
| StressBeam.NAXES\_0 | Number of variables giving beam local axes is zero. |
| StressBeam.NAXES\_12 | Number of variables giving beam local axes is 12. |

### Constants for Types of Rule

| **Name** | **Description** |
| --- | --- |
| StressBeam.RULE\_GUASS\_QUADRATURE\_NPTS\_1 | Type of Rule is 1 x 1 Gauss quadrature. Rule value is 1. Also sets [npts](primer-stressbeam-class.md#npts) to 1. |
| StressBeam.RULE\_GUASS\_QUADRATURE\_NPTS\_16 | Type of Rule is 4 x 4 Gauss quadrature. Rule value is 5. Also sets [npts](primer-stressbeam-class.md#npts) to 16. |
| StressBeam.RULE\_GUASS\_QUADRATURE\_NPTS\_4 | Type of Rule is 2 x 2 Gauss quadrature. Rule value is 2. Also sets [npts](primer-stressbeam-class.md#npts) to 4. |
| StressBeam.RULE\_GUASS\_QUADRATURE\_NPTS\_9 | Type of Rule is 3 x 3 Gauss quadrature. Rule value is 3. Also sets [npts](primer-stressbeam-class.md#npts) to 9. |
| StressBeam.RULE\_LOBATTO\_QUADRATURE\_NPTS\_9 | Type of Rule is 3 x 3 Lobatto quadrature. Rule value is 4. Also sets [npts](primer-stressbeam-class.md#npts) to 9. |

## StressBeam properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eid | integer | [Beam](primer-beam-class.md) Element ID |
| exists (read only) | logical | true if initial stress beam exists, false if referred to but not defined. |
| include | integer | The [Include](primer-include-class.md) file number that the initial stress beam is in. |
| large | logical | true if large format, false otherwise. |
| local | constant | Coordinate system for stresses. Valid values are: [StressBeam.GLOBAL_CSYS](primer-stressbeam-class.md#StressBeam.GLOBAL_CSYS) or [StressBeam.LOCAL_CSYS](primer-stressbeam-class.md#StressBeam.LOCAL_CSYS). |
| model (read only) | integer | The [Model](primer-model-class.md) number that the initial stress beam is in. |
| naxes | constant | Number of variables giving beam local axes. Valid values are: [StressBeam.NAXES_0](primer-stressbeam-class.md#StressBeam.NAXES_0) or [StressBeam.NAXES_12](primer-stressbeam-class.md#StressBeam.NAXES_12). |
| nhisv | integer | Number of additional history variables (only used if [large](primer-stressbeam-class.md#large) is TRUE). |
| npts | integer | Number of integration points. The property value is set automatically if the [rule](primer-stressbeam-class.md#rule) is NOT set to a [IntegrationBeam](primer-integrationbeam-class.md) label. |
| rule | integer | Integration rule type number. Valid values are: [StressBeam.RULE_GUASS_QUADRATURE_NPTS_1](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_1), [StressBeam.RULE_GUASS_QUADRATURE_NPTS_4](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_4), [StressBeam.RULE_GUASS_QUADRATURE_NPTS_9](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_9), [StressBeam.RULE_LOBATTO_QUADRATURE_NPTS_9](primer-stressbeam-class.md#StressBeam.RULE_LOBATTO_QUADRATURE_NPTS_9), [StressBeam.RULE_GUASS_QUADRATURE_NPTS_16](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_16) or a [IntegrationBeam](primer-integrationbeam-class.md) label as a negative value. |

| Detailed Description<br>The StressBeam class allows you to create, modify, edit and manipulate \*INITIAL\_STRESS\_BEAM cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new StressBeam(Model*[[Model](primer-model-class.md)]*, eid*[integer]*, rule*[integer]*, large (optional)*[boolean]*, nhisv (optional)*[integer]*, local (optional)*[constant]*, naxes (optional)*[constant]*)

Description<br>Create a new [StressBeam](primer-stressbeam-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that stress\_beam will be created in

* eid (integer)
 
[Beam](primer-beam-class.md) Element ID

* rule (integer)
 
Integration rule type number. Valid values are: [StressBeam.RULE_GUASS_QUADRATURE_NPTS_1](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_1), [StressBeam.RULE_GUASS_QUADRATURE_NPTS_4](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_4), [StressBeam.RULE_GUASS_QUADRATURE_NPTS_9](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_9), [StressBeam.RULE_LOBATTO_QUADRATURE_NPTS_9](primer-stressbeam-class.md#StressBeam.RULE_LOBATTO_QUADRATURE_NPTS_9), [StressBeam.RULE_GUASS_QUADRATURE_NPTS_16](primer-stressbeam-class.md#StressBeam.RULE_GUASS_QUADRATURE_NPTS_16) or a [IntegrationBeam](primer-integrationbeam-class.md) label as a negative value.

* large (optional) (boolean)
 
true if large format, false otherwise.

* nhisv (optional) (integer)
 
Number of additional history variables (only used if [large](primer-stressbeam-class.md#large) is TRUE).

* local (optional) (constant)
 
Coordinate system for stresses. Valid values are: [StressBeam.GLOBAL_CSYS](primer-stressbeam-class.md#StressBeam.GLOBAL_CSYS) or [StressBeam.LOCAL_CSYS](primer-stressbeam-class.md#StressBeam.LOCAL_CSYS).

* naxes (optional) (constant)
 
Number of variables giving beam local axes. Valid values are: [StressBeam.NAXES_0](primer-stressbeam-class.md#StressBeam.NAXES_0) or [StressBeam.NAXES_12](primer-stressbeam-class.md#StressBeam.NAXES_12).

| Returns
<br>[StressBeam](primer-stressbeam-class.md) object<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To create a new stress\_beam in model m, for beam element id 100 with 4 number of integration points and number of history variables as 4:<br>
```
var s = new StressBeam(m, 100, StressBeam.RULE_GUASS_QUADRATURE_NPTS_4, true, 4);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a initial stress beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the initial stress beam

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the initial stress beam isb:<br>
```
isb.AssociateComment(c);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the initial stress beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the initial stress beam

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for initial stress beam isb:<br>
```
isb.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the initial stress beam. The target include of the copied initial stress beam can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>StressBeam object<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To copy initial stress beam isb into initial stress beam z:<br>
```
var z = isb.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a initial stress beam. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the initial stress beam

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the initial stress beam isb:<br>
```
isb.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for initial stress beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for initial stress beam isb:<br>
```
isb.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first initial stress beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first initial stress beam in

| Returns
<br>StressBeam object (or null if there are no initial stress beams in the model).<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To get the first initial stress beam in model m:<br>
```
var isb = StressBeam.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the initial stress beams in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress beams will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial stress beams

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the initial stress beams with flag f in model m:<br>
```
StressBeam.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the initial stress beam is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the initial stress beam

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if initial stress beam isb has flag f set on it:<br>
```
if (isb.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each initial stress beam in the model.<br> **Note that ForEach has been designed to make looping over initial stress beams as fast as possible and so has some limitations. Firstly, a single temporary StressBeam object is created and on each function call it is updated with the current initial stress beam data. This means that you should not try to store the StressBeam object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new initial stress beams inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress beams are in

* func (function)
 
Function to call for each initial stress beam

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the initial stress beams in model m:<br>
```
StressBeam.ForEach(m, test);
function test(isb)
{
// isb is StressBeam object
}
```
<br><br>To call function test for all of the initial stress beams in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
StressBeam.ForEach(m, test, data);
function test(isb, extra)
{
// isb is StressBeam object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressBeam objects or properties for all of the initial stress beams in a model in PRIMER. If the optional property argument is not given then an array of StressBeam objects is returned. If the property argument is given, that property value for each initial stress beam is returned in the array instead of a StressBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial stress beams from

* property (optional) (string)
 
Name for property to get for all initial stress beams in the model

| Returns
<br>Array of StressBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressBeam objects for all of the initial stress beams in model m:<br>
```
var a = StressBeam.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each initial stress beam in model m:<br>
```
var a = StressBeam.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a initial stress beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the initial stress beam isb:<br>
```
var comm_array = isb.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of StressBeam objects for all of the flagged initial stress beams in a model in PRIMER If the optional property argument is not given then an array of StressBeam objects is returned. If the property argument is given, then that property value for each initial stress beam is returned in the array instead of a StressBeam object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get initial stress beams from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress beams that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged initial stress beams in the model

| Returns
<br>Array of StressBeam objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of StressBeam objects for all of the initial stress beams in model m flagged with f:<br>
```
var isb = StressBeam.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the initial stress beams in model m flagged with f:<br>
```
var a = StressBeam.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the StressBeam object for a initial stress beam ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the initial stress beam in

* number (integer)
 
number of the initial stress beam you want the StressBeam object for

| Returns
<br>StressBeam object (or null if initial stress beam does not exist).<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To get the StressBeam object for initial stress beam 100 in model m<br>
```
var isb = StressBeam.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetIntegrationPoint(index*[integer]*)

Description<br>Returns the data for a specific integration point as an array. For each integration point there will be 7 values if [large](primer-stressbeam-class.md#large) is FALSE. For each integration point there will be (7 + [nhisv](primer-stressbeam-class.md#nhisv)) values if [large](primer-stressbeam-class.md#large) is TRUE. There are [npts](primer-stressbeam-class.md#npts) integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

| Returns
<br>An array containing the integration point data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd integration point for initial stress beam isb:<br>
```
var data = isb.GetIntegrationPoint(2);
```
 |
| --- |

* * *

| GetLocalAxesValues()

Description<br>Returns the 12 axes values as an array. The axes values are valid only if the [naxes](primer-stressbeam-class.md#naxes) is set to [StressBeam.NAXES_12](primer-stressbeam-class.md#StressBeam.NAXES_12). |
| --- |

#### Arguments

No arguments

| Returns
<br>An array containing the axes values.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the axes values for initial stress beam isb:<br>
```
var data = isb.GetLocalAxesValues();
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a StressBeam property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [StressBeam.ViewParameters()](primer-stressbeam-class.md#StressBeam::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
initial stress beam property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if StressBeam property isb.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (isb.GetParameter(isb.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if StressBeam property isb.example is a parameter by using the GetParameter method:<br>
```
if (isb.ViewParameters().GetParameter(isb.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this initial stress beam (\*INITIAL\_STRESS\_BEAM). **Note that a carriage return is not added**. See also [StressBeam.KeywordCards()](primer-stressbeam-class.md#StressBeam::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for stress\_beam i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the initial stress beam. **Note that a carriage return is not added**. See also [StressBeam.Keyword()](primer-stressbeam-class.md#StressBeam::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for stress\_beam i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last initial stress beam in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last initial stress beam in

| Returns
<br>StressBeam object (or null if there are no initial stress beams in the model).<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To get the last initial stress beam in model m:<br>
```
var isb = StressBeam.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next initial stress beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressBeam object (or null if there are no more initial stress beams in the model).<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To get the initial stress beam in model m after initial stress beam isb:<br>
```
var isb = isb.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a initial stress beam. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial stress beams from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial stress beams that are flagged with *limit* can be selected. If omitted, or null, any initial stress beams from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[StressBeam](primer-stressbeam-class.md) object (or null if not picked)<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To pick a initial stress beam from model m giving the prompt 'Pick initial stress beam from screen':<br>
```
var isb = StressBeam.Pick('Pick initial stress beam from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous initial stress beam in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>StressBeam object (or null if there are no more initial stress beams in the model).<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To get the initial stress beam in model m before initial stress beam isb:<br>
```
var isb = isb.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select initial stress beams using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting initial stress beams

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only initial stress beams from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only initial stress beams that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any initial stress beams can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of initial stress beams selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select initial stress beams from model m, flagging those selected with flag f, giving the prompt 'Select initial stress beams':<br>
```
StressBeam.Select(f, 'Select initial stress beams', m);
```
<br><br>To select initial stress beams, flagging those selected with flag f but limiting selection to initial stress beams flagged with flag l, giving the prompt 'Select initial stress beams':<br>
```
StressBeam.Select(f, 'Select initial stress beams', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the initial stress beam. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the initial stress beam

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for initial stress beam isb:<br>
```
isb.SetFlag(f);
```
 |
| --- |

* * *

| SetIntegrationPoint(index*[integer]*, data*[Array of data]*)

Description<br>Set the data for a specific integration point. For each integration point there will be 7 values if [large](primer-stressbeam-class.md#large) is FALSE. For each integration point there will be (7 + [nhisv](primer-stressbeam-class.md#nhisv)) values if [large](primer-stressbeam-class.md#large) is TRUE. There are [npts](primer-stressbeam-class.md#npts) integration points. |
| --- |

#### Arguments

* index (integer)
 
Index you want the integration point data for. **Note that indices start at 0**.

* data (Array of data)
 
Array containing the integration point data. The array length should be 7 if [large](primer-stressbeam-class.md#large) is FALSE. The array length should be (7 + [nhisv](primer-stressbeam-class.md#nhisv)) if [large](primer-stressbeam-class.md#large) is TRUE.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the 3rd integration point data for initial stress beam isb to the values in array adata:<br>
```
isb.SetIntegrationPoint(2, adata);
```
 |
| --- |

* * *

| SetLocalAxesValues(data*[Array of data]*)

Description<br>Sets the 12 axes values as an array. The axes values are set only if the [naxes](primer-stressbeam-class.md#naxes) is set to [StressBeam.NAXES_12](primer-stressbeam-class.md#StressBeam.NAXES_12). |
| --- |

#### Arguments

* data (Array of data)
 
Array containing the axes values data. The array length should be 12.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the data for the axes values for initial stress beam isb:<br>
```
var data = isb.SetLocalAxesValues(data);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the initial stress beam. The initial stress beam will be sketched until you either call [StressBeam.Unsketch()](primer-stressbeam-class.md#StressBeam::Unsketch), [StressBeam.UnsketchAll()](primer-stressbeam-class.md#StressBeam::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress beam is sketched. If omitted redraw is true. If you want to sketch several initial stress beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch initial stress beam isb:<br>
```
isb.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged initial stress beams in the model. The initial stress beams will be sketched until you either call [StressBeam.Unsketch()](primer-stressbeam-class.md#StressBeam::Unsketch), [StressBeam.UnsketchFlagged()](primer-stressbeam-class.md#StressBeam::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged initial stress beams will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress beams that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress beams are sketched. If omitted redraw is true. If you want to sketch flagged initial stress beams several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all initial stress beams flagged with flag in model m:<br>
```
StressBeam.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of initial stress beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing initial stress beams should be counted. If false or omitted
referenced but undefined initial stress beams will also be included in the total.

| Returns
<br>number of initial stress beams<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of initial stress beams in model m:<br>
```
var total = StressBeam.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the initial stress beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all initial stress beams will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the initial stress beams

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the initial stress beams in model m:<br>
```
StressBeam.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the initial stress beam. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress beam is unsketched. If omitted redraw is true. If you want to unsketch several initial stress beams and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch initial stress beam isb:<br>
```
isb.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all initial stress beams. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress beams will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial stress beams in model m:<br>
```
StressBeam.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged initial stress beams in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all initial stress beams will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the initial stress beams that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the initial stress beams are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all initial stress beams flagged with flag in model m:<br>
```
StressBeam.UnsketchAll(m, flag);
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
<br>[StressBeam](primer-stressbeam-class.md) object.<br>
Return type
<br>StressBeam |
| --- |

| Example
<br>To check if StressBeam property isb.example is a parameter by using the [StressBeam.GetParameter()](primer-stressbeam-class.md#StressBeam::GetParameter) method:<br>
```
if (isb.ViewParameters().GetParameter(isb.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for initial stress beam. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for initial stress beam isb:<br>
```
isb.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this initial stress beam. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for initial stress beam isb:<br>
```
var xrefs = isb.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the initial stress beam data in keyword format. Note that this contains the keyword header and the keyword cards. See also [StressBeam.Keyword()](primer-stressbeam-class.md#StressBeam::Keyword) and [StressBeam.KeywordCards()](primer-stressbeam-class.md#StressBeam::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for stress\_beam i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *