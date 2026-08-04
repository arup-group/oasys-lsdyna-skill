###  Only Existing Keywords May Be Edited

PRIMER does not permit you to select a keyword for Text Edit that is not already present in the model. The reason for this is that many keywords in Ansys LS-DYNA have a variable format that is dependent upon their content, so starting from nothing often requires some degree of knowledge of the possible card format, however the Text Edit capability is totally "dumb" in this respect.

####  Changing item labels has limitations..

Text Edit does not "know" or "remember" what it wrote out to a file to be edited, so if you change the label of an item then the effect when it is read back in will be to make a new item (or possibly overwrite some other existing one) rather than to relabel the original definition. This is best illustrated by example.

| **Model contains** | **User selects for Text Edit** | **Labels are changed to** | **Result when read back into PRIMER** |
| --- | --- | --- | --- |
| PART 1 | PART 1 | *&lt;no change&gt;* | PART 1 *(no change)* |
| PART 2 | PART 2 | PART **10** | PART 2 *(no change)* |
| PART 3 | PART 3 | PART **5** | PART 3 *(no change)* |
| PART 4 | *&lt;not selected&gt;* | *&lt;no change&gt;* | PART 4 *(no change)* |
| PART 5 | *&lt;not selected&gt;* | *&lt;no change&gt;* | PART 5  ***contains what was PART 3*** |
|  |  |  | PART 10  ***contains what was PART 2*** |

Note that:

* The original definitions of PARTs 2 and 3 inside PRIMER are not changed, even though they have been changed in the file. 
 
This is because Text Edit does not "remember" that they were written to file, so when they are no longer there to be read in the original definitions are not updated.
* PART 5 insider PRIMER is overwritten by what used to be PART 3
* A new PART 10 is created inside PRIMER , from what used to be PART 2

Note that this behaviour is different to running Text Edit from an item editing panel. In that context it "knows" what is being edited, but here it does not.

So be careful when changing item labels!!

[Previous](limitations-text-edit.md)  |  [Next](volume-calculator.md)