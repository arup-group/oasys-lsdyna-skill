###  The Dialogue Command Structure

The command structure forms a hierarchical "tree", with the top-level PRIMER\_MANAGER at its "root".

The following rules apply:

* Command words may be abbreviated to any degree so long as:
    * they are unique in the context of their current menu
    * they must have at least their first two characters given

    For example READ DK\_DYNA\_KEYWORD may be abbreviated to RE DK .
* Navigation up and down menu levels is performed as follows:
    * &lt;command&gt; takes you to that command's (sub-)menu level
    * Forward slash "/" takes you back to the top PRIMER\_MANAGER level before executing the following command(s)

    For example READ above takes you down into the READ\_MODEL sub-menu 
The command /WRITE DK would work at the READ\_MODEL prompt because it would return to the top level before parsing the WRITE command
* There is also a "global menu" of commands which is available at any (sub-)menu prompt.
    * These are primarily graphics commands that do not require a context.
    * The commands can be listed with the GM (for Global Menu) command
* Any command can be aborted by typing Q (uit). This will return control to the next highest command prompt in the "tree".

* At any prompt you can type H (elp) to receive advice about what to do next.