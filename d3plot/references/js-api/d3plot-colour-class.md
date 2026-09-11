# Colour class

The Colour class contains constants relating to colours. [More...](d3plot-colour-class.md#Colour_details)

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

* [GetFromName](d3plot-colour-class.md#Colour::GetFromName)(name*[string]*)
* [RGB](d3plot-colour-class.md#Colour::RGB)(red*[integer]*, green*[integer]*, blue*[integer]*)

## Colour constants

| **Name** | **Description** |
| --- | --- |
| Colour.BLACK | Colour black |
| Colour.BLUE | Colour blue |
| Colour.CYAN | Colour cyan |
| Colour.DARK\_ORANGE | Colour dark orange |
| Colour.DEFAULT | Default colour for objects |
| Colour.GREEN | Colour green |
| Colour.GREEN\_CYAN | Colour green/cyan |
| Colour.GREY | Colour grey |
| Colour.LIGHT\_BLUE | Colour light blue |
| Colour.MAGENTA | Colour magenta |
| Colour.MEDIUM\_BLUE | Colour medium blue |
| Colour.ORANGE | Colour orange |
| Colour.RED | Colour red |
| Colour.RED\_MAGENTA | Colour red/magenta |
| Colour.WHITE | Colour white |
| Colour.YELLOW | Colour yellow |
| Colour.YELLOW\_GREEN | Colour yellow/green |

| Detailed Description<br>The Colour class is used to define colours, either by predefined colours or by RGB values.<br>The easiest way to set the colour of something is to use the predefined colour constants. e.g. to set the<br>colour of part p to red: |
| --- |


```
p.colour = Colour.RED;
```

For other colours use [Colour.RGB()](d3plot-colour-class.md#Colour::RGB).

| Details of functions 
GetFromName(name*[string]*) [static]
Description<br>Returns the colour for a given core or user colour name |
| --- |

#### Arguments

* name (string)
 
The name of the colour, for example red or user\_green or green/cyan.

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

|  |
| --- |

* * *

| RGB(red*[integer]*, green*[integer]*, blue*[integer]*) [static]
Description<br>Creates a colour from red, green and blue components |
| --- |

#### Arguments

* red (integer)
 
red component of colour (0-255).

* green (integer)
 
green component of colour (0-255).

* blue (integer)
 
blue component of colour (0-255).

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

|  |
| --- |

* * *