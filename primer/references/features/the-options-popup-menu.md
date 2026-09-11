###  The Options Popup Menu

| | Refresh Menus | Refreshes the current menu, updating it to reflect changes to things such as titles and set contents which may not have triggered an automatic menu refresh |<br>| --- | --- |<br>| Clipboard Add | Adds the current selection to the [Clipboard](clipboard.md#clipboard_start). Existing clipboard contents remain, and only new items are added. |<br>| Clipboard Remove | Removes the current selection from the Clipboard. If the selected items are not already in the clipboard then no change takes place. |<br>| Clipboard Replace | Replaces the clipboard contents with the currently selected items. Any existing clipboard contents are lost. | | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2g.png) |
| --- | --- |

| Clipboards are model-specific, and replacement only takes place in the models active for this object menu. For example a selection made to change set contents, implicitly for a single model, will only replace the clipboard contents for that model; whereas selection for Blank, which is multi-model, will replace the clipboard contents in all active models. <br>The clipboard may be used in a range of different ways in PRIMER , see [CLIPBOARD](clipboard.md), but in the context of object menus it may be used to save and reuse the current selection.<br> <br>Once the clipboard in a model contains something then in any Object Menu context where:<br> <ul style="font-size: 14.6667px;"> <li>Multiple selections are legal<br>and</li> <li>The clipboard contains one or more items of the specified type</li> </ul> <br>Then a " **Clipboard: nnn &lt;***item type***&gt;**" row will appear at the top of the menu.<br> <br>Selecting this row is a "one click" way of selecting all items on the clipboard which match the current type(s). This can mean multiple types, as in the example here using ENTITY , where the clipboard contains a mixture of entity types. | ![](../Storage/primer-22-1/primer_links/sect_2/selection/fig_6_2g1.png) |
| --- | --- |

| Blank selected | Blanks the selected items |
| --- | --- |
| Unblank selected | Unblanks the selected items, turning on their entity visibility switches if necessary in order to make them visible |
| Only selected | Blanks everything except the selected items, again turning on their entity visibility switches if required. |

When " Only " is used all other items in all models will be blanked, regardless of whether this object menu refers to a single model or multiple ones. This is necessary if "only" the selected items are to be visible.
 [Previous](sorting-object-menu-contents.md)  |  [Next](using-vis-ible-screen-picking-to-select-items.md)