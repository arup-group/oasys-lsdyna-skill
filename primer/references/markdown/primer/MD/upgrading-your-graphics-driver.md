###  Upgrading Your Graphics Driver

If you have problems with accelerated graphics, or not all options are available, or just if your graphics driver has not been updated for a while it is worth upgrading it to see if this fixes the problem. To do this you need to find out what graphics card and driver you have installed, then download the correct new driver for this card / operating system combination.

####  Finding out what graphics card and driver you have installed

The following instructions should enable you to determine the type of graphics card you have installed and the revision number of its driver.

#####  Windows XP

* Right click anywhere on the desktop background, and select Properties
* Select the Settings tab, then select Advanced
* Select the Adapter tab, and the Adapter type gives you your card name and manufacturer
* Select Properties within this section, followed by the Driver tab
* This will list the driver date and version.

#####  Windows Vista and 7

* Right click anywhere on the desktop background, and select Screen Resolution
* Select Advanced settings
* This takes you to the Adapter window, listing card name and manufacturer
* Select Properties within this section, followed by the Driver tab
* This will list the driver date and version

#####  Linux

* type glxinfo | grep -i string which should give the card manufacturer and name

>  
> For example on a machine with an ATI card this produces:
>  
> 
> >  
> > OpenGL vendor string: ATI Technologies Inc. 
> > OpenGL renderer string: ATI FirePro V7750 (FireGL) 
> > OpenGL version string: 3.3.10225 Compatibility Profile Context FireGL
> >  
> 
>  
> And on a machine with an NVidia card this produces:
>  
> 
> >  
> > OpenGL vendor string: NVIDIA Corporation 
> > OpenGL renderer string: Quadro FX 3800/PCI/SSE2 
> > OpenGL version string: 3.3.0 NVIDIA 256.35
> >  
> 
> 

* Knowing the make of card you can then look in file /var/log/Xorg.0.log for more details. For example in the 2nd example above  
grep -i nvidia /var/log/Xorg.0.log | grep -i driver gives:

>  
> 
> >  
> > (II) Loading /usr/lib64/xorg/modules/drivers/nvidia\_drv.so 
> > (II) NVIDIA dlloader X Driver 256.35 Wed Jun 16 18:45:02 PDT 2010 
> > (II) NVIDIA Unified Driver for all Supported NVIDIA GPUs
> >  
> 
>  
> So this 2nd machine has an NVidia Quadro FX3800 card using driver release 256.35 dated June 16th 2010
> 

####  Installing a new graphics driver

Go to the appropriate manufacturer's website, find a "driver downloads" link, and fill in the fields giving card and operating system type. This will the find the appropriate driver for you, and if this post-dates your existing one it is recommended that you download and install the new one.

#####  Windows:

>  
> Simply download and "run" the executable, following the instructions the installer gives. You will probably need to reboot the system when it has finished.
> 

#####  Linux:

>  
> You will need to be running as user "root". Download the install package, then shut down the X server by moving to single user mode (Command " init 3 " to go to runlevel 3, or " init 1 " for runlevel 1.) Unpack the install package if it is a gzip or similar file, then run it using " sh &lt; *package name* &gt; " to run the installer and follow the instructions. You will probably need to reboot the system when it is complete.
> 

When you have finished installing a new driver go back to "tuning" above to see if any of the options you had to turn off previously will now work. This may well be the case as newer versions of a driver often fix bugs or provide support for more recent versions of OpenGL that support these features.

If you previously had to set environment variable PRIMER\_NO\_VARRAY in order to make things work you need to delete this variable before trying again. (Just setting it to "false" is not enough, it must be deleted.)

[Previous](tuning-accelerated-graphics.md)  |  [Next](configuring-your-graphics-driver.md)