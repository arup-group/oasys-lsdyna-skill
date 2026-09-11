###  Editing Comments in Include Files

The Edit comments option allows you to change comments that are stored at the top of include files (or the main model). Using this option will start an external editor that allows you to change the comments.

On windows the editor defaults to notepad. On unix the default editor is vi (opened in a new xterm window). The editor that is used can be changed by either:

1. Setting an oa\_pref option primer\*text\_editor to the editor you want to use.
2. Setting an environment variable EDITOR to the editor you want to use.

The oa\_pref option is checked before the environment variable. Note that the oa\_pref option/EDITOR variable **should be set to a filename** and the editor should always start another window.On windows this will always be the case. However, on unix if you just set the editor to /usr/bin/vi then this would try to open vi in the command/xterm window you started PRIMER (or the shell) from. This can cause problems (and it would definitely cause a problem if you had started primer by clicking on an icon as there is no xterm window!).

To get round this you can start vi in an xterm window by using a wrapper c-shell script and setting the oa\_pref option/environment variable to this. e.g. the following c-shell script will start vi in a new sterm window.


```
#!/bin/csh -f
xterm -title "Edit PRIMER comments" -e vi $1
```


This technique can also be used if you need to pass other command line options to your editor.

Editors such as dtpad (/usr/dt/bin/dtpad) open a new window so that is OK.

Versions prior to PRIMER 10.0 would not allow you to do other operations while editing a file. This restriction has since been removed.

[Previous](temporarily-suspending-the-transformation-on-an-include-transform.md)  |  [Next](reading-include-files-after-the-end-keyword.md)