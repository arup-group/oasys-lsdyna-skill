###  OPTIONS... Setting Model Check Options

The check option panel is now divided into pages for ease of use.

Use the popup to go to the page you want.

![](../Storage/primer-22-1/primer_links/sect_3/images/check%20options1.jpg)

 ![](../Storage/primer-22-1/primer_links/sect_3/images/check%20options2.jpg) 
These are the options that control checks related to rigid entities

Options for which zero is a valid entry will have an ON/OFF tick box to control whether the option is active.

For others entry of zero (or blank) de-activates the option.
 ![](../Storage/primer-22-1/primer_links/sect_3/images/checkoptions_contact.JPG) 
These are the options that control checks related to contacts

**Sliding contact** - by default the checks are **off** . If active, crossed edge checking is done. Additionally, penetrations may be reported if they fail one of 3 thresh-hold criteria.

* the max allowable value of penetration (typically 0.5mm)
* the minimum remaining unpenetrated segment thickness (typically 0.5mm)
* criterion B expressed as ratio of average segment thickness (typically 0.7)

**Tied contact** - by default constrained contacts will be checked for clashes with one another and connection contacts will be checked for any untied nodes. In the general case, there is no rule for which of tracked nodes are supposed to tie so a variety of options (all off by default) have been added.

* basic check - will give contact error if no node is tied
* tracked node set - error if any contact with SURFA (tracked) side defined by node set does not tie all the nodes
* tracked part - error if contact with tracked set defined by part/part-set or shell-set does not tie all the nodes
* free shell edge - error if tracked nodes on free edges of shell do not tie
* solid face - error if any external nodes on solid do not tie

The majority of PRIMER's checks are automatic and built into the software. These flag up fatal errors that would stop the model initialising in Ansys LS-DYNA and errors which could mean that the model is unreliable or may fail to run to completion. However, PRIMER enables the user to turn off/on many of its model integrity checks to allow the user to set a custom level of model warnings. The options available to control the level of checking have expanded considerably in recent versions of PRIMER. Most of these options can have an initial state set using the **oa\_pref** file. For example:

| [**Contact Penetration Checks**](contact-penetration-checking.md)<br> <br>Controls whether contacts are checked for penetrations and crossed edges.<br> <br>Set the following line in the oa\_pref file:<br> <br>primer\*contact\_penetration\_checks: ON (default OFF) |
| --- |

The following is a summary of the check options in PRIMER. Most options can also be set as [user preferences](m-summary-of-oa-pref-command-line-and-environment-variable-settings.md#dialoguecommands).

| **Ansys LS-DYNA version number (LS970, etc)**<br><ul> <li>Because earlier versions of Ansys LS-DYNA imposed some restrictions on the valid label range for certain items (for example a maximum of 99999 load curves) this version number can sometimes be significant when checking. </li> <li>The version number is the same as that used in the keyword output section. </li> </ul> <br>**Warnings about output fields suppressed due to the current Ansys LS-DYNA version number.**<br><ul> <li>The Model Check output includes warning messages that would be generated during keyout if the current&#160;Ansys LS-DYNA output version was used. This will note keywords, cards, and data fields that are not valid for the current Ansys LS-DYNA version. </li> <li>By default these messages are delivered as warnings, but they can be changed to become errors under the Options, Other category. The check can also be turned off altogether. </li> <li>These warnings are only available within Model Check, and not as part of &quot;free standing&quot; check operations elsewhere in <!-- #BeginLibraryItem &quot;/Library/primer.lbi&quot; -->PRIMER <!-- #EndLibraryItem -->. This ie because generating them requires a special (silent) peudo-keyout operation from which the warnings are collected, and this is only performed within Model Check. </li> </ul> <br>**Element quality checks** (ON/OFF/PREF) - by default each check set to PREF value (or OFF if this is unset)<br><ul> <li>A master control for whether element quality checks are performed </li> <li>A single check may be set on or of by setting a switch and giving a value (if needed), for example: <b>primer*shell_length_check </b>: ON and <b>primer*shell_min_length </b>: 6.0 </li> <li>by default element checks are at their individual settings. However, <b>primer*element_quality_checks </b>: ON (or OFF) activates/de-activates all checks and will over-ride any individual settings </li> </ul> <br>**Spotweld checks** - by default these are ON<br><ul> <li>The Length min/max refer to lengths of individual beams within a spotweld </li> <li>The minimum distance between welds and maximum number of panels to attempt to weld can also be set here </li> </ul> |
| --- |

The other checks are self-explanatory, providing the user with several mass checks and model quality checks. A few worth noting are:

* **max separation for rigid body merge** checks the distance between merges to detect a merge that has accidentally been made across the model
* **nodal rigid body max size** warns if nodal rigid bodies as measured by the diagonal of an enclosing box exceed defined size
* **check mat24 curves to strain (FAIL=0)** it is an error for MAT24 load curves to cross the x axis before failure strain is reached, similarly the curves in a table should not cross over one another below such strain. By default (FAIL=0) the failure strain is very large (1e21) so the curve will get extrapolated and two curves may converge in theory. In reality extrapolating strain to this amount is unrealistic, users may prefer to limit the check to a realistic strain value (e.g. 100.0).
* **check for duplicated elems in same part** - elements which share the same nodes & part, also called overlap check
* **part quality** will warn if more thah a user defined %age of elements of a part have failed the user defined quality checks
* minimum mass for rigid part the default is &lt;auto&gt; which means PRIMER attempts to calculate the minimum mass of the rigid part required to keep the adjoining deformable elements stable under conditions where model has added mass. Such mass is effectively lost at the nodes which join the rigid part, hence its mass must be sufficient to compensate. Users may set their own minimum mass value.

The current element quality check settings apply to both standard checking and APPLY\_RULES checking. To invoke the latter the [rules checks](rules-check.md#customcheck) must be activated.

Note: some checks may require intensive operations, e.g. Model %age added mass requires calculation of model mass. On very large models, this may make the checking process appear slow.

|  |
| --- |

[Previous](reduced-checking-categories-and-includes.md)  |  [Next](rules-check.md)