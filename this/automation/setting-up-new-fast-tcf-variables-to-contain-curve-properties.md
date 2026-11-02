###  Setting up new FAST-TCF variables to contain curve properties

If you wish to use a curve property as a new variable within FAST-TCF - there are two ways you can achieve this.

1. Use the keyword "varf ". This should be used when the user doesn't also require the value to be outputted into a text file or a REPORTER file.
2. Within a "tab" , "taba" , "tabc" or "varr" line, use the word "varf" just **before** the description words. The variable name is defined as the word after "varf" .

The variable value is equal to the return value of the request. The variable can then be used in any subsequent lines of FAST-TCF.

For instance, the simplest way to set the variable MAX\_ACCN to the max of curve #1 is:

varf MAX\_ACCN #1 max
 
However, if the user wishes to combine writing a property to a text file and defining a variable in FAST-TCF, this syntax could be used:
 
tab output.txt #1 max varf MAX\_ACCN

Previous: writing-out-reporter-variables  |  Next: format-1