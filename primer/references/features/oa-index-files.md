###  oa_index Files

An oa\_index file contains information on how a database is formatted. One index file called 'oa\_index' is needed for each database entry in the 'database' file and it must be present in the directory specified for each database.

The oa\_index file then describes this database and gives the filenames of all the entries in this database. For example the LCUR\* database 'Seismic loadcurve database' in the above database file points to the directory /disk/database/loadcurve/seismic. An oa\_index file must be present in this directory to describe how the database 'Seismic loadcurve database' is formatted and how many entries there are. This is summarised in figure A9.1.

![](../Storage/primer-22-1/primer_links/appen_9/fig_a9.gif)

Any line in the file which begins with a $ (dollar) is treated as a comment. The first uncommented line in an oa\_index file **MUST** contain how many fields there are for each database. The next lines in the file then give the headings for each field.

There are some limitations on the fields in an oa\_index file.

1. There is a maximum limit of 20 fields.
 **** 2. . ( *The filename given is automatically appended to the full path of the directory the index file is located in.)*
3. Each entry in the oa\_index file is limited to 40 characters in length

An example of a oa\_index file is given below.

```
$ Example oa_index file
$
$ NUMBER OF COLUMNS IN DATABASE
$
   3
$
$=====================================================================
$ THE COLUMN NAMES *** THE FIRST COLUMN MUST BE THE FILENAME ***
Filename
Units
Curve Description
$=====================================================================
$
$ THE DATABASE ENTRIES
$
kobe_x-accel.cur
m/s2
X Acceleration - Kobe
$
kobe_y-accel.cur
m/s2
Y Acceleration - Kobe
$
kobe_z-accel.cur
m/s2
Z Acceleration - Kobe
```

```
​In this example above there are 3 fields called:
```

* filename
* units
* curve description

[Previous](oa-database-files.md)  |  [Next](matl-material-databases.md)