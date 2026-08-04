## Getting started

As Python is running outside D3PLOT, the first thing a script needs to do is to either start an instance of D3PLOT, or to connect to an already running instance of D3PLOT. At the end of the script you should then either disconnect again or terminate the D3PLOTinstance.

A skeleton Python script to start D3PLOT (Installed at C:\install\_directory\d3plotXX\_x64.exe) and then terminate it is:

```python
import Oasys.D3PLOT

connection = Oasys.D3PLOT.start(abspath="C:\\install_directory\\d3plotXX_x64.exe")

...

Oasys.D3PLOT.terminate(connection)
```

By default D3PLOT will use port 50054 to communicate with Python and will allocate 25MB of memory for running scripts. These can be changed by adding port and memory arguments to the start function. e.g:


```python
connection = Oasys.D3PLOT.start(abspath="C:\\install_directory\\d3plotXX_x64.exe", port=1234, memory=100)
```


D3PLOT can also be started in batch mode so that the main graphics window is not shown by using a batch argument:


```python
connection = Oasys.D3PLOT.start(abspath="C:\\install_directory\\d3plotXX_x64.exe", batch=True)
```


To connect to an instance of D3PLOT that is already running, **D3PLOT must currently have been started in a special mode telling it to listen on a port for gRPC messages**. See further information .

A skeleton script to connect to D3PLOT and disconnect again would then be:

```python
import Oasys.D3PLOT

connection = Oasys.D3PLOT.connect(port=50054)

...

Oasys.D3PLOT.disconnect(connection)
```

or if you want to terminate the instance of D3PLOT use terminate instead of disconnect.

| 
```javascript
var m = Model.First();

m.state = 10;

var n = Node.GetFromID(m, 1);

var x_disp = n.GetData(Component.DX);

Message("X displacement of node 1: " + x_disp);
```
 | 
```python
import Oasys.D3PLOT

#D3PLOT must be in listening mode (Options>gRPC/Python>Start)
connection = Oasys.D3PLOT.connect(port=50054)

m = Oasys.D3PLOT.Model.First()

m.state = 10

n = Oasys.D3PLOT.Node.GetFromID(m, 1)

x_disp = n.GetData(Oasys.D3PLOT.Component.DX)

print("X displacement of node 1: " + str(x_disp))

Oasys.D3PLOT.disconnect(connection)
```
 |
| --- | --- |

All the classes and methods or functions used in the Python script above can be found in the [D3PLOT Python API](../Storage/sphinx/22.1/D3PLOT/index.html) documentation, in the following pages:

* [Connection methods](../Storage/sphinx/22.1/D3PLOT/index.html) (to connect to an instance of D3PLOT and to disconnect Python from it at the end)
* [Model class](../Storage/sphinx/22.1/D3PLOT/Model.html) (to get a model, and to set its state)
* [Node class](../Storage/sphinx/22.1/D3PLOT/Node.html) (to obtain a node from an ID and to GetData)