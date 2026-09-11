# View class

The View class allows you to control the view and plotting modes in PRIMER. [More...](primer-view-class.md#View_details)

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

## Class functions

* [Ac](primer-view-class.md#View::Ac)()
* [Ct](primer-view-class.md#View::Ct)()
* [GetTargetEye](primer-view-class.md#View::GetTargetEye)()
* [Hi](primer-view-class.md#View::Hi)()
* [Li](primer-view-class.md#View::Li)()
* [Redraw](primer-view-class.md#View::Redraw)()
* [SetContourType](primer-view-class.md#View::SetContourType)(View type*[constant]*, View subtype*[constant]*, View subtype2*[constant]*)
* [SetTargetEye](primer-view-class.md#View::SetTargetEye)(info*[object]*)
* [Sh](primer-view-class.md#View::Sh)()
* [Show](primer-view-class.md#View::Show)(View type*[constant]*)
* [Si](primer-view-class.md#View::Si)()
* [Vec](primer-view-class.md#View::Vec)()

## View constants

### Constants for SetContourType - argument 1 (Type)

| **Name** | **Description** |
| --- | --- |
| View.ELEMPROPS | Type Element Properties |
| View.ELEMQUAL | Type Element Quality |
| View.INITVELS | Type Initial Velocities |
| View.LOADSHELLDIRECTION | Type Load Shell Direction |
| View.MASSSCALE | Type Mass Scale |
| View.MATLPROPS | Type Material Properties |
| View.PARTMASS | Type Part Mass |
| View.SHELLNORMALS | Type Shell Normals |
| View.SHELLTHICKNESS | Type Shell Thickness |
| View.TIMESTEP | Type TimeStep |

### Constants for SetContourType - argument 2 (Subtype)

| **Name** | **Description** |
| --- | --- |
| View.ABSOLUTE | Subtype Absolute (of type Shell Thickness) |
| View.ADDEDMASS | Subtype Added Mass (of type Mass Scale) |
| View.ADDEDMASSPART | Subtype Added Mass #Part (of type Mass Scale) |
| View.AREA | Subtype Area (2d only) (of type Element Property) |
| View.ASPECTRATIO | Subtype Aspect Ratio (of type Element Quality) |
| View.CONTOUR | Subtype Contour (of type Shell Normals) |
| View.DENSITY | Subtype Density (of type Material Property) |
| View.EMPFINALMASS | Subtype (\*)Final Mass (of type (\*)EMP Parts Only) |
| View.EMPNSMASS | Subtype (\*)NS Mass (of type (\*)EMP Parts Only) |
| View.EMPSTRUCTMASS | Subtype (\*)Struct Mass (of type (\*)EMP Parts Only) |
| View.FAILEDCRITERIA | Subtype Failed Criteria (of type Element Quality) |
| View.FINALMASS | Subtype Final Mass (of type (\*)EMP Parts Only) |
| View.FORM | Subtype Form (native) (of type Element Property) |
| View.FORMULATION | Subtype Formulation (of type Element Property) |
| View.INITVELRES | Subtype Init Vel-Res (of type Init Vel Component) |
| View.INITVELX | Subtype Init Vel-X (of type Init Vel Component) |
| View.INITVELY | Subtype Init Vel-Y (of type Init Vel Component) |
| View.INITVELZ | Subtype Init Vel-Z (of type Init Vel Component) |
| View.INTPOINTS | Subtype Integration Points (of type Element Property) |
| View.JACOBIAN | Subtype Jacobian (of type Element Quality) |
| View.MATERIALNUMBER | Subtype Material Number (of type Material Property) |
| View.MAXINTANGLE | Subtype Max Internal Angle (of type Element Quality) |
| View.MININTANGLE | Subtype Min Internal Angle (of type Element Quality) |
| View.MINLENGTH | Subtype Min Length (of type Element Quality) |
| View.PERCENTADDEDMASS | Subtype % Added Mass (of type Mass Scale) |
| View.PERCENTADDEDMASSPART | Subtype % Added Mass #Part (of type Mass Scale) |
| View.PLASTICSTRAIN | Subtype Plastic Strain (of type Element Property) |
| View.POISSONRATIO | Subtype Poisson's Ratio (of type Material Property) |
| View.QUALIMPERF | Subtype Tet Collapse (of type Element Quality) |
| View.REMAINING | Subtype % remaining (of type Shell Thickness) |
| View.SKEW | Subtype Skew (native) (of type Element Quality) |
| View.STRUCTMASS | Subtype Struct Mass (of type (\*)EMP Parts Only) |
| View.TAPER | Subtype Taper (of type Element Quality) |
| View.TETCOLLAPSE | Subtype Formulation (of type Element Quality) |
| View.THINNING | Subtype % thinning (of type Shell Thickness) |
| View.VECTOR | Subtype Vector (of type Shell Normals) |
| View.VOLUME | Subtype Volume (of type Element Property) |
| View.WARPAGE | Subtype Warpage (of type Element Quality) |
| View.YIELDSTRESS | Subtype Yield Stress (of type Material Property) |
| View.YOUNGMODULUS | Subtype Young's Modulus (of type Material Property) |

### Constants for SetContourType - argument 3 (Subtype)

| **Name** | **Description** |
| --- | --- |
| View.INTPOINT | Subtype Integration point (of type Element Property) |
| View.MAXSTRAIN | Subtype Maximum Strain (of type Element Property) |
| View.MINSTRAIN | Subtype Minimum Strain (of type Element Property) |
| View.PARAMETRICCOORD | Subtype Parametric coordinate (of type Element Property) |

### Constants for Show

| **Name** | **Description** |
| --- | --- |
| View.ISO | Isometric projection |
| View.XY | XY axis projection |
| View.XZ | XZ axis projection |
| View.YZ | YZ axis projection |

### Constants for up vector

| **Name** | **Description** |
| --- | --- |
| View.UP\_AUTOMATIC | Automatically calculate up vector for target and eye |
| View.UP\_X | Set up vector for target and eye to global X |
| View.UP\_Y | Set up vector for target and eye to global Y |
| View.UP\_Z | Set up vector for target and eye to global Z |

| Detailed Description<br>The View class gives you access to the different plotting modes and views.<br>See the documentation below for more details. |
| --- |

| Details of functions 
Ac() [static]
Description<br>Autoscales the view |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To autoscale<br>
```
View.Ac();
```
 |
| --- |

* * *

| Ct() [static]
Description<br>Does a contour plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a contour plot<br>
```
View.Ct();
```
 |
| --- |

* * *

| GetTargetEye() [static]
Description<br>Get the current target and eye settings |
| --- |

#### Arguments

No arguments

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eye | array | Array containing the coordinates of the eye position |
| perspective | boolean | Whether the perspective switch is active |
| scale | real | Scale factor |
| target | array | Array containing the coordinates of the target position |
| up | constant/array | [View.UP_AUTOMATIC](primer-view-class.md#View.UP_AUTOMATIC), [View.UP_X](primer-view-class.md#View.UP_X), [View.UP_Y](primer-view-class.md#View.UP_Y), [View.UP_Z](primer-view-class.md#View.UP_Z) or an array containing the up vector if user defined |

#### Return type

object

| Example
<br>To get the current target and eye information<br>
```
var info = View.GetTargetEye();
```
 |
| --- |

* * *

| Hi() [static]
Description<br>Does a Hidden line plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a hidden line plot<br>
```
View.Hi();
```
 |
| --- |

* * *

| Li() [static]
Description<br>Does a line (wireframe) plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a line plot<br>
```
View.Li();
```
 |
| --- |

* * *

| Redraw() [static]
Description<br>Redraws the plot using the current plot mode. |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To redraw<br>
```
View.Redraw();
```
 |
| --- |

* * *

| SetContourType(View type*[constant]*, View subtype*[constant]*, View subtype2*[constant]*) [static]
Description<br>Sets a contour type (and subtype) |
| --- |

#### Arguments

* View type (constant)
 
The type of contour to plot. Can be: 
 [View.ELEMPROPS](primer-view-class.md#View.ELEMPROPS), [View.ELEMQUAL](primer-view-class.md#View.ELEMQUAL), [View.INITVELS](primer-view-class.md#View.INITVELS), [View.LOADSHELLDIRECTION](primer-view-class.md#View.LOADSHELLDIRECTION), [View.MASSSCALE](primer-view-class.md#View.MASSSCALE), [View.MATLPROPS](primer-view-class.md#View.MATLPROPS), [View.PARTMASS](primer-view-class.md#View.PARTMASS), [View.SHELLNORMALS](primer-view-class.md#View.SHELLNORMALS), [View.SHELLTHICKNESS](primer-view-class.md#View.SHELLTHICKNESS), [View.TIMESTEP](primer-view-class.md#View.TIMESTEP)

* View subtype (constant)
 
The subtype of contour to plot.
 Note: This second argument is NOT required for types TIMESTEP and LOADSHELLDIRECTION. 
 **Subtypes for Type TIMESTEP:** 
 No subtypes 
 **Subtypes for Type SHELLTHICKNESS:** 
 [View.ABSOLUTE](primer-view-class.md#View.ABSOLUTE), [View.REMAINING](primer-view-class.md#View.REMAINING), [View.THINNING](primer-view-class.md#View.THINNING) 
 **Subtypes for SHELLNORMALS:** 
 [View.CONTOUR](primer-view-class.md#View.CONTOUR), [View.VECTOR](primer-view-class.md#View.VECTOR) 
 **Subtypes for Type LOADSHELLDIRECTION:** 
 No subtypes 
 **Subtypes for Type ELEMPROPS:** 
 [View.AREA](primer-view-class.md#View.AREA), [View.FORM](primer-view-class.md#View.FORM), [View.FORMULATION](primer-view-class.md#View.FORMULATION), [View.INTPOINTS](primer-view-class.md#View.INTPOINTS), [View.PLASTICSTRAIN](primer-view-class.md#View.PLASTICSTRAIN), [View.VOLUME](primer-view-class.md#View.VOLUME) 
 **Subtypes for Type ELEMQUAL:** 
 [View.ASPECTRATIO](primer-view-class.md#View.ASPECTRATIO), [View.FAILEDCRITERIA](primer-view-class.md#View.FAILEDCRITERIA), [View.JACOBIAN](primer-view-class.md#View.JACOBIAN), [View.MAXINTANGLE](primer-view-class.md#View.MAXINTANGLE), [View.MININTANGLE](primer-view-class.md#View.MININTANGLE), [View.MINLENGTH](primer-view-class.md#View.MINLENGTH), [View.QUALIMPERF](primer-view-class.md#View.QUALIMPERF), [View.SKEW](primer-view-class.md#View.SKEW), [View.TAPER](primer-view-class.md#View.TAPER), [View.TETCOLLAPSE](primer-view-class.md#View.TETCOLLAPSE), [View.WARPAGE](primer-view-class.md#View.WARPAGE) 
 **Subtypes for Type MASSSCALE:** 
 [View.ADDEDMASS](primer-view-class.md#View.ADDEDMASS), [View.ADDEDMASSPART](primer-view-class.md#View.ADDEDMASSPART), [View.PERCENTADDEDMASS](primer-view-class.md#View.PERCENTADDEDMASS), [View.PERCENTADDEDMASSPART](primer-view-class.md#View.PERCENTADDEDMASSPART) 
 **Subtypes for Type MATLPROPS:** 
 [View.DENSITY](primer-view-class.md#View.DENSITY), [View.MATERIALNUMBER](primer-view-class.md#View.MATERIALNUMBER), [View.POISSONRATIO](primer-view-class.md#View.POISSONRATIO), [View.YIELDSTRESS](primer-view-class.md#View.YIELDSTRESS), [View.YOUNGMODULUS](primer-view-class.md#View.YOUNGMODULUS) 
 **Subtypes for Type INITVELS:** 
 [View.INITVELX](primer-view-class.md#View.INITVELX), [View.INITVELY](primer-view-class.md#View.INITVELY), [View.INITVELZ](primer-view-class.md#View.INITVELZ), [View.INITVELRES](primer-view-class.md#View.INITVELRES) 
 **Subtypes for Type PARTMASS:** 
 [View.EMPFINALMASS](primer-view-class.md#View.EMPFINALMASS), [View.EMPNSMASS](primer-view-class.md#View.EMPNSMASS), [View.EMPSTRUCTMASS](primer-view-class.md#View.EMPSTRUCTMASS), [View.FINALMASS](primer-view-class.md#View.FINALMASS), [View.STRUCTMASS](primer-view-class.md#View.STRUCTMASS)

* View subtype2 (constant)
 
The subtype of contour to plot.
 Note: This third argument is required only for ELEMENTPROP -&gt;PLASTICSTRAIN/FORM/AREA/VOLUME. 
The default is PARAMETRIC COORDINATE. 
 **Subtypes for Type ELEMENTPROP -&gt; PLASTICSTRAIN/FORM/AREA/VOLUME:** 
 [View.INTEGRATIONPOINT](primer-view-class.md#View.INTPOINT), [View.MAXSTRAIN](primer-view-class.md#View.MAXSTRAIN), [View.MINSTRAIN](primer-view-class.md#View.MINSTRAIN), [View.PARAMETRICCOORD](primer-view-class.md#View.PARAMETRICCOORD)

| Returns
<br>No return value |
| --- |

| Example
<br>To set a contour plot of Load Shell Direction (no subtype):<br>
```
View.SetContourType(View.LOADSHELLDIRECTION);
```
<br>To set a contour plot of Element Formulation (type: Elem Props, subtype: Formulation):<br>
```
View.SetContourType(View.ELEMPROPS, View.FORMULATION);
```
 |
| --- |

* * *

| SetTargetEye(info*[object]*) [static]
Description<br>Set the current target and eye settings |
| --- |

#### Arguments

* info (object)

Object containing the target and eye properties 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| eye | array | Array containing the coordinates of the eye position |
| perspective | boolean | Whether the perspective switch is active. If omitted the default is true |
| scale | real | Scale factor. If omitted, the scaling is automatically calculated (in the same way as if running PRIMER interactively) |
| target | array | Array containing the coordinates of the target position |
| up | constant/array | [View.UP_AUTOMATIC](primer-view-class.md#View.UP_AUTOMATIC), [View.UP_X](primer-view-class.md#View.UP_X), [View.UP_Y](primer-view-class.md#View.UP_Y), [View.UP_Z](primer-view-class.md#View.UP_Z) or an array containing the up vector if user defined. If omitted the default is [View.UP_AUTOMATIC](primer-view-class.md#View.UP_AUTOMATIC) |

| Returns
<br>No return value |
| --- |

| Example
<br>To set the eye position to (-2365.1, -373.2, 1081.1) looking at target (-2075.9, -367.7, 905.2) with the up vector in global Z, automatically turning on perspective and calculating the scale factor:<br>
```
View.SetTargetEye( { eye: [-2365.1, -373.2, 1081.1], target: [-2075.9, -367.7, 905.2], up: View.UP_Z } );
```
<br>To set the eye position to (-2365.1, -373.2, 1081.1) looking at target (-2075.9, -367.7, 905.2) with the up vector in global Z, turning off perspective and setting the scale factor to 10:<br>
```
View.SetTargetEye( { eye: [-2365.1, -373.2, 1081.1], target: [-2075.9, -367.7, 905.2], up: View.UP_Z, perspective: false, scale: 10 } );
```
 |
| --- |

* * *

| Sh() [static]
Description<br>Does a shaded plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a shaded plot<br>
```
View.Sh();
```
 |
| --- |

* * *

| Show(View type*[constant]*) [static]
Description<br>Redraws using one of the standard views |
| --- |

#### Arguments

* View type (constant)
 
The view to show. Can be +/-[View.XY](primer-view-class.md#View.XY), +/-[View.YZ](primer-view-class.md#View.YZ), +/-[View.XZ](primer-view-class.md#View.XZ) or +/-[View.ISO](primer-view-class.md#View.ISO)

| Returns
<br>No return value |
| --- |

| Example
<br>To do an isometric view from the negative direction:<br>
```
View.Show(-View.ISO);
```
 |
| --- |

* * *

| Si() [static]
Description<br>Does a shaded image contour plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a shaded image contour plot<br>
```
View.Si();
```
 |
| --- |

* * *

| Vec() [static]
Description<br>Does a vector plot |
| --- |

#### Arguments

No arguments

| Returns
<br>No return value |
| --- |

| Example
<br>To do a vector plot<br>
```
View.Vec();
```
 |
| --- |

* * *