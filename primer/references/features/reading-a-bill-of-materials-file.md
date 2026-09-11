###  Reading a Bill of Materials File

####  Selecting the file

The initial Bill of Materials screen is shown in the figure below.To select the Bill of materials file either type the name into the blue File: box or press the ? button to bring up the file selection panel.

Until a file name is given the APPLY button will not be active. When the button is active, pressing it will scan the file and any [comment lines can be selected](reading-a-bill-of-materials-file.md#bomcomments).

In the image on the right Auto-detect columns is turned ON . PRIMER will try to [recognise each field](file-format.md#columntitles) by using the [column titles](file-format.md#stdheaders).

If Renumber NODES/ELEMENTS/MASSES on Part is active and label ranges are defined for this part, the renumbering function will be activated. On large models this may slow the read of the BOM considerably. Label ranges may overlap one another.

Two methods are available for handling materials, section or hourglass cards when these are shared by more than one part. The default option set MID/SID/HGID will set the part to reference the specified material, etc. It will the only adjust the material title, section properties, etc. if no other part references it. The option Modify/Create Matl/Sect/Hgls will always make a material/section/hgls card with the specified data, creating a new one and ignoring the specified ID, if this proves necessary, because another part refers to that card.

If the material, section and hourglass card for each part are kept unique , both methods will give the same result.

The option Set MID on Part. Create Sect/Hgls if set will over-ride the other. The material on the part card will be set to match the (first found) material of the given name or the given material id if no name is specified. A section card will be created at the same id as the part and the gauge,etc will be updated with the given data. Similarly hourgalss cards will be created if the data is non-zero or one previously existed.

![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_001.gif)

The radio buttons enable/disable error trapping when reading the part number field. In the [example bill of materials](file-format.md#bomexample) file in the previous section the line


```
Part No,Title,Part ID,Material,Supplier,Gauge,Part mass
```


is not a comment line. If this line is read as an actual line of data an error could occur as instead of reading a number for the part ID, the string 'Part ID' would be read instead. 
If 'Skip any lines which have a blank or badly formatted PID' is selected, the line would be skipped, a warning printed and the read will continue. 
If 'Treat a blank or badly formatted PID as an error' is selected, this would be treated as an error and the read will stop.
 
#### Comment lines
 
Once the bill of materials file is selected it is scanned and a preview of the file is shown (the first 50 lines of the file are shown).
 
This preview can be used to help answer the questions which PRIMER asks. The scrollbars can be used to scroll the preview up and down and from left to right.
 
The default is not to skip any lines. To skip the comments the switch must be set to Yes. If the file does not contain any comments this step can be skipped.
 
To cancel reading and return to [file selection](reading-a-bill-of-materials-file.md#bomselectfile) press CANCEL .
 
To go on to the next step ([skipping specific lines](reading-a-bill-of-materials-file.md#bomskiplines)) press NEXT &gt;
 
By default comment lines can begin with a $ or a #. Type the characters that you want comments to begin with into the blue box.
 
In the file preview any lines that will be treated as comments are shown in grey text instead of white text.
 
![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_3.gif)
 
#### Skipping specific lines
 
In this example we want to skip the line that begins
 
Vehicle X, Bill of Materials
 
The default is not to skip any lines containing specific strings. To skip the line the switch must be set to Yes. If no lines need to be skipped this is not needed and can just be left at the default value.
 
To cancel reading and return to [file selection](reading-a-bill-of-materials-file.md#bomselectfile)press CANCEL .
 
To go back to the previous step ( [comment lines](reading-a-bill-of-materials-file.md#bomcomments)) press PREV&gt;
 
To go on to the next step ( [selecting delimiters](reading-a-bill-of-materials-file.md#bomdelimit)) press NEXT &gt;
 
![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_5.gif)
 
A line can be skipped that either contains a specific character or a specific string. Type the characters or strings into the blue boxes. Text is case sensitive.
 
In this example we have chosen to skip any lines that contain the string ' Bill of Mat '.
 
In the file preview any lines that will be skipped because they contain specific strings or characters are shown in grey text instead of white text.
 
![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_7.gif)
 
#### Selecting delimiters
 
In this example the fields are separated by commas. e.g.
 
Part No,Title,Part ID,...
 
The default delimiter is a comma so this is OK for this example. If the data is separated by another character it can be chosen here. Other buttons are available for common delimiting characters. If your data is separated by a character that is not in the list press the Other button and type the character in the box. A space cannot be used to separate fields.
 
To cancel reading and return to [file selection](reading-a-bill-of-materials-file.md#bomselectfile)press CANCEL .
 
To go back to the previous step ( [skipping specific lines](reading-a-bill-of-materials-file.md#bomskiplines)) press PREV&gt;
 
To go on to the next step ( [defining fields](reading-a-bill-of-materials-file.md#bomfields)) press NEXT &gt;
 
![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_8.gif)
 
#### Defining fields
 
This panel enables you to choose which columns of the bill of materials to use and what the columns mean. A preview of the bill of materials is shown below.
 
![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_9.gif)

| ![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_10.gif) | The lines that are going to be skipped are shown in grey rather than white. The data is shown in columns to make it easier to read. If there are more than 10 columns a scrollbar is used to view the other columns. To be able to do anything useful PRIMER needs to know which columns you want to use and what those columns mean. This is done by using the Field popup buttons in each column. <br>The default action for each field is 'Skip field'. This can be changed by selecting any of the options from the popup. Once an action is selected the column will change colour and 'Skip field' will no longer be shown. <br>A field can be unset at any time. |
| --- | --- |

For example, if the field for column A is set to be 'PID' it will be coloured dark blue as shown below.

![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_11.gif)

At least the PID and one other field must be selected. The APPLY button will not be active until this is done. Once the button is active, APPLY will start reading the file and altering the selected fields.

In the following example the CAD part no, Part description, PID, Material title and gauge have been selected.

![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_13.gif)

Only the selected fields will be altered using the bill of materials. In the above example the CAD part no, Part description, Material title and gauge will all be altered as they have been selected. If only the PID and gauge were selected then only the gauge would change.

There are two options to select parts from BOM file to update (see below). 'All in file' option will allow you to update all the parts which have differing information to that in BOM file and 'Subset' will enable Select PART(s). The SKETCH will sketch just the parts that will be modified by clicking APPLY . Similarly the ONLY will display only the parts that will be modified by clicking APPLY .

![sketch](../Storage/primer-22-1/primer_links/sect_6/bom/sketch.gif)
 
#### Listing output
 
As the Bill of materials file is read messages are copied to a listing window.
 
![](../Storage/primer-22-1/primer_links/sect_6/bom/bom_14.gif)
 
This gives information about what the bill of materials is changing. If needed it can be saved to file by pressing the SAVE -&gt; FILE button.
 [Previous](initial-screen.md)  |  [Next](writing-a-bill-of-materials-file.md)