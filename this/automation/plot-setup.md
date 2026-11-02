###  Plot setup

| Description | keyword | following words |
| --- | --- | --- |
| Plot setup | setup | plot setup words |

These options set the appearance of any plots that are created afterwards. They are to do with the general appearance of the plot rather than the curve itself. The curve appearances can be set up with the [style definition line](setting-curve-styles.md)and on the [image plotting line](image-generation.md#images). All following words must be on the same line. If the "on" or "off" is missed out from the following word (where applicable) then FAST-TCF will take the **opposite** to the default (this helps with backwards compatibility issues but can also make a script more compact).

| e.g. | setup | ax bold | grid on | line bold | reverse |
| --- | --- | --- | --- | --- | --- |
|  | ` ` | (bold axes) | (grid on) | (bold lines) | (reverse foreground and background) |
|  | setup | double on | border off | show 3ms | size 250 |
|  | ` ` | (double axes on) | (no border) | (3ms window on) | (size = 1000 x 750 pixels) |
|  | setup | fonts title hb 24 red |  |  |
|  | ` ` | (title: helvetica bold 24pt, in red) |  |

| Plot setup description | plot setup word | following word(s) | notes |
| --- | --- | --- | --- |
| Axis thickness | ax | fine | for colours - see standard list below |
| normal |
| bold |
| heavy |
| standard colour |
| Background | back | standard colour | for colours - see standard list below |
| Border | bo | fine | for colours - see standard list below |
| normal |
| bold |
| heavy |
| standard colour |
| on or off |
| Double yaxis | do | on or off |  |
| Fix line styles | fix | on or off | this overwrites any style definitions |
| Fonts | fon | [xl]abel | hm <br>hb <br>cm <br>cb <br>tm <br>tb | 8 <br>10 <br>12 <br>14 <br>18 <br>24 | Colour | sets up fonts for the image: <br> <br>fonts available: <br>hm - helvetica medium <br>cb - courier bold <br>tm - times new roman medium etc... <br> <br>font sizes in pt: <br>8, 10, 12 etc...for colours - see standard list below |
| [yl]abel |
| [y2l]abel |
| [xu]nits |
| [yu]nits |
| [y2u]nits |
| [t]itle |
| [le]gend |
| [all] |
| Foreground | fore | standard colour | for colours - see standard list below |
| Format style | fo | default |  |
| automatic |
| full |
| Grid on | gr | fine |  |
| normal |
| bold |
| heavy |
| on or off |
| Line thickness | li | on | Turn on plotting of curve lines |
| off | Turn off plotting of curve lines (symbols drawn) |
| fine | set the line thickness to 1 pixel |
| normal | set the line thickness to 2 pixels |
| bold | set the line thickness to 4 pixels |
| heavy | set the line thickness to 8 pixels |
| Model numbers on labels. | mn | auto | Adds a "model" prefix to the entity IS.<br> <br>If set to the "auto" only puts the model number on when there is more than 1 model in T/HIS |
| on |
| off |
| Model prefix format | prefix | id | Set the model prefix to the model ID |
| dir | Set the model prefix to the job directory |
| thf | Set the model prefix tot eh amne fof the base THF/model file |
| user | Set the modle prefix to the user defined one. |
| Reverse black white | re | on or off |  |
| Size of plot | si | integer | xsize = value x 4, ysize = value x 3 (aspect fixed) |
| Solid x and y axis | so | on or off |  |
| Symbols on | sy | on or off |  |
| X grid controls | xau | - |  |
| xin | x grid increment |
| xoff | x grid offset |
| Y grid controls | yau | - |  |
| yin | y grid increment |
| yoff | y grid offset |
| Axis type, Linear/Logarithmic | xlin | - | Swap the x axis to a linear scale |
| xlog | - | Swap the x axis to a logarithmic scale |
| ylin | - | Swap the y axis to a linear scale |
| ylog | - | Swap the y axis to a logarithmic scale |
| y2lin | - | Swap the second y axis to a linear scale |
| y2log | - | Swap the second y axis to a logarithmic scale |
| Axis display | axis | top | on or off | Turns ON/OFF display of graphs TOP axis |
| axis | bottom | on or off | Turns ON/OFF display of graphs RIGHT axis |

| Plot setup description | plot setup word | following word(s) | notes |
| --- | --- | --- | --- |
| Graph Ttitle | title | *"title string"* | Set the title for the graph. |
| title\_on | - | Turn on the display of the graph title |
| title\_off | - | Turn off the display of the graph title |
| X Axis Properties | x\_lab | auto | Set the x axis label to be defined automatically |
| manual | Set the x axis label to a user defined label |
| *"label string"* | Set the user defined x axis label |
| on | Turn on the display of the x axis label |
| off | Turn off the display of the x axis label |
| x\_min | auto | Set the x axis minimum value to automatic |
| numerical value | Set the x axis minimum value |
| x\_max | auto | Set the x axis minimum value to automatic |
| numerical value | Set the x axis minimum value |
| x\_unit | auto | Set the x axis unit label to be defined automatically |
| manual | Set the x axis unit label to a user defined label |
| "unit string" | Set the user defined x axis label |
| on | Turn on the display of the x axis unit label |
| off | Turn off the display of the x axis unit label |
| Y Axis Properties | y\_lab | auto | Set the y axis label to be defined automatically |
| manual | Set the y axis label to a user defined label |
| *"label string"* | Set the user defined y axis label |
| on | Turn on the display of the y axis label |
| off | Turn off the display of the y axis label |
| y\_min | auto | Set the y axis minimum value to automatic |
| auto\_visible | Set the y axis minimum to the automatic value based on the visible part of the x-axis. |
| numerical value | Set the y axis minimum value |
| y\_max | auto | Set the y axis maximum value to automatic |
| auto\_visible | Set the y axis maximum to the automatic value based on the visible part of the x-axis. |
| numerical value | Set the y axis maximum value |
| y\_ranges | auto | Set the y and y2 axis minimum and maximum values to automatic |
| auto\_visible | Set the y and y2 axis minimum and maximum to the automatic values based on the visible part of the x-axis. |
| y\_auto | Set the y axis minimum and maximum values to automatic |
| y\_auto\_visible | Set the y axis minimum and maximum to the automatic values based on the visible part of the x-axis. |
| y\_unit | auto | Set the y axis unit label to be defined automatically |
| manual | Set the y axis unit label to a user defined label |
| "unit string" | Set the user defined y axis label |
| on | Turn on the display of the y axis unit label |
| off | Turn off the display of the y axis unit label |
| 2nd Y Axis Properties | y2\_lab | auto | Set the second y axis label to be defined automatically |
| manual | Set the second y axis label to a user defined label |
| *"label string"* | Set the user defined second y axis label |
| on | Turn on the display of the second y axis label |
| off | Turn off the display of th seconde y axis label |
| y2\_min | auto | Set the second y axis minimum value to automatic |
| auto\_visible | Set the second y axis minimum to the automatic value based on the visible part of the x-axis. |
| numerical value | Set the second y axis minimum value |
| y2\_max | auto | Set the second y axis maximum value to automatic |
| auto\_visible | Set the second y axis maximum to the automatic value based on the visible part of the x-axis. |
| numerical value | Set the second y axis maximum value |
| y\_ranges | auto | Set the y and y2 axis minimum and maximum values to automatic |
| auto\_visible | Set the y and y2 axis minimum and maximum to the automatic values based on the visible part of the x-axis. |
| y2\_auto | Set the second y axis minimum and maximum values to automatic |
| y2\_auto\_visible | Set the second y axis minimum and maximum to the automatic values based on the visible part of the x-axis. |
| y2\_unit | auto | Set the second y axis unit label to be defined automatically |
| manual | Set the second y axis unit label to a user defined label |
| "unit string" | Set the user defined second y axis label |
| on | Turn on the display of the second y axis unit label |
| off | Turn off the display of the second y axis unit label |

#### 
 
#### Deprecated Plot Setup Options 
 
The following setup commands have been deprecated since T/HIS 9.4 and may be removed entirely in the future. They are superseded by the "properties" keyword (see [Setting properties for curves](setting-properties-for-curves.md#top)).

| Plot setup description | plot setup word | following word(s) | notes |
| --- | --- | --- | --- |
| Set colour of min/max value | min\_max | standard colour | for colours - see standard list below |
| Show max value | show | max | on <br>off | Turn on/off the highlight of the Maximum Value |
| Show max value | show | min | Turn on/off the highlight of the Maximum Value |
| Display X value at max | show | xmax | Display x value at Maximum |
| Display X value at min | show | xmin | Display x value at Maximum |
| Display Y value at max | show | ymax | Display y value at Maximum |
| Display Y value at min | show | ymin | Display y value at Maximum |
| Show 3ms Clip Widow | show | 3ms |  |
| Show HIC Widow | show | hic |  |

Previous: setting-curve-styles-by-model  |  Next: curve-display