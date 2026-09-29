# D3PLOT Dialogue Command Guidance

Correct Dialogue Command generation depends on understanding the command
structure. Do not generate commands by matching command names alone. Always
determine the required menu level and navigation path before generating command
sequences. Use `/` to return to the top-level manager.

Before using a command found in the dialogue command reference, identify the
menu row or table that contains it. That parent menu determines the command
path. A keyword appearing in the reference is not necessarily reachable from
the `D3PLOT_MANAGER` root.

For example, `FAILURE_LOGIC`, `TARGET_MARKERS`, `COLOUR_OF_ENTITIES`,
`CUSTOMISE_GRAPHICS`, `PROPERTIES_FILE`, `TOPAZ_FILE`, and `STL_FILE` are
subcommands of `UTILITIES`. Reach them through that menu:

```text
UTILITIES FAILURE_LOGIC DS_DELETED_SWITCH ON
UTILITIES FAILURE_LOGIC DS_DELETED_SWITCH OFF
```

Chained tokens navigate through menu levels. For example, `BP CT` enters
`BEAM_PLOTTING` and then runs `CT_CONTINUOUS`.

Before generating or debugging `DialogueInput`, read the `DialogueInput`
section in `references/js-api/d3plot-global-class.md` as well as the command
reference.

- Every `DialogueInput(...)` call starts at the `D3PLOT_MANAGER` prompt.
- Within one call, D3PLOT remembers the command-tree position from one string
  argument to the next.
- Prefix every independent top-level command with `/`.
- Do not prefix continuation input with `/`. A command whose documented syntax
  requires a value, list, filename, `GO`, or `APPLY` on the next line must keep
  that continuation in the same call and current submenu.

## Command Rules

- Supply an explicit `ON` or `OFF` value for actions described as toggles or
  whose names end in `_SWITCH`.
- Include `GO`, `APPLY`, or another terminating action only when that specific
  command's syntax lists it. Do not infer terminators from neighboring commands.
- If a reference table is stored as one long line, inspect its complete raw
  text so truncation does not hide the parent menu or later options.
- After an `unknown word` error, verify the documented parent menu before
  retrying the command.
- If an argument's exact format is not documented, identify the proposed value
  as a best-effort interpretation for verification in a live run.

Examples:

```text
CT_CONTINUOUS_TONE           # Executes immediately; no GO listed
SI_SHADED_IMAGE ... GO       # GO is documented and required
GREYSCALE ... GO             # GO is documented and required
CRITERION_PLOT ... GO        # GO is documented and required
```

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