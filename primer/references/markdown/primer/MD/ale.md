## [ALE](ale.md#ALE)

####  Special Arrangements for *ALE_MULTI-MATERIAL_GROUP Labels

#####  Situation prior to Ansys LS-DYNA R13

Prior to Ansys LS-DYNA R13 the \*ALE\_MULTI-MATERIAL\_GROUP keyword operated as follows:

* There was no explicit label on the card itself
* Yet other keywords (eg \*ALE, \*INITIAL, \*DATABASE) referred to these cards by id.

In the absence of an explicit label the "id" of \*ALE\_MULTI-MATERIAL\_GROUP cards was based on their "order of occurrence" in the input deck, meaning that the first definition read was id 1, the second was id 2, etc.

Therefore each row of &lt;sid&gt; &lt;idtype&gt; forms a new definition, and this definition has an internal label that is its order of occurrence in the input deck. Therefore when a model contains N definitions these will always have internal labels 1 to N, referred to as AMMGID on other cards. Here is an excerpt from the Ansys LS-DYNA user manual for this keyword that illustrates this:

![](../Storage/primer-22-1/primer_links/sect_5/ale/ammg_1.png) 
This is a real hostage to fortune since any reference to a card by "id" is vulnerable to anything which changes the order of input, for example changing include file order or deleting prior definitions.

#####  Situation from Ansys LS-DYNA R13 onwards (approx mid 2021)

To try to solve the problem a new card \*ALE\_STRUCTURED\_MULTI-MATERIAL\_GROUP has been introduced which introduces "names" for these definitions. The keyword format is:

| Variable | AMMGNM | MID | EOSID |  |  |  |  | PREF |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Type | A | I | I |  |  |  |  | F |
| Default | none | none | none |  |  |  |  | 0.0 |

Where it can be seen that rather than a label each card has an ascii name AMMGNM which may be used to refer to it. However inside Ansys LS-DYNA it also gets an internal "id" based on its "order of occurrence" in the input deck, and it can be referred to on other cards either by its name or by its "id". This is necessary because these new \_STRUCTURED cards and the original cards above all refer to the same multi-material group sequence of definitions inside Ansys LS-DYNA.

So we have the situation:

| Card format | Can be referred to by "id" AMMGID | Can be referred to by name AMMGDN |
| --- | --- | --- |
| Old plain multi-material cards | yes | no |
| New Structured m-m cards | yes | yes |

And for both old and new cards their numerical "id" is based on their order of appearance in the input deck. So if an input deck contained the following card sequence the numerical "id" values would be assigned as follows

| Keyword | Internal "id" |
| --- | --- |
| \*ALE\_MULTI-MATERIAL\_GROUP <br> *SID IDTYPE SID IDTYPE* | 1 <br>2 |
| \*ALE\_STRUCTURED\_MULTI-MATERIAL\_GROUP <br>*AMMGNM MID EOSID AMMGNM MID EOSID* | 3 <br>4 |
| \*ALE\_MULTI-MATERIAL\_GROUP <br> *SID IDTYPE SID IDTYPE* | 5 <br>6 |

#####  How this situation is handled inside PRIMER

The following rules are applied:

1. "Order of occurrence" in the input file dictates the numerical "id" as shown in the table above. 
 
 PRIMER will assign an internal numerical label in the range 1 to N for N definitions read from file.
2. If a definition is created interactively it will be given the next free "id" number. 
 
In the example above a newly created definition would be assigned the id 7. 
In the case of a new \_STRUCTURED definition it will also have a character label AMMGNM 
If the model has include files creating a new definition in an include file may result in relabelling of definitions in other includes, see point (6) below.
3. If a definition is deleted then any definitions above it have their labels adjusted downwards to maintain the "order of occurrence" sequence. 
 
For example if a model contains four definitions #1 to #4 and definition #2 is deleted, then #3 will become #2 and #4 will become #3.
4. Latent definitions, that is those referred to but not defined, are given the id by which they were referred to. 
 
So if, for example, \*INITIAL\_HYDROSTATIC\_ALE refers to definition 15 then a new latent definition with this internal label will be created. 
This implicitly means that latent definitions will always have numerical labels higher than those explicitly created or read.
5. In editing panels and keyword output files PRIMER will always write the name AMMGNM (if defined) rather than the numerical label in any data field which refers to a new \_STRUCTURED definition.
6. When a model contains include files the order of occurrence of ALMM definitions can become quite complex since the order in which include files are read will influence this order. PRIMER will perform an internal pseudo-keyout/keyin operation to determine this both when checking definitions and also when a new definition is created. This may result in internal numerical labels being reassigned in order to maintain the correct order of occurrence when the deck is written and then reread.

Therefore it is recommended that all new models use the new \_STRUCTURED version of the keyword, and always refer to this keyword by name rather than numerical "id". This will eliminate the various ordering problems described above since "reference by name" is immune to problems with ordering. PRIMER will still try to enforce a consistent numerical order when \_STRUCTURED definitions are used, just in case a card refers to them by numerical label.

[Previous](airbag-airbag-control-volume-definitions.md)  |  [Next](boundary-defining-boundary-conditions.md)