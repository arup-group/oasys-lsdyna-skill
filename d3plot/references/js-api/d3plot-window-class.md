# Window class

The Window class allows you to create windows for a graphical user interface. [More...](d3plot-window-class.md#Window_details)

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

* [BottomBorder](d3plot-window-class.md#Window::BottomBorder)()
* [BuildGUIFromString](d3plot-window-class.md#Window::BuildGUIFromString)(guistring*[string]*)
* [EndLoop](d3plot-window-class.md#Window::EndLoop)()
* [Error](d3plot-window-class.md#Window::Error)(title*[string]*, error*[string]*, buttons (optional)*[constant]*)
* [GetDirectory](d3plot-window-class.md#Window::GetDirectory)(initial (optional)*[string]*)
* [GetFile](d3plot-window-class.md#Window::GetFile)(extension (optional)*[string]*, save (optional)*[boolean]*, initial (optional)*[string]*)
* [GetFilename](d3plot-window-class.md#Window::GetFilename)(title*[string]*, message*[string]*, extension (optional)*[string]*, initial (optional)*[string]*, save (optional)*[boolean]*)
* [GetFiles](d3plot-window-class.md#Window::GetFiles)(extension (optional)*[string]*)
* [GetInteger](d3plot-window-class.md#Window::GetInteger)(title*[string]*, message*[string]*, initial (optional)*[integer]*)
* [GetNumber](d3plot-window-class.md#Window::GetNumber)(title*[string]*, message*[string]*, initial (optional)*[real]*)
* [GetPassword](d3plot-window-class.md#Window::GetPassword)(title*[string]*, message*[string]*)
* [GetString](d3plot-window-class.md#Window::GetString)(title*[string]*, message*[string]*, initial (optional)*[string]*)
* [Information](d3plot-window-class.md#Window::Information)(title*[string]*, info*[string]*, buttons (optional)*[constant]*)
* [MasterResolution](d3plot-window-class.md#Window::MasterResolution)()
* [Message](d3plot-window-class.md#Window::Message)(title*[string]*, message*[string]*, buttons (optional)*[constant]*)
* [MiddleBorder](d3plot-window-class.md#Window::MiddleBorder)()
* [Question](d3plot-window-class.md#Window::Question)(title*[string]*, question*[string]*, buttons (optional)*[constant]*)
* [RightBorder](d3plot-window-class.md#Window::RightBorder)()
* [StartLoop](d3plot-window-class.md#Window::StartLoop)()
* [Theme](d3plot-window-class.md#Window::Theme)(theme (optional)*[constant]*)
* [TopBorder](d3plot-window-class.md#Window::TopBorder)()
* [UpdateGUI](d3plot-window-class.md#Window::UpdateGUI)()
* [Warning](d3plot-window-class.md#Window::Warning)(title*[string]*, warning*[string]*, buttons (optional)*[constant]*)

## Member functions

* [Delete](d3plot-window-class.md#Window::Delete)()
* [Hide](d3plot-window-class.md#Window::Hide)()
* [Recompute](d3plot-window-class.md#Window::Recompute)()
* [Redraw](d3plot-window-class.md#Window::Redraw)()
* [Show](d3plot-window-class.md#Window::Show)(modal (optional)*[boolean]*)

## Window constants

| **Name** | **Description** |
| --- | --- |
| Window.CANCEL | Show CANCEL button |
| Window.NO | Show NO button |
| Window.NONMODAL | Allow [Window.Error](d3plot-window-class.md#Window::Error), [Window.Question](d3plot-window-class.md#Window::Question), [Window.Warning](d3plot-window-class.md#Window::Warning) etc windows to be non modal |
| Window.OK | Show OK button |
| Window.YES | Show YES button |

### Constants for Resizing/positioning

| **Name** | **Description** |
| --- | --- |
| Window.BOTTOM | Bottom resizing/positioning of window |
| Window.CENTRE | Centre (horizontal) positioning of window |
| Window.LEFT | Left resizing/positioning of window |
| Window.MIDDLE | Middle (vertical) positioning of window |
| Window.REDUCE | Window is allowed to reduce in size when resizing |
| Window.RIGHT | Right resizing/positioning of window |
| Window.TOP | Top resizing/positioning of window |

### Constants for Themes

| **Name** | **Description** |
| --- | --- |
| Window.THEME\_CLASSIC | Use the Classic theme (Note: Not only the script will use this theme, the whole interface of the program will switch to classic) |
| Window.THEME\_CURRENT | Use the current theme |
| Window.THEME\_DARK | Use the Dark theme (Note: Not only the script will use this theme, the whole interface of the program will switch to dark) |
| Window.THEME\_LIGHT | Use the Light theme (Note: Not only the script will use this theme, the whole interface of the program will switch to light) |
| Window.USE\_OLD\_UI\_JS | Use the original, pre v17, theme (default). (Note:The interface of the program will NOT switch to old) |

## Window properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| active | boolean | If true (default) then the window then the window is active and widgets in the window can be used. If false then the window is inactive and the widgets cannot be used. |
| background | constant | Window background colour. Can be: [Widget.BLACK](d3plot-widget-class.md#Widget.BLACK), [Widget.WHITE](d3plot-widget-class.md#Widget.WHITE), [Widget.RED](d3plot-widget-class.md#Widget.RED), [Widget.GREEN](d3plot-widget-class.md#Widget.GREEN), [Widget.BLUE](d3plot-widget-class.md#Widget.BLUE), [Widget.CYAN](d3plot-widget-class.md#Widget.CYAN), [Widget.MAGENTA](d3plot-widget-class.md#Widget.MAGENTA), [Widget.YELLOW](d3plot-widget-class.md#Widget.YELLOW), [Widget.DARKRED](d3plot-widget-class.md#Widget.DARKRED), [Widget.DARKGREEN](d3plot-widget-class.md#Widget.DARKGREEN), [Widget.DARKBLUE](d3plot-widget-class.md#Widget.DARKBLUE), [Widget.GREY](d3plot-widget-class.md#Widget.GREY), [Widget.DARKGREY](d3plot-widget-class.md#Widget.DARKGREY), [Widget.LIGHTGREY](d3plot-widget-class.md#Widget.LIGHTGREY) or [Widget.DEFAULT](d3plot-widget-class.md#Widget.DEFAULT) |
| bottom | real | bottom coordinate of window in range 0.0 (bottom) to 1.0 (top) |
| height | real | height of window |
| keepOnTop | boolean | If true then the window will be kept "on top" of other windows. If false (default) then the window stacking order can be changed. |
| left | real | left coordinate of window in range 0.0 (left) to 1.0 (right) |
| maxWidgets (read only) | integer | The maximum number of widgets that can be made in this window. This can be changed **before** the window is created by using [Options.max_widgets](d3plot-options-class.md#max_widgets). Also see [totalWidgets](d3plot-window-class.md#totalWidgets) |
| onAfterShow | function | Function to call **after** a Window is shown. The Window object is accessible in the function using the 'this' keyword. This may be useful to ensure that certain actions are done after the window is shown. It can also be used to show another window so this enables multiple windows to be shown. <br>To unset the function set the property to null. |
| onBeforeShow | function | Function to call **before** a Window is shown. The Window object is accessible in the function using the 'this' keyword. This may be useful to ensure that buttons are shown/hidden etc before the window is shown. Note that it cannot be used to show another window. Use [onAfterShow](d3plot-window-class.md#onAfterShow) for that. <br>To unset the function set the property to null. |
| onClose | function | Function to call when a Window is closed by pressing the X on the top right of the window. This may be useful to ensure that certain actions are done when the window is closed. The Window object is accessible in the function using the 'this' keyword. If this function returns false then closing the window will be cancelled. Returning any other value (or not returning anything) will be ignored and the window will close. <br>To unset the function set the property to null. |
| onHide | function | Function to call when a Window is hidden by calling [Hide()](d3plot-window-class.md#Window::Hide). This may be useful to ensure that certain actions are done after the window is hidden. The Window object is accessible in the function using the 'this' keyword. <br>To unset the function set the property to null. |
| resize | constant | Window resizing. By default when a Window is shown it is allowed to resize on all sides (left, right, top and bottom) to try to make enough room to show the [Widgets](d3plot-widget-class.md). The behaviour can be changed by using this property. It can be any combination (bitwise OR) of [Window.LEFT](d3plot-window-class.md#Window.LEFT), [Window.RIGHT](d3plot-window-class.md#Window.RIGHT), [Window.TOP](d3plot-window-class.md#Window.TOP) or [Window.BOTTOM](d3plot-window-class.md#Window.BOTTOM) or 0. In addition [Window.REDUCE](d3plot-window-class.md#Window.REDUCE) can also be added to allow the window to reduce in size when resizing. Note that when [Window.Show](d3plot-window-class.md#Window::Show) is called this property is set to 0 (i.e. not to resize on any side). |
| right | real | right coordinate of window in range 0.0 (left) to 1.0 (right) |
| showClose | boolean | If true (default) then a close (X) button will automatically be added on the top right of the window. If false then no close button will be shown. |
| shown (read only) | boolean | true if window is currently shown, false if not |
| title | string | Window title |
| top | real | top coordinate of window in range 0.0 (bottom) to 1.0 (top) |
| totalWidgets (read only) | integer | The total number of widgets that have been made in this window. This can be changed **before** the window is created by using [Options.max_widgets](d3plot-options-class.md#max_widgets). Also see [maxWidgets](d3plot-window-class.md#maxWidgets) |
| width | real | width of window |

| Detailed Description<br>The Window class allows you to make windows that you can place<br>[Widgets](d3plot-widget-class.md) in to create a graphical user interface.<br>The Widget class also gives a number of static methods for convenience. e.g.<br>[Window.GetInteger()](d3plot-window-class.md#Window::GetInteger).<br>The following very simple example displays some text in a window with a button that unmaps the window when<br>it is pressed and the user confirms that they want to exit.<br> |
| --- |


```

// Create window with title "Text" from 0.8-1.0 in x and 0.5-0.6 in y
var w = new Window("Text", 0.8, 1.0, 0.5, 0.6);

// Create label widget
var l = new Widget(w, Widget.LABEL,   1, 40, 1,  7, "Press OK to exit");
// Create button widget
var e = new Widget(w, Widget.BUTTON, 11, 30, 8, 14, "OK");
// Assign the onClick callback method to the function confirm_exit'
e.onClick  = confirm_exit;

// Show the widget and start event loop
w.Show();

////////////////////////////////////////////////////////////////////////////////

function confirm_exit()
{
// Map confirm window
    var ret = Window.Question("Confirm exit", "Are you sure you want to quit?");
// If the user has answered Yes then exit.
    if (ret == Window.YES) Exit();
}

```

See the documentation below and the [Widget](d3plot-widget-class.md) class for more details.

| Constructor
new Window(title*[string]*, left*[real]*, right*[real]*, bottom*[real]*, top*[real]*)

Description<br>Create a new [Window](d3plot-window-class.md) object. |
| --- |

#### Arguments

* title (string)
 
Window title to show in title bar

* left (real)
 
left coordinate of window in range 0.0 (left) to 1.0 (right)

* right (real)
 
right coordinate of window in range 0.0 (left) to 1.0 (right)

* bottom (real)
 
bottom coordinate of window in range 0.0 (bottom) to 1.0 (top)

* top (real)
 
top coordinate of window in range 0.0 (bottom) to 1.0 (top)

| Returns
<br>[Window](d3plot-window-class.md) object<br>
Return type
<br>Window |
| --- |

| Example
<br>To create a Window 'Example' in the top right half of the screen:<br>
```
var w = new Window('Example', 0.5, 1.0, 0.5, 1.0);
```
 |
| --- |

| Details of functions 
BottomBorder() [static]
Description<br>Returns the vertical position of the bottom border (in range 0-1). This can be used to help position windows on the screen. |
| --- |

#### Arguments

No arguments

| Returns
<br>real in range 0-1<br>
Return type
<br>Number |
| --- |

| Example
<br>To obtain the position of the bottom border:<br>
```
var b = Window.BottomBorder();
```
 |
| --- |

* * *

| BuildGUIFromString(guistring*[string]*) [static]
Description<br>Builds a GUI from a JSON string created by the GUI builder. |
| --- |

#### Arguments

* guistring (string)
 
The string to create the GUI from

| Returns
<br>object containing the GUI<br>
Return type
<br>Object |
| --- |

| Example
<br>To create a GUI from the string json\_string:<br>
```
var gui = Window.BuildGUIFromString(json_string);
```
 |
| --- |

* * *

| Delete()

Description<br>Deletes the window from D3PLOT and returns any memory/resources used for the window.<br>**This function should not normally need to be called**. However, in exceptional circumstances if a script<br>recreates windows many times D3PLOT may run out of USER objects on Microsoft Windows because of the way D3PLOT creates and shows windows. To avoid this problem this method can be used to force D3PLOT to return the resources<br>for a window. **Do not use the Window object after calling this method**. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To delete window w:<br>
```
w.Delete();
```
 |
| --- |

* * *

| EndLoop() [static]
Description<br>Ends an event loop started by [Window.StartLoop()](d3plot-window-class.md#Window::StartLoop) |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To end a blocking event loop started by [Window.StartLoop()](d3plot-window-class.md#Window::StartLoop):<br>
```
Window.EndLoop();
```
 |
| --- |

* * *

| Error(title*[string]*, error*[string]*, buttons (optional)*[constant]*) [static]
Description<br>Show an error message in a window. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* error (string)
 
Error message to show in window. The maximum number of lines that can be shown is controlled by the [Options.max_window_lines](d3plot-options-class.md#max_window_lines) option.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](d3plot-window-class.md#Window.OK), [Window.CANCEL](d3plot-window-class.md#Window.CANCEL), [Window.YES](d3plot-window-class.md#Window.YES) or [Window.NO](d3plot-window-class.md#Window.NO). If this is omitted an OK button will be used. By default the window will be modal. If [Window.NONMODAL](d3plot-window-class.md#Window.NONMODAL) is also given the window will be non-modal instead.

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
Description<br>Map the directory selector box native to your machine, allowing you to choose a directory. On Unix this will be a Motif selector. Windows will use the standard windows directory selector. |
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

| GetFile(extension (optional)*[string]*, save (optional)*[boolean]*, initial (optional)*[string]*) [static]
Description<br>Map a file selector box allowing you to choose a file. See also [Window.GetFiles()](d3plot-window-class.md#Window::GetFiles) and [Window.GetFilename()](d3plot-window-class.md#Window::GetFilename). |
| --- |

#### Arguments

* extension (optional) (string)
 
Extension to filter by.

* save (optional) (boolean)
 
If true the file selector is to be used for saving a file. If false (default) the file selector is for opening a file. Due to native operating system file selector differences, on linux new filenames can only be given when saving a file. On windows it is possible to give new filenames when opening or saving a file.

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

| GetFilename(title*[string]*, message*[string]*, extension (optional)*[string]*, initial (optional)*[string]*, save (optional)*[boolean]*) [static]
Description<br>Map a window allowing you to input a filename (or select it using a file selector). OK and Cancel buttons are shown. See also [Window.GetFile()](d3plot-window-class.md#Window::GetFile). |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

* extension (optional) (string)
 
Extension to filter by.

* initial (optional) (string)
 
Initial value.

* save (optional) (boolean)
 
If true the file selector is to be used for saving a file. If false (default) the file selector is for opening a file. Due to native operating system file selector differences, on linux new filenames can only be given when saving a file. On windows it is possible to give new filenames when opening or saving a file.

| Returns
<br>filename (string), (or null if cancel pressed).<br>
Return type
<br>String |
| --- |

| Example
<br>To create an file input window with title *Choose file* and message *Choose the file to open* and return the filename input:<br>
```
var filename = Window.GetFilename("Choose file", "Choose the file to open");
```
 |
| --- |

* * *

| GetFiles(extension (optional)*[string]*) [static]
Description<br>Map a file selector box allowing you to choose multiple files. See also [Window.GetFile()](d3plot-window-class.md#Window::GetFile) and [Window.GetFilename()](d3plot-window-class.md#Window::GetFilename). |
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

| GetInteger(title*[string]*, message*[string]*, initial (optional)*[integer]*) [static]
Description<br>Map a window allowing you to input an integer. OK and Cancel buttons are shown. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

* initial (optional) (integer)
 
Initial value.

| Returns
<br>value input (integer), or null if cancel pressed.<br>
Return type
<br>Number |
| --- |

| Example
<br>To create an input window with title *Input* and message *Input integer* and return the value input:<br>
```
var value = Window.GetInteger("Input", "Input integer");
```
 |
| --- |

* * *

| GetNumber(title*[string]*, message*[string]*, initial (optional)*[real]*) [static]
Description<br>Map a window allowing you to input a number. OK and Cancel buttons are shown. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

* initial (optional) (real)
 
Initial value.

| Returns
<br>value input (real), or null if cancel pressed.<br>
Return type
<br>Number |
| --- |

| Example
<br>To create an input window with title *Input* and message *Input number* and return the value input:<br>
```
var value = Window.GetNumber("Input", "Input number");
```
 |
| --- |

* * *

| GetPassword(title*[string]*, message*[string]*) [static]
Description<br>Map a window allowing you to input a password. OK and Cancel buttons are shown.<br> This is identical to [Window.GetString](d3plot-window-class.md#Window::GetString) except the string is hidden and no initial value can be given. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

| Returns
<br>value input (string), or null if cancel pressed.<br>
Return type
<br>String |
| --- |

| Example
<br>To create an input window with title *Input* and message *Input password* and return the value input:<br>
```
var value = Window.GetPassword("Input", "Input password");
```
 |
| --- |

* * *

| GetString(title*[string]*, message*[string]*, initial (optional)*[string]*) [static]
Description<br>Map a window allowing you to input a string. OK and Cancel buttons are shown. |
| --- |

#### Arguments

* title (string)
 
Title for window.

* message (string)
 
Message to show in window.

* initial (optional) (string)
 
Initial value.

| Returns
<br>value input (string), or null if cancel pressed.<br>
Return type
<br>String |
| --- |

| Example
<br>To create an input window with title *Input* and message *Input string* and return the value input:<br>
```
var value = Window.GetString("Input", "Input string");
```
 |
| --- |

* * *

| Hide()

Description<br>Hides (unmaps) the window. Also see the Window [onHide](d3plot-window-class.md#onHide) property. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To hide window w:<br>
```
w.Hide();
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
 
Information to show in window. The maximum number of lines that can be shown is controlled by the [Options.max_window_lines](d3plot-options-class.md#max_window_lines) option.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](d3plot-window-class.md#Window.OK), [Window.CANCEL](d3plot-window-class.md#Window.CANCEL), [Window.YES](d3plot-window-class.md#Window.YES) or [Window.NO](d3plot-window-class.md#Window.NO). If this is omitted an OK button will be used. By default the window will be modal. If [Window.NONMODAL](d3plot-window-class.md#Window.NONMODAL) is also given the window will be non-modal instead.

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

| MasterResolution() [static]
Description<br>Returns the resolution of the master programme window in pixels |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of numbers containing x and y resolution in pixels<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the resolution of the main window:<br>
```
var res = Window.MasterResolution();
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
 
Message to show in window. The maximum number of lines that can be shown is controlled by the [Options.max_window_lines](d3plot-options-class.md#max_window_lines) option.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](d3plot-window-class.md#Window.OK), [Window.CANCEL](d3plot-window-class.md#Window.CANCEL), [Window.YES](d3plot-window-class.md#Window.YES) or [Window.NO](d3plot-window-class.md#Window.NO). If this is omitted an OK button will be used By default the window will be modal. If [Window.NONMODAL](d3plot-window-class.md#Window.NONMODAL) is also given the window will be non-modal instead.

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

| MiddleBorder() [static]
Description<br>Returns the vertical position of the middle border (in range 0-1). The middle border is the border between the tools/keywords window and the docked windows. This can be used to help position windows on the screen. |
| --- |

#### Arguments

No arguments

| Returns
<br>real in range 0-1<br>
Return type
<br>Number |
| --- |

| Example
<br>To obtain the position of the middle border:<br>
```
var b = Window.MiddleBorder();
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
 
Question to show in window. The maximum number of lines that can be shown is controlled by the [Options.max_window_lines](d3plot-options-class.md#max_window_lines) option.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](d3plot-window-class.md#Window.OK), [Window.CANCEL](d3plot-window-class.md#Window.CANCEL), [Window.YES](d3plot-window-class.md#Window.YES) or [Window.NO](d3plot-window-class.md#Window.NO). If this is omitted Yes and No button will be used. By default the window will be modal. If [Window.NONMODAL](d3plot-window-class.md#Window.NONMODAL) is also given the window will be non-modal instead.

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

| Recompute()

Description<br>Recomputes the positions of widgets in the window. If you have [static](d3plot-widget-class.md#Widget::Static) widgets and 'normal' widgets in a window and you show and/or hide widgets the window needs to be recomputed to refresh the graphics, scroll bars etc. Calling this method will recompute and redraw the window. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To recompute window w:<br>
```
w.Recompute();
```
 |
| --- |

* * *

| Redraw()

Description<br>Redraws the window. Sometimes if you [show](d3plot-widget-class.md#Widget::Show), [hide](d3plot-widget-class.md#Widget::Hide) or draw graphics on [widgets](d3plot-widget-class.md) the window needs to be redrawn to refresh the graphics. Calling this method will redraw the window refreshing the graphics. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To redraw window w:<br>
```
w.Redraw();
```
 |
| --- |

* * *

| RightBorder() [static]
Description<br>Returns the horizontal position of the right border (in range 0-1). This can be used to help position windows on the screen. |
| --- |

#### Arguments

No arguments

| Returns
<br>real in range 0-1<br>
Return type
<br>Number |
| --- |

| Example
<br>To obtain the position of the right border:<br>
```
var b = Window.RightBorder();
```
 |
| --- |

* * *

| Show(modal (optional)*[boolean]*)

Description<br>Shows (maps) the window and waits for user input. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (true) then the user is blocked from doing anything else in D3PLOT until this window is dismissed). If non-modal (false) then the user can still use other functions in D3PLOT.
 If omitted the window will be modal.
 Note that making a window modal will stop interaction in all other windows and may prevent operations such as picking from working in any macros that are run from scripts.
 Before version 21 D3PLOT would create a blocking event loop when the Window Show method was called (the call to the Window Show method would not return until the window was hidden again). In D3PLOT version 21 the logic has been changed so that Window Show maps the window and returns straight away. The window is managed from the main event loop in D3PLOT. In most cases this will make no differences to scripts but there may be rare cases where you specifically want the blocking behaviour. In this case use [Window.StartLoop()](d3plot-window-class.md#Window::StartLoop).

| Returns
<br>No return value |
| --- |

| Example
<br>To show window w:<br>
```
w.Show();
```
<br><br>To show window w allowing the user to use other functions in D3PLOT:<br>
```
w.Show(false);
```
 |
| --- |

* * *

| StartLoop() [static]
Description<br>Starts a blocking event loop in D3PLOT. Before version 21 D3PLOT would create a blocking event loop when the Window Show method was called (the call to the Window Show method would not return until the window was hidden again). In D3PLOT version 21 the logic has been changed so that Window Show maps the window and returns straight away. The window is managed from the main event loop in D3PLOT. In most cases this will make no differences to scripts but there may be rare cases where you specifically want the blocking behaviour. An example of this is using a keyout hook script, or if you want to give aprompt/question similarly to [Window.Message()](d3plot-window-class.md#Window::Message) where you do **not** want to return to the main event loop. You want to block until the user has specified the action.<br> Window.StartLoop() can be used to start a local blocking, event loop. To terminate the event loop and resume execution of the script use [Window.EndLoop()](d3plot-window-class.md#Window::EndLoop)<br> Note that only a single loop can be active in D3PLOT at any one time. i.e. they cannot be nested. Window.StartLoop() should be used as sparingly as possible and only used for specific short events (e.g. something like the equivalent of [Window.Message()](d3plot-window-class.md#Window::Message) where you really do need to block) as if it is used in one script it will prevent it from being used in another script. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To start a blocking event loop:<br>
```
Window.StartLoop();
```
 |
| --- |

* * *

| Theme(theme (optional)*[constant]*) [static]
Description<br>Set or get a user interface theme. |
| --- |

#### Arguments

* theme (optional) (constant)
 
If it is provided it is used to set the current theme. Can be either [Window.USE_OLD_UI_JS](d3plot-window-class.md#Window.USE_OLD_UI_JS), [Window.THEME_CURRENT](d3plot-window-class.md#Window.THEME_CURRENT), [Window.THEME_DARK](d3plot-window-class.md#Window.THEME_DARK), [Window.THEME_LIGHT](d3plot-window-class.md#Window.THEME_LIGHT), [Window.THEME_CLASSIC](d3plot-window-class.md#Window.THEME_CLASSIC).

| Returns
<br>Integer. When getting the theme one of: [Window.USE_OLD_UI_JS](d3plot-window-class.md#Window.USE_OLD_UI_JS), [Window.THEME_DARK](d3plot-window-class.md#Window.THEME_DARK), [Window.THEME_LIGHT](d3plot-window-class.md#Window.THEME_LIGHT), [Window.THEME_CLASSIC](d3plot-window-class.md#Window.THEME_CLASSIC)<br>
Return type
<br>Number |
| --- |

| Example
<br>To determine the current theme:<br>
```
var ui = Window.Theme();
      if(ui == Window.THEME_DARK)
      {
          print("Theme is dark\n");
      }
      else if(ui == Window.THEME_LIGHT)
      {
          print("Theme is light\n");
      }
      else if(ui == Window.THEME_CLASSIC)
      {
          print("Theme is classic\n");
      }
      else
      {
          print("Theme is not set\n");
      }
      
```
<br>To keep the original (pre v17) appearance of your JavaScript (default):<br>
```
Window.Theme(Window.USE_OLD_UI_JS);
```
<br>To use the current user interface theme:<br>
```
Window.Theme(Window.THEME_CURRENT);
```
<br>To use the dark user interface theme:<br>
```
Window.Theme(Window.THEME_DARK);
```
 |
| --- |

* * *

| TopBorder() [static]
Description<br>Returns the vertical position of the top border (in range 0-1). This can be used to help position windows on the screen. This is no longer used in D3PLOT and will always be 1 but is left for backwards compatibility. |
| --- |

#### Arguments

No arguments

| Returns
<br>real in range 0-1<br>
Return type
<br>Number |
| --- |

| Example
<br>To obtain the position of the top border:<br>
```
var b = Window.TopBorder();
```
 |
| --- |

* * *

| UpdateGUI() [static]
Description<br>Force GUI to be updated. This function is not normally needed but if you are doing a computationally expensive operation and want to update the GUI it may be necessary as the GUI update requests are cached until there is spare time to update them. Calling this function forces any outstanding requests to be flushed. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To force update of GUI:<br>
```
Window.UpdateGUI();
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
 
Warning message to show in window. The maximum number of lines that can be shown is controlled by the [Options.max_window_lines](d3plot-options-class.md#max_window_lines) option.

* buttons (optional) (constant)
 
The buttons to use. Can be bitwise OR of [Window.OK](d3plot-window-class.md#Window.OK), [Window.CANCEL](d3plot-window-class.md#Window.CANCEL), [Window.YES](d3plot-window-class.md#Window.YES) or [Window.NO](d3plot-window-class.md#Window.NO). If this is omitted an OK button will be used. By default the window will be modal. If [Window.NONMODAL](d3plot-window-class.md#Window.NONMODAL) is also given the window will be non-modal instead.

| Returns
<br>Button pressed<br>
Return type
<br>Number |
| --- |

| Example
<br>To show warning *Title is blank\nSet to ID?* in window with title *Warning* with Yes and No buttons:<br>
```
var answer = Window.Warning("Warning", "Title is blank\nSet to ID?", Window.YES | Window.NO);
if (answer == Window.NO) Message("You pressed No"); 
```
 |
| --- |

* * *