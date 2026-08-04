###  Database File

| Element tag | Attributes | Comment |
| --- | --- | --- |
| &lt;PRIMER\_DATABASE | category = 'database name' | opening tag |
|  | protected = 'no' |  |
| **Version data** |
| &lt;DEFAULT\_VERSION | id = '&lt;id&gt;' | if not specified highest available version if default |
| &lt;VERSION | descr = 'version name' |  |
|  | id = '&lt;id&gt;' | &lt;id&gt; is integer version id |
| **Component data** |
| &lt;H1 | category = 'title' |  |
|  | subcategory = 'subtitle' |  |
|  | thumbnail = 'filename' | optional |
|  | owner = 'name of owner' | optional |
| &lt;COMPONENT | file = 'filename' | component file with absolute or relative path |
|  | version = '&lt;id&gt;' | version of this component |
| &lt;EXTRA\_DATA | file = 'filename' | file for contact, etc which apply across components |
| &lt;RENUMBERING | nelidlow = '&lt;n&gt;' | lower id for nodes/elem/nrb/nsets |
|  | nelidup = | upper id |
|  | idlow = | lower id for other types |
|  | idup = | upper id |
|  | frozenlow = | lower id for range where labels are frozen |
|  | frozenup = | upper |
|  |  | entity renumber is optional |
| &lt;CONNECTION\_FILE | file = 'filename' | name of xml connection file |
|  | version = '&lt;id&gt;' | version of this file |
| &lt;CONNECTION\_SETTINGS | target\_title = '&lt;title&gt;' | destination component for connections |
|  | target\_subtitle = '&lt;subtitle' |  |
| **Orientation of component by reference and tracked point** |
| &lt;REFERENCEPOINT | name = 'point name' | lower id for nodes/elem/nrb/nsets |
| &lt;TRACKEDPOINT | Origin = '&lt;x&gt;&lt;y&gt;&lt;z&gt;' | coordinate |
|  | Origin\_node = 'node' | may be id or name of node |
|  | Ox = '&lt;x&gt;&lt;y&gt;&lt;z&gt;' | 2nd coordinate to define depenetration vector |
|  | Ox\_node = 'node' |  |
|  | Vector = '&lt;x&gt;&lt;y&gt;&lt;z&gt;' | depenetration vector |
|  | Rotate = '&lt;rx&gt;&lt;ry&gt;&lt;rz&gt;' | rotation angles (defined for referencepoint only) |
|  | Part = '&lt;id&gt;' | part for contact |
|  | Partname = 'name' |  |
|  | Partset = '&lt;id&gt;' | part set for contact |
|  | Partsetname = 'name' |  |

Here is an example of a simple database file to show the correct nesting of the elements.


```xml
<PRIMER_DATABASE category = 'New database' protected='no'>

<VERSION descr = 'Version-1' id = '1' />
<VERSION descr = 'Version-2' id = '2' />
<VERSION descr = 'Version-3' id = '3' />

<H1 category = 'New database' subcategory = 'aaa' owner = 'fred bloggs' >
<COMPONENT file = 'Component_files/a1.key' version = '1' />
<RENUMBERING nelidlow = '100000'
nelidup = '199999'
idlow = '1000'
idup = '99999'
frozenlow = '1'
frozenup = '1000' />
<TRACKEDPOINT name = 'point A'
Origin_node = '3000'
Vector = '1 0 0'
Part = '1000' />
</H1>

<H1 category = 'New database' subcategory = 'bbb'
<COMPONENT file = 'Component_files/b1.key' version = '1' />
<COMPONENT file = 'Component_files/b2.key' version = '2' />
<COMPONENT file = 'Component_files/b3.dat' version = '3' />
<EXTRA_DATA file = 'Component_files/extra1.k'/>
<EXTRA_DATA file = 'Component_files/extra2.k'/>
</H1>

<H1 category = 'New database' subcategory = 'ccc' >
<CONNECTION_FILE file = 'connection.xml' version = '3' />
<connection_settings target_title = 'New database' target_subtitle = 'aaa'/>
</H1>

</PRIMER_DATABASE>
```
[Previous](model-mass-c-of-g-inertia.md)  |  [Next](template-file.md)