##  PRIMER Coordinate Space Systems and View Layout

PRIMER uses two right-handed coordinate space systems for viewing: "screen" space, and "model" space. This is illustrated in figure 10 .1(a):

![](../Storage/primer-22-1/primer_links/sect_9/images/9_1a.gif)

Initially the two space systems are coincident, ie the initial view on the model is a plan on XY looking down the Z axis. Transformations to the current view can be applied in either space system, with the result that the model coordinate system will rotate with respect to the (fixed) screen system.

The current model orientation, (ie the axis system in the right hand side of figure 10 .1(a) above), is shown by the "triad" in the bottom right of each plot.

The object exists at a point in screen space, and is seen through a viewing "frustrum" as shown in figure 10 .1(b) below. The observer's (your) eye point is located at the vertex of a rectangular section frustrum, with the object some distance away in the -ve Z screen space system. The screen image is a 2D projection of what the eye sees: the sides of the frustrum clip the view to the left/right and bottom/top edges of the screen.

![](../Storage/primer-22-1/primer_links/sect_9/images/9_1b.gif)

It is important to note the following:

1. Rotation of the image always takes place about the point that is the XY centre of the screen (in screen space coordinates), at the "object centre plane" (which gives the screen Z location). Thus in the example above roughly at the "O" of "Object".
2. The example above implies a perspective projection. In fact PRIMER defaults to a parallel (orthographic) projection, in which the sides of the frustrum are parallel and perspective is irrelevant. Nevertheless the object centre plane is still significant, since this still gives the screen Z coordinate about which rotations take place. You can turn perspective on/off and alter its distance at will.
3. You can change the scale ("zoom" in/out) of your image. This effectively changes the angle of view of the frustrum above: zooming in makes it narrower, zooming out wider. But note that this does not change your distance from the object: changing the scale is like putting a lens of a different focal length on your camera, to change your distance from the object you must alter the perspective distance.
4. The near and far "Z" clipping planes shown here only apply on 3D hardware that is capable of this. See section 10 .6.

[Previous](viewing-control.md)  |  [Next](the-viewing-control-box.md)