###  Controlling Predictive Picking

Most of the time Predictive Picking is helpful, but there are two situations in which you might want to turn it off:

1. If your computer is very slow, or you are displaying graphics over a network, you may find that the need to keep updating the display as the cursor position moves makes the response sluggish.
2. If your image is very complex, and you are picking items which generate a lot of extra graphics when they are highlighted (typically sets, or contacts defined by set) you may find that predictive pick highlighting becomes a nuisance.

In the first situation you might want to turn it off for all picking operations; but in the second you may just want to suppress it for the duration of the current pick operation, turning it back on when you revert to picking items that are less visually complex. Therefore two levels of control are provided:

| Switching on/off temporarily for this picking operation only. |
| --- |
| The [PP] button to the right of the "Quick Pick" selection buttons can be used to toggle predictive picking on/off  ***for the current picking operation only.***<br> <br>As an alternative you can use the " p " (note lower case) keyboard short-cut to have exactly the same effect. | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_7_2.png) |
| This only affects the current picking operation, and the setting is "forgotten" once that operation ends. |
| Special case of Predictive Picking and contact surfaces  <br>Experience has shown that the combination of Predictive Picking and contact surfaces is not helpful. Most contact surfaces are defined by sets, often sets of many parts, and it is sometimes the case that the whole model will have been placed in a global contact.<br> <br>As a result Predictive picking of contacts tends to select many items, and if the whole model is in a contact it will always highlight the whole model - which is a hindrance and not a help!<br> <br>As a consequence there is a special exception in the case of the [Keyword] Contact panel, where predictive picking is off by default. This is equivalent to disabling it temporarily by the [PP] button or the " p " shortcut whenever this panel is entered, and it can be re-enabled by either of these means if desired. |

| Switching on/off globally, and controlling what is displayed. |
| --- |
| [Options]&gt; Pick & Select options maps the Picking and selection panel: |
| ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_7_3.png) | ![](../Storage/primer-22-1/primer_links/sect_4/images/fig_4_7_4.png) |
| Here you can choose from three possible modes for Predictive picking:<br> <br><br>| Not active | Turns Predictive Picking off globally for all picking operations. |<br>| --- | --- |<br>| Sketch item(s) | The item(s) in question are sketched; usually in free edge mode, but the exact sketching method depends upon what is being displayed. |<br>| Sketch and label item(s) | The item(s) are labelled as well as being sketched. Labelling is generally at the item's visual centre. (In this context "visual centre" means its average coordinate, which may not be its true centre of gravity.)<br> <br>Note that you can't have "label only", ie label without also sketching. |<br><br> <br>The current setting (along with all others in this panel) can be saved to the oa\_pref file using Save settings to oa\_pref file so that it is remembered for future sessions of PRIMER . |
| It is also possible to toggle programme-wide predictive picking on/off using the " P " (note upper case) keyboard short cut. This is equivalent to selecting Not active, or reverting to the current setting, in the panel above. However it is not "remembered" in any away, so a future PRIMER session will revert to the default behaviour as (possibly) modified in the oa\_pref file. |

|  |
| --- |

[Previous](description-of-predictive-picking.md)  |  [Next](ambiguity-and-predictive-picking.md)