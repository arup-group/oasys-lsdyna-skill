###  Graphics Modes During Dynamic Viewing

All dynamic viewing operations require a combination of two screen "meta" keys, ( &lt;left control&gt; and &lt;left shift&gt; ), and mouse buttons. The meta key(s) used dictates the graphics mode in which the image is transformed as follows:

| &lt;left shift&gt; + &lt;mouse&gt; | Transforms the image in the current graphics mode. For example if it is a hidden-line plot, then dynamic viewing will take place in hidden-line mode. |
| --- | --- |
| &lt;left control&gt; + &lt;mouse&gt; | Transforms the image in "wire-frame" mode for the duration of the drawing operation. (i.e. no hidden-surface removal or lighting.) |
| &lt;Left shift&gt; &}&lt;left control&gt;} + &lt;mouse&gt; | Transforms the image in pre-computed free-edge mode for the duration of the drawing operation. (i.e. wire-frame of free edges only, no hidden-surface removal or lighting.) |

In the latter two cases the original drawing mode is always returned to at the end of the dynamic viewing operation. The wire-frame and free edge modes are provided to make transformations quicker for very large models and/or slow computers: free edge is very fast.

For the last case, with &lt;left shift&gt; & &lt;left control&gt; held down together, the order of pressing and releasing the meta-keys matters: press &lt;left shift&gt; before &lt;left control&gt;, and release in the opposite order, otherwise you will (correctly) get the image redrawn in wire-frame mode as the &lt;left control&gt; key is pressed and released.

[Previous](dynamic-viewing-using-the-mouse-to-change-views.md)  |  [Next](dynamic-rotation.md)