###  Capturing the Contents of "Menu" Windows

The IMAGES command only captures the contents of the graphics window. To copy any other window on the menu interface to a bitmap file use the SAVE-&gt;BITMAP option in the popup menu belonging to the [-] button at its top left corner. (See [Popup Menus for Window Management](popup-menus-for-window-management.md#popup)).

This distinction is required because the "menu" windows are typically running in X11 window manager overlay planes, whereas the graphics window may be X11 or OpenGL, and is generally located in the screen's image planes. Trying to capture an image which is a composite of different windows, bit-plane depths, physical location in the hardware and graphics type is possible but difficult!

[Previous](info-further-online-help-about-formats.md)  |  [Next](capturing-the-contents-of-all-the-primer-windows.md)