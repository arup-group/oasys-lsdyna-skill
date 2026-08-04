###  The POST Panel

| Initial status  <br>For each model currently in the database PRIMER scans the directory containing the top (master) keyword file looking for results based on input filename, then for each model the initial status will be one of:<br> <br><br>| **Option** | **Status of model** | **Action performed** |<br>| --- | --- | --- |<br>| ![](../Storage/primer-22-1/primer_links/sect_3/images/post_3.png)<br> <br>![](../Storage/primer-22-1/primer_links/sect_3/images/post_4.png) | Found graphical post files<br> <br>Found time-history files | Launch D3PLOT with these results<br> <br>Launch T/HIS with these results |<br>| ![](../Storage/primer-22-1/primer_links/sect_3/images/post_5.png) | No sesults files found | You must browse for results before a post-processor can be launched. |<br><br> <br>In this example results have been found for the first model M1, but not for the second M2. No linked post-processor has been opened yet.<br> <br>(There is a corresponding Pre panel in D3PLOT and T/HIS, with similar layout and functionality.) | ![](../Storage/primer-22-1/primer_links/sect_3/images/post_2.png) |
| --- | --- |

####  Filename search logic 
 
The logic that PRIMER uses to search for files is based on input master keyword file  ***path/name***  .k\*. In directory  ***path***  it searches for:

| For D3PLOT it searches for | ***name***  .ptf <br>d3plot |
| --- | --- |
| For T/HIS it searches for | ***name***  .thf,  ***name***  .xtf <br>d3thdt <br>binout\* <br>Any ascii database names, eg abstat, glstat, etc. |

The first match, in the order above, in any category is treated as "results found".

####  Status once a post-processor is opened 
 
Once a child D3PLOT and/or T/HIS process has been started there is a shared memory link between those codes and this PRIMER session.
 
Each process runs autonomously, and if you Disconnect D3PLOT or T/HIS they will continue to run in the normal way. Similarly if you disconnect or terminate those codes locally PRIMER will detect this, clean up the shared memory link and continue to run normally.
 ![](../Storage/primer-22-1/primer_links/sect_3/images/post_6.png) 
####  Effects of linking and unlinking models 
In all cases: 
* Linking or disconnecting a model does not affect that model's status in either programme, both D3PLOT and/or T/HIS and PRIMER will continue to run normally.
* Models may be disconnected and reconnected at will.
* When a model is deleted in PRIMER it is implicitly disconnected in D3PLOT and/or T/HIS, but will not be deleted from those codes. Similarly if a model is deleted in D3PLOT or T/HIS is will be disconnected from PRIMER, but not deleted.
* The link logic attempts to keep model numbers the same in PRIMER, D3PLOT and T/HIS, however it is possible to defeat this by opening additional models in one programme but not the other. Doing so may cause the linkage to fail in some respects (so don't do it!) .
* The POST panel can be opened or closed at will without affecting the status of linked models, it simply provides feedback about the current status and attributes of linked models.

 [Previous](model-post.md)  |  [Next](synchronising-attributes.md)