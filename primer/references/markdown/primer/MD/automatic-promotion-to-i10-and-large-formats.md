#####  Automatic Promotion to I10 and Large Formats

PRIMER offers the ability to "promote" the format of output files when using  **[Keep Existing](format-setting-the-file-format.md#kim)**and [**Automatic**](format-setting-the-file-format.md#aum)****modes. This can be done at three levels of detail:

| (1) Whole model is promoted | The model is scanned and the widest label is found. Based on the width of that label a " *smallest viable format* " is determined, which will be one of 'Small', 'I10' or 'Large'. Then for each master and include file in the model: <ul> <li>In <b>Keep existing </b>mode each file is written out in the larger of [ <i>existing format </i>, <i>smallest viable format </i>] </li> <li>In <b>Automatic </b>mode each file is written out in <i>smallest viable format. </i> </li> </ul> |
| --- | --- |
| (2) Individual include files are promoted | Each include file is scanned to find the largest label it needs to write out. Include file A may refer to items resident in include file B, therefore "largest label in the file" may not be the same as "label of largest keyword defined in the file". This calculation produces a *smallest viable format* as above for that file, then that file is written out as: <ul> <li>In <b>Keep existing </b>mode the larger of [ <i>existing format </i>, <i>smallest viable format </i>] </li> <li>In <b>Automatic </b>mode <i>smallest viable format. </i> </li> </ul> <br><br>It will be clear that different files may end up using different formats in this mode. |
| (3) Individual keywords are promoted | The logic here exploits the fact that Ansys LS-DYNA allows individual keywords within a file to be promoted by using the "%" suffix for I10 format and the "+" suffix for large format. For example consider the \*NODE card: <br><br>| In small format it is written I18, 3E16, 2I8, thus: 
```
*NODE
$      8              24              40          56      64      72
       1          12.123            20.0        10.0       0       0

```
 |<br>| --- |<br>| If the "%" suffix is used the card is promoted to I10 format: I10, 3E16, 2I10, thus: 
```
*NODE %
$       10              26              42          58        68        78
         1          12.123            20.0        10.0         0         0
```
 |<br>| If the "+" suffix is used the card is promoted to Large format: I20, 3E20, 2I20, thus: 
```
*NODE +
$                 20                  40              60              80             100             120
                   1              12.123            20.0            10.0               0               0
```
 |<br><br> <br>In this mode PRIMER scans each \*keyword in each include file separately, and for each instance of [\*keyword in include file] determines the *smallest viable format* . Then for each keyword in each include file:<br> <ul> <li>In <b>Keep existing </b>mode the larger of [ <i>existing format </i>, <i>smallest viable format </i>] is determined and the *keyword is promoted if necessary. </li> <li>In <b>Automatic </b>mode the native format of the file will always be &quot;small&quot;, and for each *keyword promotion to the <i>smallest viable format </i>is used if this is larger <i>. </i> </li> </ul> <br>This logic always promotes all or none of a particular \*keyword. For example if a file contains 1000 \*NODE keywords and only one of these requires a larger-than-native format the entire block of \*NODE cards will be promoted.<br> <br>Promotion of keyword by suffix applies only to that keyword, a subsequent (different) keyword in the file with no suffix reverts to the native format of the file. |

| The auto-promotion strategy is selected in two ways, depending on the prevailing output mode.<br> <ul> <li>In <b>Keep Existing </b>mode a check is made prior to output and you are warned if the existing format in which the files were originally read can no longer hold the (modified) model, and you are asked to choose a strategy from the above. </li> </ul> |
| --- |
| <ul> <li>In <b>Automatic </b>mode you choose explicitly what strategy should be used using the <i>Automatic behaviour </i>sub-popup. <br> <br>Prior to keyword output the same check as above for <b>Keep Existing </b>mode is made, but instead of asking you what action to take the selected behaviour is applied automatically. </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2a1.png) |
| Renumber Model in this context.  <br>You will notice that the *Automatic Behaviour* popup has a final "Renumber model" option. This is really a legacy option that dates back to the days before Ansys LS-DYNA could support Large or I10 formats and the only way to write a model in small format would be to renumber labels that were too big. This option is retained for the following reasons:<br> <ul> <li>If you are writing a deck for use in software that can only handle Small format, this may be the only way to get the deck into a usable format. <br> <br> </li> <li>If using older versions of Ansys LS-DYNA the I10 and Large format options may not be available <br> <br>Large format was introduced in R7.1 <br>I10 format was introduced in R9 </li> </ul> <br>Renumbering the model is also the default option if you have explicitly chosen Small or I10 formats. It is presumed that you have a good reason for doing this and that the model will need to be changed to fit the chosen format, rather than the other way round. |
| Alternative Keyword promotion method in the Options2 tab  <br>It is also possible to set "free standing", as in not associated with any particular output format, keyword promotion. This is discussed further under [Keyword promotion](keyword-promotion-explicit-per-keyword-promotion-to-i10-and-large-formats-using-the-and-suffices.md#explicit_i10) in the [Options2 tab](pre-out-options2-tab.md#pre_options2). |

[Previous](format-setting-the-file-format.md)  |  [Next](mixing-small-i10-and-large-format-files-within-a-model.md)