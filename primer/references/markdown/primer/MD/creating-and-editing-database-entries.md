####  Creating and Editing Database Entries

When adding a new child or editing an existing entry in a database the following information can be given;

* [Category](creating-and-editing-database-entries.md#category)
* [Sub-Category](creating-and-editing-database-entries.md#subcategory)
* [Model Path](creating-and-editing-database-entries.md#modelpath)
* [Keyword file](creating-and-editing-database-entries.md#keywordfile)
* [Thumbnail](creating-and-editing-database-entries.md#thumbnaildatab)
* [Extra data files](creating-and-editing-database-entries.md#extra_data)
* [General type ids](creating-and-editing-database-entries.md#gentypid)
* [NODE,EL,NRB,NSET ids](creating-and-editing-database-entries.md#nodeelids)
* [NODE,SET,EL frozen ids](creating-and-editing-database-entries.md#frozenids)
* [Owner](creating-and-editing-database-entries.md#ownerincld)
* [Orientation data](creating-and-editing-database-entries.md#orientincld)

A category must always be specified if the entry is to exist in the Database. If the entry references a keyword file then a Sub-Category must also be present.

The combination of category and sub-category must be unique. This is how a database entry is referenced by a template, and is deliberately independent of the keyword file name. The user who is building the model is selecting the item category, not the keyword file directly. The person responsible for maintaining the database must ensure that the end user's selection gets the most up to date version of the component file.

PRIMER now allows you to store multiple keyword files for each component. The current version will determine which keyword file is actually used. See [Version Control](version-control.md#version).

![](../Storage/primer-22-1/primer_links/sect_3/images/datab_200.gif)

#####  Component type

| In addition to an Ansys LS-Dyna keyword file, the component may be described by a Nastran or Abaqus file (for which PRIMER supports a subset of keywords).<br> <br>Also an xml connection file may be loaded as a component of the build. These may be managed using the same version control as keyword files.<br> <br>On completion of the build a connection panel will be invoked to process the connection file(s). See [build with connections](connection-file-as-component-of-build.md#buildcon). | ![](../Storage/primer-22-1/primer_links/sect_3/images/component_types.gif) |
| --- | --- |

#####  Category

This option allows you to give the database entry a title by which you may identify it in the future. If no sub-category is given then the category will be displayed as the name of the entry.

#####  Sub-category

The Sub-category acts as a second name to identify your the entry. If specified it will also be displayed as the name of the entry.

#####  Model Path

This contains the path to the keyword file and is automatically generated from the full path when a file is selected from the selector box. If you type in the filename directly without a path, the file will be expected to be in the same directory as the database.

Usefully, the path may be set to Absolute or Relative using the Abs or Rel button.

#####  Keyword File

If you wish the entry to contain a keyword file, enter the name of the file here.

#####  Thumbnail

This option enables you to insert a bitmap image to act as a graphical representation of the contents of the entry. Enter the name and path of the bitmap file here. The image will be displayed alongside the name of the entry in the Database.

#####  Extra data files

Press ADD EXTRA DATA FILE to specify the name(s) of any extra data file(s) which are to be associated with this component.

These will always be read as includes immediately after the main component file has been installed. Although the files may contain any Ansys LS-Dyna keywords, they would normally be expected to contain items such as contacts, rigid body merge connection, nodal rigid bodies, etc. which connect component files together. Therefore, unlike the component files, these files are not "stand alone" and will contain references to items in component files. If a referring component is omitted, this risks leaving the extra data file with reference to a missing item (e.g. part-set of contact refers to missing part). To handle this, PRIMER on completion of build will find all latent items and offer to delete them using FIX LATENT function. On completion of deletion, you will be given the option to move the contents of the modified extra data file up into the master file and suppress the keyout of the include file itself. If you take this option, you will not need to save the modified include.

#####  General type ids

This option allows you to specify a number range into which PRIMER will renumber general items (excludes nodes, elements, nrbs, node sets).

Any items labelled outside the range specified will be renumbered to fit in the range. If the range is not set no renumbering of these items will occur.

Input the lowest boundary of the range to the first input box and the highest boundary of the range to the second input box.

If any parts, sections or materials lie outside the specified range an error will be reported. These will never be renumbered.

#####  NODE,EL,NRB,NSET ids

As nodes, elements, node sets and nodal rigid bodies often require a larger range than other items, they have their own item range.

All nodes, element, node sets and nodal rigid bodies lying outside the node/el range will be renumbered into this range.

If the range is not set no renumbering of these items will occur.

**Note on latent items:** If an item in an include file is effectively latent, e.g. a material card that is referred to but not actually in the file, it will **not be renumbered** .

#####  NODE,SET,EL frozen ids

This option allows you to specify a range of node, element, node set and element set numbers that will never be renumbered in the build process.

This can be useful if you wish to preserve your [time history items](database-defining-database-options.md#DATABASEHISTORYxxx)or if you wish to protect items (other than parts) used for connection.

#####  Owner

Enter the owner of the file here.

#####  Orienting the include files

| It is possible to orient include files during the model build process. This is achieved by generating \*INCLUDE\_TRANSFORM rather than plain \*INCLUDE. <br>The Orient create/edit feature is accessed through the Create/Edit tracked/reference Orients button on the category edit panel. | ![](../Storage/primer-22-1/primer_links/sect_3/images/tracked%20orient%20point.JPG) |
| --- | --- |
| The user creates each orient by adding a reference and a tracked point of matching name. The tracked points will always reside in the database, under the include file to which the orient is to be applied. The reference points may be stored either in the database or in the template as they apply for a particular load case. | ![](../Storage/primer-22-1/primer_links/sect_3/images/master%20orient%20point.JPG) |

After you have created/edited orients you need to save the database or template. It is recommended that you then run the CHECK ORIENT function, which will sketch the orient as well as report its status.

![](../Storage/primer-22-1/primer_links/sect_3/images/check%20orient.JPG)

In the simplest orient case you need to define a reference point and its co-ordinate (or node id) and a tracked point of the same name and its co-ordinate. The build process will detect matching reference & tracked orient points, resolve any node ids into co-ordinates and calculate the necessary transform to bring the tracked point to the reference. A\*INCLUDE\_TRANSFORM will then be applied to the include file associated with the tracked orient.

*Rotation of component model* : A reference orient point may additionally include global rotations [Rx, Ry, Rz about the reference point] which will be applied to the tracked include file.

*Moving into position* : On the tracked orient a second point (O-X) may be defined (co-ordinate or node id) which defines a "line of flight" vector. This defines the direction in which the impactor will be moved if it is *not penetrating* and against which it will move if it *is penetrating* . In the normal case where the impactor is initially positioned away from the vehicle the vector should point toward the vehicle (as shown below).

Additionally information is required so that a contact can be created and the tracked body will be either depenetrated or advanced along the "line of flight" vector until it is on the point of contact. Thus an odb barrier can be set up so that it will be optimally positioned for different bumper designs with minimum wasted cpu time before the onset of impact.

*Setting up the contact* . The orient point may reference a contact that exists in the model directly. If so, this may be located on the reference orient point or the tracked point. In the event of both being defined, the one on the reference orient will be used. Alternately, a part or part-set may be defined for both the reference and tracked orient points, these will be used directly to define a surface-surface contact. Alternately, a single part set may be defined for the tracked side only. In this case, PRIMER will split the set up to form a surface-surface contact between the impactor and the vehicle. For part/part-set method the contact is disposable and will not appear in the model.

*Definition of orient points.* These may be defined as node id, node name (if \*DATABASE\_HISTORY\_NODE\_ID) or a co-ordinate. The node method has the advantage that if the component files get moved the orient points will still be in the correct position. If the node is defined by ID it must not be renumbered. This may required the node to be included in the [frozen range](creating-and-editing-database-entries.md#frozenids) if renumbering during model build is active. If using the co-ordinate method the orient data must be updated if component files are moved.

![](../Storage/primer-22-1/primer_links/sect_3/images/orient_pic.gif)

[Previous](editing-a-model-database.md)  |  [Next](version-control.md)