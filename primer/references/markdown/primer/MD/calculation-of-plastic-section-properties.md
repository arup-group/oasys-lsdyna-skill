####  Calculation of Plastic Section Properties

| The following plastic properties, commonly used by structural engineers, are calculated: | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/cut_sec_plastic_prop.PNG) |
| --- | --- |
| Equal area axes ( Xe,Ye ).<br> <br>These are the axes which give equal areas about X and Y respectively.<br> <br>For an unsymmetrical section such as the Tee shape here the equal areas axis will not lie on the centroid in the depth axis. It is located where the areas above and below it, drawn here in yellow and orange, are equal.<br> <br>The Equal area axes in the global coordinate system are also provided as ( Xe\_g,Ye\_g,Ze\_g ). | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_10.png) |
| Plastic moduli ( Zxx,Zyy ) [sometimes Sxx,Syy in North America]<br> <br>These are the sum of "area \* distance from centroid of area to equal areas axis" about X and Y respectively.<br> <br>This example shows the computation of the Zxx value ( XX is the horizontal equal area axis here) for the Tee section above.<br> <br>The plastic modulus Zxx about equal area axis XX is given by:<br> <br><br>>  <br>> Ap \* Dp + An \* Dn<br>> | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_11.png) |

#### 

Where:

>  
> Ap = Area on +ve side of XX axis (yellow) } these areas are 
>  An = Area on -ve side of XX axis (orange) } equal in value 
>  Dp = Distance from centroid of area Ap to XX  
>  Dn = Distance from centroid of area An to XX
>  

If all elements in the section have the same yield stress then multiplying the modulus by the yield stress gives a crude approximation of the fully plastic bending capacity of the section. See also the Force and Moment calculations below which may give more useful results for a typical section made up of multiple material types.[Previous](calculation-of-elastic-section-properties.md)  |  [Next](calculation-of-first-yield-capacity-of-the-section.md)