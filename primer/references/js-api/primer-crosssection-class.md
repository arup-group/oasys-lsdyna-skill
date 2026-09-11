# CrossSection class

The CrossSection class gives you access to database cross section cards in PRIMER. [More...](primer-crosssection-class.md#CrossSection_details)

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

* [BlankAll](primer-crosssection-class.md#CrossSection::BlankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [BlankFlagged](primer-crosssection-class.md#CrossSection::BlankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Create](primer-crosssection-class.md#CrossSection::Create)(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*)
* [CreateAlongFeatureLine](primer-crosssection-class.md#CrossSection::CreateAlongFeatureLine)(Model*[[Model](primer-model-class.md)]*, nid1*[integer]*, options*[object]*)
* [First](primer-crosssection-class.md#CrossSection::First)(Model*[[Model](primer-model-class.md)]*)
* [FirstFreeLabel](primer-crosssection-class.md#CrossSection::FirstFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [FlagAll](primer-crosssection-class.md#CrossSection::FlagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [ForEach](primer-crosssection-class.md#CrossSection::ForEach)(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*)
* [GetAll](primer-crosssection-class.md#CrossSection::GetAll)(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*)
* [GetFlagged](primer-crosssection-class.md#CrossSection::GetFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*)
* [GetFromID](primer-crosssection-class.md#CrossSection::GetFromID)(Model*[[Model](primer-model-class.md)]*, number*[integer]*)
* [Last](primer-crosssection-class.md#CrossSection::Last)(Model*[[Model](primer-model-class.md)]*)
* [LastFreeLabel](primer-crosssection-class.md#CrossSection::LastFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [NextFreeLabel](primer-crosssection-class.md#CrossSection::NextFreeLabel)(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*)
* [Pick](primer-crosssection-class.md#CrossSection::Pick)(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*)
* [RenumberAll](primer-crosssection-class.md#CrossSection::RenumberAll)(Model*[[Model](primer-model-class.md)]*, start*[integer]*)
* [RenumberFlagged](primer-crosssection-class.md#CrossSection::RenumberFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*)
* [Select](primer-crosssection-class.md#CrossSection::Select)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*)
* [SketchFlagged](primer-crosssection-class.md#CrossSection::SketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [Total](primer-crosssection-class.md#CrossSection::Total)(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*)
* [UnblankAll](primer-crosssection-class.md#CrossSection::UnblankAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnblankFlagged](primer-crosssection-class.md#CrossSection::UnblankFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)
* [UnflagAll](primer-crosssection-class.md#CrossSection::UnflagAll)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [UnsketchAll](primer-crosssection-class.md#CrossSection::UnsketchAll)(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*)
* [UnsketchFlagged](primer-crosssection-class.md#CrossSection::UnsketchFlagged)(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*)

## Member functions

* [AssociateComment](primer-crosssection-class.md#CrossSection::AssociateComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Autosize](primer-crosssection-class.md#CrossSection::Autosize)(options (optional)*[object]*)
* [Blank](primer-crosssection-class.md#CrossSection::Blank)()
* [Blanked](primer-crosssection-class.md#CrossSection::Blanked)()
* [Browse](primer-crosssection-class.md#CrossSection::Browse)(modal (optional)*[boolean]*)
* [ClearFlag](primer-crosssection-class.md#CrossSection::ClearFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Copy](primer-crosssection-class.md#CrossSection::Copy)(range (optional)*[boolean]*)
* [DetachComment](primer-crosssection-class.md#CrossSection::DetachComment)(Comment*[[Comment](primer-comment-class.md)]*)
* [Edit](primer-crosssection-class.md#CrossSection::Edit)(modal (optional)*[boolean]*)
* [ElemCut](primer-crosssection-class.md#CrossSection::ElemCut)(Shell label*[integer]*)
* [Error](primer-crosssection-class.md#CrossSection::Error)(message*[string]*, details (optional)*[string]*)
* [ExtractColour](primer-crosssection-class.md#CrossSection::ExtractColour)()
* [FlagCut](primer-crosssection-class.md#CrossSection::FlagCut)(Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Flagged](primer-crosssection-class.md#CrossSection::Flagged)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [GetComments](primer-crosssection-class.md#CrossSection::GetComments)()
* [GetParameter](primer-crosssection-class.md#CrossSection::GetParameter)(prop*[string]*)
* [Keyword](primer-crosssection-class.md#CrossSection::Keyword)()
* [KeywordCards](primer-crosssection-class.md#CrossSection::KeywordCards)()
* [Next](primer-crosssection-class.md#CrossSection::Next)()
* [PartCut](primer-crosssection-class.md#CrossSection::PartCut)(Part label*[integer]*, Flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Previous](primer-crosssection-class.md#CrossSection::Previous)()
* [Properties](primer-crosssection-class.md#CrossSection::Properties)()
* [SetFlag](primer-crosssection-class.md#CrossSection::SetFlag)(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)
* [Sketch](primer-crosssection-class.md#CrossSection::Sketch)(redraw (optional)*[boolean]*)
* [Unblank](primer-crosssection-class.md#CrossSection::Unblank)()
* [Unsketch](primer-crosssection-class.md#CrossSection::Unsketch)(redraw (optional)*[boolean]*)
* [ViewParameters](primer-crosssection-class.md#CrossSection::ViewParameters)()
* [Warning](primer-crosssection-class.md#CrossSection::Warning)(message*[string]*, details (optional)*[string]*)
* [Xrefs](primer-crosssection-class.md#CrossSection::Xrefs)()
* [toString](primer-crosssection-class.md#CrossSection::toString)()

## CrossSection constants

| **Name** | **Description** |
| --- | --- |
| CrossSection.PLANE | PLANE is \*DATABASE\_CROSS\_SECTION\_PLANE. |
| CrossSection.SET | SET is \*DATABASE\_CROSS\_SECTION\_SET. |

## CrossSection properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bsid | integer | [Beam set](primer-set-class.md) number. |
| colour | [Colour](primer-colour-class.md) | The colour of the cross section |
| csid | integer | Database cross section number (identical to label). |
| dsid | integer | [Discrete set](primer-set-class.md) number. |
| exists (read only) | logical | true if cross section exists, false if referred to but not defined. |
| heading | string | Database cross section heading. |
| hsid | integer | [Solid set](primer-set-class.md) number. |
| id | integer | [Rigid part](primer-part-class.md) or accelerometer or [coordinate system](primer-coordinatesystem-class.md) number. |
| idset | logical | true if \_ID option is set, false if not |
| include | integer | The [Include](primer-include-class.md) file number that the cross section is in. |
| itype | integer | Flag for local system type. |
| label | integer | Database cross section number. |
| lenl | real | Length of L edge. |
| lenm | real | Length of M edge. |
| model (read only) | integer | The [Model](primer-model-class.md) number that the cross section is in. |
| nsid | integer | [Node set](primer-set-class.md) number. |
| option | constant | The Database CrossSection option. Can be:<ul> <li><a href="primer-crosssection-class.md#CrossSection.PLANE">CrossSection.PLANE</a> or</li> <li><a href="primer-crosssection-class.md#CrossSection.SET">CrossSection.SET</a></li> </ul> |
| psid | integer | [Part set](primer-set-class.md) number. |
| radius | real | Radius. |
| ssid | integer | [Shell set](primer-set-class.md) number. |
| tsid | integer | [Thick shell set](primer-set-class.md) number. |
| xch | real/integer | Head X coord of N normal vector. If &lt;radius&gt; is negative &lt;xch&gt; is a node ID which, combined with &lt;xct&gt;, defines the normal vector of the cut plane. |
| xct | real/integer | Tail X coord of N normal vector. If &lt;radius&gt; is negative &lt;xct&gt; is a node ID whose coordinates define the centre of the circular cut plane. |
| xhev | real | Head X coord of L edge vector. |
| ych | real | Head Y coord of N normal vector. |
| yct | real | Tail Y coord of N normal vector. |
| yhev | real | Head Y coord of L edge vector. |
| zch | real | Head Z coord of N normal vector. |
| zct | real | Tail Z coord of N normal vector. |
| zhev | real | Head Z coord of L edge vector. |

| Detailed Description<br>The CrossSection class allows you to create, modify, edit and manipulate database cross section cards.<br>See the documentation below for more details. |
| --- |

| Constructor
new CrossSection(Model*[[Model](primer-model-class.md)]*, option*[constant]*, nsid*[integer]*, hsid*[integer]*, bsid*[integer]*, ssid*[integer]*, tsid*[integer]*, dsid*[integer]*, id (optional)*[integer]*, itype (optional)*[integer]*, csid (optional)*[integer]*, heading (optional)*[string]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [CrossSection](primer-crosssection-class.md) object for \*DATABASE\_CROSS\_SECTION\_SET. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that database cross section will be created in

* option (constant)
 
Database cross section type. Must be CrossSection.SET

* nsid (integer)
 
Node set number.

* hsid (integer)
 
Solid set number.

* bsid (integer)
 
Beam set number.

* ssid (integer)
 
Shell set number.

* tsid (integer)
 
Thick shell set number.

* dsid (integer)
 
Discrete set number.

* id (optional) (integer)
 
[Rigid part](primer-part-class.md) or accelerometer or [coordinate system](primer-coordinatesystem-class.md) number.

* itype (optional) (integer)
 
Flag for local system type.

* csid (optional) (integer)
 
Database cross\_section number.

* heading (optional) (string)
 
Database cross\_section title.

| Returns
<br>[CrossSection](primer-crosssection-class.md) object<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To create a new Database cross section 500 called "test cross\_section" of type \_SET in model m with nsid, hsid, bsid, ssid, tsid, dsid, id, itype set to 11, 12, 13, 14, 15, 16, 17, 2 respectively:<br>
```
var c = new CrossSection(m, CrossSection.SET, 11, 12, 13, 14, 15, 16, 17, 2, 500, "test cross_section");
```
 |
| --- |

| new CrossSection(Model*[[Model](primer-model-class.md)]*, option*[constant]*, psid*[integer]*, xct*[real]*, yct*[real]*, zct*[real]*, xch*[real]*, ych*[real]*, zch*[real]*, xhev*[real]*, yhev*[real]*, zhev*[real]*, lenl (optional)*[real]*, lenm (optional)*[real]*, id (optional)*[integer]*, itype (optional)*[integer]*, csid (optional)*[integer]*, heading (optional)*[string]*, autosize (optional)*[boolean]*, autosize\_pct (optional)*[real]*) [deprecated]
<br>This function is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>
Description<br>Create a new [CrossSection](primer-crosssection-class.md) object for \*DATABASE\_CROSS\_SECTION\_PLANE. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that database cross section will be created in

* option (constant)
 
Database cross section type. Must be CrossSection.PLANE

* psid (integer)
 
Part set number.

* xct (real)
 
X coordinate of tail of normal vector.

* yct (real)
 
Y coordinate of tail of normal vector.

* zct (real)
 
Z coordinate of tail of normal vector.

* xch (real)
 
X coordinate of head of normal vector.

* ych (real)
 
Y coordinate of head of normal vector.

* zch (real)
 
Z coordinate of head of normal vector.

* xhev (real)
 
X coordinate of head of edge vector.

* yhev (real)
 
Y coordinate of head of edge vector.

* zhev (real)
 
Z coordinate of head of edge vector.

* lenl (optional) (real)
 
Length in l direction.

* lenm (optional) (real)
 
Length in m direction.

* id (optional) (integer)
 
[Rigid part](primer-part-class.md) or accelerometer or [coordinate system](primer-coordinatesystem-class.md) number.

* itype (optional) (integer)
 
Flag for local system type.

* csid (optional) (integer)
 
Database cross\_section number.

* heading (optional) (string)
 
Database cross\_section title.

* autosize (optional) (boolean)
 
true if the Database cross\_section is to be autosized.

* autosize\_pct (optional) (real)
 
Additional post-autosize scaling percentage.

| Returns
<br>[CrossSection](primer-crosssection-class.md) object<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To create a new Database cross section 500 called "test cross\_section" of type \_PLANE in model m with part set ID 100, normal tail (10, 20, 30), normal head (20, 20, 30), head of edge vector (10, 30, 30) and edge lengths 50 and 100:<br>
```
var c = new CrossSection(m, CrossSection.PLANE, 100, 10, 20, 30, 20, 20, 30, 10, 30, 30, 50, 100, 0, 0, 500, "test cross_section");
```
 |
| --- |

| new CrossSection(Model*[[Model](primer-model-class.md)]*, option*[constant]*, settings*[object]*)

Description<br>Create a new [CrossSection](primer-crosssection-class.md) object. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that database cross section will be created in

* option (constant)
 
Database cross section type. Must be CrossSection.SET or CrossSection.PLANE

* settings (object)

Options specifying various properties used to create the keyword. If optional values are not specified then their default values will be used. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| autosize (optional) (PLANE only) | boolean | true if the Database cross\_section is to be autosized. |
| autosize\_pct (optional) (PLANE only) | real | Additional post-autosize scaling percentage. (default: same as value specified by the preference primer\*cross\_section\_auto\_size\_percent) |
| bsid (SET only) | integer | Beam set number. |
| csid (optional) | integer | Database cross\_section number. |
| dsid (SET only) | integer | Discrete set number. |
| heading (optional) | string | Database cross\_section title. |
| hsid (SET only) | integer | Solid set number. |
| id (optional) | integer | [Rigid part](primer-part-class.md) or accelerometer or [coordinate system](primer-coordinatesystem-class.md) number. |
| itype (optional) | integer | Flag for local system type. |
| lenl (optional) (PLANE only) | real | Length in l direction. |
| lenm (optional) (PLANE only) | real | Length in m direction. |
| nsid (SET only) | integer | Node set number. |
| psid (PLANE only) | integer | Part set number. |
| ssid (SET only) | integer | Shell set number. |
| tsid (SET only) | integer | Thick shell set number. |
| vis\_only (optional) (PLANE only) | real | true if autosizing should ignore non-visible elements, false otherwise. (default: true) |
| xch (PLANE only) | real | X coordinate of head of normal vector. |
| xct (PLANE only) | real | X coordinate of tail of normal vector. |
| xhev (PLANE only) | real | X coordinate of head of edge vector. |
| ych (PLANE only) | real | Y coordinate of head of normal vector. |
| yct (PLANE only) | real | Y coordinate of tail of normal vector. |
| yhev (PLANE only) | real | Y coordinate of head of edge vector. |
| zch (PLANE only) | real | Z coordinate of head of normal vector. |
| zct (PLANE only) | real | Z coordinate of tail of normal vector. |
| zhev (PLANE only) | real | Z coordinate of head of edge vector. |

| Returns
<br>[CrossSection](primer-crosssection-class.md) object<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To create a new Database cross section 500 called "test cross\_section" of type \_SET in model m with nsid, hsid, bsid, ssid, tsid, dsid, id, itype set to 11, 12, 13, 14, 15, 16, 17, 2 respectively:<br>
```
var settings = { nsid: 11, hsid: 12, bsid: 13, ssid: 14, tsid: 15, dsid: 16, id: 17, itype: 2, heading: "test_cross_section" };
var c = new CrossSection(m, CrossSection.SET, settings);
```
<br>To create a new Database cross section 500 called "test cross\_section" of type \_PLANE in model m with part set ID 100, normal tail (10, 20, 30), normal head (20, 20, 30), head of edge vector (10, 30, 30) and edge lengths 50 and 100:<br>
```
var settings = { psid: 100, id: 500, heading: "test cross_section",
                 xct: 10, yct: 20, zct: 30, 
                 xch: 20, ych: 20, zch: 30, 
                 xhev: 10, yhev: 30, zhev: 30, 
                 lenl: 50, lenm: 100 };

var c = new CrossSection(m, CrossSection.PLANE, settings);
```
 |
| --- |

| Details of functions 
AssociateComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Associates a comment with a cross section. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be attached to the cross section

| Returns
<br>No return value |
| --- |

| Example
<br>To associate comment c to the cross section c:<br>
```
c.AssociateComment(c);
```
 |
| --- |

* * *

| Autosize(options (optional)*[object]*)

Description<br>Autosizes a \_PLANE cross section such that it cuts through all elements in model/psid along that plane. |
| --- |

#### Arguments

* options (optional) (object)

Object containing additional options 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| percentage (optional) | real | Additional percentage that the autosized cross section will be scaled by. (default: same as value specified by the preference primer\*cross\_section\_auto\_size\_percent) |
| vis\_only (optional) | boolean | If true, autosizing will ignore non-visible cut elements, false otherwise. (default: true) |

| Returns
<br>No return value |
| --- |

| Example
<br>To autosize a cross section:<br>
```
var xsec = CrossSection.GetFromID(model, id);

if(xsec.option == CrossSection.PLANE) xsec.Autosize();
```
<br>To autosize a cross section, scaled by an additional 5 percent, and ignoring element visiblity:<br><br>
```
var xsec = CrossSection.GetFromID(model, id);

var options = { percentage: 5.0, vis_only: false };
if(xsec.option == CrossSection.PLANE) xsec.Autosize(options);
```
 |
| --- |

* * *

| Blank()

Description<br>Blanks the cross section |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To blank cross section c:<br>
```
c.Blank();
```
 |
| --- |

* * *

| BlankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all cross sections will be blanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the cross sections in model m:<br>
```
CrossSection.BlankAll(m);
```
 |
| --- |

* * *

| BlankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Blanks all of the flagged cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged cross sections will be blanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the cross sections that you want to blank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To blank all of the cross sections in model m flagged with f:<br>
```
CrossSection.BlankFlagged(m, f);
```
 |
| --- |

* * *

| Blanked()

Description<br>Checks if the cross section is blanked or not. |
| --- |

#### Arguments

No arguments

| Returns
<br>true if blanked, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if cross section c is blanked:<br>
```
if (c.Blanked() ) do_something...
```
 |
| --- |

* * *

| Browse(modal (optional)*[boolean]*)

Description<br>Starts an edit panel in Browse mode. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Browse cross section c:<br>
```
c.Browse();
```
 |
| --- |

* * *

| ClearFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Clears a flag on the cross section. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to clear on the cross section

| Returns
<br>No return value |
| --- |

| Example
<br>To clear flag f for cross section c:<br>
```
c.ClearFlag(f);
```
 |
| --- |

* * *

| Copy(range (optional)*[boolean]*)

Description<br>Copies the cross section. The target include of the copied cross section can be set using [Options.copy_target_include](primer-options-class.md#copy_target_include). |
| --- |

#### Arguments

* range (optional) (boolean)
 
If you want to keep the copied item in the range specified for the current include. Default value is false. To set current include, use [Include.MakeCurrentLayer()](primer-include-class.md#Include::MakeCurrentLayer).

| Returns
<br>CrossSection object<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To copy cross section c into cross section z:<br>
```
var z = c.Copy();
```
 |
| --- |

* * *

| Create(Model*[[Model](primer-model-class.md)]*, modal (optional)*[boolean]*) [static]
Description<br>Starts an interactive editing panel to create a cross section |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the cross section will be created in.

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>CrossSection object (or null if not made).<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To start creating a cross section in model m:<br>
```
var c = CrossSection.Create(m);
```
 |
| --- |

* * *

| CreateAlongFeatureLine(Model*[[Model](primer-model-class.md)]*, nid1*[integer]*, options*[object]*) [static]
Description<br>Creates a set of cross sections along a feature line and returns them as an array of CrossSection objects. Use [Options](primer-options-class.md).edge\_angle to control the break angle for the feature line search within this function. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the cross\_section will be created in

* nid1 (integer)
 
ID of feature line starting node. The first cross section will be created at this Node's location.

* options (object)

Additional arguments for controlling how the cross sections are created. 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| autosize (optional) | boolean | true if cross sections are to be autosized. lenl and lenm will be ignored if set. |
| autosize\_pct (optional) | real | If autosize is true, cross sections will be scaled by this additional percentage after being autosized. (default: same as value specified by the preference primer\*cross\_section\_auto\_size\_percent) |
| direction (optional) | integer | Direction along feature line to create cross sections. +1 for positive direction (default), -1 for negative direction. Ignored for two node method (nid2 set). |
| lenl | real | Side length of plane along L vector - non-circular cross sections only. |
| lenm | real | Side length of plane along M vector - non-circular cross sections only. |
| nid2 (optional) | integer | ID of feature line ending node, can be the same as nid1. If provided, cross sections will be created between the nodes nid1 and nid2 along the shortest feature line path. |
| num | integer | Number of cross sections to be created. Required for single node method. For two node method either num or pitch must be specified. For two node method, the last cross section will be created at the location of node nid2 (provided nid1 != nid2). |
| pitch | real | Separation between adjacent cross sections. Required for single node method. For two node method either num or pitch must be specified. |
| psid (optional) | integer | ID of part set. |
| radius (optional) | real | Radius of circular cross section. |
| vis\_only (optional) | boolean | If true, and autosize is true, autosizing will ignore non-visible cut elements, false otherwise (default: true). |

| Returns
<br>Array of [CrossSection](primer-crosssection-class.md) objects (or null if not made). Depending on the geometry of the model and the node provided for nid1, the array may contain less CrossSection objects than requested for the single node method.<br>
Return type
<br>Array |
| --- |

| Example
<br>To create 10 autosized cross sections, separated by 15.0, in the positive direction, starting at Node 1:<br>
```
var options = { num: 10, pitch: 15.0, direction: 1, autosize: true };
      var xsec_array = CrossSection.CreateAlongFeatureLine(model, 1, options);
```
<br>To create 5 circular cross sections, of radius 25.0, around an entire perimeter edge (starting at Node 2):<br>
```
var options = { num: 5, nid2: 2, radius: 25.0 };
      var xsec_array = CrossSection.CreateAlongFeatureLine(model, 2, options);
```
<br>To create a set of cross sections separated by 10.0, of size 50.0 x 50.0, between nodes 3 and 4 (starting at Node 3):<br>
```
var options = { pitch: 10.0, lenm: 50.0, lenl: 50.0, nid2: 4 };
      var xsec_array = CrossSection.CreateAlongFeatureLine(model, 3, options);
```
 |
| --- |

* * *

| DetachComment(Comment*[[Comment](primer-comment-class.md)]*)

Description<br>Detaches a comment from a cross section. |
| --- |

#### Arguments

* Comment ([Comment](primer-comment-class.md))
 
[Comment](primer-comment-class.md) that will be detached from the cross section

| Returns
<br>No return value |
| --- |

| Example
<br>To detach comment c from the cross section c:<br>
```
c.DetachComment(c);
```
 |
| --- |

* * *

| Edit(modal (optional)*[boolean]*)

Description<br>Starts an interactive editing panel. |
| --- |

#### Arguments

* modal (optional) (boolean)
 
If this window is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the window will be modal.

| Returns
<br>no return value |
| --- |

| Example
<br>To Edit cross section c:<br>
```
c.Edit();
```
 |
| --- |

* * *

| ElemCut(Shell label*[integer]*)

Description<br>Returns coordinates of the intersections between a shell and a database cross section. Note, ElemCut on the Shell class may be quicker |
| --- |

#### Arguments

* Shell label (integer)
 
The label of the shell.

| Returns
<br>An array containing the x1,y1,z1,x2,y2,z2 coordinates of the cut line, or NULL if it does not cut. Note this function does not check that the shell is in the cross section definition (part set)<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the cut line coordinates between database cross section x and shell 300:<br>
```
var data = x.ElemCut(300)
```
 |
| --- |

* * *

| Error(message*[string]*, details (optional)*[string]*)

Description<br>Adds an error for cross section. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add an error message "My custom error" for cross section c:<br>
```
c.Error("My custom error");
```
 |
| --- |

* * *

| ExtractColour()

Description<br>Extracts the **actual** colour used for cross section.<br> By default in PRIMER many entities such as elements get their colour automatically from the part that they are in. PRIMER cycles through 13 default colours based on the label of the entity. In this case the cross section [colour](primer-crosssection-class.md#colour) property will return the value [Colour.PART](primer-colour-class.md#Colour.PART) instead of the actual colour. This method will return the actual colour which is used for drawing the cross section. |
| --- |

#### Arguments

No arguments

| Returns
<br>colour value (integer)<br>
Return type
<br>Number |
| --- |

| Example
<br>To return the colour used for drawing cross section c:<br>
```
var colour = c.ExtractColour();
```
 |
| --- |

* * *

| First(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the first cross section in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first cross section in

| Returns
<br>CrossSection object (or null if there are no cross sections in the model).<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To get the first cross section in model m:<br>
```
var c = CrossSection.First(m);
```
 |
| --- |

* * *

| FirstFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the first free cross section label in the model. Also see [CrossSection.LastFreeLabel()](primer-crosssection-class.md#CrossSection::LastFreeLabel), [CrossSection.NextFreeLabel()](primer-crosssection-class.md#CrossSection::NextFreeLabel) and [Model.FirstFreeItemLabel()](primer-model-class.md#Model::FirstFreeItemLabel). |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get first free cross section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *First free in layer* in editing panels). If omitted the whole model will be used (Equivalent to *First free* in editing panels).

| Returns
<br>CrossSection label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the first free cross section label in model m:<br>
```
var label = CrossSection.FirstFreeLabel(m);
```
 |
| --- |

* * *

| FlagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Flags all of the cross sections in the model with a defined flag. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all cross sections will be flagged in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the cross sections

| Returns
<br>No return value |
| --- |

| Example
<br>To flag all of the cross sections with flag f in model m:<br>
```
CrossSection.FlagAll(m, f);
```
 |
| --- |

* * *

| FlagCut(Flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Flags every element (solid,shell,tshell,beam) cut by the cross section. Note this function does not check that the element is in the cross section definition (part set) |
| --- |

#### Arguments

* Flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag bit.

| Returns
<br>Boolean.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To find elements cut by database cross section x:<br>
```
x.FlagCut(flag)
```
 |
| --- |

* * *

| Flagged(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Checks if the cross section is flagged or not. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to test on the cross section

| Returns
<br>true if flagged, false if not.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if cross section c has flag f set on it:<br>
```
if (c.Flagged(f) ) do_something...
```
 |
| --- |

* * *

| ForEach(Model*[[Model](primer-model-class.md)]*, func*[function]*, extra (optional)*[any]*) [static]
Description<br>Calls a function for each cross section in the model.<br> **Note that ForEach has been designed to make looping over cross sections as fast as possible and so has some limitations. Firstly, a single temporary CrossSection object is created and on each function call it is updated with the current cross section data. This means that you should not try to store the CrossSection object for later use (e.g. in an array) as it is temporary. Secondly, you cannot create new cross sections inside a ForEach loop.** |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all cross sections are in

* func (function)
 
Function to call for each cross section

* extra (optional) (any)
 
An optional extra object/array/string etc that will appended to arguments when calling the function

| Returns
<br>No return value |
| --- |

| Example
<br>To call function test for all of the cross sections in model m:<br>
```
CrossSection.ForEach(m, test);
function test(c)
{
// c is CrossSection object
}
```
<br><br>To call function test for all of the cross sections in model m with optional object:<br><br>
```

var data = { x:0, y:0 };
CrossSection.ForEach(m, test, data);
function test(c, extra)
{
// c is CrossSection object
// extra is data
}
```
 |
| --- |

* * *

| GetAll(Model*[[Model](primer-model-class.md)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of CrossSection objects or properties for all of the cross sections in a model in PRIMER. If the optional property argument is not given then an array of CrossSection objects is returned. If the property argument is given, that property value for each cross section is returned in the array instead of a CrossSection object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get cross sections from

* property (optional) (string)
 
Name for property to get for all cross sections in the model

| Returns
<br>Array of CrossSection objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of CrossSection objects for all of the cross sections in model m:<br>
```
var a = CrossSection.GetAll(m);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for each cross section in model m:<br>
```
var a = CrossSection.GetAll(m, 'foo');
```
 |
| --- |

* * *

| GetComments()

Description<br>Extracts the comments associated to a cross section. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Comment objects (or null if there are no comments associated to the node).<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the array of comments associated to the cross section c:<br>
```
var comm_array = c.GetComments();
```
 |
| --- |

* * *

| GetFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, property (optional)*[string]*) [static]
Description<br>Returns an array of CrossSection objects for all of the flagged cross sections in a model in PRIMER If the optional property argument is not given then an array of CrossSection objects is returned. If the property argument is given, then that property value for each cross section is returned in the array instead of a CrossSection object |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get cross sections from

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the cross sections that you want to retrieve

* property (optional) (string)
 
Name for property to get for all flagged cross sections in the model

| Returns
<br>Array of CrossSection objects or properties<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of CrossSection objects for all of the cross sections in model m flagged with f:<br>
```
var c = CrossSection.GetFlagged(m, f);
```
<br>To return an array containing the value of property 'foo' (for example 'x' for a node) for all of the cross sections in model m flagged with f:<br>
```
var a = CrossSection.GetFlagged(m, f, 'foo');
```
 |
| --- |

* * *

| GetFromID(Model*[[Model](primer-model-class.md)]*, number*[integer]*) [static]
Description<br>Returns the CrossSection object for a cross section ID. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to find the cross section in

* number (integer)
 
number of the cross section you want the CrossSection object for

| Returns
<br>CrossSection object (or null if cross section does not exist).<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To get the CrossSection object for cross section 100 in model m<br>
```
var c = CrossSection.GetFromID(m, 100);
```
 |
| --- |

* * *

| GetParameter(prop*[string]*)

Description<br>Checks if a CrossSection property is a parameter or not. Note that object properties that are parameters are normally returned as the integer or float parameter values as that is virtually always what the user would want. For this function to work the JavaScript interpreter must use the parameter name instead of the value. This can be done by setting the [Options.property_parameter_names](primer-options-class.md#property_parameter_names) option to true before calling the function and then resetting it to false afterwards.. This behaviour can also temporarily be switched by using the [CrossSection.ViewParameters()](primer-crosssection-class.md#CrossSection::ViewParameters) method and 'method chaining' (see the examples below). |
| --- |

#### Arguments

* prop (string)
 
cross section property to get parameter for

| Returns
<br>[Parameter](primer-parameter-class.md) object if property is a parameter, null if not.<br>
Return type
<br>Parameter |
| --- |

| Example
<br>To check if CrossSection property c.example is a parameter:<br>
```
Options.property_parameter_names = true;
if (c.GetParameter(c.example) ) do_something...
Options.property_parameter_names = false;
```
<br>To check if CrossSection property c.example is a parameter by using the GetParameter method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Keyword()

Description<br>Returns the keyword for this cross\_section (\*DATABASE\_CROSS\_SECTION). **Note that a carriage return is not added**. See also [CrossSection.KeywordCards()](primer-crosssection-class.md#CrossSection::KeywordCards) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the keyword.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the keyword for cross\_section c:<br>
```
var key = c.Keyword();
```
 |
| --- |

* * *

| KeywordCards()

Description<br>Returns the keyword cards for the cross\_section. **Note that a carriage return is not added**. See also [CrossSection.Keyword()](primer-crosssection-class.md#CrossSection::Keyword) |
| --- |

#### Arguments

No arguments

| Returns
<br>string containing the cards.<br>
Return type
<br>String |
| --- |

| Example
<br>To get the cards for cross\_section c:<br>
```
var cards = c.KeywordCards();
```
 |
| --- |

* * *

| Last(Model*[[Model](primer-model-class.md)]*) [static]
Description<br>Returns the last cross section in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last cross section in

| Returns
<br>CrossSection object (or null if there are no cross sections in the model).<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To get the last cross section in model m:<br>
```
var c = CrossSection.Last(m);
```
 |
| --- |

* * *

| LastFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the last free cross section label in the model. Also see [CrossSection.FirstFreeLabel()](primer-crosssection-class.md#CrossSection::FirstFreeLabel), [CrossSection.NextFreeLabel()](primer-crosssection-class.md#CrossSection::NextFreeLabel) and see [Model.LastFreeItemLabel()](primer-model-class.md#Model::LastFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get last free cross section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest free in layer* in editing panels). If omitted the whole model will be used.

| Returns
<br>CrossSection label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the last free cross section label in model m:<br>
```
var label = CrossSection.LastFreeLabel(m);
```
 |
| --- |

* * *

| Next()

Description<br>Returns the next cross section in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>CrossSection object (or null if there are no more cross sections in the model).<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To get the cross section in model m after cross section c:<br>
```
var c = c.Next();
```
 |
| --- |

* * *

| NextFreeLabel(Model*[[Model](primer-model-class.md)]*, layer (optional)*[[Include](primer-include-class.md) number]*) [static]
Description<br>Returns the next free (highest+1) cross section label in the model. Also see [CrossSection.FirstFreeLabel()](primer-crosssection-class.md#CrossSection::FirstFreeLabel), [CrossSection.LastFreeLabel()](primer-crosssection-class.md#CrossSection::LastFreeLabel) and [Model.NextFreeItemLabel()](primer-model-class.md#Model::NextFreeItemLabel) |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get next free cross section label in

* layer (optional) ([Include](primer-include-class.md) number)
 
[Include](primer-include-class.md) file (0 for the main file) to search for labels in (Equivalent to *Highest+1 in layer* in editing panels). If omitted the whole model will be used (Equivalent to *Highest+1* in editing panels).

| Returns
<br>CrossSection label.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the next free cross section label in model m:<br>
```
var label = CrossSection.NextFreeLabel(m);
```
 |
| --- |

* * *

| PartCut(Part label*[integer]*, Flag (optional)*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Returns true if cross section is cutting the part, false otherwise. If option flag is active, will flag every element of the part cut by the cross section. Note this function does not check that the part is in the cross section definition (part set) |
| --- |

#### Arguments

* Part label (integer)
 
The label of the part.

* Flag (optional) ([Flag](primer-global-class.md#global::AllocateFlag))
 
Optional Flag to flag the element which are cut by the cross section.

| Returns
<br>Boolean.<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To know if a database cross section x cuts part 300:<br>
```
x.PartCut(300)
```
 |
| --- |

* * *

| Pick(prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*, button text (optional)*[string]*) [static]
Description<br>Allows the user to pick a cross section. |
| --- |

#### Arguments

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only cross sections from that model can be picked. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only cross sections that are flagged with *limit* can be selected. If omitted, or null, any cross sections from any model can be selected. from any model.

* modal (optional) (boolean)
 
If picking is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the pick will be modal.

* button text (optional) (string)
 
By default the window with the prompt will have a button labelled 'Cancel' which if pressed will cancel the pick and return null. If you want to change the text on the button use this argument. If omitted 'Cancel' will be used.

| Returns
<br>[CrossSection](primer-crosssection-class.md) object (or null if not picked)<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To pick a cross section from model m giving the prompt 'Pick cross section from screen':<br>
```
var c = CrossSection.Pick('Pick cross section from screen', m);
```
 |
| --- |

* * *

| Previous()

Description<br>Returns the previous cross section in the model. |
| --- |

#### Arguments

No arguments

| Returns
<br>CrossSection object (or null if there are no more cross sections in the model).<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To get the cross section in model m before cross section c:<br>
```
var c = c.Previous();
```
 |
| --- |

* * *

| Properties()

Description<br>Returns an object which describe various cross section properties |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| area | real | Area of material sliced by the cut section |
| first\_yield\_axial | real | First yield axial force |
| first\_yield\_mxx | real | First yield bending moment (Mxx) |
| first\_yield\_myy | real | First yield bending moment (Myy) |
| fully\_plastic\_mxx | real | Fully plastic bending moment (Mxx) |
| fully\_plastic\_myy | real | Fully plastic bending moment (Myy) |
| fully\_plastic\_xf | real | X component of equal force axis |
| fully\_plastic\_xf\_g | real | X component of equal force axis calculated in global coordinates |
| fully\_plastic\_yf | real | Fully plastic axial force |
| fully\_plastic\_yf\_g | real | Y component of equal force axis calculated in global coordinates |
| fully\_plastic\_zf\_g | real | Z component of equal force axis calculated in global coordinates |
| iuu | real | Iuu principal second moments (UU - major) |
| ivv | real | Ivv principal second moments (VV - minor) |
| ixx | real | Ixx component of second moment of area |
| ixy | real | Ixy component of second moment of area |
| iyy | real | Iyy component of second moment of area |
| origin\_x | real | X component of section origin |
| origin\_y | real | Y component of section origin |
| origin\_z | real | Z component of section origin |
| theta | real | Angle between Ixx and Iuu |
| x\_comp\_axis\_x | real | X component of X-axis vector |
| x\_comp\_axis\_y | real | X component of Y-axis vector |
| x\_comp\_axis\_z | real | X component of Z-axis vector |
| xc | real | X component of centroid calculated from the first moment of area |
| xc\_global | real | X component of centre of gravity calculated in global coordinates |
| xe | real | X component of equal area axis |
| xe\_global | real | X component of equal area axis calculated in global coordinates |
| y\_comp\_axis\_x | real | Y component of x-axis vector |
| y\_comp\_axis\_y | real | Y component of Y-axis vector |
| y\_comp\_axis\_z | real | Y component of Z-axis vector |
| yc | real | Y component of centroid calculated from the first moment of area |
| yc\_global | real | Y component of centre of gravity calculated in global coordinates |
| ye | real | Y component of equal area axis |
| ye\_global | real | Y component of equal area axis calculated in global coordinates |
| z\_comp\_axis\_x | real | Z component of X-axis vector |
| z\_comp\_axis\_y | real | Z component of Y-axis vector |
| z\_comp\_axis\_z | real | Z component of Z-axis vector |
| zc\_global | real | Z component of centre of gravity calculated in global coordinates |
| ze\_global | real | Z component of equal area axis calculated in global coordinates |
| zxx | real | Plastic moduli Zxx |
| zyy | real | Plastic moduli Zyy |

#### Return type

object

| Example
<br>To get the cross section properties for section c:<br>
```
var properties = c.Properties();
    var originX  = properties.origin_x;	
    var originY  = properties.origin_y;
    var Xc = properties.xc;
    var Ixx = properties.ixx;
    var Iuu = properties.iuu;
    var Theta = properties.theta;
    var plastic_Mxx = properties.fully_plastic_mxx;

```
 |
| --- |

* * *

| RenumberAll(Model*[[Model](primer-model-class.md)]*, start*[integer]*) [static]
Description<br>Renumbers all of the cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all cross sections will be renumbered in

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the cross sections in model m, from 1000000:<br>
```
CrossSection.RenumberAll(m, 1000000);
```
 |
| --- |

* * *

| RenumberFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, start*[integer]*) [static]
Description<br>Renumbers all of the flagged cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged cross sections will be renumbered in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the cross sections that you want to renumber

* start (integer)
 
Start point for renumbering

| Returns
<br>No return value |
| --- |

| Example
<br>To renumber all of the cross sections in model m flagged with f, from 1000000:<br>
```
CrossSection.RenumberFlagged(m, f, 1000000);
```
 |
| --- |

* * *

| Select(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, prompt*[string]*, limit (optional)*[[Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag)]*, modal (optional)*[boolean]*) [static]
Description<br>Allows the user to select cross sections using standard PRIMER object menus. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to use when selecting cross sections

* prompt (string)
 
Text to display as a prompt to the user

* limit (optional) ([Model](primer-model-class.md) or [Flag](primer-global-class.md#global::AllocateFlag))
 
If the argument is a [Model](primer-model-class.md) then only cross sections from that model can be selected. If the argument is a [Flag](primer-global-class.md#global::AllocateFlag) then only cross sections that are flagged with *limit* can be selected (*limit* should be different to *flag*). If omitted, or null, any cross sections can be selected. from any model.

* modal (optional) (boolean)
 
If selection is modal (blocks the user from doing anything else in PRIMER until this window is dismissed). If omitted the selection will be modal.

| Returns
<br>Number of cross sections selected or null if menu cancelled<br>
Return type
<br>Number |
| --- |

| Example
<br>To select cross sections from model m, flagging those selected with flag f, giving the prompt 'Select cross sections':<br>
```
CrossSection.Select(f, 'Select cross sections', m);
```
<br><br>To select cross sections, flagging those selected with flag f but limiting selection to cross sections flagged with flag l, giving the prompt 'Select cross sections':<br>
```
CrossSection.Select(f, 'Select cross sections', l);
```
 |
| --- |

* * *

| SetFlag(flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*)

Description<br>Sets a flag on the cross section. |
| --- |

#### Arguments

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to set on the cross section

| Returns
<br>No return value |
| --- |

| Example
<br>To set flag f for cross section c:<br>
```
c.SetFlag(f);
```
 |
| --- |

* * *

| Sketch(redraw (optional)*[boolean]*)

Description<br>Sketches the cross section. The cross section will be sketched until you either call [CrossSection.Unsketch()](primer-crosssection-class.md#CrossSection::Unsketch), [CrossSection.UnsketchAll()](primer-crosssection-class.md#CrossSection::UnsketchAll), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the cross section is sketched. If omitted redraw is true. If you want to sketch several cross sections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch cross section c:<br>
```
c.Sketch();
```
 |
| --- |

* * *

| SketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Sketches all of the flagged cross sections in the model. The cross sections will be sketched until you either call [CrossSection.Unsketch()](primer-crosssection-class.md#CrossSection::Unsketch), [CrossSection.UnsketchFlagged()](primer-crosssection-class.md#CrossSection::UnsketchFlagged), [Model.UnsketchAll()](primer-model-class.md#Model::UnsketchAll), or delete the model |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all the flagged cross sections will be sketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the cross sections that you want to sketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the cross sections are sketched. If omitted redraw is true. If you want to sketch flagged cross sections several times and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To sketch all cross sections flagged with flag in model m:<br>
```
CrossSection.SketchFlagged(m, flag);
```
 |
| --- |

* * *

| Total(Model*[[Model](primer-model-class.md)]*, exists (optional)*[boolean]*) [static]
Description<br>Returns the total number of cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) to get total for

* exists (optional) (boolean)
 
true if only existing cross sections should be counted. If false or omitted
referenced but undefined cross sections will also be included in the total.

| Returns
<br>number of cross sections<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the total number of cross sections in model m:<br>
```
var total = CrossSection.Total(m);
```
 |
| --- |

* * *

| Unblank()

Description<br>Unblanks the cross section |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank cross section c:<br>
```
c.Unblank();
```
 |
| --- |

* * *

| UnblankAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all cross sections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the cross sections in model m:<br>
```
CrossSection.UnblankAll(m);
```
 |
| --- |

* * *

| UnblankFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unblanks all of the flagged cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the flagged cross sections will be unblanked in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the cross sections that you want to unblank

* redraw (optional) (boolean)
 
If model should be redrawn or not. If omitted redraw is false. If you want to do several (un)blanks and only redraw after the last one then use false for all redraws apart from the last one. Alternatively you can redraw using [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unblank all of the cross sections in model m flagged with f:<br>
```
CrossSection.UnblankFlagged(m, f);
```
 |
| --- |

* * *

| UnflagAll(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*) [static]
Description<br>Unsets a defined flag on all of the cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that the defined flag for all cross sections will be unset in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag to unset on the cross sections

| Returns
<br>No return value |
| --- |

| Example
<br>To unset the flag f on all the cross sections in model m:<br>
```
CrossSection.UnflagAll(m, f);
```
 |
| --- |

* * *

| Unsketch(redraw (optional)*[boolean]*)

Description<br>Unsketches the cross section. |
| --- |

#### Arguments

* redraw (optional) (boolean)
 
If model should be redrawn or not after the cross section is unsketched. If omitted redraw is true. If you want to unsketch several cross sections and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch cross section c:<br>
```
c.Unsketch();
```
 |
| --- |

* * *

| UnsketchAll(Model*[[Model](primer-model-class.md)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all cross sections. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all cross sections will be unblanked in

* redraw (optional) (boolean)
 
If model should be redrawn or not after the cross sections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all cross sections in model m:<br>
```
CrossSection.UnsketchAll(m);
```
 |
| --- |

* * *

| UnsketchFlagged(Model*[[Model](primer-model-class.md)]*, flag*[[Flag](primer-global-class.md#global::AllocateFlag)]*, redraw (optional)*[boolean]*) [static]
Description<br>Unsketches all flagged cross sections in the model. |
| --- |

#### Arguments

* Model ([Model](primer-model-class.md))
 
[Model](primer-model-class.md) that all cross sections will be unsketched in

* flag ([Flag](primer-global-class.md#global::AllocateFlag))
 
Flag set on the cross sections that you want to unsketch

* redraw (optional) (boolean)
 
If model should be redrawn or not after the cross sections are unsketched. If omitted redraw is true. If you want to unsketch several things and only redraw after the last one then use false for redraw and call [View.Redraw()](primer-view-class.md#View::Redraw).

| Returns
<br>No return value |
| --- |

| Example
<br>To unsketch all cross sections flagged with flag in model m:<br>
```
CrossSection.UnsketchAll(m, flag);
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
<br>[CrossSection](primer-crosssection-class.md) object.<br>
Return type
<br>CrossSection |
| --- |

| Example
<br>To check if CrossSection property c.example is a parameter by using the [CrossSection.GetParameter()](primer-crosssection-class.md#CrossSection::GetParameter) method:<br>
```
if (c.ViewParameters().GetParameter(c.example) ) do_something...
```
 |
| --- |

* * *

| Warning(message*[string]*, details (optional)*[string]*)

Description<br>Adds a warning for cross section. For more details on checking see the [Check](primer-check-class.md) class. |
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
<br>To add a warning message "My custom warning" for cross section c:<br>
```
c.Warning("My custom warning");
```
 |
| --- |

* * *

| Xrefs()

Description<br>Returns the cross references for this cross section. |
| --- |

#### Arguments

No arguments

| Returns
<br>[Xrefs](primer-xrefs-class.md) object.<br>
Return type
<br>Xrefs |
| --- |

| Example
<br>To get the cross references for cross section c:<br>
```
var xrefs = c.Xrefs();
```
 |
| --- |

* * *

| toString()

Description<br>Creates a string containing the cross\_section data in keyword format. Note that this contains the keyword header and the keyword cards. See also [CrossSection.Keyword()](primer-crosssection-class.md#CrossSection::Keyword) and [CrossSection.KeywordCards()](primer-crosssection-class.md#CrossSection::KeywordCards). |
| --- |

#### Arguments

No arguments

| Returns
<br>string<br>
Return type
<br>String |
| --- |

| Example
<br>To get data for cross\_section c in keyword format<br>
```
var s = c.toString();
```
 |
| --- |

* * *