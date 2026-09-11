#####  Conversion Between the Formats of Different Ansys LS-DYNA Versions

Writing out "higher order" decks in "lower order" format, for example a LS960 deck in LS950 format is legal, and has the following consequences:

* Where higher order data can be converted to lower order without loss of information this is done silently.
* Where no lower order version exists the data (fields or whole cards) are omitted, and a warning notice is printed.

As a general rule writing out a higher order deck from a lower order file (eg read LS960, write LS971) works without losing information, but there are a few cases where keywords have changed during Ansys LS-DYNA development, meaning that the result may not be functionally identical.

| *While we have made every effort during*   ***VERSION***   *conversion to detect and process changes between the different Ansys LS-DYNA file formats, we cannot guarantee that we have found every one. Moreover running the same analysis in different versions of LS-DYNA may give different answers due to changed parameters within the Ansys LS-DYNA code.*    ******   <br>***It is your responsibility to ensure that your analysis is correct.*** |
| --- |

[Previous](setting-a-different-default-output-version.md)  |  [Next](format-setting-the-file-format.md)