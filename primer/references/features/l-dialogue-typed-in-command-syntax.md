##  Appendix L: Dialogue (Typed In) Command Syntax

PRIMER has a limited "dialogue" command set that can be used in any of three ways:

1. In graphical (screen menu) mode commands can be typed into the Dialogue Box at any time.
2. In non-graphical (text only) mode commands are typed in at the terminal prompt.
3. In command files, run either interactively or in batch, commands are executed as if typed in.

In all cases the command  ***input***  syntax is identical, although there are minor differences in output between "screen menu" and "text-only" modes: in the latter case all output has to go to the controlling terminal ("stdout"), whereas in the former separate windows are used for "help", "listing" and other output.

For PRIMER 20.0 onwards, we have now also added the ability to use the Up and Down arrow keys in order to cycle through previously issued commands that you have entered into the Dialogue window. Currently only the last 50 commands are stored in memory. Commands issued after this 50 limit will remove the oldest issued commands first from the list.

[Previous](k-target-and-position-tree-file-example.md)  |  [Next](the-dialogue-command-structure.md)