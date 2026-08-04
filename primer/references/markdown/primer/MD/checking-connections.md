###  Checking Connections

As well as checks under the normal [model checking](model-check.md), there are three PRIMER functions that allow you to check properties of spotwelds.

[Connectivity](checking-connections.md#checkconnectivity)checks the quality of spotweld connectivity. 
 [Conflicting](checking-connections.md#conflict), where PRIMER checks for the distances between welds and offers to delete welds that are too close together. 
 [Contacts](checking-connections.md#contact)where PRIMER looks to see if the spotwelds are part of a tied contact in the model.

####  Checking connectivity

| PRIMER will check all of the spotweld connections in the model to see if they are tied correctly. If any of the weldsare not PRIMER will put them onto the [connection table](connection-table.md)and you can use it to visualise and fix the welds. For more details see . | ![](../Storage/primer-22-1/primer_links/sect_6/connection/check1.gif) |
| --- | --- |

####  Checking conflicting welds

| PRIMER will check to see if any spotweld connections in the model are too close to each other. Enter the Min weld distance and then you can either<br> <ul> <li> <span class="buttontext">List </span>- list all conflicting the welds </li> <li> <span class="buttontext">Delete </span>- delete a subset of welds to remove the conflict (same as model autofix) </li> <li> <span class="buttontext">-&gt;Table </span>- send all conflicting welds to table where you can delete them or merge them </li> </ul> | ![](../Storage/primer-22-1/primer_links/sect_6/connection/check2.gif) |
| --- | --- |

#### Checking weld contacts

| PRIMER will check to see which spotweld connections are not in a tied contact.<br> <br>Any beams, solids or parts that are not in a tied contact will be put into sets so that you can visualise them.<br> <br>Note - this function will only work when you have a **single connection contact** . For a more generic treatment you should use the function under  [CONNECTIONS &gt; CONTACT](connection-contact.md#conx_contact). | ![](../Storage/primer-22-1/primer_links/sect_6/connection/check3.gif) |
| --- | --- |

[Previous](connection-contact-semi-automatic-fix.md)  |  [Next](connection-compare.md)