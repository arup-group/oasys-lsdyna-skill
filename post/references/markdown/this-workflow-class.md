# Workflow class

The Workflow class allows you to read and write workflow files. [More...](this-workflow-class.md#Workflow_details)

The T/HIS JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [ModelIdFromIndex](this-workflow-class.md#Workflow::ModelIdFromIndex)(model\_index*[integer]*, workflow\_name (optional)*[string]*)
* [ModelUnitSystemFromIndex](this-workflow-class.md#Workflow::ModelUnitSystemFromIndex)(model\_index*[integer]*, workflow\_name (optional)*[string]*)
* [ModelUserDataBuildFromIndex](this-workflow-class.md#Workflow::ModelUserDataBuildFromIndex)(model\_index*[integer]*, workflow\_name (optional)*[string]*)
* [ModelUserDataFromIndex](this-workflow-class.md#Workflow::ModelUserDataFromIndex)(model\_index*[integer]*, workflow\_name (optional)*[string]*)
* [ModelUserDataProgramFromIndex](this-workflow-class.md#Workflow::ModelUserDataProgramFromIndex)(model\_index*[integer]*, workflow\_name (optional)*[string]*)
* [ModelUserDataVersionFromIndex](this-workflow-class.md#Workflow::ModelUserDataVersionFromIndex)(model\_index*[integer]*, workflow\_name (optional)*[string]*)
* [NumberOfSelectedModels](this-workflow-class.md#Workflow::NumberOfSelectedModels)(workflow\_name (optional)*[string]*)
* [Refresh](this-workflow-class.md#Workflow::Refresh)()
* [WorkflowDefinitionFilename](this-workflow-class.md#Workflow::WorkflowDefinitionFilename)(workflow\_name (optional)*[string]*)
* [WriteToFile](this-workflow-class.md#Workflow::WriteToFile)(user\_data*[object]*, output\_filename*[string]*, workflow\_definition\_filename*[string]*, extra (optional)*[object]*)

## Workflow constants

### Constants for UnitSystem

| **Name** | **Description** |
| --- | --- |
| Workflow.UNIT\_SYSTEM\_NONE | No unit system |
| Workflow.UNIT\_SYSTEM\_U1 | U1 unit system (m, kg, s) |
| Workflow.UNIT\_SYSTEM\_U2 | U2 unit system (mm, t, s) |
| Workflow.UNIT\_SYSTEM\_U3 | U3 unit system (mm, kg, ms) |
| Workflow.UNIT\_SYSTEM\_U4 | U4 unit system (mm, g, ms) |
| Workflow.UNIT\_SYSTEM\_U5 | U5 unit system (ft, slug, s) |
| Workflow.UNIT\_SYSTEM\_U6 | U6 unit system (m, t, s) |

| Detailed Description<br>The Workflow class gives you simple functions to read and write workflow files |
| --- |

| Details of functions 
ModelIdFromIndex(model\_index*[integer]*, workflow\_name (optional)*[string]*) [static]
Description<br>Returns the id of a model selected by the user by index (starting at 0). |
| --- |

#### Arguments

* model\_index (integer)
 
The index of the model to return the unit system for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.

* workflow\_name (optional) (string)
 
The workflow name to return the model id for.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the id of the first model selected by the user<br>
```

var id = Workflow.ModelIdFromIndex(0);
      
```
<br>To get the id of the second model and workflow name "Automotive Assessment"<br>
```

var id = Workflow.ModelIdFromIndex(1, "Automotive Assessment");
      
```
 |
| --- |

* * *

| ModelUnitSystemFromIndex(model\_index*[integer]*, workflow\_name (optional)*[string]*) [static]
Description<br>Returns the unit system of a model selected by the user by index (starting at 0). Will be [Workflow.UNIT_SYSTEM_NONE](this-workflow-class.md#Workflow.UNIT_SYSTEM_NONE) or [Workflow.UNIT_SYSTEM_U1](this-workflow-class.md#Workflow.UNIT_SYSTEM_U1) or [Workflow.UNIT_SYSTEM_U2](this-workflow-class.md#Workflow.UNIT_SYSTEM_U2) or [Workflow.UNIT_SYSTEM_U3](this-workflow-class.md#Workflow.UNIT_SYSTEM_U3) or [Workflow.UNIT_SYSTEM_U4](this-workflow-class.md#Workflow.UNIT_SYSTEM_U4) or [Workflow.UNIT_SYSTEM_U5](this-workflow-class.md#Workflow.UNIT_SYSTEM_U5) or [Workflow.UNIT_SYSTEM_U6](this-workflow-class.md#Workflow.UNIT_SYSTEM_U6) |
| --- |

#### Arguments

* model\_index (integer)
 
The index of the model to return the unit system for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.

* workflow\_name (optional) (string)
 
The workflow name to return the unit system for.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the unit system for the workflow selected from the menu, for the first model selected by the user<br>
```

var unit_system = Workflow.ModelUnitSystemFromIndex(0);
      
```
<br>To get the unit system of the second model and workflow name "Automotive Assessment"<br>
```

var unit_system = Workflow.ModelUnitSystemFromIndex(1, "Automotive Assessment");
      
```
 |
| --- |

* * *

| ModelUserDataBuildFromIndex(model\_index*[integer]*, workflow\_name (optional)*[string]*) [static]
Description<br>Returns the build number of the program that was used to write out the user data of a model for the selected workflow by index (starting at 0). |
| --- |

#### Arguments

* model\_index (integer)
 
The index of the model to return the program build number for.

* workflow\_name (optional) (string)
 
The workflow name to return the build number for. This is required when a PRIMER item is generated from REPORTER. If it is not specified the build number for the first user data associated with the model is returned (this is the 'normal' case where a user launches a workflow from the workflow menu).

| Returns
<br>number<br>
Return type
<br>number |
| --- |

| Example
<br>To get the build number of the program that was used to write user data for the first model that has data for the workflow selected by the user<br>
```

var build = Workflow.ModelUserDataBuildFromIndex(0);
      
```
<br>To get the build number of the program that was used to write user data for the second model that has data for the "Automotive Assessment" workflow<br>
```

var build = Workflow.ModelUserDataBuildFromIndex(1, "Automotive Assessment");
      
```
 |
| --- |

* * *

| ModelUserDataFromIndex(model\_index*[integer]*, workflow\_name (optional)*[string]*) [static]
Description<br>Returns the user data associated with a model by index (starting at 0). |
| --- |

#### Arguments

* model\_index (integer)
 
The index of the model to return the user data for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.

* workflow\_name (optional) (string)
 
The workflow name to return the user data for.

| Returns
<br>object<br>
Return type
<br>Object |
| --- |

| Example
<br>To get the user data for the workflow selected from the menu, for the first model selected by the user<br>
```

var user_data = Workflow.ModelUserDataFromIndex(0);
      
```
<br>To get the user data for the second model that has user data for the workflow name "Automotive Assessment"<br>
```

var user_data = Workflow.ModelUserDataFromIndex(1, "Automotive Assessment");
      
```
 |
| --- |

* * *

| ModelUserDataProgramFromIndex(model\_index*[integer]*, workflow\_name (optional)*[string]*) [static]
Description<br>Returns the name of the program that was used to write out the user data of a model for the selected workflow by index (starting at 0). |
| --- |

#### Arguments

* model\_index (integer)
 
The index of the model to return the program name for.

* workflow\_name (optional) (string)
 
The workflow name to return the program name for. This is required when a PRIMER item is generated from REPORTER. If it is not specified the program name for the first user data associated with the model is returned (this is the 'normal' case where a user launches a workflow from the workflow menu).

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get the name of the program that was used to write user data for the first model that has data for the workflow selected by the user<br>
```

var program = Workflow.ModelUserDataProgramFromIndex(0);
      
```
<br>To get the name of the program that was used to write user data for the second model that has data for the "Automotive Assessment" workflow<br>
```

var program = Workflow.ModelUserDataProgramFromIndex(1, "Automotive Assessment");
      
```
 |
| --- |

* * *

| ModelUserDataVersionFromIndex(model\_index*[integer]*, workflow\_name (optional)*[string]*) [static]
Description<br>Returns the version of the program that was used to write out the user data of a model for the selected workflow by index (starting at 0). |
| --- |

#### Arguments

* model\_index (integer)
 
The index of the model to return the program version for.

* workflow\_name (optional) (string)
 
The workflow name to return the version for. This is required when a PRIMER item is generated from REPORTER. If it is not specified the version for the first user data associated with the model is returned (this is the 'normal' case where a user launches a workflow from the workflow menu).

| Returns
<br>number<br>
Return type
<br>number |
| --- |

| Example
<br>To get the version of the program that was used to write user data for the first model that has data for the workflow selected by the user<br>
```

var version = Workflow.ModelUserDataVersionFromIndex(0);
      
```
<br>To get the version of the program that was used to write user data for the second model that has data for the "Automotive Assessment" workflow<br>
```

var version = Workflow.ModelUserDataVersionFromIndex(1, "Automotive Assessment");
      
```
 |
| --- |

* * *

| NumberOfSelectedModels(workflow\_name (optional)*[string]*) [static]
Description<br>Returns the number of models selected by the user. |
| --- |

#### Arguments

* workflow\_name (optional) (string)
 
The workflow name to return the number of models for. If it's not defined the number of models that were selected by the user on the workflow menu is returned. If it's defined and the workflow was run from the workflow menu, the number of models, out of the models selected by the user, that have data for the named workflow is returned. If it's defined and the workflow is run from REPORTER, the number of models, out of all the models loaded in the session, that have data for the named workflow is returned.

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the number of models selected by the user in the workflow menu<br>
```

var n = Workflow.NumberOfSelectedModels();
      
```
<br>To get the number of models that have user data for the "Automotive Assessment" workflow<br>
```

var n = Workflow.NumberOfSelectedModels("Automotive Assessment");
      
```
 |
| --- |

* * *

| Refresh() [static]
Description<br>Scan for fresh workflow data |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br><br>
```

Workflow.Refresh();
      
```
 |
| --- |

* * *

| WorkflowDefinitionFilename(workflow\_name (optional)*[string]*) [static]
Description<br>Returns the workflow definition filename |
| --- |

#### Arguments

* workflow\_name (optional) (string)
 
The workflow name to return the workflow defintion filename for. This is required when a POST item is generated from REPORTER. If it is not specified the first workflow user data associated with the model is returned (this is the 'normal' case where a user launches a workflow from the workflow menu).

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get the worklow definition filename that the script has been run with<br>
```

      var workflow_definition_filename = Workflow.WorkflowDefinitionFilename();
      
```
 |
| --- |

* * *

| WriteToFile(user\_data*[object]*, output\_filename*[string]*, workflow\_definition\_filename*[string]*, extra (optional)*[object]*) [static]
Description<br>Writes a workflow to a JSON file. If the file already exists the workflow is added to the file (or updated if it is already in the file). |
| --- |

#### Arguments

* user\_data (object)
 
Object containing user data required for the workflow.

* output\_filename (string)
 
Filename to write to.

* workflow\_definition\_filename (string)
 
Filename of the workflow definition file.

* extra (optional) (object)

Extra workflow information 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| model\_unit\_system (optional) | integer | The model unit system. Can be [Workflow.UNIT_SYSTEM_NONE](this-workflow-class.md#Workflow.UNIT_SYSTEM_NONE) or [Workflow.UNIT_SYSTEM_U1](this-workflow-class.md#Workflow.UNIT_SYSTEM_U1) or [Workflow.UNIT_SYSTEM_U2](this-workflow-class.md#Workflow.UNIT_SYSTEM_U2) or [Workflow.UNIT_SYSTEM_U3](this-workflow-class.md#Workflow.UNIT_SYSTEM_U3) or [Workflow.UNIT_SYSTEM_U4](this-workflow-class.md#Workflow.UNIT_SYSTEM_U4) or [Workflow.UNIT_SYSTEM_U5](this-workflow-class.md#Workflow.UNIT_SYSTEM_U5) or [Workflow.UNIT_SYSTEM_U6](this-workflow-class.md#Workflow.UNIT_SYSTEM_U6) |

| Returns
<br>No return value |
| --- |

| Example
<br>To write the file "C:\my\_workflow.json" with some user data and the contents of the workflow definition file "C:\workflows\my\_workflow\_definition.json"<br>
```

      var user_data = { part_ids: [1, 2, 10, 100], node_ids: [12, 23, 24] };
      Workflow.WriteToFile(user_data, "C:\\my_workflow.json", "C:\\workflows\\my_workflow_definition.json");
      
```
 |
| --- |

* * *