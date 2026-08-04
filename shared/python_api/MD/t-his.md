## Getting started

As Python is running outside T/HIS, the first thing a script needs to do is to either start an instance of T/HIS, or to connect to an already running instance of T/HIS. At the end of the script you should then either disconnect again or terminate the T/HIS instance.

A skeleton Python script to start T/HIS (Installed at C:\install\_directory\thisXX\_x64.exe) and then terminate it is:

```python
import Oasys.THIS

connection = Oasys.THIS.start(abspath="C:\\install_directory\\thisXX_x64.exe")

...

Oasys.THIS.terminate(connection)
```

By default T/HIS will use port 50052 to communicate with Python and will allocate 25MB of memory for running scripts. These can be changed by adding port and memory arguments to the start function. e.g:


```python
connection = Oasys.THIS.start(abspath="C:\\install_directory\\thisXX_x64.exe", port=1234, memory=100)
```


T/HIS can also be started in batch mode so that the main graphics window is not shown by using a batch argument:


```python
connection = Oasys.THIS.start(abspath="C:\\install_directory\\thisXX_x64.exe", batch=True)
```


To connect to an instance of T/HIS that is already running, **T/HIS must currently have been started in a special mode telling it to listen on a port for gRPC messages**. See further information .

A skeleton script to connect to T/HIS and disconnect again would then be:

```python
import Oasys.THIS

connection = Oasys.THIS.connect(port=50052)

...

Oasys.THIS.disconnect(connection)
```

or if you want to terminate the instance of T/HIS use terminate instead of disconnect.

| 
```javascript
var m =  Model.GetFromID(1);

var f = AllocateFlag();

m.FlagAll(f, Entity.NODE);

if (m.QueryDataPresent(Component.DX, Entity.NODE)) 
{
   var curve_array= m.GetDataFlagged(f, Component.DX); 
}

Plot();
```
 | 
```python
import Oasys.THIS

#T/HIS must be in listening mode (Options>gRPC/Python>Start)
connection = Oasys.THIS.connect(port=50052)
m =  Oasys.THIS.Model.GetFromID(1)

f = Oasys.THIS.AllocateFlag()

m.FlagAll(f, Oasys.THIS.Entity.NODE)

if m.QueryDataPresent(Oasys.THIS.Component.DX, Oasys.THIS.Entity.NODE):
   curve_list = m.GetDataFlagged(f, Oasys.THIS.Component.DX);

Oasys.THIS.Plot()

Oasys.THIS.disconnect(connection)
```
 |
| --- | --- |

All the classes and methods or functions used in the Python script above can be found in the [T/HIS Python API](../Storage/sphinx/22.1/T-HIS/index.html) documentation, in the following pages:

* [Connection methods](../Storage/sphinx/22.1/T-HIS/index.html) (to start an instance of T/HIS, and to disconnect Python from it at the end)
* [Model class](../Storage/sphinx/22.1/T-HIS/Model.html) (to get the model that has an ID=1, to QueryDataPresent, and to GetDataFlagged)
* [Functions](../Storage/sphinx/22.1/T-HIS/global.html) (to allocate a flag and to Plot/update graphs)