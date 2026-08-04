##  Viewing Models

Models become visible as soon as they have been read in.

The default action when a model is input is to calculate its max/min dimensions, then to display it, autoscaled if necessary, in the current plotting mode: the default mode can be set in the oa\_pref file (see [appendix M](the-oa-pref-preferences-file.md#oa_pref) for details).

There are a range of commands which affect what is visible, how it is drawn and what labelling takes place. These are described in section 4, but a summary is:

* Model visibility is controlled globally via the " **Mnnn** " buttons under MODEL &gt; LIST (see [Model &gt; List: Listing Models and Setting Their "Active" Status](model-list-listing-models-and-setting-their-active-status.md#model_list)). When depressed (green) a model is potentially available for viewing, when up (red) the model is removed from the view list.
* Classes of entity (eg Shells, Nodes, Constraints, etc) may be made visible and, optionally, labelled using the Entity Visibility controls (see [Controlling Entity Visibility and Labelling](controlling-entity-visibility-and-labelling.md#Entityvisibility)). These flag an entity class for display and/or labelling across all models. This panel can be accessed by the shortcut key E, the top bar menu DISPLAY &gt; ENTITIES or the button ENT from the viewing drawing window.
* Any item, or range of items, can be made visible or invisible using the BLANK command. "Blanking" may be applied in a hierarchical fashion to models, or subsets thereof, down to individual items. See [BLANKING Controlling Entity Visibility](blanking-controlling-entity-visibility.md#BLANKING) for more information on Blanking.

Basic drawing itself takes place in one of three modes: (see [Basic Drawing Commands: LI(ne), HI(dden Line), SH(aded Image)](basic-drawing-commands-li-ne-hi-dden-line-sh-aded-image.md))

* LIne "Wireframe", with no hidden-surface removal.
* HIdden Also wireframe, but with hidden surface removal applied.
* SHaded 2D and 3D items are drawn shaded and lit, with 1D and other items superimposed in hidden mode.

In addition items may be  **SKETCH**  ed on top of the current image. "Sketching" superimposes a wireframe (unhidden) sketch of the relevant items on top of the current image, in an alternate colour and without clearing the current image. Sketching is not affected by the entity switches or blanking settings.

Data-bearing items may also be contoured or otherwise displayed using: (see [Data Plotting Commands](data-plotting-commands.md#42DataPlottingCommands))

* Vector plots (VECT PLOT). Arrows or similar symbols, for example of initial velocity.
* Continuous Tone (CT) or Shaded Image (SI) contour plots, for example of timestep, shell thickness, etc.

[Previous](operations-on-models.md)  |  [Next](memory-management-and-usage.md)