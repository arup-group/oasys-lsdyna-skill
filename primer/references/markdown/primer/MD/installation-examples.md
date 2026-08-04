### Installation Examples

The following diagrams illustrate how the installation might be organised in various different scenarios..

| **a) Single user installation on one machine** |
| --- |
| | There is no need to worry about separating administration and installation directories, and the default installation of all files in and below the single installation directory will suffice.<br>
<br>It is suggested that the \_xx version suffix of OA\_INSTALL\_xx is used in order to keep parallel installations of different releases of the Oassys Ltd software separate on the machine. | ![](../Storage/primer-22-1/project-common-topics/installation_organisation/option_a.gif) |<br>| --- | --- | |
| **b) A few machines on a small network, each user has their own machine** |
| | The top level administration directory can be installed on a network server, possibly also locating the manuals centrally.<br>
<br>Each user's machine has its own 'installation' directory to give good performance, but there is no need to manage home or temporary directories centrally since each user 'owns' their machine.<br>
<br>If network performance is good an alternative would be to install executables on the central server, meaning that local OA\_INSTALL directories are not required. | ![](../Storage/primer-22-1/project-common-topics/installation_organisation/option_b.gif) |<br>| --- | --- | |
| **c) Large corporate network** |
| | There is no need to worry about separating administration and installation directories, and the default installation of all files in and below the single installation directory will suffice. | ![](../Storage/primer-22-1/project-common-topics/installation_organisation/option_c.gif) |<br>| --- | --- | |

[Previous](version.md)  |  [Next](dynamic-configuration-using-the-top-level-oa-pref-file.md)