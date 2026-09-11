###  Options for Comparing Models

The Options button on the modified panel will give direct access to the appropriate program options panel.

![](../Storage/primer-22-1/primer_links/sect_3/images/mod_13.gif)

####  Comparing floating point values

By default, floating point numbers are compared to 6 sig fig. This can be reduced at the user's discretion and will affect the comparison of all floating point numbers.

Coordinates (on nodes, connections & airbag reference geometry) are special cases which admit of an absolute difference threshold which can be set by the user. This is particularly useful to remove the spurious differences when comparing models with \*INCLUDE\_TRANSFORM. These arise due to rounding when the transforms are applied and unapplied.

####  Avoiding spurious differences

Write component as latest version before check This option applies only when we are [comparing include files](comparing-individual-include-files.md#mod6). If this option is set PRIMER will read the component file, write it using the latest output version and then re-read it. The I/O overhead is considerable. If the component files are rather old or have been written by software other than PRIMER this may be worth doing to avoid spurious difference reports. If the component file has been written from PRIMER relatively recently there is no need to do this, hence the default if off.

####  File header comments

By default PRIMER will compare file header comments for the master file and the includes at the beginning of the model modified process and warn if these appear to differ. This includes a check on include file label range definitions. You may switch this off.

[Previous](comparing-individual-include-files.md)  |  [Next](model-post.md)