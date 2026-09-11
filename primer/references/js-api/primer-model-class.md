# Model class

The Model class gives you access to models in PRIMER. [More...](primer-model-class.md#Model_details)

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

* [BlankAll](primer-model-class.md#Model::BlankAll)()
* [DeleteAll](primer-model-class.md#Model::DeleteAll)()
* [First](primer-model-class.md#Model::First)()
* [FirstFreeItemLabel](primer-model-class.md#Model::FirstFreeItemLabel)(type*[string]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [GetAll](primer-model-class.md#Model::GetAll)()
* [GetFromID](primer-model-class.md#Model::GetFromID)(model number*[integer]*)
* [Last](primer-model-class.md#Model::Last)()
* [LastFreeItemLabel](primer-model-class.md#Model::LastFreeItemLabel)(type*[string]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Merge](primer-model-class.md#Model::Merge)(Primary Model*[[Model](primer-model-class.md)]*, Secondary Model*[[Model](primer-model-class.md)]*, Option to fix clashes (optional)*[constant]*, Merge nodes flag (optional)*[boolean]*, dist (required if merge nodes flag used) (optional)*[real]*, label (optional)*[integer]*, position (optional)*[integer]*)
* [NextFreeItemLabel](primer-model-class.md#Model::NextFreeItemLabel)(type*[string]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Read](primer-model-class.md#Model::Read)(filename*[string]*, filetype (optional)*[constant]*, number (optional)*[integer]*)
* [Select](primer-model-class.md#Model::Select)(prompt*[string]*, modal (optional)*[boolean]*)
* [Total](primer-model-class.md#Model::Total)()
* [UnblankAll](primer-model-class.md#Model::UnblankAll)()

## Member functions

* [AreaVolumeFlagged](primer-model-class.md#Model::AreaVolumeFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Attached](primer-model-class.md#Model::Attached)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Autofix](primer-model-class.md#Model::Autofix)()
* [Blank](primer-model-class.md#Model::Blank)()
* [BlankFlagged](primer-model-class.md#Model::BlankFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [CentreOfGravity](primer-model-class.md#Model::CentreOfGravity)()
* [Check](primer-model-class.md#Model::Check)(filename*[string]*, detailed (optional)*[boolean]*, json (optional)*[boolean]*, include (optional)*[boolean]*)
* [ClearFlag](primer-model-class.md#Model::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-model-class.md#Model::Copy)(update (optional)*[boolean]*)
* [CopyFlagged](primer-model-class.md#Model::CopyFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, update (optional)*[boolean]*)
* [Delete](primer-model-class.md#Model::Delete)()
* [DeleteFlagged](primer-model-class.md#Model::DeleteFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, recursive (optional)*[boolean]*)
* [DeleteInclude](primer-model-class.md#Model::DeleteInclude)([Include](primer-include-class.md) label*[integer]*, method (optional)*[constant]*, force (optional)*[boolean]*)
* [FindElemEnd](primer-model-class.md#Model::FindElemEnd_deprecated)() [deprecated]
* [FindElemInit](primer-model-class.md#Model::FindElemInit_deprecated)(flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [deprecated]
* [FlagDuplicate](primer-model-class.md#Model::FlagDuplicate)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Flagged](primer-model-class.md#Model::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetIncludeTransformOffsets](primer-model-class.md#Model::GetIncludeTransformOffsets)()
* [Hide](primer-model-class.md#Model::Hide)()
* [Import](primer-model-class.md#Model::Import)(filename*[string]*)
* [ImportInclude](primer-model-class.md#Model::ImportInclude)(source*[String OR Include Object]*, target (optional)*[Include Object]*)
* [ImportIncludeTransform](primer-model-class.md#Model::ImportIncludeTransform)(filename*[string]*, idnoff*[integer]*, ideoff*[integer]*, idpoff*[integer]*, idmoff*[integer]*, idsoff*[integer]*, idfoff*[integer]*, iddoff*[integer]*, idroff*[integer]*)
* [Mass](primer-model-class.md#Model::Mass)()
* [MassPropCalc](primer-model-class.md#Model::MassPropCalc)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [MergeNodes](primer-model-class.md#Model::MergeNodes)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, dist*[real]*, label (optional)*[integer]*, position (optional)*[integer]*)
* [PopulateInitialVelocities](primer-model-class.md#Model::PopulateInitialVelocities)()
* [PropagateFlag](primer-model-class.md#Model::PropagateFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [RenumberAll](primer-model-class.md#Model::RenumberAll)(start*[integer]*)
* [RenumberFlagged](primer-model-class.md#Model::RenumberFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*, mode (optional)*[constant]*)
* [SetColour](primer-model-class.md#Model::SetColour)(colour*[colour from [Colour](primer-colour-class.md) class.]*)
* [SetFlag](primer-model-class.md#Model::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Show](primer-model-class.md#Model::Show)()
* [Unblank](primer-model-class.md#Model::Unblank)()
* [UnblankFlagged](primer-model-class.md#Model::UnblankFlagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnsketchAll](primer-model-class.md#Model::UnsketchAll)(redraw (optional)*[boolean]*)
* [UpdateGraphics](primer-model-class.md#Model::UpdateGraphics)()
* [UsesLargeLabels](primer-model-class.md#Model::UsesLargeLabels)()
* [Write](primer-model-class.md#Model::Write)(filename*[string]*, options (optional)*[object]*)
* [Write](primer-model-class.md#Model::Write_deprecated)(filename*[string]*, method (optional)*[constant]*, path (optional)*[constant]*, separator (optional)*[constant]*, version (optional)*[string]*, large (optional)*[boolean]*) [deprecated]

## Model constants

### Constants for compress mode

| **Name** | **Description** |
| --- | --- |
| Model.INDIVIDUAL\_GZIP | Each file 'name.key' is 'gzipped' to become the individual file 'name.key.gz' |
| Model.INDIVIDUAL\_ZIP | Each file 'name.key' is 'zipped' to become the individual file 'name.key.zip' |
| Model.KEEP\_ORIGINAL | Each file 'name.key' is written using its original compression: uncompressed, '.gz. or '.zip' format |
| Model.PACKAGED\_ZIP | Suitable for models with include files where the entire model is packed into a single .zip file, preserving its directory structure. |

### Constants for compress switch

| **Name** | **Description** |
| --- | --- |
| Model.COMPRESS\_KEEP | Keeps the keyout compression format same as that of what was read in. |
| Model.COMPRESS\_OFF | Switches off compression during keyout. |
| Model.COMPRESS\_ON | Switches on compression during keyout. |

### Constants for filetype

| **Name** | **Description** |
| --- | --- |
| Model.ABAQUS | ABAQUS input file |
| Model.IGES | IGES 5.3 geometry file |
| Model.LSDYNA | Ansys LS-DYNA keyword file |
| Model.NASTRAN | NASTRAN bulk data file |
| Model.RADIOSS | RADIOSS block format file |

### Constants for include deletion

| **Name** | **Description** |
| --- | --- |
| Model.REMOVE\_FROM\_SETS | Only deletes items within the include selected but may remove items from sets in other includes. |
| Model.REMOVE\_INCLUDE\_ONLY | Only deletes items within the include selected without removing items from sets in other includes. |
| Model.REMOVE\_JUNIOR | Delete items in other includes if they 'belong' to items in this include file but are considered to be 'junior' in the standard PRIMER hierarchy. |

### Constants for mass\_properties\_calculation

| **Name** | **Description** |
| --- | --- |
| Model.CENTRE\_AT\_COFG | Uses the centre at centre of gravity in calculation of inertia properties. |
| Model.GLOBAL\_AXES | GLOBAL AXES |
| Model.LOCAL\_AXES | LOCAL AXES |
| Model.PRINCIPAL\_AXES | PRINCIPAL AXES |
| Model.USER\_DEFINED\_CENTRE | Uses the user defined centre in calculation of inertia properties. |

### Constants for merge

| **Name** | **Description** |
| --- | --- |
| Model.DISCARD\_PRIMARY\_CLASH | Merge option - discard primary items only on clash |
| Model.DISCARD\_SECONDARY\_CLASH | Merge option - discard secondary items only on clash |
| Model.INCREASE\_PRIMARY\_ALWAYS | Merge option - increase primary items always |
| Model.INCREASE\_PRIMARY\_CLASH | Merge option - increase primary items only on clash |
| Model.INCREASE\_SECONDARY\_ALWAYS | Merge option - increase secondary items always |
| Model.INCREASE\_SECONDARY\_CLASH | Merge option - increase secondary items only on clash |

### Constants for renumber

| **Name** | **Description** |
| --- | --- |
| Model.IGNORE\_CLASH | Renumber option - Ignore clashes. |
| Model.MOVE\_CLASH\_UP | Renumber option - Move clashing &gt; highest label. |
| Model.RENUMBER\_TO\_FREE | Renumber option - Renumber to next free label. |
| Model.SHIFT\_ALL\_UP | Renumber option - Shift upwards to make space. |

### Constants for write hook

| **Name** | **Description** |
| --- | --- |
| Model.WRITE\_DIALOGUE | Flag that triggers the write hook script from the dialogue box |
| Model.WRITE\_INCLUDE\_TREE | Flag that triggers the write hook script from the include file tree |
| Model.WRITE\_MODEL | Flag that triggers the write hook script from the model tab |
| Model.WRITE\_SELECT\_INCLUDES | Flag that triggers the write hook script from the select include files panel |

## Model class properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| highest (read only) | integer | The highest model number present in PRIMER |

## Model properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary (read only) | boolean | If model is in binary then it will be 1(true) else 0(false). |
| comments | string | Comments stored at the top of the primary model file. |
| compress (read only) | boolean | If model is compressed then it will be 1(true) else 0(false). |
| compressMode (read only) | integer | This option can be used to know the mode of compression. Can be [Model.INDIVIDUAL_GZIP](primer-model-class.md#Model.INDIVIDUAL_GZIP) or [Model.INDIVIDUAL_ZIP](primer-model-class.md#Model.INDIVIDUAL_ZIP) or [Model.PACKAGED_ZIP](primer-model-class.md#Model.PACKAGED_ZIP) |
| control (read only) | [Control](primer-control-class.md) object | Control cards for model. See [Control](primer-control-class.md) for more details. |
| damping (read only) | [Damping](primer-damping-class.md) object | Damping cards for model. See [Damping](primer-damping-class.md) for more details. |
| database (read only) | [Database](primer-database-class.md) object | Database cards for model. See [Database](primer-database-class.md) for more details. |
| fileStartAscii (read only) | boolean | If the beginning of the master file (\*CONTROL etc) is in ascii then 1(true) else 0(false)(NOTE: If master file is ascii then fileStartAscii won't be checked and show 0(false)). |
| filename (read only) | string | Name of file that model was read from (blank if model created) |
| id | logical | If ID flag set for \*KEYWORD card |
| layer | integer | The current layer for the model. This is the label of the [Include](primer-include-class.md) file or 0 for the main file. See also [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer) |
| loadBody (read only) | [LoadBody](primer-loadbody-class.md) object | LoadBody cards for model. See [LoadBody](primer-loadbody-class.md) for more details. |
| masterAscii (read only) | boolean | If master file is in ascii then 1(true) else 0(false). |
| num | string | Model num (for \_ID) |
| number | integer | Model number |
| path (read only) | string | Path that model was read from (blank if model created) |
| project | string | Model project (for \_ID) |
| readlog | string | Full path of the readlog file |
| stage | string | Model stage (for \_ID) |
| title | string | Model title |
| visible | logical | Model visibility flag |

| Detailed Description<br>The Model class allows you to do various operations on models in PRIMER. There are various methods available that allow you do create, read, blank models etc. See the documentation below for more details. |
| --- |

| Constructor
new Model(number (optional)*[integer]*)

Description<br>Create a new model in PRIMER |
| --- |

#### Arguments

* number (optional) (integer)
 
Model number to create. If omitted the next free model number will be used.

| Returns
<br>[Model](primer-model-class.md) object<br>
Return type
<br>Model |
| --- |

| Example
<br>To create a new model<br>
```
var m = new Model();
```
<br><br>To create model 10<br>
```
var m = new Model(10);
```
 |
| --- |

| Details of functions 
AreaVolumeFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Calculates the Area/Volume of the selected items.<br><br>Note: The area calculation is based only on shell elements, and the volume calculation is based only on solid elements. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on entities you wish to calculate area/volume for

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| area | real | Area of flagged items |
| volume | real | Volume of flagged items |

#### Return type

object

| Example
<br>To calculate the area/volume properties of the items flagged by flag f.<br>
```

var props = m.AreaVolumeFlagged(f);
var area = props.area;
var volume = props.volume;
```
 |
| --- |

* * *

| Attached(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

Description<br>Finds attached items to flagged items. The attached items are flagged with the same flag. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on items that you want to find attached to

* redraw (optional) (boolean)
 
If true, the display will be updated to display only the original flagged items and the attached items.

| Returns
<br>No return value |
| --- |

| Example
<br>To find items attached to items flagged with flag f in model m:<br>
```
m.Attached(f);
```
 |
| --- |

* * *

| Autofix()

Description<br>Autofix option does a model check and autofixes all the fixable errors in the model |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To autofix fixable errors of the model 'm'<br>
```
m.Autofix();
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks a model in PRIMER |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank model object m<br>
```
m.Blank();
```
 |
| --- |

* * *

| BlankAll() [static]
Description<br>Blanks all models |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all models<br>
```
Model.BlankAll();
```
 |
| --- |

* * *

| BlankFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

Description<br>Blanks all of the flagged items in the model. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on items that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank everything in model m flagged with flag f:<br>
```
m.BlankFlagged(f);
```
 |
| --- |

* * *

| CentreOfGravity()

Description<br>Returns the centre of gravity for a model |
| --- |

#### Arguments

No arguments

| Returns
<br>An array containing the x, y and z coordinates for the CofG.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the centre of gravity for model m:<br>
```
var cofg = m.CentreOfGravity();
var x = cofg[0];
var y = cofg[1];
var z = cofg[2];

```
 |
| --- |

* * *

| Check(filename*[string]*, detailed (optional)*[boolean]*, json (optional)*[boolean]*, include (optional)*[boolean]*)

Description<br>Checks a model, writing any errors to file. |
| --- |

#### Arguments

* filename (string)
 
Name of file to write errors to

* detailed (optional) (boolean)
 
If set to "true", detailed error messages are given.

* json (optional) (boolean)
 
If set, output in filename will be written in JSON format. If omitted json will be set to false. If JSON format is written then detailed will automatically be set. Note that when writing JSON format the labels produced can be strings instead of integers in some rare cases. If you are writing a script to read a JSON file, it must be able to cope with this. Specifically if the item is a character label the label will be a string. For child collect sets the label will be a string of the format 'X\_Y' where X is the parent set label and Y will be the child set number (1, 2, 3 ...). In this case use [Set.GetCollectChild()](primer-set-class.md#Set::GetCollectChild) to get the object.

* include (optional) (boolean)
 
If set, error messages will be written in include by include layout. This option is not applicable if JSON is set.

| Returns
<br>No return value |
| --- |

| Example
<br>To check model m, writing detailed errors to file 'errors.txt' in include layout:<br>
```
m.Check('errors.txt', true, false, true);
```
<br><br>To check a model writing the warnings/errors as JSON to file 'errors.json', parse it and write them to<br>the dialogue box:<br><br>
```

m.Check('errors.json', true, true);
var f = new File('errors.json', File.READ);
var json = f.ReadAll();
f.Close();
var o = JSON.parse(json);

for (var e in o)                                     // "error" or "warning"
{
    Message(e);
    for (var t in o[e])                              // type
    {
        Message("  "+t);
        for (var m in o[e][t])                       // message
        {
            Message("    "+m);
            for (var i=0; i<o[e][t][m].length; i++)  // Array of objects containing label and include
            {
                Message("        "+o[e][t][m][i].label+" (include "+o[e][t][m][i].include+")");
            }
        }
    }
}
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears the flagging for a model in PRIMER. See also [Model.PropagateFlag()](primer-model-class.md#Model::PropagateFlag), [Model.SetFlag()](primer-model-class.md#Model::SetFlag), [global.AllocateFlag()](primer-global-class.md#global::AllocateFlag) and [global.ReturnFlag()](primer-global-class.md#global::ReturnFlag). |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for everything in model m:<br>
```
m.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(update (optional)*[boolean]*)

Description<br>Copy model to the next free model in PRIMER |
| --- |

#### Arguments

* update (optional) (boolean)
 
If the graphics should be updated after the model is copied. If omitted update will be set to false

| Returns
<br>[Model](primer-model-class.md) object for new model.<br>
Return type
<br>Model |
| --- |

| Example
<br>To copy model m to the next free model in PRIMER.<br>
```
var mnew = m.Copy();
```
 |
| --- |

* * *

| CopyFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, update (optional)*[boolean]*)

Description<br>Copy flagged items in a model to the next free model in PRIMER |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on items that you want to copy

* update (optional) (boolean)
 
If the graphics should be updated after the model is copied. If omitted update will be set to false

| Returns
<br>[Model](primer-model-class.md) object for new model.<br>
Return type
<br>Model |
| --- |

| Example
<br>To copy everything in model m flagged with flag f to the next free model in PRIMER.<br>
```
var mnew = m.CopyFlagged(f);
```
 |
| --- |

* * *

| Delete()

Description<br>Deletes a model in PRIMER<br>**Do not use the Model object after calling this method**. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To delete model m in PRIMER<br>
```
m.Delete();
```
 |
| --- |

* * *

| DeleteAll() [static]
Description<br>Deletes all existing models from PRIMER |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To delete all models<br>
```
Model.DeleteAll();
```
 |
| --- |

* * *

| DeleteFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, recursive (optional)*[boolean]*)

Description<br>Deletes all of the flagged items in the model. Note that this may not actually delete all of the items. For example if a node is flagged but the node is used in a shell which is not flagged then the node will not be deleted. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on items that you want to delete

* recursive (optional) (boolean)
 
If deletion is recursive (for example, if a shell is deleted with recursion on the shell nodes will be deleted if possible). If omitted recursive will be set to true.

| Returns
<br>No return value |
| --- |

| Example
<br>To delete everything in model m flagged with flag f:<br>
```
m.DeleteFlagged(f);
```
 |
| --- |

* * *

| DeleteInclude([Include](primer-include-class.md) label*[integer]*, method (optional)*[constant]*, force (optional)*[boolean]*)

Description<br>Tries to delete an include file from the model. Note that this may not actually delete the include file. For example if some of the items in the include file are required by other things in different includes then the include file will not be deleted. |
| --- |

#### Arguments

* [Include](primer-include-class.md) label (integer)
 
label of include file that you want to delete

* method (optional) (constant)
 
Method for deleting items. Must be [Model.REMOVE_FROM_SETS](primer-model-class.md#Model.REMOVE_FROM_SETS) (default), [Model.REMOVE_JUNIOR](primer-model-class.md#Model.REMOVE_JUNIOR) or [Model.REMOVE_INCLUDE_ONLY](primer-model-class.md#Model.REMOVE_INCLUDE_ONLY).
 [Model.REMOVE_FROM_SETS](primer-model-class.md#Model.REMOVE_FROM_SETS) will only delete items within the include selected but may remove items from sets in other includes.
 [Model.REMOVE_JUNIOR](primer-model-class.md#Model.REMOVE_JUNIOR) may delete items in other includes - this will happen if they 'belong' to items in this include and are considered 'junior'
 [Model.REMOVE_INCLUDE_ONLY](primer-model-class.md#Model.REMOVE_INCLUDE_ONLY) does the same as [Model.REMOVE_FROM_SETS](primer-model-class.md#Model.REMOVE_FROM_SETS) but will **not** remove items from sets in other includes.

* force (optional) (boolean)
 
Forcible deletion option (for example, a node is deleted even when it is referenced by a shell which is not deleted). This will remove the include file (not just the contents) from the model. If this argument is omitted, force will be set to false.

| Returns
<br>true if include successfully deleted, false otherwise<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To delete include file number 5 in model m removing items from sets in other includes if required:<br>
```
m.DeleteInclude(5, 1);
```
 |
| --- |

* * *

| FindElemEnd() [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Tidy internal flag used by functions which find elements within a box. This function is only required if there has been a previous call to [Model.FindElemInit()](primer-model-class.md#Model::FindElemInit_deprecated) with a flag defined. This usage is deprecated for v20.0 where the flag should be applied in [Beam.FindBeamInBox()](primer-beam-class.md#Beam::FindBeamInBox) [Shell.FindShellInBox()](primer-shell-class.md#Shell::FindShellInBox) [Solid.FindSolidInBox()](primer-solid-class.md#Solid::FindSolidInBox) [Tshell.FindTShellInBox()](primer-tshell-class.md#TShell::FindTShellInBox) and there is no need to use FindElemInit or FindElemEnd |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br><br>
```
m.FindElemEnd();
```
 |
| --- |

* * *

| FindElemInit(flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [deprecated]
<br>This function is deprecated in version 20.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>In v20.0 this function is obsolete. FindXXXInBox() is called without it. Refinement of element selection is now done with optional flagging argument in [Beam.FindBeamInBox()](primer-beam-class.md#Beam::FindBeamInBox) [Shell.FindShellInBox()](primer-shell-class.md#Shell::FindShellInBox) [Solid.FindSolidInBox()](primer-solid-class.md#Solid::FindSolidInBox) [Tshell.FindTShellInBox()](primer-tshell-class.md#TShell::FindTShellInBox) If you do use this function with flagging bit (not recommended), PRIMER copies flagging to another allocated flag, so you will need on completion to call FindElemEnd() to return this flag. |
| --- |

#### Arguments

* flag (optional) ([Flag](primer-global-class.md#global::AllocateFlag))
 
Optional flag that has been set on the elements, if 0 all elements considered

| Returns
<br>No return value |
| --- |

| Example
<br>To initialize find setup for flagged elements in model m:<br>
```
m.FindElemInit(flag);
```
 |
| --- |

* * *

| First() [static]
Description<br>Returns the Model object for the first model in PRIMER (or null if there are no models) |
| --- |

#### Arguments

No arguments

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To get the Model object for the first model:<br>
```
var m = Model.First();
```
 |
| --- |

* * *

| FirstFreeItemLabel(type*[string]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free label for an item type in the model. Also see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel). |
| --- |

#### Arguments

* type (string)
 
The type of the item (for a list of types see Appendix I of the PRIMER manual).

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free node label in model m:<br>
```
var label = m.FirstFreeItemLabel("NODE");
```
 |
| --- |

* * *

| FlagDuplicate(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Flag all nodes referenced in two different includes |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag which will be used to flag the "duplicate" nodes

| Returns
<br>No return value |
| --- |

| Example
<br>To Flag with flag f all the nodes referenced in different includes from model m<br>
```
m.FlagDuplicate(f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the model is flagged or not |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the model

| Returns
<br>true if flagged, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if model m has flag f set on it:<br>
```
if (m.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll() [static]
Description<br>Returns an array of Model objects for all the models in PRIMER |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Model objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Model objects for all of the models in PRIMER<br>
```
var m = Model.GetAll();
```
 |
| --- |

* * *

| GetFromID(model number*[integer]*) [static]
Description<br>Returns the Model object for a model ID or null if model does not exist |
| --- |

#### Arguments

* model number (integer)
 
number of the model you want the Model object for

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To get the Model object for model number 1<br>
```
var m = Model.GetFromID(1);
```
 |
| --- |

* * *

| GetIncludeTransformOffsets()

Description<br>Looks at all of the items in the model and determines values for IDNOFF, IDEOFF, IDPOFF etc that could be used with [Model.ImportIncludeTransform](primer-model-class.md#Model::ImportIncludeTransform) to guarantee that there would not be any clashes with existing items in the model. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| iddoff | integer | Offset to define id |
| ideoff | integer | Offset to element id |
| idfoff | integer | Offset to function id |
| idmoff | integer | Offset to material id |
| idnoff | integer | Offset to node id |
| idpoff | integer | Offset to part id |
| idroff | integer | Offset to section, hourglass, EOS id |
| idsoff | integer | Offset to set id |

#### Return type

object

| Example
<br>To determine offsets for model m and then import an include transform "test.inc":<br>
```
var o = m.GetIncludeTransformOffsets();
if (o)
{
    var success = m.ImportIncludeTransform("test.inc", o.idnoff, o.ideoff, o.idpoff, o.idmoff, o.idsoff, o.idfoff, o.iddoff, o.idroff);
}
```
 |
| --- |

* * *

| Hide()

Description<br>Hides a model in PRIMER |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To hide model m in PRIMER<br>
```
m.Hide();
```
 |
| --- |

* * *

| Import(filename*[string]*)

Description<br>Imports a file into model m. The model can already contain items. However, **note that if the file cannot be imported because of a label clash or other problem PRIMER may delete the model and the script will terminate**. Note prior to v17 of PRIMER imported data would always be imported to the master model, irrespective of the current layer. From v17 onwards this has been corrected and the current layer is used to determine the destination of imported data. |
| --- |

#### Arguments

* filename (string)
 
Filename of the Ansys LS-DYNA keyword file you want to import

| Returns
<br>0: No errors/warnings.<br>&gt; 0: This number of errors occurred.<br>&lt; 0: Absolute number is the number of warnings that occurred.<br>
Return type
<br>Number |
| --- |

| Example
<br>To import file "test.key" into model m<br>
```
m.Import("test.key");
```
 |
| --- |

* * *

| ImportInclude(source*[String OR Include Object]*, target (optional)*[Include Object]*)

Description<br>Imports a keyword file or an Include object from different model as a **new include or into an existing include file** for model m. The labels of any items in the imported include contents that clash with existing labels will automatically be renumbered with one exception. The behaviour for \*SET\_COLLECT cards can be controlled with [Options.merge_set_collect](primer-options-class.md#merge_set_collect). |
| --- |

#### Arguments

* source (String OR Include Object)
 
Can either be a Filename of the Ansys LS-DYNA include file you want to import, OR Include object of another model you want to import

* target (optional) (Include Object)
 
Include file object of current model if the Import has to be done in an existing include.
 If not using this argument the contents of the source will be imported as a new include.
 If using this argument the contents of the source will NOT be imported as a new include, they will be merged with the target include.
 Note: Target cannot be include number 0 (it must be an include file, not the master file)

| Returns
<br>[Include](primer-include-class.md) object for include file<br>
Return type
<br>Include |
| --- |

| Example
<br>To import include file "include.key" into model m (include.key will be a new include file in model m):<br>
```
m.ImportInclude("include.key");
```
<br><br>To import include file "include.key" into existing include number 3 in model m (include.key will be merged with include number 3 of m):<br>
```
var incl_target = Include.GetFromID(m, 3);
m.ImportInclude("include.key", incl_target);
```
<br>To import include number 5 from model m2 into model m1 (include number 5 from m2 will be a new include file in model m1):<br>
```
var incl_source = Include.GetFromID(m2, 5);
m1.ImportInclude(incl_source);
```
<br>To import include number 5 from model m2 into existing include number 3 in model m1 (include number 5 from m2 will be merged with include number 3 in m1):<br>
```
var incl_source = Include.GetFromID(m2, 5);
var incl_target = Include.GetFromID(m1, 3);
m1.ImportInclude(incl_source, incl_target);
```
 |
| --- |

* * *

| ImportIncludeTransform(filename*[string]*, idnoff*[integer]*, ideoff*[integer]*, idpoff*[integer]*, idmoff*[integer]*, idsoff*[integer]*, idfoff*[integer]*, iddoff*[integer]*, idroff*[integer]*)

Description<br>Imports a file as an include transform file for model m. The labels of any items in the include file will be renumbered by idnoff, ideoff etc. |
| --- |

#### Arguments

* filename (string)
 
Filename of the Ansys LS-DYNA include file you want to import

* idnoff (integer)
 
Offset for nodes in the file

* ideoff (integer)
 
Offset for elements in the file

* idpoff (integer)
 
Offset for parts in the file

* idmoff (integer)
 
Offset for materials in the file

* idsoff (integer)
 
Offset for sets in the file

* idfoff (integer)
 
Offset for functions and tables in the file

* iddoff (integer)
 
Offset for defines in the file

* idroff (integer)
 
Offset for other labels in the file

| Returns
<br>[Include](primer-include-class.md) object if successful, null if not<br>
Return type
<br>Include |
| --- |

| Example
<br>To import include transform file "include.key" into model m using 1000 for all offsets<br>
```
m.ImportIncludeTransform("include.key", 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000);
```
 |
| --- |

* * *

| Last() [static]
Description<br>Returns the Model object for the last model in PRIMER (or null if there are no models) |
| --- |

#### Arguments

No arguments

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To get the Model object for the last model:<br>
```
var m = Model.Last();
```
 |
| --- |

* * *

| LastFreeItemLabel(type*[string]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free label for an item type in the model. Also see [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel). |
| --- |

#### Arguments

* type (string)
 
The type of the item (for a list of types see Appendix I of the PRIMER manual).

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free node label in model m:<br>
```
var label = m.LastFreeItemLabel("NODE");
```
 |
| --- |

* * *

| Mass()

Description<br>Returns the mass for a model |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the mass for model m:<br>
```
var mass = m.Mass();
```
 |
| --- |

* * *

| MassPropCalc(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Calculates the Mass, CoG, and Intertia Tensor of the flagged items and returns an object with the above properties. See Properties for mass properties calculation under options class to configure inclusion of lumped mass, etc. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Calculate mass propetries of flagged items

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cofgx | real | X coordinate of centre of gravity |
| cofgy | real | Y coordinate of centre of gravity |
| cofgz | real | Z coordinate of centre of gravity |
| inerxx | real | XX inertia |
| inerxy | real | XY inertia |
| inerxz | real | XZ inertia |
| ineryy | real | YY inertia |
| ineryz | real | YZ inertia |
| inerzz | real | ZZ inertia |
| mass | real | Mass |

#### Return type

object

| Example
<br>To calculate the mass properties of the items flagged by flag f<br>
```
var props = m.MassPropCalc(f);
```
 |
| --- |

* * *

| Merge(Primary Model*[[Model](primer-model-class.md)]*, Secondary Model*[[Model](primer-model-class.md)]*, Option to fix clashes (optional)*[constant]*, Merge nodes flag (optional)*[boolean]*, dist (required if merge nodes flag used) (optional)*[real]*, label (optional)*[integer]*, position (optional)*[integer]*) [static]
Description<br>Merge 2 models together to make a new model. |
| --- |

#### Arguments

* Primary Model ([Model](primer-model-class.md))
 
Primary [Model](primer-model-class.md) for merge.

* Secondary Model ([Model](primer-model-class.md))
 
Secondary [Model](primer-model-class.md) for merge.

* Option to fix clashes (optional) (constant)
 
Type of fix. Can be [Model.INCREASE_SECONDARY_ALWAYS](primer-model-class.md#Model.INCREASE_SECONDARY_ALWAYS), [Model.INCREASE_SECONDARY_CLASH](primer-model-class.md#Model.INCREASE_SECONDARY_CLASH), [Model.DISCARD_SECONDARY_CLASH](primer-model-class.md#Model.DISCARD_SECONDARY_CLASH), [Model.INCREASE_PRIMARY_ALWAYS](primer-model-class.md#Model.INCREASE_PRIMARY_ALWAYS), [Model.INCREASE_PRIMARY_CLASH](primer-model-class.md#Model.INCREASE_PRIMARY_CLASH) or [Model.DISCARD_PRIMARY_CLASH](primer-model-class.md#Model.DISCARD_PRIMARY_CLASH)

* Merge nodes flag (optional) (boolean)
 
If this flag is set to true, PRIMER will merge nodes after the model merge.

* dist (required if merge nodes flag used) (optional) (real)
 
Nodes closer than dist will be potentially merged.

* label (optional) (integer)
 
Label to keep after merge. If &gt; 0 then highest label kept. If &lt;= 0 then lowest kept. If omitted the lowest label will be kept.

* position (optional) (integer)
 
Position to merge at. If &gt; 0 then merged at highest label position. If &lt; 0 then merged at lowest label position. If 0 then merged at midpoint. If omitted the merge will be done at the lowest label.

| Returns
<br>Model object (or null if the merge is unsuccessful)<br>
Return type
<br>Model |
| --- |

| Example
<br>To merge models m1 and m2 together:<br>
```
var m = Model.Merge(m1, m2);
```
 |
| --- |

* * *

| MergeNodes(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, dist*[real]*, label (optional)*[integer]*, position (optional)*[integer]*)

Description<br>Attempts to merge nodes on items flagged with flag for this model in PRIMER. Merging nodes on \*AIRBAG\_SHELL\_REFERENCE\_GEOMETRY can be controlled by using [Options.node_replace_asrg](primer-options-class.md#node_replace_asrg). Also see [Node.Merge()](primer-node-class.md#Node::Merge). |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on items to merge nodes

* dist (real)
 
Nodes closer than dist will be potentially merged.

* label (optional) (integer)
 
Label to keep after merge. If &gt; 0 then highest label kept. If &lt;= 0 then lowest kept. If omitted the lowest label will be kept.

* position (optional) (integer)
 
Position to merge at. If &gt; 0 then merged at highest label position. If &lt; 0 then merged at lowest label position. If 0 then merged at midpoint. If omitted the merge will be done at the lowest label.

| Returns
<br>The number of nodes merged<br>
Return type
<br>Number |
| --- |

| Example
<br>To (try to) merge nodes on everything in model m flagged with flag f, with a distance of 0.1:<br>
```
m.MergeNodes(f, 0.1);
```
 |
| --- |

* * *

| NextFreeItemLabel(type*[string]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free label for an item type in the model. Also see [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel) and [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel). |
| --- |

#### Arguments

* type (string)
 
The type of the item (for a list of types see Appendix I of the PRIMER manual).

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free node label in model m:<br>
```
var label = m.NextFreeItemLabel("NODE");
```
 |
| --- |

* * *

| PopulateInitialVelocities()

Description<br>Populate the initial velocity field (nvels) for all nodes of the model |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br><br>
```
m.PopulateInitialVelocities();
```
 |
| --- |

* * *

| PropagateFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Propagates the flagging for a model in PRIMER. For example if a part in the model is flagged, this will flag the elements in the part, the nodes on those elements... See also [Model.ClearFlag()](primer-model-class.md#Model::ClearFlag), [Model.SetFlag()](primer-model-class.md#Model::SetFlag), [global.AllocateFlag()](primer-global-class.md#global::AllocateFlag) and [global.ReturnFlag()](primer-global-class.md#global::ReturnFlag). |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to propagate

| Returns
<br>No return value |
| --- |

| Example
<br>To propagate the flagging in model m for flag f<br>
```
m.PropagateFlag(f);
```
 |
| --- |

* * *

| Read(filename*[string]*, filetype (optional)*[constant]*, number (optional)*[integer]*) [static]
Description<br>Reads a file into the first free model in PRIMER |
| --- |

#### Arguments

* filename (string)
 
Filename you want to read

* filetype (optional) (constant)
 
Filetype you want to read. Can be [Model.LSDYNA](primer-model-class.md#Model.LSDYNA), [Model.ABAQUS](primer-model-class.md#Model.ABAQUS), [Model.NASTRAN](primer-model-class.md#Model.NASTRAN), [Model.RADIOSS](primer-model-class.md#Model.RADIOSS) or [Model.IGES](primer-model-class.md#Model.IGES).
If omitted the file is assumed to be a DYNA3D file.
For [Model.NASTRAN](primer-model-class.md#Model.NASTRAN) there are options that change how the model is read.
See [Options](primer-options-class.md#Options_nastran_properties) for details.

* number (optional) (integer)
 
Model number to read file into. If omitted the next free model number will be used.

| Returns
<br>Model object (or null if error)<br>
Return type
<br>Model |
| --- |

| Example
<br>To read the keyword file /data/test/file.key<br>
```
Model.Read("/data/test/file.key");
```
<br><br>To read the NASTRAN file /data/test/file.dat<br>
```
Model.Read("/data/test/file.dat", Model.NASTRAN);
```
<br><br>To read the keyword file /data/test/file.key into model 10<br>
```
Model.Read("/data/test/file.key", Model.LSDYNA, 10);
```
 |
| --- |

* * *

| RenumberAll(start*[integer]*)

Description<br>Renumbers all of the items in the model. |
| --- |

#### Arguments

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber everything in model m, starting at 1000000:<br>
```
m.RenumberAll(1000000);
```
 |
| --- |

* * *

| RenumberFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*, mode (optional)*[constant]*)

Description<br>Renumbers all of the flagged items in the model. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on items that you want to renumber

* start (integer)
 
Start point for renumbering

* mode (optional) (constant)
 
Renumber mode. Can be [Model.IGNORE_CLASH](primer-model-class.md#Model.IGNORE_CLASH), [Model.MOVE_CLASH_UP](primer-model-class.md#Model.MOVE_CLASH_UP), [Model.SHIFT_ALL_UP](primer-model-class.md#Model.SHIFT_ALL_UP), or [Model.RENUMBER_TO_FREE](primer-model-class.md#Model.RENUMBER_TO_FREE) (default),

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber everything in model m flagged with flag f, starting at 1000000, using mode MOVE\_CLASH\_UP:<br>
```
m.RenumberFlagged(f, 1000000, Model.MOVE_CLASH_UP);
```
 |
| --- |

* * *

| Select(prompt*[string]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select a model using standard PRIMER object menus. If there are no models in memory then Select returns null. If only one model is present then the model object is returned. If there is more than one model in memory then an object menu is mapped allowing the user to choose a model. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Model object (or null if no models present).<br>
Return type
<br>Model |
| --- |

| Example
<br>To select a model giving the prompt 'Select model':<br>
```
var m = Model.Select('Select model');
```
 |
| --- |

* * *

| SetColour(colour*[colour from [Colour](primer-colour-class.md) class.]*)

Description<br>Sets the colour of the model. |
| --- |

#### Arguments

* colour (colour from [Colour](primer-colour-class.md) class.)
 
The colour you want to set the model to

| Returns
<br>No return value |
| --- |

| Example
<br>To set the colour of model m to red:<br>
```
m.SetColour(Colour.RED);
```
<br>or<br>
```
m.SetColour(Colour.RGB(255, 0, 0));
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets the flagging for a model in PRIMER. See also [Model.PropagateFlag()](primer-model-class.md#Model::PropagateFlag), [Model.ClearFlag()](primer-model-class.md#Model::ClearFlag), [global.AllocateFlag()](primer-global-class.md#global::AllocateFlag) and [global.ReturnFlag()](primer-global-class.md#global::ReturnFlag). |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for everything in model m:<br>
```
m.SetFlag(f);
```
 |
| --- |

* * *

| Show()

Description<br>Shows a model in PRIMER |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To show model m in PRIMER<br>
```
m.Show();
```
 |
| --- |

* * *

| Total() [static]
Description<br>Returns the total number of models. |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To find how many models there are in PRIMER:<br>
```
var num = Model.Total();
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks a model in PRIMER |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank model m<br>
```
m.Unblank();
```
 |
| --- |

* * *

| UnblankAll() [static]
Description<br>Unblanks all models |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all models<br>
```
Model.UnblankAll();
```
 |
| --- |

* * *

| UnblankFlagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

Description<br>Unblanks all of the flagged items in the model. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on items that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank everything in model m flagged with flag f:<br>
```
m.UnblankFlagged(f);
```
 |
| --- |

* * *

| UnsketchAll(redraw (optional)*[boolean]*)

Description<br>Unsketches all of the sketched items in the model. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the items are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all the sketched objects in model m:<br>
```
m.UnsketchAll();
```
 |
| --- |

* * *

| UpdateGraphics()

Description<br>Updates the graphics for a model in PRIMER |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To update the graphics for model m<br>
```
m.UpdateGraphics();
```
 |
| --- |

* * *

| UsesLargeLabels()

Description<br>Checks to see if a model uses large labels |
| --- |

#### Arguments

No arguments

| Returns
<br>logical, true if model uses large labels, false otherwise<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if model m uses large labels:<br>
```
var large = m.UsesLargeLabels();
```
 |
| --- |

* * *

| Write(filename*[string]*, options (optional)*[object]*)

Description<br>Writes a model in PRIMER to file |
| --- |

#### Arguments

* filename (string)
 
Filename of the Ansys LS-DYNA keyword file you want to write

* options (optional) (object)

Options specifying how the file should be written out. If omitted the default values below will be used. The properties available are: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary (optional) | boolean | If true then the entire output file will be written out in binary, if false then the entire file will be written in ascii. If not defined the default is for each file in the model to be written in its original format, or if this is a newly created model ascii will be used. |
| compress (optional) | boolean | If true then the output file will be compressed. If false (default) then an uncompressed file will be written. |
| compressLevel (optional) | integer | Compression level for .gz and .zip files. Must be in the range 1 to 9 with 1 being the least compression (fastest speed) to 9 being the greatest compression (slowest speed) |
| compressMode (optional) | integer | This option can be used to specify the mode of compression. Can be [Include.KEEP_ORIGINAL](primer-include-class.md#Include.KEEP_ORIGINAL) or [Include.INDIVIDUAL_GZIP](primer-include-class.md#Include.INDIVIDUAL_GZIP) or [Include.INDIVIDUAL_ZIP](primer-include-class.md#Include.INDIVIDUAL_ZIP) |
| fileStartAscii (optional) | boolean | Only relevant if binary output format has been selected. If true then the beginning of the file (\*CONTROL etc) file is written out in ascii. If false (default) then the entire file is converted to binary. |
| i10 (optional) | boolean | If true then i10 format will be used to write the file. If false (default) then the original Ansys LS-DYNA format in which the file was written will be used, or if this is a newly created model the smallest format which will contain it will be used. Note that large format is only available from version R9 and above. See also the large property. |
| kbyExt (optional) | boolean | If true then a binary format output file will be given the extension .kby, replacing the existing extension. |
| large (optional) | boolean | If true then large format will be used to write the file. If false (default) then the normal Ansys LS-DYNA format will be used. Note that large format is only available from version R7.1 and above. |
| masterAscii (optional) | boolean | Only relevant if binary output format has been selected. If true then the whole master file is written out in ascii. If false (default) then the master file is also converted to binary. |
| method (optional) | integer | The method used to write include files. Can be [Include.MASTER_ONLY](primer-include-class.md#Include.MASTER_ONLY), [Include.MERGE](primer-include-class.md#Include.MERGE), [Include.NOT_WRITTEN](primer-include-class.md#Include.NOT_WRITTEN), [Include.SUBDIR](primer-include-class.md#Include.SUBDIR) (default) or [Include.SAME_DIR](primer-include-class.md#Include.SAME_DIR) |
| parametersAsValues (optional) | boolean | If true then the underlying values of any parameters will be written when they are
used in data fields rather than '&name'. If false then '&name' will be written.
See also [Options.keyout_parameter_values](primer-options-class.md#keyout_parameter_values) |
| path (optional) | integer | The method used to write include paths. Can be [Include.ABSOLUTE](primer-include-class.md#Include.ABSOLUTE) (default) or [Include.RELATIVE](primer-include-class.md#Include.RELATIVE) |
| separator (optional) | integer | The directory separator used when writing include files. Can be [Include.NATIVE](primer-include-class.md#Include.NATIVE) (default), [Include.UNIX](primer-include-class.md#Include.UNIX) or [Include.WINDOWS](primer-include-class.md#Include.WINDOWS) |
| version (optional) | string | The Ansys LS-DYNA version used to write the file. Can be "971R5", "971R4", "971R3", "970v6763" etc (see the version popup in Model-&gt;Write '&gt;&gt;&gt; Ansys LS-DYNA output options' for a full list). See also [Options.dyna_version](primer-options-class.md#dyna_version) |

| Returns
<br>No return value |
| --- |

| Example
<br>To Write model m to file /data/test/file.key as a compressed gzip in version R10.0<br>
```
 var output_obj = new Object();
 output_obj.version = "R10.0";
 output_obj.compress = true;
 output_obj.compressMode = Model.INDIVIDUAL_GZIP;
 m.Write("/data/test/file.key", output_obj);
```
 |
| --- |

* * *

| Write(filename*[string]*, method (optional)*[constant]*, path (optional)*[constant]*, separator (optional)*[constant]*, version (optional)*[string]*, large (optional)*[boolean]*) [deprecated]
<br>This function is deprecated in version 15.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Writes a model in PRIMER to file |
| --- |

#### Arguments

* filename (string)
 
Filename of the Ansys LS-DYNA keyword file you want to write

* method (optional) (constant)
 
The method used to write include files. Can be [Include.MASTER_ONLY](primer-include-class.md#Include.MASTER_ONLY), [Include.MERGE](primer-include-class.md#Include.MERGE), [Include.NOT_WRITTEN](primer-include-class.md#Include.NOT_WRITTEN), [Include.SUBDIR](primer-include-class.md#Include.SUBDIR) (default) or [Include.SAME_DIR](primer-include-class.md#Include.SAME_DIR)

* path (optional) (constant)
 
The method used to write include paths. Can be [Include.ABSOLUTE](primer-include-class.md#Include.ABSOLUTE) (default) or [Include.RELATIVE](primer-include-class.md#Include.RELATIVE)

* separator (optional) (constant)
 
The directory separator used when writing include files. Can be [Include.NATIVE](primer-include-class.md#Include.NATIVE) (default), [Include.UNIX](primer-include-class.md#Include.UNIX) or [Include.WINDOWS](primer-include-class.md#Include.WINDOWS)

* version (optional) (string)
 
The Ansys LS-DYNA version used to write the file. Can be "971R5", "971R4", "971R3", "970v6763" etc (see the version popup in Model-&gt;Write '&gt;&gt;&gt; Ansys LS-DYNA output options' for a full list). See also [Options.dyna_version](primer-options-class.md#dyna_version)

* large (optional) (boolean)
 
If true then large format will be used to write the file. If false (default) then the original Ansys LS-DYNA format in which the file was written will be used, or if this is a newly created model the smallest format which will contain it will be used. Note that large format is only available from version R7.1 and above. See also the i10 property.

| Returns
<br>No return value |
| --- |

| Example
<br>To Write model m to file /data/test/file.key<br>
```
m.Write("/data/test/file.key");
```
 |
| --- |

* * *