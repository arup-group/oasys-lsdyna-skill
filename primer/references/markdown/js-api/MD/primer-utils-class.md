# Utils class

The Utils class contains various useful utility functions. [More...](primer-utils-class.md#Utils_details)

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

* [Ascii85Decode](primer-utils-class.md#Utils::Ascii85Decode)(encoded*[string]*)
* [Ascii85Encode](primer-utils-class.md#Utils::Ascii85Encode)(data*[[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects)]*, length (optional)*[integer]*)
* [Build](primer-utils-class.md#Utils::Build)()
* [CallPromiseHandlers](primer-utils-class.md#Utils::CallPromiseHandlers)()
* [CheckinLicense](primer-utils-class.md#Utils::CheckinLicense)(feature*[string]*)
* [CheckoutLicense](primer-utils-class.md#Utils::CheckoutLicense)(feature*[string]*)
* [GarbageCollect](primer-utils-class.md#Utils::GarbageCollect)()
* [GetLSDYNAVersions](primer-utils-class.md#Utils::GetLSDYNAVersions)()
* [HTMLBrowser](primer-utils-class.md#Utils::HTMLBrowser)()
* [HiResTimer](primer-utils-class.md#Utils::HiResTimer)()
* [PdfReader](primer-utils-class.md#Utils::PdfReader)()
* [SHA256](primer-utils-class.md#Utils::SHA256)(filename*[string]*)
* [SHA512](primer-utils-class.md#Utils::SHA512)(filename*[string]*)
* [TimerResolution](primer-utils-class.md#Utils::TimerResolution)()
* [UUID](primer-utils-class.md#Utils::UUID)()
* [Version](primer-utils-class.md#Utils::Version)()

| Detailed Description<br>The Utils class is used to provide various useful functions. |
| --- |

| Details of functions 
Ascii85Decode(encoded*[string]*) [static]
Description<br>Decodes an ASCII85 encoded string. See [Utils.Ascii85Encode()](primer-utils-class.md#Utils::Ascii85Encode) for details on the method. |
| --- |

#### Arguments

* encoded (string)
 
An ASCII85 encoded string

| Returns
<br>[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) object<br>
Return type
<br>ArrayBuffer |
| --- |

| Example
<br>To decode an ASCII85 encoded string:<br>
```
var decoded = Utils.Ascii85Decode(encoded);
```
 |
| --- |

* * *

| Ascii85Encode(data*[[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects)]*, length (optional)*[integer]*) [static]
Description<br>Encodes an ASCII85 encoded string. This enables binary data to be represented by ASCII characters using five ASCII characters<br>to represent four bytes of binary data (making the encoded size 1/4 larger than the original). By doing this binary data can be stored in<br>JavaScript strings. Note that the method used by PRIMER to encode and decode strings differs from the standard ASCII85 encoding as that uses the<br>ASCII characters ", ' and \ which cannot be used in JavaScript strings as they have special meanings. The method in PRIMER uses<br><br>0-84 are !-u (ASCII codes 33-117) (i.e. 33 is added to it) with the following exceptions<br><br>v is used instead of " (ASCII code 118 instead of 34)<br><br>w is used instead of ' (ASCII code 119 instead of 39)<br><br>x is used instead of \ (ASCII code 120 instead of 92)<br><br>If all five digits are 0 they are represented by a single character z instead of !!!!! |
| --- |

#### Arguments

* data ([ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects))
 
[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) containing the data

* length (optional) (integer)
 
Length of data in array buffer to encode. If omitted the whole array buffer will be encoded

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To encode ArrayBuffer data:<br>
```
var encoded = Utils.Ascii85Encode(data);
```
 |
| --- |

* * *

| Build() [static]
Description<br>Returns the build number |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the current build number<br>
```
var build = Utils.Build();
```
 |
| --- |

* * *

| CallPromiseHandlers() [static]
Description<br>Manually call any promise handlers/callbacks in the job queue |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To run any queued promise handlers/callbacks:<br>
```
Utils.CallPromiseHandlers();
```
 |
| --- |

* * *

| CheckinLicense(feature*[string]*) [static]
Description<br>Checks a license for a feature back in |
| --- |

#### Arguments

* feature (string)
 
feature to check license back in for

| Returns
<br>no return value |
| --- |

| Example
<br>To check in a license for "EXAMPLE":<br>
```
Utils.CheckinLicense("EXAMPLE");
```
 |
| --- |

* * *

| CheckoutLicense(feature*[string]*) [static]
Description<br>Checks out a license for a feature |
| --- |

#### Arguments

* feature (string)
 
feature to check license for

| Returns
<br>true if license available, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To checkout a license for "EXAMPLE":<br>
```
var got = Utils.CheckoutLicense("EXAMPLE");
if (got == false) Exit();
```
 |
| --- |

* * *

| GarbageCollect() [static]
Description<br>Forces garbage collection to be done. This should not normally need to be called<br>but in exceptional circumstances it can be called to ensure that garbage collection is done to<br>return memory. |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To force garbage collection to be done:<br>
```
Utils.GarbageCollect();
```
 |
| --- |

* * *

| GetLSDYNAVersions() [static]
Description<br>Returns an array of all Ansys LS-DYNA output version names available in PRIMER. |
| --- |

#### Arguments

No arguments

| Returns
<br>An array of Ansys LS-DYNA version names<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all Ansys LS-DYNA version names in PRIMER and set the output version to the latest version:<br>
```
var versions = Utils.GetLSDYNAVersions();
      var latest = versions.length-1;
      
      Options.dyna_version = versions[latest];
```
 |
| --- |

* * *

| HTMLBrowser() [static]
Description<br>Returns the path to the default HTML browser |
| --- |

#### Arguments

No arguments

| Returns
<br>string of the path<br>
Return type
<br>String |
| --- |

| Example
<br>To get path to the default HTML browser<br><br>
```
var path = Utils.HTMLBrowser();
```
<br><br> |
| --- |

* * *

| HiResTimer() [static]
Description<br>A high resolution timer that can be used to time how long things take.<br>The first time this is called the timer will start and return 0. Subsequent calls will return<br>the time in nanoseconds since the first call. Note that the timer will almost certainly not have<br>1 nanosecond precision but, depending on the platform, should should have a resolution of at least 1 microsecond.<br>The resolution can be found by using [Utils.TimerResolution()](primer-utils-class.md#Utils::TimerResolution) |
| --- |

#### Arguments

No arguments

| Returns
<br>number<br>
Return type
<br>number |
| --- |

| Example
<br>To time how long something takes to nanosecond precision:<br>
```
var start = Utils.HiResTimer();
do something that takes some time...
var end = Utils.HiResTimer();
Message("it took " + (end-start) + "nanoseconds");
```
 |
| --- |

* * *

| PdfReader() [static]
Description<br>Returns the path to the executable of the default pdf reader |
| --- |

#### Arguments

No arguments

| Returns
<br>string of the path<br>
Return type
<br>String |
| --- |

| Example
<br>To get path to the default pdf reader<br><br>
```
var path = Utils.PdfReader();
```
<br><br> |
| --- |

* * *

| SHA256(filename*[string]*) [static]
Description<br>Create a SHA-256 hash for a file |
| --- |

#### Arguments

* filename (string)
 
File to calculate the hash for

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To generate the hash for file "example.txt":<br>
```
var sha256 = Utils.SHA256("example.txt");
```
 |
| --- |

* * *

| SHA512(filename*[string]*) [static]
Description<br>Create a SHA-512 hash for a file |
| --- |

#### Arguments

* filename (string)
 
File to calculate the hash for

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To generate the hash for file "example.txt":<br>
```
var sha512 = Utils.SHA512("example.txt");
```
 |
| --- |

* * *

| TimerResolution() [static]
Description<br>Returns the resolution (precision) of the [Utils.HiResTimer()](primer-utils-class.md#Utils::HiResTimer) timer in nanoseconds |
| --- |

#### Arguments

No arguments

| Returns
<br>number<br>
Return type
<br>number |
| --- |

| Example
<br>To find the resolution of the timer in nanoseconds:<br>
```
var resolution = Utils.TimerResolution();
```
 |
| --- |

* * *

| UUID() [static]
Description<br>Create an UUID (Universally Unique Identifier) |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To generate an UUID:<br>
```
var uuid = Utils.UUID();
```
 |
| --- |

* * *

| Version() [static]
Description<br>Returns the version number |
| --- |

#### Arguments

No arguments

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the current version number<br>
```
var version = Utils.Version();
```
 |
| --- |

* * *