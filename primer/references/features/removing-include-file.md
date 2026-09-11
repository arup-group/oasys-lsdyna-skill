####  Removing Include File

Off **TOOLS &gt; INCLUDE** tree there is an option on the include file dropdown to Empty Include.

![](../Storage/primer-22-1/primer_links/sect_3/images/remove_include_1.gif)

Three deletion methods are available.

![](../Storage/primer-22-1/primer_links/sect_3/images/remove_include_2.png)

| DELETE\_1 | Is strict deletion which will only try to delete items in the include file, therefore it is the "safest" option. <br>If items in this include file are referred to by items in another file then the items in this include file will be locked against deletion. Examples that might cause this locking are elements in this file belong to a \*PART in another file, or a \*PART being in a Constrained Rigid Body Merge with a \*PART in another file, or a \*NODE in this file being part of the topology of an item defined in another file. Many other situations exist, and if file content is locked against deletion you will need to use the green [?] button in the post-deletion summary panel to find out why items have not been deleted.<br> <br>However, if the Remove from sets option is active (by default it will be), then this option  ***will***  remove of items from \*SETs in other include files, and membership of those sets will not lock items in this file against deletion. |
| --- | --- |
| DELETE\_2 | Is "propagate" deletion. This is analagous to selecting the contents of the include, putting them on the clipboard and applying delete. Any items which are junior to those selected (e.g. the nodes of an element) will be flagged for deletion without regard to their include file. This mode is more likely to want to delete items outside the include file |
| DELETE\_3 | Is like DELETE\_1 , but items in \*SET definitions in other files are  ***not***  removed. <br>This option is intended for use with "forcible" deletion, and is recommended if you are replacing include file contents manually. |

In all modes, the interactive deletion panel will then be activated. Items may be de-selected by using Leave . Pressing Delete Sel will initiate the deletion.

![](../Storage/primer-22-1/primer_links/sect_3/images/remove_include_3.gif)

Before deletion is actually carried out, PRIMER will detect if any items to go are outside the include file. These will be reported and user given the option to abort the deletion operation. The model will be unchanged.

![](../Storage/primer-22-1/primer_links/sect_3/images/remove_include_4.gif)

If deletion is applied, PRIMER will then check to see if the include file is empty. If so, you will be given the option to remove the include file from the model structure. Alternately you can leave it as an empty include, presumably for later population.

![](../Storage/primer-22-1/primer_links/sect_3/images/remove_include_5.gif)

[Previous](adding-include-files-to-a-model.md)  |  [Next](replacing-an-include-file.md)