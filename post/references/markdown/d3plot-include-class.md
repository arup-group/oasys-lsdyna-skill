# Include class

The Include class gives you access to include files in D3PLOT. [More...](d3plot-include-class.md#Include_details)

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

* [First](d3plot-include-class.md#Include::First)(model*[[Model](d3plot-model-class.md)]*)
* [GetFromID](d3plot-include-class.md#Include::GetFromID)(model*[[Model](d3plot-model-class.md)]*, number*[integer]*)
* [Last](d3plot-include-class.md#Include::Last)(model*[[Model](d3plot-model-class.md)]*)
* [Total](d3plot-include-class.md#Include::Total)(model*[[Model](d3plot-model-class.md)]*)

## Member functions

* [Next](d3plot-include-class.md#Include::Next)()
* [Previous](d3plot-include-class.md#Include::Previous)()

## Include constants

### Constants for Directory separators

| **Name** | **Description** |
| --- | --- |
| Include.NATIVE | Use directory separators native to this machine when writing directory names. |
| Include.UNIX | Use unix directory separators when writing directory names. |
| Include.WINDOWS | Use windows directory separators when writing directory names. |

## Include properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| label (read only) | integer | The label for the include file |
| name (read only) | string | The name for the include file |
| parent (read only) | integer | The label for the include file parent (0 if main file) |

| Detailed Description<br>The Include class allows you to inspect include files that are used in a model. Note that for D3PLOT to be able to get include file data there must be a ztf file.<br>See the documentation below for more details. |
| --- |

| Details of functions 
First(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the first include file in the model (or null if there are no include files in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get first include file in

| Returns
<br>Include object<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the first include file in model m:<br>
```
var i = Include.First(m);
```
 |
| --- |

* * *

| GetFromID(model*[[Model](d3plot-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the include file in the model with number (or null if it does not exist) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get include file in

* number (integer)
 
The number for the include file in the model. Note that include file numbers start at 1. 0 is the main file.

| Returns
<br>Include object<br>
Return type
<br>Include |
| --- |

| Example
<br>To get include file number 5 in model m:<br>
```
var i = Include.GetFromID(m, 5);
```
 |
| --- |

* * *

| Last(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the last include file in the model (or null if there are no include files in the model) |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get last include file in

| Returns
<br>Include object<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the last include file in model m:<br>
```
var i = Include.Last(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next include file in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Include object<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the next include file after include i:<br>
```
var i = i.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous include file in the model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Include object<br>
Return type
<br>Include |
| --- |

| Example
<br>To get the previous include file before include i:<br>
```
var i = i.Previous();
```
 |
| --- |

* * *

| Total(model*[[Model](d3plot-model-class.md)]*) [static]
Description<br>Returns the total number of include files in the model |
| --- |

#### Arguments

* model ([Model](d3plot-model-class.md))
 
[Model](d3plot-model-class.md) to get total in

| Returns
<br>Number of includes<br>
Return type
<br>int |
| --- |

| Example
<br>To get the number of include files in model m:<br>
```
var t = Include.Total(m);
```
 |
| --- |

* * *