# Graph class

The Graph class gives you access to graphs in T/HIS. [More...](this-graph-class.md#Graph_details)

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

* [DeleteFromID](this-graph-class.md#Graph::DeleteFromID)(ID*[integer]*)
* [GetFromID](this-graph-class.md#Graph::GetFromID)(ID*[integer]*)
* [Total](this-graph-class.md#Graph::Total)()

## Member functions

* [AddCurveID](this-graph-class.md#Graph::AddCurveID)(Curve ID*[integer]*, redraw (optional)*[boolean]*)
* [AddCurveID](this-graph-class.md#Graph::AddCurveID_deprecated)(Curve ID*[integer]*, No redraw (optional)*[integer]*) [deprecated]
* [AddToPage](this-graph-class.md#Graph::AddToPage)(Page number*[integer]*)
* [Delete](this-graph-class.md#Graph::Delete)()
* [GetAllCurveIDs](this-graph-class.md#Graph::GetAllCurveIDs)()
* [GetAllPageIDs](this-graph-class.md#Graph::GetAllPageIDs)()
* [GetNumCurves](this-graph-class.md#Graph::GetNumCurves)()
* [Lock](this-graph-class.md#Graph::Lock)(Lock type*[integer]*)
* [RemoveCurveID](this-graph-class.md#Graph::RemoveCurveID)(ID*[integer]*)
* [RemoveFromPage](this-graph-class.md#Graph::RemoveFromPage)(ID*[integer]*)

## Graph constants

| **Name** | **Description** |
| --- | --- |
| Graph.AXIS\_LINEAR | Linear axis type |
| Graph.AXIS\_LOG | Logarithmic axis type |
| Graph.FONT\_COURIER\_BOLD | Courier bold font |
| Graph.FONT\_COURIER\_MEDIUM | Courier medium font |
| Graph.FONT\_DEFAULT | Takes the font defined in the preference file |
| Graph.FONT\_HELVETICA\_BOLD | Helvetical bold font |
| Graph.FONT\_HELVETICA\_MEDIUM | Helvetical medium font |
| Graph.FONT\_SIZE\_10 | 10 point font size |
| Graph.FONT\_SIZE\_12 | 12 point font size |
| Graph.FONT\_SIZE\_14 | 14 point font size |
| Graph.FONT\_SIZE\_18 | 18 point font size |
| Graph.FONT\_SIZE\_24 | 24 point font size |
| Graph.FONT\_SIZE\_8 | 8 point font size |
| Graph.FONT\_SIZE\_AUTO | Font size would be automatically adjusted based on the graph area |
| Graph.FONT\_TIMES\_BOLD | Times New Roman bold font |
| Graph.FONT\_TIMES\_MEDIUM | Times New Roman medium font |
| Graph.GRID\_OFF | Turn off the grid. |
| Graph.GRID\_ON | Turn on the grid. |
| Graph.LEGEND\_1\_COLUMN | Curve labels will be displayed in a single column in the legend |
| Graph.LEGEND\_2\_COLUMN | Curve labels will be displayed in two columns in the legend |
| Graph.LEGEND\_AUTO | Automatic legend layout (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/format)) |
| Graph.LEGEND\_COLUMN\_LIST | Column list legend layout (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/format)) |
| Graph.LEGEND\_FLOATING | Floating legend layout (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/format)) |
| Graph.LEGEND\_OFF | Off legend layout (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/format)) |
| Graph.NO | Flag for no. |
| Graph.OFF | Flag to turn off. |
| Graph.ON | Flag to turn on. |
| Graph.PREFIX\_AUTO | Automatically add prefix to the curve label in the legend (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/curve_labels)) |
| Graph.PREFIX\_DIR | Directory name of the model will be used as the curve label prefix in the legend (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/curve_labels)) |
| Graph.PREFIX\_MODEL\_NUMBER | Model number will be used as the curve label prefix in the legend (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/curve_labels)) |
| Graph.PREFIX\_OFF | Turn off the curve label prefix in the legend (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/curve_labels)) |
| Graph.PREFIX\_ON | Add prefix to the curve label in the legend (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/curve_labels)) |
| Graph.PREFIX\_THF | Root name of the THF file will be used as the curve label prefix in the legend (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/curve_labels)) |
| Graph.PREFIX\_USER\_DEFINED | A user defined prefix will be used as the curve label prefix in the legend (see [Legend](https://help.oasys-software.com/smart/project-this/title-axes-legend-options-legend/a/curve_labels)) |
| Graph.YES | Flag for yes. |

## Graph properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| active | constant | If the graph is active or inactive.
Can take Graph.YES or Graph.NO |
| add\_x\_units | constant | shows x-axis units.
It can take either Graph.ON or Graph.OFF |
| add\_y2\_units | constant | shows second y-axis units.
It can take either Graph.ON or Graph.OFF |
| add\_y\_units | constant | shows y-axis units.
It can take either Graph.ON or Graph.OFF |
| auto\_title | string | Turn on to set graph title automatically and turn off to define the graph title manually using the property Graph.title. Can take either Graph.ON or Graph.OFF |
| auto\_xlabel | constant | Turn on to set label for the x-axis automatically and turn off to define the label for the x-axis manually using the property xlabel. Can take either Graph.ON or Graph.OFF |
| auto\_xmax | constant | Can take either Graph.ON or Graph.OFF.
Graph.ON will set the maximum
value for the y-axis range automatically and Graph.OFF will use the property
xmax value as the maximum value for the x-axis range |
| auto\_xmin | constant | Can take either Graph.ON or Graph.OFF.
Graph.ON will set the minimum
value for the x-axis range automatically and Graph.OFF will use the property
xmin value as the minimum value for the x-axis range |
| auto\_y2label | constant | Turn on to set label for the second y-axis automatically and turn off to define the label for the second y-axis manually using the property y2label. Can take either Graph.ON or Graph.OFF |
| auto\_y2max | constant | Can take either Graph.ON or Graph.OFF.
Graph.ON will set the maximum
value for the second y-axis range automatically and Graph.OFF will use the property
y2max value as the maximum value for the second y-axis range |
| auto\_y2min | constant | Can take either Graph.ON or Graph.OFF.
Graph.ON will set the minimum
value for the second y-axis range automatically and Graph.OFF will use the property
y2min value as the minimum value for the second y-axis range |
| auto\_ylabel | constant | Turn on to set label for the y-axis automatically and turn off to define the label for the y-axis manually using the property ylabel. Can take either Graph.ON or Graph.OFF |
| auto\_ymax | constant | Can take either Graph.ON or Graph.OFF.
Graph.ON will set the maximum
value for the y-axis range automatically and Graph.OFF will use the property
ymax value as the maximum value for the y-axis range |
| auto\_ymin | constant | Can take either Graph.ON or Graph.OFF.
Graph.ON will set the minimum
value for the y-axis range automatically and Graph.OFF will use the property
ymin value as the minimum value for the y-axis range |
| background\_colour | [Colour](this-colour-class.md) | Graph background colour |
| foreground\_colour | [Colour](this-colour-class.md) | Graph foreground colour |
| grid | constant | To turn on/off the grid.
Can take Graph.GRID\_ON or Graph.GRID\_OFF |
| id (read only) | integer | Graph ID |
| legend\_background\_colour | [Colour](this-colour-class.md) | Background colour for the legend area |
| legend\_background\_trans | integer | Transparancy of the legend area. The value should lie between 0 and 100 |
| legend\_font | constant | Font for the curve labels in the legend.
Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD,
Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD,
Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| legend\_font\_colour | [Colour](this-colour-class.md) | Font colour for the curve labels in the legend |
| legend\_font\_size | constant | Font size for the curve labels in the legend.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| legend\_layout | constant | Defines the legend layout type.
Can take Graph.LEGEND\_COLUMN\_LIST, Graph.LEGEND\_AUTO, Graph.LEGEND\_OFF or
Graph.LEGEND\_FLOATING |
| legend\_prefix\_format | constant | Format of the prefix that is being included in the curve label of the legend.
Can take either Graph.PREFIX\_MODEL\_NUMBER, Graph.DIR, Graph.PREFIX\_THF or Graph.PREFIX\_USER\_DEFINED |
| legend\_show\_prefix | constant | Include the prefix in the curve label of the legend.
Can take either Graph.PREFIX\_AUTO, Graph.PREFIX\_ON or Graph.PREFIX\_OFF |
| legend\_show\_user\_lines | constant | Visibility of user lines when Graph.LEGEND\_COLUMN\_LIST is selected for legend layout.
Can take either Graph.ON or Graph.OFF |
| legend\_user\_line\_1 | string | User defined line 1 from the legend area |
| legend\_user\_line\_1\_size | constant | Font size for the user defined line 1.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| legend\_user\_line\_2 | string | User defined line 2 from the legend area |
| legend\_user\_line\_2\_size | constant | Font size for the user defined line 2.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| legend\_user\_line\_3 | string | User defined line 3 from the legend area |
| legend\_user\_line\_3\_size | constant | Font size for the user defined line 3.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| legend\_user\_line\_4 | string | User defined line 4 from the legend area |
| legend\_user\_line\_4\_size | constant | Font size for the user defined line 4.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| legend\_user\_line\_5 | string | User defined line 6 from the legend area |
| legend\_user\_line\_5\_size | constant | Font size for the user defined line 5.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| legend\_user\_line\_6 | string | User defined line 6 from the legend area |
| legend\_user\_line\_6\_size | constant | Font size for the user defined line 6.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| legend\_user\_lines\_colour | [Colour](this-colour-class.md) | Font colour for the user defined lines in the legend |
| legend\_user\_lines\_font | constant | Font for the user defined lines in the legend.
Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD,
Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD,
Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| num\_legend\_columns | constant | Number of columns of curve labels in legends.
Can take Graph.LEGEND\_1\_COLUMN, Graph.LEGEND\_2\_COLUMN or Graph.LEGEND\_3\_COLUMN |
| show\_title | string | Shows graph title. Can take either Graph.ON or Graph.OFF |
| show\_xlabel | constant | Shows graph x-axis label. Can take either Graph.ON or Graph.OFF |
| show\_y2axis | constant | Shows graph second y-axis. Can take either Graph.ON or Graph.OFF. (Note, Curve property [y_axis](this-curve-class.md#y_axis) must be set to [Curve.Y2_AXIS](this-curve-class.md#Curve.Y2_AXIS) for the curve to be plotted on the second y-axis.) |
| show\_y2label | constant | Shows graph second y-axis label. Can take either Graph.ON or Graph.OFF |
| show\_ylabel | constant | Shows graph y-axis label. Can take either Graph.ON or Graph.OFF |
| title | string | Graph title |
| x\_axis\_type | constant | Defines x-axis type i.e. linear or logarithmic.
Can take either Graph.AXIS\_LINEAR or Graph.AXIS\_LOG |
| x\_unit\_colour | [Colour](this-colour-class.md) | Colour of the x-axis units |
| x\_unit\_decimals | integer | Defines the number decimals in the x-axis units. |
| x\_unit\_font | constant | Font for the x-axis units.
Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD,
Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD,
Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| x\_unit\_format | constant | Defines the format for the x-axis units.
Can take either Graph.AXIS\_UNITS\_AUTO, Graph.AXIS\_UNITS\_SCIENTIFIC or Graph.AXIS\_UNITS\_GENERAL |
| x\_unit\_size | constant | Font size for the x-axis units.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| xlabel | string | Label for x-axis |
| xlabel\_colour | [Colour](this-colour-class.md) | Colour of the x-axis label |
| xlabel\_font | constant | Font for the x-axis label. Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD, Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD, Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| xlabel\_size | constant | Font size for the x-axis label. Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10, Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14, Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| xmax | real | Maximum value of x-axis range |
| xmin | real | Minimum value of the x-axis range |
| y2\_axis\_type | constant | Defines second y-axis type i.e. linear or logarithmic.
Can take either Graph.AXIS\_LINEAR or Graph.AXIS\_LOG |
| y2\_unit\_colour | [Colour](this-colour-class.md) | Colour of the second y-axis units |
| y2\_unit\_decimals | integer | Defines the number decimals in the second y-axis units. |
| y2\_unit\_font | constant | Font for the second y-axis label.
Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD,
Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD,
Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| y2\_unit\_format | constant | Defines the format for the second y-axis units.
Can take either Graph.AXIS\_UNITS\_AUTO, Graph.AXIS\_UNITS\_SCIENTIFIC or Graph.AXIS\_UNITS\_GENERAL |
| y2\_unit\_size | constant | Font size for the second y-axis units.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| y2label | string | Label for second y-axis |
| y2label\_colour | [Colour](this-colour-class.md) | Colour of the second y-axis label |
| y2label\_font | constant | Font for the second y-axis label. Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD, Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD, Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| y2label\_size | constant | Font size for the second y-axis label. Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10, Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14, Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| y2max | real | Maximum value of the second y-axis range |
| y2min | real | Minimum value of the second y-axis range |
| y\_axis\_type | constant | Defines y-axis type i.e. linear or logarithmic.
Can take either Graph.AXIS\_LINEAR or Graph.AXIS\_LOG |
| y\_unit\_colour | [Colour](this-colour-class.md) | Colour of the y-axis units |
| y\_unit\_decimals | integer | The number decimals in the y-axis units. |
| y\_unit\_font | constant | Font for the y-axis units.
Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD,
Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD,
Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| y\_unit\_format | constant | Defines the format for the y-axis units.
Can take either Graph.AXIS\_UNITS\_AUTO, Graph.AXIS\_UNITS\_SCIENTIFIC or Graph.AXIS\_UNITS\_GENERAL |
| y\_unit\_size | constant | Font size for the y-axis units.
Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10,
Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14,
Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| ylabel | string | Label for y-axis |
| ylabel\_colour | [Colour](this-colour-class.md) | Colour of the y-axis label |
| ylabel\_font | constant | Font for the y-axis label. Can take either Graph.FONT\_DEFAULT, Graph.FONT\_HELVETICA\_MEDIUM, Graph.FONT\_HELVETICA\_BOLD, Graph.FONT\_TIMES\_MEDIUM, Graph.FONT\_TIMES\_BOLD, Graph.FONT\_COURIER\_MEDIUM or Graph.FONT\_COURIER\_BOLD |
| ylabel\_size | constant | Font size for the y-axis label. Can take either Graph.FONT\_SIZE\_AUTO, Graph.FONT\_SIZE\_8, Graph.FONT\_SIZE\_10, Graph.FONT\_SIZE\_12, Graph.FONT\_SIZE\_14, Graph.FONT\_SIZE\_18 or Graph.FONT\_SIZE\_24 |
| ymax | real | Maximum value of y-axis range |
| ymin | real | Minimum value of the y-axis range |

| Detailed Description<br>The Graph class contains information on the number of graphs.<br>See the documentation below for more details. |
| --- |

| Constructor
new Graph(index (optional)*[integer]*)

Description<br>Create a new [Graph](this-graph-class.md). |
| --- |

#### Arguments

* index (optional) (integer)
 
Graph index to copy initial display and axis settings from (optional). If not defined then the display and axis settings will be copied from those defined in the preference file.

| Returns
<br>[Graph](this-graph-class.md) object<br>
Return type
<br>Graph |
| --- |

| Example
<br>To create a new graph and copy all of the setting from graph 2<br>
```
var l = new Graph(2);
```
 |
| --- |

| Details of functions 
AddCurveID(Curve ID*[integer]*, redraw (optional)*[boolean]*)

Description<br>Adds a curve to the graph. |
| --- |

#### Arguments

* Curve ID (integer)
 
ID of the curve to add.

* redraw (optional) (boolean)
 
If this argument is false then the graph will not be redrawn after the curve is added. This is to be used if a large number of curves are to be added to a graph, so as to avoid the same curves being drawn multiple times. No argument or true will trigger a redraw after the curve is added.

| Returns
<br>Returns true if the curve is successfully added to the graph else it would return false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To add a curve with id (n) to the graph (g):<br><br>
```
g.AddCurveID(n);
```
<br><br> |
| --- |

* * *

| AddCurveID(Curve ID*[integer]*, No redraw (optional)*[integer]*) [deprecated]
<br>This function is deprecated in version 22.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Adds a curve to the graph. |
| --- |

#### Arguments

* Curve ID (integer)
 
ID of the curve to add.

* No redraw (optional) (integer)
 
If this argument is 1 then the graph will not be redrawn after the curve is added. This is to be used if a large number of curves are to be added to a graph, so as to avoid the same curves being drawn multiple times. No argument or 0 will trigger a redraw after the curve is added.

| Returns
<br>Returns true if the curve is successfully added to the graph else it would return false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To add a curve with id (n) to the graph (g):<br><br>
```
g.AddCurveID(n);
```
<br><br> |
| --- |

* * *

| AddToPage(Page number*[integer]*)

Description<br>Adds the graph to the page. |
| --- |

#### Arguments

* Page number (integer)
 
Page number for which to add the graph to.

| Returns
<br>Returns true if the graph is successfully added to the page else it would return false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To add a graph (g) to page id (n):<br><br>
```
g.AddToPage(n);
```
<br><br> |
| --- |

* * *

| Delete()

Description<br>Deletes the graph |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Deletes the graph (g)<br><br>
```
g.Delete();
```
<br><br> |
| --- |

* * *

| DeleteFromID(ID*[integer]*) [static]
Description<br>Deletes a graph |
| --- |

#### Arguments

* ID (integer)
 
ID of graph to delete

| Returns
<br>No return value |
| --- |

| Example
<br>To delete the graph n<br><br>
```
Graph.DeleteFromID(n);
```
<br><br>Maximum number of graphs in T/HIS is 32<br> |
| --- |

* * *

| GetAllCurveIDs()

Description<br>Returns the IDs of the curves present in the graph in an array. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of curve IDs<br>
Return type
<br>array |
| --- |

| Example
<br>To get the array of all the curve ids present in a graph (g):<br><br>
```
var num = g.GetAllCurveIDs();
```
<br><br> |
| --- |

* * *

| GetAllPageIDs()

Description<br>Returns all the pages containing the graph. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of page IDs<br>
Return type
<br>array |
| --- |

| Example
<br>To get the list of all page ids containing the graph (g):<br><br>
```
var pages_ids = g.GetAllPageIDs();
```
<br><br> |
| --- |

* * *

| GetFromID(ID*[integer]*) [static]
Description<br>Returns the graph object for a given graph id. |
| --- |

#### Arguments

* ID (integer)
 
ID of graph to return the graph for

| Returns
<br>Graph object or NULL if graph does not exists<br>
Return type
<br>Graph |
| --- |

| Example
<br>To get the graph n<br><br>
```
var num = Graph.GetFromID(n);
```
<br><br>Maximum number of graphs in T/HIS is 32<br> |
| --- |

* * *

| GetNumCurves()

Description<br>Returns number curves present in the graph. |
| --- |

#### Arguments

No arguments

| Returns
<br>Number of curves present in the graph.<br>
Return type
<br>Number |
| --- |

| Example
<br>To find number of curves in a graph (g):<br><br>
```
var num = g.GetNumCurves();
```
<br><br> |
| --- |

* * *

| Lock(Lock type*[integer]*)

Description<br>Locks the blanking status of either blanked curves, unblanked curves or all curves on the graph. |
| --- |

#### Arguments

* Lock type (integer)
 
No argument or 0 to lock blanked curves, -1 to unlock blanked curves, -2 to unfreeze all visible curves

| Returns
<br>No return value |
| --- |

| Example
<br>To lock all blanked curves on graph g:<br><br>
```
g.Lock();
```
<br><br> |
| --- |

* * *

| RemoveCurveID(ID*[integer]*)

Description<br>Removes a curve from the graph. |
| --- |

#### Arguments

* ID (integer)
 
ID of the curve to be removed

| Returns
<br>Returns true if the curve is successfully removed from the graph else it would return false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To remove a curve with id (n) from the graph (g):<br><br>
```
g.RemoveCurveID(n);
```
<br><br> |
| --- |

* * *

| RemoveFromPage(ID*[integer]*)

Description<br>Removes the graph from a page. |
| --- |

#### Arguments

* ID (integer)
 
ID of the page from which the graph is to be removed

| Returns
<br>Returns true if the graph is successfully removed from the page else it would return false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To remove the graph (g) from page with id (n):<br><br>
```
g.RemoveFromPage(n);
```
<br><br> |
| --- |

* * *

| Total() [static]
Description<br>Returns the total number of graphs. |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To find how many graphs there are in T/HIS:<br>
```
var num = Graph.Total();
```
 |
| --- |

* * *