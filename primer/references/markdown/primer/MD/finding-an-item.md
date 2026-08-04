###  Finding an Item

![](../Storage/primer-22-1/finding-an-item/finding-an-item-2024-11-27.png)

In its default mode, FIND is a sketch function for a single item with a generic object menu. The sketch options may be set exactly as described above.

FIND also offers a number of additional features.
 
#### Stipple and wireframe draw
 
The drawing mode, normal draw by default, can be set to use stippled draw (a form of transparency) or wireframe draw to enable the sketched item to be seen. This is useful if the item is enclosed.
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find7.gif)
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find8.gif)
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find9.gif)
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find10.gif)

#### Find with Only
 
Before applying automatic blanking you may wish to store the current blanking status of the model by a press on Store blanking. On completion of the Find operation you can use RESET VIEW to restore the image.
 
Methods are available: Only; Only with attached; Volume clipped view; Surface clipping. By default autoscale will be applied but this can be de-activated.
 
Only on an ill-conditioned spherical joint gives the following image.
 
![](../Storage/primer-22-1/finding-an-item/finding-an-item-2024-11-27-5.png)
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find12.gif)

#### Find with Only & Attached
 
Switch to Only + attached to find the rigid bodies on the joint
 
![](../Storage/primer-22-1/finding-an-item/finding-an-item-2024-11-27-4.png)
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find14.gif)
 
#### Find with Volume Clipping
 
Volume clip view will show everything that is attached to nodes that lie in the spatial volume NxNxN centred on the selected object, where the value of N is controlled by the user. This is useful when the selection consists of an NRB, a single beam element or a small part. If, for example, all wheels of vehicle shared the same part, selecting that may not be helpful.
 
![](../Storage/primer-22-1/finding-an-item/finding-an-item-2024-11-27-6.png)
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find16.gif)

#### Find with Surface Search
 
Surface search can be applied to solid or shell part and will find all items which lie withing the search tolerance.
 
Comparison with results of attached search is useful for finding items which should attach but do not as yet.
 
![](../Storage/primer-22-1/finding-an-item/finding-an-item-2024-11-27-7.png)
 
![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find19.gif)

####  If there is an active item as displayed on the find header, EDIT ITEM may be used to open an edit panel or keyword editor.Editing with Find

![](../Storage/primer-22-1/primer_links/sect_6/find_sketch/find17.gif)

[Previous](sketching-a-single-item.md)  |  [Next](fmh-markup-script.md)