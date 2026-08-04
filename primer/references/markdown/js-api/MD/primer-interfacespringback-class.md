# InterfaceSpringback class

The InterfaceSpringback class gives you access to interface springback cards in PRIMER. [More...](primer-interfacespringback-class.md#InterfaceSpringback_details)

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

* [Create](primer-interfacespringback-class.md#InterfaceSpringback::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-interfacespringback-class.md#InterfaceSpringback::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-interfacespringback-class.md#InterfaceSpringback::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-interfacespringback-class.md#InterfaceSpringback::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-interfacespringback-class.md#InterfaceSpringback::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-interfacespringback-class.md#InterfaceSpringback::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-interfacespringback-class.md#InterfaceSpringback::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-interfacespringback-class.md#InterfaceSpringback::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-interfacespringback-class.md#InterfaceSpringback::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-interfacespringback-class.md#InterfaceSpringback::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-interfacespringback-class.md#InterfaceSpringback::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AssociateComment](primer-interfacespringback-class.md#InterfaceSpringback::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Browse](primer-interfacespringback-class.md#InterfaceSpringback::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-interfacespringback-class.md#InterfaceSpringback::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-interfacespringback-class.md#InterfaceSpringback::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-interfacespringback-class.md#InterfaceSpringback::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-interfacespringback-class.md#InterfaceSpringback::Edit)(modal (optional)*[boolean]*)
* [Error](primer-interfacespringback-class.md#InterfaceSpringback::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-interfacespringback-class.md#InterfaceSpringback::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-interfacespringback-class.md#InterfaceSpringback::GetComments)()
* [GetExcludeKeyword](primer-interfacespringback-class.md#InterfaceSpringback::GetExcludeKeyword)(idx*[integer]*)
* [GetNodalPoint](primer-interfacespringback-class.md#InterfaceSpringback::GetNodalPoint)(npt*[integer]*)
* [GetParameter](primer-interfacespringback-class.md#InterfaceSpringback::GetParameter)(prop*[string]*)
* [Keyword](primer-interfacespringback-class.md#InterfaceSpringback::Keyword)()
* [KeywordCards](primer-interfacespringback-class.md#InterfaceSpringback::KeywordCards)()
* [Next](primer-interfacespringback-class.md#InterfaceSpringback::Next)()
* [Previous](primer-interfacespringback-class.md#InterfaceSpringback::Previous)()
* [RemoveExcludeKeyword](primer-interfacespringback-class.md#InterfaceSpringback::RemoveExcludeKeyword)(idx*[integer]*)
* [RemoveNodalPoint](primer-interfacespringback-class.md#InterfaceSpringback::RemoveNodalPoint)(npt*[integer]*)
* [SetExcludeKeyword](primer-interfacespringback-class.md#InterfaceSpringback::SetExcludeKeyword)(keystr*[string]*, index (optional)*[integer]*)
* [SetFlag](primer-interfacespringback-class.md#InterfaceSpringback::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetNodalPoint](primer-interfacespringback-class.md#InterfaceSpringback::SetNodalPoint)(npt*[integer]*, nid*[integer]*, tc*[real]*, rc*[real]*)
* [ViewParameters](primer-interfacespringback-class.md#InterfaceSpringback::ViewParameters)()
* [Warning](primer-interfacespringback-class.md#InterfaceSpringback::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-interfacespringback-class.md#InterfaceSpringback::Xrefs)()
* [toString](primer-interfacespringback-class.md#InterfaceSpringback::toString)()

## InterfaceSpringback constants

### Constants for Types of Keyword

| **Name** | **Description** |
| --- | --- |
| InterfaceSpringback.EXCLUDE | INTERFACE is \*INTERFACE\_SPRINGBACK\_EXCLUDE. |
| InterfaceSpringback.LSDYNA | INTERFACE is \*INTERFACE\_SPRINGBACK\_LSDYNA. |
| InterfaceSpringback.NASTRAN | INTERFACE is \*INTERFACE\_SPRINGBACK\_NASTRAN. |
| InterfaceSpringback.NIKE3D | INTERFACE is \*INTERFACE\_SPRINGBACK\_NIKE3D. |
| InterfaceSpringback.SEAMLESS | INTERFACE is \*INTERFACE\_SPRINGBACK\_SEAMLESS. |

## InterfaceSpringback properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cflag | integer | Output contact state. |
| dtwrt | real | Time Interval. |
| exists (read only) | logical | true if interface springback exists, false if referred to but not defined. |
| fsplit | integer | Flag for splitting of the dynain file (0 - One file, 1 - Two files.). Used for OPTCARD field. |
| ftensr | integer | Flag for dumping tensor data from the element history variables into the dynain file (0/1). |
| ftype | integer | Filetype (0-3, 10-12). |
| hflag | integer | Output hourglass state. |
| include | integer | The [Include](primer-include-class.md) file number that the interface springback is in. |
| intstrn | integer | Output of strains at all integration points of shell element is requested. |
| ivflg | integer | Initial volume output. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the interface springback is in. |
| ncyc | integer | Number of process cycles. Used for OPTCARD field. |
| ndflag | integer | Flag to dump nodes into dynain file. |
| nexclude | integer | gives the number of excluded keywords. Needed only for [InterfaceSpringback.EXCLUDE.](primer-interfacespringback-class.md#InterfaceSpringback.EXCLUDE) |
| nmwrt | integer | Maximum number of files. |
| nnodes | integer | gives the number of nodal points constrained for this keyword. (read\_only) |
| nothickness | logical | true if \_NOTHICKNESS (option2) is set. \_NOTHICKNESS can be used only for [InterfaceSpringback.LSDYNA](primer-interfacespringback-class.md#InterfaceSpringback.LSDYNA) or [InterfaceSpringback.NASTRAN](primer-interfacespringback-class.md#InterfaceSpringback.NASTRAN). |
| nshv | integer | Num additional Shell/Solid history variables number. |
| nthhsv | integer | Number of thermal history variables. |
| optcard | integer | (0) no optional cards (1) to have optional card 2 (2) to have optional cards 2, 3.1, 3.2. |
| psid | integer | [Part set](primer-set-class.md)ID for springback. |
| sldo | integer | Output of solid element data as 0 - \*ELEMENT\_SOLID, 1- \*ELEM\_SOLID\_ORTHO. Used for OPTCARD field. |
| type (read only) | integer | gives the type of InterfaceSpringback object. |

| Detailed Description<br>The InterfaceSpringback class allows you to create, modify, edit and manipulate interface springback cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new InterfaceSpringback(Model*[[Model](primer-model-class.md)]*, options *[object]*)

Description<br>Create a new [InterfaceSpringback](primer-interfacespringback-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that interface springback will be created in

* options  (object)

Options for creating the interface springback 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cflag (optional) | integer | Output contact state. |
| dtwrt | real | Time Interval. |
| fsplit (optional) | integer | Flag for splitting of the dynain file (0 - One file, 1 - Two files.). Used only for optional card. |
| ftensr (optional) | integer | Flag for dumping tensor data from the element history variables into the dynain file (0/1). |
| ftype (optional) | integer | Filetype (0-3, 10-12). |
| hflag (optional) | integer | Output hourglass state. |
| intstrn (optional) | integer | Output of strains at all integration points of shell element is requested. |
| ivflg | integer | Initial volume output. |
| keylist (optional) | Array of strings | List of keywords to be excluded.(ONLY for EXCLUDE) |
| ncyc (optional) | integer | Number of process cycles. Used only for optional card. |
| ndflag (optional) | integer | Flag to dump nodes into dynain file. |
| nmwrt | integer | Maximum number of files. |
| nshv (optional) | integer | Num additional Shell/Solid history variables number. |
| nthhsv (optional) | integer | Number of thermal history variables. |
| optcard (optional) | integer | (0) no optional cards (1) to have optional card 2 (2) to have optional cards 2, 3.1, 3.2. |
| psid (optional) | integer | [Part set](primer-set-class.md)ID for springback.(NOT for \_EXCLUDE) |
| sldo (optional) | integer | Output of solid element data as 0 - \*ELEMENT\_SOLID, 1- \*ELEM\_SOLID\_ORTHO. Used only for optional card. |
| type | constant | Specify the type of InterfaceSpringback (Can be [InterfaceSpringback.NIKE3D](primer-interfacespringback-class.md#InterfaceSpringback.NIKE3D) or [InterfaceSpringback.LSDYNA](primer-interfacespringback-class.md#InterfaceSpringback.LSDYNA) or [InterfaceSpringback.NASTRAN](primer-interfacespringback-class.md#InterfaceSpringback.NASTRAN) or [InterfaceSpringback.SEAMLESS](primer-interfacespringback-class.md#InterfaceSpringback.SEAMLESS) ) |

| Returns
<br>[InterfaceSpringback](primer-interfacespringback-class.md) object<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To create a new interface springback in model m, type LSDYNA, part set id 100:<br>
```
var i_s = new InterfaceSpringback(m, InterfaceSpringback.LSDYNA, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a interface springback. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the interface springback

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the interface springback i\_s:<br>
```
i_s.AssociateComment(c);
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
<br>To Browse interface springback i\_s:<br>
```
i_s.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the interface springback. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the interface springback

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for interface springback i\_s:<br>
```
i_s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the interface springback. The target include of the copied interface springback can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>InterfaceSpringback object<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To copy interface springback i\_s into interface springback z:<br>
```
var z = i_s.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a interface springback |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the interface springback will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>InterfaceSpringback object (or null if not made).<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To start creating a interface springback in model m:<br>
```
var i_s = InterfaceSpringback.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a interface springback. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the interface springback

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the interface springback i\_s:<br>
```
i_s.DetachComment(c);
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
<br>To Edit interface springback i\_s:<br>
```
i_s.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for interface springback. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for interface springback i\_s:<br>
```
i_s.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first interface springback in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first interface springback in

| Returns
<br>InterfaceSpringback object (or null if there are no interface springbacks in the model).<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To get the first interface springback in model m:<br>
```
var i_s = InterfaceSpringback.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the interface springbacks in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interface springbacks will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the interface springbacks

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the interface springbacks with flag f in model m:<br>
```
InterfaceSpringback.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the interface springback is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the interface springback

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if interface springback i\_s has flag f set on it:<br>
```
if (i_s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each interface springback in the model.<br> **Note that ForEach has been designed to make looping over interface springbacks as fast as possible and so has some limitations. Firstly, a single temporary InterfaceSpringback object is created and on each function call it is updated with the current interface springback data. This means that you should not try to store the InterfaceSpringback object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new interface springbacks inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interface springbacks are in

* func (function)
 
Function to call for each interface springback

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the interface springbacks in model m:<br>
```
InterfaceSpringback.ForEach(m, test);
function test(i_s)
{
// i_s is InterfaceSpringback object
}
```
<br><br>To call function test for all of the interface springbacks in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
InterfaceSpringback.ForEach(m, test, data);
function test(i_s, extra)
{
// i_s is InterfaceSpringback object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterfaceSpringback objects or properties for all of the interface springbacks in a model in PRIMER. If the optional property argument is not given then an array of InterfaceSpringback objects is returned. If the property argument is given, that property value for each interface springback is returned in the array instead of a InterfaceSpringback object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get interface springbacks from

* property (optional) (string)
 
Name for property to get for all interface springbacks in the model

| Returns
<br>Array of InterfaceSpringback objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterfaceSpringback objects for all of the interface springbacks in model m:<br>
```
var a = InterfaceSpringback.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each interface springback in model m:<br>
```
var a = InterfaceSpringback.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a interface springback. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the interface springback i\_s:<br>
```
var comm_array = i_s.GetComments();
```
 |
| --- |

* * *

| GetExcludeKeyword(idx*[integer]*)

Description<br>Returns the keyword string excluded at given index in Keyword list. Needed only for [InterfaceSpringback.EXCLUDE.](primer-interfacespringback-class.md#InterfaceSpringback.EXCLUDE) |
| --- |

#### Arguments

* idx (integer)
 
The index in Keyword list you want the Keyword string for. **Note that indices start at 0, not 1**.

| Returns
<br>A Keyword string at index "idx" from excluded keyword list .<br>
Return type
<br>String |
| --- |

| Example
<br>To get the 3rd Keyword string in Interface Springback i\_s:<br>
```
if (i_s.nexclude >= 3)
{
    var keyword = i_s.GetExcludeKeyword(2);
}
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterfaceSpringback objects for all of the flagged interface springbacks in a model in PRIMER If the optional property argument is not given then an array of InterfaceSpringback objects is returned. If the property argument is given, then that property value for each interface springback is returned in the array instead of a InterfaceSpringback object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get interface springbacks from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interface springbacks that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged interface springbacks in the model

| Returns
<br>Array of InterfaceSpringback objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterfaceSpringback objects for all of the interface springbacks in model m flagged with f:<br>
```
var i_s = InterfaceSpringback.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the interface springbacks in model m flagged with f:<br>
```
var a = InterfaceSpringback.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the InterfaceSpringback object for a interface springback ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the interface springback in

* number (integer)
 
number of the interface springback you want the InterfaceSpringback object for

| Returns
<br>InterfaceSpringback object (or null if interface springback does not exist).<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To get the InterfaceSpringback object for interface springback 100 in model m<br>
```
var i_s = InterfaceSpringback.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetNodalPoint(npt*[integer]*)

Description<br>Returns the data for nodal point constrained for \*INTERFACE\_SPRINGBACK. |
| --- |

#### Arguments

* npt (integer)
 
The nodal point you want the data for. **Note that nodal points start at 0, not 1**.

| Returns
<br>An array containing the [Node](primer-node-class.md) id, translational constraint (TC) and rotational constraint (RC) constants.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the nodal point data for the 3rd nodal constraint for Interface Springback i\_s:<br>
```
if (i_s.nnodes >= 3)
{
    var npt_data = i_s.GetNodalPoint(2);
}
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a InterfaceSpringback property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [InterfaceSpringback.ViewParameters()](primer-interfacespringback-class.md#InterfaceSpringback::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
interface springback property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if InterfaceSpringback property i\_s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (i_s.GetParameter(i_s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if InterfaceSpringback property i\_s.example is a parameter by using the GetParameter method:<br>
```
if (i_s.ViewParameters().GetParameter(i_s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Interface Springback (\*INTERFACE\_SPRINGBACK\_xxxx\_xxxx) **Note that a carriage return is not added**. See also [InterfaceSpringback.KeywordCards()](primer-interfacespringback-class.md#InterfaceSpringback::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for InterfaceSpringback i\_s:<br>
```
var key = i_s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the InterfaceSpringback. **Note that a carriage return is not added**. See also [InterfaceSpringback.Keyword()](primer-interfacespringback-class.md#InterfaceSpringback::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for InterfaceSpringback i\_s:<br>
```
var cards = i_s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last interface springback in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last interface springback in

| Returns
<br>InterfaceSpringback object (or null if there are no interface springbacks in the model).<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To get the last interface springback in model m:<br>
```
var i_s = InterfaceSpringback.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next interface springback in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterfaceSpringback object (or null if there are no more interface springbacks in the model).<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To get the interface springback in model m after interface springback i\_s:<br>
```
var i_s = i_s.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous interface springback in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterfaceSpringback object (or null if there are no more interface springbacks in the model).<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To get the interface springback in model m before interface springback i\_s:<br>
```
var i_s = i_s.Previous();
```
 |
| --- |

* * *

| RemoveExcludeKeyword(idx*[integer]*)

Description<br>Removes the keyword string excluded at given index in Keyword list. Needed only for [InterfaceSpringback.EXCLUDE](primer-interfacespringback-class.md#InterfaceSpringback.EXCLUDE) |
| --- |

#### Arguments

* idx (integer)
 
The index in Keyword list you removed. **Note that indices start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the 3rd Keyword string in Interface Springback i\_s:<br>
```
if (i_s.nexclude >= 3)
{
    var keyword = i_s.RemoveExcludeKeyword(2);
}
```
 |
| --- |

* * *

| RemoveNodalPoint(npt*[integer]*)

Description<br>Removes the nodal point for constrained node for \*INTERFACE\_SPRINGBACK. |
| --- |

#### Arguments

* npt (integer)
 
The nodal point you want to remove. **Note that nodal points start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the nodal point for the 3rd node for InterfaceSpringback i\_s:<br>
```
i_s.RemoveNodalPoint(2);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select interface springbacks using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting interface springbacks

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only interface springbacks from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only interface springbacks that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any interface springbacks can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of interface springbacks selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select interface springbacks from model m, flagging those selected with flag f, giving the prompt 'Select interface springbacks':<br>
```
InterfaceSpringback.Select(f, 'Select interface springbacks', m);
```
<br><br>To select interface springbacks, flagging those selected with flag f but limiting selection to interface springbacks flagged with flag l, giving the prompt 'Select interface springbacks':<br>
```
InterfaceSpringback.Select(f, 'Select interface springbacks', l);
```
 |
| --- |

* * *

| SetExcludeKeyword(keystr*[string]*, index (optional)*[integer]*)

Description<br>Sets a keyword string to be excluded. Adds a new keyword if index value is not given, else replaces the keyword string at given index. **Note that indices start at 0, not 1**. Needed only for [InterfaceSpringback.EXCLUDE](primer-interfacespringback-class.md#InterfaceSpringback.EXCLUDE) |
| --- |

#### Arguments

* keystr (string)
 
The keyword string you want to be excluded.

* index (optional) (integer)
 
The index at which keyword string should be set.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set a keyword string at index 3 to be excluded for InterfaceSpringback i\_s:<br>
```

if(i_s.nexclude >= 4)
    i_s.SetExcludeKeyword("ELEMENT_SHELL", 3);
    
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the interface springback. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the interface springback

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for interface springback i\_s:<br>
```
i_s.SetFlag(f);
```
 |
| --- |

* * *

| SetNodalPoint(npt*[integer]*, nid*[integer]*, tc*[real]*, rc*[real]*)

Description<br>Sets the nodal point data for a node in \*INTERFACE\_SPRINGBACK. |
| --- |

#### Arguments

* npt (integer)
 
The nodal point you want to set the data for. **Note that nodal points start at 0, not 1**.

* nid (integer)
 
[Node](primer-node-class.md) ID for the nodal point.

* tc (real)
 
Translational constraint constant of the nodal point. (0-7)

* rc (real)
 
Rotational constraint constant of the nodal point. (0-7)

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the nodal data for the 3rd nodal point to node 1, tc 2 and rc 4, for InterfaceSpringback i\_s:<br>
```
i_s.SetNodalPoint(2, 1, 2, 4);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of interface springbacks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing interface springbacks should be counted. If false or omitted
referenced but undefined interface springbacks will also be included in the total.

| Returns
<br>number of interface springbacks<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of interface springbacks in model m:<br>
```
var total = InterfaceSpringback.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the interface springbacks in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all interface springbacks will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the interface springbacks

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the interface springbacks in model m:<br>
```
InterfaceSpringback.UnflagAll(m, f);
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
<br>[InterfaceSpringback](primer-interfacespringback-class.md) object.<br>
Return type
<br>InterfaceSpringback |
| --- |

| Example
<br>To check if InterfaceSpringback property i\_s.example is a parameter by using the [InterfaceSpringback.GetParameter()](primer-interfacespringback-class.md#InterfaceSpringback::GetParameter) method:<br>
```
if (i_s.ViewParameters().GetParameter(i_s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for interface springback. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for interface springback i\_s:<br>
```
i_s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this interface springback. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for interface springback i\_s:<br>
```
var xrefs = i_s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the InterfaceSpringback data in keyword format. Note that this contains the keyword header and the keyword cards. See also [InterfaceSpringback.Keyword()](primer-interfacespringback-class.md#InterfaceSpringback::Keyword) and [InterfaceSpringback.KeywordCards()](primer-interfacespringback-class.md#InterfaceSpringback::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for InterfaceSpringback i\_s in keyword format<br>
```
var i_str = i_s.toString();
```
 |
| --- |

* * *