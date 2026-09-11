###  Keying Out Include Transform

The method of keyout will affect how the data transformation is handled.

* merge-&gt;master - the data is transformed
* in sub-directory - as all the transformation calls will be present the data is written in its native state
* select files - the user must select the mode as "NO-CHANGE" (leave the data in its native state) or " MOVE "(change data to its transformed state, i.e. as if for use with an ordinary include file).

When using the select file mode, it is unclear whether the applicable DEFINE\_TRANSFORMATIONS are included or not, as they exist entirely separately from the INCLUDE\_TRANSFORM statements. The user must decide.

[Previous](converting-include-files.md)  |  [Next](model-build.md)