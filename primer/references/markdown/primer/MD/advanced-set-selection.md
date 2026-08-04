####  Advanced Set Selection

| The advanced set selection works with sets just like the basic set selection. The difference is that instead of using a single set (basic select), 3 sets are used.<br> <br>When a fold is performed there are three distinct regions of the fold.<br> <br>The Unfolded set .	The shells that will not move. i.e. they will be unaffected by the fold.<br> <br>The Foldline set .	The nodes which are actually on the fold line.<br> <br>The Folded set .	The shells that will be folded. i.e. the shells that will move during the fold. | ![](../Storage/primer-22-1/primer_links/sect_6/airbag/adv_sets.gif) |
| --- | --- |

Each of these 3 sets can be selected individually. They can be completely different sets.

It is important to realise that the logic from the basic selection method still applies here. The folded set contains the shells that will be considered for moving during the fold. The foldline set contains the shells (actually the nodes from these shells are considered) that will be considered for the fold line etc.

In actual fact the basic selection method works by setting all 3 sets to be exactly the same. It is then the folder which works out which shells should be folded, which should be left in place and which nodes are on the fold line.

[Previous](quick-set-creation.md)  |  [Next](layers.md)