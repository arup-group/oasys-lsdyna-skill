## Oasys Suite 22.1 Installation structure

In Oasys Suite 22.1 the option is provided to separate a top-level 'administration' directory from the 'installation' one where the executables are located. 

For large installations on many machines this allows central configuration and administration files to exist in one place only, but executables to be installed locally on users' machines to give better performance. Oasys Suite 22.1 also allows the following items to be configured

* The location for user manuals and other documentation.
* The definition of a user's home directory.
* The definition of the temporary directory for scratch files.

In addition parsing of the 'oa\_pref' (preferences) file will now handle environment variables, so that a generic preference can be configured to give a user-specific result, and preferences may be 'locked' so that those set at the administration level cannot be changed by users.

These changes are entirely optional, and users performing a simple installation on a single machine do not need to make any changes to their existing installation practice.

| **Directory** | **Status** | **Directory Content and purpose** | **oa\_pref file option** |
| --- | --- | --- | --- |
| OA\_ADMIN\_xx | *Optional* | Top level configuration files.<br> (xx =22 for Oasys Suite 22.1, thus OA\_ADMIN\_22)<br><br>
Admin level oa\_pref file<br> Other configuration files<br> Timeout configuration file |  |
| OA\_ADMIN | *Optional* | Same as OA\_ADMIN\_22, provided for backwards compatibility with earlier releases. <br><br>It is recommended that plain OA\_ADMIN, without the \_xx version suffix, is not used since otherwise there is no easy way of distinguishing between parallel installations of different releases of Oasys LS-DYNA Environment in an installation.<br><br>
*If OA\_ADMIN\_22 is not defined then this non-release specific version is checked.* |  |
| OA\_INSTALL\_xx | *Optional* | (xx =22 for release 22.1, thus OA\_ADMIN\_22<br><br>
All executables<br> Installation level oa\_pref file | oasys\*install\_dir: &lt;*pathname*&gt; |
| OA\_INSTALL | *Optional* | Same as OA\_INSTALL\_22.<br><br>
If no "OA\_ADMIN\_xx" directory is used and all software is simply placed in this "install" directory, which would be typical of a single-user installation, then it is recommended that the \_xx version suffix is used in order to keep parallel installations of different releases of the Oasts Ltd software separate on the machine.<br><br>
*If OA\_INSTALL\_22 is not defined then this non-release specific version is checked* | oasys\*install\_dir: &lt;*pathname*&gt; |
| OA\_MANUALS | *Optional* | Specific directory for user manuals. If not defined then will search in:<br><br>
OA\_ADMIN\_xx/manuals (xx = major version number) <br>
OA\_INSTALL/manuals | oasys\*manuals\_dir: &lt;*pathname*&gt; |
| OA\_HOME | *Optional* | Specific "home" directory for user when using Oasys LS-DYNA Environment. If not defined will use:<br><br>
$HOME (Linux)<br> %USERPROFILE% (Windows) | oasys\*home\_dir: &lt;*pathname*&gt; |
| OA\_TEMP | *Optional* | Specific "temporary" directory for user when using Oasys LS-DYNA Environment. If not defined will use:<br><br>
P\_tmpdir (Linux, typically /tmp)<br> %TEMP% (Windows, typically C:\temp) | oasys\*temp\_dir: &lt;*pathname*&gt; |

It will be clear from the table above that no Environment variables have to be set, and that all defaults will revert to pre-version 9.4 behaviour. In other words users wishing to keep the status quo will find behaviour and layout unchanged if they do nothing.

**OA\_INSTALL\_XX**
 Previously the software used the OA\_INSTALL (renamed from OASYS) environment variable to locate the directory the software was installed in.

* On Windows this is no longer required as the software can work out its own installation directory. As this environment variable is no longer required it is recommended that it is removed from machines it is currently set on as in some cases where more than one version has been installed in different directories it can cause problems.
* On LINUX systems the "oasys\_22" script that starts the SHELL automatically sets this Environment Variable and passes it to any application started from the SHELL. If you run applications directly from the command line and bypass the SHELL then you should set **OA\_INSTALL\_XX** so that the software can locate manuals and other required files.

**OA\_ADMIN\_XX**
 Users wishing to separate configuration and installation directories will be able to do so by making use of the new top level OA\_ADMIN\_xx directory.

[Previous](installation-organisation.md)  |  [Next](installation-examples.md)