* Download the following files and save them in your working directory:
    * [geom2Primer.py](../Storage/py_api-22-1/python_examples/Open3D_import_geometry_to_PRIMER/geom2Primer.py)
    * [dynaCon.py](../Storage/py_api-22-1/python_examples/Open3D_import_geometry_to_PRIMER/dynaCon.py)
    * [.env (*Make sure the downloaded file has a dot at the start. If necessary, edit the file name to add it)*](../Storage/py_api-22-1/python_examples/Open3D_import_geometry_to_PRIMER/.env)
* Edit the **.env** file with the path to your PRIMER executable (only the PRIMERCON variable is used in this example).
* If you don't have it already, install the following Python modules:
    * [Oasys.PRIMER](https://pypi.org/project/Oasys.PRIMER/): **pip install Oasys.PRIMER**
    * [open3d](https://pypi.org/project/open3d/): **pip install open3d**
    * [python-dotenv](https://pypi.org/project/python-dotenv/): **pip install python-dotenv**
    * [numpy](https://pypi.org/project/numpy/): **pip install numpy**
* Run the script **geom2Primer.py**