###  Configuration of the Tool

To run Ansys LS-DYNA from within PRIMER:

* Ansys LS-DYNA executables must be available from ("Local"/ "Remote") machine. 
The Ansys LS-DYNA executables can be downloaded from this Oasys website [link](https://www.oasys-software.com/dyna/downloads/ls-dyna-executables).
* For MPP Ansys LS-DYNA, MPI installation must be present on ("Local"/ "Remote") machine. 
Intel MPI installation can be downloaded from the this Oasys website [link](https://www.oasys-software.com/dyna/downloads/ls-dyna-mpi-library).
* A valid Ansys LS-DYNA license is required to perform Ansys LS-DYNA runs on ("Local"/ "Remote") machine.

**The default settings for this tool are taken from the preferences specified for Oasys SHELL**.

The Ansys LS-DYNA related options specified in this tool can be saved by pressing the
**"Save Settings"**button.

* These settings are saved in a PRIMER JSON format "settings file" and these settings can be re-loaded in a subsequent PRIMERsessions for easy tool setup.

**Please Note:**

There is no requirement for Oasys software to be installed on the "Remote" machine to run Ansys LS-DYNA on that machine.

It is however recommended to install Oasys on the machine on which Ansys LS-DYNA is to be run.

This is to allow access to the advanced Ansys LS-DYNA submission facilities available in the
**Oasys SHELL**.

####  Configuration files used for Ansys LS-DYNA Submission 
 
#####  Preference files (oa_pref) 
Default values for many of the Ansys LS-DYNA related options are taken from the Oasys SHELL preferences specified in the file **'oa\_pref'** . 
This file can be kept at one or all these locations: 

* Folder path specified by **OA\_ADMIN** environment variable.
* Folder path specified by **OA\_INSTALL** environment variable.
* The User's login path **(USER HOME)**
* Current working folder

#####  JSON Setting Files

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_18_4.png)
PRIMER saves the data entered in the Ansys LS-DYNA submission tool in a JSON settings file under given bookmark label names.

The setting types for which the bookmarks names are given are:
* Remote machine connection options
* Ansys LS-DYNA submission options

PRIMER can read/write up to four different JSON files.

The path to these files is taken from the preference value for
**primer\*json\_bookmarks\_file**that is specified in the
**'oa\_pref'**files kept at these locations:

* Folder path specified by **OA\_ADMIN** environment variable.
* Folder path specified by **OA\_INSTALL** environment variable.
* The User's login path **(USER HOME)**
* Current working folder

**The default name of the saved file is: pr\_bookmarks.json**

A newly created bookmark label for remote-machine or submission-options can be saved in a file chosen from the
**"New Settings"**menu and then by pressing the appropriate
**"Save Settings"**button.

**Please Note:**

PRIMER also saves the details of Ansys LS-DYNA jobs that are run via this tool in the HOME folder JSON file.

The Ansys LS-DYNA job details can be saved just by pressing the appropriate "Save Settings" button.

#####  List of JSON Bookmark Options

The list of all entries that are saved under different categories of bookmarks is as follows:

**Remote Connection Bookmarks**
* Bookmark Name
* Machine Name
* User Name
* OASYS Path
* Buffer Size
* List of environment variables
* List of submit directories on remote machine in which the Ansys LS-DYNA run was done recently

**Submission Options Bookmark**
* Bookmark Name
* Precision type
* Code type
* MPI type
* Submission type
* NCPU value
* Ansys LS-DYNA executable path
* MPI executable path

**Ansys LS-DYNA Jobs**
* Master Mode file path
* Submit directory path
* Ansys LS-DYNA type (Precision/Code/MPI)
* File path for d3hsp and logs

#####  Oasys SHELL files

These
**additional (but optional)**files can also be used to configure and enhance the Ansys LS-DYNA Submission capabilities.

These files have been traditionally used for Ansys LS-DYNA submission in the Oasys SHELL.

These files are taken only from the OA\_INSTALL folder path.

**Please refer to the Oasys SHELL manuals for more information**.

######  dyna_versions

The list of Ansys LS-DYNA executables can be accessed via this file.

This file can be edited via the Ansys LS-DYNA Submission tool and the "Ansys LS-DYNA Executable Path" used for Ansys LS-DYNA run can be added to this file by pressing the
**"Add Version"**button available in the panel.

######  oasys_queue

This file lists alternative batch queues and queue directives.

It only needs to be created for systems on which jobs can be submitted to a NQS style queue.

This file can only be created/edited manually.

######  oasys.submit

The commands to run Ansys LS-DYNA can be included from this user configurable file.

This file can only be created/edited manually.[Previous](ls-dyna-submission-tool.md)  |  [Next](machine-and-model-options.md)