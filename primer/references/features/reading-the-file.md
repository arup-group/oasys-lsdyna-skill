####  Reading the File

Pressing APPLY will start reading the file. How the file is read is dependant on the file format chosen: PRIMER spotweld [format](primer-spotweld-file-format.md#format), Catia spotweld [format](catia-spotweld-file-format.md#catia_format) or Custom format.
 
##### PRIMER spotweld file
 
PRIMER will read the first 50 lines of the file and put a preview on the screen.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_4.gif)
 
#####  XML connection file

From version 9.3 PRIMER can use a new xml format for connections. This contains more information than the PRIMER spotweld file and can be used to describe bolts and adhesive lines as well as spotwelds. Each connection entry consists of connection type, point (or line info) and a list of the layers to be connected. A layer is typically a part, but it may consist of multiple parts, see [modifying connection layers](modifying-connection-data.md#modifyconnectlayers).

Layers provide a powerful way of ensuring that correct connectivity in a model is achieved, as a connection will only be passed as valid (or realized) if it successfully joins all the layers in its definition.

For spotwelds, the file includes the spotweld part ID, the FE type (beam, solid or multiple solids) and the diameter (for solid welds). For bolts, FE type is defined as NRB or merge (for these an optional rigid material id may be given) and the diameter. For adhesives, adhesive width, number of elements across the width and element length are stored. Also for adhesive, the part ID of the solids in the connection are stored, along with additional information for the path of the adhesive.

Prior to read, PRIMER will scan the file to check if any required information is missing (e.g. part ID or diameter), and you will be able to supply this to the edit panel. Such information will **only** be used for connections which have parameters missing in the xml data. See [Choosing part for beams/solids and filename](choosing-part-for-beamssolids-and-filename.md#choosingpart) for more details.

On completion of read, if any connections have not been made they will be put on the [connection table](connection-table.md) for you to investigate and fix.

For models with existing connections, the xml connection file may be written out from the connection table using the "Update & write to file" function.

For more information on the format see the [Spotweld file formats section](primer-spotweld-file-format.md).

#####  Catia spotweld file

PRIMER will read the Catia spotweld file automatically and go straight to [step 7](controlling-suppression-of-text-box-warnings.md#warnings) at the end of the reading process. The format of the file is set within PRIMER and therefore it is important to check that the Catia weld file matches the [Catia format](catia-spotweld-file-format.md#catia_format)set by PRIMER.

#####  UG spotweld file

PRIMER will read the UG spotweld file automatically and go straight to [step 7](controlling-suppression-of-text-box-warnings.md#warnings) at the end of the reading process. The format of the file is set within PRIMER and therefore it is important to check that the UG weld file matches the [UG format](ug-spotweld-file-format.md#ug_format)set by PRIMER.

#####  VIP spotweld file

PRIMER will read the VIP spotweld file automatically and go straight to [step 7](controlling-suppression-of-text-box-warnings.md#warnings) at the end of the reading process. The format of the file is set within PRIMER and therefore it is important to check that the VIP weld file matches the [VIP format](vip-spotweld-file-format.md#vip_format)set by PRIMER.

#####  Master connection file

PRIMER will read the Master Connection File (MCF) automatically and go straight to [step 7](controlling-suppression-of-text-box-warnings.md#warnings) at the end of the reading process. The format of the file is set within PRIMER and therefore it is important to check that the MCF matches the [MCF format](master-connection-file-mcf-format.md#mcf_format) set by PRIMER.
 
##### Custom format 
 
If the file is a custom format, PRIMER will ask you a series of questions to determine the format of the file. Once the format has been determined you will be able to read the file.

| Step 1: Fixed/Delimited  <br>The first step is to determine the format of the file. PRIMER will try to read 2 types of files:<br> <br>Files that have fields of fixed widths (these are like the fields in Ansys LS-DYNA keyword files that are generally 10 characters wide).<br> <br>Files that have fields that are separated by a specific character such as a comma. An example of a file like this would be a CSV file produced by a spreadsheet program.<br> <br>PRIMER shows a preview of the file at the bottom of the panel. You can use this to view the file and determine which of the 2 formats best describes the file.<br> <br>Once you have chosen the format that best describes your file press NEXT &gt; to go onto the [next step](reading-the-file.md#step2). CANCEL will return you to the [main screen](CONTROL%20%20Defining%20Analysis%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Control%20Cards..html#mainpanel). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_5.gif) |
| --- | --- |

| Step 2: Comment lines  <br>The second step is to determine if any lines in the file should be treated as comment lines and skipped. This is like comment lines in a Ansys LS-DYNA keyword file that can begin with a '$' character.<br> <br>Once you have chosen the comment setting press NEXT &gt; to go onto the [next step](reading-the-file.md#step3). To go back to the [previous step](reading-the-file.md#step1) press &lt; PREV. CANCEL will return you to the [main screen](CONTROL%20%20Defining%20Analysis%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Control%20Cards..html#mainpanel). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_6.gif) |
| --- | --- |

| Step 3: Skip strings and characters  <br>The third step is to determine if any lines in the file that contain specific strings or characters should be skipped.<br> <br>Once you have chosen the string and character settings press NEXT &gt; to go onto the [next step](reading-the-file.md#step4). To go back to the [previous step](reading-the-file.md#step2) press &lt; PREV. CANCEL will return you to the [main screen](CONTROL%20%20Defining%20Analysis%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Control%20Cards..html#mainpanel). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_7.gif) |
| --- | --- |

| Step 4: Continuation lines  <br>The fourth step is to determine if spotweld data can continue onto a second line. It is strongly recommended that you have one line per spotweld. However, if spotweld data can continue on to a second line PRIMER will try to read it with these settings.<br> <br>Once you have chosen the continuation setting press NEXT &gt; to go onto the [next step](reading-the-file.md#step5). To go back to the [previous step](reading-the-file.md#step3) press &lt; PREV. CANCEL will return you to the [main screen](CONTROL%20%20Defining%20Analysis%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Control%20Cards..html#mainpanel). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_8.gif) |
| --- | --- |

| Step 5: Choosing delimiters  <br>The fifth step is only done if you are reading a file in [delimited format](reading-the-file.md#step1). You need to tell PRIMER what character(s) to use as field delimiters. Additionally there is a switch to treat consecutive delimiters as one delimiter. This is most commonly used when the 'space' character is used as the field delimiter. If some of the fields are separated by more than one 'space' then PRIMER will treat it as a single 'space'.<br> <br>Once you have chosen the delimiter setting press NEXT &gt; to go onto the [next step](reading-the-file.md#choosefields). To go back to the [previous step](reading-the-file.md#step4) press &lt; PREV. CANCEL will return you to the [main screen](CONTROL%20%20Defining%20Analysis%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Control%20Cards..html#mainpanel). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_9.gif) |
| --- | --- |

###### Step 6: Choosing fields
 
The sixth step allows you to choose which fields are which. PRIMER shows a preview (the first 50 lines) of the file showing how it will decode the fields from the settings you have chosen in the previous steps.
 
**Choosing field types**
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_10.gif)
 
The image above shows the fields that PRIMER has read. If it is incorrect you can go back and change the settings as necessary. In this example the fields are:

| **Field** | **columns** | **description** |
| --- | --- | --- |
| 1 | 1-10 | Skip this text |
| 2 | 11-20 | Weld ID |
| 3 | 21-30 | Skip this text |
| 4 | 31-40 | X coordinate |
| 5 | 41-50 | Y coordinate |
| 6 | 51-60 | Z coordinate |
| 7 | 61-70 | Skip this text |
| 8 | 71-80 | Panel ID 1 |
| 9 | 81-90 | Panel ID 2 |

| Initially all the fields are &lt;UNSET&gt; . Use the popup to change the field to the required type. For example to change field 1 to 'skip this field':<br> <br><br>| ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_10a.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_11.gif) | ![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_12.gif) |<br>| --- | --- | --- |<br>| Field is initially unset | Use the popup and select Skip field | Field is now set to Skip field and coloured to show it is set | |
| --- |

Repeat this until all the fields have been set to the required values. You **MUST** define the X coord , Y coord , Z coord and Part ID s.

![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_4.gif)
 
**Choosing field widths**
 
In the example image below the fields are not just 10 columns wide. We need to change the column widths.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_13.gif)
 
Field 1 should be columns 1-5, not 1-10. To change this you can either type in the new column numbers in the blue boxes or you can drag the columns to the correct sizes. The yellow bars enable you to drag the columns by clicking on one of them with the mouse and dragging it to the left or right until it is in the correct place.

![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_14.gif)

Repeat this process until all the fields are the correct width

![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_19.gif)
 
The [field types can then be chosen](reading-the-file.md#choosefieldtype)as necessary.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_20.gif)
 
###### Step 7: Warnings and errors after reading the file
 
After PRIMER has finished reading the spotweld file it will display a listing panel giving information on the welds it has not been able to create.
 
![](../Storage/primer-22-1/primer_links/sect_6/connection/read_weld_21.gif)
 
PRIMER will also do a check of all the welds that it has created to see if any are [too close together](other-options-used-when-checkingcreating-connections.md#otheroptions) (the pitch between the welds is too small).

######  Step 8: Fixing bad welds

If any of the welds in the file could not be created PRIMER will put them onto the [connection table](connection-table.md)and you can use it to visualise and fix the welds. For more details see .

[Previous](options-0.md)  |  [Next](writing-spotwelds-to-file.md)