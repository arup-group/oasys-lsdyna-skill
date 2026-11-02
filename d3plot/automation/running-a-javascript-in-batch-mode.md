###  Running a JavaScript in "batch" mode

All the above assumes that JavaScripts will be run interactively from the user interface, however it is also possible to run a script in "batch" mode using the command line interface. The relevant command-line commands are:

| /JAVASCRIPT - | +- | COMPILE | Compiles and checks the script, but does not run it. |
| --- | --- | --- | --- |
|  | +- | EXECUTE | (Re)compiles and runs the script |
|  | +- | MEMORY &lt;nnn&gt; | Resets the Garbage Collection threshold to &lt;nnn&gt; MBytes |

To run a JavaScript from batch these commands need to be placed in a command file and run using the command line " -cf= *command filename*  " option. For example the command file might be:

>  
> *... some other commands*   
>  /JAVA EXEC my\_script.js  
>   *...some further commands*
> 

And the command line required to run D3PLOT might be something like:

$OASYS/d3plot93.exe -d=default -cf=  *command\_file*  -exit  *analysis\_name*

Obviously multiple script invocations may be placed in a command file. For more information see:

>  
> 
> | [Command and Session files](g-command-files.md) | Describes command files, and explains how to create and use them |
> | --- | --- |
> | [Valid D3PLOT command line arguments](command-line-options.md#command_line_args) | Describes the various command line arguments, and how to use them |
> 
> 

Previous: maintaining-a-library-of-javascripts  |  Next: ecmascript-6-modules