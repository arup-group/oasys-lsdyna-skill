####  Changing an Existing Definition in the Data Rows

![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_cdata.png)

Simply overtype the existing entry, or select a new value from the standard popup selection menu.

Changing a definition in the **Data rows** does two things:

* A backup of the existing definition (before the change) is made, so that the original definition can be restored if required.
* The current definition in the database is changed immediately

#####  Changing the Suffix of a Data row definition
 
To change one or more keyword suffices right click on the field in the **Suffix** column (here [REVOLUT v] ), and choose the revised suffices. (The image below has been truncated vertically.)
 
![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_dsuffix.png)
 
This popup and its usage are identical to that described under the **Entry Row** above.

#####  Changing the Include file of a Data row definition 
 
If include files are present in the model then an extra Incl column will be shown, and the name of each entry's include file will be listed. This is truncated to a narrow column width to save space, but if you hover the mouse over an entry the full include file details will be given.
 
![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_incl_2.png)
 
To change an entry's include file click on its data field, and the selection popup shown above will be mapped allowing you to select a different include file.
 
######  Warning: Include file changes are not undone by a Reset command 
 
Because of the way include file membership is handled in PRIMER moving a **Data row** entry to a new include file is not reversible by a Reset command. The only way to revert to its original include file is to reset it explicitly using the &lt;click&gt; + &lt;select new&gt; process above.

#####  The popup options on Data row Index buttons. 
 
Each **Data row** has the following popup menu options:

| | Edit... | Maps the standard Create/Update panel for the current definition. When the edits are saved the Data row will be updated. |<br>| --- | --- |<br>| Check | Runs the standard check function on this Data row |<br>| Reset | Resets this Data row back to its original condition (before any edits, not just the most recent one.) |<br>| Xrefs | Maps the standard cross-reference viewer panel for this item. |<br>| Sketch | Sketches this item on the current model. | | ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_dpopup.png) |
| --- | --- |

| Manipulating blanking using these options These three commands act immediately, there is no need to update the display to see the changes. |
| --- |
| Blank | Blanks this item from the current display. |
| Unblank | Unblanks this item in the current display. |
| Only | Makes this the only item visible in the current display |

#####  Text edit: editing definitions in an external editor 
 
The external text editor works in exactly the same as for scalar editing panels (see [Text Edit Editing Keyword Data Externally](text-edit-editing-keyword-data-externally.md#text_edit_1)) in that it performs "mini keyword output" operation to write a keyword file containing data for the selected row(s), and then performs a "mini keyword input" to read the file back in again and to update the model.
 
Because the keyword editor permits operations on multiple items Text edit in this context does the same, reading in all definitions found in the edited file that match the current keyword type. Definitions with the same label as existing items replace these, and items with new labels are added to the model.
 
######  Using Text Edit to import new keywords 
 
From V10.1 onwards Text Edit in the context of the keyword editor may also be used to import new definitions of the type being edited, as well as modifying existing ones. Therefore it is legal to edit a given row (or rows), and within the external editor to create or import new definitions of this keyword type. On exit from the external editor the new items will be imported into PRIMER exactly as if they had been read by conventional keyword input, and added to the current model using the current include file. The new items are added to the permanent model database, and will appear in the current keyword editor panel immediately, so long as they are not filtered out by current (sub-)keyword selection.
 
The addition of new keywords in this way is not reversible: a Reset in the keyword editor, or an Abort of the editor panel, will  ***not***  remove these items; so if you change your mind about importing them you will need to Delete them explicitly.

#####  Export file: writing keyword definitions as CSV or keyword file 
 
The button Export file will open a menu to select a file to which the data is written in either CSV format or keyword format. In CSV mode you can select the layout of how the data is written. This is similar to the [layout](changing-the-display-layout.md#change_layout) of the main editor. In keyword layout line breaks are written in the same way as in keyword files. When in single row layout, every keyword definition is written on just one line.
 ![](../Storage/primer-22-1/primer_links/sect_5/5a/export%20to%20file1.png)
 
##### Writing keyword definitions to Excel format
 
You can select Excel format using the Xlsx radio button, which employs a single-row layout.

When the Xlsx button is clicked, the Excel output options button is activated. When clicked, a new panel is displayed containing options for capturing images for selected \***DATABASE** **** keywords, which are also inserted into the**Excel**file.

![](../Storage/primer-22-1/primer_links/sect_5/5a/export%20to%20file.png)

###### Writing Images for selected \*DATABASE keywords in Excel format

Currently, we can capture images for **\*DATABASE\_HISTORY\_NODE**, **\*DATABASE\_HISTORY\_BEAM** and **\*DATABASE\_CROSS\_SECTION** keywords.

| The **Excel output options** panel allows users to set the Orientation View, Drawing Mode, Image column in the Excel file, and the Width and Height of the images.<br><br>There are further inputs to control the output of images for the specific **\*DATABASE** keywords. In particular:<br><br>**Find Volume** is used to control the size of the **\*DATABASE\_HISTORY\_NODE** images. The size is based on the items found inside the cube with the input volume, centred on the node.<br><br>**Recursive loops for find attached** is used to generate the **\*DATABASE\_HISTORY\_BEAM** images based on the number of recursions to be applied to the attached items around the beam.<br><br>Image column can be set to either FIRST or LAST. The **\*DATABASE** keyword images will be written in either the first or last column in the xlsx file accordingly. | ![](../Storage/primer-22-1/primer_links/sect_5/5a/excel%20output%20options.png) |
| --- | --- |

#####  
 
Example Excel outputs for **\*DATABASE** keywords are shown below:

|  | Find volume = 200 | Find volume = 500 |
| --- | --- | --- |
| **\*DATABASE\_HISTORY\_NODE** | ![](../Storage/primer-22-1/primer_links/sect_5/5a/history%20node%20thumbnail.png) | ![](../Storage/primer-22-1/primer_links/sect_5/5a/history%20node%20thumbnail%20with%20volume%20500.png) |

|  |  |  |
| --- | --- | --- |
|  | No of recursions = 3 | No of recursions = 5 |
| --- | --- | --- |
| **\*DATABASE\_HISTORY\_BEAM** | ![](../Storage/primer-22-1/primer_links/sect_5/5a/history%20beam%20recursions3.png) | ![](../Storage/primer-22-1/primer_links/sect_5/5a/history%20beam%20recursions5.png) |

For \***DATABASE\_CROSS\_SECTION**, 'Display' and 'Annotate' images are output.

The 'Annotate' image is a zoomed-in view of the cross-section with the cross-section plane parallel to the screen.

![](../Storage/primer-22-1/primer_links/sect_5/5a/crossection%20thumbnail.png)

Note, the image orientation applies to all images except 'Annotate' in **\*DATABASE\_CROSS\_SECTION**.

##### Delete: Deleting the current definition 
 
Using Delete will map a cut-down deletion confirmation menu for this item. If you choose to Delete Items the standard PRIMER deletion confirmation dialogue will be mapped and the item will be deleted.
 
***Deletion is not reversible - once an item has been deleted it cannot be recovered.***
 ![](../Storage/primer-22-1/primer_links/sect_5/5a/deleting%20the%20current%20definition.png)[Previous](creating-a-new-definition-in-the-entry-row.md)  |  [Next](working-with-multiple-rows.md)