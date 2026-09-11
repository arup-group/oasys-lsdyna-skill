# Widget class

The Widget class allows you to create components for a graphical user interface. [More...](primer-widget-class.md#Widget_details)

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

* [CtrlPressed](primer-widget-class.md#Widget::CtrlPressed)()
* [PixelsPerUnit](primer-widget-class.md#Widget::PixelsPerUnit)()
* [ShiftPressed](primer-widget-class.md#Widget::ShiftPressed)()
* [StringLength](primer-widget-class.md#Widget::StringLength)(text*[string]*, monospace (optional)*[boolean]*, fontSize (optional)*[integer]*)

## Member functions

* [AddWidgetItem](primer-widget-class.md#Widget::AddWidgetItem)(item*[[WidgetItem](primer-widgetitem-class.md)]*, position (optional)*[integer]*)
* [AddWidgetItem](primer-widget-class.md#Widget::AddWidgetItem_#1)(item*[[WidgetItem](primer-widgetitem-class.md)]*, relationship*[constant]*, relitem*[[WidgetItem](primer-widgetitem-class.md)]*)
* [Circle](primer-widget-class.md#Widget::Circle)(colour*[constant]*, fill*[boolean]*, xc*[integer]*, yc*[integer]*, radius*[integer]*)
* [Clear](primer-widget-class.md#Widget::Clear)()
* [ClearSelection](primer-widget-class.md#Widget::ClearSelection)()
* [Cross](primer-widget-class.md#Widget::Cross)(colour (optional)*[constant]*)
* [Delete](primer-widget-class.md#Widget::Delete)()
* [DirectoryIcon](primer-widget-class.md#Widget::DirectoryIcon)(line\_colour*[constant]*, fill\_colour*[constant]*)
* [DumpImageString](primer-widget-class.md#Widget::DumpImageString)(filename*[string]*, format (optional)*[constant]*)
* [Hide](primer-widget-class.md#Widget::Hide)()
* [ItemAt](primer-widget-class.md#Widget::ItemAt)(index*[integer]*)
* [Line](primer-widget-class.md#Widget::Line)(colour*[constant]*, x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)
* [MoveWidgetItem](primer-widget-class.md#Widget::MoveWidgetItem)(item*[[WidgetItem](primer-widgetitem-class.md)]*, relationship*[constant]*, relitem*[[WidgetItem](primer-widgetitem-class.md) or null]*)
* [Polygon](primer-widget-class.md#Widget::Polygon)(colour*[constant]*, fill*[boolean]*, points*[array]*)
* [Polygon](primer-widget-class.md#Widget::Polygon_deprecated)(colour*[constant]*, fill*[boolean]*, x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*, ... xn*[integer]*, ... yn*[integer]*) [deprecated]
* [ReadImageFile](primer-widget-class.md#Widget::ReadImageFile)(filename*[string]*, justify (optional)*[constant]*, transparent (optional)*[colour value (integer)]*, tolerance (optional)*[integer]*)
* [ReadImageString](primer-widget-class.md#Widget::ReadImageString)(string*[string]*, justify (optional)*[constant]*, transparent (optional)*[colour value (integer)]*, tolerance (optional)*[integer]*)
* [Rectangle](primer-widget-class.md#Widget::Rectangle)(colour*[constant]*, fill*[boolean]*, x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)
* [RemoveAllWidgetItems](primer-widget-class.md#Widget::RemoveAllWidgetItems)()
* [RemoveWidgetItem](primer-widget-class.md#Widget::RemoveWidgetItem)(item*[[WidgetItem](primer-widgetitem-class.md)]*)
* [Scroll](primer-widget-class.md#Widget::Scroll)(scroll*[constant or [WidgetItem](primer-widgetitem-class.md) object]*)
* [Show](primer-widget-class.md#Widget::Show)()
* [Static](primer-widget-class.md#Widget::Static)()
* [Tick](primer-widget-class.md#Widget::Tick)(colour (optional)*[constant]*)
* [TotalItems](primer-widget-class.md#Widget::TotalItems)()
* [WidgetItems](primer-widget-class.md#Widget::WidgetItems)()

## Widget constants

| **Name** | **Description** |
| --- | --- |
| Widget.BUTTON | Button widget |
| Widget.CHECKBOX | Checkbox widget |
| Widget.COMBOBOX | Combobox widget |
| Widget.LABEL | Label widget |
| Widget.LISTBOX | Listbox widget |
| Widget.RADIOBUTTON | Radiobutton widget |
| Widget.SLIDER | Slider widget |
| Widget.TEXTBOX | Text input widget |
| Widget.TREE | Tree widget |

### Constants for Colour

| **Name** | **Description** |
| --- | --- |
| Widget.BLACK | Colour black |
| Widget.BLUE | Colour blue |
| Widget.COLOUR\_CONTRAST | A contrasting colour in the 3 user interface themes (Green, Purple, and Blue in the Dark, Light, and Classic themes respectively). Blue in the legacy theme. |
| Widget.COLOUR\_CONTRAST\_2 | Another contrasting colour in the 3 user interface themes (Yellow, Red, and Red in the Dark, Light, and Classic themes respectively). Red in the legacy theme. |
| Widget.COLOUR\_INVERSE | Inverse colour in the 3 user interface themes (Black or white depending on theme). Black in the legacy theme. |
| Widget.COLOUR\_LABEL | Label text colour in the 3 user interface themes (Black or white depending on theme). Black in the legacy theme. |
| Widget.COLOUR\_LATENT | Latent colour in the 3 user interface themes (Different shade of Cyan in every theme). Light Cyan in the legacy theme. |
| Widget.COLOUR\_NEUTRAL | Neutral colour in the 3 user interface themes (Different shade of grey in every theme). Light grey in the legacy theme. |
| Widget.COLOUR\_SAFE | Safe colour in the 3 user interface themes (Different shade of green in every theme). Dark green in the legacy theme. |
| Widget.COLOUR\_TITLE | Title colour in the 3 user interface themes (Different shade of grey in every theme). Dark blue in the legacy theme. |
| Widget.COLOUR\_WARNING | Warning colour in the 3 user interface themes (Different shade of red in every theme). Dark red in the legacy theme. |
| Widget.CYAN | Colour cyan |
| Widget.DARKBLUE | Colour dark blue |
| Widget.DARKGREEN | Colour dark green |
| Widget.DARKGREY | Colour dark grey |
| Widget.DARKGREY\_NEUTRAL | Only valid in the function 'Line'. Used to keep the 3D effect in the legacy theme and not in the other themes. Neutral colour in the 3 user interface themes (Different shade of grey in every theme). Dark grey in the legacy theme |
| Widget.DARKRED | Colour dark red |
| Widget.DEFAULT | Default colour for widgets |
| Widget.GREEN | Colour green |
| Widget.GREY | Colour grey |
| Widget.LIGHTGREY | Colour light grey |
| Widget.LIGHTGREY\_NEUTRAL | Only valid in the function 'Line'. Used to keep the 3D effect in the legacy theme and not in the other themes. Neutral colour in the 3 user interface themes (Different shade of grey in every theme). Light grey in the legacy theme |
| Widget.MAGENTA | Colour magenta |
| Widget.ORANGE | Colour orange |
| Widget.RED | Colour red |
| Widget.WHITE | Colour white |
| Widget.YELLOW | Colour yellow |

### Constants for Image RGB format

| **Name** | **Description** |
| --- | --- |
| Widget.RGB24 | 24 bits for RGB data in widget images |
| Widget.RGB8 | 8 bits for RGB data in widget images |

### Constants for Justification

| **Name** | **Description** |
| --- | --- |
| Widget.BOTTOM | Bottom justification |
| Widget.CENTRE | Centre (horizontal) justification |
| Widget.LEFT | Left justification |
| Widget.MIDDLE | Middle (vertical) justification |
| Widget.RIGHT | Right justification |
| Widget.SCALE | Image will be scaled to fit widget |
| Widget.TOP | Top justification |

### Constants for Orientation

| **Name** | **Description** |
| --- | --- |
| Widget.HORIZONTAL | Horizontal orientation (for sliders) |
| Widget.VERTICAL | Vertical orientation (for sliders) |

### Constants for Selection

| **Name** | **Description** |
| --- | --- |
| Widget.SELECT\_ENHANCED | Multiple [WidgetItems](primer-widgetitem-class.md) in a [ListBox](primer-widget-class.md#Widget.LISTBOX) or [tree](primer-widget-class.md#Widget.TREE) Widget can be selected. When the user selects a [WidgetItem](primer-widgetitem-class.md) the selection is cleared and the new [WidgetItem](primer-widgetitem-class.md) selected. However, if the user presses the Ctrl key when clicking on a [WidgetItem](primer-widgetitem-class.md), the clicked [WidgetItem](primer-widgetitem-class.md) gets toggled and all other [WidgetItems](primer-widgetitem-class.md) are left untouched. If the user presses the Shift key while clicking on a [WidgetItem](primer-widgetitem-class.md), all [WidgetItems](primer-widgetitem-class.md) between the last selected [WidgetItem](primer-widgetitem-class.md) and the clicked [WidgetItem](primer-widgetitem-class.md) are selected or unselected, depending on the state of the clicked [WidgetItem](primer-widgetitem-class.md). |
| Widget.SELECT\_MULTIPLE | Multiple [WidgetItems](primer-widgetitem-class.md) in a [ListBox](primer-widget-class.md#Widget.LISTBOX) Widget can be selected. When the user selects a [WidgetItem](primer-widgetitem-class.md), the selection status of that [WidgetItem](primer-widgetitem-class.md) is toggled and the other [WidgetItems](primer-widgetitem-class.md) are left alone.<br> Not valid for [tree](primer-widget-class.md#Widget.TREE) widgets. [Widget.SELECT_ENHANCED](primer-widget-class.md#Widget.SELECT_ENHANCED) will be used. |
| Widget.SELECT\_NONE | No [WidgetItem](primer-widgetitem-class.md) in a [ListBox](primer-widget-class.md#Widget.LISTBOX) or [tree](primer-widget-class.md#Widget.TREE) Widget can be selected |
| Widget.SELECT\_SINGLE | A single [WidgetItem](primer-widgetitem-class.md) in a [ListBox](primer-widget-class.md#Widget.LISTBOX) or [tree](primer-widget-class.md#Widget.TREE) Widget can be selected. When the user selects a [WidgetItem](primer-widgetitem-class.md), any already-selected [WidgetItem](primer-widgetitem-class.md) becomes unselected, and the user cannot unselect the selected [WidgetItem](primer-widgetitem-class.md) by clicking on it. |

### Constants for Tree relations

| **Name** | **Description** |
| --- | --- |
| Widget.AFTER | Add a [WidgetItem](primer-widgetitem-class.md) after the existing [WidgetItem](primer-widgetitem-class.md) for a [tree](primer-widget-class.md#Widget.TREE) widget. |
| Widget.BEFORE | Add a [WidgetItem](primer-widgetitem-class.md) before the existing [WidgetItem](primer-widgetitem-class.md) for a [tree](primer-widget-class.md#Widget.TREE) widget. |
| Widget.CHILD | Add a [WidgetItem](primer-widgetitem-class.md) as a child of the existing [WidgetItem](primer-widgetitem-class.md) for a [tree](primer-widget-class.md#Widget.TREE) widget. |

### Constants for Tree/listbox scrolling

| **Name** | **Description** |
| --- | --- |
| Widget.SCROLL\_BOTTOM | Scroll [tree](primer-widget-class.md#Widget.TREE) or [listbox](primer-widget-class.md#Widget.LISTBOX) widget to bottom. |
| Widget.SCROLL\_DOWN | Scroll [tree](primer-widget-class.md#Widget.TREE) or [listbox](primer-widget-class.md#Widget.LISTBOX) widget down one. |
| Widget.SCROLL\_PAGE\_DOWN | Scroll [tree](primer-widget-class.md#Widget.TREE) or [listbox](primer-widget-class.md#Widget.LISTBOX) widget down one page. |
| Widget.SCROLL\_PAGE\_UP | Scroll [tree](primer-widget-class.md#Widget.TREE) or [listbox](primer-widget-class.md#Widget.LISTBOX) widget up one page. |
| Widget.SCROLL\_TOP | Scroll [tree](primer-widget-class.md#Widget.TREE) or [listbox](primer-widget-class.md#Widget.LISTBOX) widget to top. |
| Widget.SCROLL\_UP | Scroll [tree](primer-widget-class.md#Widget.TREE) or [listbox](primer-widget-class.md#Widget.LISTBOX) widget up one. |

### Constants for User interface categories

| **Name** | **Description** |
| --- | --- |
| Widget.CATEGORY\_APPLY | Apply buttons |
| Widget.CATEGORY\_BUTTON\_BOX | A button box panel that contains other widgets |
| Widget.CATEGORY\_CANCEL | Buttons which cancel the current operation |
| Widget.CATEGORY\_DATA\_ENTRY\_HEADER | Header for data entry cells, e.g. PRIMER create panels |
| Widget.CATEGORY\_DISMISS | Buttons to close or dismiss panels |
| Widget.CATEGORY\_ENTITY | Entity types in T/HIS |
| Widget.CATEGORY\_GENERIC | A generic button that isn't a special category |
| Widget.CATEGORY\_GENERIC\_2 | An alternative to the generic category that has a complementary colour |
| Widget.CATEGORY\_HELP | Help buttons |
| Widget.CATEGORY\_KEYWORD | A PRIMER keyword button |
| Widget.CATEGORY\_LABEL | A text label |
| Widget.CATEGORY\_LABEL\_BOX | Text label with a border |
| Widget.CATEGORY\_LABEL\_POPUP | Text label with a popup that blends into the background |
| Widget.CATEGORY\_MENU\_BOX | A menu box |
| Widget.CATEGORY\_MESSAGE | For displaying a temporary warning message |
| Widget.CATEGORY\_OPERATE | Operate buttons in T/HIS |
| Widget.CATEGORY\_POPUP\_BOX | A popup box that can contain buttons and plain text |
| Widget.CATEGORY\_SAFE\_ACTION | Buttons (usually green) to indicate a safe action |
| Widget.CATEGORY\_SEL\_ALL | Select all |
| Widget.CATEGORY\_TAB | Tab |
| Widget.CATEGORY\_TABLE\_HEADER | Table (column) header |
| Widget.CATEGORY\_TABLE\_ROW | Table row |
| Widget.CATEGORY\_TEXT\_BOX | A text box |
| Widget.CATEGORY\_TICKBOX | A tick box |
| Widget.CATEGORY\_TITLE | Title text |
| Widget.CATEGORY\_TOGGLE | Buttons that can be toggled, e.g. On/Off |
| Widget.CATEGORY\_TOOL | Buttons within the tools area |
| Widget.CATEGORY\_UNDO | Buttons which undo the last operation |
| Widget.CATEGORY\_UNSEL\_ALL | Unselect/deslect all |
| Widget.CATEGORY\_UPDATE | Update buttons which update the screen but leave the panel open |
| Widget.CATEGORY\_WARNING\_ACTION | Buttons (usually red) to indicate a dangerous action |
| Widget.NO\_CATEGORY | No styling is applied. Widget colour controlled by foreground/background properties and is the same in all themes |

## Widget properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| active | logical | If widget is active (true) or disabled (false) |
| arrows | boolean | Whether arrows will be shown for a slider (default is true). [Slider](primer-widget-class.md#Widget.SLIDER) Widgets only. |
| background | constant | Widget background colour. Can be: [Widget.BLACK](primer-widget-class.md#Widget.BLACK), [Widget.WHITE](primer-widget-class.md#Widget.WHITE), [Widget.RED](primer-widget-class.md#Widget.RED), [Widget.GREEN](primer-widget-class.md#Widget.GREEN), [Widget.BLUE](primer-widget-class.md#Widget.BLUE), [Widget.CYAN](primer-widget-class.md#Widget.CYAN), [Widget.MAGENTA](primer-widget-class.md#Widget.MAGENTA), [Widget.YELLOW](primer-widget-class.md#Widget.YELLOW), [Widget.DARKRED](primer-widget-class.md#Widget.DARKRED), [Widget.DARKGREEN](primer-widget-class.md#Widget.DARKGREEN), [Widget.DARKBLUE](primer-widget-class.md#Widget.DARKBLUE), [Widget.GREY](primer-widget-class.md#Widget.GREY), [Widget.DARKGREY](primer-widget-class.md#Widget.DARKGREY), [Widget.LIGHTGREY](primer-widget-class.md#Widget.LIGHTGREY), [Widget.ORANGE](primer-widget-class.md#Widget.ORANGE), [Widget.DEFAULT](primer-widget-class.md#Widget.DEFAULT), [Widget.COLOUR_NEUTRAL](primer-widget-class.md#Widget.COLOUR_NEUTRAL), [Widget.COLOUR_CONTRAST](primer-widget-class.md#Widget.COLOUR_CONTRAST), [Widget.COLOUR_CONTRAST_2](primer-widget-class.md#Widget.COLOUR_CONTRAST_2), [Widget.COLOUR_WARNING](primer-widget-class.md#Widget.COLOUR_WARNING), [Widget.COLOUR_SAFE](primer-widget-class.md#Widget.COLOUR_SAFE), [Widget.COLOUR_TITLE](primer-widget-class.md#Widget.COLOUR_TITLE), [Widget.COLOUR_INVERSE](primer-widget-class.md#Widget.COLOUR_INVERSE), [Widget.DARKGREY_NEUTRAL](primer-widget-class.md#Widget.DARKGREY_NEUTRAL), [Widget.LIGHTGREY_NEUTRAL](primer-widget-class.md#Widget.LIGHTGREY_NEUTRAL) [Widget.COLOUR_LATENT](primer-widget-class.md#Widget.COLOUR_LATENT), ,or a colour returned by [Colour.RGB()](primer-colour-class.md#Colour::RGB). Note, background colours in the [Window.THEME_DARK](primer-window-class.md#Window.THEME_DARK), [Window.THEME_LIGHT](primer-window-class.md#Window.THEME_LIGHT), and [Window.THEME_CLASSIC](primer-window-class.md#Window.THEME_CLASSIC) themes will be determined by the category of the widget not the background colour. To override this behaviour and use this background colour first set the widget category to [Widget.NO_CATEGORY](primer-widget-class.md#Widget.NO_CATEGORY). |
| bottom | integer | Widget bottom coordinate |
| category | constant | The button category which determines the button's appearance when using the new user interface, see [Window.Theme()](primer-window-class.md#Window::Theme) |
| currentItem | [WidgetItem](primer-widgetitem-class.md) object | The current [WidgetItem](primer-widgetitem-class.md) for a [tree](primer-widget-class.md#Widget.TREE) Widget. The current [WidgetItem](primer-widgetitem-class.md) in a tree is shown with a dashed border. |
| fontSize | integer | Widget font size in points. Currently only supports the following sizes: 6, 7, 8, 10, 12, 14, 18, 24. Can be used only with Widget.LABEL and Widget.BUTTON. Both LATIN1 and UTF-8 encoding is supported on Windows but Linux only supports LATIN1 encoding at the moment. |
| foreground | constant | Widget foreground colour. Can be: [Widget.BLACK](primer-widget-class.md#Widget.BLACK), [Widget.WHITE](primer-widget-class.md#Widget.WHITE), [Widget.RED](primer-widget-class.md#Widget.RED), [Widget.GREEN](primer-widget-class.md#Widget.GREEN), [Widget.BLUE](primer-widget-class.md#Widget.BLUE), [Widget.CYAN](primer-widget-class.md#Widget.CYAN), [Widget.MAGENTA](primer-widget-class.md#Widget.MAGENTA), [Widget.YELLOW](primer-widget-class.md#Widget.YELLOW), [Widget.DARKRED](primer-widget-class.md#Widget.DARKRED), [Widget.DARKGREEN](primer-widget-class.md#Widget.DARKGREEN), [Widget.DARKBLUE](primer-widget-class.md#Widget.DARKBLUE), [Widget.GREY](primer-widget-class.md#Widget.GREY), [Widget.DARKGREY](primer-widget-class.md#Widget.DARKGREY), [Widget.LIGHTGREY](primer-widget-class.md#Widget.LIGHTGREY), [Widget.ORANGE](primer-widget-class.md#Widget.ORANGE), [Widget.DEFAULT](primer-widget-class.md#Widget.DEFAULT), [Widget.COLOUR_NEUTRAL](primer-widget-class.md#Widget.COLOUR_NEUTRAL), [Widget.COLOUR_CONTRAST](primer-widget-class.md#Widget.COLOUR_CONTRAST), [Widget.COLOUR_CONTRAST_2](primer-widget-class.md#Widget.COLOUR_CONTRAST_2), [Widget.COLOUR_WARNING](primer-widget-class.md#Widget.COLOUR_WARNING), [Widget.COLOUR_SAFE](primer-widget-class.md#Widget.COLOUR_SAFE), [Widget.COLOUR_TITLE](primer-widget-class.md#Widget.COLOUR_TITLE), [Widget.COLOUR_LABEL](primer-widget-class.md#Widget.COLOUR_LABEL), [Widget.COLOUR_INVERSE](primer-widget-class.md#Widget.COLOUR_INVERSE), [Widget.DARKGREY_NEUTRAL](primer-widget-class.md#Widget.DARKGREY_NEUTRAL), [Widget.LIGHTGREY_NEUTRAL](primer-widget-class.md#Widget.LIGHTGREY_NEUTRAL) [Widget.COLOUR_LATENT](primer-widget-class.md#Widget.COLOUR_LATENT), ,or a colour returned by [Colour.RGB()](primer-colour-class.md#Colour::RGB). Note, foreground colours in the [Window.THEME_DARK](primer-window-class.md#Window.THEME_DARK), [Window.THEME_LIGHT](primer-window-class.md#Window.THEME_LIGHT), and [Window.THEME_CLASSIC](primer-window-class.md#Window.THEME_CLASSIC) themes will be determined by the category of the widget not the foreground colour. To override this behaviour and use this foreground colour first set the widget category to [Widget.NO_CATEGORY](primer-widget-class.md#Widget.NO_CATEGORY). |
| hover | string | Widget hover text |
| imageHeight (read only) | integer | Height of widget image (pixels) |
| imageWidth (read only) | integer | Width of widget image (pixels) |
| justify | constant | Widget justification. Can be: [Widget.LEFT](primer-widget-class.md#Widget.LEFT), [Widget.RIGHT](primer-widget-class.md#Widget.RIGHT) or [Widget.CENTRE](primer-widget-class.md#Widget.CENTRE) (default). |
| left | integer | Widget left coordinate |
| lineWidth | integer | Width of lines when drawing graphics (initially 1; values 1-100 allowed). |
| macroTag | string | Tag to use for this widget when recording a macro. If empty then the [text](primer-widget-class.md#text) property value will be used. |
| maximum | integer | The maximum value allowed for a slider (default is 100). [Slider](primer-widget-class.md#Widget.SLIDER) Widgets only. |
| minimum | integer | The minimum value allowed for a slider (default is 0). [Slider](primer-widget-class.md#Widget.SLIDER) Widgets only. |
| monospace | boolean | true if the widget uses a monospace font instead of a proportional width font (default). [Label](primer-widget-class.md#Widget.LABEL) and [button](primer-widget-class.md#Widget.BUTTON) Widgets only. |
| onChange | function | Function to call when the text in a [TEXTBOX](primer-widget-class.md#Widget.TEXTBOX) widget, the selection in a [COMBOBOX](primer-widget-class.md#Widget.COMBOBOX) widget or the value of a [SLIDER](primer-widget-class.md#Widget.SLIDER) is changed. The Widget object is accessible in the function using the 'this' keyword (see the example below for more details of how to define the function and how to use the 'this' keyword). <br>To unset the function set the property to null. <br>**Note that this function is called when the user actually types something into the textbox, selects an item in the combobox or moves the slider, NOT when the [Widget.text](primer-widget-class.md#text) or [Widget.value](primer-widget-class.md#value) property changes**. |
| onClick | function | Function to call when a [BUTTON](primer-widget-class.md#Widget.BUTTON), [CHECKBOX](primer-widget-class.md#Widget.CHECKBOX), [COMBOBOX](primer-widget-class.md#Widget.COMBOBOX), [LABEL](primer-widget-class.md#Widget.LABEL), [RADIOBUTTON](primer-widget-class.md#Widget.RADIOBUTTON) or [TREE](primer-widget-class.md#Widget.TREE) widget is clicked. The Widget object is accessible in the function using the 'this' keyword (see the example below for more details of how to define the function and how to use the 'this' keyword). <br>To unset the function set the property to null. <br>**Note that this function is called when the user actually clicks on the button, NOT when the [Widget.pushed](primer-widget-class.md#pushed) property changes**. For the [COMBOBOX](primer-widget-class.md#Widget.COMBOBOX) widget the function is called **before** the list of items is mapped. |
| onPopup | function | Function to call when a [BUTTON](primer-widget-class.md#Widget.BUTTON), [LABEL](primer-widget-class.md#Widget.LABEL), [TEXTBOX](primer-widget-class.md#Widget.TEXTBOX) or [TREE](primer-widget-class.md#Widget.TREE) widget is right clicked to map a popup. The [Widget](primer-widget-class.md) object is accessible in the function using the 'this' keyword. The [PopupWindow](primer-popupwindow-class.md) can then be found by using the [popupWindow](primer-widget-class.md#popupWindow) property of the [Widget](primer-widget-class.md). <br>The function is called **before** the popup is mapped so you can change the widgets in the popup as required. |
| onTimer | function | Function to call for a widget when [timerDelay](primer-widget-class.md#timerDelay) ms have elapsed after setting this. Additionally if [timerRepeat](primer-widget-class.md#timerRepeat) is set this function will be called repetitively, every [timerDelay](primer-widget-class.md#timerDelay) ms. The Widget object is accessible in the function using the 'this' keyword. <br>To unset the function set the property to null. <br>**Note that as soon as this property is set the timer starts!** |
| orientation | constant | The orientation of a slider. Can be: [Widget.VERTICAL](primer-widget-class.md#Widget.VERTICAL) or [Widget.HORIZONTAL](primer-widget-class.md#Widget.HORIZONTAL) (default). [Slider](primer-widget-class.md#Widget.SLIDER) Widgets only. |
| popupDirection | constant | How [PopupWindow](primer-popupwindow-class.md) will be mapped relative to this widget. Can be [Widget.LEFT](primer-widget-class.md#Widget.LEFT), [Widget.RIGHT](primer-widget-class.md#Widget.RIGHT), [Widget.TOP](primer-widget-class.md#Widget.TOP) or [Widget.BOTTOM](primer-widget-class.md#Widget.BOTTOM) (default). For tree widgets this will be ignored as the popup is always shown on the [WidgetItem](primer-widgetitem-class.md) that is right clicked. |
| popupSymbol | logical | TRUE (default) if a symbol will be shown for a [PopupWindow](primer-popupwindow-class.md). |
| popupWindow | [PopupWindow](primer-popupwindow-class.md) object | [PopupWindow](primer-popupwindow-class.md) for this Widget. Only available for [Button](primer-widget-class.md#Widget.BUTTON), [Label](primer-widget-class.md#Widget.LABEL) and [Textbox](primer-widget-class.md#Widget.TEXTBOX) Widgets. To remove a [PopupWindow](primer-popupwindow-class.md) from a [Widget](primer-widget-class.md) set to null. |
| pushed | logical | If widget is pushed (true) or not (false). This only affects [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) with the [Widget.toggle](primer-widget-class.md#toggle) property set, and [Widget.CHECKBOX](primer-widget-class.md#Widget.CHECKBOX) widgets. |
| right | integer | Widget right coordinate |
| select | constant | Selection method for [ListBox](primer-widget-class.md#Widget.LISTBOX) and [tree](primer-widget-class.md#Widget.TREE) Widgets. Can be: [Widget.SELECT_NONE](primer-widget-class.md#Widget.SELECT_NONE), [Widget.SELECT_SINGLE](primer-widget-class.md#Widget.SELECT_SINGLE) or [Widget.SELECT_MULTIPLE](primer-widget-class.md#Widget.SELECT_MULTIPLE) or [Widget.SELECT_ENHANCED](primer-widget-class.md#Widget.SELECT_ENHANCED) (default). |
| selectedItem | [WidgetItem](primer-widgetitem-class.md) object | [WidgetItem](primer-widgetitem-class.md) that is currently selected for a [ComboBox](primer-widget-class.md#Widget.COMBOBOX) or [Radiobutton](primer-widget-class.md#Widget.RADIOBUTTON), Widget. If null no [WidgetItem](primer-widgetitem-class.md) is selected.<br> For a [ListBox](primer-widget-class.md#Widget.LISTBOX) Widget this property contains the last [WidgetItem](primer-widgetitem-class.md) that was (de)selected. To get a list of all of the selected WidgetItems use [WidgetItems()](primer-widget-class.md#Widget::WidgetItems) to return all of the WidgetItems and inspect the WidgetItem [selected](primer-widgetitem-class.md#selected) property. |
| shown (read only) | boolean | true if the widget is visible. To alter the visibility of a widget use the [Show()](primer-widget-class.md#Widget::Show) and [Hide() methods.](primer-widget-class.md#Widget::Hide) |
| step | integer | The step value of a slider (default is 1). [Slider](primer-widget-class.md#Widget.SLIDER) Widgets only. |
| text | string | Widget text. For a [ComboBox](primer-widget-class.md#Widget.COMBOBOX) Widget this will be the text for the currently selected [WidgetItem](primer-widgetitem-class.md) |
| textHidden | boolean | true if the widget text is hidden and replaced by asterisks. This may be used to create textboxes to type passwords in. [TextBox](primer-widget-class.md#Widget.TEXTBOX) Widgets only. |
| timerDelay | integer | Delay in ms before the function set for [onTimer](primer-widget-class.md#onTimer) will be called. The initial value is 1000 (ms). Also see [timerRepeat](primer-widget-class.md#timerRepeat). |
| timerRepeat | logical | If the function set for [onTimer](primer-widget-class.md#onTimer) will be called once (false) or repeatedly (true). The initial value is false. Also see [timerDelay](primer-widget-class.md#timerDelay). |
| toggle | logical | If widget can be toggled (true) or not (false). This only affects [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. |
| top | integer | Widget top coordinate |
| type (read only) | integer | Type of the widget. The widget type could be [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON), [Widget.CHECKBOX](primer-widget-class.md#Widget.CHECKBOX), [Widget.COMBOBOX](primer-widget-class.md#Widget.COMBOBOX), [Widget.LABEL](primer-widget-class.md#Widget.LABEL), [Widget.LISTBOX](primer-widget-class.md#Widget.LISTBOX), [Widget.RADIOBUTTON](primer-widget-class.md#Widget.RADIOBUTTON), [Widget.SLIDER](primer-widget-class.md#Widget.SLIDER), [Widget.TEXTBOX](primer-widget-class.md#Widget.TEXTBOX) or [Widget.TREE](primer-widget-class.md#Widget.TREE) |
| value | integer | The current value of a slider (initially will be the [minimum](primer-widget-class.md#minimum) value). [Slider](primer-widget-class.md#Widget.SLIDER) Widgets only. |
| window (read only) | [Window](primer-window-class.md) object | The [Window](primer-window-class.md) that this widget is defined in |
| xResolution | integer | X resolution of button when drawing [lines](primer-widget-class.md#Widget::Line), [circles](primer-widget-class.md#Widget::Circle), [polygons](primer-widget-class.md#Widget::Polygon) and [rectangles](primer-widget-class.md#Widget::Rectangle) (initially 100). X coordinates on the Widget can be from 0 (on the left of the widget) to xResolution (on the right of the widget). Available for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) Widgets. |
| yResolution | integer | Y resolution of button when drawing [lines](primer-widget-class.md#Widget::Line), [circles](primer-widget-class.md#Widget::Circle), [polygons](primer-widget-class.md#Widget::Polygon) and [rectangles](primer-widget-class.md#Widget::Rectangle) (initially 100). Y coordinates on the Widget can be from 0 (on the top of the widget) to yResolution (on the bottom of the widget). Available for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) Widgets. |

| Detailed Description<br>The Widget class allows you to create Widgets (buttons, textboxes etc) in a [Window](primer-window-class.md) for a graphical user interface. Callback functions can be declared<br>for widgets to give actions when a button is pressed or the text in a textbox is selected etc.<br>The following example displays various widgets in a window. Several callback methods are used.<br>The exit button allows the user to exit the script but the button is only made active if the checkbox<br>widget is ticked. If the button widgets are pressed feedback is given to the user<br> |
| --- |


```

var count = 0;

// Create window
var w = new Window("Test", 0.8, 1.0, 0.5, 0.6);

// Create all of the widgets
var l = new Widget(w, Widget.LABEL,    1, 30, 1, 7, "Text:");
var t = new Widget(w, Widget.TEXTBOX, 31, 80, 1, 7, "Enter text");
var b = new Widget(w, Widget.BUTTON,   1, 30, 8, 14, "Press me");
var b2= new Widget(w, Widget.BUTTON,  31, 61, 8, 14, "Don't press me");
var c = new Widget(w, Widget.CHECKBOX,62, 68, 8, 14);
var l2= new Widget(w, Widget.LABEL,    1, 80, 15, 21, "You haven't pressed the button yet...");
var e = new Widget(w, Widget.BUTTON,   1, 21, 22, 28, "Exit");

// Allow button widget b2 to toggle
b2.toggle = true;
// The exit button is initially inactive
e.active = false;

// Assign the callback functions
b.onClick  = clicked;
b2.onClick = clicked;
c.onClick  = clicked;
t.onChange = changed;
e.onClick  = confirm_exit;

// Show the window and start event loop
w.Show();

////////////////////////////////////////////////////////////////////////////////

function clicked()
{
// If checkbox is clicked then set the state of the exit button
    if (this === c)
    {
        Message("Checkbox clicked");
        e.active = c.pushed;
    }
// If the "Don't press me' button is pressed then change the colour if the button is pressed in.
    else if (this === b2)
    {
        Message("I said don't press!!!");
        if (b2.pushed) b2.background = Widget.WHITE;
        else           b2.background = Widget.DEFAULT;
    }
// If the "Press me" button is pressed then update the text in the label widget
// with how many times the button has been pressed.
    else
    {
        Message("You pressed...");
        count++;
        l2.text = "Button pressed " + count + " times";
    }
}

////////////////////////////////////////////////////////////////////////////////

function changed()
{
// If the user has changed the text in the textbox then give a message in
// the dialogue box
    Message("Text has changed to " + this.text);
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

In version 20 a tree widget was added. A simple tree widget example is shown below.

```
Window.Theme(Window.THEME_CURRENT);

let wi, cwi;

// Create a popup window and some widgets
let pw = new PopupWindow();
let pw_l1 = new Widget(pw, Widget.LABEL, 1, 61,  1,  7, "");
let pw_l2 = new Widget(pw, Widget.LABEL, 1, 61,  7, 13, "");
let pw_l3 = new Widget(pw, Widget.LABEL, 1, 61, 13, 19, "");
let pw_l4 = new Widget(pw, Widget.LABEL, 1, 61, 19, 25, "");
let pw_l5 = new Widget(pw, Widget.LABEL, 1, 61, 25, 31, "");
let pw_l6 = new Widget(pw, Widget.LABEL, 1, 61, 31, 37, "");

// Create window
let w = new Window("JavaScript Tree widget test", 0.85, 1.0, 0.75, 1.0);

// Create tree widget
let t = new Widget(w, Widget.TREE, 1, 61, 1, 51, "Suite");

// Add a root node to tree
let env_wi = new WidgetItem(t, "MyItem");

// Add a child to the root node
wi  = new WidgetItem(t, "PRIMER", Widget.CHILD, env_wi);
cwi = new WidgetItem(t, "Prepare", Widget.CHILD, wi);
wi.onMouseOver = wi_onmouseover;
cwi.hover = "Efficient, reliable model setup with support for all of the latest Ansys LS-DYNA features";

wi  = new WidgetItem(t, "Ansys LS-DYNA", Widget.CHILD, env_wi);
cwi = new WidgetItem(t, "Analyse", Widget.CHILD, wi);
wi.onMouseOver = wi_onmouseover;

// Add a sibling node after Ansys LS-DYNA
wi  = new WidgetItem(t, "REPORTER", Widget.AFTER, wi);
cwi = new WidgetItem(t, "Report", Widget.CHILD, wi);
wi.onMouseOver = wi_onmouseover;
cwi.hover = "Automatic report generation for Ansys LS-DYNA simulations";
 
// Add a sibling node before REPORTER
wi  = new WidgetItem(t, "T/HIS", Widget.BEFORE, wi);
cwi = new WidgetItem(t, "Process", Widget.CHILD, wi);
wi.onMouseOver = wi_onmouseover;
cwi.hover = "Plot, manipulate and process XY data from Ansys LS-DYNA";
 
// Alternatively, create WidgetItem without parent and add
let d3plot_wi   = new WidgetItem(null, "D3PLOT");
t.AddWidgetItem(d3plot_wi, Widget.BEFORE, wi);
cwi = new WidgetItem(null, "Visualise");
t.AddWidgetItem(cwi, Widget.CHILD, d3plot_wi);
d3plot_wi.onMouseOver = wi_onmouseover;
cwi.hover = " In-depth 3D visualisation of Ansys LS-DYNA results";

// Expand root node
env_wi.expanded = true;

// Link popup to tree widget
t.popupWindow = pw;

// Assign callbacks
t.onClick = click_tree;
t.onPopup = do_popup;

// Show the widget and start event loop
w.Show();

////////////////////////////////////////////////////////////////////////////////

function do_popup()
{
    pw_l1.text = this.currentItem.text;

    if (this.currentItem.selected) pw_l2.text = "Selected";
    else                           pw_l2.text = "Not selected";

    if (this.currentItem.Parent())
        pw_l3.text = "Parent: " + this.currentItem.Parent().text;
    else
        pw_l3.text = "No parent";

    if (this.currentItem.FirstChild())
        pw_l4.text = "First child: " + this.currentItem.FirstChild().text;
    else
        pw_l4.text = "No children";

    if (this.currentItem.PreviousSibling())
        pw_l5.text = "Previous: " + this.currentItem.PreviousSibling().text;
    else
        pw_l5.text = "No previous";

    if (this.currentItem.NextSibling())
        pw_l6.text = "Next: " + this.currentItem.NextSibling().text;
    else
        pw_l6.text = "No next";
}

////////////////////////////////////////////////////////////////////////////////

function click_tree()
{
    Message("Clicked on "+this.currentItem.text+" in tree");
}

////////////////////////////////////////////////////////////////////////////////

function wi_onmouseover()
{
    Message("Called onMouseOver for WidgetItem "+this.text+" in tree");
}
```

Graphics (lines, circles, rectangles etc) can be drawn on [Widget.LABEL](primer-widget-class.md#Widget.LABEL)
and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. If these methods are used the
resolution of the widget is 100 units in x and y and the origin is at the top left of the widget.
See the documentation below and the [WidgetItem](primer-widgetitem-class.md) and
[Window](primer-window-class.md) classes for more details.

| Constructor
new Widget(window*[[Window](primer-window-class.md) or [PopupWindow](primer-popupwindow-class.md)]*, type*[constant]*, left*[integer]*, right*[integer]*, top*[integer]*, bottom*[integer]*, text (optional)*[string]*)

Description<br>Create a new [Widget](primer-widget-class.md) object. |
| --- |

#### Arguments

* window ([Window](primer-window-class.md) or [PopupWindow](primer-popupwindow-class.md))
 
[Window](primer-window-class.md) or [PopupWindow](primer-popupwindow-class.md) that widget will be created in

* type (constant)
 
Widget type. Can be [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON), [Widget.CHECKBOX](primer-widget-class.md#Widget.CHECKBOX), [Widget.COMBOBOX](primer-widget-class.md#Widget.COMBOBOX), [Widget.LABEL](primer-widget-class.md#Widget.LABEL), [Widget.LISTBOX](primer-widget-class.md#Widget.LISTBOX), [Widget.RADIOBUTTON](primer-widget-class.md#Widget.RADIOBUTTON), [Widget.SLIDER](primer-widget-class.md#Widget.SLIDER), [Widget.TEXTBOX](primer-widget-class.md#Widget.TEXTBOX) or [Widget.TREE](primer-widget-class.md#Widget.TREE)

* left (integer)
 
left coordinate of widget

* right (integer)
 
right coordinate of widget

* top (integer)
 
top coordinate of widget

* bottom (integer)
 
bottom coordinate of widget

* text (optional) (string)
 
Text to show on widget (optional for LABEL, BUTTON, TEXTBOX and TREE, not required for CHECKBOX, COMBOBOX, LISTBOX, RADIOBUTTON and SLIDER). For a TREE widget the text will be used as a [macroTag](primer-widget-class.md#macroTag).

| Returns
<br>[Widget](primer-widget-class.md) object<br>
Return type
<br>Widget |
| --- |

|  |
| --- |

| Details of functions 
AddWidgetItem(item*[[WidgetItem](primer-widgetitem-class.md)]*, position (optional)*[integer]*)

Description<br>Adds a [WidgetItem](primer-widgetitem-class.md) to a [ComboBox](primer-widget-class.md#Widget.COMBOBOX) [ListBox](primer-widget-class.md#Widget.LISTBOX) or [Radiobutton](primer-widget-class.md#Widget.RADIOBUTTON) [Widget](primer-widget-class.md). Also see [Widget.RemoveAllWidgetItems](primer-widget-class.md#Widget::RemoveAllWidgetItems) and [Widget.RemoveWidgetItem](primer-widget-class.md#Widget::RemoveWidgetItem). |
| --- |

#### Arguments

* item ([WidgetItem](primer-widgetitem-class.md))
 
[WidgetItem](primer-widgetitem-class.md) to add

* position (optional) (integer)
 
Position on [Widget](primer-widget-class.md) to add the [WidgetItem](primer-widgetitem-class.md). Any existing [WidgetItems](primer-widgetitem-class.md) will be shifted down as required. If omitted the [WidgetItem](primer-widgetitem-class.md) will be added to the end of the existing ones. **Note that positions start at 0**.

| Returns
<br>No return value |
| --- |

| Example
<br>To add WidgetItem wi to widget w:<br>
```
w.AddWidgetItem(wi);
```
 |
| --- |

* * *

| AddWidgetItem(item*[[WidgetItem](primer-widgetitem-class.md)]*, relationship*[constant]*, relitem*[[WidgetItem](primer-widgetitem-class.md)]*)

Description<br>Adds a [WidgetItem](primer-widgetitem-class.md) to a [Tree](primer-widget-class.md#Widget.TREE) [Widget](primer-widget-class.md). Also see [Widget.RemoveAllWidgetItems](primer-widget-class.md#Widget::RemoveAllWidgetItems) and [Widget.RemoveWidgetItem](primer-widget-class.md#Widget::RemoveWidgetItem). |
| --- |

#### Arguments

* item ([WidgetItem](primer-widgetitem-class.md))
 
[WidgetItem](primer-widgetitem-class.md) to add

* relationship (constant)
 
What relationship (relative to relitem) to use when adding item to the [Widget](primer-widget-class.md). Can be:
 [Widget.BEFORE](primer-widget-class.md#Widget.BEFORE),
 [Widget.AFTER](primer-widget-class.md#Widget.AFTER) or
 [Widget.CHILD](primer-widget-class.md#Widget.CHILD).

* relitem ([WidgetItem](primer-widgetitem-class.md))
 
Existing [WidgetItem](primer-widgetitem-class.md) to add item relative to. If relationship is [Widget.CHILD](primer-widget-class.md#Widget.CHILD) then relitem can be null and then the WidgetItem will be added to the root node of the tree.

| Returns
<br>No return value |
| --- |

| Example
<br>To add WidgetItem wi to tree widget w after existing WidgetItem ewi:<br>
```
w.AddWidgetItem(wi, Widget.AFTER, ewi);
```
<br>To add WidgetItem wi to tree widget w as a child of existing WidgetItem ewi:<br>
```
w.AddWidgetItem(wi, Widget.CHILD, ewi);
```
 |
| --- |

* * *

| Circle(colour*[constant]*, fill*[boolean]*, xc*[integer]*, yc*[integer]*, radius*[integer]*)

Description<br>Draws a circle on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. The coordinates are local to the Widget, not the Window. See properties [xResolution](primer-widget-class.md#xResolution) and [yResolution](primer-widget-class.md#yResolution) for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call [Show()](primer-widget-class.md#Widget::Show). |
| --- |

#### Arguments

* colour (constant)
 
Colour of circle. See [foreground](primer-widget-class.md#foreground) for colours.

* fill (boolean)
 
If circle should be filled or not.

* xc (integer)
 
x coordinate of centre of circle.

* yc (integer)
 
y coordinate of centre of circle.

* radius (integer)
 
radius of circle.

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a red filled circle, radius 25, at (50, 50) on widget w:<br>
```
w.Circle(Widget.RED, true, 50, 50, 25);
```
 |
| --- |

* * *

| Clear()

Description<br>Clears any graphics on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call [Show()](primer-widget-class.md#Widget::Show). |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To clear any graphics for widget w:<br>
```
w.Clear();
```
 |
| --- |

* * *

| ClearSelection()

Description<br>Clears selection of any [WidgetItems](primer-widgetitem-class.md) on the widget. Only possible for [Widget.COMBOBOX](primer-widget-class.md#Widget.COMBOBOX), [Widget.LISTBOX](primer-widget-class.md#Widget.LISTBOX), [Widget.RADIOBUTTON](primer-widget-class.md#Widget.RADIOBUTTON) and [Widget.TREE](primer-widget-class.md#Widget.TREE) widgets. |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To clear selection of any WidgetItems for widget w:<br>
```
w.ClearSelection();
```
 |
| --- |

* * *

| Cross(colour (optional)*[constant]*)

Description<br>Draws a cross symbol on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. |
| --- |

#### Arguments

* colour (optional) (constant)
 
Colour of cross symbol. See [foreground](primer-widget-class.md#foreground) for colours. If omitted, current foreground colour is used.

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a red cross symbol on widget w:<br>
```
w.Cross(Widget.RED);
```
 |
| --- |

* * *

| CtrlPressed() [static]
Description<br>Check to see if the Ctrl key is pressed |
| --- |

#### Arguments

No arguments

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To test if someone has the Ctrl key pressed:<br>
```
if (Widget.CtrlPressed()) { ... }
```
 |
| --- |

* * *

| Delete()

Description<br>Deletes the widget from PRIMER (removing it from the window it is defined in) and returns any memory/resources used for the widget. This function should not normally need to be called. However, sometimes a script may want to recreate widgets in a window many times and unless the old widgets are deleted PRIMER will reach the maximum number of widgets for a window ([Options.max_widgets](primer-options-class.md#max_widgets)). To avoid this problem this method can be used to force PRIMER to delete and return the resources for a widget. **Do not use the Widget object after calling this method**. |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To delete widget w:<br>
```
w.Delete();
```
 |
| --- |

* * *

| DirectoryIcon(line\_colour*[constant]*, fill\_colour*[constant]*)

Description<br>Draws a directory icon on the widget. Only possible for [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. |
| --- |

#### Arguments

* line\_colour (constant)
 
Colour of lines of folder (only used in the old UI - in the new UI it will be ignored, a standard icon is always used). See [foreground](primer-widget-class.md#foreground) for colours.

* fill\_colour (constant)
 
Colour of fill of folder (only used in the old UI - in the new UI it will be ignored, a standard icon is always used). See [foreground](primer-widget-class.md#foreground) for colours.

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a directory icon on widget btn:<br>
```
btn.DirectoryIcon(Widget.BLACK, Widget.YELLOW);
```
 |
| --- |

* * *

| DumpImageString(filename*[string]*, format (optional)*[constant]*)

Description<br>Dumps a string representation of an image for a widget to a file in a form that can be used by [Widget.ReadImageString()](primer-widget-class.md#Widget::ReadImageString). Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. |
| --- |

#### Arguments

* filename (string)
 
Filename to dump string representation to

* format (optional) (constant)
 
Can be [Widget.RGB8](primer-widget-class.md#Widget.RGB8) or [Widget.RGB24](primer-widget-class.md#Widget.RGB24). Before version 15 PRIMER only used 8 bits to store RGB (red, green and blue) colour information for widget images. In version 15 widget images have been changed to use 24 bits to store RGB information (8 bits for red, 8 bits for green and 8 bits for blue). Both formats are supported. If omitted the new [Widget.RGB24](primer-widget-class.md#Widget.RGB24) format will be used. See [Widget.ReadImageString()](primer-widget-class.md#Widget::ReadImageString) for more details.

| Returns
<br>no return value |
| --- |

| Example
<br>To dump the image data to file 'image\_data' for widget w with the old 8 bit RGB representation:<br>
```
w.DumpImageString('image_data', Widget.RGB8);
```
<br>To dump the image data to file 'image\_data' for widget w with 24 bit RGB representation:<br>
```
w.DumpImageString('image_data', Widget.RGB24);
```
 |
| --- |

* * *

| Hide()

Description<br>Hides the widget on the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To hide widget *w*<br>
```
w.Hide();
```
 |
| --- |

* * *

| ItemAt(index*[integer]*)

Description<br>Returns the [WidgetItem](primer-widgetitem-class.md) object used at *index* in this Widget. See also [Widget.TotalItems()](primer-widget-class.md#Widget::TotalItems) and [Widget.WidgetItems()](primer-widget-class.md#Widget::WidgetItems). Note that for [tree](primer-widget-class.md#Widget.TREE) [Widgets](primer-widget-class.md) the items will not be returned in the order that they are displayed in, they will be returned in the order they were added to the tree. |
| --- |

#### Arguments

* index (integer)
 
index to return [WidgetItem](primer-widgetitem-class.md) for. **Note that indices start at 0**.

| Returns
<br>[WidgetItem](primer-widgetitem-class.md) object.<br>
Return type
<br>WidgetItem |
| --- |

| Example
<br>To loop over the WidgetItems used in Widget *w*<br>
```
for (i=0; i<w.TotalItems(); i++)
{
    wi = w.ItemAt(i);
}
```
 |
| --- |

* * *

| Line(colour*[constant]*, x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)

Description<br>Draws a line on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. The coordinates are local to the Widget, not the Window. See properties [xResolution](primer-widget-class.md#xResolution) and [yResolution](primer-widget-class.md#yResolution) for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call [Show()](primer-widget-class.md#Widget::Show). |
| --- |

#### Arguments

* colour (constant)
 
Colour of line. See [foreground](primer-widget-class.md#foreground) for colours.

* x1 (integer)
 
x coordinate of start of line.

* y1 (integer)
 
y coordinate of start of line.

* x2 (integer)
 
x coordinate of end of line.

* y2 (integer)
 
y coordinate of end of line.

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a red line from (10, 90) to (90, 10) on widget w:<br>
```
w.Line(Widget.RED, 10, 90, 90, 10);
```
 |
| --- |

* * *

| MoveWidgetItem(item*[[WidgetItem](primer-widgetitem-class.md)]*, relationship*[constant]*, relitem*[[WidgetItem](primer-widgetitem-class.md) or null]*)

Description<br>Moves an existing [WidgetItem](primer-widgetitem-class.md) in a [tree](primer-widget-class.md#Widget.TREE) [Widget](primer-widget-class.md). Also see [Widget.RemoveAllWidgetItems](primer-widget-class.md#Widget::RemoveAllWidgetItems) and [Widget.RemoveWidgetItem](primer-widget-class.md#Widget::RemoveWidgetItem). |
| --- |

#### Arguments

* item ([WidgetItem](primer-widgetitem-class.md))
 
[WidgetItem](primer-widgetitem-class.md) to move

* relationship (constant)
 
What relationship (relative to relitem) to use when moving item to the [Widget](primer-widget-class.md). Can be:
 [Widget.BEFORE](primer-widget-class.md#Widget.BEFORE),
 [Widget.AFTER](primer-widget-class.md#Widget.AFTER) or
 [Widget.AFTER](primer-widget-class.md#Widget.CHILD).

* relitem ([WidgetItem](primer-widgetitem-class.md) or null)
 
Existing [WidgetItem](primer-widgetitem-class.md) to move item relative to. If relationship is [Widget.CHILD](primer-widget-class.md#Widget.CHILD) then relitem can be null and then the WidgetItem will be moved to the root node of the tree.

| Returns
<br>No return value |
| --- |

| Example
<br>To move WidgetItem wi in tree widget w after existing WidgetItem ewi:<br>
```
w.MoveWidgetItem(wi, Widget.AFTER, ewi);
```
<br>To move WidgetItem wi in tree widget w as a child of existing WidgetItem ewi:<br>
```
w.MoveWidgetItem(wi, Widget.CHILD, ewi);
```
 |
| --- |

* * *

| PixelsPerUnit() [static]
Description<br>Returns the number of pixels per unit coordinate. This will vary depending on the monitor PRIMER is running on. |
| --- |

#### Arguments

No arguments

| Returns
<br>pixels/unit (real)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return how many pixels there are per unit coordinate:<br>
```
var ppu = Widget.PixelsPerUnit();
```
 |
| --- |

* * *

| Polygon(colour*[constant]*, fill*[boolean]*, points*[array]*)

Description<br>Draws a polygon on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. The coordinates are local to the Widget, not the Window. See properties [xResolution](primer-widget-class.md#xResolution) and [yResolution](primer-widget-class.md#yResolution) for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call [Show()](primer-widget-class.md#Widget::Show). The number of points (x, y pairs) is limited to 500. Any extra points will be ignored. |
| --- |

#### Arguments

* colour (constant)
 
Colour of polygon. See [foreground](primer-widget-class.md#foreground) for colours.

* fill (boolean)
 
If polygon should be filled or not.

* points (array)
 
Array of point coordinates

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a red filled triangle with corners (20, 20) and (50, 80) and (80, 20) on widget w:<br>
```
var a = new Array(20, 20, 50, 80, 80, 20);
w.Polygon(Widget.RED, true, a);
```
 |
| --- |

* * *

| Polygon(colour*[constant]*, fill*[boolean]*, x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*, ... xn*[integer]*, ... yn*[integer]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Draws a polygon on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. The coordinates are local to the Widget, not the Window. See properties [xResolution](primer-widget-class.md#xResolution) and [yResolution](primer-widget-class.md#yResolution) for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call [Show()](primer-widget-class.md#Widget::Show). The number of points (x, y pairs) is limited to 500. Any extra points will be ignored. |
| --- |

#### Arguments

* colour (constant)
 
Colour of polygon. See [foreground](primer-widget-class.md#foreground) for colours.

* fill (boolean)
 
If polygon should be filled or not.

* x1 (integer)
 
x coordinate of point 1.

* y1 (integer)
 
y coordinate of point 1.

* x2 (integer)
 
x coordinate of point 2.

* y2 (integer)
 
y coordinate of point 2.

* ... xn (integer)
 
x coordinate of point n.

* ... yn (integer)
 
y coordinate of point n.

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a red filled triangle with corners (20, 20) and (50, 80) and (80, 20) on widget w:<br>
```
w.Polygon(Widget.RED, true, 20, 20, 50, 80, 80, 20);
```
 |
| --- |

* * *

| ReadImageFile(filename*[string]*, justify (optional)*[constant]*, transparent (optional)*[colour value (integer)]*, tolerance (optional)*[integer]*)

Description<br>Reads an image from a file to show on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets.<br>The image will be shown on the widget underneath any text. Note that due to the<br>way that colours are used for menus in PRIMER only a small number of colours are<br>available for Widget images. Black and white images will display without any issues<br>but colour images will be displayed with a reduced set of colours. |
| --- |

#### Arguments

* filename (string)
 
Image file (BMP, GIF, JPEG or PNG) to read. To remove an image use null.

* justify (optional) (constant)
 
Widget justification. Can be a bitwise or of [Widget.LEFT](primer-widget-class.md#Widget.LEFT), [Widget.RIGHT](primer-widget-class.md#Widget.RIGHT) or [Widget.CENTRE](primer-widget-class.md#Widget.CENTRE) and [Widget.TOP](primer-widget-class.md#Widget.TOP), [Widget.MIDDLE](primer-widget-class.md#Widget.MIDDLE) or [Widget.BOTTOM](primer-widget-class.md#Widget.BOTTOM).
Additionally [Widget.SCALE](primer-widget-class.md#Widget.SCALE) can be used to scale the image (either reducing or enlarging it) so that it fills the widget.
If omitted the default is Widget.CENTRE|Widget.MIDDLE without scaling.

* transparent (optional) (colour value (integer))
 
Transparent colour. Must be a colour returned by [Colour.RGB()](primer-colour-class.md#Colour::RGB) in PRIMER. If given then this colour will be replaced by a transparent colour. i.e. the widget background colour will be shown. If omitted or null no transparency will be used.

* tolerance (optional) (integer)
 
Tolerance for transparent colour (0-255).
 Any pixels in the image that have a red, green and blue colour value within *tolerance* of the transparent colour will be transparent.
 For example if the transparent colour was given as Colour.RGB(255, 0, 0) and *tolerance* is 0 only pixels which have red value 255 **and** green value 0 **and** blue value 0 will be made transparent.
 If *tolerance* is 4, pixels which have red values between 251 and 255 **and** green values between 0 and 4 **and** blue values between 0 and 4 will be made transparent.
 If omitted a value of 8 will be used.

| Returns
<br>no return value |
| --- |

| Example
<br>To read image example.png for widget w and place it at the top left:<br>
```
w.ReadImageFile("example.png", Widget.TOP|Widget.LEFT);
```
<br>To read image example.png for widget w and place it at the top left, scaling it to fit the widget:<br>
```
w.ReadImageFile("example.png", Widget.TOP|Widget.LEFT|Widget.SCALE);
```
<br>To read image example.png for widget w and place it at the top left, replacing red with a transparent colour:<br>
```
w.ReadImageFile("example.png", Widget.TOP|Widget.LEFT, Colour.RGB(255, 0, 0));
```
<br>To remove an image from widget w:<br>
```
w.ReadImageFile(null);
```
 |
| --- |

* * *

| ReadImageString(string*[string]*, justify (optional)*[constant]*, transparent (optional)*[colour value (integer)]*, tolerance (optional)*[integer]*)

Description<br>Reads an image from a JavaScript string previously created by [Widget.DumpImageString()](primer-widget-class.md#Widget::DumpImageString) to show on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets.<br>The image will be shown on the widget underneath any text.<br><br>Note, prior to version 15 of PRIMER only a small number of colours were available for Widget images.<br>In version 14 and earlier the RGB (red, green and blue) information for each pixel in the image was packed into<br>a single byte (8 bits) with 3 bits for red, 3 for green and 2 for blue. [Widget.DumpImageString()](primer-widget-class.md#Widget::DumpImageString) always<br>returned the string beginning with "RRRGGGBB\_RLE" which is this 8 bit format with run length encoding.<br>This is format [Widget.RGB8](primer-widget-class.md#Widget.RGB8).<br> In version 15 support for Widget images was enhanced to give 24bit support for colours. The RGB information for each pixel has 8 bits for red, 8 bits for green and 8 bits for blue. This is format [Widget.RGB24](primer-widget-class.md#Widget.RGB24).<br> From version 15 [Widget.DumpImageString()](primer-widget-class.md#Widget::DumpImageString) can either return the the old 8 bit format [Widget.RGB8](primer-widget-class.md#Widget.RGB8) (string beginning with "RRRGGGBB\_RLE")<br>or return the the new 24bit format [Widget.RGB24](primer-widget-class.md#Widget.RGB24) (string beginning with "RGB24\_Z").<br><br>ReadImageString supports both formats. |
| --- |

#### Arguments

* string (string)
 
String containing the image data previously created by [Widget.DumpImageString()](primer-widget-class.md#Widget::DumpImageString). To remove an image use null.

* justify (optional) (constant)
 
Widget justification. Can be a bitwise or of [Widget.LEFT](primer-widget-class.md#Widget.LEFT), [Widget.RIGHT](primer-widget-class.md#Widget.RIGHT) or [Widget.CENTRE](primer-widget-class.md#Widget.CENTRE) and [Widget.TOP](primer-widget-class.md#Widget.TOP), [Widget.MIDDLE](primer-widget-class.md#Widget.MIDDLE) or [Widget.BOTTOM](primer-widget-class.md#Widget.BOTTOM).
Additionally [Widget.SCALE](primer-widget-class.md#Widget.SCALE) can be used to scale the image (either reducing or enlarging it) so that it fills the widget.
If omitted the default is Widget.CENTRE|Widget.MIDDLE without scaling.

* transparent (optional) (colour value (integer))
 
Transparent colour. Must be a colour returned by [Colour.RGB()](primer-colour-class.md#Colour::RGB) in PRIMER. If given then this colour will be replaced by a transparent colour. i.e. the widget background colour will be shown. If omitted or null no transparency will be used.

* tolerance (optional) (integer)
 
Tolerance for transparent colour (0-255). Only used for the new 24bit format [Widget.RGB24](primer-widget-class.md#Widget.RGB24) (strings beginning with "RGB24\_Z"). Ignored for the old 8 bit format [Widget.RGB8](primer-widget-class.md#Widget.RGB8) (strings beginning with "RRRGGGBB\_RLE").
 Any pixels in the image that have a red, green and blue colour value within *tolerance* of the transparent colour will be transparent.
 For example if the transparent colour was given as Colour.RGB(255, 0, 0) and *tolerance* is 0 only pixels which have red value 255 **and** green value 0 **and** blue value 0 will be made transparent.
 If *tolerance* is 4, pixels which have red values between 251 and 255 **and** green values between 0 and 4 **and** blue values between 0 and 4 will be made transparent.
 If omitted a value of 8 will be used.

| Returns
<br>no return value |
| --- |

| Example
<br>To read image data from string s for widget w and place it at the top left:<br>
```
w.ReadImageString(s, Widget.TOP|Widget.LEFT);
```
<br>To read image data from string s for widget w and place it at the top left, scaling it to fit the widget:<br>
```
w.ReadImageString(s, Widget.TOP|Widget.LEFT|Widget.SCALE);
```
<br>To read image data from string s for widget w and place it at the top left, replacing red with a transparent colour:<br>
```
w.ReadImageString(s, Widget.TOP|Widget.LEFT, Colour.RGB(255, 0, 0));
```
<br>To remove an image from widget w:<br>
```
w.ReadImageString(null);
```
 |
| --- |

* * *

| Rectangle(colour*[constant]*, fill*[boolean]*, x1*[integer]*, y1*[integer]*, x2*[integer]*, y2*[integer]*)

Description<br>Draws a rectangle on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. The coordinates are local to the Widget, not the Window. See properties [xResolution](primer-widget-class.md#xResolution) and [yResolution](primer-widget-class.md#yResolution) for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call [Show()](primer-widget-class.md#Widget::Show). |
| --- |

#### Arguments

* colour (constant)
 
Colour of rectangle. See [foreground](primer-widget-class.md#foreground) for colours.

* fill (boolean)
 
If rectangle should be filled or not.

* x1 (integer)
 
x coordinate of first corner of rectangle.

* y1 (integer)
 
y coordinate of first corner of rectangle.

* x2 (integer)
 
x coordinate of second (opposite) corner of rectangle.

* y2 (integer)
 
y coordinate of second (opposite) corner of rectangle.

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a red filled rectangle with corners (20, 20) and (80, 80) on widget w:<br>
```
w.Rectangle(Widget.RED, true, 20, 20, 80, 80);
```
 |
| --- |

* * *

| RemoveAllWidgetItems()

Description<br>Removes any [WidgetItems](primer-widgetitem-class.md) from the [Widget](primer-widget-class.md). Also see [Widget.AddWidgetItem](primer-widget-class.md#Widget::AddWidgetItem) and [Widget.RemoveWidgetItem](primer-widget-class.md#Widget::RemoveWidgetItem). |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To remove all WidgetItems from widget w:<br>
```
w.RemoveAllWidgetItems();
```
 |
| --- |

* * *

| RemoveWidgetItem(item*[[WidgetItem](primer-widgetitem-class.md)]*)

Description<br>Removes a [WidgetItem](primer-widgetitem-class.md) from the [Widget](primer-widget-class.md). Also see [Widget.AddWidgetItem](primer-widget-class.md#Widget::AddWidgetItem) and [Widget.RemoveAllWidgetItems](primer-widget-class.md#Widget::RemoveAllWidgetItems). |
| --- |

#### Arguments

* item ([WidgetItem](primer-widgetitem-class.md))
 
[WidgetItem](primer-widgetitem-class.md) to remove

| Returns
<br>No return value |
| --- |

| Example
<br>To remove WidgetItem wi from widget w:<br>
```
w.RemoveWidgetItem(wi);
```
 |
| --- |

* * *

| Scroll(scroll*[constant or [WidgetItem](primer-widgetitem-class.md) object]*)

Description<br>Scrolls a tree or listbox widget |
| --- |

#### Arguments

* scroll (constant or [WidgetItem](primer-widgetitem-class.md) object)
 
How to scroll the tree/listbox widget. Can be: [Widget.SCROLL_TOP](primer-widget-class.md#Widget.SCROLL_TOP), [Widget.SCROLL_BOTTOM](primer-widget-class.md#Widget.SCROLL_BOTTOM), [Widget.SCROLL_UP](primer-widget-class.md#Widget.SCROLL_UP), [Widget.SCROLL_DOWN](primer-widget-class.md#Widget.SCROLL_DOWN), [Widget.SCROLL_PAGE_UP](primer-widget-class.md#Widget.SCROLL_PAGE_UP) or [Widget.SCROLL_PAGE_DOWN](primer-widget-class.md#Widget.SCROLL_PAGE_DOWN) in which case the tree/listbox widget will be scrolled by that value or a [WidgetItem](primer-widgetitem-class.md), in which case the tree/listbox will be scrolled to make the [WidgetItem](primer-widgetitem-class.md) visible, (expanding any branches as necessary to do so for the tree widget).

| Returns
<br>No return value |
| --- |

| Example
<br>To scroll tree widget w to the top:<br>
```
w.Scroll(Widget.SCROLL_TOP);
```
<br>To scroll listbox widget w so that WidgetItem wi is visible:<br>
```
w.Scroll(wi);
```
 |
| --- |

* * *

| ShiftPressed() [static]
Description<br>Check to see if the Shift key is pressed |
| --- |

#### Arguments

No arguments

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To test if someone has the Shift key pressed:<br>
```
if (Widget.ShiftPressed()) { ... }
```
 |
| --- |

* * *

| Show()

Description<br>Shows the widget on the screen |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To show widget w:<br>
```
w.Show();
```
 |
| --- |

* * *

| Static()

Description<br>[Windows](primer-window-class.md) have two different regions for [Widgets](primer-widget-class.md).<br>A 'normal' region which can be scrolled if required (if the window is made smaller scrollbars will be shown which can<br>be used to scroll the contents) and a 'static' region at the top of the<br>[Window](primer-window-class.md) which is fixed and does not scroll.<br>For an example of a static region in a [Window](primer-window-class.md) see any of<br>the keyword editing panels. The 'Dismiss', 'Create', 'Reset' etc buttons are in the static region.<br>By default [Widgets](primer-widget-class.md) are put into the normal region of the [Window](primer-window-class.md).<br>This method puts the [Widget](primer-widget-class.md) to the static region of the [Window](primer-window-class.md). |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To put widget w in the static part of the window:<br>
```
w.Static();
```
 |
| --- |

* * *

| StringLength(text*[string]*, monospace (optional)*[boolean]*, fontSize (optional)*[integer]*) [static]
Description<br>Returns the length of a string in Widget units. This can be used to find what size a Widget must be to be able to display the string. |
| --- |

#### Arguments

* text (string)
 
Text to find the width of

* monospace (optional) (boolean)
 
If true then width will be calculated using a monospace font. If false (default) then the normal proportional width font will be used

* fontSize (optional) (integer)
 
Calculation can be based on a defined font size, at the moment support is added only for font sizes of 6, 7, 8, 10, 12, 14, 18 and 24.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the width of string 'Example':<br>
```
var len = Widget.StringLength('Example');
```
 |
| --- |

* * *

| Tick(colour (optional)*[constant]*)

Description<br>Draws a tick symbol on the widget. Only possible for [Widget.LABEL](primer-widget-class.md#Widget.LABEL) and [Widget.BUTTON](primer-widget-class.md#Widget.BUTTON) widgets. |
| --- |

#### Arguments

* colour (optional) (constant)
 
Colour of tick symbol. See [foreground](primer-widget-class.md#foreground) for colours. If omitted, current foreground colour is used.

| Returns
<br>no return value |
| --- |

| Example
<br>To draw a red tick symbol on widget w:<br>
```
w.Tick(Widget.RED);
```
 |
| --- |

* * *

| TotalItems()

Description<br>Returns the number of the [WidgetItem](primer-widgetitem-class.md) objects used in this Widget (or 0 if none used). See also [Widget.ItemAt()](primer-widget-class.md#Widget::ItemAt) and<br>[Widget.WidgetItems()](primer-widget-class.md#Widget::WidgetItems). |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the total number of WidgetItems used for Widget *w*<br>
```
var total = w.TotalItems();
```
 |
| --- |

* * *

| WidgetItems()

Description<br>Returns an array of the [WidgetItem](primer-widgetitem-class.md) objects used in this Widget (or null if none used). See also [Widget.ItemAt()](primer-widget-class.md#Widget::ItemAt) and [Widget.TotalItems()](primer-widget-class.md#Widget::TotalItems). |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of WidgetItem objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To return WidgetItems used for Widget *w*<br>
```
var wi = w.WidgetItems();
```
 |
| --- |

* * *