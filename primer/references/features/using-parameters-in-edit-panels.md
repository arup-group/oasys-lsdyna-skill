##  Using Parameters in Edit Panels

From PRIMER 9.3RC2 onwards Parameters, as in the Ansys LS-DYNA \*PARAMETER keyword, are fully supported in interactive editing panels.

| <ul> <li> <b>Wherever Parameters have been used in the input deck these will be displayed in edit panels. </b> <br> <br>Parameters can be displayed either as they would appear in the keyword file, ie <span class="courierbold">&amp; <i>NAME </i>. </span>(Here <span class="courierbold">&amp;IHQ_1 </span>) <br> <br>Or their numeric values can be shown, underlined with dots to show that the field is parameterised. <br> </li> </ul> | **![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_10_1.png)** |
| --- | --- |

* **Parameters may be typed into any editing panel data field.**  
 
In exactly the same way that you can type in numbers you can now also type in parameters using & *NAME*  syntax. 
 
If &lt;  *NAME*  &gt; is an existing parameter its value will be used. 
If it is a new parameter you will be invited to provide its value. 
 
This behaviour is triggered by typing the initial ampersand " **&** " into the data field. A list of all parameters will be mapped, and as you type more letters the narrows down to show only those which match. 
 
It is also possible to use wildcard syntax containing \* and ?. In that case the popup will show all parameters matching this pattern when \* is replaced with any character string and ? with any single character.

| <ul> <li> <b>Hovering the cursor over a parameterised field gives further options. </b> <br> <br>If you hover the cursor over a field containing a parameter a popup box giving more details about its attributes will be mapped. You will also be able to <span class="buttontext">EDIT </span>the parameter by using the appropriate button in that box. <br> </li> </ul> | **![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_10_2.png)** |
| --- | --- |

* **Parameters may be created, edited and deleted just like any other keyword item.**  
 
Parameters can now be processed just like any other keyword item using the PARAMETER keyword tool. 
   ****
* **The \*PARAMETER\_EXPRESSION keyword is now fully supported.**  
 
The \_EXPRESSION variant of parameters, in which a parameter may be defined using an arbitrary mathematical expression that can reference other parameters, is now supported. 
 
These are evaluated on initial keyword input, and the correct value is used in the data field. 
They may also be created and edited interactively.

Full details of the processing and display of Parameters may be found in
[PARAMETERS](parameters.md).

[Previous](feature-line-pick-mode.md)  |  [Next](formulae-in-edit-panels.md)