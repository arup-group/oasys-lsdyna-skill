#####  Keyword Promotion Explicit per Keyword Promotion to I10 and Large Formats Using the "%" and "+" Suffices

From version 18.0 PRIMER offers an alternative way of using the "%" (for I10) and "+" (for Large) suffices on keywords. This has been added at the request of users who want to use Small format, but to have all \*keywords with 8 wide fields within these files always promoted to I10 format by adding the "%" suffix, even if the data does not require it.

This promotion is independent of the **Small / I10 / Large / Automatic / Keep original** output methods, and there is some overlap with the functionality of the **Automatic** and **Keep original** methods which is discussed further below.

| The options are <br><br>| No promotion | Not active |<br>| --- | --- |<br>| -&gt;I10 if needed | \*Keywords in Small format which contain 8 wide data fields will be promoted to I10 format using "%"  ***only if***  any data for that \*keyword within that file overflows those fields. |<br>| -&gt;I10 always | \*Keywords in Small format which contain 8 wide data fields will  ***always***  be promoted to I10 format using "%", even if no data overflows are detected. |<br>| -&gt;I10 / Large if needed | \*Keywords in any format within a file will be promoted as necessary to I10 (using "%") or Large (using "+") formats as required  ***only if***  any data fields overflow. | | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2a2.png) |
| --- | --- |

######  List of keywords affected by -&gt;I10 promotion 
 
Promotion to I10 format is only relevant if the existing format is Small, and it only affects keywords which have 8 wide data fields. At the time of writing (August 2020) the affected keywords are shown in the following table. Some keywords have multiple lines of data with varying format widths, only the formats of lines containing 8 wide fields are shown below.

| **\*Keyword** | **Original small format** | **Promoted format** |
| --- | --- | --- |
| \*AIRBAG\_REFERENCE\_GEOMETRY <br>\*AIRBAG\_SHELL\_REFERENCE\_GEOMETRY | I8, 3E16 <br>6I8 | I10,3E16 <br>6I10 |
| \*BOUNDARY\_PRESCRIBED\_FINAL\_GEOMETRY | I8,3E16,I8,E16 | I10,3E16,I10,E16 |
| \*CONSTRAINED\_POINTS | I8, 3E16 | I10,3E16 |
| \*CONTROL\_SOLID | 10I8 | 10I10 |
| \*ELEMENT\_BEAM <br>\*ELEMENT\_DISCRETE <br>\*ELEMENT\_INERTIA <br>\*ELEMENT\_MASS <br>\*ELEMENT\_MASS\_PART <br>\*ELEMENT\_PLOTEL <br>\*ELEMENT\_SEATBELT <br>\*ELEMENT\_SHELL <br>\*ELEMENT\_SOLID <br>\*ELEMENT\_SPH <br>\*ELEMENT\_TSHELL | 10I8 <br>5I8,E16,I8,E16 <br>3I8 <br>2I8,E16,I8 <br>I8,3E16,I8 <br>3I8 <br>5I8,E16,2I8 <br>10I8 <br>10I8 <br>2I8,E16,I8 <br>10I8 | 10I10 <br>5I10,E16,I10,E16 <br>3I10 <br>2I10,E16,I10 <br>I10,3E16,I10 <br>3I10 <br>5I10,E16,2I10 <br>10I10 <br>10I10 <br>2I10,E16,I10 <br>10I10 |
| \*INITIAL\_FOAM\_REFERENCE\_GEOMETRY | I8,3E16 | I10,3E16 |
| \*LOAD\_SEISMIC\_SSI | I8,3E16,3I8 | I10,3e16,3I10 |
| \*NODE | I8,3E16,2I8 | I10,3E16,2I10 |
| \*PART\_MOVE | I8,3E16,2I8 | I10,3E16,2I10 |
| \*MESH\_NODE} <br>\*MESH\_SURFACE\_NODE} <br>\*MESH\_VOLUME\_NODE} <br> <br>\*MESH\_SURFACE\_ELEMENT <br>\*MESH\_VOLUME\_ELEMENT | I8,3E16 <br> <br> <br>6I8 <br>6I8 | I10,3E16 <br> <br> <br>6I10 <br>6I10 |

######  Discussion on the pros and cons of using this option
 
The "-&gt;I10 always" option is what was originally requested, the other options have been added because they require no extra coding effort and may be useful in some cases. It will be evident that these options overlap with the "Automatic" output format option and can achieve much the same effect via a different route. It doesn't really matter which you use, but you should be aware of the following consequences of using this Explicit promotion scheme.
 
* Explicit promotion to "-&gt;I10 if needed" or "-&gt;I10 always" effectively means that the smallest label that can be used in a Small format deck is now 9,999,999,999. It also means that parameters can always be 9 wide, and character labels 10 wide. 
 
This affects how PRIMER calculates whether or not a model will fit into Small format because, in effect, it means that Small format can always contain I10 format data. The label checks prior to output take this into consideration and will not report data that would "overflow Small but fit in I10".
* Explicit promotion to "-&gt;10 / Large if needed" means that any keyword can be promoted to Large format, rendering all label range checks pointless. If you choose this option you effectively turn off label range checking prior to output.

Users of I10 format should also consider whether they can use labels up to the full 9,999,999,999 limit or whether they should restrict themselves to the signed 32 bit integer limit of 2,147,483,647. This issue is considered in more detail in ["Long" keyword format and "large" labels](long-keyword-format-and-large-labels.md#wide_format).
 
In addition users should be aware that setting one of the promotion options above may have the effect of hiding the fact that labels outside the expected range are being used. This is normally picked up either during [Model Check](model-check.md#39MODELCHECK) or during PRIMER's standard pre-output checks, but using the promotion options here effectively "raises the floor" at which label overflows are detected. This probably won't matter for Ansys LS-DYNA, but if keyout files are to be read and processed by other software this will need to be able to "understand" these per-keyword promoted formats.

 [Previous](pre-out-options2-tab.md)  |  [Next](mutable-parameter-scope-how-mutable-parameters-are-handled-during-output.md)