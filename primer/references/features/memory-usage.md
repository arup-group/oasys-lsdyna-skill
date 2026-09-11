##  Memory usage

When a script creates arrays, objects or strings it has to allocate some memory to be able to do so (for example an array storing 1,000,000 items will use considerably more memory than an array to store 100 items). To manage this memory JavaScript uses a process called 'garbage collection'. When the array, object or string goes out of scope (can no longer be reached by the script) it can be garbage collected and the memory freed. For the JavaScript engine to be able to do this it must keep track of what memory has been allocated. It does this by keeping a list of the live memory. This list also uses a small amount of memory and this memory is the garbage collection memory. The maximum size for the garbage collection memory is set when running a script.

JaDe allows you do see how much garbage collection memory has been used with a usage bar.
 ![](../Storage/primer-22-1/project-common-topics/jade/memory_use.png)
 
If you hover over the usage bar you can see exactly how much garbage collection memory is being used. As the JavaScript engine allocates memory for objects, arrays etc this will increase. When the engine performs garbage collection to free memory the usage will go down. Note that the engine will normally only perform garbage collection when it thinks it is necessary so if you run a script multiple times in JaDe the memory could continue to increase until the engine decides to do garbage collection, then the memory will reduce.

Note also that JaDe also requires some garbage collection memory to function so the bar also includes some memory for JaDe.

 [Previous](exceptions.md)  |  [Next](the-javascript-gui-builder.md)