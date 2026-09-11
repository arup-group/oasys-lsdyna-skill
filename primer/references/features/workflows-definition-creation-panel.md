# Workflow Definition creation panel

Tools → Workflows → Create Workflow Definition

This panel allows you to create your own Workflow by creating a Workflow Definition, which will allow you to build your own bespoke tools. The Workflow Definition defines all the parameters of a Workflow: it describes what the Workflow does and points to scripts to run in PRIMER, D3PLOT or T/HIS.

![](../Storage/primer-22-1/workflows-definition-creation-panel-2023-02-09.png)

To create a new Workflow Definition, simply complete all the required fields in the menu and press Save at the top. A description of all the Workflow attributes is shown in the table below. You can import the data from an existing Workflow Definition using the Load button on the top left-hand side of the panel. This will populate all the fields with the data from the imported Workflow Definition. The Reset button clears all of the data from the textboxes and resets the panel.

The Workflow Tags are separated in a Category – Value pair and can be modified at the bottom of the panel. From the Category or Value textbox drop-downs, you can select already-existing items, which makes it easy to select tags from other Workflows. You can also manually type into the boxes to create new Categories or Values. Once you have filled both textboxes, you can Add the Tag to the Tags box at the bottom of the panel. Only tags in the Tags box will be written to the Workflow Definition file. You can remove tags from the Tags box by selecting them and clicking Remove.

To save a new Workflow Definition, use the Save button at the top. You can then save the Workflow Definition to any location on your system, but in order for the Oasys Suite to find your Workflow, it needs to be stored in one of the following directories:

* OA\_HOME/workflows
* OA\_INSTALL/workflows
* OA\_ADMIN/workflows
* The directory set by the oasys\*workflow\_definition\_directory preference

The table below names and describes all of the Workflow Definition attributes:

| Property | Description | Required |
| --- | --- | --- |
| Name | The name of the workflow. This is the text that gets displayed on the button in the Workflow menus. Please ensure that all workflows have a unique name. | Yes |
| Description | A description of the Workflow. This is used as the hover text for the button in the Workflow menus. | Yes |
| Action | This can be set to Auto or Manual. Auto workflows run automatically as soon as the model is read into D3PLOT or T/HIS. Manual workflows are run when selected them from the Workflow menu. | Yes |
| Pre-process script | The path to the script to run in PRIMER. If a relative path is used, then it is relative to the location of the Workflow Definition file. If the Workflow should appear in PRIMER but no pre-processing script is required, use the pre\_no\_setup\_required.js script. | No |
| D3PLOT script | The path to the script to run in D3PLOT. If a relative path is used, then it is relative to the location of the Workflow Definition file. | No – but if it's not defined then a T/HIS script needs to be defined |
| T/HIS script | The path to the script to run in T/HIS. If a relative path is used, then it is relative to the location of the Workflow Definition file. | No – but if it's not defined then a D3PLOT script needs to be defined |
| Single model | Flag to say if this Workflow can be run on a single model. | Yes |
| Multiple Model | Flag to say if this Workflow can be run on multiple models. | Yes |
| Minimum multiple models | Minimum number of models required to run this on multiple models. | Yes, if Multiple Model is set to true |
| Maximum multiple models | Maximum number of models it can be used for. | No – if it is not defined then it is assumed there is no limit |
| Thumbnail | The path to a 24-bit uncompressed bitmap image which is shown on the Workflow button. The ideal image size is 422 x 284 pixels. If a relative path is used, then it is relative to the location of the Workflow Definition file. | No – if no workflow thumbnail is defined, a default image is used. |
| Tags | The Workflow can be tagged with different 'Category: Value' pairs which are used by the Workflow menus to filter the available Workflows. | No |

[Previous](workflows-menu-in-primer.md)  |  [Next](manage-model-workflows-panel.md)