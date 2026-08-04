**Introduction**

This example is intended to illustrate the benefits of using the PRIMER Python API in coordination with open source Python libraries. In this particular example the gmsh Python library ([https://gmsh.info/](https://gmsh.info/)): Gmsh is a three-dimensional finite element mesh generator with built-in pre- and post-processing facilities.
Using Gmsh we are able to import a 2D surface as an IGES or STEP file. This surface can then be extruded and meshed to produce a model. With the current configuration the script will create both triangular and rectangular prisms. Gmsh can easily create tetrahedrons or other element shapes, but the conversion script from Gmsh to PRIMER is only configured for triangular and rectangular prisms.

**Example**

This example is similar to the following Gmsh examples:
't4.py' [https://gitlab.onelab.info/gmsh/gmsh/blob/gmsh_4_12_2/tutorials/python/t3.py](https://gitlab.onelab.info/gmsh/gmsh/blob/gmsh_4_12_2/tutorials/python/t3.py)
't20.py' [https://gitlab.onelab.info/gmsh/gmsh/blob/gmsh_4_12_2/tutorials/python/t20.py#L24](https://gitlab.onelab.info/gmsh/gmsh/blob/gmsh_4_12_2/tutorials/python/t20.py#L24)

The example is slightly modified to give the user the ability to specify the file containing a 2D surface to be extruded, direction of extrusion, magnitude of the extrusion, number of vertical elements, and the size of 2D mesh. The user may also modify the algorithms used to work, but this may require additional steps to ensure the model can be exported into PRIMER.

**Running the code**

**Inputs**

* fileName: name of the input file to be meshed and extruded. This file should be placed in the same directory as the meshSTEP.py and dynaCon.py files (string)
* fileExt: the file extension to be used, options are '.step'/'.stp', or '.igs' (string). NOTE: the file will be imported with the assumed unit of meters.
* h: magnitude, in meters, of the extrusion (int/float)
* extrdDir: direction, in meters, of the extrusion options are 'x', 'y', or 'z'. Must be orthogonal to 2D Surf (string)
* meshSize: 2D element mesh size to be extruded, in meters (int/float)
* numExtrdElems: number of elements in the extrusion direction (int)

**Executing**

To execute the program one must first create the **.env** file following the **.env-template**. For this example only the **PRIMERCON** variable needs to be filled out, this variable should be the path to the PRIMER executable, this will vary from user to user but is typically in "C:\Users\xxxx.xxxx\AppData\Roaming\Ove Arup\vXX.X\_x64\primerXX\_x64.exe"

After the .env file is configured and the required libraries downloaded, one can execute '**mesh2DGeom.py**' via terminal or through an IDLE like VSCode.