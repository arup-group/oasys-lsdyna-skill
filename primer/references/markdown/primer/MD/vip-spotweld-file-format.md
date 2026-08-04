####  VIP Spotweld File Format

The VIP spotweld file has a set format and is read into PRIMER in the following way:

The only lines PRIMER reads are lines containing "WSPOT". PRIMER expects the following comma separated order:

&lt;string&gt;,&lt;weld id&gt;,&lt;diameter&gt;,&lt;X coord&gt;,&lt;Y coord&gt;,&lt;Z coord&gt;,&lt;part strings&gt; 
 
The part strings can either be numbers to represent part ID's, or strings to represent CAD name. With the CAD name method, PRIMER will look for any parts which have a specific CAD name specified through the BOM feature. Failing that, PRIMER will look at the heading/title of the \*PART cards to see if they contain the string specified. Once found, these parts are used to create the connection. Note that for the CAD name method, PRIMER will reference all parts that contain the string in it's heading/title, not just the first one found. Note that id a diameter is not set in the VIP file, PRIMER will use the diameter set on the connection read panel (default 5.0).

An example file is as follows:


```
WSPOT,1,5.0,2634.646973,-693.717102,604.670898,A_pillar_lower_support_a,sill_swan_neck,
WSPOT,2,5.0,3142.419922,-693.741089,547.757629,sill_swan_neck,seat_xmember_outer,
WSPOT,3,6.0,3142.419922,-693.741089,522.757629,sill_swan_neck,seat_xmember_outer,
WSPOT,4,6.0,3101.430908,-693.741089,483.074829,seat_xmember_outer,sill_swan_neck,
WSPOT,5,5.0,3075.443115,-693.741089,483.392059,seat_xmember_outer,sill_swan_neck,
WSPOT,6,4.5,3049.455078,-693.741150,483.709290,seat_xmember_outer,sill_swan_neck,
WSPOT,7,4.0,3023.467041,-693.741150,484.026611,seat_xmember_outer,sill_swan_neck

```

[Previous](ug-spotweld-file-format.md)  |  [Next](master-connection-file-mcf-format.md)