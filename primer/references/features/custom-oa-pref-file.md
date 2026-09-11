####  Custom oa_pref File

On start up PRIMER reads the system oa\_pref file (in the $OA\_INSTALL directory) and then the home oa\_pref file (in the home area) and finally any oa\_pref file in the current working directory (which is an uncertain concept on windows machines). The last preference file may be considered to be a custom pref file. PRIMER now has a more effective way of handling these which disposes of the need to put the file into cwd.

![](../Storage/primer-22-1/primer_links/sect_3/images/custom_pref.gif)

Under **CHECK &gt; OPTIONS** there is a function for selecting and reading the custom pref file. If you have changed any check options previously in this session, it is advisable to run Refresh Preference settings to restore the settings to their state at start up. Note that reading a preference file will set to ON or OFF any preferences that are present in the file, but omitting a preference **does not turn it OFF** . Therefore, you m ust ensure that your any settings which are activated by home or system preference file are actively turned OFF in the custom pref file if you do not want them.

The custom pref file may be specified as a command line argument "-pref=/xxx/yyy/custom\_pref" (or whatever name), see [command line arguments](command-line-arguments.md#CommandLineArgs).

A custom file may be applied for model checking by using batch file. For example, the following command file will read the custom oa\_pref file "pr90.pref" from the system area

/pref system pr90.pref

/read dk pr90.key 1

/check full list model 1 apply

![](../Storage/primer-22-1/primer_links/sect_3/images/custom_pref2.gif)
[Previous](rules-check.md)  |  [Next](min-length.md)