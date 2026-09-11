####  Catia Spotweld File Format

The Catia spotweld file has a set format and is read into PRIMER in the following way:

The lines are split into words and parsed until one matches the following format: 
&lt;string&gt; &lt;string&gt; &lt;string&gt; &lt;floating point number&gt;,&lt;floating point number&gt;,&lt;floating point number&gt; &lt;strings&gt;

The first string is stripped of non-digits to obtain a weld ID. e.g. 4118-5o converts to 41185. 
The second string identifies how many parts the weld should attach and the reader should look for. 
The three floating point numbers are stored as X Y and Z coordinates for the weld. 
The reader then takes the amount of parts to look for (from the second string) and looks in the following lines for a part ID. The part ID is taken from characters 28 to 34 inclusive and should result in a 7 digit number. If it's identified as a 2 thickness weld, then PRIMER will expect a part ID in each of the next 2 lines.

An example file is as follows:


```
=======================================================================
| BIW Assembly Features :                                             |
=======================================================================
   
SPOT WELDS
==========
   
ID      Feature Location (X,Y,Z)
--      ------- ----------------
4118-5o 2T Spot 4074.49,-295.82,1680.00 Ordinary class 3 Jul 29,2002 No 
   - NEED TO BE FIXED - 1: 55354119AB A (MO-6000 44A, 0.79 mm)
   - NEED TO BE FIXED - 2: 55396175AA A (M3-67, 2.03 mm)
```


```
4118-7o 2T Spot 2041.68, -301.24, 1680.00 Ordinary class 3 Jul 29,2002 No 
   - NEED TO BE FIXED - 1: 55354119AB A (MO-6000 44A, 0.79 mm)
   - NEED TO BE FIXED - 2: 55396175AA A (M4-67, 2.03 mm)
```


```
4118-9o 2T Spot 2038.04, -356.46, 1680.00 Ordinary class 3 Jul 29,2002 No 
   - NEED TO BE FIXED - 1: 55354119AB A (MO-6000 44A, 0.79 mm)
   - NEED TO BE FIXED - 2: 55396175AA A (MY-67, 2.03 mm)

```

[Previous](modifying-spotwelds-and-adhesives-through-lines.md)  |  [Next](primer-spotweld-file-format.md)