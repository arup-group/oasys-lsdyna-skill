# Colour class

The Colour class gives access to colours in Reporter. [More...](reporter-colour-class.md#Colour_details)

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

## Class functions

* [Black](reporter-colour-class.md#Colour::Black)()
* [Blue](reporter-colour-class.md#Colour::Blue)()
* [Cyan](reporter-colour-class.md#Colour::Cyan)()
* [Green](reporter-colour-class.md#Colour::Green)()
* [Grey10](reporter-colour-class.md#Colour::Grey10)()
* [Grey20](reporter-colour-class.md#Colour::Grey20)()
* [Grey30](reporter-colour-class.md#Colour::Grey30)()
* [Grey40](reporter-colour-class.md#Colour::Grey40)()
* [Grey50](reporter-colour-class.md#Colour::Grey50)()
* [Grey60](reporter-colour-class.md#Colour::Grey60)()
* [Grey70](reporter-colour-class.md#Colour::Grey70)()
* [Grey80](reporter-colour-class.md#Colour::Grey80)()
* [Grey90](reporter-colour-class.md#Colour::Grey90)()
* [Magenta](reporter-colour-class.md#Colour::Magenta)()
* [None](reporter-colour-class.md#Colour::None)()
* [RGB](reporter-colour-class.md#Colour::RGB)(red*[integer]*, green*[integer]*, blue*[integer]*)
* [Red](reporter-colour-class.md#Colour::Red)()
* [White](reporter-colour-class.md#Colour::White)()
* [Yellow](reporter-colour-class.md#Colour::Yellow)()

## Colour properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| blue (read only) | integer | Colour blue component (0-255) |
| green (read only) | integer | Colour green component (0-255) |
| name (read only) | string | Colour name |
| red (read only) | integer | Colour red component (0-255) |

| Detailed Description<br>The Colour class is used to define colours, either by predefined colours or by RGB values.<br>The easiest way to set the colour of something is to use the predefined colour methods. e.g. to set the<br>text colour of item i to red: |
| --- |


```
i.textColour = Colour.Red();
```

For other colours use [Colour.RGB()](reporter-colour-class.md#Colour::RGB).

| Details of functions 
Black() [static]
Description<br>Creates a black colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to black:<br>
```
i.textColour = Colour.Black();
```
 |
| --- |

* * *

| Blue() [static]
Description<br>Creates a blue colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to blue:<br>
```
i.textColour = Colour.Blue();
```
 |
| --- |

* * *

| Cyan() [static]
Description<br>Creates a cyan colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to cyan:<br>
```
i.textColour = Colour.Cyan();
```
 |
| --- |

* * *

| Green() [static]
Description<br>Creates a green colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to green:<br>
```
i.textColour = Colour.Green();
```
 |
| --- |

* * *

| Grey10() [static]
Description<br>Creates a 10% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 10% grey:<br>
```
i.textColour = Colour.Grey10();
```
 |
| --- |

* * *

| Grey20() [static]
Description<br>Creates a 20% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 10% grey:<br>
```
i.textColour = Colour.Grey20();
```
 |
| --- |

* * *

| Grey30() [static]
Description<br>Creates a 30% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 30% grey:<br>
```
i.textColour = Colour.Grey30();
```
 |
| --- |

* * *

| Grey40() [static]
Description<br>Creates a 40% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 40% grey:<br>
```
i.textColour = Colour.Grey40();
```
 |
| --- |

* * *

| Grey50() [static]
Description<br>Creates a 50% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 50% grey:<br>
```
i.textColour = Colour.Grey50();
```
 |
| --- |

* * *

| Grey60() [static]
Description<br>Creates a 60% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 60% grey:<br>
```
i.textColour = Colour.Grey60();
```
 |
| --- |

* * *

| Grey70() [static]
Description<br>Creates a 70% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 70% grey:<br>
```
i.textColour = Colour.Grey70();
```
 |
| --- |

* * *

| Grey80() [static]
Description<br>Creates a 80% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 80% grey:<br>
```
i.textColour = Colour.Grey80();
```
 |
| --- |

* * *

| Grey90() [static]
Description<br>Creates a 90% grey colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to 90% grey:<br>
```
i.textColour = Colour.Grey90();
```
 |
| --- |

* * *

| Magenta() [static]
Description<br>Creates a magenta colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to magenta:<br>
```
i.textColour = Colour.Magenta();
```
 |
| --- |

* * *

| None() [static]
Description<br>No colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the fill colour of item i to no colour:<br>
```
i.fillColour = Colour.None();
```
 |
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
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to red:<br>
```
i.textColour = Colour.RGB(255, 0, 0);
```
 |
| --- |

* * *

| Red() [static]
Description<br>Creates a red colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to red:<br>
```
i.textColour = Colour.Red();
```
 |
| --- |

* * *

| White() [static]
Description<br>Creates a white colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to white:<br>
```
i.textColour = Colour.White();
```
 |
| --- |

* * *

| Yellow() [static]
Description<br>Creates a yellow colour |
| --- |

#### Arguments

No arguments

| Returns
<br>[Colour](reporter-colour-class.md) object<br>
Return type
<br>Colour |
| --- |

| Example
<br>To set the text colour of item i to yellow:<br>
```
i.textColour = Colour.Yellow();
```
 |
| --- |

* * *