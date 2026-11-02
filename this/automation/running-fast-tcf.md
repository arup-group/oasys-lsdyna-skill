###  Running FAST-TCF

####  Automatic running

FAST-TCF is integrated into the T/HIS executable and can be accessed from the command line or SHELL.

**Command line syntax:**


```
<this executable> -tcf=<FAST-TCF input file> -start_in=<start directory> -exit-batch <thf file name>
```


e.g. this93.exe -tcf=side\_impact.tcf -start\_in=e:\side\_impact\run1 -exit run1.thf

The &lt;thf file file&gt;, -start\_in, -exit and -batch syntax are all optional.

**NOTES:**
 
* If no THF file is specified then T/HIS will search the directory for the latest one (\*.thf).
* If no THF file exists, then T/HIS will look for a d3thdt file (xtf file = xtfile).
* If this does not exist then no thf or xtf input filename is passed to FAST-TCF, and the input file is defaulted to ASCII
* The program runs in any directory you like (via the -start\_in command line option). The FAST-TCF output files are created in that directory, and files written out are relative to that directory.

Instead of opening a single model multiple models can be read using the command line option
 
&lt;this executable&gt; -tcf=&lt;FAST-TCF input file&gt; -start\_in=&lt;start directory&gt; -exit-batch -model\_list=&lt;file name&gt;
 
The -model\_list expects a text file with a list of filenames (1 per line) to read into model slots within T/HIS.

| e.g | e:\side\_imnpact\run1\run1.thf |
| --- | --- |
|  | e:\side\_imnpact\run2\run2.thf |
|  | e:\side\_imnpact\run3\run3.thf |
|  | e:\side\_imnpact\run4\run4.thf |

**SHELL operation:**
 
In SHELL, click the Options... button below the T/HIS icon. Select the input data file, FAST-TCF input script and any other required options as necessary. Press Run at the bottom of the panel to launch T/HIS and automatically run the FAST-TCF script.

####  Interactive running 
 
In the Tools menu within T/HIS, select the FAST-TCF option, then click on the Run tab in the sub-menu that appears. This brings up the following menu:

| The user can select the script file then with play the whole file through, or step through each command one by one.<br> <br>The FAST-TCF line appears in the top dialogue box, and the translated T/HIS line appears in the bottom box. The line about to be sent to T/HIS appears in red text.<br> <br>To end the script prematurely, hit the End button. | ![fasttcf_run](../Storage/this-23-0/this%20-%20links/sect_7/fig_run.gif) |
| --- | --- |

Previous: general-rules  |  Next: input-files-needed-and-output-and-intermediate-files-created