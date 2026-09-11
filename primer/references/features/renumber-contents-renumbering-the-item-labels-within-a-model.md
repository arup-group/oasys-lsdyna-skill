###  RENUMBER CONTENTS Renumbering the Item Labels within a Model

* Select a model.
* Press RENUMBER CONTENTS to get the renumbering panel

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_7_1_1.bmp)

This figure shows a typical panel, but the actual appearance will depend upon the contents of your model.

An [individual category](renumber-contents-renumbering-the-item-labels-within-a-model.md#Torenumberanindividualcategoryselectively)(eg **NODE** ) can be renumbered selectively by clicking on its category name button.

The model renumbering table has the following columns for each item category:

To renumber all the items in a category (eg all NODES):

You can control two aspects of labelling for any item category:

>  
> 1: The spacing between item labels: which may be ARB itrary or SEQ uential.
>  
> 
> >  
> > 
> > | ARBitrary | Starts at the given initial value, but preserves the gaps between successive items. This is the default. |
> > | --- | --- |
> > | SEQuential | Starts at the given initial value, and numbers items sequentially upwards from that with no gaps |
> > 
> >  
> 
> 

>  
> 2: The initial value.
> 

The default is whatever the input model contained, but you may change this to any positive integer. Successive values will be adjusted in an "arbitrary" or "sequential" fashion from this value. Notes that latent items will not be renumbered in this panel.

Each item category may be changed individually, or a complete column can be changed by using the " **For all types** " boxes at the head of the list.

Also there are some commonly used global options:

| ALL\_SEQUENTIAL\_1 | Renumbers everything sequentially starting from 1. |
| --- | --- |
| CANCEL\_RENUMBERING | Exits renumbering without making any changes to the model. |
| RESET\_ALL | Sets all the values of all boxes back to their original values. |
| POST-RENUMBER LABEL DECLASH | Post renumber declash of certain entity types. See [Label declash option](declash-labels.md#declash_option)for more information. |

| The changes made in this box are volatile. <br>They are only permanently saved in this model when APPLY\_RENUMBERING is used. |
| --- |

| To renumber an individual category selectively  <br>![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_7_1_2.png) |
| --- |

By clicking on a keyword button in the left hand column of the renumber contents panel, eg the SOLID button, you can invoke the standard item renumbering panel for that category, as shown in the adjacent figure.

Range to renumber : Select the range of items to be processed.

Set initial value : Choose the initial value for this range

Inter-label spacing : Set the gaps between labels

Label clash checks : Check for and eliminate clashes between categories

Post-renumber label declash : Post renumber declash of certain entity types. See [Label declash option](declash-labels.md#declash_option) for more information.

This panel is designed to let you change the labels of individual items, or a range of items, in this category (here solid elements have been chosen).

The left half of the panel allows you to select a range, and update any or all of:

* Its initial value. Default is the current start of the range;
* The gaps between adjacent labels. The default is the current ("arbitrary") gaps.
* Any clashes between these and other items. You can choose both the item type and the model id to check against, for example this user might check against solids in another model.

Clash checking against the following generic categories is also available:

* **ELEMENT** Any element type. Useful where no clashes are permitted between element numbers of any type.
* **SET** Any set type. Useful where no clashes are permitted between sets of different types.

When you have set up those changes you wish to make APPLY\_CHANGES to see their effect. You may alter settings and repeat this operation as often as you like since you are only operating on a "scratch" definition.

The slider box on the right side of the panel both shows the current status and also allows you to renumber items individually: just type in a new label, or use the popup options.

Note that latent items are displayed in the list, but will not be renumbered.

| All operations within this panel operate on "scratch" labels.<br> <br>To make these changes take effect in the permanent database you must use UPDATE\_LABELS |
| --- |

####  Freezing entity labels during renumbering

| Entity labels that lie within a user-specified range can be 'locked' during renumbering. This can be done by selecting the appropriate options in the Renumbering tab in the Program Options panel. The Renumbering options panel can be reached by clicking on the Options button either in the generic renumbering panel or in the category renumbering panel. <br><br>Likewise entity labels that are used by DATABASE\_HISTORY cards can be 'locked' during renumbering. | ![Renumbering Options](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_7_1_3.gif) |
| --- | --- |

[Previous](model-renumber-renumbering-models-andor-their-contents.md)  |  [Next](change-model-id.md)