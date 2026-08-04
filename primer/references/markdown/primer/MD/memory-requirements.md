##  Memory Requirements

Memory is allocated dynamically, so the amount required rises in proportion to the amount of data being manipulated. In PRIMER 13.0, tests show that memory required to read in and display data is approximately 750MBytes per 1,000,000 elements in the model in the 64 bit version. Operations such as Model Merge, Spotwelding and Contact checking can easily double these requirements, therefore for "real world" usage, and to allow a margin for future expansion, we would recommend the following:

* **64 bit version** : 1.5 Gbytes of memory for each 1,000,000 nodes and elements in the model.

Please contact Oasys Ltd Support if you would like advice about specifying a computer for PRIMER usage.

[Previous](development-status.md)  |  [Next](output-devices.md)