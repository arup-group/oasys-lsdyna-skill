# Belt class

The Belt class gives you access to belt fitting in PRIMER. [More...](primer-belt-class.md#Belt_details)

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

* [BlankAll](primer-belt-class.md#Belt::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-belt-class.md#Belt::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-belt-class.md#Belt::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-belt-class.md#Belt::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-belt-class.md#Belt::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-belt-class.md#Belt::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-belt-class.md#Belt::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-belt-class.md#Belt::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-belt-class.md#Belt::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-belt-class.md#Belt::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-belt-class.md#Belt::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-belt-class.md#Belt::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-belt-class.md#Belt::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-belt-class.md#Belt::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-belt-class.md#Belt::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-belt-class.md#Belt::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SetMeshingLabels](primer-belt-class.md#Belt::SetMeshingLabels)(entity\_type*[constant]*, label\_value*[integer]*)
* [SketchFlagged](primer-belt-class.md#Belt::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-belt-class.md#Belt::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-belt-class.md#Belt::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-belt-class.md#Belt::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-belt-class.md#Belt::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-belt-class.md#Belt::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-belt-class.md#Belt::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-belt-class.md#Belt::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-belt-class.md#Belt::Blank)()
* [Blanked](primer-belt-class.md#Belt::Blanked)()
* [ClearFlag](primer-belt-class.md#Belt::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-belt-class.md#Belt::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-belt-class.md#Belt::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Error](primer-belt-class.md#Belt::Error)(message*[string]*, details (optional)*[string]*)
* [Fit](primer-belt-class.md#Belt::Fit)()
* [Flagged](primer-belt-class.md#Belt::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Generate](primer-belt-class.md#Belt::Generate)()
* [GetComments](primer-belt-class.md#Belt::GetComments)()
* [GetMesh](primer-belt-class.md#Belt::GetMesh)(index*[integer]*)
* [GetParameter](primer-belt-class.md#Belt::GetParameter)(prop*[string]*)
* [GetPoint](primer-belt-class.md#Belt::GetPoint)(index*[integer]*)
* [InsertPoint](primer-belt-class.md#Belt::InsertPoint)(index*[integer]*, position*[integer]*, data*[object]*)
* [Next](primer-belt-class.md#Belt::Next)()
* [Previous](primer-belt-class.md#Belt::Previous)()
* [RemovePoint](primer-belt-class.md#Belt::RemovePoint)(index*[integer]*)
* [SetFlag](primer-belt-class.md#Belt::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetMesh](primer-belt-class.md#Belt::SetMesh)(index*[integer]*, data*[object]*)
* [SetPoint](primer-belt-class.md#Belt::SetPoint)(index*[integer]*, data*[object]*)
* [Sketch](primer-belt-class.md#Belt::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-belt-class.md#Belt::Unblank)()
* [Unsketch](primer-belt-class.md#Belt::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-belt-class.md#Belt::ViewParameters)()
* [Warning](primer-belt-class.md#Belt::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-belt-class.md#Belt::Xrefs)()

## Belt constants

### Constants for Mesh segments

| **Name** | **Description** |
| --- | --- |
| Belt.MSEG\_B1\_ONLY | Old style all 1D belt |
| Belt.MSEG\_B2\_ONLY | Old style all 2D belt |
| Belt.MSEG\_BD\_NEW | Indicates new mode. **This must be set before any of the new style constants can be used** |
| Belt.MSEG\_CE\_1D | New style 1D at centre |
| Belt.MSEG\_CE\_2D | New style 2D at centre |
| Belt.MSEG\_CE\_SH | New style SH at centre |
| Belt.MSEG\_E1\_1D | New style 1D at end 1 |
| Belt.MSEG\_E1\_2D | New style 2D at end 1 |
| Belt.MSEG\_E1\_SH | New style shells at end 1 |
| Belt.MSEG\_E2\_1D | New style 1D at end 2 |
| Belt.MSEG\_E2\_2D | New style 2D at end 2 |
| Belt.MSEG\_E2\_SH | New style shells at end 2 |
| Belt.MSEG\_MIX\_SB1 | Old style 1D at ends, shells in middle |
| Belt.MSEG\_MIX\_SB2 | Old style 2D at ends, shells in middle |
| Belt.MSEG\_SH\_ONLY | Old style all shell belt |

### Constants for Meshing start Labels

| **Name** | **Description** |
| --- | --- |
| Belt.MESH\_2D\_SLIPRING\_SET\_NODE | Set meshing start Labels for 2D slipring node sets |
| Belt.MESH\_ALL | Set meshing start Labels for everything used in the seatbelt definition |
| Belt.MESH\_NODE | Set meshing start Labels for nodes |
| Belt.MESH\_NRBC | Set meshing start Labels for nodal rigid bodies |
| Belt.MESH\_RETRACTOR | Set meshing start Labels for retractors |
| Belt.MESH\_SEATBELT | Set meshing start Labels for seatbelt elements |
| Belt.MESH\_SET\_NODE | Set meshing start Labels for node sets |
| Belt.MESH\_SET\_PART | Set meshing start Labels for part sets |
| Belt.MESH\_SET\_SHELL | Set meshing start Labels for shell sets |
| Belt.MESH\_SHELL | Set meshing start Labels for shells |
| Belt.MESH\_SLIPRING | Set meshing start Labels for slipring elements |
| Belt.MESH\_XSEC | Set meshing start Labels for Database cross sections |

### Constants for Path point fixity

| **Name** | **Description** |
| --- | --- |
| Belt.B\_POST\_SLIPRING | There is a B-Post slipring at this point. |
| Belt.FIXED | Point is fixed |
| Belt.FREE\_SLIPRING | There is a free (eg pelvis) slipring at this point. |
| Belt.KNOWN | The belt path is known to pass through this point |
| Belt.RETRACTOR | There is a retractor at this point |
| Belt.SLIPRING | There is a slipring at this point. (Deprecated from V12 onwards, use FREE\_SLIPRING or B\_POST\_SLIPRING instead) |
| Belt.TWIST | Point has twist vectors or twist nodes defined |
| Belt.XSEC | There is a database cross section at this point |

### Constants for Path point insertion

| **Name** | **Description** |
| --- | --- |
| Belt.INSERT\_AFTER | Insert after given path point. |
| Belt.INSERT\_BEFORE | Insert before given path point. |

## Belt properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| acuteAngle | real | Limiting angle to be considered "acute" (0 means 90) |
| curvature | real | Maximum permitted transverse belt curvature in degrees |
| elemSet (read only) | integer | Set of shell or 2D seatbelt elements. Only created if the option to generate a contact for the belt is used |
| exists (read only) | logical | true if belt exists, false if referred to but not defined. |
| friction | real | Transverse friction coefficient |
| id | integer | [Belt](primer-belt-class.md) number. Also see the [label](primer-belt-class.md#label) property which is an alternative name for this. |
| include | integer | The [Include](primer-include-class.md) file number that the belt is in. |
| iterations | integer | The number of fitting iterations between contact bucket resorts |
| label | integer | [Belt](primer-belt-class.md) number. Also see the [id](primer-belt-class.md#id) property which is an alternative name for this. |
| length | real | The characteristic length of each belt element |
| meshSegs (read only) | integer | Number of mesh segments defined |
| model (read only) | integer | The [Model](primer-model-class.md) number that the belt is in. |
| n2sContact (read only) | integer | Nodes to Surface contact used between nodes on 1D belt elements and dummy structure. Only set if the AUTOMATIC\_NODES\_TO\_SURFACE contact is defined in Seatbelts contact panel. Optional contact, see "Contact: Creating a Contact between Belt and Dummy" section in the PRIMER manual for more information. |
| nodeSet (read only) | integer | Set of all nodes in seatbelt. Only created if the option to generate a contact for the belt is used |
| nrbFirst (read only) | integer | First nodal rigid body ID |
| nrbLast (read only) | integer | Last nodal rigid body ID |
| nsboSet (read only) | integer | Set of nodes on 1D seatbelt elements only. Only created if the option to generate a contact for the belt is used |
| overlap | real | Fraction by which facets are extended during contact checking to stop nodes "falling into gaps" |
| parts | integer | Part set ID defining structure. Note that if you are creating the seatbelt definition from scratch in JavaScript you **must** define a shell, solid or thick shell set. |
| penetration | real | Maximum penetration distance considered for contact into solid and thick shell elements |
| pidShell | integer | The part ID for any 2D seatbelt elements |
| pid\_1d | integer | The part ID for any 1D seatbelt elements |
| pid\_2d | integer | The part ID for any 2D seatbelt elements |
| points (read only) | integer | Number of path points defined |
| projection | real | Initial projection distance by which belt path is "thrown outwards" at start of fitting |
| psiShell | real | Optional orthotropic angle for any shell elements |
| psi\_2d | real | Optional orthotropic angle for any 2D seatbelt elements |
| retractorFirst (read only) | integer | First retractor ID |
| retractorLast (read only) | integer | Last retractor ID |
| rows | integer | The number of rows of 2D elements across the belt |
| s2sContact (read only) | integer | Surface to Surface contact used between shell/2D belt elements and dummy structure. Only set if the AUTOMATIC\_SURFACE\_TO\_SURFACE contact is defined in Seatbelts contact panel. Optional contact, see "Contact: Creating a Contact between Belt and Dummy" section in the PRIMER manual for more information. |
| seatbeltFirst (read only) | integer | First 1D seatbelt ID |
| seatbeltLast (read only) | integer | Last 1D seatbelt ID |
| segments (read only) | integer | Segment set created for contact |
| shells | integer | Shell set ID defining structure. Note that if you are creating the seatbelt definition from scratch in JavaScript you **must** define a shell, solid or thick shell set. |
| slen\_1d | real | The initial slack length for any 1D seatbelt elements |
| slipringFirst (read only) | integer | First slipring ID |
| slipringLast (read only) | integer | Last slipring ID |
| solids | integer | Solid set ID defining structure. Note that if you are creating the seatbelt definition from scratch in JavaScript you **must** define a shell, solid or thick shell set. |
| t1Shell | real | Optional thickness at n1 for any shell elements |
| t1\_2d | real | Optional thickness at n1 for any 2D seatbelt elements |
| t2Shell | real | Optional thickness at n2 for any shell elements |
| t2\_2d | real | Optional thickness at n2 for any 2D seatbelt elements |
| t3Shell | real | Optional thickness at n3 for any shell elements |
| t3\_2d | real | Optional thickness at n3 for any 2D seatbelt elements |
| t4Shell | real | Optional thickness at n4 for any shell elements |
| t4\_2d | real | Optional thickness at n4 for any 2D seatbelt elements |
| thickFactor | real | Factor used when thickFlag is 1 |
| thickFlag | integer | Thickness used during fitting: 0 (default)=use true thickness; 1=use true thickness x factor; 2=use neutral axis (no thickness) |
| thickness | real | The thickness of 2D belt elements |
| title | string | [Belt](primer-belt-class.md) title. |
| tolerance | real | The convergence tolerance at which fitting halts |
| tshells | integer | Thick shell set ID defining structure. Note that if you are creating the seatbelt definition from scratch in JavaScript you **must** define a shell, solid or thick shell set. |
| width | real | The overall belt width |
| xsect\_pretext | string | If X-Section pretext option is set to 2 then string for additional pretext |
| xsect\_pretext\_option | integer | X-Section pretext option, 0: None, 1: Automatic, 2: Manual |
| xsectionFirst (read only) | integer | First cross section ID |
| xsectionLast (read only) | integer | Last cross section ID |

| Detailed Description<br>The Belt class allows you to create, modify, and manipulate belt fitting definitions.<br>See the documentation below for more details. |
| --- |

| Constructor
new Belt(model*[[Model](primer-model-class.md)]*, id*[integer]*, title (optional)*[string]*, structural\_type (optional)*[string]*, flag (optional)*[integer]*)

Description<br>Create a new [Belt](primer-belt-class.md) object. |
| --- |

#### Arguments

* model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the belt definition will be created in

* id (integer)
 
[Belt](primer-belt-class.md) number

* title (optional) (string)
 
Title for the belt

* structural\_type (optional) (string)
 
Seatbelt will be fitted around this entity type. This will trigger creation of sets as required. Type can be one of MODEL, DUMMY, PART, any ELEMENT subtype such as SHELL, or any SET subtype such as SET\_PART. See Appendix I of the PRIMER manual for more information on PRIMER types

* flag (optional) (integer)
 
Flag used to identify entities that the belt should fit around. This argument is ignored if structural\_type is MODEL. Instead, the current model is used

| Returns
<br>[Belt](primer-belt-class.md) object<br>
Return type
<br>Belt |
| --- |

| Example
<br>To create a new belt called 'Example' in model m with label 100:<br>
```
var b = new Belt(m, 100, 'Example');
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a belt. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the belt

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the belt b:<br>
```
b.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the belt |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank belt b:<br>
```
b.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all belts will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the belts in model m:<br>
```
Belt.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged belts will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the belts that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the belts in model m flagged with f:<br>
```
Belt.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the belt is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if belt b is blanked:<br>
```
if (b.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the belt. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the belt

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for belt b:<br>
```
b.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the belt. The target include of the copied belt can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Belt object<br>
Return type
<br>Belt |
| --- |

| Example
<br>To copy belt b into belt z:<br>
```
var z = b.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a belt. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the belt

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the belt b:<br>
```
b.DetachComment(c);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for belt. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for belt b:<br>
```
b.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first belt in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first belt in

| Returns
<br>Belt object (or null if there are no belts in the model).<br>
Return type
<br>Belt |
| --- |

| Example
<br>To get the first belt in model m:<br>
```
var b = Belt.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free belt label in the model. Also see [Belt.LastFreeLabel()](primer-belt-class.md#Belt::LastFreeLabel), [Belt.NextFreeLabel()](primer-belt-class.md#Belt::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free belt label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Belt label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free belt label in model m:<br>
```
var label = Belt.FirstFreeLabel(m);
```
 |
| --- |

* * *

| Fit()

Description<br>(Re)fits belt |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To (re)fit belt b:<br>
```
b.Fit();
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the belts in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all belts will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the belts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the belts with flag f in model m:<br>
```
Belt.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the belt is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the belt

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if belt b has flag f set on it:<br>
```
if (b.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each belt in the model.<br> **Note that ForEach has been designed to make looping over belts as fast as possible and so has some limitations. Firstly, a single temporary Belt object is created and on each function call it is updated with the current belt data. This means that you should not try to store the Belt object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new belts inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all belts are in

* func (function)
 
Function to call for each belt

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the belts in model m:<br>
```
Belt.ForEach(m, test);
function test(b)
{
// b is Belt object
}
```
<br><br>To call function test for all of the belts in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Belt.ForEach(m, test, data);
function test(b, extra)
{
// b is Belt object
// extra is data
}
```
 |
| --- |

* * *

| Generate()

Description<br>Generates belt mesh. Extracts and uses existing mesh properties when a mesh is present; inserts a default mesh otherwise. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To generate a mesh for belt b:<br>
```
b.Generate();
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Belt objects or properties for all of the belts in a model in PRIMER. If the optional property argument is not given then an array of Belt objects is returned. If the property argument is given, that property value for each belt is returned in the array instead of a Belt object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get belts from

* property (optional) (string)
 
Name for property to get for all belts in the model

| Returns
<br>Array of Belt objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Belt objects for all of the belts in model m:<br>
```
var a = Belt.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each belt in model m:<br>
```
var a = Belt.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a belt. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the belt b:<br>
```
var comm_array = b.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Belt objects for all of the flagged belts in a model in PRIMER If the optional property argument is not given then an array of Belt objects is returned. If the property argument is given, then that property value for each belt is returned in the array instead of a Belt object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get belts from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the belts that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged belts in the model

| Returns
<br>Array of Belt objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Belt objects for all of the belts in model m flagged with f:<br>
```
var b = Belt.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the belts in model m flagged with f:<br>
```
var a = Belt.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Belt object for a belt ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the belt in

* number (integer)
 
number of the belt you want the Belt object for

| Returns
<br>Belt object (or null if belt does not exist).<br>
Return type
<br>Belt |
| --- |

| Example
<br>To get the Belt object for belt 100 in model m<br>
```
var b = Belt.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetMesh(index*[integer]*)

Description<br>Returns the information for a belt mesh section (properties base\_pt1, base\_pt2, path\_pt1, path\_pt2, mode, lb1, lb2). See [Belt.SetMesh()](primer-belt-class.md#Belt::SetMesh) for more information on supported properties. Must be preceded by a call to [Belt.Generate()](primer-belt-class.md#Belt::Generate). |
| --- |

#### Arguments

* index (integer)
 
The index of the mesh section you want the information for. **Note that mesh segments start at 0, not 1**. 0 &lt;= index &lt; [meshSegs](primer-belt-class.md#meshSegs)

| Returns
<br>Object containing the mesh section information<br>
Return type
<br>Object |
| --- |

| Example
<br>To get the information for the 3rd mesh section for belt b:<br>
```
var info = b.GetMesh(2);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Belt property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Belt.ViewParameters()](primer-belt-class.md#Belt::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
belt property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Belt property b.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (b.GetParameter(b.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Belt property b.example is a parameter by using the GetParameter method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| GetPoint(index*[integer]*)

Description<br>Returns the information for a path point (properties fixity, x, y, z, node, trx1, try1, trz1, tnx1, tny1, tnz1, tnode1, trx2, try2, trz2, tnx2, tny2, tnz2, tnode2). Properties fixity, x, y, z and node will always be returned. Twist properties trx1, try1, trz1, tnx1, tny1, tnz1, tnode1, trx2, try2, trz2, tnx2, tny2, tnz2 and tnode2 will only be returned if defined for the point. |
| --- |

#### Arguments

* index (integer)
 
The index of the path point you want the information for. **Note that path points start at 0, not 1**. 0 &lt;= index &lt; [points](primer-belt-class.md#points)

| Returns
<br>Object containing the path point information<br>
Return type
<br>Object |
| --- |

| Example
<br>To get the information for the 3rd path point for belt b:<br>
```
var info = b.GetPoint(2);
```
 |
| --- |

* * *

| InsertPoint(index*[integer]*, position*[integer]*, data*[object]*)

Description<br>Inserts a path point before/after an existing one. Subsequent path points will be moved 'up' as required. |
| --- |

#### Arguments

* index (integer)
 
The index of an existing path point. **Note that path points start at 0, not 1**. 0 &lt;= index &lt; [points](primer-belt-class.md#points)

* position (integer)
 
Do we want to insert before or after the path point denoted by index? The position can be [Belt.INSERT_AFTER](primer-belt-class.md#Belt.INSERT_AFTER) or [Belt.INSERT_BEFORE](primer-belt-class.md#Belt.INSERT_BEFORE)

* data (object)

Object containing the path point data. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fixity | integer | Point fixity type. Bitwise 'or' of the Path point fixity constants: [Belt.B_POST_SLIPRING](primer-belt-class.md#Belt.B_POST_SLIPRING), [Belt.FREE_SLIPRING](primer-belt-class.md#Belt.FREE_SLIPRING), [Belt.KNOWN](primer-belt-class.md#Belt.KNOWN), [Belt.RETRACTOR](primer-belt-class.md#Belt.RETRACTOR), [Belt.TWIST](primer-belt-class.md#Belt.TWIST), [Belt.XSEC](primer-belt-class.md#Belt.XSEC) |
| node (optional) | integer | Node label (not required if using x, y and z) |
| tnode1 (optional) | integer | Twist node 1 label |
| tnode2 (optional) | integer | Twist node 2 label |
| tnx1 (optional) | real | X component of normal vector 1 |
| tnx2 (optional) | real | X component of normal vector 2 |
| tny1 (optional) | real | Y component of normal vector 1 |
| tny2 (optional) | real | Y component of normal vector 2 |
| tnz1 (optional) | real | Z component of normal vector 1 |
| tnz2 (optional) | real | Z component of normal vector 2 |
| trx1 (optional) | real | X component of twist radial vector 1 |
| trx2 (optional) | real | X component of twist radial vector 2 |
| try1 (optional) | real | Y component of twist radial vector 1 |
| try2 (optional) | real | Y component of twist radial vector 2 |
| trz1 (optional) | real | Z component of twist radial vector 1 |
| trz2 (optional) | real | Z component of twist radial vector 2 |
| x (optional) | real | X coordinate (not required if using node) |
| y (optional) | real | Y coordinate (not required if using node) |
| z (optional) | real | Z coordinate (not required if using node) |

| Returns
<br>no return value |
| --- |

| Example
<br>To insert a new 2nd path point for belt b with B-Post slipring fixity using twist nodes 1000 and 10001:<br>
```
var data = { fixity:Belt.RETRACTOR|Belt.TWIST, node:999 tnode1:1000, tnode2:1001 };
b.InsertPoint(1, Belt.INSERT_BEFORE, data);
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last belt in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last belt in

| Returns
<br>Belt object (or null if there are no belts in the model).<br>
Return type
<br>Belt |
| --- |

| Example
<br>To get the last belt in model m:<br>
```
var b = Belt.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free belt label in the model. Also see [Belt.FirstFreeLabel()](primer-belt-class.md#Belt::FirstFreeLabel), [Belt.NextFreeLabel()](primer-belt-class.md#Belt::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free belt label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Belt label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free belt label in model m:<br>
```
var label = Belt.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next belt in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Belt object (or null if there are no more belts in the model).<br>
Return type
<br>Belt |
| --- |

| Example
<br>To get the belt in model m after belt b:<br>
```
var b = b.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) belt label in the model. Also see [Belt.FirstFreeLabel()](primer-belt-class.md#Belt::FirstFreeLabel), [Belt.LastFreeLabel()](primer-belt-class.md#Belt::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free belt label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Belt label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free belt label in model m:<br>
```
var label = Belt.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a belt. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only belts from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only belts that are flagged with *limit* can be selected. If omitted, or null, any belts from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Belt](primer-belt-class.md) object (or null if not picked)<br>
Return type
<br>Belt |
| --- |

| Example
<br>To pick a belt from model m giving the prompt 'Pick belt from screen':<br>
```
var b = Belt.Pick('Pick belt from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous belt in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Belt object (or null if there are no more belts in the model).<br>
Return type
<br>Belt |
| --- |

| Example
<br>To get the belt in model m before belt b:<br>
```
var b = b.Previous();
```
 |
| --- |

* * *

| RemovePoint(index*[integer]*)

Description<br>Removes a path point from a belt |
| --- |

#### Arguments

* index (integer)
 
The index of the path point you want to remove. **Note that path points start at 0, not 1**. 0 &lt;= index &lt; [points](primer-belt-class.md#points)

| Returns
<br>no return value |
| --- |

| Example
<br>To remove for the 3rd path point for belt b:<br>
```
b.RemovePoint(2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all belts will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the belts in model m, from 1000000:<br>
```
Belt.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged belts will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the belts that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the belts in model m flagged with f, from 1000000:<br>
```
Belt.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select belts using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting belts

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only belts from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only belts that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any belts can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of belts selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select belts from model m, flagging those selected with flag f, giving the prompt 'Select belts':<br>
```
Belt.Select(f, 'Select belts', m);
```
<br><br>To select belts, flagging those selected with flag f but limiting selection to belts flagged with flag l, giving the prompt 'Select belts':<br>
```
Belt.Select(f, 'Select belts', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the belt. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the belt

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for belt b:<br>
```
b.SetFlag(f);
```
 |
| --- |

* * *

| SetMesh(index*[integer]*, data*[object]*)

Description<br>Sets the data for various properties for a mesh section in a belt. Values for properties not invoked will be retained as is. Must be preceded by a call to [Belt.Generate()](primer-belt-class.md#Belt::Generate) |
| --- |

#### Arguments

* index (integer)
 
The index of the mesh [section](primer-belt-class.md#meshSegs) you want to set. **Note that mesh segments start at 0, not 1**

* data (object)

Object containing the mesh section data. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| base\_pt1 | integer | 1st base point number |
| base\_pt2 | integer | 2nd base point number |
| lb1 | integer | Number of belt elements at the 1st end for mixed modes |
| lb2 | integer | Number of belt elements at the 2nd end for mixed modes |
| mode | integer | Meshing modes can be of old style or new style.
<br>The following old style constants are available: [Belt.MSEG_B1_ONLY](primer-belt-class.md#Belt.MSEG_B1_ONLY), [Belt.MSEG_B2_ONLY](primer-belt-class.md#Belt.MSEG_B2_ONLY), [Belt.MSEG_SH_ONLY](primer-belt-class.md#Belt.MSEG_SH_ONLY), [Belt.MSEG_MIX_SB1](primer-belt-class.md#Belt.MSEG_MIX_SB1), [Belt.MSEG_MIX_SB2](primer-belt-class.md#Belt.MSEG_MIX_SB2)<br>
<br>The following constant must be invoked in order to use the new style: [Belt.MSEG_BD_NEW](primer-belt-class.md#Belt.MSEG_BD_NEW)<br>
<br>The following new style constants are available: [Belt.MSEG_E1_1D](primer-belt-class.md#Belt.MSEG_E1_1D), [Belt.MSEG_E1_2D](primer-belt-class.md#Belt.MSEG_E1_2D), [Belt.MSEG_E1_SH](primer-belt-class.md#Belt.MSEG_E1_SH), [Belt.MSEG_E2_1D](primer-belt-class.md#Belt.MSEG_E2_1D), [Belt.MSEG_E2_2D](primer-belt-class.md#Belt.MSEG_E2_2D), [Belt.MSEG_E2_SH](primer-belt-class.md#Belt.MSEG_E2_SH), [Belt.MSEG_CE_1D](primer-belt-class.md#Belt.MSEG_CE_1D), [Belt.MSEG_CE_2D](primer-belt-class.md#Belt.MSEG_CE_2D), [Belt.MSEG_CE_SH](primer-belt-class.md#Belt.MSEG_CE_SH) |
| path\_pt1 | integer | 1st path point number |
| path\_pt2 | integer | 2nd path point number |
| retractor (optional) | integer | Retractor id to be used |

| Returns
<br>no return value |
| --- |

| Example
<br>To set the following properties for the final mesh section:<br>base points: 5, 9, path points: 59, 92, mode: 1D at ends, shells at centre, number of elements at either end: 4 and 10:<br>
```
var data = { base_pt1: 5, base_pt2: 9, path_pt1: 59, path_pt2: 92, mode: Belt.MSEG_BD_NEW | Belt.MSEG_E1_1D | Belt.MSEG_CE_SH | Belt.MSEG_E2_1D, lb1: 4, lb2: 10 };
b.SetMesh(b.meshSegs-1, data);
```
 |
| --- |

* * *

| SetMeshingLabels(entity\_type*[constant]*, label\_value*[integer]*) [static]
Description<br>Set the start labels for the entities created for a Seat Belt. |
| --- |

#### Arguments

* entity\_type (constant)
 
The Meshing label can be [Belt.MESH_NODE](primer-belt-class.md#Belt.MESH_NODE), [Belt.MESH_SHELL](primer-belt-class.md#Belt.MESH_SHELL), [Belt.MESH_SET_NODE](primer-belt-class.md#Belt.MESH_SET_NODE), [Belt.MESH_SET_SHELL](primer-belt-class.md#Belt.MESH_SET_SHELL), [Belt.MESH_SEATBELT](primer-belt-class.md#Belt.MESH_SEATBELT), [Belt.MESH_NRBC](primer-belt-class.md#Belt.MESH_NRBC), [BELT.MESH_RETRACTOR](primer-belt-class.md#Belt.MESH_RETRACTOR), [Belt.MESH_XSEC](primer-belt-class.md#Belt.MESH_XSEC), [Belt.MESH_SLIPRING](primer-belt-class.md#Belt.MESH_SLIPRING), [Belt.MESH_SET_PART](primer-belt-class.md#Belt.MESH_SET_PART), [Belt.MESH_2D_SLIPRING_SET_NODE](primer-belt-class.md#Belt.MESH_2D_SLIPRING_SET_NODE), [Belt.MESH_ALL](primer-belt-class.md#Belt.MESH_ALL).

* label\_value (integer)
 
The initial label value to be assigned for the entity type.

| Returns
<br>no return value |
| --- |

| Example
<br>To get the initial value of the node label in seatbelt meshing as 1000:<br>
```
Belt.SetMeshingLabels(Belt.MESH_NODE,1000)
```
 |
| --- |

* * *

| SetPoint(index*[integer]*, data*[object]*)

Description<br>Sets the data for a path point in a belt |
| --- |

#### Arguments

* index (integer)
 
The index of the path point you want to set. **Note that path points start at 0, not 1**. To add a new point use index [points](primer-belt-class.md#points)

* data (object)

Object containing the path point data. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fixity | integer | Point fixity type. Bitwise 'or' of the Path point fixity constants: [Belt.B_POST_SLIPRING](primer-belt-class.md#Belt.B_POST_SLIPRING), [Belt.FREE_SLIPRING](primer-belt-class.md#Belt.FREE_SLIPRING), [Belt.KNOWN](primer-belt-class.md#Belt.KNOWN), [Belt.RETRACTOR](primer-belt-class.md#Belt.RETRACTOR), [Belt.TWIST](primer-belt-class.md#Belt.TWIST), [Belt.XSEC](primer-belt-class.md#Belt.XSEC) |
| node (optional) | integer | Node label (not required if using x, y and z) |
| tnode1 (optional) | integer | Twist node 1 label |
| tnode2 (optional) | integer | Twist node 2 label |
| tnx1 (optional) | real | X component of normal vector 1 |
| tnx2 (optional) | real | X component of normal vector 2 |
| tny1 (optional) | real | Y component of normal vector 1 |
| tny2 (optional) | real | Y component of normal vector 2 |
| tnz1 (optional) | real | Z component of normal vector 1 |
| tnz2 (optional) | real | Z component of normal vector 2 |
| trx1 (optional) | real | X component of twist radial vector 1 |
| trx2 (optional) | real | X component of twist radial vector 2 |
| try1 (optional) | real | Y component of twist radial vector 1 |
| try2 (optional) | real | Y component of twist radial vector 2 |
| trz1 (optional) | real | Z component of twist radial vector 1 |
| trz2 (optional) | real | Z component of twist radial vector 2 |
| x (optional) | real | X coordinate (not required if using node) |
| y (optional) | real | Y coordinate (not required if using node) |
| z (optional) | real | Z coordinate (not required if using node) |

| Returns
<br>no return value |
| --- |

| Example
<br>To add a new B-Post slipring path point to belt b at node 1000:<br><br>
```
var data = { fixity:Belt.B_POST_SLIPRING, node:1000 };
b.SetPoint(b.points, data);
```
<br>To add a new path point to belt b at coordinate (10, 20, 30):<br><br>
```
var data = { fixity:0, x:10, y:20, z:30 };
b.SetPoint(b.points, data);
```
<br>To add a new retractor path point to belt b at (10, 20, 30) with twist nodes 1000 and 1001:<br><br>
```
var data = { fixity:Belt.RETRACTOR|Belt.TWIST, x:10, y:20, z:30, tnode1:1000, tnode2:1001 };
b.SetPoint(b.points, data);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the belt. The belt will be sketched until you either call [Belt.Unsketch()](primer-belt-class.md#Belt::Unsketch), [Belt.UnsketchAll()](primer-belt-class.md#Belt::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the belt is sketched. If omitted redraw is true. If you want to sketch several belts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch belt b:<br>
```
b.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged belts in the model. The belts will be sketched until you either call [Belt.Unsketch()](primer-belt-class.md#Belt::Unsketch), [Belt.UnsketchFlagged()](primer-belt-class.md#Belt::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged belts will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the belts that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the belts are sketched. If omitted redraw is true. If you want to sketch flagged belts several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all belts flagged with flag in model m:<br>
```
Belt.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing belts should be counted. If false or omitted
referenced but undefined belts will also be included in the total.

| Returns
<br>number of belts<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of belts in model m:<br>
```
var total = Belt.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the belt |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank belt b:<br>
```
b.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all belts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the belts in model m:<br>
```
Belt.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged belts will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the belts that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the belts in model m flagged with f:<br>
```
Belt.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all belts will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the belts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the belts in model m:<br>
```
Belt.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the belt. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the belt is unsketched. If omitted redraw is true. If you want to unsketch several belts and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch belt b:<br>
```
b.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all belts. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all belts will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the belts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all belts in model m:<br>
```
Belt.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged belts in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all belts will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the belts that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the belts are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all belts flagged with flag in model m:<br>
```
Belt.UnsketchAll(m, flag);
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
<br>[Belt](primer-belt-class.md) object.<br>
Return type
<br>Belt |
| --- |

| Example
<br>To check if Belt property b.example is a parameter by using the [Belt.GetParameter()](primer-belt-class.md#Belt::GetParameter) method:<br>
```
if (b.ViewParameters().GetParameter(b.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for belt. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for belt b:<br>
```
b.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this belt. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for belt b:<br>
```
var xrefs = b.Xrefs();
```
 |
| --- |

* * *