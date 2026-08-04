####  The Main Positioning Panel

Assuming that these checks pass you then drop into the positioning panel. For mechanisms this operates in one of four modes:

| [Rotate angles](rotate-angles-explicit-rotation-of-assemblies-about-their-connection-nodes.md#rotate_angles) | In this mode explicit rotation of assemblies about their parent connection node takes place. |
| --- | --- |
| [Drag assembly](drag-assemblies-free-dragging-of-assemblies.md#drag_assembly) | In this mode "free" dragging of the mechanism takes place, combining translation and rotation. |
| [Position points](move-points-free-movement-driven-by-updated-point-positions.md#move_points) | In this mode points can be defined and edited, and "free" movement performed by giving updated coordinates for them. |
| [Connection list](connection-list-editing-locking-and-moving-connections.md#conn_list) | Lists all connections (in mechanisms only) allowing you to lock them. Also to edit and sketch them. |

A mechanism is positioned by any combination of these modes, and when it is satisfactory the user must  [Accept](nan) it to make the geometrical changes permanent, or  [Reject](nan) it to abandon positioning and restore the original geometry.

[Global Accuracy](nan) determines the precision with which the mechanism is positioned.

Set colour by assembly temporarily changes the colours used in the graphics so that this mechanism's assemblies are drawn in the standard PRIMER colour sequence, and the rest of the model in light grey. This is automatically switched off when you leave mechanism positioning.
 
![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_10.png)

Note that this example contains a Dummy model constrained to the parent seat mechanism. The Assembly names are indented to the right a little to emphasise that they are "children". The "(R)" against "Lower Torso" denotes that it is the Dummy's root assembly.
 
[Further positioning commands](further-positioning-commands-position.md)below describes these and other options in more detail.
 
#####  Dragging the mechanism with the mouse 
 
During Mechanism positioning the cursor is always active for picking and dragging assemblies, and operates in the same way (translational drag) in all four positioning modes above. **Note that the method of application of the left mouse button in this context has changed from PRIMER V11.1.**

| **Mouse button** | **Action** | **** | **Mode** |
| --- | --- | --- | --- |
| Left | Select assembly and apply motion to **virtual point at projected mouse position** . |  | Motion is always translational drag in the direction implied by the current mouse motion in screen space as projected onto the model. <br> <br>(Note that this cursor behaviour is different to that in Dummy positioning: mouse-driven rotation is not available for mechanisms.) |
| Middle | Not used in this context |
| Right | Select assembly and apply motion to its **Centre of Gravity**  *(This was the pre-V11.1 left mouse action)* |

The difference between these two dragging modes is illustrated using the steering and suspension example in the images below.

| ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_drag_2.png) | ![](../Storage/primer-22-1/primer_links/sect_6/mechanism/fig_drag_1.png) |
| --- | --- |
| **Left mouse:** a virtual point is created at the projection of the mouse position onto the assembly, and motion is applied at that point.<br> <br>Therefore in this example motion up and down at the green point will swivel the wheel in the opposite way to similar motion at the yellow point.<br> <br>This intuitive since it is like grabbing and pushing the assembly at the cursor location, and means that both translational and rotational motion can be applied, but it does make the result more variable and - obviously - sensitive to the initial mouse location. | **Right mouse** : motion is always applied at the assembly C of G, regardless of the position of the mouse inside the assembly.<br> <br>Therefore something which swivels, such as a wheel, may move in a direction that is counter-intuitive given the current mouse location, as motion will always be the same regardless of where on the wheel the mouse is located.<br> <br>This is the pre V11.1 behaviour and in most mechanisms, where motion is constrained by connectivity, it gives a satisfactory result. It is retained to permit users to continue to use the "old" method. |

[Previous](position-analysing-mechanisms.md)  |  [Next](rotate-angles-rotation-of-assemblies.md)