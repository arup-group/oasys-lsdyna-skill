#  Encryption Tool

##  Introduction 

Encrypting \*MATERIAL, \*DEFINE\_CURVE/TABLE, \*AIRBAG, \*ELEMENT\_SEATBELT\_PRETENSIONER, \*ELEMENT\_SEATBELT\_RETRACTOR, \*ELEMENT\_SEATBELT\_SLIPRING data within models with PGP encryption can be quickly done with the encryption tool. 
 
PGP encryption is asymmetric cryptography using public keys embedded in our software and private keys embedded in Ansys LS-DYNA. Asymmetry allows you to easily encrypt and share models without exposing protected data contained in your models. 
 
PRIMER cannot decrypt the encrypted data; however, it can use meta data specified after \*END for some of its enhanced functionalities such as model checking and mass calculations for PRIMER users' convenience. The meta data can include only basic properties so as not to expose protected data.

##  How To Use 

To use the tool, you first need to install GnuPG. GnuPG is external open-source software that will perform the encryption; you can visit [The GNU Privacy Guard (gnupg.org)](https://gnupg.org/)for more information about how to download GPG for your system.

![Simply Easy Learning](../Storage/primer-22-1/primer_links/sect_6/encrypt/gpg.png)

After you have installed the software, you can then access the tool by going to Tools &gt; Other &gt; Encrypt. You will be presented with a window asking you for your GPG executable. (If you are not asked then PRIMER has found the GPG executable automatically). Once your GPG executable has been found, the location will be stored in a preference so that in the future it will be found automatically so that you don't have to search for the GPG location on every run. You can edit this preference manually and it can be found in Options, Edit preferences, PRIMER, Encryption, gpg\_location. 
 
After selecting your GPG executable, you'll be presented with either a window asking you to choose a model to encrypt or the main model encryption window if you only have one model loaded into PRIMER. 

![](../Storage/primer-22-1/encryption-tool-2022-12-19.png)
Use the \*KEYWORDs button to select the items you want to encrypt.

![](../Storage/primer-22-1/encryption-tool-2022-12-19-1.png)

After selecting your chosen keywords for encryption, you can press the encrypt button. The tool will create a copy of the original model with encrypted keywords.

## Keyword selection options:
###  Select All 
Select all \*MATERIAL, \*DEFINE\_CURVE/\_TABLE/\_FUNC and \*ELEMENT\_PRETENSIONER/\_RETRACTOR/\_SLIPRING definitions in the model.

###  Clear 
Clear the current selection.

### Select Associated 
"Select Associated" is a feature within the encryption tool that enables users to easily select all \*DEFINE\_CURVE/\_TABLE/\_FUNC keywords that are related to previously selected keywords. This feature can be accessed from the "keyword" menu.

### Full Encryption (Full)
Full encryption encrypts the entire keywords, including the title and material type. The encrypted text data is included at the end of the file. Full encryption works with multiple include files and will include the encrypted data at the end of each include file in which the original keyword was located.
### Partial Encryption (Part)
Partial encryption only encrypts some of the data from the chosen keywords to be encrypted. Typically, the title and first line are left unencrypted with the encrypted text data written directly below the unencrypted text.

##  Options 

##  

### Options Menu

##  

### 
![](../Storage/primer-22-1/encryption-tool-2023-01-10.png) 

###  Keys

### ![](../Storage/primer-22-1/encryption-tool-2023-03-03.png) 

###  

### PGP Encryption[[edit](https://dynawiki.intranet.arup.com/index.php?title=PGP_Encryption&amp;veaction=edit&amp;section=4 "Edit section: PGP Encryption and Keys") | [edit source](https://dynawiki.intranet.arup.com/index.php?title=PGP_Encryption&amp;action=edit&amp;section=4 "Edit section: PGP Encryption and Keys")]

PGP encryption is asymmetric, requiring both a public key for encryption and a private key for decryption.

* Public Key: A numerical value, provided by a trusted authority and made publicly available, used to encrypt data.
* Private Key: A secret numerical value, mathematically linked to the public key, used to decrypt data that was encrypted with the corresponding public key.

#### Ansys LS-DYNA Public Key Size[[edit](https://dynawiki.intranet.arup.com/index.php?title=PGP_Encryption&amp;veaction=edit&amp;section=5 "Edit section: LS-DYNA Public Key Versions") | [edit source](https://dynawiki.intranet.arup.com/index.php?title=PGP_Encryption&amp;action=edit&amp;section=5 "Edit section: LS-DYNA Public Key Versions")]

Ansys LS-DYNA offers support for encrypted data through the use of specific public keys that align with the version of the software in use. Understanding the right key to use is essential for maintaining compatibility and security:

* **1024-bit Key**: This is a widely accepted encryption key that offers a standard level of security.
* **2048-bit Key**: For users requiring enhanced security, the 2048-bit key offers a higher encryption strength. This increased security comes with a trade-off in file size, as encrypted files are larger.

##### Public keys:[[edit](https://dynawiki.intranet.arup.com/index.php?title=PGP_Encryption&amp;veaction=edit&amp;section=6 "Edit section: Public keys:") | [edit source](https://dynawiki.intranet.arup.com/index.php?title=PGP_Encryption&amp;action=edit&amp;section=6 "Edit section: Public keys:")]

These keys ensure the encrypted models are compatible with the corresponding versions of Ansys LS-DYNA. It's highly recommended to use the correct key for your specific version to avoid deprecated warnings or compatibility issues.
| Ansys LS-DYNA Version | Public key you should use |
| --- | --- |
| R6 | R6 Legacy |
| R7 | R7 to R12 |
| R8 | R7 to R12 |
| R9 | R7 to R12 |
| R10 | R7 to R12 |
| R11 | R7 to R12 |
| R12 | R7 to R12 |
| R13 | R13 |
| R14 | R14 |

####  

###  Partial Encryption Options

These options only apply when you partial encrypt keywords.

### ![](../Storage/primer-22-1/encryption-tool-2022-12-19-3.png) 

####  Append Info In Title 
The density, Young's modulus, and Poisson's ratio will be written in the title of the material. PRIMER can use this information internally for functionality such as checking and mass calculation. 
####  Specifying the Start Line of Partial Encryption 
The partial encryption start line can be specified in the options menu. This option changes how much of the keyword card is left unencrypted. The default value of the start line is 2. If the Encryption Start Line was set to 7, for example, then the title and first six lines are not encrypted, and all lines that follow are encrypted.

### Full Encryption Options 

These options only apply to keywords that are fully encrypted

###  ![](../Storage/primer-22-1/encryption-tool-2023-01-10-1.png)

### Collective vs Individual

#### Collective

The collective option groups all the keywords into a single encryption block per include file.

#### Individual 

The Individual option separates each keyword into its own encryption block.

#### Appended \*KEYWORD type in comments

Add the material type to the PGP blocks. This feature allows you to better identify PGP blocks in the future.

![](../Storage/primer-22-1/encryption-tool-2023-01-10-2.png)

#### Extra Data 
Extra data is used for some of the enhanced functionalities within PRIMER such as model checking and mass calculations. This is done by creating meta data from the original material data. This option can be turned off or extra data can be deleted later at your convenience. The data is not processed by Ansys LS-DYNA and is only used by PRIMER. This extra data is enclosed within \*ENCRYPTED\_START and \*ENCRYPTED\_END after the \*END card. 
####  

##### Extra Data Options

####  
You can customise your extra data by removing the title, converting old materials into \*MAT\_ELASTIC and overriding the data with specified 'dummy' values for density, Young's modulus and Poisson's ratio for all encrypted materials. 
######  Remove Title 
Stops the tool from copying over the title of the chosen keywords to the extra data after \*END. 
######  Convert All Material Into *MAT_ELASTIC 
Changes all the extra data for the chosen materials into type \*MAT\_ELASTIC 
######  Preset Data For *MAT_ELASTIC 
Preset data for \*MAT\_ELASTIC allows you to customise generic densities, Young's modulus, and Poisson's ratios for your chosen materials in the extra data. If not specified, the actual values of these fields will be copied from the original material data. 
###  Comment Options 
When the Comment checkbox is checked, the textbox beneath will become active and you can write in this comment line with anything you choose. This comment is printed just beneath "---BEGIN PGP COMMENT---". It will then be displayed on the next line as "Comment: PRIMER Full/Partial Encrypt | " and then followed by your comment". The default is set to unchecked. If the textbox is left blank then "Comment: PRIMER Full/Partial Encrypt" will still be displayed. 
###  Vendor Options 
When one of the Vendor Options are enabled \*VENDOR\_BEGIN will be written into the PGP encrypted text at the start. Your vendor information will then be written and it will be finished with \*VENDOR\_END. 
####  Vendor Menu 

 ![Simply Easy Learning](../Storage/primer-22-1/primer_links/sect_6/encrypt/vendor_options.png)

####  Vendor Date 
You can create an expiry date of your choosing and it will be added into the PGP encrypted text block. The default value is set to unchecked (not enabled). 
####  Vendor Additional Lines 
You can use this option to add up to 9 additional lines into the PGP Encrypted text. A common example is to use one of these lines for a name and the others for optional comment cards. You can add additional lines by pressing the green '+' button or remove by pressing the red '-' button. The default is set to unchecked (not enabled).

[Previous](clones.md)  |  [Next](explode-1.md)