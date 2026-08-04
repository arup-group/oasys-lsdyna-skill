# Page class

The Page class gives access to pages in Reporter. [More...](reporter-page-class.md#Page_details)

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

## Member functions

* [DeleteItem](reporter-page-class.md#Page::DeleteItem)(index*[integer]*)
* [Duplicate](reporter-page-class.md#Page::Duplicate)(index (optional)*[integer]*)
* [Generate](reporter-page-class.md#Page::Generate)()
* [GetAllItems](reporter-page-class.md#Page::GetAllItems)()
* [GetItem](reporter-page-class.md#Page::GetItem)(index*[integer]*)
* [ImportItem](reporter-page-class.md#Page::ImportItem)(filename*[string]*)

## Page properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| generating (read only) | logical | true if the entire page is currently being generated |
| items (read only) | integer | The total number of items on the page |
| master (read only) | logical | true if this is a master page object. |
| name | string | Name of the [Page](reporter-page-class.md) |

| Detailed Description<br>The Page class allows you to access the pages in templates that Reporter currently has open. |
| --- |

| Constructor
new Page(template*[[Template](reporter-template-class.md)]*, options (optional)*[object]*)

Description<br>Create a new [Page.](reporter-page-class.md). |
| --- |

#### Arguments

* template ([Template](reporter-template-class.md))
 
[Template](reporter-template-class.md) to create page in

* options (optional) (object)

Options specifying various page properties, including where the page should be created. If omitted,
the default values below will be used. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| colour (optional) | Colour object | Page background colour (white if omitted) |
| index (optional) | integer | The page index at which the new page will be inserted (indices start from zero). You cannot create pages prior to the current page i.e. the index must be greater than the index of the current
page. If omitted, the new page will be created immediately after the current page. Note that the current page continues
to be the page that the Script item is running on (it does not change to the newly-created page). |
| name (optional) | string | Name for page (empty if omitted) |

| Returns
<br>[Page](reporter-page-class.md) object<br>
Return type
<br>Page |
| --- |

| Example
<br>To create a new blank Page object in template *t*:<br>
```
var page = new Page(t);
```
<br>To create a new red page named "Last page" as the last page in template *t*:<br>
```
var page = new Page(t, {name:"Last page", colour:Colour.Red(),
index:t.GetAllPages().length});
```
 |
| --- |

| new Page(template*[[Template](reporter-template-class.md)]*, name (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 17.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [Page](reporter-page-class.md). |
| --- |

#### Arguments

* template ([Template](reporter-template-class.md))
 
[Template](reporter-template-class.md) to create page in

* name (optional) (string)
 
Name for page (empty if omitted)

| Returns
<br>[Page](reporter-page-class.md) object<br>
Return type
<br>Page |
| --- |

| Example
<br>To create a new blank Page object in template t:<br>
```
var page = new Page(t);
```
 |
| --- |

| Details of functions 
DeleteItem(index*[integer]*)

Description<br>Deletes an item from a page. |
| --- |

#### Arguments

* index (integer)
 
The index of the item that you want to delete. Note that indices start at 0.

| Returns
<br>No return value |
| --- |

| Example
<br>To delete the first item of page *p*:<br>
```
p.DeleteItem(0);
```
 |
| --- |

* * *

| Duplicate(index (optional)*[integer]*)

Description<br>Duplicate a page |
| --- |

#### Arguments

* index (optional) (integer)
 
The page index that you want to insert the duplicate page at in the template. Note that indices start
at 0. If omitted the duplicate page will be put after the one that you are duplicating.

| Returns
<br>[Page](reporter-page-class.md) object<br>
Return type
<br>Page |
| --- |

| Example
<br>To duplicate page p:<br>
```
var dp = p.Duplicate();
```
<br><br>To duplicate page p putting the duplicate as the first page in the template:<br>
```
var dp = p.Duplicate(0);
```
 |
| --- |

* * *

| Generate()

Description<br>Generate a page |
| --- |

#### Arguments

No arguments

| Returns
<br>no return value |
| --- |

| Example
<br>To generate page p:<br>
```
p.Generate();
```
 |
| --- |

* * *

| GetAllItems()

Description<br>Gets all of the items from a page. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of [Item](reporter-item-class.md) objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To get all of the items on page p:<br>
```
var items = p.GetAllItems();
```
 |
| --- |

* * *

| GetItem(index*[integer]*)

Description<br>Get an item from a page. |
| --- |

#### Arguments

* index (integer)
 
The index of the item on the page that you want to get. Note that indices start at 0.

| Returns
<br>[Item](reporter-item-class.md)<br>
Return type
<br>Item |
| --- |

| Example
<br>To get the 1st item on page p:<br>
```
p.GetItem(0);
```
 |
| --- |

* * *

| ImportItem(filename*[string]*)

Description<br>Import an item from a file onto the page. |
| --- |

#### Arguments

* filename (string)
 
File containing the object to import

| Returns
<br>[Item](reporter-item-class.md)<br>
Return type
<br>Item |
| --- |

| Example
<br>To read an item from file "item.oro" and put it on page p:<br>
```
p.ImportItem("item.oro");
```
 |
| --- |

* * *