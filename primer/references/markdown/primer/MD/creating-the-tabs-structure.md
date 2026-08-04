![](../Storage/primer-22-1/creating-the-tabs-structure/tabs_panel_alternate_polarities.png)

Once the layers structure is created, the structure of the battery tabs can be created by providing the following:

**Tabs dimensions and position:**

Four different configurations of tab positioning relative to the layer unit cell are available to select from:

![](../Storage/primer-22-1/creating-the-tabs-structure/tabs_position.PNG)

![](../Storage/primer-22-1/creating-the-tabs-structure/creating-the-tabs-structure-2024-10-08-1.png)

The Y and Z dimensions of the tabs need to be defined regardless of the selected configuration.

For the *Same side A* and *Same Side B* configurations, the **Separation** between the two tabs can also be set.

The option to **Alternate tab polarities** every other cell in x and/or y direction is also available. This is reflected in the titles provided to the tabs parts, the position of tabs if in ‘micro scale’ mode, and the isopotential connections configuration between unit cells.

The thickness of the tabs does not need to be explicitly defined but instead determined as follows;

- *For the Micro scale:* the positive tab spans the positive current collector (PCC), while the negative tab spans the negative current collector (NCC).

![](../Storage/primer-22-1/creating-the-tabs-structure/micro_tabs.PNG)

- *For the Macro and Meso scale*: both tabs span the whole unit cell.

![](../Storage/primer-22-1/creating-the-tabs-structure/macro_tabs.PNG)

**Tabs meshing:**

The meshing can be applied by defining either the number or the size of the elements in each direction.

If the **Create \*CONSTRAINED\_NODAL\_RIGID\_BODY?** option is selected, then a nodal rigid body will be created for each tab-layer (or tab-unit cell for the Macro structure) connection that includes all overlapping nodes from both the tabs and the layers (or unit cell) which would structurally connect the different parts forming the unit cell.

![Micro Scale Nodal Rigid Body](../Storage/primer-22-1/creating-the-tabs-structure/micro_NRB_no_caption.PNG)

Micro scale Nodal Rigid Body

![](../Storage/primer-22-1/creating-the-tabs-structure/macro_NRB_no_caption.PNG)

Macro & Meso scales Nodal Rigid Body

**Tabs material:**

The **Structural Material id** and **Thermal Material id** must be defined for each of the positive and negative tabs. The tab type currently being edited will be highlighted, and you will only be able to set the values for the negative tab once this is completed for the positive tab.

An \*EM\_MAT\_001 card will automatically be generated to define the electromagnetic type and properties of the selected structural material. The two tabs can refer to the same structural material, in which case a common \*EM\_MAT\_001 card will be generated. However, the following rules must always apply:

- *For the Micro and Meso scales*, the tabs structural material(s) cannot be the same as any of the material instances used by the cathode, separator or anode layers as these must have a separate \*EM\_MAT\_001 card given that, unlike tabs, they are non-conductive, so must have different electromagnetic properties.

- *For the Macro and Meshless connected to macro scales*, the tabs structural material(s) cannot be the same as the one used for the unit cell as the latter will be associated to an \*EM\_MAT\_006 card with the special Randles Batmac type while the tabs should be associated to an \*EM\_MAT\_001 of a conductive type.

![](../Storage/primer-22-1/creating-the-tabs-structure/tabs_mat_diagram.PNG)

The **I** **nitial conductivity** can be defined for each of the two tabs if separate structural materials are selected or only for the positive tab if a common structural material is selected (and will thus apply for both tabs) and will be reflected in the assigned \*EM\_MAT\_001 (*SIGMA* field).

The *MTYPE*, *SIGMA*and *RDLTYPE*fields in the generated \*EM\_MAT\_001 cards will take the following values:

| Tab type | *MTYPE* | *SIGMA* | *RDLTYPE* |
| --- | --- | --- | --- |
| Positive tab | 4: Conductor not connected to any current or voltage source | Initial conductivity (set by user) | 0: Default (not a cell layer) |
| Negative tab | 4: Conductor not connected to any current or voltage source | Initial conductivity (set by user) | 0: Default (not a cell layer) |

**Isopotentials:**

If the **Create ispotentials between tabs and current collectors**option is turned on, then the tool will automatically generate \*EM\_ISOPOTENTIAL cards to constrain the overlapping nodes to have the same scalar potential value, which would electrically connect the tabs to the layers as follows:

*For the Micro scale*, a single \*EM\_ISOPOTENTIAL card will be created for each tab-current collector connection and will include all overlapping nodes from both the tab and current collector as a \*SET\_NODE.

![](../Storage/primer-22-1/creating-the-tabs-structure/con_isop_micro_highlight.PNG)

For the Meso scale, a single \*EM\_ISOPOTENTIAL card will be created for each tab-layers cell connection and will include all overlapping nodes from both the tab and layers cell as a \*SET\_NODE.

![](../Storage/primer-22-1/creating-the-tabs-structure/con_isop_meso_highlight.PNG)

For the Macro scale, two \*EM\_ISOPOTENTIAL cards will be created, one including the overlapping nodes from the tab and another including the overlapping nodes from the layers cell. The two isopotentials will then be connected through an \*EM\_ISOPOTENTIAL\_CONNECT type with a voltage set to 0.
![](../Storage/primer-22-1/creating-the-tabs-structure/con_isop_macro_highlight.PNG)

The *SETTYPE* field in all generated \*EM\_ISOPOTENTIAL cards will be set to 2 (Node set).

The *RDLTYPE*field in the generated \*EM\_ISOPOTENTIAL cards will take the following values:

| \*EM\_ISOPOTENTIAL instance | *RDLTYPE* |
| --- | --- |
| Micro \*EM\_ISOPOTENTIAL at positive tab-PCC connection | 1: Current Collector Positive |
| Micro \*EM\_ISOPOTENTIAL at negative tab-NCC connection | 5: Current Collector Negative |
| Meso \*EM\_ISOPOTENTIAL at positive tab-cell connection | 1: Current Collector Positive |
| Meso \*EM\_ISOPOTENTIAL at negative tab-cell connection | 5: Current Collector Negative |
| Macro \*EM\_ISOPOTENTIAL for positive tab nodes | 0: Default (not a cell layer) |
| Macro \*EM\_ISOPOTENTIAL for negative tab nodes | 0: Default (not a cell layer) |
| Macro \*EM\_ISOPOTENTIAL for cell nodes connected to the positive tab | 1: Current Collector Positive |
| Macro \*EM\_ISOPOTENTIAL for cell nodes connected to the negative tab | 5: Current Collector Negative |

The *CONTYPE, ISOID1, ISOID2 and VAL*fields in the generated \*EM\_ISOPOTENTIAL\_CONNECT cards for the Macro scale will take the following values:

| \*EM\_ISOPOTENTIAL\_CONNECT instance | *CONTYPE* | *ISOID1* | *ISOID2* | *VAL* |
| --- | --- | --- | --- | --- |
| Macro \*EM\_ISOPOTENTIAL\_CONNECT for positive tab-cell connection | 3: Voltage source | Macro \*EM\_ISOPOTENTIAL for cell nodes connected to the positive tab | Macro \*EM\_ISOPOTENTIAL for positive tab nodes | 0 |
| Macro \*EM\_ISOPOTENTIAL\_CONNECT for negative tab-cell connection | 3: Voltage source | Macro \*EM\_ISOPOTENTIAL for cell nodes connected to the negative tab | Macro \*EM\_ISOPOTENTIAL for negative tab nodes | 0 |

If the **Create ispotentials at free surfaces of tabs** option is turned on, then the tool will automatically generate \*EM\_ISOPOTENTIAL cards for each tab in the model that includes all nodes at the surface not connected to the layers/unit cell. These could then be easily used to connect the different tabs using \*EM\_ISOPOTENTIAL\_CONNECT cards or connect the tabs to external circuits.

![](../Storage/primer-22-1/creating-the-tabs-structure/free_isop.PNG)

If the **Create ispotential connections between unit cells** option is turned on, then the tool will automatically generate \*EM\_ISOPOTENTIAL\_CONNECT cards that model the electrical connections between unit cells. This can be done based on a range of possible configurations. The options offered depend on the selected tabs positions and relative polarities as follows:

| Tabs position | Alternate tab polarities | Alternate tab polarities | Possible configurations |
| --- | --- | --- | --- |
| In X direction | In Y direction |
| --- | --- |
| Same side A / B | No | No | ![](../Storage/primer-22-1/creating-the-tabs-structure/isop_con_same_no_no.png) |
| Yes | No | ![](../Storage/primer-22-1/creating-the-tabs-structure/isop_con_same_yes_no.png) |
| No | Yes | ![](../Storage/primer-22-1/creating-the-tabs-structure/isop_con_no_yes.png) |
| Yes | Yes | N/A |
| Counter A / B | No | No | ![](../Storage/primer-22-1/creating-the-tabs-structure/isop_con_counter_no_no.png) |
| Yes | No | ![](../Storage/primer-22-1/creating-the-tabs-structure/isop_con_counter_yes_no.png) |
| No | Yes | ![](../Storage/primer-22-1/creating-the-tabs-structure/isop_con_counter_no_yes.png) |
| Yes | Yes | ![](../Storage/primer-22-1/creating-the-tabs-structure/isop_con_counter_yes_yes.png) |

Once all values are provided, clicking on **Create** will generate the tabs parts and associated entities.

If you wish to make any modifications to the tabs structure once created, click on the **Edit**button to delete all the created entities, update the parameters as desired and click on **Create**again to rebuild the structure. Note that clicking on **Edit**will also delete any entities created during the '4. Randles parameters' stage.

Once satisfied with the tabs structure, you can move to the '4. Randles parameters' step by either clicking on the corresponding button at the top of the window, or using the **Next**button. You can also move back a previous stage using the **Previous**button.

![](../Storage/primer-22-1/creating-the-tabs-structure/tabs_next_previous.png)

[Previous](creating-the-layers-structure.md)  |  [Next](defining-the-randles-parameters.md)