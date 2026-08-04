# Colour class

The Colour class contains constants relating to colours. [More...](this-colour-class.md#Colour_details)

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

## Class functions

* [GetFromName](this-colour-class.md#Colour::GetFromName)(name*[string]*)
* [RGB](this-colour-class.md#Colour::RGB)(red*[integer]*, green*[integer]*, blue*[integer]*)

## Colour constants

| **Name** | **Description** |
| --- | --- |
| Colour.BACKGROUND | Background colour |
| Colour.BLACK | Colour black |
| Colour.BLUE | Colour blue |
| Colour.CYAN | Colour cyan |
| Colour.DARK\_GREEN | Colour dark green |
| Colour.DARK\_GREY | Colour dark grey |
| Colour.DARK\_MAGENTA | Colour dark magenta |
| Colour.FOREGROUND | Foreground colour |
| Colour.GOLD | Colour gold |
| Colour.GREEN | Colour green |
| Colour.HOT\_PINK | Colour hot pink |
| Colour.INDIGO | Colour indigo |
| Colour.LIGHT\_GREY | Colour light grey |
| Colour.LIGHT\_PINK | Colour light pink |
| Colour.LIME | Colour lime |
| Colour.MAGENTA | Colour magenta |
| Colour.MAROON | Colour maroon |
| Colour.MEDIUM\_BLUE | Colour medium blue |
| Colour.MEDIUM\_GREEN | Colour medium green |
| Colour.MEDIUM\_GREY | Colour medium grey |
| Colour.NAVY | Colour navy |
| Colour.OLIVE | Colour olive |
| Colour.ORANGE | Colour orange |
| Colour.PALE\_YELLOW | Colourpale yellow |
| Colour.PINK | Colour pink |
| Colour.PURPLE | Colour purple |
| Colour.RED | Colour red |
| Colour.SEA\_GREEN | Colour sea green |
| Colour.SKY | Colour sky |
| Colour.TURQUOISE | Colour turquoise |
| Colour.USER\_1 | Colour user defined 1 |
| Colour.USER\_2 | Colour user defined 2 |
| Colour.USER\_3 | Colour user defined 3 |
| Colour.USER\_4 | Colour user defined 4 |
| Colour.USER\_5 | Colour user defined 5 |
| Colour.USER\_6 | Colour user defined 6 |
| Colour.USER\_n (n = 1 to 150) | n-th user defined colour |
| Colour.WHITE | Colour white |
| Colour.YELLOW | Colour yellow |

| Detailed Description<br>The Colour class is used to define colours: |
| --- |


```
p.colour = Colour.RED;
```


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