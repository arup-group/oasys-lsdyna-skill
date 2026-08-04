####  Permitted Character Label Syntax

Testing of Ansys LS-DYNA 971 R7.1 (Feb 2014) suggests that the permitted syntax for a character can be described as "anything that is not a number". For example it appears that the following are all legal:

| **Characteristic** | **For example** |
| --- | --- |
| Embedded white space | "Wheel hub" |
| Starting with a digit 0 - 9 | "123 Pelham" |
| Contains non-alphanumeric characters | "That's OK!!" |

PRIMER 12 will support this, but in order to do so a substantial amount of grammatical checking of input, both interactively and from keyword file, has to be turned off which means that grammatical errors or mis-typed labels may be interpreted as character labels. This behaviour can be controlled by the following preference

| primer\*clabel\_syntax: | very\_loose <br> (default) | Anything which is not a "number" is treated as a potential character label. The label may start with any character, including 0 - 9 and + or - .<br> <br>Embedded white space is permitted, and only the characters listed below are forbidden. |
| --- | --- | --- |
| loose | As "very loose" except that the label may not start with 0 - 9 or + or - . |
| rational | The label may not start with 0-9 or + or -, and also must not contain any embedded white space. |

In addition there are two further limitations in PRIMER that apply to all the settings above:

* A character label may not start " & " or " -& ". This is to avoid confusion with parameters.
* A character label may not contain the double quotes character " . This is to avoid confusion in properties files.

It is not known whether Ansys LS-DYNA will also impose these two limitations, but PRIMER requires them.

This section is correct at the time of writing, March 2014, but it is possible that the permitted syntax in Ansys LS-DYNA will change during the life of this release of PRIMER making it necessary to change from the default "very loose" syntax rules.

| ***It is strongly recommended that users do NOT rely on the "very loose" character label syntax permitted by Ansys LS-DYNA.***<br> <br>Not only may this behaviour change in future Ansys LS-DYNA versions, but it is likely that third party software may have problems dealing with a totally arbitrary syntax for character labels and PRIMER may trip up too.<br> <br>At the very least "loose" syntax, preferably starting names with A-Z is recommended, and to minimise the likelihood of errors when processing input decks through other software it is recommended that "rational" syntax is used, obeying the following rules:<br><ul> <li>Character label names should start with the letters A-Z </li> <li>They should not contain any white space, use the underscore character to separate words. For example <span class="courierbold">bearing_assembly </span> </li> <li>Avoid using exotic characters in names: it is best to restrict usage to to A-Z, 0-9 and underscore. In particular avoid +, -, &quot;, &#39;, &amp;, :, and so on. </li> </ul> |
| --- |

[Previous](case-sensitivity-of-character-labels.md)  |  [Next](merging-models-containing-clashing-character-labels.md)