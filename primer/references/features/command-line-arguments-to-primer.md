###  Command-Line Arguments to PRIMER

"Command-line" arguments are added to the execution line itself as extra arguments to the code. Where they conflict with settings in the "oa\_pref" file the command-line arguments take precedence.

Command-line arguments are a sequence of one or more character strings following the basic PRIMER execution line, for example:

C:\executables\primer22\_x64.exe *arg1* arg2 ... *argn*

Most, but not all, command-line arguments take the form:

&lt;  *-keyword*  &gt; = &lt;  *argument*  &gt; for example -d=opengl

####  Command-line argument syntax

* Each argument should be a discrete string with no white space, which means that there must be no spaces between keyword, "=" and argument. 
 
For example " -d=opengl " is valid, but " -d= opengl " is not.

* Fixed arguments (such as opengl) are not case sensitive. 
 
Filenames are case-sensitive on Linux and Unix operating systems, but not on Windows. However if you are working on Windows and accessing files on a remote disk mounted on a Unix / Linux system it is recommended that you honour the case of filenames in order to avoid confusion.
* All command-line arguments start with " - ",  ***except***  the name of a keyword file to be processed. 
 
For example: primer22\_64.exe -d=opengl -start\_in=c:\temp\example.key
* Command-line arguments may appear in any order. 
 
However it is conventional practice to make any input (keyword) file to be processed the last argument on the line. This is what most readers will expect and it makes the meaning clearer.

#####  Directory and Filename arguments containing white space characters

Problems can arise if arguments are file or directory names that contain white space, for example "Documents and Settings". This requires quotes ".." to placed around such names in order to make them discrete character strings. For example 
 
 C:\executables\primer22\_x64.exe C:\home\example files\test.key  
 
Will not not work because of the white space character between example and files . In order to turn this into a single string you must place quotes around that argument, for example: 
 
 C:\executables\primer22\_x64.exe **"** C:\home\example files\test.key  **"**  
 
A further problem can arise on Windows when using cmd.exe to run things indirectly as the rules for quoting arguments there are arcane to say the least, and research on [MSDN](http://msdn.microsoft.com/en-US/)may be required to get the syntax right for a given example.

It is  ***much***  easier to avoid using directory and file names that contain white space! (If you want to separate names then use the underscore character "\_", for example C:\home\example**\_**files .)

####  Command-line arguments valid in PRIMER

| **Function** | **Format** | **Options** |
| --- | --- | --- |
| **Setting the graphics device**  <br> <br>By default no graphics device is defined, and the device selection panel is mapped. <br> <br>These options can be especially useful if you want to bypass the device selection panel and always start PRIMER with a particular graphics driver. | -d=&lt; *device* &gt; | | -d=opengl | Use OpenGL 3D graphics |<br>| --- | --- |<br>| -d=x24 | 24 bit-plane X-Windows graphics |<br>| -d=x8 | 8 bit-plane X-Windows graphics |<br>| -d=x | X24 if available, otherwise X8 |<br>| -d=default | Whichever is available in the order OpenGL , X24 , X8 |<br>| -d=batch <br>-d=tty | No graphics - text-only mode | |
| **Specifying "full screen" mode on startup**  <br> <br>Normally PRIMER occupies about 70% of the display when it starts, the "maximise" argument changes this to become the full screen. | -maximise |  |
| **Specifying window placement on a multi-display desktop**  <br> <br>By default the top right corner of the desktop is used. <br> <br>The most common arrangement is two screens side by side, for which "left" and "right" may be used. However "top" and "bottom" are also available for the case of two screens one above the other, and the options may be concatenated for a 2x2 display. <br> <br>These options can be combined with -maximise to fill the relevant screen. <br> <br>Users on Windows platforms where tools such as NVidia's "NView" are available may find that it is better to leave window placement to that tool, so that PRIMER's windows behave in a fashion consistent with other application windows. | -placement=&lt; *where* &gt; | This option is intended for use where the desktop is spread as a "Single Logical Screen" over multiple monitors. <br> <br> <br><br>| &lt; *where* &gt; values | **Meaning** |<br>| --- | --- |<br>| left | Left hand monitor |<br>| right | Right hand monitor |<br>| top | Upper monitor |<br>| bottom | Bottom monitor |<br>| The above may be concatenated for a 2x2 display, for example |<br>| top\_left | Top left monitor |<br>| bottom\_right | Bottom right monitor | |
| **Defining a command file name**  <br> <br>By default no command file is assumed. | -cf=&lt; *filename* &gt; | &lt; *filename* &gt; can be any text file containing valid commands. |
| **Defining a macro file name**  <br> <br>By default no macro file is assumed. | -macro=&lt; *filename* &gt; | &lt; *filename* &gt; can be any text file containing valid macro commands. <br> <br>More information about macros can be found in
[MACROS](macros.md#macros) |
| **Defining a file of variables to be used in macro files**  <br> <br>By default no variables are defined | -macro\_var=&lt; *filename* &gt; | &lt; *filename* &gt; can be any text file containing valid macro variable defintions. <br> <br>The syntax of this file is any number of lines formatted: <br> <br> variable\_name, value (The comma is required) <br> <br>Both variable\_name and value are treated as text strings, and the effect when the macro is run is to replace any occurrence of $variable\_name with the string value . <br> <br>Comment lines may be added to the file by placing a $ in their first column. |
| **Defining a JavaScript file name**  <br> <br>By default no JavaScript file is assumed. | -js=&lt; *filename* &gt; | &lt; *filename* &gt; can be any text file containing a valid JavaScript. <br> <br>More information about scripts can be found in
[Scripting](introduction.md). |
| **Defining an argument to be used in JavaScript files**  <br> <br>By default no arguments are defined | -js\_arg=&lt; *argument* &gt; | &lt; *argument* &gt; can be any text string. <br>The arguments can be accessed in the script by using the global *arguments* array. <br>Multiple arguments can be given to a script by using more than one -js\_arg command line argument. |
| **Defining a JavaScript file to encrypt**  <br> <br>By default no arguments are defined | -js\_encrypt=&lt; *filename* &gt; | &lt; *filename* &gt; can be any text file containing a valid JavaScript. <br> <br>Encrypts the script, writing a new file with the suffix '\_encrypted.js' |
| **Defining when a JavaScript is executed** | -js\_after\_cf | If a JavaScript is given on the command line using the -js argument and a command file is given using the -cf argument then by default the script is executed first and then the commands in the command file are executed. <br>If this argument is given then the script will be executed after the command file. |
| **Requesting termination at the end of a command or macro file**<br> <br>This is ignored if no command or macro file is defined | -exit |  |
| **Run PRIMER in "batch" mode** where the main application window is not displayed on the screen. | -batch |  |
| For the -batch option to work you must also specify a command file " -cf= *filename*  ", or a macro " -macro= *filename*  " or a JavaScript " -js= *filename*  " <br> <br>This option will automatically set " -exit " so that PRIMER terminates after playing the command file, macro or script. <br>You may also wish to use " -auto\_confirm " as described below. |
| **Requesting that "auto confirm" should apply** when -batch is used. | -auto\_confirm | Note!! Only meaningful when used in conjunction with -batch |
| For historical reasons used of " -batch " on its own will not "auto confirm" (ie give the default response) any "stop and ask what to do next" messages. This can result in batch scripts appearing to lock up because they are waiting for a user resonse, but this is not visible on the screen.<br> <br>Using -auto\_confirm in conjunction with -batch will restore this behaviour, meaning that scripts will not lock up for this reason. |
| **Requesting batch creation of ZTF and group files**  <br> <br>This generates both &lt; *filename* &gt;.ztf and groups &lt; *filename* &gt;.bin files for subsequent post-processing in D3PLOT. <br> <br><br>| When combined with " -d=batch " then: <br> <br> * ZTF and group (.bin) files are created, then PRIMER exits<br> * No licence to run PRIMER is required |<br>| --- | | -ztf=&lt; *filename* &gt; | &lt; *filename* &gt; must be a valid Ansys LS-Dyna keyword (.key) file, with or without the ".key" extension. |
| **Specifying the directory in which to start.**<br> <br>PRIMER will make this your "current working directory", so that all files which do not have explicit pathname prefixes are assumd to be in this directory. | -start\_in=&lt; *directory* &gt; | &lt; *directory* &gt; must be a valid directory name on your system. |
| **Specifying the directory to receive the keyword read log file.**  <br> <br>This copies all messages normally written to the dialogue box during keyword input to a file primer\_readlog.txt in the directory of your choice. <br> <br>This output file can also be specified via a preference, and interactively from the keyword read Options panel. See  [Options](options-controls-many-aspects-of-reading-ls-dyna-files.md#opts_save_keyin_log)  [: Save Keyin log to file](options-controls-many-aspects-of-reading-ls-dyna-files.md#opts_save_keyin_log)for more details. | -rlog\_dir=&lt; *directory* &gt; | &lt; *directory* &gt; must be a valid directory name on your system. |
| **Inhibiting user "oa\_pref" files** | -ignore\_user\_pref | This argument will inhibit reading of oa\_pref file in home area and in the current working directory. Thus only the system/admin oa\_pref files will apply and any file specified with -pref argument. |
| **Inhibiting user "oa\_pref" files** | -ignore\_oa\_pref | This argument will inhibit reading of oa\_pref file in system area, home area and in the current working directory. Thus only the admin oa\_pref files will apply and any file specified with -pref argument. |
| **Specifying a custom preference file**  <br> <br>This causes an extra, optional preference file to be read on the final pass. | -pref=&lt; *filename* &gt; | &lt;filename&gt; must be a valid preference file (any name is allowed though oa\_pref should be avoided). The filename must be pre-fixed with the full directory path. |
| **Redirecting console output to a file**  <br> <br>This option is only available on Windows. <br> <br>On Unix / Linux use standard shell redirection instead, for example: <br> <br> primer 18 \_64.exe -d=opengl &gt; *filename* | -eo <br>-eo=default <br>-eo=&lt; *filename* &gt; | If &lt;filename&gt; is given then it is used as the filename to write the output to. In order to permit multiple sessions to coexist on the same machine the process id will be appended to the main part of the filename. For example if &lt;filename&gt; is "primer\_output.log" then the actual filename will be "primer\_output\_&lt;pid&gt;.log. <br> <br>If no filename is given or the filename is "default" then filename generation is automatic, and the first valid of: <br> <br>%TEMP%\primer\_log\_&lt;pid&gt;.txt <br>%TMP%\primer\_log\_&lt;pid&gt;.txt <br>%HOMESHARE%\primer\_log\_&lt;pid&gt;.txt <br>%USERPROFILE%\primer\_log\_&lt;pid&gt;.txt <br> <br>will be used. |
| **Defining a list of filenames to be opened**  <br> <br>By default no list of files is assumed | -ml=&lt; *filename* &gt; | If &lt;filename&gt; is defined it should be a list of filenames, each on a new line. <br> <br>These are assumed to be Ansys LS-DYNA keyword files (regardless of any extension) and will be opened as models 1 to N. <br> <br>There is a limit of 255 models in PRIMER , so the number of models should not exceed 255. |
| **An Ansys LS-DYNA keyword filename**<br> <br>By default no filename is assumed | &lt; *filename* &gt; | If &lt;filename&gt; is defined it is assumed to be an Ansys LS-DYNA keyword file and will be opened as model 1. |
| **A design variable file**  <br> <br>By default no filename is assumed | -ls\_opt=&lt; *filename* &gt; | If this is defined, the design variables are applied. This applies to morphing from PRIMER 16.0 onwards as described in the [mesh morphing](variables-tab.md)section. |
| **Read/Write checkpoint files**  <br> <br>Start writing the checkpoint files upon PRIMER startup <br> <br>Read checkpoint files and Show checkpoint playback panel upon PRIMER startup <br> <br>Directory path to write checkpoint files | write\_checkpoint\_files=&lt; *TRUE/FALSE* &gt;  <br> <br> show\_checkpoint\_files=&lt; *TRUE/FALSE* &gt;  <br> <br> &#8209checkpoint\_dir=&lt; *directory* &gt; | TRUE/FALSE, turn on/off the writing of the checkpoint files (default is FALSE) <br> <br>TRUE/FALSE, turn on/off the initial checkpoint files panel (default is FALSE) <br> <br>If the writing of the checkpoint files is OFF, the reading will also be OFF <br> <br>&lt; *directory* &gt; must be a valid directory name on your system. <br> <br>If the value is &lt;none&gt; then the checkpoint files are not recorded for the PRIMER session. |
| **An optional argument when calling -ls\_opt**  <br> <br>By default no argument is assumed | ls\_opt\_arg=&lt; *filename* &gt;  ls\_opt\_arg= *"OUTPUT:* &lt; *filename* &gt; *"*   ls\_opt\_arg= *"REMAKE\_CONX:* &lt; *TRUE/FALSE* &gt; *"*   ls\_opt\_arg= *"REMAKE\_CONX\_ERROR:* &lt; *TRUE/FALSE* &gt; *"* | blank or OUTPUT - filename is the output filename. <br> <br>REMAKE\_CONX - TRUE/FALSE, turning the remaking of connections after morphing On/Off. (default is TRUE) <br> <br>REMAKE\_CONX\_ERROR - TRUE/FALSE, classing a failure to remake an initially realized connection as an Error/Normal termination. (default is TRUE) |

[Previous](oa-pref-arguments-valid-for-primer.md)  |  [Next](environment-variables-that-affect-primer.md)