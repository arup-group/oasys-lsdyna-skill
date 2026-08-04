##  Memory Management and Usage

PRIMER stores all data in memory, therefore it must manage memory efficiently despite reads, deletes, merges, copies etc. This is done by allocating chunks of memory by data category as they are required, and returning these chunks to the relevant free list when that data is deleted. For example when a node is deleted the space required to store its data is returned to the "node data" free list for re-use the next time a node needs to be stored, and so on for all internal categories.

However there is some overhead associated with this and, like middle-aged spread, memory consumption tends to grow as more operations are carried out. In addition many create/delete operations will lead to greater memory fragmentation, and thus more page-faults, so the performance of the programme will degrade.

This is not usually a problem with small models, but when you start to manipulate larger models you may experience some performance degradation as you approach the memory limit of your computer. There are some things you can do to alleviate this:

* Don't have more models in memory than you require at any one time, and perhaps consider writings models temporarily out to disk (and then deleting them from memory!) before reading in new models.
* Try to avoid unnecessary read/delete/read/delete cycles. This will cause a steady build-up of memory consumption, and also increased fragmentation.
* If merging a succession of large models consider doing the job in stages: merge (say) 2 or 3 models, write out the result, then exit PRIMER and re-enter it to do the remainder. This will lead to memory being more organised, and hence give a faster response.
* Try not to run other memory-hungry processes on your computer at the same time as a large PRIMER session.
* There is a small saving to be made by using X-Windows graphics rather than a 3-D protocol, and also by trying to avoid drawing large images with lots of added labels, symbols, shading, etc.

Tests on this release of PRIMER suggest that just to read in and display a typical model each 1,000,000 nodes and elements requires approximately 750 MBytes (figures for 64 bit version).

Actually working with models, and in particular performing memory-hungry operations such a merging, contact penetration checking and spotwelding can push this requirement up to 1.5 GBytes per million nodes and elements; and this figure should be used when estimating the memory required for a workstation.

In practice, the memory needed for a workstation or desktop is more likely to be controlled by post-processing needs than by PRIMER.

The UTILITIES &gt; DATABASE\_STATISTICS button can be used to provide a summary of current memory usage. This is intended primarily for the programmer to use during debugging, but it provides a useful general guide to how efficiently PRIMER is managing its space. The total consumption it reports will always be an underestimate since it only lists memory used for data storage.

To see actual memory usage use:

| Under Unix / Linux | The "ps" command. eg "ps -ealf | grep primer", or the "top" command |
| --- | --- |
| Under Windows | The Task Manager, Processes tab, Peak Mem Usage and VM size columns |

[Previous](viewing-models.md)  |  [Next](include-files.md)