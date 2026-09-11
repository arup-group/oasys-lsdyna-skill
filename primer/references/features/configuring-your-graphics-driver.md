###  Configuring Your Graphics Driver

Graphics "as supplied" from vendors are configured to work best for generic 3D applications, and some configuration is required to get the best settings for Oasys Ltd software.

####  Configuring NVidia cards on Windows - versions from release 12.1 onwards

From release 12.1 onwards all Oasys Ltd software can detect automatically the presence of an NVidia graphics card, and configure the graphics driver settings automatically. You should not need to take any action, and it is no longer necessary to configure the graphics installation on the machine. In fact the best performance is likely to be achieved if you leave the driver set at its base "default 3d app" profile.

#####  In more detail...

(You don't need to understand this. This section is provided for interest and to explain the above more fully.)

NVidia provide two main ranges of graphics cards:

| **Quadro** | Optimised for OpenGL and typical CAE / Engineering applications |
| --- | --- |
| **GeForce** | Optimised for DirectX, and typical games |

Both cards will handle both OpenGL and DirectX, and both can be used for CAE as well as games, but Oasys Ltd recommend that the Quadro range be used for engineering software since it has been developed for that purpose and will give more reliable performance in several respects. We have occasionally encountered problems with the GeForce range in the past.

In order to get the optimum performance from software NVidia test applications and tune their drivers, creating a "profile" for each piece of software that contain application-specific settings. These profiles, and there are over 4000 of them as of April 2015, come pre-configured in all NVidia Windows graphics drivers, and where an executable name (for example minecraft.exe ) never changes then the driver can detect for itself which executable is being run, and use the correct profile automatically.

However where software names change over time, such as the progression of primer **12** \_x64.exe , primer 22 \_x64.exe , and so on NVidia cannot reasonably be expected to keep updating their drivers to know about the new names, and instead the onus is on the application itself to interrogate and configure the graphics driver.

This can be done via the NVAPI toolkit, and from release 12.1 onwards the software is able to do this. It looks for the Oasys LS-DYNA Environment profile in the graphics driver and "tells" the driver to use that profile instead of the default one.

This process has been tested on a range of cards and versions of the Windows operating system, and so far no problems have been found. However if problems \*do\* occur then the following environment variables can be used to modify this process:

| **Variable name** | **Possible values** | **Meaning** |
| --- | --- | --- |
| OASYS\_NV\_ACTION | 0 or unset (default) | Update driver if required to apply Oasys LS-DYNA Environment profile to this application |
| 1 | List to &lt;stdout&gt; all Oasys Ltd settings in the graphics driver on this machine |
| 2 | Refresh the Oasys Ltd settings on this machine: clear all existing ones and reinstall them |
| 3 | Delete all Oasys Ltd settings on this ,achine |
| OASYS\_NV\_VERBOSE | 1 | By default this is not set, but if it is set then any changes made to the driver are listed to &lt;stdout&gt; |
| OASYS\_NV\_NOT\_D3PLOT | 1 | By default this is not set, but if it is set then D3PLOT tuning will not be performed in the driver |
| OASYS\_NV\_NOT\_PRIMER | 1 | By default this is not set, but if it is set then PRIMER tuning will not be performed in the driver |
| OASYS\_NV\_NOT\_THIS | 1 | By default this is not set, but if it is set then THIS tuning will not be performed in the driver |

All the above should "just work", but if it doesn't please contact Oasys Ltd Support for help.
 
#### Configuring NVidia cards on Windows - versions prior to release 12.1
 
##### Recent installations:
 
* Right click anywhere on desktop background, and select NVIDIA Control Panel:

Select Manage 3D settings from the tree on the left hand side. The example below is from a Quadro FX card on a Windows 7 machine, but others should be very similar.

![](../Storage/primer-22-1/primer_links/sect_9/images/tune_10.png)

* You must then decide whether you want to configure the graphics driver for all applications on your machine or just for a limited range of executables. 
 
Our recommendation is to configure for all applications, using Global settings as shown above. The configuration used should work well for any CAE package - and certainly better than NVidia's default " 3D App -Default Global Settings ", since these are tuned for benchmark tests and not real life applications. 
 
If you want to apply settings only to PRIMER you will need to swap to the Program Settings tab, add PRIMER to the list, and then proceed as below.
* If your driver is recent (early 2011 onwards) you will find an Oasys Ltd. LS-DYNA environment setting as shown above, and you should select that. If your driver is older we would recommend using Dassault Systemes CATIA - compatible . 
 
Either of these settings turns off attempts in the driver to cache coordinate data, and will result in smooth animation. Using the default settings may lead to jerky animation, or long pauses.

#####  Older installations

* Right click anywhere on the desktop background, and select Properties
* Select the Settings tab, then select Advanced
* Select the tab showing your driver name. 
 
In this example on an old Windows XP machine it is Quadro4 980 XGL

![](../Storage/primer-22-1/primer_links/sect_9/images/tune_11.png)

* Select Performance & Quality Settings from the left hand menu
* Select Catia for the Active profile

####  Configuring NVidia cards on Linux

No configuration is necessary.

####  Configuring ATI cards on Windows and Linux

ATI do not provide an application-specific user interface, instead they have an XML configuration file atiogl.xml which lives in the following locations:

| Windows platforms | C:\Windows |
| --- | --- |
| Linux platforms | /etc/ati |

This may need to be edited to add driver configuration for PRIMER as follows if it is not already present in the file. More recent (early 2011 onwards) driver releases should already have this entry, so look for it first and only edit the file if it is missing:

>  
> ----------- Start of file -------------- 
> &lt;PROFILES&gt; 
> &lt;!-- =========================== --&gt; 
> &lt;!-- Workstation Applications --&gt; 
> &lt;!-- =========================== --&gt;    *... any number of entries*      
>   &lt;!-- Oasys Ltd --&gt; 
> &lt;profile exename="primer 22 .exe"&gt; 
> &lt;OpenGLCaps&gt;0x00008000&lt;/OpenGLCaps&gt; 
> &lt;/profile&gt;
>  
> &lt;profile exename="primer 22 \_64.exe"&gt; 
> &lt;OpenGLCaps&gt;0x00008000&lt;/OpenGLCaps&gt; 
> &lt;/profile&gt;
>  
> &lt;profile exename="primer 22 \_x64.exe"&gt; 
> &lt;OpenGLCaps&gt;0x00008000&lt;/OpenGLCaps&gt; 
> &lt;/profile&gt;   
>    
>    
>   *... any number of further entries*  
>  
>  --------------- End of file -------------
> 

[Previous](upgrading-your-graphics-driver.md)  |  [Next](support-for-3d-mouse.md)