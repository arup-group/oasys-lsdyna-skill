### Data Extraction options

#### Specifying Files for data extraction

For some Ansys LS-DYNA data types results can be extracted from multiple files. By default FAST-TCF scripts will extract data from the default T/HIS file type for each entity type (see Data Sources). These defaults can be changed via the preference file.

Instead of using the default file any of the valid files types can be specified by using either the [define file](this-preferences-and-additional-commands.md) keyword (e.g. define file LSDA) or by adding an [extra line option](applying-extra-options-to-data-requests.md#extra_options). When this occurs, FAST-TCF will take the extraction request from the specified type of file - **but only if T/HIS allows it.**

| Keyword | second word | third word | notes |
| --- | --- | --- | --- |
| define | file | lsda | will always check that T/HIS can get the output from this file, if not then the original default file will be chosen (see data extraction table). This file can still be overwritten on the actual input line |
| ascii |
| xtf |
| thf |
| default |

| e.g. | node 42 displacement x |
| --- | --- |
|  | (read data from default file) |
|  | define file LSDA <br>
node 42 displacement x |
|  | (read data from LSDA file) |
|  | node 42 displacement x ASCII |
|  | (read data from ASCII file) |

#### Specifying components for Steady State Dynamics (SSD) analysis

For a SSD analysis Ansys LS-DYNA generates 2 data values, an amplitude and an angle, for each component in the NODOUT and ELOUT parts of the LSDA (binout) file. By default FAST-TCF will extract the amplitude for each data component but this can be changed if required to extract the angle value.

| Keyword | second word | third word | notes |
| --- | --- | --- | --- |
| define | ssd\_comp | amplitude | selects the amplitude value for all following data requests |
| angle | selects the angle value for all following data requests |

| e.g. | define ssd\_comp angle |
| --- | --- |
|  | (read angle value for all SSD analysis data components) |
|  | define ssd\_comp amplitude |
|  | (read amplitude value for all SSD analysis data components) |

Previous: selecting-models  |  Next: defining-groups-of-parts