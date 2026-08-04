###  File Format

The bill of materials reader is designed to be able to read files produced by hand, spreadsheet programs and other programs. The files produced from spreadsheets are commonly known as CSV or comma separated files.

The format of the file has to follow the following rules:

* Blank lines in the file are skipped.
* A comment line can be included anywhere in the file by starting the line with a specific character (which you can define when reading the file into PRIMER ).
* Lines that contain specific strings or characters can be skipped
* The Bill of materials file should contain one line for each part entry you want to check/modify.
* Each line should contain 'fields' that are separated with a specific character (which you can define when reading the file into PRIMER ).
* The fields must be in the same order for every line.
* One of the fields MUST be the part ID.
* For auto-recognition of columns to work, columns must be given specific names.

####  Example

An example Bill of materials file is shown below.


```
$ Bill of Materials file:Example Bill of Materials 
$ Date produced: April 2001  
$ Produced by: Miles Thornton 
Vehicle X,Bill of Materials version,8.6,Date,20/02/01
  
Part No,Title,Part ID,Material,Supplier,Gauge,Part mass 
AA51201,sill_swan_neck,5,HP37  ,Company X,2.2,9.64E-03 
AA51202,front_support_mem diagonal,101,HP37 ,Company X,2.2,4.74E-03  
AA51203,Bumper_ft,104,HP37,Company X,1,3.71E-03 
AA51204,A_pillar_lower_support_a,113,CR4  treatment C,Company Y,1.2,2.28E-03 
AA51205,cowl.1,200,CR4 treatment C,Company  Y,1.2,6.40E-03 
AA51206,A_pillar_lower_support_b,202,CR4 treatment C,Company Y,2,6.60E-03  
AA51207,dash_x_member,203,CR4 plt3 grade,Company Y,1.2,2.25E-03 
AA51208,dash_panel,204,CR4  plt3 grade,Company Y,1.2,4.48E-03 
AA51209,front_floor_panel,304,CR4 plt3 grade,Company  Y,1.2,7.17E-03 
AA51210,Tunnel_wall_FR,305,CR4 plt3 grade,Company Y,1.2,5.76E-03  
```


We want to skip the first 3 lines and so have started them with a $. 
The fourth line does not begin with a '$' but we can force the reader to skip the line if needed. 
The fifth line is blank and so will skipped. 
The next line describes the fields. This is not necessary but helps to see which fields are which. If you want to do automatic recognition of columns then a line that contains the column names is essential. This can also be skipped. 
The following lines contain the information. Each line contains the information for one part. The fields are separated by a ',' (comma). The following sections show this file being read and used by PRIMER .

####  Automatic recognition of columns in Bill of materials file

If Auto-detect columns is switched on then when PRIMER reads a bill of materials file it looks for specific column headers on any of the lines which are not blank or comments. The first 50 lines in a bill of materials file are shown as a preview when reading the file. PRIMER will look at each of these lines in turn and look to see how many of the column names it can match to the standard column names. The line that matches the most headers is the one that will be used for the column titles. If you do not want PRIMER to recognise the columns this can be turned off

| Rules for matching column titles <ol> <li>Each &#39;field&#39; is read from the line in turn. </li> <li>Any spaces are removed from the field. </li> <li>The &#39;field&#39; text is converted to lower case. </li> <li>The text is compared to the headers below. If an exact match is found then that &#39;field&#39; type is set to the type that matched </li> </ol> |
| --- |

#####  Standard Headers

| **Field type** | **Allowed headers** | **Meaning** | **Field contains** |
| --- | --- | --- | --- |
| Part ID | pid, part, number, partid | Model Part ID (compulsory) | integer |
| Part title | title, parttitle, description | Part title | characters |
| Material title | material, mat, matname, materialname | Material name | characters |
| Material ID | materialid, matid, matnumber, materialnumber, mid | Material ID (for referencing standard database of materials) | integer |
| Cad part number/description | cad, cadpart, cadpartno, partno | Cad part number (not currently used by PRIMER ) | characters |
| Gauge | gauge, thickness, thk | Thickness of part (on \*SECTION\_SHELL card) | real |
| Hourglass ID | hourglassid,hgid,hgnumber,hourglassnumber | Hourglass ID | integer |
| Hourglass type | hourglasstype, hgtype | Hourglass type (on \*HOURGLASS card) | integer |
| Hourglass coefficient | hourglasscoeff, hgcoeff | Hourglass coefficient (on \*HOURGLASS card) | real |
| Section ID | sectionid,secid,secnumber,sectionnumber,sid | Section ID | integer |
| Section title | section,sec,secname,sectionname,sectiontitle | Section name | characters |
| Nip | nip,integrationpoints,ipts,npoints,sectnip | Number of integration points | integer |
| Lower ID | lowerlabel, lowerid,lower,low | start id for renum of nodes/elements/masses on part | integer |
| Upper ID | higherlabel,higherid,higher,high | end id for renum of node/elements/masses on part | integer |
| Element formulation | elform, formulation, element | ELFORM on \*SECTION card | integer |
| Part Contact | ptcontact,partcontact,ptcont,partcont | The \_CONTACT option for \*PART (0 - off/ 1 - on) | integer |
| Part Cont FS | ptcontactfs,partcontactfs,ptcontfs,partcontfs | The FS field for \*PART\_CONTACT | real |
| Part Cont FD | ptcontactfd,partcontactfd,ptcontfd,partcontfd | The FD field for \*PART\_CONTACT | real |
| Part Cont DC | ptcontactdc,partcontactdc,ptcontdc,partcontdc | The DC field for \*PART\_CONTACT | real |
| Part Cont VC | ptcontactvc,partcontactvc,ptcontvc,partcontvc | The VC field for \*PART\_CONTACT | real |
| Part Cont OPTT | ptcontactoptt,partcontactoptt,ptcontoptt,partcontoptt | The OPTT field for \*PART\_CONTACT | real |
| Part Cont SFT | ptcontactsft,partcontactsft,ptcontsft,partcontsft | The SFT field for \*PART\_CONTACT | real |
| Part Cont SSF | ptcontactssf,partcontactssf,ptcontssf,partcontssf | The SSF field for \*PART\_CONTACT | real |
| Part Cont CPARM8 | ptcontactcparm8,partcontactcparm8,ptcontcparm8,partcontcparm8 | The CPARM8 field for \*PART\_CONTACT | integer |

#####  Examples

As spaces are removed and the fields are case insensitive all the following could be used for the Part ID field:

* Part ID (would match 'partid')
* P I D (would match 'pid')
* Part (would match 'part')
* PARTID (would match 'partid')
* Number (would match 'number')

The following could not be used:

* Part number (As the string would not exactly match 'number')
* ID (as ID is not a valid title)

In the example file shown above all of the columns except for Supplier and Part mass would successfully matched.

[Previous](bill-of-materials.md)  |  [Next](initial-screen.md)