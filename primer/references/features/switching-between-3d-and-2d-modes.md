###  Switching between 3D and 2D Modes

You can switch explicitly between 2D and 3D modes using the 3D Graphics and 2D Graphics buttons.
 ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_6_1.gif) 
Some other graphics options also cause a switch.

On a 3D graphics driver the default mode is 3D, but certain graphics operations will switch the mode back to 2D. These are:

* Switching on dithered shading mode: continues until you switch it back explicitly.
* Plotting with laser output turned on. 2D mode is only transient during the course of the plotting operation, it is switched back to 3D automatically after each plot.

There are other circumstances when you might also want to switch explicitly to 2D mode:

* When producing LC line-contour plots the result in 3D mode can be a bit patchy, with contour lines dropping in and out of view. This is a function of the Z buffering in hardware, and software (2D) images look much better.
* When using the OPACITY switch for contact surface and beam plotting. This works after a fashion when in 3D mode, but the transparent structure overlay does not use proper hidden-surface removal. The results are better in 2D mode where more control is available in the software.
* When animating large models. The amount of data stored for a 2D animation can be far less than for 3D, and can get round memory shortage problems. (However you would do better to use the X-Windows driver in this situation: see 4.4.5.4.)

[Previous](brief-description-of-3d-vs-2d-graphics.md)  |  [Next](3d-opts-further-3d-options.md)