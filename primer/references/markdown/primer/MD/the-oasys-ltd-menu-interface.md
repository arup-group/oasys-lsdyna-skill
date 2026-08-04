###  The Oasys Ltd "Menu Interface"

All graphical Oasys LS-DYNA Environment software uses a menu interface, which is effectively a window manager that runs in the application's own window.

Its default configuration should work satisfactorily in most cases, but there are some environment variables that can be set to change its behaviour:

[**Configuring Menu Interface environment variables.**](the-oasys-ltd-menu-interface.md#env)

[**Setting the correct physical resolution for your display.**](the-oasys-ltd-menu-interface.md#physicalresolution)

| Environment Variable | Possible values | What it does |
| --- | --- | --- |
| **USE\_PIXMAPS** | **true** [default] or **false** | Uses "pixmap" backing store to make the scrolling of windows smoother. <br> <br>If memory consumption in the X server is a problem, which sometimes occurs in older X terminals and emulators, this may be set to **false** to conserve memory. You will notice that scrolling menu windows gives a little bit of "flicker", but functionality is unaffected. |
| **SM\_USE\_VISUAL** | **overlay** [default ^(1)^] <br> **default**  <br>  ***&lt;visual id&gt;*** | Defines which bit-planes the menu system runs in. <ul> <li>&quot; <strong>overlay </strong>&quot; puts it into the deepest overlay planes that exist on the display. </li> <li>&quot; <strong>default </strong>&quot; uses the default planes. </li> <li> <em> <strong>&lt;visual id&gt; </strong> </em>is the visual id (in hexadecimal) in which it is to run - ask Oasys Ltd&#160;Support for advice first! </li> </ul> <br>On some older displays, especially SGis, using the overlay planes may result in strange colours elsewhere on the screen. And on seriously old machines the overlay planes may only be 2 bits deep resulting in the menu system appearing only in shades of grey. In these cases set this variable to **default** to force the menu system into the default (image) planes.<br> <br>^(1)^" **overlay** " is the default for PRIMER and D3PLOT to avoid conflict with the image planes, but " **default** " is used for T/HIS to make screen grabs simpler. See the notes on " [Overlay Planes](the-graphics-card.md#Overlay%20Planes)" above for more information about this. |
| **SAVE\_UNDER** | **true** [default] or **false** | Determines whether or not the "save under" property of the window manager is requested for the area under popup menus. This property "saves" the portion of the image under these sub-windows, meaning that they do not have to be redrawn explicitly when made visible again. <br> <br>On Compaq OSF 4 operating systems the default behaviour can result in an empty grey area appearing under these menus. This is due to a bug in the Compaq implementation of the X server which appears to be fixed in OSF 5. Setting this variable to **false** will cure the problem on these platforms, although this can lead to a lot of image redraws if the visual used for the menu system is not **overlay** (or the machine has no overlay planes). |
| **DISPLAY\_FACTOR** | &lt; *undefined* &gt;[default] <br> **automatic**  <br>0.5&lt; **value** &lt;2.0 | The Oasys Ltd menu system tries to present a consistent appearance over a range of display resolutions and sizes. To do this it attempts to determine the physical resolution in dots per inch (dpi) of the display and, in conjunction with the pixel resolution (eg 1280x1024), to provide the best appearance it can. <br> <br>Unfortunately not all X servers are correctly configured to provide this information, and there is no standard way of performing this configuration. If the menus on your display seem too big or too small, or just plain "wrong", the following process is recommended: <br> <br>Set **DISPLAY\_FACTOR** to **automatic** , then run D3PLOT to see how it looks. <br> <br>If that is still unsatisfactory then try a range of **Scale** values in the front panel to try to arrive at a satisfactory value. <br> <br>If that still doesn't work properly it is probably because the physical resolution (dpi) of your display has not been set correctly see how to do this below. <br> <br> ![](../Storage/primer-22-1/primer_links/graphics/scale_val.gif) |

For examples of how to set environment variables see [Defining **DISPLAY** on Unix and Linux systems:](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#displayunix)or [Defining **DISPLAY** on Windows systems:](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#windisplay). The method is identical.

####  Setting the correct physical resolution for your display.

This is only necessary if you think that your display is assuming the wrong physical properties for the screen, as evidenced by fonts and/or windows coming out the wrong size. Unfortunately there is no standard way of doing this, and the following hardware-dependent solutions may not meet your case. If you still have problems please contact Oasys Ltd Support for help.

[Windows platforms](the-oasys-ltd-menu-interface.md#attr_windows) 
 [HP-UX systems](the-oasys-ltd-menu-interface.md#hpux) [Compaq OSF systems](the-oasys-ltd-menu-interface.md#osf) [PCs running Windows with the Exceed emulator.](the-oasys-ltd-menu-interface.md#pcexceed)

| Windows platforms (2000, XP, Vista)  <br>In most cases the operating system should "know" the physical attributes of the display, but we have seen a few cases (especially on Vista) where this is not the case and it is necessary to give Oasys LS-DYNA Environment this infiormation explicitly. This is done via the two environment variables:<br> <br><br>| DISPLAY\_HEIGHT | The height of the display in millimetres |<br>| --- | --- |<br>| DISPLAY\_WIDTH | The width of the display in millimetres |<br><br> <br>It is best to set these as "system" variables, as then they will apply for all users on that machine; but if you only have permission to set environment variables for your user name that will suffice. Once set close down and restart Oasys LS-DYNA Environment, and it will use these values rather than those supplied by the operating system. |
| --- |

| HP platforms (HP-UX operating) system.   Method 1:  <br>**Edit the /usr/lib/X11/X0screens file directly.**<br> <br>As user root edit this file and add this line to the end of the file<br> <br>**MonitorSize**   ***nn***   **Inches**<br> <br>Where &lt; *nn* &gt; is your monitor size, eg 20.<br> <br>Then logout completely from the console, revert to "command line" login, and allow the window manager to restore the "desktop login" prompt. This will restart the X server with the new properties. |
| --- |
| Method 2:  <br>**Use the SAM utility to change this file.**<br> <br>As user root start "sam".<br> <br>Select **Display**  ![](../Storage/primer-22-1/primer_links/graphics/hp_1.gif)=&gt; **X Server Configuration**  ![](../Storage/primer-22-1/primer_links/graphics/hp_2.gif) |
| Select your graphics card, and from the **Actions** pull-down menu select: |
| **Modify Screen Options**<br> <br>![](../Storage/primer-22-1/primer_links/graphics/hp_3.gif) |
| Set the monitor size to the required dimensions, and follow the instructions about restarting.<br> <br>![](../Storage/primer-22-1/primer_links/graphics/hp_4.gif) |

| On Compaq OSF 4/5 systems  <br><br>| **Edit the /usr/lib/X11/Xserver.conf file**  <br> <br>Note: On OSF 5 systems I have found that the Xserver.conf file existed in several different places (eg /etc/X11, /var/...). It was clear from the documentation which one it should have been using, and it was equally clear from trial and error that it was using a different one. <br> <br>I would suggest that you do a "find" on your system to find all occurrences, ie: <br> <br> **find / -name Xserver.conf -print**  <br> <br>and perform the edits given here in each in turn until you find one that works. <br> <br>Thanks Compaq! | As root edit this file. <br> <br>Look for the line starting <br> <br> **args &lt;**  <br> <br>Add to the end of the following argument list <br> <br> **-dpi**   ***nn***   <br> <br>Where &lt; *nn* &gt; is the screen resolution in dots per inch. <br> <br>For example on my machine these lines now read: <br> <br> <br><br>>  <br>>  <br>>  **args &lt;**  <br>>  <br>>  **-pn -nice 2 -wm -dpi 90**  <br>>  <br>>  **&gt;**  <br>>  <br>>  <br><br> <br> <br>To establish the &lt;nn&gt; value in dots per inch: <br> <br> * Find the screen resolution from xdpyinfo if unknown (eg 1280 x 1024)<br> * Measure the vertical and horizontal visible dimensions in inches with a ruler (eg 15" x 12")<br> * Calculate the average (here of 1280/15 and 1024/12) to get a "dots per inch" value (here 85)<br> <br> <br>Finally logout of the console, taking it right back to command line mode, then allow the X server to restart the graphical login with the new properties. |<br>| --- | --- | |
| --- |

######  On PCs running Windows using the Exceed emulator.

From the main Exceed directory use

| | ![](../Storage/primer-22-1/primer_links/graphics/exceed_5.gif) | =&gt; | ![](../Storage/primer-22-1/primer_links/graphics/exceed_6.gif) | =&gt; |<br>| --- | --- | --- | --- | |
| --- |
| ![](../Storage/primer-22-1/primer_links/graphics/exceed_7.png) |

In the **Video** panel set the measured (this time in mm) screen dimensions.

Here my (21") display is 400x300mm.

You will need to restart Exceed to make these settings take effect.

[Previous](opening-an-x11-connection-to-a-display-the-display-environment-variable.md)  |  [Next](jade-the-javascript-debugger.md)