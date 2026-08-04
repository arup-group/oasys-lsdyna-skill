###  Error vs Warning: User Configuration

By default PRIMER offers two levels of configuration - error and warning. We have assigned "error" status to, cases where the error will prevent a model initializing, is likely to result in a model failing to run to completion or to give sensible results and those where a user defined criterion is infringed.

We have assigned the less severe "warning" status to cases which will not stop a model running but could have an adverse affect on the result.

This is not an exact science. So users now have been provided with the ability to configure errors for themselves. Within PRIMER the any existing error can be given user status which will over-ride the default. Additionally a string may be attached to the error which can be identified in the output.

The implementation is as follows:

Set up a comma separated error config file which consists of one line per error in the format - error tag, user config, optional extra comment, e.g.

| JNTC\_13, ERROR, FATAL ERROR |
| --- |
| JNTC\_14, ERROR, FATAL ERROR |
| JNTC\_15, ERROR, FATAL ERROR |
| JNTC\_16, IGNORE |

The **error tag** is the unique code which identifies the error and can be displayed on the error tree (you need to have a model in which the error exists and to activate show tags on the error tree). The **user config** may be ERROR, WARNING or IGNORE which will determine how the error will be displayed in PRIMER (if at all). The **optional extra comment** will be printed in the error summary output file and may be detected by your own process

Define the oa\_pref setting: **primer\*error\_configuration\_file: /path/filename.**

| ![](../Storage/primer-22-1/primer_links/sect_3/images/error_config.gif) | If the error file exists PRIMER will read it on start up and report this in the dialogue box. |
| --- | --- |

The error config file may be edited in a text editor by pressing Open Error configuration File .

![](../Storage/primer-22-1/primer_links/sect_3/images/error_config_edit.gif)

Creation/edit of this file may now be managed using Configure error option on the error tree available when you click on an error message.

If you don't have a configuration file one will be created in your home area called "error.config". All subsequent edit will apply to this file.

A message may be promoted from warning to error, demoted from error to warning or suppressed altogether by selecting PRO/DEMOTE or SUPPRESS

![](../Storage/primer-22-1/primer_links/sect_3/images/tree_configure.gif)

![](../Storage/primer-22-1/primer_links/sect_3/images/tree_configure2.gif)

When you [write](keyout-error-check.md#keyout_error_check) an error file (using list function at top of error tree or otherwise), the extra message is included and can be detected by the controller.

The check listing can be written by using using a command file and running PRIMER in batch mode.

Users can then use their own process to detect the presence of significant strings (such as "FATAL ERROR" in this example) and take the appropriate action.

[Previous](fasttcf-check.md)  |  [Next](blocking-checks-on-individual-items.md)