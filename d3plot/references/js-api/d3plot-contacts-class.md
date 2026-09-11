# Contacts

Functions and constants relating to Contacts

## Functions

* [GetSegmsInSurface](d3plot-contacts-class.md#Contacts::GetSegmsInSurface)(surface\_id*[integer]*)
* [SpoolNodesInSurface](d3plot-contacts-class.md#Contacts::SpoolNodesInSurface)(surface\_id*[integer]*, index*[integer]*, side*[integer]*)

## Contacts constants

| **Name** | **Description** |
| --- | --- |
| MASTER | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Master side on contact surface. Use [Contact.SURFB](d3plot-contact-class.md#Contact.SURFB) instead [deprecated] |
| SLAVE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Slave side on contact surface. Use [Contact.SURFA](d3plot-contact-class.md#Contact.SURFA) instead [deprecated] |

| Details of functions 
GetSegmsInSurface(surface\_id*[integer]*) [static]
Description<br>Returns the start and end indices of the tracked and reference segments in a contact surface |
| --- |

#### Arguments

* surface\_id (integer)
 
The contact surface in which to return the list of segments. If +ve, the internal surface number starting at 1.
If -ve, the external surface label. Internal numbers will be many times faster to process.

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ms\_end | integer | End index of reference surface segments |
| ms\_start | integer | Start index of reference surface segments |
| ss\_end | integer | End index of tracked surface segments |
| ss\_start | integer | Start index of tracked surface segments |

#### Return type

object

| Example
<br><br><br>
```

// Get the segment indices of the first contact surface in the current model
if(a = GetSegmsInSurface(1))
{
    for(var i=a.ss_start; i<=a.ss_end; i++)
    {
        Message("Tracked segments: " + GetLabel(SEGM, i));
    }
}

```
<br><br> |
| --- |

* * *

| SpoolNodesInSurface(surface\_id*[integer]*, index*[integer]*, side*[integer]*) [static]
Description<br>Spools through the nodes on a contact surface |
| --- |

#### Arguments

* surface\_id (integer)
 
The contact surface in which to spool. If +ve, the internal surface number starting at 1.
If -ve, the external surface label. Internal numbers will be many times faster to process.

* index (integer)
 
Index of node to get in contact surface. To setup the spool, this has to be set to zero initially

* side (integer)
 
The side of the contact surface: [Contact.SURFA](d3plot-contact-class.md#Contact.SURFA) or [Contact.SURFB](d3plot-contact-class.md#Contact.SURFB)

| Returns
<br>integer. If the &lt;index&gt; is zero then this will be the number of nodes on the surface. If it's greater than zero<br>then the return value is the index'th node in the surface. If the call fails then false is returned.<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Get the nodes in the SURFA side of the first contact surface in the current model
if(n = SpoolNodesInSurface(1, 0, Contact.SURFA)) //Setup spool, index=0
{
    // Spool through nodes
    for(var i=1; i<=n; i++)
    {
        nid = SpoolNodesInSurface(1, i, Contact.SURFA);
        Message("Node: " + GetLabel(NODE, nid));
    }
}

```
<br><br> |
| --- |

* * *