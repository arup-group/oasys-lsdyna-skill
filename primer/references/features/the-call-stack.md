## The call stack

The call stack shows which functions have been called in the script to get to the current point. It is the middle left window in JaDe.

![](../Storage/primer-22-1/project-common-topics/jade/call_stack.png)

The top line shows the function that the script is currently paused at. The other lines show the calling functions in order. The above example can be read as:

1. The script starts
2. On line 65 in script file minesweeper.js in the 'main' program the function start\_game is called.
3. On line 160 in script file minesweeper.js in function start\_game the function allocate\_mines is called
4. On line 114 in script file minesweeper.js in function allocate\_mines the script is paused.

This information is sometimes very useful in more complicated scripts to find out the order things are done in.

The function that the user is currently looking at is highlighted in blue. You can move up or down the call stack by clicking on a line. The main text window will jump to the correct file and line. The line will be shown with a blue triangle instead of a green triangle.

[Previous](printing-the-value-of-a-variable.md)  |  [Next](exceptions.md)