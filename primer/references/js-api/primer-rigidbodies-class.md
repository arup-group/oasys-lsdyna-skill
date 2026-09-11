# RigidBodies class

The RigidBodies class gives you access to constrained rigid bodies cards in PRIMER. [More...](primer-rigidbodies-class.md#RigidBodies_details)

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

* [BlankAll](primer-rigidbodies-class.md#RigidBodies::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-rigidbodies-class.md#RigidBodies::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-rigidbodies-class.md#RigidBodies::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-rigidbodies-class.md#RigidBodies::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-rigidbodies-class.md#RigidBodies::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-rigidbodies-class.md#RigidBodies::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-rigidbodies-class.md#RigidBodies::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-rigidbodies-class.md#RigidBodies::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-rigidbodies-class.md#RigidBodies::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-rigidbodies-class.md#RigidBodies::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-rigidbodies-class.md#RigidBodies::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-rigidbodies-class.md#RigidBodies::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-rigidbodies-class.md#RigidBodies::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-rigidbodies-class.md#RigidBodies::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-rigidbodies-class.md#RigidBodies::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-rigidbodies-class.md#RigidBodies::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-rigidbodies-class.md#RigidBodies::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-rigidbodies-class.md#RigidBodies::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-rigidbodies-class.md#RigidBodies::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-rigidbodies-class.md#RigidBodies::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-rigidbodies-class.md#RigidBodies::Blank)()
* [Blanked](primer-rigidbodies-class.md#RigidBodies::Blanked)()
* [Browse](primer-rigidbodies-class.md#RigidBodies::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-rigidbodies-class.md#RigidBodies::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-rigidbodies-class.md#RigidBodies::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-rigidbodies-class.md#RigidBodies::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-rigidbodies-class.md#RigidBodies::Edit)(modal (optional)*[boolean]*)
* [Error](primer-rigidbodies-class.md#RigidBodies::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-rigidbodies-class.md#RigidBodies::ExtractColour)()
* [Flagged](primer-rigidbodies-class.md#RigidBodies::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-rigidbodies-class.md#RigidBodies::GetComments)()
* [GetParameter](primer-rigidbodies-class.md#RigidBodies::GetParameter)(prop*[string]*)
* [Keyword](primer-rigidbodies-class.md#RigidBodies::Keyword)()
* [KeywordCards](primer-rigidbodies-class.md#RigidBodies::KeywordCards)()
* [Next](primer-rigidbodies-class.md#RigidBodies::Next)()
* [Previous](primer-rigidbodies-class.md#RigidBodies::Previous)()
* [SetFlag](primer-rigidbodies-class.md#RigidBodies::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-rigidbodies-class.md#RigidBodies::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-rigidbodies-class.md#RigidBodies::Unblank)()
* [Unsketch](primer-rigidbodies-class.md#RigidBodies::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-rigidbodies-class.md#RigidBodies::ViewParameters)()
* [Warning](primer-rigidbodies-class.md#RigidBodies::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-rigidbodies-class.md#RigidBodies::Xrefs)()
* [toString](primer-rigidbodies-class.md#RigidBodies::toString)()

## RigidBodies constants

| **Name** | **Description** |
| --- | --- |
| RigidBodies.PART | RigidBodies is \*CONSTRAINED\_RIGID\_BODIES. |
| RigidBodies.SET | RigidBodies is \*CONSTRAINED\_RIGID\_BODIES\_SET. |

## RigidBodies properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour | [Colour](primer-colour-class.md) | The colour of the rigid body |
| exists (read only) | logical | true if rigid body merge exists, false if referred to but not defined. |
| iflag | integer | Flag for adding coonstrained mass properties to part inertia. |
| include | integer | The [Include](primer-include-class.md) file number that the rigid body merge is in. |
| label (read only) | integer | The label the constrained rigid bodies has in PRIMER |
| model (read only) | integer | The [Model](primer-model-class.md) number that the rigid body merge is in. |
| option | constant | The Constrained Rigid Bodies option. Can be [RigidBodies.PART](primer-rigidbodies-class.md#RigidBodies.PART) or [RigidBodies.SET](primer-rigidbodies-class.md#RigidBodies.SET). |
| pidc | integer | Constrained rigid body [part](primer-part-class.md) ID. |
| pidl | integer | Lead rigid body [part](primer-part-class.md) ID. |

| Detailed Description<br>The RigidBodies class allows you to create, modify, edit and manipulate constrained rigid bodies cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new RigidBodies(Model*[[Model](primer-model-class.md)]*, options *[object]*)

Description<br>Create a new [RigidBodies](primer-rigidbodies-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained rigid bodies will be created in

* options  (object)

Options specifying which properties would be used to create the keyword. If optional values are not used, then the default values below will be used. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| iflag (optional) | integer | Flag for adding constrained mass properties to part inertia. (Default value 0) |
| option (optional) | constant | Specify the type of constrained rigid bodies. Can be [RigidBodies.PART](primer-rigidbodies-class.md#RigidBodies.PART)(default) or [RigidBodies.SET](primer-rigidbodies-class.md#RigidBodies.SET) |
| pidc | integer | Constrained rigid body [part](primer-part-class.md) ID. |
| pidl | integer | Lead rigid body [part](primer-part-class.md) ID. |

| Returns
<br>[RigidBodies](primer-rigidbodies-class.md) object<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To create a new constrained rigid bodies in model m with lead part 6 and constrained SET\_PART 8<br>
```
 
    var output_obj    = new Object();
    output_obj.pidl   = 6;
    output_obj.pidc   = 8;
    output_obj.iflag  = 1;
    output_obj.option = RigidBodies.SET;
        
    var cnst = new RigidBodies(m, output_obj);
        
```
 |
| --- |

| new RigidBodies(Model*[[Model](primer-model-class.md)]*, pidl*[integer]*, pidc*[integer]*, iflag (optional)*[integer]*, option (optional)*[constant]*) [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [RigidBodies](primer-rigidbodies-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained rigid bodies will be created in

* pidl (integer)
 
Lead rigid body [part](primer-part-class.md) ID.

* pidc (integer)
 
Constrained rigid body [part](primer-part-class.md) ID.

* iflag (optional) (integer)
 
Flag for adding constrained mass properties to part inertia. (Default value 0)

* option (optional) (constant)
 
Specify the type of constrained rigid bodies. Can be [RigidBodies.PART](primer-rigidbodies-class.md#RigidBodies.PART)(default) or [RigidBodies.SET](primer-rigidbodies-class.md#RigidBodies.SET)

| Returns
<br>[RigidBodies](primer-rigidbodies-class.md) object<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To create a new constrained rigid bodies in model m with lead part 5 and constrained part 10<br>
```
var r = new RigidBodies(m, 5, 10, 0 , 1);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a rigid body merge. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the rigid body merge

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the rigid body merge m:<br>
```
m.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the rigid body merge |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank rigid body merge m:<br>
```
m.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the rigid body merges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigid body merges will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the rigid body merges in model m:<br>
```
RigidBodies.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged rigid body merges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged rigid body merges will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigid body merges that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the rigid body merges in model m flagged with f:<br>
```
RigidBodies.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the rigid body merge is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if rigid body merge m is blanked:<br>
```
if (m.Blanked() ) do_something...
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
<br>To Browse rigid body merge m:<br>
```
m.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the rigid body merge. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the rigid body merge

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for rigid body merge m:<br>
```
m.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the rigid body merge. The target include of the copied rigid body merge can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>RigidBodies object<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To copy rigid body merge m into rigid body merge z:<br>
```
var z = m.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a rigid body merge |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the rigid body merge will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>RigidBodies object (or null if not made).<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To start creating a rigid body merge in model m:<br>
```
var m = RigidBodies.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a rigid body merge. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the rigid body merge

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the rigid body merge m:<br>
```
m.DetachComment(c);
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
<br>To Edit rigid body merge m:<br>
```
m.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for rigid body merge. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for rigid body merge m:<br>
```
m.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for rigid body merge.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the rigid body merge [colour](primer-rigidbodies-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the rigid body merge. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing rigid body merge m:<br>
```
var colour = m.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first rigid body merge in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first rigid body merge in

| Returns
<br>RigidBodies object (or null if there are no rigid body merges in the model).<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To get the first rigid body merge in model m:<br>
```
var m = RigidBodies.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the rigid body merges in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigid body merges will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the rigid body merges

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the rigid body merges with flag f in model m:<br>
```
RigidBodies.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the rigid body merge is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the rigid body merge

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if rigid body merge m has flag f set on it:<br>
```
if (m.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each rigid body merge in the model.<br> **Note that ForEach has been designed to make looping over rigid body merges as fast as possible and so has some limitations. Firstly, a single temporary RigidBodies object is created and on each function call it is updated with the current rigid body merge data. This means that you should not try to store the RigidBodies object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new rigid body merges inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigid body merges are in

* func (function)
 
Function to call for each rigid body merge

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the rigid body merges in model m:<br>
```
RigidBodies.ForEach(m, test);
function test(m)
{
// m is RigidBodies object
}
```
<br><br>To call function test for all of the rigid body merges in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
RigidBodies.ForEach(m, test, data);
function test(m, extra)
{
// m is RigidBodies object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of RigidBodies objects or properties for all of the rigid body merges in a model in PRIMER. If the optional property argument is not given then an array of RigidBodies objects is returned. If the property argument is given, that property value for each rigid body merge is returned in the array instead of a RigidBodies object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get rigid body merges from

* property (optional) (string)
 
Name for property to get for all rigid body merges in the model

| Returns
<br>Array of RigidBodies objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of RigidBodies objects for all of the rigid body merges in model m:<br>
```
var a = RigidBodies.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each rigid body merge in model m:<br>
```
var a = RigidBodies.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a rigid body merge. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the rigid body merge m:<br>
```
var comm_array = m.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of RigidBodies objects for all of the flagged rigid body merges in a model in PRIMER If the optional property argument is not given then an array of RigidBodies objects is returned. If the property argument is given, then that property value for each rigid body merge is returned in the array instead of a RigidBodies object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get rigid body merges from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigid body merges that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged rigid body merges in the model

| Returns
<br>Array of RigidBodies objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of RigidBodies objects for all of the rigid body merges in model m flagged with f:<br>
```
var m = RigidBodies.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the rigid body merges in model m flagged with f:<br>
```
var a = RigidBodies.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the RigidBodies object for a rigid body merge ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the rigid body merge in

* number (integer)
 
number of the rigid body merge you want the RigidBodies object for

| Returns
<br>RigidBodies object (or null if rigid body merge does not exist).<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To get the RigidBodies object for rigid body merge 100 in model m<br>
```
var m = RigidBodies.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a RigidBodies property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [RigidBodies.ViewParameters()](primer-rigidbodies-class.md#RigidBodies::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
rigid body merge property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if RigidBodies property m.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (m.GetParameter(m.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if RigidBodies property m.example is a parameter by using the GetParameter method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this constrained rigid bodies (\*CONSTRAINED\_RIGID\_BODIES). **Note that a carriage return is not added**. See also [RigidBodies.KeywordCards()](primer-rigidbodies-class.md#RigidBodies::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for constrained rigid bodies r:<br>
```
var key = r.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the constrained rigid bodies. **Note that a carriage return is not added**. See also [RigidBodies.Keyword()](primer-rigidbodies-class.md#RigidBodies::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for constrained rigid bodies r:<br>
```
var cards = r.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last rigid body merge in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last rigid body merge in

| Returns
<br>RigidBodies object (or null if there are no rigid body merges in the model).<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To get the last rigid body merge in model m:<br>
```
var m = RigidBodies.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next rigid body merge in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>RigidBodies object (or null if there are no more rigid body merges in the model).<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To get the rigid body merge in model m after rigid body merge m:<br>
```
var m = m.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a rigid body merge. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only rigid body merges from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only rigid body merges that are flagged with *limit* can be selected. If omitted, or null, any rigid body merges from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[RigidBodies](primer-rigidbodies-class.md) object (or null if not picked)<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To pick a rigid body merge from model m giving the prompt 'Pick rigid body merge from screen':<br>
```
var m = RigidBodies.Pick('Pick rigid body merge from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous rigid body merge in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>RigidBodies object (or null if there are no more rigid body merges in the model).<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To get the rigid body merge in model m before rigid body merge m:<br>
```
var m = m.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select rigid body merges using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting rigid body merges

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only rigid body merges from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only rigid body merges that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any rigid body merges can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of rigid body merges selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select rigid body merges from model m, flagging those selected with flag f, giving the prompt 'Select rigid body merges':<br>
```
RigidBodies.Select(f, 'Select rigid body merges', m);
```
<br><br>To select rigid body merges, flagging those selected with flag f but limiting selection to rigid body merges flagged with flag l, giving the prompt 'Select rigid body merges':<br>
```
RigidBodies.Select(f, 'Select rigid body merges', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the rigid body merge. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the rigid body merge

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for rigid body merge m:<br>
```
m.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the rigid body merge. The rigid body merge will be sketched until you either call [RigidBodies.Unsketch()](primer-rigidbodies-class.md#RigidBodies::Unsketch), [RigidBodies.UnsketchAll()](primer-rigidbodies-class.md#RigidBodies::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigid body merge is sketched. If omitted redraw is true. If you want to sketch several rigid body merges and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch rigid body merge m:<br>
```
m.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged rigid body merges in the model. The rigid body merges will be sketched until you either call [RigidBodies.Unsketch()](primer-rigidbodies-class.md#RigidBodies::Unsketch), [RigidBodies.UnsketchFlagged()](primer-rigidbodies-class.md#RigidBodies::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged rigid body merges will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigid body merges that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigid body merges are sketched. If omitted redraw is true. If you want to sketch flagged rigid body merges several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all rigid body merges flagged with flag in model m:<br>
```
RigidBodies.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of rigid body merges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing rigid body merges should be counted. If false or omitted
referenced but undefined rigid body merges will also be included in the total.

| Returns
<br>number of rigid body merges<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of rigid body merges in model m:<br>
```
var total = RigidBodies.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the rigid body merge |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank rigid body merge m:<br>
```
m.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the rigid body merges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigid body merges will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the rigid body merges in model m:<br>
```
RigidBodies.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged rigid body merges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged rigid body merges will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigid body merges that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the rigid body merges in model m flagged with f:<br>
```
RigidBodies.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the rigid body merges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all rigid body merges will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the rigid body merges

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the rigid body merges in model m:<br>
```
RigidBodies.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the rigid body merge. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigid body merge is unsketched. If omitted redraw is true. If you want to unsketch several rigid body merges and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch rigid body merge m:<br>
```
m.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all rigid body merges. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigid body merges will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigid body merges are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all rigid body merges in model m:<br>
```
RigidBodies.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged rigid body merges in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all rigid body merges will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the rigid body merges that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the rigid body merges are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all rigid body merges flagged with flag in model m:<br>
```
RigidBodies.UnsketchAll(m, flag);
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
<br>[RigidBodies](primer-rigidbodies-class.md) object.<br>
Return type
<br>RigidBodies |
| --- |

| Example
<br>To check if RigidBodies property m.example is a parameter by using the [RigidBodies.GetParameter()](primer-rigidbodies-class.md#RigidBodies::GetParameter) method:<br>
```
if (m.ViewParameters().GetParameter(m.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for rigid body merge. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for rigid body merge m:<br>
```
m.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this rigid body merge. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for rigid body merge m:<br>
```
var xrefs = m.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the constrained rigid bodies data in keyword format. Note that this contains the keyword header and the keyword cards. See also [RigidBodies.Keyword()](primer-rigidbodies-class.md#RigidBodies::Keyword) and [RigidBodies.KeywordCards()](primer-rigidbodies-class.md#RigidBodies::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for constrained rigid bodies r in keyword format<br>
```
var s = r.toString();
```
 |
| --- |

* * *