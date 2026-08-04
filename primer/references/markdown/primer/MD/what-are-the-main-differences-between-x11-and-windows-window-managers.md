###  What Are the Main Differences Between X11 and "Windows" Window Managers?

**X11**

* Is ubiquitous on "engineering workstations" running all variants of Unix, and also on Linux-based systems.

* Is intrinsically operating system, network and hardware transparent. Any machine running the X11 protocol can, via a network, display windows on any other machine also running X11. This capability is independent of hardware type, manufacturer and screen attributes.

* Is "open source" provided by the "X Consortium" (http://www.x.org). Anyone can download, examine and modify the source code and, more importantly, its openness almost guarantees that X-based applications will continue to operate across a range of hardware platforms in the future.

* Supports accelerated 3D graphics by "overloading" the X protocol with the extra information required. The OpenGL graphics library has become the industry standard for 3D graphics, and all modern X11 based window managers support this. Consequently 3D graphics may also be run over networks under X11.

**Microsoft Windows**

* Is provided only on machines running some version of Windows.

* Is not really designed to operate over networks. Inter-operability between machines and operating systems is nearly impossible without 3rd party software.

* Is proprietary to Microsoft.

* Also supports 3D graphics (OpenGL and others) via direct access to the graphics hardware.

[Previous](what-is-a-window-manager.md)  |  [Next](what-inter-operability-is-there-between-x11-and-microsoft-windows.md)