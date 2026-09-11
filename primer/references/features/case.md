###  CASE

[**Mini tutorial on \*CASE in Ansys LS-DYNA and PRIMER**](case.md#tutorial) 
  **[Creating and editing a master *CASE](case.md#create_case)  [Creating and editing child (sub) cases](case.md#create_child)**  
  **[The master *CASE summary panel](case.md#master_summary)** (choosing which master \*CASE is current, and other operations) 
 [**Other operations affected by \*CASE**](case.md#affected)

| | Limitations |<br>| --- |<br><br>  Version history  <br><br>>  <br>> <br>> | **PRIMER 11** | Support for the \*CASE keyword was added but with some limitations, notably that it could not be used in conjunction with \*INCLUDE\_TRANSFORM or \*DEFINE\_TRANSFORMATION if encountered inside \*CASE . In addition the generic keyword editor did not show, or permit changes to, the current case membership of an item. |<br>> | --- | --- |<br>> | **PRIMER 12** | These limitations have been removed. \*CASE can be used with any keyword type, and there is now a "Case" column in the keyword editor if cases are present in the model. |<br>> <br>>  <br>> <br>>  <br><br>  Maximum numbers of *CASE definitions in PRIMER:  <ul> <li>There is no limit to the number of Master <span class="courierbold">*CASE </span>cards. <br> <br> </li> <li>The following limits apply to child cases: <br> <br>- The maximum number of child cases in a model is 4095 (but their labels can have any value) <br>- The maximum number of unique combinations of child cases is 1023 <br>- The maximum number of child cases in a combination is 1023 <br> <br>(The concept of a &quot; <b>combination </b>&quot; of child cases is explained <a href="case.md#multiple_definitions">below </a>) <br> <br> </li> </ul>  Using *CASE inside include files  <br><br>>  <br>> When the \*CASE keyword first appeared in Ansys LS-DYNA no mention was made in the keyword manual about limitations upon where it could be used, and in particular no restriction upon its use in include files was mentioned. Therefore PRIMER 11 permitted its use in both master deck and any include files. <br>>  <br>> However the Ansys LS-DYNA 971 R7 manual (2013) states that the \*CASE keyword cannot be used inside include files. This date coincides with the development of PRIMER 12, so rules forbidding its use inside include files have been added to that version, and using \*CASE in any file other than the master deck will generate an error. This is a "soft" restriction, so if Ansys LS-DYNA ever lifts this limit in the future a simple switch in PRIMER will also permit it.<br>> |
| --- |

| Mini-tutorial on *CASE  <br>This section gives a summary of how the \*CASE keyword is used in Ansys LS-DYNA, and how it is implemented in PRIMER . It also describes the terminology and colour scheme used in this section and in the online help texts inside PRIMER .<br> <br>Please read this before using \*CASE in PRIMER as it explains some important concepts that you will need to understand. |
| --- |

#####  How *CASE is used in Ansys LS-DYNA

The \*CASE keyword is used in two related but distinct ways in Ansys LS-DYNA input decks:

| (1) \*CASE (with no further suffices) | Referred to as a " **Master \*CASE** " in PRIMER |
| --- | --- |
| This can be thought of as a "collector" keyword which owns one or more sub-cases (or " **Child cases** " in PRIMER )<br> <ul> <li>It is a free-standing keyword, just like any other in the deck. </li> <li>It has label which must be unique to this master <span class="courierbold">*CASE </span> </li> <li>It contains one or more child cases </li> <li>It may not itself be contained inside a <span class="courierbold">*CASE </span>keyword </li> <li>It may only be used in the master keyword deck, and not in include files. </li> </ul> |

| (2) \*CASE\_BEGIN\_ *nnn*   <br>... other keywords <br> \*CASE\_END\_ *nnn* | Referred to as a " **Child case** " in PRIMER |
| --- | --- |
| These keywords define what is contained within child (sub-) cases. They always come in "begin ... end" pairs that surround other keywords, suffix **\_ *nnn***  giving their child case number  ***nnn***  .<br> <ul> <li>These are not free-standing keywords, and they have no autonomous existence in the input deck. </li> <li>The label <b> <i>nnn </i> </b>defines this child case uniquely. </li> <li>Child case labels are totally independent of Master <span class="courierbold">*CASE </span>labels, thus it is legal to have Master <span class="courierbold">*CASE </span>1 and also child case 1. </li> <li>The child case begin ... end pair of keywords may occur any number of times within a deck </li> <li>Child cases keywords may be disjoint or nested. </li> <li>They may only be used in the master keyword deck, and not in include files. </li> </ul> |

Therefore a keyword deck might contain 10 child cases labelled (say) 101 to 110, and these can be used in arbitrary combinations within Master \*CASE s. For example:

* Master \*CASE 1 might contain child cases 101, 102, 103
* Master \*CASE 2 might contain only child case 110
* Master \*CASE 3 might contain child cases 101, 105, 108 
... and so on.

When analysing an input deck containing \*CASE Ansys LS-DYNA does the following:

* Splits the input deck into N separate sets of files, where N is the number of Master \*CASE cards.
* Each file contains: 
- the keywords that are not in any case, referred to as being " **in the main model** " in PRIMER  
- plus those defined within the child cases contained with the relevant Master \*CASE definition.
* Then N separate analyses producing N separate sets of results are run.

More information can be obtained from the \*CASE section of volume I of the Ansys LS-DYNA keyword manual.

#####  How *CASE is implemented in PRIMER

PRIMER handles this problem by splitting items up into three categories:

| | (1) Items in the main model | These are not inside any \*CASE\_BEGIN ... \*CASE\_END keywords, and occur exactly once. |<br>| --- | --- |<br>| (2) Items in the currently active Master \*CASE | Items within the child \*CASE\_BEGIN ... \*CASE\_END keywords of all child cases in the currently active Master \*CASE |<br>| (3) Items that are inactive and in backing store | Items within child \*CASE\_BEGIN .. \*CASE\_END keywords of child cases that are not referred to in the currently active Master \*CASE |<br><br> <br>When PRIMER is dealing with models that contain one or more \*CASE cards it requires that a Master \*CASE is current at all times, and only items in this master \*CASE and in the main model are visible and available for editing. In order to work with items in backing store you must first make the master \*CASE containing them current.<br> <br>This organisation is expressed in the diagram on the right.<br> <br>The user may make a new master \*CASE current at any time, but this is quite an expensive process since it requires a lot of internal processing (see " [Changing the current Master *CASE](case.md#change_master)" below) so it is best done only when necessary. | ![](../Storage/primer-22-1/primer_links/sect_5/case/layout.png) |
| --- | --- |

The "Backing store" referred to above is still in main memory, not on disk, nevertheless changing the currently active Master \*CASE can be quite a slow operation when a model is large.

#####  How PRIMER handles multiple definitions of the same item in different cases

Consider the following two sequences of keywords, each of which define versions of \*NODE label 1.

| | Two separate definitions |<br>| --- |<br>| 
```

*CASE_BEGIN_1 
*NODE
       1   1.0      2.0      3.0
*CASE_END_1
```
 
```
*CASE_BEGIN_2
*NODE
       1   2.0      3.0      4.0
*CASE_END_2
```
 |<br>| " **Aliases** " in PRIMER | |  | | Single definition in combination |<br>| --- |<br>| 
```

*CASE_BEGIN_1
*CASE_BEGIN_2
*NODE
       1   1.0      2.0      3.0
*CASE_END_2
*CASE_END_1
```
 
```

```
 |<br>| " **In combination** " in PRIMER | |
| --- | --- | --- |
| In this left hand example we have two separate definitions of node 1 (here with different coordinates): one in child case 1 and one in child case 2. It is clear that changing one definition, for example in child case 1, should not have any effect on the definition in the other child case.<br> <br>In PRIMER the two definitions are referred to as being " **aliases** " of one another. |  | In this right hand example we have a single definition of node 1 that is common to child cases 1 and 2. It is clear that editing the definition, say changing a coordinate, should result in a change in both child case 1 and child case 2.<br> <br>In PRIMER the two definitions of Node 1 are referred to as being " **in combination** " with one another. |

Clearly the  ***alias***  definitions on the left above must be stored separately since they are independent, and editing one definition will not make any changes in the other.

However PRIMER also stores each  ***combination***  definition separately as well. This is necessary because, despite being in combination, the two definitions of node 1 in the right hand column above might have different locations in space or boundary conditions if parameters are used to define those data fields, or perhaps if the node is moved by a transformation. However if a definition that is in  ***combination***  is edited within PRIMER then all copies of it are also edited, whether current or in backing store, to preserve their combination status.

Also note that in a  ***combination***  of cases the order in which the child cases are defined is irrelevant, so the two keyword sequences below are the same in PRIMER :

| | 
```
*CASE_BEGIN_1
*CASE_BEGIN_2
*NODE 1 1.0 2.0 3.0
*CASE_END_2
*CASE_END_1
```
 |<br>| --- | |  | | 
```
*CASE_BEGIN_2
*CASE_BEGIN_1
*NODE 1 1.0 2.0 3.0
*CASE_END_1
*CASE_END_2
```
 |<br>| --- | |
| --- | --- | --- |

***End of mini tutorial.***

****

####  Creating and editing a master *CASE 
 
From [Keyword] CASE use the CREATE option to map the Master \*CASE creation and editing panel.![](../Storage/primer-22-1/primer_links/sect_5/case/create_1.png)

| [Case is explicitly defined](case.md#explicitly_defined) | This is explained [below](case.md#explicitly_defined). |
| --- | --- |
| Label | Is the unique Master \*CASE label |
| Jobid | Optional string |
| Title | Optional: used only by PRIMER |
| Command line input | Optional: any number of text lines giving command-line input to be used when the job is run |

**Adding child (sub-)cases to this Master \*CASE:**
 
Child cases in PRIMER use the acronym CCAS (for Child CASe). You can add child cases to this master case by:

* Typing in the label of an existing child case.
* Using the right-click popup to select or create a child case
* Using Add... to select a range of existing child cases from a menu list

**Removing child cases from this Master \*CASE:**

* Remove their labels from the list.
* Use Remove ... to select child cases to be removed.

**"Case is explicitly defined** "

The Ansys LS-DYNA syntax makes provision for a model in which \*CASE\_BEGIN\_ *nnn* ... \*CASE\_END\_ *nnn*  cards appear, but no master \*CASE cards are defined. In this situation every child case becomes an "implicit" master \*CASE of the same label nnn.

In PRIMER this is handled by automatically creating a master \*CASE of label *nnn* for each child case when keyword input is complete. To distinguish this from an explicitly defined master \*CASE keyword PRIMER adds an "explicit" flag which will be set only if a master \*CASE keyword was read, or created interactively.

The only difference between an explicit and an implicit master \*CASE in PRIMER is that implicit master cases are not written to the keyword output file. In all other respects they are the same, and can be used in the same way. You can switch cases between implicit and explicit at will, however bear in mind that the Ansys LS-DYNA syntax only "auto creates" a master case for each child if there are  ***no***  explicit master \*CASE keywords in the model. So having a mixture of implicit and explicit master cases will result in the implicit ones being "lost" when the model is written to a keyword output file.

| Creating and editing a child case |
| --- |
| Using the right-click popup from an entry in the master \*CASE panel above you can invoke the Child Case editing panel. | ![](../Storage/primer-22-1/primer_links/sect_5/case/create_2.png) |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/create_3.png) |
| This allows you to Add... and Remove.. . items of any type in the current child case.<br> <br><br>| " Adding" an item | moves it from the main model to this child case. |<br>| --- | --- |<br>| " Removing" an item | moves it from this child case back to the main model. | |

| **Note:** editing of a child case's contents is only possible from this panel if the child case is part of the current master \*CASE . The child case editing panel will state whether it is or not. | ![](../Storage/primer-22-1/primer_links/sect_5/case/create_4.png) |
| --- | --- |
| If the child case is not active in the current master \*CASE this will be stated, and the Add... and Remove... buttons will be greyed out.<br> <br>However you will still be able to sketch and list contents. The reason for this limitation is that child cases that are not current are on backing store, where their content is effectively "read only". | ![](../Storage/primer-22-1/primer_links/sect_5/case/create_5.png) |
| This panel is designed to provide a fast and simple way of moving items between the current child case and the main model, and it has the advantage that multiple items can be added / removed in a single operation. However this process has limitations when a labelled item in the current child case is also in  ***combination***  with one or more other child cases that are currently on backing store and you attempt to move such an item from the child case to the main model. This would cause a clash if the other case(s) in the combination were made current because this would mean duplicate definitions in both the other case(s) and the main model.<br> <br>Prior to the Update (to make the scratch definition permanent) PRIMER checks all items selected for addition to or removal from this child case to detect any such clashes, and gives you the following options if anty such clashes are found:<br> <br><br>| Abort the Update operation | Go back and correct the definition to remove the clashes. |<br>| --- | --- |<br>| Move only the legal items | Only the non-clashing items are moved to the main model, the rest stay in their current child case |<br>| Move and delete / make latent | The clashing items are deleted is possible, but if referenced are left as latent definitions in the main model.<br> <br>If one of the other child cases with which an item is in  ***combination***  is made current then its definition will be merged silently with the latent definition in the main model. This is legal and will not cause conflicts. |<br>| Move everything anyway | All selected items are moved to the main model regardless of potential clashes.<br> <br>If you attempt to make one of the cases with which the item is in  ***combination***  current PRIMER will detect an impending "duplicate item" clash and will force you to relabel things in order to avoid it. So use this option only if you know that this is not likely to be done, in other words if the other child case(s) in the combination are not referred to in any master \*CASE . | |

| Editing the child case membership of an item using the [C] button: | ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_1.png) |
| --- | --- |
| Another, and much more flexible, way of editing the child case membership of an item is via the [C] case membership editing button in the item's editing panel.<br> <br>This will only appear if the model contains \*CASE data, and it will always be to the right of the file filter button for include files. This maps the child case membership editing panel for the item in question (here node 1531218): |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_2.png) |
| In this example the node is currently in the main model, and there are three child cases currently defined.<br> <br>Master \*CASE 1, the current master case, contains child cases 1 and 2. <br>Master \*CASE 2, not currently active, contains child case 3.<br> <br>At present the node is eligible for moving to any of the child cases, which can be done by ticking the relevant box in the Sel(ect) column. |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_3.png) |
| The user has now ticked the Sel box for child case 1, and the following has happened:<br><ul> <li>The node is shown as &quot;Selected&quot; in child case one. <br> <br> </li> <li>Selection in child case 2 has been prohibited. <br> <br>Remember that the current master <span class="courierbold">*CASE </span>contains child cases 1 and 2, so if the node is present in child case 1 it cannot also be present in child case 2, since this would constitute an illegal duplicate definition of the same label. <br> <br> </li> <li>Selection in child case 3 is still available if the user wants to choose it, as there is no potential clash. </li> </ul> |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_4.png) |
| The user has now chosen to place this node in child case 3 as well.<br> <br>This means that there will be a single **combination** definition of this node in child cases 1 and 3. If the keyword deck were written out at this point it would contain the lines:<br> 
```
*CASE_BEGIN_1
*CASE_BEGIN_3
*NODE
  1531218      1.0      2.0   (coordinates etc made up here)
*CASE_END_1
*CASE_END_3
```
 |
| Separate child cases : changing the definition from a combination to an alias .<br> <br>Let us suppose that the user does not want to have a single common definition, but rather two wholly separate definitions of this node in cases 1 and 3 - perhaps so that they can have different coordinates. The "separate child cases" button tells the editing panel that on update it should separate the single common definition into two. |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_5.png) |
| At this point it should be made clear that all edits to a definition's child case membership made in this panel are "pending", as with all changes made in an editing panel, and will only become permanent when the parent editing panel is updated and closed. So if we go through the update cycle for this node, then reopen it for editing and use the [C] button again the following will be shown: |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_6.png) |
| This is telling us that:<br><ul> <li>The current definition of this node is in child case 1 only, which is current in this model. </li> <li>It is not selectable in child case 2 because that would cause a crash for the reasons given above </li> <li>There is a separate <b>alias </b>definition of this node in child case 3, currently on backing store (BS). </li> </ul> <br>If this deck were written to a keyword output file the lines for this node would now be written out twice as two separate definitions:<br> 
```
*CASE_BEGIN_1
*NODE
  1531218 1.0    2.0 (coordinates etc made up here) 
*CASE_END_1
```
 
```
*CASE_BEGIN_3
*NODE
  1531218 1.0    2.0 (coordinates etc made up here
*CASE_END_3
```
 <br>If we wished to merge these two **alias** definition back into a single **combination** definition, then ticking the Sel box on the row for child case 3 would result in that change being made when the node editing panel was updated.<br> <br>To make this point clear we now:<br><ul> <li>Abort this node editing panel, leaving the definitions as <b>aliases </b>. </li> <li>Change the current master <span class="courierbold">*CASE </span>from 1 to 2 (which contains child case 3) </li> <li>Reopen the node editing panel </li> <li>Click on the <span class="buttontext">[C] </span>case editing button again </li> </ul> |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_7.png) |
| We are now editing the definition of the node in child case 3, and you will see that the status above has been swapped round with the **alias** definition in child case 1 now on backing store. |
| Move to main model: moving this definition out of the child case and back into the main model.<br> <br>If we select this option then the panel (still in child case 3) above becomes: |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/edit_8.png) |
| Upon update from the parent node editing panel the following will happen:<br><ul> <li>This definition (in child case 3) will be moved to the main model. </li> <li>All other definitions of this node currently on backing store <b>will be deleted </b>. </li> </ul> |
| Reset to original: resets case membership to its original state before editing.<br> <br>As explained above all changes made in the case membership editing panel are "Pending", and will only be made permanent when the parent editing panel (a node editing panel in the example above) is updated. Resetting case membership to its original state removes any edits and restores case membership to its state when the editing panel was first opened. |

| Feedback from the [C] button  The colour of this button conveys information about the case membership status of the item being edited, and hovering the mouse over it will also give a summary of the current case status if the item being edited. |
| --- |

| **Appearance (showing the status message given by hovering the mouse over the [C] button)** | **Colour** | **Status** |
| --- | --- | --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/cbut_1.png) | Grey | The item being edited is in the main model, ie not currently in any child case. This will be the normal case for most items in most models. |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/cbut_2.png) | Green | The item being edited is (or will be) in one or more child cases that are in the current master \*CASE , ie currently active in the model.<br> <br>It may also be in **combination** with definitions on backing store, or have **aliases** on backing store. If this is the case the "hover over" message will give a summary of this. |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/cbut_3.png) | Cyan | The item being edited will, if the edit proceeds, be moved into a child case which is  ***not***  in the current master \*CASE , and thus will be moved onto backing store.<br> <br>This means that when the editing panel is updated the item  ***will disappear from the current model***  when it is moved to backing store. If it was referenced by something else in the model it will be replaced by a latent definition of the same label in the current model. |
| ![](../Storage/primer-22-1/primer_links/sect_5/case/cbut_4.png) | Red | The item being edited either exists in a clashing combination of child cases, or will do so if the edit proceeds.<br> <br>This is illegal since it would mean duplicate definitions of the same label in the model, and you should - hopefully! - never see this.<br> <br>(This example was created artificially for demonstration purposes, and if this situation ever arises you will be forced to resolve the case membership or label clash before updating the edit.) |

| The [C]ase button in the Keyword editor  <br>If a model contains \*CASE data then all keyword editor panels will have a [C]ase column showing the current case membership of each row.<br> <br><br>| [ - ] | Means that the item is in the main model |<br>| --- | --- |<br>| [ n ] | Means the item is in child case n | | ![](../Storage/primer-22-1/primer_links/sect_5/case/keyword_1.png) |
| --- | --- |
| Clicking on the relevant row button maps the same case management panel as above, which acts in exactly the same way.<br> <br>***Note***  : Selecting multiple rows and clicking on the [C] button does  ***not***  apply the case membership changes to all selected rows, but rather  ***only***  to the row in question. This limitation may be removed in the future, but at the present time it is "too hard" to implement in this context. |

| The Master *CASE summary panel By default PRIMER will make the first master \*CASE in a model the current one, but you can change the current master \*CASE at any time using Master \*CASE Summary and Set | ![](../Storage/primer-22-1/primer_links/sect_5/case/master_1.png) |
| --- | --- |
| The Master \*CASE summary panel allows you to do several things:<br><ul> <li> <a href="case.md#change_master">Change the currently active master <span class="courierbold">*CASE</span>. </a> <br> <br>This is done by clicking on the relevant <span class="buttontext">*CASE id </span>button, the currently active row always being shown in green. In this example <span class="courierbold">*CASE </span>1 is current. <br> <br> <br> </li> <li> <a href="case.md#edit_master">Edit</a>, <a href="case.md#merge_master">merge</a>&#160;or <a href="case.md#delete_master">delete</a>&#160;master <span class="courierbold">*CASE </span>definitions via the right click popup, shown here for master <span class="courierbold">*CASE </span>3. <br> <br> </li> <li>Create a new master <span class="courierbold">*CASE </span>using <span class="buttontext">Create CASE .. </span>. This is just another way of getting to the master <span class="courierbold">*CASE </span>creation panel described <a href="case.md#create_case">above</a>. <br> <br> </li> <li>Remove all master and child cases using <span class="buttontext"> <a href="case.md#eliminate_all">Eliminate all CASEs </a> </span>, merging everything into unique definitions in the main model. </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_5/case/master_2.png) |

| Changing the current master *CASE  <br>When you change to a new master \*CASE the following operations are performed:<br><ol> <li>All items currently in child cases are moved to Backing Store. </li> <li>Any transforms in or affected by these cases (include_transform, node_transform, part move, etc) are undone </li> <li>If this leaves &quot;referenced but undefined&quot; definitions behind, then Latent definitions are created to fulfil these references. </li> <li>Items in the child cases referred to in the new master *CASE are moved from backing store to the main model. </li> <li>Where these items duplicate an existing latent (referenced but undefined) definition, then the definitions are merged. </li> <li>The whole model then performs an &quot;internal rebuild&quot; to ensure that references to items point to the correct - possibly new - definitions. </li> <li>All internally cached data such as calculated masses, set contents, etc are marked as invalid and needing recalculation. </li> <li>Any transformation in or affected by this case change are re-applied. </li> <li>All graphics and visibility tables are recalculated, and the model is redrawn. </li> </ol> <br>From reading the list above you will appreciate that this is a complicated and time-consuming process which may take quite a long time for a large model. Therefore it is best to try to organise your work so that you perform as few master \*CASE change operations as possible. |
| --- |
| [Popup] Edit... Editing a master *CASE  <br>This is just another way of getting to the master \*CASE editing panel described [above](case.md#create_case). You can edit any master \*CASE, not just the current one. |
| [Popup] Merge... Merging the contents of the current master *CASE into the main model  <br>This performs the following operations:<br><ul> <li>The contents of any child cases that are <b> <i>unique </i> </b>to this master <span class="courierbold">*CASE </span>are removed from their child case and moved back into the main model, and those child cases are deleted. </li> <li>The contents of any other child cases are left unchanged (since they are used by other master <span class="courierbold">*CASE </span>s) </li> <li>This master <span class="courierbold">*CASE </span>definition is deleted </li> </ul> <br>This operation is only available for the current master \*CASE . To merge contents of other master \*CASE s into the main model they must first be made current.<br> <br>This operation is not reversible! |
| [Popup] Delete... Deleting a master *CASE  <br>Any master \*CASE apart from the current one can be deleted. This deletes the master \*CASE definition itself, but  ***does***    ***not delete or merge***  or affect its child case contents in any way.<br> <br>This may result in child cases becoming "orphans", ie not referenced by any master \*CASE . This is perfectly legal, and such definitions will still be written out in any keyword output file, but they will not be part of any subsequent Ansys LS-DYNA analysis. |
| Eliminate all cases Removing all *CASE definitions from the model <br>This performs the following operations:<br><ul> <li>All items in child cases in the current model have their child case status removed and become part of the main model. <br> </li> <li>All child cases currently on backing store, and their contents, <i> <b>are deleted </b> </i>. <br> </li> <li>All master and child <span class="courierbold">*CASE </span>definitions and storage are removed. <br> </li> <li>The model is rebuilt internally as required, recalculated and redrawn. </li> </ul> <br>***WARNING: the outcome of this operation will probably delete data!***<br> <br>You will see from the above sequence items currently on backing store are deleted, not moved into the main model. If you want to move these into the main model you will need to make a master \*CASE containing them current and merge this into the master model.<br> <br>Therefore this is a simple and quick way of removing all case information from a model, but if the details of what are to remain are important it may be better to perform a more selective [merge](case.md#merge_master) process, or even to process individual items. |
#### Other operations affected by *CASE

The following operations are influenced by \*CASE , and may require consideration.

#####  Model WRITE and *CASE

When a model containing \*CASE information is written out to a keyword file PRIMER will retain the logical case organisation, although the order in which keywords appear may change.

Also PRIMER will never use the syntax


```
*KEYWORD CID=nnn
data
```


during keyword output, always replacing it with


```
*CASE_BEGIN_nnn
*KEYWORD
data
*CASE_END_nnn 
```


This gives rather more verbose output, but the functionality is identical.

#####  Model COPY and *CASE

When a model containing \*CASE is copied to another model inside PRIMER the case-specific organisation and data will be retained completely.

#####  Model MERGE and *CASE

When two models are merged, and either of them contain \*CASE data, then PRIMER retains this in the output model.

However in the situation where both models contain either master or child case definitions of the same label PRIMER does  ***not merge the case definitions***  , rather it applies the same "increment labels to avoid clashes" logic that it applies to other keywords, retaining separate cases in the merged model.

This is best illustrated by example. In the following example the "increment labels in secondary (model 2) to avoid clashes" option has been chosen

| **Source model 1** | **Source model 2** | **Result in output model 3** |
| --- | --- | --- |
| Master \*CASE 1 | Master \*CASE 1 | Master \*CASE 1 ( *was 1 in model 1* ) <br>Master \*CASE 2 ( *was 1 in model 2* ) |
| Child case 1 <br>Child case 2 | Child case 1 <br>Child case 2 <br>Child case 3 | Child case 1 ( *was 1 in model 1* ) <br>Child case 2 ( *was 2 in model 1* ) <br>Child case 3 ( *was 3 in model 2* ) <br>Child case 4 ( *was 1 in model 2* ) <br>Child case 5 ( *was 2 in model 2* ) |

If you wish to merge the contents of child cases in the output model you will have to do this manually.

#####  *CASE and include files.

PRIMER 12 allows you to move include files into and out of child cases, and it also obeys the Ansys LS-DYNA limitation that the \*CASE keyword may not be used in include files. This means that the sequence [in the master file]

\*CASE\_BEGIN\_xxx 
\*INCLUDE 
 *filename*  
\*CASE\_END\_xxx

Requires that all items in include *filename* , and all its descendants, are explicitly in child case xxx. PRIMER checks for this when running the standard "check" functions, and also when editing case membership where it will warn you if you try to change the case membership of an item in an include file to something different to that of the include file itself.

#####  *CASE plus *INCLUDE_TRANSFORM, *NODE_TRANSFORM and *PART_MOVE

PRIMER 12 allows these "transform" keywords to be used with \*CASE and should deal with all permutations of them correctly.

Moreover it should be possible to have:

* These "transform" keywords in child cases or the main model
* \*DEFINE\_TRANSFORMATION cards referred to by these in different cases
* All of the above using \*PARAMETER definitions in yet other cases.

But please note the word "should" in the sentence above. It is possible to pile complication upon transformation upon further complication using the keywords above, and while we believe that it works it is entirely possible that attempting to edit a fiendishly complex permutation of these keywords may not behave correctly. A moment's thought about the internal house-keeping required to process them will reveal why this is the case.

If you use these keywords in combination to create multiple input decks please try to keep usage simple!

#####  Selection from Object menus and *CASE

Object menus provide support for items in cases in two ways:

| If an item is in a child case this fact is appended to the menu listing.  <br>In the example here loadcurves 31 and 32 are both in child case 10 | ![](../Storage/primer-22-1/primer_links/sect_5/case/example_1.png) |
| --- | --- |
| Filtering by child case is available  <br>This can make it easy to "drill down" to the items of interest in a child case.<br> <br>Note that "Main Model only" is available as an option here, which is the same as saying "not in any child case". | ![](../Storage/primer-22-1/primer_links/sect_5/case/example_2.png) | ![](../Storage/primer-22-1/primer_links/sect_5/case/example_3.png) |

#####  Cross-references and *CASE

Within the current model internal cross-references are created normally, regardless of whether referrer or referee are in a child case or in the main model. For example a PART referred to by a SHELL that is in a child case will show that it is referred to by that shell, and this reference will "lock" the part against deletion.

| In addition the cross-reference editor will show that a reference is from an item in a child case that is in the current model.<br> <br>PART 1 in this example is referred to by shells 3 and 4 in the main model, and shells 1 and 2 in child case 1. | ![](../Storage/primer-22-1/primer_links/sect_5/case/xref_2.png) |
| --- | --- |

However what happens when a PART in the main model is referred to by a SHELL that is in a child case that is not current, ie on backing store? There are three possible solutions to this problem:

1. Use normal cross-references from items in backing store.
2. Do not have any cross-references from items in backing store.
3. Use modified "special" references from items in backing store.

A brief discussion of the pros and cons of each of the options above will help to explain why option (3), modified references, has been chosen despite some minor disadvantages.

**(1) Use normal cross-references from items in backing store.**

This has the advantage that an item in the main model "knows" that it is needed by something in a child case that is not current, and this locks it against deletion. However it presents several problems:

* PRIMER uses cross-reference lists for many purposes such as graphics, calculation of mass, connectivity checks (eg free edge display, "find attached") and so on. Clearly we do not want to draw items in cases currently in backing store, nor do we want these items to contribute to mass or inertia calculations, etc. 
 
Therefore it would be necessary to make some sort of distinction between an "active" reference from an item in the current model, and a "passive" one from an item on backing store. This would be possible, but it would be difficult to maintain and apply properly in all possible contexts and would be a possible cause of hard-to-find errors.
* The user would see cross-references from multiple instances of an item. For example there might be two references to a PART from SHELL label 1: one would be current and the other on backing store. 
 
Again, it would be possible to show a distinction between these but they would clutter up the cross-reference lists and there would be the potential for confusion between these and multiple "clone" definitions in the current model.

Faced with the problems above the "normal cross-reference" method has been rejected as being too difficult to implement safely.

**(2) Do not have any cross-references from items in backing store** .

This has the merit of simplicity, and it solves the problems cited in (1) above: no duplication of mass or connectivity, and no confusing multiple references. However it presents two major problems:

* Items in the main model would not "know" that they might be referred to when an item in a child case currently in backing store is made current, and they would not be locked against deletion. Therefore a "Cleanup unused" or a selective deletion might remove things that are actually needed.
* Just as importantly a reference  ***to***  something inside PRIMER is not an integer label, but rather a "pointer" to the actual address in memory used to store that item. For example when SHELL 1 in backing store refers to PART 1 in the main model the reference is to the address of PART 1 in memory. Therefore if that definition of PART 1 is deleted things go horribly wrong, which is why cross-references are so important!

Therefore having no cross-references from items in backing store is simply not possible given the internal architecture of PRIMER .

**(3) Use modified "special" references from items in backing store.**

So the solution adopted is to make a cross-reference to an item in the main model from items in backing store, so that the main model item is locked against deletion, but in a way that is different to normal cross -references. This is done as follows:

* Any "normal" references from the item moved to backing store to items in the main model are removed.
* However a single generic reference from the child case is inserted instead.

| This example shows how this appears in the cross-reference editor as a reference from a CHILD\_CASE :<br> <br>Here PART 1 "knows" that items in child case 2 currently on backing store refer to it, and this locks it against deletion.<br> <br>Only a single cross-reference from the child case is made, regardless of how many items within it reference the item in the main model. | ![](../Storage/primer-22-1/primer_links/sect_5/case/xref_1.png) |
| --- | --- |

This method is not perfect since it is not possible to tell exactly what in child case 2 references this part, the only way to do that would be to make a Master \*CASE containing child case 2 current. However it is simple, it works and it solves the objections identified in methods (1) and (2) above.

[Previous](boundary-defining-boundary-conditions.md)  |  [Next](comment.md)