####  The interactive Preferences Editor

You are free to edit oa\_pref files by hand, but there is an interactive "Preferences Editor" that may be called from within PRIMER that makes the job much easier.

It is started by Options, Edit Prefs:

![](../Storage/primer-22-1/primer_links/appen_13/app_v_5.gif)

The preferences editor reads an XML file that contains all possible preferences and their valid options, and allows you to change them at will. In this example the user is changing the background colour in PRIMER.

Note that changes made in the Preferences editor will not affect the current session of PRIMER, they will only take effect the next time it is run.

If you have write permission on the oa\_pref file in the $OASYS directory you will be asked if you want to update that file, otherwise you will only be given the option of updating your own file in your $HOME / $USERPROFILE directory.

In this example the user is changing the background colour.

The option is "active" (ie present in the oa\_pref file) and currently is set to BLACK.

Usage is:

* Select an option in the Tree on the left hand side
* Make it active / inactive
* If active select a value from the popup, or type in a value if necessary

The colour of the highlighting in the left hand side tree is significant:

| Green | Means that the option has been read from your $HOME file. |
| --- | --- |
| Red | Means that the option has been read from the $OASYS file. |

In either event, regardless of the data source, the updated option will be written to the file chosen when you started the preferences editor.

Because of the order of file reading ( [see above](oa-pref-naming-convention-and-locations.md#oa_naming)), and option read from the master $OASYS file, amended, and written to your local $HOME file will take precedence when you next run PRIMER.

![](../Storage/primer-22-1/primer_links/appen_13/app_v_6.gif)

[Previous](oa-pref-file-syntax.md)  |  [Next](oa-pref-arguments-valid-for-primer.md)