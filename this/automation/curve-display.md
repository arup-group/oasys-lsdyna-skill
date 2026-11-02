###  Curve Display

The list of curves displayed in each graph is controlled by the  **display**  keyword. The list of curves can contain a mixture of curve tags, curve numbers (prefixed with #) or curve groups. If curve tags are specified in the curve list then they can contain wildcards.

| keyword | second word | notes |
| --- | --- | --- |
| display | curve list | The curve list can contain a mixture of curve tags, curve numbers (prefixed with #) or curve groups. If curve tags are specified in the curve list then they can contain wildcards. |

The following option can be appended to the  **display**  keyword after the curve list.

| Additional format | format word | following word #1 | following word #2 | notes |
| --- | --- | --- | --- | --- |
| Style application | sty | style name | - | Curves have styles applied in the order they were defined |

The following additional options that can be appended to the  **display**  keyword after the curve list were deprecated in T/HIS 9.4 and may be removed entirely in the future, so their use is not recommended. Equivalent commands have been added to the [Plot Setup](plot-setup.md#setup)commands along with a number of new options.

| Additional format | format word | following word #1 | following word #2 | notes |
| --- | --- | --- | --- | --- |
| Title | tit | title word #1 | title word #2 etc | Takes following words as a title until another keyword is found |
| X axis options | xax | if numeric #1 - xaxis min | if numeric #2 - xaxis max | Takes following words as a label until another keyword is found |
| otherwise xaxis label | otherwise xaxis label |
| Y axis options | yax | if numeric #1 - yaxis min | if numeric #2 - yaxis max | Takes following words as a label until another keyword is found |
| otherwise yaxis label | otherwise yaxis label |
| 2nd Y axis options | 2ya | if numeric #1 - yaxis min | if numeric #2 - yaxis max | Takes following words as a label until another keyword is found |
| otherwise yaxis label | otherwise yaxis label |

| e.g. | display | curve\_1 | curve\_2 |  |
| --- | --- | --- | --- | --- |
|  | (display "curve\_1" and "curve\_2") |  |  |  |
|  | display | curve\_2 | &"Curve group 3" | title SLED TEST \ <br> xax Time \ <br> yax Displacement |
|  | (display "curve\_2" and all the curves in "Curve group 3". Set the plot title and x and y axis labels.) |

Previous: plot-setup  |  Next: image-generation