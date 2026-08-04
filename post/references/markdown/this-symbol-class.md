# Symbol class

The Symbol class contains constants relating to curve symbols. [More...](this-symbol-class.md#Symbol_details)

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

## Symbol constants

| **Name** | **Description** |
| --- | --- |
| Symbol.CIRCLE | Circle symbol |
| Symbol.CROSS | Cross symbol |
| Symbol.DIAMOND | Diamond symbol |
| Symbol.DOT | Dot symbol |
| Symbol.HOURGLASS | Hourglass symbol |
| Symbol.NONE | No symbol |
| Symbol.SQUARE | Square symbol |
| Symbol.STAR | Star symbol |
| Symbol.TRIANGLE | Triangle symbol |

| Detailed Description<br>The Symbol class is used to define the symbol style used by curves: |
| --- |


```
p.symbol = Symbol.TRIANGLE;
```
