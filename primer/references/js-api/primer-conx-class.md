# Conx class

The Conx class gives you access to connections in PRIMER. [More...](primer-conx-class.md#Conx_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [BlankAll](primer-conx-class.md#Conx::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-conx-class.md#Conx::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [First](primer-conx-class.md#Conx::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-conx-class.md#Conx::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-conx-class.md#Conx::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-conx-class.md#Conx::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-conx-class.md#Conx::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-conx-class.md#Conx::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-conx-class.md#Conx::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-conx-class.md#Conx::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-conx-class.md#Conx::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-conx-class.md#Conx::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-conx-class.md#Conx::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RealizeAll](primer-conx-class.md#Conx::RealizeAll)(Model*[[Model](primer-model-class.md)]*)
* [RealizeFlagged](primer-conx-class.md#Conx::RealizeFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ReloadConnectors](primer-conx-class.md#Conx::ReloadConnectors)()
* [RenumberAll](primer-conx-class.md#Conx::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-conx-class.md#Conx::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-conx-class.md#Conx::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SetRuleDiameter](primer-conx-class.md#Conx::SetRuleDiameter)(diameter*[integer]*)
* [SetRuleFEPID](primer-conx-class.md#Conx::SetRuleFEPID)(pid*[integer]*)
* [SetRulePID](primer-conx-class.md#Conx::SetRulePID)(pid*[integer]*)
* [SketchFlagged](primer-conx-class.md#Conx::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-conx-class.md#Conx::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-conx-class.md#Conx::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-conx-class.md#Conx::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-conx-class.md#Conx::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-conx-class.md#Conx::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-conx-class.md#Conx::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UseParentLayer](primer-conx-class.md#Conx::UseParentLayer)(option*[boolean]*)
* [UseSPR2Pref](primer-conx-class.md#Conx::UseSPR2Pref)(option*[boolean]*)

## Member functions

* [AssociateComment](primer-conx-class.md#Conx::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Blank](primer-conx-class.md#Conx::Blank)()
* [Blanked](primer-conx-class.md#Conx::Blanked)()
* [ClearFlag](primer-conx-class.md#Conx::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-conx-class.md#Conx::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-conx-class.md#Conx::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [EmptyPatch](primer-conx-class.md#Conx::EmptyPatch)()
* [Error](primer-conx-class.md#Conx::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-conx-class.md#Conx::ExtractColour)()
* [Flagged](primer-conx-class.md#Conx::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-conx-class.md#Conx::GetComments)()
* [GetElements](primer-conx-class.md#Conx::GetElements)()
* [GetEntities](primer-conx-class.md#Conx::GetEntities)(type*[string]*)
* [GetLayerData](primer-conx-class.md#Conx::GetLayerData)(layer*[integer]*)
* [GetLayerShells](primer-conx-class.md#Conx::GetLayerShells)(layer*[integer]*)
* [GetParameter](primer-conx-class.md#Conx::GetParameter)(prop*[string]*)
* [GetPatchCoords](primer-conx-class.md#Conx::GetPatchCoords)(point*[integer]*)
* [GetPatchTopol](primer-conx-class.md#Conx::GetPatchTopol)(point*[integer]*)
* [GetPathData](primer-conx-class.md#Conx::GetPathData)(point*[integer]*)
* [GetPidData](primer-conx-class.md#Conx::GetPidData)()
* [GetSettings](primer-conx-class.md#Conx::GetSettings)()
* [GetShellThickness](primer-conx-class.md#Conx::GetShellThickness)(Layer*[integer]*)
* [Keyword](primer-conx-class.md#Conx::Keyword)()
* [KeywordCards](primer-conx-class.md#Conx::KeywordCards)()
* [Next](primer-conx-class.md#Conx::Next)()
* [Previous](primer-conx-class.md#Conx::Previous)()
* [RemovePatchTopol](primer-conx-class.md#Conx::RemovePatchTopol)(layer*[integer]*)
* [RemovePathData](primer-conx-class.md#Conx::RemovePathData)(layer*[integer]*)
* [SetFlag](primer-conx-class.md#Conx::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [SetLayerData](primer-conx-class.md#Conx::SetLayerData)(layer*[integer]*, item1*[integer/string]*, item2 (optional)*[integer/string]*, ... (optional)*[integer/string]*)
* [SetPatchCoords](primer-conx-class.md#Conx::SetPatchCoords)(point*[integer]*, x*[real]*, y*[real]*, z*[real]*)
* [SetPatchTopol](primer-conx-class.md#Conx::SetPatchTopol)(point*[integer]*, c1*[integer]*, c2*[integer]*, c3*[integer]*, c4 (optional)*[integer]*)
* [SetPathData](primer-conx-class.md#Conx::SetPathData)(point*[integer]*, x*[real]*, y*[real]*, z*[real]*)
* [SetPidData](primer-conx-class.md#Conx::SetPidData)(item1*[integer/string]*, item2 (optional)*[integer/string]*, ... (optional)*[integer/string]*)
* [SetSettings](primer-conx-class.md#Conx::SetSettings)(data*[object]*)
* [Sketch](primer-conx-class.md#Conx::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-conx-class.md#Conx::Unblank)()
* [Unsketch](primer-conx-class.md#Conx::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-conx-class.md#Conx::ViewParameters)()
* [Warning](primer-conx-class.md#Conx::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-conx-class.md#Conx::Xrefs)()
* [toString](primer-conx-class.md#Conx::toString)()

## Conx constants

| **Name** | **Description** |
| --- | --- |
| Conx.ADHESIVE | Connection is adhesive. |
| Conx.ADHESIVE\_PATCH | Connection adhesive type is a patch. |
| Conx.ADHESIVE\_SOLID | Connection adhesive type is a solid line. |
| Conx.ASSEMBLY | If the connection refers to an assembly rather than individual layers, the assembly is defined by part tree assembly. |
| Conx.BAD | Connection is bad (e.g. necessary data is missing). |
| Conx.BOLT | Connection is a bolt. |
| Conx.BOLT\_MODULE | Library bolt. |
| Conx.BOLT\_MRG\_2PTS | 2pt Patch Beam. |
| Conx.BOLT\_MRG\_2PTS\_RB | 2pt Patch (Rigid Beam). |
| Conx.BOLT\_MRG\_2PTS\_RJ | 2pt Patch Revolute joint. |
| Conx.BOLT\_MRG\_CYL | Cylindrical Merge. |
| Conx.BOLT\_MRG\_CYL\_BALL | Cylindrical Patch Ball joint. |
| Conx.BOLT\_MRG\_CYL\_BEAM | Cylindrical Patch Beam. |
| Conx.BOLT\_NRB\_2PTS | 2pt NRB Beam. |
| Conx.BOLT\_NRB\_CYL | Cylindrical NRB. |
| Conx.BOLT\_NRB\_CYL\_BALL | Cylindrical NRB Ball joint. |
| Conx.BOLT\_NRB\_CYL\_BEAM | Cylindrical NRB Beam. |
| Conx.BOLT\_NRB\_SPH | Spherical NRB. |
| Conx.BOLT\_NRB\_SPH\_BALL | Spherical NRB Ball joint. |
| Conx.BOLT\_NRB\_SPH\_DISC | Spherical NRB Discrete Beam. |
| Conx.DORMANT | Connection is dormant (not yet made). |
| Conx.INVALID | Connection has been made but something is wrong (e.g. part moved). |
| Conx.MADE | Connection has been made but status is unknown. |
| Conx.PART\_SET | If the connection refers to an assembly rather than individual layers, the assembly is defined by part set. |
| Conx.REALIZED | Connection has been made and is OK (checks OK). |
| Conx.RIGID | This constant is deprecated in version 10.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Conx.BOLT](primer-conx-class.md#Conx.BOLT) instead. [deprecated] |
| Conx.RIGID\_MERGE | This constant is deprecated in version 10.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Conx.BOLT_MRG_CYL](primer-conx-class.md#Conx.BOLT_MRG_CYL) instead. [deprecated] |
| Conx.RIGID\_NRB | This constant is deprecated in version 10.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Please use [Conx.BOLT_NRB_CYL](primer-conx-class.md#Conx.BOLT_NRB_CYL) instead. [deprecated] |
| Conx.RIVET | Connection is rivet. |
| Conx.SPOTWELD | Connection is a spotweld. |
| Conx.SPOTWELD\_BEAM | Connection spotweld type is beam. |
| Conx.SPOTWELD\_HEXA1 | Connection spotweld type is one hexa solid/spotweld layer. |
| Conx.SPOTWELD\_HEXA12 | Connection spotweld type is twelve hexa solids/spotweld layer. |
| Conx.SPOTWELD\_HEXA16 | Connection spotweld type is sixteen hexa solids/spotweld layer. |
| Conx.SPOTWELD\_HEXA2 | Connection spotweld type is two hexa solids/spotweld layer. |
| Conx.SPOTWELD\_HEXA3 | Connection spotweld type is three hexa solids/spotweld layer. |
| Conx.SPOTWELD\_HEXA4 | Connection spotweld type is four hexa solids/spotweld layer. |
| Conx.SPOTWELD\_HEXA8 | Connection spotweld type is eight hexa solids/spotweld layer. |
| Conx.SPOTWELD\_LINE | Connection is a spotweld line. |
| Conx.SPOTWELD\_MIG | Connection spotweld type is (beam) MIG weld. |

## Conx properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| adhesive\_esize | real | Element size along the length of the adhesive run |
| adhesive\_nelem | integer | The number of elements across the width of the adhesive |
| adhesive\_width | real | The width of the adhesive run |
| angtol | real | angle tolerance for bolt |
| angtol2 | real | angle tolerance at end 2 for 2 point bolt |
| assembly | integer/string | Assembly used to specify panels connection together, rather than individual layers. Integer for a part set ID, string for a PRIMER assembly (name). |
| assembly\_type | constant | The assembly type. Can be [Conx.PART_SET](primer-conx-class.md#Conx.PART_SET) or [Conx.ASSEMBLY](primer-conx-class.md#Conx.ASSEMBLY). |
| colour | [Colour](primer-colour-class.md) | The colour of the connection |
| diameter | real | Diameter of spotweld/rigid |
| diameter2 | real | Diameter of rigid at end 2 |
| edge\_distance | real | Spotweld line edge distance |
| edge\_lock | logical | true if a spotweld line is locked to an edge, false if not |
| error (read only) | string | Description of the error if the connection cannot be made |
| error\_details (read only) | string | Details of the error if the connection cannot be made |
| exists (read only) | logical | true if connection exists, false if referred to but not defined. |
| fit | integer | contact fitting method for library bolts |
| id | integer | [Conx](primer-conx-class.md) number. Also see the [label](primer-conx-class.md#label) property which is an alternative name for this. |
| include | integer | The [Include](primer-include-class.md) file number that the connection is in. |
| label | integer | [Conx](primer-conx-class.md) number. Also see the [id](primer-conx-class.md#id) property which is an alternative name for this. |
| layers | integer | The number of layers the connection has. |
| length | real | Length of 1 point bolt, max thickness for 2 point bolt |
| length2 | real | max thickness at end 2 for 2 point bolt |
| material | integer | The ID of the [Material](primer-material-class.md) used for 'merge' bolt connections. i.e. [Conx.BOLT_MRG_CYL](primer-conx-class.md#Conx.BOLT_MRG_CYL), [Conx.BOLT_MRG_CYL_BEAM](primer-conx-class.md#Conx.BOLT_MRG_CYL_BEAM), |
| model (read only) | integer | The [Model](primer-model-class.md) number that the connection is in. |
| module | string | name of library module for bolt |
| part | integer | The ID of the [Part](primer-part-class.md) used for adhesive or spotweld connections. Note that in v11.0 and above you are able to specify a different part IDs for elements in the connection between different layers. If you only have one part for the elements in the connection, then this is the value of this property. If there is more than one used, then the value of this property is the first part. If you set this property to a new value, then the all the elements in the connection will have this new part ID when it is realized. To set and retrieve information on parts used between different layers, the functions GetPidData() and SetPidData() should be used. |
| patch\_coords | integer | The number of patch coordinate points the connection has (Adhesive patch only). |
| patch\_topol | integer | The number of patch topology entries the connection has (Adhesive patch only). |
| path | integer | The number of path points the connection has (Adhesive only). Note that these points do **NOT** include the start and end points for the adhesive run. These are defined using the properties [x](primer-conx-class.md#x), [y](primer-conx-class.md#y), [z](primer-conx-class.md#z) and [x2](primer-conx-class.md#x2), [y2](primer-conx-class.md#y2), [z2](primer-conx-class.md#z2) |
| pitch | real | Spotweld line pitch |
| resize | integer | snap to points fitting method for library bolts |
| saved\_settings | boolean | Whether settings are saved for a connection or not |
| shape | integer | shape for bolt attachment |
| shape2 | integer | shape for bolt attachment at end 2 for 2 point bolt |
| spr2\_id (read only) | integer | Internal label of C\_SPR2 which applied to this rivet connection |
| spr2\_match | boolean | True to use matching C\_SPR2 for this rivet. False to create new C\_SPR2 for each rivet. IF unset, a new C\_SPR2 will be created. |
| spr2\_unshared (read only) | boolean | True if C\_SPR2 is unique for this rivet |
| status | constant | The status of the connection. Can be [Conx.DORMANT](primer-conx-class.md#Conx.DORMANT), [Conx.MADE](primer-conx-class.md#Conx.MADE), [Conx.INVALID](primer-conx-class.md#Conx.INVALID), [Conx.REALIZED](primer-conx-class.md#Conx.REALIZED) or [Conx.BAD](primer-conx-class.md#Conx.BAD). |
| subtype | constant | The connection subtype. For [SPOTWELD](primer-conx-class.md#Conx.SPOTWELD) and [SPOTWELD_LINE](primer-conx-class.md#Conx.SPOTWELD_LINE)connections the subtype can be:<ul> <li><a href="primer-conx-class.md#Conx.SPOTWELD_BEAM">Conx.SPOTWELD_BEAM</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_MIG">Conx.SPOTWELD_MIG</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_HEXA1">Conx.SPOTWELD_HEXA1</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_HEXA2">Conx.SPOTWELD_HEXA2</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_HEXA3">Conx.SPOTWELD_HEXA3</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_HEXA4">Conx.SPOTWELD_HEXA4</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_HEXA8">Conx.SPOTWELD_HEXA8</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_HEXA12">Conx.SPOTWELD_HEXA12</a></li> <li><a href="primer-conx-class.md#Conx.SPOTWELD_HEXA16">Conx.SPOTWELD_HEXA16</a></li> </ul> For [BOLT](primer-conx-class.md#Conx.BOLT)connections the subtype can be:<ul> <li><a href="primer-conx-class.md#Conx.BOLT_MRG_CYL">Conx.BOLT_MRG_CYL</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_MRG_CYL_BEAM">Conx.BOLT_MRG_CYL_BEAM</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_MRG_CYL_BALL">Conx.BOLT_MRG_CYL_BALL</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_MRG_2PTS">Conx.BOLT_MRG_2PTS</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_MRG_2PTS_RB">Conx.BOLT_MRG_2PTS_RB</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_MRG_2PTS_RJ">Conx.BOLT_MRG_2PTS_RJ</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_MRG_CYL">Conx.BOLT_MRG_CYL</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_NRB_CYL_BEAM">Conx.BOLT_NRB_CYL_BEAM</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_NRB_CYL_BALL">Conx.BOLT_NRB_CYL_BALL</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_NRB_SPH">Conx.BOLT_NRB_SPH</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_NRB_SPH_BALL">Conx.BOLT_NRB_SPH_BALL</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_NRB_SPH_DISC">Conx.BOLT_NRB_SPH_DISC</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_NRB_2PTS">Conx.BOLT_NRB_2PTS</a></li> <li><a href="primer-conx-class.md#Conx.BOLT_MODULE">Conx.BOLT_MODULE</a></li> </ul> For [ADHESIVE](primer-conx-class.md#Conx.ADHESIVE) connections the subtype can be: [Conx.ADHESIVE_SOLID](primer-conx-class.md#Conx.ADHESIVE_SOLID). [Conx.ADHESIVE_PATCH](primer-conx-class.md#Conx.ADHESIVE_PATCH). |
| title | string | Title for connection |
| transparency | integer | The transparency of the connection (0-100) 0% is opaque, 100% is transparent. |
| type | constant | The connection type. Can be [Conx.SPOTWELD](primer-conx-class.md#Conx.SPOTWELD), [Conx.BOLT](primer-conx-class.md#Conx.BOLT) or [Conx.RIVET](primer-conx-class.md#Conx.RIVET) or [Conx.ADHESIVE](primer-conx-class.md#Conx.ADHESIVE). |
| user\_data | string | User data for connection |
| x | real | X coordinate |
| x2 | real | X coordinate for second point (adhesive only) |
| y | real | Y coordinate |
| y2 | real | Y coordinate for second point (adhesive only) |
| z | real | Z coordinate |
| z2 | real | Z coordinate for second point (adhesive only) |

| Detailed Description<br>The Conx class allows you to create, modify, edit and manipulate connections.<br>See the documentation below for more details. |
| --- |

| Constructor
new Conx(Model*[[Model](primer-model-class.md)]*, x*[real]*, y*[real]*, z*[real]*, type (optional)*[constant]*, subtype (optional)*[constant]*, title (optional)*[string]*)

Description<br>Create a new [Conx](primer-conx-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that connection will be created in

* x (real)
 
X coordinate

* y (real)
 
Y coordinate

* z (real)
 
Z coordinate

* type (optional) (constant)
 
Type of connection. Can be [Conx.SPOTWELD](primer-conx-class.md#Conx.SPOTWELD), [Conx.BOLT](primer-conx-class.md#Conx.BOLT), [Conx.ADHESIVE](primer-conx-class.md#Conx.ADHESIVE) [Conx.SPOTWELD_LINE](primer-conx-class.md#Conx.SPOTWELD_LINE) or [Conx.RIVET](primer-conx-class.md#Conx.RIVET). If omitted type will be set to [Conx.SPOTWELD](primer-conx-class.md#Conx.SPOTWELD).

* subtype (optional) (constant)
 
Subtype of connection. See property [subtype](primer-conx-class.md#subtype) for valid values. If omitted subtype will be set to the default subtype for this type of connection.

* title (optional) (string)
 
Title for the connection

| Returns
<br>[Conx](primer-conx-class.md) object<br>
Return type
<br>Conx |
| --- |

| Example
<br>To create a new connection in model m, at coordinates (20, 40, 10)<br>
```
var c = new Conx(m, 20, 40, 10);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a connection. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the connection

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the connection c:<br>
```
c.AssociateComment(c);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the connection |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank connection c:<br>
```
c.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the connections in model m:<br>
```
Conx.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged connections will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the connections that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the connections in model m flagged with f:<br>
```
Conx.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the connection is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if connection c is blanked:<br>
```
if (c.Blanked() ) do_something...
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the connection. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the connection

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for connection c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the connection. The target include of the copied connection can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>Conx object<br>
Return type
<br>Conx |
| --- |

| Example
<br>To copy connection c into connection z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a connection. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the connection

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the connection c:<br>
```
c.DetachComment(c);
```
 |
| --- |

* * *

| EmptyPatch()

Description<br>Empties the patch topology/coordinates data. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value. |
| --- |

| Example
<br>To empty the patch topology/coordinates data for connection c;<br><br>
```
c.EmptyPatch();
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for connection. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The error message to give

* details (optional) (string)
 
An optional detailed error message

| Returns
<br>No return value |
| --- |

| Example
<br>To add an error message "My custom error" for connection c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for connection.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the connection [colour](primer-conx-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the connection. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing connection c:<br>
```
var colour = c.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first connection in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first connection in

| Returns
<br>Conx object (or null if there are no connections in the model).<br>
Return type
<br>Conx |
| --- |

| Example
<br>To get the first connection in model m:<br>
```
var c = Conx.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free connection label in the model. Also see [Conx.LastFreeLabel()](primer-conx-class.md#Conx::LastFreeLabel), [Conx.NextFreeLabel()](primer-conx-class.md#Conx::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free connection label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>Conx label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free connection label in model m:<br>
```
var label = Conx.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the connections in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the connections

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the connections with flag f in model m:<br>
```
Conx.FlagAll(m, f);
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the connection is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the connection

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if connection c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each connection in the model.<br> **Note that ForEach has been designed to make looping over connections as fast as possible and so has some limitations. Firstly, a single temporary Conx object is created and on each function call it is updated with the current connection data. This means that you should not try to store the Conx object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new connections inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections are in

* func (function)
 
Function to call for each connection

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the connections in model m:<br>
```
Conx.ForEach(m, test);
function test(c)
{
// c is Conx object
}
```
<br><br>To call function test for all of the connections in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
Conx.ForEach(m, test, data);
function test(c, extra)
{
// c is Conx object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Conx objects or properties for all of the connections in a model in PRIMER. If the optional property argument is not given then an array of Conx objects is returned. If the property argument is given, that property value for each connection is returned in the array instead of a Conx object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get connections from

* property (optional) (string)
 
Name for property to get for all connections in the model

| Returns
<br>Array of Conx objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Conx objects for all of the connections in model m:<br>
```
var a = Conx.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each connection in model m:<br>
```
var a = Conx.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a connection. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the connection c:<br>
```
var comm_array = c.GetComments();
```
 |
| --- |

* * *

| GetElements()

Description<br>Returns the beams/solids that are used in the connection weld. |
| --- |

#### Arguments

No arguments

| Returns
<br>An array containing the element IDs (or null if no elements).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the elements for connection c:<br><br>
```
var elems = c.GetElements();
```
 |
| --- |

* * *

| GetEntities(type*[string]*)

Description<br>Returns list of the entities of type that are used in the connection. |
| --- |

#### Arguments

* type (string)
 
The type of the item in the reference list (for a list of types see Appendix I of the PRIMER manual).

| Returns
<br>An array containing the item IDs (or null if none).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get list of nodes for connection c:<br><br>
```
var items = c.GetEntities("NODE");
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of Conx objects for all of the flagged connections in a model in PRIMER If the optional property argument is not given then an array of Conx objects is returned. If the property argument is given, then that property value for each connection is returned in the array instead of a Conx object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get connections from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the connections that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged connections in the model

| Returns
<br>Array of Conx objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Conx objects for all of the connections in model m flagged with f:<br>
```
var c = Conx.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the connections in model m flagged with f:<br>
```
var a = Conx.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the Conx object for a connection ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the connection in

* number (integer)
 
number of the connection you want the Conx object for

| Returns
<br>Conx object (or null if connection does not exist).<br>
Return type
<br>Conx |
| --- |

| Example
<br>To get the Conx object for connection 100 in model m<br>
```
var c = Conx.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetLayerData(layer*[integer]*)

Description<br>Returns the data for a layer of the connection. |
| --- |

#### Arguments

* layer (integer)
 
The layer you want the data for. **Note that layers start at 0, not 1**.

| Returns
<br>An array containing the layer data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd layer for connection c:<br><br>
```
var l_data = c.GetLayerData(2);
```
 |
| --- |

* * *

| GetLayerShells(layer*[integer]*)

Description<br>Returns the attached shells for a layer of the connection. |
| --- |

#### Arguments

* layer (integer)
 
The layer you want the data for. **Note that layers start at 0, not 1**.

| Returns
<br>Array of Shell objects or null if not valid<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the attached shells for the 3rd layer for connection c:<br><br>
```
var shells = c.GetLayerShells(2);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a Conx property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [Conx.ViewParameters()](primer-conx-class.md#Conx::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
connection property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if Conx property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if Conx property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| GetPatchCoords(point*[integer]*)

Description<br>Returns the data for a patch coordinate of an adhesive patch connection. |
| --- |

#### Arguments

* point (integer)
 
The point you want the data for. **Note that points start at 0, not 1**.

| Returns
<br>An array containing the patch coordinate.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd patch coordinate for connection c:<br><br>
```
var p_data = c.GetPatchCoords(2);
```
 |
| --- |

* * *

| GetPatchTopol(point*[integer]*)

Description<br>Returns the topology for a patch quad/tria of an adhesive patch connection. |
| --- |

#### Arguments

* point (integer)
 
The patch quad/tria you want the data for. **Note that points start at 0, not 1**.

| Returns
<br>Array of numbers containing the patch topology information.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the data for the 3rd patch quad/tria for connection c:<br><br>
```
var p_data = c.GetPatchTopol(2);
```
 |
| --- |

* * *

| GetPathData(point*[integer]*)

Description<br>Returns the data for a path point of an adhesive/spotweld line connection. |
| --- |

#### Arguments

* point (integer)
 
The point you want the data for. **Note that points start at 0, not 1**.

| Returns
<br>An array containing the path data.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the data for the 3rd path point for connection c:<br><br>
```
var p_data = c.GetPathData(2);
```
 |
| --- |

* * *

| GetPidData()

Description<br>Returns an array of Part objects for the connection FE entities. A connection can contain elements with different part ID's between different layers. If one part ID is returned, that part is used for all elements in the connection. Not applicable for bolts. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Part objects<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Part objects for connection c<br>
```
var arr = c.GetPidData();
```
 |
| --- |

* * *

| GetSettings()

Description<br>Returns an object of settings stored with the connection. |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| angle\_tolerance | real | Angle tolerance |
| bolt\_adjust\_mass | boolean | Adjust bolt mass when creating bolt entitites |
| bolt\_dth\_beam | boolean | Add database history beam when bolt beam is created |
| bolt\_feature\_line | boolean | Consider feature line for bolt holes |
| bolt\_nrb\_min\_mass | real | Bolt rigid NRB minimum mass |
| bolt\_part\_min\_mass | real | Bolt rigid part minimum mass |
| clinch | boolean | Allow connections to join a clinch type connection |
| consistent\_weld\_area | boolean | Turn on consistent weld area so multihex welds are pi\*d\*d/4 |
| edge\_distance | real | Edge distance |
| glue\_break\_angle | real | Glue break angle |
| glue\_hard\_aspect | real | Glue hard aspect ratio |
| glue\_soft\_aspect | real | Glue soft aspect ratio |
| length\_check | boolean | Check length |
| max\_length | real | Maximum length |
| max\_panels | integer | Maximum number of panels |
| max\_warpage | real | Maximum warpage |
| min\_length | real | Minimum length |
| nrb\_arcweld (optional) | boolean | Create arcweld using NRBs (rather than contact) |
| panel\_check | boolean | Check for maximum number of panels |
| patch\_angle | real | Patch angle setting |
| patch\_angle\_check | boolean | Turn on or off patch angle check |
| same\_part | boolean | Allow connections to join a part to itself |
| solid\_free\_edges | boolean | Consider free edges when orienting single solid spotwelds |
| spot\_line\_tol | real | Spotweld line search tolerance |
| spot\_thickness | real | Search thickness |
| total\_length | real | Total length |
| use\_pid | boolean | Use \_PID for beam connections |
| warpage\_check | boolean | Check warpage value |

#### Return type

object

| Example
<br>To make an Oject containing the stored settings of connection c<br>
```
var o = Conx.GetSettings();
```
 |
| --- |

* * *

| GetShellThickness(Layer*[integer]*)

Description<br>Returns an array containing a number of objects equal to the number of solid elements in the connection. Each object contains the corresponding solid element object, and shell element objects and their thicknesses. The argument allows the user to output only shells from all layers, or a particular layer. **Note that a carriage return is not added**. |
| --- |

#### Arguments

* Layer (integer)
 
ID of the connection layer containing the shells from which the thicknesses will be extracted. If a value of zero or lower is input, all layers will be considered in the output data.

| Returns |
| --- |

An array containing a number of objects equal to the number of solid elements in the connection. Each object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| shell*n* | [Shell](primer-shell-class.md) | Shell object in the specified layer in contact with the *n*th node the solid adhesive element, where *n* can be a value from 1 to 8. This corresponds to the maximum number of nodes in the solid element. |
| solid | [Solid](primer-solid-class.md) | Solid object associated with the shells in the return object. |
| sthk*n* | Double | Thickness of shell in the specified layer in contact with the *n*th node of the solid adhesive element, where *n* can be a value from 1 to 8. |

#### Return type

object

| Example
<br>To get the data for connection c layer 1:<br>
```
var sThkArr = c.GetShellThickness(1); // sThkArr is an array of objects containing shells and shell thicknesses in only layer 1 for each solid element in the connection.
var st0_1 = sThkArr[0].sthk1;         // st0_1 is the shell thickness of the shell attached to node 1 in the first solid element (array index 0) in the sThkArr array.
var sh1_4 = sThkArr[1].shell4;        // sth1_4 is the shell object corresponding to node 1 in the second solid element (array index 1) in the sThkArr array.
var so4   = sThkArr[4].solid;         // so4 is the fifth solid element object (array index 4) in the sThkArr array.
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this connection (\*CONNECTION\_START\_SPOTWELD etc). **Note that a carriage return is not added**. See also [Conx.KeywordCards()](primer-conx-class.md#Conx::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for connection c:<br>
```
var key = c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the connection. **Note that a carriage return is not added**. See also [Conx.Keyword()](primer-conx-class.md#Conx::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for connection c:<br>
```
var cards = c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last connection in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last connection in

| Returns
<br>Conx object (or null if there are no connections in the model).<br>
Return type
<br>Conx |
| --- |

| Example
<br>To get the last connection in model m:<br>
```
var c = Conx.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free connection label in the model. Also see [Conx.FirstFreeLabel()](primer-conx-class.md#Conx::FirstFreeLabel), [Conx.NextFreeLabel()](primer-conx-class.md#Conx::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free connection label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>Conx label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free connection label in model m:<br>
```
var label = Conx.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next connection in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Conx object (or null if there are no more connections in the model).<br>
Return type
<br>Conx |
| --- |

| Example
<br>To get the connection in model m after connection c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) connection label in the model. Also see [Conx.FirstFreeLabel()](primer-conx-class.md#Conx::FirstFreeLabel), [Conx.LastFreeLabel()](primer-conx-class.md#Conx::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free connection label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>Conx label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free connection label in model m:<br>
```
var label = Conx.NextFreeLabel(m);
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a connection. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only connections from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only connections that are flagged with *limit* can be selected. If omitted, or null, any connections from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[Conx](primer-conx-class.md) object (or null if not picked)<br>
Return type
<br>Conx |
| --- |

| Example
<br>To pick a connection from model m giving the prompt 'Pick connection from screen':<br>
```
var c = Conx.Pick('Pick connection from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous connection in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>Conx object (or null if there are no more connections in the model).<br>
Return type
<br>Conx |
| --- |

| Example
<br>To get the connection in model m before connection c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| RealizeAll(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Realizes all of the connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections will be realized in

| Returns
<br>No return value |
| --- |

| Example
<br>To realize all of the connections in model m:<br>
```
Conx.RealizeAll(m);
```
 |
| --- |

* * *

| RealizeFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Realizes all of the flagged connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged connections will be realized in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the connections that you want to realize

| Returns
<br>No return value |
| --- |

| Example
<br>To realize all of the connections in model m flagged with f:<br>
```
Conx.RealizeFlagged(m, f);
```
 |
| --- |

* * *

| ReloadConnectors() [static]
Description<br>Reload all modules from primer\_library/connectors |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br><br>
```
Conx.ReloadConnectors();
```
 |
| --- |

* * *

| RemovePatchTopol(layer*[integer]*)

Description<br>Deletes the topology at a particular location for patch type adhesive. |
| --- |

#### Arguments

* layer (integer)
 
The topology location you want to remove. **Note that layers start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the 3rd topology data for connection c:<br><br>
```
c.RemovePatchTopol(2);
```
 |
| --- |

* * *

| RemovePathData(layer*[integer]*)

Description<br>Deletes a pathc point for a line adhesive connection. |
| --- |

#### Arguments

* layer (integer)
 
The point you want to remove. **Note that layers start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove the 3rd point from connection c:<br><br>
```
c.RemovePathData(2);
```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the connections in model m, from 1000000:<br>
```
Conx.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged connections will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the connections that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the connections in model m flagged with f, from 1000000:<br>
```
Conx.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select connections using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting connections

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only connections from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only connections that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any connections can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of connections selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select connections from model m, flagging those selected with flag f, giving the prompt 'Select connections':<br>
```
Conx.Select(f, 'Select connections', m);
```
<br><br>To select connections, flagging those selected with flag f but limiting selection to connections flagged with flag l, giving the prompt 'Select connections':<br>
```
Conx.Select(f, 'Select connections', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the connection. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the connection

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for connection c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| SetLayerData(layer*[integer]*, item1*[integer/string]*, item2 (optional)*[integer/string]*, ... (optional)*[integer/string]*)

Description<br>Sets the data for a layer of the connection. |
| --- |

#### Arguments

* layer (integer)
 
The layer you want to set the data for. **Note that layers start at 0, not 1**.

* item1 (integer/string)
 
The first item for the layer definition. As layer definitions can be part IDs,
part names, CAD names, part set IDs, part set names or assemby names the following logic is used.
If the item is an integer it is assumed to be a part ID. If the item is a string then it must be
in the format 'P&lt;part ID&gt;', 'P:&lt;part name&gt;', 'C:&lt;CAD name&gt;', 'S&lt;set ID&gt;',
'S:&lt;set name&gt;'
or 'A:&lt;assembly name&gt;'.

* item2 (optional) (integer/string)
 
The second item for the layer definition. **This must be type same type asitem1. e.g. if item1 is a part ID, item2 must be a part ID (it cannot be a part name etc).**

* ... (optional) (integer/string)
 
The nth item for the layer definition. **This must be type same type asitem1. e.g. if item1 is a part ID, this item must be a part ID (it cannot be a part name etc).**

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the data for the 3rd layer for connection c, to be part IDs 10 and 20:<br><br>
```
c.SetLayerData(2, 10, 20);
```
<br><br>or<br><br>
```
var a = new Array(10, 20);
c.SetLayerData(2, a);
```
 |
| --- |

* * *

| SetPatchCoords(point*[integer]*, x*[real]*, y*[real]*, z*[real]*)

Description<br>Sets a coordinate used by the adhesive patch connection type. |
| --- |

#### Arguments

* point (integer)
 
The point you want to set the data for. **Note that points start at 0, not 1**.

* x (real)
 
X coordinate of point

* y (real)
 
Y coordinate of point

* z (real)
 
Z coordinate of point

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the position for the 3rd patch point for connection c, to be (10, 20, 30);<br><br>
```
c.SetPatchCoords(2, 10, 20, 30);
```
 |
| --- |

* * *

| SetPatchTopol(point*[integer]*, c1*[integer]*, c2*[integer]*, c3*[integer]*, c4 (optional)*[integer]*)

Description<br>Sets the topology used by the adhesive patch connection type. |
| --- |

#### Arguments

* point (integer)
 
The point you want to set the data for. **Note that points start at 0, not 1**.

* c1 (integer)
 
1st coordinate location point

* c2 (integer)
 
2nd coordinate location point

* c3 (integer)
 
3rd coordinate location point

* c4 (optional) (integer)
 
4th coordinate location point

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the topology for the 3rd patch quad/tria for connection c, to be (1, 4, 3, 6);<br><br>
```
c.SetPatchTopol(2, 1, 4, 3, 6);
```
 |
| --- |

* * *

| SetPathData(point*[integer]*, x*[real]*, y*[real]*, z*[real]*)

Description<br>Sets the data for a path point of the connection. |
| --- |

#### Arguments

* point (integer)
 
The point you want to set the data for. **Note that points start at 0, not 1**.

* x (real)
 
X coordinate of point

* y (real)
 
Y coordinate of point

* z (real)
 
Z coordinate of point

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the position for the 3rd path point for connection c, to be (10, 20, 30);<br><br>
```
c.SetPathData(2, 10, 20, 30);
```
 |
| --- |

* * *

| SetPidData(item1*[integer/string]*, item2 (optional)*[integer/string]*, ... (optional)*[integer/string]*)

Description<br>Sets the element part IDs for the connection. A different part can be defined for elements in the connection between different layers. Not applicable for bolts. |
| --- |

#### Arguments

* item1 (integer/string)
 
Part label of the first item in the PID layer list.

* item2 (optional) (integer/string)
 
The second item for the layer definition.

* ... (optional) (integer/string)
 
The nth item for the layer definition.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the part data for c, to be part IDs 10 and 20:<br><br>
```
c.SetPidData(10, 20);
```
<br><br>or<br><br>
```
var a = new Array(10, 20);
c.SetPidData(a);
```
 |
| --- |

* * *

| SetRuleDiameter(diameter*[integer]*) [static]
Description<br>Set the diameter for a spotweld ring when running a rule. Note that this method can only be called when running a connection rule script. It will not have any effect if used in a 'normal' script. |
| --- |

#### Arguments

* diameter (integer)
 
The diameter to set for the ring

| Returns
<br>No return value |
| --- |

| Example
<br>To set the diameter for a ring to be 10.0:<br>
```
Conx.SetRuleDiameter(10.0);
```
 |
| --- |

* * *

| SetRuleFEPID(pid*[integer]*) [static]
Description<br>Set the PID for spotweld beam/solid elements or adhesive solids when running a rule. Note that this method can only be called when running a connection rule script. It will not have any effect if used in a 'normal' script. |
| --- |

#### Arguments

* pid (integer)
 
The PID to set for the spotweld or adhesive elements

| Returns
<br>No return value |
| --- |

| Example
<br>To set the PID for a spotweld to be 1000:<br>
```
Conx.SetRuleFEPID(1000);
```
 |
| --- |

* * *

| SetRulePID(pid*[integer]*) [static]
Description<br>Set the PID for a spotweld ring when running a rule. Note that this method can only be called when running a connection rule script. It will not have any effect if used in a 'normal' script. |
| --- |

#### Arguments

* pid (integer)
 
The PID to set for the ring

| Returns
<br>No return value |
| --- |

| Example
<br>To set the PID for a ring to be 1000:<br>
```
Conx.SetRulePID(1000);
```
 |
| --- |

* * *

| SetSettings(data*[object]*)

Description<br>Sets the settings stored on a connection entity. Not applicable for bolts. |
| --- |

#### Arguments

* data (object)

Object containing the connection settings data. The properties can be: 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| angle\_tolerance (optional) | real | Angle tolerance |
| bolt\_adjust\_mass (optional) | boolean | Adjust bolt mass when creating bolt entities |
| bolt\_dth\_beam (optional) | boolean | Add database history beam when bolt is created |
| bolt\_feature\_line (optional) | boolean | Consider feature line for bolt holes |
| bolt\_nrb\_min\_mass (optional) | real | Bolt NRB minimum mass |
| bolt\_part\_min\_mass (optional) | real | Bolt rigid part minimum mass |
| clinch (optional) | boolean | Allow connections to join a clinch type connection |
| consistent\_weld\_area (optional) | boolean | Use consistent area for multihex welds |
| edge\_distance (optional) | real | Edge distance |
| glue\_break\_angle (optional) | real | Glue break angle |
| glue\_hard\_aspect (optional) | real | Glue hard aspect ratio |
| glue\_soft\_aspect (optional) | real | Glue soft aspect ratio |
| length\_check (optional) | boolean | Check the connection length |
| max\_length (optional) | real | Maximum length of connection |
| max\_panels (optional) | integer | Maximum number of panels |
| max\_warpage (optional) | real | Maximum warpage |
| min\_length (optional) | real | Minimum length of connection |
| nrb\_arcweld (optional) | boolean | Create arcweld using NRBs (rather than contact) |
| panel\_check (optional) | boolean | Check for maximum number of panels |
| patch\_angle (optional) | real | Patch angle |
| patch\_angle\_check (optional) | boolean | Check the patch angle |
| same\_part (optional) | boolean | Allow connections to join a part to itself |
| solid\_free\_edges (optional) | boolean | Consider free edges when orienting single solid spotwelds |
| spot\_line\_tol (optional) | real | Spotweld line search tolerance |
| spot\_thickness (optional) | real | Search thickness |
| total\_length (optional) | real | Total length of connection |
| use\_pid (optional) | boolean | Use \_PID for beam connections |
| warpage\_check (optional) | boolean | Check warpage value |

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the various settings for a connection c:<br><br>
```
var data = { length_check:true, total_length:1.5, warpage_check:false, angle_tolerance:5.0 };
c.SetSettings(data);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the connection. The connection will be sketched until you either call [Conx.Unsketch()](primer-conx-class.md#Conx::Unsketch), [Conx.UnsketchAll()](primer-conx-class.md#Conx::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the connection is sketched. If omitted redraw is true. If you want to sketch several connections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch connection c:<br>
```
c.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged connections in the model. The connections will be sketched until you either call [Conx.Unsketch()](primer-conx-class.md#Conx::Unsketch), [Conx.UnsketchFlagged()](primer-conx-class.md#Conx::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged connections will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the connections that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the connections are sketched. If omitted redraw is true. If you want to sketch flagged connections several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all connections flagged with flag in model m:<br>
```
Conx.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing connections should be counted. If false or omitted
referenced but undefined connections will also be included in the total.

| Returns
<br>number of connections<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of connections in model m:<br>
```
var total = Conx.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the connection |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank connection c:<br>
```
c.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the connections in model m:<br>
```
Conx.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged connections will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the connections that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the connections in model m flagged with f:<br>
```
Conx.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all connections will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the connections

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the connections in model m:<br>
```
Conx.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the connection. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the connection is unsketched. If omitted redraw is true. If you want to unsketch several connections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch connection c:<br>
```
c.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all connections. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the connections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all connections in model m:<br>
```
Conx.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged connections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all connections will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the connections that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the connections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all connections flagged with flag in model m:<br>
```
Conx.UnsketchAll(m, flag);
```
 |
| --- |

* * *

| UseParentLayer(option*[boolean]*) [static]
Description<br>True (default) means put bolt FE into parent layer where possible. |
| --- |

#### Arguments

* option (boolean)
 
True (default) means put bolt FE into parent layer where possible.

| Returns
<br>No return value |
| --- |

| Example
<br>To switch off use of parent layer (and use current layer)<br>
```
Conx.UseParentLayer(false);
```
 |
| --- |

* * *

| UseSPR2Pref(option*[boolean]*) [static]
Description<br>True (default) means use the pref settings for C\_SPR2 created when rivet realized. |
| --- |

#### Arguments

* option (boolean)
 
True (default) means use the pref settings for C\_SPR2 created when rivet realized.

| Returns
<br>No return value |
| --- |

| Example
<br>To ignore any pref settings and use zero for newly created C\_SPR2 cards<br>
```
Conx.UseSPR2Pref(false);
```
 |
| --- |

* * *

| ViewParameters()

Description<br>Object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. This function temporarily changes the behaviour so that if a property is a parameter the parameter name is returned instead. This can be used with 'method chaining' (see the example below) to make sure a property argument is correct. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Conx](primer-conx-class.md) object.<br>
Return type
<br>Conx |
| --- |

| Example
<br>To check if Conx property c.example is a parameter by using the [Conx.GetParameter()](primer-conx-class.md#Conx::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for connection. For more details on checking see the [Check](primer-check-class.md) class. |
| --- |

#### Arguments

* message (string)
 
The warning message to give

* details (optional) (string)
 
An optional detailed warning message

| Returns
<br>No return value |
| --- |

| Example
<br>To add a warning message "My custom warning" for connection c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this connection. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for connection c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the connection data in keyword format. Note that this contains the keyword header and the keyword cards. See also [Conx.Keyword()](primer-conx-class.md#Conx::Keyword) and [Conx.KeywordCards()](primer-conx-class.md#Conx::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for connection n in keyword format<br>
```
var s = c.toString();
```
 |
| --- |

* * *