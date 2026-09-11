###  Garbage Collection Memory Size

Whenever a JavaScript creates an object, array or string variable, some memory needs to be allocated by the computer. When the variable goes out of scope (is no longer reachable) this memory needs to be returned. This is done automatically in JavaScript by a process called garbage collection.

The garbage collection process runs periodically when this memory use reaches a certain level. To be able to do this, the garbage collection process itself also requires a small amount of memory to keep track of all of the variables.

Prior to version 22.0, this garbage collection memory was a fixed size and had to be allocated before any scripts could run. The default size for this was 25MB and there was a textbox on the script panel to change this to a larger value if required.

In PRIMER 17.0 and earlier the memory was individual to each script, i.e. if the memory size was set to 25MB and two scripts were running at the same time then each script would be allocated 25MB of garbage collection memory. In PRIMER 18.0 the JavaScript implementation was upgraded to support ECMAScript 6 and this required a change to the way that memory was allocated. From PRIMER 18.0 the garbage collection memory was shared with all the scripts that were running, i.e. if the memory size was set to 25MB and two scripts were running at the same time then the 25MB of garbage collection memory was shared for both scripts. If only one script was running at a time this made no difference. However if you had multiple scripts running at the same time this could mean that the memory size needed to be increased compared to earlier versions of PRIMER.

In PRIMER 22.0 the garbage collection memory is now expanded automatically as required to run the script(s). There is no longer any need to give the garbage collection memory size, so the textbox to specify the memory has been removed.

However, if you know in advance that your script has to retain a large number of objects, arrays, strings etc in memory then it might be beneficial to start the script with a larger memory, rather than letting PRIMER gradually increase the memory. This can be done using the primer\*javascript\_memory\_size preference or adding a special [memory comment](maintaining-a-library-of-javascripts.md#memory_comment)at the top of the script.

The maximum size of garbage collection memory that PRIMER can allocate is 4GB. Note that this is the memory for the 'garbage collection' process, **NOT**the total memory for the script. The total memory for the script could be significantly higher than this value. If PRIMER is being run on a machine that is shared by several users and you want to limit the size of the memory for scripts, rather than expanding it automatically to 4GB you can use the preference

oasys\*javascript\_maximum\_memory\_size
[Previous](dealing-with-errors-in-scripts.md)  |  [Next](assigning-javascripts-to-shortcut-keys.md)