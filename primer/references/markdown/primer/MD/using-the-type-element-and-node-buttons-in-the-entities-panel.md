###  Using the "Type" Element and Node Buttons in the Entities Panel

![](../Storage/primer-22-1/primer_links/sect_4/images/entities_panel.png)

In [Controlling Entity Visibility and Labelling](controlling-entity-visibility-and-labelling.md#Entityvisibility), the use of the ENTity Viewing panel to control labelling on plots was described.

It is also possible to label nodes and elements "dynamically", which means "instantly on the existing image".

* Select ELEMENTS from the left hand "type" column

* Select a category from the right hand "type" column .

* This maps the labelling panel for that item type (below).

* Click on items of that type to label them immediately.

Alternatively, use [Quick Pick](quick-pick-function.md#quickpick), set the entity type to SOLID, SHELL, etc and the action to "Element Details".

![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_6_1.gif)

This figure shows a typical dynamic labelling box for shell elements.

It is updated automatically as you click on elements, or you can type a new element number into the **Elem:** box.

More than one model is current in this example, so typed in elements must be prefixed with their model id. In this example shell element 25468 in model #3 ( **M3/S25468** ) has been selected.

The EDIT button invokes the detailed editing panel for this element. The INCL? button lists the elements position in the model's include file structure. List Xrefs invokes the cross-reference viewer for this element (see [XREFS: Cross References Viewer](xrefs-cross-references-viewer.md) for more details).

Not only is the element in question labelled on the screen, but its major attributes are presented in this panel:

* The nodes on the element are drawn schematically. (Note that the schematic shape is idealised, here as a square, not the true shape of the element.)

* Its Part, Section, Material and other attributes are given.

By using the popup menus against the PART, SECT , etc boxes it is possible to view the details of these in their respective edit/browse panels.

The " **Label with ...** " buttons control how the selected items are labelled on the screen. The categories are the same as those in the main ENT ity Viewing panel, but apply only to these "dynamically" labelled items.

The " **Draw with ...** " buttons control what extra information is added to the selected items:

>  
> 
> | Nodes | Adds the labels of nodes connected to this element |
> | --- | --- |
> | Triad | Draws the local axes as a triad (if relevant for this class of element) |
> | Axes | Draws other local axes where relevant: orientation vectors, etc |
> 
> 

Selection will be limited to the class of item selected in the ENT ity Viewing panel. However selecting class ALL\_ELEMENTS permits any class of element to be selected for labelling.

The details of this LABEL/VIEW panel will vary with the class of object being shown: for example the panel for nodes doesn't show a diagram but rather lists coordinates, restraints, rigid connectivity (if any), etc for the node.

This panel can also be invoked anywhere in PRIMER from popup windows offering the LABEL/VIEW option

[Previous](dynamic-labelling.md)  |  [Next](using-the-quick-pick-element-and-node-details-option.md)