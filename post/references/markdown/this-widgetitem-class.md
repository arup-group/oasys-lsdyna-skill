# WidgetItem class

The WidgetItem class allows you to create items for combobox, listbox, radio button and tree [Widgets](this-widget-class.md). [More...](this-widgetitem-class.md#WidgetItem_details)

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

* [FirstChild](this-widgetitem-class.md#WidgetItem::FirstChild)()
* [NextSibling](this-widgetitem-class.md#WidgetItem::NextSibling)()
* [Parent](this-widgetitem-class.md#WidgetItem::Parent)()
* [PreviousSibling](this-widgetitem-class.md#WidgetItem::PreviousSibling)()

## WidgetItem properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| background | constant | Widget background colour. Not used for [RADIOBUTTON](this-widget-class.md#Widget.RADIOBUTTON) widgets. Can be: [Widget.BLACK](this-widget-class.md#Widget.BLACK), [Widget.WHITE](this-widget-class.md#Widget.WHITE), [Widget.RED](this-widget-class.md#Widget.RED), [Widget.GREEN](this-widget-class.md#Widget.GREEN), [Widget.BLUE](this-widget-class.md#Widget.BLUE), [Widget.CYAN](this-widget-class.md#Widget.CYAN), [Widget.MAGENTA](this-widget-class.md#Widget.MAGENTA), [Widget.YELLOW](this-widget-class.md#Widget.YELLOW), [Widget.DARKRED](this-widget-class.md#Widget.DARKRED), [Widget.DARKGREEN](this-widget-class.md#Widget.DARKGREEN), [Widget.DARKBLUE](this-widget-class.md#Widget.DARKBLUE), [Widget.GREY](this-widget-class.md#Widget.GREY), [Widget.DARKGREY](this-widget-class.md#Widget.DARKGREY), [Widget.LIGHTGREY](this-widget-class.md#Widget.LIGHTGREY) or [Widget.DEFAULT](this-widget-class.md#Widget.DEFAULT) |
| expanded | logical | If the widget item is expanded (true) or not (false) in a tree. Only available for widgetitems used in [TREE](this-widget-class.md#Widget.TREE) widgets. |
| foreground | constant | Widget foreground colour. Not used for [RADIOBUTTON](this-widget-class.md#Widget.RADIOBUTTON) widgets. Can be: [Widget.BLACK](this-widget-class.md#Widget.BLACK), [Widget.WHITE](this-widget-class.md#Widget.WHITE), [Widget.RED](this-widget-class.md#Widget.RED), [Widget.GREEN](this-widget-class.md#Widget.GREEN), [Widget.BLUE](this-widget-class.md#Widget.BLUE), [Widget.CYAN](this-widget-class.md#Widget.CYAN), [Widget.MAGENTA](this-widget-class.md#Widget.MAGENTA), [Widget.YELLOW](this-widget-class.md#Widget.YELLOW), [Widget.DARKRED](this-widget-class.md#Widget.DARKRED), [Widget.DARKGREEN](this-widget-class.md#Widget.DARKGREEN), [Widget.DARKBLUE](this-widget-class.md#Widget.DARKBLUE), [Widget.GREY](this-widget-class.md#Widget.GREY), [Widget.DARKGREY](this-widget-class.md#Widget.DARKGREY), [Widget.LIGHTGREY](this-widget-class.md#Widget.LIGHTGREY) or [Widget.DEFAULT](this-widget-class.md#Widget.DEFAULT) |
| hover | string | WidgetItem's hover text. Not used for [RADIOBUTTON](this-widget-class.md#Widget.RADIOBUTTON) widgets. |
| index (read only) | integer | The index of this widgetitem in the parent widget (undefined if widgetitem is not assigned to a widget). |
| monospace | boolean | true if the widgetitem uses a monospace font instead of a proportional width font (default). Not used for [RADIOBUTTON](this-widget-class.md#Widget.RADIOBUTTON) and [TREE](this-widget-class.md#Widget.TREE) widgets. |
| onClick | function | Function to call when a widget item in a [COMBOBOX](this-widget-class.md#Widget.COMBOBOX), [LISTBOX](this-widget-class.md#Widget.LISTBOX) or [TREE](this-widget-class.md#Widget.TREE) widget is clicked. The Widgetitem object is accessible in the function using the 'this' keyword. |
| onMouseOver | function | Function to call when the mouse moves over a widget item in a [COMBOBOX](this-widget-class.md#Widget.COMBOBOX), [LISTBOX](this-widget-class.md#Widget.LISTBOX) or [TREE](this-widget-class.md#Widget.TREE) widget. The Widgetitem object is accessible in the function using the 'this' keyword. |
| selectable | logical | If the widget item can be selected (true) or not (false). Not used for [RADIOBUTTON](this-widget-class.md#Widget.RADIOBUTTON) and [TREE](this-widget-class.md#Widget.TREE) widgets. |
| selected | logical | If the widget item is selected (true) or not (false). |
| text | string | Widget text. If the WidgetItem is used in a tree widget then the tree will not automatically redraw (this is in case you want to change lots of tree nodes at once). In this case, use the Window [Redraw](this-window-class.md#Window::Redraw) method to redraw the window. |
| visible | logical | If the widget item is visible (true) or not (false) in a tree. A widgetitem will not be visible if it is a child of a widgetitem that is not expanded. Only available for widgetitems used in [TREE](this-widget-class.md#Widget.TREE) widgets. |
| widget (read only) | [Widget](this-widget-class.md) object | The widget that this item is defined for (null if not set) |

| Detailed Description<br>The WidgetItem class allows you to create items for combobox, listbox, radio button and tree Widgets in a [Window](this-window-class.md) for a graphical user interface.<br>The following example shows how WidgetItems are used to create a Combobox Widget and how to assign callbacks<br>to determine when the selection has been changed.<br> |
| --- |


```

var items = ["D3PLOT", "PRIMER", "SHELL", "REPORTER", "T/HIS"]

// Create window
var w = new Window("Combobox example", 0.8, 1.0, 0.5, 0.6);

// A simple combobox with a few items
var cl= new Widget(w, Widget.LABEL,   1, 30, 1, 7, "Programs:");
var cb= new Widget(w, Widget.COMBOBOX,  31, 61, 1, 7);

// Add WidgetItems to Combobox
for (i=0; i<items.length; i++)
    var wi = new WidgetItem(cb, items[i]);

// A combobox with many items showing a slider.
var li= new Widget(w, Widget.LABEL,   1, 30, 8, 14, "Long list:");
var ci= new Widget(w, Widget.COMBOBOX,  31, 61, 8, 14);

// Add WidgetItems to Combobox
// As an example we also make some of the WidgetItems unselectable and
// change the background colour
for (i=1; i<=100; i++)
{
    var wi = new WidgetItem(ci, "Item "+i);
    if ( (i % 10) == 5)
    {
        wi.selectable = false;
        wi.background = Widget.WHITE;
    }
}
var e = new Widget(w, Widget.BUTTON,   1, 21, 15, 21, "Exit");

// Assign callbacks
cb.onClick  = clicked;
cb.onChange = changed;
ci.onClick  = clicked;
ci.onChange = changed;

e.onClick   = confirm_exit

// Show the window and start event loop
w.Show();

////////////////////////////////////////////////////////////////////////////////

function clicked()
{
// If combobox is clicked then print the current selection
    if (this.selectedItem)
        Message("selection is currently '"+this.selectedItem.text+"'");
}

////////////////////////////////////////////////////////////////////////////////

function changed()
{
// If combobox selection is changed then print the new selection
    if (this.selectedItem)
        Message("selection is now '"+this.selectedItem.text+"'");
}

////////////////////////////////////////////////////////////////////////////////

function confirm_exit()
{
// Map confirm box
    var ret = Window.Question("Confirm exit", "Are you sure you want to quit?");
// If the user has answered yes then exit from the script.
    if (ret == Window.YES) Exit();
}

```

See the documentation below and the [Window](this-window-class.md) and [Widget](this-widget-class.md) classes for more details.

| Constructor
new WidgetItem(widget*[[Widget](this-widget-class.md)]*, text*[string]*, selectable (optional)*[boolean]*)

Description<br>Create a new [WidgetItem](this-widgetitem-class.md) object for a combobox, listbox or radio button widget. |
| --- |

#### Arguments

* widget ([Widget](this-widget-class.md))
 
Combobox, listbox or radio button [Widget](this-widget-class.md) that the widget item will be created in. This can be null in which case the [WidgetItem](this-widgetitem-class.md) will be created but not assigned to a [Widget](this-widget-class.md). It can be assigned later by using [Widget.AddWidgetItem()](this-widget-class.md#Widget::AddWidgetItem).

* text (string)
 
Text to show on widget item

* selectable (optional) (boolean)
 
If the widget item can be selected. If omitted the widget item will be selectable. Not used for [RADIOBUTTON](this-widget-class.md#Widget.RADIOBUTTON) and [TREE](this-widget-class.md#Widget.TREE) widgets.

| Returns
<br>[WidgetItem](this-widgetitem-class.md) object<br>
Return type
<br>WidgetItem |
| --- |

|  |
| --- |

| new WidgetItem(widget*[[Widget](this-widget-class.md)]*, text*[string]*, relationship (optional)*[constant]*, relitem (optional)*[[WidgetItem](this-widgetitem-class.md)]*)

Description<br>Create a new [WidgetItem](this-widgetitem-class.md) object for a tree widget. If the widget argument is given and the relationship and relitem arguments are omitted then the widget item will be added as a root node in the tree. If the relationship and relitem arguments are also used then the item can be added at a specific location in the tree. Alternatively, the widget argument can be null, and the relationship and relitem arguments omitted, in which case the [WidgetItem](this-widgetitem-class.md) will be created but not assigned to a [Widget](this-widget-class.md). It can be assigned to the tree later using [Widget.AddWidgetItem()](this-widget-class.md#Widget::AddWidgetItem) |
| --- |

#### Arguments

* widget ([Widget](this-widget-class.md))
 
Tree [Widget](this-widget-class.md) that the widget item will be created in or null (if the relationship and relitem arguments are omitted)

* text (string)
 
Text to show on widget item

* relationship (optional) (constant)
 
What relationship (relative to relitem) to use when adding item to the [Widget](this-widget-class.md). Can be:
 [Widget.BEFORE](this-widget-class.md#Widget.BEFORE),
 [Widget.AFTER](this-widget-class.md#Widget.AFTER) or
 [Widget.CHILD](this-widget-class.md#Widget.CHILD).

* relitem (optional) ([WidgetItem](this-widgetitem-class.md))
 
Existing [WidgetItem](this-widgetitem-class.md) to add item relative to

| Returns
<br>[WidgetItem](this-widgetitem-class.md) object<br>
Return type
<br>WidgetItem |
| --- |

|  |
| --- |

| Details of functions 
FirstChild()

Description<br>Returns the first child [WidgetItem](this-widgetitem-class.md) or null if the [WidgetItem](this-widgetitem-class.md) has no children. Only possible for [WidgetItems](this-widgetitem-class.md) used in [Widget.TREE](this-widget-class.md#Widget.TREE) widgets. |
| --- |

#### Arguments

No arguments

| Returns
<br>[WidgetItem](this-widgetitem-class.md) object<br>
Return type
<br>WidgetItem |
| --- |

| Example
<br>To get the first child widget item in a tree widget for widget item wi:<br>
```
var cwi = wi.FirstChild();
```
 |
| --- |

* * *

| NextSibling()

Description<br>Returns the next sibling [WidgetItem](this-widgetitem-class.md) or null if the [WidgetItem](this-widgetitem-class.md) has no further siblings. Only possible for [WidgetItems](this-widgetitem-class.md) used in [Widget.TREE](this-widget-class.md#Widget.TREE) widgets. |
| --- |

#### Arguments

No arguments

| Returns
<br>[WidgetItem](this-widgetitem-class.md) object<br>
Return type
<br>WidgetItem |
| --- |

| Example
<br>To get the next sibling widget item in a tree widget for widget item wi:<br>
```
var pwi = wi.NextSibling();
```
 |
| --- |

* * *

| Parent()

Description<br>Returns the parent [WidgetItem](this-widgetitem-class.md) or null if the [WidgetItem](this-widgetitem-class.md) has no parent. Only possible for [WidgetItems](this-widgetitem-class.md) used in [Widget.TREE](this-widget-class.md#Widget.TREE) widgets. |
| --- |

#### Arguments

No arguments

| Returns
<br>[WidgetItem](this-widgetitem-class.md) object<br>
Return type
<br>WidgetItem |
| --- |

| Example
<br>To get the parent widget item in a tree widget for widget item wi:<br>
```
var pwi = wi.Parent();
```
 |
| --- |

* * *

| PreviousSibling()

Description<br>Returns the next sibling [WidgetItem](this-widgetitem-class.md) or null if the [WidgetItem](this-widgetitem-class.md) has no further siblings. Only possible for [WidgetItems](this-widgetitem-class.md) used in [Widget.TREE](this-widget-class.md#Widget.TREE) widgets. |
| --- |

#### Arguments

No arguments

| Returns
<br>[WidgetItem](this-widgetitem-class.md) object<br>
Return type
<br>WidgetItem |
| --- |

| Example
<br>To get the previous sibling widget item in a tree widget for widget item wi:<br>
```
var pwi = wi.PreviousSibling();
```
 |
| --- |

* * *