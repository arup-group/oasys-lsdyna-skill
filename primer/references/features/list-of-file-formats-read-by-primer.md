###  List of file formats read by PRIMER

| **Format** | **Description** | **What is read** |
| --- | --- | --- |
| **Ansys LS-DYNA** | Ansys LS-DYNA "Keyword" format | Complete input deck is supported. (No conversion required.) |
| "Long" (large) Ansys LS-DYNA format | PRIMER will read both traditional ("small") Ansys LS-DYNA keyword format, and also "long" (wide) format in which all data fields are expanded to 20 columns width. Long format permits item labels to be up to 18 characters long, and support for this is described in [Long keyword format and large labels.](long-keyword-format-and-large-labels.md#wide_format) <br>Detection of large format is automatic from the file syntax and no user intervention is normally required, however long format can be forced on the [Options](options-controls-many-aspects-of-reading-ls-dyna-files.md#opts_main)****panel. This may be required if the input file syntax is deficient and the "long=y" instruction has been added to the Ansys LS-DYNA execution line. See "General Card format" under the "Getting started" section at the beginning of Volume I of the Ansys LS-DYNA keyword manual for more information about long format files.<br> <br>Versions before PRIMER 12.0 will only read traditional format, and will only process labels up to the 32 bit integer limit of ~2e9. |
| Compressed files | PRIMER will read files compressed to .gz and .zip format. Compression may be by PRIMER itself (see the section on [Output Compression](pre-out-compress-tab.md#pre_compress)) or carried out independently by the gzip and winzip utilities. |
| Binary files | PRIMER will read binary format files that it has previously written (see the section on [Binary output](write-binary-format.md#write_binary)), both in raw form (.kby) and compressed to .gz or .zip formats. |
| **NASTRAN** | NASTRAN "Bulk Data" (.bdf) format | Nodes, elements, loads, properties, materials, SPCs, + others: see [Appendix F (NASTRAN)](nastran-bulk-data-file-format.md#Nastran) |
| **IDEAS** | Master Series and IDEAS "Universal" (.unv) file format | See [Appendix F (IDEAS)](i-deas-universal-file-reader.md#ideas) for a list of supported modules. |
| **PATRAN** | MSC Patran level 2.5 "Neutral" (.neu) file format. | Nodes and elements only are read. |
| **SAP2000** | SAP 2000 input deck | Most items are read, and some interpretation takes place - see [Appendix F (SAP2000)](sap2000-file-format.md) |
| **RADIOSS** | Mecalog RADIOSS "Starter" and "engine" files, fixed format v4.1 | Most items are read, and some interpretation takes place - see [Appendix F (RADIOSS)](radioss-fixed-file-format.md) |
| **ABAQUS** | ABAQUS input deck | Nodes and some element types. Also, basic section, set and simple material data. See [Appendix F (ABAQUS)](abaqus-input-file-format.md#Abaqus) for details. |
| **IGES** | Geometry data in IGES 5.3 format | Most points, curves and surfaces. See [Appendix F (IGES)](iges-file-format.md) for details. |
| **STEP** | STEP file format | Most curves and surfaces. Note that the STEP file reader is released as a beta version in PRIMER 20.0. |
| **JT^TM^** | Siemens JT file | Only tessellation in the JT file is read for visualization. No geometry (NURBS surfaces etc) is read from the file, even if it is present.\* |
| **DesignLink** | xml format | Elements, Nodes, Matls, Sect, Set, nodal Load & SPC from DesignLink xml format |

To read a particular format:

* Select that format in the "Input file formats" area;
* Select any sub-type (here **KEYWORD** has been chosen);
* Select a "target" model id. Here the default of the next free model (#9) has been chosen, but you are free to use any model in the range 1 to 255. 
 
It is  ***strongly***  recommended that you don't read external data into an existing model since, if any clashes (in labels) are found the read operation will be aborted with both incoming data  ***and the existing model***  lost. To be safe [COPY](model-copy-copying-models-internally.md#MODELCOPY)the existing model first! However you are free to do this if you are certain that there are no clashes between existing and incoming labels, and this will effectively merge the two models. An option can be set inthe read options panel so that any model read into an existing model is placed into the current include layer. By default, the information read in will be plaved into the master layer.
* Choose an input filename. If you know it type it into the "File" text box, otherwise use the button to obtain the file selector box.

Once these steps are complete the APPLY button will be enabled, and you can press it to read the file. Assuming that it reads in successfully it will be added to the list of current models, and drawn in the graphics window in the current drawing mode.

You will be warned if any errors are found, the action taken depending upon context:

* Where the error is not fatal that keyword or section will be skipped, and input will continue.
* If the error cannot be recovered then input will terminate, and any data read so far will be destroyed. Destruction is necessary to prevent any internal inconsistencies arising from the errors corrupting the database.

Data formats which require interpretation may request further information about translation defaults. These are:

* **SAP2000** Described in [Appendix F (SAP2000)](sap2000-file-format.md)
* **RADIOSS** Described in [Appendix F (RADIOSS)](radioss-fixed-file-format.md#Radioss)

\* This work contains software that is proprietary and confidential to Siemens. © Siemens 2025.

[Previous](view-log-viewing-the-input-log.md)  |  [Next](model-write.md)