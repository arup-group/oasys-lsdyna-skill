###  Playing a Macro

| ![](../Storage/primer-22-1/primer_links/sect_6/macro/play.gif)To play a macro press the Play button at the top of the panel. Give a filename for the macro in the File: textbox or press the folder icon to select a macro file (macro files in PRIMER should have the extension prm ( **PR** imer **M** acro) ). <br>Once a filename has been given the Play button will become active. |
| --- |

####  Variables

A macro can be edited so that instead of using fixed values, it can use variables for certain key values and/or numbers. The user can then change these variables as required. For an example consider the following simple macro example which selects some shells to orient and applies the translation 0.000 0.000 100.000.


```
MacroName("Orient")
MacroDescription("Test macro variables work in orient")

```


```
Window("Tools/Keywords").Button("Orient")
Window("Orient").Menu("ORIENT ITEMS").Select1("SHELL...")
Pause("Select shells to translate")
```


```
In Window("Orient")
   .Textbox("Translation distance") = "0.000 0.000 100.000"
   .Button("Apply")
End In
Window("Orient").Window("CONFIRM ORIENT").Button("Accept")

```


We want to change the translation to use variables so the user can change the values. We need to do 2 things.

1. Define the variables in the macro
2. Change the numbers in the translate to be variables.

To define the variables in the macro we have to add MacroVariable() commands at the top of the file. each command defines one variable. Variable names must only contain letters, numbers and the underscore character. They cannot contain spaces. To refer to a variable we use the variable name preceeded by a dollar. e.g. for variable X\_TRANS we use $X\_TRANS. Alternatively the syntax ${X\_TRANS} can be used (i.e. dollar followed by variable name in curly brackets). Each MacroVariable() command defines a name for the variable (e.g. "X\_TRANS") a description (e.g. "X translation distance") and the default value for the variable (e.g. "0.0").

Adding these lines to the macro gives (added/changed lines shown in bold):


```
MacroName("Orient")
MacroDescription("Test macro variables work in orient")
```


```
MacroVariable("X_TRANS", "X translation distance", "0.0")
MacroVariable("Y_TRANS", "Y translation distance", "5.0")
MacroVariable("Z_TRANS", "Z translation distance", "10.0")
```


```
Window("Tools/Keywords").Button("Orient")
Window("Orient").Menu("ORIENT ITEMS").Select1("SHELL...")
Pause("Select shells to translate")
```


```
In Window("Orient")
   .Textbox("Translation distance") = "$X_TRANS  ${Y_TRANS}  $Z_TRANS"
   .Button("Apply")
End In
Window("Orient").Window("CONFIRM ORIENT").Button("Accept")

```


#####  Using variables interactively

When you play a macro PRIMER scans the top of the macro to see if there are any MacroVariable() commands. If any are found then PRIMER shows a window with all of the variables. This allows you to change the variable values. Hovering over a variable name shows the description for each variable as hover text.

![](../Storage/primer-22-1/primer_links/sect_6/macro/variables.gif)

When the correct variable values are chosen the macro can be run by pressing Apply .

#####  Using variables with CSV files

Instead of having to type the values for all variables interactively the values can be read from a CSV file. Give the name of the CSV file in the Variables textbox. The file should contain one variable and its value per line. Lines beginning with $ are treated as comments. e.g. the variables from the above example would look like.


```
$ Example macro variables CSV file.
X_TRANS,0.0
Y_TRANS,5.0
Z_TRANS,10.0


```


####  Playback options

There are some options that alter the way that macros are played back

| Replay pick/drag commands: | If a macro file contains any pick or drag commands then by default when the macro is played back the picks or drags will be played back exactly as they were recorded (i.e. the same position of the pick/drag on the screen will be replayed). If the Replay pick/drag commands option is selected this is what will happen. <br>If the option is unselected then the pick/drag command will be skipped and the macro playback will pause to allow you to replace the pick with whatever you want. A window will be mapped on the screen. |
| --- | --- |
|  | ![](../Storage/primer-22-1/primer_links/sect_6/macro/playback_paused.gif)<br> <br>Once you have replaced the pick(s) or drag(s) then press Resume and the macro playback will restart. |
| Replay view for pick/drag | Whenever a pick or drag command is recorded PRIMER saves the current view in the graphics window to the macro with a [ViewMatrix](list-of-macro-commands.md#viewmatrix)command. If this option is selected then on playback the view will be restored before picking. If it is not selected then the command will be skipped and the view will not be updated. |
| Ignore numbers in window titles | Ignore any numbers in window titles. See section on [making macros work with different models](playing-a-macro.md#makeportable)for more details. |
| UTF-8 encoded macro file | Indicates that this macro contains Unicode text for Pause or MacroVariable commands and is UTF-8 encoded. If the macro contains a  [MacroUTF8Encoded()](list-of-macro-commands.md#UTF8Encoded) command this option will automatically be selected. |
| Pause between commands | Sometimes it is useful to have a pause between commands when playing the macro (e.g. if you are debugging a macro). This textbox allows you to give a pause (in milliseconds) between commands on playback. |

####  Unicode

The text shown for Pause() commands and the descriptions in MacroVariable() commands can contain unicode text (e.g. Japanese or Chinese Kanji). If you want to use unicode then the macro file **MUST** be UTF-8 encoded and the UTF-8 encoded macro file playback option must be selected. If the  [MacroUTF8Encoded()](list-of-macro-commands.md#UTF8Encoded) command is added to the top of the macro then the option will automatically be selected.

To show the unicode text the appropriate font must be used. This can be set using the preferences primer\*cjk\_unix\_font and primer\*cjk\_windows\_font .

####  Temporarily suspending macro files

It may be useful to pause playback of a macro so that the user can do certain operations. This can be done by manually adding a Pause() command to the macro. e.g. adding the command

Pause("This is a pause example")

| will map the window shown on the right and then pause playback of the macro. The user can then do whatever operations are necessary and then press Resume to continue playback of the macro | ![](../Storage/primer-22-1/primer_links/sect_6/macro/pause_command.gif) |
| --- | --- |

This method could also be used to replace a sequence of picks in a macro. e.g. if a macro was recorded to create a contact and some parts were picked for the SURFA side of the contact there would be commands like


```
In GraphicsWindow("GRAPHICS 1")
   .ViewMatrix(1, 0, 0, 0, 1, 0, 0, 0, 1, 50, 72.5, 11.5, 34.8075, 316.838)
   .Pick1(1709, 1905)
   .ViewMatrix(1, 0, 0, 0, 1, 0, 0, 0, 1, 50, 72.5, 11.5, 34.8075, 316.838)
   .Pick1(2016, 1888)
   .ViewMatrix(1, 0, 0, 0, 1, 0, 0, 0, 1, 50, 72.5, 11.5, 34.8075, 316.838)
   .Pick1(2024, 1461)
   .ViewMatrix(1, 0, 0, 0, 1, 0, 0, 0, 1, 50, 72.5, 11.5, 34.8075, 316.838)
   .Pick1(1700, 1440)
   End In
```


recorded in the macro. These could all be deleted and replaced with a command

Pause("Select parts for SURFA side of contact")

which would prompt the user to pick the appropriate parts.

####  Making macros work with different models

When PRIMER writes a button press to a macro it uses the title of the window you clicked in and the text on the button to create a human readable command in the macro. e.g. in the following macro:


```
Window("Keywords").Button("PART")
Window("Part").Menu("SELECT PART").Select1("M1/P152    (MC-A-ARM-BUSH1-L)")
In Window("MODIFY PART M1/P152")
    .Textbox("SECID") = "10"
    .Textbox("MID") = "10"
End In
```


the user has:

1. Pressed button PART in the Keywords window *[which maps the part modify panel]*
2. In the menu SELECT PART in the Part window selected the entry M1/P152 (MC-A-ARM-BUSH1-L)  *[which modifies part 152]*
3. In window MODIFY PART M1/P152 changes the SECID and the MID values to 10.

This is fine if the macro is going to be replayed on exactly the same model but it will fail if the macro is played back on a similar (but not identical) model if the title of part 152 is different (or if the ID of the part with title "MC-A-ARM-BUSH1-L" is changed. This is because in step 2 the text on the menu button that is recorded includes the part ID and the part name.

When PRIMER replays a macro and it finds a window or menu title or a menu entry it first tries to find a unique match for the text in the macro command. If it finds one then that window is used. If that fails then it looks for a window or menu title or a menu entry which contains the text somewhere in the title. You can use this fact to make macros more portable across models. 
For example if the above macro is always going to be used to edit part 152 you can modify the second line to


```
Window("Part").Menu("SELECT PART").Select1("M1/P152")
```


and the macro would still work if the title of the part is different. However you must be careful when doing this. If part 152 exists in the model then the above will work. If part 152 does not exist but part 152000 does exist then this would still match and so may edit the wrong part by mistake.

Alternatively, if the part number may change but the part title will always be the same you could make the macro more portable by modifying lines 2 and 3 to:


```
Window("Part").Menu("SELECT PART").Select1("MC-A-ARM-BUSH1-L")
In Window("MODIFY PART")

```


This will work as long as the part name is unique (and is the first match).

Occasionally it may be useful to play a macro in a completely different window to the one it was recorded in. For example you could record a macro which sets the necessary defaults for a contact that you modify. In this case if you were modifying contact 1000 in model 1 when you were recording the macro the macro could look like:


```
In Window("MODIFY CONTACT M1/CONT1000")
     .Textbox("sfs") = "0.1"
     .Textbox("sst") = "0.5"
     lots more commands
 End In

```


Now you may want to set the defaults for contact 1001. You could not use the above macro to modify contact 1001 as the title for this would be "MODIFY CONTACT M1/CONT1000" . If you ignored any numbers in the title then you could use the macro as the title for both windows would reduce to "MODIFY CONTACT M/CONT" . The Ignore numbers in window titles option does this.

####  Grouping commands in the same window together

To try to make macros easier to read and to make hand editing them easier PRIMER will group commands that are in the same window together using In and End In commands. e.g. the following macro:


```
Window("MODIFY PART M1/P152").Textbox("SECID") = "10"
Window("MODIFY PART M1/P152").Textbox("MID") = "10"
Window("MODIFY PART M1/P152").Textbox("EOSID") = "10"
Window("MODIFY PART M1/P152").Textbox("HGID") = "10"
```


is identical to


```
In Window("MODIFY PART M1/P152")
    .Textbox("SECID") = "10"
    .Textbox("MID") = "10"
    .Textbox("EOSID") = "10"
    .Textbox("HGID") = "10"
End In
```


but the second form is more concise and easier to read and edit (e.g. if you wanted to change the ID of the part being modified you would only have to do it on one line).

[Previous](recording-a-macro.md)  |  [Next](list-of-macro-commands.md)