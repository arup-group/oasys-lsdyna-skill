###  Valid D3PLOT command-line arguments

Command-line arguments are processed by D3PLOT **before** reading any preferences from "oa\_pref" files, so if there is a conflict with settings in the "oa\_pref" file, the "oa\_pref" file takes precedence. For example, if D3PLOT is started with the -maximise command-line argument but the "oa\_pref" preference "d3plot\*maximise: FALSE" is set, D3PLOT will **not** be started maximised.

| Selecting a display device | -d=&lt; *device type* &gt; | Device types that are valid are:<br> <br><br>| opengl | Default 3D OpenGL graphics, which is standard on both Windows and Linux platforms. |<br>| --- | --- |<br>| stereo | Stereo OpenGL on hardware which will support this. It will revert to standard (mono) OpenGL if not available on that platform. |<br>| batch | Default OpenGL, but with the display not shown on the screen, used for batch processing. |<br>| tty | No graphics. Has a very limited functionality and should not be used without advice from Oasys Ltd Support. |<br><br> <br>(Older versions of D3PLOT also supported 2d X11 graphics on Linux platforms. This was withdrawn in D3PLOT 14.0, and 2d graphics is no longer supported.) |
| --- | --- | --- |
| Flag to start with window maximised (full screen).<br><br>Since version 19 the default for D3PLOT is to start in "full screen" mode, so this argument is redundant. However, it still exists for consistency with old versions. | -maximise | (No argument) |
| Specifying window placement on a multi-display desktop <br>By default the top right corner of the desktop is used.<br> <br>The most common arrangement is two screens side by side, for which "left" and "right" may be used. However "top" and "bottom" are also available for the case of two screens one above the other, and the options may be concatenated for a 2x2 display.<br> <br>These options can be combined with -maximise to fill the relevant screen.<br> <br>Users on Windows platforms where tools such as NVidia's "NView" are available may find that it is better to leave window placement to that tool, so that D3PLOT's windows behave in a fashion consistent with other application windows. | -placement=&lt; *where* &gt; | This option is intended for use where the desktop is spread as a "Single Logical Screen" over multiple monitors. |
| &lt; where &gt; values | Meaning |
| left | Left hand monitor |
| right | Right hand monitor |
| top | Upper monitor |
| bottom | Bottom monitor |
| The above may be concatenated for a 2x2 display, for example |
| top\_left | Top left monitor |
| bottom\_right | Bottom right monitor |
|  |
| Command file name <br>Flag to exit when command file run complete if desired | -cf=&lt; *filename* &gt; <br>-exit | A valid command file name (usually \*.tcf) <br>(No argument) |
|  |
| JavaScript | -js=&lt; *filename* &gt; | Any valid D3PLOT JavaScript file |
|  |
| JavaScript Arguments | -js\_arg=&lt; *argument* &gt; | Any valid string <br>The arguments can be accessed in the script by using the global arguments array. <br>Multiple arguments can be given to a script by using more than one -js\_arg command line argument. |
|  |
| Checkpoint file to replay <br>Number of lines to execute in checkpoint file | -replay=&lt; *filename* &gt; <br>-rlines= *&lt;nnnn&gt;* | A valid D3PLOT ckeckpoint file (usually cp\_d3plot  *nnnn* ) <br>Where &lt; *nnnn* &gt; is a positive integer |
|  |
| Alternate "start in" directory (redefines current working directory) | -start\_in=&lt; *pathname* &gt; | A valid directory (eg c:\my\_files, /data/my\_files) |
| Optional "project" working directory.<br> <br>This specifies an alternate initial location for view, cut-section, group, settings and external data files. Useful if the directory containing analysis data is read-only so that these files have to be located elsewhere | -pcwd=&lt; *pathname* &gt; | A valid directory (eg c:\proj\_files, /data/proj\_files) |
|  |
| Specifying a custom "oa\_pref" file.<br> <br>This causes an extra, optional "oa\_pref" file to be read. | -pref=&lt;filename&gt; | &lt;filename&gt; must be a valid "oa\_pref" file.<br> <br>If it has no path prefixed, the file is assumed to be in the OA\_INSTALL directory. Any legal filename may be used. |
|  |
| Specify a file that contains commands to create a cutdown version of the ptf file (see [\[WRITE\] CUTDOWN D3PLOT/PTF File](write-cutdown-d3plotptf-file.md#ptfcut) ). | -ptfcut=&lt;filename&gt; |  |
| As above but allows creation of cutdown ptf files (see Disk Format of Binary Database Files ) in true batch mode (-d=tty) using easily readable/editable options. Subsidiary options may be specified either on the command line or fed in from a file. | -ptfcut\_batch <br>&lt;=filename&gt; | The following data components are accessible using this flag: |
| **Flag** | **Component** |
| -acc | Acceleration |
| -plastic | Plastic strain |
| -strain | Strain tensor |
| -stress | Stress tensor |
| -vel | Velocity |
| -von\_stress (reordered format only) | Von mises stress |
| -von\_strain (reordered format only) | Von mises strain |
| The following output formats are available: |
| **Flag** | **Format** |
| -reorder | Reordered |
| &lt;none&gt; | Original |
| Specific states may be selected as follows: |
| **Flag** | **Meaning** |
| -states=odd | All odd states |
| -states=even | All even states |
| -states=start,end,optional\_inc | States between 'start' and 'end' with a step size of 'optional\_inc'; end can be "last" (minus quoes) |
| -states=all<br> <br>&lt;none&gt; | All states selected |
| ...continued... |  | Two new methods of generating cutdown models are available:<br> <br>Method 1 involves feeding all relevant options on the command line. This can only produce one cutdown model. Eg:<br> <br>-ptfcut\_batch -reorder <br>&lt;-vel/-acc/-plastic/-stress/ <br>-strain/-von\_stress/-von\_strain&gt; <br>-states=&lt;[start, end, optional\_inc]/odd/even&gt; <br>-o=&lt;output&gt; &lt;input&gt;<br> <br>Method 2 involves specifying options in a file and invoking that using the -ptfcut\_batch= flag. This method can be used to generate multiple cutdown models, each with its own components, formats and states<br> <br>-ptfcut\_batch=&lt;options\_file&gt; &lt;input&gt;<br> <br>Example options\_file:<br> <br>-reorder -vel -states=odd -o=vel.ptf <br>-acc -o=acc.ptf<br> <br>There is currently no option to select specific parts for the cutdown model. All parts are processed by default. |
|  |  |  |
| Write out a HDF5 file with envelope data. | -env\_out | Methods of writing out the HDF5 envelope data file using the batch mode:<br><br>To write out the HDF5 file with envelope data, we need to set '-d=batch' flag to run D3PLOT in batch mode.<br><br>-env\_out writes out the HDF5 file for the 'filename.ptf' model file provided.<br><br>Users need to provide a settings file with all the necessary options already set like integration points, reference frames and data components etc.<br><br>&lt;install-dir&gt;d3plot22\_x64.exe -d=batch -env\_out -set="&lt;settings file path&gt;\d3plot001.set" "&lt;model\_path&gt;\filename.ptf"<br><br>We write out envelope data for all the states by default through batch. Selection of subset of states through the settings file is not supported for batch writing. |
| Specify a GLB output file for 3D Export. | -glb=&lt;file&gt; | Generate a compressed GLB file |
|  | -glb\_uncompressed=&lt;file&gt; | Generate an uncompressed GLB file |
|  | | The following options can be used with this flag to control the component and states captured in the 3D Viewer Export. |<br>| --- |<br>| -components=A,B,C | A comma separated list of components, where each component generates a separate GLB file.<br> <br>The component names can either be the JavaScript Data component names or the D3PLOT button label names.<br> <br>-components=svon <br>-components=X\_DIRECT\_STRESS<br> <br>Each component can be followed by a surface (top/middle/bottom/max/min/mag) or a specific layer number if required.<br> <br>-components=svon@top <br>-components=X\_DIRECT\_STRESS@1<br> <br>A special component "none" can also be specified in the list to generate a Shaded plot.<br> <br>-components=svon@top,X\_DIRECT\_STRESS@1,none,vm<br> <br>would generate 4 output files<br> <ul> <li><span style="font-family: &quot;Open Sans&quot;, sans-serif;"> <span style="font-size: 10pt;">Von Mises Stress (Top Surface) </span></span></li> <li><span style="font-size: 10pt;"><span style="font-family: &quot;Open Sans&quot;, sans-serif;">X Direct Stress (Layer 1) </span></span></li> <li><span style="font-size: 10pt;"><span style="font-family: &quot;Open Sans&quot;, sans-serif;">Shaded Plot </span></span></li> <li><span style="font-size: 10pt;"><span style="font-family: &quot;Open Sans&quot;, sans-serif;">Velocity Magnitude</span> </span></li> </ul> |<br>| -frame\_rate=N | Specifies the default playback frame rate for D3PLOT Viewer ( [www.d3plotviewer.com](http://www.d3plotviewer.com)). |<br>| -states=N | Select single state N |<br>| -states=odd | All odd states |<br>| -states=even | All even states |<br>| -states=start,end,inc | States between 'start' and 'end' with a step size of 'inc'; end can be "last" (minus quotes), inc is optional |<br>| -states=all<br> <br>&lt;none&gt; | All states selected. This is the default, unless D3PLOT reads a settings file along with the model, in which case the default is to export a single state (the current state specified by the settings file). | |
|  |  |  |
| Specify a D3PLOT template file that contains information on which models are loaded into each window and any model offsets for each window (see Template File ). | -tpl=&lt;filename&gt; |  |
| Specify the name of a model database file to open (see Select Models From Database ). | -mdb=&lt;filename&gt; |  |
| Specify an alternate location for a ZTF file to read. This option can be useful if PRIMER is unable to create a ZTF file in the same location as the D3PLOT PTF files (see Open a Single Model ). | -ztf=&lt;filename&gt; |  |
| Do not read a ZTF file. | -no\_ztf |  |
| Specify an alternate location for a D3PLOT settings file. By default D3PLOT will look in the directory containing the PTF files for a setting file to read (see Open a Single Model ). | -set=&lt;filename&gt; |  |
| Do not read a D3PLOT settings file. | -no\_set |  |
| Specify an alternate location for a D3PLOT properties file. By default D3PLOT will look in the directory containing the PTF files for a properties file to read (see Open a Single Model ). | -prop=&lt;filename&gt; |  |
| Do not read a D3PLOT properties file. | -no\_prop |  |
| Specify an alternate location for a D3PLOT groups file. By default D3PLOT will look in the directory containing the PTF files for a groups file to read (see Open a Single Model ). | -group=&lt;filename&gt; |  |
| Do not read a D3PLOT groups file. | -no\_group | Using this option will prevent D3PLOT from reading a human-readable  ***ASCII***  groups file (group *nnn* .asc) but it will still read any cached  ***binary***  groups file ( *jobname* .grp) that is left over from an earlier D3PLOT session which used groups in this model.<br> <br>For more information see the GROUPSsection of this manual. |
| Specify a file containing a list of models for D3PLOT to automatically open. | -ml=&lt;filename&gt; | The model list file should contain the full pathname of one file from each model that D3PLOT should open. Each file should be on a separate line and it should be the first item on each line.<br> <br>By default each model will be read into Window 1, but you can specify which windows a model is read into by specify a bitwise encoded number after the model name (W1=1, W2=2, W3=4, W4=8, etc.)<br> <br>e.g. if you read in 4 models with the following file:<br> <br>*model1.ptf 1*<br> <br>*model2.ptf 2*<br> <br>*model3.ptf 4*<br> <br>*model4.ptf 3*<br> <br>model1.ptf would go into W1, model2.ptf into W2, model3.ptf into W3 and model4.ptf into W1 and W2. Contact Oasys Ltd Support if you need further explanation. |
| Do not read a file with interface force segments and data. | -no\_ifs |  |
| Do not read a file with springs, masses, joints etc. | -no\_xtf |  |
| Do not read a spotweld, SPC etc. data file. | -no\_lsda |  |
|  |
| Run D3PLOT in "batch" mode where the main application window is not displayed on the screen. For this option to work you must also specify a command file " -cf=filename " and the name of the PTF file to open.<br> <br>This option will automatically set " -exit " so that D3PLOT terminates after playing the command file. | -batch |  |
| Redirect output from the console window to a file on Windows.<br> <br>To redirect output on Unix/Linux use the shell redirection options (typically &gt; for &lt;stdout&gt;, & for &lt;stderr&gt;) | -eo=&lt;filename&gt; <br>-eo <br>-eo=default | -eo=&lt;filename&gt; is designed for the user to suppress the console and redirect logfile output to the specified filename. In order to permit multiple sessions to coexist on the same machine the process id will be appended to the &lt;name&gt; part of the filename to give &lt;name&gt;\_pid.&lt;ext&gt;.<br> <br>If plain "-eo" or "-eo=default" are found then filename generation is automatic, and the first valid of: <br> <br> %TEMP%\this\_log\_&lt;pid&gt;.txt <br>%TMP%\this\_log\_&lt;pid&gt;.txt <br>%HOMESHARE%\this\_log\_&lt;pid&gt;.txt <br>%USERPROFILE%\this\_log\_&lt;pid&gt;.txt <br>  <br>will be used. |
| **Read/Write checkpoint files**<br> <br>Start writing the checkpoint files upon D3PLOT startup<br> <br><br> <br>Read checkpoint files and Show checkpoint playback panel upon D3PLOT startup.<br> <br><br> <br>Directory path to write checkpoint files | write\_checkpoint\_files=&lt; *TRUE/FALSE* &gt;<br> <br><br> <br>show\_checkpoint\_files=&lt; *TRUE/FALSE* &gt;<br> <br><br> <br>checkpoint\_dir=&lt; *directory* &gt; | TRUE/FALSE, turn on/off the writing of the checkpoint files (default is FALSE)<br> <br><br> <br>TRUE/FALSE, turn off the initial checkpoint files panel (default is FALSE)<br> <br>If the writing of the checkpoint files is OFF, the reading will also be OFF<br> <br><br> <br>&lt; *directory* &gt; must be a valid directory name on your system.<br> <br>If the value is &lt;none&gt; then the checkpoint files are not recorded for the D3PLOT session. |
| Run D3PLOT without the console window. | -noconsole | Windows only. |
|  |
| Input database filename. <br><br> <br>(The extra time history ( .xtf ) and contact force ( .ctf ) databases are also opened if present.) | &lt; filename &gt; <br> <br>eg run\_1.ptf | A valid input file type: |
| name.ptf | (Complete state file) |
| d3plot | ( ditto ) |

Some examples for D3PLOT might be:

| pathname/d3plot18.exe -maximise run\_2.ptf | (Use full -screen, open file run\_2.ptf) |
| --- | --- |

**Note that no spaces should be left in the syntax &lt;arg&gt;=&lt;value&gt;.**

| For example:<br> <br>Correct syntax is: | " -eo = default " is illegal.<br> <br>" -eo=default " |
| --- | --- |

 Previous: command-line-options  |  Next: windows-pcs