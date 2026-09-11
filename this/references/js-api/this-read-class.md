# Read class

The Read class allows the user to read CSV, Curve and other filetypes into T/HIS. [More...](this-read-class.md#Read_details)

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

* [Bulk](this-read-class.md#Read::Bulk)(Filename*[String]*, Options (optional)*[object]*)
* [CSV](this-read-class.md#Read::CSV)(Filename*[String]*, Options (optional)*[object]*)
* [CSV](this-read-class.md#Read::CSV_deprecated)(Filename*[String]*, CSV type (optional)*[integer]*, Row containing curve labels (optional)*[integer]*, Row containing axis labels (optional)*[integer]*, CSV separation option (optional)*[integer]*, X values column number (optional)*[integer]*, X axis start value (optional)*[real]*, X axis interval (optional)*[real]*) [deprecated]
* [Cur](this-read-class.md#Read::Cur)(Filename*[String]*, Options (optional)*[object]*)
* [DIAdem](this-read-class.md#Read::DIAdem)(Filename*[String]*, X-axis channel*[integer]*, Options (optional)*[object]*)
* [DIAdem](this-read-class.md#Read::DIAdem_deprecated)(Filename*[String]*, X-axis channel *[integer]*, X-axis start value (optional)*[real]*, X axis interval (optional)*[real]*, Show channel names (optional)*[real]*, Filter (optional)*[String]*) [deprecated]
* [Equation](this-read-class.md#Read::Equation)(Formula*[String]*, Options (optional)*[object]*)
* [Equation](this-read-class.md#Read::Equation_deprecated)(Formula*[String]*, X values option (optional)*[integer]*, X start (optional)*[real]*, X end (optional)*[real]*, X interval (optional)*[real]*) [deprecated]
* [ISO](this-read-class.md#Read::ISO)(Filename*[String]*, Options (optional)*[object]*)
* [ISO](this-read-class.md#Read::ISO_deprecated)(Filename*[String]*, File format (optional)*[integer]*, Label type (optional)*[integer]*) [deprecated]
* [Key](this-read-class.md#Read::Key)(Filename*[String]*, Options (optional)*[object]*)
* [LSPP](this-read-class.md#Read::LSPP)(Filename*[String]*, Options (optional)*[object]*)
* [LSPP](this-read-class.md#Read::LSPP_deprecated)(Filename*[String]*, File format (optional)*[integer]*) [deprecated]

## Read constants

| **Name** | **Description** |
| --- | --- |
| Read.CSV\_COMMA | CSV comma separator |
| Read.CSV\_SPACE | CSV space separator |
| Read.CSV\_TAB | CSV tab separator |
| Read.CSV\_XYXY | CSV format X,Y,X,Y |
| Read.CSV\_XYYY | CSV format X,Y,Y,Y |
| Read.DIADEM\_COMMENT | Diadem comment written to curve tag |
| Read.DIADEM\_NAME | Diadem channel name written to curve tag |
| Read.EQUATION\_CURVE\_VARS | Calculate x values from curve variables for equations |
| Read.EQUATION\_X\_OR\_CURVE | If there are no curve variables, use the X start, end and interval values for equation x values. Otherwise calculate x values from the curve variables. |
| Read.EQUATION\_X\_VALS | Use the X start, end and interval values for equation x values |
| Read.ISO\_CHANNEL\_CODE | Use the channel code for the ISO curve labels |
| Read.ISO\_CHANNEL\_LABEL | Use the channel label for the ISO curve labels |
| Read.ISO\_MULTIPLE\_CHANNELS | Multiple channels ISO file |
| Read.ISO\_SINGLE\_CHANNEL | Single channel ISO file |
| Read.LSPP\_CURVE\_FILE | LSPP curve file format |
| Read.LSPP\_XY\_PAIRS | LSPP XY pairs file format |

| Detailed Description<br>The Read class allows the user to read CSV, Curve and other filetypes into T/HIS. |
| --- |

| Details of functions 
Bulk(Filename*[String]*, Options (optional)*[object]*) [static]
Description<br>Reads a Bulk Data file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of Bulk Data file to read

* Options (optional) (object)

 Options which give you greater control of reading a Bulk file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| outputOpt (optional) | integer/string | Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. |

| Returns
<br>No return value |
| --- |

| Example
<br>To read a Bulk Data file named "example.bdf"<br>
```
 Read.Bulk("example.bdf");
```
<br><br>To read a Bulk Data file named "example.bdf" at the lowest free curve<br>
```
var options = new Object();
options.outputOpt = "#";
Read.Bulk("example.bdf",options);
```
 |
| --- |

* * *

| CSV(Filename*[String]*, Options (optional)*[object]*) [static]
Description<br>Reads a CSV file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of CSV file to read.

* Options (optional) (object)

 Options which give you greater control of reading a CSV file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| csvType (optional) | integer | CSV file type. Can be [Read.CSV_XYXY](this-read-class.md#Read.CSV_XYXY) or [Read.CSV_XYYY](this-read-class.md#Read.CSV_XYYY) |
| outputOpt (optional) | integer/string | Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. |
| rowAxisLabel (optional) | integer | Index of the row containing axis labels. This is row 2 by default, so should be set to 0 if no axis labels are present. |
| rowCurveLabel (optional) | integer | Index of the row containing curve labels. This is row 1 by default, so should be set to 0 if no curve labels are present. |
| separator (optional) | integer | Separator. Can be [Read.CSV_COMMA](this-read-class.md#Read.CSV_COMMA), [Read.CSV_SPACE](this-read-class.md#Read.CSV_SPACE) or [Read.CSV_TAB](this-read-class.md#Read.CSV_TAB) |
| xColIndex (optional) | integer | Index of the column containing X-values. This is column 1 by default. |
| xInterval (optional) | real | User defined X-interval between points, to use together with xStartVal |
| xStartVal (optional) | real | Instead of taking X-values from the CSV file, this allows the user to define a value for the start of the X-axis. |

| Returns
<br>No return value |
| --- |

| Example
<br>To read an XYYY CSV file with X-values in column 3, named "example.csv" starting at curve 5.<br>
```
var options = new Object();
options.csvType = Read.CSV_XYYY;
options.xColIndex = 3;
options.outputOpt = "#5";
Read.CSV("example.csv", options);
```
 |
| --- |

* * *

| CSV(Filename*[String]*, CSV type (optional)*[integer]*, Row containing curve labels (optional)*[integer]*, Row containing axis labels (optional)*[integer]*, CSV separation option (optional)*[integer]*, X values column number (optional)*[integer]*, X axis start value (optional)*[real]*, X axis interval (optional)*[real]*) [static] [deprecated]
<br>This function is deprecated in version 18.1. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Reads a CSV file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of CSV file to read.

* CSV type (optional) (integer)
 
CSV file type. Can be [Read.CSV_XYXY](this-read-class.md#Read.CSV_XYXY) or [Read.CSV_XYYY](this-read-class.md#Read.CSV_XYYY)

* Row containing curve labels (optional) (integer)
 
Index of the row containing curve labels. This is row 1 by default, so should be set to 0 if no curve labels are present.

* Row containing axis labels (optional) (integer)
 
Index of the row containing axis labels. This is row 2 by default, so should be set to 0 if no axis labels are present.

* CSV separation option (optional) (integer)
 
Separator. Can be [Read.CSV_COMMA](this-read-class.md#Read.CSV_COMMA), [Read.CSV_SPACE](this-read-class.md#Read.CSV_SPACE) or [Read.CSV_TAB](this-read-class.md#Read.CSV_TAB)

* X values column number (optional) (integer)
 
Index of the column containing X-values. This is column 1 by default.

* X axis start value (optional) (real)
 
Instead of taking X-values from the CSV file, this allows the user to define a value for the start of the X-axis.

* X axis interval (optional) (real)
 
User defined X-interval between points, to use together with the previous argument.

| Returns
<br>No return value |
| --- |

| Example
<br>To read an XYYY CSV file with X-values in column 3, named "example.csv"<br>
```
 Read.CSV("example.csv", Read.CSV_XYYY, 0, 0, Read.CSV_COMMA, 3);
```
 |
| --- |

* * *

| Cur(Filename*[String]*, Options (optional)*[object]*) [static]
Description<br>Reads a Curve file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of Curve file to read

* Options (optional) (object)

 Options which give you greater control of reading a Curve file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| outputOpt (optional) | integer/string | Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. |

| Returns
<br>No return value |
| --- |

| Example
<br>To read a Curve file named "example.cur"<br>
```
 Read.Cur("example.cur");
```
<br><br>To read a Curve file named "example.cur" at the curve ID 15<br>
```
var options = new Object();
options.outputOpt = 15;
Read.Cur("example.cur",options);
```
 |
| --- |

* * *

| DIAdem(Filename*[String]*, X-axis channel*[integer]*, Options (optional)*[object]*) [static]
Description<br>Reads a DIAdem file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of DIAdem header file to read.

* X-axis channel (integer)
 
Index of the channel to use as X-axis values. If this is 0 then the X-values can be generated from a start value and an interval in the following two arguments.

* Options (optional) (object)

 Options which give you greater control of reading the Diadem file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| filter (optional) | String | String to filter channel names/comments. Only channels whose names/comments contain the filter string will be read. |
| outputOpt (optional) | integer/string | Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. |
| showChannelName (optional) | real | Option to select what is written to the curve tag. Can be [Read.DIADEM_COMMENT](this-read-class.md#Read.DIADEM_COMMENT) or [Read.DIADEM_NAME](this-read-class.md#Read.DIADEM_NAME) |
| xAxisInterval (optional) | real | User defined interval between points on the X-axis, to use together with the previous argument. |
| xAxisStartVal (optional) | real | Instead of taking X-values from a DIAdem channel, this allows the user to define a value for the start of the X-axis. |

| Returns
<br>No return value |
| --- |

| Example
<br>To read DIAdem channels from "EXAMPLE.DAT", with channel comments filtered by "EXAMPLE" and X-values taken from channel 1, starting at curve 10 onwards sequentially:<br>
```
 var options = new Object();
options.filter = "EXAMPLE";
options.outputOpt = 10; 

Read.DIAdem("./files/DIAdem/EXAMPLE.DAT",1,options);
      
```
 |
| --- |

* * *

| DIAdem(Filename*[String]*, X-axis channel *[integer]*, X-axis start value (optional)*[real]*, X axis interval (optional)*[real]*, Show channel names (optional)*[real]*, Filter (optional)*[String]*) [static] [deprecated]
<br>This function is deprecated in version 18.1. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Reads a DIAdem file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of DIAdem header file to read.

* X-axis channel  (integer)
 
Index of the channel to use as X-axis values. If this is 0 then the X-values can be generated from a start value and an interval in the following two arguments.

* X-axis start value (optional) (real)
 
Instead of taking X-values from a DIAdem channel, this allows the user to define a value for the start of the X-axis.

* X axis interval (optional) (real)
 
User defined interval between points on the X-axis, to use together with the previous argument.

* Show channel names (optional) (real)
 
Option to select what is written to the curve tag. Can be [Read.DIADEM_COMMENT](this-read-class.md#Read.DIADEM_COMMENT) or [Read.DIADEM_NAME](this-read-class.md#Read.DIADEM_NAME)

* Filter (optional) (String)
 
String to filter channel names/comments. Only channels whose names/comments contain the filter string will be read.

| Returns
<br>No return value |
| --- |

| Example
<br>To read DIAdem channels from "EXAMPLE.DAT", with channel comments filtered by "EXAMPLE" and X-values taken from channel 1:<br>
```
 Read.DIAdem("EXAMPLE.DAT",1,0,0,Read.DIADEM_COMMENT,"EXAMPLE");
```
 |
| --- |

* * *

| Equation(Formula*[String]*, Options (optional)*[object]*) [static]
Description<br>Create a curve from a user-defined equation. |
| --- |

#### Arguments

* Formula (String)
 
Equation string.

* Options (optional) (object)

 Options which give you greater control of reading the Diadem file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| curveID (optional) | integer | Allows you to control which curve ID the file will begin to read into. By default, this will be set to the highest free curve by default if the option is not selected. |
| xEndVal (optional) | real | Right endpoint of the x range. Default 1.0. |
| xInterval (optional) | real | Interval between points. Default 0.01. |
| xStartVal (optional) | real | Left endpoint of the x range. Default 0.0. |
| xValOpt (optional) | integer | Option to select how x values are determined for the given equation. [Read.EQUATION_X_VALS](this-read-class.md#Read.EQUATION_X_VALS), requires the xStartVal, xEndVal and xInterval options to also be set however these default to 0, 1 and 0.01 respectively. [Read.EQUATION_CURVE_VARS](this-read-class.md#Read.EQUATION_CURVE_VARS) will calculate it's x values from the curve variables that are used in the equation. This is the default if curve variables are used and no xValOpt has been provided. [Read.EQUATION_X_OR_CURVE](this-read-class.md#Read.EQUATION_X_OR_CURVE) will use Rea.EQUATION\_X\_VALS if there are no curve variables in the equation otherwise Read.EQUATION\_CURVE\_VARS if there are. -ID to take x values from Curve #ID (e.g. -5 for curve ID 5) |

| Returns
<br>No return value |
| --- |

| Example
<br>To plot the line y = x^2+2 for x in [-1,1] and an interval between points of 0.02 and set this curve as ID 3:<br>
```
var options = new Object();
options.xStartVal = -1;
options.xEndVal = 1;
options.xInterval = 0.02;
options.xValOpt = Read.EQUATION_X_VALS;
options.curveID = 3;
Read.Equation("x^2+2",options);
```
 |
| --- |

* * *

| Equation(Formula*[String]*, X values option (optional)*[integer]*, X start (optional)*[real]*, X end (optional)*[real]*, X interval (optional)*[real]*) [static] [deprecated]
<br>This function is deprecated in version 18.1. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a curve from a user-defined equation. |
| --- |

#### Arguments

* Formula (String)
 
Equation string.

* X values option (optional) (integer)
 
Option to select what is written to the curve tag. Can be [Read.EQUATION_X_VALS](this-read-class.md#Read.EQUATION_X_VALS), [Read.EQUATION_CURVE_VARS](this-read-class.md#Read.EQUATION_CURVE_VARS), [Read.EQUATION_X_OR_CURVE](this-read-class.md#Read.EQUATION_X_OR_CURVE) or -ID to take x values from Curve #ID

* X start (optional) (real)
 
Left endpoint of the x range. Default 0.0.

* X end (optional) (real)
 
Right endpoint of the x range. Default 1.0.

* X interval (optional) (real)
 
Interval between points. Default 0.01.

| Returns
<br>No return value |
| --- |

| Example
<br>To plot the line y = x^2+2 for x in [-1,1] and an interval between points of 0.02:<br>
```
 Read.Equation("x^2+2",0,-1,1,0.02);
```
 |
| --- |

* * *

| ISO(Filename*[String]*, Options (optional)*[object]*) [static]
Description<br>Reads an ISO file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of ISO file to read

* Options (optional) (object)

 Options which give you greater control of reading an ISO file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fileFormat (optional) | integer | Format of ISO file. Can be [Read.MULTIPLE_CHANNELS](this-read-class.md#Read.ISO_MULTIPLE_CHANNELS), [Read.ISO_SINGLE_CHANNEL](this-read-class.md#Read.ISO_SINGLE_CHANNEL) |
| labelType (optional) | integer | Label type to use. Can be [Read.ISO_CHANNEL_LABEL](this-read-class.md#Read.ISO_CHANNEL_LABEL), [Read.ISO_CHANNEL_CODE](this-read-class.md#Read.ISO_CHANNEL_CODE) |
| outputOpt (optional) | integer/string | Allows you to control which curve ID the file will begin to read to. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. |

| Returns
<br>No return value |
| --- |

| Example
<br>To read a single channel ISO file named "example.001" to curve ID 7<br>
```
var options = new Object();
options.fileFormat = Read.ISO_SINGLE_CHANNEL;
options.outputOpt = 7;
Read.ISO("example.001", options);
```
 |
| --- |

* * *

| ISO(Filename*[String]*, File format (optional)*[integer]*, Label type (optional)*[integer]*) [static] [deprecated]
<br>This function is deprecated in version 18.1. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Reads an ISO file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of ISO file to read

* File format (optional) (integer)
 
Format of ISO file. Can be [Read.MULTIPLE_CHANNELS](this-read-class.md#Read.ISO_MULTIPLE_CHANNELS), [Read.ISO_SINGLE_CHANNEL](this-read-class.md#Read.ISO_SINGLE_CHANNEL)

* Label type (optional) (integer)
 
Label type to use. Can be [Read.ISO_CHANNEL_LABEL](this-read-class.md#Read.ISO_CHANNEL_LABEL), [Read.ISO_CHANNEL_CODE](this-read-class.md#Read.ISO_CHANNEL_CODE)

| Returns
<br>No return value |
| --- |

| Example
<br>To read a single channel ISO file named "example.001"<br>
```
 Read.ISO("example.001", Read.ISO_SINGLE_CHANNEL);
```
 |
| --- |

* * *

| Key(Filename*[String]*, Options (optional)*[object]*) [static]
Description<br>Reads a Keyword file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of Keyword file to read

* Options (optional) (object)

 Options which give you greater control of reading a Keyword file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| outputOpt (optional) | integer/string | Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. |

| Returns
<br>No return value |
| --- |

| Example
<br>To read a Keyword file named "example.key"<br>
```
 Read.Key("example.key");
```
<br><br>To read a Keyword file named "example.key" starting at curve 5 and sequentially incrementing if the file contains multiple curves.<br>
```
 var options = new Object();
options.outputOpt = 5;
Read.Key("example.key",options);
```
 |
| --- |

* * *

| LSPP(Filename*[String]*, Options (optional)*[object]*) [static]
Description<br>Reads an LS-PREPOST file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of LS-PREPOST file to read

* Options (optional) (object)

 Options which give you greater control of reading a Keyword file: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| fileFormat (optional) | integer | LSPP file format. Can be [Read.LSPP_CURVE_FILE](this-read-class.md#Read.LSPP_CURVE_FILE) or [Read.LSPP_XY_PAIRS](this-read-class.md#Read.LSPP_XY_PAIRS) |
| outputOpt (optional) | integer/string | Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. |

| Returns
<br>No return value |
| --- |

| Example
<br>To read an LS-PREPOST XY pairs file named "example.xy"<br>
```
var options = new Object();
options.fileFormat = Read.LSPP_XY_PAIRS;
Read.LSPP("example.xy", options);
```
 |
| --- |

* * *

| LSPP(Filename*[String]*, File format (optional)*[integer]*) [static] [deprecated]
<br>This function is deprecated in version 18.1. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Reads an LS-PREPOST file into T/HIS. |
| --- |

#### Arguments

* Filename (String)
 
Name of LS-PREPOST file to read

* File format (optional) (integer)
 
LSPP file format. Can be [Read.LSPP_CURVE_FILE](this-read-class.md#Read.LSPP_CURVE_FILE) or [Read.LSPP_XY_PAIRS](this-read-class.md#Read.LSPP_XY_PAIRS)

| Returns
<br>No return value |
| --- |

| Example
<br>To read an LS-PREPOST XY pairs file named "example.xy"<br>
```
 Read.LSPP("example.xy", Read.LSPP_XY_PAIRS);
```
 |
| --- |

* * *