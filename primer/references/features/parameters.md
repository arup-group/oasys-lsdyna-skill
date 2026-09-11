###  PARAMETERS

 ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1.png) 
The figure on the left is the \* PARAMETER main menu in PRIMER.
 
From release 970 onwards Ansys LS-DYNA supports parameters. These are Integer or Real (floating point) values defined by name at the top of the input deck which can be used in any data field of the relevant type. From LS971 R6 LS-DYNA also offers character parameters.
 
In addition the \*PARAMETER\_EXPRESSION card allows a parameter to be defined by an arbitrary mathematical expression which may contain references to other previously defined parameters.
 
The \*PARAMETER keyword in Ansys LS-DYNA has grown in capability over time, and the following is a summary of these changes and how they are supported in successive releases of PRIMER .

From release 9.3RC2 onwards PRIMER provides full support for parameters:

* Both \*PARAMETER and \*PARAMETER\_EXPRESSION are evaluated on input.
* The association between a parameter and the data field in which it is used is "remembered" across all operations, and rewritten on keyword output.
* Parameters, including the \_EXPRESSION variant, may be created, edited and deleted interactively.
* When a parameter's value is changed all affected parts of the model will be rebuilt to reflect the change.
* Either parameters or their underlying values can be displayed in all editing panels, and parameters may be typed into any valid field on these.

From release 10.0 PRIMER adds support for the LS971R5 keywords:

* \*PARAMETER\_LOCAL , which permits multiple parameters with the same name but different values in different include files
* \*PARAMETER\_DUPLICATION , which tells Ansys LS-DYNA how to process \_LOCAL name conflicts is supported in a limited way.

From release 11.0 PRIMER adds support for LS971R6 options

* Parameter type character ("C")
* Parameter names may now be up to 9 characters long (formally the case in 971R6, informally in R5 and later releases of R4)
* The \*PARAMETER\_DUPLICATION card is now fully supported, and its effect on parameter usage mimics that of Ansys LS-DYNA

From release 12.0 PRIMER adds support for LS971 R7.1 options.

* The \_MUTABLE suffix is now supported
* The \_TYPE suffix is now supported
* Handling of multiple \*PARAMETER\_DUPLICATION keywords has been clarified in the Ansys LS-DYNA user manual, and PRIMER supports this.
* You can now [Pre-read Parameters](options-controls-many-aspects-of-reading-ls-dyna-files.md#pre_read_parameters)when reading keyword files, to avoid the "used before value is known" problem in complex cases.
* The potential to handle parameter names up to 19 characters long has been added, see [Rules governing the length of *PARAMETER names](parameters.md#param_8).

From release 13.0 PRIMER adds support for "implicit" parameters

* Implicit parameters defined within &lt;...&gt; in a keyword data field are supported.

From release 14.0 PRIMER adds support for LS\_OPT expressions in data fields.

* LS\_OPT expressions defined within &lt;&lt;..&gt;.&gt; in a keyword data field are supported to a limited extent. See [Support for LS_OPT expressions](parameters.md#ls_opt_expressions)below.

From release 16.0 PRIMER has improved the handling of accepting duplicate parameters.

* When a \*PARAMETER\_DUPLICATION card accepting duplicate parameters (option 2 or 4) is present, until version 15 PRIMER only used the youngest definition of parameters of the same name and marked all others as ignored. From version 16.0 onwards duplicate parameters are treated internally as \_MUTABLE with these duplication settings, which seems to match better how Ansys LS-DYNA reads them. 
 
  ***NOTE***   *: Following clarification in the Ansys LS-DYNA user manual it turned out that treating duplicate parameters as implicitly \_MUTABLE as a consequence of a \*PARAMETER\_DUPLICATION card was wrong, this was fixed in release 18.0.*

From release 18.0 PRIMER corrected the handling of the \*PARAMETER\_DUPLICATION card.

* The behaviour in releases 16.x and 17.x was wrong. \*PARAMETER\_DUPLICATION is now programmed to work as specified in the Ansys LS-DYNA user manual.

| [Create](define-transform.md#create) | Create a new parameter |
| --- | --- |
| [Modify](define-transform.md#modify) | Alter Parameter cards |
| [Check](parameters.md#Check) | Check the parameter cards for errors and completeness. |
| [List](RADIOSS%20block%20format.html#list) | Summarise parameter cards across all models including usage cross-references. |
| [Delete](Editing%20a%20Model%20Database.html#delete) | Delete parameters |
| [Usage in panels](parameters.md#edit_panels) | How to use parameters in editing panels and the generic keyword editor. |
| [Implicit parameters](parameters.md#implicit_parameters) | How PRIMER processes "implicit" parameters in &lt;...&gt; in data fields |
| [LS_OPT expressions](parameters.md#ls_opt_expressions) | How PRIMER processes LS\_OPT expressions in &lt;&lt;...&gt;&gt; in data fields |
| [Mis-matches](parameters.md#change_1) | What happens when the true data value is changed so that it no longer matches the parameter's value. |
| [*Include_Transform](parameters.md#incl_trans) | Special rules for dealing with parameters used inside \*INCLUDE\_TRANSFORM definitions |
| [Use for labels](parameters.md#label_fields) | Why you should be very careful about using parameters for item labels |
| [Definition order](parameters.md#definition_order) | How PRIMER copes with the order in which parameters are defined. |
| [Units change](parameters.md#units_change) | What happens to parameter data when a units change is applied to fields in which they are used |
| [Text strings](parameters.md#param_in_string) | How "&name" is processed when encountered in a title or other text string |
| [Length of character names](parameters.md#param_8) | Rules limiting the length of parameter names. |
| [Reserved names](parameters.md#reserved) | Names that should not be used for parameters |
| [Duplication](parameters.md#duplication) | How PRIMER handles the \*PARAMETER\_DUPLICATION card. |
| [Character parameters](parameters.md#char_parm) | How PRIMER handles character parameter types. |

| Creating a Parameter  <br>Parameters may be created in the following ways: |
| --- |
| (1) By typing a new parameter name into any text entry box in an editing panel |
| This will map a creation panel populated with:<ul> <li>the parameter name </li> <li>the type (Integer or Real) as deduced from the context </li> <li>a sensible default value for this context. </li> </ul> <br>To create a character parameter type first create it in this way, and then change the given type (I or R) to C, and supply its name.<br> <br>When you start typing "&..." a popup box showing all existing parameters in the model matching the characters typed so far will be mapped, allowing you to select one directly. For example if you type " &B " all parameters starting with " B " will be shown, and as you type more characters the list will be refined. | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1b.png) |

#####  
 
###### Using wildcard syntax to limit the list of parameter names displayed. 
 
In models with many parameters this popup of matching parameter names can be very large so you can also use wildcard syntax to limit what is shown: '?' matches a single character and '\*' any number of characters or none. This is best illustrated by example:
 
Consider a model that contains parameters ALPHA, BAY, BAG, BACK, BODY ,B1, B10 and CHASSIS .

| **Characters typed** | **What will appear in the popup menu** | **The reason for this** |
| --- | --- | --- |
| & or &\* | All the parameters above | & on its own matches any parameter. \* matches any number of characters. |
| &B | BAY, BAG, BACK, BODY, B1, B10 | All parameters starting with B , equivalent to B\* . |
| &B? | B1 | This is the only parameter of B following by one character |
| &B?? | BAY, BAG, B10 | These are the only parameters of B followed by two characters |
| &\*A\* | ALPHA, BAY, BAG, BACK , CHASSIS | These match [any characters or none] A [any characters or none] |

If you use wildcard syntax remember that parameters must start with a letter A-Z, and may only contain the characters A-Z, 0-9 and \_ (underscore). So if you have used wildcard syntax but have not found anything that matches in the popup list then the name you have, containing \* and/or ?, is not a valid parameter name and will be rejected unless you correct it.

| Creating an "Implicit" parameter in &lt;...&gt;<br>As an alternative to the &name syntax above it is also possible to create an [implicit parameter](parameters.md#implicit_parameters) expression by writing the expression directly in &lt;...&gt;<br> <br>Implicit parameters are described in more detail [below](parameters.md#implicit_parameters), but briefly they behave like ordinary parameter expressions but don't have an explicit name. | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1bb.png) |
| --- | --- |

##### (2) From the Create button in the main Parameter panel

| This will map an empty creation panel (see below). | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1a.png) |
| --- | --- |

##### (3) From the "Create new..." button on the Modify Parameter panel

| As for (2) above this will map an empty creation panel. | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1c.png) |
| --- | --- |

##### The Create/Edit parameter panel

The panel allows you to edit all attributes of the parameter:

* Its name: up to 9 characters without the initial "&"
* Its type: I(nteger), R(eal) or C(haracter)
* Its value
* Whether or not it is an
[EXPRESSION](parameters.md#expression)****parameter
* Whether or not it is a
[LOCAL](parameters.md#local)****parameter
* Whether or not it is a
[MUTABLE](parameters.md#mutable)****parameter 
 
alternatively
* Whether or not it is a \_TYPE parameter, and the PRTYP argument if it is

![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1d.png)

The value is simply typed into the "Value" box.

As with other editing panels this is a scratch definition, and the saved attributes of the parameter will only be updated when you use Update.

#####  Using the _EXPRESSION option

In the \_EXPRESSION case the panel extends to provide editing rows to contain the expression.

![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1f.png)

As many rows as necessary to define the expression may be used. PRIMER will reformat the expression over as many lines as necessary to make it fit the 80 column width of the Ansys LS-DYNA input deck.

Its value is calculated when you hit &lt;return&gt;, but if a parameter referred to in the expression (for example Beta or Gamma here) is changed externally you can use RECALCULATE at any time to force a recalculation.

######  
 
##### Arithmetic rules used to evaluate PARAMETER_EXPRESSION
 
PARAMETER\_EXPRESSION uses syntax and standard operators common to most programming languages. The standard rules of arithmetic evaluation and operator precedence are obeyed, and built-in functions common to most programming languages are supported.
 
In particular note that integer expressions evaluate as integers, see [Integer vs Floating evaluation of expressions](parameters.md#order)below.
 
Precedence of operators
 
###### | Brackets (..) | are senior to |
| --- | --- |
| Unary +/- (e.g. -10, +3.141592) | are senior to |
| Raising to the power of (\*\*) | is senior to |
| Multiply, divide, modulo (\*, /, %) | are senior to |
| Add and subtract (+, -) |  |

###### Built-in functions

| **Trigonometric functions (all arguments in radians, not degrees)** | **Hyperbolic functions** |
| --- | --- |
| sin(x) | asin(x) | sinh(x) | asinh(x) |
| cos(x) | acos(x) | cosh(x) | acosh(x) |
| tan(x) | atan(x) | tanh(x) | atanh(x) |
| sec(x) | atan2(x, y) |  |  |
| csc(x) |  |  |  |
| cot(x) |  |  |  |
|  |  |  |  |
| **General maths functions** |
| exp(x) (e to the power of x) | abs(x) (absolute value of x) | int(x) (Integer part of x, truncated) | float(x) (x as a floating point value) |
| log(x) (natural log of x) | mod(x,y) (remainder when x divided by y) | aint(x) (Absolute value of integer part of x, truncated) | ceil(x) (nearest integer (as a float) larger than x) |
| log10(x) (log base 10 of x) | max(x,y) (maximum of x and y) | nint(x) (Nearest integer to x, rounded) | floor(x) (nearest integer (as a float) less than x) |
| sqrt(x) | min(x,y) (minimum of x and y) | anint(x) (Absolute value of nearest integer to x, rounded) | sign(x,y) (sign of y applied to |x| ) |
| pow(x,y) (x to the power of y) |  |  |  |

All functions return a floating point result except for:

| int(x), nint(x), aint(x), anint(x) | All return integers |
| --- | --- |
| max(x,y),  min(x,y), mod(x,y), sign(x,y) | Return integer if both X and Y are integers, otherwise floating point |
| abs(x) | Returns an integer if X is integer, otherwise floating point |

######  Integer vs Floating evaluation of expressions

Programming languages make a distinction between an integer (e.g. 2) and a floating point value (e.g. 2.0). The same is true of expressions which give a result of the same type of their component parts, however when an expression is mixed the result is "promoted" to floating point. Generally this has little influence on the outcome, but there is one significant exception:

**WARNING: integer division truncates!!**

Consider the following examples

| **Expression** | **Gives result** | **Because** |
| --- | --- | --- |
| 5.0 / 2.0 | 2.5 | Both parts are floating point, giving a floating result |
| 5 / 2 | 2 | Both parts are integer, so result is truncated to an integer |
| 5 / 2.0 | 2.5 | Expression is promoted to float because it has mixed types |
| 5.0 / 2 | 2.5 | Expression is promoted to float because it has mixed types |

These rules apply to subsets of expressions as well as the expression as a whole, for example:

| **Expression** | **Gives result** | **Because** |
| --- | --- | --- |
| 1.0 + 5 / 2 | 3.0 | The part (5 / 2) evaluates to 2, so result is 1.0 + 2 = 3.0 (result promoted to highest type) |
| 1 + 5 / 2 | 3 | All integer, so 1 + 2 = 3 |
| 1 + 5.0 / 2.0 | 3.5 | 1 (integer) + 2.5 (float) = 3.5 (float result) |

Because it is easy to write an "all integer" expression by mistake when a floating point result is desired PRIMER performs a check for this on all PARAMETER\_EXPRESSION definitions. It evaluates the parameter twice: once using the rules described above and a second time using "all floating point" arithmetic. If the results are different by more than 1 part in 1e6 of the magnitude of the result then a warning is issued stating that the result depends upon integer truncation. Almost always this is due to integer division as given in the examples above, but it is theoretically also possible as a result of the mod(x,y) function (or the expression x % y , which means the same thing) returning an integer result.

It is recommended that "real" expressions are always written using floating point numbers, i.e. write 2.0 rather than 2, as this reduces the chances of accidental integer truncation and the meaning is clear to anyone reading the expression.

Integer expressions may deliberately utilise integer truncation, but it is recommended that this is made explicit by using the int(x) function. It will make no difference to the outcome, but it will make it clear to the reader that truncation is intended.

When expressions refer to other parameters the type of each parameter's value is retained: integer parameters evaluate as integers, and real parameters as floats.

######  Conversion of results by Parameter type

You will see from the above that the results of parameter expressions may be floating point or integer, however parameters themselves may also be declared as being "real" (floating point) or integer.

PRIMER converts results as follows:

| **Result of evaluating expression** | **Destination parameter type** | **How data is converted** |
| --- | --- | --- |
| Floating point | Real | Takes result directly |
| Integer | Truncates result to integer value (i.e. 2.5 becomes 2) |
| Integer | Real | Converts result to float (i.e. result 2 becomes 2.0) |
| Integer | Takes result directly |

Conversion between R eal or I nteger parameters and C haracter parameters is not permitted.
 
######  Precision of Parameters

Integer parameters are stored using 64 bit signed integers, giving a range of +/-2^63-1, approximately +/-9e18. This is to permit them to represent "large" labels.

Real parameters are stored using 64 bit floating point doubles. This gives a mantissa precision of 2^53-1, approximately 1 part in 9e15, and a decimal exponent range of +/-e308.

PARAMETER\_EXPRESSION s are evaluated as follows:

* All calculations are performed using double precision floating point variables, so all arithmetic is performed with a mantissa precision of approx 16 significant figures and an exponent range of 1.0e+/-308.
* Where integer truncation is applied as described [above](parameters.md#order) ***within***  an expression the result is a "whole number" stored as a double precision float, retaining this precision.
* The result of a PARAMETER\_EXPRESSION evaluation is converted to the intrinsic type of the parameter, thus: 
 
 Real parameters give a direct double precision result. 
 
 Integer parameters are limited to the mantissa precision of a double float, therefore they give a value in the range +/-9e15 approx. 
 
When a PARAMETER\_EXPRESSION is used to calculate an integer result, typically for a label, it is advisable to use "all integer syntax" in the expression to avoid any possibility of ambiguity or rounding errors.

#####  Parameters and Include files.

Early versions of Ansys LS-DYNA required all \*PARAMETER statements to occur after \*KEYWORD and before any other input card. This was quite restrictive, and the limitation was soon removed - in fact Ansys LS-DYNA 971R3 doesn't care what order parameters arrive in, of where they are written - see "[the order in which parameters are defined](parameters.md#definition_order)" below.

PRIMER adopts the following strategy:

* It doesn't care where in the deck a \*PARAMETER statement occurs.
* From release 9.3 onwards it no longer needs to be defined before it is used, although not doing so is deprecated.
* It doesn't care if a \*PARAMETER statement occurs in an include file, and it will keep it in that include file.
* It permits parameters to be moved between include files and master file, just like any other keyword.

The use of parameters inside include files manipulated by \*INCLUDE\_TRANSFORM is a special case, [please see below](parameters.md#incl_trans) for more details.

The use of the \_LOCAL suffix to the \*PARAMETER card, introduced in LS971R5, permits parameters to be multiply defined with different values in different include files, and this affects the scope of their applicability. This is explained under "[Using the LOCAL option](parameters.md#local)" below.

From LS971 R7.1 parameters may also have a \_MUTABLE suffix, permitting their value to change as each duplicate definition in the input deck is read.
 
##### The policy used for the destination Include file of new parameters.
 
![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1g.png)
 
There are three options:

1. **Create the parameter in the current layer (include file)**
 This is the default, and is consistent with the creation policy for other items in PRIMER.
2. **Use referrer's layer**
 
 This is only relevant in the case of a parameter being created via a new name (&xxx) being typed into a text entry box (option 1 above). 
 
In this mode the new parameter will "inherit" the include file of the item being edited. Parameters created by other means will use the default "current layer" to determine their include file.
3. **Use master file**
 
 All new parameters are forced to reside in the master file. If the strict Ansys ls-dyna rules are applied this is the safest option, however where parameters are used in an include file it may result in "decoupling" of the parameter definition and its subsequent usage in a different context.

The include file of any parameter may be changed at will using the standard "include" editing buttons just as for any other in PRIMER.

| Using the _LOCAL option | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1h.png) |
| --- | --- |

| The suffix \_LOCAL was introduced in Ansys LS-DYNA 971R5 (early 2011) and it is defined in the Ansys LS-DYNA user manual as working as follows:<br><ul> <li>A conventional &quot;global&quot; parameter, plain or <span class="courierbold">_EXPRESSION </span>, is normally applicable throughout the whole model, including all include files, regardless of where or in which include file it is defined. <br> <br> </li> <li>A parameter with the <span class="courierbold">_LOCAL </span>suffix is only applicable in the include file in which it is defined. <br> <br> </li> <li>Multiple parameters of the same name, using different values, may exist in different include files in a deck so long as all definitions, or all but a global one, use the <span class="courierbold">_LOCAL </span>suffix. <br> <br> </li> <li>In a given include file file a parameter with the <span class="courierbold">_LOCAL </span>suffix defined in that file will &quot;mask&quot; all other parameters of the same name defined elsewhere in the deck, so that its local value is used. <br> <br> </li> <li>The <span class="courierbold">*PARAMETER_DUPLICATION </span>keyword defines how Ansys LS-DYNA will handle parameter <span class="courierbold">_LOCAL </span>and global name conflicts. <br> <br> </li> <li>The <span class="courierbold">_MUTABLE </span>suffix may or may not be applied at the &quot;local&quot; scope of a parameter if combined with <span class="courierbold">_LOCAL </span>. The Ansys LS-DYNA manual is silent on this point. </li> </ul> |
| --- |

######  *PARAMETER_LOCAL rules used in PRIMER

The LS971R5 manual leaves certain details of this usage ambiguous, however reverse-engineering the behaviour of Ansys LS-DYNA suggests that the following rules are correct:

* A non \_LOCAL (i.e. global) parameter can be defined anywhere in the input deck, in any include file, and it will be used to satisfy a parameter reference anywhere in the input deck except where superseded by a \_LOCAL definition of the same name as described below.
* A \_LOCAL parameter is valid only in the include file in which it is defined, and in any "children" of that include file, to any number of generations.
* A \_LOCAL parameter "masks" (supersedes) a global parameter definition in the include file in which it is defined, and any children of that file to any number of generations. This is true even if a global parameter of the same name is defined in this file or its children.
* A \_LOCAL parameter in an include file also masks a \_LOCAL parameter of the same name in the parent (or grand-parent, to any number of generations) include file that "owns" this one. It also masks it in any children of this file.

These rules could be summarised as

* A global parameter is valid everywhere unless it is masked by a \_LOCAL parameter in that context.
* \_LOCAL parameters apply in the include file in which they are defined, and any child include files referenced in that file, to any include depth.
* \_LOCAL parameters in an include file also mask other \_LOCAL parameters defined in a "parent" include file.

######  How duplicate parameter names are handled

Ansys LS-DYNA is configured to permit duplicate (multiply-defined with the same name) parameters to exist using a combination of three strategies:

1. \_LOCAL parameters can legally mask global parameters of the same name, and they can also legally mask other \_LOCAL parameters of the same name in different include files.
2. \_MUTABLE parameters can be redefined any number of times, with the "scope" of the current definition persisting until a new definition is encountered.
3. Otherwise duplicate parameters are illegal but tolerated, and Ansys LS-DYNA uses the following strategies: 
 
If there is no \*PARAMETER\_DUPLICATION card ([see below](parameters.md#duplication)) the first definition of a parameter is used, subsequent definitions are ignored with a warning. 
If a \*PARAMETER\_DUPLICATION card is present this can alter whether the first or the most recent definition of the parameter is used, and also whether or not a warning is issued.

PRIMER V18 onwards mimics this behaviour as follows:

Once keyword input is complete all parameters are examined to see whether any name clashes exist. If there are some then an attempt is made to resolve these using global vs \_LOCAL rules. If name clashes remain in a given scope then behaviour depends on whether or not a \*PARAMETER\_DUPLICATION card is found, and any settings on this card. The results will be as follows:

**If a \*PARAMETER\_DUPLICATION card is present:**

* If it is set to "accept" (options 2 or 4) then the  ***youngest***  , as in most recently read, of any clashing definitions is used.
* If it is set to "ignore but continue" (options 0, 1 or 5) then the  ***oldest***  , as in first read, of any clashing definitions is used.
* If it is set to "ignore and terminate with error" (option 3) then the  ***oldest***  definition is used. PRIMER will not terminate input, so the effect during model read is the same as for options 0, 1 or 5.

**If a \*PARAMETER\_DUPLICATION card is *not* present:**

* The effect is the same as option 3 above: the oldest definition is used, and younger clashing definitions are remembered and written out, but marked as being in error and to be ignored.

In all cases PRIMER "remembers" parameters that are ignored above. They will function as follows inside PRIMER :

* They will be visible in the \*PARAMETER editing panel but marked as ignored. They can be inspected and edited, but an ignored definition of parameter *name* will not be used to resolve a reference  *&name*  on a data card.
* The order in which parameters are defined is remembered, so if a \*PARAMETER\_DUPLICATION card is created, or an existing one is edited, then a change on that card which changes how Ansys LS-DYNA would handle the deck will be reflected inside PRIMER . For example if the previous setting of 1 (use oldest) is changed to 2 (use youngest) then PRIMER will rebuild the model to use the younger parameters, marking the older ones as ignored.may change the usage of parameters such that one which is currently ignored will now become used, and its doppleganger which was previously used will now be ignored.
* During keyword output "ignored" parameters will be written out in the order in which they were read in, so the contents of the model will not change.

See [Parameters that have clashing (duplicate) names below](parameters.md#clash_demo)for more information about the treatment of multiply defined parameters, also [The *PARAMETER_DUPLICATION keyword](parameters.md#duplication)for more information about \*PARAMETER\_DUPLICATION .

Note that there is an implicit potential problem in this logic: the parameters that are actually used will depend not only on the settings of the \*PARAMETER\_DUPLICATION card, but  ***also on the order in which include files are read***  .

This won't matter if multiple include files contain the same (global) parameter names with the  ***same***  values, since then it doesn't matter which definition is used, but if include files contain clashing global parameter names with  ***different***  values then the potential for mix-ups is all too clear. In this latter situation it is strongly recommended that the \_LOCAL suffix is used to make explicit which parameters are to be used in which files.

#####  Using the _MUTABLE option

![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1j.png)

The \*PARAMETER\_MUTABLE suffix was added in LS971 R7.1 to provide an alternative way of handling multiple definitions of the same parameter.

The parameter can be defined multiple times in the input deck, with a different value each time.

References to it use the most recently defined value.

The rules for its use in Ansys LS-DYNA are:

* It only applies to **I** nteger and **R** eal parameter types, it is ignored for **C** haracter ones.
* The \_MUTABLE suffix must be added to the first definition of a mutable parameter, it is optional on subsequent ones.
* The effect is that each new definition of the parameter supersedes the previous value, becoming the "current" value for any references.
* This behaviour is independent of the \*PARAMETER\_DUPLICATION setting.

To understand the implications of this more clearly consider the following simple input deck:


```

*PARAMETER_MUTABLE
I ID1              1 
```

  ***The current value of integer parameter ID1 is 1***


```
*MAT_ELASTIC
$      mid        ro         e        pr        da        db  
&ID1             1.0       1.0       0.3       0.0       0.0       0.0
```

  ***So the material above has label 1***


```
*PARAMETER_MUTABLE
I ID1             10

```

  ***The current value of ID1 is now 10***


```
*SECTION_SOLID
$    secid    elform       aet
&ID1               1         0
```

  ***So the section above has label 10***


```
*PARAMETER
I ID1          100

```

  ***The current value of ID1 is now 100***


```
*PART
$ title
Example part
$      pid     secid       mid     eosid      hgid      grav    adpopt      tmid
&ID1              10         1         0         0         0         0         0

```

  ***So this is part 100, referencing section 10 and material 1***

From this example several points will become clear:

* The mutable parameter **ID1** has three distinct values: **1** , **10** and **100**.
* The order in which the parameter (re-)definitions appear in the input deck is significant.
* The order in which other cards referring to this parameter appear in the deck is also significant.

PRIMER has to handle this problem without losing definitions or muddling them up, and it does so as follows:

######  How PRIMER stores and manages mutable PARAMETER definitions

* Each definition of a mutable parameter is stored separately as a distinct internal entity.
* Each reference to a mutable parameter "knows" which of these entities it is using.

If we use the simple input deck above as an example the PARAMETER editing panel will show the following:

![](../Storage/primer-22-1/primer_links/sect_5/parameter/param7a.png)

Each definition of ID1 is stored separately, in the order in which they appeared in the input deck.

| ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param7b.png)<br> <br>Hovering over the parameter used to define the material label shows that it uses the version of parameter ID1 with the value of 1 | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param7c.png)<br> <br>Hovering over the parameter used to define the section label shows that it uses the version of parameter ID1 with the value of 10 |
| --- | --- |

| When you start typing "&" into a data field to define a parameter you will be given a list of all possible candidates to choose from. | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param7d.png) |
| --- | --- |

| How PRIMER deals with Mutable parameters during keyword output <br>It will be clear from the discussion above that the order in which mutable parameters appear in the output deck, with respect to where they are referred to, will affect the value assigned to each reference. PRIMER does not always preserve the order of cards in an input deck since it sorts labelled items into ascending order, and moreover edits made during a PRIMER session may affect the order in which keywords are written.<br> <br>In order to solve this problem PRIMER writes out mutable parameters in the following way: |
| --- |
| **(1) Only the first instance of a mutable parameter in a given master or include file is written out at the top of the file along with other other parameter definitions**<br> <br>So on keyout the simple deck used in the example above will write the following:<br> 
```
$
$ ===============
$ PARAMETER cards
$ ===============
$
*PARAMETER_MUTABLE
$PR_MPTAG 1
I ID1              1


```
<br>This is done to establish the "native" location for mutable parameters, which may be necessary if definitions are repeated in include files as described in (4) below. It also defines the "tags" assigned to each parameter, as described in (3) below.<br><br>An exception is when two or more different definitions of a mutable parameter are read in a file and any of the 2nd or subsequent definitions are not actually referenced in that file. To avoid the unreferenced parameter definitions getting "lost" they will be output with the other definitions at the top of the file. |
| **(2) If a reference to a mutable parameter does not use the "current" value a new \*PARAMETER card is written**<br> <br>Each time a mutable parameter card is written that becomes the current value of that parameter. So in the deck in (1) above the current value of ID1 is 100 at the end of the \*PARAMETER cards, since that is the most recently written value.<br> <br>However the \*SECTION definition in that deck uses the version of ID1 that has the value 10, so immediately before the section card is written out a new \*PARAMETER card for ID1 with the value 10 is output:<br> 
```
*PARAMETER_MUTABLE
$PR_MPTAG 2
I ID1             10
$
*SECTION_SOLID
$    secid    elform       aet
&ID1               1         0
$
```
 <br>Thus the current value of ID1 is now 10. Likewise the \*PART definition in that file uses the version of ID1 with the value 100, so that parameter value is written first:<br> 
```
*PARAMETER_MUTABLE
$PR_MPTAG 1
I ID1            100
$
*PART                                                                    
Example part
$      pid     secid       mid     eosid      hgid      grav    adpopt      tmid
&ID1              10         1         0         0         0         0         0
```
 |
| **(3) Each parameter is "tagged" with its own unique $PR\_MPTAG value to avoid fragmentation on reread**<br> <br>It will be clear that in a reordered deck the same version of a parameter might be written out several times, and while this would be correct in the sense that the right values would be used it could lead to "fragmentation" of the parameter into several redundant instances of the same value if a deck is written out of PRIMER and then read back in again.<br> <br>To avoid this, and also to prevent internal confusion, PRIMER assigns a unique internal "tag" to each mutable parameter. This is a small integer which is unique to that version of the parameter in this PRIMER session. These tags may not be sequential, and their values may change in successive PRIMER sessions, so no meaning should be inferred from them - their sole purpose is to distinguish between versions of the same parameter.<br> <br>On keyword output a comment line starting $PR\_MPTAG is written between the \*PARAMETER keyword and the definition of the parameter definition itself, and this can be seen in the snippets of output above, for example:<br> 
```
*PARAMETER_MUTABLE
$PR_MPTAG 1
I ID1            100
```
 <br>When PRIMER rereads the input deck it looks at these "tag" values and amalgamates multiple definitions which have the same tag into a single definition, thus avoiding multiple rendundant instances of the same parameter. |
| **(4) Mutable parameters and include files**<br> <br>A further problem is the sequence<br> 
```
*PARAMETER_MUTABLE
$PR_MPTAG 1
I ID1            100
$
*INCLUDE
filename

```
 <br>This presents two difficulties:<br><ul> <li>If parameter ID1 is used inside include <i>filename </i>then it will assume the most recent definition in the parent file. But if the definitions in the parent file change, or the order of writing include files changes, this may cease to be valid meaning that without any changes in the include file itself its contents could change on reread. <br> <br> </li> <li>Include <i>filename </i>may itself contain a *PARAMETER card that changes the current value of parameter ID1, meaning that the parent deck can not safely assume that the current value before the *INCLUDE card is still the same after it. </li> </ul> |
| To deal with this problem PRIMER uses "model-wide" behaviour by default in which the scope of mutable parameters is considered to be known and updated continuously across master and include files:<br><ol></ol><ul> <li>During keyword input each include file &quot;remembers&quot; the instances of mutable parameters which are defined outside that file and referenced within it. This is done by making a cross-reference entry from the include file itself to the relevant parameters.<br><br></li> <li>During keyword output the *INCLUDE statement for that file acts like any other keyword which references a parameter and write an explicit *PARAMETER_MUTABLE card beforehand if the correct version of that mutable parameter is not currently in scope.<br><br></li> <li>As a consequence it is not necessary to repeat the *PARAMETER definition within the include file since it &quot;knows&quot; that it is already current.<br><br></li> <li>This leaves the problem of the version of the mutable parameter that is current in the parent file when we exit from writing the include file, since that include file may alter this. To be conservative PRIMER unsets the current status of mutable parameters after writing the *INCLUDE statement so that subsequent cards in the parent file do not make any false assumptions.</li> </ul> <br>It is possible to change this behaviour so that each include file treats the status of mutable parameters as "unknown" when it is written out, so that when a card referencing a mutable parameter for the first time in that file is encountered it will always be preceded by a \*PARAMETER\_MUTABLE card to make the correct version of the parameter explicitly current. This behaviour can be changed by the preference<br><br>primer\*keyout\_mutable\_scope: model | file (default model) |

| Using*PARAMETER_MUTABLEwith_LOCAL<br>The Ansys LS-DYNA manual is silent about the scope of these parameter names if used in conjunction with the \_LOCAL suffix and the actual behaviour in Ansys LS-DYNA is not known at the time of writing (Oct 2013).<br> <br>PRIMER assumes that the \_LOCAL suffix is honoured, so that a "local" parameter is independent of a global one or a different local one of the same name, meaning that the \_MUTABLE suffix is only applied to other parameters in that local scope. However this is only a conjecture and may not replicate Ansys LS-DYNA behaviour correctly.<br> <br>Pending resolution of this point  ***it is recommended that the \_MUTABLE suffix is not used in conjunction with \_LOCAL .*** |
| --- |
| *PARAMETER_MUTABLEand*PARAMETER_DUPLICATION <br>It is possible to make "ordinary" (as in not explicitly \_MUTABLE) parameters effectively mutable by using the \*PARAMETER\_DUPLICATION card. It is described in more detail [below](parameters.md#duplication), but in summary:<br><ul> <li>You define a *PARAMETER_DUPLICATION card before any *PARAMETER cards. </li> <li>You set the DFLAG value on it to 2 or 4 to permit parameters to be multiply defined. </li> </ul> <br>In this situation a parameter of a given name can be re-defined with different (or the same) values any number of times in an input deck, and the "current" value when it is referred to will always be that of the most recently read definition.<br> <br>PRIMER supports this by treating such parameters internally as "quasi-mutable", and in most respects their behaviour is identical to explicitly \_MUTABLE parameters. |
| So which should you use?<br><ul> <li>*PARAMETER_MUTABLE at least gives a visual indication that &quot;this parameter&#39;s value is likely to change in different locations&quot;. <br> <br> </li> <li>*PARAMETER_DUPLICATION is a per-model setting and to be effective (and legal) it must be read before any *PARAMETER cards, so the most sensible location for it is the master file. However multiply defined parameters are most likely to occur in include files and these tend to get reused between different models, so there is a chance that the duplication card may become de-coupled from the context in which it is used, or perhaps omitted altogether. </li> </ul> <br>Therefore it is almost certainly better to use explicitly \_MUTABLE parameters in preference to "ordinary multipy-defined parameters plus duplication card".<br> <br>From the discussion above it will also be clear that both methods open up several possibilities for errors, in particular when include files are re-ordered and re-used in different models. If you use either feature please take great care to ensure that you manage multiply-defined parameters properly. |

| The *PARAMETER_DUPLICATION keyword | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param5a.png) |
| --- | --- |

##### How it works in Ansys LS-DYNA
 
By default duplicate (multiply-defined) parameters that are not \_LOCAL or \_MUTABLE are illegal in Ansys LS-DYNA. The default behaviour is to take the first (oldest) definition as the correct one, and to ignore any later (younger) ones with an appropriate warning. The \*PARAMETER\_DUPLICATION card allows this default behaviour to be modified in the following ways by setting integer dflag to one of the following values:

>  
> = 1: issue a warning and ignore the new definition (default)
> = 2: issue a warning and accept the new definition
> = 3: issue an error and ignore (terminates at end of input)
> = 4: accept silently
> = 5: ignore silently
>  

Thus options 1, 3 and 5 continue to use the oldest definition and options 2 and 4 use the youngest, with some differences in error/warning behaviour.
 
In Ansys LS-DYNA a model must contain either zero or one \*PARAMETER\_DUPLICATION cards, repeated definitions of the card are ignored with a warning. In addition the \*PARAMETER\_DUPLICATION card must appear in the deck before any \*PARAMETER cards.

| How Ansys LS-DYNA uses multiply-defined parameters  <br>If you have used dflag = 2 or 4 on a \*PARAMETER\_DUPLICATION card to permit duplicate parameters to be used the effect is to make them effectively "mutable". The following diagram gives an example of how it works:<br> <br><br>| \*PARAMETER\_DUPLICATION <br>dflag = 2 or 4 | This permits duplicate parameters to exist in the model. |<br>| --- | --- |<br>| \*PARAMETER <br>my\_parm = 1 | This is the first definition of parameter "my\_parm", setting its value to 1 |<br>| Reference on keyword to &my\_parm | This keyword will substitute the value 1 |<br>| \*PARAMETER <br>my\_parm = 2 | This is the second definition of parameter "my\_parm", setting its value to 2 |<br>| Reference on keyword to &my\_parm | This keyword will substitute the value 2 |<br><br> <br>Therefore the value used for the parameter reference &my\_parm in the example above depends on its position in the deck, always taking the most recently read definition of "my\_parm". |
| How it works in PRIMER  <br>Ansys LS-DYNA can dispense with unwanted \*PARAMETER and \*PARAMETER\_DUPLICATION cards, but PRIMER must preserve them so that input decks can be rewritten without loss of data, and also so that the cards can be edited. In particular editing the dflag value on the \*PARAMETER\_DUPLICATION card may cause duplicate parameters which were previously "ignored" to become the "used" ones, and those which were used to become ignored, which may change the model.<br> <br>Therefore, unlike Ansys LS-DYNA, PRIMER "remembers" all \*PARAMETER\_DUPLICATION cards, even where this would be illegal in Ansys LS-DYNA. It keeps track of those which will be used and those which will be ignored, and allows you to edit all definitions (including the ignored ones) potentially changing the way multiply defined parameters are used and ignored status of cards. In particular:<br><ul> <li>Separate <span class="courierbold">*PARAMETER_DUPLICATION </span>cards may exist in the master file, and each include file. </li> <li>Each such definition is stored separately, so each may have different <span class="courierbold">DFLAG </span>values </li> </ul> |
| How PRIMER uses multiply-defined parameters  <br>PRIMER interprets multiply-defined parameters in the "dflag = 2 or 4" cases in exactly the same way as Ansys LS-DYNA.<br><ul> <li>Multiply-defined parameters are internally marked as &quot;quasi-mutable&quot;, and although they don&#39;t have a _MUTABLE suffix their interpretation and usage is effectively the same as explicitly mutable parameters. <br> <br> </li> <li>References to such parameters use the most recently read definition of that parameter name. <br> <br> </li> <li>Since <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->can re-order input decks, and this can affect the sequence in which parameters appear and are used, the $PR_MPTAG comment is used (as for _MUTABLE parameters) to distinguish between variants of a parameter name. See <a href="parameters.md#mutable_keyout">How <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->deals with Mutable parameters during keyword output </a>above for more details of this. </li> </ul> |
| How mis-ordered *PARAMETER_DUPLICATION cards are handled  <br>PRIMER<br> <br>PRIMER can tolerate \*PARAMETER\_DUPLICATION appearing after \*PARAMETER definitions during keyin. This is not recommended since it may result in the wrong instance of parameters being used initially during keyin, requiring this model to be rebuilt later using the right ones during the post-keyin "sort out" phase, which will slow down input. There are two possible sorts of misordering for this card, either or both can co-exist.<br> <br><br>| \*PARAMETER\_DUPLICATION ordering error | WhatPRIMERdoes during keyword input |<br>| --- | --- |<br>| \*PARAMETER in a given master or include file appears before \*PARAMETER\_DUPLICATION. For example<br> <br>\*PARAMETER  <br> *some definition*  <br> \*PARAMETER\_DUPLICATION  <br> *some value of dflag* | It effectively moves the \*PARAMETER\_DUPLICATION card to precede the \*PARAMETER cards in that file. |<br>| \*PARAMETER in master or include file appears before \*PARAMETER\_DUPLICATION in some later include file. For example:<br> <br>[In master file] <br> \*PARAMETER  <br> *some definition*<br> <br>[In subsequently read include file] <br> \*PARAMETER\_DUPLICATION  <br> *some value of dflag* | Any ordering error within the file, as above, is corrected but the \*PARAMETER\_DUPLICATION card is  ***not***  moved to an earlier include file or the master file.<br> <br>However PRIMER will report this as an error during a check of parameters or the model as a whole, and will offer to copy the duplication card to the top of the master file. | |
| --- |
| **: In all cases of misordering of \*PARAMETER\_DUPLICATION:**<br><ol> <li> <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->treats the first *PARAMETER_DUPLICATION card it reads as the definitive version, applying its settings to all multiply-defined parameters in the model. This is true regardless of where it appears in the model, and whether or not it has the ordering errors described above. <br> <br> </li> <li>Subsequent *PARAMETER_DUPLICATION cards are &quot;read and remembered&quot; and will be written out during keyword output, but they have no influence on how parameters are read, interpreted or used within the model. <br> <br> </li> <li> <b> <i> <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->interprets parameters within the model as if that first *PARAMETER_DUPLICATION card had been read before any *PARAMETER cards, even if this was not actually the case during keyin. If necessary it performs a post-keyin rebuild of the model to correct instances where it has used the &quot;wrong&quot; value of a parameter. </i> </b> <br> <br> </li> <li>During keyword output <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->will always write out *PARAMETER_DUPLICATION in a given master/include file before any *PARAMETER cards within that file. </li> </ol> <br>All the points above are important, but #3 especially so. The thinking behind this logic is that PRIMER will try to help you to change what was an illegally ordered model, which would either be rejected or mis-read by LS-DYNA, into something legally ordered. The interpretation of parameters it uses during keyword input presumes that you will make these corrections. |

| Editing *PARAMETER_DUPLICATION  <br>\*PARAMETER\_DUPLICATION can be created, edited and deleted using the Duplication option.<br> <br>As this example shows you choose whether or not to have a \*PARAMETER\_DUPLICATION card in each include file by using the Active tick box.<br> <br>In files where it is present you can set the dflag value accordingly, and different cards may have different dflag values.<br> <br>If multiple definitions exist the oldest (first) definition is the active one, since this is what Ansys LS-DYNA would use. Any subsequent definitions are remembered and will be written out in the appropriate include file, but will not affect how multiply-defined parameters are processed inside PRIMER .<br> <br>If you change the dflag value on the oldest (ie first ticked) definition in this editor and Update the card then parameter usage in the model will be scanned. If the new dflag setting would change which instance of a duplicate parameter would be used by Ansys LS-DYNA then the model is updated and rebuilt to reflect this change. The parameter editor itself will also be updated to show which version of a duplicate parameter is used and which other(s) are ignored. | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param5b.png) |
| --- | --- |

#####  *PARAMETER_DUPLICATION and error checking in PRIMER

PRIMER considers the settings on any \*PARAMETER\_DUPLICATION card when it encounters clashing parameter names, taking the following actions:

**If a \*PARAMETER\_DUPLICATION card is present:**

* If dflag is 1 or 5 duplicate parameters are "remembered but ignored". They will not be used to populate any &name statements, and in the parameter editor they will be marked as "ignored". A Check reports as a warning they are duplicates but have been ignored.
* If dflag is 3 duplicate parameters are treated as above, but in addition they are marked as "in error" in the parameter editor and a Check will report them (as a warning) as being illegal.
* If dflag is 2 or 4 duplicate parameters are accepted. The instance of a duplicate parameter that is used to satisfy a &name reference will depend on the relative locations of definition and usage: the most recent parameter definition will be used.

**If a \*PARAMETER\_DUPLICATION card is *not* present:**

* The behaviour is identical to the dflag = 3 case above: "ignored and illegal" in the parameter editor, reported (as a warning) as illegal in a Check.

In other words error checking will warn about any clashing parameters, treating clashes that would be resolved successfully by a \*PARAMETER\_DUPLICATION during Ansys LS-DYNA keyword input as warnings, and those which would result in error terminations as errors.

Error checking also considers the case of multiple \*PARAMETER\_DUPLICATION cards.

* The second and subsequent such cards are reported (as a warning) as being redundant.
* A check is also made for dflag being different on multiple cards, and if this is the case a further warning is issued.

####  Character parameter types

From Ansys LS-DYNA 971 R6 onwards the character ("C") parameter type has been introduced, and this is supported from PRIMER release 11 onwards. When they have first been supported in PRIMER , it was not known in what generality character parameters can be used in Ansys LS-DYNA, so PRIMER makes the following assumptions:

* Character parameters can be used in item label and data fields where character strings would be acceptable. For example the labels of Material, Section, Equation of state, Hourglass and Thermal material which can all (optionally) use character labels.
* Character parameters will  ***not***  be used "long" text fields such as title and header strings.From release 17 onwards PRIMER also supports character parameters as \*INCLUDE file names.
* Character and numeric (I or R) parameters are not interchangeable. PRIMER will only permit a parameter to be changed between these types if it is not referenced anywhere in the model.

Over time the possible use of character parameters in Ansys LS-DYNA has turned out to be wider. Support for other use of parameters will be added to future PRIMER versions as required.

| Using the _TYPE option | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param1k.png) |
| --- | --- |
| \*PARAMETER\_TYPE was introduced in LS971 R7.1 and is intended to provide LS-PREPOST with information about how a parameter will be used in the analysis.<br> <br>The \_TYPE suffix is incompatible with \_ EXPRESSION , \_LOCAL or \_MUTABLE suffices, and PRIMER will treat an attempt to combine these suffices as an error. |

| Modifying Parameters  <br>Parameter modification can be carried out at two levels: |
| --- |

The top level, shown here, lists all parameters in the model showing a summary of their attributes.

![](../Storage/primer-22-1/primer_links/sect_5/parameter/param2a.png)

Changes made in this panel are applied to a scratch definition, and the permanent parameter definitions will not be updated until Update PARAMETERS is used. For more detailed editing, necessary when changing an EXPRESSION, use the Edit... button to map the detailed editing panel above.

The Find... button is an alternative way of selecting parameters to edit which may be useful in a model with many parameters. It works as follows:

* It maps a scrollable standard object menu of all parameter names.
* The standard filtering options, available from the Filter button in that menu, can be used to limit the list
* You select the wanted parameter from the list.

You may edit the following at this level.

| **Row header** | **Function** |
| --- | --- |
| Name | Change the name of the parameter |
| Type | Swap between **R**(eal), **I**(integer) and **C**(haracter) |
| Value | The parameter value. For \_EXPRESSION parameters changing this value will replace the expression with a constant value. |
| EXPR(ession) | Whether or not the parameter is an \_EXPRESSION type |
| LOC(al) | Whether or not the parameter is \_LOCAL |
| MUT(able) | Whether or not the parameter is \_MUTABLE .<br> <br>Ansys LS-DYNA requires the first of a series of \_MUTABLE parameters to use this suffix, but it is optional for the 2nd and subsequent ones. Therefore the 2nd and subsequent MUT boxes will always be "ticked" but may not be "selected" unless the original input deck used the \_MUTABLE suffix or the user has selected it explicitly. Consider the following example:<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param2f.png)<br> <br>Here parameter alpha has been defined twice:<br> <br><br>| 1st occurrence in the input deck: | \*PARAMETER\_MUTABLE | Explicitly \_MUTABLE, given the value 2.0 |<br>| --- | --- | --- |<br>| 2nd occurrence in the input deck: | \*PARAMETER | Implicitly \_MUTABLE, given the value 1.5 |<br><br> <br>In this example the 2nd definition "wins", and the value used for this parameter in the model will be 1.5, which is why the first definition is dark grey since it is remembered but not used.<br> <br>Also the MUT tick-box for the 2nd definition is "ticked but not selected", meaning that the \_MUTABLE suffix will not be used in the keyword output file, relying on the fact that Ansys LS-DYNA does not require this.<br> <br>When a PARAMETER\_DUPLICATION card accepting multiple definitions (setting 2 or 4) is present, PRIMER internally treats all parameters with multiple instances of the same name as mutable. If they are not explicitly defined as \_MUTABLE , they appear with a D symbol in the MUT column:<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param2g.png) |
| TYP (e) | Whether or not the parameter is \_TYPE<br> <br>The \_TYPE suffix cannot be used in conjunction with the other suffices above. |

| Changing a Parameter's value  <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param2b.png) |
| --- |

When a parameter's attributes are changed the revised values are shown on a green background. In this example L1 has been changed from 4.0 above to 10.5. In addition because the EXPRESSION in parameter ALPHA also refers to L1 it too has changed.

Changes are "scratch", as explained above, and can be undone using the Reset button.

| Dealing with errors caused by changes <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param2c.png) |
| --- |

Sometimes changes to one parameter will create errors in an EXPRESSION that uses them.

In this example the parameter ALPHA has been changed to include " 1.0 / L1 " and the value of L1 has been changed to zero. This gives a divide by zero error when evaluating ALPHA , and it is shown on a red background to emphasise this.

PRIMER can tolerate arithmetic errors in expressions, and substitutes a value of zero. However there is no guarantee that the analysis code will handle this and you will be warned if you attempt to update and save any errors.

| Parameters that have clashing (duplicate) names  <br>The example below uses three nested files, all containing a \*PARAMETER definition called "alpha":<br><ol> <li>Master file, containing a global parameter called alpha, value 1.0, which includes ... </li> <li>Child include file, containing <span class="courierbold">_LOCAL </span>parameter called alpha, value 2.0, which includes ... </li> <li>Grandchild include file, containing another global parameter called alpha, value 3.0. </li> </ol> <br>So the definition in file 2, being \_LOCAL , does not conflict with the other definitions, but the two global definitions in files #1 and #3 are in conflict.<br> <br>Where name clashes are resolved by a \*PARAMETER\_DUPLICATION card then rows which will be ignored are shown on a dark grey background, and hovering over the name will explain why the parameter is being ignored. You will also see that it has no "Usage" or "Xrefs".<br> <br>In this example the \*PARAMETER\_DUPLICATION card has been set to "accept", so the younger of the two clashing global definitions called "alpha" is used, and the older is ignored.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param2d.png) |
| --- |
| If there is no \*PARAMETER\_DUPLICATION card present, or its value of DFLAG is set to 3 (ignore and terminate with error) PRIMER will mark clashing parameter names on a red background, and hovering over the name will explain the cause.<br> <br>Here is the example above with the \*PARAMETER\_DUPLICATION card removed, which has two effects:<br><ul> <li>The effect is the same as &quot;ignore and error&quot;, so the first encountered global definition of &quot;alpha&quot; is used. </li> <li>The 2nd definition is both ignored, and also treated as an error. </li> </ul> <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param2e.png)<br> <br>Note that the above logic can be superseded by the use of the \_MUTABLE suffix on the \*PARAMETER keyword. This permits multiple parameters in the same scope to have the same name so long as the first definition has the \_MUTABLE suffix. The parameter can have multiple definitions, each with a different value, and usage on cards that reference the parameter depends on which value was "current" at the time of reading. See the section on [Using the MUTABLE option](parameters.md#mutable)for more information. |

| Filtering and sorting parameters  <br>By typing a wildcard pattern in the Filter box the panel only shows parameters whose name can be obtained from the pattern by replacing ? with any one character and \* with any (possibly empty) sequence of characters. For example, when typing a\* , all parameters with name starting with a are shown. When typing a string without ? or \*, only parameters matching the exact name appear on the panel.<br> <br>The parameters on the panel can be sorted by name, type (character, integer or real), value, \_EXPRESSION suffix, \_LOCAL suffix, \_MUTABLE suffix, \_TYPE suffix or include file by clicking the column header. When clicking the column header again, the list will be sorted in reversed order.<br> <br>The Clear sorting button resets the order of the parameters on the panel to their original order, which is the order in which the definitions have been read or they have been created.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param_sort.png) |
| --- |

| Check  <br>This checks all parameter cards for errors. It is can also be accessed from the CHECK\_DEFN button in the Modify window. |
| --- |

| List  <br>This provides a listing of all the parameters in the model and displays their numeric type, Value and what they are referenced by. The same listing can be accessed from USAGE\_ALL in the Modify window. |
| --- |

![](../Storage/primer-22-1/primer_links/sect_5/parameter/param_list.gif)

| DELETE deleting parameters <br>Parameters may be deleted using the normal deletion logic in PRIMER . If they are referred to anywhere in the model, or within another PARAMETER\_EXPRESSION statement, they will be locked against deletion. |
| --- |

| Parameters in Editing Panels  <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3a.png) |
| --- |

From PRIMER 9.3RC2 onwards editing panels, including generic keyword editor ones, display parameters either by name or by value wherever they are used.

By default they are displayed in exactly the same format as that used in keyword output files: &NAME , but this can be toggled to show values instead - see below.

Hovering the mouse over such a parameterised field will display a popup box giving the parameter name, type and value. In this example the user has hovered over data field Q1 which uses the parameter &Q1\_FE . The popup box reveals that its value is 0.1 .

To edit this parameter use Edit...

| **Using** ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3b.png) **to toggle Parameter display mode**<br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3c.png) |
| --- |

An alternative to &NAME symtax is to show the value of the parameter, but underlined to emphasise that the value shown is parameterised. You can toggle between the two modes using the " P " button at the top right hand corner of any panel showing parameters.

This image shows the panel above displayed in this alternative format. Hovering the mouse above an underlined field will map the parameter popup box as shown above, giving information about the parameter name.

| Setting programme-wide parameter display mode <br>The "P" button on an editing panel only controls display for that panel.<br> <br>To set the default display mode for the whole programme use Options, Parameter Display and select:<br> <br><br>>  <br>> <br>> | HINT | Numeric values underlined with dots |<br>> | --- | --- |<br>> | SHOWN | Shown in &NAME format |<br>> <br>> | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3d.png) |
| --- | --- |

#####  Entering parameters in edit panel data fields.

In any data field where a parameter could be used in an Ansys LS-DYNA input deck the equivalent edit panel field may also use one. To enter a parameter do the following:

* Type an ampersand "&" into the text box field
* This will immediately map a popup box showing all currently defined parameters (if any exist)
* To choose an existing parameter simply select it from the popup.
* To narrow down the choice from many parameters type its initial letter(s), the list will contract to show only those that match.
* To enter a new, previously undefined, parameter type in its full name.

In the last case, entering a new parameter, the following happens:

* A new parameter definition using that name is created. It will be a plain parameter, ie not \_EXPRESSION.
* It is given a type (Integer or Real) appropriate to the context
* It is given an initial value of zero, unless that would be illegal in that context in which case the smallest legal value is used.
* This value is entered into the data field, and the edit panel is updated.

The editing panel for the new parameter is then mapped, and you are invited to update its attributes. When you save these then its value on the "parent" editing panel will also be updated.

#####  How to remove a parameter association

To change a parameterised value to a plain number simply rub out the &NAME (or underlined) field, and type in a simple number. This will break the association between parameter and data field, even if the number you type in is the same as the parameter's value.

| "Implicit" parameters  <br>Ansys LS-DYNA permits the following syntax in any data field: &lt; *expression* &gt;<br> <br>Where  *expression*  can be any parameter definition that would constitute a valid \*PARAMETER\_EXPRESSION. Here is an example on the \*DATABASE\_BINARY\_D3PLOT card where the timestep dt has been set to the termination time \* 0.01.<br> <br>![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3h.png)<br> <br>The rules for this in Ansys LS-DYNA are:<br><ul> <li>The format of the keyword line must be comma-separated. </li> <li>The expression must be valid and enclosed in &quot;&lt;&quot; ... &quot;&gt;&quot;. </li> <li>It must only refer to other parameters if they have previously been defined. </li> <li>The type (floating or integer) of the expression is not explicit. </li> </ul> <br>The effect of using this syntax is identical to defining a \*PARAMETER\_EXPRESSION   *name*  using this expression, and referring to it by & *name*  . |
| --- |
| How implicit parameters are handled inside PRIMER  <br>In the following discussion the shorthand &lt;...&gt; refers to a valid expression inside "&lt;" and "&gt;" characters, for example &lt;time + dt / 2.0&gt; .<br> <br>**During keyword input:**<br><ul> <li>When the <span class="courierbold">&lt; <i>... </i>&gt; </span>syntax is encountered <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->creates an internal <span class="courierbold">*PARAMETER_EXPRESSION </span>definition that uses this string, of type <b>real </b>. <br> <br> </li> <li>This internal definition is given a name <span class="courierbold">#P <i>nnn </i> </span>where <i>nnn </i>is a unique integer starting from 1, and it is marked as being &quot;implicit&quot;. This nomenclature is deliberately chosen to be an illegal parameter name in Ansys LS-DYNA in order to distinguish it from normal parameters inside <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->, and the differences between it and a normal parameter are described <a href="parameters.md#impl_diffs">below</a>. <br> <br> </li> <li>The data field is given the value of this expression, and is associated with the internal parameter. If the data field is in fact integer the nearest integer to the floating point (real) value will be used. <br> <br> </li> <li>If two of more &lt;...&gt; data fields use the same expression <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->will amalgamate them into a single parameter definition. However if the contents of a data field are subsequently edited the revised parameter in that field will become unique and other fields which originally shared the common definition will be left unchanged. </li> </ul> <br>**When editing values interactively in editing panels.**<br><ul> <li>The expression <span class="courierbold">&lt;...&gt; </span>rather than a reference to the parameter ( <span class="courierbold">&amp; <i>name </i> </span>) is shown. <br> <br> </li> <li>The expression can be changed at will by simply typing in changes, alternatively by hovering over the expression the underlying parameter can be selected for editing. <br> <br> </li> <li>A new implicit expression can be created by replacing a number with an expression in <span class="courierbold">&lt;...&gt; </span> <br> <br> </li> <li>An implicit expression can be deleted by replacing it with an explicit number, or by a conventional <span class="courierbold">&amp; <i>name </i> </span>parameter reference. </li> </ul> <br>**During keyword output**<br><ul> <li>The expression <span class="courierbold">&lt;...&gt; </span>is output in the relevant data field, and the line is converted to comma-separated format. <br> <br> </li> <li>The internal implicit parameter definition itself ( <span class="courierbold">#P <i>nnn </i> </span>) is <i> <b>not </b> </i>written out to the keyword output file. </li> </ul> |

##### Differences between implicit and normal parameters in PRIMER
 
These internal parameters are not normally shown in the top level PARAMETER editing panel, and it is necessary to turn on Show implicit parameters for them to be visible, as shown below.
 
![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3g.png)
 
Certain attributes of these parameters cannot be changed: they are forced to be of type \_EXPRESSION , and cannot use \_LOCAL, \_MUTABLE or \_TYPE suffices. You will observe that these buttons are greyed out for the implicit parameters in the image above.
 
Their name cannot be changed, and the syntax #P *nnn*would be illegal in Ansys LS-DYNA anyway. It is used to reinforce the point that these are not normal parameters.
 
It is normally the case that each implicit parameter is used only in a single context, which is where it has been written as &lt;...&gt; in a data field. PRIMER will permit you to enter &#P *nnn*into a data field to refer to an internal parameter, or to select it from a menu of parameter names, however the data field will always show the &lt;...&gt; expression rather than the & *name*reference.
 
The effect of editing a &lt;...&gt; field depends upon how you go about it:

* If you edit the &lt;...&gt; expression in the data field itself this will create a new #P *nnn*parameter exclusively for this data field, and any association with the "old" parameter definition will be lost. The old parameter remains in the model, and if it is used for any other data fields these will not be affected, otherwise it becomes an unused orphan. These orphans do no harm, but they can be deleted explicitly if desired using [Remove](delete-unwanted.md#641DELETEUNWANTED), or automatically via [Cleanup Unused](clean-up-unused.md#642CleanupUnused).
* If instead you use the parameter editing panel to edit the #P *nnn*parameter definition itself this will behave like editing a normal parameter: the data field will continue to refer to the parameter and it will be updated as necessary to show the revised expression. Any other data fields referring to this parameter will also be updated.

To avoid possible confusion it is recommended that you do not make explicit references to implicit #P *nnn*parameters by name, preserving their one-to-one relationship with &lt;...&gt; data fields. In particular do ***not***attempt to refer to #P *nnn*parameters by name in other parameter expression definitions: this will not work because #P *nnn*parameters are not written out to the keyout file.

| Support for LS_OPT expressions  <br>LS-OPT will replace constants that are the subject of optimisation with the following syntax:<br> <br>&lt;&lt;   *expression(:(i)nnn&gt;*   &gt;<br> <br>Where :<br><ul> <li> <span class="courierbold"> <i>expression </i> </span>is an externally defined variable name </li> <li> <i> <span class="courierbold">:(i)nnn </span> </i>is an optional format statement modelled on Fortran syntax </li> </ul> <br>For more information about this syntax see section 5 of the LS\_OPT user manual.<br> <br>This presents a problem for PRIMER since the external variable names and values are unknown, making it impossible to evaluate the expression. Therefore it adopts the following strategy:<br><ul> <li>It creates an &quot;implicit&quot; PARAMETER_EXPRESSION with a synthetic name starting <span class="courierbold">#L... </span>which contains the string inside &lt;&lt;...&gt;&gt; </li> <li>This expression is stored but not evaluated, rather the parameter is given a constant value of 0 </li> <li>Thereafter it behaves like a normal <a href="parameters.md#implicit_parameters">implicit parameter</a>&#160;except that you can update the constant value assigned to it at will. </li> <li>Updating the numerical value does not affect &lt;&lt;expression&gt;&gt;, the two are decoupled. </li> <li>You can also change the contents of &lt;&lt;expression&gt;&gt; if you wish, which will not affect the numerical value used inside <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem --> </li> </ul> <br>During keyword output any value assigned inside PRIMER is ignored and the current &lt;&lt;expression&gt;&gt; is written out verbatim in any data fields where it is used. |
| --- |
| A special case is where a parameter itself is defined by an &lt;&lt;expression&gt;&gt;, for example:<br> <br>\*PARAMETER <br>R PNAME\_123 &lt;&lt;variable\_name:i10&gt;&gt;<br> <br>PRIMER does not permit ordinary parameters to be defined by PARAMETER\_EXPRESSION, so instead it does the following:<br><ul> <li>The &lt;&lt;expression&gt;&gt; is stored verbatim on the parameter structure. </li> <li>The parameter is given a constant value of 0. </li> <li>Thereafter it behaves like an ordinary parameter. </li> <li>You can change the numerical value at will. </li> <li>You cannot change the contents of &lt;&lt;expression&gt;&gt;. </li> </ul> <br>During keyword output any value assigned inside PRIMER is ignored and the &lt;&lt;expression&gt;&gt; is written out verbatim in any data fields where it is used. |

####  
 
##### Visualising LS_OPT expressions 
 
These internal parameters are not normally shown in the top level PARAMETER editing panel, and it is necessary to turn on Show LS\_OPT expressions for them to be visible, as shown below.
 
![](../Storage/primer-22-1/primer_links/sect_5/parameter/ls_opt_1.png)
 
Certain attributes of these parameters cannot be changed: they cannot use \_LOCAL, \_MUTABLE or \_TYPE suffices.
 
Their name cannot be changed, and the syntax #L *nnn*  would be illegal in Ansys LS-DYNA anyway. It is used to reinforce the point that these are not normal parameters.
 
You can change the numerical value of these parameters, and such changes will be propagated through the model in the normal way.

| **Support for LS\_OPT expressions is new in PRIMER V14 and is relatively undeveloped.**<br> <br>At present it is really only useful for visualising models that contain these expressions since PRIMER does not "understand" them in any meaningful way.<br> <br>So it is recommended that they are treated as read-only. |
| --- |

#### What happens when the value in a parameterised field is changed by some other means

It is possible for the value in a parameterised field to be changed indirectly by some other operation in PRIMER, breaking the association between the field's true value and the associated parameter value. Consider the following sequence:

1. Parameter &X1 is used as the X coordinate of a node
2. The user chooses to ORIENT the model, translating it in X

After step (2) the the node's X coordinate will no longer match the value of parameter &X1. Other examples of such changes are "auto-fixing" in Check, contact de-penetration, mechanism/dummy positioning, item re-labelling, and there are many more such cases.

In these situations PRIMER will (silently) remove the association between the parameter and its usage in this context, so that if the deck is written out or the node displayed in an editing panel only the plain numeric value will be shown.

The test for whether or not there is a mismatch between data field and parameter value is as follows:

| **Parameter type** | **Description of test** | **Test as an algorithm** |
| --- | --- | --- |
| Integer | The test is absolute: any mis-match breaks the association | if(value != parameter) |
| Real | If the values differ by more than the absolute value of the parameter x 1.0e-6 | if (abs(value - parameter) &gt; abs(parameter) \* 1.0e-6) |
| Character | The two character strings must match exactly.<br> <br>The test is case sensitive, so "A" will not match "a"; however leading or <br>trailing white space is ignored. | if(strcmp(value, parameter) != 0) |

####  The special case of using Parameters in *INCLUDE_TRANSFORM files

A special situation arises when parameters are used in \*INCLUDE files that are subject to transformation by the \*INCLUDE\_TRANSFORM keyword. When dealing with such files there are two requirements:

1. PRIMER must apply any transformations when it reads the input deck, so that it can display the model in its "as transformed" state.
2. PRIMER must "undo" the transforms on keyword output so that the original files are written out unchanged.

If parameters are used inside the \*INCLUDE files this can lead to conflicts, since (1) may require the underlying values to change, invalidating the association between parameter and true values; yet (2) requires that the association be "remembered" in order that it can be restored on keyword output.

PRIMER deals with these conflicting requirements by setting a special internal flag against associations occurring inside \*INCLUDE\_TRANSFORM files. If the true value and the parameter value do not match in these cases then the following is done:

* The true value is used (as normal) for all calculations and display.
* In editing panels the true value is always displayed, but in red and underlined to designate it as a special parameter.
* On keyword output the inverse transformation is applied to the true value, and the parameter &NAME written if they still match (to within a small tolerance).

| A typical editing panel field looks like this: here parameter &X1 is the node's X coordinate. The parameter popup mapped in response to hovering over the panel shows the parameter's actual value and gives a warning message about the mis-match. | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3e.png) |
| --- | --- |

The effect of editing parameterised items used inside **\*INCLUDE\_TRANSFORM** files is as follows:

* Entering an explicit number in a parameterised field will destroy the association between data field and parameter - as in the normal case above.
* Entering a parameter into a field will result in the as-transformed value of that field changing to the parameter's current value. This may or may not result in the parameter definition appearing in the keyword output deck, as this will depend upon whether or not the pre-output inverse transformation changes its value so that it no longer matches the underlying value.

If the value of a parameter definition used inside a \*INCLUDE\_TRANSFORM , or a \*DEFINE\_TRANSFORMATION to which is refers, is changed then:

* The contents of the \*INCLUDE\_TRANSFORM are "untransformed".
* Any data fields using that parameter are changed to the new parameter value.
* The include file contents are "retransformed".

For large include files this may take a significant amount of time, and the "untransform, modify, retransform" cycle may result in small numerical errors in the result. The process works, but it is better if it can be avoided!

This is a complex problem, which only gets worse if the same include file is used multiple times in different \*INCLUDE\_TRANSFORM statements to create multiple instances of parameterised data fields! Please contact Oasys Ltd Support for help and advice if you are having problems with this.

| Using parameters for the label fields of items!!! It is best not to do this at all, or use them only if you won't change their values interactively during a PRIMER session. | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param3f.png) |
| --- | --- |

It is  ***\*\*\*STRONGLY\*\*\****  recommended that you do  ***not***  use parameters to define the labels of widely used items. (ie the labels of nodes, elements, parts, etc).

PRIMER will try to cope if you do, but changing the value of such a parameter could lead to all sorts of conflicts and problems. For example if you accidentally change the parameter value so that you generate duplicate labels the internal "rebuild" of the affected items may fail because of errors, and this may lead to items disappearing - or indeed the whole model being deleted to avoid internal inconsistencies.

PRIMER will read in and process decks that use parameters in this way, and all will be well so long as their values are not changed, but you should regard this as extremely dangerous modelling practice which will, if treated as anything other than "read only", cause severe problems.

If you choose to use PARAMETER\_EXPRESSION to build up and define labels remember that the arithmetic rules used to calculate expression values will truncate integer expressions to an integer result. This may have unexpected consequences if your expression includes integer division, and you should read the section " [Integer vs Floating evaluation of expressions](parameters.md#order)" above very carefully.

Integer Parameters in PRIMER are stored using 64 bit values, and expressions are evaluated using double precision arithmetic, therefore they can be used to represent "large" format labels safely. (For more information on label sizes see [Setting the current label limits in PRIMER](long-keyword-format-and-large-labels.md#set_label_limit).)

#####  Using parameters in label field before the parameter values are known.

PRIMER 's normal behaviour when it encounters a parameter in a keyword deck that has yet to be defined is:

* Substitute a value of 0 (integer) or 0.0 (floating point)
* Add the parameter name to the internal list of latent items, with its type being set to "unknown"
* Continue the input operation using this value of zero.

Once input is complete, and the parameter definition has now been read, PRIMER revisits all locations where items used the parameter before its value was known and recreates them with the correct value.

Generally this works well, but if a parameter is used to define the label of an item then substituting zero does not work because this would be illegal, and PRIMER will reject the definition with a BAD LABEL error.

**Prior to release 11.0** this would result in some or all of the input deck being rejected, and possibly the model deleted from memory. This behaviour was criticised by users who wished to view include files or other subsets of models which might use parameters defined elsewhere.

**From release 11.0 onwards** this behaviour has been modified as follows.

* When an unknown parameter is encountered in a label field PRIMER now substitutes an internal, unique "unknown label" value.
* This value is -ve and is accepted by PRIMER as a "place-holder" value during keyword input.
* The parameter is marked as latent and unknown as before, but it is now given this place-holder value.

Once input is complete:

* If the parameter has since been read the items that reference it are recreated using the correct labels instead of the place-holder value.
* If the parameter is still undefined the place-holder values are left unchanged.

In the latter case this means that PRIMER must manage the problem some item labels are unknown, and it does this as follows:

* In contexts where the label would normally be shown, for example in object menus or when labelling items on the screen, the parameter name (with &) is used instead. 
 
Therefore a part label might appear in an object menu as M1/P&abc
* Inspection of the parameter (using PARAMETER, MODIFY) will reveal that it is latent with a -ve value. This is its place-holder value, in a designated internal -ve label range set aside for this purpose, and you should only change this if it is to become a "correct" +ve value.

Working with unknown parameterised labels imposes some limitations:

* Keywords such as \*INCLUDE\_TRANSFORM where label offsets are used will almost certainly not work. Adding an offset to an internal -ve number will probably create a value that is illegal, or which clashes with some other labels.
* Renumbering labels may not work, for much the same reason. If -ve place-holder labels are changed to lie outside the permitted range set aside within PRIMER the consequences are undefined. 
 
... and it is likely that many other operations that imply changing labels or relying (directly or implicitly) on label ranges also will not work.

Therefore the use of undefined parameters in label fields should be regarded as a "read only" facility for inspecting input decks, and you should not expect everything to work correctly.

####  Pre-reading parameters.

It is sometimes the case that PRIMER 's "one pass" approach to reading decks with parameters may fail if the parameters are defined after they are used. This can happen if a parameterised field on a card determines the format of the rest of the card. Consider the case of \*MAT\_FABRIC, material 34, whose card format is

| Card 1 | MID | RO | EA | EB | EC | PRBA | PRCA | PRCB |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Card 2 | GAB | GBC | GCA | CSE | EL | PRL | LRATIO | DAMP |
| Card 3 | AOPT | FLC/X2 | FAC/X3 | ELA | LNRC | FORM | FVOPT | TSRFAC |
| Card 4 |  |  |  | A1 | A2 | A3 | X0 | X1 |
| Card 5 | V1 | V2 | V3 | D1 | D2 | D3 | BETA | ISRFEG |
| Card 6 | LCA | LCB | LCAB | LCUA | LCUB | LCUAB |  |  |

Card 6 is only written if FORM on card 3 = 4.

Therefore if FORM is defined by a parameter, and the material card is encountered before the parameter value is known, then PRIMER 's standard approach of inserting zero and then rebuilding the card later once the parameter's true value is known will not work, because card 6 will not have beeen read. The only solution to this problem is to scan the input deck for parameter values before reading it "properly", and this can be done via  [Options](options-controls-many-aspects-of-reading-ls-dyna-files.md#opts_main) on the  [Model Read](model-read.md#32MODELREAD) panel.

| ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param6a.png) | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param6b.png) |
| --- | --- |

Pre-reading parameters in this way will take a bit longer, but this pre-read is much faster than the "proper" read which follows - and it is infinitely preferable to having the deck read wrongly or failing to read altogether. For this reason it is recommended that you locate parameters at the top of the master file, or in an include file that is read before other include files.

####  The order in which parameters are defined

When PRIMER reads a model it will store parameters in the order in which they are read, and this becomes the internal order. Although parameters do not have numeric labels you can think of them as being stored in the ascending sequential label order 1 to N for N parameter definitions. The order in which they are stored can be significant in the following situations:

1. **A parameter is referred to by name in a \*PARAMETER\_EXPRESSION before it is defined.**  
 
Ansys LS-DYNA requires that all parameters referred to in expressions are defined (ie read in) before the expression definition. Failing to do this will cause keyword input to fail with a fatal error. 
 
 PRIMER will attempt to read a deck in which expressions refer to unknown parameters by substituting zero for the missing parameter and evaluating the expression using this. Once (if) the missing parameter value is known the expression is re-evaluated and the model is updated as required with its new value. [Pre-reading parameters](parameters.md#preread) is an alternative solution to this problem.
2. **Parameters are referred to generally, eg &name in some data field, before they are defined.**  
 
Anecdotally Ansys LS-DYNA has a limited capability to cope with this, but it is not good practice to rely on this behaviour. 
 
 PRIMER uses exactly the same strategy as in #1 above: substitute a value of zero temporarily, then once (if) the parameter value is known it will re-evaluate the card(s) in question, rebuilding them with the new values. This can fail for the reasons given in [pre-reading parameters](parameters.md#preread) above and using that feature may be a better strategy.
3. **Parameters are multiply defined.**  
 
Depending on the setting of the [*PARAMETER_DUPLICATION](parameters.md#dup_error) card the initial definition may be retained and any subsequent ones ignored, or alternatively each new subsequent value will update the current parameter value - effectively making it "mutable". In the latter case the order in which parameters appear is significant.
4. **Parameters are spread across multiple include files.**  
 
On first reading the deck the order in which parameters are stored will depend on the order from which they are read from the various include files, so if include file order is changed subsequently this will change that order when it comes to output.

The order in which they are stored may not be the order in which they are subsequently output for the reasons given in the next section.

#####  Output order of parameters in PRIMER

As the discussion above shows the order in which parameters are stored may or may not be significant, but what is more important is the order in which they are written out since that will determine how the subsequent Ansys LS-DYNA analysis "sees" them. The rules PRIMER uses are as follows:

* \*PARAMETER cards are written out at the top of their file (after \*KEYWORD and \*TITLE)
* They are written in the order: 
 
- All plain parameters. 
- All \_EXPRESSION parameters.
* However if an \_EXPRESSION in a parent file refers to a parameter defined in a child include file then its output is deferred until after that include file's \*INCLUDE statement.
* \_MUTABLE parameters have separate rules and copies of these may be output immediately before they are referred to in order to ensure that the correct version of the parameter is used.

This may result in parameters being reordered with respect to the input file following a pass through PRIMER but this should not matter in itself. However this "keyout order" is important in the discussions below when checking and reordering of parameters is described.

#####  Checking parameter order

The basic checking functions for parameters test for "referred to in a \*PARAMETER\_EXPRESSION before being defined" since this is illegal in Ansys LS-DYNA. If this situation is found you can:

* Ignore it. This might make sense if you know that you have only read part of a deck and errors and omissions are expected.
* Use the "auto-fix" to reorder parameters automatically. This tends to be successful if the referring and referred-to parameters are in the same include file, but if the problem is that they are in different include files then the only solution may be to change include file reading order or alternatively to move the offending parameter definitions to a different include file. It will not change include file order or contents so this problem will need to be fixed manually.
* Re-order parameters manually in the parameter editor. This is described below.

PRIMER does not currently check for a parameter being referred to on a normal data card (ie &name in a data field) before it is defined.

| Re-ordering parameter definitions inside PRIMER  <br>Once inside PRIMER the order in which parameters are stored is irrelevant, since the code can access internal data in any order. However it contains logic to re-order parameters to deal with the problem of a \*PARAMETER\_EXPRESSION referring to another parameter that is defined after rather than before it. It can also check whether the order shown in the parameter editing table is in fact the order in which parameters will be output. |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param4a.png) <br>In this example  **parm\_me**  is a parameter expression which refers to other parameters, and it has been moved up in the list so that it is "out of order", because it refers to parameters that are now below it, resulting in its " Move " button being coloured orange as shown here. This can be resolved as follows: |
| ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param4b.png) | ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param4bb.png) | Auto Re-order all will attempt to resort the parameter list automatically to resolve any ordering conflicts. It moves all plain (non \_EXPRESSION ) parameters to the top of the list, and then tries to re-order any remaining \_EXPRESSION definitions so that they only refer to their predecessors. It also resorts the list so that the order in this panel is the same as the order in which parameters will be output and hence reread.<br> <br>Check order checks the order of parameters and reports any discrepancies but does not actually reorder anything. It gives options to list details of ordering problems and also to reorder if required. |
| ![](../Storage/primer-22-1/primer_links/sect_5/parameter/param4c.png) | **Green** means that the order is OK | Move provides a manual alternative to the above. Click on this button, and then use the keyboard up or down arrow keys to move this row up or down.<br> <br>Once the ordering conflict has been resolved the button will go green if it is in a correct position that can be achieved during keyout, or blue if you have resolved the sequence error but the position you have moved it to will not be achieved during keyout. |
| **Blue** means it is not in keyout order, but is OK. |
| **Orange** means it is out of order and is an error. |

#####  Internal order versus Keyout order, do the blue colours in the table matter?

So long as there are no orange entries in the parameter table and no sequence errors are reported when parameters are checked then no, it doesn't matter if the order in which parameters are stored inside PRIMER does not match the order in which they will be written out.

However you may wish to sort the internal list of parameters into the order in which they are written out for two reasons:

1. Consistency between how the output world, that is whatever reads the eventual output file, and the list here helps. Remember that if you write this model out and then reread it the effect will be to reorder to keyout order, so if you are comparing models this is likely to give more consistency.
2. It is easier to visualise sequence errors inside PRIMER if the order in this table matches keyout order.

Therefore it is recommended that if you have blue entries you use the Auto Reorder options to reorder, but this is only a recommendation - it is not necessary.

####  What happens to Parameters during a Units change operation

If a units change is applied to scale parameterised data fields, but the parameters themselves do not also have their values changed, then the association between the parameters and the data fields will be lost. PRIMER tries to handle this problem by inferring scale factors for parameters and hence scaling their values; this process is described in [How Units change affects Parameters](how-units-change-affects-parameters.md#units_params).

####  Parameters used in titles and other text strings

PRIMER does not attempt to evaluate parameters used in titles or other text strings, simply leaving them as "& *name* ". It also does not create a cross-reference between such usage and the parameter, meaning that they do not "know about one another" and a parameter used only in text strings will not be locked against deletion.

Ansys LS-DYNA handles "& *name* " in titles and text strings as follows:

* Release 971R4 (mid 2009) onwards will replace valid definitions with their numeric values. If "& *name* " is not a valid parameter then it will issue an error message and exit.
* Releases prior to this had inconsistent behaviour: some simply ignored "& *name* ", some attempted to substitute numeric values with varying degrees of success, some generated errors if "& *name* " was not a valid parameter definition and some did not seem to care.

Therefore from release 9.4 onwards PRIMER deals with "& *name* " in titles and text strings as follows:

* During normal interactive usage (editing, copying, etc) these definitions are simply reproduced verbatim and are treated as ordinary text strings with no special significance.
* During keyword output  ***only***  for "& *name* " in a title or text string behaviour depends upon the primer\*parameter\_in\_string preference: 
 
 This preference can have one of four values:

| **Preference value** | **Effect during output** |
| --- | --- |
| AUTOMATIC <br> (default) | Processing on keyout depends on the Ansys LS-DYNA output version chosen:<br> <br><br>| **Ansys LS-DYNA version selected for output** | **"& *name* " is a valid parameter name** | **"& *name* " does not match any parameter** |<br>| --- | --- | --- |<br>| 971R4 and later | The string is output unchanged, ie as "& *name* " | A " **@** " character replaces " **&** " in all cases. |<br>| Pre 971R4 | The numeric value of the parameter is substituted into the text string, replacing "& *name* " with the appropriate floating point or integer number. | |
| REPLACE\_AMPERSAND | All "&" symbols in text and title strings are replaced unconditionally with "@", regardless of the Ansys LS-DYNA version chosen for output. |
| INSERT\_VALUE | Where "& *name* " is a valid parameter its numeric value is inserted into the text string, regardless of the Ansys LS-DYNA version chosen for output. If it is invalid "@" is substituted for "&". |
| VERBATIM | The text string is unchanged, with no substitutions of any sort being made. |

The default AUTOMATIC output policy may not suit all possible circumstances, but it has the merit that it should prevent initialisation in Ansys LS-DYNA failing due to malformed text strings in titles.

It is recommended that you do not use the "&" character in titles and text strings unless you are certain that it prefixes a valid parameter name, and even then it may cause problems in all but the most recent versions of Ansys LS-DYNA.

####  Rules governing the length of *PARAMETER names

These rules have changed over the years as Ansys LS-DYNA has developed. A summary is

| Ansys LS-DYNA version | Behaviour |
| --- | --- |
| 971 | \*PARAMETER first introduced, the Ansys LS-DYNA user manual states explicitly that the maximum length is 7 characters. |
| 971R6 | The manual now explicitly states that up to 9 characters can be used |
| R7 | Ansys LS-DYNA introduces large ("long") format in which all data fields are 20 wide. However the manual still states that parameters are limited to 9 characters. |
| R8 to present day (2019, R11) | The Ansys LS-DYNA user manual \*still\* states that parameters may only be 9 characters long, however experiment in R9 suggests that in large format parameters up to 19 characters long work. |

Therefore PRIMER adopts the following rules:

| Keyword output format | Parameter sizing and related rules used |
| --- | --- |
| Traditional "small" format, typically 8 and 10 wide fields. | <ul> <li>If the output version pre-dates LS971R6 then a warning is issued for names &gt; 7 characters long </li> <li>Later versions generate a warning for names &gt; 9 characters long </li> </ul> <br>This leaves the problem of names &gt; 7 characters long in data fields that are only 8 columns wide, typically on \*NODE and \*ELEMENT cards. PRIMER checks for these as part of the Model Check process, which will issue a warning if a field overflow will occur in the current output format. |
| "Small" format from Ansys LS-DYNA R9 onwards | R9 offers the opportunity of "i10" format (8 wide fields promoted to 10 wide) and"large" format (all fields 20 wide) on a per keyword basis.<br><ul> <li>Adding the suffix &quot;%&quot; (for example *ELEMENT_SHELL %) to a keyword header promotes all cards until the next *keyword header to &quot;i10&quot; format. </li> <li>Adding the suffix &quot;+&quot; (for example *ELEMENT_SOLID +) promotes all cards until the next *keyword header to &quot;large&quot; format. </li> </ul> <br>PRIMER does \*  ***not***  \* do this automatically wherever a field overflow would occur, although Model Check will warn you about this. However for the special case of the \*ELEMENT cards with 10I8 format it makes a special case and checks for both parameter and character label names that would overflow small format, and "auto-promotes" those keywords to "i10" or "large" format as required. |
| "Large" format from Ansys LS-DYNA R7 onwards | PRIMER checks for and prevents attempts to give parameters names longer than 19 characters. |

It is recommended to limit parameter names to a maximum of 9 characters, and to 7 characters if you want to use traditional "small" format without the need for promotion to "i10" or "large" formats (eg if you will write decks for reading by other software).

####  Reserved names that should not be used for parameters

We have received credible reports that certain versions of Ansys LS-DYNA will generate errors if "reserved" names are used for parameters. These names are:

* Intrinsic mathematical functions such as sin, cos, sqrt, etc.
* Names explicitly cited as reserved on the \*DEFINE\_FUNCTION keyword, such as PI, DTOR, etc
* Names that can be used in \*DEFINE\_CURVE\_FUNCTION. such as DELAY, LC, etc

We have not been able to reproduce all these errors, but that is not the same as saying that they cannot occur in the right (or rather wrong) circumstances. Therefore as a precaution PRIMER checks for clashes and issues a warning during "check" operations if any are found. This warning may be reviewed or removed in future if it is proved to be wrong.

However whatever the elusive truth actually is it is \*strongly\* recommended that you do not use intrinsic mathematical function names for parameters that may be used in expressions. For example

>  
> If you have a parameter called SIN, then it would be possible to write a parameter expression "sin(SIN)", which is asking for trouble!
> 

[Previous](node-transformation.md)  |  [Next](part-defining-parts.md)