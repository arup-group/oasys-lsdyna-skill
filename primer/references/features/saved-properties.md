##  Saved Properties

| Saving and restoring the current view, colour, transparency and other attributes controlling the appearance of the image. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_6_0.png) |
| --- | --- |

## 

Saved properties were added in release 11 and they perform the following functions:
 
* All the attributes controlling the appearance of the plot are recorded whenever a property is saved using Save P. The attributes stored are: 

    * Colour, transparency, plotting mode and blanking status of all items in the selected model
    * All settings in the Entity panel, ie visibility and labelling switches
    * The current view parameters: scale, orientation, position, perspective.
* Any number of properties can be saved in memory in PRIMER , and you can scroll backwards and forwards through them using the &lt;= and =&gt; buttons.
* The attributes reset whenever a saved property is made current are controllable.
* Properties can be saved to file (extension .prp). This is an ASCII (human readable) file, written in a format that makes it portable between programmes, notably between PRIMER and D3PLOT, but others too if desired, making it possible to achieve the same image appearance in different programmes.
* Although the colour, transparency, display mode and blanking status are stored with respect to the items in the source model, reuse of the properties file is not limited to this model and it can be used to set properties on any model that shares similar contents and label ranges.

There is some overlap of capabilities between the ability to toggle between and save "Views", and the ability to include the current view in a saved property. This is an historical accident due to the way the software has developed. Saved properties always contain view information and apply this by default when a property is restored. However, this may not always be desirable.
 [Previous](match-image.md)  |  [Next](save-p-saving-the-current-attributes-as-a-property.md)