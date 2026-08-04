####  "oa_pref" naming convention and locations

The file is called "oa\_pref", optionally with a leading "." (.oa\_pref) on Unix systems.

It is looked for, and read if found, in all of the following places in the order given:

* The top level configuration directory **$OA\_ADMIN\_xx** (where xx = 22 for release 22 , etc)
* The installation directory $OA\_INSTALL
* The user's home directory: $OA\_HOME if set, otherwise $HOME (Unix/Linux) or %USERPROFILE% (Windows)
* The current working directory
* from any directory of the user's choosing - see [custom oa_pref file](rules-check.md#customcheck)

Files do not have to exist in any of these locations, and if none exists the programme defaults will be used.

If the same preference is set in more than one place the last occurence will dominate, thus a setting read from a pref file in the user's home directory will over-rule a setting in a pref file in the installation directory.

That said, preferences (excepting those that control the graphics) in the higher level directories may by [locked](oa-pref-file-syntax.md#lock_pref)by using # instead of \* in the [syntax](oa-pref-file-syntax.md#oa_syntax). In this case the locked setting will win.

#####  On Unix and Linux:

>  
> $HOME on Unix and Linux is usually the home directory specified for each user in the system password file. 
>  
> The shell command " printenv " (or on some systems " setenv ") will show the value of this variable if set. 
> If not set then it is defined as the " ~ " directory for the user. The command " cd; pwd " will show this.
> 

#####  On Windows:

>  
> %USERPROFILE% on Windows is usually:
> 

     * Windows XP: C:\Documents and Settings\ *&lt;user id&gt;* \
     * Vista/W7: C:\users\&lt; *user id* &gt;  
 
Issuing the " set " command from an MS-DOS prompt will show the value of this and other variables.

Generally speaking you should put

* Organisation-wide options in the version in OA\_INSTALL,
* User-specific options in OA\_HOME if you wish to define it, otherwise $HOME / $USERPROFILE
* Project-specific options in the current working directory.

[Previous](the-oa-pref-preferences-file.md)  |  [Next](re-reading-the-oa-pref-file.md)