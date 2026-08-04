###  Write Hook

From version 19, you can create a write hook by adding a JavaScript with the name **write\_hook.js** to the hooks directory. A write hook is a script that is triggered every time a user writes out a model from PRIMER . Possible uses include:

* Checking models meet certain requirements before being written
* Saving a changelog or register of model changes for each iteration
* Interfacing with simulation database management (SDM) software

The write hook is triggered in the following four instances:

1. Writing out a model from the Model Tab
2. Writing out a single include file from the Include Tool menu
3. Writing out a model from the Dialogue Box
4. Writing out selected include files from the Select Include Files panel

These four instances have been represented by constants in the Model class of the JavaScript API as the following:

* Model.WRITE\_MODEL
* Model.WRITE\_INCLUDE\_TREE
* Model.WRITE\_DIALOGUE
* Model.WRITE\_SELECT\_INCLUDES

When triggered, PRIMER feeds three arguments with the following indexes into the JavaScript:

* arguments[0]: A string containing the filepath and filename for the script
* arguments[1]: The corresponding Model class object (see Model class for full specifications)
* arguments[2]: The hook object containing the following properties:
    * hook\_obj. **hook\_instance** : Integer which represents the instance where the hook is triggered (corresponding to the JS API Model constants listed above)
    * hook\_obj. **include\_files** : Array of include file names (including the full filepath). If the user triggers an instance where only one file is written out, they should use the zeroth position in the array: hook\_obj.include\_files[0]
    * hook\_obj. **include\_numbers** : Array of include file numbers. If the user triggers an instance where only one file is written out, they should use the zeroth position in the array: hook\_obj.include\_numbers[0]

In order to use this script, users must ensure their hook JavaScript file is named **write\_hook.js** and is placed in the **primer\_library/scripts/hooks** directory. An example script ( **example\_write\_hook.js** ) can be found in the PRIMER install directory under the same sub-directory.

[Previous](scripts-using-guis.md)  |  [Next](brief-tutorial-on-javascript-in-primer.md)