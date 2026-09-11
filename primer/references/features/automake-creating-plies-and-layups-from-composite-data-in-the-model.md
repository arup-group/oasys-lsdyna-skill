###  Automake: Creating Plies and Layups from _COMPOSITE Data in the Model

![](../Storage/primer-22-1/primer_links/sect_6/composite/composite_19.png)

Sometimes a model wll contain one or more of the following keywords:

| \*PART\_COMPOSITE | Part defines multiple layers, with thickness, material and beta angle at each layer |
| --- | --- |
| \*PART\_COMPOSITE\_LONG | As \*PART\_COMPOSITE , but also including a PLY number at each layer |
| \*ELEMENT\_SHELL\_COMPOSITE | Shell element defines multiple layers, with thickness, material and beta angle at each layer |
| \*ELEMENT\_SHELL\_COMPOSITE\_LONG | As \*ELEMENT\_SHELL\_COMPOSITE , but also including a PLY number at each layer |
| \*ELEMENT\_TSHELL\_COMPOSITE | Thick shell element defines multiple layers, with thickness, material and beta angle at each layer |

However the model may not contain \*COMPOSITE keywords after \*END meaning that plies and layups will not be generated.

Automake attempts to solve this problem by generating plies and layups automatically from the cards above. This can be particularly useful if plies and layups are written to the [ZTF file](writing-ztf-and-group-files.md#ztf) since they become available in Modian D3PLOT. This means that the beta angle of each layer of each shell is known during post-processing making it possible to view results in local material axes.

Automake works as follows:

1. Any \*ELEMENT\_xxx\_COMPOSITE\_LONG keywords which define explicit ply numbers will have resulted in latent ply definitions being created inside PRIMER . 
 
These plies are populated with the material and thickness of the first element that references, and converted from latent to installed so that they become "visible" in PRIMER . 
A layup is created for each part (pid field on the element card) that these elements reference, and the plies are added to these layups.
2. Any \*PART\_COMPOSITE\_LONG definitions which define explicit ply numbers will have resulted in latent ply definitions being created. 
 
These plies are populated with the material and thickness of the relevant layer on the part, and any elements referring to the part which are not themselves \_COMPOSITE are added to the plies. 
A layup is created for each such part, and the plies referred to in the part are added to this layup.
3. \*PART\_COMPOSITE definitions are processed next. 
 
This (non \_LONG) card format does not permit ply ids to be specified, so a new ply will be created for each layer of the part using that layer's material id and thickness. 
All elements that reference the part will be added unless the element is itself \_COMPOSITE 
A layup is created for each part, and all plies in the part are added to that layup.
4. \*ELEMENT\_xxx\_COMPOSITE definitions are processed last. 
 
These present a problem since it is difficult to identify logical plies from disparate element definitions. Therefore the following logic is adopted: 
 
- A ply is created for each [Part | Integration point | Material id | thickness] combination encountered on an element. 
- A layup is created for each referenced material if it doesn't already exist. 
- A ply is added to the layup of any material referred to by an element in the ply. 
 
So for example two elements which are in the same part, and which have the same material and thickness at the same integration point will be placed in the same ply.

This process tends to result in more plies being generated than there are"true" continuous layers of material in the model, and there can be some illogical overlap between plies in layups. It is no substitute for having proper ply definitions supplied via a layup file or manual editing, but it is better than nothing.

####  Automake and ZTF file creation

The main purpose of Automake is to make it possible to post-process composite shell data in material local axes. Users of Oasys D3PLOT who read a ZTF file containing ply information will be able to do this, so prior to writing a ZTF file a check is made for composite parts and elements that have not been put into plies. If any are found you are given the option of running Automake prior to generating the ZTF file so that the data gets embedded (this option can be pre-selected using the preference 'ztf\_output\_composite\_action'). See [Writing ZTF and Group Files](writing-ztf-and-group-files.md#ztf) for more information about writing ZTF files.

####  Automake and saving Layup and Ply data in the keyword output file

Using Automake will result in Plies and Layups being created and installed in your model. If you write the model out to a keyword file this information will be remembered via special PRIMER -specific \*COMPOSITE cards after \*END, and recreated when the model is reread.

Since the plies and layups have been synthesised and will almost certainly not be a true representation of the physical construction of your model it is recommended that you don't save them. Either don't write out a keyword file, or delete the plies and layups prior to doing so.

[Previous](read-a-layup-file.md)  |  [Next](orient-an-easy-way-to-set-composite-beta-angles-across-plys-in-a-layup.md)