**Introduction**

This example serves to illustrate how geometry can be imported from external sources and imported into PRIMER in a usable format. Here the open source library Open3D is used to import various meshes, these meshes are then put into PRIMER as shell elements using the PRIMER Python API.
**Running the code**

**Inputs**

* model - Name of the model and the geometry to be imported, options are: **armadillo**, **monkey**, **avocado**, **sword**, and **bunny**. ALL options are from Open3D.

* folder - folder where model will be saved in outputs folder (will be created if does not exist)
* saveFolder - name of folder to save model (str)

**Executing**

To execute the program one must first create the **.env** file following the **.env-template**. For this example only the PRIMERCON variable needs to be filled out, this variable should be the path to the PRIMER executable, this will vary from user to user but in Windows is typically in "C:\Users\xxxx.xxxx\AppData\Roaming\Ove Arup\vXX.X\_x64\primerXX\_x64.exe"
Once the .env file has been configured the program is ready to be run. To run execute '**geom2Primer.py**' through terminal or through IDLE like VSCode.