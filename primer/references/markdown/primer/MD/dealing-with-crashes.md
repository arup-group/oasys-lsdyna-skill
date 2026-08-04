##  Dealing with Crashes

In an ideal world PRIMER would never crash, but sadly this is not the case so it has two methods for dealing with crashes:

1. It has a "crash handler" which intervenes when the operating system detects an illegal instruction that would cause a crash, and gives you some recovery options. These options include saving all models in the database in emergency keyout files, and also - depending on the mode chosen - attempting to continue execution. It is also possible to write trace-backs and "mini dump" files which can be sent to Oasys Ltd Support to help them to determine what went wrong.
2. In addition it automatically saves every command and screen button click performed by the user in a "checkpoint" file. If it crashes this file can be replayed to repeat exactly what happened previously, and because it does not replay the final command - which caused the crash - it should return you to the point just before things went wrong.

Neither method is perfect: checkpoint files can be cumbersome to replay if it was a long session, attempting to continue execution does not always work if memory has become horribly corrupted, and not all aspects of work in progress are saved in emergency dump files. However these methods are better than nothing!

[Previous](error-and-warning-messages.md)  |  [Next](the-crash-handler.md)