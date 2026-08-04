###  oa_database Files

PRIMER looks for databases by looking for the existence of a file called 'oa\_database' in the directories $ (the directory where Oasys LS-DYNA Environment is installed) and $HOME (the home directory of the user. In the instance where an 'oa\_database' file is found in both these directories then the entries from both files are included.

The databases in the file from the installation directory $ are available to every user. If the file was in $HOME then the databases would only be available to that user.

Any line in the file which begins with a $ (dollar) is treated as a comment.

Each line in a 'oa\_database' file refers to a database (file or directory) and contains 3 fields separated by a space, a comma or a tab character.:-

1. **Database type** . This indicates what type of entities are in this database. **e.g. MODEL\* LCUR\* MATL\*** . The database type must end with an asterisk (\*). Only databases which are relevant are displayed in each context e.g. material import will only offer MATL\* databases, model build will only offer MODEL\*
2. **A directory or filename for MODEL\*** . For LCUR\* and MATL\* the directory contains the database information. This directory must also contain an oa\_index file which explains how the info is to be used (see below)
3. **A name** . The database names will be used in windows when selecting a database.

An example of a 'database' file taken from an $ directory is given below containing 2 LCUR and 2 MATL databases.


```
$ database file for Primer in $OASYS
$
$ Any databases which are defined in here will be available to all users
$=======================================================================
$
$ type directory to find oa_index file in   database name
$ ==== ==================================   =============
LCUR*  /disk/database/loadcurve/seismic     Seismic loadcurve database
LCUR*  /disk/database/loadcurve/material    Material loadcurve database
MATL*  /disk/database/material/steel        Steel Database
MATL*  /disk/database/material/aluminium    Aluminimum Database
MODEL* /disk/database/proj1.dba             Model Build Proj1
```
[Previous](i-primer-database-format.md)  |  [Next](oa-index-files.md)