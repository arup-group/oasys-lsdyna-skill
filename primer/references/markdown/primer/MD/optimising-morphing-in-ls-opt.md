####  Optimising Morphing in LS-OPT

![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/stage_setup1.png)

* The flowchart above shows a possible layout of stages in LS-OPT.
* There should be two stages PRIMER and Ansys LS-DYNA after each other. When the pre-processor stage PRIMER is defined, Ansys LS-DYNA can be added as a new stage in PRIMER, and the stage dependency arrow can then be dragged.
* Below we will see the setup of the individual stages in more detail.

| ![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/json_insertion.png)<br> <br><br><ul> <li>Edit dv.txt in your working directory such that the &quot;value&quot; properties are &lt;&lt;variable_name&gt;&gt;, i.e. the LS-OPT variable name in &lt;&lt;&gt;&gt; brackets. This variable name can be identical to the morph flow name. Make sure that the line in the JSON file is still terminated by a comma, but there are no quotes except for those around &quot;value&quot;. </li> </ul> |
| --- |

![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/primer_stage.png)

* For Windows, create a text file run.bat containing the following: 
```
@"executable_path\primer16_x64.exe" %*
```

* For Command in the LS-OPT pre-processor stage definition on Windows fill in: 
```
working_directory\run.bat -noconsole -exec your_input_file.key -ls_opt=PrimerOpt.inp -exit
```

* When running on Linux, specify the PRIMER executable path directly instead of run.bat and without -noconsole or -exec: 
```
executable_path\primer16_x64.exe your_input_file.key -ls_opt=PrimerOpt.inp -exit
```

* Optionally use -batch instead of -exit for the PRIMER command if you wish to avoid PRIMER windows appearing on the screen.
* Tick "Do not add input file argument".
* As Input File specify dv.txt.
* As target on the line "copies dv.txt ...", which by default says UserOpt.inp, specify the file name PrimerOpt.inp.
* Tick "Extra input files" and add your\_input\_file.key.
* Tick the box to parse that extra input file.

| ![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/file_transfer.png)<br> <br><br><ul> <li>In the file transfer between the PRIMER and Ansys LS-DYNA stages add a file copy action. </li> <li>Fill in the original .key file for Source File. </li> <li>Specify the file name DynaOpt.inp for Destination File. </li> <li>Make sure that the &quot;On Error&quot; action is set to &quot;fail&quot;. </li> </ul> |
| --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/ls_dyna_stage.png)<br> <br><br><ul> <li>In the Ansys LS-DYNA stage fill in the Ansys LS-DYNA executable path. </li> <li>As input file specify your .key file without directory path. </li> <li>Set the text box to copy the .key file to DynaOpt.inp in each run directory. </li> </ul> |
| --- |

In future LS-OPT versions the setup might become easier:

* It will be possible to specify PRIMER directly in LS-OPT in the pre-processor stage definition. This will make the setup of the PRIMER command easier, and on Windows the run.bat files will no longer need to be created manually.
* The variable range information might be picked up automatically by the LS-OPT Setup stage from the JSON files as shown below.

![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/stage_setup2.png)

![](../Storage/primer-22-1/primer_links/sect_6/mesh_morphing/variable_ranges.png)

[Previous](design-variable-files.md)  |  [Next](create-tetrahedron-mesh.md)