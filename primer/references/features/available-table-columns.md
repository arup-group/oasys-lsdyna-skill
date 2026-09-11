####  Available Table Columns

The following columns are available for display in the connections table under View... (seperated into the sub-headings described above).

#####  General

| **Column** | **Explanation** |
| --- | --- |
| Model | Model label |
| ID | Connection ID |
| Type | Type of connection (spotweld, rigid etc.) |
| Subtype | Subtype of the connection (beam, solid etc.) |
| Status | Status of connection (realized, invalid, bad etc.) |
| Error | Error code for that connection |
| Details | More details on error |
| Adh. width | Width of adhesive run |
| Adhe. number | Number of elements across adhesive width |
| Adhe. el. len. | Length of adhesive element along adhesive run |
| Adhe/Weld Path | Number of path points between start and end of adhesive/spotweld lines (can also modify path through this column) |
| Adhe. Patch Info | Provides number of source "shells" for an adhesive path, plus a method for modifying the source "shells" |
| Assembly type | Instead of defining individual layers, an assembly of parts can be specified for each connection. The type can be PART\_SET or PRIMER assembly |
| Assembly | Instead of defining individual layers, an assembly of parts (part set or assembly depending on type above) can be specified for each connection. |
| Bolt length | Max length for 1 pt bolt, max thickness at end 1 for 2pt bolt |
| Bolt length 2 | Max thickness at end 2 for 2 pt bolt |
| Bolt Ang tol | Angle tolerance for shell normals for 1pt bolt or at end 1 for 2pt bolt |
| Bolt Ang tol2 | Angle tolerance for shell normals at end 2 for 2pt bolt |
| Bolt Shape | Shape control (edge of hole, 1 ring,etc) for 1 pt bolt or at end 1 for 2 pt bolt |
| Bolt Shape2 | Shape control for end 2 for 2 pt bolt |
| Bolt mass | Mass of bolt connection type |
| Bolt stb factor | Ratio of the required mass of the rigid bolt for stability to the total mass of the rigid bolt |
| Bolt Iner flag | Part inertia flag for bolt |
| Bolt Resize | Flag to resize library bolt to points |
| Bolt Fit | Flag to resize and then apply contact fitting algorithm |
| Bolt Mat ID | Material ID for bolts (optional) |
| Module | Name of bolt library module |
| conx include | Include file location of connection entity |
| Conx Title | Title of the connection |
| contact id | Contact relating to connection entity |
| Diameter | Diameter of spotweld or bolt (end 1 for 2 pt bolt) |
| Diam2 | Diameter of bolt at point 2 |
| Edge dist | Distance of spotwelds from free edge (only applies to Edge lock = TRUE) |
| Edge lock | Set to TRUE to lock a spotweld line to a free edge. |
| FE include | Include file location of FE data within connection entity |
| FE info | Information on FE that makes up the connection entity |
| Hex Assembly | Labels of Hex assemblies (\*DEFINE\_HEX\_SPOTWELD\_ASSEMBLY) of solid elements related to a connection |
| Num panels | Number of panels in connection (2T, 3T etc.) |
| P1 | Coordinates of connection (start point for adhesive/spotweld line/bolt)/centre of cylinder for end 1 of generic bolt |
| P1L |  |
| P1P | vectors P1-P1L and P1-P1P describes normal plane of cylinder which describes end 1 of generic bolt |
| P2 | Coordinates of end point of adhesive/spotweld line/2 point bolt - centre of cylinder for end 2 of generic bolt |
| P2L |  |
| P2P | vectors P2-P2L and P2-P2P describes normal plane of cylinder which describes end 2 of generic bolt |
| min panel thick | minimum thickness of attached panels |
| av panel thick | average thickness of attached panels |
| min panel yield | minimum yield stress of attached panels |
| AV panel yield | average yield stress of attached panels |
| User data | Any typed in user data. This is not written out, so just remains for the current PRIMER session |
| Weld line Pitch | Pitch of spotwelds along path for spotweld lines connection type |
| Xml Filename | Filename of connection source XML file (if applicable) |
| X, Y, Z | Coordinates of connection (start point for adhesive/spotweld line/bolt) |

#####  Layers

| **Column** | **Explanation** |
| --- | --- |
| Layer 1,2,3,... | Layer information |

#####  Parts

| **Column** | **Explanation** |
| --- | --- |
| Part ID | Part ID of the connection entities (applies to all layers if PID (L2-L3) etc. not specified, else applied to entities between L1 & L2. |
| PID (L2-L3), ... | Part ID of the connection entities between specified layers. |

#####  Spot Remesh

| **Column** | **Explanation** |
| --- | --- |
| Remesh | Flag to say whether we remesh around the sportweld or not. |
| Remesh diam | Diameter around the spotweld that will be remeshed. |
| Remesh Nrings | Number of rings around the spotweld to create. |
| Remesh R1 diam | Diameter of ring 1. |
| Remesh R2 diam | Diameter of ring 2. |
| Remesh R3 diam | Diameter of ring 3. |
| Remesh R4 diam | Diameter of ring 4. |
| Remesh R5 diam | Diameter of ring 5. |
| Remesh R0 PID | Part ID of layer mesh at centre of spotweld. If not specified, Part ID will match layer part. |
| Remesh R1 PID | Part ID of ring 1 of spotweld. If not specified, Part ID will match layer part. |
| Remesh R2 PID | Part ID of ring 2 of spotweld. If not specified, Part ID will match layer part. |
| Remesh R3 PID | Part ID of ring 3 of spotweld. If not specified, Part ID will match layer part. |
| Remesh R4 PID | Part ID of ring 4 of spotweld. If not specified, Part ID will match layer part. |
| Remesh R5 PID | Part ID of ring 5 of spotweld. If not specified, Part ID will match layer part. |
| Remesh Rule | JavaScript rule for specifying ring diamter and Part ID based on certain rules. |

For more information on spotweld remeshing and what these mean please see the [spotweld remeshing](creating-spotwelds.md#spotweld_remeshing)section in spotweld creation.

#####  Settings Saved

| **Column** | **Explanation** |
| --- | --- |
| Store/Default | Flag to say whether we store settings with the connection or not. |
| Length check | Length check of this connection is ON or OFF. |
| Maximum length | Maximum length allowed for this connection. |
| Minimum length | Minimum length allowed for this connection. |
| Total length | Total length allowed for this connection. |
| No. panel check | Check against max number of panels ON or OFF. |
| Max number of panels | Maximum number of panels joined for this connection. |
| Warpage check | Solid element warpage check ON or OFF. |
| Maximum warpage | Maximum warpage allowed for this connection. |
| Use \_PID | Setting for if this beam spotweld sets \_PID on beams created or not. |
| Allow same part | If set to ON, this connection is allowed to attach a part to itself. |
| Allow clinch | If set to ON, this connection is allowed to attach a shell to it's neighbour (clinch situation). |
| Align solid | If set to ON, this connection (if a solid spotweld) will align with nearby panel free edges. |
| Spot line tol | For spotweld lines, distance searched for free edges if LOCKED to a free edge. |
| Patch check angle | Adhesive patch angle tolerance. |
| Glue break angle | If adhesive, break angle used to determine where to position nodes along the length of an adhesive run. |
| Glue soft aspect ratio | If adhesive, aspect ratio check used to determine when solid elements should be modified. |
| Glue hard aspect ratio | If adhesive, aspect ratio check used to determine when solid elements should not be created. |
| Max thickness | Search distance to find shells to attach to. |
| Edge distance | Distance away from an edge that a connection can still project to the surface. |
| Angle tolerance | Check on angle between elements joined. |
| Bolt mass adjust | For bolts, flag for adjusting mass. |
| Bolt part min mass | Minimum mass for rigid bolt part. |
| Bolt nrb min mass | Minimum mass for nrb bolt. |
| Boilt feature line | Consider feature lines for bolt holes. |
| Bolt dth beam | Add database history beam to bolds containing beams. |
| Bolt zero len dscr | Create a zero length discrete beam for 2pt bolts. |

[Previous](changing-the-table-columns.md)  |  [Next](changing-the-default-table-columns.md)