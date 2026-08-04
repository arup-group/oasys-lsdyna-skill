###  Dynamic Rotation

| Dynamic rotation uses &lt;left mouse&gt; + &lt;left shift&gt; &/or &lt;left control&gt;<br> <br>(The distinction between the keyboard meta-keys is explained in section 10 .4.0 above.)<br> <br>Rotation always take place in the screen coordinate system, and may be about the XY axes or Z: this depends upon the starting position of the mouse. This is shown in figure 10 .4.1: | ![](../Storage/primer-22-1/primer_links/sect_9/images/Lmouse.gif) |
| --- | --- |

| If the mouse initial position is *inside* the central circle (radius (screen height/3)) then rotation is about screen XY axes.<br> <br><br> <br>If the initial position is outside this circle then rotation will be about screen Z.<br> <br>You can tell which mode you are in by the cursor symbol. This red, and:<br> <br><br>| XY rotation uses | [XY] |<br>| --- | --- |<br>| Z rotation uses | [Z] | | ![](../Storage/primer-22-1/primer_links/sect_9/images/9_4_1a.gif) |
| --- | --- |

The relationship between mouse and image motion is intuitive in both modes. It is as if you had grabbed a point on the object near you, (this side of the object centre plane), and used this to move the image about its centre:

| XY mode | Moving the mouse left/right rotates about the screen Y axis; <br> <br>Moving the mouse up/down rotates about the screen X axis. |
| --- | --- |
| Z mode | Moving the mouse in a circular direction rotates about the screen Z axis. |

Rotation remains locked in its initial XY or Z mode for the duration of a dynamic viewing operation, regardless of where you subsequently move the cursor to, until you release a mouse or keyboard button.

[Previous](graphics-modes-during-dynamic-viewing.md)  |  [Next](dynamic-translation.md)