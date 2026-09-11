#####  Mutable Parameter Scope: How _MUTABLE Parameters are Handled During Output

Mutable parameters are those which are multiply-defined in an input deck, with different values at each definition. They can exist in two different ways:

| Explicitly defined | The \*PARAMETER\_MUTABLE card allows any number of redefinitions of parameter name, each with a different value. |
| --- | --- |
| Implicitly defined | Multiple \*PARAMETER cards with the same name are permitted if the deck contains a \*PARAMETER\_DUPLICATION card with DFLAG set to 2 or 4. |

In both situations each definition of a parameter has a "scope" within which its value is valid. Consider the following sequence:

| \*PARAMETER\_MUTABLE <br>set value of *name* to 1.0 <br>This first instance of *name* is now "in scope" <br><br>Make reference to & *name* , it will receive the value 1.0 |
| --- |
| \*PARAMETER\_MUTABLE <br>set value of *name* to 2.0 <br>This second instance of name is now "in scope" <br><br>Make reference to & *name,* it will receive the value 2.0 |

From which it is clear that the value of parameter *name* mutates through the file, and the value that is assigned to a reference & *name* will depend on the scope in which the reference is made.
 
This presents a hostage to fortune when a model contains include files, because the order in which the include files are defined, the locations where the \*PARAMETER\_MUTABLE cards for *name* are written and the locations where references to mutable parameter & *name* are made can all have an influence on the actual value used. For example if we have the sequence:

| Master file | \*PARAMETER\_MUTABLE <br> *name* = 1 | Scope of first instance |
| --- | --- | --- |
| Include file #1 | & *name* gets value 1 |
| Include file #2 | \*PARAMETER\_MUTABLE <br> *name* = 2 | Scope of second instance |
| Include file #3 | & *name* gets value 2 |

Then it is easy to see that if the order in which the include files is written is changed, or some include files are not written, then the value obtained by a reference to & *name* may change; this may also be the case if a subset of the model is read in isolation. This means that mutable parameters must be used with care!

| To help with this problem PRIMER offers two ways of handling the scope of mutable parameters during keyword output: <br><br>| Model scope | Mutable scope extends from when a parameter is defined until it is next re-defined. This is true even if new include files are written. |<br>| --- | --- |<br>| File scope | Mutable scope from any previous definition of a parameter is "forgotten" whenever output of a new include file is started. |<br><br> <br>The default is Model scope since this preserves input decks and does not add extra \*PARAMETER\_MUTABLE definitions.<br> <br>If instead you choose File scope then when a reference to mutable parameter &name is first made in an include file then, unless that parameter has been explicitly written at the top of the file, a \*PARAMETER\_MUTABLE card will be repeated immediately before the card that refers to it. In the example above this would result in extra \*PARAMETER\_MUTABLE cards being written in include files #1 and #3.<br> <br>File scope may be preferable if you are writing out individual include files, or you know that the input deck may be re-ordered, since it will guarantee that the correct version of a parameter is used no matter how the file is read. | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2a3.png) |
| --- | --- |

Check files : listing any errors and warnings, has the options:

>  
> 
> | **Write to main file** | Lists errors and warnings at the top of the master file |
> | --- | --- |
> | **Write to &lt;fname&gt;.check** | Writes errors and warnings to a separate .check |
> | **Don't write check file** | No errors or warnings are written |
> 
>  
> 
>  

Model mass and C of G output has the options:

>  
> 
> | **Write to main file** | The overall model mass and Centre of Gravity are written to the master file |
> | --- | --- |
> | **Don't write** | No mass and C of G output is written |
> 
>  
> 
>  

Include file mass output has the following options:

>  
> 
> | **Write to each include file** | The mass of the items in each include file are written to that file |
> | --- | --- |
> | **Don't write** | No include file mass is output |
> 
>  
> 
>  

Connections output has the options:

>  
> 
> | **Write all connections** | All connections in the model are output. |
> | --- | --- |
> | **Suppress all connections** | No connections are output |
> | **Suppress created by Model &gt; Check** | Only connections read in or created by the user are written. Those created during a Model Checking operation are omitted. |
> 
>  

Connections provide a common way to handle the processing of spotweld, bolts, adhesives and other connection methods. They are described in
[CONNECTIONS](connections.md#spotwelds).
 
Assembly output has the options:

>  
> 
> | **Write assembly data in PRIMER format** | Write assembly hierarchy information in PRIMER format |
> | --- | --- |
> | **Write assembly data in HM format** | Write assembly hierarchy information in Hypermesh comment format |
> | **Write assembly data in ANSA format** | Write assembly hierarchy information in ANSA comment format |
> 
>  

[Advanced options](advanced-options.md#advanced_options) is covered under the Compress section below
[Previous](keyword-promotion-explicit-per-keyword-promotion-to-i10-and-large-formats-using-the-and-suffices.md)  |  [Next](pre-out-compress-tab.md)