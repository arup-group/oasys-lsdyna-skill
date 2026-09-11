####  PRIMER Spotweld File Format

The PRIMER spotweld file format is designed to be able to be easily read by PRIMER and people. The file should contain either [comment lines](COMMENT.html#comment)or [spotweld data lines](primer-spotweld-file-format.md#data)

#####  Comment lines

Any line that begins with a $ (dollar symbol) is treated as a comment line and skipped. This is the same as Ansys LS-DYNA.

#####  Spotweld data lines

Any line that is not a [comment line](COMMENT.html#comment) is treated as a line containing spotweld data. 
Each line contains data for one spotweld. 
Each line consists of up to 15 fields. 
Each field is 10 characters wide (like most Ansys LS-DYNA keyword data) giving a maximum line length of 150 characters.

The fields are defined as follows:

| **Field number(s)** | **Column numbers** | **Description** |
| --- | --- | --- |
| 1 | 1-10 | Field skipped. Usually contains string 'SPOTWELD' for readability |
| 2 | 11-20 | Spotweld ID number |
| 3 | 21-30 | Field skipped. Usually contains string 'POINT' for readability |
| 4 | 31-40 | Spotweld point X coordinate |
| 5 | 41-50 | Spotweld point Y coordinate |
| 6 | 51-60 | Spotweld point Z coordinate |
| 7 | 61-70 | Field skipped. Usually contains string 'PART' for readability |
| 8-15 | 71-150 | Part ID number. Up to 8 panels to weld together. |

#####  Example file


```
$ PRIMER spotweld file
$ ====================
$
$ Created on: Thu Feb 15 15:04:34 2001
$
$ from model: "ARUP CRASH MODEL - Training (workshop6)"
$
$         < weld ID>          < X coord>< Y coord>< Z coord>          < Part 1 >< Part 2 >< Part 3 >
$
SPOTWELD           1     POINT  2602.424 -692.2456   606.822     PARTS       113         5
SPOTWELD           2     POINT  2623.942-692.18854    605.34     PARTS       113         5
SPOTWELD           3     POINT  2634.647 -692.1887  604.6709     PARTS       113         5
SPOTWELD           4     POINT   3142.42 -695.2453  547.7576     PARTS         5       306
SPOTWELD           5     POINT   3142.42 -695.2453  522.7576     PARTS         5       306
SPOTWELD           6     POINT  3101.431-692.23694  483.0748     PARTS       306         5
SPOTWELD           7     POINT  3075.443-692.23694 483.39206     PARTS       306         5
SPOTWELD           8     POINT  3049.455-692.23694  483.7093     PARTS       306         5
SPOTWELD           9     POINT  3023.467-692.23694  484.0266     PARTS       306         5
SPOTWELD          10     POINT  3102.919-692.23694  587.7574     PARTS       306         5

```

[Previous](catia-spotweld-file-format.md)  |  [Next](ug-spotweld-file-format.md)