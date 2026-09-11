###  How Explicit Menu Selection, Screen-Picking and Keying-In Work Together

These three methods of selection co-exist with cumulative effect: they are simply alternative ways of selecting objects for processing and are designed to be used together.

Selecting something by screen-picking or typing in its label will automatically depress the appropriate menu row, likewise deselecting the menu row of an item that has been screen-picked acts like rejecting a pick, and removes it from the cursor list. You can use any combination of methods in any order to select items. (Screen picking, or keying in the label of, an item that has already been selected manually from the object menu is legal, but has no effect.)

**Selections are**   ***not***   **cumulative across different item types**

If, for example, you select the type PARTs and then swap to ELEMENTs, the PARTs will no longer be selected - only the selected elements will be remembered. If you wanted to select all elements from one PART, and then a subset of elements from a second PART, you could do it as follows:

* Select object type ELEMENT;
* Set filter option "by PART" and select the first part;
* Select "ALL" elements (implicitly only in that PART);
* Unset the filter and select the required further individual ELEMENTs explicitly.

The selection list will contain the results of both categories of selection.

**Selections persist following most operations (except**  **BLANK**  **and**  **DELETE** **)**

When you have made your selections, and carried out the relevant operation, the selections remain in memory if this makes sense in that context. Thus you could carry out some other operation on the same list, add to or subtract from them prior to a further operation, and so on.

However exiting from that operation (for example leaving the **ORIENT** menu) will destroy any current selections. For this reason it may be better to iconise a window to get it temporarily out of the way, rather than to **DISMISS** it. The former will not affect its selection status, whereas the latter will destroy it!

Exceptions are:

>  
> 
> | **BLANKING** | once operated on the items chosen are deselected. |
> | --- | --- |
> | **DELETE** | they will no longer exist! |
> 
> 

|  |
| --- |

[Previous](key-in-syntax-when-model-andor-type-codes-must-be-defined-for-labels.md)  |  [Next](to-delete-all-current-selections-and-start-again.md)