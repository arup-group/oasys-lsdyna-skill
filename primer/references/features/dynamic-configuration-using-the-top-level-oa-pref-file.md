### Dynamic configuration using the top level oa_pref file.

A further improvement is that all environment variables below OA\_ADMIN\_xx may either be set explicitly, or dynamically using the options in the oa\_pref file at the top OA\_ADMIN\_xx level. This permits parallel installations of different versions of the software to co-exist, with only the top level administration directory names being distinct. For example:

| **Oasys Suite 22.0** | **Oasys Suite 22.1** |
| --- | --- |
| Top level directory OA\_ADMIN\_22 | Top level directory OA\_ADMIN\_221 |
| oa\_pref file in OA\_ADMIN\_22 contains:<br>
<br>oasys\*install\_dir: &lt;*pathname for **22.0** installation*&gt;<br><br>oasys\*manuals\_dir: &lt;*pathname for **22.0** manuals*&gt;<br>
<br>oasys\*home\_dir: &lt;*pathname for home directory*&gt;<br><br>oasys\*temp\_dir: &lt;*pathname for temporary files*&gt; | oa\_pref file in OA\_ADMIN\_221 contains:<br>
<br>oasys\*install\_dir: &lt;*pathname for **22.1** installation*&gt;<br><br>oasys\*manuals\_dir: &lt;*pathname for **22.1** manuals*&gt;<br>
<br>} would almost certainly be unchanged between major<br> } versions, although they could be different if desired |
| Pathnames in the oa\_pref file may contain environment variables which will be resolved before being applied. |

[Previous](installation-examples.md)  |  [Next](the-hierarchy-of-oa-pref-file-reading.md)