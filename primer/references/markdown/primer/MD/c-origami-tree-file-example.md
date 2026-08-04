##  Appendix C: Origami "Tree" File Example

The following is an Origami "tree" file example


```
*END
$
$
$ ============
$ ORIGAMI data
$ ============
$
$
*ORIGAMI_START
         1Origami 1
         1         2
$
*AXES
         1
$
*OPTIONS
        80         2         2         2         1
         2        -1         4         5         6         3         7
 1000000.0       1.1       0.9       0.0
$
$ =============
$ List of FOLDs
$ =============
$
$ LINE 1 (Basic data)
$     FIELD 1: LABEL
$     FIELD 2: TYPE
$              =0: NULL
$              =1: THIN
$              =2: THICK
$              =3: TUCK
$              =4: SPIRAL
$              =5: SCRUNCH
$              =6: ALIGN
$     FIELD 3: UPDOWN
$              =0: UP
$              =1: DOWN
$     FIELD 4: RIGHTLEFT
$              =0: RIGHT
$              =1: LEFT
$     FIELD 5: REFERENCE COORDINATE    SET FLAG
$     FIELD 6: LAYERS FOR TUCK FOLD
$     FIELD 7: SUBSET FOLDING
$     FIELD 8: CREATE ALIGN FOLD TRAM    LINES
$
$ LINE 2 ( Reference nodes)
$     FIELD 1: FOLD_NODE
$     FIELD 2: TUCK_ZSPLIT_N1
$     FIELD 3: TUCK_ZSPLIT_N2
$     FIELD 4: LAYER_ZMIN_N1
$     FIELD 5: LAYER_ZMIN_N2
$     FIELD 6: LAYER_ZMAX_N1
$     FIELD 7: LAYER_ZMAX_N2
$
$ LINE 3 (Sets, etc.)
$     FIELD 1: NODES_LEFT
$     FIELD 2: NODES_CENTER
$     FIELD 3: NODES_RIGHT
$     FIELD 4: SHELL_LEFT
$     FIELD 5: SHELL_CENTER
$     FIELD 6: SHELL_RIGHT
$     FIELD 7: TUCK FOLD TYPE
$
$ LINE 4 (Positions, etc.)
$     FIELD 1: THICKNESS
$     FIELD 2: FOLD_XPOS
$     FIELD 3: FOLD_XTOL
$     FIELD 4: INPLANE_ANGLE
$
$ LINE 5 (Fold specific data)
$     FIELD 1: Factor for unused portion    of spiral.
$     FIELD 2: Out-of-plane fold angle.
$     FIELD 3: Scale factor for fold    point separation.
$     FIELD 4: Location of ZSPLIT    for tuck.
$
$ LINE 6 (Layering and align data)
$     FIELD 1: Minimum value for layer.
$     FIELD 2: Maximum value for layer.
$     FIELD 3: Tramline offset distance    for align.
$
$ LINE 7 (Reference point.)
$     FIELD 1: X.
$     FIELD 2: Y.
$     FIELD 3: Z.
$
$ LINE 8 (Local X vector.)
$     FIELD 1: X.
$     FIELD 2: Y.
$     FIELD 3: Z.
$
$ LINE 9 (Vector in X-Y plane.)
$     FIELD 1: X.
$     FIELD 2: Y.
$     FIELD 3: Z.
$
$
*FOLD
         1         3         0         0         1         0         0         0
       314         0         0         0         0         0         0
         2         2         2         1         1         1         0
                 5.0           114.50000                 0.0                 0.0
          0.10000000               180.0                 1.0                 0.0
      -1.0000000E+20       1.0000000E+20                 0.0
                 0.0                 0.0                 0.0
                 1.0                 0.0                 0.0
                 0.0                 1.0                 0.0
$
*FOLD
         2         3         0         1         1         0         0         0
      1729         0         0         0         0         0         0
         2         2         2         1         1         1         0
                 5.0          -114.50000                 0.0                 0.0
          0.10000000               180.0                 1.0                 0.0
      -1.0000000E+20       1.0000000E+20                 0.0
                 0.0                 0.0                 0.0
                 1.0                 0.0                 0.0
                 0.0                 1.0                 0.0
$
*FOLD
         3         1         0         1         1         0         0         0
      2343         0         0         0         0         0         0
         2         2         2         1         1         1         0
                 5.0          -36.750000                 0.0                90.0
          0.10000000               180.0                 1.0                 0.0
      -1.0000000E+20       1.0000000E+20                 0.0
                 0.0                 0.0                 0.0
                 1.0                 0.0                 0.0
                 0.0                 1.0                 0.0
$
$ ===============
$ List of ORIENTs
$ ===============
$
$ LINE 1
$     FIELD 1: LABEL
$     FIELD 2: TYPE
$              =0: TRANSLATION
$              =1: ROTATION
$              =2: SCALE
$     FIELD 3: TRANSLATE/ROTATE TYPE
$              =0: X
$              =1: Y
$              =2: Z
$              =3: vector
$              =4: N1->N2
$     FIELD 4: SCALE TYPE
$              =0: X,Y,Z
$              =1: N1,N2,N3
$     FIELD 5: N1
$     FIELD 6: N2
$     FIELD 7: N3
$     FIELD 8: CENTRE NODE
$
$ LINE 2
$     FIELD 1: TRANSLATE DISTANCE    TYPE
$              =0: MAGNITUDE OF VECTOR
$              =1: USER DEFINED
$     FIELD 2: USER DEFINED DISTANCE
$     FIELD 3: ROTATE/SCALE CENTRE    TYPE
$              =0: GLOBAL AXIS
$              =1: COORDINATE
$              =2: NODE
$              =3: N1
$     FIELD 4: CENTRE[X]
$     FIELD 5: CENTRE[Y]
$     FIELD 6: CENTRE[Z]
$     FIELD 7: ANGLE
$
$ LINE 3
$     FIELD 1: VECTOR[X]
$     FIELD 2: VECTOR[Y]
$     FIELD 3: VECTOR[Z]
$     FIELD 4: SCALE[X]
$     FIELD 5: SCALE[Y]
$     FIELD 6: SCALE[Z]
$
$
*ORIENT
         1         0         0         0         0         0         0         0
         0     100.0         0       0.0       0.0       0.0       0.0
       1.0       0.0       0.0       1.0       1.0       1.0
$
*ORIENT
         2         1         0         0         0         0         0      5726
         0       0.0         2       0.0       0.0       0.0      45.0
       1.0       0.0       0.0       1.0       1.0       1.0
$
*ORIGAMI_END
```

It is strongly recommended that you don't attempt to edit Origami files by hand, as it can be very hard to identify exactly what the individual numbers mean. To change folds or orients read them back into PRIMER and edit them there.

Also, try not to separate Origami definitions from their parent input decks: they reference SET and other entities within these decks, and confusion will arise if these labels are not treated consistently.

[Previous](format-changes-during-v9-3-development.md)  |  [Next](d-airbag-folding-example.md)