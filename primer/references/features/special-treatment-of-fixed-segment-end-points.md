####  Special Treatment of Fixed (Segment End) Points

Note that projection is applied to all points, *including* the fixed (segment end) ones and, as in the examples above, intermediate fixed points will have separate projections for each of the two adjacent segments.

Fixed points get exceptional treatment during form-finding: at these points the chassis mesh is only permitted to move along the "radius" vector back to the point so, ultimately, an end point should arrive back at its defined position - subject to any interaction with the structure.

If structure intervenes at an intermediate segment end point causing the two segment ends not to be coincident following form-finding, the first segment will "win" at the meshing stage and the common end node will be at its location causing potential distortion of the second segment's end element. You should correct this situation by altering the segment end point to avoid such distortions.

[Previous](parameters-1-basic-control-of-the-form-finding-process-1.md)  |  [Next](special-treatment-of-known-intermediate-points.md)