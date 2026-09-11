###  Manual Versus Automatic Fitting

The documentation below describes how to create a belt path, to fit it to the structure, then mesh it and finally to create a contact between belt and dummy. When a new belt definition is created this process needs to be followed in that sequence, and is referred to as "manual" fitting since it is totally interactive.

Once you have a belt definition in a model you can change the geometry of the model and use the [Auto-refit](auto-refit-refitting-a-belt-automatically-when-the-dummy-moves.md#refit)function to repeat the fit / mesh / contact process above in a single automatic step for reasonably simple belt paths. This can be performed both interactively and via [batch](command-line.md#command_line)(command-line) commands. This process is commonly used to perform stochastic analyses where the dummy and seat are moved through a range of positions, refitting the belt automatically each time.

It is also possible to combine these two processes: you can adjust the shape of an existing belt path in the path editor or by external means, then use [Auto-refit](auto-refit-refitting-a-belt-automatically-when-the-dummy-moves.md#refit)to perform the fit / mesh / contact process automatically rather than manually. Some users have created processes that update belt path points as well as modifying structure nodes.

Generally speaking:

| **Manual fitting:** | <ul> <li>Will delete any existing belt path definitions, sets, contacts, etc </li> <li>Will create a new set of definitions </li> </ul> |
| --- | --- |
| **Automatic refitting:** | <ul> <li>Will preserve as much of the original definition as possible </li> <li>Will reuse and repopulate existing sets, contacts as much as it can </li> </ul> |

The choice of processes is up to you, but most users will find that automatic refitting is preferable once a \*BELT definition has been created.

[Previous](mini-tutorial-on-primer-seatbelt-fitting.md)  |  [Next](description-of-seatbelt-fitting.md)