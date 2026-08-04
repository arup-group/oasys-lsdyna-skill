####  Merging Models Containing Clashing Character Labels

If clashing character labels are found when merging models PRIMER will try to fix the clash by:

* if the name ends with '\_&lt;number&gt;' then read the number, increment by one and replace '\_&lt;number&gt; 'with '\_&lt;number+1&gt;'.
* otherwise append '\_1' onto the name
* repeat until a non clashing name is found
* if the name is longer than 8 characters, strip off the last character in the name (after stripping off any '\_&lt;number&gt;') and repeat the process.

More details on model merge are available in [MODEL &gt; MERGE](model-merge.md).

[Previous](permitted-character-label-syntax.md)  |  [Next](renumbering-models-containing-character-labels.md)