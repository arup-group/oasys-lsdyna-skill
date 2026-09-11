#####  Machine: Operating System Dependent Syntax

| The filename syntax used can be one of Native , Unix or Windows :<br><br>| **Filename syntax** | **Typical result** |<br>| --- | --- |<br>| Unix (Linux) | /home/users/my\_model/INCL/a.key |<br>| Windows | C:\users\my\_model\INCL\a.key |<br>| Native | Detects the type of this machine and uses the relevant option above | | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2f.png) |
| --- | --- |

Users running in a cross-platform environment, typically Windows on the desktop and Linux on a remote cluster, may also wish to use PRIMER 's drive mapping options. These allow specific Windows drive letters A to Z to be mapped onto Unix-style pathnames, permitting "mixed" syntax to be used on both input and output.
 
See the oa\_pref options
 
primer\*drive\_a etc 
 primer\*output\_os
 
in [Appendix M](m-summary-of-oa-pref-command-line-and-environment-variable-settings.md#dialoguecommands)
 
For example in the oa\_pref file you might map the windows " S " drive to correspond to the unix directory " /data " thus: **primer\*drive\_s: /data**
 
Thus an include file " /data/includes\_1/inc.key " (read in unix) will be referenced under the \*INCLUDE as " S:\includes\_1\inc.key " if the model in written out in WINDOWS format. Likewise files read in Windows versions may be converted to Unix format, the conversion is bi-directional.
The default setting NATIVE writes in the format appropriate to the machine. 
######  Windows vs Unix/Linux line endings 
 
There is a subtle difference between Windows and Unix/Linux text files that - extraordinarily - goes back to the days of teletype machines. Teletypes, being mechanical, treated [carriage return] and [line feed] characters as separate operations, since a return without a new line allowed lines to be over-typed.
 
Therefore the standard ascii text (sometimes referred to as MS-DOS) output on Windows operating systems terminates each line with the pair of characters [carriage return] [line feed], and PRIMER adheres to this convention when files are opened in Windows mode.
 
However on Unix/Linux systems text files end a line with just [line feed], implicitly assuming that each new line starts at the left hand margin and, again, PRIMER adheres to this convention.
 
For the most part this doesn't matter as PRIMER , and most other applications, will read files with either line ending syntax quite happily; moreover if you are working on a single operating system this is unlikely to trouble you. However if you are working in a cross-platform environment you may occasionally find that this affects you, for example:
 
* Text files written on Windows may be slightly larger than the supposedly identical file written on Linux because of the extra [carriage return] character at the end of each line.
* Some older Windows applications, eg Notepad, will not add the implicit [carriage return] when reading Unix/Linux format files. (However most others, eg Wordpad, read these files quite happily.)
* Some older Unix/Linux applications, eg vi (as opposed to vim), may show the superfluous (to them) [carriage return] character as a ^M symbol at the end of lines.

It is unlikely that you will encounter these problems, but if you do hopefully the explanation above will help. If you need more help please contact Oasys Ltd Support for advice.
 [Previous](include-filename-syntax.md)  |  [Next](output-of-include-path-cards.md)