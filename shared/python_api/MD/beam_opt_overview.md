**About the code**

**Folder structure**

In the working directory the user needs to create a folder called "**initialM**". This folder will contain the variations of input or starting models. Each model resides in a numbered folder, as when it is run it will create additional files that we would like to restrict to that input folder. Once the "initialM" folder is created the user can place their starting model (inside a numbered folder) into it. Once the analysis starts the code should automatically create the 'Outputs' area, inside of which each iteration will be stored in numbered folders with the starting index as the initial model number.
i.e. Input model: &gt;initialM&gt;01&gt;beam.key || Output: &gt;outputs&gt;02&gt;beam.key

**Inputs**

The current configuration assumes that the input model is a rectangular prism comprised of solid elements. The code has the following input parameters:
* numInt - Number of iterations (int)
* key - Name of model .key (string)
* timeHis - name of model T/His .thf (same as .key) (str)
* L - number of elements in Length direction (int)
* H - number of elements in height direction (int)
* r - density filter radius (float)
* thresh - initial threshold -&gt; thresh &lt; e\_vms/max(vonMises Stress) (float)
* threshInc - increment that the threshold is to be increased by (float)
* cnt - Number of input model folder located in the 'initialM' folder (int)

**Env Variables**

The environment variables shown in the template yield the locations of the executables for the PRIMER, T/HIS, and the Ansys LS-DYNA solver.
This example was run with the following executables:
* DYNARUNEXE = "... ls-dyna\_smp\_d\_R13.1\_138-g8429c8a10f\_winx64\_ifort190.exe" [https://www.oasys-software.com/dyna/downloads/ls-dyna-executables/](https://www.oasys-software.com/dyna/downloads/ls-dyna-executables/) (V13, SMP, Double)
* PRIMERCON = "... primerXX\_x64.exe"
* THISCON = "... thisXX\_x64.exe"

**Running**

To start the optimization one should first ensure that they are able to run the Ansys LS-DYNA executable through the command line. Examples of Ansys LS-DYNA executables and strings may be found in the manual and the executables used at the writing of this are listed in the Env Variables section above. Depending on the users setup and preferences regarding Ansys LS-DYNA the user may want to review the "dynaRun.py" file and configure the 'run' variable as needed.
Once a user can run a model through the command line, the script can be run. In a terminal window navigate to the working directory and execute **mainOPT.py**.