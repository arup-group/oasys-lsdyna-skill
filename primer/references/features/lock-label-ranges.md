###  Lock Label Ranges

The 'Lock label ranges' feature allows you to lock a range of labels for one or all entity types in one or all include files against renumbering. In other words, attempts to renumber locked labels will be blocked. Those locked ranges that apply to all includes may also be designated as Safe ranges. Safe ranges are protected ranges that other entities may not be renumbered into.

![Label locking panel](../Storage/primer-22-1/primer_links/sect_3/images/lock_labels.gif)

Information regarding these locked ranges are stored as special comments in includes and the master model. They will, therefore, survive model keyout/keyin. These ranges may also be read or written from/to csv files to facilitate easy transfer between models.

[Previous](visualise.md)  |  [Next](model-contents-1.md)