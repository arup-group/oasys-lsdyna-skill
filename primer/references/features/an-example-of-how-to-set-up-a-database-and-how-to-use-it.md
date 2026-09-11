###  An Example of How to Set Up a Database and How to Use It

A user 'guest' has set up:

* An **oa\_database** file in their home directory ( **$HOME** ) which is **/guest**.
* There is also a global **oa\_database** file in directory **$OASYS**.

These files are:

| **in $OASYS** |
| --- |
| 
```
$ oa_database file for PRIMER in $OASYS
$
$ Any databases which are defined in here will be available to all users
$ 
$=======================================================================
$ 
$ type directory to find oa_index file in  database name
$ ==== ==================================  ============= 
$ 
LCUR*  /disk/database/loadcurve/seismic    seismic loadcurve database
LCUR*  /disk/database/loadcurve/material   material loadcurve database
MATL*  /disk/database/material             material database 
MODEL* /disk/database/project1.dba         model build database proj 1
MODEL* /disk/database/project2.dba         model build database proj 2
```
 |

| **in $HOME** |
| --- |
| 
```
$ oa_database file for PRIMER, user 'guest' in $HOME (/guest)
$
$ Any databases defined here will only be available to the user 'guest'
$
$====================================================================
$
$ type directory to find oa_index file in database name
$ ==== ================================== =============
$
LCUR*  /guest/my_database/loadcurve       my loadcurve database
MATL*  /guest/my_database/material        my material database
MODEL* /guest/my_database/build.dba       my build database
```
 |

####  Oa_index files

In this example when creating a material in PRIMER, we will import a material stress strain curve from a database. Note that this example describes a loadcurve database, while the more common database type is the material database. The material definitions then include the curve data (\*DEFINE\_CURVE as well as \*MAT).The database we will import the curve from is 'example material loadcurve database'. This database is in the directory ' **/disk/database/loadcurve/material** '. In this directory there MUST be an **oa\_index** file which contains the database information.

The **oa\_index** file located in this directory is shown on the next page.

The database contains 8 fields per entry and there are 10 entries (4 cold reduced steels and 6 hot rolled steels). Each entry refers to a T/HIS curve file (as this is a **LCUR** database) in the directory **/disk/database/loadcurve/material**

| $ Material stress-strain curves
<br>$
<br>$==============================
<br>$ NUMBER OF COLUMNS IN DATABASE
<br>8
<br>$==============================
<br>$ THE COLUMN NAMES (FILENAME FIRST)
<br>Filename
<br>Material
<br>Grade (GB)
<br>Grade (Germany)
<br>Grade (Japan)
<br>Grade (USA ASTM)
<br>Units
<br>Description
<br>$==============================
<br>$ THE DATABASE ENTRIES
<br>$
<br>$ COLD REDUCED STEELS
<br>$ -------------------
<br>cr4\_steel.cur
<br>Steel
<br>CR4
<br>St12
<br>SPCC
<br>A366
<br>MPa
<br>Cold Reduced - Forming and Drawing
<br>$
<br>cr3\_steel.cur
<br>Steel
<br>CR3
<br>St13
<br>SPCD
<br>-
<br>MPa
<br>Cold Reduced - Forming and Drawing
<br>$
<br>cr2\_steel.cur
<br>Steel
<br>CR2
<br>-
<br>SPCE
<br>A619
<br>MPa
<br>Cold Reduced - Forming and Drawing
<br>$
<br>cr1\_steel.cur
<br>Steel
<br>CR1
<br>RRSt14
<br>SPCEN
<br>A620
<br>MPa
<br>Cold Reduced - Forming and Drawing
<br>$
<br> *[continued on next column]* | *[from previous column]* 
<br>$---------------------------
<br>$ HOT ROLLED STEELS
<br>$ -----------------
<br>hr15\_steel.cur
<br>Steel
<br>HR15
<br>-
<br>-
<br>-
<br>Mpa
<br>Hot Rolled - Forming and Drawing
<br>$ <br>hr14\_steel.cur
<br>Steel
<br>HR14
<br>-
<br>-
<br>A569
<br>Mpa
<br>Hot Rolled - Forming and Drawing
<br>$
<br>hr4\_steel.cur
<br>Steel
<br>HR4
<br>-
<br>SPHC
<br>-
<br>Mpa
<br>Hot Rolled - Forming and Drawing
<br>$
<br>hr3\_steel.cur
<br>Steel
<br>HR3
<br>StW22
<br>SPHD
<br>-
<br>Mpa
<br>Hot Rolled - Forming and Drawing
<br>$
<br>hr2\_steel.cur
<br>Steel
<br>HR2
<br>StW23
<br>-
<br>A621
<br>Mpa
<br>Hot Rolled - Forming and Drawing
<br>$
<br>hr1\_steel.cur
<br>Steel
<br>HR1
<br>StW24
<br>SPHE
<br>A622
<br>Mpa
<br>Hot Rolled - Forming and Drawing |
| --- | --- |

In the material creation window for PRIMER a material which refers to a loadcurve ( **PIECEWISE\_LINEAR\_PLASTICITY** ) is selected.

To import a loadcurve for the stress strain curve use the right mouse button to bring up the **LCSS** popup box. Select **CREATE** from the menu and this will start the Loadcurve creation box.

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_1.gif)

The loadcurve creation box allows a new curve to be created.

The **IMPORT** button on the bottom right of the window allows a curve to be read in from a file or database. Press this button.

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_2.gif)

The Import part of the loadcurve creation box allows a curve to be read from a database by pressing the **DATABASE** button.

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_3.gif)

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_4.gif)

Pressing the DATABASE button in the loadcurve creation window starts the database selection window. Each button in the window corresponds to an entry in an oa\_database file. The first two buttons are from the **oa\_database** file in $OASYS. The last button is from the oa\_database file in $HOME.

Only 3 databases are shown as these are the only ones which refer to **LCUR** databases.

Until a database is selected the APPLY button is inactive (greyed out).

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_5.gif)

When a database file is selected it is highlighted and the APPLY button becomes RED allowing the user to select that database.

A different database can be selected as required. The one which is highlighted when APPLY is pressed is the one which will be read.

In our example we select a file from 'example material loadcurve database'.

When APPLY in the database selection window is pressed, PRIMER reads the oa\_index file which is in that directory and creates a window with the entries from this file.

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_6.gif)

In this example you can see that the 10 entries which were in the oa\_index file are all present in the window, each appearing on a row. If there were more then 10 entries in the oa\_index file a scroll bar would allow you to scroll through the entries. Eight fields were defined for each entry. The first (the filename) has not appeared in the window but is stored internally. The remaining seven field headers appear above each column in yellow. If the number of fields does not fit on the window a scroll bar will be displayed.

Until a file is selected the APPLY button is greyed out.

When a database entry is selected it is highlighted and the APPLY button becomes RED allowing the user to select that entry. A different entry can be selected as required. The one which is highlighted when APPLY is pressed is the one which will be read.

Here the HR15 steel is selected.

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_7.gif)

If APPLY is pressed this will be imported into the loadcurve editor and plotted.

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_8.gif)

The curve can be modified if required in the editor.

When a label has been given to the curve the CREATE\_CURVE button will be ungreyed (made active) allowing the curve to be created.

When this is done the **LCSS** field in the material editor is updated with a new loadcurve ID referencing the imported data.

![](../Storage/primer-22-1/primer_links/sect_5/database/dbase_9.gif)

[Previous](databases-importing-data-from-pre-defined-database-files.md)  |  [Next](contact-penetration-checking.md)