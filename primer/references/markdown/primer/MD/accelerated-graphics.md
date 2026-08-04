##  Accelerated Graphics

From release 11 onwards PRIMER graphics have been rewritten to make more use of the capabilities of modern graphics cards. Broadly speaking the data to be displayed can be stored in memory on the graphics card itself, and also more of the work of rendering graphics can be "handed over" to the graphics card as well. Since the card has the information stored locally there is no need to transfer data from main memory each time a scene is redrawn, making redisplay during dynamic viewing much faster.

| **If it all goes horribly wrong ... PRIMER crashes when it reads any model**<br> <br>In rare cases, generally on an old machine or when the graphics driver is out of date, PRIMER 11 may crash when it first reads a model because it attempts to display it and the graphics go wrong. This can happen if the graphics card purports to offer "modern" features, but they don't work properly. If you get this behaviour it will be necessary to switch off accelerated graphics, reverting to pre-version 11 behaviour, which can be done by setting environment variable<br> <br>PRIMER\_NO\_VARRAY to true<br> <br>If this happens please seek advice from Oasys Ltd Support, but they will almost certainly suggest that as a first step you [update your graphics driver](upgrading-your-graphics-driver.md#update_driver). |
| --- |

|  |
| --- |

[Previous](the-format-of-the-saved-properties-prp-file.md)  |  [Next](tuning-accelerated-graphics.md)