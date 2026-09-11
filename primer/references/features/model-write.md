##  

## MODEL &gt; WRITE

| Writing out models to disk.<br>
<ul style="font-size: 14.6667px;"> <li>Select a file format; (details in&#160;<a href="model-write.md#Outputfileformats">table 3.2 below</a>)<br><br></li> <li>Select an output filename;<br><br></li> <li>Select the model to write out;<br><br></li> <li>Optionally adjust the output format (eg compression and/or mode);<br><br></li> <li>Click on&#160;<span class="buttontext">Next &gt;&gt;&gt;&#160;</span>to proceed to the pre-output check panel.</li>
</ul>
<br>If the file already exists you will be given the choice of overwriting it or giving a new filename.<br>
<br>For Ansys LS-DYNA output only the &gt;&gt;&gt; Ansys LS-DYNA output options button maps the pre-output panel shown below, allowing you to change output options without actually having to pretend to write something. (The current Ansys LS-DYNA keyword format selected can affect model checking.) | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_1.png) |
| --- | --- |

| The following table summarises the formats written and what conversions and limitations apply: see [Appendix G](abaqus-input-file-output.md#abaqus) for more details.<br> <br><br>| **Format** | **Description** | **What is written** |<br>| --- | --- | --- |<br>| **LS-DYNA** | Ansys LS-DYNA "Keyword" format | Everything in the file is supported, no translation required. See [Version](version-tailoring-output-to-a-particular-ls-dyna-version.md#d_version)below for specific formats supported. |<br>| **NASTRAN** | Nastran "Bulk Data" (.bdf) format. | Conversion to Nastran bulk data on output matches approximately that applied during input. See [Appendix G (NASTRAN Output)](nastran-output.md#nastran). |<br>| **IDEAS** | Master Series and IDEAS "universal" (.unv) file formats | Large number of items in a Oasys Ltd N/CODE compatible form. See [Appendix G (IDEAS)](ideas-master-series-universal-file-format.md#ideas). |<br>| **PATRAN** | MSC Patran level 2.5 "Neutral" (.neu) file format | Nodes, elements, materials and properties only. See [Appendix G (PATRAN)](patran-neutral-file-output.md#PatranOutput). |<br>| **ABAQUS** | ABAQUS "Input" (.inp) file format | Conversion to Abaqus data on output matches approximately that applied during input. See [Appendix G (ABAQUS)](abaqus-input-file-output.md#abaqus) . |<br>| **PTF / d3plot** | PTF / d3plot file format | Conversion of Elements, Nodes and Geometry surfaces to PTF / d3plot format. See [Appendix G (D3PLOT/PTF)](d3plotptf-file-output.md#d3plot). |<br>| **DesignLink** | xml format | Conversion of Elements, Nodes, Matls, Sect, Set, Nodal Load & SPC to DesignLink xml format for generic handling. | |
| --- |

[Previous](list-of-file-formats-read-by-primer.md)  |  [Next](ls-dyna-format-labels-compression-mode.md)