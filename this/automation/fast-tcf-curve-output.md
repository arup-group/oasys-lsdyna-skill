##  FAST-TCF CURVE OUTPUT

Curves can be written out to either T/HIS curve files or CSV files from within a FAST-TCF script by using either the "app", "cop", "csv" or "csv2" keyword.

| Description | keyword | second word | third word |  | notes |
| --- | --- | --- | --- | --- | --- |
| Copy into file | cop | filename | curve list | - | will overwrite any previous file |
| Append into file | app | filename | curve list | - | will append any previous file |
| CSV file TYPE 1 | csv | filename | curve list | - | will overwrite any previous csv file. CSV has the format X1,Y1,X2,Y2,X3,Y3 |
| CSV file TYPE 2 | csv2 | filename | curve list | last word = auto | will overwrite any previous csv file. CSV has the format X1,Y1,Y2,Y3 <br>x axis interval is taken from curve #1 if all curves are chosen |
| 2nd last word= x start time <br>last word = x axis interval | will overwrite any previous csv file. CSV has the format X1,Y1,Y2,Y3 <br>start time and interval are defined in the line |

The curve list for all of these commands can contain either curve tags (with or without wildcards), curve numbers (prefixed with #), curve groups or '\*' to select all curves.

| e.g. | copy | output\_file.cur | curve\_1 | &"group 1" |
| --- | --- | --- | --- | --- |
|  | (Write "curve\_1" and all the curves in curve group "group 1" to a new file "output\_file.cur") |
|  | append | output\_file.cur | curve\_1 | &"group 1" |
|  | (Append "curve\_1" and all the curves in curve group "group 1" to the file "output\_file.cur") |
|  | csv | output.csv | curve\_1\* | curve\_2\* |
|  | (Write all curves with tags that start with "curve\_1" or "curve\_2" to a CSV called "output.csv") |

**NOTE :** There is no limit to the number of curves that can be output to a file but there is a limit to the number of items that can be specified in the curve list (currently 100). If more than 100 curves are to be output to a file then a [curve group](curve-groups-1.md#curve_groups)containing all of the curves should be created and used within the curve list. Alternatively if the curves are being written to a T/HIS curve file then the first 100 curves can be output using the "cop" keyword and then additional curves can be appended to the file using the "app" keyword.

###  Specifying curves using Curve Numbers

When outputting curves to a file a range of explicit curve numbers can be specified using the syntax #start:#end . This option only applies to curve numbers because curve tags can be defined in an arbitrary order.

###  CSV files

If a CSV/CSV2 file is written out from within a FAST-TCF script then by default it will contain rows containing UNIT information for the curves if UNITS have been defined. This additional information can be turned off if it isn't required (see [Curve Unit Systems](units-1.md#curve_unit_system)).

Previous: description  |  Next: this-preferences-and-additional-commands