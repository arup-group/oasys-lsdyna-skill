# Control class

The Control class gives you access to control cards in PRIMER. [More...](primer-control-class.md#Control_details)

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

## Control properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| accuracy | Object | [*CONTROL_ACCURACY card](primer-control-class.md#Control_*CONTROL_ACCURACY_properties) |
| acoustic | Object | [*CONTROL_ACOUSTIC card](primer-control-class.md#Control_*CONTROL_ACOUSTIC_properties) |
| acoustic\_coupling | Object | [*CONTROL_ACOUSTIC_COUPLING card](primer-control-class.md#Control_*CONTROL_ACOUSTIC_COUPLING_properties) |
| acoustic\_spectral | Object | [*CONTROL_ACOUSTIC_SPECTRAL card](primer-control-class.md#Control_*CONTROL_ACOUSTIC_SPECTRAL_properties) |
| adapstep | Object | [*CONTROL_ADAPSTEP card](primer-control-class.md#Control_*CONTROL_ADAPSTEP_properties) |
| adaptive | Object | [*CONTROL_ADAPTIVE card](primer-control-class.md#Control_*CONTROL_ADAPTIVE_properties) |
| adaptive\_curve | Object | [*CONTROL_ADAPTIVE_CURVE card](primer-control-class.md#Control_*CONTROL_ADAPTIVE_CURVE_properties) |
| airbag | Object | [*CONTROL_AIRBAG card](primer-control-class.md#Control_*CONTROL_AIRBAG_properties) |
| ale | Object | [*CONTROL_ALE card](primer-control-class.md#Control_*CONTROL_ALE_properties) |
| bulk\_viscosity | Object | [*CONTROL_BULK_VISCOSITY card](primer-control-class.md#Control_*CONTROL_BULK_VISCOSITY_properties) |
| check | Object | [*CONTROL_CHECK card](primer-control-class.md#Control_*CONTROL_CHECK_properties) |
| coarsen | Object | [*CONTROL_COARSEN card](primer-control-class.md#Control_*CONTROL_COARSEN_properties) |
| constrained | Object | [*CONTROL_CONSTRAINED card](primer-control-class.md#Control_*CONTROL_CONSTRAINED_properties) |
| contact | Object | [*CONTROL_CONTACT card](primer-control-class.md#Control_*CONTROL_CONTACT_properties) |
| coupling | Object | [*CONTROL_COUPLING card](primer-control-class.md#Control_*CONTROL_COUPLING_properties) |
| cpg | Object | [*CONTROL_CPG card](primer-control-class.md#Control_*CONTROL_CPG_properties) |
| cpm | Object | [*CONTROL_CPM card](primer-control-class.md#Control_*CONTROL_CPM_properties) |
| cpu | Object | [*CONTROL_CPU card](primer-control-class.md#Control_*CONTROL_CPU_properties) |
| debug | Object | [*CONTROL_DEBUG card](primer-control-class.md#Control_*CONTROL_DEBUG_properties) |
| discrete\_element | Object | [*CONTROL_DISCRETE_ELEMENT card](primer-control-class.md#Control_*CONTROL_DISCRETE_ELEMENT_properties) |
| dynamic\_relaxation | Object | [*CONTROL_DYNAMIC_RELAXATION card](primer-control-class.md#Control_*CONTROL_DYNAMIC_RELAXATION_properties) |
| efg | Object | [*CONTROL_EFG card](primer-control-class.md#Control_*CONTROL_EFG_properties) |
| energy | Object | [*CONTROL_ENERGY card](primer-control-class.md#Control_*CONTROL_ENERGY_properties) |
| explicit\_thermal | Object | [*CONTROL_EXPLICIT_THERMAL_PROPERTIES card](primer-control-class.md#Control_*CONTROL_EXPLICIT_THERMAL_PROPERTIES_properties) |
| explicit\_thermal\_ale\_coupling | Object | [*CONTROL_EXPLICIT_THERMAL_ALE_COUPLING card](primer-control-class.md#Control_*CONTROL_EXPLICIT_THERMAL_ALE_COUPLING_properties) |
| explicit\_thermal\_boundary | Object | [*CONTROL_EXPLICIT_THERMAL_BOUNDARY card](primer-control-class.md#Control_*CONTROL_EXPLICIT_THERMAL_BOUNDARY_properties) |
| explicit\_thermal\_contact | Object | [*CONTROL_EXPLICIT_THERMAL_CONTACT card](primer-control-class.md#Control_*CONTROL_EXPLICIT_THERMAL_CONTACT_properties) |
| explicit\_thermal\_initial | Object | [*CONTROL_EXPLICIT_THERMAL_INITIAL card](primer-control-class.md#Control_*CONTROL_EXPLICIT_THERMAL_INITIAL_properties) |
| explicit\_thermal\_output | Object | [*CONTROL_EXPLICIT_THERMAL_OUTPUT card](primer-control-class.md#Control_*CONTROL_EXPLICIT_THERMAL_OUTPUT_properties) |
| explicit\_thermal\_solver | Object | [*CONTROL_EXPLICIT_THERMAL_SOLVER card](primer-control-class.md#Control_*CONTROL_EXPLICIT_THERMAL_SOLVER_properties) |
| explosive\_shadow | Object | [*CONTROL_EXPLOSIVE_SHADOW card](primer-control-class.md#Control_*CONTROL_EXPLOSIVE_SHADOW_properties) |
| forming\_bestfit | Object | [*CONTROL_FORMING_BESTFIT card](primer-control-class.md#Control_*CONTROL_FORMING_BESTFIT_properties) |
| forming\_initial\_thickness | Object | [*CONTROL_FORMING_INITIAL_THICKNESS card](primer-control-class.md#Control_*CONTROL_FORMING_INITIAL_THICKNESS_properties) |
| forming\_maxid | Object | [*CONTROL_FORMING_MAXID card](primer-control-class.md#Control_*CONTROL_FORMING_MAXID_properties) |
| forming\_position | Object | [*CONTROL_FORMING_POSITION card](primer-control-class.md#Control_*CONTROL_FORMING_POSITION_properties) |
| forming\_pre\_bending | Object | [*CONTROL_FORMING_PRE_BENDING card](primer-control-class.md#Control_*CONTROL_FORMING_PRE_BENDING_properties) |
| forming\_projection | Object | [*CONTROL_FORMING_PROJECTION card](primer-control-class.md#Control_*CONTROL_FORMING_PROJECTION_properties) |
| forming\_remove\_adaptive\_constraints | Object | [*CONTROL_FORMING_REMOVE_ADAPTIVE_CONSTRAINTS card](primer-control-class.md#Control_*CONTROL_FORMING_REMOVE_ADAPTIVE_CONSTRAINTS_properties) |
| forming\_shell\_to\_tshell | Object | [*CONTROL_FORMING_SHELL_TO_TSHELL card](primer-control-class.md#Control_*CONTROL_FORMING_SHELL_TO_TSHELL_properties) |
| forming\_stoning | Object | [*CONTROL_FORMING_STONING card](primer-control-class.md#Control_*CONTROL_FORMING_STONING_properties) |
| forming\_strain\_ratio\_smooth | Object | [*CONTROL_FORMING_STRAIN_RATIO_SMOOTH card](primer-control-class.md#Control_*CONTROL_FORMING_STRAIN_RATIO_SMOOTH_properties) |
| forming\_template | Object | [*CONTROL_FORMING_TEMPLATE card](primer-control-class.md#Control_*CONTROL_FORMING_TEMPLATE_properties) |
| forming\_toleranc | Object | [*CONTROL_FORMING_TOLERANC card](primer-control-class.md#Control_*CONTROL_FORMING_TOLERANC_properties) |
| forming\_travel | Object | [*CONTROL_FORMING_TRAVEL card](primer-control-class.md#Control_*CONTROL_FORMING_TRAVEL_properties) |
| forming\_trim\_merge | Object | [*CONTROL_FORMING_TRIM_MERGE card](primer-control-class.md#Control_*CONTROL_FORMING_TRIM_MERGE_properties) |
| forming\_trim\_solid\_refinement | Object | [*CONTROL_FORMING_TRIM_SOLID_REFINEMENT card](primer-control-class.md#Control_*CONTROL_FORMING_TRIM_SOLID_REFINEMENT_properties) |
| forming\_unflanging | Object | [*CONTROL_FORMING_UNFLANGING card](primer-control-class.md#Control_*CONTROL_FORMING_UNFLANGING_properties) |
| forming\_user | Object | [*CONTROL_FORMING_USER card](primer-control-class.md#Control_*CONTROL_FORMING_USER_properties) |
| frequency\_domain | Object | [*CONTROL_FREQUENCY_DOMAIN card](primer-control-class.md#Control_*CONTROL_FREQUENCY_DOMAIN_properties) |
| frequency\_response\_function | Object | [*CONTROL_FREQUENCY_RESPONSE_FUNCTION card](primer-control-class.md#Control_*CONTROL_FREQUENCY_RESPONSE_FUNCTION_properties) |
| hourglass | Object | [*CONTROL_HOURGLASS card](primer-control-class.md#Control_*CONTROL_HOURGLASS_properties) |
| implicit\_auto | Object | [*CONTROL_IMPLICIT_AUTO card](primer-control-class.md#Control_*CONTROL_IMPLICIT_AUTO_properties) |
| implicit\_buckle | Object | [*CONTROL_IMPLICIT_BUCKLE card](primer-control-class.md#Control_*CONTROL_IMPLICIT_BUCKLE_properties) |
| implicit\_consistent\_mass | Object | [*CONTROL_IMPLICIT_CONSISTENT_MASS card](primer-control-class.md#Control_*CONTROL_IMPLICIT_CONSISTENT_MASS_properties) |
| implicit\_dynamics | Object | [*CONTROL_IMPLICIT_DYNAMICS card](primer-control-class.md#Control_*CONTROL_IMPLICIT_DYNAMICS_properties) |
| implicit\_eigenvalue | Object | [*CONTROL_IMPLICIT_EIGENVALUE card](primer-control-class.md#Control_*CONTROL_IMPLICIT_EIGENVALUE_properties) |
| implicit\_explicit\_hybrid | Object | [*CONTROL_IMPLICIT_EXPLICIT_HYBRID card](primer-control-class.md#Control_*CONTROL_IMPLICIT_EXPLICIT_HYBRID_properties) |
| implicit\_forming | Object | [*CONTROL_IMPLICIT_FORMING card](primer-control-class.md#Control_*CONTROL_IMPLICIT_FORMING_properties) |
| implicit\_general | Object | [*CONTROL_IMPLICIT_GENERAL card](primer-control-class.md#Control_*CONTROL_IMPLICIT_GENERAL_properties) |
| implicit\_inertia\_relief | Object | [*CONTROL_IMPLICIT_INERTIA_RELIEF card](primer-control-class.md#Control_*CONTROL_IMPLICIT_INERTIA_RELIEF_properties) |
| implicit\_joints | Object | [*CONTROL_IMPLICIT_JOINTS card](primer-control-class.md#Control_*CONTROL_IMPLICIT_JOINTS_properties) |
| implicit\_modal\_dynamic | Object | [*CONTROL_IMPLICIT_MODAL_DYNAMIC card](primer-control-class.md#Control_*CONTROL_IMPLICIT_MODAL_DYNAMIC_properties) |
| implicit\_modal\_dynamic\_damping | Object | [*CONTROL_IMPLICIT_MODAL_DYNAMIC_DAMPING card](primer-control-class.md#Control_*CONTROL_IMPLICIT_MODAL_DYNAMIC_DAMPING_properties) |
| implicit\_modes | Object | [*CONTROL_IMPLICIT_MODES card](primer-control-class.md#Control_*CONTROL_IMPLICIT_MODES_properties) |
| implicit\_ordering | Object | [*CONTROL_IMPLICIT_ORDERING card](primer-control-class.md#Control_*CONTROL_IMPLICIT_ORDERING_properties) |
| implicit\_residual\_vector | Object | [*CONTROL_IMPLICIT_RESIDUAL_VECTOR card](primer-control-class.md#Control_*CONTROL_IMPLICIT_RESIDUAL_VECTOR_properties) |
| implicit\_solution | Object | [*CONTROL_IMPLICIT_SOLUTION card](primer-control-class.md#Control_*CONTROL_IMPLICIT_SOLUTION_properties) |
| implicit\_solver | Object | [*CONTROL_IMPLICIT_SOLVER card](primer-control-class.md#Control_*CONTROL_IMPLICIT_SOLVER_properties) |
| implicit\_ssd\_direct | Object | [*CONTROL_IMPLICIT_SSD_DIRECT card](primer-control-class.md#Control_*CONTROL_IMPLICIT_SSD_DIRECT_properties) |
| implicit\_stabilization | Object | [*CONTROL_IMPLICIT_STABILIZATION card](primer-control-class.md#Control_*CONTROL_IMPLICIT_STABILIZATION_properties) |
| implicit\_static\_condensation | Object | [*CONTROL_IMPLICIT_STATIC_CONDENSATION card](primer-control-class.md#Control_*CONTROL_IMPLICIT_STATIC_CONDENSATION_properties) |
| implicit\_termination | Object | [*CONTROL_IMPLICIT_TERMINATION card](primer-control-class.md#Control_*CONTROL_IMPLICIT_TERMINATION_properties) |
| mapping\_shift\_by\_dt | Object | [*CONTROL_MAPPING_SHIFT_BY_DT card](primer-control-class.md#Control_*CONTROL_MAPPING_SHIFT_BY_DT_properties) |
| mpp\_contact\_groupable | Object | [*CONTROL_MPP_CONTACT_GROUPABLE card](primer-control-class.md#Control_*CONTROL_MPP_CONTACT_GROUPABLE_properties) |
| mpp\_decomposition\_automatic | Object | [*CONTROL_MPP_DECOMPOSITION_AUTOMATIC card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_AUTOMATIC_properties) |
| mpp\_decomposition\_bagref | Object | [*CONTROL_MPP_DECOMPOSITION_BAGREF card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_BAGREF_properties) |
| mpp\_decomposition\_check\_speed | Object | [*CONTROL_MPP_DECOMPOSITION_CHECK_SPEED card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_CHECK_SPEED_properties) |
| mpp\_decomposition\_contact\_isolate | Object | [*CONTROL_MPP_DECOMPOSITION_CONTACT_ISOLATE card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_CONTACT_ISOLATE_properties) |
| mpp\_decomposition\_disable\_unref\_curves | Object | [*CONTROL_MPP_DECOMPOSITION_DISABLE_UNREF_CURVES card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_DISABLE_UNREF_CURVES_properties) |
| mpp\_decomposition\_distribute\_ale\_elements | Object | [*CONTROL_MPP_DECOMPOSITION_DISTRIBUTE_ALE_ELEMENTS card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_DISTRIBUTE_ALE_ELEMENTS_properties) |
| mpp\_decomposition\_distribute\_sph\_elements | Object | [*CONTROL_MPP_DECOMPOSITION_DISTRIBUTE_SPH_ELEMENTS card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_DISTRIBUTE_SPH_ELEMENTS_properties) |
| mpp\_decomposition\_elcost | Object | [*CONTROL_MPP_DECOMPOSITION_ELCOST card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_ELCOST_properties) |
| mpp\_decomposition\_file | Object | [*CONTROL_MPP_DECOMPOSITION_FILE card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_FILE_properties) |
| mpp\_decomposition\_flag\_stress\_strain\_curve | Object | [*CONTROL_MPP_DECOMPOSITION_FLAG_STRESS_STRAIN_CURVE card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_FLAG_STRESS_STRAIN_CURVE_properties) |
| mpp\_decomposition\_method | Object | [*CONTROL_MPP_DECOMPOSITION_METHOD card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_METHOD_properties) |
| mpp\_decomposition\_numproc | Object | [*CONTROL_MPP_DECOMPOSITION_NUMPROC card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_NUMPROC_properties) |
| mpp\_decomposition\_outdecomp | Object | [*CONTROL_MPP_DECOMPOSITION_OUTDECOMP card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_OUTDECOMP_properties) |
| mpp\_decomposition\_rcblog | Object | [*CONTROL_MPP_DECOMPOSITION_RCBLOG card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_RCBLOG_properties) |
| mpp\_decomposition\_scale\_contact\_cost | Object | [*CONTROL_MPP_DECOMPOSITION_SCALE_CONTACT_COST card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_SCALE_CONTACT_COST_properties) |
| mpp\_decomposition\_scale\_factor\_sph | Object | [*CONTROL_MPP_DECOMPOSITION_SCALE_FACTOR_SPH card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_SCALE_FACTOR_SPH_properties) |
| mpp\_decomposition\_show | Object | [*CONTROL_MPP_DECOMPOSITION_SHOW card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_SHOW_properties) |
| mpp\_decomposition\_transformation | Object | [*CONTROL_MPP_DECOMPOSITION_TRANSFORMATION card](primer-control-class.md#Control_*CONTROL_MPP_DECOMPOSITION_TRANSFORMATION_properties) |
| mpp\_io\_binoutonly | Object | [*CONTROL_MPP_IO_BINOUTONLY card](primer-control-class.md#Control_*CONTROL_MPP_IO_BINOUTONLY_properties) |
| mpp\_io\_lstc\_reduce | Object | [*CONTROL_MPP_IO_LSTC_REDUCE card](primer-control-class.md#Control_*CONTROL_MPP_IO_LSTC_REDUCE_properties) |
| mpp\_io\_nod3dump | Object | [*CONTROL_MPP_IO_NOD3DUMP card](primer-control-class.md#Control_*CONTROL_MPP_IO_NOD3DUMP_properties) |
| mpp\_io\_nodump | Object | [*CONTROL_MPP_IO_NODUMP card](primer-control-class.md#Control_*CONTROL_MPP_IO_NODUMP_properties) |
| mpp\_io\_nofail | Object | [*CONTROL_MPP_IO_NOFAIL card](primer-control-class.md#Control_*CONTROL_MPP_IO_NOFAIL_properties) |
| mpp\_io\_nofull | Object | [*CONTROL_MPP_IO_NOFULL card](primer-control-class.md#Control_*CONTROL_MPP_IO_NOFULL_properties) |
| mpp\_io\_swapbytes | Object | [*CONTROL_MPP_IO_SWAPBYTES card](primer-control-class.md#Control_*CONTROL_MPP_IO_SWAPBYTES_properties) |
| mpp\_mat\_model\_driver | Object | [*CONTROL_MPP_MATERIAL_MODEL_DRIVER card](primer-control-class.md#Control_*CONTROL_MPP_MATERIAL_MODEL_DRIVER_properties) |
| mpp\_rebalance | Object | [*CONTROL_MPP_REBALANCE card](primer-control-class.md#Control_*CONTROL_MPP_REBALANCE_properties) |
| nonlocal | Object | [*CONTROL_NONLOCAL card](primer-control-class.md#Control_*CONTROL_NONLOCAL_properties) |
| output | Object | [*CONTROL_OUTPUT card](primer-control-class.md#Control_*CONTROL_OUTPUT_properties) |
| parallel | Object | [*CONTROL_PARALLEL card](primer-control-class.md#Control_*CONTROL_PARALLEL_properties) |
| pore\_air | Object | [*CONTROL_PORE_AIR card](primer-control-class.md#Control_*CONTROL_PORE_AIR_properties) |
| pore\_fluid | Object | [*CONTROL_PORE_FLUID card](primer-control-class.md#Control_*CONTROL_PORE_FLUID_properties) |
| pwp\_auto\_tmf | Object | [*CONTROL_PWP_AUTO_TMF card](primer-control-class.md#Control_*CONTROL_PWP_AUTO_TMF_properties) |
| pzelectric | Object | [*CONTROL_PZELECTRIC card](primer-control-class.md#Control_*CONTROL_PZELECTRIC_properties) |
| ref\_config | Object | [*CONTROL_REFERENCE_CONFIGURATION card](primer-control-class.md#Control_*CONTROL_REFERENCE_CONFIGURATION_properties) |
| remesh | Object | [*CONTROL_REMESHING card](primer-control-class.md#Control_*CONTROL_REMESHING_properties) |
| rigid | Object | [*CONTROL_RIGID card](primer-control-class.md#Control_*CONTROL_RIGID_properties) |
| shell | Object | [*CONTROL_SHELL card](primer-control-class.md#Control_*CONTROL_SHELL_properties) |
| solid | Object | [*CONTROL_SOLID card](primer-control-class.md#Control_*CONTROL_SOLID_properties) |
| solution | Object | [*CONTROL_SOLUTION card](primer-control-class.md#Control_*CONTROL_SOLUTION_properties) |
| sph | Object | [*CONTROL_SPH card](primer-control-class.md#Control_*CONTROL_SPH_properties) |
| sph\_incompressible | Object | [*CONTROL_SPH_INCOMPRESSIBLE card](primer-control-class.md#Control_*CONTROL_SPH_INCOMPRESSIBLE_properties) |
| spotweld\_beam | Object | [*CONTROL_SPOTWELD_BEAM card](primer-control-class.md#Control_*CONTROL_SPOTWELD_BEAM_properties) |
| staged\_construction | Object | [*CONTROL_STAGED_CONSTRUCTION card](primer-control-class.md#Control_*CONTROL_STAGED_CONSTRUCTION_properties) |
| start | Object | [*CONTROL_START card](primer-control-class.md#Control_*CONTROL_START_properties) |
| steady\_state\_rolling | Object | [*CONTROL_STEADY_STATE_ROLLING card](primer-control-class.md#Control_*CONTROL_STEADY_STATE_ROLLING_properties) |
| structured | Object | [*CONTROL_STRUCTURED card](primer-control-class.md#Control_*CONTROL_STRUCTURED_properties) |
| termination | Object | [*CONTROL_TERMINATION card](primer-control-class.md#Control_*CONTROL_TERMINATION_properties) |
| thermal\_eigenvalue | Object | [*CONTROL_THERMAL_EIGENVALUE card](primer-control-class.md#Control_*CONTROL_THERMAL_EIGENVALUE_properties) |
| thermal\_forming | Object | [*CONTROL_THERMAL_FORMING card](primer-control-class.md#Control_*CONTROL_THERMAL_FORMING_properties) |
| thermal\_nonlinear | Object | [*CONTROL_THERMAL_NONLINEAR card](primer-control-class.md#Control_*CONTROL_THERMAL_NONLINEAR_properties) |
| thermal\_solver | Object | [*CONTROL_THERMAL_SOLVER card](primer-control-class.md#Control_*CONTROL_THERMAL_SOLVER_properties) |
| thermal\_timestep | Object | [*CONTROL_THERMAL_TIMESTEP card](primer-control-class.md#Control_*CONTROL_THERMAL_TIMESTEP_properties) |
| timestep | Object | [*CONTROL_TIMESTEP card](primer-control-class.md#Control_*CONTROL_TIMESTEP_properties) |
| units | Object | [*CONTROL_UNITS card](primer-control-class.md#Control_*CONTROL_UNITS_properties) |
| vibro\_acoustic | Object | [*CONTROL_VIBRO_ACOUSTIC card](primer-control-class.md#Control_*CONTROL_VIBRO_ACOUSTIC_properties) |

| Detailed Description<br>The Control class allows you to create, modify, edit and manipulate control cards.<br>Unlike other classes there is no constructor and there are no functions.<br>Instead a Control object is available as the [control](primer-model-class.md#control)<br>property of a [Model](primer-model-class.md) object. This object allows you to access all of<br>the control cards.<br><br>For example, to activate control card \*CONTROL\_TERMINATION in model m and set endtim to 0.1. |
| --- |


```
m.control.termination.exists = true;
m.control.termination.endtim = 0.1;

```

See the properties for more details.

* * *

## \*CONTROL\_ACCURACY

### Properties for \*CONTROL\_ACCURACY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exacc | real | Explicit accuracy parameter |
| exists | logical | true if control card exists |
| iacc | integer | Implicit accuracy flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| inn | integer | Invariant node numbering for shell element |
| osu | integer | Objective stress update for large timestep |
| pidosu | integer | Part set id for objective stress updates |

* * *

## \*CONTROL\_ACOUSTIC

### Properties for \*CONTROL\_ACOUSTIC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| macdvp | logical | Acoustic nodal motions will be calculated or not. |

* * *

## \*CONTROL\_ACOUSTIC\_COUPLING

### Properties for \*CONTROL\_ACOUSTIC\_COUPLING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| acecf1 | real | Multiplier on proximity test. |
| acecf2 | real | Angle between normal vectors in an orientation test. |
| acecf3 | real | Multiplier on ceiling test. |
| acecf4 | real | Area equilibration threshold. |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| maccpl | integer | Coupling method. |

* * *

## \*CONTROL\_ACOUSTIC\_SPECTRAL

### Properties for \*CONTROL\_ACOUSTIC\_SPECTRAL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| masehrf | integer | Optional h-refinement. |
| maseigx | integer | Approach to element time step calculation. |
| masekfl | integer | Dump flag for h-refined and spectral element meshes. |
| maseord | integer | Spectral element integration order. |
| maseplt | integer | Flag to output a high-resolution plot state form. |

* * *

## \*CONTROL\_ADAPSTEP

### Properties for \*CONTROL\_ADAPSTEP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dfactr | real | Incremental increase in factin |
| exists | logical | true if control card exists |
| factin | real | Initial relaxation factor for contact force |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_ADAPTIVE

### Properties for \*CONTROL\_ADAPTIVE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| adpass | integer | 1 or 2 pass adaptivity flag |
| adpctl | real | Adaptivity error tolerance in degrees for activating fusion |
| adpd3p | integer | Flag to control the output of adaptive mesh & d3plot files |
| adpdam | integer | Type of damage accumulation in the workpiece |
| adpene | real | Nodal penetration at which to refine elem |
| adperr | integer | Options for recovery techniques and error estimators |
| adpfreq | real | Time interval between refinements |
| adpopt | integer | Adaptive options |
| adpscl | real | Strain rate scale factor |
| adpsize | real | Min element edge size for adaptivity |
| adpth | real | Absolute shell thickness below which remeshing should begin |
| adptol | real | Adaptive error tolerance (degrees) |
| adptyp | integer | Adaptive options |
| cbirth | real | Birth time for adaptive fusion |
| cdeath | real | Death time for adaptive fusion |
| cnla | real | Limit angle for corner nodes |
| d3trace | integer | Flag for writing out D3PLOT state |
| exists | logical | true if control card exists |
| iadpcl | integer | Fission level that fusion will start at |
| iadpe90 | integer | Maximum no. of elements covering 90degree of radii |
| iadpgh | integer | Fiffion flag for neighbour splitting |
| ifsand | integer | Flag for forming of sandwiched parts with adaptive blank mesh |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ioflag | integer | Flag to generate adaptive mesh |
| ireflg | integer | Uniform refinement level. Loadcurve if negative |
| lcadp | integer | Loadcurve: Adaptive interval vs time |
| lclvl | integer | Loadcurve of maximum refinement level vs. time |
| maxel | integer | Max number of elements for adaptivity |
| maxlvl | integer | Max #refinement levels |
| memory | integer | Memory limit beyond which adaptivity will cease |
| mmm2d | integer | Option for merging common boundaries of all adapted materials |
| ncfreq | integer | Frequency of fission to fusion steps |
| orient | integer | Flag to set the global orientation of a forming contact |
| tbirth | real | Birth time for adaptivity |
| tdeath | real | Death time for adaptivity |

* * *

## \*CONTROL\_ADAPTIVE\_CURVE

### Properties for \*CONTROL\_ADAPTIVE\_CURVE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| idset | integer | Shell/Part set id |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| itriopt | integer | Refinement option for enclosed area of trim curve |
| itype | integer | Set type |
| n | integer | Refinement option |
| smin | real | Element dimension limit for refining |

* * *

## \*CONTROL\_AIRBAG

### Properties for \*CONTROL\_AIRBAG

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ckerr | integer | Flag to check and report open edge of CV airbag |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_ALE

### Properties for \*CONTROL\_ALE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| aafac | real | ALE advection factor |
| afac | real | Smoothing weight factor: simple average |
| beamin | real | Flag for aligning beam dynamics |
| bfac | real | Smoothing weight factor: volume weighting |
| bndflx | integer | Multi-Material ALE group set if positive or -1 |
| cfac | real | Smoothing weight factor: isoparametric |
| checkr | real | Parameter for ALE pressure locking |
| dct | integer | Default continuum treatment |
| dfac | real | Smoothing weight factor: equipotential |
| dtmufac | real | Scale time step called DTMU |
| ebc | integer | Automatic Euler boundary condition |
| efac | real | Smoothing weight factor: equipotential |
| end | real | End time for smoothing |
| exists | logical | true if control card exists |
| ialedr | integer | Include ALE computations in the dynamic relaxation analysis |
| imascl | integer | Flag for mass scaling for ALE parts |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| meth | integer | Advection method |
| minmas | real | Factor of the minimum mass allowed in an element |
| mmgpref | integer | Selects the method that is used to include a reference
pressure in a calculation involving ALE multi-material groups |
| nadv | integer | Number of cycles between advections |
| nbkt | integer | Number of Lagrangian cycles between bucket sort searches |
| ncpl | integer | Number of Lagrangian cycles between coupling calculations |
| nsidebc | integer | Optional excluded node set |
| optimpp | integer | Optimize the MPP communications (Range 0/1) |
| pdifmx | real | Max pressure difference for stress zeroing |
| pref | real | ref pressure on boundary |
| prit | integer | Pressure equalibrium flag |
| start | real | Start time for smoothing |
| vfact | real | Void factor |

* * *

## \*CONTROL\_BULK\_VISCOSITY

### Properties for \*CONTROL\_BULK\_VISCOSITY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| btype | integer | beam bulk viscosity type |
| exists | logical | true if control card exists |
| ibq | integer | Default bulk viscosity type (m#PR035) |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| q1 | real | Default linear viscosity coefficient |
| q2 | real | Default quadratic viscosity coefficient |
| tstype | integer | Thick shell bulk viscosity type |

* * *

## \*CONTROL\_CHECK

### Properties for \*CONTROL\_CHECK

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| solitary | integer | TRUE if a plain (no \_SHELL suffix) card exists |

* * *

## \*CONTROL\_COARSEN

### Properties for \*CONTROL\_COARSEN

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| angle | real | Permitted angle between neighbours |
| exists | logical | true if control card exists |
| icoarse | integer | On/Off flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| n1 | integer | Optional seed node ID 1 |
| n2 | integer | Optional seed node ID 2 |
| n3 | integer | Optional seed node ID 3 |
| n4 | integer | Optional seed node ID 4 |
| n5 | integer | Optional seed node ID 5 |
| n6 | integer | Optional seed node ID 6 |
| n7 | integer | Optional seed node ID 7 |
| n8 | integer | Optional seed node ID 8 |
| nseed | integer | #extra "seed" nodes below |
| psid | integer | excluded part set |
| smax | real | Maximum element size |

* * *

## \*CONTROL\_CONSTRAINED

### Properties for \*CONTROL\_CONSTRAINED

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| sprchk | integer | Flag to check and report open edge of CV constrained |
| sprsmd | integer | Shear moment distribution behavior for SPR3 |
| sprsrch | integer | Search method for SPR2 and SPR3 |

* * *

## \*CONTROL\_CONTACT

### Properties for \*CONTROL\_CONTACT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cohtiem | integer | Flag to treat how the mass from SURFB of a tied contact affects the time step estimation of cohesive elements |
| dfric | real | Default dynamic coefficient of friction |
| dir\_tie | integer | Directional tie for MPP non-groupable tied contacts |
| ecdt | integer | Timestep override for eroding contacts |
| edc | real | Default exponential decay coefficient |
| enmass | integer | Treatment of mass of eroded nodes |
| exists | logical | true if control card exists |
| frceng | integer | Flag to calculate internal friction energy |
| ftall | integer | output contact forces to rcforc |
| icov | integer | Invokes the covariant formulation of Konyukhov and Schweizerhof |
| igactc | integer | option to use isogeometric shells for contact detection |
| ignore | integer | Ignore initial penetrations flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| interm | integer | Intermittent searching flag for old contacts |
| irevspt | integer | Flag to revert the spot weld thinning behavior |
| islchk | integer | Initial penetration check flag |
| isym | integer | symmetry option. Node set if negative |
| ithcnt | integer | thermal contact heat transfer mode |
| ithoff | integer | Flag for offsetting thermal contact surfaces for thick thermal shells |
| nsbcs | integer | #cycles between 3D bucket sorts |
| nserod | integer | erosion option |
| orien | integer | Automatic contact segment orientation flag |
| outseg | integer | Spotweld output flag |
| pen\_sf | real | Default local penalty scale factor |
| penopt | integer | Penalty stiffness option flag |
| pstiff | integer | method for penalty stiff calc |
| ptscl | real | scale factor on the contact stress exerted onto shells |
| rwgaps | integer | flag for gap stiffness |
| rwgdth | real | death time for gap stiffness |
| rwksf | real | penalty scale factor |
| rwpnal | real | Scale factor for rigid wall penalties |
| sfric | real | Default static coefficient of friction |
| shledg | integer | Flag for assuming edge shape for shells |
| shlthk | integer | Shell thickness consideration flag |
| shltrw | real | Shell thickness scale factor |
| skiprwg | integer | Display rigidwall flag |
| slsfac | real | Scale factor for sliding penalties |
| spotdel | integer | Spotweld deletion flag |
| spothin | real | Optional thickness scale factor |
| spotstp | integer | Error termination flag on unfound spotweld |
| ssthk | integer | Shell thickness use flag for type 4 contacts |
| swradf | real | Spot weld radius scale factor |
| tdcnof | integer | tied constraint offset contact update option |
| th | real | Default contact thickness |
| th\_sf | real | Default thickness scale factor |
| thkchg | integer | Consider shell thickness change flag |
| tiedprj | integer | Projection bypass flag for TIED types |
| usrfrc | integer | Storage for user-controlled friction subroutine |
| usrstr | integer | Storage for user-controlled control subroutine |
| vfc | real | Default viscous friction coefficient |
| xpene | real | Surface max penetration check multiplier |

* * *

## \*CONTROL\_COUPLING

### Properties for \*CONTROL\_COUPLING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| flipx | integer | Flag to flip X coords |
| flipy | integer | Flag to flip Y coords |
| flipz | integer | Flag to flip Z coords |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| subcyl | integer | Subcycling flag |
| timidl | real | Idle time value |
| unforc | real | Force conversion factor |
| unleng | real | Length conversion factor |
| untime | real | Time conversion factor |

* * *

## \*CONTROL\_CPG

### Properties for \*CONTROL\_CPG

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| ibchk | integer | Mesh integrity check |
| icorr | integer | Correction of density and total energy |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| iturb | integer | Turbulence model |
| ncpc | integer | Number of cycles between point cloud checks. A negative value will point to a load curve ID function of time |
| nslip | integer | Slip condition applied at walls |
| verb | integer | CPG verbosity control |

* * *

## \*CONTROL\_CPM

### Properties for \*CONTROL\_CPM

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| blkv | integer | Flag to allocate additional memory for contact nodal forces |
| cpmerr | integer | Disable/enable error checking |
| cpmmf | integer | Flag to consider airbag system velocity |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ncpmout | integer | Control CPM output database to D3PLOT |
| ncpmts | integer | Timestep size estimation |
| np2p | integer | Number of cycles for repartition particles |
| p2pmix | integer | Control the energy transfer during particle-to-particle collision |
| pmis | integer | Flag for choosing logic to use when a particle leaks out due to undetected contact |
| sffdc | real | Scale factor of force decay constant |

* * *

## \*CONTROL\_CPU

### Properties for \*CONTROL\_CPU

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cputim | real | Max permitted cpu time |
| exists | logical | true if control card exists |
| iglst | integer | glstat data flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_DEBUG

### Properties for \*CONTROL\_DEBUG

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_DISCRETE\_ELEMENT

### Properties for \*CONTROL\_DISCRETE\_ELEMENT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| ang | real | contact angle |
| bt | real | Birth time |
| cap | integer | dry/wet particle flag |
| cp | real | DES thermal property |
| dc | real | Exponential decay coefficient |
| dt | real | Death time |
| exists | logical | true if control card exists |
| fricd | real | Dynamic coefficient of friction |
| fricr | real | rolling friction coefficient |
| frics | real | friction coefficient |
| gamma | real | liquid surface tension |
| gap | real | parameter affecting spatial limit of liquid bridge |
| idesoft | integer | Flag for soft constraint formulation |
| ignore | integer | Ignore penetration flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| iskip | integer | Flag for skipping the calculation of contact force between DES: |
| lnorm | integer | LCID that defines the function for normal stiffness vs norm pen ratio |
| lshear | integer | LCID that defines the function for shear stiffness vs norm pen ratio |
| maxnei | integer | Number of neighbors to be tracked for DES contact and capillary force calculation |
| nbuf | integer | Asynchronous scheme and memory buffer option |
| ncrb | integer | Rebalancing frequency |
| ndamp | real | normal damping coefficient |
| normk | real | scale factor for normal spring constant |
| parallel | integer | Option to force calculation of bonded DES |
| sheark | real | ratio between sheark/normk |
| sofscl | real | Scale factor applied to the contact stiffness |
| tc | real | DES thermal property |
| tdamp | real | tangential damping coefficient |
| tfac | real | DES thermal property |
| vol | real | volume fraction |
| vtk | integer | max number of subcycling cycles |

* * *

## \*CONTROL\_DYNAMIC\_RELAXATION

### Properties for \*CONTROL\_DYNAMIC\_RELAXATION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| drfctr | real | Dyn relaxation factor |
| drpset | integer | Part set used to check for convergence |
| drterm | real | Optional DR termination time |
| drtol | real | Convergence tolerance |
| edttl | real | Convergence tolerance on auto control |
| exists | logical | true if control card exists |
| idrflg | integer | Stress initialisation flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| irelal | integer | Automatic control flag |
| nrcyck | integer | #iterations between convergence checks |
| tssfdr | real | Optional timestep factor during DR |

* * *

## \*CONTROL\_EFG

### Properties for \*CONTROL\_EFG

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| etol | real | Error tolerance in the IMLM |
| exists | logical | true if control card exists |
| hsort | integer | Not used |
| ideb | integer | Output internal debug message |
| idila | integer | dilation param |
| imlm | integer | Choice for matrix operation, linear solving and memory usage |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| inint | integer | Factor needed for the estimation of maximum workspace used during initialization |
| ispline | integer | kernel function |
| ssort | integer | Flag for automatic sort of background triangular shells |

* * *

## \*CONTROL\_ENERGY

### Properties for \*CONTROL\_ENERGY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| disen | integer | Dissipation energy calculation calc flag |
| drlen | integer | Drilling energy calculation flag |
| exists | logical | true if control card exists |
| hgen | integer | Hourglass energy calc flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| irgen | integer | Initial reference geometry calc flag |
| maten | integer | Detailed material energies flag |
| rwen | integer | Rigid wall energy calc flag |
| rylen | integer | Rayleigh energy calc flag |
| slnten | integer | Contact energy calc flag |

* * *

## \*CONTROL\_EXPLICIT\_THERMAL\_ALE\_COUPLING

### Properties for \*CONTROL\_EXPLICIT\_THERMAL\_ALE\_COUPLING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| mmset | integer | The [Multi-material Set](primer-set-class.md) ID. |
| partset | integer | The [Part Set](primer-set-class.md) ID. |

* * *

## \*CONTROL\_EXPLICIT\_THERMAL\_BOUNDARY

### Properties for \*CONTROL\_EXPLICIT\_THERMAL\_BOUNDARY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| lcid | integer | The [Curve](primer-curve-class.md) ID specifying Temperature vs Time. |
| sgset | integer | The [Segment Set](primer-set-class.md) ID. |

* * *

## \*CONTROL\_EXPLICIT\_THERMAL\_CONTACT

### Properties for \*CONTROL\_EXPLICIT\_THERMAL\_CONTACT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ncycle | real | Number of cycle between checks of new contact. |
| partset | integer | The [Part Set](primer-set-class.md) ID. |

* * *

## \*CONTROL\_EXPLICIT\_THERMAL\_INITIAL

### Properties for \*CONTROL\_EXPLICIT\_THERMAL\_INITIAL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| id | integer | If less than 0 then Element ID if greater than 0 then [Set](primer-set-class.md) ID. Can be SOLID, SHELL, BEAM or THICK SHELL based on value of idtyp. |
| idtyp | integer | Type of ID. Valid values: 1-Solid, 2-Shell, 3-Beam, 4-Thick shell . |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| tempini | real | Initial Temperature. |

* * *

## \*CONTROL\_EXPLICIT\_THERMAL\_OUTPUT

### Properties for \*CONTROL\_EXPLICIT\_THERMAL\_OUTPUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dtout | real/integer | Time interval between outputs. Constant float value if DTOUTYP = 0, [Curve](primer-curve-class.md) ID if DTOUTYP = 1. |
| dtoutyp | integer | Type of DTOUT. Valid values: 0-Constant, 1-Time vs DTOUT Curve. |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| set | integer | The [Set](primer-set-class.md) ID. Can be SOLID, SHELL or BEAM Set based on value of setyp. |
| setyp | integer | Type of Set. Valid values: 1-Solid Set, 2-Shell Set, 3-Beam Set. |

* * *

## \*CONTROL\_EXPLICIT\_THERMAL\_PROPERTIES

### Properties for \*CONTROL\_EXPLICIT\_THERMAL\_PROPERTIES

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cp | real/integer | Heat Capacity. Constant float value if CPTYP = 0, [Curve](primer-curve-class.md) ID if CPTYP = 1. |
| cptyp | integer | Type of CP. Valid values: 0-Constant, 1-Temperature vs Heat Capacity Curve. |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| kxx | real/integer | Heat conductivity matrix. Constant float value if respective KxxTYP = 0, [Curve](primer-curve-class.md) ID if respective KxxTYP = 1. |
| kxxtyp | integer | Types of Kxx. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kxy | real/integer | Heat conductivity matrix. Constant float value if respective KxyTYP = 0, [Curve](primer-curve-class.md) ID if respective KxyTYP = 1. |
| kxytyp | integer | Types of Kxy. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kxz | real/integer | Heat conductivity matrix. Constant float value if respective KxzTYP = 0, [Curve](primer-curve-class.md) ID if respective KxzTYP = 1. |
| kxztyp | integer | Types of Kxz. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kyx | real/integer | Heat conductivity matrix. Constant float value if respective KyxTYP = 0, [Curve](primer-curve-class.md) ID if respective KyxTYP = 1. |
| kyxtyp | integer | Types of Kyx. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kyy | real/integer | Heat conductivity matrix. Constant float value if respective KyyTYP = 0, [Curve](primer-curve-class.md) ID if respective KyyTYP = 1. |
| kyytyp | integer | Types of Kyy. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kyz | real/integer | Heat conductivity matrix. Constant float value if respective KyzTYP = 0, [Curve](primer-curve-class.md) ID if respective KyzTYP = 1. |
| kyztyp | integer | Types of Kyz. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kzx | real/integer | Heat conductivity matrix. Constant float value if respective KzxTYP = 0, [Curve](primer-curve-class.md) ID if respective KzxTYP = 1. |
| kzxtyp | integer | Types of Kzx. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kzy | real/integer | Heat conductivity matrix. Constant float value if respective KzyTYP = 0, [Curve](primer-curve-class.md) ID if respective KzyTYP = 1. |
| kzytyp | integer | Types of Kzy. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| kzz | real/integer | Heat conductivity matrix. Constant float value if respective KzzTYP = 0, [Curve](primer-curve-class.md) ID if respective KzzTYP = 1. |
| kzztyp | integer | Types of Kzz. Valid values: 0-Constant, 1-Temperature vs Heat Conductivity Curve. |
| local | integer | Flag to activate an element csys. Valid values: 0-Vecids are considered in Global csys, 1-Vecids are considered in Local Csys. |
| partset | integer | The [Part Set](primer-set-class.md) ID. |
| vecid1 | integer | The [Vector](primer-vector-class.md) ID to define x-direction. |
| vecid2 | integer | The [Vector](primer-vector-class.md) ID to define y-direction. |

* * *

## \*CONTROL\_EXPLICIT\_THERMAL\_SOLVER

### Properties for \*CONTROL\_EXPLICIT\_THERMAL\_SOLVER

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dtfac | real | Time step factor. |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| partset | integer | The [Part Set](primer-set-class.md) ID. |

* * *

## \*CONTROL\_EXPLOSIVE\_SHADOW

### Properties for \*CONTROL\_EXPLOSIVE\_SHADOW

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| set\_option | logical | true if \_SET option is present. |
| setid | integer | Set ID of \*SET\_SHELL or \*SET\_SOLID. |

* * *

## \*CONTROL\_FORMING\_BESTFIT

### Properties for \*CONTROL\_FORMING\_BESTFIT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| filename | string | Target mesh file in keyword format |
| gaponly | integer | Separation distance calculation flag |
| ifast | integer | Computing performance optimisation flag |
| ifit | integer | Best fit flag |
| ifset | integer | Optional flag to define a node set to be included or excluded |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| nsets | integer | An optional node set ID of three nodes from the source mesh |
| nsett | integer | An optional node set ID of three nodes from the target mesh |
| nskip | integer | Optional skipping scheme |
| vector | logical | true if \_VECTOR option is set |

* * *

## \*CONTROL\_FORMING\_INITIAL\_THICKNESS

### Properties for \*CONTROL\_FORMING\_INITIAL\_THICKNESS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| lcid | integer | Load curve ID defining thickness vs distance |
| pid | integer | Part ID of the sheet blank |
| vx | real | X component of vector defining the direction of distance in load curve |
| vy | real | Y component of vector defining the direction of distance in load curve |
| vz | real | Z component of vector defining the direction of distance in load curve |
| x0 | real | Starting position x coordinate |
| y0 | real | Starting position y coordinate |
| z0 | real | Starting position z coordinate |

* * *

## \*CONTROL\_FORMING\_MAXID

### Properties for \*CONTROL\_FORMING\_MAXID

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| i2dynain | integer | Keyword to be output to a dynain file |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| maxide | integer | Element ID number |
| maxidn | integer | Node ID number |
| pid | integer | Part ID of the sheet blank |

* * *

## \*CONTROL\_FORMING\_POSITION

### Properties for \*CONTROL\_FORMING\_POSITION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| pid | integer | Part ID |
| premove | real | Distance to pre-move tool in reverse direction |
| target | integer |  |

* * *

## \*CONTROL\_FORMING\_PRE\_BENDING

### Properties for \*CONTROL\_FORMING\_PRE\_BENDING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | ID of coordinate system (only for the LOCAL option) |
| cx | real | X component of centre of most-bent location |
| cy | real | Y component of centre of most-bent location |
| cz | real | Z component of centre of most-bent location |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| option | integer | Keyword option |
| pset | integer | Part set ID |
| radius | real | Radius of pre-bending |
| vx | real | X component of axis about which blank will be bent |
| vy | real | Y component of axis about which blank will be bent |
| vz | real | Z component of axis about which blank will be bent |

* * *

## \*CONTROL\_FORMING\_PROJECTION

### Properties for \*CONTROL\_FORMING\_PROJECTION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| gap | real | Minimum gap |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| nrbst | integer | Normal direction of blank |
| nrtst | integer | Normal direction of tool |
| pidb | integer | Part id for blank |
| pidt | integer | Part id for tool |

* * *

## \*CONTROL\_FORMING\_REMOVE\_ADAPTIVE\_CONSTRAINTS

### Properties for \*CONTROL\_FORMING\_REMOVE\_ADAPTIVE\_CONSTRAINTS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| pid | integer | Part id to remove adaptive constraints from |

* * *

## \*CONTROL\_FORMING\_SHELL\_TO\_TSHELL

### Properties for \*CONTROL\_FORMING\_SHELL\_TO\_TSHELL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| idsegb | integer | Set id of the segments to be generated at the bottom layer |
| idsegt | integer | Set id of the segments to be generated at the top layer |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| midsf | integer | Mid-plane position flag |
| pid | integer | Part id of the thin shell elements |
| thick | real | Thickness of the thick shell elements |

* * *

## \*CONTROL\_FORMING\_STONING

### Properties for \*CONTROL\_FORMING\_STONING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| direct | real | Number of automatically determined directions |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| istone | integer | Stoning calculation option |
| itype | integer | Set type designation |
| length | real | Length of the stone |
| method | integer | Stoning method |
| node1 | integer | Tail node defining stone moving direction |
| node1 | integer | Head node defining stone moving direction |
| reverse | integer | Surface normal reversing option |
| sid | integer | Node/Shell set id |
| step | real | Stepping size of moving stone |
| v1 | real | Vector component defining stoning direction |
| v2 | real | Vector component defining stoning direction |
| v3 | real | Vector component defining stoning direction |
| width | real | Width of the stone |

* * *

## \*CONTROL\_FORMING\_STRAIN\_RATIO\_SMOOTH

### Properties for \*CONTROL\_FORMING\_STRAIN\_RATIO\_SMOOTH

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt\_cycle | real | Flag for output option (time interval or cycle number) |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| weight | real | Coefficient in equation |

* * *

## \*CONTROL\_FORMING\_TEMPLATE

### Properties for \*CONTROL\_FORMING\_TEMPLATE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| al\_fe | string | A=Aluminium blank, F=steel |
| amax | real | Maximum allowable acceleration |
| blkid | integer | Part (stype=0) or part set (stype=1) ID that defines the blank |
| bndl | integer | Part that defines the lower binder |
| bndu | integer | Part that defines the upper binder |
| d3plt | integer | Number of output states in the D3PLOT database |
| density | real | Density |
| dieid | integer | Part that defines the die |
| e | real | Youngs modulus |
| exists | logical | true if control card exists |
| fs | real | Friction coefficient |
| gap | real | Home gap between rigid tools |
| idtemp | integer | Type of forming process |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| k | real | Strength coefficient for exponential hardening |
| lcss | integer | Loadcurve for stress-strain relationship |
| lvlada | integer | Maximum adaptive level |
| mtyp | integer | Material type |
| n | real | Exponent for exponential hardening |
| patern | integer | Velocity profile of moving tool |
| pnch | integer | Part that defines the punch |
| pr | real | Poissons ratio |
| prebd | real | Distance between lower binder and punch |
| r00 | real | Material anisotropic parameter R00 |
| r45 | real | Material anisotropic parameter R45 |
| r90 | real | Material anisotropic parameter R90 |
| sizeada | real | Minimum element size permitted in the adaptive mesh |
| stype | integer | 0-&gt;blkid is PART, 1-&gt;PARTSET NOTE don't use &lt;type&gt; as in stat\_header |
| thick | real | Blank thickness |
| timsada | integer | Total number of adaptive steps during the forming simulation |
| unit | integer | Units for simulation |
| vid | integer | Vector ID defining direction of movement |
| vmax | real | Maximum allowable tool velocity |
| vx | real | X vector component of movement of punch |
| vy | real | Y vector component of movement of punch |
| vz | real | Z vector component of movement of punch |

* * *

## \*CONTROL\_FORMING\_TOLERANC

### Properties for \*CONTROL\_FORMING\_TOLERANC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt\_cycle | real | Flag for output option (time interval or cycle number) |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| output | integer | Output Flag |
| weight | real | Coefficient in equation |

* * *

## \*CONTROL\_FORMING\_TRAVEL

### Properties for \*CONTROL\_FORMING\_TRAVEL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| follow | integer | Part for tool to follow |
| gap | real | Min distance between tool and target in the home position |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| phase | integer | Phase number |
| pid | integer | Part ID of tool |
| target | integer | Move tool PID to meet part TARGET |
| travel | real | Distance to move tool along VID |
| vid | integer | Vector ID defining direction of travel |

* * *

## \*CONTROL\_FORMING\_TRIM\_MERGE

### Properties for \*CONTROL\_FORMING\_TRIM\_MERGE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| gapm | real | Gap distance between two open ends of a trim loop curve in the model |
| imerge | integer | Activation flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_FORMING\_TRIM\_SOLID\_REFINEMENT

### Properties for \*CONTROL\_FORMING\_TRIM\_SOLID\_REFINEMENT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| ilevel | integer | Adaptive refinement level |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| irefine | integer | Flag to activate trimming of a multi-layer sandwiched part |

* * *

## \*CONTROL\_FORMING\_UNFLANGING

### Properties for \*CONTROL\_FORMING\_UNFLANGING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| charlen | real | Max flange height |
| dist | real | Distance tolerance for auto-SPC along flange roots |
| dvid | integer | Not used |
| epsmx | real | Max effective plastic strain, beyond which elements are deleted |
| exists | logical | true if control card exists |
| iflimit | integer | Iteration limit for first phase of unfolding |
| ilinear | integer | Unfolding algorithm selection flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| nb1 | integer | Start node ID on a flange root boundary |
| nb2 | integer | ID of a node in the middl of the flange root boundary |
| nb3 | integer | End node ID on a flange root boundary |
| ndouter | integer | A node ID on the outer flange boundary |
| noption | integer | Flag to turn on unfolding simulation |
| nunbend | integer | Estimated number of unbending |
| output | logical | TRUE if \_&lt;OPTION&gt; is OUTPUT. |
| stfbend | real | Unflanging stiffness |
| stfcnt | real | Normal stiffness |
| thmn | real | Min thickness below which elements are deleted |
| thmx | real | Max thickness beyond which elements are deleted |

* * *

## \*CONTROL\_FORMING\_USER

### Properties for \*CONTROL\_FORMING\_USER

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| adatims | integer | Total number of adaptive steps during the forming simulation |
| al\_fe | string | A=Aluminium blank, F=steel |
| amax | real | Maximum allowable acceleration |
| blank | integer | Part (stype=0) or part set (stype=1) ID for blank |
| d3plot | integer | Number of output states in the D3PLOT database |
| density | real | Density |
| e | real | Youngs modulus |
| exists | logical | true if control card exists |
| fs | real | Friction coefficient |
| gap | real | Minimum gap between tools |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| k | real | Strength coefficient for exponential hardening |
| lcss | integer | Loadcurve for stress-strain relationship |
| lvlada | integer | Maximum adaptive level |
| mtype | integer | Material type |
| n | real | Exponent for exponential hardening |
| patern | integer | Velocity profile of moving tool |
| pr | real | Poissons ratio |
| r00 | real | Material anisotropic parameter R00 |
| r45 | real | Material anisotropic parameter R45 |
| r90 | real | Material anisotropic parameter R90 |
| sizeada | real | Minimum element size permitted in the adaptive mesh |
| stype | integer | Flag for part/part set |
| thick | real | Blank thickness |
| unit | integer | Units for simulation |
| vmax | real | Maximum allowable tool velocity |

* * *

## \*CONTROL\_FREQUENCY\_DOMAIN

### Properties for \*CONTROL\_FREQUENCY\_DOMAIN

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| mcf | integer | Flag for writing out MCF (Modal Coefficient File) from SSD analysis |
| mpn | real | Large mass added per node. |
| refgeo | integer | Flag for reference geometry in acoustic eigenvalue analysis |

* * *

## \*CONTROL\_FREQUENCY\_RESPONSE\_FUNCTION

### Properties for \*CONTROL\_FREQUENCY\_RESPONSE\_FUNCTION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dampf | real | Modal damping coefficient |
| dmpmas | real | Mass proportional damping constant in Rayleigh damping |
| dmpstf | real | Stiffness proportional damping constant in Rayleigh damping |
| dof1 | integer | Applicable degrees-of-freedom for excitation input |
| dof2 | integer | Applicable degrees-of-freedom for response output |
| exists | logical | true if control card exists |
| fmax | real | Maximum frequency for FRF output |
| fmin | real | Minimum frequency for FRF output |
| fnmax | real | Optional maximum natural frequency |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| lcdam | integer | Loadcurve ID defining modal damping coefficient |
| lctyp | integer | Type of load curve |
| mdmax | integer | Last mode employed in FRF computation |
| mdmin | integer | First mode employed in FRF computation |
| n1 | integer | Node (n1typ=0) / node set (n1typ=1) /segment set (n1typ=2) ID for excitation input |
| n1typ | integer | Type of N1 |
| n2 | integer | Node (n2typ=0) /node set (n2typ=1) /segment set (n2typ=2) ID for response output |
| n2typ | integer | Type of N2 |
| nfreq | integer | Number of frequencies for FRF output |
| restrt | integer | Restart option |
| vad1 | integer | Excitation input type |
| vad2 | integer | Response output type |
| vid | integer | Vector ID for DOF1=4 |

* * *

## \*CONTROL\_HOURGLASS

### Properties for \*CONTROL\_HOURGLASS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| f\_936 | integer | Internal flag to set 936 compatibility |
| ihq | integer | Hourglass viscosity type |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| qh | real | Default hourglass coefficient |

* * *

## \*CONTROL\_IMPLICIT\_AUTO

### Properties for \*CONTROL\_IMPLICIT\_AUTO

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dtexp | real | time in explicit before switch |
| dtmax | integer | Maximum allowable timestep. Loadcurve if negative |
| dtmin | real | Minimum allowable timestep |
| exists | logical | true if control card exists |
| hcmax | integer | Mid-point relative Euclidian residual norm max tolerance |
| hcmin | integer | Mid-point relative Euclidian residual norm min tolerance |
| hmmax | integer | Mid-point relative maximum residual norm max tolerance |
| hmmin | integer | Mid-point relative maximum residual norm min tolerance |
| hnrmax | integer | Mid-point absolute Nodal Rotational norm tolerance |
| hntmax | integer | Mid-point absolute Nodal Translational norm tolerance |
| hrrmax | integer | Mid-point absolute Rigid body Rotational norm tolerance |
| hrtmax | integer | Mid-point absolute Rigid body Translational norm tolerance |
| iauto | integer | Automatic timestep control flag. Loadcurve if negative |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| iteopt | integer | Optimum equilibrium iteration count per timestep |
| itewin | integer | Allowable iteration window (no. of iterations) |
| kcycle | integer | number of explicit cycles before switch |
| kfail | integer | number of failed implicit attempts before switch |

* * *

## \*CONTROL\_IMPLICIT\_BUCKLE

### Properties for \*CONTROL\_IMPLICIT\_BUCKLE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bckmth | integer | Method to extract buckling modes |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| nmode | integer | number of buckling modes to calculate |

* * *

## \*CONTROL\_IMPLICIT\_CONSISTENT\_MASS

### Properties for \*CONTROL\_IMPLICIT\_CONSISTENT\_MASS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| iflag | integer | Consistent mass matrix flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_IMPLICIT\_DYNAMICS

### Properties for \*CONTROL\_IMPLICIT\_DYNAMICS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| alpha | real | Composite time integration constant |
| beta | real | Newmark time integration constant |
| exists | logical | true if control card exists |
| gamma | real | Newmark time integration constant |
| imass | integer | Implicit analysis type |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| irate | integer | rate effect switch |
| tdybir | integer | birth time for dynamic terms. Loadcurve if negative |
| tdybur | real | burial |
| tdydth | real | death |

* * *

## \*CONTROL\_IMPLICIT\_EIGENVALUE

### Properties for \*CONTROL\_IMPLICIT\_EIGENVALUE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| center | real | Centre frequency |
| eigmscl | integer | Control whether to use the original (unscaled) or the scaled mass |
| eigmth | integer | Eigenvalue extraction method |
| evdump | integer | Flag for writing eigenvalues and eigenvectors |
| exists | logical | true if control card exists |
| ibeam | integer | Beam element formulation for implicit |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| iparm1 | integer | Minimum block size for the Cholesky factorization (for eigmth=101) or Maximum number of iterations (for eigmth=102) |
| iparm2 | integer | Maximum block size for the Cholesky factorization (for eigmth=101) or Block size (for eigmth=102) |
| iparm3 | integer | Node set ID |
| iparm4 | integer | MCMS minimum group/substructure size |
| iparm5 | integer | Harmonic index |
| iparm6 | integer | Vector ID for the axis of rotation |
| ishell | integer | Shell element formulation for implicit |
| isolid | integer | Solid element formulation for implicit |
| itshell | integer | Thick shell element formulation for implicit |
| lflag | integer | Left end point finite flag |
| lftend | real | Left end point of interval |
| mstres | integer | stress compute flag |
| mstrscl | real | Scaling for computing velocity |
| neig | integer | #eigenvalues to extract; loadcurve if negative |
| rflag | integer | Right end point finite flag |
| rhtend | real | Right end point of interval |
| rotscl | real | Scale factor for the inertia of rotational degrees of freedom |
| rparm1 | real | Eigenvalue expansion factor (for eigmth=101) or Convergence tolerance (for eigmth=102) |
| rparm2 | real | BLR preconditioner tolerance |
| rparm4 | real | Control output of eigenvectors to the d3eigv database |
| shfscl | real | Shift scale |

* * *

## \*CONTROL\_IMPLICIT\_EXPLICIT\_HYBRID

### Properties for \*CONTROL\_IMPLICIT\_EXPLICIT\_HYBRID

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| psid | integer | Part set ID |

* * *

## \*CONTROL\_IMPLICIT\_FORMING

### Properties for \*CONTROL\_IMPLICIT\_FORMING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| birth | real | birth time |
| death | real | death time |
| dt0 | real | initial time step size |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ioption | integer | 1:gravity 2:binder |
| nsmax | integer | max number of implicit steps |
| nsmin | integer | min number of implicit steps |
| penchk | real | penetration allowed as ratio of part thickness |

* * *

## \*CONTROL\_IMPLICIT\_GENERAL

### Properties for \*CONTROL\_IMPLICIT\_GENERAL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cnstn | integer | Consistent tangent stiffness flag |
| dt0 | real | Initial timestep for implicit analysis |
| exists | logical | true if control card exists |
| form | integer | Element formulation to use. |
| igs | integer | Geometric (initial stress) stiffness flag |
| imflag | integer | Implicit/explicit switching flag; loadcurve if negative |
| imform | integer | Element formulation switching flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| nsbs | integer | Number of steps in non-linear springback |
| zero\_v | integer | flag to zero vels before switch to implicit |

* * *

## \*CONTROL\_IMPLICIT\_INERTIA\_RELIEF

### Properties for \*CONTROL\_IMPLICIT\_INERTIA\_RELIEF

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ircnt | integer | Lowest IRCNT modes |
| irflag | integer | Inertia relief flag |
| thresh | real | Threshold for rigid body node |

* * *

## \*CONTROL\_IMPLICIT\_JOINTS

### Properties for \*CONTROL\_IMPLICIT\_JOINTS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| icylin | integer | Treatment of cylindrical joints |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| irevol | integer | Treatment of revolute joints |
| ispher | integer | Treatment of spherical joints |

* * *

## \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC

### Properties for \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dtout | real | Modal dynamics output interval |
| exists | logical | true if control card exists |
| filename2 | string | Constraint modes file name |
| filename3 | string | Residual vectors file name |
| filename | string | Eigen modes file name |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| integ | integer | Integration method |
| md\_strs | integer | Modal dynamic stress flag |
| mdflag | integer | Modal dynamic flag |
| nsid | integer | Node set ID of the nodes in the modal model that are subjected to loads |
| zeta | real | Modal dynamic damping constant |

* * *

## \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING

### Member functions

* [GetCoefficient](primer-control-class.md#Control::GetCoefficient)(index*[integer]*)
* [RemoveCoefficient](primer-control-class.md#Control::RemoveCoefficient)(index*[integer]*)
* [SetCoefficient](primer-control-class.md#Control::SetCoefficient)(index*[integer]*, mode/frequency*[integer/real]*, zeta*[real]*)

### Properties for \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| coefficients (read only) | integer | Number of coefficients for SPECIFIC and FREQUENCY\_RANGE options |
| exists | logical | true if control card exists |
| frequency\_range | boolean | If FREQUENCY\_RANGE option is used |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| specific | boolean | If SPECIFIC option is used |
| zeta | real | Modal dynamic damping constant |

| Details of functions 
GetCoefficient(index*[integer]*)

Description<br>Returns the damping coefficient data for an index in \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING. |
| --- |

##### Arguments

* index (integer)
 
The index you want the data for. **Note that indices start at 0, not 1**.

| Returns
<br>An array containing the mode id/frequency and damping coefficient values.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the damping data for the 3rd index for \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING in model m:<br>
```
if (m.control.implicit_modal_dynamic_damping.coefficients >= 3)
{
    var data = m.control.implicit_modal_dynamic_damping.GetCoefficient(2);
}
```
 |
| --- |

* * *

| RemoveCoefficient(index*[integer]*)

Description<br>Removes the damping coefficient data for an index in \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING. |
| --- |

##### Arguments

* index (integer)
 
The index you want to delete damping data for. **Note that indices start at 0, not 1**.

| Returns
<br>No return value. |
| --- |

| Example
<br>To delete the damping data for the 3rd index for \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING in model m:<br>
```
if (m.control.implicit_modal_dynamic_damping.coefficients >= 3)
{
    m.control.implicit_modal_dynamic_damping.RemoveCoefficient(2);
}
```
 |
| --- |

* * *

| SetCoefficient(index*[integer]*, mode/frequency*[integer/real]*, zeta*[real]*)

Description<br>Sets the damping coefficient data for an index in \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING. |
| --- |

##### Arguments

* index (integer)
 
The index you want to set the data for. **Note that indices start at 0, not 1**.

* mode/frequency (integer/real)
 
The mode ID (\_SPECIFIC) or frequency (\_FREQUENCY\_RANGE).

* zeta (real)
 
Damping coefficient

| Returns
<br>No return value. |
| --- |

| Example
<br>To set the damping data for the 3rd index for \*CONTROL\_IMPLICIT\_MODAL\_DYNAMIC\_DAMPING\_SPECIFIC in model m to have mode ID 10 and damping coefficient 0.1:<br>
```
m.control.implicit_modal_dynamic_damping.SetCoefficient(2, 10, 0.1);
```
 |
| --- |

* * *

* * *

## \*CONTROL\_IMPLICIT\_MODES

### Properties for \*CONTROL\_IMPLICIT\_MODES

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| ibase | integer | Offset for numbering |
| id3mode | integer | Write d3mode file flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| iresvec | integer | Converting the attachment modes to residual vectors flag |
| istress | integer | Flag to compute stresses |
| neig | integer | Number of eigenmodes |
| nsida | integer | node set for attachment modes |
| nsidc | integer | node set constraint modes |
| opt | integer | Can be &lt;BLANK&gt; or \_BINARY |
| se\_damp | string | Name of superelement damping matrix |
| se\_filename | string | File name |
| se\_inert | string | Name of superelement inertia matrix |
| se\_mass | string | Name of superelement mass matrix |
| se\_stiff | string | Name of superelement stiffness matrix |

* * *

## \*CONTROL\_IMPLICIT\_ORDERING

### Properties for \*CONTROL\_IMPLICIT\_ORDERING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| nmetis | integer | Number of times to use Metis |
| order | integer | Ordering option |

* * *

## \*CONTROL\_IMPLICIT\_RESIDUAL\_VECTOR

### Properties for \*CONTROL\_IMPLICIT\_RESIDUAL\_VECTOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| iformat | integer | Format for processing eigenmodes |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| iresvec | integer | Residual vector control flag |
| neig | integer | Number of eigenmodes to compute for the purpose of orthogonalizing the computed load |

* * *

## \*CONTROL\_IMPLICIT\_SOLUTION

### Properties for \*CONTROL\_IMPLICIT\_SOLUTION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| abstol | real | absolute convergence tol |
| arcalf | integer | relative influence predictor step |
| arcctl | integer | Arc length controlling node ID |
| arcdir | integer | Arc length controlling node direction |
| arcdmp | integer | Arc length damping option |
| arclen | real | Arc length size |
| arcmth | integer | Arc length method |
| arcpsi | integer | relative influence load/time parameter |
| arctim | integer | initiation time |
| awgt | real | weight factor |
| cpchk | integer | Contact penetration check flag |
| d3itctl | integer | D3ITER database control |
| dctol | real | Displacement convergence tolerance |
| diverg | integer | Divergence flag |
| dmtol | real | Maximum displacement convergence tolerance |
| dnorm | integer | Displacement norm for convergence test |
| ectol | real | Energy convergence tolerance |
| emtol | real | Maximum energy convergence tolerance |
| exists | logical | true if control card exists |
| ilimit | integer | Iteration limit between automatic stiffness reformations |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| irad | real | curve factor |
| istif | integer | Initial stiffness formulation flag |
| kssize | integer | size of krylov space |
| lsdir | integer | search direction |
| lsmtd | integer | search method |
| lstol | real | Line search convergence tolerance |
| maxref | integer | Stiffness reformation limit per time step |
| nlnorm | real | non-linear convergence type |
| nlprint | integer | non-linear solver print flag |
| nrtol | real | Nodal rotational convergence tolerance |
| nsolvr | integer | Non-linear equation solver method |
| nttol | real | Nodal translational convergence tolerance |
| rctol | real | Residual (force) convergence tolerance |
| rmtol | real | Maximum residual convergence tolerance |
| rrtol | real | Rigid body rotational convergence tolerance |
| rttol | real | Rigid body translational convergence tolerance |
| srad | real | radius of influence |
| sred | real | step reduction factor |

* * *

## \*CONTROL\_IMPLICIT\_SOLVER

### Properties for \*CONTROL\_IMPLICIT\_SOLVER

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| absmem | string | Absolute upper bound for the dynamic memory allocated for factorization |
| autospc | integer | AUTOSPC switch |
| autotol | real | AUTOSPC tolerance |
| drcm | integer | Drilling rotation constraint method |
| drcprm | real | Drilling rotation constraint parameter |
| emxdmp | integer | Flag for dumping elemental stiffness and mass matrices |
| exists | logical | true if control card exists |
| iblropt | integer | Flag providing options for the block low-rank (BLR) computations |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| iparm1 | integer | Maximum number of iterations |
| isingle | integer | Controls tasks performed in single precision |
| ispd | integer | Symmetric positive definite flag |
| lcpack | integer | Matrix assembly package |
| lprint | integer | Linear solver print flag |
| lsolvr | integer | Linear equation solver method |
| memlvl | real | Control the load-balancing behavior |
| mtxdmp | integer | flag to dump matrix |
| negev | integer | Negative eigenvalue flag |
| order | integer | Ordering option |
| rdcmem | integer | Factor for capping the amount of dynamic memory requested |
| rparm1 | integer | Absolute tolerance for convergence |
| rparm2 | integer | Relative tolerance for convergence |
| rparm4 | integer | Nominal block size |
| rparm5 | integer | Compression tolerance for the low-rank approximation |

* * *

## \*CONTROL\_IMPLICIT\_SSD\_DIRECT

### Properties for \*CONTROL\_IMPLICIT\_SSD\_DIRECT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| fmax | real | Maximum frequency in the solution |
| fmin | real | Minimum frequency in the solution |
| fractn | integer | Octave fraction |
| fspace | real | Solution frequency assignment strategy |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| issflg | integer | Steady state vibration flag |
| loss | real | Structural loss factor |
| nfreq | integer | Number of frequencies in the solution |

* * *

## \*CONTROL\_IMPLICIT\_STABILIZATION

### Properties for \*CONTROL\_IMPLICIT\_STABILIZATION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| ias | integer | Artificial stabilization flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| scale | integer | scale factor for artificial stabilization. Loadcurve if negative |
| tend | real | End time |
| tstart | real | Start time |

* * *

## \*CONTROL\_IMPLICIT\_STATIC\_CONDENSATION

### Properties for \*CONTROL\_IMPLICIT\_STATIC\_CONDENSATION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| binary | integer | flag to set \_BINARY option |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| sc\_flag | integer | Static condensation control flag |
| sc\_nsid | integer | Node set ID for nodes to be preserved in the procedure |
| sc\_psid | integer | Part set ID for parts to be included in the procedure |
| se\_filename | string | File name |
| se\_inert | string | Name of superelement inertia matrix |
| se\_mass | string | Name of superelement mass matrix |
| se\_stiff | string | Name of superelement stiffness matrix |

* * *

## \*CONTROL\_IMPLICIT\_TERMINATION

### Properties for \*CONTROL\_IMPLICIT\_TERMINATION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| absol | real | Terminate based on absolute total displacement in the Euclidean norm. |
| delta1 | real | Terminate based on rel total displacement in max norm |
| deltau | real | Terminate based on rel total displacement in Euclidean norm |
| exists | logical | true if control card exists |
| ietol | real | Terminate based on internal energy |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ketol | real | Terminate based on kinetic energy |
| nstep | integer | Consecutive implicit time steps |
| tetol | real | Terminate based on total energy |

* * *

## \*CONTROL\_MAPPING\_SHIFT\_BY\_DT

### Properties for \*CONTROL\_MAPPING\_SHIFT\_BY\_DT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_CONTACT\_GROUPABLE

### Properties for \*CONTROL\_MPP\_CONTACT\_GROUPABLE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| grp | integer | GROUPABLE algorithm options |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_AUTOMATIC

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_AUTOMATIC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_BAGREF

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_BAGREF

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_CHECK\_SPEED

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_CHECK\_SPEED

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_CONTACT\_ISOLATE

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_CONTACT\_ISOLATE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| id1 | integer | Contact ID 1 to distrubute |
| id2 | integer | Contact ID 2 to distrubute |
| id3 | integer | Contact ID 3 to distrubute |
| id4 | integer | Contact ID 4 to distrubute |
| id5 | integer | Contact ID 5 to distrubute |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_DISABLE\_UNREF\_CURVES

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_DISABLE\_UNREF\_CURVES

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_DISTRIBUTE\_ALE\_ELEMENTS

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_DISTRIBUTE\_ALE\_ELEMENTS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| overlap | logical | Decompose the structure and ALE domains together? |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_DISTRIBUTE\_SPH\_ELEMENTS

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_DISTRIBUTE\_SPH\_ELEMENTS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_ELCOST

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_ELCOST

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| itype | integer | Hardware specific cost profile |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_FILE

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_FILE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| name | string | decomposition file |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_FLAG\_STRESS\_STRAIN\_CURVE

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_FLAG\_STRESS\_STRAIN\_CURVE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_METHOD

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_METHOD

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| name | string | decomposition method |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_NUMPROC

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_NUMPROC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| n | integer | number of processors |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_OUTDECOMP

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_OUTDECOMP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| itype | integer | Database format |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_RCBLOG

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_RCBLOG

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| name | string | decomposition file |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_REDECOMPOSITION

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_REDECOMPOSITION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| defgeo | integer | Geometry for decomposition |
| exists | logical | true if control card exists |
| freq | real | Time interval between redecomposition |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| remsph | integer | Flag to remove deactivated SPH particles |
| sampt | real | Time interval for collecting element cost profile to use in the next REDECOMP step. |
| stime | real | Start time for redecomposition |
| weight | real | Element cost scale factor for element in contact |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_SCALE\_CONTACT\_COST

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_SCALE\_CONTACT\_COST

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| id10 | integer | Contact ID 10 to distrubute |
| id11 | integer | Contact ID 11 to distrubute |
| id12 | integer | Contact ID 12 to distrubute |
| id13 | integer | Contact ID 13 to distrubute |
| id14 | integer | Contact ID 14 to distrubute |
| id15 | integer | Contact ID 15 to distrubute |
| id1 | integer | Contact ID 1 to distrubute |
| id2 | integer | Contact ID 2 to distrubute |
| id3 | integer | Contact ID 3 to distrubute |
| id4 | integer | Contact ID 4 to distrubute |
| id5 | integer | Contact ID 5 to distrubute |
| id6 | integer | Contact ID 6 to distrubute |
| id7 | integer | Contact ID 7 to distrubute |
| id8 | integer | Contact ID 8 to distrubute |
| id9 | integer | Contact ID 9 to distrubute |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| sf | real | Scale factor |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_SCALE\_FACTOR\_SPH

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_SCALE\_FACTOR\_SPH

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| sf | real | Scale factor |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_SHOW

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_SHOW

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION

### Member functions

* [GetTransformation](primer-control-class.md#Control::GetTransformation)(row*[integer]*)
* [RemoveTransformation](primer-control-class.md#Control::RemoveTransformation)(row*[integer]*)
* [SetTransformation](primer-control-class.md#Control::SetTransformation)(row*[integer]*, type or array*[string or array]*, V1*[real]*, V2 to V9 (optional)*[real]*)

### Properties for \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| rows | integer | Number of rows. |

| Details of functions 
GetTransformation(row*[integer]*)

Description<br>Returns the transformation for a row in \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION. |
| --- |

##### Arguments

* row (integer)
 
The row you want the data for. **Note that rows start at 0, not 1**.

| Returns
<br>An array containing the transformation type and the parameters V1 to V9.<br>
Return type
<br>Array |
| --- |

| Example
<br>To get the transformation for the 3rd row for \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION in model m:<br>
```
if(m.control.mpp_decomposition_transformation.rows >= 3)
{
    var type = m.control.mpp_decomposition_transformation.GetTransformation(2);
}
```
 |
| --- |

* * *

| RemoveTransformation(row*[integer]*)

Description<br>Removes a row in \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION. |
| --- |

##### Arguments

* row (integer)
 
The row number to be deleted. **Note that rows start at 0, not 1**. If there are rows under this one, they will be shifted up.

| Returns
<br>No return value. |
| --- |

| Example
<br>To delete the 3rd row for \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION in model m:<br>
```
if(m.control.mpp_decomposition_transformation.rows >= 3)
{
    m.control.mpp_decomposition_transformation.RemoveTransformation(2);
}
```
 |
| --- |

* * *

| SetTransformation(row*[integer]*, type or array*[string or array]*, V1*[real]*, V2 to V9 (optional)*[real]*)

Description<br>Sets the type and the parameters V1 to V9 for a row in \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION. Note: If the row already exists, the type and the parameters will be overwritten. |
| --- |

##### Arguments

* row (integer)
 
The row you want to set the data for. **Note that rows start at 0, not 1**.

* type or array (string or array)
 
The string repesenting the type of the transformation. Alternatively an array with this and the following parameters on it.

* V1 (real)
 
The float repesenting the parameter V1

* V2 to V9 (optional) (real)
 
The floats repesenting the parameters V2 to V9. These are only used for VEC3, C2R, S2R and MAT.

| Returns
<br>No return value. |
| --- |

| Example
<br>To set in the first row a transformation of type to RZ with V1=1.2 for \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION in model m:<br>
```
m.control.implicit_modal_dynamic_damping.SetTransformation(0, "RZ", 1.2);
```
<br>or<br>
```
var a = new Array("RZ", 1.2);
      m.control.implicit_modal_dynamic_damping.SetTransformation(0, a);
```
<br>To set in the third row a transformation of type to VEC3 with V1=1.0, V2=2.0... V9=9.0 for \*CONTROL\_MPP\_DECOMPOSITION\_TRANSFORMATION in model m:<br>
```
m.control.implicit_modal_dynamic_damping.SetTransformation(2, "VEC3", 1, 2, 3, 4, 5, 6, 7, 8, 9);
```
<br>or<br>
```
var a = new Array("VEC3", 1, 2, 3, 4, 5, 6, 7, 8, 9);
      m.control.implicit_modal_dynamic_damping.SetTransformation(2, a);
```
 |
| --- |

* * *

* * *

## \*CONTROL\_MPP\_IO\_BINOUTONLY

### Properties for \*CONTROL\_MPP\_IO\_BINOUTONLY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_IO\_LSTC\_REDUCE

### Properties for \*CONTROL\_MPP\_IO\_LSTC\_REDUCE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_IO\_NOD3DUMP

### Properties for \*CONTROL\_MPP\_IO\_NOD3DUMP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_IO\_NODUMP

### Properties for \*CONTROL\_MPP\_IO\_NODUMP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_IO\_NOFAIL

### Properties for \*CONTROL\_MPP\_IO\_NOFAIL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_IO\_NOFULL

### Properties for \*CONTROL\_MPP\_IO\_NOFULL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_IO\_SWAPBYTES

### Properties for \*CONTROL\_MPP\_IO\_SWAPBYTES

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_MATERIAL\_MODEL\_DRIVER

### Properties for \*CONTROL\_MPP\_MATERIAL\_MODEL\_DRIVER

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_MPP\_REBALANCE

### Properties for \*CONTROL\_MPP\_REBALANCE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| icoor | integer | Coordinates used in rebalance |
| icost | integer | Element costs used in rebalance |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ncycle | integer | Number of cycles between rebalance steps |
| thres | real | Percent threshold for rebalancing |

* * *

## \*CONTROL\_NONLOCAL

### Properties for \*CONTROL\_NONLOCAL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| mem | integer | %age increase in memory for \*MAT\_NONLOCAL usage |

* * *

## \*CONTROL\_OUTPUT

### Properties for \*CONTROL\_OUTPUT

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cdetol | real | Tolerance for output of \*DEFINE\_CURVE discretization warnings |
| demden | integer | Output DEM density data to D3PLOT database |
| engout | integer | Flag to output contact sliding energy densities for mortar contact |
| eocs | integer | Elout coordinate system option |
| exists | logical | true if control card exists |
| frfreq | integer | Output frequency for failed element report |
| gmdt | real | output interval for \*INTERFACE\_SSI\_AUX |
| hisnout | integer | Flag to invoke output of extra history variable names |
| iaccop | integer | Flag for accels in d3thdt to be averaged |
| ibsf | integer | Flag to invoke output of \*SET\_BEAM data |
| icrfile | integer | Output node and element sets used in computing secforc data |
| ielogini | integer | Flag to invoke diagnostic output to error file during the initialisation phase |
| ielogkey | integer | Flag to invoke diagnostic output to error file during the input phase |
| ielogsol | integer | Flag to invoke diagnostic output to error file during the solution phase |
| ierode | integer | output eroded energy |
| iflush | integer | i/o buffer flushing interval (t-steps) |
| ikedit | integer | Status report interval to d3hsp |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| insf | integer | Flag to invoke output of \*SET\_NODE data |
| ip1dblt | integer | output of 1D seatbelt created for 2D seatbelt to sbtout |
| ipcurv | integer | output curve data flag |
| ipnint | integer | Flag to print initial timesteps at cycle #1 |
| iprtf | integer | Print flag for RBDOUT and MATSUM files |
| isfcnt | integer | Continuity level in applying interface linking data |
| isolsf | integer | Flag to invoke output of \*SET\_SOLID data |
| issf | integer | Flag to invoke output of \*SET\_SHELL data |
| kineng | integer | Flag to output kinetic energy density as a nodal field |
| minfo | integer | Output penetration information |
| mlkbag | integer | Flag to invoke output of accumulated airbag mass leakage in ABSTAT |
| msgflg | integer | Option for printing detail message to d3msg |
| msgmax | integer | max num messags |
| neecho | integer | Print suppression during input: echo file |
| newleg | integer | New legends |
| npopt | integer | Print suppression during input: printer file |
| nrefup | integer | Flag to update individual beam 3rd nodes |
| opifs | real | Output interval for interface file |
| penout | integer | Flag to output contact penetration for mortar contact |
| phschng | integer | Message to messag file for phase change on materials 216, 217 and 218 |
| shlsig | integer | Flag to extrapolate stresses for shells with 8 integration points to nodes |
| solsig | integer | Flag to extrapolate stresses/history variables |
| spc2bnd | integer | Flag to convert constraints on rigid bodies to equivalent \*BOUNDARY\_PRESCRIBED\_MOTION\_RIGID motion |
| tet10s8 | integer | tet connectivity output |
| tolev | integer | Timing output levels |

* * *

## \*CONTROL\_PARALLEL

### Properties for \*CONTROL\_PARALLEL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| consty | integer | Consistency (Accuracy) flag |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ncpu | integer | #cpus to use |
| numrhs | integer | #rh sides written |
| para | integer | Flag for parallel force assembly |

* * *

## \*CONTROL\_PORE\_AIR

### Properties for \*CONTROL\_PORE\_AIR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| air\_p | real | Pressure of atmospheric air |
| air\_ro | real | Density of atmospheric air |
| anamsg | integer | Flag to turn off printing of pore air analysis status message |
| eterm | real | Event termination time |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_PORE\_FLUID

### Properties for \*CONTROL\_PORE\_FLUID

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| atype | integer | Analysis type |
| conmax | real | damping factor |
| conv | real | conduction factor |
| datum | real | Z elevation of datum |
| eterm | real | event time termination |
| etflag | integer | Flag for interpretation of time |
| exists | logical | true if control card exists |
| fmax | real | max seepage factor |
| fmin | real | min seepage factor |
| ftied | real | Analysis type |
| grav | real | Gravitational acceleration for Ro.g.h |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| output | integer | Output flag for stresses |
| pf\_bulk | real | Default bulk modulus of pore fluid |
| pf\_rho | real | Default pore water density |
| targ | real | target for change of excess pressure |
| therm | real | thermal vol expansion coeff |
| tmf | integer | Time magnification factor on seepage. Loadcurve if negative |
| wtable | real | Default elevation of water table |

* * *

## \*CONTROL\_PWP\_AUTO\_TMF

### Properties for \*CONTROL\_PWP\_AUTO\_TMF

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dpwmax | real | Max rate of change of pwp water head (m/s) |
| exists | logical | true if control card exists |
| fmax | real | Maximum factor on seepage calc |
| fmin | real | Minimum factor on seepage calc |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| sprfac | real | factor for reducing feedback |
| targ | real | Target max pwp change/thermal timestep |

* * *

## \*CONTROL\_PZELECTRIC

### Properties for \*CONTROL\_PZELECTRIC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| abstol | real | Absolute convergence tolerance |
| epzmsg | integer | Flag to determine if electric flux and electric field at the element center of piezoelectric material is outputed to D3PLOT |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| maxitr | integer | Maximum number of iterations 2 |
| msgitr | integer | Output iteration message level |
| ndtrfk | real | Reform the dielectric stiffness matrix every NDTRFK time steps |
| reltol | real | Relative convergence tolerance |
| solver | integer | Piezoelectric solver type |

* * *

## \*CONTROL\_REFERENCE\_CONFIGURATION

### Properties for \*CONTROL\_REFERENCE\_CONFIGURATION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | the [Include](primer-include-class.md) file number that the control card is in. |
| iter | integer | iter keyword option |
| iterfile | string | base name of two files for the ITER keyword option |
| maxiter | integer | max number of iterations |
| method | integer | iterative method |
| step | real | step size used in iterations |
| targetfile | string | file containing all nodes of the target geometry |
| tol | real | tolerance used to determine convergence |

* * *

## \*CONTROL\_REMESHING

### Properties for \*CONTROL\_REMESHING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | coordinate system id |
| dtmin | real | timestep size for remesh |
| efg | integer | efg keyword option |
| exists | logical | true if control card exists |
| iaat | integer | interactive adaptivity adjustable tolerance |
| iat | integer | interactive adaptivity |
| iat1 | real | tolerance of shear distortion indicator for interactive adaptivity |
| iat2 | real | tolerance of unbalanced nodal distribution indicator for interactive adaptivity |
| iat3 | real | tolerance of volumetric change indicator for interactive adaptivity |
| icurv | integer | number of elements along radius |
| ier | integer | remeshing with element erosion |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ivt | integer | internal variable transfer in adaptive EFG |
| mfrac | real | mass ratio gain required for remesh |
| mm | integer | monotonic mesh resizing |
| rmax | real | Maximum edge length |
| rmin | real | Minimum edge length. Loadcurve if negative. |
| segang | real | angular mesh size in 3-D axisymmetric remeshing |
| vfloss | real | necessary VF loss for remesh |

* * *

## \*CONTROL\_RIGID

### Properties for \*CONTROL\_RIGID

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| gjadstf | real | Joint rotational stiffness |
| gjadvsc | real | Joint rotational damping |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| jntf | integer | Generalized joint stiffness formulation |
| lmf | integer | Switch explicit/implicit joint formulation |
| metalf | integer | metalforming option |
| norbic | integer | Circumvent rigid body inertia check |
| orthmd | integer | Orthogonalise modes wrt each other |
| partm | integer | Use global mass matrix for mass distribution |
| plotel | integer | Automatic generation of \*ELEMENT\_PLOTEL |
| rbsms | integer | Flag to apply consistent treatment of rigid bodies in selective mass scaling |
| rcvlr2d | integer | Recover the lead rigid body of constrained rigid bodies |
| sparse | integer | Use sparse xply routines for modal & stiffness damping matrices |
| tjadstf | real | Joint translational stiffness |
| tjadvsc | real | Joint translational damping |

* * *

## \*CONTROL\_SHELL

### Properties for \*CONTROL\_SHELL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bwc | integer | Warping stiffness flag for Belytschko-Tsay shells |
| cntco | integer | include shell ref surface offset |
| cstyp6 | integer | Coord sys for type 6 element |
| delfr | integer | delete shells where neighbours fail |
| drcmth | integer | drilling rotation constraint method. |
| drcpsid | integer | part set for drilling rotation constraint method. |
| drcpsrm | real | drilling rotation constraint parameter. |
| esort | integer | Degenerate shell sorting flag (was ITRIST) |
| excl | integer | .eq.1 if excl above |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| intgrd | integer | Gauss/Lobatto intg rule switch |
| intperr | integer | Flag for behavior in case of unwanted interp. or extrap. of initial stresses |
| irnxx | integer | Hughes-Liu shell normal update option |
| irquad | integer | intg rule |
| istupd | integer | Shell thickness change option |
| iswshl | integer | flag for switching between formulations 16 and 30. |
| itsflg | integer | initial transverse shear stress |
| keepcs | integer | keep contact segs of failed shells |
| lamsht | integer | Laminated shell theory update flag |
| lispsid | integer | Part set ID related to \*INITIAL\_STRESS\_SHELL. |
| miter | integer | Plane stress plasticity option |
| nfail1 | integer | Flag for distorted 1 intg point shell check |
| nfail4 | integer | Flag for distorted 4 intg point shell check |
| nlocdt | integer | flag for time step handling for shell elements with offset. |
| proj | integer | Projection method for warping stiffness |
| psnfail | integer | part set id for check |
| psstupd | integer | part set for thichness update, -ve to exclude |
| rotascl | real | Scale factor for rotary shell mass |
| sidt4tu | integer | part set for type 4 thickness update where elastic strains are ignored. |
| stretch | real | Stretch ratio of element diagonals for element deletion |
| theory | integer | Shell theory to use |
| tshell | integer | Thermal shell option |
| wmode | real | W-mode amplitude for element deletion (deg) |
| wrpang | real | Shell warpage angle (deg) |

* * *

## \*CONTROL\_SOLID

### Properties for \*CONTROL\_SOLID

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| coheqc | integer | Cohesive element quality check |
| esort | integer | Automatic sort of tetra & penta flag |
| exists | logical | true if control card exists |
| fmatrix | integer | calculation method for deformation gradient |
| icoh | integer | global flag for cohesive element deletion |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| niptets | integer | #intg points for quadratic tets |
| pm1 | integer | 10 noded tetrahedral solid node ID 1 |
| pm10 | integer | 10 noded tetrahedral solid node ID 10 |
| pm2 | integer | 10 noded tetrahedral solid node ID 2 |
| pm3 | integer | 10 noded tetrahedral solid node ID 3 |
| pm4 | integer | 10 noded tetrahedral solid node ID 4 |
| pm5 | integer | 10 noded tetrahedral solid node ID 5 |
| pm6 | integer | 10 noded tetrahedral solid node ID 6 |
| pm7 | integer | 10 noded tetrahedral solid node ID 7 |
| pm8 | integer | 10 noded tetrahedral solid node ID 8 |
| pm9 | integer | 10 noded tetrahedral solid node ID 9 |
| psfail | integer | Optional part set id |
| rinrt | integer | Option to compute rotational inertia for the nodes of solid elements |
| swlocl | integer | output flag for stresses in solid spotwelds |
| t10jtol | real | tolerance for jacobian in 4-point 10-noded quadratic tetrahedra |
| tet13k | integer | global flag for cohesive element deletion |
| tet13v | integer | Choice of type 13 solid implementation |

* * *

## \*CONTROL\_SOLUTION

### Properties for \*CONTROL\_SOLUTION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| crvp | integer | Bypass time-based evaluation of non-time-dependent curves |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| isnan | integer | Flag to check for a NaN in force and moment arrays |
| lcacc | integer | Flag to truncate curves: 0 = no truncation; otherwise = truncate |
| lcint | integer | Number of points in load curve discretization |
| ncdcf | integer | Cycle number at which to evaluate DEFINE\_CURVE\_FUNCTION |
| nlq | integer | Vector length |
| nocopy | integer | Avoid copying material history variables to temporary buffers for constitutive evaluations |
| soln | integer | Solution type flag |

* * *

## \*CONTROL\_SPH

### Properties for \*CONTROL\_SPH

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| boxid | integer | Box limiting application |
| cont | integer | Particle approx method |
| deriv | integer | Time integration type |
| dt | real | Death time |
| exists | logical | true if control card exists |
| form | integer | particle theory |
| iavis | integer | artificial viscosity formulation |
| icont | integer | contact option |
| idim | integer | Space system flag |
| ierod | integer | erosion option |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ini | integer | bucket or global smoothing |
| ishift | integer | apply shifting algorithm |
| ishow | integer | display option |
| istab | integer | stabilisation type |
| isymp | integer | percentage of sph |
| ithk | integer | contact thickness option |
| maxv | real | max velocity |
| memory | integer | memory alloc |
| ncbs | integer | Number of cycles between particle sorting |
| nmneigh | integer | memory alloc |
| ql | real | quasi-linear coefficient |
| sphsort | integer | sort and move SPH |
| start | real | start time |

* * *

## \*CONTROL\_SPH\_INCOMPRESSIBLE

### Properties for \*CONTROL\_SPH\_INCOMPRESSIBLE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| acmp | real | Artificial compressibility term |
| exists | logical | true if control card exists |
| ibndp | integer | Pressure treatment of boundary particles |
| ihtc | integer | Flag for Heat Transfer Coefficient calculation |
| imat | integer | Flag for \*MAT\_SPH\_INCOMPRESSIBLE\_FLUID formulations |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| irmv | integer | Flag to remove initially interpenetrated particles |
| rol | real | Deactivation criteria |
| tavg | real | Tolerance criteria for average relative density |
| tmax | real | Tolerance criteria for maximum relative density |

* * *

## \*CONTROL\_SPOTWELD\_BEAM

### Properties for \*CONTROL\_SPOTWELD\_BEAM

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| bmsid | integer | beam set for convert to hex assembly |
| exists | logical | true if control card exists |
| id\_off | integer | part id offset |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| lcs | integer | Loadcurve: shear response vs. shell size |
| lct | integer | Loadcurve: tension response vs. shell size |
| prtflg | integer | Flag to print data for spotwelds |
| rpbhx | integer | Replace each beam with a cluster of RPBHX solids |
| t\_ors | integer | Table ID for scaling shear response |
| t\_ort | integer | Table for scaling response |

* * *

## \*CONTROL\_STAGED\_CONSTRUCTION

### Properties for \*CONTROL\_STAGED\_CONSTRUCTION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| accel | real | gravity |
| dordel | integer | Dormant part treatment in D3PLOT file |
| exists | logical | true if control card exists |
| fact | real | default stiffness/gravity factor |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| itime | integer | Treatment of "Real time" on \*DEFIN\_CONSTRUCTION\_STAGES |
| nopdel | integer | Treatment of pressure loads on deleted elements |
| stge | integer | end stage |
| stgs | integer | start stage |
| stref | integer | ref stage |
| tstart | real | start time |

* * *

## \*CONTROL\_START

### Properties for \*CONTROL\_START

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| begtim | real | start time |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |

* * *

## \*CONTROL\_STEADY\_STATE\_ROLLING

### Properties for \*CONTROL\_STEADY\_STATE\_ROLLING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| imass | integer | Inertia switching flag |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ivel | integer | Velocity switching flag |
| lcdmu | integer | Loadcurve for scaling friction forces |
| lcdmur | integer | Loadcurve for scaling friction forces during dynamic relaxation |
| scl\_k | integer | Scale factor for friction stiffness |

* * *

## \*CONTROL\_STRUCTURED

### Properties for \*CONTROL\_STRUCTURED

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| term | integer | \_TERM flag |

* * *

## \*CONTROL\_TERMINATION

### Properties for \*CONTROL\_TERMINATION

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dtmin | real | Scale factor on initial dt size for termination |
| endcyc | integer | Termination cycle # |
| endeng | real | %age change in energy for termination |
| endmas | real | %age change in mass for termination. Loadcurve if negative |
| endtim | real | Termination time |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| nosol | integer | flag for non-solution run |

* * *

## \*CONTROL\_THERMAL\_EIGENVALUE

### Properties for \*CONTROL\_THERMAL\_EIGENVALUE

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| neig | integer | Number of eigen values to compute. |

* * *

## \*CONTROL\_THERMAL\_FORMING

### Properties for \*CONTROL\_THERMAL\_FORMING

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| a | integer | Load curve ID for the a coefficient used in the formula |
| algo | integer | Contact algorithm type |
| b | integer | Load curve ID for the b coefficient used in the formula |
| bc\_flg | integer | Thermal boundary condition flag |
| c | integer | Load curve ID for the c coefficient used in the formula |
| d | integer | Explicit accuracy parameter |
| exists | logical | true if control card exists |
| formula | integer | Formula that defines the contact heat conductance as a function of temperature and pressure |
| frad | real | Radiation factor between the contact surfaces |
| ftosa | real | Fraction of sliding friction energy partitioned to the SURFA surface |
| fwork | real | Fraction of mechanical work converted into heat |
| h0 | real | Heat transfer conductance for closed gaps |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ithoff | integer | Flag for offsetting thermal contact surfaces for thick thermal shells |
| its | real | Initial thermal time step size |
| k | real | Thermal conductivity of fluid between the contact surfaces |
| lcfdt | integer | Load curve number for dynamic coefficient of friction as a function of temperature |
| lcfst | integer | Load curve number for static coefficient of friction as a function of temperature |
| lch | integer | Load curve ID for h (can be curve ID or function ID) |
| lmax | real | No thermal contact if gap is greater than this value |
| lmin | real | Minimum gap |
| ptype | integer | Thermal problem type |
| solver | integer | Thermal analysis solver type |
| thshel | integer | Thermal shell option |
| tsf | real | Thermal Speedup Factor |

* * *

## \*CONTROL\_THERMAL\_NONLINEAR

### Properties for \*CONTROL\_THERMAL\_NONLINEAR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dcp | real | Divergence control parameter |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| lumpbc | integer | lump boundary condition |
| nlthpr | integer | Thermal nonlinear printout level |
| phchpn | real | Phase change penalty parameter |
| refmax | integer | Max #matrix reformations per timestep |
| thlstl | real | Line search convergence tolerance |
| tol | real | Convergence tolerance for temperature |

* * *

## \*CONTROL\_THERMAL\_SOLVER

### Properties for \*CONTROL\_THERMAL\_SOLVER

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| abstol | real | Absolute convergence tolerance |
| atype | integer | Thermal analysis type |
| cgtol | real | Convergence tolerance for iterative solver |
| dtvf | real | Time interval between view factor updates |
| eqheat | integer | Mechanical equivelent of heat (J/Nm etc). Loadcurve if negative |
| exists | logical | true if control card exists |
| fwork | real | Fraction of mechanical heat converted into heat |
| gpt | integer | #gauss points in solids |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| maxitr | integer | Maximum number of iterations |
| msglvl | integer | Output message level |
| mxdmp | integer | Matrix dumping. |
| ncycl | integer | Thermal matrix reassembly frequency |
| ninner | integer | Number of inner iterations for GMRES solve |
| nouter | integer | Number of outer iterations for GMRES solve |
| omega | real | Relaxation parameter |
| ptype | integer | Thermal problem type |
| reltol | real | Relative convergence tolerance |
| sbc | real | Stefan Boltzman constant (w/m\*\*2/K) |
| solver | integer | Thermal analysis solver type |
| tsf | integer | Thermal speedup factor. Loadcurve if negative |
| varden | integer | Variable thermal density flag |

* * *

## \*CONTROL\_THERMAL\_TIMESTEP

### Properties for \*CONTROL\_THERMAL\_TIMESTEP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dtemp | integer | Max delta temp permitted before timestep decrease, of LC of dt vs time if -ve |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| its | real | Initial thermal timestep |
| lcts | integer | Loadcurve: timestep vs time |
| tip | real | Thermal time integration parameter |
| tmax | real | Maximum thermal timestep, or LC of tmax vs time if -ve |
| tmin | real | Minimum thermal timestep, or LC of tmin vs time if -ve |
| ts | integer | Thermal timestep control flag |
| tscp | real | Timestep control parameter |

* * *

## \*CONTROL\_TIMESTEP

### Properties for \*CONTROL\_TIMESTEP

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| dt2ms | real | Timestep for mass scaling |
| dt2msf | real | Scale factor for initial timestep size to determine min permitted time step size |
| dt2mslc | integer | Loadcurve: DT2MS vs time |
| dtdynv | integer | Flag to consider the effects of dynamic viscosity on the critical time step |
| dtinit | real | Initial timestep size |
| dtusr | integer | User-defined time step for explicit analysis |
| emscl | real | Fraction of added mass from mass scaling that contributes to gravity loads |
| erode | integer | Erosion flag for solids & shells @ DTMIN |
| exists | logical | true if control card exists |
| igado | integer | Method for calculating time steps for IGA elements |
| ihdo | integer | Method for calculating solid element time steps |
| imscl | integer | Selective mass scaling. Part set if negative |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| isdo | integer | dt calc method for 4 noded shells |
| lctm | real | Loadcurve: Max timestep vs time |
| ms1st | integer | Limit mass scaling to 1st timestep flag |
| rmscl | integer | flag to activate scaling of rotational inertia |
| tslimt | real | Min timestep for shell modulus change |
| tssfac | real | Scale factor for computed timestep |

* * *

## \*CONTROL\_UNITS

### Properties for \*CONTROL\_UNITS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| length | string | m = meter, mm = millimeter, cm = centimeter, in = inch, ft = foot |
| length\_scale | real | Number of meters in the length unit for the input deck |
| mass | string | kg = kilogram, g = gram, mg = milligram, lb = pound, slug = pound x sec2/foot, slinch = pound x sec2/inch, mtrc\_ton = metric\_ton |
| mass\_scale | real | Number of kilograms in the mass unit for the input deck |
| temp | string | K = Kelvin, C = Celsius, F = Fahrenheit, R = Rankine |
| time | string | sec = second, ms = msec/millisec, micro\_s = microsec |
| time\_scale | real | Number of seconds in the time unit for the input deck |

* * *

## \*CONTROL\_VIBRO\_ACOUSTIC

### Properties for \*CONTROL\_VIBRO\_ACOUSTIC

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if control card exists |
| include | integer | The [Include](primer-include-class.md) file number that the control card is in. |
| ipanelu | integer | Number of strips in U direction |
| ipanelv | integer | Number of strips in V direction |
| nmdstr | integer | Number of modes in modal stress/strain output |
| restrt | integer | Restart option |
| vaflag | integer | Loading type |
| vaplot | integer | Flag for PSD broadband plots |
| vaprld | integer | Flag for including preload |
| vapsd | integer | Flag for PSD output |
| varms | integer | Flag for RMS output |
| vastrs | integer | Flag for including stress analysis |