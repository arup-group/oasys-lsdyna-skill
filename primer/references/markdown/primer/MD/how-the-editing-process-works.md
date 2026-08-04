###  How the Editing Process Works

For each model that contains selected items PRIMER will write a "mini keyword file" and then launch a system editor session which opens this file.

The user can then inspect the keywords (ie read only) or update them, adding new keywords if desired. If the file is saved in its edited form then PRIMER detects this and reads it back into the model, updating any changed keywords and adding new ones.

This process is exactly the same as Text Edit when launched from an editing panel or the generic keyword editor, as described in [Text Edit Editing Keyword Data Externally](text-edit-editing-keyword-data-externally.md#text_edit_1). To avoid repetition you are referred to that section which covers:

* How to control what comments appear in the text file. By default these are verbose, but can be controlled by preferences.
* How to control which system editor is used, again controllable by preferences.
* How the fact that editor sessions are asynchronous is handled, in particular what happens if the model is deleted from PRIMER .

[Previous](selecting-the-items-to-edit.md)  |  [Next](limitations-text-edit.md)