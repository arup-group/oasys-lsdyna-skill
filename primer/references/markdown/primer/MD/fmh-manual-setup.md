###  FMH Manual Setup

This feature has been written in order to position the freemotion headform according to FMVSS 201. Firstly at least one \*HEADFORM definition must have been read in from file. The \*HEADFORM card is similar to the \*DUMMY definition and contains a number of keywords (described below) with information required by the positioner. These appear after the \*END card and are ignored by Ansys LS-Dyna but used by PRIMER . An example of a headform tree file is given in [appendix J](j-headform-tree-file-example.md) . The corresponding target and position tree file example is available in [Appendix K](k-target-and-position-tree-file-example.md).

\*HEADFORM\_START

The headform label and title.

\*REF\_POINT

This is a node label, already existing in the model, about which the headform will be rotated.

\*UNITS

The mass, length and time units used in the model (same options available as for a \*DUMMY definition).

\*COMPONENTS

The part set which makes up the headform definition, the part on the headform to be used in the contact definition and the label of this contact definition.

\*TARGET

The target definition at which the headform is currently positioned. Blank if no target definitions exist in the model or the headform is not currently in position.

\*AXES

The label of a \*DEFINE\_COORDINATE\_NODES definition already existing in the model to define the headform local co-ordinate system.

\*HEADFORM\_END

The end of the headform definition.

Along with the \*HEADFORM definition another keyword has been included to store information regarding the target points in the model.

\*TARGET\_POINT\_START

The first line contains a label, an acronym (as defined in FMVSS201) and an optional title. The second line contains the co-ordinates of the target. The third line contains the minimum and maximum
horizontal angles. The fourth line contains the impact velocity for this target point, the part set to be used as the surfA side in the contact definition and the current headform position number (see below).

\*HEAD\_POSITION

At a given target point a number of different angles are normally investigated. Any number of unique positions can be stored with each target point to facilitate moving the headform about in the model. This keyword contains a label and a title, the co-ordinates of the headform reference point, the horizontal and vertical angles, a flag to indicate where the horizontal angle is in the allowable range and a positional node ID.

\*TARGET\_POINT\_END

Ends the target point definition.

[Previous](fmh-markup-script.md)  |  [Next](positioning-the-headform.md)