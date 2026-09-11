##  Notes on Laser Plotting

* Users on 3D devices should note that turning the laser on will temporarily force the graphics mode back to 2D. This is because a laser plot is intrinsically a 2D image and is computed in software.
* Transient graphics added "dynamically" to the screen are never copied to laser files. Examples are cursor-pick symbols, and also the information added interactively with the DYNAMIC\_LABEL function.
* If an attempt to open a laser file fails because the file/directory refuses "write" permission, or the disk is full, you are warned and laser output is switched off.
* You can switch laser output **off** and **on** at will in the course of assembling a file with multiple images. Sub-images will only be written when the laser is on.
* Some of the defaults here may be preset outside PRIMER via preferences in the .oa\_pref file: see [Appendix M](the-oa-pref-preferences-file.md) .

[Previous](creating-encapsulated-postscript-eps-files.md)  |  [Next](raster-images.md)