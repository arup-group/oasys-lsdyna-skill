###  Tuning Accelerated Graphics

PRIMER detects the attributes of your graphics card automatically, determines what features are available, and automatically switches on the best accelerations that should be possible as a result. Therefore accelerated graphics should just happen with no intervention from the user being required.

However in the real world not all hardware behaves as it should, graphics drivers can be out of date, and things can go wrong. Therefore a Tuning panel is provided to enable you to control acceleration features. This is invoked from the Options &gt; Tuning popup menu.

 ![](../Storage/primer-22-1/primer_links/sect_9/images/tune_1.png)

| ![](../Storage/primer-22-1/primer_links/sect_9/images/tune_2.png)It is beyond the scope of this manual to explain the details of graphics acceleration. However if graphics are giving problems you should use the following procedure:<br> <ol> <li>Turn off all three settings in the left hand column: <span class="buttontext">Use vertex arrays </span>, <span class="buttontext">Use VBOs </span>, <span class="buttontext">Use Shaders </span>. This will cause graphics to revert to the traditional &quot;immediate mode&quot; used prior to release 11. <br> <br> </li> <li>Read in a reasonably large model that takes an appreciable amount of time to render on your hardware, autoscale it and use <span class="buttontext">Test Performance </span>to see how it performs. This will spin it round 360 degrees and report the time taken. Alternatively to measure the time taken by ordinary graphics operations turn on <span class="buttontext">Show Timing </span>, which will report times to the dialogue box for all drawing operations. <br> <br> </li> <li>You will see two timing figures, expressed in milliseconds, displayed in the dialogue box each time the image is updated. The first is the time taken to render this frame, and the second is the average time taken to render the last 30 frames. Because of the &quot;granularity&quot; of system timers the average time is a better indication of performance. </li> </ol> |  |
| --- | --- |

Then use the following steps to try to determine what permutation of options will work on your machine. If any options are greyed out then your graphics card does not support them.

1. Turn on Use vertex arrays and use Test Performance again. If it all goes horribly wrong then proceed to " [upgrading your graphics driver](upgrading-your-graphics-driver.md#update_driver)" below, but hopefully you will see a speed improvement. However if vertex arrays will not work there is no point in continuing to steps 5 and 6 below.
2. Turn on Use VBOs and repeat the test. Again, things should speed up, but if they don't you may have to accept that Vertex Buffer Objects (VBOs) do not function correctly on your machine.
3. Turn on Use Shaders and repeat the test. This should speed up shaded plots, but it will have no impact on line or hidden mode plots. If it doesn't work, or goes wrong, then shaders cannot be used on your machine.

Hopefully some permutation of the above will give a speed-up and acceptable graphics. Once you have determined what works use Save Tuning Settings to save the settings to your oa\_pref file for use in future PRIMER sessions. You can revisit this tuning panel as often as you like, typically when you have installed a new graphics driver, to repeat the process above and find out if some different settings work better.

Ignore VSync tells the graphics card not to wait for the vertical refresh signal from your monitor before rendering the next frame. When frame rates get close to this refresh rate, typically 60Hz (~16mS/frame), ignoring this signal will give a slight improvement in performance, and for small models it may drop below this rate. However if this setting makes much difference you really need to use a bigger model otherwise you will be measuring factors other than just graphics performance.

It can pay to upgrade your graphics driver periodically as described in , and also to configure it correctly as described in .

| Setting VBO (Vertex Buffer Object) attributes (advanced topic) | ![](../Storage/primer-22-1/primer_links/sect_9/images/tune_4.png) |
| --- | --- |

***This is an advanced topic, and you don't have to concern yourself with these settings unless you are experiencing graphics memory problems.***

A typical shell model will use about 55MBytes of graphics memory per million elements, and a typical modern graphics card will have at least 1GByte of video memory, so problems are only likely to arise it you are processing huge models or you have a very low-spec graphics card.

Vertex Buffer Objects (VBOs) are area of memory on the graphics card itself in which graphics data (vertex information) can be stored. The advantage of this is that when it comes to redrawing, for example during dynamic rotation, the graphics card has the necessary data immediately to hand and does not have to wait for it to be delivered from main memory. This can speed up redrawing speed dramatically, often by a factor of 3x or more, so its use is worthwhile and PRIMER makes as much use of it as it can.

If this resource is exhausted while creating a plot then PRIMER will revert to storing subsequent graphics in main memory, and sending them to the graphics card each time the image is redrawn. This transition is seamless, and a plot may contain any permutation of "on card memory" and "in main memory" graphical data, however reversion to main memory will slow down performance so it is worth trying to exploit VBOs to their utmost.

PRIMER allocates VBO space in "chunks" of 128MBytes at a time, and reports in this panel how many such chunks have been allocated together with the %age of space within them that is currently being used. You can use this as a guide to how your graphics hardware is coping with the loads placed upon it.

The space available for VBO use is actually greater than the amount of memory on the graphics card, since the card can transfer data to and from dedicated main memory. However it is still finite, and has to be shared with other applications on the desktop, so its use has to be managed and this done via the VBO Size

The VBO Size will have one of the following settings:

Explicit Size (MB)

This is the default. PRIMER will attempt to determine how much video memory there is in on your graphics card and set the limit to that.

This is not possible on all cards, see below, and if the limit cannot be determined then Not set will be shown and no checking will take place. In this situation you can type in a sensible value (in MBytes) and this value will then be used for checking.

As stated above video memory is not limited purely to the memory physically present on the graphics card itself. The graphics card driver will also allocate a (potential) region of main memory and use this as an "overflow" if required, swapping data between card and main memory as required.

It can do this much faster than the application can transfer conventional graphics information from main memory, so it is generally faster to swamp the graphics card with data and let it manage it, rather than trying to manage graphics memory in the application itself. However taken to extremes this will crash the application, so default adopted is to use the total amount of physical memory on the card.

You might - rarely - want to  ***increase***  this value if, and only if, all the following are true:

* You can see that the number of VBO chunks allocated x 128 = the limiting size in MBytes
* The %age in use is 100%
* Graphics seems slow

You might want to  ***decrease***  this value if:

* The application has crashed with a warning from the graphics driver that it is out of memory.
* Graphics seems to be "jerky", and other graphical applications seem to be suffering when PRIMER is running.

However in this situation you may prefer to use the Automatic option.

This option will only be available if the graphics card / OpenGL installation permits it - see below.

In this case PRIMER will only allocate a further "chunk" of VBO memory if interrogation of the graphics card reveals that spare space is available.

This is "nice" to the graphics card, and to any other graphical applications competing for memory on the card, but it tends to result in quite a conservative usage of VBO space, resulting in slower performance once available memory is exhausted. It is useful as a "quick fix" if you have memory problems, but it will result in sub-standard graphics speed for very large models.

The process is dynamic, so a solitary PRIMER session might manage to obtain more VBO space than two or more such sessions running concurrently, or a session competing for resources with other graphical software.

If you Save Tuning Settings the mode and any value will be saved, and restored next time you run PRIMER .

PRIMER can determine the amount of memory available from the following hardware / software combinations:

* NVidia cards from OpenGL 2.0 onwards
* ATI cards from OpenGL 1.5 onwards

This should cover the vast majority of high performance desktop machines, but on laptops with "Integrated" graphics and older machines it may not be possible to determine graphics memory parameters.

This is a complex topic. If you experience graphics problems that you think are memory related it may be best to contact Oasys Ltd Support, since there are further diagnostics that can be turned on which may give more insight into what is going wrong.

[Previous](accelerated-graphics.md)  |  [Next](upgrading-your-graphics-driver.md)