###  

### MATL* - Material Databases

### 

There is a maximum limit of 256 Material Databases. The entries in a oa\_index file for a MATeriaL database **MUST** be formatted using 3 fields as follows.

* filename
* material name ( this will be used to automatically match the material in a model with a material in the database after it has been converted to upper case)
* Ansys LS-DYNA material model type ( without the \*MAT\_ prefix )

i.e


```
3
$
Filename
Material Name
LS_DYNA Material Type
$
steel_yield-200.key
   STEEL : YIELD 200 MPa
   PIECEWISE_LINEAR_PLASTICITY
$
steel_yield-250.key
   STEEL : YIELD 250 MPa
   PIECEWISE_LINEAR_PLASTICITY
```

Each data file should contain a single Ansys LS-DYNA material input card (in the KEYWORD format) along with any \*DEFINE\_CURVE and \*DEFINE\_TABLE definitions that are referenced by the material card. The material should be defined in the database file as material number 1 and any \*DEFINE\_CURVE and \*DEFINE\_TABLE cards should also be numbered sequentially from 1.

When a material is imported from a database file the following rules are used :

* If the file contains more than 1 material then only the material with the lowest material ID will be imported from the file.
* All \*DEFINE\_CURVE and \*DEFINE\_TABLE definitions will be imported .
* Any other Ansys LS-DYNA keyword data cards will be ignored.

[Previous](oa-index-files.md)  |  [Next](j-headform-tree-file-example.md)