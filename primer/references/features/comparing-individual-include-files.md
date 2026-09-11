###  Comparing Individual Include Files

Find modified described above works by reading the original file and comparing it to the current model in memory. This methodology cannot be applied to models which have been **built in PRIMER**. We would need to record how each model is built so we could repeat the process to construct the original - this is not practical.

Find modified also requires that we hold 2 copies of the model in memory which may not be possible for very large models on machines with limited amount of memory.

Instead, we have an alternate function available off the  **** model drop-down on the include tree. Note - the Find modified button always runs the normal function.

![](../Storage/primer-22-1/primer_links/sect_3/images/comp_disk.gif)

You will be given the option of running the normal Find Modified or Compare Include .

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_14.gif)

Additionally, Compare include may be run for an individual include (off the include drop-down).

Compare Include works by writing the current include to scratch area and reads it back in to form model A and then reads the original include file to form model B. Models A and B are then compared using the model modified function which effectively performs a dxdiff between them and reports any differences.

The function involves intensive disk I/O and so if run on all the includes of a large model may take a while to complete. The original model modified function will achieve the same result much more quickly (when it can be applied) so is recommended.

For all models this function is very useful for interrogating an individual include to see the details of what has changed. With a non-built model you can use Compare include to detect which include files have changed, and then extract the details for the include of interest using compare to disk. Although they work in different ways, both processes should always report the same differences.

![](../Storage/primer-22-1/primer_links/sect_3/images/incl_modified_detail.gif)

####  Model modified red-lights includes that need to be written

Model modified red-lights includes that have been modified or created. When an include has been deleted we need to red-light the parent.

![](../Storage/primer-22-1/primer_links/sect_3/images/inc_delete_1.PNG)

The process is recursive, red-lighting up to master file. aaa.key needs writing as ccc.key has been removed. Asssuming we write it to a new name, master file also requires writing.

![](../Storage/primer-22-1/primer_links/sect_3/images/inc_delete_2.PNG)

A helpful message is given on the details tree.

![](../Storage/primer-22-1/primer_links/sect_3/images/inc_delete_3.PNG)

[Previous](comparing-a-model-to-original-or-to-a-file.md)  |  [Next](options-for-comparing-models.md)