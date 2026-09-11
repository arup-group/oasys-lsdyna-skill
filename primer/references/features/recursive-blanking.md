###  Recursive Blanking

Blanking in PRIMER has always been a contentious issue because of the way that selection propagates down through the hierarchy of items in a model. The increasing complexity of ls-dyna models has exacerbated this problem.

In earlier versions, where blanking propagation was unconditional, a user could accidentally blank a "junior" object (typically nodes) through propagation without being aware that this was happening. This would then give rise to "why won't it draw xxxx?" questions, which could only be solved by unblanking things which the user didn't think they had blanked in the first place!

In PRIMER V9.1 an on/off switch for blanking propagation was provided.

In PRIMER V9.2 yet more control has been provided over how blanking propagates through the structure by allowing the user to set the Recursive Action value, which controls how blanking (but not any other form of selection) is propagated down a model hierarchy.

| ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_5_1_1.gif) | " **No recursion** " means that only the selected items are blanked, with no propagation.
<br><br>" **Drawable only** " means that blanking propagates downwards, but only affects items that are currently drawable (ie their [Entity switch](controlling-entity-visibility-and-labelling.md#Entityvisibility) is on).
<br><br>" **Unconditional** " propagates blanking unconditionally down through the model. |
| --- | --- |

The "**No recursion**" case has some exceptions built into it as follows:

* Blanking an item that is not itself drawable, but which is drawn via its underlying items (eg MATERIAL, PART, SECTION, SET, etc), causes limited propagation downwards to the drawable items. Thus, even with "**No recursion**" set, blanking a MATERIAL will propagate downwards to blank the elements of that material, but not any further (ie not to the nodes on the elements).
* SETs are another special case when " **No recursion** " is selected: 

    * Normally SETs are  ***not***  drawn explicitly, and if a SET is blanked then the blanking propagates down as above to the drawable items in the set.
    * However if SETs  ***are***  drawn then blanking them stops them being drawn, but does  ***not***  affect the visibility of the underlying items, meaning that the SETs will no longer be superimposed on the image.

>  
> 
>

The Recursive Action flag also affects how "Quick Pick" and Part Tree blanking propagate (internally BLANK, "Quick Pick" and Part Tree blanking are the same, simply using different selection methods.)

[Previous](the-blank-menu.md)  |  [Next](quick-pick-blanking.md)