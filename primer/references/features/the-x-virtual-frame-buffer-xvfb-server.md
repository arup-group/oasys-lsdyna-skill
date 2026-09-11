###  The "X Virtual Frame Buffer" (Xvfb) Server

So far it has always been assumed that graphics requests, however generated, will end up as images on a screen somewhere. However this is not always what is required: in the special case of batch mode running we wish to generate images for capture as bitmaps, but we don't want to have to display them in order to do this. Most conventional X11 servers will only permit access to clients when someone is logged in at their screen and has permitted remote access, which is not much use for batch jobs.

This is where the X Virtual Frame Buffer (Xvfb) server is used.

* It is an X11 server process just like any other.
* It can co-exist with an ordinary X11 server on a machine (it is distinguished by its #server id).
* It accepts and processes X requests from clients just like an ordinary server.
* But it generates images internally in memory, not on a physical display.
* It can act autonomously, not requiring a user to be logged on at a display.
* In fact it can run on a machine that has no display or graphics hardware.

Where facilities for batch graphical processing have been provided by Oasys Ltd the Xvfb server will also be provided, and will have to be running somewhere on an accessible machine (or locally). By default it will be started with the properties:

* Server id #1 (hence the **DISPLAY** variable will be **&lt;**   ***machine name***   **&gt;:1** )
* 1280x1024x8 (width x height x bit-planes depth) resolution

However these properties may be modified if required. For more information please contact Oasys Ltd Support.

[Previous](more-about-graphics-hardware.md)  |  [Next](controlling-graphics-in-oasys-ltd-ls-dyna-environment.md)