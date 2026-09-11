###  INITIAL: Defining Initial Conditions

Initial conditions may be defined for a range of items with Ansys LS-Dyna.
 
* [Selecting the *INITIAL sub-keyword](initial-defining-initial-conditions.md#INITIALcards)
* [Editing panels](initial-defining-initial-conditions.md#generalcard)
* [Create/Edit panel for *INITIAL_VOLUME_FRACTION_GEOMETRY](initial-defining-initial-conditions.md#init_vol_fracg)
* [Create/Edit panel for *INITIAL_VELOCITY_GENERATION](initial-defining-initial-conditions.md#init_vel_gen)
* [Visualisation](initial-defining-initial-conditions.md#VisualisingINITIALitems)

![Initial card options](../Storage/primer-22-1/primer_links/sect_5/initial/fig_init_01.gif)

\*INITIAL cards can be edited with the [generic "Keyword" editor](the-generic-keyword-editing-panel.md#keywordedit). All \* INITIAL subtypes except VOLUME\_FRACTION\_GEOMETRY and VELOCITY\_GENERATION (which have their own specific Create/Edit panel) can be processed in this way.

![Options](../Storage/primer-22-1/primer_links/sect_5/initial/initial_options.gif)

The other commands ( COPY, DELETE, ...) function in the standard fashion as defined in [Standard Keyword Top Level Menu Options](standard-keyword-top-level-menu-options.md#501StandardKeywordtoplevelmenuoptions).

This shows an example of the Keyword editor for \* INITIAL\_VELOCITY

![*INITIAL keyword editing panel](../Storage/primer-22-1/primer_links/sect_5/initial/initial_basic.gif)

\*INITIAL\_VOLUME\_FRACTION\_GEOMETRY items are created using a specific editing panel. New geometries can be added by clicking on the Add new geometry button.

![init_vol_frac_g](../Storage/primer-22-1/primer_links/sect_5/initial/fig_init_vol_gf.gif)

\*INITIAL\_VELOCITY\_GENERATION items are created using a specific editing panel.

![Edit panel for INITIAL_VELOCITY_GENERATION](../Storage/primer-22-1/primer_links/sect_5/initial/initial_vel_gen.gif)

| Visualising *INITIAL items |
| --- |
| \* INITIAL items are not displayed by default, but can be selected for display and labelling in the ENTity Viewing panel. <br>At present only \* INITIAL\_VELOCITY (\_&lt;type&gt;) cards are drawn fully.<br> <br>These are shown as arrows in the direction of the velocity. In this example there is a translational velocity at node 10333, and a rotational one at 10341.<br> <br>If multiple initial velocities are defined at a node (an error) then all will be drawn separately. | ![](../Storage/primer-22-1/primer_links/sect_5/initial/initial_velg.gif) |
| **Using the**  **VEC**  **plotting mode to display initial velocities**  <br>Initial velocities from any source (not just \* INITIAL cards) can also be visualised in "vector contour" form via the Vect plot command. | ![](../Storage/primer-22-1/primer_links/sect_5/initial/fig_init_1.gif) |

Other \*INITIAL items are not drawn explicitly, but can still be visualised by turning on (in ENTity Viewing) the display of the items they reference: sets, nodes, elements, etc. Labels referring to the initial velocity type are generated correctly.

[Previous](include-include-files.md)  |  [Next](integration-defining-integration-rules.md)