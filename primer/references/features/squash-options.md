###  Squash Options

Press the Squash button to start a seatsquash. 
Two methods are available to deform the seat foam:

* [Setup a Ansys LS-DYNA analysis](ls-dyna-seat-squash-method.md#dynaseatsquash)
* [Simple squash using PRIMER](simple-squash-using-primer.md#primerseatsquash)

The PRIMER method uses the contact depenetrator in PRIMER to push the dummy into seat. The seat is deformed uniformly through its thickness. This obviously will not have the correct material response but it is meant as a quick method. If the seat deformation is critical then you should use the Ansys LS-DYNA method.

The Ansys LS-DYNA method will create an Ansys LS-DYNA import deck which will push the dummy into the seat. This should be run using Ansys LS-DYNA and the dynain file which it creates can be imported back into PRIMER to deform the seat.

Select the option you want and press Next to start the process.
 ![](../Storage/primer-22-1/primer_links/sect_6/seatfoamcompression/squash.gif)
[Previous](undoing-a-seatquash-operation.md)  |  [Next](simple-squash-using-primer.md)