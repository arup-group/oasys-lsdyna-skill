####  Declash on Writing a Model

Some pre-processing software require that element, set and material cards do not clash for the different types (e.g. shell 1 and solid 1 are not permitted), although this is NOT a requirement for Ansys LS-Dyna or PRIMER.

On keyout of a model which contains such clashes, the user will be prompted by a clash information panel and given the option to fix all clashes or those on selected types. If the user selects DEACTIVATE the pref setting &lt;check\_for\_clashing\_element\_and\_set\_labels\_on\_keyout&gt; will be set to FALSE and the panel will not appear again.

![](../Storage/primer-22-1/primer_links/sect_3/images/clashreportonoutput.png)

[Previous](advanced-options.md)  |  [Next](when-writing-out-a-model-may-change-its-representation-in-memory.md)