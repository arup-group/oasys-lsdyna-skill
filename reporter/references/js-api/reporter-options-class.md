# Options class

The Options class enables you to access several options in REPORTER. [More...](reporter-options-class.md#Options_details)

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

## Options constants

### Constants for Promises

| **Name** | **Description** |
| --- | --- |
| Options.RUN\_PROMISE\_CONSTRUCTOR | Allow/run promises when an API constructor is called |
| Options.RUN\_PROMISE\_METHOD | Allow/run promises when an API method is called |
| Options.RUN\_PROMISE\_PROPERTY | Allow/run promises when an API property getter/setter is done |
| Options.RUN\_PROMISE\_SCRIPT | Allow/run promises when a script is run |
| Options.RUN\_PROMISE\_WINDOW\_LOOP | Allow/run promises in a window event loop |

## Options class properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| run\_promises | constant | When any promise callbacks/handlers are allowed to run. Can be a bitwise OR of: [Options.RUN_PROMISE_WINDOW_LOOP](reporter-options-class.md#Options.RUN_PROMISE_WINDOW_LOOP), [Options.RUN_PROMISE_CONSTRUCTOR](reporter-options-class.md#Options.RUN_PROMISE_CONSTRUCTOR), [Options.RUN_PROMISE_METHOD](reporter-options-class.md#Options.RUN_PROMISE_METHOD) and [Options.RUN_PROMISE_PROPERTY](reporter-options-class.md#Options.RUN_PROMISE_PROPERTY) [Options.RUN_PROMISE_SCRIPT](reporter-options-class.md#Options.RUN_PROMISE_SCRIPT) The default is for all to be allowed. Promise handlers can also be run manually by using [Utils.CallPromiseHandlers()](reporter-utils-class.md#Utils::CallPromiseHandlers) |

| Detailed Description<br>The Options class is used to get/set options that REPORTER uses for certain functions.<br>The options are available as **class** properties. See the documentation for more details.<br>An example: Options.run\_promises = Options.RUN\_PROMISE\_WINDOW\_LOOP |
| --- |