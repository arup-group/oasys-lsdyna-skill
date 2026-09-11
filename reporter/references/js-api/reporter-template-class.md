# Template class

The Template class gives access to templates in Reporter. [More...](reporter-template-class.md#Template_details)

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

* [GetAll](reporter-template-class.md#Template::GetAll)()
* [GetCurrent](reporter-template-class.md#Template::GetCurrent)()

## Member functions

* [Close](reporter-template-class.md#Template::Close)()
* [DeletePage](reporter-template-class.md#Template::DeletePage)(index*[integer]*)
* [DeleteTemporaryVariables](reporter-template-class.md#Template::DeleteTemporaryVariables)()
* [EditVariables](reporter-template-class.md#Template::EditVariables)(title (optional)*[string]*, message (optional)*[string]*, update (optional)*[boolean]*, variables (optional)*[array]*, columns (optional)*[constant]*, alphabetical (optional)*[boolean]*)
* [ExpandVariablesInString](reporter-template-class.md#Template::ExpandVariablesInString)(string*[string]*)
* [Generate](reporter-template-class.md#Template::Generate)()
* [GetAllPages](reporter-template-class.md#Template::GetAllPages)()
* [GetMaster](reporter-template-class.md#Template::GetMaster)()
* [GetPage](reporter-template-class.md#Template::GetPage)(index*[integer]*)
* [GetVariableDescription](reporter-template-class.md#Template::GetVariableDescription)(name*[string]*)
* [GetVariableValue](reporter-template-class.md#Template::GetVariableValue)(name*[string]*)
* [Html](reporter-template-class.md#Template::Html)(filename*[string]*)
* [Pdf](reporter-template-class.md#Template::Pdf)(filename*[string]*)
* [Ppt](reporter-template-class.md#Template::Ppt_deprecated)(filename*[string]*) [deprecated]
* [Pptx](reporter-template-class.md#Template::Pptx)(filename*[string]*)
* [Print](reporter-template-class.md#Template::Print)(printer*[string]*)
* [Save](reporter-template-class.md#Template::Save)()
* [SaveAs](reporter-template-class.md#Template::SaveAs)(filename*[string]*, readonly (optional)*[boolean]*)
* [Update](reporter-template-class.md#Template::Update)()

## Template properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| filename (read only) | string | Filename (without path) of the [Template](reporter-template-class.md). |
| generating (read only) | logical | true if the entire template is currently being generated |
| name (read only) | string | This property is deprecated in version 15.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Name of the [Template](reporter-template-class.md). This property has been preserved for compatability with older scripts. It either contains the absolute path and
filename, or just the filename, depending on how the [Template](reporter-template-class.md) was opened. Please use the
filename and path properties for consistent results. [deprecated] |
| pages (read only) | integer | Number of [Pages](reporter-page-class.md) in template |
| path (read only) | string | Absolute path (without filename) of the [Template](reporter-template-class.md). If the Template is new
and has not yet been saved, this property will be empty. |
| readonly (read only) | logical | true if the template is read-only |
| variables | array | This property is deprecated in version 12.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Array of [Variable](reporter-variable-class.md) objects for this template. Please use [Variable.GetAll()](reporter-variable-class.md#Variable::GetAll) and [Variable.GetFromName()](reporter-variable-class.md#Variable::GetFromName) instead. [deprecated] |
| view | constant | Current view type (presentation or design view) for this [Template](reporter-template-class.md). Can be: [Reporter.VIEW_DESIGN](reporter-reporter-class.md#Reporter.VIEW_DESIGN) or [Reporter.VIEW_PRESENTATION](reporter-reporter-class.md#Reporter.VIEW_PRESENTATION). |

| Detailed Description<br>The Template class allows you to access the templates that Reporter currently has open.<br> Note that if you want to get a list of the current templates in Reporter you should see the [templates](reporter-reporter-class.md#templates) array in the [reporter](reporter-reporter-class.md) object.<br> The currently active template is stored in the [currentTemplate](reporter-reporter-class.md#currentTemplate) property of the [reporter](reporter-reporter-class.md) object. |
| --- |

| Constructor
new Template(filename (optional)*[string]*)

Description<br>Create a new [Template](reporter-template-class.md). The filename argument is optional. If present it is a file to open |
| --- |

#### Arguments

* filename (optional) (string)
 
Name of template file to open

| Returns
<br>[Template](reporter-template-class.md) object<br>
Return type
<br>Template |
| --- |

| Example
<br>To create a new blank Template object<br>
```
var template = new Template();
```
 |
| --- |

| Details of functions 
Close()

Description<br>Close a template.<br>**Note that if you call this function for a Template object,the Template data will be deleted, so you should not try to use it afterwards!**. |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To close template data:<br>
```
data.Close();
```
 |
| --- |

* * *

| DeletePage(index*[integer]*)

Description<br>Deletes a page from a template. |
| --- |

#### Arguments

* index (integer)
 
The index of the page that you want to delete. Note that indices start at 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To delete the first page of template t:<br>
```
t.DeletePage(0);
```
 |
| --- |

* * *

| DeleteTemporaryVariables()

Description<br>Deletes any temporary variables from a template. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To delete all the temporary variables from template t:<br>
```
t.DeleteTemporaryVariables();
```
 |
| --- |

* * *

| EditVariables(title (optional)*[string]*, message (optional)*[string]*, update (optional)*[boolean]*, variables (optional)*[array]*, columns (optional)*[constant]*, alphabetical (optional)*[boolean]*)

Description<br>Start a dialog to edit the template variables |
| --- |

#### Arguments

* title (optional) (string)
 
Title for dialog. If omitted, null or an empty string is given then the default title will be
used.

* message (optional) (string)
 
Message to show in dialog. If omitted, null or an empty string is given then the default message will
be used.

* update (optional) (boolean)
 
Whether the variables in the template will be updated with the new values if OK is pressed. Setting this to be false allows you to check variable values before updating them from a script. If omitted the default is true

* variables (optional) (array)
 
A list of variables to show in the dialog. If omitted, null or an empty array, all variables will be shown

* columns (optional) (constant)
 
Columns to show in the dialog (as well as the variable value column). Can be a bitwise OR of [Variable.NAME](reporter-variable-class.md#Variable.NAME), [Variable.TYPE](reporter-variable-class.md#Variable.TYPE), [Variable.DESCRIPTION](reporter-variable-class.md#Variable.DESCRIPTION), [Variable.FORMAT](reporter-variable-class.md#Variable.FORMAT), [Variable.PRECISION](reporter-variable-class.md#Variable.PRECISION) and [Variable.TEMPORARY](reporter-variable-class.md#Variable.TEMPORARY). If omitted columns will be shown for name and description

* alphabetical (optional) (boolean)
 
Whether to sort variables in the table by alphabetical order. If false, variables are listed in the order they are passed in the optional variables argument. If no variables are passed to the function, all template variables will be shown in alphabetical order. If omitted, the default value is true.

| Returns
<br>Object containing the variable names and values or null if cancel was pressed.<br>
Return type
<br>Object |
| --- |

| Example
<br>To edit all of the variables in template:<br>
```
var variables = template.EditVariables();
```
<br>To edit variables TEST and EXAMPLE in template giving a title and a message, returning the edited values but<br>**not** updating them in the template:<br>
```
var variables = template.EditVariables("Edit variables",
"Type in the values", false, ["TEST", "EXAMPLE");
```
 |
| --- |

* * *

| ExpandVariablesInString(string*[string]*)

Description<br>Replaces any variables in a string with their current values |
| --- |

#### Arguments

* string (string)
 
The string you want to expand variables in.

| Returns
<br>String (string) with variables expanded. If a variable in a string does not exist it is replaced by a<br>blank.<br>
Return type
<br>String |
| --- |

| Example
<br>If the variable FRED in template contains the value "test", then the following<br>
```
var value
= template.ExpandVariablesInString("This is a %FRED%");
```
<br>will return "This is a test" in variable value. |
| --- |

* * *

| Generate()

Description<br>Generate a template |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To generate template data:<br>
```
data.Generate();
```
 |
| --- |

* * *

| GetAll() [static]
Description<br>Get all of the open templates |
| --- |

#### Arguments

No arguments

| Returns
<br>array of [Template](reporter-template-class.md) objects or null if no open templates<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the templates open in REPORTER:<br>
```
var templates = Template.GetAll();
```
 |
| --- |

* * *

| GetAllPages()

Description<br>Gets all of the pages from a template. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of [Page](reporter-page-class.md) objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the pages from template t:<br>
```
var pages = t.GetAllPages();
```
 |
| --- |

* * *

| GetCurrent() [static]
Description<br>Get the currently active template |
| --- |

#### Arguments

No arguments

| Returns
<br>[Template](reporter-template-class.md) object or null if no active template<br>
Return type
<br>Template |
| --- |

| Example
<br>To get the current template open in REPORTER:<br>
```
var current_template = Template.GetCurrent();
```
 |
| --- |

* * *

| GetMaster()

Description<br>Get the master page from a template. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Page](reporter-page-class.md) object<br>
Return type
<br>Page |
| --- |

| Example
<br>To get the master page of template t:<br>
```
var m = t.GetMaster();
```
 |
| --- |

* * *

| GetPage(index*[integer]*)

Description<br>Get a page from a template. |
| --- |

#### Arguments

* index (integer)
 
The index of the page that you want to get. Note that indices start at 0.

| Returns
<br>[Page](reporter-page-class.md) object<br>
Return type
<br>Page |
| --- |

| Example
<br>To get the first page of template t:<br>
```
var p = t.GetPage(0);
```
 |
| --- |

* * *

| GetVariableDescription(name*[string]*)

Description<br>Get the description for a variable |
| --- |

#### Arguments

* name (string)
 
Variable name you want to get description for.

| Returns
<br>Variable description (string) or null if variable does not exist<br>
Return type
<br>String |
| --- |

| Example
<br>To get description for variable FRED in template:<br>
```
var description = template.GetVariableDescription("FRED");
```
 |
| --- |

* * *

| GetVariableValue(name*[string]*)

Description<br>Get the value for a variable |
| --- |

#### Arguments

* name (string)
 
Variable name you want to get value for.

| Returns
<br>Variable value (string) or null if variable does not exist<br>
Return type
<br>String |
| --- |

| Example
<br>To get value for variable FRED in template:<br>
```
var value = template.GetVariableValue("FRED");
```
 |
| --- |

* * *

| Html(filename*[string]*)

Description<br>Save a template as HTML |
| --- |

#### Arguments

* filename (string)
 
Filename you want to save.

| Returns
<br>no return value |
| --- |

| Example
<br>To save template data as file /data/test/template.html:<br>
```
data.Html("/data/test/template.html");
```
 |
| --- |

* * *

| Pdf(filename*[string]*)

Description<br>Save a template as Adobe Acrobat PDF |
| --- |

#### Arguments

* filename (string)
 
Filename you want to save.

| Returns
<br>no return value |
| --- |

| Example
<br>To save template data as file /data/test/template.pdf:<br>
```
data.Pdf("/data/test/template.pdf");
```
 |
| --- |

* * *

| Ppt(filename*[string]*) [deprecated]
<br>This function is deprecated in version 18.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Save a template as PowerPoint. This function is deprecated. Use [Template.Pptx](reporter-template-class.md#Template::Pptx) instead. |
| --- |

#### Arguments

* filename (string)
 
Filename you want to save.

| Returns
<br>no return value |
| --- |

| Example
<br>To save template data as file /data/test/template.pptx:<br>
```
data.Ppt("/data/test/template.pptx");
```
 |
| --- |

* * *

| Pptx(filename*[string]*)

Description<br>Save a template as PowerPoint |
| --- |

#### Arguments

* filename (string)
 
Filename you want to save.

| Returns
<br>no return value |
| --- |

| Example
<br>To save template data as file /data/test/template.pptx:<br>
```
data.Pptx("/data/test/template.pptx");
```
 |
| --- |

* * *

| Print(printer*[string]*)

Description<br>Print template on a printer |
| --- |

#### Arguments

* printer (string)
 
Printer you want to print to.

| Returns
<br>no return value |
| --- |

| Example
<br>To print template data on printer myprinter:<br>
```
data.Print("myprinter");
```
 |
| --- |

* * *

| Save()

Description<br>Save a template |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To save template data:<br>
```
data.Save();
```
 |
| --- |

* * *

| SaveAs(filename*[string]*, readonly (optional)*[boolean]*)

Description<br>Save a template/report with a new name |
| --- |

#### Arguments

* filename (string)
 
Filename you want to save. Note if you use the .orr extension the template will be saved as a report
if generated.

* readonly (optional) (boolean)
 
If saved template/report will be readonly or not.

| Returns
<br>no return value |
| --- |

| Example
<br>To save template data as file /data/test/template.opt:<br>
```
data.SaveAs("/data/test/template.opt");
```
 |
| --- |

* * *

| Update()

Description<br>Update/redraw a template |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To update template data:<br>
```
data.Update();
```
 |
| --- |

* * *