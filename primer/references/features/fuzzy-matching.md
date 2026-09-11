##  Fuzzy Matching

A 'fuzzy' matching method is used to match the entered text with the searchable items. It judges that something has matched when the characters of the entered text appear in the same order as the item that can be searched for.

For example if you type 'mptp' then 'Tools-&gt; Measure -&gt; Part To Part' would be a match, but 'Tools-&gt; M easure-&gt; Point Angle' wouldn't because the final 'p' doesn't match. (Note that the search is case insensitive).

![](../Storage/primer-22-1/primer_links/sect_11/search3.png)

Additionally, if the entered search pattern contains spaces and the characters do not all match in the same order then PRIMER will look to see if the words can be swapped to find a match.

For example 'create node' would find 'Tools-&gt;NODE-&gt;Create' even though the words do not appear in that order.

This hopefully makes it easier to find items as you do not need to know the precise search term.

The found items are listed in order of how closely they match the entered text so items that more closely match appear nearer the top of the list. It determines this by assigning a score to each match, with higher scores given to items that contain consecutively matched characters and if the characters appear at the start of words.

[Previous](introduction-quick-find.md)  |  [Next](search-terms.md)