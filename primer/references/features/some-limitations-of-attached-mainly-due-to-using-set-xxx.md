##  

### Some Limitations of ATTACHED - Mainly Due to Using *SET_xxx

## 

Because the definition of "attached" is wider than the purely structural one of connected nodes and elements (see ), some problems can arise when definitions which use sets are diagnosed as being "attached".

Consider the following case:

* Initial velocities for the whole model are defined by **\***  **INITIAL\_VELOCITY** using a **\*SET\_NODE** that contains all nodes in the model.

* Once a single node in that set is detected as being "visible" then the set itself is also made visible. This has the consequence of drawing all nodes (with their initial velocities) in the model ....

* .... and the next thing you see, after a single  **APPLY**  operation, is the whole model being drawn.

This presents a dilemma: should  **ATTACHED**  track through **\*SET** definitions or not?

>  
> If it does then the problem defined above occurs.
>  
> If it does not then, for example, extra nodes on a rigid part (defined by \* **CONSTRAINED\_EXTRA\_NODES\_SET** ) will not be drawn properly when the part is visible.
> 

At present  **ATTACHED**    ***does***  track through **\*SET** definitions, leading to the problem outlined above. (Although the case of set zero, where it means "all nodes in the model", is detected and trapped.)

You can stop specific cases happening by turning off their switch (for example to stop the initial velocity display turn off INITIAL switch). You can also BLANK specific items (although they will probably unblank themselves again after the next APPLY operation).

[Previous](how-attached-inter-reacts-with-entity-viewing-and-blanking.md)  |  [Next](battery-setup.md)