###  Debugging FAST-TCF files

Complicated FAST-TCF files will inevitably go wrong. There are a number of things the user can do to help identify where it is going wrong. Assuming the command line syntax is correct and the correct files are in the run directory, these typical procedures are as follows:

**Identifying errors using the interactive playback option in T/HIS:**

* Read the model(s) into T/HIS.
* Read the FAST-TCF script into T/HIS under the "FAST-TCF &gt; Run" sub menu.
* Step through the FAST-TCF script manually, keeping an eye on how FAST-TCF is translating the lines, and the output T/HIS is producing.

**Identifying if FAST-TCF has found an error:**

* If FAST-TCF finds an error, then it is stored and T/HIS then resets the command line and continues to translate the input file. If 10 errors are found then T/HIS will stop at this line. You can set this error amount internally within FAST-TCF.
* Once T/HIS has stopped, the errors are summarised in the command line box and the terminal that T/HIS was run from. The number of warnings found is also printed.
* It should be obvious what is wrong, FAST-TCF checks numerous things, including:
    * Whether T/HIS created the curve from the previous line.
    * That the syntax is correct for all the data input lines (the data extraction requests have additional checking to check the combinations of words inputted is right).
    * If the syntax is correct, whether it applies to the file being requested for output.
    * The output file exists in the directory for the data extraction.
* Correct the input line error utilising the reference tables in this document if applicable.

**Identifying what errors T/HIS is giving:**

* Identify how many curves were outputted into T/HIS before things went wrong (run T/HIS in graphical mode).
* Place an exit keyword **after the next** input line. This should stop T/HIS just after the line which is causing the file to fail.
* Check what errors T/HIS is giving out. If it's not obvious what went wrong then try another procedure.

**Identifying if there are warnings or errors from FAST-TCF:**

* The errors are summarised once T/HIS has finished. They are printed in the command line box and the terminal which T/HIS was run from.
* There will be a *input\_file* .rep or *input\_file* .output file in the directory which contains any warnings or errors that FAST-TCF has detected. Make sure nothing is obviously wrong with the input file using this report file.
* The *input\_file.* tmp or *input\_file* .output file contains the actual file inputted into FAST-TCF after includes have been found and special characters removed. Check this is correct and all the include files have been accounted for.

**Identifying if FAST-TCF is processing the line correctly:**

* It's possible that FAST-TCF has processed the line incorrectly. If so, open the *input\_file* .tcf or *input\_file* .output file to investigate what FAST-TCF is asking T/HIS to do.
* Identify which line is going wrong using the above procedure, and then find this section in the .tcf file. Input the entire tcf request for the line into the T/HIS command box to step through what is being asked from T/HIS. This may highlight where things are going wrong. The command lines contain special characters such as \r, \m and \l. These are used internally in T/HIS and should be ignored by the user.

**Using PRIMER to check a FAST-TCF file:**

* PRIMER has a FAST-TCF Check menu under the main Check menu. This can be used to check the FAST-TCF file data requests against a certain keyword deck.
* Read the deck into PRIMER, and select Model &gt; Check &gt; FAST-TCF. Select the FAST-TCF file and press Apply. Details can be found in [the PRIMER manual](https://help.oasys-software.com/smart/project-primer/fasttcf-check).
* PRIMER will highlight any errors that have occurred with the input file with regards to the keyword deck.
* The main PRIMER checks are if the line syntax is valid, whether the correct file is being outputted, whether the relevant DATABASE\_HISTORY is present and whether the id. actually exists.
* Any errors will have to be corrected manually in PRIMER.

**NOTE:** If FAST-TCF has completed, then it may be necessary to open the *input\_file* .output file which has the all the output files concatenated together in different sections.

Previous: input-files-needed-and-output-and-intermediate-files-created  |  Next: creating-fast-tcf-files