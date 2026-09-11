###  Capturing the Contents of All the PRIMER Windows

If you want to grab an image of the whole PRIMER window contents: graphics, menus, the lot, then:

**On Windows platforms:**

* Use &lt;Alt&gt;&lt;Print Screen&gt; with the mouse inside the PRIMER window
* This will place the image in the Windows "paste" buffer.
* It can then be pasted into other applications.

**On Unix platforms:**

* Use "xwd -out &lt;filename&gt;" and click inside the PRIMER window.
* This will create and "xwd" format file which can be used elsewhere.
* Some Unix platforms may have other, non-standard screen grabbing software.

If some windows appear to have the wrong colours this will be because the X "visuals" in the various windows are different, which is invariably the case when OpenGL graphics are used, and this has confused the screen-grabbing programme. To fix this:

* Set the SM\_USE\_VISUAL environment variable to "default" (eg setenv SM\_USE\_VISUAL default )
* Select device XMENU... when starting PRIMER, (see [Selecting a Graphics Device](selecting-a-graphics-device.md#selectdevice)), and choose the visual marked "default"

These two actions will force both menus and graphics to be drawn in the default visual of the window manager, which will maximise your chance of getting a sensible screen grab. However the graphics window will be using X11 (2D) rather than OpenGL (3D) graphics, and the resulting image may be inferior.

[Previous](capturing-the-contents-of-menu-windows.md)  |  [Next](print-windows-only.md)