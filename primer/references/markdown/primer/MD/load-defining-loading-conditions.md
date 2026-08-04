###  LOAD: Defining Loading Conditions
 
* [Selecting the *LOAD sub-keyword](load-defining-loading-conditions.md#LOADcards)
* [Visualisation](load-defining-loading-conditions.md#VisualisingLOADitems)

A range of different loading types can be defined in Ansys LS-DYNA
All \*LOAD sub-keywords are editable within PRIMER.
 
![](../Storage/primer-22-1/primer_links/sect_5/load/fig_load_0.gif)
 
Most * LOAD cardscan be edited only with the [generic "Keyword" editor](the-generic-keyword-editing-panel.md#keywordedit).
 
![](../Storage/primer-22-1/primer_links/sect_5/load/load_options.gif)
 
The other commands ( COPY, DELETE, ...) function in the standard fashion described in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions).

This shows an example of the Keyword editor for \* LOAD\_NODE . The \_POINT variant has been chosen here.

![](../Storage/primer-22-1/primer_links/sect_5/load/load_key.gif)

Specific editing panels exist for \*LOAD\_MOVING\_PRESSURE and \*LOAD\_THERMAL\_VARIABLE\_SHELL due to the nature of those keywords. These cards are similar. They both allow the user to add any number of additional lines of data per card. The \*LOAD\_MOVING\_PRESSURE card is shown here.

![](../Storage/primer-22-1/primer_links/sect_5/load/load_edit.gif)

Additional rows of data can be added by clicking on the Add a data line button.

####  Visualising *LOAD items

\*LOAD items are not displayed by default, but can be selected for display and labelling in the ENTity Viewing  **** panel.

| Only \*LOAD\_NODE symbols are drawn explicitly as arrows acting in the direction of the load/moment. <br>Note that load symbols can be distinguished from \* INITIAL\_VELOCITY ones both by colour and because loads point to a node whereas velocities point away from it.<br> <br>This example shows a force in X acting on Node 10343, and a moment about the YY axis acting on node 10335. | ![](../Storage/primer-22-1/primer_links/sect_5/load/load_symbol.gif) |
| --- | --- |

Other \* LOAD sub-keywords are visualised only in terms of the sets, segments, elements or nodes upon which they act by turning on these additional items in ENTity Viewing. Labels are generated correctly for all sub-types.

[Previous](interface-ssi-id.md)  |  [Next](material-defining-structural-and-thermal-materials.md)