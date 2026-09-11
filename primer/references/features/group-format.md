###  Group Format

Groups are written to the keyword deck after the \*END keyword. As with any keyword lines beginning with a $ are treated as comments and skipped. 
 It is strongly recommended that you do not edit the groups by hand. Use the group creating/editing capabilities of PRIMER. 
 Entities can be added to a group by one of three methods;

* Selecting all entities (optionally in a box)
* Selecting a list of entities (optionally in a box)
* Selecting a range of entities (optionally in a box)

The box is used for selecting a subset of the entities that are in the box. For example if the group contained ' *all elements inside box 1*' then only the elements that are in box 1 will be used, not all the elements.

Entities can be added or removed from a group. For example you may want a group to contain ' *all elements except those in box 1*'. You could do this by first '*adding all elements*' and then '*removing elements in box 1*'.

####  Example


```
*GROUP
$<title>
This is the example group title
$<label> < visual attributes of the group>
1 R255G000B000 50 CURRENT * * * * UNBLANKED
$ The following lines give examples of a group
$
$ Adding all parts to a group 
PART ALL
$ Adding all parts to a group in box 1
PART ALL BOX 1
$ Removing all parts from a group in box 2. Note -PART
-PART ALL BOX 2
$ Adding a list of shells to a group
SHELL 1 20 23 100 200
$ Adding a list of shells to a group in box 2
SHELL 1 20 23 100 200 BOX 2
$ Adding a range of nodes (100 to 1000) to a group
NODE 100:1000
$ Adding a range of nodes (100 to 1000) to a group in box 2
NODE 100:1000 BOX 2
$ Removing a range of beams from a group. Note -BEAM
-BEAM 50:60

```
 
#### Order of calculation of Groups
 
The order in which things are added to/removed from groups is important. To stop any ambiguity the following order is used.
 
First, entities are added to groups in the following order:

* SET\_PART
* PART
* other set types
* elements
* other entities alphabetically

Then, entities are removed from groups (if needed) in the same order.
 [Previous](group-io.md)  |  [Next](creatingediting-groups.md)