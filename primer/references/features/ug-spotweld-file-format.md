####  UG Spotweld File Format

The UG spotweld file has a set format and is read into PRIMER in the following way:

The first line is skipped, and after that the only lines PRIMER reads are lines containing "spot". PRIMER expects the following comma separated order:

&lt;string&gt;,&lt;weld id&gt;,&lt;number of panels to weld&gt;,&lt;X coord&gt;,&lt;Y coord&gt;,&lt;Z coord&gt;,&lt;part strings&gt;

The part strings should match exactly what PRIMER contains in the \*PART title fields.

An example file is as follows:


```
WELD_TYPE,ID,NUMBER OF SHEETS WELDED,X_POS,Y_POS,Z_POS,CONNECTED PART 1,CONNECTED PART 2,CONNECTED PART 3,CONNECTED PART 4
SPOT_WELD_TYPE_UNKNOWN
resistance spot,2,2,2623.941895,-693.717041,605.340027,A_pillar_lower_support_a,sill_swan_neck,
resistance spot,3,2,2634.646973,-693.717102,604.670898,A_pillar_lower_support_a,sill_swan_neck,
resistance spot,4,2,3142.419922,-693.741089,547.757629,sill_swan_neck,seat_xmember_outer,
resistance spot,5,2,3142.419922,-693.741089,522.757629,sill_swan_neck,seat_xmember_outer,
resistance spot,6,2,3101.430908,-693.741089,483.074829,seat_xmember_outer,sill_swan_neck,
resistance spot,7,2,3075.443115,-693.741089,483.392059,seat_xmember_outer,sill_swan_neck,
resistance spot,8,2,3049.455078,-693.741150,483.709290,seat_xmember_outer,sill_swan_neck,
resistance spot,9,2,3023.467041,-693.741150,484.026611,seat_xmember_outer,sill_swan_neck

```

[Previous](primer-spotweld-file-format.md)  |  [Next](vip-spotweld-file-format.md)