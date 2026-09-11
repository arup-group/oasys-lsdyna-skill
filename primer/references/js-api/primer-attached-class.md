# Attached class

The Attached class contains constants and static functions relating to the Attached() member function from the Model class. [More...](primer-attached-class.md#Attached_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
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

* [Beam3rdNodes](primer-attached-class.md#Attached::Beam3rdNodes)(Setting*[boolean]*)
* [BeamPid](primer-attached-class.md#Attached::BeamPid)(Setting*[boolean]*)
* [Deformable](primer-attached-class.md#Attached::Deformable)(Setting*[constant]*)
* [FlagPart](primer-attached-class.md#Attached::FlagPart)(Setting*[boolean]*)
* [Recursive](primer-attached-class.md#Attached::Recursive)(Setting*[boolean]*, Number (optional)*[integer]*)
* [Rigid](primer-attached-class.md#Attached::Rigid)(Setting*[constant]*)
* [SetEntity](primer-attached-class.md#Attached::SetEntity)(Type*[string]*, Setting*[boolean]*)
* [TiedContacts](primer-attached-class.md#Attached::TiedContacts)(Setting*[boolean]*)

## Attached constants

| **Name** | **Description** |
| --- | --- |
| Attached.SINGLE | [Find attached](primer-model-class.md#Model::Attached) option - find attached through single elements only |
| Attached.WHOLE | [Find attached](primer-model-class.md#Model::Attached) option - find through whole attached part |

| Detailed Description<br>The Attached class static functions are used to set options for the find attached feature in PRIMER. Once set, these settings are used when using the [Attached](primer-model-class.md#Model::Attached) member function from the Model class |
| --- |

| Details of functions 
Beam3rdNodes(Setting*[boolean]*) [static]
Description<br>Sets the [find attached](primer-model-class.md#Model::Attached) option for beam 3rd nodes on or off |
| --- |

#### Arguments

* Setting (boolean)
 
If true beam 3rd nodes are considered for find attached, if false, they are not.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the 3rd node option to on:<br>
```
Attached.Beam3rdNodes(true);
```
 |
| --- |

* * *

| BeamPid(Setting*[boolean]*) [static]
Description<br>Sets the [find attached](primer-model-class.md#Model::Attached) option for beam pid on or off |
| --- |

#### Arguments

* Setting (boolean)
 
If true beam pid's are considered for find attached, if false, they are not.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the beam pid option to on:<br>
```
Attached.BeamPid(true);
```
 |
| --- |

* * *

| Deformable(Setting*[constant]*) [static]
Description<br>Sets the deformable option for [find attached](primer-model-class.md#Model::Attached) |
| --- |

#### Arguments

* Setting (constant)
 
Option. Can be [Attached.WHOLE](primer-attached-class.md#Attached.WHOLE), [Attached.SINGLE](primer-attached-class.md#Attached.SINGLE)

| Returns
<br>No return value |
| --- |

| Example
<br>To set the deformable option to find attached through the whole part:<br>
```
Attached.Deformable(Attached.WHOLE);
```
 |
| --- |

* * *

| FlagPart(Setting*[boolean]*) [static]
Description<br>Sets an option to flag parts after a [find attached](primer-model-class.md#Model::Attached) if any elements within that part are flagged |
| --- |

#### Arguments

* Setting (boolean)
 
If true, parts are flagged after a find attached if any elements within that part are flagged, if false, they are not.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the flag part option to on:<br>
```
Attached.FlagPart(true);
```
 |
| --- |

* * *

| Recursive(Setting*[boolean]*, Number (optional)*[integer]*) [static]
Description<br>Sets the [find attached](primer-model-class.md#Model::Attached) option for recursive on or off |
| --- |

#### Arguments

* Setting (boolean)
 
If true recursive is on, if false, it is off.

* Number (optional) (integer)
 
Option to set the number of find attached iterations used when the recursive option is set.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the recursive option to on:<br>
```
Attached.Recursive(true);
```
 |
| --- |

* * *

| Rigid(Setting*[constant]*) [static]
Description<br>Sets the rigid option for [find attached](primer-model-class.md#Model::Attached) |
| --- |

#### Arguments

* Setting (constant)
 
Option. Can be [Attached.WHOLE](primer-attached-class.md#Attached.WHOLE), [Attached.SINGLE](primer-attached-class.md#Attached.SINGLE)

| Returns
<br>No return value |
| --- |

| Example
<br>To set the rigid option to find attached through the whole part:<br>
```
Attached.Rigid(Attached.WHOLE);
```
 |
| --- |

* * *

| SetEntity(Type*[string]*, Setting*[boolean]*) [static]
Description<br>Sets entity to be on or off to [find attached](primer-model-class.md#Model::Attached) through. |
| --- |

#### Arguments

* Type (string)
 
The type of the item to switch on or off (for a list of types see Appendix A of the PRIMER manual). Use "ALL" to switch all entities or "CONSTRAINEDALL" to switch all constrained entities.

* Setting (boolean)
 
If true you turn the entity switch on, if false you turn it off.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the SHELL switch to on so that when you run a find attached you fnd attached through shells:<br>
```
Attached.SetEntity("SHELL", true);
```
 |
| --- |

* * *

| TiedContacts(Setting*[boolean]*) [static]
Description<br>Sets the [find attached](primer-model-class.md#Model::Attached) option for tied contacts on or off |
| --- |

#### Arguments

* Setting (boolean)
 
If true tied contacts are considered for find attached, if false, they are not.

| Returns
<br>No return value |
| --- |

| Example
<br>To set the tied contacts option to on:<br>
```
Attached.TiedContacts(true);
```
 |
| --- |

* * *