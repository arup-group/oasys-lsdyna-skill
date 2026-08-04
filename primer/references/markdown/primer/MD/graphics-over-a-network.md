###  Graphics over a Network

In most cases you will be drawing graphics on the display of the machine you are using, and this will almost always be the fastest method since the processor and graphics card can communicate directly at high speed and, if necessary, share memory.

This need not be the case under X11, where networked graphics may also be used:

| **The Main Processor**<br> <br>(CPU, etc) | *Sends graphics requests ....* | Over a network <br>![](../Storage/primer-22-1/primer_links/graphics/win_ma1.jpg) | *... to a second computer* | **The Graphics Card**<br> <br>Which has its own memory and, in the case of better cards, considerable "intelligence" for 3D graphics (lighting, shading, hidden surface removal, etc) |
| --- | --- | --- | --- | --- |

| The network<br> <ul> <li> <p align="left">Is almost always some form of ethernet running TCP/IP ( <em> <strong>T </strong> </em>erminal <em> <strong>C </strong> </em>ontrol <em> <strong>P </strong> </em>rotocol / <em> <strong>I </strong> </em>nternet <em> <strong>P </strong> </em>rotocol) </p> </li> <li> <p align="left">But other mechanisms, for example &quot;DecNet&quot;, are possible. </p> </li> <li> <p align="left">May be of any speed, but obviously the faster the better. Recent machines will have 100 MBit/second (&quot;100 Base T&quot;) network ports. </p> </li> </ul> |
| --- |

Under X11 networked graphicsare used in"client/server" mode by:

* Opening a connection to a remote machine, by setting the DISPLAY environment variable to a "server:screen" on that machine.
* The " [client](more-about-graphics-hardware.md#client)" (application) software sends its graphics requests down the network to that machine.
* The " [server](more-about-graphics-hardware.md#server)" software on that machine, generally part of the window manager, translates these into graphics on the remote machine.

The 3D OpenGL protocoloperates over a network under X11 in exactly the same manner:

* A remote connection is opened as before.
* The client application sends graphics requests, this time 3D ones, to the remote machine.
* The server software on that machine (which must include the GLX extension) turns these into 3D graphics requests on that machine.

####  Special aspects of networked graphics:

>  
> If every image redraw, rotation operation or animation frame requires all the graphics information to be sent down the network between client and server machines, networked graphics can become quite slow - especially if the network is low speed. Both "raw" X11 and OpenGL protocols recognise this, and provide a means of storing graphics information in the remote server to speed up redraws.
>  
> 2D X11 images:
> 
> * Can be stored in off-screen "pixmaps", which are effectively copies of the screen in memory. They can be mapped to the screen sufficiently quickly to provide good animations.
> * These are suitable for image redraws; and for pre-computed animation frames, where an unchanging sequence of images is played repeatedly.
> * They do not help for rotation, scaling or translation since a 2D image must be rebuilt from scratch to show the new appearance.
> 
>  
> 3D OpenGL graphics imformation:
> 
> * Can be stored in "objects" in the server. An "object" contains all the 3D information required to describe a graphical scene.
> * Objects can be used for image redraws and for animations, by sending them to the graphics card for re-rendering.
> * They can also be used for rotation, scaling and translation since enough 3D information is present to rebuild the image in its new form: only the new rotation and scale information (perhaps a dozen numbers) need be sent down the network to transform a scene of any complexity.
> 
>  
> Both mechanisms provide a means, in 2D and 3D respectively, of maximising graphics display speed in some circumstances. If the client machine is doing the "thinking", and the server machine the "drawing", both can operate at full speed at their respective tasks. This can be an efficient means of displaying data from very large databases, since it splits the data retrieval task from the rendering one, although in most cases display on the local machine will be the fastest.
>  
> 
> 

[Previous](the-graphics-card.md)  |  [Next](more-about-graphics-hardware.md)