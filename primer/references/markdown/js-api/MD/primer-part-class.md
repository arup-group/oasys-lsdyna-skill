# Part class

The Part class gives you access to part cards in PRIMER. [More...](primer-part-class.md#Part_details)

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

* [AllTableProperties](primer-part-class.md#Part::AllTableProperties)(Model*[[Model](primer-model-class.md)]*)
* [BlankAll](primer-part-class.md#Part::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-part-class.md#Part::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-part-class.md#Part::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-part-class.md#Part::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-part-class.md#Part::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-part-class.md#Part::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [FlagVisible](primer-part-class.md#Part::FlagVisible)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [FlaggedTableProperties](primer-part-class.md#Part::FlaggedTableProperties)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-part-class.md#Part::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-part-class.md#Part::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-part-class.md#Part::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-part-class.md#Part::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-part-class.md#Part::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-part-class.md#Part::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [MeasurePartToPart](primer-part-class.md#Part::MeasurePartToPart)(part1*[[Part](primer-part-class.md)]*, part2*[[Part](primer-part-class.md)]*)
* [NextFreeLabel](primer-part-class.md#Part::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-part-class.md#Part::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-part-class.md#Part::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-part-class.md#Part::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-part-class.md#Part::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-part-class.md#Part::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-part-class.md#Part::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-part-class.md#Part::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-part-class.md#Part::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-part-class.md#Part::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-part-class.md#Part::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-part-class.md#Part::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-part-class.md#Part::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-part-class.md#Part::Blank)()
* [Blanked](primer-part-class.md#Part::Blanked)()
* [Browse](primer-part-class.md#Part::Browse)(modal (optional)*[boolean]*)
* [CentreOfGravity](primer-part-class.md#Part::CentreOfGravity)(options (optional)*[object]*)
* [CentreOfGravity](primer-part-class.md#Part::CentreOfGravity_deprecated)(option (optional)*[boolean]*) [deprecated]
* [ClearFlag](primer-part-class.md#Part::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ClosestNode](primer-part-class.md#Part::ClosestNode)(x*[real]*, y*[real]*, z*[real]*)
* [Copy](primer-part-class.md#Part::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-part-class.md#Part::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-part-class.md#Part::Edit)(modal (optional)*[boolean]*)
* [Error](primer-part-class.md#Part::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-part-class.md#Part::ExtractColour)()
* [Flagged](primer-part-class.md#Part::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-part-class.md#Part::GetComments)()
* [GetCompositeData](primer-part-class.md#Part::GetCompositeData)(ipt*[integer]*)
* [GetParameter](primer-part-class.md#Part::GetParameter)(prop*[string]*)
* [Keyword](primer-part-class.md#Part::Keyword)()
* [KeywordCards](primer-part-class.md#Part::KeywordCards)()
* [Mass](primer-part-class.md#Part::Mass)()
* [MaxMin](primer-part-class.md#Part::MaxMin)()
* [Next](primer-part-class.md#Part::Next)()
* [Previous](primer-part-class.md#Part::Previous)()
* [RemoveCompositeData](primer-part-class.md#Part::RemoveCompositeData)(ipt*[integer]*)
* [SetCompositeData](primer-part-class.md#Part::SetCompositeData)(ipt*[integer]*, mid*[integer]*, thick*[real]*, beta*[real]*, tmid (optinal)*[integer]*, plyid (optional)*[integer]*, shrfac (optional)*[real]*)
* [SetFlag](primer-part-class.md#Part::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-part-class.md#Part::Sketch)(redraw (optional)*[boolean]*)
* [TableProperties](primer-part-class.md#Part::TableProperties)()
* [Unblank](primer-part-class.md#Part::Unblank)()
* [Unsketch](primer-part-class.md#Part::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-part-class.md#Part::ViewParameters)()
* [Warning](primer-part-class.md#Part::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-part-class.md#Part::Xrefs)()
* [toString](primer-part-class.md#Part::toString)()

## Part properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| adpopt | integer | Adaptivity flag |
| ansid | integer | Attachment node set ID |
| attachment\_nodes | logical | If \_ATTACHMENT\_NODES option is set. Can be true or false |
| averaged | logical | If \_AVERAGED option is set. Can be true or false |
| cadname | string | CAD name stored for [Part](primer-part-class.md) (or null if doesn't exist). This property is only used by PRIMER. |
| cid | integer | Coordinate system number |
| cmsn | integer | CAL3D/MADYMO number |
| colour | [Colour](primer-colour-class.md) | The colour of the part |
| composite | logical | If \_COMPOSITE option is set. Can be true or false |
| composite\_long | logical | If \_COMPOSITE\_LONG option is set. Can be true or false |
| contact | logical | If \_CONTACT option is set. Can be true or false |
| dc | real | Exponential decay coefficient |
| element\_type (read only) | string | The type of elements the [Part](primer-part-class.md) contains. e.g. "SHELL", "SOLID" or null if empty/no section. |
| elform | integer | Element formulation |
| eosid | integer or string | Equation of state number or character label |
| exists (read only) | logical | true if part exists, false if referred to but not defined. |
| fd | real | Dynamic coefficient of friction |
| fs | real | Static coefficient of friction |
| grav | integer | Gravity loading |
| heading | string | [Part](primer-part-class.md) heading |
| hgid | integer or string | [Hourglass](primer-hourglass-class.md) number or character label |
| hmname | string | Hypermesh comment read from keyword file for [Part](primer-part-class.md) (or null if doesn't exist). |
| iga\_shell | logical | If \_COMPOSITE\_IGA\_SHELL option is set. Can be true or false |
| include | integer | The [Include](primer-include-class.md) file number that the part is in. |
| inertia | logical | If \_INERTIA option is set. Can be true or false |
| ircs | integer | Flag for inertia tensor reference coordinate system |
| irl | integer | Lamina integration rule |
| ixx | real | Ixx component of inertia tensor |
| ixy | real | Ixy component of inertia tensor |
| ixz | real | Ixz component of inertia tensor |
| iyy | real | Iyy component of inertia tensor |
| iyz | real | Iyz component of inertia tensor |
| izz | real | Izz component of inertia tensor |
| label | integer or string | [Part](primer-part-class.md) number or character label. Also see the [pid](primer-part-class.md#pid) property which is an alternative name for this. |
| marea | real | Non structural mass per unit area |
| mdep | integer | MADYMO ellipse/plane number |
| mid | integer or string | [Material](primer-material-class.md) number or character label |
| model (read only) | integer | The [Model](primer-model-class.md) number that the part is in. |
| movopt | integer | Flag to deactivate moving for merged rigid bodies |
| nip | integer | Number of integration points (layers) present for \_COMPOSITE parts |
| nloc | integer | Location of reference surface |
| nodeid | integer | [Node](primer-node-class.md) ID for centre of rigid body |
| optt | real | Contact thickness |
| pid | integer or string | [Part](primer-part-class.md) number or character label. Also see the [label](primer-part-class.md#label) property which is an alternative name for this. |
| prbf | integer | Print flag for RBDOUT and MATSUM files |
| print | logical | If \_PRINT option is set. Can be true or false |
| reposition | logical | If \_REPOSITION option is set. Can be true or false |
| rigid (read only) | logical | true if part is rigid, false if deformable. |
| secid | integer or string | [Section](primer-section-class.md) number or character label |
| sft | real | Thickness scale factor |
| shrf | real | Shear correction factor |
| ssf | real | Scale factor on default surfA penalty stiffness |
| thshel | integer | Thermal shell formulation |
| tm | real | total mass |
| tmid | integer or string | Thermal material number or character label |
| transparency | integer | The transparency of the part (0-100) 0% is opaque, 100% is transparent. |
| tshear | integer | Flag for transverse shear strain distribution |
| tshell | logical | If \_COMPOSITE\_TSHELL option is set. Can be true or false |
| vc | real | Coefficient for viscous friction |
| vrx | real | x rotational velocity |
| vry | real | y rotational velocity |
| vrz | real | z rotational velocity |
| vtx | real | x translational velocity |
| vty | real | y translational velocity |
| vtz | real | z translational velocity |
| xc | real | x coordinate of centre of mass |
| xl | real | x coordinate of local x axis |
| xlip | real | x coordinate of vector in local xy plane |
| yc | real | y coordinate of centre of mass |
| yl | real | y coordinate of local x axis |
| ylip | real | y coordinate of vector in local xy plane |
| zc | real | z coordinate of centre of mass |
| zl | real | z coordinate of local x axis |
| zlip | real | z coordinate of vector in local xy plane |

| Detailed Description<br>The Part class allows you to create, modify, edit and manipulate part cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Part(Model*[[Model](primer-model-class.md)]*, pid*[integer or string]*, secid*[integer or string]*, mid*[integer or string]*, heading (optional)*[string]*)

Description<br>Create a new [Part](primer-part-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that part will be created in

* pid (integer or string)
 
[Part](primer-part-class.md) number or character label

* secid (integer or string)
 
[Section](primer-section-class.md) number or character label

* mid (integer or string)
 
[Material](primer-material-class.md) number or character label

* heading (optional) (string)
 
Title for the part

| Returns
<br>[Part](primer-part-class.md) object<br>
Return type
<br>Part |
| --- |

| Example
<br>To create a new part called 'Example' in model m with label 100, section 1, material 10:<br>
```
var p = new Part(m, 100, 1, 10, 'Example');
```
 |
| --- |

| Details of functions 
AllTableProperties(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns all of the properties available in the part table for the parts.<br>The table values are returned in an array of objects (an object for each part).<br>The object property names are the same as the table headers but spaces<br>are replaced with underscore characters and characters other than 0-9, a-z and A-Z are removed to ensure that the<br>property name is valid in JavaScript. If a table value is undefined the property value will be the JavaScript undefined<br>value. If the table value is a valid number it will be a number, otherwise the value will returned as a string. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged parts are in

| Returns
<br>Array of objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the properties for parts in model m:<br>
```
var properties = Part.AllTableProperties(m);
for (var p=0; p<properties.length; p++)
{
    for (var x in properties[p])
    {
        Message(x+"="+properties[p][x]);
    }
}
```
 |
| --- |

* * *

| AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the part

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the part p:<br>
```
p.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank part p:<br>
```
p.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parts will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the parts in model m:<br>
```
Part.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged parts will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the parts that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the parts in model m flagged with f:<br>
```
Part.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the part is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if part p is blanked:<br>
```
if (p.Blanked() ) do_something...
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
<br>To Browse part p:<br>
```
p.Browse();
```
 |
| --- |

* * *

| CentreOfGravity(options (optional)*[object]*)

Description<br>Returns the centre of gravity for a part. |
| --- |

#### Arguments

* options (optional) (object)

Options specifying how the mass calculation should be done. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| constrainedparts (optional) | boolean | Mass of rigid lead part includes mass of its constrained parts. On by default. |
| lumpedmass (optional) | boolean | Lumped mass is included for deformable parts. Off by default. |
| nrbmass (optional) | boolean | NRB mass is included for deformable parts. Off by default. (tranfermass:true required for this option) |
| plot (optional) | boolean | Plot CofG. |
| skipconstrained (optional) | boolean | Constrained rigid part is assigned zero mass (if constrainedparts = true). On by default. |
| timestepmass (optional) | boolean | Timestep added mass is included for deformable parts. Off by default. |
| transfermass (optional) | boolean | Mass of deformable nodes attached to rigid part/nrb is transferred. On by default. |

| Returns
<br>An array containing the x, y and z coordinates for the CofG.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the centre of gravity for part p with options configured:<br>
```
var cofg = p.CentreOfGravity({constrainedparts:false, transfermass:true, lumpedmass:false, nrbmass:true, timestepmass:false, plot:true});
var x = cofg[0];
var y = cofg[1];
var z = cofg[2];
      
```
 |
| --- |

* * *

| CentreOfGravity(option (optional)*[boolean]*) [deprecated]
<br>This function is deprecated in version 16.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Returns the centre of gravity for a part. Rigid parts will always include mass of constrained parts.<br> Mass is transferred from deformable to rigid when nodes attach. |
| --- |

#### Arguments

* option (optional) (boolean)
 
If set, centre of gravity calculation for deformable parts includes lumped mass, mass of nodal rigid bodies and timestep added mass.

| Returns
<br>An array containing the x, y and z coordinates for the CofG.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the centre of gravity for part p:<br>
```
var cofg = p.CentreOfGravity();
            var x = cofg[0];
            var y = cofg[1];
            var z = cofg[2];
      
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the part

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for part p:<br>
```
p.ClearFlag(f);
```
 |
| --- |

* * *

| ClosestNode(x*[real]*, y*[real]*, z*[real]*)

Description<br>Finds the [Node](primer-node-class.md) on the part closest to a coordinate. |
| --- |

#### Arguments

* x (real)
 
X coordinate of point

* y (real)
 
Y coordinate of point

* z (real)
 
Z coordinate of point

| Returns
<br>ID of [Node](primer-node-class.md) or null if part has no nodes<br>
Return type
<br>Number |
| --- |

| Example
<br>To find the node on part p closest to point (1, 2, 3):<br>
```
var n = p.ClosestNode(1, 2, 3);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the part. The target include of the copied part can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Part object<br>
Return type
<br>Part |
| --- |

| Example
<br>To copy part p into part z:<br>
```
var z = p.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a part |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the part will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Part object (or null if not made).<br>
Return type
<br>Part |
| --- |

| Example
<br>To start creating a part in model m:<br>
```
var p = Part.Create(m);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a part. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the part

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the part p:<br>
```
p.DetachComment(c);
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
<br>To Edit part p:<br>
```
p.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for part p:<br>
```
p.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for part.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the part [colour](primer-part-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the part. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing part p:<br>
```
var colour = p.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first part in

| Returns
<br>Part object (or null if there are no parts in the model).<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the first part in model m:<br>
```
var p = Part.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free part label in the model. Also see [Part.LastFreeLabel()](primer-part-class.md#Part::LastFreeLabel), [Part.NextFreeLabel()](primer-part-class.md#Part::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free part label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Part label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free part label in model m:<br>
```
var label = Part.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the parts in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the parts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the parts with flag f in model m:<br>
```
Part.FlagAll(m, f);
```
 |
| --- |

* * *

| FlagVisible(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all the unblanked parts in the model.<br> |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) for which all unblanked parts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the unblanked parts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all unblanked parts in model m with flag f:<br><br>
```
Part.FlagVisible(m, f);
```
<br><br> |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the part is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the part

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if part p has flag f set on it:<br>
```
if (p.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| FlaggedTableProperties(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Returns all of the properties available in the part table for the flagged parts.<br>The table values are returned in an array of objects (an object for each part).<br>The object property names are the same as the table headers but spaces<br>are replaced with underscore characters and characters other than 0-9, a-z and A-Z are removed to ensure that the<br>property name is valid in JavaScript. If a table value is undefined the property value will be the JavaScript undefined<br>value. If the table value is a valid number it will be a number, otherwise the value will returned as a string. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged parts are in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the parts that you want properties for

| Returns
<br>Array of objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the properties for parts in model m flagged with f:<br>
```
var properties = Part.FlaggedTableProperties(m, f);
for (var p=0; p<properties.length; p++)
{
    for (var x in properties[p])
    {
        Message(x+"="+properties[p][x]);
    }
}
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each part in the model.<br> **Note that ForEach has been designed to make looping over parts as fast as possible and so has some limitations. Firstly, a single temporary Part object is created and on each function call it is updated with the current part data. This means that you should not try to store the Part object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new parts inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parts are in

* func (function)
 
Function to call for each part

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the parts in model m:<br>
```
Part.ForEach(m, test);
function test(p)
{
// p is Part object
}
```
<br><br>To call function test for all of the parts in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Part.ForEach(m, test, data);
function test(p, extra)
{
// p is Part object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Part objects or properties for all of the parts in a model in PRIMER. If the optional property argument is not given then an array of Part objects is returned. If the property argument is given, that property value for each part is returned in the array instead of a Part object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get parts from

* property (optional) (string)
 
Name for property to get for all parts in the model

| Returns
<br>Array of Part objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Part objects for all of the parts in model m:<br>
```
var a = Part.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each part in model m:<br>
```
var a = Part.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a part. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the part p:<br>
```
var comm_array = p.GetComments();
```
 |
| --- |

* * *

| GetCompositeData(ipt*[integer]*)

Description<br>Returns the composite data for an integration point in \*PART\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want the data for. **Note that integration points start at 0, not 1**.

| Returns
<br>An array containing the material id, thickness, beta angle and thermal material values. If the \_COMPOSITE\_LONG option is set, then the array returned will also contain the ply ID.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the composite data for the 3rd integration point for part p:<br>
```
if (p.composite && p.nip >= 3)
{
    var ipt_data = p.GetCompositeData(2);
}
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Part objects for all of the flagged parts in a model in PRIMER If the optional property argument is not given then an array of Part objects is returned. If the property argument is given, then that property value for each part is returned in the array instead of a Part object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get parts from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the parts that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged parts in the model

| Returns
<br>Array of Part objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Part objects for all of the parts in model m flagged with f:<br>
```
var p = Part.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the parts in model m flagged with f:<br>
```
var a = Part.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Part object for a part ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the part in

* number (integer)
 
number of the part you want the Part object for

| Returns
<br>Part object (or null if part does not exist).<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the Part object for part 100 in model m<br>
```
var p = Part.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Part property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Part.ViewParameters()](primer-part-class.md#Part::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
part property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Part property p.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (p.GetParameter(p.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Part property p.example is a parameter by using the GetParameter method:<br>
```
if (p.ViewParameters().GetParameter(p.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this part (\*PART, \*PART\_SCALAR or \*PART\_SCALAR\_VALUE). **Note that a carriage return is not added**. See also [Part.KeywordCards()](primer-part-class.md#Part::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for part p:<br>
```
var key = p.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the part. **Note that a carriage return is not added**. See also [Part.Keyword()](primer-part-class.md#Part::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for part p:<br>
```
var cards = p.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last part in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last part in

| Returns
<br>Part object (or null if there are no parts in the model).<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the last part in model m:<br>
```
var p = Part.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free part label in the model. Also see [Part.FirstFreeLabel()](primer-part-class.md#Part::FirstFreeLabel), [Part.NextFreeLabel()](primer-part-class.md#Part::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free part label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Part label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free part label in model m:<br>
```
var label = Part.LastFreeLabel(m);
```
 |
| --- |

* * *

| Mass()

Description<br>Returns the mass properties for a part. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| Assign\_Mass | real | Assign mass |
| Component\_Mass | real | Component mass |
| Dyna\_Added\_Mass | real | Dyna added mass |
| Dyna\_Part\_Mass | real | Dyna part mass |
| Lumped\_Mass | real | Lumped mass |
| NRB\_Mass | real | NRB mass |
| NS\_Mass | real | Non-structural mass |
| Struct\_Mass | real | Structural mass |
| Transferrd\_Mass | real | Transferred mass when deformable meshed to rigid |

#### Return type

object

| Example
<br>To get the structural mass for part p:<br>
```
var mprops = p.Mass();
                        var struct_mass = mprops.Struct_Mass;
```
 |
| --- |

* * *

| MaxMin()

Description<br>Returns the max and min bounds of a part |
| --- |

#### Arguments

No arguments

| Returns
<br>An array containing the xMin, xMax, yMin, yMax, zMin and zMax coordinates for a box bounding the part, or null if the bounds cannot be calculated (e.g. the part has no structural elements)<br>
Return type
<br>array |
| --- |

| Example
<br>To get the bounds for part p:<br>
```
var bounds = p.MaxMin();
if (bounds) {
    xMin = bounds[0];
    xMax = bounds[1];
    yMin = bounds[2];
    yMax = bounds[3];
    zMin = bounds[4];
    zMax = bounds[5];
}

```
 |
| --- |

* * *

| MeasurePartToPart(part1*[[Part](primer-part-class.md)]*, part2*[[Part](primer-part-class.md)]*) [static]
Description<br>This static method measures the distance between two part objects contained in the same model or in two different models |
| --- |

#### Arguments

* part1 ([Part](primer-part-class.md))
 
[Part](primer-part-class.md) to measure from

* part2 ([Part](primer-part-class.md))
 
[Part](primer-part-class.md) to measure to

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| distance | real | Distance between the two parts |
| vector | Array of reals | Components of distance vector |

#### Return type

object

| Example
<br>To measure the distance between part object p1 and part object p2:<br>
```
var m = Part.MeasurePartToPart(p1, p2);
var d = m.distance;
var XComp = m.vector[0];
var YComp = m.vector[1];
var ZComp = m.vector[2];
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Part object (or null if there are no more parts in the model).<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the part in model m after part p:<br>
```
var p = p.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) part label in the model. Also see [Part.FirstFreeLabel()](primer-part-class.md#Part::FirstFreeLabel), [Part.LastFreeLabel()](primer-part-class.md#Part::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free part label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Part label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free part label in model m:<br>
```
var label = Part.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a part. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only parts from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only parts that are flagged with *limit* can be selected. If omitted, or null, any parts from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Part](primer-part-class.md) object (or null if not picked)<br>
Return type
<br>Part |
| --- |

| Example
<br>To pick a part from model m giving the prompt 'Pick part from screen':<br>
```
var p = Part.Pick('Pick part from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous part in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Part object (or null if there are no more parts in the model).<br>
Return type
<br>Part |
| --- |

| Example
<br>To get the part in model m before part p:<br>
```
var p = p.Previous();
```
 |
| --- |

* * *

| RemoveCompositeData(ipt*[integer]*)

Description<br>Removes the composite data for an integration point in \*PART\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to remove. **Note that integration points start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the composite data for the 3rd integration point for part p:<br>
```
p.RemoveCompositeData(2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parts will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the parts in model m, from 1000000:<br>
```
Part.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged parts will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the parts that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the parts in model m flagged with f, from 1000000:<br>
```
Part.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select parts using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting parts

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only parts from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only parts that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any parts can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of parts selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select parts from model m, flagging those selected with flag f, giving the prompt 'Select parts':<br>
```
Part.Select(f, 'Select parts', m);
```
<br><br>To select parts, flagging those selected with flag f but limiting selection to parts flagged with flag l, giving the prompt 'Select parts':<br>
```
Part.Select(f, 'Select parts', l);
```
 |
| --- |

* * *

| SetCompositeData(ipt*[integer]*, mid*[integer]*, thick*[real]*, beta*[real]*, tmid (optinal)*[integer]*, plyid (optional)*[integer]*, shrfac (optional)*[real]*)

Description<br>Sets the composite data for an integration point in \*PART\_COMPOSITE. |
| --- |

#### Arguments

* ipt (integer)
 
The integration point you want to set the data for. **Note that integration points start at 0, not 1**.

* mid (integer)
 
Material ID for the integration point.

* thick (real)
 
Thickness of the integration point.

* beta (real)
 
Material angle of the integration point.

* tmid (optinal) (integer)
 
Thermal material ID for the integration point.

* plyid (optional) (integer)
 
Ply ID for the integration point. This should be used if the \_COMPOSITE\_LONG option is set for the part.

* shrfac (optional) (real)
 
Transverse shear stress scale factor.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the composite data for the 3rd integration point to mat 1, thickness 0.5 and angle 45, for part p:<br>
```
p.SetCompositeData(2, 1, 0.5, 45);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the part. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the part

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for part p:<br>
```
p.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the part. The part will be sketched until you either call [Part.Unsketch()](primer-part-class.md#Part::Unsketch), [Part.UnsketchAll()](primer-part-class.md#Part::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the part is sketched. If omitted redraw is true. If you want to sketch several parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch part p:<br>
```
p.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged parts in the model. The parts will be sketched until you either call [Part.Unsketch()](primer-part-class.md#Part::Unsketch), [Part.UnsketchFlagged()](primer-part-class.md#Part::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged parts will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the parts that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the parts are sketched. If omitted redraw is true. If you want to sketch flagged parts several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all parts flagged with flag in model m:<br>
```
Part.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| TableProperties()

Description<br>Returns all of the properties available for the part in the part table.<br>The table values are returned in an object. The object property names are the same as the table headers but spaces<br>are replaced with underscore characters and characters other than 0-9, a-z and A-Z are removed to ensure that the<br>property name is valid in JavaScript. If a table value is undefined the property value will be the JavaScript undefined<br>value. If the table value is a valid number it will be a number, otherwise the value will returned as a string. |
| --- |

#### Arguments

No arguments

| Returns
<br>object.<br>
Return type
<br>Object |
| --- |

| Example
<br>To get all of the properties for part p:<br>
```
var properties = p.TableProperties();
for (var x in properties)
{
    Message(x+"="+properties[x]);
}
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing parts should be counted. If false or omitted
referenced but undefined parts will also be included in the total.

| Returns
<br>number of parts<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of parts in model m:<br>
```
var total = Part.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the part |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank part p:<br>
```
p.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the parts in model m:<br>
```
Part.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged parts will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the parts that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the parts in model m flagged with f:<br>
```
Part.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all parts will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the parts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the parts in model m:<br>
```
Part.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the part. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the part is unsketched. If omitted redraw is true. If you want to unsketch several parts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch part p:<br>
```
p.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all parts. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all parts in model m:<br>
```
Part.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged parts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all parts will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the parts that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the parts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all parts flagged with flag in model m:<br>
```
Part.UnsketchAll(m, flag);
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
<br>[Part](primer-part-class.md) object.<br>
Return type
<br>Part |
| --- |

| Example
<br>To check if Part property p.example is a parameter by using the [Part.GetParameter()](primer-part-class.md#Part::GetParameter) method:<br>
```
if (p.ViewParameters().GetParameter(p.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for part. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for part p:<br>
```
p.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this part. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for part p:<br>
```
var xrefs = p.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the part data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Part.Keyword()](primer-part-class.md#Part::Keyword) and [Part.KeywordCards()](primer-part-class.md#Part::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for part p in keyword format<br>
```
var str = p.toString();
```
 |
| --- |

* * *