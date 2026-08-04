# History class

The History class gives you access to database history cards in PRIMER. [More...](primer-history-class.md#History_details)

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

* [BlankAll](primer-history-class.md#History::BlankAll)(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-history-class.md#History::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [Create](primer-history-class.md#History::Create)(Model*[[Model](primer-model-class.md)]*, type*[constant]*, modal (optional)*[boolean]*)
* [First](primer-history-class.md#History::First)(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*)
* [FlagAll](primer-history-class.md#History::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*)
* [GetAll](primer-history-class.md#History::GetAll)(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*)
* [GetFromID](primer-history-class.md#History::GetFromID)(Model*[[Model](primer-model-class.md)]*, database history number*[integer]*)
* [Last](primer-history-class.md#History::Last)(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*)
* [Pick](primer-history-class.md#History::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Select](primer-history-class.md#History::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-history-class.md#History::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [UnblankAll](primer-history-class.md#History::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*, type (optional)*[constant]*)
* [UnblankFlagged](primer-history-class.md#History::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-history-class.md#History::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*)
* [UnsketchAll](primer-history-class.md#History::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-history-class.md#History::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*)

## Member functions

* [Blanked](primer-history-class.md#History::Blanked)()
* [ClearFlag](primer-history-class.md#History::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Edit](primer-history-class.md#History::Edit)(modal (optional)*[boolean]*)
* [Flagged](primer-history-class.md#History::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Keyword](primer-history-class.md#History::Keyword)()
* [KeywordCards](primer-history-class.md#History::KeywordCards)()
* [Next](primer-history-class.md#History::Next)()
* [Previous](primer-history-class.md#History::Previous)()
* [SetFlag](primer-history-class.md#History::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-history-class.md#History::Sketch)(redraw (optional)*[boolean]*)
* [Unsketch](primer-history-class.md#History::Unsketch)(redraw (optional)*[boolean]*)
* [Xrefs](primer-history-class.md#History::Xrefs)()
* [toString](primer-history-class.md#History::toString)()

## History constants

| **Name** | **Description** |
| --- | --- |
| History.ACOUSTIC | ACOUSTIC is \*DATABASE\_HISTORY\_ACOUSTIC. |
| History.ALL\_TYPES | All \*DATABASE\_HISTORY\_ types. |
| History.BEAM | BEAM is \*DATABASE\_HISTORY\_BEAM. |
| History.BEAM\_SET | BEAM\_SET is \*DATABASE\_HISTORY\_BEAM\_SET. |
| History.DISCRETE | DISCRETE is \*DATABASE\_HISTORY\_DISCRETE. |
| History.DISCRETE\_SET | DISCRETE\_SET is \*DATABASE\_HISTORY\_DISCRETE\_SET. |
| History.NODE | NODE is \*DATABASE\_HISTORY\_NODE. |
| History.NODE\_SET | NODE\_SET is \*DATABASE\_HISTORY\_NODE\_SET. |
| History.SEATBELT | SEATBELT is \*DATABASE\_HISTORY\_SEATBELT. |
| History.SHELL | SHELL is \*DATABASE\_HISTORY\_SHELL. |
| History.SHELL\_SET | SHELL\_SET is \*DATABASE\_HISTORY\_SHELL\_SET. |
| History.SOLID | SOLID is \*DATABASE\_HISTORY\_SOLID. |
| History.SOLID\_SET | SOLID\_SET is \*DATABASE\_HISTORY\_SOLID\_SET. |
| History.SPH | SPH is \*DATABASE\_HISTORY\_SPH. |
| History.SPH\_SET | SPH\_SET is \*DATABASE\_HISTORY\_SPH\_SET. |
| History.TSHELL | TSHELL is \*DATABASE\_HISTORY\_TSHELL. |
| History.TSHELL\_SET | TSHELL\_SET is \*DATABASE\_HISTORY\_TSHELL\_SET. |

## History properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | Coordinate system ID for \_LOCAL |
| exists (read only) | logical | true if database history exists, false if referred to but not defined. |
| heading | string | Optional heading |
| hfo | integer | High frequency flag for \_LOCAL |
| id | integer | ID of the item |
| include | integer | The [Include](primer-include-class.md) file number that the database history is in. |
| local | logical | Turns \_LOCAL on or off |
| model | integer | The [Model](primer-model-class.md) number that the database history is in. |
| ref | integer | Output reference for \_LOCAL |
| type (read only) | constant | The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET). |

| Detailed Description<br>The History class allows you to create, modify, edit and manipulate database history cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new History(Model*[[Model](primer-model-class.md)]*, type*[constant]*, id*[integer]*, heading (optional)*[string]*)

Description<br>Create a new [History](primer-history-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that database history will be created in

* type (constant)
 
Entity type

* id (integer)
 
ID of the item

* heading (optional) (string)
 
Optional heading

| Returns
<br>[History](primer-history-class.md) object<br>
Return type
<br>History |
| --- |

| Example
<br>To create a new Database history on NODE 500 called "test history":<br>
```
var c = new History(m, History.NODE, 500, "test history");
```
 |
| --- |

| Details of functions 
BlankAll(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the database histories in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all database histories will be blanked in

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the database histories in model m:<br>
```
History.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged database histories in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged database histories will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the database histories that you want to blank

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the database histories in model m flagged with f:<br>
```
History.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the database history is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if database history c is blanked:<br>
```
if (c.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the database history. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the database history

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for database history c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, type*[constant]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a database history. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the database history will be created in

* type (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET).

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>[History](primer-history-class.md) object (or null if not made)<br>
Return type
<br>History |
| --- |

| Example
<br>To start creating a history in model m:<br>
```
var c = History.Create(m);
```
 |
| --- |

* * *

| Edit(modal (optional)*[boolean]*)

Description<br>Starts an interactive editing panel to edit the database history. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>No return value |
| --- |

| Example
<br>To edit database history c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*) [static]
Description<br>Returns the first database history in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first database history in

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

| Returns
<br>History object (or null if there are no database histories in the model).<br>
Return type
<br>History |
| --- |

| Example
<br>To get the first database history in model m:<br>
```
var history = History.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*) [static]
Description<br>Flags all of the database histories in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all database histories will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the database histories

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the database histories with flag f in model m:<br>
```
History.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the database history is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the database history

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if database history c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*) [static]
Description<br>Returns an array of History objects for all of the database histories in a models in PRIMER |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get database histories from

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

| Returns
<br>Array of History objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of History objects for all of the database histories in model m<br>
```
var database history = History.GetAll(m);
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, database history number*[integer]*) [static]
Description<br>Returns the History object for a database history ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the database history in

* database history number (integer)
 
number of the database history you want the History object for

| Returns
<br>History object (or null if database history does not exist).<br>
Return type
<br>History |
| --- |

| Example
<br>To get the History object for database history 100 in model m<br>
```
var database history = History.GetFromID(m, 100);
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this database history (\*DATABASE\_HISTORY). **Note that a carriage return is not added**. See also [History.KeywordCards()](primer-history-class.md#History::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for database history c:<br>
```
var key = c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the database history. **Note that a carriage return is not added**. See also [History.Keyword()](primer-history-class.md#History::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for database history c:<br>
```
var cards = c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*, type (optional)*[constant]*) [static]
Description<br>Returns the last database history in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last database history in

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

| Returns
<br>History object (or null if there are no database histories in the model).<br>
Return type
<br>History |
| --- |

| Example
<br>To get the last database history in model m:<br>
```
var database history = History.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next database history in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>History object (or null if there are no more database histories in the model).<br>
Return type
<br>History |
| --- |

| Example
<br>To get the database history in model m after database history c:<br>
```
var database history = c.Next();
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to pick a database history. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only database histories from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only database histories that are flagged with *limit* can be selected. If omitted, or null, any database histories from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

| Returns
<br>[History](primer-history-class.md) object (or null if not picked)<br>
Return type
<br>History |
| --- |

| Example
<br>To pick a database history from model m giving the prompt 'Pick database history from screen':<br>
```
var database history = History.Pick('Pick database history from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous database history in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>History object (or null if there are no more database histories in the model).<br>
Return type
<br>History |
| --- |

| Example
<br>To get the database history in model m before this one:<br>
```
var history = history.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select database histories using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting database histories

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only database histories from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only database histories that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any database histories from any model can be selected.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of items selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select database histories from model m, flagging those selected which flag f, giving the prompt 'Select database histories':<br>
```
History.Select(f, 'Select database histories', m);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the database history. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the database history

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for database history c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the database history. The database history will be sketched until you either call [History.Unsketch()](primer-history-class.md#History::Unsketch), [History.UnsketchAll()](primer-history-class.md#History::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the database history is sketched. If omitted redraw is true. If you want to sketch several database histories and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch database history c:<br>
```
c.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged database histories in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged database histories will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the database histories that you want to sketch

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is true. If you want to do several (un)sketches and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all of the database histories of type SHELL\_SET in model m flagged with f:<br>
```
History.SketchFlagged(m, f, History.SHELL_SET);
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*, type (optional)*[constant]*) [static]
Description<br>Unblanks all of the database histories in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all database histories will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the database histories in model m:<br>
```
History.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged database histories in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged database histories will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the database histories that you want to unblank

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the database histories in model m flagged with f:<br>
```
History.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*) [static]
Description<br>Unsets a defined flag on all of the database histories in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all database histories will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the database histories

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the database histories in model m:<br>
```
History.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the database history. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the database history is unsketched. If omitted redraw is true. If you want to unsketch several database histories and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch database history c:<br>
```
c.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all database histories. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all database histories will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the database histories are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all database histories in model m:<br>
```
History.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, type (optional)*[constant]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged database histories. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all database histories will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the database histories that you want to sketch

* type (optional) (constant)
 
The database history type. Can be [History.ACOUSTIC](primer-history-class.md#History.ACOUSTIC) or [History.BEAM](primer-history-class.md#History.BEAM) or [History.BEAM_SET](primer-history-class.md#History.BEAM_SET) or [History.DISCRETE](primer-history-class.md#History.DISCRETE) or [History.DISCRETE_SET](primer-history-class.md#History.DISCRETE_SET) or [History.NODE](primer-history-class.md#History.NODE) or [History.NODE_SET](primer-history-class.md#History.NODE_SET) or [History.SEATBELT](primer-history-class.md#History.SEATBELT) or [History.SHELL](primer-history-class.md#History.SHELL) or [History.SHELL_SET](primer-history-class.md#History.SHELL_SET) or [History.SOLID](primer-history-class.md#History.SOLID) or [History.SOLID_SET](primer-history-class.md#History.SOLID_SET) or [History.SPH](primer-history-class.md#History.SPH) or [History.SPH_SET](primer-history-class.md#History.SPH_SET) or [History.TSHELL](primer-history-class.md#History.TSHELL) or [History.TSHELL_SET](primer-history-class.md#History.TSHELL_SET) or [History.ALL_TYPES](primer-history-class.md#History.ALL_TYPES). If omitted, applied to all database history types.

* redraw (optional) (boolean)
 
If model should be redrawn or not after the database histories are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all of the database histories in model m flagged with f:<br>
```
History.UnsketchFlagged(m, f);
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this database history. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for this database history:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the database history data in keyword format. Note that this contains the keyword header and the keyword cards. See also [History.Keyword()](primer-history-class.md#History::Keyword) and [History.KeywordCards()](primer-history-class.md#History::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for database history c in keyword format<br>
```
var s = c.toString();
```
 |
| --- |

* * *