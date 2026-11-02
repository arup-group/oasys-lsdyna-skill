##  Setting properties for curves

The folowing options can be used to set up properties for curves.

###  Setting curve Labels, Titles and tags

| Description | keyword | second word | third word | fourth word | notes |
| --- | --- | --- | --- | --- | --- |
| Curve Label | lab | curve # or tag | label word 1 | label word 2 etc | Specifies a new curve label |
| Curve Tag | tag | curve # or tag | tag | - | Specifies a new curve tag |
| Curve Title | tit | curve # or tag | label word 1 | label word 2 etc | Specifies a new curve title |
| Curve X axis label | xla | curve # or tag | label word 1 | label word 2 etc | Specifies a new x -axis label |
| Curve Y axis label | yla | curve # or tag | label word 1 | label word 2 etc | Specifies a new y-axis label |
| 1st Y axis | y1 | curve # or tag | - | - | puts the curve on the 1st y axis |
| 2nd Y axis | y2 | curve # or tag | - | - | puts the curve on the 2nd y axis |
| User defined model prefix | prefix | model | model # or 'all' | *"prefix string"* | sets the user defined model prefix |

From T/HIS 9.4 onwards, curve properties such as the minimum and maximum values can be displayed in the legend area as well as within the graph area.

The following commands use a new properties keyword and can be used to specify the font, colour and background used to display values as well as selecting which values are displayed on each curve.

| Keyword | 2nd word | 3rd word | 4th word | 5th word | 6th word | 7th word | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| properties | format | font | hm <br>hb <br>cm <br>cb <br>tm <br>tb <br>default | 8 <br>10 <br>12 <br>14 <br>18 <br>24 <br>default | standard colour | - | sets up font used to display curve properties <br> <br>fonts available: <br>hm - helvetica medium <br>cb - courier bold <br>tm - times new roman medium etc... <br> <br>font sizes in pt: <br>8, 10, 12 etc... |
| background | standard colour | - | - | - | Set a background colour for the text |
| transparency | integer (0-100) |  | - | - | Set the background transparency |
| border | standard colour | on/off | - | - | Set a border colour round the text and turn it on/off |
| arrow | on/off | - | - | - | Turn on/off a line connecting the text to the min/max value location |
| num | y\_only | - | - | - | Only display the y value |
| num | x\_y | - | - | - | Display both the x and y values on a single line |
| num | xy | - | - | - | Display both the x and y values on separate lines |
| value | *&lt;type&gt;* | - | - | - | Set the unit format to one of *automatic, general, scientific* for graph (n) |
| precision | m | - | - | - | Set the number of decimal places displayed for the y axis values to (m) in graph (n) |
| properties | legend | format | off | - | - | - | Turn off the display of curve values in the legend area |
| append | - | - | - | Append curve values (min,max,average ...) to the curve labels in the legend. |
| 2nd | - | - | - | Add a 2nd line to the legned for each curve containing the curve values (min,max,average ...). |
| curve #1 | curve #2 | ## | maximum | on/off | Turn on/off the display of one of the following curve properties in the legend. Input one or more curves and terminate the list with ## <br> <br>maximum - display curve maximum value <br>minimum - display curve minimum value <br>average - display curve average value <br>other - display other curve values |
| minimum |
| average |
| other |
| properties | curves | format | off | - | - | - | Turn off the display of cuvre values in the graph area |
| summary | - | - | - | Display the minimum/maximum value for all of the curves currently visible |
| all | - | - | - | Display minimum/maximum values for each curve that is currently visible |
| summary | smaximum | on/of | - | - | Turns on/off the display of one of the following curve summary properties <br> <br>smaximum - highlight the maximum value for all the curves displayed <br>sminimum - highlight the minimum value for all the curves displayed <br>lmaximum - label the maximum vlaue for all the curves displayed <br>lminimum - label the minimum vlaue for all the curves displayed |
| sminimum |
| lmaximum |
| lminimum |
| curve #1 | curve #2 | ## | smaximum | on/off | Turns on/off the display of one of the following curve summary properties. Input one or more curves and terminate the list with ## <br> <br>smaximum - highlight the maximum value for each curves <br>sminimum - highlight the minimum value for each curves <br>lmaximum - label the maximum vlaue for each curves <br>lminimum - label the minimum vlaue for each curves <br>other - label other curve values |
| sminimum |
| lmaximum |
| lminimum |
| other |

Previous: applying-extra-options-to-data-requests  |  Next: creating-datum-definitions