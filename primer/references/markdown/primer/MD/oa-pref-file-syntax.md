####  "oa_pref" file syntax

The syntax used for PRIMER is: **primer\*&lt;keyword&gt;: &lt;argument&gt;** or for a locked pref **primer#&lt;keyword&gt;: &lt;argument&gt;**

for example:

primer\*initial\_plot\_mode: SHAD

The rules for formatting are:

* The &lt;programme&gt;\*&lt;option&gt;: string must start at column 1;

* This string must be in lower case, and must not have any spaces in it.

* The &lt;argument&gt; must be separated from the string by at least one space.

* Lines starting with a " # " are treated as comments and are ignored.

#####  "Locking" a preference

Normally a preference read from oa\_pref file in location A can be modified if the same preference is read later on from oa\_pref file in location B. However it it possible to "lock" a preference against being changed by using a "#" rather than a "\*" in its syntax. This means that once read it will not be changed if read again from subsequent files.

For example:

| primer\*initial\_plot\_mode: SHAD | Using a "\*" means that this preference can be modified. |
| --- | --- |
| primer#initial\_plot\_mode: SHAD | Using a "#" means that it is locked against further changes |

This facility enables "company wide" preferences to be set and locked in the top level (eg OA\_ADMIN) preference file, thus enforcing their use.

[Previous](re-reading-the-oa-pref-file.md)  |  [Next](the-interactive-preferences-editor.md)