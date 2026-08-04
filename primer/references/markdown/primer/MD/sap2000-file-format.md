###  SAP2000 File Format

The SAP2000 Translator function is aimed specifically at translating the SAP2000 ASCII input file (.s2k) into Ansys LS-DYNA keyword format data.

Briefly, SAP2000 (viz "Structural Analysis Program") marketed by CSI (Computers & Structures Inc.) is used for linear and simple non-linear analyses of building structures.

Ansys LS-DYNA is well suited to the cutting edge performance based earthquake engineering and enables extremely complex structures to be analysed against time history data recorded from past seismic events. In this way damage to the structure can be quantified and the most effective structure designed as a result of Ansys LS-DYNA analyses.

The SAP2000 translator is invoked identically to all other formats read into PRIMER. Please refer to the main manual for details on the READ function, remembering to select the SAP2000 sub-type,

The generic file extension expected is .s2k, but this can easily be modified in the file selector panel). Once the correct file has been selected and the APPLY button pushed, the SAP2000 translator will begin.

There are several items of note that the user should be aware of prior to use of the translator function:

1. The translator program creates several binary scratch files during the translation process. You should ensure that sufficient space is available on your disk. As a general guide you may expect to require 10 Mb of space for a complex model containing 10000 frame elements. These files will disappear as soon as the translation is completed.
2. The speed of the translation is not impressive. Please be patient whilst frame elements are read into PRIMER, as these will most likely be the largest portion of your model. There is a running commentary in the DIALOGUE panel which will present the current status of the translation. If an excessive number of frame rigid offsets or end-releases are specified in the model this will considerably increase the amount of time required to complete the translation. 

 ![](../Storage/primer-22-1/primer_links/appen_6/sap2000/sap_fig_03.gif)
3. The DIALOGUE panel will contain useful information about the status of the translation and what the translator is doing. It is advisable to enlarge the panel prior to beginning the translation process so that the data can be viewed more easily. Any warnings printed in this panel may be important, so please check anything printed.

[Previous](radioss-block-format.md)  |  [Next](main-translation-panel.md)