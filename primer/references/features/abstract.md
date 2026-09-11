##  Abstract

Many pre-processors are available for mesh-building and general modelling, but their support for non-linear input data is only partial: specialist data such as load-curves, joints, complex material models or the INCLUDE file structure of the data can be lost when an existing analysis is taken back into them for modification, or when models are merged.

In addition there are several specialist functions peculiar to particular types of analysis, such as occupant positioning, which are not provided satisfactorily by general-purpose pre-processors.

PRIMER is designed to solve these problems. It is capable of reading, processing and writing out all keywords (except ISPG) from Ansys LS-DYNA R15.0 and previous versions, with no exceptions or omissions: no information is lost during processing. Some keywords from R16.0 are also supported. It will also read and write several other common formats.

Input decks may be visualised directly, and any number of input models may be merged intelligently into a single output model; with the additional ability to move, delete, edit and check models, parts or individual components in the process.

In addition PRIMER  22.1 provides several specialist features for Ansys LS-DYNA analysis. These are features such as occupant positioning, belt fitting, airbag folding, spotwelding, massing-up and de-penetration of contacts.

[Previous](title.md)  |  [Next](development-status.md)