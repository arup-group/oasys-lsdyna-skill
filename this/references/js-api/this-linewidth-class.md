# LineWidth class

The LineWidth class contains constants relating to the curve line width. [More...](this-linewidth-class.md#LineWidth_details)

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

## LineWidth constants

| **Name** | **Description** |
| --- | --- |
| LineWidth.BOLD | Bold lines (4 pixels wide) |
| LineWidth.FINE | Fine lines (1 pixel wide) |
| LineWidth.HEAVY | Heavy lines (8 pixels wide) |
| LineWidth.NORMAL | Normal lines (2 pixels wide) |
| LineWidth.W1 | 1 pixel wide |
| LineWidth.W10 | 10 pixel wide |
| LineWidth.W2 | 2 pixel wide |
| LineWidth.W3 | 3 pixel wide |
| LineWidth.W4 | 4 pixel wide |
| LineWidth.W5 | 5 pixel wide |
| LineWidth.W6 | 6 pixel wide |
| LineWidth.W7 | 7 pixel wide |
| LineWidth.W8 | 8 pixel wide |
| LineWidth.W9 | 9 pixel wide |

| Detailed Description<br>The LineWidth class is used to define the line width used to draw curves: |
| --- |


```
p.width = LineWidth.NORMAL;
```
