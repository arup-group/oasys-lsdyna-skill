# Selecting

Functions and constants relating to Selecting

## Functions

* [IsSelected](d3plot-selecting-class.md#Selecting::IsSelected)(type\_code*[integer]*, item*[integer]*)
* [Pick](d3plot-selecting-class.md#Selecting::Pick)(type\_code*[integer]*, number*[integer]*)
* [Select](d3plot-selecting-class.md#Selecting::Select)(type\_code*[integer]*)

| Details of functions 
IsSelected(type\_code*[integer]*, item*[integer]*) [static]
Description<br>Checks whether an item has been selected with [Select](d3plot-selecting-class.md#Selecting::Select)() |
| --- |

#### Arguments

* type\_code (integer)
 
The [type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) of item to select (SOLID, etc.)

* item (integer)
 
If +ve, the internal item number starting at 1. If -ve, the external label of the item.

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Returns JS_TRUE if the 1st PART in the model was selected.
if(IsSelected(PART, 1))
{
    ....
}

```
<br><br> |
| --- |

* * *

| Pick(type\_code*[integer]*, number*[integer]*) [static]
Description<br>Allows the user to interactively pick a specified number of items<br><br><br>NOTE: If you are using the [WINDOW](d3plot-sharedconstants-class.md#SharedConstants.WINDOW) type code, the function should be seen as<br>"Pick item/model and return it's WINDOW ID" i.e. if you try and use the pick function and<br>click somewhere away from the model, the function will return null. On the other hand,<br>if you click the model then it will return the WINDOW ID in which the model resides. |
| --- |

#### Arguments

* type\_code (integer)
 
The [type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) of item to select (SOLID, etc.)

* number (integer)
 
The number of items to pick.

* &gt; 0 The internal indicies of the picked items are returned
* &lt; 0 The external labels of the picked items are returned

| Returns
<br>Array of integers<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Pick 4 PARTS and return the internal index of each one in array (a)
var a = Pick(PART, 4);

// Pick 3 NODES and return the external labels of each one in array (b)
var b = Pick(NODE, -3);

```
<br><br> |
| --- |

* * *

| Select(type\_code*[integer]*) [static]
Description<br>Allows the user to interactively select items using the mouse or from a menu. |
| --- |

#### Arguments

* type\_code (integer)
 
The [type](d3plot-sharedconstants-class.md#SharedConstants_Item_Type_constants) of item to select (SOLID, etc.)

| Returns
<br>integer, &gt;0 the number of items selected, -1 user cancelled the operation, -2 model doesn't contain any of the type requested<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Select PARTS interactively and return the number selected.
var a = Select(PART);

```
<br><br> |
| --- |

* * *