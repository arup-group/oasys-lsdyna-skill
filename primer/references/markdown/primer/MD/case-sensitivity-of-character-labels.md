####  Case Sensitivity of Character Labels

Testing reveals that Ansys LS-DYNA may treat character labels in a case-sensitive fashion, for example labels " Body " and " BODY " may be considered to be different to one another. This may change in the future, but it appears to be the behaviour of LS971 R7.1 (tested February 2014).

Therefore PRIMER adopts the following strategy regarding the case sensitivity of character labels:

* By default it does  ***not***  handle character labels in a case-sensitive way: normally PRIMER will consider Body and BODY to be the same label.
* In this default mode the label will be stored exactly as it is first encountered. So if the first occurrence is Body then this is how PRIMER will "remember" it and write it out subsequently, regardless of what other permutations of upper and lower case text is found in later occurrences of the word, and all such permutations of the word will map onto this single definition.
* It is possible to change this default behaviour by selecting the "Case Sensitivity" option on the [Advanced labelling panel](long-keyword-format-and-large-labels.md#advanced_label). 
 
 ![](../Storage/primer-22-1/primer_links/sect_5/5a/label_6.png) 

This option, which is programme-wide and not just for this model, may also be made the default by using the preference 
 
 primer\*clabel\_case\_sensitive :  [keyin_only](case-sensitivity-of-character-labels.md#cs_keyin_only)  *or*   [always](case-sensitivity-of-character-labels.md#cs_always)  *or*     [never](case-sensitivity-of-character-labels.md#cs_never) 
 
 The meanings of these options are explained below.

#####  

##### Case sensitivity iskeyin\_only

This is the default mode and works as follows:

* During normal operation PRIMER runs in case-Insensitive mode, so Body and BODY are considered to be the same label.
* During keyword input only PRIMER reads character labels from the keyword file as if they are case-Sensitive.
* At the end of keyword input it searches for any character labels that might be accidental case mis-matches, such as Body and BODY.
* If any are found they are listed and the user is asked to determine what action to take. There are three possible options:

    | **Merge cases** | Will merge all case-dependent matches into a single definition. Thus Body , BODY and body will all be merged into a single definition. <br>The rules used when merging definitions are described below under "[The rules used when merging "alias" character label names](case-sensitivity-of-character-labels.md#merge_rules)". |
    | --- | --- |
    | **Switch to case-sensitive** | Switches PRIMER 's mode of operation to Case Sensitive always and leaves the various permutations of labels unchanged. |
    | **No action** | Does nothing, leaving the current mode as Case INsensitive, but also not doing anything with these separate labels. |

* When keyword input is complete PRIMER reverts to running in case-Insensitive mode unless **Switch to case-sensitive** was chosen.

The reason for this is that it is not possible to tell whether the use of case-sensitive labels in the input deck was deliberate, exploiting Ansys LS-DYNA's behaviour, or a mistake - possibly from merging files from different sources. By treating the problem this way the user can either choose to continue, or use PRIMER to resolve differences and make the model consistent.

If there are no potential matches this post-keyin check is silent, so no message means no problem.

| Case sensitivity isalways<br>In this mode PRIMER will always treat character labels in a case-Sensitive fashion and will consider Body and BODY to be totally separate labels in all contexts.<br> <br>No post-keyin checking for character label case-sensitivity will be performed since all character labels are treated verbatim. |
| --- |

#####  

##### Case sensitivity isnever

In this mode PRIMER will always treat character labels in a case-Insensitive fashion and will consider Body and BODY to be teh same labels in all contexts.

This remains the case during keyword input, where no post-keyin checking is required because all variations on a name will have been merged into a single version (the first that was encountered).

| Check for character label aliases | ![](../Storage/primer-22-1/primer_links/sect_5/5a/label_7.png) |
| --- | --- |
| This command will run manually the check that is run automatically after keyword input, searching for any character labels that would be "aliases", ie the same word, if compared in a case-insensitive way.<br> <br>Here is an example of the result in a model in which the spellings ReD , REd , Red , RED , red and reD of the name "Red" have been used for \*PART .<br> <br>Using MERGE will "collapse" all these definitions onto a single definition. |
| ![](../Storage/primer-22-1/primer_links/sect_5/5a/label_8.png) |
| The rules used when merging "alias" character label names  <br>When merging character labels PRIMER will always prefer to use the spelling of the "installed" version of the name, which means the name used when the item was actually defined.<br> <br>This is best illustrated by example. Here are the keywords from the file that produced the warbing message above:<br> 
```
*PART

Red panel
       red         2         1         0         0         0         0         0

```
 The lines above are the "true" definition of the part, and thus this definition is "installed" using the character label red . 
```

*ELEMENT_SHELL
       1     RED      26      27      14      15
       2     Red      27      12      13      14
       3     REd       9      10      27      26
       4     ReD      10      11      12      27
       5     reD      15      16      28      26
       6     red      26      28       8       9
       
```
 <br>The above references to the \*PART on \*ELEMENT cards make a series of "latent" definitions using the various spellings of "red". These alternative spellings are latent because they are "referenced but not defined".<br> <br>So if MERGE is used in this example the spelling of the "true" installed definition, red , will be used.<br> <br>If there is not a single "installed" definition to use then the rules are:<br> <br><br>| All candidate definitions are "latent" | The last encountered spelling will be used. |<br>| --- | --- |<br>| More than one candidate is "installed" | The last encountered installed spelling will be used. <br>***WARNING***  : when there are are multiple "installed" definitions using different upper/lower case variations of the same character label then a MERGE will collapse them all onto the last such definition, leaving a single definition and  ***deleting all prior ones***  . | |

| ***It is strongly recommended that users do NOT rely on the case-sensitive behaviour of Ansys LS-DYNA to make character labels distinct.***<br> <br>Not only may this behaviour change in future Ansys LS-DYNA versions, but it is a "hostage to fortune" that is likely to give rise to errors. |
| --- |

[Previous](character-labels.md)  |  [Next](permitted-character-label-syntax.md)