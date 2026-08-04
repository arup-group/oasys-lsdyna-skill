# Window class

The Window class gives access to windows for a graphical user interface. [More...](reporter-window-class.md#Window_details)

The REPORTER JavaScript API provides many class constants, properties and methods. For Arup to
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

* [Error](reporter-window-class.md#Window::Error)(title*[string]*, error*[string]*, buttons (optional)*[constant]*)
* [GetDirectory](reporter-window-class.md#Window::GetDirectory)(initial (optional)*[string]*)
* [GetFile](reporter-window-class.md#Window::GetFile)(extension (optional)*[string]*, allow new (optional)*[boolean]*, initial (optional)*[string]*)
* [GetFiles](reporter-window-class.md#Window::GetFiles)(extension (optional)*[string]*)
* [GetInteger](reporter-window-class.md#Window::GetInteger)(title*[string]*, message*[string]*)
* [GetNumber](reporter-window-class.md#Window::GetNumber)(title*[string]*, message*[string]*)
* [GetOptions](reporter-window-class.md#Window::GetOptions)(title*[string]*, message*[string]*, options*[object]*)
* [GetString](reporter-window-class.md#Window::GetString)(title*[string]*, message*[string]*)
* [Information](reporter-window-class.md#Window::Information)(title*[string]*, info*[string]*, buttons (optional)*[constant]*)
* [Message](reporter-window-class.md#Window::Message)(title*[string]*, message*[string]*, buttons (optional)*[constant]*)
* [Question](reporter-window-class.md#Window::Question)(title*[string]*, question*[string]*, buttons (optional)*[constant]*)
* [Warning](reporter-window-class.md#Window::Warning)(title*[string]*, warning*[string]*, buttons (optional)*[constant]*)

## Window constants

| **Name** | **Description** |
| --- | --- |
| Window.CANCEL | Show CANCEL button |
| Window.NO | Show NO button |
| Window.OK | Show OK button |
| Window.YES | Show YES button |

| Detailed Description<br>The Window class is used to define several standard windows that can be<br>used to read data, give messages and provide feedback |
| --- |

| Details of functions 
Error(title*[string]*, error*[string]*, buttons (optional)*[constant]*) [static]
Description<br>Show an error message in a window. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* error (string)
 
Error message to show in window.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](reporter-window-class.md#Window.OK), [Window.CANCEL](reporter-window-class.md#Window.CANCEL), [Window.YES](reporter-window-class.md#Window.YES) or [Window.NO](reporter-window-class.md#Window.NO). If this is omitted an OK button will be used.

| Returns
<br>Button pressed<br>
Return type
<br>Number |
| --- |

| Example
<br>To show error *Critical error!\nAbort?* in window with title *Error* with Yes and No buttons:<br>
```
var answer = Window.Error("Error", "Critical error!\nAbort?", Window.YES | Window.NO);
if (answer == Window.YES) Exit(); 
```
 |
| --- |

* * *

| GetDirectory(initial (optional)*[string]*) [static]
Description<br>Map the directory selector box native to your machine, allowing you to choose a directory. |
| --- |

#### Arguments

* initial (optional) (string)
 
Initial directory to start from.

| Returns
<br>directory (string), (or null if cancel pressed).<br>
Return type
<br>String |
| --- |

| Example
<br>To select a directory:<br>
```
var dir = Window.GetDirectory();
```
 |
| --- |

* * *

| GetFile(extension (optional)*[string]*, allow new (optional)*[boolean]*, initial (optional)*[string]*) [static]
Description<br>Map a file selector box allowing you to choose a file. See also [Window.GetFiles()](reporter-window-class.md#Window::GetFiles) |
| --- |

#### Arguments

* extension (optional) (string)
 
Extension to filter by.

* allow new (optional) (boolean)
 
Allow creation of new file.

* initial (optional) (string)
 
Initial directory to start from.

| Returns
<br>filename (string), (or null if cancel pressed).<br>
Return type
<br>String |
| --- |

| Example
<br>To select a file using extension '.key':<br>
```
var file = Window.GetFile(".key");
```
 |
| --- |

* * *

| GetFiles(extension (optional)*[string]*) [static]
Description<br>Map a file selector box allowing you to choose multiple files. See also [Window.GetFile()](reporter-window-class.md#Window::GetFile) |
| --- |

#### Arguments

* extension (optional) (string)
 
Extension to filter by.

| Returns
<br>Array of filenames (strings), or null if cancel pressed.<br>
Return type
<br>String |
| --- |

| Example
<br>To select multiple files using extension '.key':<br>
```
var files = Window.GetFiles(".key");
```
 |
| --- |

* * *

| GetInteger(title*[string]*, message*[string]*) [static]
Description<br>Map a window allowing you to input an integer. OK and Cancel buttons are shown. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

| Returns
<br>Integer. Value input, (or null if cancel pressed).<br>
Return type
<br>Number |
| --- |

| Example
<br>To create an input window with title *Input* and message *Input integer* and return the value<br>input:<br>
```
var value = Window.GetInteger("Input", "Input integer");
```
 |
| --- |

* * *

| GetNumber(title*[string]*, message*[string]*) [static]
Description<br>Map a window allowing you to input a number. OK and Cancel buttons are shown. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

| Returns
<br>Real. Value input, (or null if cancel pressed).<br>
Return type
<br>Number |
| --- |

| Example
<br>To create an input window with title *Input* and message *Input number* and return the value<br>input:<br>
```
var value = Window.GetNumber("Input", "Input number");
```
 |
| --- |

* * *

| GetOptions(title*[string]*, message*[string]*, options*[object]*) [static]
Description<br>Map a window allowing you to input various options. OK and Cancel buttons are shown. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

* options (array of objects)

Array of objects listing options that can be set. If OK is pressed the objects will be updated with
the values from the widgets. If cancel is pressed they will not. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| selected (optional) | boolean | If checkbox is selected or not |
| text | string | Text to show next to option |
| type | string | Type of option. Can be "label" (plain text), "text" (a one line text widget), "textbox" (a multi line
text widget) or "checkbox" (a checkable option) |
| value | string | Text to show for option |

| Returns
<br>false if cancel pressed, true if OK pressed.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To create a window with title *Options* , message *Please give the options* with label, text,<br>textbox and checkbox widgets:<br>
```
var options = [ { text:"Label example", type:"label", value:"banana" }, {
text:"Text example", type:"text", value:"single line of text" }, { text:"Textbox example", type:"textbox",
value:"Multiple\\nlines\\nof\\ntext" }, { text:"Checkbox example", type:"checkbox", value:"Do this?", selected:true }
              ];
ok = Window.GetOptions("Options", "Please give the options", options);
```
 |
| --- |

* * *

| GetString(title*[string]*, message*[string]*) [static]
Description<br>Map a window allowing you to input a string. OK and Cancel buttons are shown. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

| Returns
<br>String. Value input, (or null if cancel pressed).<br>
Return type
<br>String |
| --- |

| Example
<br>To create an input window with title *Input* and message *Input string* and return the value<br>input:<br>
```
var value = Window.GetString("Input", "Input string");
```
 |
| --- |

* * *

| Information(title*[string]*, info*[string]*, buttons (optional)*[constant]*) [static]
Description<br>Show information in a window. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* info (string)
 
Information to show in window.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](reporter-window-class.md#Window.OK), [Window.CANCEL](reporter-window-class.md#Window.CANCEL), [Window.YES](reporter-window-class.md#Window.YES) or [Window.NO](reporter-window-class.md#Window.NO). If this is omitted an OK button will be used.

| Returns
<br>Button pressed<br>
Return type
<br>Number |
| --- |

| Example
<br>To show information *Information* in window with title *Example* with OK and Cancel buttons:<br>
```
var answer = Window.Information("Example", "Information", Window.OK | Window.CANCEL);
if (answer == Window.CANCEL) Message("You pressed the Cancel button"); 
```
 |
| --- |

* * *

| Message(title*[string]*, message*[string]*, buttons (optional)*[constant]*) [static]
Description<br>Show a message in a window. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](reporter-window-class.md#Window.OK), [Window.CANCEL](reporter-window-class.md#Window.CANCEL), [Window.YES](reporter-window-class.md#Window.YES) or [Window.NO](reporter-window-class.md#Window.NO). If this is omitted an OK button will be used

| Returns
<br>Button pressed<br>
Return type
<br>Number |
| --- |

| Example
<br>To show message *Press YES or NO* in window with title *Example* with YES and NO buttons:<br>
```
var answer = Window.Message("Example", "Press YES or NO", Window.YES | Window.NO);
if (answer == Window.NO) Message("You pressed No"); 
```
 |
| --- |

* * *

| Question(title*[string]*, question*[string]*, buttons (optional)*[constant]*) [static]
Description<br>Show a question in a window. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* question (string)
 
Question to show in window.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](reporter-window-class.md#Window.OK), [Window.CANCEL](reporter-window-class.md#Window.CANCEL), [Window.YES](reporter-window-class.md#Window.YES) or [Window.NO](reporter-window-class.md#Window.NO). If this is omitted Yes and No button will be
used.

| Returns
<br>Button pressed<br>
Return type
<br>Number |
| --- |

| Example
<br>To show question *Do you want to continue?* in window with title *Question*:<br>
```
var answer = Window.Question("Question", "Do you want to continue?");
if (answer == Window.NO) Message("You pressed No"); 
```
 |
| --- |

* * *

| Warning(title*[string]*, warning*[string]*, buttons (optional)*[constant]*) [static]
Description<br>Show a warning message in a window. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* warning (string)
 
Warning message to show in window.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](reporter-window-class.md#Window.OK), [Window.CANCEL](reporter-window-class.md#Window.CANCEL), [Window.YES](reporter-window-class.md#Window.YES) or [Window.NO](reporter-window-class.md#Window.NO). If this is omitted an OK button will be
used.

| Returns
<br>Button pressed<br>
Return type
<br>Number |
| --- |

| Example
<br>To show warning *Title is blank\nSet to ID?* in window with title *Warning* with Yes and No<br>buttons:<br>
```
var answer = Window.Warning("Warning", "Title is blank\nSet to ID?", Window.YES | Window.NO);
if (answer == Window.NO) Message("You pressed No");
      
```
 |
| --- |

* * *