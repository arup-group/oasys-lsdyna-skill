### Pedestrian Head Impact

PEDHEAD 
model, /DEMO/PEDESTRIAN\_HEAD/biw.key 
impactor, child\_head.key

$define orientation of impactor by method=define or method=nodes
$orient, define, &lt;name/id of csys&gt;
$orient, nodes, &lt;name/id&gt;, &lt;name/id&gt;, &lt;name/id&gt;
$ N1-N2 defines local X (line of flight)
$ N1-N3 defines local Y (sideways). If XZ de-penetration is active Y should be defined correctly.

orient, nodes, base node, x node, y node  
$ 
$tag to activate de-penetration 
$ method = contact, contact name/id, dof &lt;x, xz or xyz&gt; 
$ method = partset, partset name/id, dof 
 depenetrate, contact, head to bonnet contact, XZ  
$ 
$tag for projection method used to obtain target point 
$ method = 0 (default): project along global Z 
$ method = 1: project back along line of flight 
 projection\_method, &lt;value&gt;  
$ 
$optional offset for deployable bonnet, applied along line of flight 
 offset, &lt;distance&gt;  
$ tag for root directory for output 
 rootdir, /data/DEMO/NCAP\_RUN\_2  
$ tag for root name for output files 
 rootname, childhead  
$ 
 reporter, individual.opt 
reporter\_summary, summary.opt  
$ 
$tag for master model style 
$ style = 0 (default): Standard 
$ style = 1: GM style - All \*DEFINE\_TRANSFORMATION definitions are written to a common user-defined file. Each \*DEFINE\_TRANSFORMATION definition is given a unique label which is equivalent to the directory name if valid. Each master model then refers to the appropriate \*DEFINE\_TRANSFORMATION by its label. 
$ style = 2: CASE style - A single master model is written. Each \*DEFINE\_TRANSFORMATION and the corresponding \*INCLUDE\_TRANSFORM definition is specified using a \*CASE definition 
 master\_style, &lt;value&gt;  
$ 
$tag for file to which all transforms will be written to (master\_style 1 and 2) 
 transform\_file, &lt;filename&gt;  
$ 
$tag for define transform title (master\_style 1) 
 deftrans\_string, &lt;title&gt;  
$ 
$tag for building only the first loadcase 
$ value = 0 (default): all loadcases built 
$ value = 1: build all loadcases but write only the first master model; a common file will hold \*DEFINE\_TRANSFORMATION definitions for all loadcases 
 first\_point\_only, &lt;value&gt;  
$ 
$ Create a \*BOUNDARY\_SPC definition using the specified node set 
 node\_set\_bspc, &lt;node set label &gt;  
$ 
$ loadcase lines consist of 
$ directory name, zone name(as dir if blank), X coord, Y coord, (optional Z coord) 
 C1A, C1A, 899.98401, 1393.1749, 800.0000 
C1A\_2, C1A, 889.98401, 1393.1749 
C1B, , 841.03717, 1276.2445 
C2A, , 804.94501, 1171.8967  
Etc.

The pedestrian head model, unlike the free motion headform, does not carry a specified base coordinate system. Thus the "orient" line is necessary to define

* the base coordinate (at the centre of the head)
* the X coordinate (to give the line of flight pointing in the correct direction)
* the Y coordinate (which defines the normal to the XZ plane for the impactor).

The three points may be defined by the name or id of a DEFINE\_COORDINATE\_SYSTEM or by defining three nodes.

If these are DATABASE\_HISTORY\_NODE\_ID, they may be defined by name as alternative to label, which has the advantage that they will not be affected by renumbering.

Depenetration is activated either by referencing a surface-surface contact between the head skin and the bonnet or a single part set comprising both. In the latter case, PRIMER will generate a contact between impactor and target parts.

Finally, the loadcase lines consist of a unique directory name for output key file, the zone name (which if blank, will default to same as directory name), and an X coordinate and Y coordinate. If the Z coordinate is not defined, as is usually the case, it will be calculated by projection determining the target geometry from the depenetrate information. For this reason, if depenetrate is not active, the Z coordinate must be defined explicitly.

In the root directory a submission file (.lst) will be written which may be used by the submission shell.

By default reporter variables ZONE, XCOORD, YCOORD and ZCOORD are passed into the file. These may be accessed by the individual reporter templates.

**Note** : Optional fields such as zone name may be specified by including a **space** between commas (,&lt;space&gt;,). Omitting the space might result in erroneous processing.

**Master model options** : Three options are available for the generation of master models:

* By default (or if master\_style is set to 0), PRIMER will generate a master keyword file in each output directory, which will reference the main model with \*INCLUDE and the impactor with \*INCLUDE\_TRANSFORM.
* If master\_style is set to 1, all \*DEFINE\_TRANSFORMATION definitions are written to a common user-defined file ( transform\_file ), each definition carrying a unique label equivalent to the directory name, and a title composed of a loadcase name, a user-defined string ( deftrans\_string ) and depenetration information. This master\_style mode will also add a pair of cancelling transforms to each loadcase that correspond to negative and positive aim point coordinates.
* If master\_style is set to 2, all output is written to a single user-define master model (transform\_file). The main model and the impactor are both referenced once using \*INCLUDE and \*INCLUDE\_TRANSFORM respectively. Data pertaining to individual loadcases is written using \*CASE specifiers, each carrying a unique label/id.

[Previous](interior-head-impact.md)  |  [Next](pedestrian-head-impact-with-approach-angle.md)