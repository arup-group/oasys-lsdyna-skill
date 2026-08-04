# Variable class

The Variable class gives access to variables in Reporter. [More...](reporter-variable-class.md#Variable_details)

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

* [GetAll](reporter-variable-class.md#Variable::GetAll)(template*[[Template](reporter-template-class.md)]*)
* [GetFromName](reporter-variable-class.md#Variable::GetFromName)(template*[[Template](reporter-template-class.md)]*, name*[string]*)

## Member functions

* [Remove](reporter-variable-class.md#Variable::Remove)()

## Variable constants

| **Name** | **Description** |
| --- | --- |
| Variable.DESCRIPTION | Show variable description when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |
| Variable.FORMAT | Show variable format when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |
| Variable.FORMAT\_FLOAT | Variable has floating point number format |
| Variable.FORMAT\_GENERAL | Variable has general format |
| Variable.FORMAT\_INTEGER | Variable has integer format |
| Variable.FORMAT\_LOWERCASE | Variable has lower case format |
| Variable.FORMAT\_NONE | Variable has no format |
| Variable.FORMAT\_SCIENTIFIC | Variable has scientific format |
| Variable.FORMAT\_UPPERCASE | Variable has upper case format |
| Variable.NAME | Show variable name when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |
| Variable.PRECISION | Show variable precision when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |
| Variable.READONLY | Show variable readonly status when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |
| Variable.TEMPORARY | Show variable temporary status when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |
| Variable.TYPE | Show variable type when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |
| Variable.VALUE | Show variable value when editing variables with [Template.EditVariables()](reporter-template-class.md#Template::EditVariables) |

## Variable properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| description | string | [Variable](reporter-variable-class.md) description |
| format | constant | [Variable](reporter-variable-class.md) format. Can be [Variable.FORMAT_NONE](reporter-variable-class.md#Variable.FORMAT_NONE), [Variable.FORMAT_FLOAT](reporter-variable-class.md#Variable.FORMAT_FLOAT), [Variable.FORMAT_SCIENTIFIC](reporter-variable-class.md#Variable.FORMAT_SCIENTIFIC), [Variable.FORMAT_GENERAL](reporter-variable-class.md#Variable.FORMAT_GENERAL), [Variable.FORMAT_INTEGER](reporter-variable-class.md#Variable.FORMAT_INTEGER), [Variable.FORMAT_UPPERCASE](reporter-variable-class.md#Variable.FORMAT_UPPERCASE) or [Variable.FORMAT_LOWERCASE](reporter-variable-class.md#Variable.FORMAT_LOWERCASE) |
| name | string | [Variable](reporter-variable-class.md) name |
| precision | integer | [Variable](reporter-variable-class.md) precision for floating point numbers. |
| readonly | logical | If [Variable](reporter-variable-class.md) is read only or not. |
| temporary | logical | If [Variable](reporter-variable-class.md) is temporary or not. |
| type | string | [Variable](reporter-variable-class.md) type. Predefined types are "Directory", "File(absolute)", "File(basename)", "File(extension)", "File(tail)", "General", "Number" and "String". Alternatively give your own type. e.g. "NODE ID" |
| value | string | [Variable](reporter-variable-class.md) value |

| Detailed Description<br>The Variable class allows you to access the name, description and value of a variable inside Reporter.<br>Note that if you want to get a list of the variables used in a [Template](reporter-template-class.md) you should see the [variables](reporter-template-class.md#variables) array in the [Template](reporter-template-class.md) object.<br> The [name](reporter-variable-class.md#name), [description](reporter-variable-class.md#description) and [value](reporter-variable-class.md#value) properties give access to the variable name, description and value respectively. |
| --- |

| Constructor
new Variable(template*[Template]*, name*[string]*, description (optional)*[string]*, value (optional)*[string]*, type (optional)*[string]*, readonly (optional)*[boolean]*, temporary (optional)*[boolean]*)

Description<br>Create a new [Variable](reporter-variable-class.md). The template and name arguments MUST be given, all others are optional |
| --- |

#### Arguments

* template (Template)
 
[Template](reporter-template-class.md) object to create variable in

* name (string)
 
Name of variable

* description (optional) (string)
 
Description of variable

* value (optional) (string)
 
Variable value

* type (optional) (string)
 
Type of variable. Predefined types are "Directory", "File(absolute)", "File(basename)",
"File(extension)", "File(tail)", "General", "Number" and "String". Alternatively give your own type. e.g. "NODE ID". If
omitted default is "General"

* readonly (optional) (boolean)
 
If variable is readonly or not. If omitted default is false.

* temporary (optional) (boolean)
 
If variable is temporary or not. If omitted default is true.

| Returns
<br>[Variable](reporter-variable-class.md) object<br>
Return type
<br>Variable |
| --- |

| Example
<br>To create a new Variable object called TEST with description 'test variable', type of "Number" and value '10' which is not readonly for template, templ<br>
```
var variable = new Variable(templ, "TEST", "test variable", "10", "Number", false);
```
 |
| --- |

| Details of functions 
GetAll(template*[[Template](reporter-template-class.md)]*) [static]
Description<br>Returns an array of Variable objects for all of the variables in a [Template](reporter-template-class.md). |
| --- |

#### Arguments

* template ([Template](reporter-template-class.md))
 
[Template](reporter-template-class.md) to get the variables from

| Returns
<br>Array of [Variable](reporter-variable-class.md) objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all the variables in template t:<br>
```
var v = Variable.GetAll(t);
```
 |
| --- |

* * *

| GetFromName(template*[[Template](reporter-template-class.md)]*, name*[string]*) [static]
Description<br>Returns the Variable object for a variable name. |
| --- |

#### Arguments

* template ([Template](reporter-template-class.md))
 
[Template](reporter-template-class.md) to find the variable in

* name (string)
 
name of the variable you want the Variable object for

| Returns
<br>[Variable](reporter-variable-class.md) object (or null if variable does not exist)<br>
Return type
<br>Variable |
| --- |

| Example
<br>To get the Variable object for variable EXAMPLE in template t:<br>
```
var v = Variable.GetFromName(t, "EXAMPLE");
```
 |
| --- |

* * *

| Remove()

Description<br>Remove a variable<br>**Note that if you call this function for a Variable object,the Variable data will be deleted, so you should not try to use it afterwards!**. |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To remove variable data:<br>
```
data.Remove();
```
 |
| --- |

* * *