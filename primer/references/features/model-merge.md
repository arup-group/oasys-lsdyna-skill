##  MODEL &gt; MERGE

| "Merging" combines two input models into a single output one.<br> <ul> <li>Select two source models to be merged. In this example the user has selected models 1 and 2. </li> <li>Define a &quot;target&quot; model, which can exist, but generally will be an unused model. </li> <li>Click on <span class="buttontext">Apply </span>to initiate the merge. </li> </ul> <br><br> ![](../Storage/primer-22-1/primer_links/sect_3/images/model_merge_img1.jpg) |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_3/images/model_merge%20img2.JPG) |
| --- |

If the output model is different to the input models then the window on the right is shown.

The two models which are selected for merging are shown in the top of the window. One of the models is designated as the primary model and one is designated as the secondary model. This can be changed by using the Primary model   **** popup.

A title for the target model will automatically be created by using the titles from the primary and secondary models (in this example 'Example model + Circular airbag'). Alternatively the popup can be used to select from predefined titles or a new title can be typed in. This title will be used when the new model is created.

A destination include file can be specified if you want the secondary model entities to end up in a particular include file in the primary model.

In this example there are potential problems with merging the two files together. This is shown by the red button PROBLEMS WITH CLASHES OR DUPLICATES: CANNOT MERGE .

If there are no potential problems with merging the two files together the button would be coloured green and labelled NO PROBLEMS WITH CLASHES OR DUPLICATES: OK TO MERGE . Additionally the APPLY\_MERGE button will be ungreyed to allow the merge to proceed.

If you want to perform a "merge nodes" operation when merging models (e.g. if you reflected a half vehicle model and are merging the 2 halves together then select the Merge nodes after merging model checkbox. For more details see
[Merging Nodes During Model Merge](merging-nodes-during-model-merge.md#mergenodes).

| ![](../Storage/primer-22-1/primer_links/sect_3/images/model_merge%20img3.JPG)<br> <br>If one (or both) of your input models is very large then copying the model data into a new model when merging could mean that you run out of memory on your machine (as you approximately double the memory used when merging).<br> <br>In this case you can set the target model to be the same as one of the input models. As you are not creating a new model no more memory will be required. However, as you are changing one of the input models make sure that your original model is saved before you start the merge.<br> <br>If the target model is the same as one of the input models then that model is automatically chosen as the primary model. The options that allow you to change the primary model will be unavailable.<br> <br>Additionally some of the options for fixing clashes in the custom merge case will not be available as they are not possible. |
| --- |

[Previous](when-writing-out-a-model-may-change-its-representation-in-memory.md)  |  [Next](options-to-fix-clashes.md)