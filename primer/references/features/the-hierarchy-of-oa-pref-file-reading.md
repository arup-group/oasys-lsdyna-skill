### The hierarchy of oa_pref file reading

It will be clear from the above that in a large installation the "oa\_pref" files have a significant role. Each piece of software reads them in the following order:

| OA\_ADMIN\_xx | Top level configuration |
| --- | --- |
| OA\_INSTALL\_xx | Installation level |
| OA\_HOME | User's personal "home" file |
| Current working directory | File specific to the current directory (rarely used) |

The rules for reading these files are:

* If a given directory does not exist, or no file is found in that directory, then no action is taken. This is not an error.
* A more recently read definition supersedes one read earlier, therefore "local" definitions can supersede "global" ones (unless it was locked ).
* If two of more of the directories in the table above are the same then that file is only read once from the first instance.

[Previous](dynamic-configuration-using-the-top-level-oa-pref-file.md)  |  [Next](locking-preference-options.md)