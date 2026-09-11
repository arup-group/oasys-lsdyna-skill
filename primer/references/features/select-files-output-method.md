##### Select Files Output Method

If no includes are modified, it is recommended that you select
Master file only
under the
\*INCLUDE
heading.

If any renumbering has occurred or you made any changes specific to the content of any individual Include file it is recommended that you select Select files under the \*INCLUDE heading. This will allow you to save both the Master file and the modified Include files without wasting time writing includes that have not changed.

When you have completed all pre-output checks, press APPLY to map the write selected panel.

FIND MODIFIED will run the model modified function and red-light any modified includes. These will also be selected for write along with the master file. If the modified include is a child of another, the parent, grandparent, etc include will also be selected.

You may manually select/deselect files by clicking on the grey box to their left. A tick will appear in the selection box and the options
**FILE FORMAT**, SUB-DIR and RENAME will be offered.

If you click on the **FILE FORMAT** popup, a panel appears on screen which can be used to select different formats (ASCII/Binary/Compression) per include file while writing out. The file format panel contains 3 sections: Format, Compression and Apply to.

1. The Format section is used to select the options to write out the include file in either ASCII or Binary or in its original format.
2. The [Compression](https://help.oasys-software.com/articles/primer-22-0/compress-files/a/compress_files) section provides the options to compress and write out the include file into .gz and .zip formats.
3. The Apply to section determines the scope of the selected Format and Compression options.

By default, the settings in the **Format** and **Compression** sections for all include files follow the options chosen in the [Pre-out: Compress tab](https://help.oasys-software.com/articles/primer-22-0/pre-out-compress-tab). The default setting for the **Apply to** section is **"This"**, meaning the selected Format and Compression options apply only to the currently selected include file.

In the Apply to section, you can also choose:

* **"This and Children"** – applies the selected Format and Compression options to both the parent include file and all its children.
* **"Children"** – applies the selected Format and Compression options only to the children of the parent include file, not the parent itself.

If you select SUB-DIR the modified file will be written to a newly created sub-directory (INCL, INCL\_1, etc.) in the directory where the Master model is saved.

If you select RENAME you have the opportunity to specify the name and/or path of the selected file. The text box will always display the full path of the file, but if you may have selected the *Relative option* from the previous panel this will be used. If the background of the text box is red, it indicates that a file overwrite will be incurred. If the background is bright orange it indicates that you do not have permission to write the file (either the directory or the filename is protected) and the "APPLY" button will be greyed until you deselect the include.

Some tools exist to help renaming of multiple files.

First free name will increment the name of each file that is selected for overwrite until a free name is found, e.g. file\_aaa will become file\_aaa\_001, file\_bbb\_002 will become file\_bbb\_003. This may leave filenames at different indices.

Highest free name will determine the highest index of selected files, increment until an index is found at which all files have free names and set them, e.g all files will assume index \_003. This may be preferred if you want to keep files at same index.

Note the original file names can be restored by simply pressing RENAME

Once you have selected all files to write, press APPLY to start the write process.
 ![](../Storage/primer-22-1/primer_links/sect_3/images/include_file_02.jpg)[Previous](output-of-include-path-cards.md)  |  [Next](include-files-and-compression.md)