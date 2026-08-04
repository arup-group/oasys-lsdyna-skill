##  Controlling Graphics in Oasys LS-DYNA Environment

All Oasys LS-DYNA Environment graphical programmes (PRIMER, D3PLOT and T/HIS) use the same menu interface; however the "graphics" display (of data) varies according to the specialised nature of each programme:

* D3PLOT has a sophisticated 2D (X11) and 3D (OpenGL) rendering capability, which is optimised for speed.
    * Networked graphics are supported efficiently via Pixmaps (2D X11) and Objects (3D OpenGL).
    * Graphics and other memory usage can be controlled.

* PRIMER also has 2D (X11) and 3D (OpenGL) rendering capability, but optimised to display a wide range of entity types - speed being less of an issue.
    * Performance over a network is adequate, but no special provision is made for this.
    * No user control over graphics memory is provided.

* T/HIS has only 2D (X11) rendering capability, as this is all that is required for XY graph plots.

All the Oasys LS-DYNA Environment software requires an X11 based window manager or emulator to be running (even when OpenGL is used for rendering). The following topics related to this are described below:

* [Defining the DISPLAY environment variable, which determines where graphics are drawn.](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#displaysyntax)
* [Configuring the parameters of the Oasys LS-DYNA Environment "menu interface".](the-oasys-ltd-menu-interface.md#oasysmenu)

[Previous](the-x-virtual-frame-buffer-xvfb-server.md)  |  [Next](opening-an-x11-connection-to-a-display-the-display-environment-variable.md)