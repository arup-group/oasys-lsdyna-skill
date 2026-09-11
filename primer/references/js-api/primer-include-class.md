# Include class

The Include class allows you to access the include files in a model. [More...](primer-include-class.md#Include_details)

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

* [BlankAll](primer-include-class.md#Include::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*, masterInclude (optional)*[boolean]*)
* [BlankFlagged](primer-include-class.md#Include::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-include-class.md#Include::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-include-class.md#Include::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, masterInclude (optional)*[boolean]*)
* [GetAll](primer-include-class.md#Include::GetAll)(Model*[[Model](primer-model-class.md)]*, masterInclude (optional)*[boolean]*)
* [GetFromID](primer-include-class.md#Include::GetFromID)(Model*[[Model](primer-model-class.md)]*, include number*[integer]*)
* [Last](primer-include-class.md#Include::Last)(Model*[[Model](primer-model-class.md)]*)
* [Pick](primer-include-class.md#Include::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [Select](primer-include-class.md#Include::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, Model (optional)*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [Total](primer-include-class.md#Include::Total)(Model*[[Model](primer-model-class.md)]*)
* [UnblankAll](primer-include-class.md#Include::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-include-class.md#Include::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-include-class.md#Include::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [ClearFlag](primer-include-class.md#Include::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, clear contents (optional)*[boolean]*)
* [Error](primer-include-class.md#Include::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-include-class.md#Include::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetDetailedRange](primer-include-class.md#Include::GetDetailedRange)(type argument*[string]*)
* [GetLockedLabelData](primer-include-class.md#Include::GetLockedLabelData)(rangenum*[integer]*)
* [IsEmpty](primer-include-class.md#Include::IsEmpty)()
* [Keyword](primer-include-class.md#Include::Keyword)()
* [KeywordCards](primer-include-class.md#Include::KeywordCards)()
* [MakeCurrentLayer](primer-include-class.md#Include::MakeCurrentLayer)()
* [Modified](primer-include-class.md#Include::Modified)(listing*[boolean]*)
* [Next](primer-include-class.md#Include::Next)()
* [Previous](primer-include-class.md#Include::Previous)()
* [RemoveLockedLabelData](primer-include-class.md#Include::RemoveLockedLabelData)(rangenum*[integer]*)
* [SetDetailedRange](primer-include-class.md#Include::SetDetailedRange)(type argument*[string]*, min label*[integer]*, max label*[integer]*)
* [SetFlag](primer-include-class.md#Include::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, flag contents (optional)*[boolean]*)
* [SetLockedLabelData](primer-include-class.md#Include::SetLockedLabelData)(rangenum*[integer]*, min*[integer]*, max*[integer]*, type*[string]*, safe (optional)*[boolean]*, all\_includes (optional)*[boolean]*)
* [SetTransformOffset](primer-include-class.md#Include::SetTransformOffset)(offset*[constant]*, value*[integer]*, check\_only (optional)*[boolean]*)
* [Warning](primer-include-class.md#Include::Warning)(message*[string]*, details (optional)*[string]*)
* [Write](primer-include-class.md#Include::Write)(filename*[string]*, options (optional)*[object]*)
* [Write](primer-include-class.md#Include::Write_deprecated)(filename*[string]*, path (optional)*[constant]*, separator (optional)*[constant]*, version (optional)*[string]*, large (optional)*[boolean]*) [deprecated]
* [toString](primer-include-class.md#Include::toString)()

## Include constants

| **Name** | **Description** |
| --- | --- |
| Include.COPY\_INTO\_CURRENT | Copied elements are put into the current layer. See also [Options.copy_target_include](primer-options-class.md#copy_target_include) |
| Include.COPY\_INTO\_SOURCE | Copied elements are put into the include of the original element. See also [Options.copy_target_include](primer-options-class.md#copy_target_include) |
| Include.MASTER\_ONLY | Only write the master file. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.MERGE | Merge include files into the master file. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.NOT\_WRITTEN | Prevent include files from being written. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.SAME\_DIR | Write master and include files into the same directory. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.SELECT | Select include files to be written out. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.SUBDIR | Write include files to subdirectory. See also [Model.Write()](primer-model-class.md#Model::Write) |

### Constants for Directory separators

| **Name** | **Description** |
| --- | --- |
| Include.NATIVE | Use directory separators native to this machine when writing directory names. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.UNIX | Use unix directory separators when writing directory names. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.WINDOWS | Use windows directory separators when writing directory names. See also [Model.Write()](primer-model-class.md#Model::Write) |

### Constants for Pathnames

| **Name** | **Description** |
| --- | --- |
| Include.ABSOLUTE | Write include file with absolute pathname. See also [Model.Write()](primer-model-class.md#Model::Write) |
| Include.RELATIVE | Write include file with relative pathname. See also [Model.Write()](primer-model-class.md#Model::Write) |

### Constants for Transformation offsets

| **Name** | **Description** |
| --- | --- |
| Include.ENDOFF | Offset applied to PRIMER post end keywords ([Dummy](primer-dummy-class.md), [Mechanism](primer-mechanism-class.md) etc.) |
| Include.IDDOFF | Offset to define ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |
| Include.IDEOFF | Offset to element ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |
| Include.IDFOFF | Offset to function and table ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |
| Include.IDMOFF | Offset to material ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |
| Include.IDNOFF | Offset to node ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |
| Include.IDPOFF | Offset to part ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |
| Include.IDROFF | Offset to other ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |
| Include.IDSOFF | Offset to set ID (used in [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset) ) |

### Constants for compress mode

| **Name** | **Description** |
| --- | --- |
| Include.INDIVIDUAL\_GZIP | Each file 'name.key' is 'gzipped' to become the individual file 'name.key.gz' |
| Include.INDIVIDUAL\_ZIP | Each file 'name.key' is 'zipped' to become the individual file 'name.key.zip' |
| Include.KEEP\_ORIGINAL | Each file 'name.key' is written using its original compression: uncompressed, '.gz. or '.zip' format |

## Include properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| comments | string | Comments stored at the top of the include file. Note that this property is not supported for master include file. |
| fctchg | real | Electric charge transformation factor. Note that this property is not supported for master include file. |
| fctlen | real | Length transformation factor. Note that this property is not supported for master include file. |
| fctmas | real | Mass transformation factor. Note that this property is not supported for master include file. |
| fcttem | string | Temperature transformation factor. Note that this property is not supported for master include file. |
| fcttim | real | Time transformation factor. Note that this property is not supported for master include file. |
| file | string | The absolute filename for this include file.Note that this property is not supported for master include file. Also see the [name](primer-include-class.md#name) and [path](primer-include-class.md#path) properties. |
| genmax | integer | Include maximum label range value for general items |
| genmin | integer | Include minimum label range value for general items |
| iddoff (read only) | integer | Offset to define ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| ideoff (read only) | integer | Offset to element ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| idfoff (read only) | integer | Offset to function and table ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| idmoff (read only) | integer | Offset to material and equation of state ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| idnoff (read only) | integer | Offset to node ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| idpoff (read only) | integer | Offset to part, nodal rigid body and constrained node set ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| idroff (read only) | integer | Offset to other ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| idsoff (read only) | integer | Offset to set ID. To set property use [Include.SetTransformOffset()](primer-include-class.md#Include::SetTransformOffset). Note that this property is not supported for master include file. |
| incout | integer | Create file containing transformed data. Note that this property is not supported for master include file. |
| label (read only) | integer | [Include](primer-include-class.md) number. This number is used to identify the include file. A number is required as it is possible (with include transforms) to have multiple include files with the same name so they cannot be identified by name. The master file is include file number 0. Also see the [parent](primer-include-class.md#parent) property. |
| model | integer | The [Model](primer-model-class.md) number that the include is in. |
| n\_locked\_range | integer | Number of locked label ranges. Note that this does not include label ranges locked model-wide (ALL includes). |
| name | string | The filename for this include file excluding any path. Note that this property is not supported for master include file. Also see the [file](primer-include-class.md#file) and [path](primer-include-class.md#path) properties. |
| nelmax | integer | Include maximum label range value for nodes/elements/nrbc/const. spotwelds/define HWA items |
| nelmin | integer | Include minimum label range value for nodes/elements/nrbc/const. spotwelds/define HWA items |
| parent | integer | [Include](primer-include-class.md) number for the parent include file of this include. This number is used to identify the parent include file. A number is required as it is possible (with include transforms) to have multiple include files with the same name so they cannot be identified by name. The master file is include file number 0. Also see the [label](primer-include-class.md#label) property. Note that this property is not supported for master include file. |
| path | string | The path for this include file. Note that this property is not supported for master include file. Also see the [file](primer-include-class.md#file) and [name](primer-include-class.md#name) properties. |
| suppressed | logical | If keyout of Include file has been suppressed. Note that this property is not supported for master include file. |
| tranid | integer | Define transformation number. Note that this property is not supported for master include file. |
| transform | logical | true if this include file is an \*INCLUDE\_TRANSFORM, false otherwise. Note that this property is not supported for master include file. |

| Detailed Description<br>The Include class allows to create and query include files in a model.<br>See the documentation below for more details. |
| --- |

| Constructor
new Include(Model*[[Model](primer-model-class.md)]*, name*[string]*, parent (optional)*[integer]*)

Description<br>Create a new [Include](primer-include-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that include will be created in

* name (string)
 
[Include](primer-include-class.md) filename

* parent (optional) (integer)
 
Parent include file number. If omitted parent will be 0 (main file).

| Returns
<br>[Include](primer-include-class.md) object<br>
Return type
<br>Include |
| --- |

| Example
<br>To create a new include file /path/to/include.key in model m<br>
```
var i = new Include(m, "/path/to/include.key");
```
 |
| --- |

| Details of functions 
BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*, masterInclude (optional)*[boolean]*) [static]
Description<br>Blanks all of the includes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all includes will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

* masterInclude (optional) (boolean)
 
If masterInclude file should be blanked or not. If omitted masterInclude is false. The master file is include file number 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the includes in model m:<br>
```
Include.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged include files in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged includes will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the includes that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the include files in model m flagged with f:<br>
```
Include.BlankFlagged(m, f);
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, clear contents (optional)*[boolean]*)

Description<br>Clears a flag on the include. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the include

* clear contents (optional) (boolean)
 
If true then the items in the include file will also have flag cleared. If false (default) then the include file contents are not cleared.

| Returns
<br>Number of item flags cleared<br>
Return type
<br>Number |
| --- |

| Example
<br>To clear flag f for include i:<br>
```
i.ClearFlag(f);
```
<br>To clear flag f for include i and all of the items inside the include file, returning the number of item flags cleared in the include file:<br>
```
var ncleared = i.ClearFlag(f, true);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for an include file. For more details on checking see the [Check](primer-check-class.md) class. Note that this function is not supported for the master include file. |
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
<br>To add an error message "My custom error" for include i:<br>
```
i.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first include file in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first include in

| Returns
<br>Include object (or null if there are no includes in the model).<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the first include in model m:<br>
```
var i = Include.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, masterInclude (optional)*[boolean]*) [static]
Description<br>Flags all of the includes in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all includes will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the includes

* masterInclude (optional) (boolean)
 
If masterInclude file should be flagged or not. If omitted masterInclude is false. The master file is include file number 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the includes with flag f in model m:<br>
```
Include.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the include is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the include

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if include i has flag f set on it:<br>
```
if (i.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, masterInclude (optional)*[boolean]*) [static]
Description<br>Returns an array of Include objects for all of the includes in a model in PRIMER |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get includes from

* masterInclude (optional) (boolean)
 
If masterInclude file should be included or not. If omitted masterInclude is false. The master file is include file number 0.

| Returns
<br>Array of Include objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Include objects for all of the includes in model m<br>
```
var i = Include.GetAll(m);
```
 |
| --- |

* * *

| GetDetailedRange(type argument*[string]*)

Description<br>Gets detailed min and max label ranges for specified type from the include. |
| --- |

#### Arguments

* type argument (string)
 
Entity type for which ranges are returned

| Returns
<br>An array containing the min and max label ranges for the specified type or null if no range defined for this type.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get node ranges for include i:<br>
```
var ranges = i.GetDetailedRange("NODE");
var min = ranges[0];
var max = ranges[1];
      
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, include number*[integer]*) [static]
Description<br>Returns the Include object for an include label.<br>Note that items that are in the main keyword file will have a layer value of 0 which can be used as the *include number* argument to this function to return master include file. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the include in

* include number (integer)
 
number of the include you want the Include object for

| Returns
<br>Include object (or null if include does not exist).<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the Include object for include 10 in model m<br>
```
var i = Include.GetFromID(m, 10);
```
 |
| --- |

* * *

| GetLockedLabelData(rangenum*[integer]*)

Description<br>Returns the locked label data for include files. Also see the [n_locked_range](primer-include-class.md#n_locked_range) property |
| --- |

#### Arguments

* rangenum (integer)
 
The range number you want the data for; includes can have multiple ranges. **Note that range numbers start at 0, not 1**.

| Returns
<br>An array containing the include name (string can also be "ALL" if range is applicable model-wide), start (min) label (integer), end (max) label (integer), safe range (0 or 1 for false or true), and entity type (string).<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the locked label data for the 3rd range for include i:<br>
```
if (i.n_locked_range >= 3)
{
    var locked_label_data = i.GetLockedLabelData(2);
}
```
 |
| --- |

* * *

| IsEmpty()

Description<br>Returns true if include is Empty (contains no INSTALLED static/sort/kid/include items). |
| --- |

#### Arguments

No arguments

| Returns
<br>logical<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if include inc is empty<br>
```
if(inc.Empty())
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this include (\*INCLUDE, \*INCLUDE\_TRANSFORM). **Note that a carriage return is not added**. See also [Include.KeywordCards()](primer-include-class.md#Include::KeywordCards). This function is not supported for the master include file. |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for include i:<br>
```
var key = i.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the include. **Note that a carriage return is not added**. See also [Include.Keyword()](primer-include-class.md#Include::Keyword). Also note that this function is not supported for the master include file. |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for include i:<br>
```
var cards = i.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last include file in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last include in

| Returns
<br>Include object (or null if there are no includes in the model).<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the last include in model m:<br>
```
var i = Include.Last(m);
```
 |
| --- |

* * *

| MakeCurrentLayer()

Description<br>Sets this include file to be the current layer so that any newly created items are put in this include file. Also see the [Model.layer](primer-model-class.md#layer) property. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To make include i the current layer:<br>
```
i.MakeCurrentLayer();
```
 |
| --- |

* * *

| Modified(listing*[boolean]*)

Description<br>Returns true if include has been modified. |
| --- |

#### Arguments

* listing (boolean)
 
false for no listing output, true for listing output

| Returns
<br>logical<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if include inc is modified<br>
```
if(inc.Modified(false)) ... (no listing output)
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next include in the model. Note that this function is not supported for the master include file. |
| --- |

#### Arguments

No arguments

| Returns
<br>Include object (or null if there are no more includes in the model).<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the include in model m after include i:<br>
```
var i = i.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick an include. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only includes from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only includes that are flagged with *limit* can be selected. If omitted, or null, any includes from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Include](primer-include-class.md) object (or null if not picked)<br>
Return type
<br>Include |
| --- |

| Example
<br>To pick an includee from model m giving the prompt 'Pick include from screen':<br>
```
var i = Include.Pick('Pick include from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous include in the model. Note that this function is not supported for the master include file. |
| --- |

#### Arguments

No arguments

| Returns
<br>Include object (or null if there are no more includes in the model).<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the include in model m before include i:<br>
```
var i = i.Previous();
```
 |
| --- |

* * *

| RemoveLockedLabelData(rangenum*[integer]*)

Description<br>Removes the locked label data for a range in include files. Also see the [n_locked_range](primer-include-class.md#n_locked_range) property |
| --- |

#### Arguments

* rangenum (integer)
 
The locked label range you want to remove. **Note that range numbers start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the locked labels for the 3rd range for include i:<br>
```
i.RemoveLockedLabelData(2);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, Model (optional)*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select includes using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting includes

* prompt (string)
 
Text to display as a prompt to the user

* Model (optional) ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to select from

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of items selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select an include from model m, flagging those selected with flag f, giving the prompt 'Select include':<br>
```
Include.Select(f, 'Select include', m);
```
 |
| --- |

* * *

| SetDetailedRange(type argument*[string]*, min label*[integer]*, max label*[integer]*)

Description<br>Sets detailed min and max label ranges for specified type on the include. |
| --- |

#### Arguments

* type argument (string)
 
Entity type for which ranges are to be defined

* min label (integer)
 
Defines the smallest label for entities of this type

* max label (integer)
 
Defines the largest label for entities of this type

| Returns
<br>No return value |
| --- |

| Example
<br>To set node ranges for include i:<br>
```
i.SetDetailedRange("NODE", 50000, 60000);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, flag contents (optional)*[boolean]*)

Description<br>Sets a flag on the include. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the include

* flag contents (optional) (boolean)
 
If true then the items in the include file will also be flagged. If false (default) then the include file contents are not flagged.

| Returns
<br>Number of items flagged<br>
Return type
<br>Number |
| --- |

| Example
<br>To set flag f for include i:<br>
```
i.SetFlag(f);
```
<br>To set flag f for include i and all of the items inside the include file, returning the number of items flagged in the include file:<br>
```
var nflagged = i.SetFlag(f, true);
```
 |
| --- |

* * *

| SetLockedLabelData(rangenum*[integer]*, min*[integer]*, max*[integer]*, type*[string]*, safe (optional)*[boolean]*, all\_includes (optional)*[boolean]*)

Description<br>Sets the locked label data for a particular range for an include file. Also see the [n_locked_range](primer-include-class.md#n_locked_range) property |
| --- |

#### Arguments

* rangenum (integer)
 
The range you want to set the data for. **Note that range numbers start at 0, not 1**.

* min (integer)
 
Start (min) label for a locked range.

* max (integer)
 
End (max) label for a locked range.

* type (string)
 
Entity type code - "NODE", "SHELL" etc. Can also be "ALL" (for a list of types see Appendix I of the PRIMER manual).

* safe (optional) (boolean)
 
Determines whether a locked range is safe (protected).

* all\_includes (optional) (boolean)
 
Specified range will be set model-wide (all includes). Only useful when working with the 'master' include.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the locked label data for the 3rd range with min 99, max 199, for nodes for include i:<br>
```
i.SetLockedLabelData(3, 99, 199, "NODE");
```
 |
| --- |

* * *

| SetTransformOffset(offset*[constant]*, value*[integer]*, check\_only (optional)*[boolean]*)

Description<br>Sets offset values for include transform. This function is required to change the offset values rather than changing the properties directly so that the include can be checked to ensure that the new value does not cause any label clashes with existing items or any negative labels when the transform is unapplied when writing the include. Note that this function is not supported for the master include file. |
| --- |

#### Arguments

* offset (constant)
 
The include transform offset type to change. Can be [Include.IDNOFF](primer-include-class.md#Include.IDNOFF), [Include.IDEOFF](primer-include-class.md#Include.IDEOFF), [Include.IDPOFF](primer-include-class.md#Include.IDPOFF), [Include.IDMOFF](primer-include-class.md#Include.IDMOFF), [Include.IDSOFF](primer-include-class.md#Include.IDSOFF), [Include.IDFOFF](primer-include-class.md#Include.IDFOFF), [Include.IDDOFF](primer-include-class.md#Include.IDDOFF) or [Include.IDROFF](primer-include-class.md#Include.IDROFF).

* value (integer)
 
The value to change the offset to

* check\_only (optional) (boolean)
 
Sometimes it may be necessary to check if changing an offset for an include will cause an error or label clash rather than actually changing it. If check only is true then PRIMER will just check to see if the new value for the offset will cause any label clashes or negative labels **and not change the offset value or any item labels**. If false or omitted then the offset and labels will be updated if there are no errors.

| Returns
<br>logical, true if change successful. false if the change would cause a clash of labels or negative labels, in which case the value is not changed.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set [idpoff](primer-include-class.md#Include.IDPOFF) for include i to 1000, checking that the change is successful:<br>
```
var success = i.SetTransformOffset(Include.IDPOFF, 1000);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the total number of include files in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get include total from

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the number of include files in model m:<br>
```
var t = Include.Total(m);
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the includes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all includes will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the includes in model m:<br>
```
Include.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged include files in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged includes will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the includes that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the include files in model m flagged with f:<br>
```
Include.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the includes in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all includes will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the includes

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all of the includes in model m:<br>
```
Include.UnflagAll(m, f);
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for an include file. For more details on checking see the [Check](primer-check-class.md) class. Note that this function is not supported for the master include file. |
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
<br>To add a warning message "My custom warning" for include i:<br>
```
i.Warning("My custom warning");
```
 |
| --- |

* * *

| Write(filename*[string]*, options (optional)*[object]*)

Description<br>Writes an include file. Note that this function is not supported for the master include file. |
| --- |

#### Arguments

* filename (string)
 
Filename of the Ansys LS-DYNA keyword file you want to write

* options (optional) (object)

Options specifying how the file should be written out. If omitted the default values below will be used. The properties available are: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary (optional) | boolean | If true then the output file will be written out in binary. If false (default) then an ascii file will be written. |
| compress (optional) | boolean | If true then the output file will be compressed. If false (default) then an uncompressed file will be written. |
| compressLevel (optional) | integer | Compression level for .gz and .zip files. Must be in the range 1 to 9 with 1 being the least compression (fastest speed) to 9 being the greatest compression (slowest speed) |
| compressMode (optional) | integer | This option can be used to specify the mode of compression. Can be [Include.KEEP_ORIGINAL](primer-include-class.md#Include.KEEP_ORIGINAL) or [Include.INDIVIDUAL_GZIP](primer-include-class.md#Include.INDIVIDUAL_GZIP) or [Include.INDIVIDUAL_ZIP](primer-include-class.md#Include.INDIVIDUAL_ZIP) |
| fileStartAscii (optional) | boolean | If true then the begining of the file (\*CONTROL etc) file is written out in ascii. If false (default) then the entire file is converted to binary. |
| i10 (optional) | boolean | If true then i10 format will be used to write the file. If false (default) then the normal Ansys LS-DYNA format will be used. |
| large (optional) | boolean | If true then large format will be used to write the file. If false (default) then the normal Ansys LS-DYNA format will be used. Note that large format is only available from version R7.1 and above. |
| path (optional) | integer | The method used to write include paths. Can be [Include.ABSOLUTE](primer-include-class.md#Include.ABSOLUTE) (default) or [Include.RELATIVE](primer-include-class.md#Include.RELATIVE) |
| separator (optional) | integer | The directory separator used when writing include files. Can be [Include.NATIVE](primer-include-class.md#Include.NATIVE) (default), [Include.UNIX](primer-include-class.md#Include.UNIX) or [Include.WINDOWS](primer-include-class.md#Include.WINDOWS) |
| version (optional) | string | The Ansys LS-DYNA version used to write the file. Can be "971R5", "971R4", "971R3", "970v6763" etc (see the version popup in Model-&gt;Write '&gt;&gt;&gt; Ansys LS-DYNA output options' for a full list). See also [Options.dyna_version](primer-options-class.md#dyna_version) |

| Returns
<br>No return value |
| --- |

| Example
<br>To Write include i to file /data/test/file.key as a compressed gzip in version R10.0<br>
```
 var output_obj = new Object();
 output_obj.version = "R10.0";
 output_obj.compress = true;
 output_obj.compressMode = Include.INDIVIDUAL_GZIP;
 i.Write("/data/test/file.key", output_obj);
```
 |
| --- |

* * *

| Write(filename*[string]*, path (optional)*[constant]*, separator (optional)*[constant]*, version (optional)*[string]*, large (optional)*[boolean]*) [deprecated]
<br>This function is deprecated in version 15.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Writes an include file. Note that this function is not supported for the master include file. |
| --- |

#### Arguments

* filename (string)
 
Filename of the Ansys LS-DYNA keyword file you want to write

* path (optional) (constant)
 
The method used to write include paths. Can be [Include.ABSOLUTE](primer-include-class.md#Include.ABSOLUTE) (default) or [Include.RELATIVE](primer-include-class.md#Include.RELATIVE)

* separator (optional) (constant)
 
The directory separator used when writing include files. Can be [Include.NATIVE](primer-include-class.md#Include.NATIVE) (default), [Include.UNIX](primer-include-class.md#Include.UNIX) or [Include.WINDOWS](primer-include-class.md#Include.WINDOWS)

* version (optional) (string)
 
The Ansys LS-DYNA version used to write the file. Can be "971R5", "971R4", "971R3", "970v6763" etc. (see the version popup in Model-&gt;Write '&gt;&gt;&gt; Ansys LS-DYNA output options' for a full list). See also [Options.dyna_version](primer-options-class.md#dyna_version)

* large (optional) (boolean)
 
If true then large format will be used to write the file. If false (default) then the normal Ansys LS-DYNA format will be used. Note that large format is only available from version R7.1 and above.

| Returns
<br>No return value |
| --- |

| Example
<br>To write include file i to file /data/test/file.key<br>
```
i.Write("/data/test/file.key");
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the include data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Include.Keyword()](primer-include-class.md#Include::Keyword) and [Include.KeywordCards()](primer-include-class.md#Include::KeywordCards). Also note that this function is not supported for the master include file. |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for include i in keyword format<br>
```
var s = i.toString();
```
 |
| --- |

* * *