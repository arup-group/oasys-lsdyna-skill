###  What is a "Mechanism"?

A mechanism is a collection of two or more "assemblies" joined together by "connections".

* **Assemblies** are made up of any number of parts (deformable and/or rigid) and/or node sets, and for the purposes of mechanism analysis they are treated as totally rigid entities. There is currently a limit of 100 assemblies per mechanism.
* **Connections** may be one of a range of simple joints: currently pin, hinge, sliding (line) and coupler. (These are not the same as the \*Constrained Joint type in ls-dyna, although they have similar characteristics.)

The mechanism definition is stored in \*MECHANISM cards following \*END , in a format described in [Appendix B.ii](bii-mechanism-file-format.md#mech_tree_file). A model may contain any number of mechanism definitions.

Mechanism analysis is performed using an iterative scheme, so the results are approximate and will result in small distortions of the model. The default error tolerance is 1.0e-4 times the bounding box dimension around the mechanism, or ~0.1mm for a typical 1 metre sized mechanism. This amount of error is usually insignificant, but the convergence tolerance can be tightened, at the expense of longer calculation times, to achieve greater accuracy where required. A special check is included for failure to preserve coincidence of pairs of nodes defining ls-dyna joints, and automatic fixing of this can be carried out.

Once a mechanism has been created its motion can be analysed using rigid body kinematics: an assembly can be dragged using the mouse and the motion of the whole mechanism is calculated and displayed interactively. The new position can be saved and the coordinates of the assemblies updated to provide a new structural configuration for subsequent analysis.

Mechanisms may also have "points" defined within them. These provide both a means of creating restraints and also of driving motion.

Mechanisms may also be organised in a hierarchy where a "parent" mechanism drives the motion of a "child" via connected degrees of freedom. The "child" may also be a [Dummy](dummies-positioning-occupants.md#dummies)definition, permitting the dummy's position to be driven by the motion of its parent mechanism.

>  
> (There are many similarities between Mechanisms and Dummies in PRIMER , and indeed when positioning a Dummy in "free dragging" mode the dummy is in fact turned into a mechanism during the drag operation.)
> 

####  Mechanism Keywords in the input deck

The information describing the mechanism is saved in special keywords following the \*END card.

The formats of these cards (which are similar to those of a Dummy tree file) are given in [Appendix B.ii](bii-mechanism-file-format.md#mech_tree_file)

PRIMER also reads mechanism information from ANSA comments in the input deck.

[Previous](mechanism-creating-and-analysing-mechanisms.md)  |  [Next](creating-and-editing-mechanisms.md)