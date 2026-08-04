**Visualisation entities for Dummies/HBMs**

## **What are Visualisation entities?**

Visualisation entities for Dummy/HBMs are created to break up HBM entities into:

* **Dummy/HBM tree assemblies** – pelvis, thorax, head, legs, arms etc.

* **HBM anatomy**: skin, skeleton, flesh, organs, NULL-shells etc.

 These visualisation entities are created from the “**Visualisation table**” tool, which is available from within the Safety-&gt;Dummies Tools panels in the PRIMER.

The table can be used to manipulate the visibility and the visual properties like colour, transparency etc. for these visualisation entities.

Please note that these “visualisation entities” are temporary entities that are valid only in the ongoing PRIMER session.

These “visualisation entities” are not Ansys LS-DYNA entities and cannot be written or copied out into a keyword file or into any other PRIMER formats.

## **How to enable visualisation entities?**

The visualisation entities are created from the “**Visualisation table**” tool, which is available from within the Safety-&gt;Dummies Tools panels in the PRIMER.

The tool is also available from the "**Position Parts**" panel.

The first image below shows the process to access the visualisation table and create and show the visualisation entities for an example HBM.

The second image below shows how to visualise the dragging of the PRIMER assemblies for a HBM in the "Position parts" panel.
![](../Storage/primer-22-1/vis_table1.PNG)

![](../Storage/primer-22-1/vis_table2.PNG)

## Create HBM Visualisation entities file for D3PLOT 

The HBM visualisation entities created by the HBM visualisation table can be viewed in a D3PLOT session using a "D3PLOT groups file (\*.vis)".![](../Storage/primer-22-1/vis_table3.png)

A model specific “D3PLOT groups file” can be created from the Visualisation table, using the buttons under "Create D3PLOT groups file" label.

The radio buttons provide an option to choose the type of HBM visualisation entities, that you want to view in D3PLOT.

* Assembly entities: Creates a D3PLOT groups file with only those entities that are viewed in an “Assembly view”.

* Anatomy entities: Creates a D3PLOT groups file with only those entities that are viewed in an “Anatomy view”.

* Assembly and Anatomy entities: Creates a D3PLOT groups file with all the entities that are viewed in both the “Assembly” and “Anatomy” views.

“Apply” will create a D3PLOT groups file with a filename (\*.vis) mentioned in the adjacent textbox.

This groups file can be loaded in to a D3PLOT session on the Ansys LS-DYNA results of the same model.

The following image describes the workflow to create a D3PLOT groups file in PRIMER: (**Model Acknowledgements: GHBMC Elemance**)

![](../Storage/primer-22-1/visualisation-table/vis_table4.png)

**To view the HBM Visualisation entities in D3PLOT:**
![](../Storage/primer-22-1/load_vis_file_in_d3plot.PNG)
In Groups menu in D3PLOT, you can see the list of HBM entities and perform various operations like Only, Sketch etc.

![](../Storage/primer-22-1/visualisation-table/only_group.PNG)

![](../Storage/primer-22-1/visualisation-table-1.png)
[Previous](advanced-hbm-positioning-using-ansys-ls-dyna.md)  |  [Next](dummyhbm-and-seatsquash.md)