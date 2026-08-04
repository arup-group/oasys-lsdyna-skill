####  Finding Out Why an Item is Locked Against Deletion

| ![](../Storage/primer-22-1/primer_links/sect_6/remove/fig_6_4_1_2e.png)<br>You can find out why items have not been deleted by clicking on the relevant [?] button in the "Why" column.<br> <br>For example the PART definition above was not deleted, and the "Why" button produces this panel which shows that it is referenced by:<br> <ul style="font-size: 14.6667px;"> <li>Two *SET_PART definitions. (These would not in themselves lock the part if&#160;<span class="buttontext">Remove from Sets&#160;</span>is active)<br><br></li> <li>Two connections. It is these which are truly locking the part.</li> </ul>  You can delve deeper into exactly what is locking the item by using the X-Refs button to map the standard Cross-references panel. |
| --- |

[Previous](example.md)  |  [Next](force-del-using-forcible-deletion.md)