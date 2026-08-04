# PopupWindow class

The PopupWindow class allows you to create popup windows for a graphical user interface. [More...](this-popupwindow-class.md#PopupWindow_details)

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

## Member functions

* [Hide](this-popupwindow-class.md#PopupWindow::Hide)()

## PopupWindow properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| persistent | boolean | If the popup window will remain mapped when a button is pressed in it. By default (false) when a button is pressed in the popup window the popup will be unmapped. If set to true then the popup will remain mapped until the user clicks out of the window or hides it by calling [Hide()](this-popupwindow-class.md#PopupWindow::Hide) |

| Detailed Description<br>The PopupWindow class allows you to make popup windows (that you can place<br>[Widgets](this-widget-class.md) in) and link them to [Widgets](this-widget-class.md).<br>The popup window is then displayed by right clicking on the [Widget](this-widget-class.md) the popup<br>is linked to.<br>The following very simple example shows how to create a popup window and link it to a label Widget.<br> |
| --- |


```

// Create popup window
var pw = new PopupWindow();

// Create some widgets in the popup window
var pl = new Widget(pw, Widget.LABEL,   1, 30,  1,  7, "Label");
var pb = new Widget(pw, Widget.BUTTON,  1, 30,  7, 13, "Button");
var pt = new Widget(pw, Widget.TEXTBOX, 1, 30, 20, 26, "Textbox");

// Create window with title "Popup example" from 0.8-1.0 in x and 0.5-0.6 in y
var w = new Window("Popup example", 0.8, 1.0, 0.5, 0.6);

// Create label widget
var l = new Widget(w, Widget.LABEL,   1, 50, 1,  7, "Right click for popup...");

// link popup window to widget
l.popupWindow = pw;

// Assign the onPopup callback method to the function 'do_popup'
// This is only required if you want to make any changes before the popup appears
l.onPopup  = do_popup;

// Show the widget and start event loop
w.Show();

////////////////////////////////////////////////////////////////////////////////

function do_popup()
{
    Message("Showing popup");
}


```

See the documentation below and the [Widget](this-widget-class.md) class for more details.

| Constructor
new PopupWindow()

Description<br>Create a new [PopupWindow](this-popupwindow-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>[PopupWindow](this-popupwindow-class.md) object<br>
Return type
<br>PopupWindow |
| --- |

| Example
<br>To create a PopupWindow containing the buttons "Create" and "Edit" and<br>link it to button b:<br>
```
var pw = new PopupWindow();
var c = new Widget(pw, Widget.BUTTON, 1, 30, 1, 7,  "Create");
var e = new Widget(pw, Widget.BUTTON, 1, 30, 7, 13, "Edit");
b.popupWindow = pw;
```
 |
| --- |

| Details of functions 
Hide()

Description<br>Hides (unmaps) the popup window. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To hide popup window w:<br>
```
w.Hide();
```
 |
| --- |

* * *