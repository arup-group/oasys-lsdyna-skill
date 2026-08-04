##  3D PDF

Three dimensional PDF files can be written by selecting 3D PDF from the Images option in the main menu. The following screen will be displayed.

![](../Storage/primer-22-1/primer_links/sect_8/images/3DPDF.gif)

Input a file name in the File box or select a file using the file selector (folder icon). Select the parts to be exported to the 3D PDF file from the object menu and choose an orientation and paper size. Note, at present, only parts consisting of SOLID, SHELL, THICK SHELL or BEAM (true sections) elements will be exported.

Once a file name and one or more parts have been specified, press Apply to generate the 3D PDF file. As well as the geometry, their include files, part names, colours and transparencies are also exported.

The generated 3D PDF file is a version 1.7 PDF file which can be viewed in Adobe Acrobat Reader version 8 or later. Within Acrobat Reader the model can manipulated similarly to within PRIMER , e.g. rotate (left mouse button) , pan (Ctrl + left mouse button), zoom (right mouse button). Six default views (+XY, -XY, +YZ, -YZ, +XZ and -XZ) are pre-defined and include file and part visibility can be toggled on and off via the Model Tree. It is also possible to zoom to specific parts (or includes) by right clicking on them in the Model Tree and selecting Zoom to Part. This also centres rotation on the selected part. Alternatively the centre of rotation can be defined under Camera Properties via Select model under Alignment.

Some preferences can be set within Acrobat Reader that enhance the way 3D PDFs behave. In Acrobat Reader go to Edit &gt; Preferences &gt; 3D & Multimedia. Unchecking the Enable view transitions box suppresses the default animation when views are changed. Changing Optimization Scheme for Low Framerate (under Auto-Degrade Options) from Bounding Box to None stops parts being replaced with a box when the model is rotated (there doesnt seem to be much penalty in performance). These settings are saved once the program is closed. For more information on 3D PDFs and associated functionality see, for example, the "Adobe Acrobat XI Help and tutorials" by Adobe Systems Incorporated.

[Previous](print-windows-only.md)  |  [Next](webgl.md)