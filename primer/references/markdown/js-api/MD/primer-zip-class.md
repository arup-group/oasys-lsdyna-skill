# Zip class

The Zip class enables reading/writing/creating zip files. [More...](primer-zip-class.md#Zip_details)

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

## Member functions

* [AddFile](primer-zip-class.md#Zip::AddFile)(filename*[string]*, zipname*[string]*)
* [Close](primer-zip-class.md#Zip::Close)()
* [Information](primer-zip-class.md#Zip::Information)()
* [Next](primer-zip-class.md#Zip::Next)()
* [ReadFile](primer-zip-class.md#Zip::ReadFile)(filename*[string]*)

## Zip constants

| **Name** | **Description** |
| --- | --- |
| Zip.APPEND | Flag to open zip file for appending |
| Zip.READ | Flag to open zip file for reading |
| Zip.WRITE | Flag to open zip file for writing |

## Zip properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| filename (read only) | string | Name of the zip file |
| mode (read only) | constant | Mode the zip file was opened with ([Zip.READ](primer-zip-class.md#Zip.READ), [Zip.WRITE](primer-zip-class.md#Zip.WRITE) or [Zip.APPEND](primer-zip-class.md#Zip.APPEND)) |

| Detailed Description<br>The Zip class provides functions to enable you to read, write and create zip files.<br>The following simple example shows how to write a zip file and then read it again:<br> |
| --- |


```
Message("Creating zip file");
var z = new Zip("C:/temp/test.zip", Zip.WRITE);
z.AddFile("C:/temp/bpost.key",   "bpost/bpost.key");
z.AddFile("C:/temp/door.key",    "door/door.key");
z.AddFile("C:/temp/barrier.key", "other.key");
z.Close();
Message("Done");

var entry = 0;
Message("Reading zip file");
var z = new Zip("C:/temp/test.zip", Zip.READ);
while (true)
{
    entry++;
    Message("Entry "+entry);
    var info = z.Information();
    for (var x in info)
        Message("    "+x+"="+info[x]);

    z.ReadFile(entry+".txt");

    if (!z.Next()) break;
}
z.Close();
Message("Done")
```


| Constructor
new Zip(filename*[string]*, mode*[constant]*)

Description<br>Create a new [Zip](primer-zip-class.md) object for reading/writing zip files. |
| --- |

#### Arguments

* filename (string)
 
Filename of the zip file you want to read/write. If reading (Zip.READ) or appending (Zip.APPEND), the file must exist. If writing (Zip.WRITE) the file will be overwritten (if it exists).

* mode (constant)
 
The mode to open the file with. Can be [Zip.READ](primer-zip-class.md#Zip.READ), [Zip.WRITE](primer-zip-class.md#Zip.WRITE) or [Zip.APPEND](primer-zip-class.md#Zip.APPEND).

| Returns
<br>[Zip](primer-zip-class.md) object<br>
Return type
<br>Zip |
| --- |

| Example
<br>To create a new Zip object to read Zip file "/data/test/file.zip"<br>
```
var p = new Zip("/data/test/file.zip");
```
 |
| --- |

| Details of functions 
AddFile(filename*[string]*, zipname*[string]*)

Description<br>Add a file to the Zip file |
| --- |

#### Arguments

* filename (string)
 
Name of the file you want to add to the zip file

* zipname (string)
 
Name to give the file in the zip file

| Returns
<br>No return value |
| --- |

| Example
<br>To add file 'C:/temp/test.key' to Zip file z with zip name 'test.key':<br>
```
z.AddFile('C:/temp/test.key', 'test.key');
```
 |
| --- |

* * *

| Close()

Description<br>Close a Zip file |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To close Zip file z:<br>
```
z.Close();
```
 |
| --- |

* * *

| Information()

Description<br>Gets information for the current entry in the Zip file such as name, size etc |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| compressedSize | integer | Compressed size |
| crc | integer | Cyclic redundancy check |
| name | string | Filename |
| uncompressedSize | integer | Uncompressed size |

#### Return type

object

| Example
<br>To get the information:<br>
```

var info = z.Information();
for (var x in info) Println(x + '=' + info[x]);
```
 |
| --- |

* * *

| Next()

Description<br>Go to the next entry in the Zip file |
| --- |

#### Arguments

No arguments

| Returns
<br>true if there is a next entry, false if there are no more entries<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To go to the next entry in zip file z:<br>
```
var next = z.Next();
```
 |
| --- |

* * *

| ReadFile(filename*[string]*)

Description<br>Reads the current entry to a file from the Zip file |
| --- |

#### Arguments

* filename (string)
 
Name of the file you want to create

| Returns
<br>No return value |
| --- |

| Example
<br>To read the current entry in Zip file z to a file 'test.key':<br>
```
z.ReadFile('test.key');
```
 |
| --- |

* * *