###  Compiling and Running a Script

| ![](../Storage/primer-22-1/primer_links/sect_10/script_1.png) | | Run | Will both compile and run the script unless it contains syntax errors, in which case it stops with an error message when compilation fails. |<br>| --- | --- |<br>| Debug | Starts the JavaScript debugger, [JaDe](../../common_manual_files/jade/jade.htm) to debug the script. |<br>| Check | Only compiles the script, reporting any errors found, and does not run it. |<br>| Encrypt | A script can be encrypted so that the source code is hidden but the script can still be run (when compiling and running the script PRIMER decrypts the file in memory). Once encrypted the source code cannot be retrieved by an ordinary user so make sure that you keep the original file somewhere safe. As a last resort contact Oasys Ltd Support, who can decrypt the script if required. <br>If a script is split up into separate files by Use the files are all combined together into the main file before encrypting. |<br>| Merge | If a script is split up into separate files by Use the files are all combined together into a single file. This may be useful if you want to give the script so someone else and you do not want to have to give lots of different files. |<br>| GUI Builder | Opens the [GUI Builder](../../common_manual_files/js_gui_builder/js_gui_builder.htm)to interactively build GUIs for your script. |<br>| Running | Enables you to view (and kill) any scripts that are currently running | |
| --- | --- |

Prior to version 22 a memory textbox was available to set the memory allocated for garbage collection in the JavaScript engine. This has been removed in version 22 as the memory is now automatically expanded as required. Please see the [garbage collection section](setting-the-garbage-collection-memory-size.md#gc_size) for more details.

Initially the Run , Debug ... buttons will be greyed out. If you type a script location into the text box or select the location using the 'folder' button they will be enabled. Alternatively left clicking on a script in the tree will automatically run the script. Right clicking on the script will bring up a popup menu with the Run , Debug ... options.

### Knowing which scripts are running

![](../Storage/primer-22-1/primer_links/sect_10/running_scripts.png)When scripts are running in PRIMER, they are shown in the Running submenu.

Use the Running button to toggle between the list of scripts that are currently running, and the tree of available scripts.

####  

To kill/terminate a running script, highlight the script(s) in the tree and press Kill.

Alternatively, to kill all the scripts that are currently running use Kill all.

#### 

#### 

#### File encodings for scripts

Version 10.0 of PRIMER introduced the ability for unicode text to be used on widgets created in a script. Previous versions of PRIMER only supported English text so the default ASCII encoding was used for script files (this is still the default encoding for script files).

If you want to use unicode text in widgets then you must use a file encoding that is capable to representing the unicode 'characters' you require. The File encoding popup allows you to change the file encoding used when reading the script file. PRIMER supports the following file encodings:

| **Encoding** | **Description** |
| --- | --- |
| LATIN-1 | Default 'ASCII' encoding |
| BIG5 | Taiwan/Hong Kong (traditional) |
| EUC-CN | Extended unix code (Simplified Chinese) |
| EUC-JP | Extended unix code (Japanese) |
| EUC-KR | Extended unix code (Korean) |
| GB | Chinese (simplified) |
| GBK | Chinese |
| ISO-2022-CN | Chinese |
| ISO-2022-CN-EXT | Chinese (extended) |
| ISO-2022-JP | Japanese |
| ISO-2022-JP-2 | Japanese (extended) |
| ISO-2022-KR | Korean |
| JOHAB | Korean |
| SHIFT-JIS | Japanese |
| UTF-8 | Should NOT have a byte order mark (BOM). |
| UTF-16 | Should have a byte order mark (BOM). If not present assumes big endian |
| UTF-16LE | Little endian with or without byte order mark (BOM) |
| UTF-16BE | Big endian with or without byte order mark (BOM) |
| UTF-32 | Should have a byte order mark (BOM). If not present assumes big endian |
| UTF-32LE | Little endian with or without byte order mark (BOM) |
| UTF-32BE | Big endian with or without byte order mark (BOM) |

Please contact Oasys Ltd Support if you have problems or require another encoding to be supported.

To show the unicode text the appropriate font must be used. This can be set using the preferences primer\*cjk\_unix\_font and primer\*cjk\_windows\_font .

[Previous](using-javascript-in-primer.md)  |  [Next](dealing-with-errors-in-scripts.md)