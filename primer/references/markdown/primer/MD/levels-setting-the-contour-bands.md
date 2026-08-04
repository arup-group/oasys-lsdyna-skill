### Levels... Setting the Contour Bands

This panel (the standard panel in all contouring contexts) controls the contour levels and colours displayed.

![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17-8.png)

#### Value formats

To change the format of the values on the contour bar, use the following section of the panel:

![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17.png) ![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17-6.png)

#### Contour ramp options 

By default, PRIMER uses a rainbow contour ramp to plot results. However, this does not have perceptual uniformity, i.e. when printed in greyscale it is not possible to distinguish each colour.

To improve this, there are a number of different contour ramps that can be used instead which are perceptually uniform: Viridis, Plasma, Magma, and Inferno. The contour ramp colour options are as shown below:

| <ul style="font-size: 14.6667px; line-height: 1.5; text-align: left;"><li><span style="font-weight: normal;">Default</span></li><li><span style="font-weight: normal;">Viridis</span></li><li><span style="font-weight: normal;">Plasma&#160;</span></li><li style=""><span style="font-weight: normal;">Magma</span></li><li><span style="font-weight: normal;">Inferno</span></li></ul> | ![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17-1.png) |
| --- | --- |

A preference can be set to change the default ramp from rainbow to one of these options, e.g.:

primer\*contour\_ramp: VIRIDIS

#### Contour level options 

A radio button for contour level options is available on this panel:

![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17-5.png)

| If a component has discrete data, these options will only be available when discrete contouring is disabled | ![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17-4.png) |
| --- | --- |

##### Automatic levels

In this mode, this panel does not define the contour band values themselves, contour level values are uniformly distributed between the upper and lower bounds:

The upper and lower bounds are controlled in the [Settings...](settings-controlling-plots.md#SettingsControllingplots) panel, together with the display mode for items outside these bounds.

The number of levels can be controlled by the '#Levels' slider:

![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-18.png)

##### User-defined levels

In this mode, you can define each contour value manually.
| When the values are unordered (not ascending), the 'Sort levels' button will become available and can be used to sort the values into ascending order. | ![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17-7.png) |
| --- | --- |
| The '#Levels' slider is not available in this mode but values can be added or deleted with the popup menu from the value textboxes. | ![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-18-1.png) |
| --- | --- |
Points to note:

* This mode is not available when the data component that is being contoured has integer data.
* The min and max values specified in the [Settings...](settings-controlling-plots.md#SettingsControllingplots) panel do not affect any contour values when we are in this mode.

User-defined levels **Matl props → Density** example:

**![](../Storage/primer-22-1/levels-setting-the-contour-bands/levels-setting-the-contour-bands-2023-08-17-2.png)**

#### Other settings

The **Levels...** panel also allows you to specify:

* The contour colour of each level: click on the colour of the level to modify.
* Whether to do discrete contouring: see the 'Disable discrete contours' option
    * This is the same as the 'Disable discrete contouring' option on the **Settings...** panel.
    * See [this page](contour-levels-on-the-contour-ramp.md) for further explanation and an example (**Shell Thk** **→ Shell Thk**).

>  

[Previous](settings-controlling-plots.md)  |  [Next](details-of-errors-local-to-elements-and-parts.md)