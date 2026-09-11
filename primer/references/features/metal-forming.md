###  METAL-FORMING

 The METAL-FORMING specialist function allows you to include the effects of metal forming on parts in crash models by giving the part in the crash model the initial thicknesses and plastic strains from the metal-forming analysis. The models can have different meshes and different orientations. PRIMER will map the results from the forming model mesh onto the crash model mesh. 
Select the Other pop-up menu from **Tools** and then press the FORMING button to start the process. 

####  Main panel

| ![](../Storage/primer-22-1/primer_links/sect_6/metalform/forming_ui.png)The main metal-forming panel is shown in the adjacent figure.<br> <br>The panel allows you to map the results from parts on the forming model, Parts on Source, onto parts on the crash model, Parts on Target.<br> <br>Target must be the crash model. <br> Source must be the forming model.<br> <br>The process to map the results from the forming model onto the crash model is:<br> <ul> <li>Read the crash model (target) and the forming model (source) into <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->. </li> <li>Type in the model numbers of the crash model into
<span class="buttontext">Target&#160;</span>and the forming model into
<span class="buttontext">Source&#160;</span>(e.g. 1 and 2). </li> <li>Pick, select or <span>type </span>the part in the crash model you want to modify using the object menu invoked from the&#160;<span class="buttontext">Parts on Target&#160;</span>button.</li> <li> Pick, select or type the equivalent part in the forming model using the object menu invoked from the&#160;<span class="buttontext">Parts on Source</span>&#160;button.</li> <li> Give 3 pairs of equivalent nodes in the&#160;<span class="buttontext">Target&#160;</span>and
<span class="buttontext">Source </span>models for orientation - i.e. <span class="buttontext">Node 1 </span>in the&#160;<span class="buttontext">Target </span>model is equivalent to <span class="buttontext">Node 1 </span>in the&#160;<span class="buttontext">Source </span>model. Each triplet of nodes forms a right-handed coordinate system with its origin at <span class="buttontext">Node 1</span>. </li> <li>Select the data to be copied from source to target model </li> <li>Optionally use <span class="buttontext">Reflect in Y = 0 </span>to reflect the source model and its data prior to mapping. </li> <li>Press <span class="buttontext">APPLY </span>to map the results from the forming model to the crash model.</li> </ul> <br>The Interpolate thickness option interpolates the shell thicknesses at the nodes from the matched shells in the source model, allowing for an improved shell thickness mapping. This feature is active by default and can also be controlled using the preference primer\*forming\_shell\_thickness\_interpolation. If interpolation is disabled, the tool will revert to using the average thickness of the matched source model shells. |
| --- |

| Example  <br>The image below shows the thickness distribution from the forming analysis.<br> <br>![](../Storage/primer-22-1/primer_links/sect_6/metalform/metalform_1.gif) <br>Thickness distribution in forming model |
| --- |

The crash model has a uniform initial thickness and a different mesh to the forming model

![](../Storage/primer-22-1/primer_links/sect_6/metalform/metalform_2.gif) 
Mesh of crash model panel

| To map the results from the forming model panel onto the crash model panel we give the model number, part and 3 nodes for each model.<br> <br>The Crash model details are given in<br>Target on the left side of the panel.<br> <br>The Forming model details are given in<br>Source on the right side of the panel. | ![](../Storage/primer-22-1/metal-forming/metal-forming-2025-04-14-1.png) |
| --- | --- |

| The figure below shows the locations of nodes 1, 2 and 3 in both models. These nodes **must** be at equivalent points on the panel. It is essential to make the 3 nodes as far apart as possible and not colinear so that PRIMER can map the results as accurately as possible. <br> <br> <br>![](../Storage/primer-22-1/primer_links/sect_6/metalform/metalform_4.gif) |
| --- |

When the APPLY button is pressed PRIMER takes the results from the forming model and maps them onto the crash model. For example plotting shell thickness gives:

| ![](../Storage/primer-22-1/primer_links/sect_6/metalform/metalform_7.gif) <br>Crash model | ![](../Storage/primer-22-1/primer_links/sect_6/metalform/metalform_6.gif) <br>Forming model |
| --- | --- |

####  How this process works.

The process goes through the following stages:

1. The local coordinate systems for Source (forming) and Target (crash) models, based on nodes 1 to 3 in each, are calculated. Node 1 is the origin, vector N1N2 gives the local X axis, and N3 lies on the local XY plane. If no nodes are defined then the global coordinate system is used.
2. In both Source and Target models the average coordinate of each element, calculated from the average of its nodal coordinates in its local system, is calculated and stored. The longest element side length in each model is also calculated for use in defining the default "search distance".
3. For each element in the Target model a search is made for the nearest element in the Source model. This is based on the vector distance between the average element coordinates as calculated in step (1). If no Source element is found within the "search distance" of a Target element then that element is unmatched, and no data will be transferred for it. The matching process will report how many elements were unmatched, and if this unacceptable you may need to correct the local coordinate systems, or change the search distance (the default distance is 2x the longest element side length in the models).
4. For each matched Target element the selected data from the nearest element in the Source model is copied. In more detail: 

    * Thickness is taken from the source element's \*ELEMENT\_SHELL\_THICKNESS definition if it exists, otherwise from its \*SECTION\_SHELL card. The element in the target model is always converted to a \*ELEMENT\_SHELL\_THICKNESS definition, with thicknesses being defined for all nodes.
    * Stresses and strains from the \*INITIAL\_STRESS\_SHELL and \*INITIAL\_STRAIN\_SHELL cards are copied over verbatim. Any existing data for this element in the target model is deleted and replaced by the incoming data. 
 
  ***Note***  : No check is made for consistency of integration point locations in \*INITIAL data, in other words PRIMER does not check that the number and location of integration points in the source element matches those in the target element, it simply copies the data from source to target. 
 
This is not an error since Ansys LS-DYNA will interpolate the initial data onto the underlying element definition, giving a consistent result. However if the detailed distribution of stress in the target element is important you should be aware that PRIMER will not issue any warnings if source and target elements have different formulations or integration point distributions. 
 
However, from PRIMER V20 onwards, the orientation of shells is taken into consideration when mapping stress and strain data from source to target as follows: If the angle between the normal vectors of matched shells is above 90° (meaning the orientation between the source and target shell is very different), then the sign of the parametric position (field 't') for each integration point in the \*INITIAL\_STRESS\_SHELL and \*INITIAL\_STRAIN\_SHELL cards is inverted before the data is mapped to target.
5. Elements in the target model that are not matched are not changed in any way: they will keep their original thickness and any initial stress and/or strain definitions they may have.

If the "Reflect in Y = 0" option is used then the following modifications to the process above are made:

* Before step (1) above all nodal coordinates in the Source model have their signs reversed, and all initial stress and strain off-diagonal tensor terms with a Y in them (stresses τ, τ, τ, τand the strains ε etc) also have their signs reversed.
* The mapping process in steps (1) to (4) then proceeds as normal.
* Finally the Y coordinates and tensor terms in the source model are restored to their original values.

Note that this means that reflection about the Y axis explicitly means the **Global** Y axis at Y = 0. If you need to reflect source model results about some other local axis it will be necessary to Orient the model first so that the reflection plane becomes parallel to global Y, and is located at Y = 0.

[Previous](connections-between-includes.md)  |  [Next](target-marker.md)