###  The Graphics Card

There is a huge range of graphics cards available which are grouped here by approximate category. However graphics cards tend to be optimised for particular applications, and in practice these categories will be blurred:

| A base-level card | Will typically have 8 [bit-planes](the-graphics-card.md#Bit-planes), giving an acceptable colour range (2 ^8^= 256 colours) - but no more. <br> <br> [Hidden-surface removal](the-graphics-card.md#Hidden-surface%20removal), [shading and lighting](the-graphics-card.md#Shading%20and%20Lighting)will typically have to be done in software, probably quite slowly. <br> <br> [Double-buffering](the-graphics-card.md#Double-buffering)may be available using 4:4 bit-planes, but shading will be poor (2 ^4^= 16 colours in each buffer). |
| --- | --- |
| A higher specification card | Will typically have 24 [bit-planes](the-graphics-card.md#Bit-planes), giving a "true" colour range (2 ^24^= 16777216 colours). <br> <br>Such a card may have a [hardware Z-buffer](the-graphics-card.md#Hidden-surface%20removal), giving faster hidden-surface removal. It may also have some hardware support for shading and lighting. <br> <br> [Double-buffering](the-graphics-card.md#Double-buffering)will typically be available using 12:12 bit-planes, giving good shading (2 ^12^= 4096 colours in each buffer, which in practice is virtually indistinguishable from 24 bit-plane "true" colour). |
| A top specification card | Will probably have at least 48 [bit-planes](the-graphics-card.md#Bit-planes), and maybe some [overlay planes](the-graphics-card.md#Shading%20and%20Lighting)as well. <br> <br>Hardware Z-buffering, lighting and shading will be available - and extremely fast (many such cards have several processors dedicated to this). [Texture mapping](the-graphics-card.md#Texture%20Mapping)in hardware will tend also to be available. <br> <br> [Double buffering](the-graphics-card.md#Double-buffering)using 24:24 bit-planes will be "True" colour, and ["overlay" planes](the-graphics-card.md#Overlay%20Planes)will allow user-menu and graphics to be separate, reducing the number of image redraw evnts required. |

An explanation of some of the terms above:

####  Bit-planes

After the two width and height dimensions this is the third: "depth". Put simply the more bit-planes a screen has the more colours it can display at the same time.

More specifically the number of colours that can be displayed simultaneously is 2 to the power of the number of planes, thus typical arrangments are:

| An 8 bit-plane screen  <br><br>| Has 2 ^8^= 256 colours, usually arranged as: <br> <br> <br><br>| 3 bits Red | = 8 shades |<br>| --- | --- |<br>| 3 bits Green | = 8 shades |<br>| 2 bits Blue | = 4 shades |<br><br> <br>The colourmap opposite shows the typical colour ramp available on an 8 bit-plane display.<br> <br>Note how some of the adjacent shades show poor gradation. | This works surprisingly well, since the human eye is less sensitive to blue than it is to red or green. <br>Double-buffering such a display to 4:4 bit-planes tends to give poor shading since, even if dithering is used to give more shades, the colour range available is still poor.<br> <br>![](../Storage/primer-22-1/primer_links/graphics/cmap_8.gif) |<br>| --- | --- | |
| --- |

| 24 bit-plane screen  <br><br>| Has 2 ^24^= 16777216 colours, arranged as: <br> <br> <br><br>| 8 bits Red | = 256 shades |<br>| --- | --- |<br>| 8 bits Green | = 256 shades |<br>| 8 bits Blue | = 256 shades |<br><br> <br>The colourmap opposite shows a typical 24 bit-plane colour ramp.<br> <br>Note how all shades vary smoothly: even in the very dark and light regimes. | This is often referred to as "true" colour since the human eye can only resolve about 100 shades of each primary colour, and this system produces over twice as many shades. <br>Double-buffering to 12:12 bit planes gives 4096 shades per buffer (4 bits each of red, green and blue) which in practice, with hardware dithering, is difficult to distinguish from full 24 bit-plane colour.<br> <br>![](../Storage/primer-22-1/primer_links/graphics/cmap_24.gif) |<br>| --- | --- | |
| --- |

| Hidden-surface removal, and "Z" or "depth" buffering.  <br>Most 3D computer graphics is made up of many facets (polygons) which must be displayed correctly such that those nearest the observer obscure those which are further away. This is referred to as hidden surface removal.<br> <br>The most common method of performing this is to have an auxiliary buffer which is never drawn, but which contains the depth relative to the viewer. This is the Z dimension, where X is width and Y is height, hence "Z-buffer" or "Depth buffer". A pixel in an incoming polygon is only drawn to the display if its depth dimension is closer than the depth currently stored for that pixel in this buffer.<br> <br>Better graphics perform this in hardware, with little or no speed penalty, but on primitive displays this must be performed in software resulting in a dramatic reduction in "hidden surface" display speed. |
| --- |

####  Shading and Lighting

Most images that attempt any degree of realism (which is not always the case in engineering plots) require some degree of lighting, which results in a colour variation across facets.

Better graphics cards can be pre-programmed with light source and intensity information, and they will compute the lighting parameters of each incoming facet given its position in space. They will then shade it as required, computing all the colour variations themselves.

More primitive systems may require this to be carried out in software, again giving a dramatic reduction in speed of shaded and lit plots.

####  Double-buffering

When smooth animation or image rotation/scaling etc is required it is necessary to perform "double-buffering".

The display memory is split into two buffers: one, the front buffer, currently visible; the other, the back buffer, not displayed. Generally each buffer will use half the total graphics bit-planes available, trading off colour resolution against speed. The notation **N:N** user here (eg **12:12** ) implies double-buffering using **N** planes in each buffer.

The new image is drawn (invisibly) into the back buffer, and when it is complete the front and back buffers are swapped over exposing the new image, and the process is repeated. The buffer swap operation is performed in hardware, and can usually be done in one vertical retrace of the display - which is faster than the eye can detect - so the transition appears to be smooth.

####  Texture Mapping

Is a bit like wall-papering. A pre-defined pattern (or "texture"), such as a brick pattern for a wall, is "mapped" onto each facet with the appropriate lighting and shading superimposed.

This tends currently not to be used for engineering applications as, historically, it has been a slow process. However as graphics cards get faster expect this to appear as a rendering option.

####  Overlay Planes

Many modern graphics cards permit their memory to be partitioned so that the bit-planes used for the "image" (perhaps 24 planes) are separate from those used for other windows and menus (typically 8 planes). The latter bit-planes are given the additional, special attribute that one (reserved) colour is "transparent", which makes them usable as an "overlay".

Imagine a transparent sheet that covers your image, which can be wiped clean and redrawn without affecting the image underneath: this is how overlay planes function. The advantage is that other windows, popup menus, etc can be drawn, mapped and unmapped in the overlay planes without corrupting the image planes beneath them, removing the requirement for the (potentially slow) redraw of that image.

From release 8.1 the "screen menu" component of Oasys LS-DYNA Environment may be run in the overlay planes where the hardware supports these.

The following images (from the colour "palette" in D3PLOT) demonstrate the effect on the colours available of running the screen menu system in visuals of different depths. (The difference between 8 and 24 bit-plane depths will be undetectable in most browsers.)

| ![](../Storage/primer-22-1/primer_links/graphics/bplane_4.gif) | ![](../Storage/primer-22-1/primer_links/graphics/bplane_8.gif) | ![](../Storage/primer-22-1/primer_links/graphics/bplane_24.gif) |
| --- | --- | --- |
| 4 bit-planes. Dithering is required to achieve most shades. | 8 bit-planes. Nearly all shades are directly available | 24 bit-planes. All shades are directly available. |

[Previous](brief-description-of-how-modern-graphics-hardware-works.md)  |  [Next](graphics-over-a-network.md)