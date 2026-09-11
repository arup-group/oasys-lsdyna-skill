### Locking Preference Options

From version 9.4 onwards, preference options can be locked. If a preference option is locked in a file then that preference option will be ignored in any of the subsequent preference files that are read.

Therefore by locking a preference in a top-level file in the hierarchy above, eg in OA\_ADMIN\_xx, and then protecting that file to be read-only, an administrator can set preferences that cannot be altered by users since any definitions of that preference in their private oa\_pref files will be ignored.

Preferences are locked by using a hash (#) rather than an asterisk (\*) between the code name and the preference string. For example:

| \*maximise: true | Normal case using "\*", means an unlocked preference |
| --- | --- |
| #maximise: true | Locked case using "#" |

These changes may be made either by editing the file manually, or by using the preferences editor.
[Previous](the-hierarchy-of-oa-pref-file-reading.md)  |  [Next](placement-of-master-window.md)