# Check class

The Check class enables you to access model checking in PRIMER. [More...](primer-check-class.md#Check_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
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

* [AddDashboardComment](primer-check-class.md#Check::AddDashboardComment)(comment*[string]*)
* [AddDashboardHealth](primer-check-class.md#Check::AddDashboardHealth)(model health*[String]*, Health text colour (optional)*[constant]*, Health button colour(optional)*[constant]*)
* [Error](primer-check-class.md#Check::Error)(message*[string]*, details (optional)*[string]*)
* [GetAllDashboards](primer-check-class.md#Check::GetAllDashboards)()
* [KeyoutHook](primer-check-class.md#Check::KeyoutHook)(interrupt flag*[boolean]*)
* [SetDashboardMessage](primer-check-class.md#Check::SetDashboardMessage)(first*[string]*, second (optional)*[string]*)
* [SetDashboardStatus](primer-check-class.md#Check::SetDashboardStatus)(status*[constant]*)
* [Warning](primer-check-class.md#Check::Warning)(message*[string]*, details (optional)*[string]*)

## Check constants

### Constants for Dashboard

| **Name** | **Description** |
| --- | --- |
| Check.ERROR | Dashboard check gave error(s) |
| Check.OK | Dashboard check status OK |
| Check.UNKNOWN | Dashboard check status unknown (not run) |
| Check.WARNING | Dashboard check gave warning(s) |

### Constants for dashboard health colour

| **Name** | **Description** |
| --- | --- |
| Check.BLACK | Colour black |
| Check.BLUE | Colour blue |
| Check.CYAN | Colour cyan |
| Check.DARKBLUE | Colour dark blue |
| Check.DARKGREEN | Colour dark green |
| Check.DARKGREY | Colour dark grey |
| Check.DARKRED | Colour dark red |
| Check.GREEN | Colour green |
| Check.GREY | Colour grey |
| Check.LIGHTGREY | Colour light grey |
| Check.MAGENTA | Colour magenta |
| Check.ORANGE | Colour orange |
| Check.RED | Colour red |
| Check.WHITE | Colour white |
| Check.YELLOW | Colour yellow |

| Detailed Description<br>The Check class is used add checks to PRIMER using JavaScript.<br>Two different types of checks can be added:<br><br><ul>
<li>Individual checks for each node, part, shell etc in a model.</li>
<li>Custom checks that can reference multiple entities for checking in a model</li>
</ul>PRIMER will look in 3 locations for additional JavaScript checks to run when doing checking:<ul>
<li>OA_ADMIN/primer_library/scripts/checks</li>
<li>OA_INSTALL/primer_library/scripts/checks</li>
<li>HOME/primer_library/scripts/checks</li>
</ul>
The directories OA\_INSTALL/primer\_library/scripts etc can be changed with the primer\*script\_dir preference.<br>
For individual checks PRIMER will look in these directories for a script with the name 'class\_name.js'.
For example if you wanted to write a script that will be run for every part in a model the script should
be called 'Part.js'.<br>
For custom checks PRIMER will look in these directories for a script called 'custom.js'.
This obviously means that there can only be one custom script in each directory. **These filenames are case sensitive**.<br>
Individual scripts will be called with 3 arguments:<br>
arguments[0] = Name of the script<br>
arguments[1] = model object<br>
arguments[2] = Item object<br>
Individual scripts can add warnings or errors by using the Warning() or Error() methods of the appropriate class.
For example for a [Part](primer-part-class.md)
the script can call the methods [Part.Error()](primer-part-class.md#Part::Error) and
[Part.Warning()](primer-part-class.md#Part::Warning). **The script should not call the Error() and Warning() methods of other classes**.<br>
As a simple example of an individual check, suppose you wanted it to be an error if any shell parts in your model did not use type 16 shells.
Add a script called 'Part.js' in the directory 'OA\_INSTALL/primer\_library/scripts/checks' (or one of the other directories) containing: |
| --- |


```
// arguments[0] is name of script
var m = arguments[1];	// arguments[1] is model pointer
var p = arguments[2];	// arguments[2] is part pointer

if (p.exists && p.secid)
{
    var s = Section.GetFromID(m, p.secid);
    if (s.exists && s.type == Section.SHELL && s.elform != 16)
        p.Error("Shell part elform not 16", "Fictional company policy is to use elform 16 for shell parts");
}

```

Custom scripts will be called with 2 arguments:

arguments[0] = Name of the script

arguments[1] = model object

Custom scripts can add warnings or errors by using the static [Check.Error()](primer-check-class.md#Check::Error) and
[Check.Warning()](primer-check-class.md#Check::Warning) methods. **The script should not call the Error() and Warning() methods of other classes**.

As a simple example of a custom check, suppose a dummy uses node 1000 for the H-point and this should be at coordinates (1000, -500, 100) within tolerance of 0.1
for an analysis . You do not want to run a check for every node in the model (i.e. an individual check). You just want to check that node
1000 is at the correct coordinates. To do this you could create a script called 'custom.js' in the directory 'OA\_INSTALL/primer\_library/scripts/checks' (or one of the other directories) containing:

```
// arguments[0] is name of script
var m = arguments[1];	// arguments[1] is model pointer

var n = Node.GetFromID(m, 1000);
if (!n)
    Check.Error("No H-point node", "Model does not contain node for dummy H-point");

if (!n.exists)
    Check.Error("H-point node not defined", "Dummy H-point node is referred to but not defined");

var dx = n.x - 1000;
var dy = n.y - (-500);
var dy = n.z - 100;
var d = Math.sqrt(dx*dx + dy*dy + dz*dz);
if (d > 0.1)
    Check.Error("H-point not at correct position", "Dummy H-point is "+d+"mm away from target position");

```

See the documentation below for more details.

| Details of functions 
AddDashboardComment(comment*[string]*) [static]
Description<br>Adds a comment for a user dashboard check. Multiple comments can be added. Call this function as many times as required. <br>This function should only be called from a user JavaScript dashboard script. |
| --- |

#### Arguments

* comment (string)
 
The comment to add.

| Returns
<br>No return value |
| --- |

| Example
<br>To add a comment:<br>
```
Check.AddDashboardComment("This is a comment");
```
 |
| --- |

* * *

| AddDashboardHealth(model health*[String]*, Health text colour (optional)*[constant]*, Health button colour(optional)*[constant]*) [static]
Description<br>Allows the user to add the value of model health based on the other dashboard results <br>This function should only be called from model\_health.config.js which should be placed with the other user defined dashboard scripts. |
| --- |

#### Arguments

* model health (String)
 
Text which will be displayed on the dashboard panel and the summary files.

* Health text colour (optional) (constant)
 
Colour of the model health text. The default colour is Black.

* Health button colour(optional) (constant)
 
Colour of the model health button. The default colour is dark grey.

| Returns
<br>No return value |
| --- |

| Example
<br>To add computed health as "Model Health 85.1%" and the text colour to red and the button colour to green<br>
```
Check.AddDashboardHealth("Model Health 85.1%",Check.RED,Check.GREEN);
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*) [static]
Description<br>Adds a custom error. This function should only be called from a custom JavaScript check script.<br>See the details in the [Check](primer-check-class.md) class for how to do this. |
| --- |

#### Arguments

* message (string)
 
The error message to give

* details (optional) (string)
 
An optional detailed error message

| Returns
<br>No return value |
| --- |

| Example
<br>To add an error message "My custom error":<br>
```
Check.Error('My custom error');
```
 |
| --- |

* * *

| GetAllDashboards() [static]
Description<br>Returns data from all the dashboards that are defined. <br>This function should only be called from model\_health.config.js which should be placed with the other user defined dashboard scripts. <br>The dashboard properties are:<br><ul> <li>result (Overall result of the dashboard)</li> <li>title (dashboard title)</li> <li>message1 (First message of the dashboard)</li> <li>message2 (Second message of the dashboard)</li> <li>comments (Array of comments on the dashboard)</li> </ul> |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of dashboard objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the status of all the dashboards:<br>
```
Check.GetAllDashboards();
```
<br>For more details on how to use this function, please take a look at the example script model\_health.config.js which is present in the dashboard scrips folder |
| --- |

* * *

| KeyoutHook(interrupt flag*[boolean]*) [static]
Description<br>Used to proceed with or abort the keyout operation (Ansys LS-DYNA output) from the keyout\_hook.js<br>script. The current hooks are launched just before the keyout operation from the model write tab, writing from the dialogue box and during keyout from the include tree.<br>Please look at the example\_keyout\_script.js for an example of its usage. |
| --- |

#### Arguments

* interrupt flag (boolean)
 
If this flag is set to true then keyout is aborted else keyout proceeds as usual.

| Returns
<br>No return value |
| --- |

| Example
<br>To abort a keyout, set the following line in keyout\_hook.js:<br>
```
Check.KeyoutHook(true);
```
 |
| --- |

* * *

| SetDashboardMessage(first*[string]*, second (optional)*[string]*) [static]
Description<br>Adds a message for a user dashboard check. Each dashboard can currently show two messages. <br>This function should only be called from a user JavaScript dashboard script. |
| --- |

#### Arguments

* first (string)
 
The first message to add.

* second (optional) (string)
 
The second message to add.

| Returns
<br>No return value |
| --- |

| Example
<br>To add the message with two lines:<br>
```
Check.SetDashboardMessage("This is a message", "shown on two lines");
```
<br>To add the message with one line:<br>
```
Check.SetDashboardMessage("This is a single message");
```
 |
| --- |

* * *

| SetDashboardStatus(status*[constant]*) [static]
Description<br>Sets the status of a user dashboard check. <br>This function should only be called from a user JavaScript dashboard script. |
| --- |

#### Arguments

* status (constant)
 
The status. Can be [Check.OK](primer-check-class.md#Check.OK), [Check.WARNING](primer-check-class.md#Check.WARNING), [Check.ERROR](primer-check-class.md#Check.ERROR) or [Check.UNKNOWN](primer-check-class.md#Check.UNKNOWN).

| Returns
<br>No return value |
| --- |

| Example
<br>To set the status to OK (green):<br>
```
Check.SetDashboardStatus(Check.OK);
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*) [static]
Description<br>Adds a custom warning. This function should only be called from a custom JavaScript check script.<br>See the details in the [Check](primer-check-class.md) class for how to do this. |
| --- |

#### Arguments

* message (string)
 
The warning message to give

* details (optional) (string)
 
An optional detailed warning message

| Returns
<br>No return value |
| --- |

| Example
<br>To add a warning message "My custom warning":<br>
```
Check.Warning('My custom warning');
```
 |
| --- |

* * *