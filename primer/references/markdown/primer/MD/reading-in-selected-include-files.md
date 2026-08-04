###  Reading in Selected Include Files

#### Master Model already exists

From the Menu, select Model , Read and use:
 
* Scan all to look for all include files, including those "nested" as include files within include files.
* Quick scan to look only for include files in the master file.

![](../Storage/primer-22-1/primer_links/sect_3/images/model_read.png)
 
This scans the input deck. "Scan" in this context means look only for include file information, but don't actually import any normal keyword data into a model.
 
Scanning is much faster than reading since no internal computation or storage allocation is required; normally it is limited only by the disk or network speed of the machine.
 
Once complete this operation maps the panel below which allows you to control what is to be read in.
 
### 

In order to view all the Include files present in the Master Model, Select EXPAND ALL.

Select the files you wish to read in (more than one include file can be read in at once) and press APPLY . Select options are invoked by a right mouse click on the popup.

NOTE: When reading Include files into PRIMER it is important to ensure that you read them into the same Model in order to allow all the references across include files to operate successfully

![](../Storage/primer-22-1/primer_links/sect_3/images/incl_2.gif)

####  Master Model is to be created

From the Main Menu, select MODEL  **-&gt;**  BUILD

####  Simple build from keyword files

![](../Storage/primer-22-1/primer_links/sect_3/images/build_from_files.png)

If there are **no label clashes** between the include files, a simple build can be used.

The Include files you wish to read in are selected one by one, by inputting the name into the text box and pressing ADD FILE . The files will appear in the list.

Once you have selected all the Include files you wish to read in, press APPLY and the model will be built with the added files at the first layer of depth. These files may themselves contain include files, thus the method may be used to create a multi-layered include file structure.

The more complex method of building a model from a database is described in section on [Model database](model-build.md#314ModelDatabase).

[Previous](include-file-structure.md)  |  [Next](viewing-and-managing-the-include-file-structure.md)