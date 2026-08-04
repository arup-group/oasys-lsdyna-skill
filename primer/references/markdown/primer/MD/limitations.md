###  Limitations 
 
The biggest limitation with macros is that windows are identified by their title. This is fine if the titles are unique but causes problems if there are 2 windows with the same title. e.g. If you record a macro that modifies 2 different parts the windows will have different titles and the macro will be replay correctly. However, if you create 2 parts at the same time then both windows will have the same title and so on playback PRIMER will not be able to identify which of the 2 parts the button presses etc should be replayed in and the playback will fail.
 
In reality this is not a big limitation as the above situation is rare. You just need to be careful to only have one creation window for a particular type open at one time.
 
Dragging items in the part tree is not supported by macros. As a workaround you should right click on the selected parts and choose 'Cut' and then right click on the destination and choose 'Paste'. These actions will be recorded correctly in the macro.
    [Previous](assigning-macros-to-buttons.md)  |  [Next](mass-property-calculator.md)