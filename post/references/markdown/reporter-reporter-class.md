# Reporter class

The Reporter class contains constants for use in REPORTER. [More...](reporter-reporter-class.md#Reporter_details)

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

## Reporter constants

| **Name** | **Description** |
| --- | --- |
| Reporter.CapFlat | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.CAP_FLAT](reporter-reporter-class.md#Reporter.CAP_FLAT) instead [deprecated] |
| Reporter.CapRound | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.CAP_ROUND](reporter-reporter-class.md#Reporter.CAP_ROUND) instead [deprecated] |
| Reporter.CapSquare | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.CAP_SQUARE](reporter-reporter-class.md#Reporter.CAP_SQUARE) instead [deprecated] |
| Reporter.JoinBevel | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JOIN_BEVEL](reporter-reporter-class.md#Reporter.JOIN_BEVEL) instead [deprecated] |
| Reporter.JoinMitre | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JOIN_MITRE](reporter-reporter-class.md#Reporter.JOIN_MITRE) instead [deprecated] |
| Reporter.JoinRound | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JOIN_ROUND](reporter-reporter-class.md#Reporter.JOIN_ROUND) instead [deprecated] |
| Reporter.JustifyBottom | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JUSTIFY_BOTTOM](reporter-reporter-class.md#Reporter.JUSTIFY_BOTTOM) instead [deprecated] |
| Reporter.JustifyCentre | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JUSTIFY_CENTRE](reporter-reporter-class.md#Reporter.JUSTIFY_CENTRE) instead [deprecated] |
| Reporter.JustifyLeft | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JUSTIFY_LEFT](reporter-reporter-class.md#Reporter.JUSTIFY_LEFT) instead [deprecated] |
| Reporter.JustifyMiddle | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JUSTIFY_MIDDLE](reporter-reporter-class.md#Reporter.JUSTIFY_MIDDLE) instead [deprecated] |
| Reporter.JustifyRight | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JUSTIFY_RIGHT](reporter-reporter-class.md#Reporter.JUSTIFY_RIGHT) instead [deprecated] |
| Reporter.JustifyTop | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.JUSTIFY_TOP](reporter-reporter-class.md#Reporter.JUSTIFY_TOP) instead [deprecated] |
| Reporter.LineDash | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.LINE_DASH](reporter-reporter-class.md#Reporter.LINE_DASH) instead [deprecated] |
| Reporter.LineDashDot | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.LINE_DASH_DOT](reporter-reporter-class.md#Reporter.LINE_DASH_DOT) instead [deprecated] |
| Reporter.LineDashDotDot | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.LINE_DASH_DOT_DOT](reporter-reporter-class.md#Reporter.LINE_DASH_DOT_DOT) instead [deprecated] |
| Reporter.LineDot | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.LINE_DOT](reporter-reporter-class.md#Reporter.LINE_DOT) instead [deprecated] |
| Reporter.LineNone | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.LINE_NONE](reporter-reporter-class.md#Reporter.LINE_NONE) instead [deprecated] |
| Reporter.LineSolid | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.LINE_SOLID](reporter-reporter-class.md#Reporter.LINE_SOLID) instead [deprecated] |
| Reporter.TextBold | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.TEXT_BOLD](reporter-reporter-class.md#Reporter.TEXT_BOLD) instead [deprecated] |
| Reporter.TextItalic | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.TEXT_ITALIC](reporter-reporter-class.md#Reporter.TEXT_ITALIC) instead [deprecated] |
| Reporter.TextNormal | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.TEXT_NORMAL](reporter-reporter-class.md#Reporter.TEXT_NORMAL) instead [deprecated] |
| Reporter.TextUnderline | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.TEXT_UNDERLINE](reporter-reporter-class.md#Reporter.TEXT_UNDERLINE) instead [deprecated] |
| Reporter.ViewDesign | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.VIEW_DESIGN](reporter-reporter-class.md#Reporter.VIEW_DESIGN) instead [deprecated] |
| Reporter.ViewPresentation | This constant is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Reporter.VIEW_PRESENTATION](reporter-reporter-class.md#Reporter.VIEW_PRESENTATION) instead [deprecated] |

### Constants for Autotable source and row types

| **Name** | **Description** |
| --- | --- |
| Reporter.AUTO\_TABLE\_DIRECTORY | Autotable data is generated from a directory. |
| Reporter.AUTO\_TABLE\_FILE | Autotable data is generated from a file. |
| Reporter.AUTO\_TABLE\_HEADER | Represents the header row in an Autotable. |
| Reporter.AUTO\_TABLE\_ROWS | Represents the rows with generated data in an Autotable. |

### Constants for Condition types

| **Name** | **Description** |
| --- | --- |
| Reporter.CONDITION\_BETWEEN | Treats the value as a number. True if value is between the two condition values |
| Reporter.CONDITION\_CONTAINS\_STRING | Treats the vlue as a string. True if the value contains the string |
| Reporter.CONDITION\_DOESNT\_CONTAIN\_STRING | Treats the vlue as a string. True if the value does not contain the string |
| Reporter.CONDITION\_DOESNT\_MATCH\_REGEX | Treats the value as a regular expression. True if the regular expression does not match |
| Reporter.CONDITION\_EQUAL\_TO | Treats the value as a string. True if the strings are equal |
| Reporter.CONDITION\_GREATER\_THAN | Treats the value as a number. True if value is greater than the condition value |
| Reporter.CONDITION\_LESS\_THAN | Treats the value as a number. True if value is less than the condition value |
| Reporter.CONDITION\_MATCHES\_REGEX | Treats the value as a regular expression. True if the regular expression matches |
| Reporter.CONDITION\_NOT\_BETWEEN | Treats the value as a number. True if value is between the two condition values |
| Reporter.CONDITION\_NOT\_EQUAL\_TO | Treats the value as a string. True if the strings are not equal |

### Constants for Justification

| **Name** | **Description** |
| --- | --- |
| Reporter.JUSTIFY\_BOTTOM | Bottom justification of text |
| Reporter.JUSTIFY\_CENTRE | Centre justification of text |
| Reporter.JUSTIFY\_LEFT | Left justification of text |
| Reporter.JUSTIFY\_MIDDLE | Middle justification of text |
| Reporter.JUSTIFY\_RIGHT | Right justification of text |
| Reporter.JUSTIFY\_TOP | Top justification of text |

### Constants for Line cap style

| **Name** | **Description** |
| --- | --- |
| Reporter.CAP\_FLAT | A square line ending at the end point of the line |
| Reporter.CAP\_ROUND | A rounded line ending |
| Reporter.CAP\_SQUARE | A square line that extends beyond the end point of the line by half the line width |

### Constants for Line join style

| **Name** | **Description** |
| --- | --- |
| Reporter.JOIN\_BEVEL | The triangular notch where the line segments meet is filled |
| Reporter.JOIN\_MITRE | The outer edges of the line segments are extended to meet at an angle and this is filled |
| Reporter.JOIN\_ROUND | A circular arc between the two line segments is filled |

### Constants for Line style

| **Name** | **Description** |
| --- | --- |
| Reporter.LINE\_DASH | A dashed line (dashes separated by a few pixels) |
| Reporter.LINE\_DASH\_DOT | A line drawn with alternate dashes and dots |
| Reporter.LINE\_DASH\_DOT\_DOT | A line drawn with one dash and two dots |
| Reporter.LINE\_DOT | A dotted line (dots separated by a few pixels) |
| Reporter.LINE\_NONE | Invisible line |
| Reporter.LINE\_SOLID | A simple continuous line |

### Constants for Text style

| **Name** | **Description** |
| --- | --- |
| Reporter.TEXT\_BOLD | Text drawn in a bold font |
| Reporter.TEXT\_ITALIC | Text drawn in an italic font |
| Reporter.TEXT\_NORMAL | Text drawn in a normal font |
| Reporter.TEXT\_UNDERLINE | Text drawn underlined |

### Constants for View

| **Name** | **Description** |
| --- | --- |
| Reporter.VIEW\_DESIGN | Show template in design view |
| Reporter.VIEW\_PRESENTATION | Show template in presentation view |

## Reporter properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| currentTemplate | Template | This property is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Template.GetCurrent()](reporter-template-class.md#Template::GetCurrent)
instead [deprecated] |
| templates | array | This property is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Template.GetAll()](reporter-template-class.md#Template::GetAll) instead [deprecated] |

| Detailed Description<br>The Reporter class allows you to access constants used in REPORTER. |
| --- |