**Introduction**

This example is intended to illustrate the benefits of using the PRIMER Python API in coordination with open source Python libraries. In this particular example the Gmsh Python library ([https://gmsh.info/](https://gmsh.info/)): Gmsh is a three-dimensional finite element mesh generator with built-in pre- and post-processing facilities.
Using Gmsh we are able to use its built in functions to define geometry and mesh the geometry. Once the geometry is meshed we can reformat the geometry data and use it to recreate the geometry in PRIMER.

**Example**

This example is a reproduction of the "t1.py" example produced by Gmsh can be found here: ([https://gitlab.onelab.info/gmsh/gmsh/-/blob/gmsh_4_12_2/tutorials/python/t1.py](https://gitlab.onelab.info/gmsh/gmsh/-/blob/gmsh_4_12_2/tutorials/python/t1.py))
The example is slightly modified to give the user the ability to specify the width and length of the rectangle with input variables, and the option to declare what type of meshing algorithm they would like to use.

**Running the code**

**Inputs**

* l - length of the rectangle (float)
* w - width of the rectangle (float)
* lc - size of the mesh (float)
* alg - type of meshing algorithm (int) 1: MeshAdapt, 2: Automatic, 3: Initial mesh only, 5: Delaunay, 6: Frontal-Delaunay, 8: Frontal-Delaunay for Quads, 9: Packing of Parallelograms, 11: Quasi-structured Quad
* saveFolder - name of folder to save model (str)
* keyName - name of PRIMER key file (str)
* showGUI - show gmsh GUI (window must be exited to continue running of program) (boolean)
* dynaGen - create PRIMER model (boolean)

**Executing**
To execute the program one must first create the **.env** file following the **.env-template**. For this example only the **PRIMERCON** variable needs to be filled out, this variable should be the path to the PRIMER executable, this will vary from user to user but in Windows is typically in "C:\Users\xxxx.xxxx\AppData\Roaming\Ove Arup\vXX.X\_x64\primerXX\_x64.exe"

Once the .env file has been configured the program is ready to be run.
To run execute '**gmesh\_geom\_gen.py**' through terminal or through IDLE like VSCode.