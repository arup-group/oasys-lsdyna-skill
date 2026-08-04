###  "Daisy-Chain" Functionality via Popup Menus

The previous sections describe how to invoke and process data via Keywords.

This constitutes "ab initio" invocation of entity creation, modification, etc; where no particular context is implied. For example creating a new material in isolation (without any external references to it) means that the material may be of any type, and is not limited to types suitable for a particular class of element.

However the "Create", "Edit" and "Browse" PRIMER capabilities for all the following keywords may also be called from a given context. For example:

>  
> ![](../Storage/primer-22-1/primer_links/sect_5/5a/fig_5_0_15.gif)
> 

What this implies that while processing an element you might edit its Part definition and, through that, its Material, Section and Equation of State.

In this situation, referred to as "Daisy-Chaining", those items in the chain below the element have an implied context. For example the Material and Section definitions will be constrained to the element type of the Part, and you will not be permitted to add other types of element to the part.

| This process is invoked by "popup" menus, as shown in this example here.<br> <br>The user is editing a Part, and wants to Label everything that uses this Part's material.<br> <br>Thus they had used:<br> <br>[Popup] **--&gt;**  Label--&gt;Sketch<br> <br>The Edit and other daisy-chain functions are also available. These are described in the table below.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/5a/fig_5_0_16.gif) |
| --- |

| | "Daisy-Chain" function | Description |<br>| --- | --- |<br>| PICK... | Select an item for this location by picking directly from the screen with the mouse. |<br>| SELECT... | Select an item for this location via the standard selection menu, which offers filtering, screen-picks by various methods, typing in of labels, and so on. |<br>| CREATE... | Create a new item for this location. This maps the standard creation panels as described in the following sections. |<br>| EDIT... | Edit the current selection, using the standard Create/Edit panel as above. Only available if the selection actually exists already. |<br>| BROWSE... | Browse the current selection. This lets you look at it using the standard Create/Edit panel, but any options that would allow changes are disabled. Therefore this is a "safe" way of viewing data. |<br>| LABEL  **&gt; or**  <br>VIEW/LABEL &gt; | The "Label" function allows you to label either the single item, or the whole range of these, on the current image. The "View" option is only available for those classes of item for which a viewing function (see section 4.5) exists. |<br>| SKETCH &gt; | Lets you sketch this item, or the whole range of them, on the screen. (Sketching is always uses "line" mode, in white, to superimpose the items on the current image.) |<br>| STATUS &gt; | Provides status listings at different degrees of complexity. | |
| --- |

Daisy-chained panels may have "children" and "grand-children" and so on to any level of complexity, but all are owned by the original "parent". Dismissing the parent panel will destroy all its child panels, to the &lt;nth&gt; generation, equivalent to dismissing each one individually: they do not exist autonomously.

This makes is possible to be performing the same function on an item in two or more places simultaneously, for example you might be editing a part in two separate panels. There is no conflict, since all Create and Edit operations always take place on a "scratch" copy of the original item, and the original is only modified when the user explicitly requests this by using the UPDATE/CREATE button.

Therefore the permanent definition of the part in this example is always defined by whichever panel most recently updated it.

Clearly multiple Browse operations, being "read-only" in nature, never constitute a threat to the original definition since they will never update it, which is why the facility is provided.

[Previous](general-rules-in-the-keyword-editor.md)  |  [Next](standard-category-renumbering-panel.md)