####  Calculation of Fully Plastic Capacity of the Section

![](../Storage/primer-22-1/primer_links/sect_6/cutsect/cut_fully_plastic_prop.PNG)These values calculate the axial force and bending moment capacity of the section assuming that all materials are at their yield stress y.

| This is very similar to the calculation of plastic moduli, except that the actual yield stresses of all materials in the section are used, making it possible to estimate the plastic capacity of a section comprising multiple different material types.<br> <br>Instead of calculating "equal area" axes PRIMER now calculates "equal force" axes in which the force (the sum of area \* yield stress for all cut elements) is equal on both sides of the axis. The "equal force" axes in the global coordinate system are also provided as ( Xf\_g,Yf\_g,Zf\_g ).<br> <br>All materials are assumed to behave in an "elastic / perfectly plastic" stress strain curve, symmetrical in tension and compression. Since plane sections must remain plane it is necessary that each material be able to maintain a constant yield stress over a wide range of strain values, hence the requirement for no strain hardening.<br> <br>The illustrations of the plastic capacity below use the same section as used in the "First yield" examples above, but note that the images now show the distribution of  ***stress***  through the section depth (rather than strain above). | ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_18.png) |
| --- | --- |

| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_19.png)Fully Plastic axial capacity <br>Each material is at yield, so the axial force capacity of the section is then simply the sum of yield stress \* area:<br> <br>axial force = (area of M1 \* 250)<br> + (area of M2 \* 100) |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_20.png)Fully plastic Mxx bending capacity <br>Again each material is at +/- yield stress, so the total bending capacity is given by the sum of (area \* yield stress \* distance from centroid to XX axis) for all cut sections. So in this example<br> <br>Mxx = (Area M1 \* 250 \* d1)<br> + (Area M2 \* 100 \* d2) |
| ![](../Storage/primer-22-1/primer_links/sect_6/cutsect/fig_6_11_21.png)Fully plastic Myy bending capacity <br>Essentially the same calculation as Mxx. Each material is at +/- yield stress, so<br> <br>Myy = (Area M1 \* 250 \* d1)<br> + (Area M2 \* 100 \* d2) |

##### Warnings about the "Fully Plastic" capacity calculation
 
1. These calculations require the yield stress σ of every material in the cross section. These values are obtained from the material (\*MAT) cards but for some materials, for example crushable or brittle ones, a yield stress may not be well defined. In this situation PRIMER has various options for determining a yield stress, see the [Options](options-1.md) panel below.
2. Fully plastic calculations like this are inherently unrealistic since the vast majority of real materials do not exhibit "elastic / perfectly plastic" behaviour. Moreover Ansys LS-DYNA material models tend to define quite complex post-yield stress/strain characteristics, all of which are ignored here, so these values should not be considered to be anything more than a crude estimate of plastic capacity.
3. In the case of bending (Mxx and Myy) these calculations assume symmetrical yield behaviour, with the same yield stress in tension and compression. This may be reasonable for ductile materials (eg steel) but can be hopelessly wrong for brittle ones (eg concrete).
4. It is assumed that each cut element is homogeneous with a single yield stress. This will not be the case for composites, made up of layers of different materials; nor may it be a valid assumption for orthotropic materials.

**Please consider the sections being cut through when you use this feature, and satisfy yourself that the calculation is valid for your model.**

[Previous](calculating-torsion-properties.md)  |  [Next](why-a-separate-panel.md)