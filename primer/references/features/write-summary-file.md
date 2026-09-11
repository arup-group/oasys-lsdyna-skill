####  WRITE_SUMMARY_FILE...

This command may also be used to generate a summary of the model contents giving more detail than MODEL &gt; LIST.

It writes a file containing a part summary, material summary, contact summary, element summary and element quality summary. The default file name is **model\_summary** but this can be changed at the prompt before being written out.

The part summary lists model contents by:

* Parts, in order of part ID, giving a break-down of material ID, material type, section type, gauge (if shell elements), part mass, timestep added mass and title for each part and part inertia.

The mass of each part is calculated as it by Ansys LS-Dyna on model initialisation. If nodes on deformable elements are attached to rigid parts, mass is lost by the deformable and gained by the rigid (or discarded if rigid is part-inertia). Lumped masses on rigid bodies (non part-inertia) are included in their part mass, whereas those on deformable bodies are added to the lumped mass total. If a rigid part is merged onto another, the constrained part loses its mass and this is added to the lead part (or discarded if lead part is part-inertia).

The mass contributions from parts, lumped masses on deformable, part inertias and nodal rigid bodies, the total model mass, and (if any) the timestep mass scaling as %age of model mass are summarised at the end of the part listing. Model mass is also written to the dialogue box.

The material summary contains a listing of:

* The commonly used materials in each model with a few useful details about each material e.g. E, and for each \*MAT\_ELASTIC.
* Note that not all material parameters are given for each material and not all material models are supported by the summary file. A list of materials which exist in the model for which no details are given is included at the end of the material summary.

The contact summary contains a list of:

* title
* contact type
* SURFA (tracked) and SURFB (reference) type

The element summary lists:

* parts by element type referenced, giving part ID, material ID, section ID, hourglass ID, thermal material ID and title.

The element quality summary lists:

* part ID
* percentage of elements failing one or more quality criteria
* minimum element length - worst value and the percentage of elements failing this criterion
* aspect ratio - worst value and the percentage of elements failing this criterion
* skew - worst value and the percentage of elements failing this criterion
* warpage - worst value and the percentage of elements failing this criterion
* minimum angle - worst value and the percentage of elements failing this criterion
* maximum angle - worst value and the percentage of elements failing this criterion

[Previous](writing-ztf-and-group-files.md)  |  [Next](model-diagnostics.md)