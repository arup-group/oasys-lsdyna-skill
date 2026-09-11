## Getting started

As Python is running outside PRIMER, the first thing a script needs to do is to either start an instance of PRIMER, or to connect to an already running instance of PRIMER. At the end of the script you should then either disconnect again or terminate the PRIMER instance.

A skeleton Python script to start PRIMER (Installed at C:\install\_directory\primerXX\_x64.exe) and then terminate it is:

```python
import Oasys.PRIMER

connection = Oasys.PRIMER.start(abspath="C:\\install_directory\\primerXX_x64.exe")

...

Oasys.PRIMER.terminate(connection)
```

By default PRIMER will use port 50051 to communicate with Python and will allocate 25MB of memory for running scripts. These can be changed by adding port and memory arguments to the start function. e.g:


```python
connection = Oasys.PRIMER.start(abspath="C:\\install_directory\\primerXX_x64.exe", port=1234, memory=100)
```


PRIMER can also be started in batch mode so that the main graphics window is not shown by using a batch argument:


```python
connection = Oasys.PRIMER.start(abspath="C:\\install_directory\\primerXX_x64.exe", batch=True)
```


To connect to an instance of PRIMER that is already running, **PRIMER must currently have been started in a special mode telling it to listen on a port for gRPC messages**. See further information .

A skeleton script to connect to PRIMER and disconnect again would then be:

```python
import Oasys.PRIMER

connection = Oasys.PRIMER.connect(port=50051)

...

Oasys.PRIMER.disconnect(connection)
```

or if you want to terminate the instance of PRIMER use terminate instead of disconnect.

| 
```javascript
var m = new Model();

Message("Making nodes");

for (y=0; y<11; y++)
{
    for (x=0; x<11; x++)
        var n = new Node(m, 1+x+(y*11), x*10, y*10, 0);
}

Message("Making shells");

for (i=1; i<=10; i++)
{
    for (j=1; j<=10; j++)
        var s = new Shell(m, i+(j*10), i, ((i-1)*11)+j+0, ((i-1)*11)+j+1, ((i-0)*11)+j+1, ((i-0)*11)+j+0);
}

m.UpdateGraphics();
View.Show(View.XY);
View.Ac();
```
 | 
```python
import Oasys.PRIMER

connection = Oasys.PRIMER.start(abspath="C:\\install_directory\\primerXX_x64.exe")

m = Oasys.PRIMER.Model()

Oasys.PRIMER.Message("Making nodes")

for y in range(0, 11):
    for x in range(0, 11):
        Oasys.PRIMER.Node(m, 1+x+(y*11), x*10, y*10, 0)
        
Oasys.PRIMER.Message("Making shells")

for i in range(1, 11):
    for j in range(1, 11):
        Oasys.PRIMER.Shell(m, i+(j*10), i, ((i-1)*11)+j+0, ((i-1)*11)+j+1, ((i-0)*11)+j+1, ((i-0)*11)+j+0)

m.UpdateGraphics()
Oasys.PRIMER.View.Show(Oasys.PRIMER.View.XY)
Oasys.PRIMER.View.Ac()

Oasys.PRIMER.disconnect(connection)
```
 |
| --- | --- |

All the classes and methods or functions used in the Python script above can be found in the [PRIMER Python API](../Storage/sphinx/22.1/PRIMER/index.html) documentation, in the following pages:

* [Connection methods](../Storage/sphinx/22.1/PRIMER/index.html) (to start an instance of PRIMER and to disconnect Python from it at the end)
* [Model class](../Storage/sphinx/22.1/PRIMER/Model.html) (to create a model, and to update graphics)
* [Functions](../Storage/sphinx/22.1/PRIMER/global.html) (to print a message)
* [Node class](../Storage/sphinx/22.1/PRIMER/Node.html) (to create nodes)
* [Shell class](../Storage/sphinx/22.1/PRIMER/Shell.html) (to create shells)
* [View class](../Storage/sphinx/22.1/PRIMER/View.html) (to change the view and autoscale)