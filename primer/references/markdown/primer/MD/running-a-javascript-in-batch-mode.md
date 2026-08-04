###  Running a JavaScript in "Batch" Mode

All the above assumes that JavaScripts will be run interactively from the user interface, however it is also possible to run a script in "batch" mode using the command line interface. The relevant command-line commands are:

| /SCRIPT |  | READ  *&lt;script&gt;* |  | Read, compile and execute &lt;script&gt; |
| --- | --- | --- | --- | --- |

To run a JavaScript from batch these commands need to be placed in a command file and run using the command line " -cf= *command filename*  " option. For example the command file might be:

>  
> *... some other commands*   
>  /SCRIPT READ my\_script.js  
>   *...some further commands*
> 

And the command line required to run PRIMER might be something like:

$OASYS/primer 22\_x64.exe -d=default -cf=  *command\_file*  -exit  *analysis\_name*

Obviously multiple script invocations may be placed in a command file. For more information see:

>  
> 
> | [Using command files](using-command-files-and-macros.md#UsingCommandFiles) | Describes command files, and explains how to create and use them |
> | --- | --- |
> | [Command line arguments](command-line-arguments.md#CommandLineArgs) | Describes the various command line arguments, and how to use them |
> 
> 

[Previous](showing-a-custom-tool-button-for-scripts.md)  |  [Next](ecmascript-6-modules.md)