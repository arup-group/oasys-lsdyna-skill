#####  Include Filename Syntax

| You need to choose whether include files use Absolute or Relative pathname syntax. The differences are:<br><br>| **Syntax method** | **Typical result on Windows** | **Typical result on Linux** |<br>| --- | --- | --- |<br>| **Absolute**, prefix uses explicit pathname | C:\users\my\_model\INCL\a.key | /home/users/my\_model/INCL/a.key |<br>| **Relative**, prefix is relative to master file | .\INCL\a.key | ./INCL/a.key | | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2e.png) |
| --- | --- |

**How**   **master file references include files:**

Ansys LS-DYNA will accept include files referenced with an absolute path or a path relative the master file, which may be preferred as Dyna is currently limited to a string length of 80 characters. However, for include files within include files it is recommended to always use the **absolute** path.

 [Previous](where-includes-are-written.md)  |  [Next](machine-operating-system-dependent-syntax.md)