# Interpolation class

The Interpolation class gives you access to define \*CONSTRAINED\_INTERPOLATION cards in PRIMER. [More...](primer-interpolation-class.md#Interpolation_details)

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

* [BlankAll](primer-interpolation-class.md#Interpolation::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-interpolation-class.md#Interpolation::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-interpolation-class.md#Interpolation::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-interpolation-class.md#Interpolation::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-interpolation-class.md#Interpolation::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-interpolation-class.md#Interpolation::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-interpolation-class.md#Interpolation::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-interpolation-class.md#Interpolation::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-interpolation-class.md#Interpolation::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-interpolation-class.md#Interpolation::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-interpolation-class.md#Interpolation::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-interpolation-class.md#Interpolation::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-interpolation-class.md#Interpolation::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-interpolation-class.md#Interpolation::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-interpolation-class.md#Interpolation::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-interpolation-class.md#Interpolation::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-interpolation-class.md#Interpolation::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-interpolation-class.md#Interpolation::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-interpolation-class.md#Interpolation::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-interpolation-class.md#Interpolation::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-interpolation-class.md#Interpolation::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-interpolation-class.md#Interpolation::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-interpolation-class.md#Interpolation::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-interpolation-class.md#Interpolation::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AddRowData](primer-interpolation-class.md#Interpolation::AddRowData)(inid*[integer]*, idof (optional)*[integer]*, twghtx (optional)*[real]*, twghty (optional)*[real]*, twghtz (optional)*[real]*, rwghtx (optional)*[real]*, rwghty (optional)*[real]*, rwghtz (optional)*[real]*, cidi (optional)*[integer]*)
* [AssociateComment](primer-interpolation-class.md#Interpolation::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-interpolation-class.md#Interpolation::Blank)()
* [Blanked](primer-interpolation-class.md#Interpolation::Blanked)()
* [Browse](primer-interpolation-class.md#Interpolation::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-interpolation-class.md#Interpolation::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-interpolation-class.md#Interpolation::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-interpolation-class.md#Interpolation::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-interpolation-class.md#Interpolation::Edit)(modal (optional)*[boolean]*)
* [Error](primer-interpolation-class.md#Interpolation::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-interpolation-class.md#Interpolation::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-interpolation-class.md#Interpolation::GetComments)()
* [GetParameter](primer-interpolation-class.md#Interpolation::GetParameter)(prop*[string]*)
* [GetRowData](primer-interpolation-class.md#Interpolation::GetRowData)(row\_index*[Integer]*)
* [Keyword](primer-interpolation-class.md#Interpolation::Keyword)()
* [KeywordCards](primer-interpolation-class.md#Interpolation::KeywordCards)()
* [Next](primer-interpolation-class.md#Interpolation::Next)()
* [Previous](primer-interpolation-class.md#Interpolation::Previous)()
* [RemoveRowData](primer-interpolation-class.md#Interpolation::RemoveRowData)(row\_index*[Integer]*)
* [SetFlag](primer-interpolation-class.md#Interpolation::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetRowData](primer-interpolation-class.md#Interpolation::SetRowData)(row\_index*[Integer]*, inid*[integer]*, idof (optional)*[integer]*, twghtx (optional)*[real]*, twghty (optional)*[real]*, twghtz (optional)*[real]*, rwghtx (optional)*[real]*, rwghty (optional)*[real]*, rwghtz (optional)*[real]*, cidi (optional)*[integer]*)
* [Sketch](primer-interpolation-class.md#Interpolation::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-interpolation-class.md#Interpolation::Unblank)()
* [Unsketch](primer-interpolation-class.md#Interpolation::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-interpolation-class.md#Interpolation::ViewParameters)()
* [Warning](primer-interpolation-class.md#Interpolation::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-interpolation-class.md#Interpolation::Xrefs)()
* [toString](primer-interpolation-class.md#Interpolation::toString)()

## Interpolation constants

| **Name** | **Description** |
| --- | --- |
| Interpolation.NODE | INID is a node. |
| Interpolation.NODE\_SET | INID is a node set. |

## Interpolation properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cidd | integer | [Coordinate System](primer-coordinatesystem-class.md) ID if LOCAL option is active. |
| ddof | integer | Dependent Degrees-of-Freedom. |
| dnid | integer | Dependent [Node](primer-node-class.md) id. |
| exists (read only) | logical | true if constrained interpolation exists, false if referred to but not defined. |
| fgm | integer | Flag for special treatment of this constraint for implicit problems only. |
| icid | integer | [Interpolation](primer-interpolation-class.md) label |
| include | integer | The [Include](primer-include-class.md) file number that the constrained interpolation is in. |
| indsw | integer | Switch for controlling the explicit solution when an independent (or dependent) node is deleted. |
| ityp | constant | The Independent Node type. Can be [Interpolation.NODE](primer-interpolation-class.md#Interpolation.NODE) or [Interpolation.NODE_SET](primer-interpolation-class.md#Interpolation.NODE_SET). |
| local | logical | true if \_LOCAL is set. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the constrained interpolation is in. |
| total (read only) | integer | Total number of INID fields in the keyword. |

| Detailed Description<br>The Interpolation class allows you to create, modify, edit and manipulate \*CONSTRAINED\_INTERPOLATION cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Interpolation(Model*[[Model](primer-model-class.md)]*, icid*[integer]*, dnid*[integer]*, inid*[integer]*, ddof (optional)*[integer]*, local (optional)*[boolean]*, cidd (optional)*[integer]*, ityp (optional)*[constant]*, idof (optional)*[integer]*, twghtx (optional)*[real]*, twghty (optional)*[real]*, twghtz (optional)*[real]*, rwghtx (optional)*[real]*, rwghty (optional)*[real]*, rwghtz (optional)*[real]*, cidi (optional)*[integer]*)

Description<br>Create a new [Interpolation](primer-interpolation-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that Interpolation will be created in

* icid (integer)
 
[Interpolation](primer-interpolation-class.md) label

* dnid (integer)
 
Dependent [Node](primer-node-class.md) id.

* inid (integer)
 
Independent [Node](primer-node-class.md) or [Node Set](primer-set-class.md) id.

* ddof (optional) (integer)
 
Dependent Degrees-of-Freedom. The default value is 123456.

* local (optional) (boolean)
 
true if \_LOCAL is set.

* cidd (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID if LOCAL option is active. The default value is 0.

* ityp (optional) (constant)
 
The Independent Node type. Can be [Interpolation.NODE](primer-interpolation-class.md#Interpolation.NODE) or [Interpolation.NODE_SET](primer-interpolation-class.md#Interpolation.NODE_SET). The default value is Interpolation.NODE.

* idof (optional) (integer)
 
Independent Degrees-of-Freedom. The default value is 123456.

* twghtx (optional) (real)
 
Weighting factor for INID. Scales the x-translational component. The default value is 1.0.

* twghty (optional) (real)
 
Weighting factor for INID. Scales the y-translational component. The default value is twghtx.

* twghtz (optional) (real)
 
Weighting factor for INID. Scales the z-translational component. The default value is twghtx.

* rwghtx (optional) (real)
 
Weighting factor for INID. Scales the x-rotational component. The default value is twghtx.

* rwghty (optional) (real)
 
Weighting factor for INID. Scales the y-rotational component. The default value is twghtx.

* rwghtz (optional) (real)
 
Weighting factor for INID. Scales the z-rotational component. The default value is twghtx.

* cidi (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID if LOCAL option is active. The default value is 0

| Returns
<br>[Interpolation](primer-interpolation-class.md) object<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To create a new constrained interpolation in model m, of icid 2, dnid 12, inid 10, ddof 123, local true, cidd 22, ityp NODE\_SET, idof 12, and twghtx 2.24.<br>
```
var c_i = new Interpolation(m,2,12,10,123,true,22,Interpolation.NODE_SET,12,2.24);
```
 |
| --- |

| Details of functions 
AddRowData(inid*[integer]*, idof (optional)*[integer]*, twghtx (optional)*[real]*, twghty (optional)*[real]*, twghtz (optional)*[real]*, rwghtx (optional)*[real]*, rwghty (optional)*[real]*, rwghtz (optional)*[real]*, cidi (optional)*[integer]*)

Description<br>Used to add additional independent node card and local coordinate card (if ITYP is [Interpolation.NODE_SET](primer-interpolation-class.md#Interpolation.NODE_SET)) to the keyword. Adds this data to the end of the selected \*CONSTRAINED\_INTERPOLATION |
| --- |

#### Arguments

* inid (integer)
 
Independent [Node](primer-node-class.md) or [Node Set](primer-set-class.md) id.

* idof (optional) (integer)
 
Independent Degrees-of-Freedom. The default value is 123456.

* twghtx (optional) (real)
 
Weighting factor for INID. Scales the x-translational component. The default value is 1.0.

* twghty (optional) (real)
 
Weighting factor for INID. Scales the y-translational component. The default value is twghtx.

* twghtz (optional) (real)
 
Weighting factor for INID. Scales the z-translational component. The default value is twghtx.

* rwghtx (optional) (real)
 
Weighting factor for INID. Scales the x-rotational component. The default value is twghtx.

* rwghty (optional) (real)
 
Weighting factor for INID. Scales the y-rotational component. The default value is twghtx.

* rwghtz (optional) (real)
 
Weighting factor for INID. Scales the z-rotational component. The default value is twghtx.

* cidi (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID if LOCAL option is active. The default value is 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To add INID 10 to the keyword c\_i with idof 123, twghtx 1.2, twghty 2.2:<br>
```
c_i.AddRowData(10,123,1.2,2.2);
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a constrained interpolation. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the constrained interpolation

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the constrained interpolation c\_i:<br>
```
c_i.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the constrained interpolation |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank constrained interpolation c\_i:<br>
```
c_i.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained interpolations will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the constrained interpolations in model m:<br>
```
Interpolation.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained interpolations will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained interpolations that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the constrained interpolations in model m flagged with f:<br>
```
Interpolation.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the constrained interpolation is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if constrained interpolation c\_i is blanked:<br>
```
if (c_i.Blanked() ) do_something...
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
<br>To Browse constrained interpolation c\_i:<br>
```
c_i.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the constrained interpolation. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the constrained interpolation

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for constrained interpolation c\_i:<br>
```
c_i.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the constrained interpolation. The target include of the copied constrained interpolation can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Interpolation object<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To copy constrained interpolation c\_i into constrained interpolation z:<br>
```
var z = c_i.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a constrained interpolation |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the constrained interpolation will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Interpolation object (or null if not made).<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To start creating a constrained interpolation in model m:<br>
```
var c_i = Interpolation.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a constrained interpolation. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the constrained interpolation

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the constrained interpolation c\_i:<br>
```
c_i.DetachComment(c);
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
<br>To Edit constrained interpolation c\_i:<br>
```
c_i.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for constrained interpolation. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for constrained interpolation c\_i:<br>
```
c_i.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first constrained interpolation in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first constrained interpolation in

| Returns
<br>Interpolation object (or null if there are no constrained interpolations in the model).<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To get the first constrained interpolation in model m:<br>
```
var c_i = Interpolation.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free constrained interpolation label in the model. Also see [Interpolation.LastFreeLabel()](primer-interpolation-class.md#Interpolation::LastFreeLabel), [Interpolation.NextFreeLabel()](primer-interpolation-class.md#Interpolation::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free constrained interpolation label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Interpolation label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free constrained interpolation label in model m:<br>
```
var label = Interpolation.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the constrained interpolations in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained interpolations will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the constrained interpolations

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the constrained interpolations with flag f in model m:<br>
```
Interpolation.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the constrained interpolation is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the constrained interpolation

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if constrained interpolation c\_i has flag f set on it:<br>
```
if (c_i.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each constrained interpolation in the model.<br> **Note that ForEach has been designed to make looping over constrained interpolations as fast as possible and so has some limitations. Firstly, a single temporary Interpolation object is created and on each function call it is updated with the current constrained interpolation data. This means that you should not try to store the Interpolation object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new constrained interpolations inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained interpolations are in

* func (function)
 
Function to call for each constrained interpolation

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the constrained interpolations in model m:<br>
```
Interpolation.ForEach(m, test);
function test(c_i)
{
// c_i is Interpolation object
}
```
<br><br>To call function test for all of the constrained interpolations in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Interpolation.ForEach(m, test, data);
function test(c_i, extra)
{
// c_i is Interpolation object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Interpolation objects or properties for all of the constrained interpolations in a model in PRIMER. If the optional property argument is not given then an array of Interpolation objects is returned. If the property argument is given, that property value for each constrained interpolation is returned in the array instead of a Interpolation object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get constrained interpolations from

* property (optional) (string)
 
Name for property to get for all constrained interpolations in the model

| Returns
<br>Array of Interpolation objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Interpolation objects for all of the constrained interpolations in model m:<br>
```
var a = Interpolation.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each constrained interpolation in model m:<br>
```
var a = Interpolation.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a constrained interpolation. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the constrained interpolation c\_i:<br>
```
var comm_array = c_i.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Interpolation objects for all of the flagged constrained interpolations in a model in PRIMER If the optional property argument is not given then an array of Interpolation objects is returned. If the property argument is given, then that property value for each constrained interpolation is returned in the array instead of a Interpolation object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get constrained interpolations from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained interpolations that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged constrained interpolations in the model

| Returns
<br>Array of Interpolation objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Interpolation objects for all of the constrained interpolations in model m flagged with f:<br>
```
var c_i = Interpolation.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the constrained interpolations in model m flagged with f:<br>
```
var a = Interpolation.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Interpolation object for a constrained interpolation ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the constrained interpolation in

* number (integer)
 
number of the constrained interpolation you want the Interpolation object for

| Returns
<br>Interpolation object (or null if constrained interpolation does not exist).<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To get the Interpolation object for constrained interpolation 100 in model m<br>
```
var c_i = Interpolation.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Interpolation property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Interpolation.ViewParameters()](primer-interpolation-class.md#Interpolation::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
constrained interpolation property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Interpolation property c\_i.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c_i.GetParameter(c_i.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Interpolation property c\_i.example is a parameter by using the GetParameter method:<br>
```
if (c_i.ViewParameters().GetParameter(c_i.example) ) do_something...
```
 |
| --- |

* * *

| GetRowData(row\_index*[Integer]*)

Description<br>Returns independent node cards and local coordinate cards (if ITYP is [Interpolation.NODE_SET](primer-interpolation-class.md#Interpolation.NODE_SET)) for the selected row of the \*CONSTRAINED\_INTERPOLATION. |
| --- |

#### Arguments

* row\_index (Integer)
 
The row index of the data to return. **Note that indices start at 0, not 1**.
 0 &lt;= row\_index &lt; Interpolation.total

| Returns
<br>Array containing data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To loop over all the lines of the keyword for c\_i:<br>
```
for (i=0; i<c_i.total; i++)
        var data = c_i.GetRowData(i);
      
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this Interpolation (\*constrained\_interpolation). **Note that a carriage return is not added**. See also [Interpolation.KeywordCards()](primer-interpolation-class.md#Interpolation::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for Interpolation c\_i:<br>
```
var key = c_i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the Interpolation. **Note that a carriage return is not added**. See also [Interpolation.Keyword()](primer-interpolation-class.md#Interpolation::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for Interpolation c\_i:<br>
```
var cards = c_i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last constrained interpolation in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last constrained interpolation in

| Returns
<br>Interpolation object (or null if there are no constrained interpolations in the model).<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To get the last constrained interpolation in model m:<br>
```
var c_i = Interpolation.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free constrained interpolation label in the model. Also see [Interpolation.FirstFreeLabel()](primer-interpolation-class.md#Interpolation::FirstFreeLabel), [Interpolation.NextFreeLabel()](primer-interpolation-class.md#Interpolation::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free constrained interpolation label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Interpolation label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free constrained interpolation label in model m:<br>
```
var label = Interpolation.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next constrained interpolation in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Interpolation object (or null if there are no more constrained interpolations in the model).<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To get the constrained interpolation in model m after constrained interpolation c\_i:<br>
```
var c_i = c_i.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) constrained interpolation label in the model. Also see [Interpolation.FirstFreeLabel()](primer-interpolation-class.md#Interpolation::FirstFreeLabel), [Interpolation.LastFreeLabel()](primer-interpolation-class.md#Interpolation::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free constrained interpolation label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Interpolation label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free constrained interpolation label in model m:<br>
```
var label = Interpolation.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a constrained interpolation. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only constrained interpolations from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only constrained interpolations that are flagged with *limit* can be selected. If omitted, or null, any constrained interpolations from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Interpolation](primer-interpolation-class.md) object (or null if not picked)<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To pick a constrained interpolation from model m giving the prompt 'Pick constrained interpolation from screen':<br>
```
var c_i = Interpolation.Pick('Pick constrained interpolation from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous constrained interpolation in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Interpolation object (or null if there are no more constrained interpolations in the model).<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To get the constrained interpolation in model m before constrained interpolation c\_i:<br>
```
var c_i = c_i.Previous();
```
 |
| --- |

* * *

| RemoveRowData(row\_index*[Integer]*)

Description<br>Removes an independent node card and a local coordinate card (if ITYP is [Interpolation.NODE_SET](primer-interpolation-class.md#Interpolation.NODE_SET)) for the selected row on the \*CONSTRAINED\_INTERPOLATION. |
| --- |

#### Arguments

* row\_index (Integer)
 
The row index of the data to return. **Note that indices start at 0, not 1**.
 0 &lt;= row\_index &lt; Interpolation.total

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove row 2 for c\_i:<br>
```
 c_i.RemoveRowData(1);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained interpolations will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the constrained interpolations in model m, from 1000000:<br>
```
Interpolation.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained interpolations will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained interpolations that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the constrained interpolations in model m flagged with f, from 1000000:<br>
```
Interpolation.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select constrained interpolations using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting constrained interpolations

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only constrained interpolations from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only constrained interpolations that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any constrained interpolations can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of constrained interpolations selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select constrained interpolations from model m, flagging those selected with flag f, giving the prompt 'Select constrained interpolations':<br>
```
Interpolation.Select(f, 'Select constrained interpolations', m);
```
<br><br>To select constrained interpolations, flagging those selected with flag f but limiting selection to constrained interpolations flagged with flag l, giving the prompt 'Select constrained interpolations':<br>
```
Interpolation.Select(f, 'Select constrained interpolations', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the constrained interpolation. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the constrained interpolation

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for constrained interpolation c\_i:<br>
```
c_i.SetFlag(f);
```
 |
| --- |

* * *

| SetRowData(row\_index*[Integer]*, inid*[integer]*, idof (optional)*[integer]*, twghtx (optional)*[real]*, twghty (optional)*[real]*, twghtz (optional)*[real]*, rwghtx (optional)*[real]*, rwghty (optional)*[real]*, rwghtz (optional)*[real]*, cidi (optional)*[integer]*)

Description<br>Used to reset values in already existing independent node cards and local coordinate cards (if ITYP is [Interpolation.NODE_SET](primer-interpolation-class.md#Interpolation.NODE_SET)) in the selected row of \*CONSTRAINED\_INTERPOLATION |
| --- |

#### Arguments

* row\_index (Integer)
 
The row index of the data to return. **Note that indices start at 0, not 1**.
 0 &lt;= row\_index &lt; Interpolation.total

* inid (integer)
 
Independent [Node](primer-node-class.md) or [Node Set](primer-set-class.md) id.

* idof (optional) (integer)
 
Independent Degrees-of-Freedom. The default value is 123456.

* twghtx (optional) (real)
 
Weighting factor for INID. Scales the x-translational component. The default value is 1.0.

* twghty (optional) (real)
 
Weighting factor for INID. Scales the y-translational component. The default value is twghtx.

* twghtz (optional) (real)
 
Weighting factor for INID. Scales the z-translational component. The default value is twghtx.

* rwghtx (optional) (real)
 
Weighting factor for INID. Scales the x-rotational component. The default value is twghtx.

* rwghty (optional) (real)
 
Weighting factor for INID. Scales the y-rotational component. The default value is twghtx.

* rwghtz (optional) (real)
 
Weighting factor for INID. Scales the z-rotational component. The default value is twghtx.

* cidi (optional) (integer)
 
[Coordinate System](primer-coordinatesystem-class.md) ID if LOCAL option is active. The default value is 0

| Returns
<br>No return value |
| --- |

| Example
<br>To reset the values of row 3 of the keyword with INID 11, idof 1234, twghtx 2.2, twghty 4.2:<br>
```
c_i.SetRowData(2,11,1234,2.2,4.2);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the constrained interpolation. The constrained interpolation will be sketched until you either call [Interpolation.Unsketch()](primer-interpolation-class.md#Interpolation::Unsketch), [Interpolation.UnsketchAll()](primer-interpolation-class.md#Interpolation::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained interpolation is sketched. If omitted redraw is true. If you want to sketch several constrained interpolations and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch constrained interpolation c\_i:<br>
```
c_i.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged constrained interpolations in the model. The constrained interpolations will be sketched until you either call [Interpolation.Unsketch()](primer-interpolation-class.md#Interpolation::Unsketch), [Interpolation.UnsketchFlagged()](primer-interpolation-class.md#Interpolation::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged constrained interpolations will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained interpolations that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained interpolations are sketched. If omitted redraw is true. If you want to sketch flagged constrained interpolations several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all constrained interpolations flagged with flag in model m:<br>
```
Interpolation.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing constrained interpolations should be counted. If false or omitted
referenced but undefined constrained interpolations will also be included in the total.

| Returns
<br>number of constrained interpolations<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of constrained interpolations in model m:<br>
```
var total = Interpolation.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the constrained interpolation |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank constrained interpolation c\_i:<br>
```
c_i.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained interpolations will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the constrained interpolations in model m:<br>
```
Interpolation.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged constrained interpolations will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained interpolations that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the constrained interpolations in model m flagged with f:<br>
```
Interpolation.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all constrained interpolations will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the constrained interpolations

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the constrained interpolations in model m:<br>
```
Interpolation.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the constrained interpolation. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained interpolation is unsketched. If omitted redraw is true. If you want to unsketch several constrained interpolations and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch constrained interpolation c\_i:<br>
```
c_i.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all constrained interpolations. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained interpolations will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained interpolations are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all constrained interpolations in model m:<br>
```
Interpolation.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged constrained interpolations in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all constrained interpolations will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the constrained interpolations that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the constrained interpolations are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all constrained interpolations flagged with flag in model m:<br>
```
Interpolation.UnsketchAll(m, flag);
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
<br>[Interpolation](primer-interpolation-class.md) object.<br>
Return type
<br>Interpolation |
| --- |

| Example
<br>To check if Interpolation property c\_i.example is a parameter by using the [Interpolation.GetParameter()](primer-interpolation-class.md#Interpolation::GetParameter) method:<br>
```
if (c_i.ViewParameters().GetParameter(c_i.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for constrained interpolation. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for constrained interpolation c\_i:<br>
```
c_i.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this constrained interpolation. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for constrained interpolation c\_i:<br>
```
var xrefs = c_i.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the Interpolation data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Interpolation.Keyword()](primer-interpolation-class.md#Interpolation::Keyword) and [Interpolation.KeywordCards()](primer-interpolation-class.md#Interpolation::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for Interpolation c\_i in keyword format<br>
```
var s = c_i.toString();
```
 |
| --- |

* * *