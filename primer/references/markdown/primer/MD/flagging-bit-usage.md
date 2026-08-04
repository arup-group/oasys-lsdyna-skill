####  Flagging Bit Usage

PRIMER makes heavy internal use of "flagging bits". These are literally bits in an internal word used when selecting items for processing and, unfortunately, they are a finite resource which can at times become exhausted. If you try to perform too many functions at the same time you may see the following message:

![](../Storage/primer-22-1/primer_links/sect_3/images/fbits.png)

LIST will give a table of flagging bit usage by model, allowing you to work out what you need to close down in order to free some flagging bits for the wanted operation.

| In order to avoid having to provoke this message in order to find out which bits are being used where, this command will list them on demand. <br>The example listing here shows that:<br> <ul style="font-size: 14.6667px;"> <li>The Part tree is using one bit. This is always the case and cannot be changed.<br><br></li> <li>The Contact penetration checker is using 3 bits in model #1.<br><br></li> <li>The Model Check panel is using 1 bit in model 1.<br><br></li> <li>The spotwelder in the Connections panel is using 4 bits in all models.<br><br></li> <li>The deletion panel is using 2 bits in all models.</li> </ul> <br>PRIMER 9.3 has a total of 19 dynamically allocatable flagging bits, numbered 5 to 23. As this example demonstrates some operations (eg DELETE) allocate bits in all models, whereas others (eg contact penetration check) are specific to a particular model.<br> <br>Bit exhaustion can occur even if not all bits in a particular model are in use, since "all model" operations require that bits have the same number in each model.<br> <br>Therefore when shutting down panels to free flagging bits it is usually most effective to close those which allocate "all model" bits. | ![](../Storage/primer-22-1/primer_links/sect_3/images/fbits_list.png) |
| --- | --- |

[Previous](database-statistics.md)  |  [Next](run-time-diagnostics.md)