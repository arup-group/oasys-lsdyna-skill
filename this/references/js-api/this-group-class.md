# Group class

The Group class gives you access to groups in T/HIS. [More...](this-group-class.md#Group_details)

The T/HIS JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Class functions

* [DeleteGroup](this-group-class.md#Group::DeleteGroup)(group ID or name*[integer or string]*, delete automatic groups (optional)*[integer]*)
* [Get](this-group-class.md#Group::Get)(Name*[string]*)
* [GetFromID](this-group-class.md#Group::GetFromID)(ID*[integer]*)
* [Total](this-group-class.md#Group::Total)()

## Member functions

* [Add](this-group-class.md#Group::Add)(Curve*[[Curve](this-curve-class.md)]*)
* [AddAll](this-group-class.md#Group::AddAll)()
* [AddID](this-group-class.md#Group::AddID)(ID*[integer]*)
* [Contains](this-group-class.md#Group::Contains)(Curve*[[Curve](this-curve-class.md)]*)
* [ContainsID](this-group-class.md#Group::ContainsID)(ID*[integer]*)
* [GetCurveIDs](this-group-class.md#Group::GetCurveIDs)()
* [GetCurves](this-group-class.md#Group::GetCurves)()
* [Remove](this-group-class.md#Group::Remove)(Curve*[[Curve](this-curve-class.md)]*)
* [RemoveAll](this-group-class.md#Group::RemoveAll)()
* [RemoveID](this-group-class.md#Group::RemoveID)(ID*[integer]*)
* [Spool](this-group-class.md#Group::Spool)()
* [SpoolID](this-group-class.md#Group::SpoolID)()
* [StartSpool](this-group-class.md#Group::StartSpool)()

## Group properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| crv\_at\_ymax | integer | Curve number of the curve with the maximum Y value in the group. |
| crv\_at\_ymin | integer | Curve number of the curve with the minimum Y value in the group. |
| curves (read only) | integer | Number of curves in the group |
| name (read only) | string | Group name |
| x\_at\_ymax | real | X value at the maximum Y value over all curves in the group. |
| x\_at\_ymin | real | X value at the minimum Y value over all curves in the group. |
| x\_at\_yminpos | real | X value at the minimum positive Y value over all curves in the group. |
| xmax | real | Maximum X value over all curves in the group. |
| xmin | real | Minimum X value over all curves in the group. |
| xminpos | real | Minimum positive X value over all curves in the group. |
| ymax | real | Maximum Y value over all curves in the group. |
| ymin | real | Minimum Y value over all curves in the group. |
| yminpos | real | Minimum positive Y value over all curves in the group. |

| Detailed Description<br>The Group class allows you to create, and modify groups.<br>See the documentation below for more details. |
| --- |

| Constructor
new Group(name*[string]*)

Description<br>Create a new [Group](this-group-class.md) object. |
| --- |

#### Arguments

* name (string)
 
Group name used to reference the group

| Returns
<br>[Group](this-group-class.md) object<br>
Return type
<br>Group |
| --- |

| Example
<br>To create a new group with the name X-Velocity<br>
```
var l = new Group("X-velocity");
```
 |
| --- |

| Details of functions 
Add(Curve*[[Curve](this-curve-class.md)]*)

Description<br>Adds a curve object to group. |
| --- |

#### Arguments

* Curve ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) that will be added to group

| Returns
<br>No return value. |
| --- |

| Example
<br>To add curve c to curve group g:<br>
```
g.Add(c);
```
 |
| --- |

* * *

| AddAll()

Description<br>Adds all curves to group. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value. |
| --- |

| Example
<br>To add all curves to curve group g:<br>
```
g.AddAll();
```
 |
| --- |

* * *

| AddID(ID*[integer]*)

Description<br>Adds curve by ID to a group. |
| --- |

#### Arguments

* ID (integer)
 
The ID of the curve you want to add.

| Returns
<br>No return value. |
| --- |

| Example
<br>To add curve 3 to curve group g:<br>
```
g.AddID(3);
```
 |
| --- |

* * *

| Contains(Curve*[[Curve](this-curve-class.md)]*)

Description<br>Checks if a curve object is in a curve group. |
| --- |

#### Arguments

* Curve ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) that will be checked

| Returns
<br>TRUE if the curve is in the group, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if a curve object n is in group g<br>
```
var exists = g.Contains(n);
```
 |
| --- |

* * *

| ContainsID(ID*[integer]*)

Description<br>Checks if a curve ID is in a curve group. |
| --- |

#### Arguments

* ID (integer)
 
The ID of the curve you want to check.

| Returns
<br>TRUE if the curve is in the group, otherwise FALSE<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To check if a curve ID n is in group g<br>
```
var exists = g.ContainsID(n);
```
 |
| --- |

* * *

| DeleteGroup(group ID or name*[integer or string]*, delete automatic groups (optional)*[integer]*) [static]
Description<br>Deletes a curve group |
| --- |

#### Arguments

* group ID or name (integer or string)
 
ID of group to delete or name of group. If this argument is 0, delete all groups. Automatically generated groups won't be deleted unless the next argument is set to 1.

* delete automatic groups (optional) (integer)
 
If this argument is 1, automatic groups can be deleted. If no argument or 0, automatic groups cant be deleted.

| Returns
<br>No return value |
| --- |

| Example
<br>To delete group n<br>
```
Group.DeleteGroup(n);
```
 |
| --- |

* * *

| Get(Name*[string]*) [static]
Description<br>Returns a group object. |
| --- |

#### Arguments

* Name (string)
 
Name of the group to return object for

| Returns
<br>Group object (or Null if the group does not exist).<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the group called 'left'<br>
```
var group = Group.Get("left");
```
 |
| --- |

* * *

| GetCurveIDs()

Description<br>Returns an array of Curve ID's for all the Curves in the group. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of integers.<br>
Return type
<br>Number |
| --- |

| Example
<br>To make an array of Curve ID's for all the curves in group g:<br>
```
var curves = g.GetCurveIDs();
```
 |
| --- |

* * *

| GetCurves()

Description<br>Returns an array of Curve Objects for all the Curves in the group. |
| --- |

#### Arguments

No arguments

| Returns
<br>Array of Curve objects.<br>
Return type
<br>Array |
| --- |

| Example
<br>To make an array of Curve objects for all the curves in group g:<br>
```
var curves = g.GetCurves();
```
 |
| --- |

* * *

| GetFromID(ID*[integer]*) [static]
Description<br>Returns a group object. |
| --- |

#### Arguments

* ID (integer)
 
ID of the group to return object for

| Returns
<br>Group object (or Null if the group does not exist).<br>
Return type
<br>Group |
| --- |

| Example
<br>To get the group number 1<br>
```
var group = Group.GetFromID(1);
```
 |
| --- |

* * *

| Remove(Curve*[[Curve](this-curve-class.md)]*)

Description<br>Removes a curve object from a group. |
| --- |

#### Arguments

* Curve ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) that will be removed from group

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove curve c from curve group g:<br>
```
g.Remove(c);
```
 |
| --- |

* * *

| RemoveAll()

Description<br>Removes all curves from a group. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove all curves from curve group g:<br>
```
g.RemoveAll();
```
 |
| --- |

* * *

| RemoveID(ID*[integer]*)

Description<br>Remove a curve by ID from a group. |
| --- |

#### Arguments

* ID (integer)
 
The ID of the curve you want to remove.

| Returns
<br>No return value. |
| --- |

| Example
<br>To remove curve 3 from curve group g:<br>
```
g.RemoveID(3);
```
 |
| --- |

* * *

| Spool()

Description<br>Spools a group, entry by entry and returns the curve objects. See also [Group.StartSpool](this-group-class.md#Group::StartSpool) |
| --- |

#### Arguments

No arguments

| Returns
<br>Curve Object of item, or NULL if no more curves in group<br>
Return type
<br>Curve |
| --- |

| Example
<br>To spool group g:<br>
```
var id;
g.StartSpool();
while (id = g.Spool() )
{
    do something...
}
```
 |
| --- |

* * *

| SpoolID()

Description<br>Spools a group, entry by entry and returns the curve ID's or 0 when no more curves in group. See also [Group.StartSpool](this-group-class.md#Group::StartSpool) |
| --- |

#### Arguments

No arguments

| Returns
<br>integer<br>
Return type
<br>Number |
| --- |

| Example
<br>To spool group g :<br>
```
var id;
g.StartSpool();
while (id = g.SpoolID() )
{
    do something...
}
```
 |
| --- |

* * *

| StartSpool()

Description<br>Starts a group spooling operation. See also [Group.Spool](this-group-class.md#Group::Spool) |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To start spooling group g:<br>
```
g.StartSpool();
```
 |
| --- |

* * *

| Total() [static]
Description<br>Returns the total number of curve group currently defined |
| --- |

#### Arguments

No arguments

| Returns
<br>Number of curve groups currently defined.<br>
Return type
<br>Number |
| --- |

| Example
<br>To get the number of curve groups<br>
```
var total = Group.Total();
```
 |
| --- |

* * *