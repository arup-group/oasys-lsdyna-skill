Python scripts can control the Oasys LS-DYNA Environment programs via the Python API.

The Python API has some advantages over the JavaScript one:

* The Python scripts run **outside**the programs (PRIMER, D3PLOT, etc), not **inside**, as JS scripts do. Therefore from **the same** Python script it is possible to speak to PRIMER, D3PLOT, T/HIS and REPORTER.
* The same script can also speak to any other software that has a Python API, for example Ansys LS-DYNA, Microsoft Excel, etc.
* In Python there are lots of available modules that can be easily installed and imported into the script.

Since Python scripts run outside the programs, not inside as JavaScripts do, Python will be slower than JavaScript. The difference is that JavaScript is running **inside** our software so has direct access to all the data. Python is running **outside** our software so has to communicate with the external process (using [gRPC](grpc-connection.md)). Each Python call requires a "round trip" to PRIMER to do so, increasing the time required for such operations.

Furthermore, using Graphics and Widgets is not possible from an external process like Python. Graphics and Widgets in JavaScript are running in the user interface which is running inside the software in an event loop. It is not possible to do that from Python, see [PRIMER](primer.md), [D3PLOT](d3plot.md), [T/HIS](t-his.md) and [REPORTER](reporter.md) pages for more details of which classes cannot be used from Python.

Please consider this carefully when deciding whether to use Python or JavaScript and when writing Python routines.