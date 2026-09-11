###  What is a Window Manager?

All modern computers provide an interface with the user that is based on "windows":

* On Unix (and Linux) operating systems this will be based on the X11 graphics system;
* On Microsoft Windows operating systems this will use the native Windows.

(This terminology leads to confusion: windows with a lower case "w" refers to any window on any operating system; Windows with an upper case "W" refers to the generic Microsoft Windows operating systems [NT, 2000, 95, 98, Millenium, CE, ...]).

The functionality in both cases is quite similar: both user and software can request windows on the screen that are dedicated to a particular application. These windows can be resized at will, and their appearance modified in a range of ways.

Clearly something has to mediate the demands of the user and applications, reconcile them with the hardware that is available, manage the mouse and keyboard inputs, decide which windows lie on top of others (the "stacking order") and so on. We will refer to this as the Window Manager.

The way Window Managers work under Microsoft Windows and X11 are radically different, although the functionality presented to the user is very similar in both cases. This document will not attempt to explain their innards, only their characteristics in so far as they affect Oasys LS-DYNA Environment.

[Previous](technical-topics-to-do-with-graphics.md)  |  [Next](what-are-the-main-differences-between-x11-and-windows-window-managers.md)