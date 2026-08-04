####  Other Issues in Custom Merge

As the problems in the GLOBAL PARAMETERS , BASIC MODEL DATA   **** and  ****  OTHER MODEL DATA are fixed the main merge window will be updated. When all the problems are fixed the merge can be done. The original models will not be deleted after merging.

Great care must be taken when using the custom merge options, especially when omitting some entity types from either model.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_4_1_10.gif)

As an example imagine merging 2 models which both have a rivet from node 1 to node 2. When doing a custom merge you will be warned that there is a clash of nodes between the 2 models. If you choose an action to renumber the nodes everything will be OK. If instead you only take the nodes from one of the models then there is no clash as the rivets have no labels, but the merged model will have 2 rivets from node 1 to node 2. There are lots of similar situations which may occur which do not cause errors in the merging process but may give an unexpected result when the models are merged.

[Previous](custom-merging-other-model-data.md)  |  [Next](merging-nodes-during-model-merge.md)