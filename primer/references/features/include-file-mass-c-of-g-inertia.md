###  include File Mass, C of G, Inertia

You can obtain include file mass properties in the following ways:

(1) Using INCLUDE MASS off the include tree popup

(2) Writing summary file ( MODEL -&gt; UTILITIES -&gt; Write Summary file ) with Write mass for includes active

(3) Writing out model with write mass to each include file set in the Pre-Output check panel (or as an oa\_pref setting).

(4) Using report include mass from part tree icon

(5) putting all parts of include on Part table and looking at part mass, C of G and Inertia on top row

Methods 1, 2, 3 are all consistent in their handling of Rigid Body merges, giving:

(A) a sum of part masses which only includes effect of merges where both parts are in the include and

(B) a sum of part masses with consideration of all merges.

Method 4 just gives the answer using the correct method (B). This also gives C of G and Inertia tensor for parts in include.

[Previous](list-of-options.md)  |  [Next](model-mass-c-of-g-inertia.md)