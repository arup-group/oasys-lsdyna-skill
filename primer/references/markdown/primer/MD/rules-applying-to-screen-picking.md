###  Rules Applying to Screen-Picking

Screen-picked entries (by any method) go into the cursor list, of which the 10 most recent entries are shown in this box.

Note that:

* The current FILTER setting also applies to screen-picking:  ***you will not be able to pick an item that has been filtered out.***

* Multiple (Area, Circle or Polygon) picking is only available in contexts where it makes sense. If, for example, you are picking a single node for an element you will not be permitted to drag out an area. The cursor symbol gives a prompt: a "cross" permits only scalar picks, a "hand" permits multiple picks.

* When 3D elements are picked by area or polygon the treatment of elements inside a mesh, which are not drawn because all their faces are "internal", depends on the [AREA\_PICK](area-pick-what-is-visible-when-area-or-polygon-picking.md#area_vis)****setting below.

* Screen-picked items can be rejected in a range of ways - [see below](rejectingapplying-items-that-have-been-screen-picked.md#Rejectingitemsthathavebeenscreenpicked)

[Previous](feature-line-picking.md)  |  [Next](rejectingapplying-items-that-have-been-screen-picked.md)