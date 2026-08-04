###  Setting Attributes

In each case the the option Settings in the Viewing menu  gives access to further options which allow you to modify the pre-defined settings (angular increments, time delays, etc).

| ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_3_set.gif) |
| --- |

The attributes that can be set are:

| Rotation Angle | Angular increment in degrees. The default is 5 deg, but any value 0.0 &lt; value &lt; 180.0 is valid. The ANGLE increment of five degrees is a reasonable value for single clicks, but is really too large to give the impression of smooth rotation under continuous motion: you will probably find that a value of 1 or 2 degrees is better for that. |
| --- | --- |
| Trans Delta | The translation increment as a fraction of screen span. Default is 0.1 (ie 10%), but any value 0.0 &lt; value &lt; 0.5 is valid. |
| Magnif Factor | The magnification factor. Default is 1.1 (ie 10%), but any value 1.0 &lt; value &lt; 5.0 is valid. |
| Time Delay | Is the time delay (in seconds) between continuous transformations when a button is held down. The default is 0.02s, but values 0.0 &lt;= value &lt; 0.5 are valid. The Time Delay is the minimum permitted time delay between frames. If the hardware is taking longer than this to render each frame it does not add to the delay, it simply pads it out if the inter-frame time is shorter than this interval. <br> <br>You may be tempted to cut the time delay between transformations down to zero, and on very fast hardware (typically 3D machines) this gives good results, but on slower hardware you may find that this gives uneven results as competing system demands lead to variable elapsed intervals between frames. It is for this reason that the delay of 0.02 seconds is the default: it barely slows transformation (50 frames per second is twice as fast as a TV set scans!), but it does even out the delay time between frames giving a smoother result - especially under X-Windows. Experiment on your hardware. |

[Previous](magnification-functions.md)  |  [Next](dynamic-viewing-using-the-mouse-to-change-views.md)