* Download the following files and save them in your working directory:
    * [2dmesh.step](../Storage/py_api-22-1/python_examples/3D_Mesh_from_2D_STEP_file/2dmesh.step)
    * /resources/Storage/project-py-api/files_examples/3D_Mesh_from_2D_STEP_file/2dmesh.step[mesh2DGeom.py](../Storage/py_api-22-1/python_examples/3D_Mesh_from_2D_STEP_file/mesh2DGeom.py)
    * /resources/Storage/project-py-api/files_examples/3D_Mesh_from_2D_STEP_file/mesh2DGeom.py[dynaCon.py](../Storage/py_api-22-1/python_examples/3D_Mesh_from_2D_STEP_file/dynaCon.py)
    * /resources/Storage/project-py-api/files_examples/3D_Mesh_from_2D_STEP_file/dynaCon.py[.env](../Storage/py_api-22-1/python_examples/3D_Mesh_from_2D_STEP_file/.env) (*Make sure the downloaded file has a dot at the start. If necessary, edit the file name to add it)*
* Edit the **.env** file with the path to your PRIMER executable (only the PRIMERCON variable is used in this example).
* If you don't have it already, install the following Python modules:
    * [Oasys.PRIMER](https://pypi.org/project/Oasys.PRIMER/): **pip install Oasys.PRIMER**
    * [python-dotenv](https://pypi.org/project/python-dotenv/): **pip install python-dotenv**
* Run the script **mesh2DGeom.py**