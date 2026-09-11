###  Dashboard Check

![](../Storage/primer-22-1/primer_links/sect_3/images/dashboard1.gif)

This function is accessed by the Dashboard Check button under the check tool. This will display the dashboard check panel which consists of a set of different check tools.

* element quality check - model check but only running the active quality checks (see [check &gt; options](Options.html#options)) on shells, solids and tshells. These include timestep and added mass as well as geometric tests
* [model check](model-check.md#39MODELCHECK) - all PRIMER model checks but without quality checks
* [Dyna output check](reading-ls-dyna-output-error-files.md#readdyna) - finds otf and prt files for this model (or d3hsp) and any mess000 files and reports errors, warnings and termination messages
* model metrics - some bespoke model checks which are are defined in configuration file /primer\_library/scripts/dashboard\_checks/model\_metrics.config
* Keyword Cull Check - Lists all the keywords/fields which will be culled by writing out the model in the current Ansys LS-DYNA output version.
* JavaScript checks - an unlimited number of checking scripts which reside in /primer\_library/scripts/dashboard\_checks

![](../Storage/primer-22-1/primer_links/sect_3/images/dashboardcheck.gif)

The required checks can be activated by pressing Check or to do the lot RUN\_ALL

![](../Storage/primer-22-1/primer_links/sect_3/images/dashboardcheck2.gif)

Settings - will access the check options panel

Details - will give listing boxes of detailed information about checking

Edit - will access text editor for the model metric configuration file or the JavaScripts for review and modification

####  Model metrics config file

These are located in /primer\_library/scripts/dashboard\_checks which may be located in the system or home area or cwd.

The model\_metrics.config file controls the model metrics check. If the file is blank no checks are made. If no file exists, primer will create a template file for you. Each tag uses MIN or MAX to specify and upper or lower bound and ERR or WARN and a given value.

CHECK\_MASS

* MODEL\_MASS\_MIN\_ERR, &lt;value&gt; - error if model mass less than given value
* MODEL\_COFGX\_MIN\_WARN, &lt;value&gt; - warn if CofG X less than given value
* MODEL\_COFGZ\_MAX\_ERR, &lt;value&gt; - error if CofG Z exceeds given value

CHECK\_ADDED\_MASS

* MODEL\_ADDED\_MASS\_MAX\_ERR, &lt;value&gt; - error if added mass exceeds value
* MODEL\_ADDED\_MASS\_PERCENT\_MAX\_ERR, &lt;value&gt; - error if percentage added mass exceeds value

CHECK\_TIMESTEP

* MODEL\_TIMESTEP\_MIN\_ERR, &lt;value&gt; - error if model timestep less than value
* ELEMENT\_TIMESTEP\_MIN\_ERR, &lt;value&gt; - error if smallest element timestep less than value

####  JavaScript checks 
 
Some simple example JavaScripts are supplied in /primer\_library/scripts/dashboard\_checks.
 
These show how the JavaScript Check Class (see JavaScript manual) can be used to set the check status, configure the headings that appear and add extra messages.

* Check.SetDashboardStatus(Check.ERROR)
* Check.SetDashboardStatus(Check.WARNING)
* Check.SetDashboardMessage("mess1", "mess2")
* Check.AddDashboardComment("message")

The logic which determines how to set these is in the hands of the scriptor.

####  Model Health

It is now possible to compute the overall health of the model using results from all the other dashboard checks. These results can be accessed from a special script called model\_health.config.js. This script should be placed along with the other user defined JavaScript files.

User defined model health will be computed using the JavaScript and will appear on the dashboard panel below the overall results buttons.

![](../Storage/primer-22-1/primer_links/sect_3/images/dash_model_health.png)

There are special JavaScript functions which can be accessed only from this file. These are listed below :

* Check.GetAllDashboards();
* Check.AddDashboardHealth(Message, text colour, button colour);

For more details please look at the JavaScript manual and the example script which has been provided.

####  Batch dashboard checks

Dashboard checks can be performed from the command line and in batch mode by using the syntax: : **DASHBOARD MODEL &lt;n&gt; DASHFILE &lt;filename&gt; APPLY or DASHBOARD MODEL &lt;n&gt; APPLY.**

This command will run all the dashboard checks and write out the summary of all the dashboard checks.

[Previous](visualising-ls-dyna-load-profile.md)  |  [Next](operations-on-models.md)