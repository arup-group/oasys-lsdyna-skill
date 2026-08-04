# Options class

The Options class enables you to access several options in T/HIS. [More...](this-options-class.md#Options_details)

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

## Options class properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| auto\_confirm | logical | If true then T/HIS will automatically confirm (i.e. press the OK button) on (most) message boxes that are mapped. If false (default) then the message boxes will be shown and wait for the user to press a button. This option may be useful to help automate an operation where T/HIS would normally show a message box and wait for the user to press a button. |
| exception\_messages | logical | If true (default) error messages will be printed to the dialogue box/stdout when an exception occurs in the API. If false they will not be printed. This option may be useful if you are using try/catch to manage exceptions and you do not want any error messages to be printed. |

### Properties for ssh

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ssh\_buffer\_size | integer | The size of the buffer used (in kiloBytes) when transferring data to/from the remote machine in the [Ssh](this-ssh-class.md) class. Depending on your network and the size of the files you are transferring, changing this value may make file transfers quicker. The default value is 64(kB) but any value in the range 1(kB) to 1024(kB) is allowed. |

### Properties for widgets

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| max\_widgets | integer | The maximum number of [Widgets](this-widget-class.md) that can be made for one [Window](this-window-class.md). The default value is 1000 |
| max\_window\_lines | integer | The maximum number of lines that can be made for a [Window.Error()](this-window-class.md#Window::Error), [Window.Information()](this-window-class.md#Window::Information), [Window.Message()](this-window-class.md#Window::Message), [Window.Question()](this-window-class.md#Window::Question) or [Window.Warning()](this-window-class.md#Window::Warning) window. The default value is 25 |

| Detailed Description<br>The Options class is used to get/set options that T/HIS uses for certain functions.<br>The options are available as **class** properties. See the documentation for more details.<br>An example: Options.mass\_properties\_include\_attached\_mass\_deformable\_elems=true |
| --- |