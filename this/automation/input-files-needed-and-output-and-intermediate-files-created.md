###  Input Files Needed, and Output and Intermediate Files Created

1. ***input\_script***  is **required** at the start.
2. *input\_script* .output is a file that contains the concatenated output from FAST-TCF.
3. *input\_script* .tmp is a temporary file that FAST-TCF creates for translation. This is merged after completion into *input\_script* .output so if you see this file then FAST-TCF didn't finish cleanly.
4. *input\_script* .rep is a temporary report file of the FAST-TCF run. This is merged after completion into *input\_script* .output so if you see this file then FAST-TCF didn't finish cleanly.
5. *input\_script* .tcf are the commands passed to T/HIS from FAST-TCF. This is merged after completion into *input\_script* .output so if you see this file then FAST-TCF didn't finish cleanly. The command lines contain special characters such as \r, \m and \l. These are used internally in T/HIS and should be ignored by the user.
6. *input\_script* .sngval contains summaries of every curve outputted.

Other files will be made, such as postscript or bitmap plots, but these will have names specified by the user.

Previous: running-fast-tcf  |  Next: debugging-fast-tcf-files