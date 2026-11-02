###  Available Curve Properties

Various advanced requests can be performed (e.g. first non-zero Y, maximum in a window) and the table below describes them in more detail. Requests which require inputs (e.g. t1 and t2 of a window) take the default values in the table if the following words do not appear to be numbers, or if no following words exist.

| Property to output | property word | value words | notes |
| --- | --- | --- | --- |
| Minimum x | minx | - | - |
| Maximum x | maxx | - | - |
| Minimum y | min | - | - |
| X at minimum y | xatmin | - | - |
| Y at minimum x | yatmin | - | - |
| Minimum y in window t1 t2 | minw | t1 and t2 | default t1=-1E19 and t2=+1E19 |
| X at minimum y in window t1 t2 | xminw | t1 and t2 | default t1=-1E19 and t2=+1E19 |
| Maximum y | max | - | - |
| X at maximum y | xatmax | - | - |
| Y at maximum x | yatmax | - | - |
| Maximum y in window t1 t2 | maxw | t1 and t2 | default t1=-1E19 and t2=+1E19 |
| X at maximum y in window t1 t2 | xmaxw | t1 and t2 | default t1=-1E19 and t2=+1E19 |
| Average in window t1 t2 | ave | t1 and t2 | default t1=-1E19 and t2=+1E19 |
| Hic | hic | - | - |
| t1 of Hic window | hict1 | - | - |
| t2 of Hic window | hict2 | - | - |
| Hicd | hicd | - | - |
| t1 of Hicd window | hicdt1 | - | - |
| t2 of Hicd window | hicdt2 | - | - |
| 3ms | 3ms | - | - |
| t1 of 3ms window | 3mst1 | - | - |
| t2 of 3ms window | 3mst2 | - | - |
| Y at X | yatx | x value | default xvalue=-1E19 |
| X when Y is passed after gate time | xygate | y value & gate time | default yvalue=-1E19, gate=+1E19 |
| X at first non-zero Y | xnonz | - | nonzero = 1/1000000th of curve max |
| X at last non-zero Y | xfail | - | nonzero = 1/1000000th of curve max |
| Y value at last non-zero Y | yfail | - | nonzero = 1/1000000th of curve max |
| TTI | tti | - | - |
| Error Function - Max difference & time | max\_err | - | - |
| Error Function - Difference as a %age of reference | pc\_err | - | - |
| Error Function - Difference as a %age of peak reference | pc\_max\_err | - | - |
| Error Function - Average Difference | av\_err | - | - |
| Error Function - Average Difference as a %age of peak reference | av\_max\_err | - | - |
| Error Function - Area weighted difference | area\_err | - | - |
| Error Function - Max difference & time | err | - | - |
| Curve Correlation Function | correlate |  | Returns curve correlation value |

The are also variables which relate to properties of all curves rather than specific curves. In this case the 3rd word "curve #" should be replaced by "all".

| Property to output | property word | value words | notes |
| --- | --- | --- | --- |
| Minimum x over all curves | all\_minx | - | - |
| Maximum x over all curves | all\_maxx | - | - |
| Minimum y over all curves | all\_miny | - | - |
| X at minimum y over all curves | all\_xatmin | - | - |
| Maximum y over all curves | all\_maxy | - | - |
| X at maximum y over all curves | all\_xatmax | - | - |
| Curve number of curve containing minimum y over all curves | all\_catmin | - | - |
| Curve number of curve containing maximum y over all curves | all\_catmax | - | - |

Previous: outputting-curve-properties-to-text-files-variables-and-reporter  |  Next: writing-out-curve-properties-to-a-text-tabulation-file