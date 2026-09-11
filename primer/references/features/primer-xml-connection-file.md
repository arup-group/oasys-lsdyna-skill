####  PRIMER XML Connection File

A small example of a PRIMER XML connection file is given below.


```
<?xml version="1.0"?>
<!-- PRIMER connection file -->
<!-- ====================== -->

<primer_connections version="22.1">
  <connection type="spotweld">
    <title></title>
    <id>1</id>
    <coord x="11.292786" y="70.951309" z="21.500000" />
    <diameter>5.000000</diameter>
    <method>hexa</method>
    <spotweld_part_id>101</spotweld_part_id>
    <layer type="PART_ID">
      <part id="1" />
      <part id="3" />
    </layer>
    <layer type="PART_ID">
      <part id="2" />
    </layer>
  </connection>
</primer_connections>
```


The main tag of the file must be primer\_connections . Currently the only version supported is 9.3 . 
Each connection is then given inside a connection tag. The currently available types are spotweld,  rigid and adhesive . Several tags are then used inside the connection tag to define the connection property. Most tags should be obvious.

For connection type spotweld , the available method s are beam , hexa , 4\_hexa , 8\_hexa , 12\_hexa and 16\_hexa . 
For connection type rigid , the available method s are rigid\_body\_merge or nodal\_rigid\_body . 
For connection type adhesive , the only available method is solid . 
For connection type spotweld\_line , the available method s are beam , hexa , 4\_hexa , 8\_hexa , 12\_hexa and 16\_hexa  
The method tag is optional. If it is omitted then PRIMER will use the default option when reading the connection file.

Spotweld connections can contain the spotweld\_part\_id tag which tells PRIMER what part to create the spotweld in. It is optional. If it is omitted then PRIMER will use the default option when reading the connection file. For rigid connections there is an equivalent optional tag to specify the material called rigid\_material\_id , and for adhesive connections there is an equivalent optional tag to specify the material called adhesive\_material\_id.

Adhesives and spotweld lines contain more information than individual spotwelds and bolts (an example is shown below). The adhesive and spotweld line information contains the end point (coord2) and the path data (points between the start and end points). Adhesive also contains adhesive width, number of elements across the width and element size.


```
<?Xml version="1.0"?>
<!-- PRIMER connection file -->
<!-- ====================== -->

<primer_connections version="22.1">
  <connection type="adhesive">
    <title></title>
    <id>2</id>
    <coord x="-13.702406" y="-39.206017" z="54.000000"    />
    <coord2 x="100.094444" y="-33.088951" z="54.000000"    />
    <method>solid</method>
    <adhesive_part_id>600</adhesive_part_id>
    <adhesive width="10.000000" number="1" size="10.000000"    />
    <path x="18.048088" y="-27.360266" z="53.999996"    />
    <path x="42.419262" y="-18.718697" z="54.000000"    />
    <path x="82.520035" y="-17.456446" z="54.000000"    />
    <layer type="PART_ID">
      <part id="10" />
    </layer>
    <layer type="PART_ID">
      <part id="21" />
    </layer>
  </connection>
/primer_connections>
```


A layer tag is then given for each layer of the connection. The available layer types are PART\_ID , PART\_NAME , CAD\_NAME , ASSEMBLY , SETPART\_ID , and SETPART\_NAME . The layer tag then contains the item(s) that are used for the layer. The tag and attribute change depending on the layer type. The following table shows the values.

| **Layer type** | **Tag** | **Attribute** | **Example** |
| --- | --- | --- | --- |
| PART\_ID | part | id | &lt;part id="1" /&gt; |
| PART\_NAME | part | name | &lt;part name="panel12345" /&gt; |
| CAD\_NAME | part | CADname | &lt;part CADname="CATIA\_12345\_xyz" /&gt; |
| ASSEMBLY | assembly | name | &lt;assembly name="biw" /&gt; |
| SETPART\_ID | partset | id | &lt;partset id="1" /&gt; |
| SETPART\_NAME | partset | name | &lt;partset name="body\_side\_parts" /&gt; |

[Previous](master-connection-file-mcf-format.md)  |  [Next](crash-test-setup.md)