###  Maintaining a Library of JavaScripts

When PRIMER starts it automatically looks for scripts in the directories:

* $OA\_ADMIN/primer\_library/scripts (if $OA\_ADMIN is defined)
* $OA\_INSTALL/primer\_library/scripts
* $OA\_HOME/primer\_library/scripts

Each script that is found is assigned to the tree in the script panel.

From version 12 PRIMER will also look in subdirectories and the directory names will be used to create branches in the tree view of the scripts.

The directory that PRIMER looks in for script files can be changed in the oa\_pref files in $OA\_ADMIN, $OA\_INSTALL and $OA\_HOME by using the script\_directory preference.

For example if you change the script\_directory preference in the oa\_pref file in the $OA\_INSTALL directory to /test/primer\_scripts then PRIMER will look for script files in the directories:

* $OA\_ADMIN/primer\_library/scripts (if $OA\_ADMIN is defined)
* /test/primer\_scripts
* $OA\_HOME/primer\_library/scripts

####  Using the "description:" comment at the top of a script to identify its purpose.

To help to identify scripts special comments are searched for in the top 20 lines of each script, and if description: is found, for example the comment line:

// description:  *Some description of the script's purpose*

Then the description line is shown as hover text when the mouse is placed over that script in the tree.

####  Using the "name:" comment at the top of a script to change its name

Normally the name shown for a script will be its filename, stripped of any leading pathname and trailing ".js" extension.

However if the string name: is found in the first twenty lines of the script, then the following name will be used instead. For example the line:

// name: temporar y

Will result in the script appearing with the name " temporary " in the JavaScript panel. This does not affect the actual name of the script, only the name shown in the tree

####  Using the "memory:" comment at the top of a script to change the initial garbage collection memory

Very occasionally the **initial** [memory required for garbage collection](setting-the-garbage-collection-memory-size.md#gc_size)needs to be changed.

If the string memory: is found in a comment on the first twenty lines of the script, then the size given will be used for the initial garbage collection memory. For example the line:

// memory: 50

Will result in the script **initially** using 50Mb for garbage collection memory. PRIMER will automatically expand the memory required for garbage collection as necessary. See [Garbage Collection Memory Size](setting-the-garbage-collection-memory-size.md) for more details.

####  Using the "encoding:" comment at the top of a script to change the encoding

By default the encoding used for scripts is LATIN1

If the string encoding: is found in a comment on the first twenty lines of the script, then the encoding will automatically be used for the script. The allowed values are UTF8 or UTF-8 for UTF- 8 encoding and ShiftJIS , Shift-JIS or sjis for Shift-JIS encoding.

For example the line:

// encoding: UTF8

Will result in the UTF-8 encoding being used for the script.

####  Using the "module:" comment at the top of a script for ES6 modules

PRIMER has to compile scripts that use [ES6 modules](ecmascript-6-modules.md#ES6_modules)differently to 'normal' scripts. If a script has the extension .mjs then PRIMER will automatically compile the script to use [ES6 modules](ecmascript-6-modules.md#ES6_modules). Alternatively, if the file has a different extension, the module comment can be used to tell PRIMER that this file needs to be compiled to support [ES6 modules](ecmascript-6-modules.md#ES6_modules).

If the string module: TRUE is found in a comment on the first twenty lines of the script, then the script will be compiled with [ES6 module support](ecmascript-6-modules.md#ES6_modules).

For example the line:

// module: TRUE

Will result in the script being compiled with [ES6 module support](ecmascript-6-modules.md#ES6_modules).

####  Using the "hide:" comment at the top of a script to hide it from the tree

Normally all scripts that have an extension beginning with js will be shown in the tree. You may want to stop some scripts from being shown in the tree. For example if your script is broken up into 'include files' by using 'Use' then you may want to hide the includes any only show the main script. If the string hide: is found in the first twenty lines of the script, and the value is TRUE then the script will not be shown. i.e. the line:

// hide: TRUE

Will result in the script not being shown in the tree. Alternatively by convention any scripts which have the extension 'jsi' or 'jsm' will be hidden as they are assumed to be ''include' files or 'module' files.

####  Using the "folder:" comment at the top of a script to change which branch a script is shown in

When PRIMER searches the script directory it looks recursively through directories and by default the directories will appear as branches in the tree. You may want to change which directory a script is shown in. The special 'folder' comment can be used to do this. For example the line

// folder: occupant/test

Will result in the script being shown in the tree in branch occupant-&gt;test.

[Previous](assigning-javascripts-to-shortcut-keys.md)  |  [Next](showing-a-custom-tool-button-for-scripts.md)