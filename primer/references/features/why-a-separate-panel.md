####  Why a Separate Panel?

Generally an analyst wants a simple J value for their section, but unfortunately life is not that simple. Unlike the more common section properties such as Area and 2nd moment of inertia the torsion constant depends upon both section shape and - crucially - connectivity. Consider the following examples of open and closed tube sections: ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_33.png)
 
Despite having very similar shapes and almost the same amount of material the J value of the closed (red) section is many times greater than that of the open (green) section, and the calculation process must reflect this. A calculation based on shape alone will not do, it must also consider connectivity.

 [Previous](calculation-of-fully-plastic-capacity-of-the-section.md)  |  [Next](why-split-the-calculation-up-by-element-types.md)