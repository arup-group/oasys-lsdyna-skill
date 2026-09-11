####  Refresh: Controlling Backing Store Redraws

Graphics images in PRIMER may become quite complex, and therefore slow to redraw. On computers that do not support overlay planes in their graphics hardware (typically PCs), any window placed in front of the graphics window and then removed will leave a black hole behind, requiring the graphics window to be recomputed.

To get round the "slow redraw" problem on these machines PRIMER maintains a copy of the current graphics window in an off-screen buffer, and swaps this to the screen whenever a redraw is required: an operation that normally takes only milliseconds ... when it works. Sadly the support for off-screen graphics is not 100% reliable on all combinations of platform, operating system and graphics driver, and it is possible that the default settings will not work properly on your machine (especially, it would seem, on older laptops and under Linux). Typical symptoms when things go wrong are:

* Image does not get redrawn properly, or even at all.
* Image is redrawn, but it is unacceptably slow.
* Image is redrawn, but lighting goes wrong.

Hopefully you will not experience this, and it will simply work. But if any of the above do occur you should first of all make sure that your graphics driver is up to date. You can download new drivers from the website of the graphics card supplier, for example [http://www.nvidia.com](http://www.nvidia.com)for NVidia cards, [http://www.ati.com](http://www.ati.com)for ATI cards, and so on.

However that still may not cure the problem, in which case you will need to adjust the backing store refresh strategy using Options &gt; Refresh:

| ![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_4_4_3.png) | At the simplest level you can turn expose event refreshes OFF, using the second level menu shown here.<br> <br>However that will leave your graphics image full of "holes", requiring you to give an explicit redraw command to repaint it, which is not a satisfactory solution. Nevertheless on very old, low-powered machines it may be the only thing that works.<br> <br>Hopefully that will not be necessary, and one of the solutions below will be effective. |
| --- | --- |

A better solution is usually to adjust the backing store display method using the Backing store &gt; sub-menu

| ![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_4_4_4.gif) | Two methods of providing backing store are available:<br> <br>(1) Bitmap (Windows) or Pixmap (Linux/Unix).<br> <br>This is usually available on all machines, uses main memory, and is reasonably quick.<br> <br>(2) PBuffer (not Windows)<br> <br>This is available on newer machines, and uses memory on the graphics card itself so - if it works - it is effectively instant. |
| --- | --- |

If your machine is currently using the PBuffer method then try switching it to Bit/Pixmap to see if it improves. This seems to be particularly effective on Linux platforms, where OpenGL graphics drivers are notoriously bug-ridden.

If that doesn't work, or you are already using Pix/Bitmap mode (as in the example here), then try turning backing store OFF . This will still refresh the window, but by drawing directly to the display so there will be a visible pause and flicker while this happens. On a quick machine this may be acceptable, but on very slow machines with big models the time taken may be too long and the only solution will be to turn graphics refreshes off altogether.

#####  Saving Backing Store Redraw Settings

Once you have found a solution that works for your machine you need to save it for future reference.

The backing store method is controlled by the oa\_pref option:

| primer\*backing\_store: | off | on | pixmap | pbuffer | (The default is "on" which will choose the best method for your machine) |
| --- | --- | --- |

Graphics refreshes themselves may be turned on or off by:

| primer\*graphics\_refresh: | off | on |
| --- | --- |

*(For backwards compatibility you can also control the backing store method using the environment variables:*

>  
> *PRIMER\_NO\_PBUFFER true which will turn off PBuffer usage*
>  
> *and*
>  
> *PRIMER\_NO\_PIXMAP true which will turn off all forms of backing store.)*
> 

All these options are listed in [Appendix M](m-summary-of-oa-pref-command-line-and-environment-variable-settings.md#dialoguecommands)

|  |
| --- |

[Previous](menu-attributes-customising-menu-size-fonts-dynamic-viewing-and-handedness.md)  |  [Next](panel-behaviour-controlling-panel-placement-menu-expansion-and-action-when-picking.md)