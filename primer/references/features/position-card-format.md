###  Position Card Format

\*POSITION 
&lt;title&gt; 
 
 then for each assembly  
 
&lt;Assembly id #1&gt; 
&lt;Cx&gt; &lt;Cy&gt; &lt;Cz&gt; 
&lt;Xx&gt; &lt;Xy&gt; &lt;Xz&gt; 
&lt;Yx&gt; &lt;Yy&gt; &lt;Yz&gt; 
&lt;Zx&gt; &lt;Zy&gt; &lt;Zz&gt;

... and so on for assemblies #2 to #n in this Dummy or Mechanism

| &lt;title&gt; | A80 | Title for position (required, must be unique) |
| --- | --- | --- |
|  |
| &lt;Assembly id&gt; | I10 | Assembly label |
| &lt;Cx&gt; &lt;Cy&gt; &lt;Cz&gt; | 3E20.0 | Notional centroid of assembly |
| &lt;Xx&gt; &lt;Xy&gt; &lt;Xz&gt; | 3D20.0 | X components of direction cosines |
| &lt;Yx&gt; &lt;Yy&gt; &lt;Yz&gt; | 3D20.0 | Y components of direction cosines |
| &lt;Zx&gt; &lt;Zy&gt; &lt;Zz&gt; | 3D20.0 | Z components of direction cosines |

[Previous](biii-positions-in-dummy-and-mechanism-data.md)  |  [Next](data-stored-for-positions.md)