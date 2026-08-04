####  Editing Multiple Items Using the Keyword Editor

| The example above describes how a single definition can be edited from a scalar PRIMER editing panel. It is also possible to Text edit multiple items by using the same function from the generic [Keyword Editor described](the-generic-keyword-editing-panel.md#keywordedit).<br>
<br>This works in exactly the same way, and is subject to the same rules and limitations below, except that<br>
<ul style="font-size: 14.6667px;"> <li>Multiple items can be exported to the external keyword file by selecting several rows for editing. In this example rows 2 to 14 inclusive will be exported for editing.<br><br></li> <li>Multiple items can be re-imported back into the model. Where labels in the external file match existing items in the&#160;PRIMER&#160;database then those items&#39; definitions will be replaced, where external labels do not match an existing definition then a new definition will be created. The number of items read in does not have to match the number exported.<br><br>Therefore it is possible to import multiple new entries into the model by this method, however the limitation that only those items of the current *Keyword will be considered still stands so, once again, this is not a generalised way of importing new model data.</li>
</ul> | ![](../Storage/primer-22-1/primer_links/sect_5/5a/multi_te.png) |
| --- | --- |

##### Consequences of Text Edit being an autonomous process

Because the text editing session is an autonomous process in a separate thread it does not "lock" (freeze) the PRIMER session in any way: in computer-speak the PRIMER process and its child text editing session are "asynchronous", and this has some consequences:
 
* If you open a PRIMER editing panel, launch the text editor, and then close the editing panel while the editor is still running there is no longer a "scratch" definition to be updated when you finally close the editor. PRIMER detects this situation, warns you and simply throws away any changes in the edited file without updating the model in any way.
* If you record a Macro that includes Text Editing sessions the macro will not "remember" when a particular session ended, and in fact it has no way of knowing what - if anything - happened in the text editor, or when. This means that when the macro is played back there is no way of synchronising text editor sessions with operations inside PRIMER , so if a macro implicitly contains the sequence: 

    * User starts editor panel in PRIMER
    * User launches text editor to modify the scratch definition
    * User exits text editor and changes are imported back into PRIMER

    The macro will not work as expected, since the 3rd step of editing text editor and importing changes will not take place (because the macro cannot replace the user and drive the external editor). 
 
For this reason it is recommended that you do not embed text editing sessions in macros

[Previous](editing-a-single-item.md)  |  [Next](airbag-airbag-control-volume-definitions.md)