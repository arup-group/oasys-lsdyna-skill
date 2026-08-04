###  IGES File Format

The International Graphics Exchange Specification (IGES) is a standard format for model geometry. PRIMER will read fixed ASCII file format 5.3 IGES files.

The following IGES entity types are read by PRIMER.

| **Entity type** | **Entity description** | **Notes** |
| --- | --- | --- |
| 100 | Arc |  |
| 102 | Composite curve |  |
| 104 | Conic arc | Forms 2 (hyperbola) and 3 (parabola) not supported. |
| 106 | Copius data/Linear path/Simple closed planar curve | Forms 1, 2, 11, 12 and 63 supported |
| 108 | Plane |  |
| 110 | Line | Forms 1 (semi bounded) and 2 (unbounded) not supported |
| 112 | Parametric spline curve |  |
| 116 | Point |  |
| 118 | Ruled surface |  |
| 120 | Surface of revolution |  |
| 122 | Tabulated cylinder (extruded surface) |  |
| 124 | Transformation matrix |  |
| 126 | Rational B-Spline curve |  |
| 128 | Rational B-Spline surface |  |
| 141 | Boundary |  |
| 142 | Curve on parametric surface |  |
| 143 | Bounded surface |  |
| 144 | Trimmed (parametric) surface |  |
| 308 | Subfigure definition |  |
| 314 | Colour |  |
| 406 | Property | Only forms 3 (level function) and 15 (Name) supported |
| 408 | Singular subfigure instance |  |

All other entity types are ignored.

[Previous](translator-functionality.md)  |  [Next](abaqus-input-file-output.md)