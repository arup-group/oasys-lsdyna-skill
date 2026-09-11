# global class

The global class is the main JavaScript class. [More...](primer-global-class.md#global_details)

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

* [AllocateFlag](primer-global-class.md#global::AllocateFlag)()
* [BatchMode](primer-global-class.md#global::BatchMode)()
* [DialogueFunction](primer-global-class.md#global::DialogueFunction)(name*[function]*)
* [DialogueInput](primer-global-class.md#global::DialogueInput)(command*[string]*)
* [DialogueInputNoEcho](primer-global-class.md#global::DialogueInputNoEcho)(command*[string]*)
* [ErrorMessage](primer-global-class.md#global::ErrorMessage)(string*[Any valid javascript type]*)
* [Execute](primer-global-class.md#global::Execute)(data*[object]*)
* [Exit](primer-global-class.md#global::Exit)(write hook interrupt (optional)*[boolean]*)
* [FlagsAvailable](primer-global-class.md#global::FlagsAvailable)()
* [GetCurrentDirectory](primer-global-class.md#global::GetCurrentDirectory)()
* [GetInstallDirectory](primer-global-class.md#global::GetInstallDirectory)()
* [GetPreferenceValue](primer-global-class.md#global::GetPreferenceValue)(program*[string]*, name*[string]*)
* [GetStartInDirectory](primer-global-class.md#global::GetStartInDirectory)()
* [Getenv](primer-global-class.md#global::Getenv)(name*[string]*)
* [Labels](primer-global-class.md#global::Labels)(type*[string]*, state (optional)*[boolean]*)
* [MacroFunction](primer-global-class.md#global::MacroFunction)(name*[function]*)
* [Message](primer-global-class.md#global::Message)(string*[Any valid javascript type]*)
* [MilliSleep](primer-global-class.md#global::MilliSleep)(time*[integer]*)
* [NumberToString](primer-global-class.md#global::NumberToString)(number*[integer/real]*, width*[integer]*, pref\_int (optional)*[boolean]*)
* [OpenManual](primer-global-class.md#global::OpenManual)(program*[string]*, page*[string]*)
* [PlayMacro](primer-global-class.md#global::PlayMacro)(filename*[string]*, options (optional)*[object]*)
* [PlayMacro](primer-global-class.md#global::PlayMacro_deprecated)(filename*[string]*, pick (optional)*[boolean]*, view (optional)*[boolean]*, delay (optional)*[integer]*, variables (optional)*[object]*, terminate (optional)*[boolean]*) [deprecated]
* [Print](primer-global-class.md#global::Print)(string*[Any valid javascript type]*)
* [Println](primer-global-class.md#global::Println)(string*[Any valid javascript type]*)
* [Requires](primer-global-class.md#global::Requires)(build*[integer]*)
* [ReturnFlag](primer-global-class.md#global::ReturnFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [RunScript](primer-global-class.md#global::RunScript)(filename*[string]*, separate (optional)*[boolean]*)
* [SetCurrentDirectory](primer-global-class.md#global::SetCurrentDirectory)(directory path*[string]*)
* [SetPreferenceValue](primer-global-class.md#global::SetPreferenceValue)(program*[string]*, name*[string]*, value*[string]*, refresh (optional)*[boolean]*)
* [Sleep](primer-global-class.md#global::Sleep)(time*[integer]*)
* [System](primer-global-class.md#global::System)(string*[Any valid javascript type]*)
* [Unix](primer-global-class.md#global::Unix)()
* [Use](primer-global-class.md#global::Use)(filename*[string]*)
* [UuidCreate](primer-global-class.md#global::UuidCreate)()
* [Visibility](primer-global-class.md#global::Visibility)(type*[string]*, state (optional)*[boolean]*)
* [WarningMessage](primer-global-class.md#global::WarningMessage)(string*[Any valid javascript type]*)
* [Windows](primer-global-class.md#global::Windows)()

| Detailed Description<br>The global class declares the global object in JavaScript that contains the global properties and methods. As well as the core JavaScript methods, PRIMER also defines other additional ones. e.g. [Message()](primer-global-class.md#global::Message),<br>[Print()](primer-global-class.md#global::Print) etc. See the documentation below for more details. |
| --- |

| Details of functions 
AllocateFlag() [static]
Description<br>Allocate a flag for use in the script. See also [ReturnFlag()](primer-global-class.md#global::ReturnFlag) and [Model.PropagateFlag()](primer-model-class.md#Model::PropagateFlag).<br>Once allocated the flag is automatically cleared for all the models currently in PRIMER. |
| --- |

#### Arguments

No arguments

| Returns
<br>Flag<br>
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

| BatchMode() [static]
Description<br>Check if PRIMER is running in "batch mode" (i.e. menus are not active).<br>Menus will not be active if PRIMER is started with the -d=tty command line argument.<br>Note that this is different to starting PRIMER with the -batch command line argument. When using -batch,<br>the menu system is still running, but the main PRIMER window is not shown. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if in batch mode, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To test if PRIMER is in batch mode<br>
```
var batch_mode = BatchMode();
```
 |
| --- |

* * *

| DialogueFunction(name*[function]*) [static]
Description<br>Set the function for dialogue callback. This function can be used to make PRIMER return any dialogue messages that are printed. This may be useful for you to know if a particular dialogue message has been printed or a particular event has taken place.<br> The function will be called with 1 argument which is a string containing the dialogue message. To remove the dialogue function use DialogueFunction(null).<br> |
| --- |

#### Arguments

* name (function)
 
The name of the function (or null to remove the function)

| Returns
<br>No return value |
| --- |

| Example
<br>To set function MyDialogueFunction as the dialogue function:<br>
```
DialogueFunction(MyDialogueFunction);
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
<br>0: No errors/warnings.<br>&gt; 0: This number of errors occurred.<br>&lt; 0: Absolute number is the number of warnings that occurred.<br>
Return type
<br>Number |
| --- |

| Example
<br>To read two models:<br>
```
DialogueInput("/rea dk model_1.key 1", "/rea dk model_2.key 2");
```
<br>Note that each call to DialogueInput starts afresh at the top of the PRIMER command line "tree", so where multiple commands need to be given at sub-menu levels they need to be included in a single call. For example to restrain degrees of a mechanism assembly, and then move it by some amount:<br>
```
DialogueInput("/mech assy " + assy_number, "fix 123", "done", "point " + point_name, delta_x + " * *", "accept"); 
```
<br>NOT:<br>
```
DialogueInput("/mech assy " + assy_number); 
```
<br><br>
```
DialogueInput("fix 123");
```
<br>etc |
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
<br>0: No errors/warnings.<br>&gt; 0: This number of errors occurred.<br>&lt; 0: Absolute number is the number of warnings that occurred.<br>
Return type
<br>Number |
| --- |

| Example
<br>To read two models:<br>
```
DialogueInputNoEcho("/re dk model_1.key 1", "/re dk model_2.key 2");
```
<br>As with DialogueInput above each call starts at the top of the PRIMER command tree structure, so any commands destined for sub-menus must all be arguments to a single call. |
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
Description<br>Execute a program or script outside PRIMER and get the standard output and error streams. |
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

| FlagsAvailable() [static]
Description<br>Number of flags available to be used for [AllocateFlag()](primer-global-class.md#global::AllocateFlag) |
| --- |

#### Arguments

No arguments

| Returns
<br>Number of flags available<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the number of flags available:<br>
```
var flags = FlagsAvailable();
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
Description<br>Get the directory passed to PRIMER by the -start\_in command line argument |
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

| Labels(type*[string]*, state (optional)*[boolean]*) [static]
Description<br>Set or get labelling of items in PRIMER |
| --- |

#### Arguments

* type (string)
 
The type of the item (for a list of types see Appendix I of the PRIMER manual). Additionally, to change the visibility of attached or unattached nodes you can use the types "ATTACHED\_NODE" and "UNATTACHED\_NODE".

* state (optional) (boolean)
 
If it is provided it is used to set the labelling status of entity. "true" to make items labelled and "false" to make them not labelled.

| Returns
<br>Boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To turn on beam labels<br>
```
Labels("BEAM", true);
```
<br>To get the labelling status of beams<br>
```
var lab = Labels("BEAM");
```
 |
| --- |

* * *

| MacroFunction(name*[function]*) [static]
Description<br>Set the function for macro callback. This function can be used to make PRIMER return the macro command that would be recorded if macro recording was active for every button press etc. This may be useful for you to know if a particular action has been done by the user.<br> The function will be called with 1 argument which is a string containing the macro command. To remove the macro function use MacroFunction(null).<br> |
| --- |

#### Arguments

* name (function)
 
The name of the function (or null to remove a function)

| Returns
<br>No return value |
| --- |

| Example
<br>To set function MyMacroFunction as the macro function:<br>
```
MacroFunction(MyMacroFunction);
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
Description<br>Pause execution of the script for *time* milliseconds. See also [Sleep()](primer-global-class.md#global::Sleep) |
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

| PlayMacro(filename*[string]*, options (optional)*[object]*) [static]
Description<br>Play a macro in PRIMER |
| --- |

#### Arguments

* filename (string)
 
The name of the macro file to play

* options (optional) (object)

Options specifying how the macro file should be replayed. If omitted the default values below will be used. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| delay | integer | Delay in ms between commands when replaying. If omitted the current value from macro window will be used. |
| pick | boolean | If picks/drags from the macro file should be replayed. If omitted the current value from macro window will be used. |
| terminate | boolean | If the script should be terminated if an error occurs when playing the macro. If omitted the script will be terminated. |
| utf8 | boolean | If the script is UTF-8 encoded. If omitted or false the script is assumed to be ASCII text. |
| variables | object | Object containing names and values for variables in the macro. If null or omitted no variables are used. |
| view | boolean | If views encoded in the macro file for picks/drags should be replayed. If omitted the current value from macro window will be used. |

| Returns
<br>true if an error occured during playback, false otherwise.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To play a UTF-8 encoded macro file /data/test/example.prm using the default options for picking/dragging and a delay of 500ms:<br>
```
PlayMacro("/data/test/example.prm", { delay:500, utf8:true} );
```
<br>To play macro file /data/test/example.prm, defining values for variables A, B and C in the macro:<br>
```
PlayMacro("/data/test/example.prm", { variables: { A:10.0, B:0, C:"Example"} } );
```
 |
| --- |

* * *

| PlayMacro(filename*[string]*, pick (optional)*[boolean]*, view (optional)*[boolean]*, delay (optional)*[integer]*, variables (optional)*[object]*, terminate (optional)*[boolean]*) [static] [deprecated]
<br>This function is deprecated in version 15.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Play a macro in PRIMER |
| --- |

#### Arguments

* filename (string)
 
The name of the macro file to play

* pick (optional) (boolean)
 
If picks/drags from the macro file should be replayed. If omitted the current value from macro window will be used.

* view (optional) (boolean)
 
If views encoded in the macro file for picks/drags should be replayed. If omitted the current value from macro window will be used.

* delay (optional) (integer)
 
Delay in ms between commands when replaying. If omitted the current value from macro window will be used.

* variables (optional) (object)
 
Object containing names and values for variables in the macro. If null or omitted no variables are used.

* terminate (optional) (boolean)
 
If the script should be terminated if an error occurs when playing the macro. If omitted the script will be terminated.

| Returns
<br>true if an error occured during playback, false otherwise.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To play macro file /data/test/example.prm using the default options for picking/dragging and the default delay<br>
```
PlayMacro("/data/test/example.prm");
```
<br><br>To play macro file /data/test/example.prm, defining values for variables A, B and C in the macro<br>
```
var variables = new Object();
variables.A = 10.0;
variables.B = 0;
variables.C = "Example";
PlayMacro("/data/test/example.prm", true, true, 0, variables);
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

| Requires(build*[integer]*) [static]
Description<br>Checks to see if the build number of PRIMER is high enough to run this script. If your script requires features that are only present in builds of PRIMER greater than a certain value Require can test this and only run the script if the build is high enough. |
| --- |

#### Arguments

* build (integer)
 
The minimum build number that is required.

| Returns
<br>No return value (if the build is not high enough the script will terminate) |
| --- |

| Example
<br>To only allow a script to run if the build is &gt;= 2000<br>
```
Requires(2000);
```
 |
| --- |

* * *

| ReturnFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Return a flag used in the script. See also [AllocateFlag()](primer-global-class.md#global::AllocateFlag) and [Model.PropagateFlag()](primer-model-class.md#Model::PropagateFlag). |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
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

| RunScript(filename*[string]*, separate (optional)*[boolean]*) [static]
Description<br>Run a script. Note: RunScript is intended to run a 'child' script that will finish before the calling script finishes. Terminating the calling script while child scripts are still running may give undefined behaviour. |
| --- |

#### Arguments

* filename (string)
 
The name of the script file to run. If the filename is relative then the file will be searched for relative to this script. If not found then the script\_directory preference will be used.

* separate (optional) (boolean)
 
If the script will use separate memory from the current script. If it uses separate memory (true) then the 'child' script is completely separated from this script and knows nothing about variables in this script. If it does not use separate memory (false) then the 'child' script will have access to all of the variables in the current script and hence variables must not clash. It is strongly recommended that you use namespaces to stop variable names from clashing. If omitted the script will use separate memory.

| Returns
<br>No return value |
| --- |

| Example
<br>To run script /data/test/child.js using separate memory for the child script<br>
```
RunScript("/data/test/child.js");
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

| SetPreferenceValue(program*[string]*, name*[string]*, value*[string]*, refresh (optional)*[boolean]*) [static]
Description<br>Save the preference string and its value into oa\_pref of home directory. If the preference is locked in admin ("OA\_ADMIN") or install ("OA\_INSTALL") oa\_pref, then API is unsuccessful. Home directory is defined by environment variable OA\_HOME. If OA\_HOME is not defined then API is unsuccessful. |
| --- |

#### Arguments

* program (string)
 
The program name string : Valid values are 'All', 'D3PLOT', 'PRIMER', 'REPORTER', 'SHELL',
'T/HIS'

* name (string)
 
The preference name string

* value (string)
 
The preference value string. If "value" is of zero length, then the option is simply removed from the file if present, and no new entry is made.This argument cannot be null.

* refresh (optional) (boolean)
 
If the saved preference should be refreshed. If omitted, the preference will NOT be refreshed. This argument is currently only available in PRIMER JS API and ignored in D3PLOT and T/HIS.

| Returns
<br>An integer. Returns 0 if the preference is saved succesfully or 1 if unsuccessful<br>
Return type
<br>Number |
| --- |

| Example
<br>To save the preference value:<br>
```
var ierr = SetPreferenceValue( 'All', "font_size", 'Default');
```
 |
| --- |

* * *

| Sleep(time*[integer]*) [static]
Description<br>Pause execution of the script for *time* seconds. See also [MilliSleep()](primer-global-class.md#global::MilliSleep) |
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
Description<br>Do a system command outside PRIMER. To run an external command and get the output then please use<br>[Execute()](primer-global-class.md#global::Execute) instead. |
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
Description<br>Test whether script is running on a Unix/Linux operating system. See also [Windows()](primer-global-class.md#global::Windows) |
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

| Use(filename*[string]*) [static]
Description<br>Use script from a separate file |
| --- |

#### Arguments

* filename (string)
 
Use allows you to include a script from a separate file. This may be useful if your script is very large and you want to split it up to help with maintenance. Alternatively you may have a 'library' of common functions which you always want to include in your scripts. Including the 'library' with Use means that any changes only have to be done in one place. PRIMER will look for the file in the same directory as the main script. If that fails then it will look in $OA\_INSTALL/primer\_library/scripts directory and the script directory specified by the *primer\*script\_directory* preference.
 **Note that the file is included when the script is compiled, NOT at runtime**.

| Returns
<br>No return value |
| --- |

| Example
<br>To include script from file library.js<br>
```
Use("library.js");
```
 |
| --- |

* * *

| UuidCreate() [static]
Description<br>Create a UUID (Universally unique ID) |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To create a UUID:<br>
```
var uuid = UuidCreate();
```
 |
| --- |

* * *

| Visibility(type*[string]*, state (optional)*[boolean]*) [static]
Description<br>Set or get visibility of items in PRIMER |
| --- |

#### Arguments

* type (string)
 
The type of the item (for a list of types see Appendix I of the PRIMER manual). Additionally, to change the visibility of attached or unattached nodes you can use the types "ATTACHED\_NODE" and "UNATTACHED\_NODE".

* state (optional) (boolean)
 
If it is provided it is used to set the visibility. "true" to make items visible and "false" to make them not visible.

| Returns
<br>Boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To make beams visible<br>
```
Visibility("BEAM", true);
```
<br>To get the visibility status of beams<br>
```
var vis = Visibility("BEAM");
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
Description<br>Test whether script is running on a Windows operating system. See also [Unix()](primer-global-class.md#global::Unix) |
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