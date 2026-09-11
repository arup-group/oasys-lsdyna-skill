# Include class

The Include class allows you to access the include files in a model. [More...](this-include-class.md#Include_details)

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

## Include constants

### Constants for Directory separators

| **Name** | **Description** |
| --- | --- |
| Include.NATIVE | Use directory separators native to this machine when writing directory names. |
| Include.UNIX | Use unix directory separators when writing directory names. |
| Include.WINDOWS | Use windows directory separators when writing directory names. |

| Detailed Description<br>Originally developed for use in PRIMER, the Include class allows a user to create and query include files in a model. A stripped-back version of this class has been added to T/HIS and REPORTER for consistency between the programs. See [File.DriveMapFilename](this-file-class.md#File::DriveMapFilename) for the current use of this class in T/HIS. |
| --- |