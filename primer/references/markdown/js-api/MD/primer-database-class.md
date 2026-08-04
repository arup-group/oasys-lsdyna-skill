# Database class

The Database class gives you access to database cards in PRIMER. [More...](primer-database-class.md#Database_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Database properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| abstat | Object | [*DATABASE_ABSTAT card](primer-database-class.md#Database_DATABASE_ABSTAT_properties) |
| atdout | Object | [*DATABASE_ATDOUT card](primer-database-class.md#Database_DATABASE_ATDOUT_properties) |
| bearing | Object | [*DATABASE_BEARING card](primer-database-class.md#Database_DATABASE_BEARING_properties) |
| binary | Object | [*DATABASE_BINARY card](primer-database-class.md#Database_DATABASE_BINARY_properties) |
| bndout | Object | [*DATABASE_BNDOUT card](primer-database-class.md#Database_DATABASE_BNDOUT_properties) |
| dcfail | Object | [*DATABASE_DCFAIL card](primer-database-class.md#Database_DATABASE_DCFAIL_properties) |
| defgeo | Object | [*DATABASE_DEFGEO card](primer-database-class.md#Database_DATABASE_DEFGEO_properties) |
| deforc | Object | [*DATABASE_DEFORC card](primer-database-class.md#Database_DATABASE_DEFORC_properties) |
| destat | Object | [*DATABASE_DESTAT card](primer-database-class.md#Database_DATABASE_DESTAT_properties) |
| elout | Object | [*DATABASE_ELOUT card](primer-database-class.md#Database_DATABASE_ELOUT_properties) |
| envelope | Object | [*DATABASE_ENVELOPE card](primer-database-class.md#Database_DATABASE_ENVELOPE_properties) |
| extent\_binary | Object | [*DATABASE_EXTENT_BINARY card](primer-database-class.md#Database_DATABASE_EXTENT_BINARY_properties) |
| extent\_binary\_comp | Object | [*DATABASE_EXTENT_BINARY_COMP card](primer-database-class.md#Database_DATABASE_EXTENT_BINARY_COMP_properties) |
| extent\_d3part | Object | [*DATABASE_EXTENT_D3PART card](primer-database-class.md#Database_DATABASE_EXTENT_D3PART_properties) |
| extent\_intfor | Object | [*DATABASE_EXTENT_INTFOR card](primer-database-class.md#Database_DATABASE_EXTENT_INTFOR_properties) |
| format | Object | [*DATABASE_FORMAT card](primer-database-class.md#Database_DATABASE_FORMAT_properties) |
| gceout | Object | [*DATABASE_GCEOUT card](primer-database-class.md#Database_DATABASE_GCEOUT_properties) |
| glstat | Object | [*DATABASE_GLSTAT card](primer-database-class.md#Database_DATABASE_GLSTAT_properties) |
| h3out | Object | [*DATABASE_H3OUT card](primer-database-class.md#Database_DATABASE_H3OUT_properties) |
| icvout | Object | [*DATABASE_DEBOND card](primer-database-class.md#Database_DATABASE_DEBOND_properties) |
| icvout | Object | [*DATABASE_ICVOUT card](primer-database-class.md#Database_DATABASE_ICVOUT_properties) |
| jntforc | Object | [*DATABASE_JNTFORC card](primer-database-class.md#Database_DATABASE_JNTFORC_properties) |
| matsum | Object | [*DATABASE_MATSUM card](primer-database-class.md#Database_DATABASE_MATSUM_properties) |
| ncforc | Object | [*DATABASE_NCFORC card](primer-database-class.md#Database_DATABASE_NCFORC_properties) |
| nodfor | Object | [*DATABASE_NODFOR card](primer-database-class.md#Database_DATABASE_NODFOR_properties) |
| nodout | Object | [*DATABASE_NODOUT card](primer-database-class.md#Database_DATABASE_NODOUT_properties) |
| pbstat | Object | [*DATABASE_PBSTAT card](primer-database-class.md#Database_DATABASE_PBSTAT_properties) |
| pllyout | Object | [*DATABASE_PLLYOUT card](primer-database-class.md#Database_DATABASE_PLLYOUT_properties) |
| prtube | Object | [*DATABASE_PRTUBE card](primer-database-class.md#Database_DATABASE_PRTUBE_properties) |
| pyro | Object | [*DATABASE_PYRO card](primer-database-class.md#Database_DATABASE_PYRO_properties) |
| rbdout | Object | [*DATABASE_RBDOUT card](primer-database-class.md#Database_DATABASE_RBDOUT_properties) |
| rcforc | Object | [*DATABASE_RCFORC card](primer-database-class.md#Database_DATABASE_RCFORC_properties) |
| rwforc | Object | [*DATABASE_RWFORC card](primer-database-class.md#Database_DATABASE_RWFORC_properties) |
| sbtout | Object | [*DATABASE_SBTOUT card](primer-database-class.md#Database_DATABASE_SBTOUT_properties) |
| secforc | Object | [*DATABASE_SECFORC card](primer-database-class.md#Database_DATABASE_SECFORC_properties) |
| sleout | Object | [*DATABASE_SLEOUT card](primer-database-class.md#Database_DATABASE_SLEOUT_properties) |
| snsrout | Object | [*DATABASE_SNSROUT card](primer-database-class.md#Database_DATABASE_SNSROUT_properties) |
| spcforc | Object | [*DATABASE_SPCFORC card](primer-database-class.md#Database_DATABASE_SPCFORC_properties) |
| spgcpl | Object | [*DATABASE_SPGSPL card](primer-database-class.md#Database_DATABASE_SPGCPL_properties) |
| sphmassflow | Object | [*DATABASE_SPHMASSFLOW card](primer-database-class.md#Database_DATABASE_SPHMASSFLOW_properties) |
| sphout | Object | [*DATABASE_SPHOUT card](primer-database-class.md#Database_DATABASE_SPHOUT_properties) |
| swforc | Object | [*DATABASE_SWFORC card](primer-database-class.md#Database_DATABASE_SWFORC_properties) |
| tprint | Object | [*DATABASE_TPRINT card](primer-database-class.md#Database_DATABASE_TPRINT_properties) |
| trhist | Object | [*DATABASE_TRHIST card](primer-database-class.md#Database_DATABASE_TRHIST_properties) |

### Properties for DATABASE\_ABSTAT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_ATDOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_BEARING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_BINARY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| blstfor | Object | [*DATABASE_BINARY_BLSTFOR card](primer-database-class.md#Database_DATABASE_BINARY_BLSTFOR_properties) |
| cpmfor | Object | [*DATABASE_BINARY_CPMFOR card](primer-database-class.md#Database_DATABASE_BINARY_CPMFOR_properties) |
| d3crack | Object | [*DATABASE_BINARY_D3CRACK card](primer-database-class.md#Database_DATABASE_BINARY_D3CRACK_properties) |
| d3drlf | Object | [*DATABASE_BINARY_D3DRLF card](primer-database-class.md#Database_DATABASE_BINARY_D3DRLF_properties) |
| d3dump | Object | [*DATABASE_BINARY_D3DUMP card](primer-database-class.md#Database_DATABASE_BINARY_D3DUMP_properties) |
| d3mean | Object | [*DATABASE_BINARY_D3MEAN card](primer-database-class.md#Database_DATABASE_BINARY_D3MEAN_properties) |
| d3part | Object | [*DATABASE_BINARY_D3PART card](primer-database-class.md#Database_DATABASE_BINARY_D3PART_properties) |
| d3plot | Object | [*DATABASE_BINARY_D3PLOT card](primer-database-class.md#Database_DATABASE_BINARY_D3PLOT_properties) |
| d3prop | Object | [*DATABASE_BINARY_D3PROP card](primer-database-class.md#Database_DATABASE_BINARY_D3PROP_properties) |
| d3thdt | Object | [*DATABASE_BINARY_D3THDT card](primer-database-class.md#Database_DATABASE_BINARY_D3THDT_properties) |
| demfor | Object | [*DATABASE_BINARY_DEMFOR card](primer-database-class.md#Database_DATABASE_BINARY_DEMFOR_properties) |
| fsifor | Object | [*DATABASE_BINARY_FSIFOR card](primer-database-class.md#Database_DATABASE_BINARY_FSIFOR_properties) |
| fsilnk | Object | [*DATABASE_BINARY_FSILNK card](primer-database-class.md#Database_DATABASE_BINARY_FSILNK_properties) |
| intfor | Object | [*DATABASE_BINARY_INTFOR card](primer-database-class.md#Database_DATABASE_BINARY_INTFOR_properties) |
| isphfor | Object | [*DATABASE_BINARY_ISPHFOR card](primer-database-class.md#Database_DATABASE_BINARY_ISPHFOR_properties) |
| runrsf | Object | [*DATABASE_BINARY_RUNRSF card](primer-database-class.md#Database_DATABASE_BINARY_RUNRSF_properties) |
| xtfile | Object | [*DATABASE_BINARY_XTFILE card](primer-database-class.md#Database_DATABASE_BINARY_XTFILE_properties) |

### Properties for DATABASE\_BINARY\_BLSTFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_CPMFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_D3CRACK

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_D3DRLF

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cycl | integer | Output interval in cycles |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_D3DUMP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cycl | integer | Output interval in cycles |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_D3MEAN

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| iavg | integer | Averaging time interval |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |
| istats | integer | Level of statistics |
| tstart | real | Start time |

### Properties for DATABASE\_BINARY\_D3PART

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| beam | integer | Beam option |
| bsetid | integer | [Beam Set](primer-set-class.md#Set.BEAM) ID |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| hsetid | integer | [Solid Set](primer-set-class.md#Set.SOLID) ID |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |
| lcdt | integer | [Curve](primer-curve-class.md) ID giving time interval between dumps |
| npltc | integer | Number of plot files |
| psetid | integer | [Part Set](primer-set-class.md#Set.PART) ID |
| ssetid | integer | [Shell Set](primer-set-class.md#Set.SHELL) ID |
| tsetid | integer | [TShell Set](primer-set-class.md#Set.TSHELL) ID |

### Properties for DATABASE\_BINARY\_D3PLOT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| beam | integer | Beam option |
| cutoff | real | Frequency cut-off C in Hz |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |
| ioopt | integer | Flag for lcdt behaviour |
| lcdt | integer | [Curve](primer-curve-class.md) ID giving time interval between dumps |
| npltc | integer | Number of plot files |
| pset | integer | Part set ID for filtering |
| psetid | integer | [Part Set](primer-set-class.md#Set.PART) ID |
| rate | real | Time interval T between filter sampling |
| type | integer | Flag for filtering options |
| window | real | Width of the window in units of time for storing single, forward filtering |

### Properties for DATABASE\_BINARY\_D3PROP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if database binary card exists |
| ifile | integer | Output data flag |
| imatl | integer | Output \*EOS, \*HOURGLASS, \*MAT, \*part and \*SECTION data |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |
| iwall | integer | Output \*RIGIDWALL data |

### Properties for DATABASE\_BINARY\_D3THDT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |
| lcdt | integer | [Curve](primer-curve-class.md) ID giving time interval between dumps |

### Properties for DATABASE\_BINARY\_DEMFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_FSIFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_FSILNK

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_INTFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| fname | string | Filename of the database for the INTFOR data |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |
| ioopt | integer | governs how the plot state frequency is determined from curve LCDT |
| lcdt | integer | [Curve](primer-curve-class.md) ID giving time interval between dumps |

### Properties for DATABASE\_BINARY\_ISPHFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BINARY\_RUNRSF

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cycl | integer | Output interval in cycles |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |
| nr | integer | Number of running restart files |

### Properties for DATABASE\_BINARY\_XTFILE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt | real | Time interval between outputs |
| exists | logical | true if database binary card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database binary card is in. |

### Properties for DATABASE\_BNDOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_CURVOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_DCFAIL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_DEBOND

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_DEFGEO

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_DEFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_DESTAT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_DISBOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_ELOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |
| option1 | integer | extra history variables for solids |
| option2 | integer | extra history variables for shells |
| option3 | integer | extra history variables for thick shells |
| option4 | integer | extra history variables for beams |

### Properties for DATABASE\_ENVELOPE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bsetid | integer | Output for beam elements. +n is output for elements in beam set n, 0 no beam, -1 all elements |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| output | integer | Output format. Can be 0 or 1 |
| ssetid | integer | Output for shell elements. +n is output for elements in shell set n, 0 no shell, -1 all elements |
| tback | real | Time interval for backup output files during the analysis |
| tcheck | real | Time interval for checking whether the previous maxima/minima are exceeded |

### Properties for DATABASE\_EXTENT\_BINARY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| beamip | integer | #beam int points to output |
| cmpflg | integer | Flag to output composite material stress in local csys |
| cubsld | integer | Output flag for quadratic solid types |
| dcomp | integer | Data compression flag |
| deleres | integer | Output flag for results of deleted elements |
| dtdt | integer | output of nodal temp |
| engflg | integer | Flag to in/exclude shell energy & thickness |
| epsflg | integer | Flag to in/exclude shell strains |
| exists | logical | true if database card exists |
| hydro | integer | adds extra history variables |
| ialemat | integer | output ale materials |
| ieverp | integer | Every D3PLOT file to separate database flag |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| intout | string | output of intg pt data |
| maxint | integer | #integration points for shell output |
| msscl | integer | output nodal mass scaling data |
| n3thdt | integer | Output for material energies to D3THDT file |
| neipb | integer | Output of loop-stresses to D3PLOT |
| neiph | integer | #extra values for solids |
| neips | integer | #extra values for shells |
| nintsld | integer | number of solid integration pts |
| nodout | string | output of connectivity nodes |
| pkp\_sen | integer | Flag to output peak pressure and surface energy for each contact interface |
| quadsld | integer | Output flag for cubic solid types |
| resplt | integer | Output of residual forces |
| rltflg | integer | Flag to in/exclude shell force/moment resultants |
| sclp | real | Scaling parameter used in the computation of the peak pressure |
| shge | integer | Shell hourglass energy output flag |
| sigflg | integer | Flag to in/exclude shell stress tensors |
| strflg | integer | Strain tensor output flag |
| stssz | integer | Output shell element dt flag |
| therm | integer | Output of thermal data to D3PLOT |

### Properties for DATABASE\_EXTENT\_BINARY\_COMP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if database card exists |
| iacc | string | output of accleration data |
| iglb | string | output of global data |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ised | string | output of strain energy density data |
| istra | string | output of strain data |
| istrs | string | output of stress data |
| ivel | string | output of velocity data |
| ixyz | string | output of geometry data |

### Properties for DATABASE\_EXTENT\_D3PART

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| engflg | integer | Flag to in/exclude shell energy & thickness |
| epsflg | integer | Flag to in/exclude shell strains |
| exists | logical | true if database card exists |
| ieverp | integer | Every D3PLOT file to separate database flag |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| maxint | integer | #integration points for shell output |
| neiph | integer | #extra values for solids |
| neips | integer | #extra values for shells |
| nintsld | integer | number of solid integration pts |
| rltflg | integer | Flag to in/exclude shell force/moment resultants |
| shge | integer | Shell hourglass energy output flag |
| sigflg | integer | Flag to in/exclude shell stress tensors |
| strflg | integer | Strain tensor output flag |
| stssz | integer | Output shell element dt flag |

### Properties for DATABASE\_EXTENT\_INTFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if database card exists |
| ieverf | integer | Every INTFOR database to separate file flag |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| neng | integer | Output contact energy density for mortar contact and SOFT = 2 contact |
| nfail | integer | Display deleted contact segments flag |
| nforc | integer | Output forces |
| ngapc | integer | Output contact gaps |
| nglbv | integer | Output global variables |
| nhuf | integer | Number of user friction history variables to output from user defined friction routines |
| npen | integer | Output penetration information for mortar contact |
| npresu | integer | Output pressures |
| nshear | integer | Output shear stresses |
| ntied | integer | Output tied segments for Mortar contact |
| nvelo | integer | Output nodal velocity |
| nwear | integer | Output contact wear data mode |
| nwrk | integer | Output (total) sliding interface energy density for mortar contact |
| nwusr | integer | Number of user wear history variables |

### Properties for DATABASE\_FORMAT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if database card exists |
| ibinary | integer | Word size for binary output files |
| iform | integer | Output format for D3PLOT and D3THDT files |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |

### Properties for DATABASE\_GCEOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_GLSTAT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |
| mass\_properties | integer | Flag to include mass and inertia properties |

### Properties for DATABASE\_H3OUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_ICVOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_JNTFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_MATSUM

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_NCFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_NODFOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_NODOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |
| option1 | real | High frequency output interval |
| option2 | integer | Flag for binary file for high frequency output |

### Properties for DATABASE\_PBSTAT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_PLLYOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_PRTUBE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_PYRO

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_RBDOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_RCFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_RWFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SBTOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SECFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SLEOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SNSROUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SPCFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SPGCPL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SPHMASSFLOW

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SPHOUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_SWFORC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_TPRINT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

### Properties for DATABASE\_TRHIST

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | Flag for binary file |
| dt | real | Time interval between output |
| exists | logical | true if database card exists |
| include | integer | The [Include](primer-include-class.md) file number that the database card is in. |
| ioopt | integer | Flag for behaviour of load curve |
| lcur | integer | [Curve](primer-curve-class.md) ID specifying time interval |

| Detailed Description<br>The Database class allows you to create, modify, edit and manipulate database cards.<br>Unlike other classes there is no constructor and there are no functions.<br>Instead a Database object is available as the [database](primer-model-class.md#database)<br>property of a [Model](primer-model-class.md) object. This object allows you to access all of<br>the database cards. For example, to activate database card \*DATABASE\_SWFORC in model m and set dt to 0.001. |
| --- |


```
m.database.swforc.exists = true;
m.database.swforc.dt = 0.001;

```

To activate database card \*DATABASE\_BINARY\_D3PLOT in model m and set dt to 0.001.

```
m.database.binary.d3plot.exists = true;
m.database.binary.d3plot.dt = 0.001;

```

See the properties for more details.