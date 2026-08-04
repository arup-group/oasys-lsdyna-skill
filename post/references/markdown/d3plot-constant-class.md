# Constant class

The Constant class defines various constants. [More...](d3plot-constant-class.md#Constant_details)

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

## Constant constants

### Constants for Array indices

| **Name** | **Description** |
| --- | --- |
| Constant.X | Index in a vector/coordinate array containing the X component |
| Constant.XX | Index in a tensor array containing the XX component |
| Constant.XY | Index in a tensor array containing the XY component |
| Constant.Y | Index in a vector/coordinate array containing the Y component |
| Constant.YY | Index in a tensor array containing the YY component |
| Constant.YZ | Index in a tensor array containing the YZ component |
| Constant.Z | Index in a vector/coordinate array containing the Z component |
| Constant.ZX | Index in a tensor array containing the ZX component |
| Constant.ZZ | Index in a tensor array containing the ZZ component |

### Constants for Cut section action

| **Name** | **Description** |
| --- | --- |
| Constant.NORMAL | Positive or negative action Normal |
| Constant.OMIT | Positive or negative action Omit |
| Constant.OUTLINE | Positive or negative action Outline (wire drawing) |
| Constant.TRANSPARENT | Positive or negative action Transparent |

### Constants for Cut section combination

| **Name** | **Description** |
| --- | --- |
| Constant.INTERSECTION | Intersection mode for multiple cut directions |
| Constant.UNION | Union mode for multiple cut directions |

### Constants for Cut section definition

| **Name** | **Description** |
| --- | --- |
| Constant.CONST\_X | Constant X definition method |
| Constant.CONST\_Y | Constant Y definition method |
| Constant.CONST\_Z | Constant Z definition method |
| Constant.LS\_DYNA | Ansys LS-DYNA definition method |
| Constant.N3 | 3 nodes definition method |
| Constant.OR\_AND\_V | Origin and vectors definition method |

### Constants for Cut section space

| **Name** | **Description** |
| --- | --- |
| Constant.BASIC | Basic (eulerian) space |
| Constant.DEFORMED | Deformed (lagrangian) space |

### Constants for Dispose

| **Name** | **Description** |
| --- | --- |
| Constant.DELETE | Delete |
| Constant.LEAVE | Leave behind (eg don't delete) |

### Constants for Frame of Reference

| **Name** | **Description** |
| --- | --- |
| Constant.CYLINDRICAL | Cylindrical coordinate system |
| Constant.GLOBAL | Global coordinate system |
| Constant.LOCAL | Element local coordinate system |
| Constant.MATERIAL | Material axes coordinate system |
| Constant.USER\_DEFINED | User-defined coordinate system |

### Constants for General

| **Name** | **Description** |
| --- | --- |
| Constant.ALL | All of a category |
| Constant.GT | Greater than (&gt;) |
| Constant.GTEQ | Greater than or equals (&gt;=) |
| Constant.LT | Less than (&lt;) |
| Constant.LTEQ | Less than or equals (&lt;=) |
| Constant.MAX | Maximum value |
| Constant.MIN | Minimum value |
| Constant.OFF | Switch off |
| Constant.ON | Switch on |

### Constants for GetNumberOf

| **Name** | **Description** |
| --- | --- |
| Constant.CUT\_SECTION | Number of non-parallel cut plane directions |
| Constant.FAMILY | Number of families |
| Constant.INCLUDE | Number of includes |
| Constant.MODEL | Number of models |
| Constant.NEIPH | Number of "Extra" Solid variables |
| Constant.NEIPS | Number of "Extra" Shell variables |
| Constant.NEIPT | Number of "Extra" Thick Shell variables |
| Constant.NIP\_B | Number of Beam integration points |
| Constant.NIP\_H | Number of Solid integration points |
| Constant.NIP\_S | Number of Shell integration points |
| Constant.NIP\_T | Number of Thick Shell integration points |
| Constant.N\_ON\_PLAN | Number of on-plan integration points written |
| Constant.N\_UBMS | Number of user-defined beam scalar components |
| Constant.N\_UBMV | Number of user-defined beam vector components |
| Constant.N\_UNOS | Number of user-defined node scalar components |
| Constant.N\_UNOV | Number of user-defined node vector components |
| Constant.N\_USSS | Number of user-defined solid/shell scalar components |
| Constant.N\_USST | Number of user-defined solid/shell tensor components |
| Constant.STATE | Number of states |
| Constant.USER | Number of user-defined components |

### Constants for Phase Angle Results

| **Name** | **Description** |
| --- | --- |
| Constant.CURRENT\_VAL | Current value result |
| Constant.MAGNITUDE | Magnitude result |

### Constants for Surface

| **Name** | **Description** |
| --- | --- |
| Constant.BOTTOM | Bottom shell surface |
| Constant.MIDDLE | Middle shell surface |
| Constant.TOP | Top shell surface |

| Detailed Description<br>The Constant class gives you access to various constants that are used in the D3PLOT API. They are defined in the Constant class so the global namespace is not polluted.<br>See the documentation below for more details. |
| --- |