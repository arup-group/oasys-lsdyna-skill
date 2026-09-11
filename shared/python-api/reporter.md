## Getting started

As Python is running outside REPORTER, the first thing a script needs to do is to either start an instance of REPORTER, or to connect to an already running instance of REPORTER. At the end of the script you should then either disconnect again or terminate the REPORTER instance.

A skeleton Python script to start REPORTER (Installed at C:\install\_directory\reporterXX\_x64.exe) and then terminate it is:

```python
import Oasys.REPORTER

connection = Oasys.REPORTER.start(abspath="C:\\install_directory\\ReporterXX_x64.exe")

...

Oasys.REPORTER.terminate(connection)
```

By default REPORTER will use port 50053 to communicate with Python and will allocate 25MB of memory for running scripts. These can be changed by adding port and memory arguments to the start function. e.g:


```python
connection = Oasys.REPORTER.start(abspath="C:\\install_directory\\ReporterXX_x64.exe", port=1234, memory=100)
```


REPORTER can also be started in batch mode so that the main graphics window is not shown by using a batch argument:


```python
connection = Oasys.REPORTER.start(abspath="C:\\install_directory\\ReporterXX_x64.exe", batch=True)
```


To connect to an instance of REPORTER that is already running, **REPORTER must currently have been started in a special mode telling it to listen on a port for gRPC messages**. See further information .

A skeleton script to connect to REPORTERand disconnect again would then be:

```python
import Oasys.REPORTER

connection = Oasys.REPORTER.connect(port=50053)

...

Oasys.REPORTER.disconnect(connection)
```

or if you want to terminate the instance of REPORTER use terminate instead of disconnect.

| 
```javascript
// Save this in a file named "exampleJavaScript.js" and run it via command line:
// C:\install_directory\ReporterXX_x64.exe -script=exampleJavaScript.js -batch

var aTemplate = new Template();

Debug("Created template with name " + aTemplate.filename);

var aPage = aTemplate.GetPage(0);

LogPrint("Creating a text item!");

var aItem = new Item(aPage, Item.TEXT, "Title", 100, 100, 270, 290);
aItem.text = "First page";
aItem.fontSize = 48;
aItem.textColour = Colour.Red();
aItem.justify = Reporter.JUSTIFY_CENTRE;

Debug("Finishing script: leaving the template open!");

```
 | 
```python
import Oasys.REPORTER

connection = Oasys.REPORTER.start(abspath="C:\\install_directory\\ReporterXX_x64.exe")

aTemplate = Oasys.REPORTER.Template()

Oasys.REPORTER.Debug("Created template with name " + aTemplate.filename)

aPage = aTemplate.GetPage(0)

Oasys.REPORTER.LogPrint("Creating a text item!")

aItem = Oasys.REPORTER.Item(aPage, Oasys.REPORTER.Item.TEXT, "Title", 100, 100, 270, 290)
aItem.text = "First page"
aItem.fontSize = 48
aItem.textColour = Oasys.REPORTER.Colour.Red()  
aItem.justify = Oasys.REPORTER.Reporter.JUSTIFY_CENTRE

Oasys.REPORTER.Debug("Closing the connection and leaving the template open!")

Oasys.REPORTER.disconnect(connection)

```
 |
| --- | --- |

All the classes and methods or functions used in the Python script above can be found in the [REPORTER Python API](../Storage/sphinx/22.1/REPORTER/index.html) documentation, in the following pages:

* [Connection methods](../Storage/sphinx/22.1/REPORTER/index.html) (to start and instance of REPORTER and to disconnect Python from it at the end)
* [Template class](../Storage/sphinx/22.1/REPORTER/Template.html) (to create a template)
* [REPORTER functions](../Storage/sphinx/22.1/REPORTER/global.html) (to print messages)
* [Item class](../Storage/sphinx/22.1/REPORTER/Item.html) (to add items to a page of the template)