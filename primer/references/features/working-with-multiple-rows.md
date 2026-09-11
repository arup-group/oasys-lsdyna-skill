####  Working with Multiple Rows

It is possible to select a range of **Data rows** and to change their properties, or their suffices, or to delete them in a single operation as described above for a single row.

Rows that have been selected invert their colour to a dark background, and become active for "multiple" operations. In the figure below rows 2 to 4, and 7 to 8 have been selected.

![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_mselect.png)
 
#####  Go to label menu 
 
This is available in keyword editors for entities with label fields.
 
Using this menu, you can automatically jump the scroll bar to the entity row of given label value.
 
You can either input the label value or or also select the entity of choice using the **"Select..."** menu.
 
If an entity with the input label value is not found in the list, then the scroll bar jumps to the entity with a label value that is nearest to the given label.
 ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_gotolabel.png) 
#####  Selecting a range of rows 
 
Rows may be selected by a range of methods, which may be combined in any order:
 
By clicking on the row index buttons:

| &lt;Click&gt; | Selects that row only, deselecting any others. |
| --- | --- |
| &lt;Shift + click&gt; | Selects all rows between the most recently clicked on and the current row. |
| &lt;Control + click&gt; | Inverts the selection status of the current row, leaving other rows' selection status unchanged. |

 ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_indexb.png) 
From the Popup menus on the Options ... button

| SEL\_ALL | Selects all rows |
| --- | --- |
| UNSEL\_ALL | Deselects all rows |
| Select ... | Maps the standard PRIMER object menu allowing you to select items in the normal way. |

 ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_options.png) 

| Actions on selected rows  <br><br>| Show\_All | Shows all Data rows. Needed if only a subset has been displayed using the options below. |<br>| --- | --- |<br>| Only\_Sel | Shows only those **Data rows** which have been selected.
<br><br>This can be useful if you have selected a small and diverse subset of a large number of items |<br>| Hide\_Sel | The opposite of the above: shows only those **Data rows** which have  ***not***  been selected. |<br>| Sketch\_Sel | Sketches the currently selected **Data rows** on the current model |<br>| Reset\_Sel | Peforms a RESET of all selected **Data rows** , restoring them to their original unedited state. |<br>| Delete\_sel | Deletes the selected **Data rows** , going through the same selection and confirmation procedures [described before](changing-an-existing-definition-in-the-data-rows.md#delete) for deleting a single row. | |
| --- |

| Editing entries on multiple rows <br>When multiple rows have been selected then editing any field on any selected row will result in the same field on all other selected rows, if compatible, being changed to the same value.<br> <br>For example taking the image above, if field N1 on row 2 is changed to 10 (ie node 10), then N1 on rows 3, 4, 7 and 8 will also be changed.<br> <br>When you type in a formula as explained in [Formulae in Edit Panels](formulae-in-edit-panels.md#formula), then the formula will be evaluated on each row separately. Typing =n2-1 into the field for N1 on an arbitrary selected row as depicted on the right will set N1 to 4082 on row 2, to 4064 on row 3, to 24623 on row 4 etc. | ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_mdemo_1.png) |
| --- | --- |

| Only "compatible" data are changed  <br>If the data in the field that is changed does not match that in the same field on another selected row, then the latter is unchanged.<br> <br>In this example RPS on row #2 matches RPS on row #3, but not N3 on rows #7 and #8, so only row #3 is changed. | ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_mdemo_2.png) |
| --- | --- |

| Popup menu actions on multiple rows <br>When multiple rows are selected the popup menu on any index button works in exactly the same way as for a single row, except as described below.<br> <br><br>| The following two options act on **this row only** |<br>| --- |<br>| Edit... | Maps the Create/Update panel for the selected item only. <br>From V12 onwards any edits made will be listed when the edit finishes, and you will be given the opportunity to choose whether or not to propagate them to other highlighted rows. |<br>| Xrefs | Maps the standard cross-reference viewer for the selected item only. |<br>| The remaining actions operate **on all selected rows** |<br>| Check | Runs the standard check function |<br>| Reset | Resets to original unedited state |<br>| Sketch | Sketches on the current model. |<br>| Blank | Blanks them |<br>| Unblank | Unblanks them |<br>| Only | Draws only them |<br>| Delete | Deletes them | | ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_dpopup.png) |
| --- | --- |

[Previous](changing-an-existing-definition-in-the-data-rows.md)  |  [Next](saving-and-discarding-changes.md)