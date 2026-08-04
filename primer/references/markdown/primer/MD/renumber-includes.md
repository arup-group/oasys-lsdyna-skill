###  RENUMBER INCLUDES

* Select a model
* Press Renumber Includes to get to the renumbering panel

![Include Renumbering Table](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_7_6_3.bmp)

New ranges can be specified for the master file, or for one or more include files using the appropriate text boxes. Two different sets of label ranges may be specified:

* Ranges specified under the no/el/nset/cwld/hswa column apply to Nodes, Elements, Node Sets, Constrained Nodal Rigid Bodies, Constrained Welds, and to Hex Spotweld Assemblies
* Ranges specified under the General column apply to all other entity types

The same set of label ranges may be applied to both categories by clicking the Copy no/el/nset/nrb/cwld/hswa ranges to general button.

Both sets of label ranges can be auto-generated for these files using the appropriate Auto button. An Auto All button is also available.

Upon selecting the Apply button, PRIMER evaluates the specified ranges to check whether renumbering would be necessary. If a given type has labels outside the specified range, PRIMER attempts to renumber those labels. PRIMER computes the number of labels of a particular type that exist outside the user-specified range. This is then compared with the number of unused labels available in the range (including the range labels). Users are warned if the specified range is not large enough to accomodate all labels. In that case, PRIMER renumbers as many labels as it can within the specified range. It then renumbers the remaining labels starting from the highest ID for that particular type. A warning is also issued if user-specified ranges for two or more files overlap. Nodes, elements, node sets, and constrained nodal rigid bodies are renumbered, as are general types that always carry a label and any entities specified in the Detailed entity ranges panel (see below). General types that support an optional ID are only renumbered if they carry an explicit label.

Additional information about overlapping ranges and about out-of-range items can be obtained using popups attached to two sets of status buttons ( Range unique? and In range? ). The popup on In range? can also be used to renumber individual include files into range. There is also a provision to copy node/element/nset/nrbc ranges into general type ranges using the Copy ranges button.

The list of include files can be sorted using a popup that is available at the top of the window. The Sort options are:

* Sort by include ID
* Sort by alphabetical order
* Sort by general range
* Sort by no/el/nset/nrb/cwld/hswa range

For master and include files, visualisation popups for each file, with the options Blank , Unblank and Only , are also available.

The Read csv button can be used to import user-defined ranges in the form of a .csv file. Likewise, current ranges can be exported to a .csv file using the Write csv button.

The Range unique button permits specification of generic renumbering options.

The Post-renumber label declash option allows the declash of certain entity types. See [Label declash option](declash-labels.md#declash_option) for more information.

More control over the label ranges for specific entity types is available via the Detailed button. This button is coloured as follows:

* grey if no label ranges for specific entity types have been specified for that include/master file;
* green if label ranges have been specified for specific entity types and there are no entities out of that range for that include/master file;
* red if label ranges have been specified for specific entity types and there are entities out of that range for that include/master file.

Clicking the Detailed button opens the Detailed entity ranges panel for the corresponding include file (or master file):

![Detailed Renumbering Table](../Storage/primer-22-1/primer_links/sect_3/images/detailed_renumber_panel.gif)

Label ranges for specific entity types can be specified by clicking the entity name to enable entry of start and end labels. As for the general renumbering panel, the popup on In range? can also be used to renumber entities in the selected include file into range. On clicking Apply conflicts between any defined entity ranges and existing 'nodes/elements/node sets/constrained nodal rigid bodies' label ranges and 'general' label ranges are detected. If there are conflicts an option is given to either adjust the 'nodes/elements/node sets/constrained nodal rigid bodies' and 'general' ranges or modify the detailed entity ranges.

This detailed renumbering of entities per include file is also available via the include tree, see [Include Files](include-files.md#313Includefiles).

####  Detailed renumbering of rigid patches

It is now possible to renumber rigid patches. A rigid patch is defined as a rigid part with is smaller than some reference length. PRIMER at the moment classifies rigid patches according to the diagonal of the part which is smaller than some reference length. This length can be set in Options -&gt; Program Options -&gt; Renumber -&gt; Reference size for small rigid patch.

Thus, it is clear that rigid patches are a subset of parts. Thus, when the rigid patch option is active, the detailed entity panel makes sure that the entities that can be renumbered through the PART tab, excludes any entities that are classified as rigid patches. PRIMER reverts to normal functioning (all parts can be renumbered through the PART tab) when the RIGID\_PATCH option is inactive.

[Previous](condense-mats.md)  |  [Next](mat24-lcsslcsr.md)