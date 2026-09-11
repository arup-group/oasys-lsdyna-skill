# LineStyle class

The LineStyle class contains constants relating to the curve line style. [More...](this-linestyle-class.md#LineStyle_details)

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

## LineStyle constants

| **Name** | **Description** |
| --- | --- |
| LineStyle.DASH | Dashes lines |
| LineStyle.DASH2 | Dash pattern 2 |
| LineStyle.DASH3 | Dash pattern 3 |
| LineStyle.DASH4 | Dash pattern 4 |
| LineStyle.DASH5 | Dash pattern 5 |
| LineStyle.DASH6 | Dash pattern 6 |
| LineStyle.NONE | No line |
| LineStyle.SOLID | Solid lines |

| Detailed Description<br>The LineStyle class is used to define the line style used to draw curves: |
| --- |


```
p.style = LineStyle.SOLID;
```
