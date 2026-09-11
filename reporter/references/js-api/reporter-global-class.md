# global class

The global class is the root object in Javascript. [More...](reporter-global-class.md#global_details)

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

* [Batch](reporter-global-class.md#global::Batch)()
* [Debug](reporter-global-class.md#global::Debug)(string*[Any valid javascript type]*)
* [Exit](reporter-global-class.md#global::Exit)()
* [GetCurrentDirectory](reporter-global-class.md#global::GetCurrentDirectory)()
* [LogError](reporter-global-class.md#global::LogError)(message*[Any valid javascript type]*)
* [LogPrint](reporter-global-class.md#global::LogPrint)(message*[Any valid javascript type]*)
* [LogWarning](reporter-global-class.md#global::LogWarning)(message*[Any valid javascript type]*)
* [Output](reporter-global-class.md#global::Output)(string*[Any valid javascript type]*)
* [SetCurrentDirectory](reporter-global-class.md#global::SetCurrentDirectory)(directory*[string]*)
* [System](reporter-global-class.md#global::System)(string*[Any valid javascript type]*)
* [Unix](reporter-global-class.md#global::Unix)()
* [Windows](reporter-global-class.md#global::Windows)()
* [debug](reporter-global-class.md#global::debug_deprecated)() [deprecated]
* [exit](reporter-global-class.md#global::exit_deprecated)() [deprecated]
* [output](reporter-global-class.md#global::output_deprecated)() [deprecated]

## global properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| reporter | Reporter | This property is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br> [deprecated] |

| Detailed Description<br>When Reporter is started a **single** global class object is created. All of the standard JavaScript functions and properties are available from it.<br> In addition an instance of a [Reporter](reporter-reporter-class.md) class is available, from the global [reporter](reporter-global-class.md#reporter) property. The reporter object allows you to access the properties and [templates](reporter-template-class.md) used in Reporter. |
| --- |

| Details of functions 
Batch() [static]
Description<br>This method can be used to test whether REPORTER is running in batch mode or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if REPORTER is running in batch mode<br>
```
if (Batch()) { do something }
```
 |
| --- |

* * *

| Debug(string*[Any valid javascript type]*) [static]
Description<br>Print a string to log file for debugging. Anything that you call the debug method on will be 'printed' to the log file window. **Note that a carriage return will automatically be added**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to debug

| Returns
<br>No return value |
| --- |

| Example
<br>To print string "Hello, world!" to the debug log file<br>
```
Debug("Hello, world!");
```
 |
| --- |

* * *

| Exit() [static]
Description<br>Stop execution and exit from script |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>Exit from script with<br>
```
Exit();
```
 |
| --- |

* * *

| GetCurrentDirectory() [static]
Description<br>Return the current working directory for REPORTER. |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To return the current directory<br>
```
var dir = GetCurrentDirectory();
```
 |
| --- |

* * *

| LogError(message*[Any valid javascript type]*) [static]
Description<br>Print an error to log file. Anything that you print will be output to the log file window in bold red text. **Note that a carriage return will automatically beadded**. |
| --- |

#### Arguments

* message (Any valid javascript type)
 
The
string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To give error "Error: something has gone wrong" to the log file<br>
```
LogError("Error: something has gone wrong");
```
 |
| --- |

* * *

| LogPrint(message*[Any valid javascript type]*) [static]
Description<br>Print a string to log file. Anything that you print will be output to the log file window. **Note that a carriage return will automatically be added**. |
| --- |

#### Arguments

* message (Any valid javascript type)
 
The string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To print string "Hello, world!" to the log file<br>
```
LogPrint("Hello, world!");
```
 |
| --- |

* * *

| LogWarning(message*[Any valid javascript type]*) [static]
Description<br>Print a warning to log file. Anything that you print will be output to the log file window in red text. **Note that a carriage return will automatically be added**. |
| --- |

#### Arguments

* message (Any valid javascript type)
 
The string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To give warning "Warning: something has gone wrong" to the log file<br>
```
LogWarning("Warning: something has gone wrong");
```
 |
| --- |

* * *

| Output(string*[Any valid javascript type]*) [static]
Description<br>Output a string from a script. **Note that a carriage return is not automatically added**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to print

| Returns
<br>No return value |
| --- |

| Example
<br>To output string "Hello, world!" with a carriage return:<br>
```
Output("Hello, world!\n");
```
 |
| --- |

* * *

| SetCurrentDirectory(directory*[string]*) [static]
Description<br>Set the current working directory for REPORTER. |
| --- |

#### Arguments

* directory (string)
 
The directory that you want to change to

| Returns
<br>true if successful, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To set the current directory to C:\temp<br>
```
var status = SetCurrentDirectory("C:\\temp");
```
 |
| --- |

* * *

| System(string*[Any valid javascript type]*) [static]
Description<br>Do a system command outside REPORTER. |
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
Description<br>Test whether script is running on a Unix/Linux operating system. See also [Windows()](reporter-global-class.md#global::Windows) |
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

| Windows() [static]
Description<br>Test whether script is running on a Windows operating system. See also [Unix()](reporter-global-class.md#global::Unix) |
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

| debug() [static] [deprecated]
<br>This function is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [Debug()](reporter-global-class.md#global::Debug) instead |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| exit() [static] [deprecated]
<br>This function is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [Exit()](reporter-global-class.md#global::Exit) instead |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| output() [static] [deprecated]
<br>This function is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Please use [Output()](reporter-global-class.md#global::Output) instead |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *