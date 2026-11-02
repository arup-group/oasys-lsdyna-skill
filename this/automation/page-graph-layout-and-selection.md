##  PAGE / GRAPH LAYOUT AND SELECTION

FAST-TCF scripts can contain commands to create and position multiple graphs. T/HIS Pages can also be created and graphs moved between pages. By default T/HIS will automatically create a single graph on the 1st 'Page' when it starts. If a single graph is required then the script does not need to contain any of the commands in this section. If additional graphs are required then by default they will be created on the 1st Page unless multiple pages have been selected.

| Keyword | 2nd word | 3rd word | 4th word | 5th word | 6th word | 7th word | 8th word | 9th word | notes |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | --- |
| Layout | page | wide | - | - | - | - | - | - | Set the page layout to tile wide |
| tall | - | - | - | - | - | - | Set the page layout to tile tall |
| cascade | - | - | - | - | - | - | Set the page layout to cascade |
| 1x1 | - | - | - | - | - | - | Set the page layout to 1 by 1 graphs per page |
| 2x2 | - | - | - | - | - | - | Set the page layout to 2 by 2 graphs per page |
| 3x3 | - | - | - | - | - | - | Set the page layout to 3 by 3 graphs per page |
| XY | m | n | - | - | - | - | Set the page layout to (m) by (n) graphs per page |
| custom | - | - | - | - | - | - | Set the page layout to custom |
| n | all | - | - | - | - | - | Add all graphs to page (n) |
| n | none | - | - | - | - | - | Remove all graphs from page (n) |
| n | add | graph | ID | - | - | - | Add graph (ID) to page (n) |
| n | remove | graph | ID | - | - | - | Remove graph (ID) from page (n) |
| size | m | n | - | - | - | - | Set the page size to m by n pixels |
| size | auto | - | - | - | - | - | Set the page size to automatic |
| graph | total | n | - | - | - | - | - | Set the total number of graphs to (n) |
| create | - | - | - | - | - | - | Create a new graph |
| delete | all | - | - | - | - | - | Deletes all graphs except the first one. |
| delete | n | - | - | - | - | - | Delete graph (n) |
| position | n | x1,y1 | x2,y2 | - | - | - | Position graph (n) with the bottom left hand corner at screen location (x1,y1) and the top right hand corner at (x2,y2). All coordinates should be in the range 0.0 to 1.0. |
| select | all | - | - | - | - | - | Select all graphs |
| select | n | - | - | - | - | - | Select graph (n) |
| select | none | - | - | - | - | - | Deselect all graphs |
| n | axes | position | left | right | top | bottom | Set the position of the left, right, top and bottom axis for graph (n). The positions given should be in the range 0.0 to 1.0 or the word 'Auto'. |
| n / all | legend | position | left | right | top | bottom | Set the position of the left, right, top and bottom of the legend for graph (n) or all graphs. The positions given should be in the range 0.0 to 1.0 or the word 'Auto' |
| n / all | legend | nfpos | position |  |  |  | Set the non-floating (docked) legend position for graph (n) or all graphs. The position should be within the range 0.0 &lt; position &lt; 1.0. |
| n / all | legend | format | *&lt;type&gt;* | - | - | - | Set the legend format to one of *column/default, full/off, automatic, floating* for graph (n) |
| n / all | legend | columns | *m* | - | - | - | Set the number of columns in the legend to m (1 to 3) for graph (n) or all graphs |
| n / all | legend | background | standard colour | - | - | - | Set a background colour for the floating legend for graph (n) or all graphs |
| n / all | legend | transparency | integer (0-100) | - | - | - | Set the background transparency for the floating legend for graph (n) or all graphs |
| n / all | x | format | *&lt;type&gt;* | - | - | - | Set the x axis unit format to one of *automatic, general, scientific* for graph (n) or all graphs |
| n / all | y | format | *&lt;type&gt;* | - | - | - | Set the y axis unit format to one of *automatic, general, scientific* for graph (n) or all graphs |
| n / all | y2 | format | *&lt;type&gt;* | - | - | - | Set the second y axis unit format to one of *automatic, general, scientific* for graph (n) or all graphs |
| n / all | x | precision | m | - | - | - | Set the number of decimal places displayed for the x axis values to (m) in graph (n) or all graphs |
| n / all | y | precision | m | - | - | - | Set the number of decimal places displayed for the y axis values to (m) in graph (n) or all graphs |
| n / all | y2 | precision | m | - | - | - | Set the number of decimal places displayed for the second y axis values to (m) in graph (n) or all graphs |

Previous: creating-fast-tcf-files  |  Next: input-syntax-to-load-other-files