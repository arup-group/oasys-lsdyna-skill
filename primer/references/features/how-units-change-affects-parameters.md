###  How Units Change Affects Parameters

When a model uses parameters, and data fields defined by parameters are affected by a units change, then if no action were taken the value of the data fields would no longer be the same as the value of their parameters thus breaking the association between them. This would be unsatisfactory and parameters need to be updated during a units change, but this is not straightforward because parameters do not have intrinsic units.

PRIMER handles this problem as follows:

* During a units change operation any data fields which use parameters "tell" their parameter definition what factor has been applied to them.
* Each affected parameter "remembers" this factor temporarily.
* When the units change is complete all parameters are scanned to see whether factors should be applied, and for those affected: 
 
    **Scalar parameters** are simply multiplied by this factor to give a new value.
 
    **Expression parameters** are more difficult since they may be affected both by modifed scalar ones and by changes to each other. Therefore:

    * Each expression parameter is re-evaluated, and the outcome compared with the &lt;original value&gt; \* &lt;any factor from units change&gt;.
    * If there is a mismatch then the outcome is factored to give the required value.
    * This process is repeated iteratively, since expression parameters may reference one another in an arbitrary order, until no further changes are required.

>  
> Once the correct factor has been determined for each expression then it is applied to the text string of that expression as a multiplier 
>  
>  **factor \* (**  *original expression*  **)**
>

This process effectively assigns an implicit unit type to parameters and scales them appropriately, so that their new values still match the scaled data fields to which they apply, which means that the association between parameters and data fields remains unbroken.

####  The particular case of expression parameters referring to other parameters in a conflicting way

Consider the following two parameters:

| \*PARAMETER | **TIME\_1** | Value = **1** |
| --- | --- | --- |
| \*PARAMETER\_EXPRESSION | **TIME\_2** | Value = " **TIME\_1 + 1** " = 2 |

If the model is now scaled from seconds units to milliseconds each of these two parameters must be multiplied by 1000. This gives the result:

| TIME\_1 becomes | 1 \* 1000 | Correct. Should be 1000 |
| --- | --- | --- |
| TIME\_2 becomes | either (TIME\_1 + 1) = 1001 <br>or(TIME\_1 + 1) \* 1000 = 1001000 | **Wrong**!! Should be 2000 |

Prior to PRIMER V13 this resulted in the connection between the data field (which would be scaled to the correct value) and the parameter (which would have the wrong value) getting broken. So the model would be numerically correct, but there would be a loss of parameter usage.

From PRIMER V13 onwards the problem is solved by converting expressions such as the above so that parameters inside an expression are scaled by the reciprocal of their "own" factors, effectively restoring them to their pre-scaled state, then the end result is scaled by the correct factor for the expression as a whole. So in the case above the result would be written:

| TIME\_2 becomes | ((TIME\_1 / 1000) + 1) \* 1000 = 2000 | **Correct**!! Should be 2000 |
| --- | --- | --- |

If for some reason the above logic fails to give the expected result then the behaviour in V13 onwards is:

* The new definition, here TIME\_2, is converted to an expression that is a simple number equal to the wanted result, here 2000.
* The original parameter definition is copied verbatim to TIME\_2\_OLD, providing a record of its contents.

This means that the connection between the parameter and its usage in the model is not broken, and that there is also a record of what the parameter used to be before its expression was changed to a plain number. The user is warned about this, and needs to resolve the situation manually if required.

The "\_OLD" definition is not referred to in the model, and can be deleted if not required.

####  Situations in which units change of parameters may fail

This process normally works well, but can fail for either or both of the following reasons:

**If a parameter is used inconsistently:**

>  
> For example if a parameter is used in a data field of length units, and also one of time units, then two different factors may be notified to the parameter definition. In this situation the most recently notified definition "wins" and will dictate the factor applied to the parameter, meaning that its association with some of the other data fields will be broken. 
>  
> The solution is obvious: don't use a parameter in incompatible contexts.
> 

**If only part of a model is subjected to units change, but parameters are used in all of it:**

>  
> In this situation factors from changed fields will cause the parameters to be updated, which may break their association with unchanged data fields.
>  
> The solution is not to change units of a subset of a parameterised model. It is normally the case that a units change is required when models from different sources are merged together, and the units change should be applied to the model as a whole  ***before***  it is merged.
> 
> 
> 
> 

> 
> #### Parameterised data fields on unreferenced loadcurves
> 
> Normally the data card which references a parameter implicitly defines its units, for example a parameter used for the X coordinate on a \*NODE card is implicitly makes the parameter a coordinate with units of length. However loadcurves (and labels and functions) are different in that the card which references the curve implicitly defines its X and Y coordinate units, a loadcurve in isolation has no inherent units.
> 
> 
> When a loadcurve is referenced any parameters can determine their units from the reference and the logic above is used.
> 
> 
> However when a loadcurve which is not referenced uses a parameter to define a data field, and that parameter is also used elsewhere, and a units change modifies the value of that parameter should the data field on the unreferenced loadcurve also change or not?
> 
> 
> Prior to V21.1 the default was "not to change".
> 
> 
> In this situation the data field on the loadcurve would retain its pre-units-change value and the parameter reference would be removed from that data field, ie it would change from "&some\_param" to a plain number.
> 
> 
> From V21.1 onwards the default is now "change".
> 
> 
> The data field value on the loadcurve is now updated to the post-units-change value of the parameter and the association with the parameter is retained.
> 
> 
> This is a version-specific change in behaviour so to give the option of returning to the old behaviour the following preference can be used:
> 
> 
> **primer\*update\_params\_on\_unused\_curves: true | false** (default **true** from V21.1 onwards)
> 

[Previous](selecting-units.md)  |  [Next](check-running-the-model-checker-and-setting-its-options.md)