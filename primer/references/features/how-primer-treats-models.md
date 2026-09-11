##  How PRIMER Treats "Models"

PRIMER is unusual in that it permits you to work with concurrent multiple models.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_0_1.png)

A "model" within PRIMER is a self-contained set of data, derived from any source. It need not be a complete input deck, and might indeed only have a few nodes and elements or even be empty. Up to 255 models may be stored and processed simultaneously, and each is kept totally separate until the user takes some action which merges two or more of them.

The purpose of this approach is to permit output models to be built up from sub-assemblies of other input models. For example to build a house you might have three input models: "walls", "door" and "window". The output model ("house") could be assembled from "walls" merged with "door", and possibly five copies of "window" located in different places.

In the example above there are currently 9 models in memory, but only 8 at a time can be displayed in this panel, so a scroll-bar has been added.

[Previous](model-manipulation.md)  |  [Next](model-list-listing-models-and-setting-their-active-status.md)