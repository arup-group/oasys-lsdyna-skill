###  Building Using .csv Targeting File - IHI, PDH Build

Select  **MODEL**   **-&gt; BUILD**  . Choose the  **Build from csv targeting file**  option.

![](../Storage/primer-22-1/primer_links/sect_3/images/build_csv.gif)

A model and an impactor can be read using the appropriate text boxes or file selectors. Alternatively, an existing CSV file can be read in. A model and an impactor are automatically located. Selecting the  **Make**  button will merge these into the active model.

The following templates are available, of which one can be chosen:

* IHI
* PEDHEAD
* PEDHEAD\_ANGLE
* PEDLEG\_LOWER
* PEDLEG\_UPPER
* PEDLEG\_UPPER\_2
* GENERAL\_TRANSLATE
* GENERAL\_TRANSLATE\_ROTATE
* GENERAL\_TRANSLATE\_TRIAD
* GENERAL\_TRANSLATE\_VECTOR

Refer to [Appendix N](n-automated-model-build-from-command-line.md#auto_build) for more information about these templates.

Orientation and depenetration options, root directory, output file name, reporter individual template, and reporter summary template can also be specified using appropriate text-boxes/selectors.

*Note on IHI positioning* . Rather than just positioning to a set vertical angle, PRIMER can now automatically position the IHI headform to the maximum vertical angle. The process is positioning the headform at zero vertical angle, rolling the headform down until the chin touches the trim, then rotating the headform back by a set back angle. The user needs to specify a shell set that represents the chin of the headform. The user can choose the method of head depenetration when rotating.

With the default depenetration method 'X', the headform will roll off the target point as it would in reality.
 ![Depenetration_X](../Storage/primer-22-1/primer_links/sect_3/images/depen_x.gif) 
Using the 'XZ' or 'XYZ' setting, PRIMER will attempt to move the headform back towards the target point after each rotation iteration.

The back angle (Bangle) is set on the loadcase panel for IHI (see below). On this panel the user must also specify that the loadcase uses the auto-vertical method. When the auto-vertical method is used, the vertical angle specified (Vangle) is the maximum angle the headform will rotate to when carrying out the automatic process.

An additional offset can be specified for the impactor for 'PEDHEAD' and
'PEDHEAD\_ANGLE' types. The impactor will be moved back along the line of flight
by the user-specified distance once the build operation is complete.

The Z-coordinate of the impactor is fixed for the PEDLEG\_LOWER type.
As a result, Z is specified globally and not as a part of the loadcases.

Two possible projection methods are available for the PEDHEAD build type.
The default method (Along Z) will generate target Z by projecting
the picked point along global Z. The second option will generate target Z by
projecting the picked point along the reversed line of flight.

A root directory, output file name, reporter individual template, and reporter
reporter summary template can also be specified using textboxes/selectors.

One of three master model styles can be chosen:

* Standard: Each \*DEFINE\_TRANSFORMATION definition is written to
the corresponding master model.
* GM style: All \*DEFINE\_TRANSFORMATION definitions are written to a common
user-defined file. Each \*DEFINE\_TRANSFORMATION definition is
given a unique label which is equivalent to the directory name
if valid. Each master model then refers to the appropriate
\*DEFINE\_TRANSFORMATION by its label.
Also, a couple of extra transformations are added such that
the last translation represents the aim point.
Additionally, a title string may be specified. The tile for each
\*DEFINE\_TRANSFORMATION card would be a combination of the label,
the aforementioned string, and the depenetration type.
* CASE style: A single master model is written. Each \*DEFINE\_TRANSFORMATION
and the corresponding \*INCLUDE\_TRANSFORM definition is
specified using a \*CASE definition.

The 'First impact point only' option is specific to 'GM style'. It will generate
\*DEFINE\_TRANSFORMATION information for each loadcase (single file as above)
but will only write out the first master model.

\*BOUNDARY\_SPC cards can now be generated on the fly. These are created using a
user-defined node set. All degrees of freedom will be restrained in the resultant card.

Load-cases can be specified by selecting the  **Edit Load-case**  button

![](../Storage/primer-22-1/primer_links/sect_3/images/build_csv_tpoints.gif)

It is recommended that users write the CSV file out before proceeding with the model build. A model save operation might also be necessary in certain cases.

[Previous](reading-files-using-a-model-database.md)  |  [Next](model-modified.md)