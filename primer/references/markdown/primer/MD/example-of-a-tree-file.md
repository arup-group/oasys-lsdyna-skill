###  Example of a "Tree" File

This example refers to a typical dummy. Each assembly below has been defined (in the main body of the input deck) using \*SET\_PART s.


```
$
$
*DUMMY_START
1This is a test DUMMY definiton
$
*H_POINT
       0.0        0.0        0.0
$
*UNITS
        te         mm          s
$
*ASSEMBLY
         1Neck, Thorax, Torso
         3          0           5
        21         22          23
$
$ Child #1 is the head
         2          9       20589        123
$ Child #2 is the left yoke
         9          4       10597        123
$ Child #3 is the right yoke
        10          5       14963        123
$ Child #4 is the Left upper leg
         3         16        2252        123
$ Child #5 is the Right upper    leg
         4         17        2044        123
$
$
*ASSEMBLY
         2Head
         1          0           0
        20
$
$
*ASSEMBLY
         3Upper leg left
         1          0           1
        24
$
$ Child #1 is the left knee/lower    leg
         5          2        4329        123
$
$
*ASSEMBLY
         4Upper leg right
         1          0           1
        25
$
$ Child #1 is the left knee/lower    leg
         6          1        4320        123
$
$
*ASSEMBLY
         5Lower leg left
         1          0           1
        26
$
$ Child #1 is the left ankle &    foot
         7         22         4562        123
$
$
*ASSEMBLY
         6Lower leg right
         1          0            1
        27
$
$ Child #1 is the right ankle    & foot
         8         23         5437        123
$
$
*ASSEMBLY
         7Foot left
         1          0            0
        28
$
*ASSEMBLY
         8Foot right
         1           0            0
        29
$
*ASSEMBLY
         9Yoke left
         1           0            1
        30
$
$ Child #1 is the upper left arm
        11          18        18559        123
$
$
*ASSEMBLY
         10Yoke right
         1           0             1
        31
$
$ Child #1 is the upper right    arm
        12          19         19281        123
$
$
*ASSEMBLY
         11Upper arm left
         1           0             1
        32
$
$ Child #1 is the left elbow
        13          11         19138        123
$
$
*ASSEMBLY
         12Upper arm right
         1           0             1
        33
$
$ Child #1 is the right elbow
        14          14         19860        123
$
$
*ASSEMBLY
         13Elbow left
         1           0             1
        34
$
$ Child #1 is the lower arm left
        15          10         19136         123
$
$
*ASSEMBLY
         14Elbow right
         1           0             1
        35
$
$ Child #1 is the lower arm right
        16          13         19858         123
$
$
*ASSEMBLY
         15Lower arm left
         1           0             1
        36
$
$ Child #1 is the left wrist
        17          12         19140         123
$
$
*ASSEMBLY
         16Lower arm right
         1           0             1
        37
$
$ Child #1 is the right wrist
        18          15         19862         123
$
$
*ASSEMBLY
         17Wrist left
         1           0             1
        38
$
$ Child #1 is the left hand
        19          20         18888         123
$
$
*ASSEMBLY
         18Wrist right
         1           0             1
        39
$
$ Child #1 is the right hand
        20          21         19610         123
$
$
*ASSEMBLY
         19Hand left
         1
        40
$
*ASSEMBLY
        20Hand right
         1
        41
$
*DUMMY_END

```
[Previous](rules-for-tree-files.md)  |  [Next](bii-mechanism-file-format.md)