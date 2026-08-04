###  Typing in Commands When Running in Text-Only Mode.

Dialogue commands are typed at the PRIMER\_MANAGER &gt;&gt;&gt; prompt, and then at subsequent sub-menu prompts.

The complete dialogue command list, structure and syntax is given in [Appendix L](l-dialogue-typed-in-command-syntax.md), but a brief description is:

* The command tree is hierarchical, with PRIMER\_MANAGER as the top level.
* Preceding any command with " / " (forward slash) means "return to top level before executing it".
* Any command can be aborted with " q " (for Quit)
* Help can be obtained anywhere with " h " (for Help)

Commands may be given in sequence on a line, or individually in response to each sub-menu prompt. For example the following two command sequences are identical in effect: they both read Ansys LS-DYNA keyword file "test\_model.key" into model #2.

| Commands on individual lines | PRIMER\_MANAGER &gt;&gt;&gt; [H for Help]  READ  <br> READ &gt;&gt;&gt; [H for Help]  DK  <br> Give LS-DYNA keyword filename (.key) [H for Help]:  test\_model  <br> Give model number: (1)  2 |
| --- | --- |
| Concatenated commands on a single line | PRIMER\_MANAGER &gt;&gt;&gt; [H for Help]  READ DK test\_model 2 |

When giving commands you need only only type enough letters for the command to be unique in that context, subject to a minimum of 2 letters. In the example above READ could have been abbreviated to RE.

The full command-line syntax and a list of commands is given in [APPENDIX L: Dialogue (typed in) Command Syntax](l-dialogue-typed-in-command-syntax.md)

[Previous](starting-primer-in-text-only-mode.md)  |  [Next](using-command-files-and-macros.md)