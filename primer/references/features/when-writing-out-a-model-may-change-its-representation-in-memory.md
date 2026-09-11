####  When Writing Out a Model May Change Its Representation in Memory

Writing out a model does not usually affect its contents in memory (\*) in any way, the exception being when label resequencing is required to prevent clashes in the external format. This usually arises because Ansys LS-DYNA permits different classes of item to have overlapping labels, whereas the external data format does not. For example IDEAS universal file and PATRAN neutral file formats do not permit overlapping element numbers.

In this situation the labels in the internal model are permanently modified as required. If this is not acceptable [COPY](model-copy-copying-models-internally.md#MODELCOPY) the model before you write it out, then [DELETE](model-delete-deleting-internal-models.md#36MODELDELETE) the model that has been modified during the write operation.

(\*) There are some pathological cases where this may not be true. For example, &lt;INITITER&gt; on \*CONTACT\_...\_MPP where a blank entry means use option 2 not (as one would expect) option 0 (!) In this case, PRIMER does not unconditionally accept an as read value of 0 as correct and keyout (at the user's discretion) may modify it.

[Previous](declash-on-writing-a-model.md)  |  [Next](model-merge.md)