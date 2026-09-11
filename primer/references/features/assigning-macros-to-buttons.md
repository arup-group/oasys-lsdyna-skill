###  Assigning Macros to Buttons

When PRIMER starts it automatically looks for macros in the directories:

* $OA\_ADMIN/primer\_library/macros (if $OA\_ADMIN is defined)
* $OA\_INSTALL/primer\_library/macros
* $OA\_HOME/primer\_library/macros

Each macro that is found is assigned to a button in the macros panel. The text that is shown on the button is read from the MacroName() command at the top of the macro. This is automatically added by PRIMER when you record a macro if you enter some text in the Name textbox. Additionally hover text for the button is read from the MacroDescription() command at the top of the macro. This is automatically added by PRIMER when you record a macro if you enter some text in the Description textbox.

The directory that PRIMER looks in for macro files can be changed in the oa\_pref files in $OA\_ADMIN, $OA\_INSTALL and $OA\_HOME by using the macro\_directory preference.

![](../Storage/primer-22-1/primer_links/sect_6/macro/macro_dir_pref.gif)

For example if you change the macro\_directory preference in the oa\_pref file in the $OA\_INSTALL directory to /test/primer\_macros then PRIMER will look for macro files in the directories:

* $OA\_ADMIN/primer\_library/macros (if $OA\_ADMIN is defined)
* /test/primer\_macros
* $OA\_HOME/primer\_library/macros

[Previous](assigning-macros-to-shortcut-keys.md)  |  [Next](limitations.md)