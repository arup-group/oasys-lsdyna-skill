# Model class

The Model class gives you access to models in T/HIS. [More...](this-model-class.md#Model_details)

The T/HIS JavaScript API provides many class constants, properties and methods. For Arup to
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

* [Exists](this-model-class.md#Model::Exists)(model number*[integer]*)
* [GetFromID](this-model-class.md#Model::GetFromID)(model number*[integer]*)
* [HighestID](this-model-class.md#Model::HighestID)()
* [Read](this-model-class.md#Model::Read)(filename*[string]*, filetype (optional)*[integer]*)
* [Total](this-model-class.md#Model::Total)()

## Member functions

* [ClearFlag](this-model-class.md#Model::ClearFlag)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*, item*[integer]*, end (optional)*[integer]*)
* [Delete](this-model-class.md#Model::Delete)()
* [FlagAll](this-model-class.md#Model::FlagAll)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*)
* [Flagged](this-model-class.md#Model::Flagged)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*, item*[integer]*)
* [GetDataFlagged](this-model-class.md#Model::GetDataFlagged)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, data\_comp*[integer]*, int\_pnt (optional)*[object | integer]*, extra (optional)*[integer]*)
* [GetInternalID](this-model-class.md#Model::GetInternalID)(entity\_type*[integer]*, item*[integer]*)
* [GetLabel](this-model-class.md#Model::GetLabel)(entity\_type*[integer]*, item*[integer]*)
* [GetLabelFromName](this-model-class.md#Model::GetLabelFromName)(entity\_type*[integer]*, name*[string]*)
* [GetModelUnits](this-model-class.md#Model::GetModelUnits)()
* [GetName](this-model-class.md#Model::GetName)(entity\_type*[integer]*, item*[integer]*)
* [GetNumberFlagged](this-model-class.md#Model::GetNumberFlagged)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type (optional)*[integer]*)
* [GetNumberOf](this-model-class.md#Model::GetNumberOf)(entity\_type*[integer]*)
* [QueryDataPresent](this-model-class.md#Model::QueryDataPresent)(data\_comp*[integer]*, entity\_type (optional)*[integer]*, int\_pnt (optional)*[object | integer]*, extra (optional)*[integer]*)
* [SetFlag](this-model-class.md#Model::SetFlag)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*, item*[integer]*, end (optional)*[integer]*)
* [SetModelUnits](this-model-class.md#Model::SetModelUnits)(unit system*[String]*)
* [UnflagAll](this-model-class.md#Model::UnflagAll)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*)

## Model constants

| **Name** | **Description** |
| --- | --- |
| Model.ALL\_FILES | Option to select all files (.thf, LSDA, ASCII, .ztf) when reading model in. |
| Model.ASCII | Option to select ASCII files when reading model in. |
| Model.LSDA | Option to select LSDA/binout file when reading model in. |
| Model.THF | Option to select .thf/d3thdt file when reading model in. |
| Model.XTF | Option to select .xtf/xtfile file when reading model in. |
| Model.ZTF | Option to select .ztf file when reading model in. |

## Model properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dir (read only) | string | Directory containing the model file. |
| file (read only) | string | File selected when reading the model. |
| id (read only) | integer | Model ID |
| title (read only) | string | Model title. |

| Detailed Description<br>The Model class contains information on filenames and directories belonging to a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
ClearFlag(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*, item*[integer]*, end (optional)*[integer]*)

Description<br>Clears a defined flag on an internal (or external) item(s) of type of entity\_type in the model. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag you want to clear.

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type that the defined flag will be cleared on.

* item (integer)
 
If +ive: The internal item number starting from 1. If -ive: The external item label.

* end (optional) (integer)
 
To unflag range of items, specify an optional end of range. Unflags items from item to range.

| Returns
<br>TRUE if the flag is successfully cleared on the item, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To clear the flag f on the 6th node in model m:<br>
```
m.ClearFlag(f, Entity.NODE, 6);
```
<br>To clear the flag f on the Node 13456 in model m:<br>
```
m.ClearFlag(f, Entity.NODE, -13456);
```
<br>To clear the flag f on the first 10 nodes in model m:<br>
```
m.ClearFlag(f, Entity.NODE, 1, 10);
```
<br>To clear the flag f on nodes with labels 1000, 1001, 1002, ..., 1009 in model m:<br>
```
m.ClearFlag(f, Entity.NODE, -1000, -1009);
```
 |
| --- |

* * *

| Delete()

Description<br>Deletes a model<br>**Do not use the Model object after calling this method**. |
| --- |

#### Arguments

No arguments

| Returns
<br>TRUE if the model sucessfully deleted, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To delete model m:<br>
```
var deleted = m.Delete();
```
 |
| --- |

* * *

| Exists(model number*[integer]*) [static]
Description<br>Checks if a model exists |
| --- |

#### Arguments

* model number (integer)
 
The number of the model you want to check the existence of.

| Returns
<br>TRUE if the model exists, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if a model n exists<br>
```
var exists = Model.Exists(n);
```
 |
| --- |

* * *

| FlagAll(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*)

Description<br>Sets a defined flag on all of items of type of entity\_type in the model. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag you want to set.

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type that the defined flag will be set on.

| Returns
<br>TRUE if the flag is successfully set on all the items, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set the flag f on all the nodes in model m:<br>
```
m.FlagAll(f, Entity.NODE);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*, item*[integer]*)

Description<br>Checks if a defined flag is set on an internal (or external) item of type of entity\_type in the model. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag you want to check.

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type to check.

* item (integer)
 
If +ive: The internal item number starting from 1. If -ive: The external item label.

| Returns
<br>TRUE if the flag is set, FALSE if the flag is not set.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if flag f is set on the 6th node in model m:<br>
```
m.Flagged(f, Entity.NODE, 6);
```
<br>To check if flag f is set on the Node 13456 in model m:<br>
```
m.Flagged(f, Entity.NODE, -13456);
```
 |
| --- |

* * *

| GetDataFlagged(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, data\_comp*[integer]*, int\_pnt (optional)*[object | integer]*, extra (optional)*[integer]*)

Description<br>Gets curve objects for a data component for relevant items that are flagged with a specified flag in the model. <br>Some data components are valid for different entity types (e.g. SXX). If the same flag is set on items of different entity types, data is returned for all relevant, flagged entity types. <br>To return the same data for multiple items of the same type, it will be much faster if you flag all items you want data for, and do a single call to GetDataFlagged(). <br>The curves are ordered by type, then by the ascending internal index of the items. Use [curve properties](this-curve-class.md#label) to identify which curve is which. **If the data is not available in the model for a flagged item, or not available for the selected integration points or extra value, a curve is not returned.** You can use [QueryDataPresent()](this-model-class.md#Model::QueryDataPresent) to check if the data is available.<br> *It is recommended that you check the number of curves returned.* This can be compared with the number of flagged entities, see [GetNumberFlagged()](this-model-class.md#Model::GetNumberFlagged).<br> **If the data is generally available in the model, but not for the specific flagged item, a "null curve" which contains no x-y data values is returned.** For example, a specific shell may have fewer integration points than MAX\_INT for all shells, a ["null curve"](this-curve-class.md#is_null) would be returned for the higher integration points. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag to use. For model data, use 0 to define a null "padding" argument.

* data\_comp (integer)
 
The Data [Component](this-component-class.md) to extract.

* int\_pnt (optional) (object) | integer

The integration points to extract.
 This argument can be either an integer or an object.
 This argument is ignored when the entity type is not SOLID, SHELL, THICK\_SHELL or BEAM.

 An *integer* specifies the integration point to extract:
 For SOLIDs: value between 0 for Average/Centre and 8. (Defaults to Average/Centre).
 For SHELLs and THICK\_SHELLs: value between 1 and # integration points, or codes [Constant.TOP](this-constant-class.md#Constant.TOP), [Constant.MIDDLE](this-constant-class.md#Constant.MIDDLE), [Constant.BOTTOM](this-constant-class.md#Constant.BOTTOM). (Defaults to MIDDLE integration point). 
For integrated BEAMs: value between 1 and # integration points. (Defaults to integration point 1). 
 
Use 0 to define a null "padding" argument, then uses the default integration point. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Through thickness integration point as described above. |
| np (optional) | integer | The nodes to extrapolate to. For SOLIDs, SHELLs and THICK\_SHELLs: value between 1 and # nodes on the entity. (Defaults to none). |
| op (optional) | integer | On plan integration point. For SHELLs and THICK\_SHELLs: value between 0 for Average/Centre and 4. (Defaults to Average/Centre). |

* extra (optional) (integer)
 
The extra component id for SOLIDs, SHELLs, THICK\_SHELLs or BEAMs.

| Returns
<br>Array of [Curve objects](this-curve-class.md).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get X direct stress for flagged SOLIDs, SHELLs and THICK\_SHELLs with flag f in model m:<br>
```
var cur_array = m.GetDataFlagged(f, Component.SXX);
```
<br>To get X direct stress at top integration point for flagged SHELLs and THICK\_SHELLs with flag f in model m:<br>
```
var cur_array = m.GetDataFlagged(f, Component.SXX, Constant.TOP);
```
<br>To get X direct stress at top integration point, and on-plan integration point 3 for flagged SHELLs and THICK\_SHELLs with flag f in model m:<br>
```
var cur_array = m.GetDataFlagged(f, Component.SXX, {ip:Constant.TOP, op:3});
```
<br>To get extra beam data 3 for flagged BEAMs with flag f in model m:<br>
```
var cur_array = m.GetDataFlagged(f, Component.BEX, 0, 3);
```
<br>To get the total mass in model m:<br>
```
var cur_array = m.GetDataFlagged(0, Component.GMASS);
```
 |
| --- |

* * *

| GetFromID(model number*[integer]*) [static]
Description<br>Returns the Model object for a model ID or null if model does not exist. |
| --- |

#### Arguments

* model number (integer)
 
number of the model you want the Model object for

| Returns
<br>Model object (or null if model does not exist).<br>
Return type
<br>Model |
| --- |

| Example
<br>To get the model n<br>
```
var model = Model.GetFromID(n);
```
 |
| --- |

* * *

| GetInternalID(entity\_type*[integer]*, item*[integer]*)

Description<br>Gets the internal ID of external item of type entity\_type in the model. |
| --- |

#### Arguments

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type of the item.

* item (integer)
 
The external item number.

| Returns
<br>Integer internal ID (starting from 1) with reference to the entity\_type code. Returns integer internal ID of 0 if item cannot be found.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the internal ID of Airbag 300 in model m:<br>
```
var x = m.GetInternalID(Entity.AIRBAG, 300);
```
 |
| --- |

* * *

| GetLabel(entity\_type*[integer]*, item*[integer]*)

Description<br>Gets the external label of internal item of type entity\_type in the model. |
| --- |

#### Arguments

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type of the item.

* item (integer)
 
The internal item number starting from 1.

| Returns
<br>Integer external ID (or 0 if there is an error, or the internal ID if there are no external IDs).<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the external ID of the 2nd airbag in model m:<br>
```
var x = m.GetLabel(Entity.AIRBAG, 2);
```
 |
| --- |

* * *

| GetLabelFromName(entity\_type*[integer]*, name*[string]*)

Description<br>Gets the external label from the database history name name of type entity\_type in the model. This is quicker if you use parent entity type codes (e.g. Entity.WELD rather than Entity.WELD\_CONSTRAINED) |
| --- |

#### Arguments

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type of the item.

* name (string)
 
The name of the item. If only the first part of the name is given, it must be unambiguous.

| Returns
<br>Integer external ID of the first matching name (or 0 if there is an error).<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the external label the of Contact named "Rear Bolt" in database history:<br>
```
var name = m.GetLabelFromName(Entity.CONTACT, "Rear Bolt");
```
 |
| --- |

* * *

| GetModelUnits()

Description<br>Returns the Model units of a particular model |
| --- |

#### Arguments

No arguments

| Returns
<br>String indicating the model unit system of the model<br>
Return type
<br>String |
| --- |

| Example
<br>To get the model units of model m<br>
```
var units = m.GetModelUnits();
```
 |
| --- |

* * *

| GetName(entity\_type*[integer]*, item*[integer]*)

Description<br>Gets the database history name of an internal (or external) item of type entity\_type in the model. |
| --- |

#### Arguments

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type of the item.

* item (integer)
 
If +ive: The internal item number starting from 1. If -ive: The external item label.

| Returns
<br>String containing the database history name (or null if not available).<br>
Return type
<br>String |
| --- |

| Example
<br>To get the database history name of the 2nd airbag in model m:<br>
```
var name = m.GetName(Entity.AIRBAG, 2);
```
<br>To get the database history name of Airbag 300 in model m:<br>
```
var name = m.GetName(Entity.AIRBAG, -300);
```
 |
| --- |

* * *

| GetNumberFlagged(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type (optional)*[integer]*)

Description<br>Gets the number of entities flagged with a requested flag in the model. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag you want to check.

* entity\_type (optional) (integer)
 
If specified, the [Entity](this-entity-class.md) type to look at. If not specified, all types are looked at.

| Returns
<br>Integer number<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the number of airbag parts flagged with flag f in model m:<br>
```
var num = m.GetNumberFlagged(f, Entity.AIRBAG_PART_DATA);
```
 |
| --- |

* * *

| GetNumberOf(entity\_type*[integer]*)

Description<br>Gets the number of entities of a requested type in the model. |
| --- |

#### Arguments

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type that you want to know the number of.

| Returns
<br>Integer number<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the number of airbags in model m:<br>
```
var num = m.GetNumberOf(Entity.AIRBAG);
```
 |
| --- |

* * *

| HighestID() [static]
Description<br>Returns the ID of the highest model currently being used |
| --- |

#### Arguments

No arguments

| Returns
<br>ID of highest model currently being used.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the highest model ID<br>
```
var id= Model.HighestID();
```
 |
| --- |

* * *

| QueryDataPresent(data\_comp*[integer]*, entity\_type (optional)*[integer]*, int\_pnt (optional)*[object | integer]*, extra (optional)*[integer]*)

Description<br>Checks if a data component data\_comp for a given entity is present in a model's database. For SOLIDs, SHELLs, THICK\_SHELLs and BEAMs the integration point and extra component ID can also be checked. This will show if curves for any flagged items of this type will be returned for [GetDataFlagged()](this-model-class.md#Model::GetDataFlagged). Note, it does not check if the data component is *valid*, for example a specific shell may have fewer integration points than MAX\_INT for all shells, so curves returned for [GetDataFlagged()](this-model-class.md#Model::GetDataFlagged) may still be "null" with no x-y data. |
| --- |

#### Arguments

* data\_comp (integer)
 
The Data [Component](this-component-class.md) to check.

* entity\_type (optional) (integer)
 
The [Entity](this-entity-class.md) type to check. This argument can only be omitted when checking for global model data.

* int\_pnt (optional) (object) | integer

The integration points to check.
 This argument can be either an integer or an object.
 This argument is ignored if the entity type is not SOLID, SHELL, THICK\_SHELL or BEAM.

 An *integer* specifies the integration point to check:
 For SOLIDs: value between 0 for Average/Centre and 8. (Defaults to Average/Centre).
 For SHELLs and THICK\_SHELLs: value between 1 and # integration points, or codes [Constant.TOP](this-constant-class.md#Constant.TOP), [Constant.MIDDLE](this-constant-class.md#Constant.MIDDLE), [Constant.BOTTOM](this-constant-class.md#Constant.BOTTOM). (Defaults to MIDDLE integration point). 
For integrated BEAMs: value between 1 and # integration points. (Defaults to integration point 1). 
 
Use 0 to define a null "padding" argument, then checks the default integration point. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ip | integer | Through thickness integration point as described above. |
| np (optional) | integer | The nodes to extrapolate to. For SOLIDs, SHELLs and THICK\_SHELLs: value between 1 and # nodes on the entity. (Defaults to none). |
| op (optional) | integer | On plan integration point. For SHELLs and THICK\_SHELLs: value between 0 for Average/Centre and 4. (Defaults to Average/Centre). |

* extra (optional) (integer)
 
The extra component id for SOLIDs, SHELLs, THICK\_SHELLs or BEAMs.

| Returns
<br>true if data is present, otherwise false.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check for X direct stress data for SOLIDs in model m:<br>
```
if(m.QueryDataPresent(Component.SXX, Entity.SOLID)) ... 
```
<br>To check for X direct stress data at integration point 5 for SHELLs in model m:<br>
```
if(m.QueryDataPresent(Component.SXX, Entity.SHELL, 5)) ... 
```
<br>To check for X direct stress data at both the top integration point, and also extrapolated to node 3 for SHELLs in model m:<br>
```
if(m.QueryDataPresent(Component.SXX, Entity.SHELL, {ip:Constant.TOP, np:3}) ... 
```
<br>To check for extra 3 beam data for BEAMs in model m:<br>
```
if(m.QueryDataPresent(Component.BEX, Entity.BEAM, 0, 3);
```
<br>To check for total mass data in model m:<br>
```
if(m.QueryDataPresent(Component.GMASS));
```
 |
| --- |

* * *

| Read(filename*[string]*, filetype (optional)*[integer]*) [static]
Description<br>Reads in a new model. |
| --- |

#### Arguments

* filename (string)
 
Filename you want to read.

* filetype (optional) (integer)
 
Filetypes you want to read. Can be bitwise OR of Model.THF, Model.XTF, Model.LSDA, Model.ASCII, Model.ZTF and Model.ALL\_FILES. If omitted all available files will be read.

| Returns
<br>Model object (or null if error).<br>
Return type
<br>Model |
| --- |

| Example
<br>To read in model /data/test/file.thf:<br>
```
var m = Model.Read("/data/test/file.thf");
```
<br>To read in model /data/test/file.thf only with .ztf files:<br>
```
var m = Model.Read("/data/test/file.thf", Model.ZTF);
```
<br>To read in model /data/test/file.thf only with .thf, .ascii and .ztf files:<br>
```
var m = Model.Read("/data/test/file.thf", Model.THF | Model.ASCII | Model.ZTF);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*, item*[integer]*, end (optional)*[integer]*)

Description<br>Sets a defined flag on an internal (or external) item(s) of type of entity\_type in the model. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag you want to set.

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type that the defined flag will be set on.

* item (integer)
 
If +ive: The internal item number starting from 1. If -ive: The external item label.

* end (optional) (integer)
 
To flag range of items, specify an optional end of range. Flags items from item to range.

| Returns
<br>TRUE if the flag is successfully set on the item, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set the flag f on the 6th node in model m:<br>
```
m.SetFlag(f, Entity.NODE, 6);
```
<br>To set the flag f on the Node 13456 in model m:<br>
```
m.SetFlag(f, Entity.NODE, -13456);
```
<br>To set the flag f on the first 10 nodes in model m:<br>
```
m.SetFlag(f, Entity.NODE, 1, 10);
```
<br>To set the flag f on nodes with labels 1000, 1001, 1002, ..., 1009 in model m:<br>
```
m.SetFlag(f, Entity.NODE, -1000, -1009);
```
 |
| --- |

* * *

| SetModelUnits(unit system*[String]*)

Description<br>Set the model units of a model to the units provided by the user |
| --- |

#### Arguments

* unit system (String)
 
The unit system you want to set the model units of model to

| Returns
<br>TRUE if the Model units are set successfully else FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set the model units of model m to "U2"<br>
```
m.SetModelUnits("U2");
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
<br>To find how many models there are in T/HIS:<br>
```
var num = Model.Total();
```
 |
| --- |

* * *

| UnflagAll(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*, entity\_type*[integer]*)

Description<br>Unsets a defined flag flag on all of items of type of entity\_type in the model. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag you want to unset.

* entity\_type (integer)
 
The [Entity](this-entity-class.md) type that the defined flag will be unset on.

| Returns
<br>TRUE if the flag is successfully unset on all the items, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To unset the flag f on all the nodes in model m:<br>
```
m.UnflagAll(f, Entity.NODE);
```
 |
| --- |

* * *