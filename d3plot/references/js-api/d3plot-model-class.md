# Model class

The Model class gives you access to models in D3PLOT. [More...](d3plot-model-class.md#Model_details)

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

* [First](d3plot-model-class.md#Model::First)()
* [GetFromID](d3plot-model-class.md#Model::GetFromID)(model number*[integer]*)
* [Highest](d3plot-model-class.md#Model::Highest)()
* [Last](d3plot-model-class.md#Model::Last)()
* [Read](d3plot-model-class.md#Model::Read)(filename*[string]*)
* [Total](d3plot-model-class.md#Model::Total)()

## Member functions

* [ClearFlag](d3plot-model-class.md#Model::ClearFlag)(flag*[Flag]*)
* [Delete](d3plot-model-class.md#Model::Delete)()
* [GraphicsWindows](d3plot-model-class.md#Model::GraphicsWindows)()
* [Next](d3plot-model-class.md#Model::Next)()
* [Previous](d3plot-model-class.md#Model::Previous)()
* [ReadPropertiesFile](d3plot-model-class.md#Model::ReadPropertiesFile)(filename*[string]*, info (optional)*[object]*)
* [Reread](d3plot-model-class.md#Model::Reread)()
* [Rescan](d3plot-model-class.md#Model::Rescan)()
* [Time](d3plot-model-class.md#Model::Time)(state*[integer]*)

## Model properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| filename (read only) | boolean | The model filename |
| number (read only) | integer | The model number |
| state | integer | The state in the model used for scripting methods. Note that this is **not** the state that is displayed for a model in a graphics window. This property is only used for some of the scripting methods. Many of the methods in the API depend on which state the model is in and setting this property alters that state. To set the state used for all the "get" and "put" functions which handle model-related data use this property. To change the state that is displayed for a model in a graphics window use the GraphicsWindow [state](d3plot-graphicswindow-class.md#state) property |
| states | integer | The total number of states in the model |
| title | string | The model title |

| Detailed Description<br>The Model class allows you to do various operations on models in D3PLOT. There are various methods and properties available that allow you do read and operate models. See the documentation below for more details. |
| --- |

| Constructor
new Model(filename*[string]*)

Description<br>Reads a file into the first free model in D3PLOT |
| --- |

#### Arguments

* filename (string)
 
Filename you want to read

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To create a model in D3PLOT for the file /data/test/file.ptf<br>
```
var m = new Model("/data/test/file.ptf");
```
 |
| --- |

| Details of functions 
ClearFlag(flag*[Flag]*)

Description<br>Clears a flag on all of the items in the model |
| --- |

#### Arguments

* flag (Flag)
 
Flag (see [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)) to clear

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f on all items in model m:<br>
```
m.ClearFlag(f);
```
 |
| --- |

* * *

| Delete()

Description<br>Deletes a model in D3PLOT<br>**Do not use the Model object after calling this method**. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To delete model m in D3PLOT<br>
```
m.Delete();
```
 |
| --- |

* * *

| First() [static]
Description<br>Returns the Model object for the first model in D3PLOT (or null if there are no models) |
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

| GetFromID(model number*[integer]*) [static]
Description<br>Returns the Model object for a model ID (or null if model does not exist) |
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

| GraphicsWindows()

Description<br>Returns the graphics window(s) that the model exists in |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of [GraphicsWindow](d3plot-graphicswindow-class.md) objects<br>
Return type
<br>array |
| --- |

| Example
<br>To get the graphics windows model m exists in:<br>
```
var list = m.GraphicsWindows();
```
 |
| --- |

* * *

| Highest() [static]
Description<br>Returns the highest model number in D3PLOT (or 0 if no models). Also see [Total()](d3plot-model-class.md#Model::Total) |
| --- |

#### Arguments

No arguments

| Returns
<br>Highest model number<br>
Return type
<br>integer |
| --- |

| Example
<br>To get the highest model number:<br>
```
var highest = Model.Highest();
```
 |
| --- |

* * *

| Last() [static]
Description<br>Returns the Model object for the last model in D3PLOT (or null if there are no models) |
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

| Next()

Description<br>Returns the next model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To get the model after model m:<br>
```
m = m.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous model (or null if there is not one) |
| --- |

#### Arguments

No arguments

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To get the model before model m:<br>
```
m = m.Previous();
```
 |
| --- |

* * *

| Read(filename*[string]*) [static]
Description<br>Reads a file into D3PLOT |
| --- |

#### Arguments

* filename (string)
 
Filename you want to read

| Returns
<br>Model object<br>
Return type
<br>Model |
| --- |

| Example
<br>To create a model in D3PLOT from the file /data/test/file.ptf<br>
```
var m = Model.Read("/data/test/file.ptf");
```
 |
| --- |

* * *

| ReadPropertiesFile(filename*[string]*, info (optional)*[object]*)

Description<br>Reads a properties file for the model |
| --- |

#### Arguments

* filename (string)
 
Filename for the properties file you want to read

* info (optional) (object)

Object containing the information to set. Can be any of: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ignoreElements | boolean | Ignore any element properties in the properties file and only process part based entries (default is false) |
| preBlank | boolean | Blank everything in the model before reading the properties file (default is false) |

| Returns
<br>No return value |
| --- |

| Example
<br>To read the properties file /data/test/my\_properties.prp for model m:<br>
```
m.ReadPropertiesFile("/data/test/my_properties.prp");
```
 |
| --- |

* * *

| Reread()

Description<br>Rereads the model |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To reread model m:<br>
```
m.Reread();
```
 |
| --- |

* * *

| Rescan()

Description<br>Rescans the model |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To rescan model m:<br>
```
m.Rescan();
```
 |
| --- |

* * *

| Time(state*[integer]*)

Description<br>Returns the analysis time for a particular state in the model |
| --- |

#### Arguments

* state (integer)
 
The state you want to get the time for (0 &lt;= state &lt;= [states](d3plot-model-class.md#states))

| Returns
<br>Analysis time<br>
Return type
<br>real |
| --- |

| Example
<br>To get the analysis time for state 10 in model m:<br>
```
var time = m.Time(10);
```
 |
| --- |

* * *

| Total() [static]
Description<br>Returns the total number of models in use in D3PLOT. Also see [Highest()](d3plot-model-class.md#Model::Highest) |
| --- |

#### Arguments

No arguments

| Returns
<br>Total number of models in use<br>
Return type
<br>integer |
| --- |

| Example
<br>To get total number of models:<br>
```
var total = Model.Total();
```
 |
| --- |

* * *