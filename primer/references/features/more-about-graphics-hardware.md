###  More about Graphics Hardware

This section is optional reading for those who want to understand more about the innards of graphics, and find out how to use their machinery more effectively.

     * [What are the "client" and "server"?](more-about-graphics-hardware.md#clientserver)
     * [What the ?"!!##? are X11 "visuals"?](more-about-graphics-hardware.md#whatarevisuals)
     * [What visuals does Oasys LS-DYNA Environment use?](more-about-graphics-hardware.md#oasysvisuals)
     * [How does OpenGL work with X11?](graphics-over-a-network.md#opengl)
     * [What are OpenGL "objects"?](more-about-graphics-hardware.md#openglobjects)

| What are the "client" and "server"?  <br>The "client"is the process making the graphics requests, for example D3PLOT, T/HIS, etc. |
| --- |

* You own this process - on Unix systems a "ps" command will show it as belonging to your user id.
* In order to display graphics it must open a display connected to a "server": either locally or over a network.

The "server"is the process running either on this machine (the local host) or remotely elsewhere on a network that receives graphics requests from client processes and turns them into graphics on a screen.

* The server is owned by the operating system of the machine - on Unix systems a "ps" command will show it belonging to user id "root".
* It serves all graphics requests that come to it, not just your client's: it is a shared resource.
* You request facilities (eg windows, colourmaps, backing store) but since it is a shared resource these may not always be available.

In most cases a machine will be running a single X server, by convention #0. However there is a special case of the "X Virtual Frame Buffer" (Xvfb) that is used for batch mode graphics which, by convention, will run as server #1 - see [section 2.5](the-x-virtual-frame-buffer-xvfb-server.md#xvfb)below.

####  What are X11 "visuals"?

The X11 protocol has to operate on a wide range of hardware ranging from old "black and white" displays to modern colour ones, and it is fact of life that the hardware on these machines varies. Some machines support a range of graphics options simultaneously: for example they can have some windows operating in "greyscale" mode alongside others in full colour; they may also provide " [overlay](the-graphics-card.md#Overlay%20Planes)" planes. Most modern machine provide a range of visual types and depths (# [bit-planes](the-graphics-card.md#Bit-planes)).

To make some sort of sense of all this the X11 protocol groups graphics capability into six categories of "visual": two greyscale and four colour.

| Visual type | What it is | Description and usage |
| --- | --- | --- |
| **StaticGray** | Preset ("static") range of greyscale shades | <ul> <li>Primitive and seldom seen today. Offers only a fixed range of grey shades. </li> <li>Colour graphics are rendered as shades of grey. </li> </ul> |
| **GrayScale** | Configurable range of greyscale shades | <ul> <li>Also seldom seen today. Grey shades can be defined by the application. </li> <li>Colour graphics are rendered as shades of grey. </li> </ul> |
| **StaticColor** | Preset ("static") range of colour shades | <ul> <li>Seen on older colour displays: colours can only be selected from the pre-defined ones set up. </li> <li>Usually 4 or 8 bit-planes deep. </li> <li>Oasys LS-DYNA Environment&#160;uses this for graphics if nothing better is available. </li> </ul> |
| **PseudoColor** | Configurable range of colour shades | <ul> <li>Found on almost all colour displays and used typically for menus and user interfaces. </li> <li>Usually 4 or 8 bit-planes deep, but rarely also 12 bit-planes (4096 cols). </li> <li>Each shade can be defined individually by the application, for example 100 shades of pink </li> <li>Is used for graphics by Oasys LS-DYNA Environment, by setting up a colour &quot;cube&quot;, if no better visual is available. </li> </ul> |
| **TrueColor** | Preset linear ramp of red, green and blue shades | <ul> <li>Found on most colour displays. Each colour (r,g,b) has a linear ramp forming a colour &quot;cube&quot; from which shades can be selected. The resolution of each axis of the cube is 2 <sup>#bits </sup>of that colour. </li> <li>Usually 8, 12 or 24 bit-planes deep, #bits being organised R|G|B as 3|3|2, 4|4|4 and 8|8|8 respectively. </li> <li>The 24 bit-plane case is &quot;true&quot; colour in that it provides more shades (16777216) than the eye can resolve. This is the preferred visual/depth combination for graphics in the Oasys LS-DYNA Environment. </li> <li>The 8 bit-plane case gives only a limited range of shades (256) limiting its usefulness for graphics </li> </ul> |
| **DirectColor** | Configurable ramps of red, green and blue shades | <ul> <li>Each colour (R,G,B) has its own configurable &quot;ramp&quot;, permitting a non-linear and dynamically changeable colour cube. </li> <li>Invariably 24 or more planes deep. </li> <li>Needed only for specialised applications. </li> <li>The Oasys LS-DYNA Environment&#160;only uses this if nothing better is available, and configures linear RGB ramps - effectively TrueColor. </li> </ul> |

####  What visuals does the Oasys LS-DYNA Environment use?

This depends upon the application, whether you are working in 2D or 3D, and what is available on the selected display.

| T/HIS 2D "XY" plotting using X11 graphics only.  <br><br>| ![](../Storage/primer-22-1/primer_links/graphics/this_front.gif) | | **For graphics**<br> <br>The " **X** " option selects the default visual of the display, which is that in which the main window manager is running. Typically only 16 colours will be requested, since T/HIS graphics are very simple, and these can be shared with other applications. The advantage of this is that screen dumps (eg "xwd") will work correctly giving the proper colours in all windows and sub-windows.<br> <br>The default visual is usually either 8 [bit-plane](the-graphics-card.md#Bit-planes) [PseudoColor](more-about-graphics-hardware.md#PseudoColor), or 24 [bit-plane](the-graphics-card.md#Bit-planes) [TrueColor](more-about-graphics-hardware.md#TrueColor). Since the demands of the application are so simple either will generally provide all that is required.<br> <br>The other options **XCnn, XVnn, XMENU...** will only very rarely be required on modern displays, contact Oasys Ltd Support for advice if the default **X** doesn't work. |<br>| --- |<br>| **For menus**<br> <br>The menu interface will also run in the default visual, unless explicitly forced elsewhere with the **SM\_USE\_VISUAL** environment variable. | |<br>| --- | --- | |
| --- |

| D3PLOT and PRIMER 3D graphics using OpenGL and X11.  <br><br>| | **For graphics**<br> <br>When "3D graphics" is used (the recommended choice) OpenGL chooses its own visual from those available on the display. There is no user control over this.<br> <br>The "2D X11 graphics" options should select:<br> <br><br>| **X8**<br> <br>If animation and dynamic rotation speed is critical, and some loss of image quality during shading can be tolerated.<br> <br>This will choose an 8 [bit-plane](the-graphics-card.md#Bit-planes)visual, usually [TrueColor](more-about-graphics-hardware.md#TrueColor)or [PseudoColor](more-about-graphics-hardware.md#PseudoColor), with only 256 colours - hence the poor shading. However since animation and dynamic viewing are performed using off-screen "pixmaps" (memory containing copies of the screen image), the smaller depth means faster transfer of data from memory to screen. |<br>| --- |<br>| **X24**<br> <br>If shaded image quality is more important than animation and dynamic rotation speed.<br> <br>This will choose a 24 [bit-plane](the-graphics-card.md#Bit-planes)visual (usually [TrueColor](more-about-graphics-hardware.md#TrueColor)) with 16777216 colours, so shading should be excellent. However the amount of data to be transferred from Pixmap to Screen is three times as much as in the 8 bit-plane case, and is correspondingly slower. Memory consumption in the X11 server is also greater. |<br>| **XMENU..** .<br> <br>Lets the user select a specific visual.<br> <br>This is seldom needed - contact Oasys Ltd Support for advice if the default choices do not give satisfactory results. | |<br>| --- |<br>| **For menus**<br> <br>The menu interface will also run in the deepest [overlay](the-graphics-card.md#Overlay%20Planes)visual that exists on the server, or in the default visual if none exists, unless explicitly forced elsewhere with the **SM\_USE\_VISUAL** environment variable. | | ![](../Storage/primer-22-1/primer_links/graphics/d3plot_front.gif) |<br>| --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/graphics/primer_front.gif) | |
| --- |

####  How does OpenGL work with X11?

Initially the client process opens a conventional X11 connection with the server, then it requests a further OpenGL connection on top of this. Broadly speaking:

* The X11 server manages the windows themselves (sizing, placement, redraw requets), and all mouse and keyboard events.
* The OpenGL connection provides a parallel path for rendering high speed graphics in the window(s).

Where the graphics are being displayed on the local machine a "direct" OpenGL rendering connection is used to give the fastest possible graphics data transfer between client process and display. This bypasses the X11 server.

Where OpenGL graphics are being rendered over a network then an "indirect" OpenGL rendering connection is used:

* The remote X server must have the OpenGL/X (GLX) extension installed. If it doesn't have this the connection will be refused.
* X11 protocol requests are "overloaded" with OpenGL rendering data and sent to the remote server.
* The GLX extension in that server turns them into local rendering requests on the remote machine.

Using OpenGL over a network generates more traffic than "raw" X11 graphics. This isn't surprising: a coordinate in X11 is an (X,Y) data pair expressed as two "short" (16 bit) integers. The same coordinate in OpenGL is an (X,Y,Z) triplet expressed as 3 "floating" (32 bit) numbers - 3 times as much data. For this reason networked OpenGL graphics is best used with "objects" stored in the server, as this requires geometry information to be sent only once. "Objects" are described below.

####  What are OpenGL "objects"?

Normally OpenGL rendering requests are sent to the display, drawn and then forgotten. If the image needs to be redrawn, for example due to rotation, then the requests must be regenerated, resent, and so on. When rendering takes place on a local display, via a "direct" rendering connection, then this method gives the best trade-off between speed and memory consumption.

However if you are displaying remotely over a network then the continual re-transfer of the same data in order to draw successive frames is slow, and a method of storing the graphics data in the server would give an obvious efficiency gain. OpenGL "objects" provide this capability:

* Graphics data requests ("move to a point", "draw a line", "change colour", etc) are stored locally in an "object".
* To display that object again the only command required is "redraw the object".
* Redrawing from a stored object tends to be faster than from explicit requests.

If it is faster why don't all OpenGL applications use objects all the time, even when rendering locally?

* Objects use a  ***lot***  of memory.

>  
> The application programmer has no control over how graphics data are stored in objects, and cannot therefore practise any storage economies that are made possible by their knowledge of how their data are organised.
>  
> It is not difficult to write a data storage scheme that is much (eg 2x or 3x) more compact than that afforded by objects. This translates into huge savings of memory which, if they stop the machine using virtual memory (swapping), more than offset any speed gains from using objects.
> 

* Objects are slow to create initially.

>  
> The first pass, in which the data is sent to populate the object, is quite slow. This is a considerable price to pay if the image is only to be displayed once, as any savings only come from the 2nd and subsequent renderings of it.
> 

Of the Oasys LS-DYNA Environment programs only D3PLOT permits the use of "objects" for data display, and it is recommended that this mode is used only when OpenGL graphics are being used on a remote server over a network. The default "vector" mode in D3PLOT, in which it manages the storage of its own graphics data "vectors", should be used on local displays.

[Previous](graphics-over-a-network.md)  |  [Next](the-x-virtual-frame-buffer-xvfb-server.md)