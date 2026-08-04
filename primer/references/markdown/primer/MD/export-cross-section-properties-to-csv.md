The cut section properties (see [Properties: Computing Cut-Section Properties](properties-computing-cut-section-properties.md) for explanation on how these are computed) and a subset of the the ANSYS LS-DYNA keyword fields defining the plane geometry of all **\*DATABASE\_CROSS\_SECTIONs**referenced by a LOAD\_PATH can be exported to a CSV file using the **Export Properties** button.

![](../Storage/primer-22-1/auto-create-cross-sections/load_path_csv.png)

The keyword fields written out to the CSV file are:

| Cross section ID |
| --- |
| psid |
| xct |
| yct |
| zct |
| xch |
| ych |
| xhev |
| yhev |
| zhev |
| lenl |
| lenm |

The cut section properties written out to the CSV file are:

| Area |
| --- |
| Xc |
| Yc |
| Xc\_g |
| Yc\_g |
| Zc\_g |
| Ixx |
| Iyy |
| Ixy |
| Iuu |
| Ivv |
| Theta |
| Xe |
| Ye |
| Zxx |
| Zyy |
| Axial (1st yield) |
| Mxx (1st yield) |
| Myy (1st yield) |
| Xf |
| Yf |
| Axial (Eq force) |
| Mxx (Eq force) |
| Myy (Eq force) |
| Xf\_g |
| Yf\_g |
| Zf\_g |
| Xe\_g |
| Ye\_g |
| Ze\_g |

This is a capture of the first few CSV columns exported from a LOAD\_PATH referencing five **\*DATABASE\_CROSS\_SECTIONs**showing the format:

![](../Storage/primer-22-1/export-cross-section-properties-to-csv/load_path_csv_example.png)

[Previous](auto-create-cross-sections.md)  |  [Next](write-a-ztf-file.md)