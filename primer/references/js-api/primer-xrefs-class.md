# Xrefs class

The Xrefs class gives you access to cross references. [More...](primer-xrefs-class.md#Xrefs_details)

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

* [GetID](primer-xrefs-class.md#Xrefs::GetID_deprecated)(type*[string]*, pos*[integer]*) [deprecated]
* [GetItemID](primer-xrefs-class.md#Xrefs::GetItemID)(type*[string]*, pos*[integer]*)
* [GetItemType](primer-xrefs-class.md#Xrefs::GetItemType)(type*[string]*, pos*[integer]*)
* [GetTotal](primer-xrefs-class.md#Xrefs::GetTotal)(type*[string]*)
* [GetType](primer-xrefs-class.md#Xrefs::GetType)(n*[integer]*)

## Xrefs properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| numtypes (read only) | integer | The number of different types that this item is referenced by. |
| total (read only) | integer | The total number of cross references of all types to this item. |

| Detailed Description<br>The Xrefs class allows you to look at what things use an item. e.g. a node may<br>be used on several shells.<br>See the documentation below for more details. |
| --- |

| Details of functions 
GetID(type*[string]*, pos*[integer]*) [deprecated]
<br>This function is deprecated in version 10.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Use [Xrefs.GetItemID()](primer-xrefs-class.md#Xrefs::GetItemID) instead. |
| --- |

#### Arguments

* type (string)
 
Use [Xrefs.GetItemID()](primer-xrefs-class.md#Xrefs::GetItemID) instead.

* pos (integer)
 
Use [Xrefs.GetItemID()](primer-xrefs-class.md#Xrefs::GetItemID) instead.

| Returns
<br>No return value |
| --- |

|  |
| --- |

* * *

| GetItemID(type*[string]*, pos*[integer]*)

Description<br>Returns the ID of the item in the reference list. |
| --- |

#### Arguments

* type (string)
 
The type of the item in the reference list (for a list of types see Appendix I of the
PRIMER manual).

* pos (integer)
 
The position in the list for this item. **Note that positions start at 0, not 1**

| Returns
<br>ID of item<br>
Return type
<br>Number |
| --- |

| Example
<br>To list all of the xrefs for node n:<br>
```
var xrefs = n.Xrefs();
for (var t=0; t<xrefs.numtypes; t++)
{
    var type = xrefs.GetType(t);
    var num  = xrefs.GetTotal(type);
    for (var ref=0; ref<num; ref++)
    {
        var id = xrefs.GetItemID(type, ref);
        Message(type + " " + id + "\n");
    }
}

```
 |
| --- |

* * *

| GetItemType(type*[string]*, pos*[integer]*)

Description<br>Returns the type of the item in the reference list. This function is only required when trying to look at cross references to \*DEFINE\_CURVE items. These items are used in a slightly different way in PRIMER (each time a curve is used a 'LOADCURVE REFERENCE' structure is created to store things like the units and descriptions of each axis for the curve). If you try to get the cross references for a curve all the references will be of type 'LOADCURVE REFERENCE' and [numtypes](primer-xrefs-class.md#numtypes) will be 1. [GetItemID()](primer-xrefs-class.md#Xrefs::GetItemID) will correctly return the ID of the item from the 'LOADCURVE REFERENCE' structure but to get the type of the item this function is required. |
| --- |

#### Arguments

* type (string)
 
The type of the item in the reference list (for a list of types see Appendix I of the
PRIMER manual).

* pos (integer)
 
The position in the list for this item. **Note that positions start at 0, not 1**

| Returns
<br>type of item (String). For every item apart from \*DEFINE\_CURVE items this will be the same as the *type* argument.<br>
Return type
<br>String |
| --- |

| Example
<br>To list all of the xrefs for Curve c:<br>
```
var xrefs = c.Xrefs();
for (var t=0; t<xrefs.numtypes; t++)
{
    var type = xrefs.GetType(t);
    var num  = xrefs.GetTotal(type);
    for (var ref=0; ref<num; ref++)
    {
        var id = xrefs.GetItemID(type, ref);
        var itype = xrefs.GetItemType(type, ref);
        Message(itype + " " + id + "\n");
    }
}

```
 |
| --- |

* * *

| GetTotal(type*[string]*)

Description<br>Returns the total number of references of a type. |
| --- |

#### Arguments

* type (string)
 
The type of the item in the reference list (for a list of types see Appendix I of the
PRIMER manual).

| Returns
<br>Number of refs (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To find the total number of shell references that node n has:<br>
```
var xrefs = n.Xrefs();
    var num  = xrefs.GetTotal("SHELL");

```
 |
| --- |

* * *

| GetType(n*[integer]*)

Description<br>Returns the type for an entry in the reference list. Note that for a [curve](primer-curve-class.md) all the references will be of type 'LOADCURVE REFERENCE' and [numtypes](primer-xrefs-class.md#numtypes) will be 1. See [GetItemType()](primer-xrefs-class.md#Xrefs::GetItemType) for more details. |
| --- |

#### Arguments

* n (integer)
 
The entry in the reference types that you want the type for. **Note that entries start at 0, not 1**

| Returns
<br>The type of the item (string)<br>
Return type
<br>String |
| --- |

| Example
<br>To list the types of items that have cross references for node n:<br>
```
var xrefs = n.Xrefs();
for (var t=0; t<xrefs.numtypes; t++)
{
    var type = xrefs.GetType(t);
    var num  = xrefs.GetTotal(type);
    Message(num + " references of type " + type + "\n");
}

```
 |
| --- |

* * *