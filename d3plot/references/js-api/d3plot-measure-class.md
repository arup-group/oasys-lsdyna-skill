# Measure class

The Measure class allows you to create measurements between nodes and parts. [More...](d3plot-measure-class.md#Measure_details)

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

* [Delete](d3plot-measure-class.md#Measure::Delete)(type*[integer]*)
* [DeleteAll](d3plot-measure-class.md#Measure::DeleteAll)()
* [GetFromIndex](d3plot-measure-class.md#Measure::GetFromIndex)(type*[integer]*)

## Member functions

* [Data](d3plot-measure-class.md#Measure::Data)()

## Measure constants

### Constants for Measure type

| **Name** | **Description** |
| --- | --- |
| Measure.NODE\_ANGLE | Node angle measure type |
| Measure.NODE\_ORIGIN | Node to origin measure type |
| Measure.NODE\_TO\_NODE | Node to node measure type |
| Measure.NODE\_TO\_PART | Node to part measure type |
| Measure.PART\_TO\_PART | Part to part measure type |

### Constants for display

| **Name** | **Description** |
| --- | --- |
| Measure.LABEL | Display measure entity labels |
| Measure.MAGNITUDE | Display measurement magnitude |
| Measure.TRANSPARENT | Transparent display of measurements |
| Measure.VECTOR | Display measurement vector |

### Constants for line

| **Name** | **Description** |
| --- | --- |
| Measure.HIDDEN | Hidden line style for measures |
| Measure.WIREFRAME | Wireframe line style for measures |

### Constants for number format

| **Name** | **Description** |
| --- | --- |
| Measure.AUTOMATIC | Automatic number format |
| Measure.GENERAL | General number format, for example 123.4 |
| Measure.SCIENTIFIC | Scientific number format, for example, 1.234E+2 |

### Constants for offset

| **Name** | **Description** |
| --- | --- |
| Measure.DEFORM | Consider Deform (Shift deform, Magnify etc.) coordinates for measure calculations |
| Measure.MODEL\_SPACE | Consider model space offsets in the graphics window |

### Constants for show

| **Name** | **Description** |
| --- | --- |
| Measure.SHOW\_ALL | Show all measures |
| Measure.SHOW\_CURRENT | Show only the current measure |
| Measure.SHOW\_NONE | Show no measure |

## Measure class properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| consider\_blanking | logical | true if calculations in [Measure.Data()](d3plot-measure-class.md#Measure::Data) only consider unblanked elements, false (default) if they consider all elements. |
| current | integer | Index of the measure currently selected for display purposes, starting at 1. |
| display | constant | Display options for measurements. Can be any combination (bitwise OR) of [Measure.MAGNITUDE](d3plot-measure-class.md#Measure.MAGNITUDE), [Measure.VECTOR](d3plot-measure-class.md#Measure.VECTOR), [Measure.LABEL](d3plot-measure-class.md#Measure.LABEL) and [Measure.TRANSPARENT](d3plot-measure-class.md#Measure.TRANSPARENT). |
| format | constant | Number format for measures. Can be [Measure.AUTOMATIC](d3plot-measure-class.md#Measure.AUTOMATIC), [Measure.SCIENTIFIC](d3plot-measure-class.md#Measure.SCIENTIFIC) or [Measure.GENERAL](d3plot-measure-class.md#Measure.GENERAL). |
| line | constant | Line style for measures. Can be [Measure.HIDDEN](d3plot-measure-class.md#Measure.HIDDEN) or [Measure.WIREFRAME](d3plot-measure-class.md#Measure.WIREFRAME). |
| offsets | constant | Whether or not to consider Deform (Shift deform, Magnify etc.) or model space offsets in the calculation of measures. Can be any combination (bitwise OR) of [Measure.DEFORM](d3plot-measure-class.md#Measure.DEFORM), [Measure.MODEL_SPACE](d3plot-measure-class.md#Measure.MODEL_SPACE). |
| precision | integer | Number of decimal places for scientific or general number format. |
| show | constant | Whether all, only the current or no measure is shown. Can be [Measure.SHOW_NONE](d3plot-measure-class.md#Measure.SHOW_NONE), [Measure.SHOW_CURRENT](d3plot-measure-class.md#Measure.SHOW_CURRENT) or [Measure.SHOW_ALL](d3plot-measure-class.md#Measure.SHOW_ALL). |
| total (read only) | integer | Total number of measures in D3PLOT |

## Measure properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| index (read only) | integer | Index where the measure appears on the interactive measure menu, starting at 1. Note that the index of a measure can change when measures with lower indices are deleted. |
| name | string | Measure name |
| type (read only) | constant | Measure type. Can be [Measure.NODE_TO_NODE](d3plot-measure-class.md#Measure.NODE_TO_NODE), [Measure.NODE_ANGLE](d3plot-measure-class.md#Measure.NODE_ANGLE), [Measure.NODE_ORIGIN](d3plot-measure-class.md#Measure.NODE_ORIGIN), [Measure.NODE_TO_PART](d3plot-measure-class.md#Measure.NODE_TO_PART) or [Measure.PART_TO_PART](d3plot-measure-class.md#Measure.PART_TO_PART). |

| Detailed Description<br>The Measure class allows you to measure distances and angles between nodes and/or parts.<br>The following example shows how Measures are used to get the distance between two parts.<br> |
| --- |


```

// Create a measure between the 11th part and 12th part in the model:
var m = new Measure(Measure.PART_TO_PART, { part1: 11, part2: 12});

// Get the distace between these parts at state 10:
SetCurrentState(10);
var data = m.Data();
var distance = data.mag;

// Show all measurements on the screen in state 20:
// Note that SetCurrentState would only affect model data handling, but
// here we are interested in the state on the screen, so we set it with
// SetWindowFrame instead.
SetWindowFrame(ALL, 20);
Measure.show = Measure.SHOW_ALL;

```

See the documentation below for more details.

| Constructor
new Measure(type*[constant]*, options*[object]*)

Description<br>Create a new [Measure](d3plot-measure-class.md) object. |
| --- |

#### Arguments

* type (constant)
 
Measure type. Can be [Measure.NODE_TO_NODE](d3plot-measure-class.md#Measure.NODE_TO_NODE), [Measure.NODE_ANGLE](d3plot-measure-class.md#Measure.NODE_ANGLE), [Measure.NODE_ORIGIN](d3plot-measure-class.md#Measure.NODE_ORIGIN), [Measure.NODE_TO_PART](d3plot-measure-class.md#Measure.NODE_TO_PART) or [Measure.PART_TO_PART](d3plot-measure-class.md#Measure.PART_TO_PART)

* options (object)

Measure options. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| model1 | integer | Model ID for the first node or part for the measurement. If omitted, the current model will be used. |
| model2 | integer | Model ID for the second node or part for the measurement. If omitted, the current model will be used. |
| model3 | integer | Model ID for the third node for the measurement. If omitted, the current model will be used. |
| node1 | integer | First node for the measurement. If +ve: internal node number starting at 1 (faster), if -ve: external node label. |
| node2 | integer | Second node for the measurement. If +ve: internal node number starting at 1 (faster), if -ve: external node label. |
| node3 | integer | Third node for the measurement. If +ve: internal node number starting at 1 (faster), if -ve: external node label. |
| part1 | integer | First part for the measurement If +ve: internal part number starting at 1 (faster), if -ve: external part label. |
| part2 | integer | Second part for the measurement. If +ve: internal part number starting at 1 (faster), if -ve: external part label. |
| window | integer | Graphics window ID where the measurement will be created. If omitted, it will be created in the first window. |

| Returns
<br>[Measure](d3plot-measure-class.md) object<br>
Return type
<br>Measure |
| --- |

| Example
<br>To create a measure between the 100th node and the 3rd part in the model:<br><br>
```
var m = new Measure(Measure.NODE_TO_PART, { node1: 100, part2: 3 });
```
<br>To create a measure between the node with external label 50 and the part with external label 10:<br><br>
```
var m = new Measure(Measure.NODE_TO_PART, { node1: -50, part2: -10 });
```
 |
| --- |

| Details of functions 
Data()

Description<br>Returns an object with data for this measure. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dx | real | X component of the measurement (for types [Measure.NODE_TO_NODE](d3plot-measure-class.md#Measure.NODE_TO_NODE), [Measure.NODE_ORIGIN](d3plot-measure-class.md#Measure.NODE_ORIGIN), [Measure.NODE_TO_PART](d3plot-measure-class.md#Measure.NODE_TO_PART) or [Measure.PART_TO_PART](d3plot-measure-class.md#Measure.PART_TO_PART)) |
| dy | real | Y component of the measurement (for types [Measure.NODE_TO_NODE](d3plot-measure-class.md#Measure.NODE_TO_NODE), [Measure.NODE_ORIGIN](d3plot-measure-class.md#Measure.NODE_ORIGIN), [Measure.NODE_TO_PART](d3plot-measure-class.md#Measure.NODE_TO_PART) or [Measure.PART_TO_PART](d3plot-measure-class.md#Measure.PART_TO_PART)) |
| dz | real | Z component of the measurement (for types [Measure.NODE_TO_NODE](d3plot-measure-class.md#Measure.NODE_TO_NODE), [Measure.NODE_ORIGIN](d3plot-measure-class.md#Measure.NODE_ORIGIN), [Measure.NODE_TO_PART](d3plot-measure-class.md#Measure.NODE_TO_PART) or [Measure.PART_TO_PART](d3plot-measure-class.md#Measure.PART_TO_PART)) |
| mag | real | magnitude of the measurement (length for types [Measure.NODE_TO_NODE](d3plot-measure-class.md#Measure.NODE_TO_NODE), [Measure.NODE_ORIGIN](d3plot-measure-class.md#Measure.NODE_ORIGIN), [Measure.NODE_TO_PART](d3plot-measure-class.md#Measure.NODE_TO_PART) or [Measure.PART_TO_PART](d3plot-measure-class.md#Measure.PART_TO_PART), angle in degrees for type [Measure.NODE_ANGLE](d3plot-measure-class.md#Measure.NODE_ANGLE)) |
| xy | real | Angle in the XY plane in degrees for type [Measure.NODE_ANGLE](d3plot-measure-class.md#Measure.NODE_ANGLE) |
| xz | real | Angle in the XZ plane in degrees for type [Measure.NODE_ANGLE](d3plot-measure-class.md#Measure.NODE_ANGLE). The zx property is an alternative name for this. |
| yz | real | Angle in the YZ plane in degrees for type [Measure.NODE_ANGLE](d3plot-measure-class.md#Measure.NODE_ANGLE) |
| zx | real | Angle in the ZX plane in degrees for type [Measure.NODE_ANGLE](d3plot-measure-class.md#Measure.NODE_ANGLE). The xz property is an alternative name for this. |

#### Return type

object

| Example
<br>To get the X component of the measure object m:<br>
```

var data = m.Data();
var dx = data.dx;
      
```
 |
| --- |

* * *

| Delete(type*[integer]*) [static]
Description<br>Deletes the measure with the given index. |
| --- |

#### Arguments

* type (integer)
 
Index of the measure to be deleted, starting at 1.

| Returns
<br>No return value |
| --- |

| Example
<br>To delete measure m:<br>
```

var index = m.index;
Measure.Delete(index);
      
```
 |
| --- |

* * *

| DeleteAll() [static]
Description<br>Deletes all measures. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To delete all measures:<br>
```

Measure.DeleteAll();
      
```
 |
| --- |

* * *

| GetFromIndex(type*[integer]*) [static]
Description<br>Gets the measure object for a given index. |
| --- |

#### Arguments

* type (integer)
 
Index of the measure, starting at 1.

| Returns
<br>Measure object for that index<br>
Return type
<br>Measure |
| --- |

| Example
<br>To get the object for the measure at index 3:<br>
```

var m = Measure.GetFromIndex(3);
      
```
 |
| --- |

* * *