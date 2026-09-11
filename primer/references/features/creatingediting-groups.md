###  Creating/Editing Groups

The initial screen for creating/editing groups is shown below. Before a group can be created a Label needs to be given. A Title can also be given if needed.

![](../Storage/primer-22-1/primer_links/sect_6/groups/groups_2.gif)

Once the label for the group is given the CREATE\_GROUP button becomes active to create the group.

####  Locking the contents of a group against clean up

By default an entity that is not used in a model will be removed from a group in a model ['clean up unused'](clean-up-unused.md#642CleanupUnused) operation. The Lock against cleanup checkbox will prevent the contents of a group from being cleaned up. This is saved in the \*GROUP keyword written after \*END by PRIMER. For example, this could be useful if you want to make some sets in your model which you know will be needed at some time in the future but are currently not being used. If the sets are added to a group they will not be deleted by PRIMER.

####  Selecting entity type

Any entity which has a label can be added to a group. Before anything can be added to the group you have to choose the entity type you want to add. This is done with the list on the left hand side of the menu. By default all the entity types that are present in the model that you are editing are shown. This can be changed by using the radio buttons on the right. You can see all entity types (even if they are not present in your model), the entities in your model, or just the entities that are present in the group. Once the entity type is chosen the type is highlighted and the All, List and Range buttons become active to enable you to edit that type. For example if PART is selected:

![](../Storage/primer-22-1/primer_links/sect_6/groups/groups_4a.gif)

The feedback box (shown at the top of the figure) changes to show what is defined in the group by PART . In this example above there are no entries by all, list or range so all are zero. As PARTs are added this will change.

[Previous](group-format.md)  |  [Next](adding-editing-and-deleting-entities-in-groups.md)