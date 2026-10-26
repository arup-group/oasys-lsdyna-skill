* Download the following files and save them in your working directory:
    * [beam.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/beam.py)
    * [beamOPT.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/beamOPT.py)
    * [dynaCon.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/dynaCon.py)
    * [dynaRun.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/dynaRun.py)
    * [getResults.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/getResults.py)
    * [mainOPT.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/mainOPT.py)
    * [optModel.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/optModel.py)
    * [results.py](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/results.py)
    * [.env](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/.env) (*Make sure the downloaded file has a dot at the start. If necessary, edit the file name to add it)*
* In that folder create a subfolder called "initialM"
* In "initialM" create another subfolder called "450"
* In "450" put the following file: [beam.key](https://dyna-downloads.oasys-software.com/python_examples/Beam_optimization/beam.key)
* Download and install Ansys LS-DYNA R13.1 SMP Double precision from the [Oasys website](https://www.oasys-software.com/dyna/downloads/ls-dyna-executables/)
* If you don't have it already, install the following Python modules:
    * [Oasys.PRIMER](https://pypi.org/project/Oasys.PRIMER/): **pip install Oasys.PRIMER**
    * [Oasys.THIS](https://pypi.org/project/Oasys.THIS/): **pip install Oasys.THIS**
    * [python-dotenv](https://pypi.org/project/python-dotenv/): **pip install python-dotenv**
* Edit the file .env with the following 3 environment variables:
    * DYNARUNEXE = "*path to the Ansys LS-DYNA executable you have installed in the step above*"
    * PRIMERCON = "*path to your PRIMER executable*"
    * THISCON = "*path to your T/HIS executable*"
* Run the script **mainOPT.py**