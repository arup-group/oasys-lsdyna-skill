##  

### DATABASE: Defining Database Options

## 

* [Selecting the *DATABASE sub-keyword](database-defining-database-options.md#ThemainDATABASEmenu)
* [Visualisation](database-defining-database-options.md#VisualisationofDATABASEitems)

 The \* **DATABASE** keyword in Ansys LS-DYNA is used to control what is written out to the BINARY and ASCII results files. 
In addition to controlling what data is written out the \*DATABASE cards also define how often the data is written out during the analysis and the format that is used to write the binary data files.

| The main **DATABASE** pop-up menuallows any of the sub-categories to be selected. After a category has been selected a separate menu will be displayed allowing items to be created, modified and deleted. <br>The links below take you to the relevant sub-keyword sections:<br> <br> * [**DATABASE\_ASCII\_xxx**](database-defining-database-options.md#DATABASEASCIIxxx)<br> * [**DATABASE\_BINARY\_** xxx](database-defining-database-options.md#DATABASEBINARYxxx)<br> * [**DATABASE\_CROSS\_SECTION\_xxx**](database-defining-database-options.md#DATABASECROSSSECTIONxxx)<br> * [**DATABASE\_EXTENT\_xxx**](database-defining-database-options.md#DATABASEEXTENTxxx)<br> * [**DATABASE\_FATIGUE\_STRESS\_CYCLE**](database-defining-database-options.md#DATABASEFATIGUESTRESSCYCLE)<br> * [**DATABASE\_FORMAT**](database-defining-database-options.md#DATABASEFORMAT)<br> * [**DATABASE\_FSI**](database-defining-database-options.md#DATABASEFSI)<br> * [**DATABASE\_FSI\_SENSOR**](database-defining-database-options.md#DATABASEFSISENSOR)<br> * [**DATABASE\_HISTORY\_xxx**](database-defining-database-options.md#DATABASEHISTORYxxx)(this describes all sub-options).<br> * [**DATABASE\_NODAL\_FORCE\_GROUP**](database-defining-database-options.md#DATABASENODALFORCEGROUP)<br> * [**DATABASE\_SPRING\_FORWARD**](database-defining-database-options.md#DATABASESPRINGFORWARD)<br> * [**DATABASE\_SUPERPLASTIC\_FORMING**](database-defining-database-options.md#DATABASESUPERPLASTICFORMING)<br> * [**DATABASE\_TRACER**](database-defining-database-options.md#DATABASETRACER) | ![Database top-level button](../Storage/primer-22-1/database-defining-database-options/databs.png)<br> <br>![Database popup buttons](../Storage/primer-22-1/database-defining-database-options/database_options.png) |
| --- | --- |
| If multiple models are open the main database panel will open and you will be asked to select a model. If only 1 model is open this stage will be automatically skipped and the selected sub-option window opened.<br> <br>In addition the functions:<br> <br><br>| LIST | Generates a summary of all the \* DATABASE cards in the model. |<br>| --- | --- |<br>| CHECK | Runs the standard check function on all \* DATABASE definitions. | | ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_1a.gif) |

####  Common *DATABASE Options

Because some Keywords are "one-off" (e.g. \_BINARY ), some are "open-ended" (e.g. \_HISTORY\_xxx ) and some reference normal "list" types with labels (eg \_CROSS\_SECTION ) there is no standard editing panel for them.

| However each of the sub-category menus contains a standard set of buttons:. | ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_2.gif) |
| --- | --- |
| | ABORT\_EDIT | Returns to the main \* DATABASE menu and discards any changes that have been made since the menu was invoked. |<br>| --- | --- |<br>| APPLY\_EDIT | Returns to the main \* DATABASE menu and keeps any modifications that have been made or any items that have been created. If in some of the sub-menus items have been marked for deletion this option will remove them from the model. |<br>| RESET\_ALL | Resets all items back to the original values/settings they had when the menu was invoked. Any new items that have been created since the menu was invoked will be deleted. |<br>| LIST | Displays a list on the screen giving details about the status and values defined for all the items in the sub-category. |<br>| HELP | Displays a help screen giving information on what the sub-category is used for and what the different input parameters for each sub-category mean. |<br>| In addition to the standard set of buttons a number of the \* DATABASE sub menus also contain the following two options. |<br>| ACTIVE / INACTIVE | Switch which can be used to include/exclude the DATABASE card in the model when it is written out. An INACTIVE card will have all parameters greyed out, whilst the ACTIVE card will allow parameters to be modified. |<br>| SET DEFAULTS | Reset all the variables within the card to the recommended Ansys LS-DYNA default values. | |

#### DATABASE_ASCII_xxx Control of "ASCII" database file output
 The **DATABASE\_ASCII** menu displays a list of all the additional ASCII database files that may be created during an Ansys LS-DYNA analysis. 
These files may now also be written in the more compact binary format.
![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_3.png)

| **Modify selected** | Values entered in these text boxes will be automatically copied to all enabled ASCII cards. ASCII cards that are subsequently switched on/enabled will take these values by default. **DT** defines the output frequency, **BIN** defines the output mode (1=ASCII, 2=BINARY, 3=BOTH), **LCUR** defines the output frequency via a load curve ID and **IOOPT** defines the behaviour of the output frequency load curve. |
| --- | --- |
| **All on/off** | Toggles all cards on and off. Default values are taken from the **Modify selected** text boxes |
| **ACTIVE / INACTIVE checkboxes** | Switch which can be used to include/exclude the \* DATABASE   card in the model when it is written out. An **UNCHECKED** card will have all parameters greyed out, whilst the **CHECKED** card will allow parameters to be modified |
| PREF/XTF | PREF makes those cards active which have been set in the oa\_pref file. XTF activates those cards that contain information written to (soon to be obsolete) xtf file. |

| DATABASE_BINARY_xxx Control of binary database file output The DATABASE\_BINARY\_ menu displays a list of all the binary result and restart files that may be created during an Ansys LS-DYNA analysis <br> ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_4.gif) |
| --- |

Output frequencies may be set for each database file, (note that some use time and some #cycles), and each may be made (in-)active. Some cards contain other fields which can also be set.

####  DATABASE_CROSS_SECTION_xxx Editing cross-sections for force extraction

The \*DATABASE\_CROSS\_SECTION   **\_PLANE**  option defines a cross section for force output by defining a plane and then summing up the forces in the elements that the plane cuts through. (During the analysis the force is only summed for those elements that were cut by the plane at the start of the analysis).

The \*DATABASE\_CROSS\_SECTION   **\_SET**  option defines a cross section for force output by defining sets of nodes and elements for which the force should be summed.

The figure below shows the \_PLANE option.

![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_create1.gif)

The figure below shows the \_SET option.

![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_create2.gif)

The Give label button allows you to explicitly define a label for the **\*DATABASE\_CROSS\_SECTION** card being created.

| ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_itype.gif)<br> <br><br><br><br> ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_create_auto_csys.gif) | The &lt; **itype** &gt; data field which is common to both the \_PLANE and the \_SET options; controls whether the local system type &lt; **id** &gt; (if defined) is a rigid body or an accelerometer or an explicitly defined coordinate system. This is necessary because the type of the &lt; **id** &gt; field has to change, and therefore cannot remain "generic" within the keyword editor.<br> <br>During the analysis, the user may want the extracted forces across the defined cross-section plane to be computed in the section plane's local coordinate system. This can be achieved quickly by means of the Auto CSYS button (not relevant in the \_SET case) which is available when parameter &lt; **itype** &gt; is set to 2: Coordinate ID . If a **\*DATABASE\_CROSS\_SECTION\_PLANE** card is created with this option switched on, a new **\*DEFINE\_COORDINATE\_SYSTEM** card is automatically created using the **L** - **M** - **N** axes of the cross-section plane as its basis vectors. Parameter &lt; **id** &gt; of the created **\*DATABASE\_CROSS\_SECTION\_PLANE** card is then automatically set to be the label of this newly created coordinate system. <br>The user can define the label of the coordinate system to be created by entering it in the text box next to the Auto CSYS button. |
| --- | --- |

| Graphical definition of single _PLANE geometry. (Not relevant in the _SET case) |
| --- |
| PRIMER allows you to quickly and easily create **\*DATABASE\_CROSS\_SECTION\_PLANE** cards in a number of ways. A particular method of plane creation can be chosen by invoking the Local system type pop-up shown below: |
| ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_xsec_create_1.gif) | <ul> <li> <p> <span class="buttontext">Origin + vectors </span>: Pick three nodes from the graphics window. They will define the origin, the unit normal vector <strong>N </strong>and the edge vector <strong>L </strong>, respectively, for the plane to be constructed. </p> </li> <li> <p> <span class="buttontext">3 nodes </span>: Pick three nodes from the graphics window. The first two nodes will define the origin and the edge vector <strong>L </strong>, respectively, for the plane to be constructed. The third lies on the <strong>L </strong>- <strong>M </strong>surface of the plane to be constructed, and hence defines it. </p> </li> <li> <p> <span class="buttontext">Constant X </span>: Pick one node from the graphics window. A cross-section plane passing through this node and normal to the global X-axis is computed immediately. The parameters &lt; <strong>lenl </strong>&gt; and &lt; <strong>lenm </strong>&gt; are computed automatically based on the dimensions of the model. </p> </li> <li> <p> <span class="buttontext">Constant Y </span>: Same as <span class="buttontext">Constant X </span>, except that the cross-section plane passes through the picked node, and is normal to the global Y-axis. </p> </li> <li> <p> <span class="buttontext">Constant Z </span>: Same as <span class="buttontext">Constant X </span>, except that the cross-section plane passes through the picked node, and is normal to the global Z-axis. </p> </li> <li> <p> <span class="buttontext">Norm. to feat. line </span>: Pick one node lying on a feature line or a free edge from the graphics window. A cross-section plane passing through this node and normal to the feature line is computed immediately. </p> </li> </ul> |

The Auto create button (not relevant in the \_SET case) automatically creates a new **\*DATABASE\_CROSS\_SECTION\_PLANE** card for every cross-section plane that is computed without the user having to explicitly click the Create XSECTION button. A cross section plane that is computed, but not created, is sketched in a suitable colour (depending on the background colour of your PRIMER's graphics window), while a cross-section plane that has been created and added to the model as a **\*DATABASE\_CROSS\_SECTION\_PLANE** card is always sketched in green.

The Drag translate and Drag rotate buttons (not relevant in the \_SET case) allow the user to drag or rotate a computed cross-section plane in the graphics window about its local axes.

If a cross-section plane cuts along a mesh boundary, the results may be unreliable, as the forces from elements on both sides of the plane may be included. The Move by half element button (not relevant in the \_SET case) attempts to remedy this problem by re-positioning the cross-section plane halfway along the edge of the element that lies on the positive side of the computed cross-section plane. If the feature line does not extend in the positive direction of the computed cross-section plane, the plane is automatically re-positioned halfway along the edge of the element that lies on the negative side of the cross-section plane. 
This button is activated only when Local system type is set to Norm. To feat. Line

![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_auto_psid.gif)

The Auto create PSID and related buttons (not relevant in the \_SET case) shown on the left can be used to automatically create a new part set in the model and associate it with the **\*DATABASE\_CROSS\_SECTION\_PLANE** card being created (by automatically setting parameter &lt; **psid** &gt; on the **\*DATABASE\_CROSS\_SECTION\_PLANE** card to be the label of the newly created part set).

Once the part set is created by selecting an appropriate method from the pop-up box and clicking the Apply button, the parts contained in the set just created can be quickly visualized by clicking the Show only PSID button.

The normal direction of the **\*DATABASE\_CROSS\_SECTION\_PLANE** can easily be changed by clicking on the Reverse Direction button.

The Auto Size Plane button (not relevant in the \_SET case) can be used to automatically size the plane so that it is centred on the cut elements and sized to just encompass them.

| Graphical definition of multiple offset _PLANE geometry. (Not relevant in the _SET case)  ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_create_offset1.gif) |
| --- |
| Once a cross-section plane is computed using one of the methods described above, it can be used as a reference plane to quickly create another plane OFFSET units away from it. The offset plane is computed along the unit normal vector of the reference plane using the method selected in Local system type .<br> <br>The buttons shown here are activated as soon as a reference plane is computed and a valid offset is specified in the OFFSET text box. Clicking the + button computes an offset plane along the positive direction of the reference plane's unit normal vector, while clicking the - button computes an offset plane along the negative direction of the reference plane's unit normal vector. The computed offset plane is then sketched using a suitable colour. The parameters of the computed plane are used to create the **\*DATABASE\_CROSS\_SECTION\_PLANE** card in the model by clicking the Create XSECTION button.<br> <br>The + or - buttons can be clicked repeatedly to compute multiple planes each at a distance of OFFSET units away from the previously computed one. <br>If option Auto create is switched on, a new **\*DATABASE\_CROSS\_SECTION\_PLANE** card is automatically added to the model every time a new offset plane is computed without the user having to explicitly click the Create XSECTION button. |

| Properties: Computing the analytical properties of the cross-section. | ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_xsec_props_1.gif) |
| --- | --- |
| In the \_PLANE case only, where a flat geometrical section is defined, the Properties button launches the [cut-section properties panel](properties-computing-cut-section-properties.md#properties)described in section 6 . 13 using the geometry of this section. This calculates and displays its elastic and plastic properties. |
| The same Properties display may also be launched from the Database Cross Section keyword editor by using the popup on a given section's row button. | ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_xsec_props_2.png) |

| Only visible  <br>The Only Visible button, when toggled on, will exclude blanked entities in cross section definitions. This option is turned ON by default. Turning this option off will allow cross sections to span blanked entities as well. | ![](../Storage/primer-22-1/primer_links/sect_5/database/fig_xsec_only_vis.bmp) |
| --- | --- |

####  

#### \*DATABASE\_CROSS\_SECTION specific annotate/display/transfer/reverse tools.

#### 

There are specific tools for DATABASE\_CROSS\_SECTION's called Annotate,  Display,  Transfer and Reverse . Annotate is available through the main DATABASE\_CROSS\_SECTION panel or an individual DATABASE\_CROSS\_SECTION edit panel. This tool annotates the cross sections with the label associated with the cross section, and if you choose to annotate a number of cross sections, they are all sketched in different colours. Display is available through the main DATABASE\_CROSS\_SECTION panel. Reverse is available through the main DATABASE\_CROSS\_SECTION panel or an individual DATABASE\_CROSS\_SECTION edit panel. Reverse is used to reverse the normal direction of selected DATABASE\_CROSS\_SECTION's. Display will show an individual cross section, and only the parts referenced by the cross section. Transfer is available through the main DATABASE\_CROSS\_SECTION panel. This is used for transfering DATABASE\_CROSS\_SECTION definitions from one model to another.

![](../Storage/primer-22-1/primer_links/sect_5/database/database_transfer.png)

There are a few options available with this tool:

**Keep set ID's** - Database cards only are copied, i.e. any references to part sets are copied but the part set and contents are not copied.

**Keep set/contents** - Database cards are copied along with any referenced part sets. The parts in the part set are not copied, but the references to the parts are.

**Define new set** - Database cards are copied, and for all database cards copied the PSID field is set to a specified part set on the target model.

| DATABASE_EXTENT_xxx  <br>The \* DATABASE\_EXTENT menu has 2 sub options<br> <br><br>| \* DATABASE\_EXTENT\_BINARY | Controls a number of optional data components that can be written out to the binary results files. |<br>| --- | --- |<br>| \* DATABASE\_EXTENT\_SSSTAT | Defines a number of PART sets (see \*SET) that are used to generate model sub system energies and contact forces. |<br><br> <br><br> <br>![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_7.gif) |
| --- |

| DATABASE_FATIGUE_STRESS_CYCLE controls the output of stress_cycle_[EID] files. <br>The \*DATABASE\_FATIGUE\_STRESS\_CYCLE menu controls the output of stress cycle vs stress range ASCII files.<br> <br>![FAT_ST_CYC panel](../Storage/primer-22-1/database-defining-database-options/fsc_panel.png) |
| --- |

| DATABASE_FORMAT Controlling binary database output format <br>The \*DATABASE\_FORMAT menu controls the format the binary results files are written in.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_8.gif) |
| --- |

####  DATABASE_FSI Output information about certain Lagrangian surfaces
 
The \*DATABASE\_FSI menu controls the output information about certain Lagrangian surfaces.
 
![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_15.gif)
 
####  DATABASE_FSI_SENSOR Output of an ASCII file called "dbsensor"
 
The \*DATABASE\_FSI\_SENSOR menu controls the output of an ASCII file called "dbsensor". The input defines the pressure sensors' locations which follow the positions of some Lagrangian segments during the simulation.
 
![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_16.gif)

####  DATABASE_HISTORY_xxx Selecting nodes and elements for "time history block" output

\* DATABASE\_HISTORY contains a number of sub-options to allow nodes, solids, beams, shells, SPH elements, thick shells, discretes and seatbelt elements to be defined for output to the time history (.thf) files.

For nodes only there is an extra suffix \_LOCAL that permits a coordinate system to be associated with each node/set which controls the frame of reference for the output for that item. While this used to be on a separate keyword editor panel in PRIMER 14, all \* DATABASE\_HISTORY definitions have now got keyword editors from PRIMER 15 onwards, and \_NODE and \_NODE\_LOCAL are now on the same editor. These editors can be opened from the main \* DATABASE pop-up.

![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_10.png)

Individual items (nodes, elements or sets depending on the option) can be added using the entry row of the keyword editor and the Create button. Items can be removed by right-clicking on the grey row number button on the keyword editor.

It is also possible to select multiple items at the same time by using the MULTIPLE option from the popup at ID and selecting them from the object menu. When clicking this, also screen picking will be active.

To remove multiple items from the keyword editor, you can right-click on Options... and then use Select... to open an object menu. Here also screen picking is a convenient option of selecting the items. To delete the selection, you should right-click on any selected row (highlighted in dark-blue) on the keyword editor and use the Delete button.

For every \* DATABASE\_HISTORY\_&lt;type&gt; you can define items by:

| Explicit **&lt;item type&gt;** | Here \_NODE . A list of explicit items is defined, in any order. |
| --- | --- |
| **SET\_&lt;item type&gt;** | Here SET\_NODE . A list of node sets is defined. |

**\_ID OPTION** : By activating the \_ID option, one may create database history items with a title.

**NOTE**: The SPH option in this context uses the following:

| HISTORY\_SPH | The "element" number of the SPH elements (which is the same as the node ids). |
| --- | --- |
| HISTORY\_SPH\_SET | The sets are in fact node sets (\*SET\_NODE) since there is no \*SET\_SPH keyword in Ansys LS-DYNA. |

The \_LOCAL suffix for \* DATABASE\_HISTORY\_NODE(\_SET) can also be selected from the generic keyword editor:

![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_10a.png)

Nodes should not appear more than once in a time-history block, however defined. The CHECK\_ALL function will detect duplicate definitions and, when invoked from model checking, autofix them by removing them if requested.

| DATABASE_NODAL_FORCE_GROUP  <br>Definition of **SET\_NODEs** that write summary force output.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_11.gif) |
| --- |

####  DATABASE_SPRING_FORWARD

Output for implicit "spring forward" calculation after a metal-forming analysis

The \* DATABASE\_SPRING\_FORWARD menu allows the nodal force components at the end of a metal stamping simulation to be output to an ASCII file for input to a subsequent spring forward calculation.

![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_12.gif)

| DATABASE_SUPERPLASTIC_FORMING  <br>Output frequency to Super-plastic forming database files.<br> <br>The \* DATABASE\_SUPERPLASTIC\_FORMING menu allows the output frequency to be specified for output to the Superplastic Forming files.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_13.gif) |
| --- |

####  DATABASE_TRACER

Specification of "tracer" particles for Eulerian analyses

The \* DATABASE\_TRACER menu allows a series of initial points to be defined for which the position, velocity and stress components can be written out to an ASCII file.

![](../Storage/primer-22-1/primer_links/sect_5/database/fig_dbase_14.gif)

####  Visualisation of *DATABASE items
 
![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_11.gif)

Those \*DATABASE\_&lt;type&gt; options which are sensibly drawable may be displayed via the ENTity Viewing panel.

The SKETCH buttons in the relevant editing panels will also draw them.

[Previous](damping-defining-damping-cards.md)  |  [Next](define-defining-define-options.md)