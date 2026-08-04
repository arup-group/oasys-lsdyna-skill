###  Patran "Neutral" File Output

Patran "neutral" (.ntl) file data can be written for both level 2.5 and level 3 versions  .

As with universal file output elements of different types cannot share the same label, so prior to output a check is made for clashes and element labels are renumbered if required.The following data are output:

>  
> 
> | \* | **Analysis title** is translated directly as module 25 |
> | --- | --- |
> | \* | **Nodes** are translated directly as module 1 (extra nodes are generated for grounded springs). |
> | \* | **Elements** are translated as follows: <br> <br> <br><br>| **Dyna element type** | **Level 2.5 output** | **Level 3 output** |<br>| --- | --- | --- |<br>| 8 noded solids (hexa) <br>8 noded thick shells (quad)<br> <br>6 noded solids (wedge) <br>6 noded thick shells (tria)<br>4 noded solids (tetra) | &lt;iv&gt; = 8, config = 0<br> <br>&lt;iv&gt; = 7, config = 0<br> <br>&lt;iv&gt; = 5, config = 0 | &lt;iv&gt; = 8, config = 4 <br>&lt;iv&gt; = 8, config = 1<br> <br>&lt;iv&gt; = 7, config = 4 <br>&lt;iv&gt; = 7, config = 1<br> <br>&lt;iv&gt; = 5, config = 4 |<br>| 4 noded shells (quad) <br>3 noded shells (tria) | &lt;iv&gt; = 4, config = 0 <br>&lt;iv&gt; = 3, config = 0 | &lt;iv&gt; = 4, config = 3 <br>&lt;iv&gt; = 3, config = 3 |<br>| Beams | &lt;iv&gt; = 2, config = 0, 1, 2 (= elform) |<br>| Translational spring <br>Rotational spring<br> <br>Translational damper <br>Rotational damper | &lt;iv&gt; = 2, config = 10 <br>&lt;iv&gt; = 2, config = 11<br> <br>&lt;iv&gt; = 2, config = 20 <br>&lt;iv&gt; = 2, config = 21 |<br>| Seatbelt element | &lt;iv&gt; = 2, config = 30 |<br>| Retractor | &lt;iv&gt; = 2, config = 31 |<br>| Slipring | &lt;iv&gt; = 2, config = 32 |<br>| Lumped mass | &lt;iv&gt; = 2, config = 7 | |
> | \* | **Structural materials** are translated as module 3: <br> <br> <br><br>> type = 1 for deformable materials. <br>> type = 2 for rigid ones in level 2.5 format, type = 1 in level 3 format. <br>>  <br>>  <br><br> **Thermal materials** are always translated as type = 1. <br> <br>All material data fields are set to zero. "Fake" (empty) materials are also generated for those element types (eg lumped masses) that don't have materials in Dyna, but do in Patran. |
> | \* | **Part and section data** are written out as Patran "properties", packet type 4. The Dyna part id becomes the property id, and other data are generated as follows: <br><br>| **Element type** | **Common data** | **Level 2.5** | **Level 3.0** |<br>| --- | --- | --- | --- |<br>| Solids: | &lt;shape&gt; = 8 <br>&lt;nvals&gt; = 1 (material label) | config = 0 | config = 4 |<br>| Shells | &lt;shape&gt; = 4 <br>&lt;nvals&gt; = 5 (matl label, t1... t4) | config = 0 | config = 3 |<br>| Thick Shell | &lt;shape&gt; = 8 <br>&lt;nvals&gt; = 1 (material label) | config = 1 |<br>| Beams | &lt;shape = 2&gt; <br>&lt;nvals&gt; = 5 (matl label, ts1 .. tt2) | config = 0 |<br>| Discrete | &lt;shape&gt; = 2 <br>&lt;nvals&gt; = 1 (material label) | config = 20 (springs) <br>config = 21 (dampers) |<br>| Seatbelt | &lt;shape&gt; = 2 <br>&lt;nvals&gt; = 1 (material label) | config = 30 |<br><br> <br>Where materials are not defined, for example in "latent" parts, "fake" (empty) material ids are generated and specified.<br> <br>In addition a single property for each of the following element types is created, if they exist in the dyna model. Again "fake" (empty) materials are also generated for these:<br> <br><br>| Retractors | &lt;shape&gt; = 2, config = 31 |<br>| --- | --- |<br>| Sliprings | &lt;shape&gt; = 2, config = 32 |<br>| Lumped masses | &lt;shape&gt; = 2, config = 7 | |
> 
>  
> 
> 

[Previous](ideas-master-series-universal-file-format.md)  |  [Next](nastran-output.md)