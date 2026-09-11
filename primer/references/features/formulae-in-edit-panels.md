##  Formulae in Edit Panels

| It is possible to specify the value of a field on an edit panel as a formula in terms of the values of other fields. The fields are referenced by the corresponding acronym on the header of the edit panel. For example, the input =(x+y)/2 to the field for the Y coordinate will set the Y coordinate to the sum of the X coordinate and the previous Y coordinate divided by 2. <br>The acronyms to reference the fields are almost always the name of the field in the Ansys LS-DYNA keyword manual, which is also written above the field in the edit panel. To reference an acronym whose name contains an arithmetical operator, e.g. r/lx , the acronym should be typed "r/lx" (in quotes) to distinguish it from r divided by lx , which may or may not exist. Note that acronyms are not case-sensitive.<br> <br><br> <br>Similarly to the behaviour for parameters above, just typing " = " maps a list of all formulae previously used in the model. When typing more characters, the list will be refined accordingly. | ![](../Storage/primer-22-1/primer_links/sect_2/images/formula01.png) |
| --- | --- |

Once the formula is evaluated, PRIMER does not store which data field you used it for. If you change the X coordinate after the formula =(x+y)/2 has been evaluated, the field where you used that formula does not change its value unless you edit it again. If the formula references a parameter or a field containing a parameter, the evaluation will be done just using its value.

Unlike for parameters, integer by integer divisions in formulae are carried out using floating point arithmetic. For instance, when a formula contains the calculation 7/4 , the result will be 1.75 when assigned to a floating point field.

In every panel in PRIMER , not just in keyword editing panels, it is possible to use a formula for an arbitrary numeric input field as long as it only uses numeric values but no acronyms. To replace the value of a field by twice its old value, you can just click at the beginning of the field without deleting the existing character string and add =2\* in front of the existing number. PRIMER will carry out the calculation.

When the preference primer\*formula\_req\_equal is set to FALSE, then PRIMER treats every string with an arithmetic operator +, -, \*, / as formula without requiring the = sign.

More detail about how to use formulae in the generic keyword editing panel (the Keyword editor) can be found in
[Working with Multiple Rows](working-with-multiple-rows.md#multi_edit).

[Previous](using-parameters-in-edit-panels.md)  |  [Next](operational-hierarchy.md)