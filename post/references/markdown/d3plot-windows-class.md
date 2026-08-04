# Windows

Functions and constants relating to Windows

## Functions

* [CreateWindow](d3plot-windows-class.md#Windows::CreateWindow)(model\_list*[Array of integers|integer]*)
* [DeleteWindow](d3plot-windows-class.md#Windows::DeleteWindow)(window\_list*[Array of numbers|number]*, dispose\_flag (optional)*[integer]*)
* [GetWindowFrame](d3plot-windows-class.md#Windows::GetWindowFrame)(window\_id*[integer]*)
* [GetWindowMaxFrame](d3plot-windows-class.md#Windows::GetWindowMaxFrame)(window\_id*[integer]*)
* [GetWindowModels](d3plot-windows-class.md#Windows::GetWindowModels)(window\_id*[integer]*)
* [SetWindowActive](d3plot-windows-class.md#Windows::SetWindowActive)(window\_id*[integer]*, active\_flag*[integer]*)
* [SetWindowFrame](d3plot-windows-class.md#Windows::SetWindowFrame)(window\_id*[integer]*, frame\_number*[integer]*)

| Details of functions 
CreateWindow(model\_list*[Array of integers|integer]*) [static]
Description<br>Creates a new window containing one or more models contained in model\_list |
| --- |

#### Arguments

* model\_list (Array of integers|integer)
 
Model number(s). Can be a single model number, an array of model numbers or the constant [ALL](d3plot-sharedconstants-class.md#SharedConstants.ALL)

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Create a new window containing models #2 and #3
var a = new Array(2, 3);
CreateWindow(a);

// Create a new window containing model #6
CreateWindow(6);

// Create a new window containing all currently active models
CreateWindow(ALL);

```
<br><br> |
| --- |

* * *

| DeleteWindow(window\_list*[Array of numbers|number]*, dispose\_flag (optional)*[integer]*) [static]
Description<br><br><br><br>Deletes one or more windows in window\_list, dealing with "orphaned" models according to dispose\_flag.<br>
**WARNING**<ul>
<li>D3PLOT does not permit gaps in window numbering, therefore when</li>
a window is deleted any windows higher than this are renumbered
downwards to fill the gap.
<li>However D3PLOT does <i><b>not</b></i> renumber models following</li>
the deletion of preceding ones. Deleted model ids simply become
&quot;inactive&quot;.
</ul>This means that following a window deletion operation:<ul>
<li>The total number of windows will change.</li>
<li>Any window ids above those deleted will have been renumbered</li>
downwards.
<li>If any orphan models were deleted these models will now be inactive.</li>
<li>If the current Javascript model has been deleted then the &quot;current&quot;</li>
model pointer will be reset to the first active model, or &lt;undefined&gt;
if there are no such models.
</ul>
Therefore if a script is to continue execution after a window deletion
operation it is prudent to ensure that any "current" user-defined
variables in the Javascript are reset to sensible values. |
| --- |

#### Arguments

* window\_list (Array of numbers|number)
 
Window numbers. Can be a single window number, an array of window numbers or the constant [ALL](d3plot-sharedconstants-class.md#SharedConstants.ALL)

* dispose\_flag (optional) (integer)
 
[LEAVE](d3plot-sharedconstants-class.md#SharedConstants.LEAVE) (default) leaves orphaned models in the database or [DELETE](d3plot-sharedconstants-class.md#SharedConstants.DELETE) deletes orphaned models

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Delete windows #2 and #3 leaving any orphaned models in the database
var a = new Array(2, 3);
DeleteWindow(a);

// Delete window #6, also deleting any orphaned models
DeleteWindow(6, DELETE);

```
<br><br> |
| --- |

* * *

| GetWindowFrame(window\_id*[integer]*) [static]
Description<br><br><br><br>Returns the current "frame" in window\_id<br>
<br>See the notes in [GetWindowMaxFrame()](d3plot-windows-class.md#Windows::GetWindowMaxFrame) on how frame number relates to state number |
| --- |

#### Arguments

* window\_id (integer)
 
Window number or [ALL](d3plot-sharedconstants-class.md#SharedConstants.ALL). Specifies the window(s) to have the frame number set

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Get the current frame of window #1
var a = GetWindowFrame(1);

```
<br><br> |
| --- |

* * *

| GetWindowMaxFrame(window\_id*[integer]*) [static]
Description<br><br><br><br>Returns the highest "frame" number in window\_id<br>
<br>"Frame" number is usually the same as state number, but there are a few situations<br>when this is not the case:<br><ul>
<li>Eigenvalue analyses. Each state is animated though <i>#frames</i> between +/-180 degrees phase angle</li>
<li>Nastran-derived static analyses. Each loadcase is likewise animated through <i>#frames</i></li>
<li>Transient analyses that are being interpolated by time, giving (endtime / time interval) frames</li>
</ul>
<br>In all cases animating a window results in it cycling through frames 1 to max *#frames*. |
| --- |

#### Arguments

* window\_id (integer)
 
Window number

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Get the highest frame of number in window #2
var a = GetWindowMaxFrame(2);

```
<br><br> |
| --- |

* * *

| GetWindowModels(window\_id*[integer]*) [static]
Description<br><br><br><br>Returns the model number(s) in window\_id<br>
<br>Every active window in D3PLOT must have at least one model, but may have any number |
| --- |

#### Arguments

* window\_id (integer)
 
Window number

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| list | Array of integers | List of model numbers |
| nm | integer | the number of models in the window |

#### Return type

object

| Example
<br><br><br>
```

// Get list of model numbers in window #1
var a = GetWindowModels(1);

for(i=0; i<a.nm; i++)
{
    Message("Model " + a.list[i] + " in window 1");
}

```
<br><br> |
| --- |

* * *

| SetWindowActive(window\_id*[integer]*, active\_flag*[integer]*) [static]
Description<br><br><br><br>Set the "active" flag on a window.<br>
<br>When more than one window is in use it is convenient to be able to operate on a group of<br>"active" windows with a single command in the JavaScript, rather than having to loop over<br>selected windows each time, and this function provides that capability. This activity<br>status is used solely within the Javascript interface and does not have any bearing upon<br>or connection with the Wn "tabs" used in the graphical userinterface.<br>
<br>By default all windows are active (ON), but you can change this by setting the activity<br>of specific windows ON or OFF. |
| --- |

#### Arguments

* window\_id (integer)
 
Window number or [ALL](d3plot-sharedconstants-class.md#SharedConstants.ALL). Specifies the window(s) to have their status set

* active\_flag (integer)
 
[OFF](d3plot-sharedconstants-class.md#SharedConstants.OFF) or [ON](d3plot-sharedconstants-class.md#SharedConstants.ON). OFF makes the selected window(s) inactive, ON makes window(s) active

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Turn off the activity flag for window #1
SetWindowActive(1, OFF);

// Make all current windows active
SetWindowActive(ALL, ON);

```
<br><br> |
| --- |

* * *

| SetWindowFrame(window\_id*[integer]*, frame\_number*[integer]*) [static]
Description<br><br><br><br>Sets the current "frame" in the window(s) specified to frame\_number.<br>
<br>The effect is immediate and the window(s) will be redrawn if necessary to show the requested frame<br>
<br>See the notes in [GetWindowMaxFrame()](d3plot-windows-class.md#Windows::GetWindowMaxFrame) on how frame number relates to state number |
| --- |

#### Arguments

* window\_id (integer)
 
Window number or [ALL](d3plot-sharedconstants-class.md#SharedConstants.ALL)

* frame\_number (integer)
 
The frame number to set. Should be a +ve integer value in the range 1 to max #frames in window.
Values greater than max #frames are truncated to this

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Set window #1 to display frame #10
SetWindowFrame(1, 10);

// Set all windows to display frame #3
SetWindowFrame(ALL, 3);

```
<br><br> |
| --- |

* * *