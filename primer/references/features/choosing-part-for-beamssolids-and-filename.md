####  Choosing Part for Beams/Solids and Filename

PRIMER needs to know what type of spotwelds to create and which part to put the spotwelds into. These can be set with Part id for spotwelds and spotweld element type. Additionally if you are making spotweld solids PRIMER needs to know what size to make the solid spotwelds. This is set with solid spotweld diameter.

To select a part type in the part number, or you can use the standard popup functions (right click) to select or create the part. The part **must** use material type \*MAT\_SPOTWELD (and \*SECTION\_BEAM type 9 for beams). Once the part has been selected or created the part number will be displayed in the box: 
If there is only one part in the model that is suitable (i.e. for beams if the part uses material \*MAT\_SPOTWELD and section type \*SECTION\_BEAM , or for solids if the part uses material \*MAT\_SPOTWELD ) then PRIMER will automatically select it. Otherwise you will have to select it. Other inputs are available and will become ungreyed once the file to be read in has been selected.

[Previous](specifying-a-title.md)  |  [Next](choosing-file-format.md)