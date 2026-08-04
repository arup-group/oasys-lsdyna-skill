###  DEFORMABLE_TO_RIGID: Switching Parts

[*DEFORMABLE_TO_RIGID and DEFORMABLE_TO_RIGID_INERTIA](deformable-to-rigid-switching-parts.md#none_and_inertia) 
 [DEFORMABLE_TO_RIGID_AUTOMATIC](deformable-to-rigid-switching-parts.md#auto)

This submenu panel is slightly different to the standard panels in PRIMER because there are 2 separate editing panels for DEFORMABLE\_TO\_RIGID - one for \_AUTOMATIC, and one for \_NONE and \_INERTIA. To get to the \_NONE and \_INERTIA use the keyword button.

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_main1.png)

To get to the \_AUTOMATIC case, press the \_AUTOMATIC mode button and then use Create or Modify buttons as required.

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_main2.png)

* * *

####  *DEFORMABLE_TO_RIGID and _INERTIA

This is a standard keyword panel, described in [The Generic KEYWORD Editing Panel](the-generic-keyword-editing-panel.md#keywordedit). Use the popups from the auto button on top or from suffixes button to toggle between the two types.

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_keywd.png)

Popup from suffix

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_keywd1.png)

Popup from auto button

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_keywd2.png)

* * *

####  Creating multiple *DEFORMABLE_TO_RIGID and _INERTIA cards

In addition to the standard creation/modification of these standard keywords, we use "Multiple" option to create cards with different "PID", keeping the remaining fields same.

**Example:**

Fill all the fields expect PID with the required data. Right-click on the PID field and select MULTIPLE option from the popup.

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_keywd_mul.png)

Next, from the object menu select the required parts and hit apply

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_keywd_mul2.png)

Multiple cards will be created as shown in the following figure.

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_keywd_mul3.png)

* * *

####  *DEFORMABLE_TO_RIGID_AUTOMATIC

The \_AUTOMATIC case has its own menu because it doesn't fit into the standard keyword layout. Define the number of D2R and R2D conversions, and the rows beneath will become active, allowing the user to enter part ids.

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_auto.png)

* * *

####  Adding/Removing multiple PID's on *DEFORMABLE_TO_RIGID_AUTOMATIC cards

**Adding multiple PIDs to D2R cards**

To add multiple PID's, press the "Add multiple PID's" button under D2R cards. A new panel appears with an object menu and "LRB" field as shown below.

![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_auto_mul1.png)
 
Hit "Apply" button after selecting the required parts and LRB. Multiple D2R cards will be created as shown in the following figure.
 
![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_auto_mul2.png)
 
**Removing multiple PIDs on D2R cards**
 
To remove multiple PID's, press the "Remove multiple PID's" button under D2R cards. An object menu appears as shown in the following figure. Hit "Apply" button after selecting the required parts and the corresponding PID's will be removed form the list.
 
![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_auto_mul3.png)
 
**Adding/Removing multiple PIDs on R2D cards**
 
To add/remove multiple PID's, press the "Add multiple PID's" or "Remove multiple PID's" button under R2D cards respectively (as in D2R case). Hit "Apply" button after selecting the required parts from the object menu and the corresponding PID's will be Added/Removed form the list.
  
* * *
 
####  ONLY OPTION 
 
The "ONLY" button on the submenu panel is use to view/display only the selected DEF\_2\_RIGID cards. Select the required card(s) from the object menu and hit "APPLY" button to view them.
 
![](../Storage/primer-22-1/primer_links/sect_5/def2rg/def_2_rg_only.png)

[Previous](define-vector.md)  |  [Next](element-defining-structural-elements.md)