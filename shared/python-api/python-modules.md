For each program there is a corresponding Python module that needs to be installed:

* [Oasys.PRIMER](https://pypi.org/project/Oasys.PRIMER/) module
* [Oasys.D3PLOT](https://pypi.org/project/Oasys.D3PLOT/) module
* [Oasys.THIS](https://pypi.org/project/Oasys.THIS/) module
* [Oasys.REPORTER](https://pypi.org/project/Oasys.REPORTER/) module

Each of the Python modules above uses [gRPC](https://grpc.io/) to communicate with the executable of the program using the [Oasys.gRPC](https://pypi.org/project/Oasys.gRPC/) module, but this one doesn't need to be installed (it's automatically installed when installing any of the other modules).

To install the Python modules: execute the following commands in a Windows comand prompt, or in a Linux terminal:

* pip install Oasys.PRIMER
* pip install Oasys.D3PLOT
* pip install Oasys.THIS
* pip install Oasys.REPORTER

To update the Python modules when new versions are released: execute the following commands:

* pip install Oasys.PRIMER --upgrade
* pip install Oasys.D3PLOT --upgrade
* pip install Oasys.THIS --upgrade
* pip install Oasys.REPORTER --upgrade