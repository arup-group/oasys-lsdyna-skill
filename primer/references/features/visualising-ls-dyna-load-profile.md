###  Visualising Ansys LS-DYNA Load Profile

You can read the load profile files produced from Ansys LS-DYNA within PRIMER. PRIMER will generate interactive bar charts showing the information contained within those files. The X-axis is time or percentage time and the Y-axis indicates processor, and then different coloured bars for different cost items.

The files read by PRIMER are 'load\_profile.csv' and 'contact\_profile.csv' which are generated during a Ansys LS-DYNA analysis.

In the Read dyna panel, there are four options 'Load Profile', 'Contact Profile', 'Mes profile', and 'Decomposition' to read cost information on what is "expensive" in the model, along with MPP decomposition information.

A decomposition file "decomp\_parts.ses" which contains information on how the elements in the model have been decomposed is required to view this information within PRIMER. In order to generate a decomp\_parts.ses file, turn on \*CONTROL\_MPP\_ DECOMPOSITION\_OUTDECOMP and set the TYPE field to 2. With this option included in the model upon initialisation a file "decomp\_parts.ses" will be produced by Ansys LS-DYNA.

####  Load profile

The load profile is a high level overview of the balance across cpus. It will allow you to view cost information of different categories across all the processors.

![load_profile](../Storage/primer-22-1/primer_links/sect_3/images/dyna_load_profile.PNG)

####  Contact profile

The contact profile will let you visualise contact distribution across cpus.

![cont_profile](../Storage/primer-22-1/primer_links/sect_3/images/dyna_cont_profile.PNG)

####  Message profile

The most comprehensive data is found in the individual message files. It gives a detailed distribution of different entity types in your model.

![mes_profile](../Storage/primer-22-1/primer_links/sect_3/images/dyna_mes_prof.PNG)

####  Decomposition

If a decomposition file "decomp\_parts.ses" exists, you can colour elements as per the ecomposition using Colour Elements . Press Create Assemblies to generate an assembly or group per cpu so that you can easily blank the different 'zones'. Press Show Assembly to load newly created assemblies/groups in part tree mode.

![decomp_panel](../Storage/primer-22-1/primer_links/sect_3/images/dyna_decomp_panel.PNG)

####  Graph controls

In the bar graph panel there are various interactive controls:

#####  ZOOM

Pressing SHIFT or CTRL with the right mouse button (click and drag).

#####  PAN

Pressing SHIFT or CTRL key with the middle mouse button (click and drag).

#####  HOVER Display

When hovering over the graph, the bar gets highlighted and following information of the highlighted category are shown in the red boxes:

* 1st box: 0 (processor id)
* 2nd box(for shell, solid, beam, and elements type): 1646 (#of shells)
* 3rd box: SHELLS (category type)
* 4th box: 4.69153E+01 (cost information)

![hover_text](../Storage/primer-22-1/primer_links/sect_3/images/load_prof_hover.PNG)

#####  Pop-up options

Move your mouse to bring cursor over graph bars and right mouse click to bring a pop-up panel which lets you perform various visibility operations on labelled entities, and sort the graph order by cost in ascending/descending orders.

![prof_pop_up](../Storage/primer-22-1/primer_links/sect_3/images/load_pop_up.PNG)

In the pop-up panel, Only, Only multiple are applicable for SHELL, SOLID, BEAM, and Elements (in mes profile) types. These options will let you blank everything except the current selection.

#####  Graph's Bar Width/Gap

The graph's bar width and the gap between bar can be changed using + and - which will allow you to accommodate a greater number of rows. These can be also set using the following preference options in the oa\_pref file: 
primer\*dyna\_profile\_graph\_width: 
primer\*dyna\_profile\_graph\_gap:

#####  Blank Graph Category

To view only a specific category, move your mouse in the graph to the desired category and right click to bring a pop-up panel and select Only graph. It will blank the rows for all the other categories. Alternatively, you can left click on the square box of the desired entity at the top to blank other categories. If you wish to view more than one category, select the square boxes by pressing CTRL plus LEFT mouse click.

#####  Filter Graph by Value

To filter the graph by value, enter a value in the Filter Value textbox and all the categories which have cost below the specified value will not be shown in the graph.

![graph_filter](../Storage/primer-22-1/primer_links/sect_3/images/prof_filter_value.PNG)
[Previous](batch-ls-dyna-output-check.md)  |  [Next](dashboard-check.md)