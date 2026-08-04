###  Positions Are Relative within the Dummy/Mechanism

Positions are always stored relative to the "reference position", making it possible for Retrieve to restore any previous configuration.

This also means that "global" orientations of the whole Dummy / Mechanism are effectively cancelled out, making saved positions "local". For example if a saved position raises a left hand relative to the wrist this will still be the case even if the Dummy as a whole has been translated and rotated to some totally different location.

[Previous](data-stored-for-positions.md)  |  [Next](re-using-position-data-when-geometry-changes.md)