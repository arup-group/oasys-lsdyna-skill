###  FASTTCF CHECK

This section analyses a FASTTCF file and checks any data extraction requests for errors. The main checks are as follows:

1. The request is supported by FASTTCF
2. The file requested for the extraction is being outputted from DYNA
3. The data extraction request is included in the \*DATABASE\_HISTORY output if it needs to be
4. If the entity i.d. exists or if it is latent

Choose the fasttcf file to check, and the model to check against. Then press the APPLY button.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_9_3_0.gif)

Once the file has been checked a report text box appears to highlight any errors found. The following two images are examples of the output text. The first has no errors reported and the second has an error regarding the database history output. To solve the error in the second example the \*DATABASE\_HISTORY\_NODE should have node i.d. 4 added.

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_9_3_1.gif)

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_9_3_2.gif)

[Previous](batch-error-check-and-autofix.md)  |  [Next](error-vs-warning-user-configuration.md)