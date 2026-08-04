# Placement: where the master window is mapped on the desktop

Most CAE users will have more than one monitor on their desktop, or they may be working on a laptop with additional displays attached. Historically the Oasys LS-DYNA Environment software has always started on the main (primary) display and the existing "placement" preference has allowed a sub-area of that display to be used. However, more options are available:

* On a multi-monitor desktop it is possible to designate the monitor on which the software starts, this does not have to be the main display.
* On a single monitor desktop the original logic of partitioning the area of the single main window is still used.
* On "ultra wide" desktops, typically the case when display is made from Linux to a multi-monitor Windows desktop, an attempt is made to use the correct monitor.

## Default, if no placement is defined

The default behaviour when no explicit placement preference is defined is to create the master window maximised in the main display on the desktop.

## The "placement" preference

This is a standard preference, located in the oa\_pref file, that can be defined for all the Oasys LS-DYNA Environment software or separately for individual programmes:

| Prefix | Application |
| --- | --- |
| **oasys**\*placement: | Applies to all the software |
| **primer**\*placement<br>**d3plot**\*placement<br> *etc* | Applies only to PRIMER<br>Applies only to D3PLOT<br>*etc* |

The value of the preference is a combination, effectively a logical OR, of one or more of the following:

| Horizontal placement | LEFT CENTRE RIGHT |
| --- | --- |
| Vertical placement | TOP MIDDLE BOTTOM |

These can be combined, separating them with underscore "\_" characters, for example:

**oasys\*placement: LEFT\_TOP** would locate the window in the top left monitor of a multi row and column display matrix.

## How the monitor is chosen

In order to decide which monitor to use the bounding box around the monitors on the desktop, in pixel space, is divided into a 3x3 matrix. For example the two layouts below are divided as follows.

* The black rectangles are the monitors.
* The outer red rectangle is the bounding box
* The thin red lines show the sub-division into the 3x3 matrix

![A line of three monitors](../Storage/primer-22-1/project-common-topics/placement-of-master-window/placement-of-master-window-2025-02-12.png)

![](../Storage/primer-22-1/project-common-topics/placement-of-master-window/placement-of-master-window-2025-02-12-1.png)

In each case the monitor used is the one whose centroid is closest to the centre of the designated left / centre / right and top / middle / bottom sub-area. If a vertical or horizontal placement is not given (e.g. just LEFT or just TOP) then the centre dimension of the missing axis is used.

The window will not span multiple monitors.

## If there is only a single monitor on the desktop

The relevant sub-area of the monitor will be used

* Left will occupy the left hand half;
* Right will occupy the right hand half;
* Centre will use the middle half.

### In the particular case of an X11 emulator on a Windows desktop with multiple displays

It will depend on the emulator, but typically they present a single virtual display to the Linux client which spans the whole desktop with no distinction between monitors. If the aspect ratio of this display is determined to be "ultra wide", that is wider than two 16:9 monitors, then it is presumed that three monitors are being used and the layout will be treated like the top image above.

## Monitors with different resolutions making up a desktop

It is not unusual to have displays with different resolutions making up a desktop. For example a 15" laptop running at 3840 x 2200 and 250% scaling, with a 24" monitor running at 1920x1200 and 100% scaling next to it, will actually look something like this in pixel space:

![](../Storage/primer-22-1/project-common-topics/placement-of-master-window/placement-of-master-window-2025-02-12-3.png)

It is ***pixel*** space that matters, not the physical dimensions of the display. In the example above the laptop will be running at 240 dots per inch (DPI) whereas the monitor will be running at 96 DPI, so even though the 24" monitor is physically larger it has fewer pixels than the 15" laptop. Remember that the bounding box, the red outer rectangle in the images above, is based on pixel space and not physical space.
[Previous](locking-preference-options.md)  |  [Next](emailing-crash-dumps-to-support.md)