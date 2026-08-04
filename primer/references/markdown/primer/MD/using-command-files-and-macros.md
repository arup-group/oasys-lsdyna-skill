###  Using "Command Files" and Macros

As well as typing in commands you can run pre-built files of commands, referred to as command files.

These are invoked using the " -cf=&lt; *filename* &gt; " option on the command line, and they operate as follows:

* The commands in &lt; *filename* &gt; are executed in sequence, exactly as if they had been typed in.
* At the end of &lt; *filename* &gt; one of two things happens:
    * If " -exit " was also specified on the command line then PRIMER terminates normally
    * Otherwise it reverts to interactive input at the command prompt

Therefore a typical batch invocation for PRIMER (in Unix) might be something like:

>  
> $&lt;pathname&gt;/primer 22\_x64.exe -d=batch -cf=my\_command\_file -exit
> 

This will run in text-only mode, execute the commands in file "my\_command\_file" and terminate normally at the end of that file.

It is also possible to run "macro files" of stored commands from the command line. Macros are described in section
[MACROS](macros.md#macros), and running them from the command line via the " -macro=&lt; *filename* &gt; " command is described in [Appendix M](command-line-arguments-to-primer.md#comm_valid)

[Previous](typing-in-commands-when-running-in-text-only-mode.md)  |  [Next](command-line-arguments.md)