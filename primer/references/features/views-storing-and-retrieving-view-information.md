###  VIEWS... Storing and Retrieving "View" Information

####  What is a view?

A "view" is all the information required to set up the current view of the object. In practice this means:

- The current rotation matrix (3 direction cosines).

- The current image centre location in space (x,y,z coordinate).

- The current magnification scale.

- The current perspective distance.

Up to 100 such views may be stored and retrieved at will from a file, and any number of such files may exist. A view is given a name and number when it is stored, and these are used when retrieving it

####  Up to and including release 9.3: Views are stored parametrically.

What this means is that views are not tied to a particular model, they will work for any model of similar dimensions. So if you are working on a set of variants of an analysis you can share the views on file between them: this is why they are stored in a separate, model-independent file. It is only when the shape and/or size of a model differs wildly from the original from which the view was created that this shareability fails.

####  From release 9.3.1 onwards: Views are stored explicitly

The parametric method described above was not a success, as users wishing to compare models visually found it misleading. Therefore from release 9.3.1 onwards views are now stored explicitly, and no account is taken of model size or position. Put qualitatively: the camera now stays in the same place with the same settings.

Retrieval of views is backwards-compatible. A view stored prior to V9.3.1 will read successfully into V9.3.1 onwards, but will be converted to "explicit" format if subsequently saved.

####  Using views

PRIMER always has a current "view" definition. This dictates how the image will appear when a drawing command is issued. You can save the current view to file at any time. Likewise you can retrieve a stored view to replace the current one at any time. 
The current view only exists in memory, and changing it has no influence on any views stored on file. (Indeed you don't need to have a stored view file: the default is none.)

| Managing views  <br>When you press the Views ... button you get the View Management panel shown in figure 10 .5.1(a).<br> <br>The controls are described below. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1a.gif) |
| --- | --- |

#### STORE Storing the current view on file
 
![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_1b.gif)You are presented with the STORE view menu showing views 1 to 100, and you must choose which one this view is to be stored as.
 
Views currently in use are red, with their current names shown; unused views are green, and marked &lt;Not in use&gt; .
 
Once you have defined the view number, then give a name. A default name of "View &lt;n&gt;" is provided, but any name is valid.

 ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_1a.gif)

Up to 100 views can be stored in a file, and views can be overwritten at will. If no explicit file has been opened the default file plot.view is opened automatically and used.
 
#### GET Retrieving a view from file
 
![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_2a.gif)You can only retrieve from file views that already exist.
 
You are presented with the GET view menu of stored views, and must pick one. In this example three views are available.The attributes of the stored view are converted from parametric form to your model's coordinate system, and then become the current view.
 
If the UPDATE\_LEVEL is 2 or above (see ) then the view takes effect immediately, otherwise it becomes effective the next time you issue a drawing command.
 
#### RENAME Renaming stored views

| You can rename any stored view.<br> <br>Select a view from the RENAME view menu, then give it a new name.<br> <br>Any (or no) name is acceptable. This is simply a label by which the view is known.<br><br>Here the user has chosen to rename view #2, currently called "Side view". | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_3a.gif) | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_3b.gif) |
| --- | --- | --- |

| DELETE Deleting stored views <br>You can only delete existing views. Select a view from the DELETE view menu, and it will be deleted.<br> <br>There is no warning or confirmation dialogue, so make sure that you want to do this! CANCEL can be used to abort the operation. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_4a.gif) |
| --- | --- |

| LIST Listing stored views  <br>You can list information about stored views to screen with the LIST option.<br> <br>If you have a lot of views this is a better way of listing them than trying to use the menus in a confined space. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_5a.gif) |
| --- | --- |

| FILE Selecting/Defining a View Storage filename  <br>By default views are stored in a file called plot.view, and generically the view storage file is referred to as the &lt;plot.view&gt; file.<br> <br>However you may choose any filename, and you may have any number of view storage files. To open a new or existing &lt;plot.view&gt; file use the FILE command, and enter a new filename. <br> <br>To use the file filter click the button to the right of the field. | ![](../Storage/primer-22-1/primer_links/sect_9/images/fig_9_5_1_6a.gif) |
| --- | --- |

[Previous](further-commands-in-the-viewing-menu.md)  |  [Next](persp-setting-perspective-attributes.md)