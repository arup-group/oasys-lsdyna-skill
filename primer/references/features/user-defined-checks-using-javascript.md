###  User Defined Checks Using JavaScript

New user defined checks can be added by writing a check in JavaScript. Two different types of checks can be added.

* An item check that will be run for every item of a single keyword (e.g. every part in a model). This check should be in a file called &lt;classname&gt;  .js in a subdirectory called checks in the PRIMER script directory. e.g. to write a part check the script should be called Part.js . Note that the case is important. The name of the file should match the name of the class, e.g. Part.js or Node.js. Only one script file for each class is allowed **in each script directory** but the file can contain multiple checks. 
These checks can only be written if there is a class in JavaScript for the item type that has the Error and Warning methods defined. Virtually all of the classes in PRIMER for keywords do have this. However there are a few exceptions. Custom checks cannot be written for \*CONTROL and \*DATABASE cards as they are supported as properties on the Model class. There is no Control or Database class with the Error and Warning methods defined.
* A custom check that will be run for the whole model. This check should be in a file called custom.js in a subdirectory called checks in the PRIMER script directory.

PRIMER will automatically search for these scripts when doing a check and if found they will be run. The default script directories are:

* $OA\_ADMIN/primer\_library/scripts (if $OA\_ADMIN is defined)
* $OA\_INSTALL/primer\_library/scripts
* $OA\_HOME/primer\_library/scripts

but these can be changed if required. (See
[Maintaining a Library of JavaScripts](maintaining-a-library-of-javascripts.md#library) for more details)

So for example to add a part check that is accessible for all users you should create a file $OA\_INSTALL/primer\_library/scripts/checks/Part.js

You could also write your own part check by adding another file $OA\_HOME/primer\_library/scripts/checks/Part.js

Both scripts would be run.

####  User defined item checks

An item check will have 3 arguments passed to it automatically in the arguments array. The first argument is the script name, the second argument is the Model object, and the third argument is the object for the JavaScript item.

For example, we may want to check that any shell parts in the model that have 'BIW' and 'rail' in their title use element formulation 16. This could be done by writing the following script in Part.js.


```
// arguments[0] is name of script
var m = arguments[1];   // arguments[1] is model
var p = arguments[2];   // arguments[2] is part
if (p.exists && p.secid && p.heading.match(/BIW/) && p.heading.match(/rail/))
{
    var s = Section.GetFromID(m, p.secid);
    if (s.exists && s.type == Section.SHELL && s.elform != 16)
        p.Warning("BIW Rail part elform not 16");
}
```


You can trigger a warning or an error by using the Warning() or Error() methods in the item class. In the above example we triggered a Warning. You can trigger multiple warnings and/or errors for an item by calling the methods more than once with different strings. Warnings and/or errors with the same string will be grouped together (shown as a branch below) in the error tree.

These warnings and/or errors are shown in the tree just like normal warnings/errors. For example the output from the above check is shown below.

![](../Storage/primer-22-1/primer_links/sect_3/images/user_item_error.png)

####  User defined custom check

A custom check will have 2 arguments passed to it automatically in the arguments array. The first argument is the script name and the second argument is the Model object. For example we may want to check that the mass of the model is 1500kg +/- 0.5%. We could do this by writing the following in a script custom.js .


```
// arguments[0] is name of script
var m = arguments[1];   // arguments[1] is model
mass = m.Mass();
if ( Math.abs((mass-1500)/1500) > 0.005)
    Check.Error("Model mass is not correct to +/- 0.5%", "Mass is "+mass+" but should be 1500kg");

```


You can trigger a warnings and/or an error by using the static methods in the Check class Check.Error() and Check.Warning() . These errors are shown in a new branch of the error tree called CUSTOM\_CHECK . For example, the output from the above check is shown below.

![](../Storage/primer-22-1/primer_links/sect_3/images/user_custom_error.png)

| The above example also shows that you can pass a detailed message as a second argument to the Warning() or Error() methods. Currently this is not available in the error tree. To see it you have to use the popup from the other check window and select Listing . | ![](../Storage/primer-22-1/primer_links/sect_3/images/user_custom_error_details1.png) |
| --- | --- |

The detailed message is then shown in the listing window.

![](../Storage/primer-22-1/primer_links/sect_3/images/user_custom_error_details2.png)

[Previous](blocking-checks-on-individual-items.md)  |  [Next](reading-ls-dyna-output-error-files.md)