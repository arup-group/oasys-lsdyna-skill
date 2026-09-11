###  FMH Markup Script

This feature computes interior impact points on a vehicle model for the FMVSS201 specification. It also helps create multiple models corresponding to these points. Additional user-defined points may also be specified.

![Markup Settings](../Storage/primer-22-1/primer_links/sect_6/fmh/markup_settings_new.gif)

The model must be aligned with the global co-ordinate system as follows:

* +X from car front to back (vehicle points towards -X)
* +Y from car left to right
* +Z from the ground up

A settings file may be read or written which may include mandatory information and other data required to compute standard impact points. Mandatory information includes:

* Seating reference points
* Seat travel
* Impact velocity

The settings file is useful as it means the information required for the calculations need only be selected once. It is recommended that after specifying all required information, but before calculating the target points you return to the first panel and save a settings file.

Specific impact point categories such as A-Pillar may be selected/deselected. Information specific to these categories may be specified manually or imported via a settings file.

The 'Impact point visualisation' screen provides information about standard impact points including position, approach angles and velocity. This information may be modified using appropriate text boxes. Additional information regarding this calculation may be obtained using appropriate 'Visualise' and '?' buttons.

![Calculate and Visualise](../Storage/primer-22-1/primer_links/sect_6/fmh/markup_calcvis_small.gif)

By default the vertical angle is set to AUTO. With this setting, PRIMER will use an iterative process to determine what the maximum vertical angle is, by rotating the headform until the chin of the head touches the vehicle trim, and then rotating back. This process can take some time, so it is recommended to change the AUTO to a specified vertical angle if you already know this information.

User-defined points may be created by clicking the Create manually button.

A csv file may be written by clicking the Read/Write csv button.

Finally, multiple models may be created at the selected points by clicking the Build ... button.

![Visualise Points](../Storage/primer-22-1/primer_links/sect_6/fmh/markup_sketchall_small.gif)

![Build Multiple Models](../Storage/primer-22-1/primer_links/sect_6/fmh/markup_build_small.gif)

[Previous](finding-an-item.md)  |  [Next](fmh-manual-setup.md)