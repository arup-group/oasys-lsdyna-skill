###  The Dialogue Command Structure

The command structure forms a hierarchical "tree", with the top-level D3PLOT\_MANAGER at its "root".

The following rules apply:

* Command words may be abbreviated to any degree so long as:
    * they are unique in the context of their current menu
    * they must have at least their first two characters given

    For example BP\_BEAM\_PLOTTING  CT\_CONTINUOUS may be abbreviated to BP  CT .
* Navigation up and down menu levels is performed as follows:
    * &lt;command&gt; takes you to the command's (sub-)menu level
    * Forward slash "/" takes you back to the top D3PLOT\_MANAGER level before executing the following command(s)

    For example BP\_BEAM\_PLOTTING above takes you into the BEAM\_PLOTTING sub-menu
 
    The command /DEFORM EXPLODE would work at the BEAM\_PLOTTING prompt because it would return to the top level before parsing the DEFORM command.
* There is also a "global menu" of commands which is available at any (sub-)menu prompt.
    * These are primarily graphics commands that do not require a context
    * The commands can be listed with the GM (for Global Menu) command
* Any command can be aborted by typing Q (uit). This will return control to the next highest command prompt in the "tree"

* At any prompt you can type H (elp) to receive advice about what to do next.
* For all the places where &lt;entity&gt;&lt;type&gt; range needs to be specified it can be given as

A range of numbers using typical syntax:
1) 1 2 3 19 207 5 8
2) 1 TO 10 3 6 20 TO 100 STEP 1
3) ALL (or \*)
4) AV (or %) for all visible entities

Using the screen picking options:
1) V (Visible) To pick individually with cursor;
2) SA (Screen Area) to pick entities within a box defined by opposite corners;
3) CV (Current Volume) to pick entities inside the current clipping volume.

|  |
| --- |

[Previous](/articles/project-d3plot/f-dialogue-command-syntax)  |  [Next](/articles/project-d3plot/main-menu-commands)