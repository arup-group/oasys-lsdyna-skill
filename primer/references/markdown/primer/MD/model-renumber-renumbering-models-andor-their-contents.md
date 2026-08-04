##  MODEL &gt; RENUMBER Renumbering Models and/or Their Contents

| This command is useful for renumbering models, or whole categories within models and, while you can use it to renumber individual items, it may be easier to edit them directly.<br>
<br>A brief description of each option is given below, follow the hyper-links for more information.<br>
<ul style="font-size: 14.6667px;"> <li><a href="renumber-contents-renumbering-the-item-labels-within-a-model.md#371RENUMBERCONTENTS"><span class="buttontext">Renumber contents</span></a><b>&#160;</b>lets you renumber the contents of a model.<br><br></li> <li><a href="change-model-id.md#372CHANGEMODELID"><span class="buttontext">Change model id</span></a><b>&#160;</b>lets you renumber the label of a model itself (not its contents).<br><br></li> <li><a href="condense-model-ids.md#373CONDENSEMODELIDS"><span class="buttontext">Condense model ids</span></a><b>&#160;</b>renumbers &lt;n&gt; models from 1 to n. (Only the model ids themselves are renumbered, their contents are unchanged)<br><br></li> <li><a href="renumber-selection.md#374renumberselection"><span class="buttontext">Renumber selection</span></a><b>&#160;</b>renumber items selected via an object menu</li>
</ul>
<ul style="font-size: 14.6667px;"> <li> <span class="buttontext">Set MID-&gt;PID&#160;</span>establishes a&#160;<span class="courierbold">*MAT&#160;</span>card for every part using the same label. If more than one part uses the same material, then a copy of the material is created. This does not apply for&#160;<span class="courierbold">*PART_COMPOSITE&#160;</span>parts that can refer to &gt; 1 material.<br><br></li> <li> <span class="buttontext"><a href="mat24-lcsslcsr.md#LCSS">MAT24 LCSS/LCSR</a>&#160;</span>sets a unique load curve or table id on the material (MAT24) cards that use the same curve or table. Copies are made of the curve / table in order to achieve this.</li>
</ul>
<ul style="font-size: 14.6667px;"> <li> <span class="buttontext">Condense mats&#160;</span>reverses the effect of&#160;<span class="buttontext">set MID-&gt;PID&#160;</span>by removing duplicated material cards. Material titles are ignored by default but the option may be switched to consider. By default curve labels are compared, but an option may be set to inspect the x y data instead of the label<br><br></li> <li> <span class="buttontext">Set SID-&gt;PID&#160;</span>establishes a&#160;<span class="courierbold">*SECTION&#160;</span>card for every part using same label. Again, if more than one part uses the same section, then a copy of the section card is created<br><br></li> <li><a href="renumber-includes.md#376renumberincludes"><span class="buttontext">Renumber includes</span></a><b>&#160;</b>lets the user renumber ranges for general types and for types with explicitly relevant labels for the master file and for one or more include files.<br><br></li> <li><a class="buttontext" href="declash-labels.md#declash-labels">Declash labels</a>&#160;will offer the user the option to declash all element, set and material labels<br><br></li> <li> <span class="buttontext"><a href="visualise.md#visualise-labels">Visualise</a>&#160;</span>displays the distribution of labels in a model by type in diagram form.<br><br></li> <li> <span class="buttontext"><a href="long-keyword-format-and-large-labels.md#wide_format">Label range</a>&#160;</span>sets the limits on labels used when checking a model. Labels can lie in the traditional 8 digit &quot;small&quot; format range of 1 - 99,999,999; or can use 15 or 18 digit labels in &quot;large&quot; format output. See&#160;<a href="long-keyword-format-and-large-labels.md#wide_format">&quot;Wide&quot; keyword format and &quot;large&quot; labels</a>&#160;for more infomation.</li>
</ul>
<ul style="font-size: 14.6667px;"> <li> <span class="buttontext"><a href="lock-label-ranges.md#lock-label-ranges">Lock label ranges</a>&#160;</span>provides a means to lock a range of labels for one or more entity types lying in one or more includes against renumbering.</li>
</ul> | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_7_0_1.png) |
| --- | --- |

The Options for MID-&gt;PID and SID-&gt;PID determine where the newly created \*MAT and \*SECTION cards are placed if the model contains include files:

>  
> 
> | Matl/Sect to current include | Places all newly created definitions in the current include file, regardless of where their referring \*PART cards occur. |
> | --- | --- |
> | Matl/Sect to include of parent PID | Places each newly created \*MAT and \*SECTION card in the same include file as its referring \*PART card |
> 
>  
> 
>  

[Previous](model-delete-deleting-internal-models.md)  |  [Next](renumber-contents-renumbering-the-item-labels-within-a-model.md)