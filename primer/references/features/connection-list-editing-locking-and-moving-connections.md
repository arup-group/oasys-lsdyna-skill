####  Connection List: Editing, Locking and Moving Connections

![](../Storage/primer-22-1/primer_links/sect_6/mechanism/mode_4.gif)
 
This panel lists all the connections in the mechanism (but not in any child dummies),
 
Connections may be edited by clicking on their name button, and also sketched. ![](../Storage/primer-22-1/connection-list-editing-locking-and-moving-connections/conn_list.PNG)
 
More usefully they can also be locked and unlocked: in this example the line connection along "Headrest and Seatback" has been locked, as has the Hinge connection between the "Seatback and Seatbase". (Un)locking can take place at any time so, for example, two assemblies can be moved relative to one another and then locked in that configuration for subsequent positioning.
 
You can also lock/unlock all the connections in the list with a single click, using the "Lock Connections" popup under the Lock button.
 
* **All** **:** Locks all the connections.
* **None:** Unlocks all the connections.
* **Reverse:** Reverses the current Lock/Unlock selection for all the Connections.

"Locking" makes the connection totally rigid in all 6 degrees of freedom, with the effect that the two assemblies on either side become merged into a single rigid combination.

You may also "move" a line or hinge connection, which means driving it to some new orientation.![](../Storage/primer-22-1/connection-list-editing-locking-and-moving-connections/lock_conn_popup.PNG)
 
##### 

##### 

##### Move: forcing a connection to adopt a new orientation. 
 
Another way of positioning a mechanism is to "drive" a line or hinge connection to a new orientation by specifying a new slide distance or rotation angle.
 
The "current" slide distance or angle are really just arbitrary values that are used to limit motion against prescribed limits, and can be reset to new values at any time. Changing these values does  ***not***  move the mechanism, it is more like moving the ruler or protractor used to measure its orientation.

 ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_14a.png)

To move the mechanism you need to specify a new " Move to ... " slide distance or angle in the green boxes shown here, and then to Apply the motion. This will cause the joint to slide or rotate as required in an attempt to achieve the new position or angle, driving the motion of the mechanism.
 
Moving a connection is very similar to the dragging and rotation of assemblies described above, the difference being that you are applying motion across a connection rather than to the assemblies to which it is connected. Internally the method is nearly identical: the attached assemblies have translations or rotations applied to them calculated to achieve the desired joint orientation.
 
##### Slide limit type:
 
The selected limit type effects the limit behavior for the slide type in the user interface and while positioning. The selected limit type is saved to the \*CONNECTION\_LINE card. The user can select the 'Absolute' or 'Relative' limit type using the 'Slide limit type' dropdown in the 'Connection list' moving panel.

![](../Storage/primer-22-1/connection-list-editing-locking-and-moving-connections/limit_type_line_mech.png)

In its default setting, PRIMER interprets slide limits as absolute values. This means that the ‘Permitted +ve slide’ field’s value is processed as a positive absolute value (+|Permitted +ve value|), and the ‘Permitted -ve slide’ field’s value is used as the negative absolute value (-|Permitted -ve value|). This is known as the ‘Absolute’ limit type and continues to be the standard behavior.

The ‘Relative’ limit type signifies that the values in the permitted slide +ve and -ve fields are utilized as they are, without being converted to absolute values, thereby honoring the sign of the input value. The ‘Relative’ limit type respects the sign (+ or -) of the value enter. If the user enters a negative number, it remains a negative limit and if a user enters a positive number, it remains a positive limit. This gives the user more control and flexibility over the slide limits.
[Previous](move-points-movement-driven-by-updated-point-positions.md)  |  [Next](further-positioning-commands-position.md)