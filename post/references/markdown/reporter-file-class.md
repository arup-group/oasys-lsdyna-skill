# File class

The File class allows you to read and write from text files. [More...](reporter-file-class.md#File_details)

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

* [ConvertSeparators](reporter-file-class.md#File::ConvertSeparators)(filename*[string]*)
* [Copy](reporter-file-class.md#File::Copy)(source*[string]*, dest*[string]*)
* [Delete](reporter-file-class.md#File::Delete)(filename*[string]*)
* [Directory](reporter-file-class.md#File::Directory)(filename*[string]*)
* [DriveMapFilename](reporter-file-class.md#File::DriveMapFilename)(filename*[string]*, format*[constant]*)
* [Exists](reporter-file-class.md#File::Exists)(filename*[string]*)
* [FindFiles](reporter-file-class.md#File::FindFiles)(directory*[string]*, pattern*[string]*, recursive*[boolean]*)
* [IsAbsolute](reporter-file-class.md#File::IsAbsolute)(filename*[string]*)
* [IsDirectory](reporter-file-class.md#File::IsDirectory)(filename*[string]*)
* [IsFile](reporter-file-class.md#File::IsFile)(filename*[string]*)
* [Mkdir](reporter-file-class.md#File::Mkdir)(name*[string]*)
* [Move](reporter-file-class.md#File::Move)(source*[string]*, dest*[string]*)
* [SimplifyName](reporter-file-class.md#File::SimplifyName)(filename*[string]*)
* [Size](reporter-file-class.md#File::Size)(filename*[string]*)

## Member functions

* [Close](reporter-file-class.md#File::Close)()
* [FindLineContaining](reporter-file-class.md#File::FindLineContaining)(contain*[string]*)
* [FindLineMatching](reporter-file-class.md#File::FindLineMatching)(regex*[RegExp]*)
* [FindLineStarting](reporter-file-class.md#File::FindLineStarting)(start*[string]*)
* [Flush](reporter-file-class.md#File::Flush)()
* [ReadChar](reporter-file-class.md#File::ReadChar)()
* [ReadLine](reporter-file-class.md#File::ReadLine)()
* [ReadLongLine](reporter-file-class.md#File::ReadLongLine)()
* [Seek](reporter-file-class.md#File::Seek)(position*[integer]*)
* [Write](reporter-file-class.md#File::Write)(string*[Any valid javascript type]*)

## File constants

| **Name** | **Description** |
| --- | --- |
| File.APPEND | Flag to open file for appending |
| File.EOF | Flag to indicate end of file |
| File.READ | Flag to open file for reading |
| File.WRITE | Flag to open file for writing |

| Detailed Description<br>The File class allows you to read text and write text to files. There are various functions available that allow to to find lines matching specific strings or regular expressions when reading.<br> Additionally, there are a number of utility functions to check if a file exists or is a directory etc. |
| --- |

| Constructor
new File(filename*[string]*, mode*[constant]*)

Description<br>Create a new [File](reporter-file-class.md) object for reading and writing text files. |
| --- |

#### Arguments

* filename (string)
 
Filename of the file you want to read/write. If reading, the file must exist. If writing, the file will be overwritten if it already exists

* mode (constant)
 
The mode to open the file with. Can be [File.READ](reporter-file-class.md#File.READ), [File.WRITE](reporter-file-class.md#File.WRITE) or [File.APPEND](reporter-file-class.md#File.APPEND)

| Returns
<br>[File](reporter-file-class.md) object<br>
Return type
<br>File |
| --- |

| Example
<br>To create a new file object to read file "/data/test/file.txt"<br>
```
var f = new File("/data/test/file.txt", File.READ);
```
 |
| --- |

| Details of functions 
Close()

Description<br>Close a file opened by a [File](reporter-file-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To close [File](reporter-file-class.md) object f.<br>
```
f.Close();
```
 |
| --- |

* * *

| ConvertSeparators(filename*[string]*) [static]
Description<br>Convert directory separators to the correct type for this operating system |
| --- |

#### Arguments

* filename (string)
 
Filename you want to convert separators on.

| Returns
<br>string filename<br>
Return type
<br>String |
| --- |

| Example
<br>e.g. on windows the filename "c:/test/file.key" would be converted to "c:\test\file.key" by<br>
```
var converted = File.ConvertSeparators("c:/test/file.key");
```
 |
| --- |

* * *

| Copy(source*[string]*, dest*[string]*) [static]
Description<br>Copy a file |
| --- |

#### Arguments

* source (string)
 
Source filename you want to copy.

* dest (string)
 
Destination filename you want to copy source file to. Note that if a file with the name dest
already exists it will not be overwritten. Delete the file first with [File.Delete()](reporter-file-class.md#File::Delete).

| Returns
<br>true if copy successful, false otherwise.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To copy the file "/data/test/file.txt" to "/data/test/file.txt\_backup"<br>
```
var copied = File.Copy("/data/test/file.txt", "/data/test/file.txt_backup");
```
 |
| --- |

* * *

| Delete(filename*[string]*) [static]
Description<br>Delete a file |
| --- |

#### Arguments

* filename (string)
 
Filename you want to delete.

| Returns
<br>true if successful, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To delete the file "/data/test/file.txt"<br>
```
var deleted = File.Delete("/data/test/file.txt");
```
 |
| --- |

* * *

| Directory(filename*[string]*) [static]
Description<br>Extract directory name from an absolute filename |
| --- |

#### Arguments

* filename (string)
 
Absolute filename you want to extract directory from.

| Returns
<br>string directory<br>
Return type
<br>String |
| --- |

| Example
<br>To extract the directory "/data/test/" from file "/data/test/file.key"<br>
```
var directory = File.Directory("/data/test/file.key");
```
 |
| --- |

* * *

| DriveMapFilename(filename*[string]*, format*[constant]*) [static]
Description<br>Changes a filename or directory name to the correct format for a specific operating system using the<br>directory mappings (if present). |
| --- |

#### Arguments

* filename (string)
 
Filename you want to drive map.

* format (constant)
 
The format for the file/directory name. Can be [Include.NATIVE](reporter-include-class.md#Include.NATIVE), [Include.UNIX](reporter-include-class.md#Include.UNIX), or [Include.WINDOWS](reporter-include-class.md#Include.WINDOWS).

| Returns
<br>string containing drive mapped filename.<br>
Return type
<br>String |
| --- |

| Example
<br>If REPORTER has drive S:\ mapped to /data/ (by using the oasys\*drive\_s preference)<br>
```
var mapped = File.DriveMapFilename("/data/test/file.ptf", Include.WINDOWS);
```
<br>mapped will be "S:\test\file.ptf".<br>
```
var mapped = File.DriveMapFilename("S:\\test\\file.ptf", Include.UNIX);
```
<br>mapped will be "/data/test/file.ptf", |
| --- |

* * *

| Exists(filename*[string]*) [static]
Description<br>Check if a file exists |
| --- |

#### Arguments

* filename (string)
 
Filename you want to check for existance.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if the file "/data/test/file.key" exists<br>
```
if (File.Exists("/data/test/file.key")) { do something }
```
 |
| --- |

* * *

| FindFiles(directory*[string]*, pattern*[string]*, recursive*[boolean]*) [static]
Description<br>Find any files in a directory (and subdirectories if required) matching a pattern |
| --- |

#### Arguments

* directory (string)
 
Directory to look for files in

* pattern (string)
 
Pattern to use to find matching files

* recursive (boolean)
 
If Reporter should look for files recursively or not

| Returns
<br>array filenames<br>
Return type
<br>String |
| --- |

| Example
<br>To find all of the files matching the pattern "\*.key" recursively from directory /data/test<br>
```
var filelist = File.FindFiles("/data/test/", "*.key", true);
```
 |
| --- |

* * *

| FindLineContaining(contain*[string]*)

Description<br>Reads a line from a file which contains contain, opened for reading by a [File](reporter-file-class.md)<br>object. To enable this function to be as fast as possible a maximum line length of 256 characters is used. If you expect<br>a file to have lines longer than 256 characters then use [ReadLongLine](reporter-file-class.md#File::ReadLongLine)<br>which allows lines of any length. If one argument is used then the line must contain that string. If more than one<br>argument is used then lines which contain any of the arguments will be returned |
| --- |

#### Arguments

* contain (string)
 
String which matching lines must contain (maximum length of 256 characters).
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>string read from file or  if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](reporter-file-class.md) object f which contain 'example'.<br>
```

var line;

while ( (line = file.FindLineContaining("example") ) != File.EOF)
{
}
      
```
 |
| --- |

* * *

| FindLineMatching(regex*[RegExp]*)

Description<br>Reads a line from a file opened for reading by a [File](reporter-file-class.md) object.<br>To enable this function to be as fast as possible a maximum line length of 256 characters is used. If<br>you expect a file to have lines longer than 256 characters then use<br>[ReadLongLine](reporter-file-class.md#File::ReadLongLine) which allows lines<br>of any length. Note that this may be much slower than [FindLineStarting](reporter-file-class.md#File::FindLineStarting) or [FindLineContaining](reporter-file-class.md#File::FindLineContaining), especially if the regular expression is very complicated. |
| --- |

#### Arguments

* regex (RegExp)
 
Regular expression which matching lines must match with.

| Returns
<br>string read from file or  if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](reporter-file-class.md) object f which contain digits.<br>
```

var line;
var regex = new RegExp("\\d+");

while ( (line = file.FindLineMatching(regex) ) != File.EOF)
{
}
      
```
 |
| --- |

* * *

| FindLineStarting(start*[string]*)

Description<br>Reads a line from a file which starts with start, opened for reading by a [File](reporter-file-class.md) object. To enable this function to be as fast as possible a maximum line length of 256<br>characters is used. If you expect a file to have lines longer than 256 characters then use [ReadLongLine](reporter-file-class.md#File::ReadLongLine) which allows lines of any length. If one argument is used then the line must<br>start with that string. If more than one argument is used then lines which start with any of the arguments will be<br>returned |
| --- |

#### Arguments

* start (string)
 
String which matching lines must start with (maximum length of 256 characters).
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>string read from file or  if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](reporter-file-class.md) object f which start 'example'.<br>
```

var line;

while ( (line = file.FindLineStarting("example") ) != File.EOF)
{
}
      
```
 |
| --- |

* * *

| Flush()

Description<br>Flushes a file opened for writing by a [File](reporter-file-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To flush [File](reporter-file-class.md) object f.<br>
```
f.Flush();
```
 |
| --- |

* * *

| IsAbsolute(filename*[string]*) [static]
Description<br>Check if a filename is absolute |
| --- |

#### Arguments

* filename (string)
 
Filename you want to test if absolute.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if the file "/data/test/file.key" is absolute<br>
```
if (File.IsAbsolute("/data/test/file.key")) { do something }
```
 |
| --- |

* * *

| IsDirectory(filename*[string]*) [static]
Description<br>Check if a filename is a directory |
| --- |

#### Arguments

* filename (string)
 
Filename you want to test to see if it is a directory.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if "/data/test" is a directory<br>
```
if (File.IsDirectory("/data/test")) { do something }
```
 |
| --- |

* * *

| IsFile(filename*[string]*) [static]
Description<br>Check if a filename is a file |
| --- |

#### Arguments

* filename (string)
 
Filename you want to test to see if it is a file (i.e. not a directory).

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if "/data/test" is a file<br>
```
if (File.IsFile("/data/test")) { do something }
```
 |
| --- |

* * *

| Mkdir(name*[string]*) [static]
Description<br>makes a directory |
| --- |

#### Arguments

* name (string)
 
Directory you want to create.

| Returns
<br>true if successful<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To make directory "/data/test" if it does not exist:<br>
```
if (!File.IsDirectory("/data/test")) File.Mkdir("/data/test");
```
 |
| --- |

* * *

| Move(source*[string]*, dest*[string]*) [static]
Description<br>Move a file |
| --- |

#### Arguments

* source (string)
 
Source filename you want to move.

* dest (string)
 
Destination filename you want to move (rename) source file to. Note that if a file with the name dest
already exists it will not be overwritten. Delete the file first with [File.Delete()](reporter-file-class.md#File::Delete).

| Returns
<br>true if move successful, false otherwise.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To move the file "/data/test/file.txt" to "/data/test/file.txt\_backup"<br>
```
var moved = File.Move("/data/test/file.txt", "/data/test/file.txt_backup");
```
 |
| --- |

* * *

| ReadChar()

Description<br>Reads a single character from a file opened for reading by a [File](reporter-file-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>character read from file or  if end of<br>file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading characters from [File](reporter-file-class.md) object f.<br>
```
 var c;

while ( (c = f.ReadChar()) != undefined) { ... }
      
```
 |
| --- |

* * *

| ReadLine()

Description<br>Reads a line from a file opened for reading by a [File](reporter-file-class.md) object.<br>To enable this function to be as fast as possible a maximum line length of 256 characters is used. If<br>you expect a file to have lines longer than 256 characters then use<br>[ReadLongLine](reporter-file-class.md#File::ReadLongLine) which allows lines<br>of any length. |
| --- |

#### Arguments

No arguments

| Returns
<br>string read from file or  if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](reporter-file-class.md) object f.<br>
```

var line;

while ( (line = file.ReadLine() ) != File.EOF)
{
}
      
```
 |
| --- |

* * *

| ReadLongLine()

Description<br>Reads a line from a file opened for reading by a [File](reporter-file-class.md) object.<br>The line can be any length.<br>If your file has lines shorter than 256 characters then you may want to use<br>[ReadLine](reporter-file-class.md#File::ReadLine) instead which is faster. |
| --- |

#### Arguments

No arguments

| Returns
<br>string read from file or  if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](reporter-file-class.md) object f.<br>
```

var line;

while ( (line = file.ReadLongLine() ) != File.EOF)
{
}
      
```
 |
| --- |

* * *

| Seek(position*[integer]*)

Description<br>Sets the file position for reading a file |
| --- |

#### Arguments

* position (integer)
 
Position you want to seek to.

| Returns
<br>No return value |
| --- |

| Example
<br>To seek to position 1000 in file object f:<br>
```
f.Seek(1000);
```
 |
| --- |

* * *

| SimplifyName(filename*[string]*) [static]
Description<br>Simplify the name of a file by removing //, /./ and /../ |
| --- |

#### Arguments

* filename (string)
 
Filename you want to simplify.

| Returns
<br>string filename<br>
Return type
<br>String |
| --- |

| Example
<br>To simplify the filename "/data/test//../file.key"<br>
```
var simple = File.SimplifyName("/data/test//../file.key");
```
<br>This simplifies to "/data/file.key" |
| --- |

* * *

| Size(filename*[string]*) [static]
Description<br>Get the size of a file |
| --- |

#### Arguments

* filename (string)
 
File you want to find the size of.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To find the size of file "/data/test"<br>
```
var size = File.Size("/data/test");
```
 |
| --- |

* * *

| Write(string*[Any valid javascript type]*)

Description<br>Write a string to a file opened for writing by a [File](reporter-file-class.md) object |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to write

| Returns
<br>No return value |
| --- |

| Example
<br>To write string "Hello, world!" to [File](reporter-file-class.md) object f<br>
```
f.Write("Hello, world!\n");
```
<br>To write the title of model 2 to [File](reporter-file-class.md) object f<br>
```
f.Write("The title of model 2 is " + models[2].title + "\n");
```
 |
| --- |

* * *