###  Dealing with Errors in Scripts

Script errors come in two forms:

| Syntax errors | Are mistakes of JavaScript grammar or spelling, resulting in error messages during compilation. <br> <br>These are easy to detect and correct since the line number and offending syntax are both described by the compiler. The script needs to be edited to correct the problem and then recompiled. Sometimes several iterations of the compile/edit cycle are required to eliminate all errors from a script. |
| --- | --- |
| Run-time errors | Are errors of context or logic in scripts that are syntactically correct, and thus have compiled, but which fail at some stage when being run. <br> <br>A typical example of a run-time error is an attempt to divide a value by zero, yielding the illegal result infinity. More subtle errors involve passing an invalid value to a function, accessing an array subscript that is out of range, and so on. |

[Previous](compiling-and-running-a-script.md)  |  [Next](setting-the-garbage-collection-memory-size.md)