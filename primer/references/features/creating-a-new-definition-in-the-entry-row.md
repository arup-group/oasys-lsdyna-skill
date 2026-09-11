####  Creating a New Definition in the Entry Row

![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_12.png)

The green row at the top of the list of existing items is where data is inserted to create a new definition.

* Type in, or select from popup menus, sufficient data fields to populate the definition.
* Use Create to make the definition. This installs it in the database, and it will also appear in the **Data rows** below.

#####  Changing the Suffix of the Entry row definition
 
To change one or more keyword suffices right click on the field in the **Suffix** column (here [SPHERIC v]), and choose the revised suffices. (The image below has been truncated vertically.)
 
![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_suffix.png)
 
In this example there are four columns of suffices to choose from, other keywords will be different. You can only tick one entry in each column since, obviously, entries within a column are mutually exclusive.
 
In most cases column suffices are independent but there are a few cases where changing one suffix may affect what is legal in other columns. One example is \*RIGIDWALL where further suffices on the \_PLANAR suffix are not compatible with the \_GEOMETRIC suffix. In these situations any illegal combinations will be removed, and the relevant buttons greyed out.
 
#####  Setting the Include file for the new entry 
 
If include files are present in the model then there will be an extra Incl column between Options... and Suffices , and each entry in the table will show its include file name.
 
![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_incl_1.png)
 
By clicking on the entry (here the Main file) a small sub-panel for selection of an alternative include file will be mapped.
 
The Keyword editor will always initialise itself to create new entries in the current include file for this model, but if you change this then subsequent new entries will be in the selected file. Include files in PRIMER are described in more detail in [Include Files](include-files.md#313Includefiles)

#####  Using Create to make the entry
 
The Create button will be one of three colours:

>  
> 
> | Greyed out | This means that the row fails the "grammatical" check and the entry cannot be created. One or more the data fields will be red and must be populated or corrected. |
> | --- | --- |
> |  |
> | Red | This means that the row passes the "grammatical" check, ie no red data fields, but that the standard "Check" function has found one or more errors. The Check option on its popup menu can be used to list these errors. <br>The entry can still be created, but you will be warned about the errors and may have to correct them later. |
> |  |
> | Green | The row passes both grammar and contents check, and can be created with no error or warning messages. |
> 
>  

#####  The popup options on the Create button

| These options may be use to manipulate the **Entry row**as follows: | ![](../Storage/primer-22-1/primer_links/sect_5/5a/kwe_epopup.png) |
| --- | --- |

| Create... | Maps the standard Create/Edit panel for this item. When you exit from this the saved definition will be used to populate the **Entry row** . (This option will be greyed out if a create/edit function has not been written for the current data type.) |
| --- | --- |
| Check | Runs the standard check function on this definition and reports any errors. |
| Sketch | Sketches the definition in its current form on the model |
| Reset | Resets the **Entry row** to its default (empty) state |

 [Previous](comments-on-keywords.md)  |  [Next](changing-an-existing-definition-in-the-data-rows.md)