####  Recording a Snapshot of Versions

The method described above works on the assumption that the development of component files of the project marches progresses in a monotonic manner. Some users have requested a more exact control of which version applies to which component.

This can be achieved by the writing/reading a version control file. Write will dump a text file with the current version of each component file in the database. Read will apply the specified versions in the text file to each component. Thus a particular build can be constructed using the version setting tools described above and the file can be written to capture these. At a later stage of the project, the snapshot may be recaptured by loading the database and template and applying Read of the version file.

![](../Storage/primer-22-1/primer_links/sect_3/images/ver_ctrl_1.gif)

[Previous](setting-the-applied-version.md)  |  [Next](templates.md)