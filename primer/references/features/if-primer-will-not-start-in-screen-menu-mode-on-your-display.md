##  If PRIMER Will Not Start in "Screen-Menu" Mode on Your Display

You may be running on a device with a window manager, but still only get the command-line prompt (and probably no menu driven Shell either).

On a system running an X11 based window manager, generally Unix, this is almost certainly because of one or both of the following setup errors:

* The DISPLAY environment variable has not been set up, or has been set incorrectly. This tells the X11 window manager where to place windows, and it must be set to point to the server's screen. Its generic setup string is:

>  
> 
> >  
> > **setenv DISPLAY &lt;hostname&gt;:&lt;display number&gt;** ( C shell syntax)
> >  
> 
>  
> Where &lt;hostname&gt; is the server's name or internet address, for example:
>  
> 
> >  
> > **setenv DISPLAY :0** (Default display :0 on this machine)
> >  
> > **setenv DISPLAY tigger:0** (Default display :0 on machine "tigger")
> >  
> > **setenv DISPLAY 69.177.15.2:0** (Default display :0, address 69.177.15.2)
> >  
> 
>  
> You may have to use the raw network address if the machine name has not been added to your **/etc/hosts** file, or possibly the "yellow pages" server hosts file.
> 

* Your machine (strictly the X11 "server") has not been told to accept window manager requests from remote machines. This is usually the case when you are trying to display from a remote machine over a network, and you get the message similar to:

>  
> 
> >  
> > **Xlib: connection to "**   ***&lt;hostname&gt;***   **" refused by server**
> >  
> > **Xlib: Client is not authorised to connect to server**
> >  
> 
>  
> In this case go to a window with a Unix prompt on your machine, and type:
>  
> 
> >  
> > **xhost +**
> >  
> 
>  
> Which tells your window manager to accept requests from any remote client. It will produce a confirmatory message, which will be something like:
>  
> 
> >  
> > **access control disabled, clients can connect from any host**
> >  
> 
> 

####  If you are still having problems getting graphics to work...

A more detailed explanation of networked graphics, hardware, X11 and associated topics is given in [Technical Topics to do with Graphics](technical-topics-to-do-with-graphics.md). It contains a trouble-shooting guide, and a full description of how to use X11-based graphics. If you are still having problems after reading that please see your system manager, or contact Oasys Ltd Support for advice and help.

[Previous](selecting-a-graphics-device.md)  |  [Next](running-primer-in-text-only-mode.md)