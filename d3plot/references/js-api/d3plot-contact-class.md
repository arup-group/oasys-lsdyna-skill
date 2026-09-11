# Contact class

The Contact class gives you access to contacts in D3PLOT. [More...](d3plot-contact-class.md#Contact_details)

The D3PLOT JavaScript API provides many class constants, properties and methods. For Arup to
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

* [BlankAll](d3plot-contact-class.md#Contact::BlankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [BlankFlagged](d3plot-contact-class.md#Contact::BlankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [First](d3plot-contact-class.md#Contact::First)(model*[[Model](d3plot-model-class.md)]*)
* [FlagAll](d3plot-contact-class.md#Contact::FlagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [GetAll](d3plot-contact-class.md#Contact::GetAll)(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](d3plot-contact-class.md#Contact::GetFlagged)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*)
* [GetFromID](d3plot-contact-class.md#Contact::GetFromID)(model*[[Model](d3plot-model-class.md)]*, label*[integer]*)
* [GetFromIndex](d3plot-contact-class.md#Contact::GetFromIndex)(model*[[Model](d3plot-model-class.md)]*, index*[integer]*)
* [GetMultipleData](d3plot-contact-class.md#Contact::GetMultipleData)(component*[constant]*, items*[array]*, options (optional)*[object]*)
* [Last](d3plot-contact-class.md#Contact::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Pick](d3plot-contact-class.md#Contact::Pick)()
* [Select](d3plot-contact-class.md#Contact::Select)(flag*[Flag]*)
* [Total](d3plot-contact-class.md#Contact::Total)(model*[[Model](d3plot-model-class.md)]*)
* [UnblankAll](d3plot-contact-class.md#Contact::UnblankAll)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*)
* [UnblankFlagged](d3plot-contact-class.md#Contact::UnblankFlagged)(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)
* [UnflagAll](d3plot-contact-class.md#Contact::UnflagAll)(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*)

## Member functions

* [Blank](d3plot-contact-class.md#Contact::Blank)(window*[GraphicsWindow]*)
* [Blanked](d3plot-contact-class.md#Contact::Blanked)(window*[GraphicsWindow]*)
* [ClearFlag](d3plot-contact-class.md#Contact::ClearFlag)(flag*[Flag]*)
* [Flagged](d3plot-contact-class.md#Contact::Flagged)(flag*[Flag]*)
* [GetData](d3plot-contact-class.md#Contact::GetData)(component*[constant]*, options (optional)*[object]*)
* [GetNode](d3plot-contact-class.md#Contact::GetNode)(side*[constant]*, index*[integer]*)
* [GetSegment](d3plot-contact-class.md#Contact::GetSegment)(side*[constant]*, index*[integer]*)
* [Next](d3plot-contact-class.md#Contact::Next)()
* [Previous](d3plot-contact-class.md#Contact::Previous)()
* [SetFlag](d3plot-contact-class.md#Contact::SetFlag)(flag*[Flag]*)
* [Unblank](d3plot-contact-class.md#Contact::Unblank)(window*[GraphicsWindow]*)

## Contact constants

| **Name** | **Description** |
| --- | --- |
| Contact.SURFA | SURFA side of the contact |
| Contact.SURFB | SURFB side of the contact |

## Contact properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| aNodes (read only) | integer | Total number of nodes on the SURFA side of the contact |
| aSegments (read only) | integer | Total number of segments on the SURFA side of the contact |
| bNodes (read only) | integer | Total number of nodes on the SURFB side of the contact |
| bSegments (read only) | integer | Total number of segments on the SURFB side of the contact |
| data (read only) | real|array | Component data for a contact passed as an argument to [GetMultipleData](d3plot-contact-class.md#Contact::GetMultipleData). Note that data will only exist for the instance of the contact passed to [GetMultipleData](d3plot-contact-class.md#Contact::GetMultipleData). i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database |
| include (read only) | integer | The include file number in the model that the contact is in |
| index (read only) | integer | The internal index for the contact in D3PLOT (starting at 0) |
| label (read only) | integer | The Ansys LS-DYNA label for the contact |
| model (read only) | Model | The [Model](d3plot-model-class.md) that the contact is in |
| name (read only) | string | The name of the contact type |
| title (read only) | string | The title of the contact |
| type (read only) | constant | The type for the contact (will be [Type.CONTACT](d3plot-type-class.md#Type.CONTACT)) |

| Detailed Description<br>The Contact class allows you to inspect contacts in a model.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Blank(window*[GraphicsWindow]*)

Description<br>Blanks the contact in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the contact in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank contact c in graphics window g:<br>
```
c.Blank(g);
```
 |
| --- |

* * *

| BlankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Blanks all of the contacts in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the contacts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the contacts will be blanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the contacts in model m, in graphics window gw:<br>
```
Contact.BlankAll(gw, m);
```
 |
| --- |

* * *

| BlankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Blanks all of the contacts in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to blank the contacts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged contacts will be blanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the contacts to blank

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the contacts flagged with flag f in model m, in graphics window gw:<br>
```
Contact.BlankFlagged(gw, m, f);
```
 |
| --- |

* * *

| Blanked(window*[GraphicsWindow]*)

Description<br>Checks if the contact is blanked in a graphics window or not |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) in which to check if the contact is blanked

| Returns
<br>true if blanked, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if contact c is blanked in graphics window g:<br>
```
if (c.Blanked(g) ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on a contact |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear on the contact

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on contact c:<br>
```
c.ClearFlag();
```
 |
| --- |

* * *

| First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first contact in the model (or null if there are no contacts in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first contact in

| Returns
<br>Contact object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the first contact in model m:<br>
```
var c = Contact.First(m);
```
 |
| --- |

* * *

| FlagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Flags all of the contacts in the model with a defined flag |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the contacts will be flagged in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the contacts

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the contacts with flag f in model m:<br>
```
Contact.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[Flag]*)

Description<br>Checks if the contact is flagged or not |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to test on the contact

| Returns
<br>true if flagged, false if not<br>
Return type
<br>boolean |
| --- |

| Example
<br>To check if contact c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(model*[[Model](d3plot-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Contact objects or properties for all of the contacts in the model. If the optional property argument is not given then an array of Contact objects is returned. If the property argument is given, that property value for each contact is returned in the array instead of a Contact object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the contacts are in

* property (optional) (string)
 
Name for property to get for all contacts in the model

| Returns
<br>Array of [Contact](d3plot-contact-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the contacts in model m:<br>
```
var c = Contact.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a contact) for each contact in model m:<br>
```
var a = Contact.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetData(component*[constant]*, options (optional)*[object]*)

Description<br>Returns the value for a data component.<br> Also see [GetMultipleData](d3plot-contact-class.md#Contact::GetMultipleData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| extra | integer | The extra data component number if component [Component.SOX](d3plot-component-class.md#Component.SOX) for solids, [Component.BMX](d3plot-component-class.md#Component.BMX) for beams or [Component.SHX](d3plot-component-class.md#Component.SHX) for shells and thick shells |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |
| referenceFrame | constant | The frame of reference to return values in. Either [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) (default), [Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL), [Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL), [Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED) or [Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL). This is only necessary for directional components (eg X stress) and then only when something other than the default [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) coordinate system is to be used |
| user | integer | The user-defined component number if component [Component.UNOS](d3plot-component-class.md#Component.UNOS), [Component.UNOV](d3plot-component-class.md#Component.UNOV), [Component.USSS](d3plot-component-class.md#Component.USSS), [Component.USST](d3plot-component-class.md#Component.USST), [Component.UBMS](d3plot-component-class.md#Component.UBMS) or [Component.UBMV](d3plot-component-class.md#Component.UBMV) |

| Returns
<br>Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model).<br> If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).<br>
Return type
<br>real|array |
| --- |

| Example
<br>To calculate a component and check it has been calculated (note that in the example, the argument extra is optional):<br>
```
var value = c.GetData(component, {extra: 1});
if (value !== null) do_something...
```
 |
| --- |

* * *

| GetFlagged(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*, property (optional)*[string]*) [static]
Description<br>Gets all of the contacts in the model flagged with a defined flag. If the optional property argument is not given then an array of Contact objects is returned. If the property argument is given, that property value for each contact is returned in the array instead of a Contact object |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged contacts are in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the contacts to get

* property (optional) (string)
 
Name for property to get for all flagged contacts in the model

| Returns
<br>Array of [Contact](d3plot-contact-class.md) objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the contacts flagged with flag f in model m:<br>
```
Contact.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'label' for a node) for all contacts flagged with flag f in model m:<br>
```
var a = Contact.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, label*[integer]*) [static]
Description<br>Returns the Contact object for contact in model with label (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get contact in

* label (integer)
 
The Ansys LS-DYNA label for the contact in the model

| Returns
<br>Contact object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the contact in model m with label 1000:<br>
```
var c = Contact.GetFromID(m, 1000);
```
 |
| --- |

* * *

| GetFromIndex(model*[[Model](d3plot-model-class.md)]*, index*[integer]*) [static]
Description<br>Returns the Contact object for contact in model with index (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get contact in

* index (integer)
 
The D3PLOT internal index in the model for contact, starting at 0.

| Returns
<br>Contact object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the 51st contact in model m:<br>
```
var c = Contact.GetFromIndex(m, 50);
```
 |
| --- |

* * *

| GetMultipleData(component*[constant]*, items*[array]*, options (optional)*[object]*) [static]
Description<br>Returns the value for a data component for multiple contacts. For each contact a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object.<br> Also see [GetData](d3plot-contact-class.md#Contact::GetData) |
| --- |

#### Arguments

* component (constant)
 
[Component constant](d3plot-component-class.md#Component_constants) to get data for

* items (array)
 
Array of [Contact](d3plot-contact-class.md) objects to get the data for. All of the contacts must be in the same model.

* options (optional) (object)

Object containing options for getting data. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| extra | integer | The extra data component number if component [Component.SOX](d3plot-component-class.md#Component.SOX) for solids, [Component.BMX](d3plot-component-class.md#Component.BMX) for beams or [Component.SHX](d3plot-component-class.md#Component.SHX) for shells and thick shells |
| ip | integer | Integration point number to get the data at (ip &gt;= 1 or one of the constants [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or [Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM)) |
| op | integer | On plane integration point number for shells and thick shells (op &gt;= 1 [default]) |
| referenceFrame | constant | The frame of reference to return values in. Either [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) (default), [Constant.LOCAL](d3plot-constant-class.md#Constant.LOCAL), [Constant.CYLINDRICAL](d3plot-constant-class.md#Constant.CYLINDRICAL), [Constant.USER_DEFINED](d3plot-constant-class.md#Constant.USER_DEFINED) or [Constant.MATERIAL](d3plot-constant-class.md#Constant.MATERIAL). This is only necessary for directional components (eg X stress) and then only when something other than the default [Constant.GLOBAL](d3plot-constant-class.md#Constant.GLOBAL) coordinate system is to be used |
| user | integer | The user-defined component number if component [Component.UNOS](d3plot-component-class.md#Component.UNOS), [Component.UNOV](d3plot-component-class.md#Component.UNOV), [Component.USSS](d3plot-component-class.md#Component.USSS), [Component.USST](d3plot-component-class.md#Component.USST), [Component.UBMS](d3plot-component-class.md#Component.UBMS) or [Component.UBMV](d3plot-component-class.md#Component.UBMV) |

| Returns
<br>Object containing the data. A property is created in the object for each contact with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)<br>
Return type
<br>object |
| --- |

| Example
<br>To calculate a component for contacts in array items and use the data property (note that in the example, the argument extra is optional):<br>
```
Contact.GetMultipleData(component, items, {extra: 1});
for (i=0; i<items.length; i++)
{
    if (items[i].data !== null) do_something...
}
```
<br>To calculate a component for contacts in array items and use the return value (note that in the example, the argument extra is optional):<br>
```
var data = Contact.GetMultipleData(component, items, {extra: 1});
for (d in data)
{
    Message("Label is " + d);
    if (data[d] !== null) do_something...
}
```
 |
| --- |

* * *

| GetNode(side*[constant]*, index*[integer]*)

Description<br>Gets a node for a contact |
| --- |

#### Arguments

* side (constant)
 
The side of the contact to get the node for. Either [Contact.SURFA](d3plot-contact-class.md#Contact.SURFA) or [Contact.SURFB](d3plot-contact-class.md#Contact.SURFB)

* index (integer)
 
index of the node to get.
 0 &lt;= index &lt; [aNodes](d3plot-contact-class.md#aNodes) for side SURFA
 0 &lt;= index &lt; [bNodes](d3plot-contact-class.md#bNodes) for side SURFB

| Returns
<br>Node object<br>
Return type
<br>Node |
| --- |

| Example
<br>To get the 10th node on SURFB side of contact c in D3PLOT<br>
```
var node = c.GetNode(Contact.SURFB, 9);
```
 |
| --- |

* * *

| GetSegment(side*[constant]*, index*[integer]*)

Description<br>Gets a segment for a contact |
| --- |

#### Arguments

* side (constant)
 
The side of the contact to get the segment for. Either [Contact.SURFA](d3plot-contact-class.md#Contact.SURFA) or [Contact.SURFB](d3plot-contact-class.md#Contact.SURFB)

* index (integer)
 
index of the segment to get.
 0 &lt;= index &lt; [aSegments](d3plot-contact-class.md#aSegments) for side SURFA
 0 &lt;= index &lt; [bSegments](d3plot-contact-class.md#bSegments) for side SURFB

| Returns
<br>Segment object<br>
Return type
<br>Segment |
| --- |

| Example
<br>To get the 10th segment on SURFB side of contact c in D3PLOT<br>
```
var segm = c.GetSegment(Contact.SURFB, 9);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last contact in the model (or null if there are no contacts in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last contact in

| Returns
<br>Contact object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the last contact in model m:<br>
```
var c = Contact.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next contact in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Contact object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the next contact after contact c:<br>
```
c = c.Next();
```
 |
| --- |

* * *

| Pick() [static]
Description<br>Allows the user to pick a contact from the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>Contact object or null if cancelled<br>
Return type
<br>Contact |
| --- |

| Example
<br>To pick a contact:<br>
```
var c = Contact.Pick();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous contact in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Contact object<br>
Return type
<br>Contact |
| --- |

| Example
<br>To get the previous contact before contact c:<br>
```
c = c.Previous();
```
 |
| --- |

* * *

| Select(flag*[Flag]*) [static]
Description<br>Selects contacts using an object menu |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to use when selecting contacts

| Returns
<br>The number of contacts selected or null if menu cancelled<br>
Return type
<br>integer |
| --- |

| Example
<br>To select contacts, flagging those selected with flag f:<br>
```
var total = Contact.Select(f);
```
 |
| --- |

* * *

| SetFlag(flag*[Flag]*)

Description<br>Sets a flag on a contact |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to set on the contact

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f on contact c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of contacts in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>The number of contacts<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the number of contacts in model m:<br>
```
var total = Contact.Total(m);
```
 |
| --- |

* * *

| Unblank(window*[GraphicsWindow]*)

Description<br>Unblanks the contact in a graphics window |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the contact in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank contact c in graphics window g:<br>
```
c.Unblank(g);
```
 |
| --- |

* * *

| UnblankAll(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Unblanks all of the contacts in the model |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the contacts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that all the contacts will be unblanked in

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the contacts in model m, in graphics window gw:<br>
```
Contact.UnblankAll(gw, m);
```
 |
| --- |

* * *

| UnblankFlagged(window*[GraphicsWindow]*, model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unblanks all of the contacts in the model flagged with a defined flag |
| --- |

#### Arguments

* window (GraphicsWindow)
 
[GraphicsWindow](d3plot-graphicswindow-class.md)) to unblank the contacts in

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the flagged contacts will be unblanked in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) set on the contacts to unblank

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the contacts flagged with flag f in model m, in graphics window gw:<br>
```
Contact.UnblankFlagged(gw, m, f);
```
 |
| --- |

* * *

| UnflagAll(model*[[Model](d3plot-model-class.md)]*, flag*[Flag]*) [static]
Description<br>Unsets a defined flag on all of the contacts in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) that the defined flag for all contacts will be unset in

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to unset on the contacts

| Returns
<br>No return value |
| --- |

| Example
<br>To unset flag f on all of the contacts in model m:<br>
```
Contact.UnflagAll(m, f);
```
 |
| --- |

* * *