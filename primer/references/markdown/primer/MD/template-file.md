###  Template File

| Element tag | Attributes | Comment |
| --- | --- | --- |
| &lt;PRIMER\_TEMPLATE |  | opening tag |
|  |  |  |
| **Selecting a component** |
| &lt;SELECTED | category = 'title' | identifies matching component |
|  | subcategory = 'subtitle' |  |
| **Orientation** |
| &lt;MASTERPOINT | (as defined above) | master point may be defined in template |
|  |  |  |

Here is an example of template file format.


```xml
<PRIMER_TEMPLATE>
<SELECTED category = 'New database' subcategory = 'aaa'/>
<SELECTED category = 'New database' subcategory = 'bbb'/>
<SELECTED category = 'New database' subcategory = 'ccc'/>
<masterpoint name = 'point A'
Origin = '1000 200 110'
Rotate = '0 30 0'
Part = '1200'
/>
</PRIMER_TEMPLATE>
```


[Previous](database-file.md)  |  [Next](q-mat100-dt-added-mass-for-solid-spotwelds.md)