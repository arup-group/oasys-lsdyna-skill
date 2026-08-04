####  Create Reference Geometry

 ![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/refgeom_0.png)
 
When a belt has been meshed in whole or in part using pure shell (not seatbelt) elements using \*MAT\_FABRIC it is possible to create an \*AIRBAG\_REFERENCE\_GEOMETRY card giving the undistorted shape of these elements. This is turned on by ticking the box shown here.
 
This option can be saved through the belt\_reference\_geometry preference. If this is set to the default value of 'Automatic', then the option will be turned on automatically if an explicitly meshed slipring is detected in the model through the 'Part set' field in the "Explicit slipring" panel. Otherwise, it will be turned off.
 
Reference geometry can be important if form-finding has caused some local distortion of the belt element shape, as shown in the following example:
 
This model shows a "fully meshed" belt in which there is a continuous stretch of shell elements all the way from the retractor, through the shoulder D-ring and pelvis buckle down to the final anchorage point. The mesh has to negotiate some quite "bumpy" geometry en route, and one such area is shown enlarged here:
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/refgeom_1.png)
 
If we plot minimum element length in that region we see the following, which shows slight distortion of the elements and some variation from the nominal 3mm belt element length.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/refgeom_2.png)
 
Another region where the belt element length varies, this time by design (by setting a local element length) is at the pelvis buckle
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/refgeom_3.png)
 
These distortions are not huge, but if the belt were unrolled and laid out flat it would show slight kinks, bumps and minor variations in width. If you are going to all the trouble of meshing it using explicit shell elements, and if you use \*MAT\_FABRIC for this purpose, then you can exploit the \*AIRBAG\_REFERENCE\_GEOMETRY card in Ansys LS-DYNA to restore the mesh to its correct shape during the initial part of the analysis. This card is intended for removing the distortions introduced into an airbag mesh when the fabric is folded, and belt fitting presents exactly the same problem.
 
PRIMER allows you to view reference geometry by swapping "true" and "reference" coordinates using [Swap Nodal coords in the Display Options panel](display-options-controlling-plot-parameters.md#swap_coords). Using that capability for the belt above shows the following, from which it can be seen that the reference geometry straightens the belt and makes the mesh orthogonal.
 
![](../Storage/primer-22-1/primer_links/sect_6/seatbelt/refgeom_4.png)
 
#####  Example material and loadcurve properties for a typical fabric belt using reference geometry 
 
The following is just an example (no warranty!) for a typical belt fabric model using Te, mm, s units. Formulations |FORM| &gt;= 12 combined with loadcurve TSRFAC can be used to "bleed off" initial strains gradually.
 
```
*MAT_FABRIC_TITLE
FABRIC SHELL BELT
$:     mid        ro        ea        eb                prba      prab
        10    1.0E-9    3000.0    3000.0                 0.0       0.0
$:     gab                           cse        el       prl    lratio      damp
    1000.0                           0.0       0.0       0.0       0.0       0.2
$:    aopt       flc       fac       ela      lnrc      form     fvopt    tsrfac
       0.0       0.0       0.0       0.0       0.0     -14.0       0.0         4
$:            rgbrth     a0ref        a1        a2        a3        x0        x1
                 0.0         0       0.0       0.0       0.0       0.0       0.0
$:      v1        v2        v3        d1        d2        d3      beta
       0.0       0.0       0.0       0.0       0.0       0.0       0.0
$:     lca       lcb      lcab      lcua      lcub     lcuab        rl
         0         0         0         0         0         0       0.0
$:    lcaa      lcbb         h        dt               ecoat     scoat     tcoat
         0         0       0.0       0.0               100.0      10.0     -0.02
```
 
Loadcurve field TSRFAC in the card above determines the rate at which initial element strains are restored, a time window of 1 to 10ms seems to give reasonable results as shown in the curve below.
 
```
*DEFINE_CURVE_TITLE
TSRFAC
$:
$:   label      sidr       sfa       sfo      offa      offo    dattyp     lcint
         4         0       0.0       0.0       0.0       0.0         0         0
$:             xvals               yvals
                 0.0                 0.0
               0.001                 0.0
        0.0099999998                 1.0
                 0.1                 1.0
```
 [Previous](setting-element-properties.md)  |  [Next](actually-creating-the-finite-element-mesh.md)