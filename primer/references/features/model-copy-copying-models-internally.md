##  MODEL &gt; COPY Copying Models Internally

| You can copy ***n***existing models to ***n***new models starting at model ***i***.<br>
<br>The process is simple, as shown in this figure:<br>
<ul style="font-size: 14.6667px;"> <li>Select 1 or more input models (which must all exist).</li> <li>Select the first target model (which must not exist).</li> <li>Press&#160;<span class="buttontext">APPLY&#160;</span>to start the copy operation.</li>
</ul> | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_5.png) |
| --- | --- |

The input models are copied in the order defined to new models starting at the target model id. New models are created in a contiguous sequence of free models: any existing ones are skipped over, not deleted.

Copying a model duplicates all the internal data; and the new model(s) created are totally separate from their originals. (Internally the model is effectively written out and read back into the new model, although this is carried out in memory and no disk i/o is performed.) For this reason a COPY operation may take a little time, although it is usually still much faster than re-reading from disk file.

[Previous](merging-nodes-during-model-merge.md)  |  [Next](model-delete-deleting-internal-models.md)