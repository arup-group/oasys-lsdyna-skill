##  Creating Encapsulated Postscript (EPS) Files

EPS format is used by many software packages to import postscript images. The laser files written by PRIMER are not in EPS format, but only two very simple edits at the top of the file are required to change this.

| The first seven lines of any PRIMER laser file look like this: | To convert it to EPS format you must add a " **%%BoundingBox:** " line, and delete the " **statusdict** " line. Thus this file becomes: |
| --- | --- |
| %!PS-Adobe-2.0<br> <br>%%EndComments<br> <br>%%Pages: 1<br> <br>%%Page: 1 1 | %!PS-Adobe-2.0<br> <br>%%BoundingBox: 0 0 595 842<br> <br>%%EndComments<br> <br>%%Pages: 1<br> <br>%%Page: 1 1 |
| statusdict begin<br> <br>/a1test save def | /a1test save def |
| The arguments of the "BoundingBox" line are the Postscript coordinates:<br> <br><br>>  <br>> <br>> >  <br>> > &lt;lower left&gt; &lt;lower right&gt; &lt;upper left&gt; &lt;upper right&gt;<br>> >  <br>> <br>>  <br><br> <br>These must be expressed in raw Postscript space of 72 points per inch, and they assume that the paper is in portrait format with its origin at its lower left corner.<br> <br>The values in the example above refer to A4 format: 210 x 297 mm = 595 x 842 points; US "letter" paper would give 8.5" x 11" = 612 x 792 points. Clearly a smaller bounding box would select only a subset of the image.<br> <br>For more information on encapsulated postscript see the "PostScript Language Reference Manual, 2nd edition" by Adobe Systems Incorporated. (Published by Addison Wesley, ISBN 0-201-18127-4) |

[Previous](margins-modifying-laser-paper-size-on-the-page.md)  |  [Next](notes-on-laser-plotting.md)