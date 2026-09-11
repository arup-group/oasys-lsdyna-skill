###  Opening an X11 Connection to a Display: the DISPLAY Environment Variable

     * [**The syntax of the**  **DISPLAY**  **variable**](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#displaysyntax)
     * [**The simple case: displaying on this machine**](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#simpledisplay) **&lt;=**  **Probably all you need to know**
     * [**Examples of networked graphics setup**](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#networkdisplay)
     * [**Configuring under Unix/Linux**](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#displayunix)
     * [**Configuring under Microsoft Windows.**](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#windisplay)
     * [**Troubleshooting X11 graphics**](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#troubleshooting)

####  The syntax of the DISPLAY environment variable

The X11 protocol requires that an "address" and "screen" number are nominated for its graphical output. This done with the **DISPLAY** environment variable, which has the form

>  
> 
> | **(&lt;**   ***address***   **&gt;):&lt;**   ***server***   **&gt;(.&lt;**   ***screen***   **&gt;)** | Entries in  ***(..)***  can be omitted. |
> | --- | --- |
> 
> 

* The  ***&lt;address&gt;***  is a computer name or, more precisely, a network address. If omitted it means the local machine.
* The  ***&lt;server&gt;***  is the X11 "server" process. This is typically server #0, but it is possible to have more than one server running.
* The  ***&lt;screen&gt;***  is the screen number, starting at 0, on that computer (some machines have &gt; 1 screen). It can be omitted if the display has only one screen.

####  The simple case: displaying on the screen attached to this computer

In the vast majority of cases all you will want to do is to display graphics on the screen attached to this computer. Therefore you need default "address", "server" #0, default "screen", which is achieved by setting:

>  
> **DISPLAY** = " **:0** "
> 

Sone examples of achieving this under different operating systems:

>  
> 
> | [Unix/Linux](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#displayunix) | C shell (/bin/csh, /bin/tcsh) | **setenv DISPLAY :0** |
> | --- | --- | --- |
> | Bourne/Korn shell (/bin/sh, /bin/ksh) | **DISPLAY=:0; export DISPLAY** |
> | [Windows](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#windisplay) | In the System Properties panel | Variable = **DISPLAY**  <br>Value = **:0** |
> 
> 

If you are not interested in networked graphics then this is all you need to know about establishing a connection, and you can ignore the rest of this section.

The following examples show how **DISPLAY** could be setto display graphics in a range of local and networked locations:

| DISPLAY | Where the graphics will appear | Comments |
| --- | --- | --- |
| **tigger:0** | Server #0 (screen 0) on machine "tigger" | The IP (  ***I***  nternet  ***P***  rotocol network) address of "tigger" must be known to your system |
| **170.177.15.2:0** | Server #0 (screen 0) on the machine with the IP address 170.177.15.2 | Since the IP address is given explicitly the remote machine name need not be known. |
| **:0.1** | Screen #1 on server #0 on this machine | For a system with 2 screens, this will display on the second. |
| **rainbow:0.1** | Screen #1 on server #0 on machine "rainbow" | The IP address of machine "rainbow" must be known, and it is assumed to have at least two screens. |

The way the **DISPLAY** variable is set, and remote machine names are mapped to IP addresses, depends upon the operating system in use.

#####  Defining DISPLAY on Unix and Linux systems

The **DISPLAY** enviroment variable ( **$DISPLAY** ) is set by:

| C shell (/bin/csh /bin/tcsh) | * **setenv DISPLAY rainbow:0**<br> * **setenv DISPLAY 170.177.15.2:1** | * Server #0 (screen 0 on machine "rainbow"<br> * Server #1 (screen 0) on machine 170.177.15.2 |
| --- | --- | --- |
| Bourne/Korn Shell (/bin/sh /bin/ksh) | * **DISPLAY=rainbow:0; export DISPLAY**<br> * **DISPLAY=170.177.15.2:1; export DISPLAY** | Ditto |

To save the **DISPLAY** variable a given user could place it in their startup files: "~/.cshrc" (for C shell) or "~/.login".

Machine name(hostname) to IP address resolution is defined in the file **/etc/hosts** . (This is owned by root, and requires superuser privileges if it is to be updated.)

This has any number of rows of the form:

| **&lt;ip address&gt;** | **&lt;name&gt;** | **(&lt;name&gt;)** | **(&lt;name&gt;) ...** | IP addresses must have at least one "name", but may have any number of alternative aliases |
| --- | --- | --- | --- | --- |

For example:

| **170.177.15.2** | **atuhp002** | **atghp002** | **fred** | (This machine is known by any of three names) |
| --- | --- | --- | --- | --- |
| **193.20.116.16** | **abcsgi16** |  |  |  |
| **193.20.116.20** | **abcsgi20** |  |  |  |

#####  Defining DISPLAY on Windows systems

The **DISPLAY** enviroment variable ( **$DISPLAY** ) is set in the **System Properties** panel.

The example below is from a Windows NT 4 system, but other variants of Windows will be similar.

| This is accessed by:<br> <br><br>| ![](../Storage/primer-22-1/primer_links/graphics/c_panel.gif) | =&gt; | ![](../Storage/primer-22-1/primer_links/graphics/system.gif) | =&gt; | ![](../Storage/primer-22-1/primer_links/graphics/environ.gif) |<br>| --- | --- | --- | --- | --- | |
| --- |

In the **System Properties** panel select the **Environment** tab, as shown here.

Click on the **User Variables for &lt;userid&gt;** (here **Administrator** ) and insert:

|  | Variable: | **DISPLAY** |  |  |
| --- | --- | --- | --- | --- |
|  | Value: | ***170.177.1.92:0*** |  | Insert your own IP address or name |

The click on **Set** to add it to your environment variable list.

Machine name(hostname) to IP address resolution is provided by a "Hosts" file (on Windows NT in C:\WINNT\SYSTEM32\drivers\etc) that has the same format as the Unix version above, ie:

| **&lt;ip address&gt;** | **&lt;name&gt;** | **(&lt;name&gt;)** | **(&lt;name&gt;) ...** |
| --- | --- | --- | --- |

This may be updated using a text editor (eg WordPad).

| Or on the [Hummingbird Exceed ^TM^ ^^emulator](http://www.hummingbird.com/products/nc/exceed/index.html), which Oasys Ltd recommends, it may be maintained via a **Host Editor:**<br> <br><br>| ![](../Storage/primer-22-1/primer_links/graphics/exceed_1.gif) | =&gt; | ![](../Storage/primer-22-1/primer_links/graphics/exceed_2.gif) | =&gt; | ![](../Storage/primer-22-1/primer_links/graphics/exceed_3.gif) | =&gt; |<br>| --- | --- | --- | --- | --- | --- |<br><br> <br><br> ![](../Storage/primer-22-1/primer_links/graphics/exceed_4.gif) |
| --- |

The **+** and **-** buttons are used to add/remove entries in this panel

####  Troubleshooting X11 graphics

| Problem | Possible resolution |
| --- | --- |
| When you try to start an application you get the message: <br> <br> **Could not open display** | This means that the **DISPLAY** variable has not been defined. See above for how to define it on [Unix/Linux systems](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#displayunix)and [Windows systems](opening-an-x11-connection-to-a-display-the-display-environment-variable.md#windisplay). |
| When you try to start an application you get the message: <br> <br> **Could not open display**   ***&lt;name&gt;:&lt;server&gt;.&lt;screen&gt;*** | This means that your machine (the client) cannot "see" the server machine, or the X11 server on that machine. <br><ol> <li>Is machine <em>&lt;name&gt; </em>correct? Check its spelling, and remember that it is case-sensitive. </li> <li>Is <em>&lt;name&gt; </em>in your <a href="opening-an-x11-connection-to-a-display-the-display-environment-variable.md#unixhosts">/etc/hosts file (unix) </a>or <a href="opening-an-x11-connection-to-a-display-the-display-environment-variable.md#winhosts">Hosts file (windows) </a>? </li> <li>Is the IP address in there for <em>&lt;name&gt; </em>correct? </li> <li>Is the network path to <em>&lt;name&gt; </em>working correctly? (Try &quot;ping&quot;ing it.) </li> <li>Is machine <em>&lt;name&gt; </em>turned on and plugged into the network? </li> <li>Is the X11 window manager running on machine <em>&lt;name&gt; </em>? </li> <li>Does <em>&lt;server&gt;.&lt;screen&gt; </em>exist on machine <em>&lt;name&gt; </em>? </li> </ol> |
| When you try to start an application you get the message: <br> <br> * **Xlib: connection to**   ***&lt;name&gt;:&lt;server&gt;.&lt;screen&gt;***   **refused by server**<br> * **Xlib: Client is not authorised to connect to Server** | This means that your client process has made contact with the server's X11 window manager, but has been refused permission to open a window on it. This is a security feature of the X11 system: server window managers must grant permission for clients to open windows, which may be done as follows: <br> <br> <br><br>| On a transient basis, not "remembed" once you log out | Type " **xhost +** " in any window on the server. This will grant permission for any remote client to open windows on this display. <br> <br>To be more selective about which remote clients you will allow to open windows on a display type " **xhost +**   ***name***  " where &lt; *name* &gt; is a remote computer name. |<br>| --- | --- |<br>| On a permanent basis, "remembered" across logout/login. | In the file **/etc/X0.hosts** add a list of computer names (each on a new line) that are permitted to open windows on this display. (This is for server #0, for server #1 put it into file **/etc/X1.hosts,** etc.) <br> <br>To allow access to any host put a **"+"** into this file. |<br><br> <br> <br>For more information (on a Unix/Linux host) type " **man xhost** " which describes X11 access control. |
| The application appears to start, but then fails with a message along the lines of: <br> **X connection**   ****  **to**   ****   ***&lt;name&gt;:&lt;server&gt;.&lt;screen&gt;***   **broken (explicit kill or server shutdown)** | This usually means that you have forgotten to reset your **DISPLAY** variable, and have popped up a window on someone else's screen. They, understandably, have got annoyed and killed the window (an "explicit kill"). Check that you are displaying graphics where you intended! <br> <br>If this isn't the problem it may indicate that the server to which you are trying to connect is in distress and can't cope with the extra workload - see below. |
| The X11 server gets very slow, or locks up completely. <br> <br>Normally there are no error messages, but a heavily overloaded server may produce "synchronisation" errors or other symptoms of its impending demise. | This can happen occasionally when the window manager on a server fails to cope with the load placed on it, typically during animation, and dies (a "server shutdown"). <br> <br>Server shutdowns may also occur if they run out of memory: usually caused by performing large "pixmap" or "object mode" animations in D3PLOT which cause the server to grab lots of memory. (Under Unix/Linux memory cannot easily be returned to the system's free pool once it has been allocated so, like middle-aged spread, memory consumption of a process will tend to grow but never diminish. This is not such a problem under Windows.) <br> <br>An X server in distress may be shut down and restarted by the following methods: <br> * Log out from the console, then select "command line", or "no windows", or some similar option (this will depend on the vendor and operating system) for a new login. Log in, then straight out again, and resume the normal "windows" login. This will shutdown then restart the X11 server, which usually sorts out problems.<br> * If the display has locked up (no response to mouse or keyboard) then log in from a remote machine as "root", and kill the window manager process explicitly. (" **ps -ealf | grep X** " will usually find the process, and " **kill -9 &lt;process id&gt;** " will zap it.).<br> * If you can't log in remotely, or don't have root access, reboot or turn the machine off and on again! Cruel but effective. |
| OpenGL Extension missing on remote server. <br> <br> **Xlib: extension "GLX" missing on "&lt;**   ***name***   **&gt;:&lt;**   ***server***   **&gt;.&lt;**   ***screen***   **&gt;** | You may see this if you try to open a remote OpenGL window on a local server that does not have the OpenGL/X extension "GLX" installed. You will not be able to open remote OpenGL clients until it has been installed. <br> <br>Note that you may still see this message on a machine that is able to display OpenGL graphics locally. This means that it can handle a "direct" OpenGL connection from a local client (which largely bypasses the X server), but that it does not have the ability to render "indirect" OpenGL requests. See " [How does OpenGL work with X11?](graphics-over-a-network.md#opengl)" for more information. <br> <br>But in the meantime you will have to use a **X..** option to display remote graphics. |
| Other errors, typically: <br> <br> * **X Error of failed request:**<br>     * **Major opcode ...**<br>     * **Minor opcode ...**<br>     * **Resource id ...** | These usually suggest an error in Oasys LS-DYNA Environment. Please make a copy of the error message and contact Oasys Ltd Support for help and advice. |

[Previous](controlling-graphics-in-oasys-ltd-ls-dyna-environment.md)  |  [Next](the-oasys-ltd-menu-interface.md)