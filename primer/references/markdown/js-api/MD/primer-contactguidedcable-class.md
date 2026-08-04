# ContactGuidedCable class

The ContactGuidedCable class gives you access to define \*CONTACT\_GUIDED\_CABLE cards in PRIMER. [More...](primer-contactguidedcable-class.md#ContactGuidedCable_details)

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

* [BlankAll](primer-contactguidedcable-class.md#ContactGuidedCable::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-contactguidedcable-class.md#ContactGuidedCable::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-contactguidedcable-class.md#ContactGuidedCable::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-contactguidedcable-class.md#ContactGuidedCable::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-contactguidedcable-class.md#ContactGuidedCable::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-contactguidedcable-class.md#ContactGuidedCable::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-contactguidedcable-class.md#ContactGuidedCable::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-contactguidedcable-class.md#ContactGuidedCable::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-contactguidedcable-class.md#ContactGuidedCable::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-contactguidedcable-class.md#ContactGuidedCable::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-contactguidedcable-class.md#ContactGuidedCable::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-contactguidedcable-class.md#ContactGuidedCable::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-contactguidedcable-class.md#ContactGuidedCable::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-contactguidedcable-class.md#ContactGuidedCable::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-contactguidedcable-class.md#ContactGuidedCable::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-contactguidedcable-class.md#ContactGuidedCable::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-contactguidedcable-class.md#ContactGuidedCable::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-contactguidedcable-class.md#ContactGuidedCable::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-contactguidedcable-class.md#ContactGuidedCable::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-contactguidedcable-class.md#ContactGuidedCable::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-contactguidedcable-class.md#ContactGuidedCable::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-contactguidedcable-class.md#ContactGuidedCable::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-contactguidedcable-class.md#ContactGuidedCable::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-contactguidedcable-class.md#ContactGuidedCable::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-contactguidedcable-class.md#ContactGuidedCable::Blank)()
* [Blanked](primer-contactguidedcable-class.md#ContactGuidedCable::Blanked)()
* [ClearFlag](primer-contactguidedcable-class.md#ContactGuidedCable::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-contactguidedcable-class.md#ContactGuidedCable::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-contactguidedcable-class.md#ContactGuidedCable::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-contactguidedcable-class.md#ContactGuidedCable::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-contactguidedcable-class.md#ContactGuidedCable::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-contactguidedcable-class.md#ContactGuidedCable::GetComments)()
* [GetParameter](primer-contactguidedcable-class.md#ContactGuidedCable::GetParameter)(prop*[string]*)
* [Keyword](primer-contactguidedcable-class.md#ContactGuidedCable::Keyword)()
* [KeywordCards](primer-contactguidedcable-class.md#ContactGuidedCable::KeywordCards)()
* [Next](primer-contactguidedcable-class.md#ContactGuidedCable::Next)()
* [Previous](primer-contactguidedcable-class.md#ContactGuidedCable::Previous)()
* [SetFlag](primer-contactguidedcable-class.md#ContactGuidedCable::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-contactguidedcable-class.md#ContactGuidedCable::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-contactguidedcable-class.md#ContactGuidedCable::Unblank)()
* [Unsketch](primer-contactguidedcable-class.md#ContactGuidedCable::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-contactguidedcable-class.md#ContactGuidedCable::ViewParameters)()
* [Warning](primer-contactguidedcable-class.md#ContactGuidedCable::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-contactguidedcable-class.md#ContactGuidedCable::Xrefs)()
* [toString](primer-contactguidedcable-class.md#ContactGuidedCable::toString)()

## ContactGuidedCable constants

| **Name** | **Description** |
| --- | --- |
| ContactGuidedCable.PART | CONTACT is \*CONTACT\_GUIDED\_CABLE. |
| ContactGuidedCable.SET\_PART | CONTACT is \*CONTACT\_GUIDED\_CABLE\_SET. |

## ContactGuidedCable properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [ContactGuidedCable](primer-contactguidedcable-class.md) number. |
| endtol | real | Tolerance, in length units. |
| exists (read only) | logical | true if contact guided\_cable exists, false if referred to but not defined. |
| fric | real | Contact friction. |
| heading | string | [ContactGuidedCable](primer-contactguidedcable-class.md) heading |
| id | logical | TRUE if \_ID option is set, FALSE if not |
| include | integer | The [Include](primer-include-class.md) file number that the contact guided\_cable is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the contact guided\_cable is in. |
| nsid | integer | [Node Set](primer-set-class.md) ID that guides the 1D elements. |
| pid | integer | [Part](primer-part-class.md) ID or [Part Set](primer-set-class.md) ID |
| ptype | constant | The Contact Part type. Can be [ContactGuidedCable.PART](primer-contactguidedcable-class.md#ContactGuidedCable.PART) or [ContactGuidedCable.SET_PART](primer-contactguidedcable-class.md#ContactGuidedCable.SET_PART). |
| soft | integer | Flag for soft constraint option. Set to 1 for soft constraint. |
| ssfac | real | Stiffness scale factor for penalty stiffness value. The default value is unity. This applies to SOFT set to 0 and 1. |

| Detailed Description<br>The ContactGuidedCable class allows you to create, modify, edit and manipulate \*CONTACT\_GUIDED\_CABLE cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new ContactGuidedCable(Model*[[Model](primer-model-class.md)]*, ptype*[constant]*, nsid*[integer]*, pid*[integer]*, soft (optional)*[integer]*, ssfac (optional)*[real]*, fric (optional)*[real]*, cid (optional)*[integer]*, heading (optional)*[string]*, endtol (optional)*[real]*)

Description<br>Create a new [ContactGuidedCable](primer-contactguidedcable-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that ContactGuidedCable will be created in

* ptype (constant)
 
Specify the type of ContactGuidedCable (Can be [ContactGuidedCable.PART](primer-contactguidedcable-class.md#ContactGuidedCable.PART) or [ContactGuidedCable.SET_PART](primer-contactguidedcable-class.md#ContactGuidedCable.SET_PART)

* nsid (integer)
 
[Node Set](primer-set-class.md) ID that guides the 1D elements.

* pid (integer)
 
[Part](primer-part-class.md) ID or [Part Set](primer-set-class.md) ID

* soft (optional) (integer)
 
Flag for soft constraint option. Set to 1 for soft constraint.

* ssfac (optional) (real)
 
Stiffness scale factor for penalty stiffness value. The default value is unity. This applies to SOFT set to 0 and 1.

* fric (optional) (real)
 
Contact friction.

* cid (optional) (integer)
 
[ContactGuidedCable](primer-contactguidedcable-class.md) number (Same as label).

* heading (optional) (string)
 
[ContactGuidedCable](primer-contactguidedcable-class.md) heading (Same as title).

* endtol (optional) (real)
 
Tolerance, in length units.

| Returns
<br>[ContactGuidedCable](primer-contactguidedcable-class.md) object<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To create a new contact guided\_cable in model m, of ptype PART, with nsid 100, pid 10, soft 1 and ssfac 4.5.<br>
```
var c_g_c = new ContactGuidedCable(m, ContactGuidedCable.PART, 100, 10, 1, 4.5);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a contact guided\_cable. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the contact guided\_cable

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the contact guided\_cable c\_g\_c:<br>
```
c_g_c.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the contact guided\_cable |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank contact guided\_cable c\_g\_c:<br>
```
c_g_c.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contact guided\_cables will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the contact guided\_cables in model m:<br>
```
ContactGuidedCable.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged contact guided\_cables will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contact guided\_cables that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the contact guided\_cables in model m flagged with f:<br>
```
ContactGuidedCable.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the contact guided\_cable is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if contact guided\_cable c\_g\_c is blanked:<br>
```
if (c_g_c.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the contact guided\_cable. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the contact guided\_cable

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for contact guided\_cable c\_g\_c:<br>
```
c_g_c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the contact guided\_cable. The target include of the copied contact guided\_cable can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>ContactGuidedCable object<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To copy contact guided\_cable c\_g\_c into contact guided\_cable z:<br>
```
var z = c_g_c.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a contact guided\_cable. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the contact guided\_cable

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the contact guided\_cable c\_g\_c:<br>
```
c_g_c.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for contact guided\_cable. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for contact guided\_cable c\_g\_c:<br>
```
c_g_c.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first contact guided\_cable in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first contact guided\_cable in

| Returns
<br>ContactGuidedCable object (or null if there are no contact guided\_cables in the model).<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To get the first contact guided\_cable in model m:<br>
```
var c_g_c = ContactGuidedCable.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free contact guided\_cable label in the model. Also see [ContactGuidedCable.LastFreeLabel()](primer-contactguidedcable-class.md#ContactGuidedCable::LastFreeLabel), [ContactGuidedCable.NextFreeLabel()](primer-contactguidedcable-class.md#ContactGuidedCable::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free contact guided\_cable label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>ContactGuidedCable label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free contact guided\_cable label in model m:<br>
```
var label = ContactGuidedCable.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the contact guided\_cables in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contact guided\_cables will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the contact guided\_cables

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the contact guided\_cables with flag f in model m:<br>
```
ContactGuidedCable.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the contact guided\_cable is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the contact guided\_cable

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if contact guided\_cable c\_g\_c has flag f set on it:<br>
```
if (c_g_c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each contact guided\_cable in the model.<br> **Note that ForEach has been designed to make looping over contact guided\_cables as fast as possible and so has some limitations. Firstly, a single temporary ContactGuidedCable object is created and on each function call it is updated with the current contact guided\_cable data. This means that you should not try to store the ContactGuidedCable object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new contact guided\_cables inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contact guided\_cables are in

* func (function)
 
Function to call for each contact guided\_cable

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the contact guided\_cables in model m:<br>
```
ContactGuidedCable.ForEach(m, test);
function test(c_g_c)
{
// c_g_c is ContactGuidedCable object
}
```
<br><br>To call function test for all of the contact guided\_cables in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
ContactGuidedCable.ForEach(m, test, data);
function test(c_g_c, extra)
{
// c_g_c is ContactGuidedCable object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ContactGuidedCable objects or properties for all of the contact guided\_cables in a model in PRIMER. If the optional property argument is not given then an array of ContactGuidedCable objects is returned. If the property argument is given, that property value for each contact guided\_cable is returned in the array instead of a ContactGuidedCable object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get contact guided\_cables from

* property (optional) (string)
 
Name for property to get for all contact guided\_cables in the model

| Returns
<br>Array of ContactGuidedCable objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ContactGuidedCable objects for all of the contact guided\_cables in model m:<br>
```
var a = ContactGuidedCable.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each contact guided\_cable in model m:<br>
```
var a = ContactGuidedCable.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a contact guided\_cable. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the contact guided\_cable c\_g\_c:<br>
```
var comm_array = c_g_c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of ContactGuidedCable objects for all of the flagged contact guided\_cables in a model in PRIMER If the optional property argument is not given then an array of ContactGuidedCable objects is returned. If the property argument is given, then that property value for each contact guided\_cable is returned in the array instead of a ContactGuidedCable object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get contact guided\_cables from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contact guided\_cables that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged contact guided\_cables in the model

| Returns
<br>Array of ContactGuidedCable objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of ContactGuidedCable objects for all of the contact guided\_cables in model m flagged with f:<br>
```
var c_g_c = ContactGuidedCable.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the contact guided\_cables in model m flagged with f:<br>
```
var a = ContactGuidedCable.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the ContactGuidedCable object for a contact guided\_cable ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the contact guided\_cable in

* number (integer)
 
number of the contact guided\_cable you want the ContactGuidedCable object for

| Returns
<br>ContactGuidedCable object (or null if contact guided\_cable does not exist).<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To get the ContactGuidedCable object for contact guided\_cable 100 in model m<br>
```
var c_g_c = ContactGuidedCable.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a ContactGuidedCable property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [ContactGuidedCable.ViewParameters()](primer-contactguidedcable-class.md#ContactGuidedCable::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
contact guided\_cable property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if ContactGuidedCable property c\_g\_c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c_g_c.GetParameter(c_g_c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if ContactGuidedCable property c\_g\_c.example is a parameter by using the GetParameter method:<br>
```
if (c_g_c.ViewParameters().GetParameter(c_g_c.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this ContactGuidedCable (\*contact\_guided\_cable). **Note that a carriage return is not added**. See also [ContactGuidedCable.KeywordCards()](primer-contactguidedcable-class.md#ContactGuidedCable::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for ContactGuidedCable c\_g\_c:<br>
```
var key = c_g_c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the ContactGuidedCable. **Note that a carriage return is not added**. See also [ContactGuidedCable.Keyword()](primer-contactguidedcable-class.md#ContactGuidedCable::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for ContactGuidedCable c\_g\_c:<br>
```
var cards = c_g_c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last contact guided\_cable in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last contact guided\_cable in

| Returns
<br>ContactGuidedCable object (or null if there are no contact guided\_cables in the model).<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To get the last contact guided\_cable in model m:<br>
```
var c_g_c = ContactGuidedCable.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free contact guided\_cable label in the model. Also see [ContactGuidedCable.FirstFreeLabel()](primer-contactguidedcable-class.md#ContactGuidedCable::FirstFreeLabel), [ContactGuidedCable.NextFreeLabel()](primer-contactguidedcable-class.md#ContactGuidedCable::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free contact guided\_cable label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>ContactGuidedCable label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free contact guided\_cable label in model m:<br>
```
var label = ContactGuidedCable.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next contact guided\_cable in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ContactGuidedCable object (or null if there are no more contact guided\_cables in the model).<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To get the contact guided\_cable in model m after contact guided\_cable c\_g\_c:<br>
```
var c_g_c = c_g_c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) contact guided\_cable label in the model. Also see [ContactGuidedCable.FirstFreeLabel()](primer-contactguidedcable-class.md#ContactGuidedCable::FirstFreeLabel), [ContactGuidedCable.LastFreeLabel()](primer-contactguidedcable-class.md#ContactGuidedCable::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free contact guided\_cable label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>ContactGuidedCable label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free contact guided\_cable label in model m:<br>
```
var label = ContactGuidedCable.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a contact guided\_cable. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only contact guided\_cables from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only contact guided\_cables that are flagged with *limit* can be selected. If omitted, or null, any contact guided\_cables from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[ContactGuidedCable](primer-contactguidedcable-class.md) object (or null if not picked)<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To pick a contact guided\_cable from model m giving the prompt 'Pick contact guided\_cable from screen':<br>
```
var c_g_c = ContactGuidedCable.Pick('Pick contact guided_cable from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous contact guided\_cable in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>ContactGuidedCable object (or null if there are no more contact guided\_cables in the model).<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To get the contact guided\_cable in model m before contact guided\_cable c\_g\_c:<br>
```
var c_g_c = c_g_c.Previous();
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contact guided\_cables will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the contact guided\_cables in model m, from 1000000:<br>
```
ContactGuidedCable.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged contact guided\_cables will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contact guided\_cables that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the contact guided\_cables in model m flagged with f, from 1000000:<br>
```
ContactGuidedCable.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select contact guided\_cables using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting contact guided\_cables

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only contact guided\_cables from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only contact guided\_cables that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any contact guided\_cables can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of contact guided\_cables selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select contact guided\_cables from model m, flagging those selected with flag f, giving the prompt 'Select contact guided\_cables':<br>
```
ContactGuidedCable.Select(f, 'Select contact guided_cables', m);
```
<br><br>To select contact guided\_cables, flagging those selected with flag f but limiting selection to contact guided\_cables flagged with flag l, giving the prompt 'Select contact guided\_cables':<br>
```
ContactGuidedCable.Select(f, 'Select contact guided_cables', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the contact guided\_cable. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the contact guided\_cable

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for contact guided\_cable c\_g\_c:<br>
```
c_g_c.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the contact guided\_cable. The contact guided\_cable will be sketched until you either call [ContactGuidedCable.Unsketch()](primer-contactguidedcable-class.md#ContactGuidedCable::Unsketch), [ContactGuidedCable.UnsketchAll()](primer-contactguidedcable-class.md#ContactGuidedCable::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contact guided\_cable is sketched. If omitted redraw is true. If you want to sketch several contact guided\_cables and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch contact guided\_cable c\_g\_c:<br>
```
c_g_c.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged contact guided\_cables in the model. The contact guided\_cables will be sketched until you either call [ContactGuidedCable.Unsketch()](primer-contactguidedcable-class.md#ContactGuidedCable::Unsketch), [ContactGuidedCable.UnsketchFlagged()](primer-contactguidedcable-class.md#ContactGuidedCable::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged contact guided\_cables will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contact guided\_cables that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contact guided\_cables are sketched. If omitted redraw is true. If you want to sketch flagged contact guided\_cables several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all contact guided\_cables flagged with flag in model m:<br>
```
ContactGuidedCable.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing contact guided\_cables should be counted. If false or omitted
referenced but undefined contact guided\_cables will also be included in the total.

| Returns
<br>number of contact guided\_cables<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of contact guided\_cables in model m:<br>
```
var total = ContactGuidedCable.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the contact guided\_cable |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank contact guided\_cable c\_g\_c:<br>
```
c_g_c.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contact guided\_cables will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the contact guided\_cables in model m:<br>
```
ContactGuidedCable.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged contact guided\_cables will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contact guided\_cables that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the contact guided\_cables in model m flagged with f:<br>
```
ContactGuidedCable.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all contact guided\_cables will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the contact guided\_cables

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the contact guided\_cables in model m:<br>
```
ContactGuidedCable.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the contact guided\_cable. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contact guided\_cable is unsketched. If omitted redraw is true. If you want to unsketch several contact guided\_cables and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch contact guided\_cable c\_g\_c:<br>
```
c_g_c.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all contact guided\_cables. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contact guided\_cables will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contact guided\_cables are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all contact guided\_cables in model m:<br>
```
ContactGuidedCable.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged contact guided\_cables in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all contact guided\_cables will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the contact guided\_cables that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the contact guided\_cables are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all contact guided\_cables flagged with flag in model m:<br>
```
ContactGuidedCable.UnsketchAll(m, flag);
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
<br>[ContactGuidedCable](primer-contactguidedcable-class.md) object.<br>
Return type
<br>ContactGuidedCable |
| --- |

| Example
<br>To check if ContactGuidedCable property c\_g\_c.example is a parameter by using the [ContactGuidedCable.GetParameter()](primer-contactguidedcable-class.md#ContactGuidedCable::GetParameter) method:<br>
```
if (c_g_c.ViewParameters().GetParameter(c_g_c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for contact guided\_cable. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for contact guided\_cable c\_g\_c:<br>
```
c_g_c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this contact guided\_cable. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for contact guided\_cable c\_g\_c:<br>
```
var xrefs = c_g_c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the ContactGuidedCable data in keyword format. Note that this contains the keyword header and the keyword cards. See also [ContactGuidedCable.Keyword()](primer-contactguidedcable-class.md#ContactGuidedCable::Keyword) and [ContactGuidedCable.KeywordCards()](primer-contactguidedcable-class.md#ContactGuidedCable::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for ContactGuidedCable c\_g\_c in keyword format<br>
```
var s = c_g_c.toString();
```
 |
| --- |

* * *