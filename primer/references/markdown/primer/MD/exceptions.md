## Exceptions

Sometimes when developing a script you get errors that you need to try to investigate and fix. e.g. an object is null when it should be defined or you try to call a method that does not exist for an object. In these cases an exception is thrown by JavaScript and the script would terminate is run normally. JaDe will trap the exception and stop at the line where the exception occured. e.g. If for example you has the following code:


```javascript
var w = new Window('Example', 0.5, 1.0, 0.5, 1.0);

w.BadMethod();

w.Show()
```

There is no method called BadMethod for a Window. JaDe will stop at this point and allow you to look at the script.

[Previous](the-call-stack.md)  |  [Next](memory-usage.md)