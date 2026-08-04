* Download the following files and save them in your working directory:
    * [gmesh_geom_gen.py](../Storage/py_api-22-1/python_examples/Create_geometry_with_Gmesh/gmesh_geom_gen.py)
    * [dynaCon.py](../Storage/py_api-22-1/python_examples/Create_geometry_with_Gmesh/dynaCon.py)
    * [.env](../Storage/py_api-22-1/python_examples/Create_geometry_with_Gmesh/.env) (*M* *ake sure the downloaded file has a dot at the start. If necessary, edit the file name to add it*)
* Edit the **.env** file with the path to your PRIMER executable (only the PRIMERCON variable is used in this example).
* If you don't have it already, install the following Python modules:
    * [Oasys.PRIMER](https://pypi.org/project/Oasys.PRIMER/): **pip install Oasys.PRIMER**
    * [gmsh](https://pypi.org/project/gmsh/): **pip install gmsh**
    * [python-dotenv](https://pypi.org/project/python-dotenv/): **pip install python-dotenv**
* Run the script **gmesh\_geom\_gen.py**