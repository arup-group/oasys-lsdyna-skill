# Comment class

The Comment class gives you access to comment cards in PRIMER. [More...](primer-comment-class.md#Comment_details)

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

* [Create](primer-comment-class.md#Comment::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [First](primer-comment-class.md#Comment::First)(Model*[[Model](primer-model-class.md)]*)
* [FlagAll](primer-comment-class.md#Comment::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-comment-class.md#Comment::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-comment-class.md#Comment::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-comment-class.md#Comment::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-comment-class.md#Comment::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-comment-class.md#Comment::Last)(Model*[[Model](primer-model-class.md)]*)
* [Select](primer-comment-class.md#Comment::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [Total](primer-comment-class.md#Comment::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnflagAll](primer-comment-class.md#Comment::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

## Member functions

* [AddLine](primer-comment-class.md#Comment::AddLine)(Line content*[String or array of strings]*, Line number (optional)*[Integer]*)
* [Browse](primer-comment-class.md#Comment::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-comment-class.md#Comment::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-comment-class.md#Comment::Copy)(range (optional)*[boolean]*)
* [DeleteLine](primer-comment-class.md#Comment::DeleteLine)(Line number*[Integer]*)
* [Edit](primer-comment-class.md#Comment::Edit)(modal (optional)*[boolean]*)
* [Error](primer-comment-class.md#Comment::Error)(message*[string]*, details (optional)*[string]*)
* [Flagged](primer-comment-class.md#Comment::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetLine](primer-comment-class.md#Comment::GetLine)(Line (optional)*[integer]*)
* [GetParameter](primer-comment-class.md#Comment::GetParameter)(prop*[string]*)
* [Keyword](primer-comment-class.md#Comment::Keyword)()
* [KeywordCards](primer-comment-class.md#Comment::KeywordCards)()
* [ModifyLine](primer-comment-class.md#Comment::ModifyLine)(Line number*[Integer]*, New line content*[String]*)
* [Next](primer-comment-class.md#Comment::Next)()
* [Previous](primer-comment-class.md#Comment::Previous)()
* [SetFlag](primer-comment-class.md#Comment::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ViewParameters](primer-comment-class.md#Comment::ViewParameters)()
* [Warning](primer-comment-class.md#Comment::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-comment-class.md#Comment::Xrefs)()
* [toString](primer-comment-class.md#Comment::toString)()

## Comment constants

### Constants for Comment anchor\_mode types

| **Name** | **Description** |
| --- | --- |
| Comment.MULTIPLE | The \*COMMENT is associated with all cards in the next block of keywords. |
| Comment.SINGLE | The \*COMMENT is associated with just the one immediately following keyword. |

## Comment properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| anchor\_mode | integer | Anchor mode. Can be [Comment.SINGLE](primer-comment-class.md#Comment.SINGLE), [Comment.MULTIPLE](primer-comment-class.md#Comment.MULTIPLE). |
| exists (read only) | logical | true if comment exists, false if referred to but not defined. |
| header | string | The header of the comment, or empty if the comment has no header. |
| include | integer | The [Include](primer-include-class.md) file number that the comment is in. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the comment is in. |
| nlines | integer | Number of lines in the comment. |
| noecho | logical | true if \_NOECHO option is set, false if not. |

| Detailed Description<br>The Comment class allows you to create, modify, edit and manipulate comment cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new Comment(Model*[[Model](primer-model-class.md)]*, Header (optional)*[string]*, Mode (optional)*[constant]*)

Description<br>Create a new [Comment](primer-comment-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that comment will be created in

* Header (optional) (string)
 
[Comment](primer-comment-class.md) number

* Mode (optional) (constant)
 
Anchor: single or multiple

| Returns
<br>[Comment](primer-comment-class.md) object<br>
Return type
<br>Comment |
| --- |

| Example
<br><br><br>To create a new comment in model m with header "My header", and multiple anchor:<br>
```
var c = new Comment(m, "My header", Comment.MULTIPLE);
```
<br><br> <br>To create a new comment in model m without header, and single anchor:<br>
```
var c = new Comment(m);
```
 |
| --- |

| Details of functions 
AddLine(Line content*[String or array of strings]*, Line number (optional)*[Integer]*)

Description<br>Adds a line, or an array of lines, to a comment object. |
| --- |

#### Arguments

* Line content (String or array of strings)
 
String that will be added to a line

* Line number (optional) (Integer)

0: First line, 1: Second line, etc.
 
If array of lines has been passed in the first argument, the first line of the array will be inserted in the line number specified in second argument, the second line of the array will be inserted in the following line number, etc.
 
If that line already exists, that line and rest of them below will be shifted down.
 
If greater than number of existing lines, blank lines will be added.
 
If lower than 0, not valid argument.
 
If no argument, the line(s) will be appended at the end.

| Returns
<br>no return value |
| --- |

| Example
<br>To add a new line in the second row of comment c:<br>
```
var str = c.AddLine("New line", 1);
```
 |
| --- |

* * *

| Browse(modal (optional)*[boolean]*)

Description<br>Starts an edit panel in Browse mode. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Browse comment c:<br>
```
c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the comment. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the comment

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for comment c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the comment. The target include of the copied comment can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Comment object<br>
Return type
<br>Comment |
| --- |

| Example
<br>To copy comment c into comment z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a comment |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the comment will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>Comment object (or null if not made).<br>
Return type
<br>Comment |
| --- |

| Example
<br>To start creating a comment in model m:<br>
```
var c = Comment.Create(m);
```
 |
| --- |

* * *

| DeleteLine(Line number*[Integer]*)

Description<br>Deletes a line of a comment. |
| --- |

#### Arguments

* Line number (Integer)
 
Line number to delete (starting at 0). The following lines will be shifted up.

| Returns
<br>no return value |
| --- |

| Example
<br>To delete the line in the second row of comment c:<br>
```
var str = c.DeleteLine(1);
```
 |
| --- |

* * *

| Edit(modal (optional)*[boolean]*)

Description<br>Starts an interactive editing panel. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Edit comment c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for comment. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The error message to give

* details (optional) (string)
 
An optional detailed error message

| Returns
<br>No return value |
| --- |

| Example
<br>To add an error message "My custom error" for comment c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first comment in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first comment in

| Returns
<br>Comment object (or null if there are no comments in the model).<br>
Return type
<br>Comment |
| --- |

| Example
<br>To get the first comment in model m:<br>
```
var c = Comment.First(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the comments in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all comments will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the comments

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the comments with flag f in model m:<br>
```
Comment.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the comment is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the comment

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if comment c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each comment in the model.<br> **Note that ForEach has been designed to make looping over comments as fast as possible and so has some limitations. Firstly, a single temporary Comment object is created and on each function call it is updated with the current comment data. This means that you should not try to store the Comment object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new comments inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all comments are in

* func (function)
 
Function to call for each comment

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the comments in model m:<br>
```
Comment.ForEach(m, test);
function test(c)
{
// c is Comment object
}
```
<br><br>To call function test for all of the comments in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Comment.ForEach(m, test, data);
function test(c, extra)
{
// c is Comment object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Comment objects or properties for all of the comments in a model in PRIMER. If the optional property argument is not given then an array of Comment objects is returned. If the property argument is given, that property value for each comment is returned in the array instead of a Comment object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get comments from

* property (optional) (string)
 
Name for property to get for all comments in the model

| Returns
<br>Array of Comment objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Comment objects for all of the comments in model m:<br>
```
var a = Comment.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each comment in model m:<br>
```
var a = Comment.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Comment objects for all of the flagged comments in a model in PRIMER If the optional property argument is not given then an array of Comment objects is returned. If the property argument is given, then that property value for each comment is returned in the array instead of a Comment object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get comments from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the comments that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged comments in the model

| Returns
<br>Array of Comment objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Comment objects for all of the comments in model m flagged with f:<br>
```
var c = Comment.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the comments in model m flagged with f:<br>
```
var a = Comment.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Comment object for a comment ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the comment in

* number (integer)
 
number of the comment you want the Comment object for

| Returns
<br>Comment object (or null if comment does not exist).<br>
Return type
<br>Comment |
| --- |

| Example
<br>To get the Comment object for comment 100 in model m<br>
```
var c = Comment.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetLine(Line (optional)*[integer]*)

Description<br>Extracts the lines (the strings) from a comment object. |
| --- |

#### Arguments

* Line (optional) (integer)
 
Line number to be extracted. Default value: 0 (first line)

| Returns
<br>String (or null if no lines in the comment and not argument passed)<br>
Return type
<br>String |
| --- |

| Example
<br>To extract the first line of comment c:<br>
```
var str = c.GetLine();
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Comment property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Comment.ViewParameters()](primer-comment-class.md#Comment::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
comment property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Comment property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Comment property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this comment (\*COMMENT) and the header of the comment if there is one. **Note that a carriage return is not added**. See also [Comment.KeywordCards()](primer-comment-class.md#Comment::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for comment c:<br>
```
var key = c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the comment. **Note that a carriage return is not added**. See also [Comment.Keyword()](primer-comment-class.md#Comment::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for comment c:<br>
```
var cards = c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last comment in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last comment in

| Returns
<br>Comment object (or null if there are no comments in the model).<br>
Return type
<br>Comment |
| --- |

| Example
<br>To get the last comment in model m:<br>
```
var c = Comment.Last(m);
```
 |
| --- |

* * *

| ModifyLine(Line number*[Integer]*, New line content*[String]*)

Description<br>Modifies the content of a line in a comment. |
| --- |

#### Arguments

* Line number (Integer)
 
Line number to modify (starting at 0)

* New line content (String)
 
String that replaces the existing one in a line

| Returns
<br>no return value |
| --- |

| Example
<br>To modify the line in the second row of comment c:<br>
```
var str = c.ModifyLine(1, "Modified line");
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next comment in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Comment object (or null if there are no more comments in the model).<br>
Return type
<br>Comment |
| --- |

| Example
<br>To get the comment in model m after comment c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous comment in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Comment object (or null if there are no more comments in the model).<br>
Return type
<br>Comment |
| --- |

| Example
<br>To get the comment in model m before comment c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select comments using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting comments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only comments from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only comments that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any comments can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of comments selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select comments from model m, flagging those selected with flag f, giving the prompt 'Select comments':<br>
```
Comment.Select(f, 'Select comments', m);
```
<br><br>To select comments, flagging those selected with flag f but limiting selection to comments flagged with flag l, giving the prompt 'Select comments':<br>
```
Comment.Select(f, 'Select comments', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the comment. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the comment

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for comment c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of comments in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing comments should be counted. If false or omitted
referenced but undefined comments will also be included in the total.

| Returns
<br>number of comments<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of comments in model m:<br>
```
var total = Comment.Total(m);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the comments in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all comments will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the comments

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the comments in model m:<br>
```
Comment.UnflagAll(m, f);
```
 |
| --- |

* * *

| ViewParameters()

Description<br>Object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. This function temporarily changes the behaviour so that if a property is a parameter the parameter name is returned instead. This can be used with 'method chaining' (see the example below) to make sure a property argument is correct. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Comment](primer-comment-class.md) object.<br>
Return type
<br>Comment |
| --- |

| Example
<br>To check if Comment property c.example is a parameter by using the [Comment.GetParameter()](primer-comment-class.md#Comment::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for comment. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The warning message to give

* details (optional) (string)
 
An optional detailed warning message

| Returns
<br>No return value |
| --- |

| Example
<br>To add a warning message "My custom warning" for comment c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this comment. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for comment c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the comment data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Comment.Keyword()](primer-comment-class.md#Comment::Keyword) and [Comment.KeywordCards()](primer-comment-class.md#Comment::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for comment c in keyword format<br>
```
var s = c.toString();
```
 |
| --- |

* * *