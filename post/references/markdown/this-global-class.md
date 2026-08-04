# global class

The global class is the main JavaScript class. [More...](this-global-class.md#global_details)

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

* [AllocateFlag](this-global-class.md#global::AllocateFlag)()
* [ClearFlag](this-global-class.md#global::ClearFlag)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*)
* [DialogueInput](this-global-class.md#global::DialogueInput)(command*[string]*)
* [DialogueInputNoEcho](this-global-class.md#global::DialogueInputNoEcho)(command*[string]*)
* [DisableGraphWindowUpdates](this-global-class.md#global::DisableGraphWindowUpdates)()
* [DisableMenuUpdates](this-global-class.md#global::DisableMenuUpdates)()
* [EnableGraphWindowUpdates](this-global-class.md#global::EnableGraphWindowUpdates)()
* [EnableMenuUpdates](this-global-class.md#global::EnableMenuUpdates)()
* [ErrorMessage](this-global-class.md#global::ErrorMessage)(string*[Any valid javascript type]*)
* [Execute](this-global-class.md#global::Execute)(data*[object]*)
* [Exit](this-global-class.md#global::Exit)(write hook interrupt (optional)*[boolean]*)
* [GetCurrentDirectory](this-global-class.md#global::GetCurrentDirectory)()
* [GetFtcfVar](this-global-class.md#global::GetFtcfVar)(name*[string]*)
* [GetInstallDirectory](this-global-class.md#global::GetInstallDirectory)()
* [GetPreferenceValue](this-global-class.md#global::GetPreferenceValue)(program*[string]*, name*[string]*)
* [GetStartInDirectory](this-global-class.md#global::GetStartInDirectory)()
* [Getenv](this-global-class.md#global::Getenv)(name*[string]*)
* [Message](this-global-class.md#global::Message)(string*[Any valid javascript type]*)
* [MilliSleep](this-global-class.md#global::MilliSleep)(time*[integer]*)
* [NumberToString](this-global-class.md#global::NumberToString)(number*[integer/real]*, width*[integer]*, pref\_int (optional)*[boolean]*)
* [OpenManual](this-global-class.md#global::OpenManual)(program*[string]*, page*[string]*)
* [Plot](this-global-class.md#global::Plot)()
* [Print](this-global-class.md#global::Print)(string*[Any valid javascript type]*)
* [Println](this-global-class.md#global::Println)(string*[Any valid javascript type]*)
* [ReturnFlag](this-global-class.md#global::ReturnFlag)(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*)
* [SetCurrentDirectory](this-global-class.md#global::SetCurrentDirectory)(directory path*[string]*)
* [SetFtcfVar](this-global-class.md#global::SetFtcfVar)(name*[string]*)
* [Sleep](this-global-class.md#global::Sleep)(time*[integer]*)
* [System](this-global-class.md#global::System)(string*[Any valid javascript type]*)
* [Unix](this-global-class.md#global::Unix)()
* [UpdateCurveMenu](this-global-class.md#global::UpdateCurveMenu)()
* [WarningMessage](this-global-class.md#global::WarningMessage)(string*[Any valid javascript type]*)
* [Windows](this-global-class.md#global::Windows)()

| Detailed Description<br>The global class declares the global object in JavaScript that contains the global properties and methods. As well as the core JavaScript methods, T/HIS also defines other additional ones. e.g. [Message()](this-global-class.md#global::Message),<br>[Print()](this-global-class.md#global::Print) etc. See the documentation below for more details. |
| --- |

| Details of functions 
AllocateFlag() [static]
Description<br>Allocate a flag for use in the script. See also [ReturnFlag()](this-global-class.md#global::ReturnFlag) and<br>Once allocated the flag is automatically cleared for all entity types and all the curves currently in T/HIS. |
| --- |

#### Arguments

No arguments

| Returns
<br>Flag (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To allocate a flag<br>
```
var flag = AllocateFlag();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Clears a flag on all curves and entity types. |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag to return.

| Returns
<br>No return value. |
| --- |

| Example
<br>To clear flag f:<br>
```
ClearFlag(f);
```
 |
| --- |

* * *

| DialogueInput(command*[string]*) [static]
Description<br>Execute one or more lines of command line dialogue input. |
| --- |

#### Arguments

* command (string)
 
Command to execute (as if it had been typed into the dialogue box)
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value |
| --- |

| Example
<br>To mulitply curves 1 and 2 by 10:<br>
```
DialogueInput("/op mul #1 10 #", "/op mul #2 10 #");
```
<br>Note that each call to DialogueInput starts afresh at the top of the T/HIS command line "tree", so where multiple commands need to be given at sub-menu levels they need to be included in a single call. |
| --- |

* * *

| DialogueInputNoEcho(command*[string]*) [static]
Description<br>Execute one or more lines of command line dialogue input **with no echo of commands to dialogue box**. |
| --- |

#### Arguments

* command (string)
 
Command to execute (as if it had been typed into the dialogue box)
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value |
| --- |

| Example
<br>To mulitply curves 1 and 2 by 10:<br>
```
DialogueInputNoEcho("/op mul #1 10 #", "/op mul #2 10 #");
```
<br>As with DialogueInput above each call starts at the top of the T/HIS command tree structure, so any commands destined for sub-menus must all be arguments to a single call. |
| --- |

* * *

| DisableGraphWindowUpdates() [static]
Description<br>Disable Graph Window updates. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Turn off graph window updates<br>
```
DisableGraphWindowUpdates();
```
 |
| --- |

* * *

| DisableMenuUpdates() [static]
Description<br>Disable menu system updates. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Disable menu system updates<br>
```
DisableMenuUpdates();
```
 |
| --- |

* * *

| EnableGraphWindowUpdates() [static]
Description<br>Enable Graph Window updates. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Turn off graph window updates<br>
```
EnableGraphWindowUpdates()
```
 |
| --- |

* * *

| EnableMenuUpdates() [static]
Description<br>Enable menu system updates. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Enable menu system updates<br>
```
EnableMenuUpdates();
```
 |
| --- |

* * *

| ErrorMessage(string*[Any valid javascript type]*) [static]
Description<br>Print an error message to the dialogue box **adding a carriage return**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To print the title of model object m as an error to the dialogue box<br>
```
ErrorMessage("The title is " + m.title);
```
 |
| --- |

* * *

| Execute(data*[object]*) [static]
Description<br>Execute a program or script outside T/HIS and get the standard output and error streams. |
| --- |

#### Arguments

* data (object)

Execute data 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| arguments (optional) | Array of strings | The arguments to pass to program |
| program | string | The program you want to run. Note that on Linux this will consider PATH when resolving executable filenames without an absolute path. If you want to run something from the current directory and you do not have '.' in your PATH then you will need to write './something' as the program. |

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| status | integer | The exit code from the program/script |
| stderr | string | The standard error output from the program/script |
| stdout | string | The standard output from the program/script |

#### Return type

object

| Example
<br>To run script "example.bat" with arguments "foo" and "bar":<br>
```
var output = Execute( { program: 'example.bat', arguments: [ 'foo', 'bar' ]} );
var text   = output.stdout;
var errors = output.stderr;
var ecode  = output.status;
```
 |
| --- |

* * *

| Exit(write hook interrupt (optional)*[boolean]*) [static]
Description<br>Exit script |
| --- |

#### Arguments

* write hook interrupt (optional) (boolean)
 
If Exit() is called from a write\_hook.js script, the first argument will be processed as in the following: If the argument is provided and set to "true", it is used to interrupt the write out of the model, so that the script exits without anything being written out. An argument value of "false" exits the script and allows the model to be written out as normal. An example of this function's use in a Write Hook script can be found at $OA\_INSTALL/primer\_library/scripts/hooks/example\_write\_hook.js.

| Returns
<br>No return value |
| --- |

| Example
<br>Exit with<br>
```
Exit();
```
 |
| --- |

* * *

| GetCurrentDirectory() [static]
Description<br>Get the current working directory |
| --- |

#### Arguments

No arguments

| Returns
<br>String containing current working directory<br>
Return type
<br>String |
| --- |

| Example
<br>To get the current directory:<br>
```
var cwd = GetCurrentDirectory();
```
 |
| --- |

* * *

| GetFtcfVar(name*[string]*) [static]
Description<br>Get the value of a FAST-TCF variable |
| --- |

#### Arguments

* name (string)
 
The FAST-TCF variable name (case independent)

| Returns
<br>String containing variable value or null if variable does not exist<br>
Return type
<br>String |
| --- |

| Example
<br>To get the value for FAST-TCF variable Job<br>
```
var job_name = GetFtcfVar("Job");
```
 |
| --- |

* * *

| GetInstallDirectory() [static]
Description<br>Get the directory in which executables are installed. This is the OA\_INSTALL environment variable, or if that is not set the directory in which the current executable is installed. Returns NULL if not found |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get the install directory:<br>
```
var install_dir = GetInstallDirectory();
```
 |
| --- |

* * *

| GetPreferenceValue(program*[string]*, name*[string]*) [static]
Description<br>Get the Preference value with the given string in the any of admin ("OA\_ADMIN") or install ("OA\_INSTALL") or home ("OA\_HOME") directory oa\_pref |
| --- |

#### Arguments

* program (string)
 
The program name string : Valid values are 'All', 'D3PLOT', 'PRIMER', 'REPORTER', 'SHELL',
'T/HIS'

* name (string)
 
The preference name string

| Returns
<br>: String containing preference value or null if preference string is not present in any oa\_pref. Also if none of the above environment variables are not present, then API simply returns null. While returning preference value, locked preference value in admin and then install oa\_pref takes precedence over home oa\_pref. If preference is not locked in any of these oa\_pref, preference in home directory oa\_pref is returned.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the preference value:<br>
```
var pref_list = GetPreferenceValue('All', "font_size");
```
 |
| --- |

* * *

| GetStartInDirectory() [static]
Description<br>Get the directory passed to T/HIS by the -start\_in command line argument |
| --- |

#### Arguments

No arguments

| Returns
<br>String containing start\_in directory or NULL if not set<br>
Return type
<br>String |
| --- |

| Example
<br>To get the start\_in directory:<br>
```
var start_in = GetStartInDirectory();
```
 |
| --- |

* * *

| Getenv(name*[string]*) [static]
Description<br>Get the value of an environment variable |
| --- |

#### Arguments

* name (string)
 
The environment variable name

| Returns
<br>String containing variable value or null if variable does not exist<br>
Return type
<br>String |
| --- |

| Example
<br>To get the value for environment variable HOME<br>
```
var home = Getenv("HOME");
```
 |
| --- |

* * *

| Message(string*[Any valid javascript type]*) [static]
Description<br>Print a message to the dialogue box **adding a carriage return**.<br> |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to print. If '\r' is added to the end of the string then
instead of automatically adding a carriage return in the dialogue box, the next message will overwrite the current one. This may be useful for giving feedback to the dialogue box when doing an operation.

| Returns
<br>No return value |
| --- |

| Example
<br>To print the title of model object m as a message to the dialogue box<br>
```
Message("The title is " + m.title);
```
 |
| --- |

* * *

| MilliSleep(time*[integer]*) [static]
Description<br>Pause execution of the script for *time* milliseconds. See also [Sleep()](this-global-class.md#global::Sleep) |
| --- |

#### Arguments

* time (integer)
 
Number of milliseconds to pause for

| Returns
<br>No return value |
| --- |

| Example
<br>To pause for 500 milliseconds<br>
```
MilliSleep(500);
```
 |
| --- |

* * *

| NumberToString(number*[integer/real]*, width*[integer]*, pref\_int (optional)*[boolean]*) [static]
Description<br>Formats a number to a string with the specified width. |
| --- |

#### Arguments

* number (integer/real)
 
The number you want to format.

* width (integer)
 
The width of the string you want to format it to (must be less than 80).

* pref\_int (optional) (boolean)
 
By default only integer values inside the single precision 32 bit signed integer limit of approximately
+/-2e9 are formatted as integers, all other numeric values are formatted as floats. With this argument set to TRUE then
integer values up to the mantissa precision of a 64 bit float, approximately +/-9e15, will also be formatted as integers.

| Returns
<br>String containing the number<br>
Return type
<br>String |
| --- |

| Example
<br>To write the number 1.2345e+6 to a string 10 characters wide<br>
```
var str = NumberToString(1.2345e+6, 10);
```
 |
| --- |

* * *

| OpenManual(program*[string]*, page*[string]*) [static]
Description<br>Open the Oasys manuals at a requested page |
| --- |

#### Arguments

* program (string)
 
The program manual to open. Can be "primer", "d3plot" or "this"

* page (string)
 
The page to open in the manual, e.g. "running-this.html"

| Returns
<br>true if successful, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To open the T/HIS manual on the running-this.html page<br>
```
OpenManual("this", "running-this.html");
```
 |
| --- |

* * *

| Plot() [static]
Description<br>Updates all the T/HIS graphs. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Update all graphs<br>
```
Plot();
```
 |
| --- |

* * *

| Print(string*[Any valid javascript type]*) [static]
Description<br>Print a string to stdout. **Note that a carriage return is not added**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To print string "Hello, world!"<br>
```
Print("Hello, world!");
```
<br>To print the title of model object m with a carriage return<br>
```
print("The title is " + m.title + "\n");
```
 |
| --- |

* * *

| Println(string*[Any valid javascript type]*) [static]
Description<br>Print a string to stdout **adding a carriage return**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To print string "Hello, world!" automatically adding a carriage return<br>
```
Println("Hello, world!");
```
<br>To print the title of model object m, automatically adding a carriage return<br>
```
Println("The title is " + m.title);
```
 |
| --- |

* * *

| ReturnFlag(flag*[[Flag](this-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Return a flag used in the script. See also [AllocateFlag()](this-global-class.md#global::AllocateFlag) and |
| --- |

#### Arguments

* flag ([Flag](this-global-class.md#global::AllocateFlag))
 
The flag to return.

| Returns
<br>No return value. |
| --- |

| Example
<br>To return flag f:<br>
```
ReturnFlag(f);
```
 |
| --- |

* * *

| SetCurrentDirectory(directory path*[string]*) [static]
Description<br>Sets the current working directory. |
| --- |

#### Arguments

* directory path (string)
 
Path to the directory you would like to change into.

| Returns
<br>true if successful, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To change into the directory "/data/test" exists<br>
```
SetCurrentDirectory("/data/test")
```
 |
| --- |

* * *

| SetFtcfVar(name*[string]*) [static]
Description<br>Set the value of a FAST-TCF variable. If the variable already exists then it's value is updated |
| --- |

#### Arguments

* name (string)
 
The FAST-TCF variable name (case independent)

| Returns
<br>String containing variable value or null if variable does not exist<br>
Return type
<br>String |
| --- |

| Example
<br>To create a new FAST-TCF variable called run\_number with the value "10"<br>
```
var home = SetFtcfVar("run_number","10");
```
 |
| --- |

* * *

| Sleep(time*[integer]*) [static]
Description<br>Pause execution of the script for *time* seconds. See also [MilliSleep()](this-global-class.md#global::MilliSleep) |
| --- |

#### Arguments

* time (integer)
 
Number of seconds to pause for

| Returns
<br>No return value |
| --- |

| Example
<br>To pause for 2 seconds<br>
```
Sleep(2);
```
 |
| --- |

* * *

| System(string*[Any valid javascript type]*) [static]
Description<br>Do a system command outside T/HIS. To run an external command and get the output then please use<br>[Execute()](this-global-class.md#global::Execute) instead. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The system command that you want to do

| Returns
<br>integer (probably zero if command successful but is implementation-dependant)<br>
Return type
<br>Number |
| --- |

| Example
<br>To make the directory "example"<br>
```
System("mkdir example");
```
 |
| --- |

* * *

| Unix() [static]
Description<br>Test whether script is running on a Unix/Linux operating system. See also [Windows()](this-global-class.md#global::Windows) |
| --- |

#### Arguments

No arguments

| Returns
<br>true if Unix/Linux, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To test if the OS is Unix<br>
```
if ( Unix() )
```
 |
| --- |

* * *

| UpdateCurveMenu() [static]
Description<br>Updates the scroll bar in the Curve Manager. Useful if your script has created lots of new curves and you want to update the menu (otherwise, the scroll bar range will only be updated when the script exits). |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Update curve slider<br>
```
UpdateCurveMenu();
```
 |
| --- |

* * *

| WarningMessage(string*[Any valid javascript type]*) [static]
Description<br>Print a warning message to the dialogue box **adding a carriage return**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To print the title of model object m as a warning to the dialogue box<br>
```
WarningMessage("The title is " + m.title);
```
 |
| --- |

* * *

| Windows() [static]
Description<br>Test whether script is running on a Windows operating system. See also [Unix()](this-global-class.md#global::Unix) |
| --- |

#### Arguments

No arguments

| Returns
<br>true if Windows, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To test if the OS is Windows<br>
```
if ( Windows() )
```
 |
| --- |

* * *