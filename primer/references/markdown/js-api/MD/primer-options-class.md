# Options class

The Options class enables you to access several options in PRIMER. [More...](primer-options-class.md#Options_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Options class properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| auto\_confirm | logical | If true then PRIMER will automatically confirm (i.e. press the OK button) on (most) message boxes that are mapped. If false (default) then the message boxes will be shown and wait for the user to press a button. This option may be useful to help automate an operation where PRIMER would normally show a message box and wait for the user to press a button. |
| browse\_missing\_include\_file | logical | If true (default) then PRIMER will popup a "BROWSE MISSING INCLUDE FILE" panel while reading the model. If false then it will throw an 'missing include file error' and continue reading the model. |
| copy\_target\_include | integer | This option sets the target include files for copied keywords. If it is set to Include.COPY\_CURRENT (default) then copied keywords will go into the current layer. If it is set to Include.COPY\_SOURCE, copied keywords will go into the include of the original element. An existing include file number can also be used if the copied keywords should go into a certain include. |
| dyna\_version | string | The Ansys LS-DYNA version used to write keyword files. Can be "971R5", "971R4", "971R3", "970v6763" etc (use Utils.GetLSDYNAVersions() to get a full list, or see the version popup in Model-&gt;Write '&gt;&gt;&gt; Ansys LS-DYNA output options'). See also [Model.Write](primer-model-class.md#Model::Write) and [Include.Write](primer-include-class.md#Include::Write) |
| edit\_keep\_on\_top | logical | If true edit panels created from the Edit() or Create() methods will be kept on top of other windows. If false (default) then they can be lowered. |
| exception\_messages | logical | If true (default) error messages will be printed to the dialogue box/stdout when an exception occurs in the API. If false they will not be printed. This option may be useful if you are using try/catch to manage exceptions and you do not want any error messages to be printed. |
| keyout\_binary | logical | If true then the output file will be written out in binary. If false (default) then an ascii file will be written. |
| keyout\_compress\_format | constant | This option can be used to specify the mode of compression. Can be [Model.INDIVIDUAL_GZIP](primer-model-class.md#Model.INDIVIDUAL_GZIP), [Model.INDIVIDUAL_ZIP](primer-model-class.md#Model.INDIVIDUAL_ZIP) or [Model.PACKAGED_ZIP](primer-model-class.md#Model.PACKAGED_ZIP) |
| keyout\_compress\_level | integer | Compression level for .gz and .zip files. Must be in the range 1 to 9 with 1 being the least compression (fastest speed) to 9 being the greatest compression (slowest speed) |
| keyout\_compress\_switch | constant | Switch to set the compression during keyout. Can be [Model.COMPRESS_KEEP](primer-model-class.md#Model.COMPRESS_KEEP) (default), [Model.COMPRESS_OFF](primer-model-class.md#Model.COMPRESS_OFF) or [Model.COMPRESS_ON](primer-model-class.md#Model.COMPRESS_ON) |
| keyout\_i10 | logical | If true then i10 format will be used to write the file. If false (default) then the normal Ansys LS-DYNA format will be used. |
| keyout\_large | logical | If true then large format will be used to write the file. If false (default) then the normal Ansys LS-DYNA format will be used. Note that large format is only available from version R7.1 and above. |
| keyout\_method | constant | The method used to write include files. Can be [Include.MASTER_ONLY](primer-include-class.md#Include.MASTER_ONLY), [Include.MERGE](primer-include-class.md#Include.MERGE), [Include.SELECT](primer-include-class.md#Include.SELECT), [Include.NOT_WRITTEN](primer-include-class.md#Include.NOT_WRITTEN), [Include.SUBDIR](primer-include-class.md#Include.SUBDIR) (default) or [Include.SAME_DIR](primer-include-class.md#Include.SAME_DIR) |
| keyout\_parameter\_values | logical | This option can be used to specify how parameters are written. If true then the underlying values of any parameters will be written when they are used in data fields rather than '&name'. If false (default) then '&name' will be written. |
| keyout\_path\_type | constant | The method used to write include paths. Can be [Include.ABSOLUTE](primer-include-class.md#Include.ABSOLUTE) (default) or [Include.RELATIVE](primer-include-class.md#Include.RELATIVE) |
| keyout\_separator | constant | The directory separator used when writing include files. Can be [Include.NATIVE](primer-include-class.md#Include.NATIVE) (default), [Include.UNIX](primer-include-class.md#Include.UNIX) or [Include.WINDOWS](primer-include-class.md#Include.WINDOWS) |
| merge\_set\_collect | logical | If true then when merging models PRIMER will merge \*SET\_COLLECT cards which have the same label. If false (default) then they will be renumbered. This is also used with [Model.ImportInclude](primer-model-class.md#Model::ImportInclude). The default for this can be set using the primer\*merge\_set\_collect preference. |
| model\_tabs\_active | logical | If true (default) then PRIMER will show model tabs in the object selection menu. If false then PRIMER will hide model tabs in object selection menu. |
| node\_replace\_asrg | logical | If true nodes in \*AIRBAG\_SHELL\_REFERENCE\_GEOMETRY can be replaced by node merge/replace. If false they will not be considered. |
| pick\_window\_position | constant or Window | Position that the pick window will be shown on the screen. It can be any combination (bitwise OR) of [Window.LEFT](primer-window-class.md#Window.LEFT), [Window.CENTRE](primer-window-class.md#Window.CENTRE), [Window.RIGHT](primer-window-class.md#Window.RIGHT), [Window.TOP](primer-window-class.md#Window.TOP), [Window.MIDDLE](primer-window-class.md#Window.MIDDLE) and [Window.BOTTOM](primer-window-class.md#Window.BOTTOM) or a Window object. If a window obect is used the pick window will be shown in the middle of that window. The default is Window.RIGHT|Window.TOP. |
| property\_parameter\_names | logical | If true object properties which are parameters will be returned as parameter names. If false object properties which are parameters will be returned as parameter values. |
| reset\_cwd | logical | If true then the current working directory will not be changed after selecting a file. If false (default) then the current working directory will be changed after selecting a file. This option only applies to Windows machines. |

### Properties for connections

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| connection\_angle\_tol | real | The angle tolerance used for spotwelds in the connections algorithm |
| connection\_edge\_dist | real | The edge distance used in the connections algorithm |
| connection\_file | string | The connection file to read/write |
| connection\_max\_thickness | real | The maximum thickness used in the connections algorithm |
| connection\_model | integer | The model number selected to make connections in |
| connection\_part | integer | The part ID selected for connections |
| connection\_write\_flag (read only) | integer | Flag that will be set on selected connections when writing. This can be used in the user JavaScript to write connections to find which are selected. |
| solid\_spotweld\_diameter | real | The default diameter of solid spotwelds. |
| spotweld\_element\_type | integer | The default type of spotweld to make. can be: [Conx.SPOTWELD_BEAM](primer-conx-class.md#Conx.SPOTWELD_BEAM), [Conx.SPOTWELD_HEXA1](primer-conx-class.md#Conx.SPOTWELD_HEXA1), [Conx.SPOTWELD_HEXA4](primer-conx-class.md#Conx.SPOTWELD_HEXA4), [Conx.SPOTWELD_HEXA8](primer-conx-class.md#Conx.SPOTWELD_HEXA8), [Conx.SPOTWELD_HEXA12](primer-conx-class.md#Conx.SPOTWELD_HEXA12) or [Conx.SPOTWELD_HEXA16](primer-conx-class.md#Conx.SPOTWELD_HEXA16) |

### Properties for graphics

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| airbag\_colour | integer | Airbag symbol colour |
| background\_colour | integer | Colour of the background |
| contacts\_colour | integer | Contact surface colour |
| contour\_text\_pt\_size | integer | Contour bar text size (in pts) |
| contour\_text\_size | integer | This property is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contour bar text size [deprecated] |
| date\_size | integer | This property is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Size of date (clock) display [deprecated] |
| edge\_angle | real | Feature edge critical angle |
| edges\_ign\_pt | integer | Option for choosing how to draw free edges (can be set to TRUE or FALSE) |
| extra\_nodes\_colour | integer | Constrained extra nodes colour |
| feature\_line | integer | Switch ON/OFF feature line (can be set to TRUE or FALSE) |
| for\_mom\_colour | integer | Nodal force/moment colour |
| graticule\_text\_size | integer | Graticule text size |
| label\_colour | integer | Colour of the label |
| label\_pt\_size | integer | Label size (in pts) |
| label\_size | integer | This property is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Label size [deprecated] |
| node\_colour | integer | Nodes colour |
| nrb\_colour | integer | Nodal rigid body colour |
| overlay\_colour | integer | Colour of the overlay |
| overlay\_edges | integer | Option for setting the overlay edges value (can be set to 0,1 or 2) |
| rigid\_bodies\_colour | integer | Constrained rigid body colour |
| rot\_vels\_colour | integer | Rotational velocity colour |
| sketch\_colour | integer | Colour of the sketch |
| spotweldbeam\_colour\_from\_panels | integer | Spotweld beam/solid colour |
| spr\_colour\_from\_node\_sets | integer | Constrained SPR/SPR2/SPR3 colour |
| text\_colour | integer | Colour of the text |
| timehist\_blks\_colour | integer | Time history block colour |
| title\_date\_pt\_size | integer | Size of title & date (clock) display (in pts) |
| tracer\_partl\_colour | integer | Tracer particle colour |
| trans\_vels\_colour | integer | Translational velocity colour |
| x\_sections\_colour | integer | Cross-section colour |

### Properties for mass properties calculation

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| mass\_properties\_centre\_x | real | X-coordinate of user defined centre. |
| mass\_properties\_centre\_y | real | Y-coordinate of user defined centre. |
| mass\_properties\_centre\_z | real | Z-coordinate of user defined centre. |
| mass\_properties\_coordinate\_system\_type | integer | Coordinate system selection: [Model.GLOBAL_AXES](primer-model-class.md#Model.GLOBAL_AXES), [Model.LOCAL_AXES](primer-model-class.md#Model.LOCAL_AXES), [Model.PRINCIPAL_AXES](primer-model-class.md#Model.PRINCIPAL_AXES). |
| mass\_properties\_include\_attached\_mass\_deformable\_elems | logical | Option to include lumped mass attached to the nodes of deformable elements. Default is FALSE. |
| mass\_properties\_include\_attached\_mass\_rigid\_elems | logical | Option to include lumped mass attached to the nodes of rigid elements. Default is FALSE. |
| mass\_properties\_include\_timestep\_mass | logical | Option to switch on/off inclusion of timestep addded mass. Default is FALSE. |
| mass\_properties\_inertia\_center | integer | Option to set the centre used in inertia properties calculation. By default Centre at CofG is used.
Available options are: [Model.CENTRE_AT_COFG](primer-model-class.md#Model.CENTRE_AT_COFG), [Model.USER_DEFINED_CENTRE](primer-model-class.md#Model.USER_DEFINED_CENTRE). |
| mass\_properties\_local\_axes | integer | CSYS ID when using local axes. |
| mass\_properties\_rigid\_part\_constrained\_parts | logical | Option to switch on/off mass of \*CONSTRAINED\_RIGID\_BODIES associated with a rigid part. Default is FALSE. |
| mass\_properties\_rigid\_part\_extra\_nodes | logical | Option to switch on/off mass of \*CONSTRAINED\_EXTRA\_NODES associated with a rigid part. Default is FALSE. |

### Properties for nastran

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| convert\_rbe2\_cnrb | logical | Convert all RBE2s to \*CONSTRAINED\_NODAL\_RIGID\_BODY |
| merge\_rbe\_nodes | logical | Merge duplicate RBE dependent nodes |
| retain\_mid\_nodes | logical | Retain mid-side nodes for higher order elements |

### Properties for ssh

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ssh\_buffer\_size | integer | The size of the buffer used (in kiloBytes) when transferring data to/from the remote machine in the [Ssh](primer-ssh-class.md) class. Depending on your network and the size of the files you are transferring, changing this value may make file transfers quicker. The default value is 64(kB) but any value in the range 1(kB) to 1024(kB) is allowed. |

### Properties for widgets

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| max\_widgets | integer | The maximum number of [Widgets](primer-widget-class.md) that can be made for one [Window](primer-window-class.md). The default value is 1000 |
| max\_window\_lines | integer | The maximum number of lines that can be made for a [Window.Error()](primer-window-class.md#Window::Error), [Window.Information()](primer-window-class.md#Window::Information), [Window.Message()](primer-window-class.md#Window::Message), [Window.Question()](primer-window-class.md#Window::Question) or [Window.Warning()](primer-window-class.md#Window::Warning) window. The default value is 25 |

| Detailed Description<br>The Options class is used to get/set options that PRIMER uses for certain functions.<br>The options are available as **class** properties. See the documentation for more details.<br>An example: Options.mass\_properties\_include\_attached\_mass\_deformable\_elems=true |
| --- |