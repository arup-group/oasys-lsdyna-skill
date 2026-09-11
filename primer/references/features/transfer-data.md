###  TRANSFER DATA

Transferring data between "source" (reference) and "target" models.

The TRANSFER\_DATA function is designed to copy properties into model A (the "target" model) from model B (the "source"). The intention is that a model which has had some of its content stripped by a journey through an external piece of software, for example during remeshing, can be re-united with its original properties in a simple operation. Alternatively models from diverse sources can be "married up" with standard definitions held in read-only files.

* Most of the parameters in this panel can be preset in the "oa\_pref" file - [see below](transfer-data.md#TransferDefaults).
* In addition this operation can be performed in dialogue-only mode, and hence in batch - [see Appendix L](the-dialogue-command-structure.md#ModelBasedCommands).

The function is invoked from the pop-up menu Other in the **Tools** panel.

| ![](../Storage/primer-22-1/primer_links/sect_6/transfer/transfer_2.gif)This figure shows the main TRANSFER\_DATA panel in its initial state.<br> <br>It is mandatory that you define the following parameters:<br><ul> <li> <span class="buttontext">Target model </span>(into which it is transferred) </li> <li> <span class="buttontext">Source model </span>(from which data is extracted) </li> </ul> <br>The source and target models must be different.<br> <br><br> <br>You may then define your Data type to transfer from the options below. Any permutation of these can be selected.<br> <br><br>| \*MAT | Structural materials |<br>| --- | --- |<br>| \*SECTION | Element sections |<br>| \*HOURGLASS | Hourglass definitions |<br>| \*TMAT | Thermal materials |<br>| \*EOS | Equations of state |<br><br> <br>Under further options, you may define one or more types for re-population of missing data from the following list.<br> <br><br>| DISCRETE | Spring/damper |<br>| --- | --- |<br>| JOINT | Joint props |<br>| WELD/RIVET | weld/rivet data |<br>| NODE\_SET | node set data |<br>| NODAL\_RB | nrb data |<br><br> <br>Once you have defined any one of these the APPLY button will become "live" and you will be able to proceed. However you should also consider the following settings:<br> <br><br>| [Match data](transfer-data.md#MatchData) | Determines how data in the source model is selected for transfer |<br>| --- | --- |<br>| [Destination](transfer-data.md#Destination) | Determines how the transferred data is treated and stored in the target model |<br>| [Name Matching](transfer-data.md#NameMatchingMethod) | If you are matching data by NAME (or BOTH ) then you should also consider which Name Matching Method to use. [Name matching rules](transfer-data.md#MoreMatchingRules)Explains the rules for case sensitivity, white space handling, etc when objects are matched by NAME . |<br>| [Superseded data](transfer-data.md#SupersededData) | Controls whether superseded (overwritten) objects in the target model are SAVE d or DELETE d. |<br>| [Status Feedback](transfer-data.md#StatusFeedback) | Controls how much visual and listing feedback about the transfer operation is given to the user. | |
| --- |

| Match Data to transfer by...  <br>There is a range of ways in which data can be matched for transfer: | ![](../Storage/primer-22-1/primer_links/sect_6/transfer/transfer_3.gif) |
| --- | --- |
| | LABEL | If the labels in source and target models match |<br>| --- | --- |<br>| NAME | If the name in the target model is equal to, or a subset of, the name in the source model. <br> <br>This requires that the objects to be matched have titles, which is possible using: <br> <br> * The \_TITLE keyword suffix in LS960 and above<br> * The $PR\_TITLE comment line in earlier versions |<br>| BOTH | Objects are matched first by LABEL, then by NAME |<br>| ALL | All data in the source model is transferred into the target. | |

| Destination for transferred data...  <br>When data is transferred from source to target you can control how it is treated and stored. | ![](../Storage/primer-22-1/primer_links/sect_6/transfer/transfer_4.gif) |
| --- | --- |
| | CS (Copy to Separate include file) | Moves all transferred data to a new include file called dt\_transfer\_from\_&lt; *source* &gt;.key |<br>| --- | --- |<br>| CO (Copy to Original include file) | All transferred data remains in the same include (or master) file as the original target data that has been overwritten. |<br>| CM (Copy to Master file) | All transferred data is moved into the master target file, regardless of its original location. |<br>| RO (Copy as read-only) | This assumes that the source file will be included verbatim in the ultimate keyword file that is analysed, so the following actions are taken: <br> <br> * Transferred data is placed into a special include file in the target model, marked as "read only".<br> * When the target model is eventually written out this file is not included.<br> * However the original &lt;source&gt; filename is referred to in an \*INCLUDE statement via its full pathname.<br> <br> <br>This means that the &lt;source&gt; file must be available on the computer that ultimately runs the analysis, using the same pathname. | |

| Name Matching Method...  <br>When objects are [matched by](transfer-data.md#MatchData) NAME (or BOTH ) the methods used to determine whether or not names match must be set. This option only becomes "live" when that is the case. | ![](../Storage/primer-22-1/primer_links/sect_6/transfer/transfer_5.gif) |
| --- | --- |
| | T\_IN\_S (Target IN Source) | The  ***target***  name must equal the  ***source***  name, or be a subset of it. For example: <br> <br> * Source name = " MAT\_123 "<br> * Target name = " 123 "<br> <br> <br>Would be matched, since " 123 " is a subset of " MAT\_123 " |<br>| --- | --- |<br>| S\_IN\_T (Source IN Target) | The  ***source***  name must equal the  ***target***  name, or be a subset of it. <br> <br>Therefore the example above would not be matched since " MAT\_123 " is not equal to or a subset of " 123 " |<br>| EITHER (T\_IN\_S or S\_IN\_T) | ***Source***  may be a subset of  ***target***  , or  ***target***  of  ***source***  , or they may be equal. <br> <br>Therefore the example above would be matched on the T\_IN\_S basis. |<br>| EXACT (Source == Target) | The  ***source***  and  ***target***  names must be identical. (No subset matching). |<br><br> <br><br>  More rules for name matching...  <br>When names are matched, by whatever method, the following rules also apply:<br> <br><br>| Case sensitivity | The matching process is always case-  ***in***  sensitive (case is ignored). <br> <br>Therefore " ABC " matches " abc " matches " AbC " matches " aBc " etc |<br>| --- | --- |<br>| Leading and trailing spaces | Leading and trailing "white space" is always removed before matching takes place. <br> <br>Therefore " ABC " and " ABC " will match. (But " ABC DEF " and " ABCDEF " will not - the spaces are embedded.) |<br>| Empty names | Names that are empty are always ignored. So unnamed objects will never be matched. | |

####  Superseded Data: what happens when target objects are to be overwritten.

Transferring data from source to target models means implicitly that the target data will be overwritten. You can choose to:

| SAVE | The original target data is copied to a new, unused label and is transferred to include file "dt\_renumbered.key". This new copy is not referenced by anything and can be removed by a [CLEANUP_UNUSED](clean-up-unused.md#642CleanupUnused)operation . |
| --- | --- |
| DELETE | The original target data is overwritten and lost permanently. |

####  Status Feedback: controlling visual and tabular feedback

A summary of what has been overwritten with what (by label) is always printed, together with totals, but you can choose to have further feedback:

| SKETCH | Sketches on the current image all objects that have been modified by the data transfer operation |
| --- | --- |
| PART\_STATUS | Produces a table (by label) of all parts that have been modified (or have had some attribute, eg material, modified); and also a table of those that are unchanged. |

| How data transferred by NAME gets special treatment  <br>When data is transferred by NAME it is possible that more than one object in the target model will match an object in the source model, in which case multiple copies of the source data will be transferred into the target model. For example consider the following case for materials where EITHER name matching is used: |
| --- |

| Original target model contents | Source model contents | Resulting output in target model |
| --- | --- | --- |
| MAT #1 "Steel 316s12" | MAT #1 "Aluminium" | MAT #2 "Generic steel" |
| MAT #2 "Steel to BS4360" | MAT #2 "Generic steel" | MAT #2 "Generic steel" |
| MAT #3 "Special steel for supports" | MAT #3 "Concrete" | MAT #2 "Generic steel" |

In this case all three target materials contain the word " steel ", so they will all be overwritten by material #2 ( Generic steel ) from the source model. This would leave three materials in the target model with the same label, so how is this resolved? What happens is this:

####  Every existing target object that is about to be overwritten has its properties copied to the highest object label + 1.

In this case since superseded data is to be SAVE d, before overwriting the "old" source material properties:

* Original target material #1 is copied to #4.
* Material #2 is copied to #5
* Material #3 is copied to #6

These new (#4 .. #6) definitions are not referenced by anything, and are placed into a separate include file. If they are not required a [CLEANUP_UNUSED](clean-up-unused.md#642CleanupUnused)operation will delete them.

####  Source object data is copied in verbatim

* Source material #2 is copied verbatim into target materials #1, #2 and #3
* At this stage there will be 3 materials in the target model all labelled #2 - clearly illegal

####  post-transfer check and sorting out takes place

Once all transfers by NAME have taken place then any clashes or illegalities in the target model are sorted out.

* Where any incoming label from a source object clashes with a pre-existing (but not overwritten) target object of the same label, then that original target object is re-labelled.
* Then a check for multiple instances of transferred in objects is made (which will all share the same label), and these are "collapsed" into a single definition.

In the example above the three target materials, all labelled #2, would be collapsed into a single material definition and all references to them (eg from \*PART cards) are implicitly also rationalised to reference this single material definition.

####  How are objects such as loadcurves which might be referenced by transferred data handled?

For example you might transfer a material which contains references to loadcurves in the source model.

In this situation these "supporting" objects are also transferred, although the logic for handling label clashes in the target model differs from the data above:

* If there is no label clash they are copied in "as is".
* If there is a label clash the original definition in the target model is renumbered to a free slot, and the new data is copied in.

This is different because although existing objects in the target model might be relabelled, they are not superseded.

####  Setting TRANSFER_DATA defaults in the "oa_pref" file

Most of the settings in the TRANSFER\_DATA panel can be pre-defined in the "oa\_pref" file. The following table shows the default settings, and the ways in which they can be modified in that file:

| Setting | Default value | "oa\_pref" file keyword | "oa\_pref" options |
| --- | --- | --- | --- |
| Target model | *Undefined* . But if only one model is present then this is assumed | n/a | n/a |
| Source model | *Undefined* | primer\*transfer\_source\_file: | *&lt;filename&gt;* |
| Data Type | *Undefined* | primer\*transfer\_data\_type: | <ul> <li>MAT </li> <li>SECTION </li> <li>EOS </li> <li>HOURGLASS </li> <li>TMAT </li> </ul> |
| Match By method | NAME | primer\*transfer\_match\_by: | <ul> <li>ID </li> <li>NAME </li> <li>BOTH </li> <li>ALL </li> </ul> |
| Destination Action | CS (Copy to Separate) | primer\*transfer\_action: | <ul> <li>CS </li> <li>CO </li> <li>CM </li> <li>RO </li> </ul> |
| Name Matching method | EITHER | primer\*transfer\_name\_match: | <ul> <li>T_IN_S </li> <li>S_IN_T </li> <li>EITHER </li> <li>EXACT </li> </ul> |
| Superseded data action | SAVE | primer\*transfer\_superseded: | <ul> <li>SAVE </li> <li>DELETE </li> </ul> |
| Feedback options | SKETCH (only in graphical mode)  <br>PART\_STATUS | n/a | n/a |

####  Performing TRANSFER_DATA operations in command-line mode

All the operations above can also be performed in command-line mode, and therefore also in batch. See [Appendix L](the-dialogue-command-structure.md#ModelBasedCommands) for more information about this.

[Previous](target-marker.md)  |  [Next](introduction-pedestrian-markup.md)