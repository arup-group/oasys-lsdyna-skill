####  Image Capture Options

 ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_24.png)
 
The information on the cut-section properties panel can be captured both numerically and graphically as follows:
 
#####  Export to CSV 
 
Sends the numerical information at the bottom of the panel to a Comma Separated Variable (.csv) file in a format suitable for import into a spreadsheet. This is an ASCII text file so it is also suitable for import into any external programme, and can also be read by humans.
 
Its format should be self-explanatory from this example:
 
Cut section properties for model 2 
Section origin, 0.000000e+000, 0.000000e+000, 0.000000e+000 
X axis vector, 0.000000e+000, 1.000000e+000, 0.000000e+000 
Y axis vector, 0.000000e+000, 0.000000e+000, 1.000000e+000 
Z axis vector, 1.000000e+000, 0.000000e+000, 0.000000e+000 
Cut area, 2.968603e+005 
Cut centroid Xc Yc, 2.498571e+003, 5.909979e+002 
2nd moms Ixx Iyy Ixy, 4.275801e+010, 1.890375e+011, 2.316741e+010 
2nd moms Iuu Ivv Angle, 1.926190e+011, 3.917650e+010, 8.121208e+001 
Equal area axes Xe Ye, 2.714534e+003, 6.853174e+002 
Plastic moduli Zxx Zyy, 9.119786e+007, 1.544448e+008 
1st yield Axial Mxx Myy, 5.950707e+007, 9.546364e+009, 1.685284e+010 
Equal force axes Xf Yf, 2.714956e+003, 6.841990e+002 
Eq force Axial Mxx Myy, 5.950706e+007, 1.830389e+010, 3.096836e+010
 
#####  Export to BMP 
 
Create a bitmap (.bmp) file of the panel contents. This format has been chosen since it is readable by any 3rd party graphical software, and because it does not use data compression the quality of the lines and text on the image is not degraded.
 
Note that this panel, as with any sub-window in PRIMER may also be copied to the system clipboard by using the "Copy-&gt;Clipboard" option in the drop-down menu under the [-] button in the top left corner of the window.
 
#####  Print 
 
Where supported this will send a copy of the panel to the printer.
 [Previous](options-1.md)  |  [Next](image-manipulation-options.md)