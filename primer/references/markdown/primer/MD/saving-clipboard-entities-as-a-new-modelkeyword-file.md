###  Saving Clipboard Entities as a New Model/Keyword file

Sub sections of a model can be added onto the clipboard and then saved as a new model in PRIMER or written out as a new keyword file. The clipboard allows you the following options:
 
1. The clipboard contents can be written as they are.

2. Nodes and elements in the clipboard and those belonging to parts in the clipboard can be written.

3. Items referenced by entities in the clipboard can be included. In this case a complete stand alone model will be produced but it won't necessarily contain everything wanted.

4. Create sub-model from parts is designed to generate a model from selected PARTs (items of other type are ignored). It will propagate the part selection, through sets as necessary and give a model which contains items such as sets, contacts, database cross-section, etc which are deemed to belong with the parts. Additionally, the function will find PRIMER connections which attach to the parts and (optionally) export them to the sub-model.

When writing the clipboard contents to a new keyword file, you can access the writing options by clicking on the &gt;&gt;&gt; LS-DYNA output options button.

![](../Storage/primer-22-1/saving-clipboard-entities-as-a-new-modelkeyword-file/saving-clipboard-entities-as-a-new-modelkeyword-file-2024-04-11.png)

[Previous](referencing-of-clipboard-items.md)  |  [Next](renumbering-of-clipboard-entities.md)