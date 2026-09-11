In the fifth and final step, the tool offers the option of automatically generating a list of relevant analysis keywords.

To do so, simply check the tick box next to the desired keyword(s) and click on **** **Apply**. ![](../Storage/primer-22-1/creating-or-activating-analysis-keywords/creating-or-activating-analysis-keywords-2024-10-08.png)

The main fields can be set in this panel before generating the keyword. All other parameters are set to their defaults.

If a keyword that must be restricted to a single instance per model is selected, then it will get activated if not already active in the model, otherwise it will simply pass in the value(s) set in the tool's panel. If such a keyword is already active in the model and it is not selected in the Battery setup window then this will not affect the status of the keyword. On the other hand, if the keyword is already active in the model and is selected in this panel then the originally set parameters that are not editable in this panel will not get affected. This applies to the following keywords:

\*CONTROL\_SOLUTION

\*CONTROL\_TERMINATION

\*CONTROL\_TIMESTEP

\*CONTROL\_THERMAL\_TIMESTEP

\*CONTROL\_THERMAL\_SOLVER

\*EM\_CONTROL

\*EM\_CONTROL\_TIMESTEP

On the other hand, if the selected keyword can have multiple instances per model, then a new instance will be created. This applies to the following keywords:

\*EM\_OUTPUT

\*EM\_RANDLES\_EXOTHERMIC\_REACTION

\*EM\_RANDLES\_SHORT

Once applied, individual **Edit** buttons will get activated and can be used to display the keyword 'Modify' panel to fully view/edit all fields.

![](../Storage/primer-22-1/creating-or-activating-analysis-keywords/creating-or-activating-analysis-keywords-2024-10-08-1.png)

You will have the option to make modifications in the '5. Analysis’ panel after clicking on **Apply.**The **Apply** button will get reactivated if any of the parameters in the panel get updated. However, unselecting a keyword after initially clicking on **Apply**, will not cause it's deletion. You can only edit the parameters for already selected keywords or activate / create new keywords.

[Previous](defining-the-randles-parameters.md)  |  [Next](storing-data-in-csv.md)