# global class

The following pages list global class functions from PRIMER which can be used in D3PLOT.

Most of the D3PLOT functions are also in the global scope, but to make them easier to locate, they are presented in different categories (e.g. Contacts, CutSection, Data) in subsequent sections. They are also listed below in alphabetical order.

## Class functions

* [AllocateFlag](d3plot-global-class.md#global::AllocateFlag)()
* [DialogueInput](d3plot-global-class.md#global::DialogueInput)(command*[string]*)
* [DialogueInputNoEcho](d3plot-global-class.md#global::DialogueInputNoEcho)(command*[string]*)
* [ErrorMessage](d3plot-global-class.md#global::ErrorMessage)(string*[Any valid javascript type]*)
* [Execute](d3plot-global-class.md#global::Execute)(data*[object]*)
* [Exit](d3plot-global-class.md#global::Exit)(write hook interrupt (optional)*[boolean]*)
* [ExitTHisLink](d3plot-global-class.md#global::ExitTHisLink)()
* [GetCurrentDirectory](d3plot-global-class.md#global::GetCurrentDirectory)()
* [GetInstallDirectory](d3plot-global-class.md#global::GetInstallDirectory)()
* [GetPreferenceValue](d3plot-global-class.md#global::GetPreferenceValue)(program*[string]*, name*[string]*)
* [GetStartInDirectory](d3plot-global-class.md#global::GetStartInDirectory)()
* [Getenv](d3plot-global-class.md#global::Getenv)(name*[string]*)
* [Message](d3plot-global-class.md#global::Message)(string*[Any valid javascript type]*)
* [MilliSleep](d3plot-global-class.md#global::MilliSleep)(time*[integer]*)
* [NumberToString](d3plot-global-class.md#global::NumberToString)(number*[integer/real]*, width*[integer]*, pref\_int (optional)*[boolean]*)
* [OpenManual](d3plot-global-class.md#global::OpenManual)(program*[string]*, page*[string]*)
* [Print](d3plot-global-class.md#global::Print)(string*[Any valid javascript type]*)
* [Println](d3plot-global-class.md#global::Println)(string*[Any valid javascript type]*)
* [ReturnFlag](d3plot-global-class.md#global::ReturnFlag)(flag*[[Flag](d3plot-global-class.md#global::AllocateFlag)]*)
* [SetCurrentDirectory](d3plot-global-class.md#global::SetCurrentDirectory)(directory path*[string]*)
* [Sleep](d3plot-global-class.md#global::Sleep)(time*[integer]*)
* [StartTHisLink](d3plot-global-class.md#global::StartTHisLink)()
* [System](d3plot-global-class.md#global::System)(string*[Any valid javascript type]*)
* [Unix](d3plot-global-class.md#global::Unix)()
* [WarningMessage](d3plot-global-class.md#global::WarningMessage)(string*[Any valid javascript type]*)
* [Windows](d3plot-global-class.md#global::Windows)()

## D3PLOT functions

* [Blank](d3plot-visibility-class.md#Visibility::Blank)(type\_code*[integer]*, item*[integer or array of integers or string]*, window\_id (optional)*[integer]*)
* [CreateUbinComponent](d3plot-usercomponents-class.md#UserComponents::CreateUbinComponent)(component\_name*[string]*, component\_type*[integer]*, data\_type*[integer]*, if\_existing*[integer]*, dispose (optional)*[integer]*, location (optional)*[integer or string]*)
* [CreateWindow](d3plot-windows-class.md#Windows::CreateWindow)(model\_list*[Array of integers|integer]*)
* [DeleteUbinComponent](d3plot-usercomponents-class.md#UserComponents::DeleteUbinComponent)(handle*[integer]*)
* [DeleteWindow](d3plot-windows-class.md#Windows::DeleteWindow)(window\_list*[Array of numbers|number]*, dispose\_flag (optional)*[integer]*)
* [GetConditionParts](d3plot-data-class.md#Data::GetConditionParts)(component*[integer]*, value*[real]*, mode*[integer]*, int\_pt (optional)*[object|integer]*, extra (optional)*[integer]*)
* [GetContourLimit](d3plot-data-class.md#Data::GetContourLimit)(mode*[integer]*, component (optional)*[string]*)
* [GetCutCoords](d3plot-cutsection-class.md#CutSection::GetCutCoords)(options*[object]*)
* [GetCutCoords_deprecated](d3plot-cutsection-class.md#CutSection::GetCutCoords_deprecated)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*) [deprecated]
* [GetCutForces](d3plot-cutsection-class.md#CutSection::GetCutForces)(options*[object]*)
* [GetCutForces_deprecated](d3plot-cutsection-class.md#CutSection::GetCutForces_deprecated)(window\_id*[integer]*, include\_blanked (optional)*[integer]*, part\_id (optional)*[integer]*, state\_id (optional)*[integer]*, model\_id (optional)*[integer]*) [deprecated]
* [GetCutSection](d3plot-cutsection-class.md#CutSection::GetCutSection)(options*[object]*)
* [GetCutSection_deprecated](d3plot-cutsection-class.md#CutSection::GetCutSection_deprecated)(window\_id*[integer]*, state\_id (optional)*[integer]*, model\_id (optional)*[integer]*) [deprecated]
* [GetData](d3plot-data-class.md#Data::GetData)(component*[integer]*, type\_code*[integer]*, item*[integer]*, int\_pt (optional)*[object|integer]*, extra (optional)*[integer]*, fr\_of\_ref (optional)*[integer]*, state\_id (optional)*[integer]*, dda (optional)*[integer]*, consider\_blanking (optional)*[integer]*, mag\_or\_cur (optional)*[integer]*)
* [GetElemAxes](d3plot-elements-class.md#Elements::GetElemAxes)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [GetElemBetaAngle](d3plot-elements-class.md#Elements::GetElemBetaAngle)(type\_code*[integer]*, item*[integer]*, ply\_id*[integer]*, int\_pnt (optional)*[integer]*, state\_id (optional)*[integer]*)
* [GetElemsAtNode](d3plot-elements-class.md#Elements::GetElemsAtNode)(node*[integer]*, type\_code*[integer]*, state\_id (optional)*[integer]*)
* [GetElemsInPart](d3plot-elements-class.md#Elements::GetElemsInPart)(part\_id*[integer]*, state\_id (optional)*[integer]*)
* [GetElemsInPly](d3plot-composites-class.md#Composites::GetElemsInPly)(ply\_id*[integer]*, state\_id (optional)*[integer]*)
* [GetGroupInfo](d3plot-groups-class.md#Groups::GetGroupInfo)(group\_id*[integer]*)
* [GetIncludeInfo](d3plot-includes-class.md#Includes::GetIncludeInfo)(include\_id*[integer]*)
* [GetItemsInSet](d3plot-sets-class.md#Sets::GetItemsInSet)(set\_type*[integer]*, set\_id*[integer]*)
* [GetLabel](d3plot-labels-class.md#Labels::GetLabel)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [GetMid](d3plot-materials-class.md#Materials::GetMid)(type\_code*[integer]*, item*[integer]*, layer\_id (optional)*[integer]*, state\_id (optional)*[integer]*)
* [GetModelInfo](d3plot-models-class.md#Models::GetModelInfo)(model\_id (optional)*[integer]*, family\_id (optional)*[integer]*)
* [GetMultipleData](d3plot-data-class.md#Data::GetMultipleData)(component*[integer]*, type\_code*[integer]*, item\_1*[integer]*, item\_2*[integer]*, int\_pt (optional)*[object|integer]*, extra (optional)*[integer]*, fr\_of\_ref (optional)*[integer]*, state\_id (optional)*[integer]*, dda (optional)*[integer]*, consider\_blanking (optional)*[integer]*, mag\_or\_cur (optional)*[integer]*)
* [GetNumOnPlanIntPts](d3plot-data-class.md#Data::GetNumOnPlanIntPts)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [GetNumberOf](d3plot-data-class.md#Data::GetNumberOf)(type\_code*[integer]*, options (optional)*[object]*)
* [GetNumberOf_deprecated](d3plot-data-class.md#Data::GetNumberOf_deprecated)(type\_code*[integer]*, state\_id (optional)*[integer]*) [deprecated]
* [GetPartInfo](d3plot-parts-class.md#Parts::GetPartInfo)(part\_id*[integer]*)
* [GetPid](d3plot-parts-class.md#Parts::GetPid)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [GetPlyIntPoint](d3plot-composites-class.md#Composites::GetPlyIntPoint)(type\_code*[integer]*, item*[integer]*, ply\_id*[integer]*, state\_id (optional)*[integer]*)
* [GetPlysInLayup](d3plot-composites-class.md#Composites::GetPlysInLayup)(layup\_id*[integer]*, state\_id (optional)*[integer]*)
* [GetSegmsInSurface](d3plot-contacts-class.md#Contacts::GetSegmsInSurface)(surface\_id*[integer]*)
* [GetSetInfo](d3plot-sets-class.md#Sets::GetSetInfo)(set\_type*[integer]*, set\_id*[integer]*)
* [GetTime](d3plot-states-class.md#States::GetTime)(state\_id (optional)*[integer]*)
* [GetTopology](d3plot-elements-class.md#Elements::GetTopology)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [GetUbinData](d3plot-usercomponents-class.md#UserComponents::GetUbinData)(handle*[integer]*, item\_type*[integer]*, item*[integer]*, int\_pt*[object|integer]*, state\_id (optional)*[integer]*)
* [GetWindowFrame](d3plot-windows-class.md#Windows::GetWindowFrame)(window\_id*[integer]*)
* [GetWindowMaxFrame](d3plot-windows-class.md#Windows::GetWindowMaxFrame)(window\_id*[integer]*)
* [GetWindowModels](d3plot-windows-class.md#Windows::GetWindowModels)(window\_id*[integer]*)
* [IsBlanked](d3plot-visibility-class.md#Visibility::IsBlanked)(type\_code*[integer]*, item*[integer]*, window\_id (optional)*[integer]*)
* [IsDeleted](d3plot-visibility-class.md#Visibility::IsDeleted)(type\_code*[integer]*, item*[integer]*, state\_id (optional)*[integer]*)
* [IsSelected](d3plot-selecting-class.md#Selecting::IsSelected)(type\_code*[integer]*, item*[integer]*)
* [IsVisible](d3plot-visibility-class.md#Visibility::IsVisible)(type\_code*[integer]*, item*[integer]*, window\_id*[integer]*, state\_id (optional)*[integer]*)
* [LocateUbinComponent](d3plot-usercomponents-class.md#UserComponents::LocateUbinComponent)(component\_name*[string]*)
* [LockState](d3plot-states-class.md#States::LockState)(state\_id*[integer]*)
* [ModelExists](d3plot-models-class.md#Models::ModelExists)(model\_id*[integer]*)
* [NumDeleted](d3plot-visibility-class.md#Visibility::NumDeleted)(type\_code*[integer]*, state\_id (optional)*[integer]*)
* [Pick](d3plot-selecting-class.md#Selecting::Pick)(type\_code*[integer]*, number*[integer]*)
* [PutUbinData](d3plot-usercomponents-class.md#UserComponents::PutUbinData)(handle*[integer]*, item\_type*[integer]*, item*[integer]*, int\_pt*[object|integer]*, data*[real|array of reals]*, state\_id (optional)*[integer]*)
* [QueryDataPresent](d3plot-data-class.md#Data::QueryDataPresent)(component*[integer]*, type\_code (optional)*[integer]*)
* [RemoveCutDirection_deprecated](d3plot-cutsection-class.md#CutSection::RemoveCutDirection_deprecated)(options*[object]*) [deprecated]
* [Select](d3plot-selecting-class.md#Selecting::Select)(type\_code*[integer]*)
* [SetCurrentModel](d3plot-models-class.md#Models::SetCurrentModel)(model\_id*[integer]*)
* [SetCurrentState](d3plot-states-class.md#States::SetCurrentState)(state\_id*[integer]*)
* [SetCutSection](d3plot-cutsection-class.md#CutSection::SetCutSection)(options*[object]*)
* [SetCutSection_deprecated](d3plot-cutsection-class.md#CutSection::SetCutSection_deprecated)(window\_id*[integer]*, attribute*[integer]*, value*[integer | array of reals | array of integers]*) [deprecated]
* [SetWindowActive](d3plot-windows-class.md#Windows::SetWindowActive)(window\_id*[integer]*, active\_flag*[integer]*)
* [SetWindowFrame](d3plot-windows-class.md#Windows::SetWindowFrame)(window\_id*[integer]*, frame\_number*[integer]*)
* [SpoolNodesInSurface](d3plot-contacts-class.md#Contacts::SpoolNodesInSurface)(surface\_id*[integer]*, index*[integer]*, side*[integer]*)
* [Unblank](d3plot-visibility-class.md#Visibility::Unblank)(type\_code*[integer]*, item*[integer or array of integers or string]*, window\_id (optional)*[integer]*)
* [UnlockState](d3plot-states-class.md#States::UnlockState)(state\_id*[integer]*)

| Details of functions 
AllocateFlag() [static]
Description<br>Allocate a flag for use in the script. See also [ReturnFlag()](d3plot-global-class.md#global::ReturnFlag).<br>Once allocated the flag is automatically cleared for all the models currently in D3PLOT. |
| --- |

#### Arguments

No arguments

| Returns
<br>Flag to use<br>
Return type
<br>Flag |
| --- |

| Example
<br>To allocate a flag<br>
```
var flag = AllocateFlag();
```
 |
| --- |

* * *

| DialogueInput(command*[string]*) [static]
Description<br><br><br><br>Executes one or more command-line syntax commands. There is no limit<br>to the number of lines that may be specified in a single call. See [Dialogue Command Syntax](https://help.oasys-software.com/smart/project-d3plot/e-dialogue-command-syntax/a/command) for a full list of command-line<br>commands<br>
<br>The [DialogueInputNoEcho](d3plot-global-class.md#global::DialogueInputNoEcho) variant is identical, except that it suppresses the<br>echo of the commands to the dialogue box.<br>
<br>D3PLOT provides a full command-line syntax as an alternative to graphical user interface commands, and a sequence of<br>such commands may be provided here.<br>
<br>Note that:<br><ul>
<li>Each call to DialogueInput starts at the top of the D3PLOT command-line &quot;tree&quot;, at the D3PLOT_MANAGER&gt;&gt;&gt; prompt</li>
<li>Each call is autonomous, there is no &quot;memory&quot; of where in the command-line tree previous commands finished.</li>
<li>Changes to current model using &quot;CM <i>n</i>&quot; are not remembered between calls, but within a single call commands following &quot;CM <i>n</i>&quot; will apply to model <i>n</i>.</li>
<li>However within a single call the current command-line tree is remembered from one line to the next.</li>
<li>Commands are not case-sensitive, although filenames and titles in command strings are.</li>
</ul>
<br>Therefore commands which require more than one line of input to complete must be specified in a single call; and it<br>makes sense to group a sequence of related commands together in a single call, although this is not mandatory.<br>
<br>If this succeeds it returns true, otherwise false. |
| --- |

#### Arguments

* command (string)

Command to be executed (as if it had been typed into the dialogue box)
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value |
| --- |

| Example
<br><br><br>
```
// Blanks all solids.
// Unblanks solids 1 to 10.
// Performs a hidden line plot.
// All commands are echoed to the dialogue box
DialogueInput("BLANK SOLID ALL", "UNBLANK SOLID 1 to 10", "HIDDEN");

```
 |
| --- |

* * *

| DialogueInputNoEcho(command*[string]*) [static]
Description<br><br><br><br>Executes one or more command-line syntax commands. There is no limit<br>to the number of lines that may be specified in a single call. See [Dialogue Command Syntax](https://help.oasys-software.com/smart/project-d3plot/e-dialogue-command-syntax/a/command) for a full list of command-line<br>commands<br>
<br>This does not echo the commands to the dialogue box.<br>
<br>See [DialogueInput](d3plot-global-class.md#global::DialogueInput) for more information. |
| --- |

#### Arguments

* command (string)

Command to be executed (as if it had been typed into the dialogue box)
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>No return value |
| --- |

| Example
<br><br><br>
```
// Read state 10
// Performed a shaded ("greyscale" in command-line syntax)plot
// Create a JPEG format file "image.jpg"
// Command is not echoed to the dialogue box.
DialogueInputNoEcho("STATE10", "/GREY GO", "/IMAGE jpeg image.jpg");

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
Description<br>Execute a program or script outside D3PLOT and get the standard output and error streams. |
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

| ExitTHisLink() [static]
Description<br>Exits the T/HIS link from D3PLOT |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
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
Description<br>Get the directory passed to D3PLOT by the -start\_in command line argument |
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
Description<br>Pause execution of the script for *time* milliseconds. See also [Sleep()](d3plot-global-class.md#global::Sleep) |
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

| ReturnFlag(flag*[[Flag](d3plot-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Return a flag used in the script. See also [AllocateFlag()](d3plot-global-class.md#global::AllocateFlag). |
| --- |

#### Arguments

* flag ([Flag](d3plot-global-class.md#global::AllocateFlag))

The flag to return

| Returns
<br>No return value |
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

| Sleep(time*[integer]*) [static]
Description<br>Pause execution of the script for *time* seconds. See also [MilliSleep()](d3plot-global-class.md#global::MilliSleep) |
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

| StartTHisLink() [static]
Description<br>Starts the T/HIS link from D3PLOT |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| System(string*[Any valid javascript type]*) [static]
Description<br>Do a system command outside D3PLOT. To run an external command and get the output then please use<br>[Execute()](d3plot-global-class.md#global::Execute) instead. |
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
Description<br>Test whether script is running on a Unix/Linux operating system. See also [Windows()](d3plot-global-class.md#global::Windows) |
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
Description<br>Test whether script is running on a Windows operating system. See also [Unix()](d3plot-global-class.md#global::Unix) |
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