####  Notes on Checking

* All keyword categories present in the model are shown, but those for which checking functions are not available are greyed out. These will follow in the fullness of time.

* That no errors have been detected is no guarantee that there are none! The checking algorithms in PRIMER are not based on those in Ansys LS-DYNA, and they pick up some that DYNA misses, and vice-versa.

* Checking may be done at any time, but is good practice to check models prior to output, and in fact this is the default behaviour in the model [WRITE](model-write.md#33MODELWRITE) command.

* A check that produces many errors is sometimes due to the consequences of deleting items leaving an "untidy" model. Try a REMOVE, CLEANUP\_UNUSED operation before trying more detailed corrections, since it may sort out most of the problems.

[Previous](auto-fixing-errors.md)  |  [Next](keyout-error-check.md)