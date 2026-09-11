# IntegrationPoints

| Detailed Description<br><br>
<br>Defining the Integration point argument in [GetData](d3plot-data-class.md#Data::GetData)() and<br>[GetMultipleData](d3plot-data-class.md#Data::GetMultipleData)() has become a complex field.<br>This section describes the different ways it can be defined and what values it can be set to. |
| --- |

### Defining the Integration point argument &lt;int\_pnt&gt; for use in GetData() and GetMultipleData()

Recent developments in Ansys LS-DYNA mean that the permutations of integration point and element type have become
quite complex if some of the more detailed output options are chosen. Therefore this section has been split
up by element type.

#### Shells and Thick shell elements:

&lt;int\_pt&gt; may be ignored for "whole element" data components such as strain energy density, thickness
and force/moment resultants; it may also be ignored for nodally derived data such as displacement, etc. For
all other data components the table below should be used.

| MAXINT on the \*DATABASE\_EXTENT\_BINARY
card: |
| --- |
| &gt;= 0 | Shell output has MAXINT (or 3 if MAXINT = 0) integration points<br>through the thickness of the element, results are averaged at the<br>centre on plan.<br>
<br>Stress tensors, plastic strains and any "extra" variables<br>are written out for each integration point.<br>Other results: force and moment resultants, thickness, energy are<br>written for the whole element.<br>
<br>&lt;int\_pnt&gt; may be:<br>
<ul>
<li>A +ve integer to obtain results at integration point &lt;int_pnt&gt;</li>
<li>One of <a href="d3plot-constant-class.md#Constant.TOP">Constant.TOP</a>, <a href="d3plot-constant-class.md#Constant.MIDDLE">Constant.MIDDLE</a> or</li>
<a href="d3plot-constant-class.md#Constant.BOTTOM">Constant.BOTTOM</a> to obtain results at
that surface
</ul>
<br>Integration point numbering starts at the bottom of the element<br>with point 1, working upwards in the +ve local Z direction. |
| &lt; 0 | Shell output is written for |MAXINT| integration points through<br>the thickness, and also for on-plan (in-plane) integration points.<br>
<br>&lt;int\_pnt&gt; needs to be an<br>object which specifies members "ip" for the through-thickness<br>integration point and "op" for the on-plan. For example<br>you might write the Javascript:<br>

```


var ip_arg = { }; // Create an empty object
ip_arg.ip = 2;    // Through-thickness integration point #2
ip_arg.op = 4;    // On plan integration point #4


```
<br><br>
<br>Which would specify though thickness integration point 2, and on-plan<br>integration point 4.<br>
<br>If the on plan point is not specified it will default to using<br>the first one.<br>
<br>The function [GetNumOnPlanIntPts](d3plot-data-class.md#Data::GetNumOnPlanIntPts)()<br>can be used to get the number of on plan points for an element. |

You need to take particular care with the quantity of through-thickness
integration points. Ansys LS-DYNA allows them to be defined as follows:

* On the \*SECTION\_SHELL card, field NIP
* On the \*PART\_COMPOSITE card
* On the \*ELEMENT\_SHELL\_COMPOSITE card

Regardless of the above Ansys LS-DYNA writes results at MAXINT (or 3 if MAXINT
is zero) through-thickness integration points for each element, so when
extracting data for a specific integration point you may need to know
something about its \*ELEMENT, \*SECTION and \*PART definition.

**If you have written a ZTF file from PRIMER** then D3PLOT will
"know about" these cards and will be able to determine the TOP,
MIDDLE and BOTTOM surface of each element.

If you have **not** written a ZTF file then it is strongly recommended
that you only use [Constant.TOP](d3plot-constant-class.md#Constant.TOP), [Constant.MIDDLE](d3plot-constant-class.md#Constant.MIDDLE) or
[Constant.BOTTOM](d3plot-constant-class.md#Constant.BOTTOM) if MAXINT = 0 or 3, since
otherwise D3PLOT cannot "know" reliably which surface is which
in a given element, and will treat all elements as having MAXINT points.
 
#### Solid elements:

If you are extracting nodally-derived results (eg displacement) then
&lt;int\_pnt&gt; can be ignored. Otherwise
use the table below:

| NINTSLD on the \*DATABASE\_EXTENT\_BINARY
card: |
| --- |
| Is zero or 1 | Solid element output is averaged at the element centre.<br>
<br>&lt;int\_pnt&gt; will be ignored and may be set to zero. |
| Is 8 | Solid element data is written at all 8 integration points.<br>
<br>&lt;int\_pnt&gt; should be the integration point number |

Although NINTSLD = 8 case writes 8 data "slots" for a solid
element integration points, degenerate types (wedges and tetrahedra) will
only populate a subset of those slots.
 
#### Beam elements:

If you are extracting nodally derived results (eg displacement), or your
beams are resultant Belytschko-Schwer type then &lt;int\_pnt&gt;
can be ignored. Otherwise use the table below:

| BEAMIP on the \*DATABASE\_EXTENT\_BINARY
card: |
| --- |
| = 0 | No extra beam data has been written<br>
<br>&lt;int\_pnt&gt; will be ignored and may be set to zero. |
| &gt; 0 | Extra data has been written for BEAMIP integration points<br>
<br>&lt;int\_pnt&gt; should be the integration point number if you are extracting an "extra" data component.<br>
<br>Otherwise it can be ignored and may be set to zero. |

"Extra" beam data is specified as follows:

* It only applies to Hughes-Liu ("integrated") beam formulations.
* It is 5 values: axial stress, 2 shear stresses, effective plastic strain, axial strain.
(However see remark 2 on \*Database Extent Binary in the Ansys LS-DYNA manual for some special cases)

Other beam data, the forces and moments and any extra "resultant"
Belytschko-Schwer plastic results, are written for the beam as a whole and ignore &lt;int\_pnt&gt;

#### Other element types:

These all ignore the &lt;int\_pnt&gt; argument which may be set to zero or omitted.