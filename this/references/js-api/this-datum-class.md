# Datum class

The Datum class gives you access to datums in T/HIS. [More...](this-datum-class.md#Datum_details)

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

* [Delete](this-datum-class.md#Datum::Delete)(datum*[string]*)
* [Exists](this-datum-class.md#Datum::Exists)(datum*[string]*)
* [First](this-datum-class.md#Datum::First)()
* [GetFromAcronym](this-datum-class.md#Datum::GetFromAcronym)(datum*[string]*)

## Member functions

* [AddToGraph](this-datum-class.md#Datum::AddToGraph)(graph (optional)*[int]*)
* [IsOnGraph](this-datum-class.md#Datum::IsOnGraph)(graph*[int]*)
* [Next](this-datum-class.md#Datum::Next)()
* [RemoveFromGraph](this-datum-class.md#Datum::RemoveFromGraph)(graph (optional)*[int]*)

## Datum constants

| **Name** | **Description** |
| --- | --- |
| Datum.CONSTANT\_X | Constant X type datum. |
| Datum.CONSTANT\_Y | Constant Y type datum. |
| Datum.CONSTANT\_Y2 | Constant Y2 type datum. |
| Datum.FILL\_ABOVE\_BELOW | Fill datum above and below. |
| Datum.FILL\_RIGHT\_LEFT | Fill datum right and left. |
| Datum.LABEL\_10\_POINT | Label font size 10. |
| Datum.LABEL\_12\_POINT | Label font size 12. |
| Datum.LABEL\_14\_POINT | Label font size 14. |
| Datum.LABEL\_18\_POINT | Label font size 16. |
| Datum.LABEL\_24\_POINT | Label font size 24. |
| Datum.LABEL\_8\_POINT | Label font size 8. |
| Datum.LABEL\_ABOVE\_CENTRE | Label position above centre. |
| Datum.LABEL\_ABOVE\_LEFT | Label position above left. |
| Datum.LABEL\_ABOVE\_RIGHT | Label position above right. |
| Datum.LABEL\_AUTOMATIC | Label automatic font size. |
| Datum.LABEL\_BELOW\_CENTRE | Label position below centre. |
| Datum.LABEL\_BELOW\_LEFT | Label position below left. |
| Datum.LABEL\_BELOW\_RIGHT | Label position below right. |
| Datum.LABEL\_BOTTOM\_LEFT | Label position bottom left. |
| Datum.LABEL\_BOTTOM\_RIGHT | Label position bottom right. |
| Datum.LABEL\_COURIER\_BOLD | Label Courier bold font. |
| Datum.LABEL\_COURIER\_MEDIUM | Label Courier medium font. |
| Datum.LABEL\_DEFAULT | Label default font. |
| Datum.LABEL\_HELVETICA\_BOLD | Label Helvetica bold font. |
| Datum.LABEL\_HELVETICA\_MEDIUM | Label Helvetica medium font. |
| Datum.LABEL\_HORIZONTAL | Label horizonal orientation. |
| Datum.LABEL\_MIDDLE\_LEFT | Label position middle left. |
| Datum.LABEL\_MIDDLE\_RIGHT | Label position middle right. |
| Datum.LABEL\_NONE | No label. |
| Datum.LABEL\_TIMES\_BOLD | Label Times bold font. |
| Datum.LABEL\_TIMES\_MEDIUM | Label Times medium font. |
| Datum.LABEL\_TOP\_LEFT | Label position top left. |
| Datum.LABEL\_TOP\_RIGHT | Label position top right. |
| Datum.LABEL\_VERTICAL | Label vertical orientation. |
| Datum.POINTS | Points type datum. |

## Datum properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| acronym | string | Datum acronym |
| fill\_colour\_above | [Colour](this-colour-class.md) | The colour above the datum line |
| fill\_colour\_below | [Colour](this-colour-class.md) | The colour below the datum line |
| fill\_colour\_between | [Colour](this-colour-class.md) | The colour in between the datum line and the optional second datum line |
| fill\_colour\_left | [Colour](this-colour-class.md) | The colour left of the datum line |
| fill\_colour\_right | [Colour](this-colour-class.md) | The colour right of the datum line |
| fill\_type | integer | The fill type. Can be [Datum.FILL_ABOVE_BELOW](this-datum-class.md#Datum.FILL_ABOVE_BELOW), [Datum.FILL_RIGHT_LEFT](this-datum-class.md#Datum.FILL_RIGHT_LEFT). Note that this can only be changed if the datum is of the type Datum.POINTS. |
| label | string | Datum label |
| label2 | string | Label for optional 2nd datum line |
| label\_colour | [Colour](this-colour-class.md) | The colour of the datum label |
| label\_font | integer | The label font. Can be [Datum.LABEL_DEFAULT](this-datum-class.md#Datum.LABEL_DEFAULT), [Datum.LABEL_HELVETICA_BOLD](this-datum-class.md#Datum.LABEL_HELVETICA_BOLD), [Datum.LABEL_HELVETICA_MEDIUM](this-datum-class.md#Datum.LABEL_HELVETICA_MEDIUM), [Datum.LABEL_TIMES_BOLD](this-datum-class.md#Datum.LABEL_TIMES_BOLD), [Datum.LABEL_TIMES_MEDIUM](this-datum-class.md#Datum.LABEL_TIMES_MEDIUM), [Datum.LABEL_COURIER_BOLD](this-datum-class.md#Datum.LABEL_COURIER_BOLD), [Datum.LABEL_COURIER_MEDIUM](this-datum-class.md#Datum.LABEL_COURIER_MEDIUM) |
| label\_orientation | integer | The orientation of the label. Can be [Datum.LABEL_HORIZONTAL](this-datum-class.md#Datum.LABEL_HORIZONTAL), [Datum.LABEL_VERTICAL](this-datum-class.md#Datum.LABEL_VERTICAL) |
| label\_position | integer | The label position. Can be [Datum.LABEL_NONE](this-datum-class.md#Datum.LABEL_NONE), [Datum.LABEL_ABOVE_CENTRE](this-datum-class.md#Datum.LABEL_ABOVE_CENTRE), [Datum.LABEL_ABOVE_LEFT](this-datum-class.md#Datum.LABEL_ABOVE_LEFT), [Datum.LABEL_ABOVE_RIGHT](this-datum-class.md#Datum.LABEL_ABOVE_RIGHT), [Datum.LABEL_BELOW_CENTRE](this-datum-class.md#Datum.LABEL_BELOW_CENTRE), [Datum.LABEL_BELOW_LEFT](this-datum-class.md#Datum.LABEL_BELOW_LEFT), [Datum.LABEL_BELOW_RIGHT](this-datum-class.md#Datum.LABEL_BELOW_RIGHT), [Datum.LABEL_MIDDLE_LEFT](this-datum-class.md#Datum.LABEL_MIDDLE_LEFT), [Datum.LABEL_TOP_LEFT](this-datum-class.md#Datum.LABEL_TOP_LEFT), [Datum.LABEL_BOTTOM_LEFT](this-datum-class.md#Datum.LABEL_BOTTOM_LEFT), [Datum.LABEL_MIDDLE_RIGHT](this-datum-class.md#Datum.LABEL_MIDDLE_RIGHT), [Datum.LABEL_TOP_RIGHT](this-datum-class.md#Datum.LABEL_TOP_RIGHT), [Datum.LABEL_BOTTOM_RIGHT](this-datum-class.md#Datum.LABEL_BOTTOM_RIGHT) |
| label\_size | integer | The label font size. Can be [Datum.LABEL_AUTOMATIC](this-datum-class.md#Datum.LABEL_AUTOMATIC), [Datum.LABEL_8_POINT](this-datum-class.md#Datum.LABEL_8_POINT), [Datum.LABEL_10_POINT](this-datum-class.md#Datum.LABEL_10_POINT), [Datum.LABEL_12_POINT](this-datum-class.md#Datum.LABEL_12_POINT), [Datum.LABEL_14_POINT](this-datum-class.md#Datum.LABEL_14_POINT), [Datum.LABEL_18_POINT](this-datum-class.md#Datum.LABEL_18_POINT), [Datum.LABEL_24_POINT](this-datum-class.md#Datum.LABEL_24_POINT), |
| line\_colour | [Colour](this-colour-class.md) | The colour of the datum line |
| line\_style | [LineStyle](this-linestyle-class.md) | The line style used to draw the datum line |
| line\_width | [LineWidth](this-linewidth-class.md) | The line width used to draw the datum line |

| Detailed Description<br>The Datum class allows you to create and manipulate datums. See the documentation below for more details. |
| --- |

| Constructor
new Datum(acronym*[string]*, type*[integer]*, value*[real or array of reals]*, second value (optional)*[real]*)

Description<br>Create a new [Datum](this-datum-class.md) object. The datum will be added to all the currently active graphs. |
| --- |

#### Arguments

* acronym (string)
 
[Datum](this-datum-class.md) acronym

* type (integer)
 
Specify type of datum line. Can be [Datum.CONSTANT_X](this-datum-class.md#Datum.CONSTANT_X), [Datum.CONSTANT_Y](this-datum-class.md#Datum.CONSTANT_Y), [Datum.CONSTANT_Y2](this-datum-class.md#Datum.CONSTANT_Y2), [Datum.POINTS](this-datum-class.md#Datum.POINTS)

* value (real or array of reals)
 
Value for [Datum.CONSTANT_X](this-datum-class.md#Datum.CONSTANT_X), [Datum.CONSTANT_Y](this-datum-class.md#Datum.CONSTANT_Y) or [Datum.CONSTANT_Y2](this-datum-class.md#Datum.CONSTANT_Y2) type [Datum](this-datum-class.md). If it is a [Datum.POINTS](this-datum-class.md#Datum.POINTS) type [Datum](this-datum-class.md) then this should be an array of X, Y pairs or a curve ID to copy points from.

* second value (optional) (real)
 
Second constant value for use with constant X,Y or Y2 datums and can optionally be provided

| Returns
<br>[Datum](this-datum-class.md) object<br>
Return type
<br>Datum |
| --- |

| Example
<br>To create a new datum with acronym my\_datum and a constant Y value of 100<br>
```
var d = new Datum("my_datum", Datum.CONSTANT_Y, 100);
```
<br>To create a new datum with acronym my\_datum and some X, Y points<br>
```
var points = new Array(6);
points[0] = 0.0;
points[1] = 10.0;
points[2] = 1.0;
points[3] = 15.0;
points[4] = 2.0;
points[5] = 17.0;
var d = new Datum("my_datum", Datum.POINTS, points);
```
 |
| --- |

| Details of functions 
AddToGraph(graph (optional)*[int]*)

Description<br>Adds a datum to a graph. |
| --- |

#### Arguments

* graph (optional) (int)
 
Graph to add the datum to. If undefined then the datum is added to all graphs.
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value. |
| --- |

| Example
<br>To add a datum (d) to graphs 1 and 3:<br>
```
d.AddToGraph(1, 3);
```
<br><br>To add a datum (d) to all graphs:<br>
```
d.AddToGraph();
```
 |
| --- |

* * *

| Delete(datum*[string]*) [static]
Description<br>Deletes a datum |
| --- |

#### Arguments

* datum (string)
 
Acronym of datum to delete

| Returns
<br>No return value |
| --- |

| Example
<br>To delete datum "my\_datum"<br>
```
Datum.Delete("my_datum");
```
 |
| --- |

* * *

| Exists(datum*[string]*) [static]
Description<br>Checks if a datum exists |
| --- |

#### Arguments

* datum (string)
 
Acronym of datum to check

| Returns
<br>TRUE if the datum exists, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if a datum "my\_datum" exists<br>
```
var exists = Datum.Exists("my_datum");
```
 |
| --- |

* * *

| First() [static]
Description<br>Returns the first datum. |
| --- |

#### Arguments

No arguments

| Returns
<br>Datum object (or null if there are no datum in the model).<br>
Return type
<br>Datum |
| --- |

| Example
<br>To get the 1st datum<br>
```
var d = Datum.First();
```
 |
| --- |

* * *

| GetFromAcronym(datum*[string]*) [static]
Description<br>Returns the datum object for a datum acronym. |
| --- |

#### Arguments

* datum (string)
 
Acronym of datum to return object for

| Returns
<br>Datum object (or null if the datum does not exist).<br>
Return type
<br>Datum |
| --- |

| Example
<br>To get the datum "my\_datum"<br>
```
var d = Datum.GetFromAcronym("my_datum");
```
 |
| --- |

* * *

| IsOnGraph(graph*[int]*)

Description<br>Returns whether a datum is on a graph. |
| --- |

#### Arguments

* graph (int)
 
Graph id

| Returns
<br>true if it is on the graph, false otherwise<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if datum (d) is on graph 3:<br>
```
d.IsOnGraph(3);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next datum in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Datum object (or null if there are no more datums in the model).<br>
Return type
<br>Datum |
| --- |

| Example
<br>To get the next datum after datum d:<br>
```
var datum = d.Next();
```
 |
| --- |

* * *

| RemoveFromGraph(graph (optional)*[int]*)

Description<br>Removes a datum from a graph. |
| --- |

#### Arguments

* graph (optional) (int)
 
Graph to remove the datum from. If undefined then the datum is removed from all graphs.
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove a datum (d) from graphs 1 and 3:<br>
```
d.RemoveFromGraph(1,3);
```
<br><br>To remove a datum (d) from all graphs:<br>
```
d.RemoveFromGraph();
```
 |
| --- |

* * *