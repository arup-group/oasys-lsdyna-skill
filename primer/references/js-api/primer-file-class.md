# File class

The File class allows you to read and write text files. [More...](primer-file-class.md#File_details)

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

* [Copy](primer-file-class.md#File::Copy)(source*[string]*, dest*[string]*)
* [Delete](primer-file-class.md#File::Delete)(filename*[string]*)
* [DriveMapFilename](primer-file-class.md#File::DriveMapFilename)(filename*[string]*, format*[constant]*)
* [Exists](primer-file-class.md#File::Exists)(filename*[string]*)
* [FindFiles](primer-file-class.md#File::FindFiles)(directory*[string]*, type (optional)*[constant]*)
* [Get](primer-file-class.md#File::Get)(url*[string]*, filename*[string]*, options (optional)*[object]*)
* [IsAbsolute](primer-file-class.md#File::IsAbsolute)(filename*[string]*)
* [IsDirectory](primer-file-class.md#File::IsDirectory)(filename*[string]*)
* [IsFile](primer-file-class.md#File::IsFile)(filename*[string]*)
* [IsReadable](primer-file-class.md#File::IsReadable)(filename*[string]*)
* [IsWritable](primer-file-class.md#File::IsWritable)(filename*[string]*)
* [Mkdir](primer-file-class.md#File::Mkdir)(directory*[string]*)
* [Mktemp](primer-file-class.md#File::Mktemp)()
* [Proxy](primer-file-class.md#File::Proxy)(name*[string]*)
* [ProxyPassword](primer-file-class.md#File::ProxyPassword)(name*[string]*)
* [ProxyUsername](primer-file-class.md#File::ProxyUsername)(username*[string]*)
* [ReadCSV](primer-file-class.md#File::ReadCSV)(filename*[string]*, delimiter (optional)*[string]*, comment (optional)*[string]*)
* [Rename](primer-file-class.md#File::Rename)(oldname*[string]*, newname*[string]*)
* [Size](primer-file-class.md#File::Size)(filename*[string]*)
* [Upload](primer-file-class.md#File::Upload)(filename*[string]*, url*[string]*, options (optional)*[object]*)

## Member functions

* [Close](primer-file-class.md#File::Close)()
* [FindLineContaining](primer-file-class.md#File::FindLineContaining)(contain*[string]*)
* [FindLineStarting](primer-file-class.md#File::FindLineStarting)(start*[string]*)
* [Flush](primer-file-class.md#File::Flush)()
* [ReadAll](primer-file-class.md#File::ReadAll)()
* [ReadArrayBuffer](primer-file-class.md#File::ReadArrayBuffer)(length (optional)*[integer]*)
* [ReadChar](primer-file-class.md#File::ReadChar)()
* [ReadLine](primer-file-class.md#File::ReadLine)()
* [ReadLongLine](primer-file-class.md#File::ReadLongLine)()
* [Seek](primer-file-class.md#File::Seek)(offset*[integer]*, origin (optional)*[constant]*)
* [Tell](primer-file-class.md#File::Tell)()
* [Write](primer-file-class.md#File::Write)(string*[Any valid javascript type]*)
* [WriteArrayBuffer](primer-file-class.md#File::WriteArrayBuffer)(buffer*[[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects)]*, length (optional)*[integer]*)
* [Writeln](primer-file-class.md#File::Writeln)(string*[Any valid javascript type]*)

## File constants

| **Name** | **Description** |
| --- | --- |
| File.APPEND | Flag to open file for appending |
| File.BINARY | Flag to open file in binary mode. This will have no effect on unix/linux but for windows if a file is opened for writing with binary mode \n will not be translated to \r\n (CRLF), it will be written as \n (LF) |
| File.READ | Flag to open file for reading |
| File.UTF8 | Flag to open file for reading as UTF-8 encoding. |
| File.WRITE | Flag to open file for writing |

### Constants for Find types

| **Name** | **Description** |
| --- | --- |
| File.DIRECTORY | Find directories |
| File.FILE | Find files |

### Constants for Seek types

| **Name** | **Description** |
| --- | --- |
| File.CURRENT | Seek relative to current file position |
| File.END | Seek relative to end of the file |
| File.START | Seek relative to start of the file |

## File properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| filename (read only) | string | Name of the file |
| mode (read only) | constant | Mode the file was opened with ([File.READ](primer-file-class.md#File.READ), [File.WRITE](primer-file-class.md#File.WRITE) etc) |

| Detailed Description<br>The File class gives you simple functions to read and write text files.<br>The following simple example shows how to read from the file "/data/test/file.txt" and<br>print each line read to the dialogue box:<br> |
| --- |


```

var f, line;

f = new File("/data/test/file.txt", File.READ);
while ( (line = f.ReadLine()) != undefined)
{
    Message(line);
}
f.Close();

```

The following simple example shows how to write the numbers 1 to 10 to the
file "/data/test/file.txt":

```

var n, line;

f = new File("/data/test/file.txt", File.WRITE);
for (n=1; n<=10; n++)
{
    f.Writeln(n);
}
f.Close();

```

See the documentation below for more details.

| Constructor
new File(filename*[string]*, mode*[constant]*)

Description<br>Create a new [File](primer-file-class.md) object for reading and writing text files. |
| --- |

#### Arguments

* filename (string)
 
Filename of the file you want to read/write. If reading, the file must exist. If writing, the file will be overwritten (if it exists) if mode is File.WRITE, or if mode is File.APPEND it will be appended to if it exists, or created if it does not.
 When reading a file the filename can also be a URL (uniform resource locator) in which case the file will be read from the remote site. See [File.Get()](primer-file-class.md#File::Get) for more details on the format of the URL.

* mode (constant)
 
The mode to open the file with. Can be [File.READ](primer-file-class.md#File.READ), [File.WRITE](primer-file-class.md#File.WRITE) or [File.APPEND](primer-file-class.md#File.APPEND). For [File.WRITE](primer-file-class.md#File.WRITE) or [File.APPEND](primer-file-class.md#File.APPEND) it can also be ORed with [File.BINARY](primer-file-class.md#File.BINARY) if required. By default text is read and written as ASCII. To read/write text in utf-8 mode can also be ORed with [File.UTF8](primer-file-class.md#File.UTF8) if required.

| Returns
<br>[File](primer-file-class.md) object<br>
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

Description<br>Close a file opened by a [File](primer-file-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To close [File](primer-file-class.md) object f.<br>
```
f.Close();
```
 |
| --- |

* * *

| Copy(source*[string]*, dest*[string]*) [static]
Description<br>Copies a file |
| --- |

#### Arguments

* source (string)
 
Source filename you want to copy.

* dest (string)
 
Destination filename you want to copy source file to.

| Returns
<br>true if copy successful, false otherwise.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To copy the file "/data/test/file.key" to "/data/test/file.key\_backup"<br>
```
var copied = File.Copy("/data/test/file.key", "/data/test/file.key_backup");
```
 |
| --- |

* * *

| Delete(filename*[string]*) [static]
Description<br>Deletes a file |
| --- |

#### Arguments

* filename (string)
 
Filename you want to delete.

| Returns
<br>true if successful, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To delete the file "/data/test/file.key"<br>
```
var deleted = File.Delete("/data/test/file.key");
```
 |
| --- |

* * *

| DriveMapFilename(filename*[string]*, format*[constant]*) [static]
Description<br>Changes a filename or directory name to the correct format for a specific operating system using the directory mappings (if present) |
| --- |

#### Arguments

* filename (string)
 
Filename you want to drive map.

* format (constant)
 
The format for the file/directory name. Can be [Include.NATIVE](primer-include-class.md#Include.NATIVE), [Include.UNIX](primer-include-class.md#Include.UNIX) or [Include.WINDOWS](primer-include-class.md#Include.WINDOWS)

| Returns
<br>string containing drive mapped filename<br>
Return type
<br>String |
| --- |

| Example
<br>If PRIMER has drive S: mapped to "/data" (by using the primer\*drive\_s, this\*drive\_s, d3plot\*drive\_s or oasys\*drive\_s preference)<br>
```
var mapped = File.DriveMapFilename("/data/test/file.key", Include.WINDOWS);
```
<br><br>mapped will be "S:\test\file.key".<br>
```
var mapped = File.DriveMapFilename("S:\\test\\file.key", Include.UNIX);
```
<br><br>mapped will be "/data/test/file.key". |
| --- |

* * *

| Exists(filename*[string]*) [static]
Description<br>Check if a file exists. See also [File.IsDirectory()](primer-file-class.md#File::IsDirectory) and See also [File.IsFile()](primer-file-class.md#File::IsFile). |
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

| FindFiles(directory*[string]*, type (optional)*[constant]*) [static]
Description<br>Find any files and/or directories in a directory. |
| --- |

#### Arguments

* directory (string)
 
Directory to look for files/directories in.

* type (optional) (constant)
 
Type of things to find. Can be bitwise OR of [File.FILE](primer-file-class.md) and [File.DIRECTORY](primer-file-class.md). If omitted only files will be returned.

| Returns
<br>Array of filenames/directories<br>
Return type
<br>Array |
| --- |

| Example
<br>To return the filenames in the directory /data/test:<br>
```
var fileList = File.FindFiles("/data/test")
```
<br><br>To return the directories in the directory /data/test:<br>
```
var fileList = File.FindFiles("/data/test", File.DIRECTORY)
```
<br><br>To return the files and directories in the directory /data/test:<br>
```
var fileList = File.FindFiles("/data/test", File.FILE|File.DIRECTORY)
```
 |
| --- |

* * *

| FindLineContaining(contain*[string]*)

Description<br>Reads a line from a file which contains **contain**, opened for reading by a [File](primer-file-class.md) object.<br>Although this is possible using core JavaScript functions this function should be significantly faster as<br>most of the processing is done by PRIMER in C rather than in the JavaScript interpreter.<br>To enable this function to be as fast as possible a maximum line length of 512 characters is used. If<br>you expect a file to have lines longer than 512 characters then use<br>[ReadLongLine](primer-file-class.md#File::ReadLongLine) which allows lines<br>of any length. If one argument is used then the line must contain that string. If more than one argument is used<br>then lines which contain any of the arguments will be returned |
| --- |

#### Arguments

* contain (string)
 
String which matching lines must contain
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>string read from file or  if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](primer-file-class.md) object f which contain 'example'.<br>
```

var line;

while ( (line = f.FindLineContaining("example") ) != undefined)
{
}
      
```
 |
| --- |

* * *

| FindLineStarting(start*[string]*)

Description<br>Reads a line from a file which starts with start, opened for reading by a [File](primer-file-class.md) object.<br>Although this is possible using core JavaScript functions this function should be significantly faster as<br>most of the processing is done by PRIMER in C rather than in the JavaScript interpreter.<br>To enable this function to be as fast as possible a maximum line length of 512 characters is used. If<br>you expect a file to have lines longer than 512 characters then use<br>[ReadLongLine](primer-file-class.md#File::ReadLongLine) which allows lines<br>of any length. If one argument is used then the line must start with that string. If more than one argument is used<br>then lines which start with any of the arguments will be returned |
| --- |

#### Arguments

* start (string)
 
String which matching lines must start with
 
This argument can be repeated if required
Alternatively a single array argument containing the multiple values can be given

| Returns
<br>string read from file or  if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](primer-file-class.md) object f which start 'example'.<br>
```

var line;

while ( (line = f.FindLineStarting("example") ) != undefined)
{
}
      
```
 |
| --- |

* * *

| Flush()

Description<br>Flushes a file opened for writing by a [File](primer-file-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To flush [File](primer-file-class.md) object f.<br>
```
f.Flush();
```
 |
| --- |

* * *

| Get(url*[string]*, filename*[string]*, options (optional)*[object]*) [static]
Description<br>Get a file from a remote location. See also [File.Proxy()](primer-file-class.md#File::Proxy), [File.ProxyPassword()](primer-file-class.md#File::ProxyPassword) and [File.ProxyUsername()](primer-file-class.md#File::ProxyUsername). |
| --- |

#### Arguments

* url (string)
 
URL (uniform resource locator) of remote file you want to get. Currently http and ftp are supported. For http give the full address including the leading 'http://'. e.g. 
'http://www.example.com/file.html'.
 For ftp an optional username and password can be given. e.g.
 'ftp://ftp.example.com' retrieves the directory listing for the root directory.
 'ftp://ftp.example.com/readme.txt' downloads the file readme.txt from the root directory.
 'ftp://user:password@ftp.example.com/readme.txt' retrieves the readme.txt file from the user's home directory.

* filename (string)
 
Filename you want to save the file to.

* options (optional) (object)

Options for get. If 'username' and 'password' are set then basic authorization using the username and password will be used. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| password (optional) | string | Password |
| response (optional) | boolean | If set to true, then the response code will be returned instead of true/false. This can be used to retieve error messages and codes when the file is not returned successfully. |
| username (optional) | string | Username |

| Returns
<br>true if file was successfully got, false otherwise.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To get the file "http://www.example.com/file.html" and save it to C:\temp:<br>
```
File.Get("http://www.example.com/file.html", "C:\temp\file.html");
```
 |
| --- |

* * *

| IsAbsolute(filename*[string]*) [static]
Description<br>Check if a filename is absolute or relative. |
| --- |

#### Arguments

* filename (string)
 
Filename you want to check.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if the filename "/data/test" is absolute (which it is!)<br>
```
if (File.IsAbsolute("/data/test")) { do something }
```
 |
| --- |

* * *

| IsDirectory(filename*[string]*) [static]
Description<br>Check if a filename is a directory. See also [File.Exists()](primer-file-class.md#File::Exists), [File.IsFile()](primer-file-class.md#File::IsFile), [File.IsReadable()](primer-file-class.md#File::IsReadable) and [File.IsWritable()](primer-file-class.md#File::IsWritable). |
| --- |

#### Arguments

* filename (string)
 
Filename you want to check.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if the filename "/data/test" is a directory<br>
```
if (File.IsDirectory("/data/test")) { do something }
```
 |
| --- |

* * *

| IsFile(filename*[string]*) [static]
Description<br>Check if a filename is a file. See also [File.Exists()](primer-file-class.md#File::Exists), [File.IsDirectory()](primer-file-class.md#File::IsDirectory), [File.IsReadable()](primer-file-class.md#File::IsReadable) and [File.IsWritable()](primer-file-class.md#File::IsWritable). |
| --- |

#### Arguments

* filename (string)
 
Filename you want to check.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if the filename "/data/test" is a file<br>
```
if (File.IsFile("/data/test")) { do something }
```
 |
| --- |

* * *

| IsReadable(filename*[string]*) [static]
Description<br>Check if a filename has read permissions. See also [File.Exists()](primer-file-class.md#File::Exists), [File.IsDirectory()](primer-file-class.md#File::IsDirectory) and [File.IsWritable()](primer-file-class.md#File::IsWritable). |
| --- |

#### Arguments

* filename (string)
 
Filename you want to check.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if the filename "/data/test" is readable<br>
```
if (File.IsReadable("/data/test")) { do something }
```
 |
| --- |

* * *

| IsWritable(filename*[string]*) [static]
Description<br>Check if a filename has write permissions. If *filename* exists and it is a file then it is checked to see if it can be opened with write (File.APPEND permissions). If *filename* exists and it is a directory<br>then the directory is checked for write permission (can files be created in the directory).<br>If *filename* does not exist then it is assumed to be a file and is checked to see if it can be opened for writing (File.WRITE permissions). See also [File.Exists()](primer-file-class.md#File::Exists), [File.IsDirectory()](primer-file-class.md#File::IsDirectory) and [File.IsReadable()](primer-file-class.md#File::IsReadable). |
| --- |

#### Arguments

* filename (string)
 
Filename you want to check.

| Returns
<br>true/false<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To see if the filename "/data/test" is writable<br>
```
if (File.IsWritable("/data/test")) { do something }
```
 |
| --- |

* * *

| Mkdir(directory*[string]*) [static]
Description<br>Make a directory. If PRIMER preference 'directory\_permission' is set e.g.755 then this<br>will apply (same as if set by chmod 755) ignoring any setting of umask.<br>If there is no preference then the users current setting of umask will control permissions (same as system mkdir) |
| --- |

#### Arguments

* directory (string)
 
The name of the directory you want to create.

| Returns
<br>true if successfully created, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To make the directory "/data/test"<br>
```
var success = File.Mkdir("/data/test");
```
 |
| --- |

* * *

| Mktemp() [static]
Description<br>Make a temporary filename for writing a temporary file. |
| --- |

#### Arguments

No arguments

| Returns
<br>String name of temporary filename that can be used.<br>
Return type
<br>String |
| --- |

| Example
<br>To get a temp filename"<br>
```
var filename = File.Mktemp();
```
 |
| --- |

* * *

| Proxy(name*[string]*) [static]
Description<br>Set a proxy for files opened by http, ftp etc. See also [File.Get()](primer-file-class.md#File::Get), [File.ProxyPassword()](primer-file-class.md#File::ProxyPassword) and [File.ProxyUsername()](primer-file-class.md#File::ProxyUsername). |
| --- |

#### Arguments

* name (string)
 
The name of the proxy.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the proxy to "http://example.proxy.com" using port 80:<br>
```
File.Proxy("http://example.proxy.com:80");
```
 |
| --- |

* * *

| ProxyPassword(name*[string]*) [static]
Description<br>Set a proxy password for files opened by http, ftp etc. See also [File.Get()](primer-file-class.md#File::Get), [File.Proxy()](primer-file-class.md#File::Proxy) and [File.ProxyUsername()](primer-file-class.md#File::ProxyUsername). |
| --- |

#### Arguments

* name (string)
 
Password for the proxy server.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the proxy password to "password":<br>
```
File.ProxyPassword("password");
```
 |
| --- |

* * *

| ProxyUsername(username*[string]*) [static]
Description<br>Set a proxy username for files opened by http, ftp etc. See also [File.Get()](primer-file-class.md#File::Get), [File.Proxy()](primer-file-class.md#File::Proxy) and [File.ProxyPassword()](primer-file-class.md#File::ProxyPassword). |
| --- |

#### Arguments

* username (string)
 
The username for the proxy.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the proxy username to "username":<br>
```
File.ProxyUsername("username");
```
 |
| --- |

* * *

| ReadAll()

Description<br>Reads **all** the remaining characters from a file opened for reading by a [File](primer-file-class.md) object. As this function can read the entire file as a string be careful when reading large files as it will consume large amounts of memory. |
| --- |

#### Arguments

No arguments

| Returns
<br>String. Characters read from file or undefined if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Read all characters from [File](primer-file-class.md) object f.<br>
```
 var c = f.ReadAll();
```
 |
| --- |

* * *

| ReadArrayBuffer(length (optional)*[integer]*)

Description<br>Reads binary data from a file opened for reading by a [File](primer-file-class.md) object. The data is returned as an [ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) object. For more details on how to use an [ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) see the following links:<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView). |
| --- |

#### Arguments

* length (optional) (integer)
 
Number of bytes to try to read from the file. If omitted all the remaining data from the file will be read.

| Returns
<br>[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) object or undefined if end of file<br>
Return type
<br>ArrayBuffer |
| --- |

| Example
<br>To read data as 32bit unsigned integers from [File](primer-file-class.md) object f.<br>
```
var ab = f.ReadArrayBuffer();
var u32 = new Uint32Array(ab);
for (var i=0; i<u32.length; i++
{
    var value = u32[i];
}
      
```
 |
| --- |

* * *

| ReadCSV(filename*[string]*, delimiter (optional)*[string]*, comment (optional)*[string]*) [static]
Description<br>Reads the input CSV file and returns an array of string arrays.<br>If the CSV file has legitimate records the function returns an Array object containing sub-arrays of strings otherwise the function returns NULL.<br>The lengths of all the sub-arrays are the same and equal to maximum number of fields in any of the records.<br>For records in a CSV file having fewer fields, the respective sub-arrays are padded with NULL elements to the maximum array length.<br> |
| --- |

#### Arguments

* filename (string)
 
Filename you want to read CSV options from.

* delimiter (optional) (string)
 
Delimiter string to be used. Default is a comma (",").

* comment (optional) (string)
 
Comment string to be used. Default is a dollar sign ("$").

| Returns
<br>2d array of strings.<br><br>
Return type
<br>String |
| --- |

| Example
<br>To Read CSV file "sample.csv" and print all records to a Window.<br>
```

var csv_file_path = "C:\\sample.csv";
var records = "";
if(!File.Exists(csv_file_path))
{
    Window.Information("CSV file %s not present", csv_file_path);
    Exit();
}
var csv_array = File.ReadCSV(csv_file_path);
if(csv_array != null)
{
    for(var i = 0; i < csv_array.length; i++)
    {
        var record_array = csv_array[i];
        for(var j = 0; j < record_array.length; j++)
        {
            if(record_array[j] != null)
                records = records + record_array[j] + " , ";
        }
        records = records + "\n";
    }
}
Options.max_window_lines = csv_array.length;
Window.Information("File.ReadCSV Ouptut", records);
      
```
<br>To Read CSV file "sample.csv" with delimiter string "::" and comment string "##".<br>
```
var csv_array = File.ReadCSV(csv_file_path, "::", "##");
      
```
 |
| --- |

* * *

| ReadChar()

Description<br>Reads a single character from a file opened for reading by a [File](primer-file-class.md) object. |
| --- |

#### Arguments

No arguments

| Returns
<br>character read from file or<br>
```
undefined
```
<br>if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading characters from [File](primer-file-class.md) object f.<br>
```

var c;

while ( (c = f.ReadChar()) != undefined) { ... }
      
```
 |
| --- |

* * *

| ReadLine()

Description<br>Reads a line from a file opened for reading by a [File](primer-file-class.md) object. To enable this function to be as fast as possible a maximum line length of 512 characters is used. If you expect a file to have lines longer than 512 characters then use [ReadLongLine](primer-file-class.md#File::ReadLongLine) which allows lines of any length. |
| --- |

#### Arguments

No arguments

| Returns
<br>string read from file or<br>
```
undefined
```
<br>if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](primer-file-class.md) object f.<br>
```

var line;

while ( (line = f.ReadLine()) != undefined) { ... }
      
```
 |
| --- |

* * *

| ReadLongLine()

Description<br>Reads a line from a file opened for reading by a [File](primer-file-class.md) object. The line can be any length. If your file has lines shorter than 512 characters then you may want to use [ReadLine](primer-file-class.md#File::ReadLine) instead which is faster. |
| --- |

#### Arguments

No arguments

| Returns
<br>string read from file or<br>
```
undefined
```
<br>if end of file<br>
Return type
<br>String |
| --- |

| Example
<br>Loop, reading lines from [File](primer-file-class.md) object f.<br>
```

var line;

while ( (line = f.ReadLongLine()) != undefined) { ... }
      
```
 |
| --- |

* * *

| Rename(oldname*[string]*, newname*[string]*) [static]
Description<br>Rename an existing file to have a different name. |
| --- |

#### Arguments

* oldname (string)
 
Existing filename you want to rename

* newname (string)
 
New filename you want to rename to

| Returns
<br>true if successful, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To rename the file "/data/test/file.key" to "/data/test/new\_file.key"<br>
```
var size = File.Rename("/data/test/file.key", "/data/test/new_file.key");
```
 |
| --- |

* * *

| Seek(offset*[integer]*, origin (optional)*[constant]*)

Description<br>Set the current position for reading or writing in a [File](primer-file-class.md) object. |
| --- |

#### Arguments

* offset (integer)
 
Offset to seek to in the file

* origin (optional) (constant)
 
Origin for offset. Must be one of [File.START](primer-file-class.md#File.START), [File.END](primer-file-class.md#File.END) or [File.CURRENT](primer-file-class.md#File.CURRENT). If omitted [File.START](primer-file-class.md#File.START) will be used.

| Returns
<br>no return value |
| --- |

| Example
<br>To seek to the end of [File](primer-file-class.md) f:<br>
```
f.Seek(0, File.END);
```
<br><br>To seek to the beginning of [File](primer-file-class.md) f:<br>
```
f.Seek(0, File.START);
```
<br><br>To move forward 10 characters in [File](primer-file-class.md) f:<br>
```
f.Seek(10, File.CURRENT);
```
 |
| --- |

* * *

| Size(filename*[string]*) [static]
Description<br>Return the size of a file in bytes |
| --- |

#### Arguments

* filename (string)
 
Filename you want the size of.

| Returns
<br>size in bytes<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the size of the file "/data/test/file.key"<br>
```
var size = File.Size("/data/test/file.key");
```
 |
| --- |

* * *

| Tell()

Description<br>Return the current file position for a [File](primer-file-class.md) object.<br>Note that on Windows when reading files if the file is not opened with [File.BINARY](primer-file-class.md#File.BINARY)<br>this may not return the correct file position for files with unix line endings. |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the current file position for [File](primer-file-class.md) f:<br>
```
var pos = f.Tell();
```
 |
| --- |

* * *

| Upload(filename*[string]*, url*[string]*, options (optional)*[object]*) [static]
Description<br>Uploads a file to a remote location. See also [File.Proxy()](primer-file-class.md#File::Proxy), [File.ProxyPassword()](primer-file-class.md#File::ProxyPassword) and [File.ProxyUsername()](primer-file-class.md#File::ProxyUsername). |
| --- |

#### Arguments

* filename (string)
 
Filename you want to upload.

* url (string)
 
URL (uniform resource locator) of the remote location you want to upload the file to. Currently only http is supported. Give the full address including the leading 'http://'. e.g. 
'http://www.example.com/file.html'.

* options (optional) (object)

Options for upload. If both of these are set then basic authorization using the username and password will be used. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| password (optional) | string | Password |
| username (optional) | string | Username |

| Returns
<br>true if file was successfully uploaded, false otherwise.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To upload the file "C:\temp\file.txt" to "http://www.example.com/file.txt":<br>
```
File.Upload("C:/temp/file.txt", "http://www.example.com/file.txt");
```
 |
| --- |

* * *

| Write(string*[Any valid javascript type]*)

Description<br>Write a string to a file opened for writing by a [File](primer-file-class.md) object. **Note that a carriage return is not added**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to write

| Returns
<br>No return value |
| --- |

| Example
<br>To write string "Hello, world!" to [File](primer-file-class.md) object f<br>
```
f.Write("Hello, world!\n");
```
<br>To write the title of model m to [File](primer-file-class.md) object f<br>
```
f.Write("The title of model 2 is " + m.title + "\n");
```
 |
| --- |

* * *

| WriteArrayBuffer(buffer*[[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects)]*, length (optional)*[integer]*)

Description<br>Writes binary data to a file opened for writing by a [File](primer-file-class.md) object. The data to write is an [ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) object. For more details on how to use an [ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) see the following links:<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)<br> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView). |
| --- |

#### Arguments

* buffer ([ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects))
 
[ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) to write to file

* length (optional) (integer)
 
Number of bytes to write to the file. If omitted all the data in the [ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) will be written (buffer.byteLength bytes)

| Returns
<br>No return value |
| --- |

| Example
<br>To write [ArrayBuffer](https://262.ecma-international.org/6.0/#sec-arraybuffer-objects) ab to [File](primer-file-class.md) object f.<br>
```
f.WriteArrayBuffer(ab); 
```
 |
| --- |

* * *

| Writeln(string*[Any valid javascript type]*)

Description<br>Write a string to a file opened for writing by a [File](primer-file-class.md) object **adding a carriage return**. |
| --- |

#### Arguments

* string (Any valid javascript type)
 
The string/item that you want to write

| Returns
<br>No return value |
| --- |

| Example
<br>To write string "Hello, world!" to [File](primer-file-class.md) object f automatically adding a carriage return<br>
```
f.Writeln("Hello, world!");
```
<br>To write the title of model m to [File](primer-file-class.md) object f automatically adding a carriage return<br>
```
f.Writeln("The title of model 2 is " + m.title);
```
 |
| --- |

* * *