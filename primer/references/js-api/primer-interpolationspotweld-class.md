# InterpolationSpotweld (Spr3) class

The InterpolationSpotweld class gives you access to constrained Interpolation Spotweld (spr3) cards in PRIMER. [More...](primer-interpolationspotweld-class.md#InterpolationSpotweld_details)

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

* [BlankAll](primer-interpolationspotweld-class.md#InterpolationSpotweld::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-interpolationspotweld-class.md#InterpolationSpotweld::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-interpolationspotweld-class.md#InterpolationSpotweld::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-interpolationspotweld-class.md#InterpolationSpotweld::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-interpolationspotweld-class.md#InterpolationSpotweld::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-interpolationspotweld-class.md#InterpolationSpotweld::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-interpolationspotweld-class.md#InterpolationSpotweld::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-interpolationspotweld-class.md#InterpolationSpotweld::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-interpolationspotweld-class.md#InterpolationSpotweld::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-interpolationspotweld-class.md#InterpolationSpotweld::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-interpolationspotweld-class.md#InterpolationSpotweld::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-interpolationspotweld-class.md#InterpolationSpotweld::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-interpolationspotweld-class.md#InterpolationSpotweld::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-interpolationspotweld-class.md#InterpolationSpotweld::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-interpolationspotweld-class.md#InterpolationSpotweld::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-interpolationspotweld-class.md#InterpolationSpotweld::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-interpolationspotweld-class.md#InterpolationSpotweld::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-interpolationspotweld-class.md#InterpolationSpotweld::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-interpolationspotweld-class.md#InterpolationSpotweld::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-interpolationspotweld-class.md#InterpolationSpotweld::Blank)()
* [Blanked](primer-interpolationspotweld-class.md#InterpolationSpotweld::Blanked)()
* [ClearFlag](primer-interpolationspotweld-class.md#InterpolationSpotweld::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-interpolationspotweld-class.md#InterpolationSpotweld::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-interpolationspotweld-class.md#InterpolationSpotweld::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-interpolationspotweld-class.md#InterpolationSpotweld::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-interpolationspotweld-class.md#InterpolationSpotweld::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-interpolationspotweld-class.md#InterpolationSpotweld::GetComments)()
* [GetParameter](primer-interpolationspotweld-class.md#InterpolationSpotweld::GetParameter)(prop*[string]*)
* [Keyword](primer-interpolationspotweld-class.md#InterpolationSpotweld::Keyword)()
* [KeywordCards](primer-interpolationspotweld-class.md#InterpolationSpotweld::KeywordCards)()
* [Next](primer-interpolationspotweld-class.md#InterpolationSpotweld::Next)()
* [Previous](primer-interpolationspotweld-class.md#InterpolationSpotweld::Previous)()
* [SetFlag](primer-interpolationspotweld-class.md#InterpolationSpotweld::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-interpolationspotweld-class.md#InterpolationSpotweld::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-interpolationspotweld-class.md#InterpolationSpotweld::Unblank)()
* [Unsketch](primer-interpolationspotweld-class.md#InterpolationSpotweld::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-interpolationspotweld-class.md#InterpolationSpotweld::ViewParameters)()
* [Warning](primer-interpolationspotweld-class.md#InterpolationSpotweld::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-interpolationspotweld-class.md#InterpolationSpotweld::Xrefs)()
* [toString](primer-interpolationspotweld-class.md#InterpolationSpotweld::toString)()

## InterpolationSpotweld constants

### Constants for Flags for Interpolation

| **Name** | **Description** |
| --- | --- |
| InterpolationSpotweld.INVERSE | Property INTP value EQ.2.0: Inverse distance weighting. |
| InterpolationSpotweld.LINEAR | Property INTP value EQ.0.0: Linear (default). |
| InterpolationSpotweld.UNIFORM | Property INTP value EQ.1.0: Uniform. |

### Constants for Material behaviour and damage model

| **Name** | **Description** |
| --- | --- |
| InterpolationSpotweld.SPR3 | SPR3 (default) |
| InterpolationSpotweld.SPR3\_MAT\_PARAM | SPR3 with selected material parameters as functions |
| InterpolationSpotweld.SPR3\_MAT\_PARAM\_MOD | SPR3 with selected material parameters as functions and slight modification |
| InterpolationSpotweld.SPR4 | SPR4 |
| InterpolationSpotweld.SPR4\_MAT\_PARAM | SPR4 with selected material parameters as functions |
| InterpolationSpotweld.SPR4\_MAT\_PARAM\_MOD | SPR4 with selected material parameters as functions and slight modification |

## InterpolationSpotweld properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| alpha1 | real/integer | Scaling factor alpha 1. Function ID if MODEL &gt; 10. |
| alpha2 | real | Plastic initiation displacement scaling factor alpha2. |
| alpha3 | real | Plastic initiation displacement scaling factor alpha3. |
| bdmodel | real | Material behaviour and damage model. Values can be [InterpolationSpotweld.SPR3](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3), [InterpolationSpotweld.SPR4](primer-interpolationspotweld-class.md#InterpolationSpotweld.Spr4), [InterpolationSpotweld.SPR3_MAT_PARAM](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3_Mat_Param), [InterpolationSpotweld.SPR4_MAT_PARAM](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR4_Mat_Param), [InterpolationSpotweld.SPR3_MAT_PARAM_MOD](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3_MAT_PARAM_MOD) or [InterpolationSpotweld.SPR4_MAT_PARAM_MOD](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR4_MAT_PARAM_MOD) |
| beta | real | Exponent for plastic potential beta 1. Function ID if bdmodel &gt; 10. |
| beta2 | real | Exponent for plastic initiation displacement beta2. |
| beta3 | real | Exponent for plastic initiation displacement beta3. |
| defc | real | Fading energy for damage. Function ID if bdmodel &gt; 30. |
| dens | real | Spotweld density (necessary for time step calculation). |
| exfc | real | Failure function exponent. Function ID if bdmodel &gt; 30. |
| exists (read only) | logical | true if interpolation spotweld exists, false if referred to but not defined. |
| ffb | real | Resultant bending force at failure. Function ID if bdmodel &gt; 30. |
| ffn | real | Resultant normal force at failure. Function ID if bdmodel &gt; 30. |
| ffs | real | Resultant shear force at failure. Function ID if bdmodel &gt; 30. |
| gamma | real | Scaling factor. Function ID if bdmodel &gt; 30. |
| heading | string | Title |
| include | integer | The [Include](primer-include-class.md) file number that the interpolation spotweld is in. |
| intp | real | Flag for interpolation. Values can be [InterpolationSpotweld.LINEAR](primer-interpolationspotweld-class.md#InterpolationSpotweld.LINEAR), [InterpolationSpotweld.UNIFORM](primer-interpolationspotweld-class.md#InterpolationSpotweld.UNIFORM) or [InterpolationSpotweld.INVERSE](primer-interpolationspotweld-class.md#InterpolationSpotweld.INVERSE). |
| lcdexp | integer | Load curve ID for damage exponent vs. mode mixity |
| lcf | integer | Load curve ID describing force versus plastic displacement. |
| lcupf | integer | Load curve ID describing plastic initiation displacement versus mode mixity. Required only for material behaviour and damage models [InterpolationSpotweld.SPR3](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3), [InterpolationSpotweld.SPR3_MAT_PARAM](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3_MAT_PARAM) or [InterpolationSpotweld.SPR3_MAT_PARAM_MOD](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3_MAT_PARAM_MOD). |
| lcupr | integer | Load curve ID describing plastic rupture displacement versus mode mixity. Required only for material behaviour and damage models [InterpolationSpotweld.SPR3](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3), [InterpolationSpotweld.SPR3_MAT_PARAM](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3_MAT_PARAM) or [InterpolationSpotweld.SPR3_MAT_PARAM_MOD](primer-interpolationspotweld-class.md#InterpolationSpotweld.SPR3_MAT_PARAM_MOD). |
| mfsfc | real | Scaling factor for torsion term in resultant shear force. Function ID if bdmodel &gt; 30. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the interpolation spotweld is in. |
| mrn | real | Proportionality factor for dependency RN. |
| mrs | real | Proportionality factor for dependency RS. |
| npfc | real | Plastic displacement offset for damage initiation. Function ID if bdmodel &gt; 30. |
| nsid | integer | [Node Set](primer-set-class.md) ID of spotweld location nodes. |
| pid1 | integer | [Part](primer-part-class.md) ID of first sheet. |
| pid2 | integer | [Part](primer-part-class.md) ID |
| pidvb | real | Part ID for visualization beams representing SPR3 in post-processing. |
| r | real | Spotweld Radius. |
| rn | real/integer | Tensile strength factor or negative Load curve with ID giving as a function of peel ratio . Function ID if MODEL &gt; 10. |
| rs | real | Shear strength factor. Function ID if bdmodel &gt; 10. |
| scarn | real | Scale factor for tensile strength factor RN |
| scars | real | Scale factor for tensile strength factor RS |
| sropt | real | Shear rotation option. |
| stiff | real/integer | Elastic stiffness OR material ID if less than 0. Function ID if MODEL &gt; 10. |
| stiff2 | real | Elastic shear stiffness. Function ID if bdmodel &gt; 30. |
| stiff3 | real | Elastic bending stiffness. Function ID if bdmodel &gt; 30. |
| stiff4 | real | Elastic torsional stiffness. Function ID if bdmodel &gt; 30. |
| stifp | real | Plastic stiffness. Function ID if bdmodel &gt; 30. |
| thick | real | Total thickness of both sheets. |
| upfn | real | Plastic initiation displacement in normal direction. |
| upfs | real | Plastic initiation displacement in shear direction. |
| uprn | real | Plastic rupture displacement in normal direction. |
| uprs | real | Plastic rupture displacement in shear direction. |

| Detailed Description<br>The InterpolationSpotweld class allows you to create, modify, edit and manipulate constrained interpolation spotweld (spr3) cards.<br>See the documentation below for more details.<br>
<br>For convenience "Spr3" can also be used as the class name instead of "InterpolationSpotweld". |
| --- |

| Constructor
new InterpolationSpotweld(Model*[[Model](primer-model-class.md)]*, pid1*[integer]*, pid2*[integer]*, nsid*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [InterpolationSpotweld](primer-interpolationspotweld-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that constrained interpolation spotweld will be created in

* pid1 (integer)
 
[Part](primer-part-class.md) ID of first sheet.

* pid2 (integer)
 
[Part](primer-part-class.md) ID of second sheet.

* nsid (integer)
 
[Node Set](primer-set-class.md) ID of spotweld location nodes.

* heading (optional) (string)
 
Title for the constrained interpolation spotweld

| Returns
<br>[InterpolationSpotweld](primer-interpolationspotweld-class.md) object<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To create a new constrained interpolation spotweld in model m with first sheet 100, second sheet 200 and spotweld node set 100<br>
```
var s = new InterpolationSpotweld(m, 100, 200, 100);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a interpolation spotweld. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the interpolation spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the interpolation spotweld s:<br>
```
s.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the interpolation spotweld |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank interpolation spotweld s:<br>
```
s.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the interpolation spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interpolation spotwelds will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the interpolation spotwelds in model m:<br>
```
InterpolationSpotweld.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged interpolation spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged interpolation spotwelds will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interpolation spotwelds that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the interpolation spotwelds in model m flagged with f:<br>
```
InterpolationSpotweld.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the interpolation spotweld is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if interpolation spotweld s is blanked:<br>
```
if (s.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the interpolation spotweld. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the interpolation spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for interpolation spotweld s:<br>
```
s.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the interpolation spotweld. The target include of the copied interpolation spotweld can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>InterpolationSpotweld object<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To copy interpolation spotweld s into interpolation spotweld z:<br>
```
var z = s.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a interpolation spotweld. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the interpolation spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the interpolation spotweld s:<br>
```
s.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for interpolation spotweld. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for interpolation spotweld s:<br>
```
s.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first interpolation spotweld in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first interpolation spotweld in

| Returns
<br>InterpolationSpotweld object (or null if there are no interpolation spotwelds in the model).<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To get the first interpolation spotweld in model m:<br>
```
var s = InterpolationSpotweld.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the interpolation spotwelds in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interpolation spotwelds will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the interpolation spotwelds

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the interpolation spotwelds with flag f in model m:<br>
```
InterpolationSpotweld.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the interpolation spotweld is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the interpolation spotweld

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if interpolation spotweld s has flag f set on it:<br>
```
if (s.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each interpolation spotweld in the model.<br> **Note that ForEach has been designed to make looping over interpolation spotwelds as fast as possible and so has some limitations. Firstly, a single temporary InterpolationSpotweld object is created and on each function call it is updated with the current interpolation spotweld data. This means that you should not try to store the InterpolationSpotweld object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new interpolation spotwelds inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interpolation spotwelds are in

* func (function)
 
Function to call for each interpolation spotweld

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the interpolation spotwelds in model m:<br>
```
InterpolationSpotweld.ForEach(m, test);
function test(s)
{
// s is InterpolationSpotweld object
}
```
<br><br>To call function test for all of the interpolation spotwelds in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
InterpolationSpotweld.ForEach(m, test, data);
function test(s, extra)
{
// s is InterpolationSpotweld object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterpolationSpotweld objects or properties for all of the interpolation spotwelds in a model in PRIMER. If the optional property argument is not given then an array of InterpolationSpotweld objects is returned. If the property argument is given, that property value for each interpolation spotweld is returned in the array instead of a InterpolationSpotweld object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get interpolation spotwelds from

* property (optional) (string)
 
Name for property to get for all interpolation spotwelds in the model

| Returns
<br>Array of InterpolationSpotweld objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterpolationSpotweld objects for all of the interpolation spotwelds in model m:<br>
```
var a = InterpolationSpotweld.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each interpolation spotweld in model m:<br>
```
var a = InterpolationSpotweld.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a interpolation spotweld. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the interpolation spotweld s:<br>
```
var comm_array = s.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of InterpolationSpotweld objects for all of the flagged interpolation spotwelds in a model in PRIMER If the optional property argument is not given then an array of InterpolationSpotweld objects is returned. If the property argument is given, then that property value for each interpolation spotweld is returned in the array instead of a InterpolationSpotweld object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get interpolation spotwelds from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interpolation spotwelds that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged interpolation spotwelds in the model

| Returns
<br>Array of InterpolationSpotweld objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of InterpolationSpotweld objects for all of the interpolation spotwelds in model m flagged with f:<br>
```
var s = InterpolationSpotweld.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the interpolation spotwelds in model m flagged with f:<br>
```
var a = InterpolationSpotweld.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the InterpolationSpotweld object for a interpolation spotweld ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the interpolation spotweld in

* number (integer)
 
number of the interpolation spotweld you want the InterpolationSpotweld object for

| Returns
<br>InterpolationSpotweld object (or null if interpolation spotweld does not exist).<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To get the InterpolationSpotweld object for interpolation spotweld 100 in model m<br>
```
var s = InterpolationSpotweld.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a InterpolationSpotweld property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [InterpolationSpotweld.ViewParameters()](primer-interpolationspotweld-class.md#InterpolationSpotweld::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
interpolation spotweld property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if InterpolationSpotweld property s.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (s.GetParameter(s.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if InterpolationSpotweld property s.example is a parameter by using the GetParameter method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this interpolation spotweld (\*CONSTRAINED\_INTERPOLATION\_SPOTWELD). **Note that a carriage return is not added**. See also [InterpolationSpotweld.KeywordCards()](primer-interpolationspotweld-class.md#InterpolationSpotweld::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for interpolation spotweld s:<br>
```
var key = s.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the interpolation spotweld. **Note that a carriage return is not added**. See also [InterpolationSpotweld.Keyword()](primer-interpolationspotweld-class.md#InterpolationSpotweld::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for interpolation spotweld s:<br>
```
var cards = s.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last interpolation spotweld in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last interpolation spotweld in

| Returns
<br>InterpolationSpotweld object (or null if there are no interpolation spotwelds in the model).<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To get the last interpolation spotweld in model m:<br>
```
var s = InterpolationSpotweld.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next interpolation spotweld in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterpolationSpotweld object (or null if there are no more interpolation spotwelds in the model).<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To get the interpolation spotweld in model m after interpolation spotweld s:<br>
```
var s = s.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a interpolation spotweld. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only interpolation spotwelds from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only interpolation spotwelds that are flagged with *limit* can be selected. If omitted, or null, any interpolation spotwelds from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[InterpolationSpotweld](primer-interpolationspotweld-class.md) object (or null if not picked)<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To pick a interpolation spotweld from model m giving the prompt 'Pick interpolation spotweld from screen':<br>
```
var s = InterpolationSpotweld.Pick('Pick interpolation spotweld from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous interpolation spotweld in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>InterpolationSpotweld object (or null if there are no more interpolation spotwelds in the model).<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To get the interpolation spotweld in model m before interpolation spotweld s:<br>
```
var s = s.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select interpolation spotwelds using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting interpolation spotwelds

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only interpolation spotwelds from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only interpolation spotwelds that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any interpolation spotwelds can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of interpolation spotwelds selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select interpolation spotwelds from model m, flagging those selected with flag f, giving the prompt 'Select interpolation spotwelds':<br>
```
InterpolationSpotweld.Select(f, 'Select interpolation spotwelds', m);
```
<br><br>To select interpolation spotwelds, flagging those selected with flag f but limiting selection to interpolation spotwelds flagged with flag l, giving the prompt 'Select interpolation spotwelds':<br>
```
InterpolationSpotweld.Select(f, 'Select interpolation spotwelds', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the interpolation spotweld. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the interpolation spotweld

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for interpolation spotweld s:<br>
```
s.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the interpolation spotweld. The interpolation spotweld will be sketched until you either call [InterpolationSpotweld.Unsketch()](primer-interpolationspotweld-class.md#InterpolationSpotweld::Unsketch), [InterpolationSpotweld.UnsketchAll()](primer-interpolationspotweld-class.md#InterpolationSpotweld::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the interpolation spotweld is sketched. If omitted redraw is true. If you want to sketch several interpolation spotwelds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch interpolation spotweld s:<br>
```
s.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged interpolation spotwelds in the model. The interpolation spotwelds will be sketched until you either call [InterpolationSpotweld.Unsketch()](primer-interpolationspotweld-class.md#InterpolationSpotweld::Unsketch), [InterpolationSpotweld.UnsketchFlagged()](primer-interpolationspotweld-class.md#InterpolationSpotweld::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged interpolation spotwelds will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interpolation spotwelds that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the interpolation spotwelds are sketched. If omitted redraw is true. If you want to sketch flagged interpolation spotwelds several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all interpolation spotwelds flagged with flag in model m:<br>
```
InterpolationSpotweld.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of interpolation spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing interpolation spotwelds should be counted. If false or omitted
referenced but undefined interpolation spotwelds will also be included in the total.

| Returns
<br>number of interpolation spotwelds<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of interpolation spotwelds in model m:<br>
```
var total = InterpolationSpotweld.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the interpolation spotweld |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank interpolation spotweld s:<br>
```
s.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the interpolation spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interpolation spotwelds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the interpolation spotwelds in model m:<br>
```
InterpolationSpotweld.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged interpolation spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged interpolation spotwelds will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interpolation spotwelds that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the interpolation spotwelds in model m flagged with f:<br>
```
InterpolationSpotweld.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the interpolation spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all interpolation spotwelds will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the interpolation spotwelds

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the interpolation spotwelds in model m:<br>
```
InterpolationSpotweld.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the interpolation spotweld. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the interpolation spotweld is unsketched. If omitted redraw is true. If you want to unsketch several interpolation spotwelds and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch interpolation spotweld s:<br>
```
s.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all interpolation spotwelds. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interpolation spotwelds will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the interpolation spotwelds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all interpolation spotwelds in model m:<br>
```
InterpolationSpotweld.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged interpolation spotwelds in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all interpolation spotwelds will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the interpolation spotwelds that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the interpolation spotwelds are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all interpolation spotwelds flagged with flag in model m:<br>
```
InterpolationSpotweld.UnsketchAll(m, flag);
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
<br>[InterpolationSpotweld](primer-interpolationspotweld-class.md) object.<br>
Return type
<br>InterpolationSpotweld |
| --- |

| Example
<br>To check if InterpolationSpotweld property s.example is a parameter by using the [InterpolationSpotweld.GetParameter()](primer-interpolationspotweld-class.md#InterpolationSpotweld::GetParameter) method:<br>
```
if (s.ViewParameters().GetParameter(s.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for interpolation spotweld. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for interpolation spotweld s:<br>
```
s.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this interpolation spotweld. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for interpolation spotweld s:<br>
```
var xrefs = s.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the interpolation spotweld data in keyword format. Note that this contains the keyword header and the keyword cards. See also [InterpolationSpotweld.Keyword()](primer-interpolationspotweld-class.md#InterpolationSpotweld::Keyword) and [InterpolationSpotweld.KeywordCards()](primer-interpolationspotweld-class.md#InterpolationSpotweld::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for interpolation spotweld s in keyword format<br>
```
var str = s.toString();
```
 |
| --- |

* * *