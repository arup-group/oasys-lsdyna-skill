# Operate class

The Operate class gives you access to the built in curve operations in T/HIS. [More...](this-operate-class.md#Operate_details)

The T/HIS JavaScript API provides many class constants, properties and methods. For Arup to
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

* [Abs](this-operate-class.md#Operate::Abs)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Acos](this-operate-class.md#Operate::Acos)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Acu](this-operate-class.md#Operate::Acu)(Input Curve*[[Curve](this-curve-class.md)]*, Offset*[real]*, Time Period*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Ad](this-operate-class.md#Operate::Ad)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Add](this-operate-class.md#Operate::Add)(Input Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Adx](this-operate-class.md#Operate::Adx)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Asi](this-operate-class.md#Operate::Asi)(X Acceleration*[[Curve](this-curve-class.md)]*, Y Acceleration*[[Curve](this-curve-class.md)]*, Z Acceleration*[[Curve](this-curve-class.md)]*, Acceleration conversion factor*[real]*, X Acceleration Limit*[real]*, Y Acceleration Limit*[real]*, Z Acceleration Limit*[real]*, Calculation method*[string]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Asin](this-operate-class.md#Operate::Asin)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Atan](this-operate-class.md#Operate::Atan)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Atan2](this-operate-class.md#Operate::Atan2)(First Input Curve*[[Curve](this-curve-class.md)]*, Second Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Av](this-operate-class.md#Operate::Av)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Ave](this-operate-class.md#Operate::Ave)(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Bes](this-operate-class.md#Operate::Bes)(Input Curve*[[Curve](this-curve-class.md)]*, Frequency*[real]*, Order*[integer]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Blc](this-operate-class.md#Operate::Blc)(Input Curve*[[Curve](this-curve-class.md)]*)
* [But](this-operate-class.md#Operate::But)(Input Curve*[[Curve](this-curve-class.md)]*, Frequency*[real]*, Order*[integer]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [C1000](this-operate-class.md#Operate::C1000)(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [C180](this-operate-class.md#Operate::C180)(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [C60](this-operate-class.md#Operate::C60)(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [C600](this-operate-class.md#Operate::C600)(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Cat](this-operate-class.md#Operate::Cat)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Clip](this-operate-class.md#Operate::Clip)(Input Curve*[[Curve](this-curve-class.md)]*, X min*[real]*, X max*[real]*, Y min*[real]*, Y max*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Com](this-operate-class.md#Operate::Com)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Cor](this-operate-class.md#Operate::Cor)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*, Correlation type*[string]*)
* [Cor3](this-operate-class.md#Operate::Cor3)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*, X axis factor (optional)*[real]*, Y axis factor (optional)*[real]*)
* [Cos](this-operate-class.md#Operate::Cos)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Da](this-operate-class.md#Operate::Da)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Dif](this-operate-class.md#Operate::Dif)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Div](this-operate-class.md#Operate::Div)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Dix](this-operate-class.md#Operate::Dix)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Dmg](this-operate-class.md#Operate::Dmg)(Head Rotation Velocity X*[[Curve](this-curve-class.md)]*, Head Rotation Velocity Y*[[Curve](this-curve-class.md)]*, Head Rotation Velocity Z*[[Curve](this-curve-class.md)]*, Calculation method*[string]*, X axis interval (optional)*[real]*, Filter Class (optional)*[string]*)
* [Ds](this-operate-class.md#Operate::Ds)(Input Curve*[[Curve](this-curve-class.md)]*, Broadening Factor*[real]*, Redefine Frequencies*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Dv](this-operate-class.md#Operate::Dv)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Env](this-operate-class.md#Operate::Env)(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Err](this-operate-class.md#Operate::Err)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Exc](this-operate-class.md#Operate::Exc)(Input Curve*[[Curve](this-curve-class.md)]*, Output option*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Exp](this-operate-class.md#Operate::Exp)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Fft](this-operate-class.md#Operate::Fft)(Input Curve*[[Curve](this-curve-class.md)]*, Output option*[string]*, X axis interval (optional)*[real]*, Scaling option (optional)*[string]*)
* [Fir](this-operate-class.md#Operate::Fir)(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Hic](this-operate-class.md#Operate::Hic)(Input Curve*[[Curve](this-curve-class.md)]*, Window*[real]*, Acceleration factor*[real]*)
* [Hicd](this-operate-class.md#Operate::Hicd)(Input Curve*[[Curve](this-curve-class.md)]*, Window*[real]*, Acceleration factor*[real]*)
* [Ifft](this-operate-class.md#Operate::Ifft)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*, Input type*[string]*)
* [Int](this-operate-class.md#Operate::Int)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Log](this-operate-class.md#Operate::Log)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Log10](this-operate-class.md#Operate::Log10)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Log10x](this-operate-class.md#Operate::Log10x)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Logx](this-operate-class.md#Operate::Logx)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Lsq](this-operate-class.md#Operate::Lsq)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Map](this-operate-class.md#Operate::Map)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Max](this-operate-class.md#Operate::Max)(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Min](this-operate-class.md#Operate::Min)(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Mon](this-operate-class.md#Operate::Mon)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Mul](this-operate-class.md#Operate::Mul)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Mux](this-operate-class.md#Operate::Mux)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Ncp](this-operate-class.md#Operate::Ncp)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*)
* [Nij](this-operate-class.md#Operate::Nij)(Shear Force*[[Curve](this-curve-class.md)]*, Axial Force*[[Curve](this-curve-class.md)]*, Moment*[[Curve](this-curve-class.md)]*, Fzc\_t*[real]*, Fzc\_c*[real]*, Myc\_f*[real]*, Myc\_e*[real]*, E*[real]*)
* [Nor](this-operate-class.md#Operate::Nor)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Nor2](this-operate-class.md#Operate::Nor2)(Input Curve*[[Curve](this-curve-class.md)]*, Y Min Value*[real]*, Y Max Value*[real]*, Lock to Axis Y Min*[integer]*, Lock to Axis Y Max*[integer]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Nox](this-operate-class.md#Operate::Nox)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Nox2](this-operate-class.md#Operate::Nox2)(Input Curve*[[Curve](this-curve-class.md)]*, X Min Value*[real]*, X Max Value*[real]*, Lock to Axis X Min*[integer]*, Lock to Axis X Max*[integer]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Octave](this-operate-class.md#Operate::Octave)(Input Curve*[[Curve](this-curve-class.md)]*, Band type to convert to*[String]*, Output Type*[String]*, Input Type*[String]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Olc](this-operate-class.md#Operate::Olc)(Input Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, X axis interval (optional)*[real]*, Filter Class (optional)*[string]*)
* [Order](this-operate-class.md#Operate::Order)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Pbut](this-operate-class.md#Operate::Pbut)(Input Curve*[[Curve](this-curve-class.md)]*, Frequency*[real]*, Order*[integer]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Power](this-operate-class.md#Operate::Power)(Input Curve*[[Curve](this-curve-class.md)]*, Power*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Rave](this-operate-class.md#Operate::Rave)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Rec](this-operate-class.md#Operate::Rec)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Reg](this-operate-class.md#Operate::Reg)(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Res](this-operate-class.md#Operate::Res)(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Rev](this-operate-class.md#Operate::Rev)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Rs](this-operate-class.md#Operate::Rs)(Input Curve*[[Curve](this-curve-class.md)]*, Damping Factor*[real]*, Sampling Points*[int]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Sin](this-operate-class.md#Operate::Sin)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Smooth](this-operate-class.md#Operate::Smooth)(Input Curve*[[Curve](this-curve-class.md)]*, Smoothing Factor*[integer]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Sqr](this-operate-class.md#Operate::Sqr)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Stress](this-operate-class.md#Operate::Stress)(Input Curve*[[Curve](this-curve-class.md)]*, Convert to*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Sub](this-operate-class.md#Operate::Sub)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Sum](this-operate-class.md#Operate::Sum)(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Sux](this-operate-class.md#Operate::Sux)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Tan](this-operate-class.md#Operate::Tan)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Thiv](this-operate-class.md#Operate::Thiv)(X Acceleration*[[Curve](this-curve-class.md)]*, Y Acceleration*[[Curve](this-curve-class.md)]*, Yaw Rate*[[Curve](this-curve-class.md)]*, Dx*[real]*, Dy*[real]*, X0*[real]*)
* [Ti](this-operate-class.md#Operate::Ti)(Axial Force*[[Curve](this-curve-class.md)]*, X Moment*[[Curve](this-curve-class.md)]*, Y Moment*[[Curve](this-curve-class.md)]*, Fzc*[real]*, Mrc*[real]*, X axis interval (optional)*[real]*, Filter Class (optional)*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Tms](this-operate-class.md#Operate::Tms)(Input Curve*[[Curve](this-curve-class.md)]*, Period*[real]*)
* [Translate](this-operate-class.md#Operate::Translate)(Input Curve*[[Curve](this-curve-class.md)]*, X value*[real]*, Y value*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Tti](this-operate-class.md#Operate::Tti)(Upper Rib Acceleration*[[Curve](this-curve-class.md)]*, Lower Rib Acceleration*[[Curve](this-curve-class.md)]*, T12 Acceleration*[[Curve](this-curve-class.md)]*)
* [Va](this-operate-class.md#Operate::Va)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Vc](this-operate-class.md#Operate::Vc)(Input Curve*[[Curve](this-curve-class.md)]*, A*[real]*, B*[real]*, Calculation method*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Vd](this-operate-class.md#Operate::Vd)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Vec](this-operate-class.md#Operate::Vec)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Third Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Vec2d](this-operate-class.md#Operate::Vec2d)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Wif](this-operate-class.md#Operate::Wif)(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*)
* [Window](this-operate-class.md#Operate::Window)(Input Curve*[[Curve](this-curve-class.md)]*, Window Type*[string]*, percentage lead in (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [Zero](this-operate-class.md#Operate::Zero)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [ZeroX](this-operate-class.md#Operate::ZeroX)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [ZeroY](this-operate-class.md#Operate::ZeroY)(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [dB](this-operate-class.md#Operate::dB)(Input Curve*[[Curve](this-curve-class.md)]*, Reference Value*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)
* [dBA](this-operate-class.md#Operate::dBA)(Input Curve*[[Curve](this-curve-class.md)]*, Weighting Type*[String]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*)

| Detailed Description<br>The Operate class allows you to use the built in curve operations in T/HIS to generate new curves. Most of the curve operations generate a new curve and return the curve object for the new curve. A few functions<br>(NIJ, FFT, etc) generate multiple output curves and these return an array of curve objects.<br><br>See the documentation below for more details. |
| --- |

| Details of functions 
Abs(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert a curve to absolute values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To convert curve m to absolute values and store as curve p<br>
```
p = Operate.Abs(m);
```
 |
| --- |

* * *

| Acos(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Arc Cosine |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Arc Cosine() of curve m and store as curve p<br>
```
p = Operate.Acos(m);
```
 |
| --- |

* * *

| Acu(Input Curve*[[Curve](this-curve-class.md)]*, Offset*[real]*, Time Period*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Evaluates the integratal of a curve over a user defined period |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Offset (real)
 
User defined offset

* Time Period (real)
 
Time to integrate over

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Integrate c curve over 0.07 seconds with a 0.1 offset.<br>
```
p = Operate.Acu(m,0.1,0.007);
```
 |
| --- |

* * *

| Ad(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert acceleration spectrum to a displacment spectrum |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m and store as curve p<br>
```
p = Operate.Ad(m);
```
 |
| --- |

* * *

| Add(Input Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Add Y axis values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To add curves m and n together and store as curve p<br>
```
p = Operate.Add(m,n);
```
<br><br>To add 20.0 to the values in curve m and store as curve p<br>
```
p = Operate.Add(m,20.0);
```
 |
| --- |

* * *

| Adx(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Add X axis values |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To add X axis values for curves m and n together and store as curve p<br>
```
p = Operate.Adx(m,n);
```
<br><br>To add 20.0 to the X axis values in curve m and store as curve p<br>
```
p = Operate.Adx(m,20.0);
```
 |
| --- |

* * *

| Asi(X Acceleration*[[Curve](this-curve-class.md)]*, Y Acceleration*[[Curve](this-curve-class.md)]*, Z Acceleration*[[Curve](this-curve-class.md)]*, Acceleration conversion factor*[real]*, X Acceleration Limit*[real]*, Y Acceleration Limit*[real]*, Z Acceleration Limit*[real]*, Calculation method*[string]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Acceleration Severity Index. This value is used to assess the performance of road side<br>crash barriers. The calculation method can be set to 2010 (BS EN 1317-1:2010) or 1998 (BS EN 1317-1:1998). |
| --- |

#### Arguments

* X Acceleration ([Curve](this-curve-class.md))
 
X Acceleration [Curve](this-curve-class.md)

* Y Acceleration ([Curve](this-curve-class.md))
 
Y Acceleration [Curve](this-curve-class.md)

* Z Acceleration ([Curve](this-curve-class.md))
 
Z Acceleration [Curve](this-curve-class.md)

* Acceleration conversion factor (real)
 
Factor required to divide input acceleration curve by to convert to (G)

* X Acceleration Limit (real)
 
X direction acceleration limit

* Y Acceleration Limit (real)
 
Y direction acceleration limit

* Z Acceleration Limit (real)
 
Z direction acceleration limit

* Calculation method (string)
 
Either 2010 or 1998.

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate ASI using the 2010 method with input curves x,y and z, factors 12,9,10 and a conversioon factor of 9810. Regularise the input curves using an interval of 0.0001 first.<br>
```
p = Operate.Asi(x,y,z,9810.0,12.0,9.0,10.0,"2010",0.0001);
```
 |
| --- |

* * *

| Asin(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Arc Sine |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Arc Sine() of curve m and store as curve p<br>
```
p = Operate.Asin(m);
```
 |
| --- |

* * *

| Atan(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Arc Tangent |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Arc Tangent() of curve m and store as curve p<br>
```
p = Operate.Atan(m);
```
 |
| --- |

* * *

| Atan2(First Input Curve*[[Curve](this-curve-class.md)]*, Second Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Arc Tangent using atan2(y, x) |
| --- |

#### Arguments

* First Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Second Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Arc Tangent() of curve m / curve n and store as curve p<br>
```
p = Operate.Atan2(m, n);
```
 |
| --- |

* * *

| Av(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert acceleration spectrum to a velocity spectrum |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m and store as curve p<br>
```
p = Operate.Av(m);
```
 |
| --- |

* * *

| Ave(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Average a group of curves |
| --- |

#### Arguments

* Curves (Array of Curve objects)
 
Array of [Curve](this-curve-class.md) objects

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Average the array of curves stored in curve array x and store as curve p<br>
```
p = Operate.Ave(x);
```
 |
| --- |

* * *

| Bes(Input Curve*[[Curve](this-curve-class.md)]*, Frequency*[real]*, Order*[integer]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Bessel Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Frequency (real)
 
Cut-off Frequency (Hz)

* Order (integer)
 
Filter order

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m using a cut-off of 400Hz and order 2 and output as curve p . Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.Bes(m,400.0,2,0.0001);
```
 |
| --- |

* * *

| Blc(Input Curve*[[Curve](this-curve-class.md)]*) [static]
Description<br>Carry out a baseline correction on an accleration time history |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Moment / Time [Curve](this-curve-class.md)

| Returns
<br>Array of [Curve](this-curve-class.md) objects.<br><br>1st curve : Corrected curve<br><br>2nd curve : Integrated Velocity<br><br>3rd curve : Integrated Displacement<br>
Return type
<br>Array |
| --- |

| Example
<br>Calculate baseline correction on curve m, .<br>
```
c_array = Operate.Blc(m);
corrected_curve = c_array[0];
vel_curve = c_array[1];
disp_curve = c_array[2];
```
 |
| --- |

* * *

| But(Input Curve*[[Curve](this-curve-class.md)]*, Frequency*[real]*, Order*[integer]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Butterworth Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Frequency (real)
 
Cut-off Frequency (Hz)

* Order (integer)
 
Filter order

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m using a cut-off of 400Hz and order 2 and output as curve p . Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.But(m,400.0,2,0.0001);
```
 |
| --- |

* * *

| C1000(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>SAE Class 1000 Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m and output as curve p . Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.C1000(m,0.0001);
```
 |
| --- |

* * *

| C180(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>SAE Class 180 Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m and output as curve p . Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.C180(m,0.0001);
```
 |
| --- |

* * *

| C60(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>SAE Class 60 Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m and output as curve p . Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.C60(m,0.0001);
```
 |
| --- |

* * *

| C600(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>SAE Class 600 Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m and output as curve p . Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.C600(m,0.0001);
```
 |
| --- |

* * *

| Cat(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Concatenate 2 curves together |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To concatenate the values for curve n to those in curve m and store as curve p<br>
```
p = Operate.Cat(m,n);
```
 |
| --- |

* * *

| Clip(Input Curve*[[Curve](this-curve-class.md)]*, X min*[real]*, X max*[real]*, Y min*[real]*, Y max*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Clip a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X min (real)
 
X minimum value

* X max (real)
 
X maximum value

* Y min (real)
 
Y minimum value

* Y max (real)
 
Y maximum value

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Clip a curve m to within 0.1&lt;x&lt;0.3, 0.0&lt;y&lt;100.0 and store as curve p<br>
```
p = Operate.Clip(m,0.1,0.3,0.0,100.0);
```
 |
| --- |

* * *

| Com(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Combine Y axis values from 2 curves together |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To combine the Y axis values for curve n to those in curve m and store as curve p<br>
```
p = Operate.Com(m,n);
```
 |
| --- |

* * *

| Cor(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*, Correlation type*[string]*) [static]
Description<br>Curve Correlation function. This Correlation function provides a measure of the degree to which two curves match.<br>When comparing curves by eye, the quality of correlation may be judged on the basis<br>of how well matched are the patterns of peaks, the overall shapes of the curves, etc,<br>and can allow for differences of timing as well as magnitude. Thus a simple function<br>based on the difference of Y-values (such as T/HIS ERR function) does not measure<br>correlation in the same way as the human eye. The T/HIS correlation function attempts<br>to include and quantify the more subtle ways in which the correlation of two curves<br>may be judged.<br><br>The correlation can be calculated using either a strict or loose set of input parameters.<br><br>The degree of correlation is rated between 0 and 100. |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md))
 
Second [Curve](this-curve-class.md)

* Correlation type (string)
 
Correlation type, strict or loose

| Returns
<br>Correlation value<br>
Return type
<br>real |
| --- |

| Example
<br>Calculate the correlation between curves m and n using the strict input parameters.<br>
```
val = Operate.Cor(m,n,"strict");
```
 |
| --- |

* * *

| Cor3(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*, X axis factor (optional)*[real]*, Y axis factor (optional)*[real]*) [static]
Description<br>Curve Correlation function.<br>This function first normalises the curves using two factors either specified by the user<br>or defaults calculated by the program (the maximum absolute X and Y values of both<br>graphs). For each point on the first normalised curve, the shortest distance to the<br>second normalised curve is calculated. The root mean square value of all these<br>distances is subtracted from 1 and then multiplied by 100 to get an index between 0<br>and 100. The process is repeated along the second curve and the two indices are<br>averaged to get a final index. The higher the index the closer the correlation between<br>the two curves.<br><br>Note that the choice of normalising factors is important. Incorrect factors may lead to a<br>correlation index outside the range of 0 to 100 |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md))
 
Second [Curve](this-curve-class.md)

* X axis factor (optional) (real)
 
Normalising factor used for X axis values

* Y axis factor (optional) (real)
 
Normalising factor used for Y axis values

| Returns
<br>Correlation value<br>
Return type
<br>real |
| --- |

| Example
<br>Calculate the correlation between curves m and n using the default normalising factors.<br>
```
val = Operate.Cor3(m,n);
```
<br><br>Calculate the correlation between curves m and n using 0.1 and 1000.0 as the X and Y normalising factors.<br>
```
val = Operate.Cor3(m,n,0.1,1000);
```
 |
| --- |

* * *

| Cos(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Cosine |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Cosine() of curve m and store as curve p<br>
```
p = Operate.Cos(m);
```
 |
| --- |

* * *

| Da(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert displacment spectrum to an acceleration spectrum |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m and store as curve p<br>
```
p = Operate.Da(m);
```
 |
| --- |

* * *

| Dif(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Differentiate a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To differentiate curve m and store as curve p<br>
```
p = Operate.Dif(m);
```
 |
| --- |

* * *

| Div(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Divide Y axis values |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To divide the Y axis values for curve n by curve m and store as curve p<br>
```
p = Operate.Div(m,n);
```
<br><br>To devide the Y axis values in curve m by 20.0 and store as curve p<br>
```
p = Operate.Div(m,20.0);
```
 |
| --- |

* * *

| Dix(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Divide X axis values |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To divide the X axis values for curve n by curve m and store as curve p<br>
```
p = Operate.Dix(m,n);
```
<br><br>To devide the X axis values in curve m by 20.0 and store as curve p<br>
```
p = Operate.Dix(m,20.0);
```
 |
| --- |

* * *

| Dmg(Head Rotation Velocity X*[[Curve](this-curve-class.md)]*, Head Rotation Velocity Y*[[Curve](this-curve-class.md)]*, Head Rotation Velocity Z*[[Curve](this-curve-class.md)]*, Calculation method*[string]*, X axis interval (optional)*[real]*, Filter Class (optional)*[string]*) [static]
Description<br>Damage Criterion DAMAGE Criterion is a brain injury metric which is based on deformation output from a second-order system of equation. DMG requires three input curves: Head Rotation Velocity X, Head Rotation Velocity Y, v. The function returns an array containing 4 curve objects. 1st Curve: Damage Resultant 2nd Curve: Damage X Component 3rd Curve: Damage Y Component 4th Curve: Damage Z Component |
| --- |

#### Arguments

* Head Rotation Velocity X ([Curve](this-curve-class.md))
 
Head Rotation Velocity X [Curve](this-curve-class.md)

* Head Rotation Velocity Y ([Curve](this-curve-class.md))
 
Head Rotation Velocity Y [Curve](this-curve-class.md)

* Head Rotation Velocity Z ([Curve](this-curve-class.md))
 
Head Rotation Velocity Z [Curve](this-curve-class.md)

* Calculation method (string)
 
Calculation method used to solve Damage operation: 'rk4', 'rkf45', 'nbm'

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Filter Class (optional) (string)
 
If defined then T-HIS will automatically filter the input curve. The acceptable inputs for Filter class are 'C60', 'C180', 'C600', 'C1000'

| Returns
<br>Array of [Curve](this-curve-class.md) objects. 1st Curve: Damage Resultant 2nd Curve: Damage X Component 3rd Curve: Damage Y Component 4th Curve: Damage Z Component<br>
Return type
<br>Array |
| --- |

| Example
<br>Calculate DMG curves p using input head rotataional velocity curves m, n, o using rk4 method<br>
```
p = Operate.Dmg(m,n,o, 'rk4');
```
<br><br>Calculate DMG curves p1 with additional arguments for 0.001 X axis interval and C60 Filter.<br>
```
p1 = Operate.Dmg(m,n,o,'rk4',0.0001,'C60')
```
 |
| --- |

* * *

| Ds(Input Curve*[[Curve](this-curve-class.md)]*, Broadening Factor*[real]*, Redefine Frequencies*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Generate a design spectrum from a reponse spectrum |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Broadening Factor (real)
 
Spectrum broadening factor

* Redefine Frequencies (string)
 
T-HIS selects a new set of frequencies for the output (yes or no)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m and let T-HIS determine the new frequencies, store as curve p<br>
```
p = Operate.Ds(m,"yes");
```
 |
| --- |

* * *

| Dv(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert displacment spectrum to a velocity spectrum |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m and store as curve p<br>
```
p = Operate.Dv(m);
```
 |
| --- |

* * *

| Env(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Generate an Envelope that bounds the min and max values of a group of curves |
| --- |

#### Arguments

* Curves (Array of Curve objects)
 
Array of [Curve](this-curve-class.md) objects

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Envelope of curves stored in curve array x and store as curve p<br>
```
p = Operate.Env(x);
```
 |
| --- |

* * *

| Err(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate the degree of correlation between 2 curves |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To calculate the correlation between curves n and m and store as curve p<br>
```
p = Operate.Err(m,n);
```
 |
| --- |

* * *

| Exc(Input Curve*[[Curve](this-curve-class.md)]*, Output option*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate and displays an EXCeedence plot. This is a plot of force (Y axis) versus cumulative time (X axis) for which the force level has been exceeded. By default the Automatic option will create an exceedence plot using either the +ve OR the -ve values depending on which the input curve contains most of. <br>The Positive option will calculate the exceedence plot using only the points with +ve y values.<br><br>The Negative option will calculate the exceedence plot using only the points with -ve y values. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output option (string)
 
Select between automatic, positive or negative.

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Exceedence plot for curve m, using the positive option and store as curve p<br>
```
p = Operate.Exc(m,"positive");
```
 |
| --- |

* * *

| Exp(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate E to the power of Y axis values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate E to the power of Y axis values for curve m and store as curve p<br>
```
p = Operate.Exp(m);
```
 |
| --- |

* * *

| Fft(Input Curve*[[Curve](this-curve-class.md)]*, Output option*[string]*, X axis interval (optional)*[real]*, Scaling option (optional)*[string]*) [static]
Description<br>Fast Fourier Transform |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output option (string)
 
Generate magnitude, magnitude+phase or real+imaginary, (one of magnitude,phase,real)

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Scaling option (optional) (string)
 
Scaling option, (either one or two)

| Returns
<br>[Curve](this-curve-class.md) object/array or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Generate magnitude and phase curves and return a curve array. Regularise the input curve using an interval of 0.0001 first and scale using option two.<br>
```
c_array = Operate.Fft(m,"phase",0.0001,"one");
mag_curve = c_array[0];
phase_curve = c_array[1];
```
 |
| --- |

* * *

| Fir(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>FIR Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m and output as curve p . Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.Fir(m,0.0001);
```
 |
| --- |

* * *

| Hic(Input Curve*[[Curve](this-curve-class.md)]*, Window*[real]*, Acceleration factor*[real]*) [static]
Description<br>HIC Calculation. After calculating the HIC value for a curve the value can also be obtained<br>from the curve using the [Curve.hic](this-curve-class.md#hic) property. In addition to the HIC value the start and end time for the time window can also be obtained using the [Curve.hic_tmin](this-curve-class.md#hic_tmin)<br>and [Curve.hic_tmax](this-curve-class.md#hic_tmax) properties. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Window (real)
 
Maximum time window

* Acceleration factor (real)
 
Factor required to divide input acceleration curve by to convert to (G)

| Returns
<br>HIC value<br>
Return type
<br>real |
| --- |

| Example
<br>Calculate HIC for curve m, using a window of 0.036s and a factor of 9810.<br>
```
val = Operate.Hic(m,0.036,9810.0);
```
 |
| --- |

* * *

| Hicd(Input Curve*[[Curve](this-curve-class.md)]*, Window*[real]*, Acceleration factor*[real]*) [static]
Description<br>Modified HIC(d) Calculation for free motion headform. After calculating the HIC value for a curve the value can also be obtained from the curve using the [Curve.hicd](this-curve-class.md#hicd) property. In addition to the HIC(d) value the start and end time for the time window can also be obtained using the [Curve.hicd_tmin](this-curve-class.md#hicd_tmin) and [Curve.hicd_tmax](this-curve-class.md#hicd_tmax) properties. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Window (real)
 
Maximum time window

* Acceleration factor (real)
 
Factor required to divide input acceleration curve by to convert to (G)

| Returns
<br>HIC(d) value<br>
Return type
<br>real |
| --- |

| Example
<br>Calculate HIC(d) for curve m, using a window of 0.036s and a factor of 9810.<br>
```
val = Operate.Hicd(m,0.036,9810.0);
```
 |
| --- |

* * *

| Ifft(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*, Input type*[string]*) [static]
Description<br>Inverse Fast Fourier Transform |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md))
 
Second [Curve](this-curve-class.md)

* Input type (string)
 
Specifies if inputs are magnitude+phase or real+imaginary, (magnitude or real)

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Generate curve from magnitude (m) and phase (p) data and return as curve q.<br>
```
q = Operate.Ifft(m,p,"magnitude");
```
 |
| --- |

* * *

| Int(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Integrate a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To integrate curve m and store as curve p<br>
```
p = Operate.Int(m);
```
 |
| --- |

* * *

| Log(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Natural Log of Y axis values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Natural Log of Y axis values for curve m and store as curve p<br>
```
p = Operate.Log(m);
```
 |
| --- |

* * *

| Log10(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Log (base 10) of Y axis values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Log (base 10) of Y axis values for curve m and store as curve p<br>
```
p = Operate.Log10(m);
```
 |
| --- |

* * *

| Log10x(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Log (base 10) of X axis values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Log (base 10) of X axis values for curve m and store as curve p<br>
```
p = Operate.Log10x(m);
```
 |
| --- |

* * *

| Logx(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Natural Log of X axis values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Natural Log of X axis values for curve m and store as curve p<br>
```
p = Operate.Logx(m);
```
 |
| --- |

* * *

| Lsq(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Least Squares Fit for a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To calculate Least Squares Fit for curve m and store as curve p<br>
```
p = Operate.Lsq(m);
```
 |
| --- |

* * *

| Map(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Map Y axis values from one curve onto another curve |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To map curve n onto curve m and store as curve p<br>
```
p = Operate.Map(m,n);
```
 |
| --- |

* * *

| Max(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Maximum of a group of curves |
| --- |

#### Arguments

* Curves (Array of Curve objects)
 
Array of [Curve](this-curve-class.md) objects

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Maximum of curves stored in curve array x<br>
```
p = Operate.Max(x);
```
 |
| --- |

* * *

| Min(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Minimum of a group of curves |
| --- |

#### Arguments

* Curves (Array of Curve objects)
 
Array of [Curve](this-curve-class.md) objects

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Minimum of curves stored in curve array x<br>
```
p = Operate.Min(x);
```
 |
| --- |

* * *

| Mon(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Sort a curve into monotonically increasing X axis values. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To sort curve m and store as curve p<br>
```
p = Operate.Mon(m);
```
 |
| --- |

* * *

| Mul(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Multiply Y axis values |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To multiply the Y axis values for curve n from m and store as curve p<br>
```
p = Operate.Mul(m,n);
```
<br><br>To multiply the Y axis values in curve m by 20.0 and store as curve p<br>
```
p = Operate.Mul(m,20.0);
```
 |
| --- |

* * *

| Mux(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Multiply X axis values |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To multiply the X axis values for curve n from m and store as curve p<br>
```
p = Operate.Mux(m,n);
```
<br><br>To multiply the X axis values in curve m by 20.0 and store as curve p<br>
```
p = Operate.Mux(m,20.0);
```
 |
| --- |

* * *

| Ncp(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate a platic rotation curve for a beam from a moment/time and rotation/time |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
Moment / Time [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md))
 
Rotation /Time [Curve](this-curve-class.md)

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate plastic rotation curve p using curves m and r.<br>
```
q = Operate.Ncp(m,r);
```
 |
| --- |

* * *

| Nij(Shear Force*[[Curve](this-curve-class.md)]*, Axial Force*[[Curve](this-curve-class.md)]*, Moment*[[Curve](this-curve-class.md)]*, Fzc\_t*[real]*, Fzc\_c*[real]*, Myc\_f*[real]*, Myc\_e*[real]*, E*[real]*) [static]
Description<br>Biomechanical neck injury predictor. Used as a measure of injury due to the load transferred through the occipital condyles.<br><br>This function returns an array containing 4 curve objects.<br><br>Curve 1 - "Nte" is the tension-extension condition<br><br>Curve 2 - "Ntf" is the tension-flexion condition<br><br>Curve 3 - "Nce" is the compression-extension condition<br><br>Curve 4 - "Ncf" is the compression-flexion condition. |
| --- |

#### Arguments

* Shear Force ([Curve](this-curve-class.md))
 
Shear Force [Curve](this-curve-class.md)

* Axial Force ([Curve](this-curve-class.md))
 
Axial Force [Curve](this-curve-class.md)

* Moment ([Curve](this-curve-class.md))
 
Moment [Curve](this-curve-class.md)

* Fzc\_t (real)
 
Critical Axial Force (Tension)

* Fzc\_c (real)
 
Critical Axial Force (Compression)

* Myc\_f (real)
 
Critical bending moment (Flexion)

* Myc\_e (real)
 
Critical bending moment (Extension)

* E (real)
 
Distance

| Returns
<br>Array of [Curve](this-curve-class.md) objects.<br><br>1st curve : Nte curve<br><br>2nd curve : Ntf curve<br><br>3rd curve : Nce curve<br><br>4th curve : Ncf curve<br>
Return type
<br>Array |
| --- |

| Example
<br>Calculate NIJ curves using input curves x,y,z, and constants Fzc=1.0 (tension) / 2.0 (compression), Myc=3.0 (flexion) / 4.0 (extenstion) and E=0.0.<br>
```
c_array = Operate.Nij(x,y,z,1.0,2.0,3.0,4.0,0.0);
```
 |
| --- |

* * *

| Nor(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Normalise Y axis values between [-1,1] |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Normalise Y axis values of curve m and store as curve p<br>
```
p = Operate.Nor(m);
```
 |
| --- |

* * *

| Nor2(Input Curve*[[Curve](this-curve-class.md)]*, Y Min Value*[real]*, Y Max Value*[real]*, Lock to Axis Y Min*[integer]*, Lock to Axis Y Max*[integer]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Normalise Y axis values with manual settings. The operation takes the absolute value of the user-specified Y Min and Y Max. It then finds the maximum of these two numbers and divides all Y data by this number. There are two locks which probe or "lock on to" the Y Max and Y Min axis values which offers quick axis-normalizing. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Y Min Value (real)
 
The Minimum Y value

* Y Max Value (real)
 
The Maximum Y value

* Lock to Axis Y Min (integer)
 
Set the Lock button for the Y Minimum textbox

* Lock to Axis Y Max (integer)
 
Set the Lock button for the Y Maximum textbox

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Normalise the Y axis values of curve m taking the absolute maximum between the two values -200 and 100 (which for this example will equate to 200) with the Y Min Lock active and the Y Max Lock Inactive. This is then stored as curve p.<br>
```
p = Operate.Nor2(m, -200, 100, 1, 0);
```
 |
| --- |

* * *

| Nox(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Normalise X axis values between [-1,1] |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Normalise X axis values of curve m and store as curve p<br>
```
p = Operate.Nox(m);
```
 |
| --- |

* * *

| Nox2(Input Curve*[[Curve](this-curve-class.md)]*, X Min Value*[real]*, X Max Value*[real]*, Lock to Axis X Min*[integer]*, Lock to Axis X Max*[integer]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Normalise X axis values with manual settings. The operation takes the absolute value of the user-specified X Min and X Max. It then finds the maximum of these two numbers and divides all X data by this number. There are two locks which probe or "lock on to" the X Max and X Min axis values which offers quick axis-normalizing. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* X Min Value (real)
 
The Minimum X value

* X Max Value (real)
 
The Maximum X value

* Lock to Axis X Min (integer)
 
Set the Lock button for the X Minimum textbox

* Lock to Axis X Max (integer)
 
Set the Lock button for the X Maximum textbox

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Normalise the X axis values of curve m taking the absolute maximum between the two values -200 and 100 (which for this example will equate to 200) with the X Min Lock active and the X Max Lock Inactive. This is then stored as curve p.<br>
```
p = Operate.Nox2(m, -200, 100, 1, 0);
```
 |
| --- |

* * *

| Octave(Input Curve*[[Curve](this-curve-class.md)]*, Band type to convert to*[String]*, Output Type*[String]*, Input Type*[String]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Coverts a narrow band curve to either Octave or 1/Third Octave bands |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Band type to convert to (String)
 
Band type to convert to. Either "Octave" or "Third" Octave.

* Output Type (String)
 
Generate curve containing either "RMS" or "mean" values.

* Input Type (String)
 
Input curve contains either "Linear" or "dB" values.

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m that contains Linear values to 1/3 Octave bands and output RMS in curve p<br>
```
p = Operate.Octave(m,"third","rms","linear");
```
 |
| --- |

* * *

| Olc(Input Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, X axis interval (optional)*[real]*, Filter Class (optional)*[string]*) [static]
Description<br>Occupant load Criterion. Used as a parameter to evaluate Euro NCAP MPDB assessment as specified in Technical Bulletin TB 027 v1.1.1, which is intended to be used with the Adult Occupant Protection. The function returns an array containing 5 curve objects. Curve 1 - Velocity of Virtual Occupant Curve 2 - Velocity of the Barrier Model Curve 3 - Displacement of the Barrier Model Curve 4 - Displacement of the Virtual Occupant Curve 5 - Relative Displacement between the two models |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Filter Class (optional) (string)
 
If defined then T-HIS will automatically filter the input curve. The acceptable inputs for Filter class are 'C60', 'C180', 'C600', 'C1000'

| Returns
<br>Array of [Curve](this-curve-class.md) objects. 1st Curve: Velocity of Virtual Occupant 2nd Curve: Velocity of the Barrier Model 3rd Curve: Displacement of the Barrier Model 4th Curve: Displacement of the Virtual Occupant 5th Curve: Relative Displacement between the two models<br>
Return type
<br>Array |
| --- |

| Example
<br>Calculate OLC curves p using input acceleration curve m and velocity curve n<br>
```
p = Operate.Olc(m,n);
```
<br><br>Calculate OLC curves p using input acceleration m curve and Initial Velocity Value 13888.0<br>
```
p = Operate.Olc(m,13888.0);
```
<br><br>Calculate OLC curves p1 and p2 with additional arguments for 0.001 X axis interval and C60 Filter.<br>
```
p1 = Operate.Olc(m,n,0.0001,'C60')
```
<br><br>
```
p2 = Operate.Olc(m,13888.0,0.0001,'C60')
```
 |
| --- |

* * *

| Order(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Reverse the order of points in a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Reverse the order of points in curve m and store as curve p<br>
```
p = Operate.Order(m);
```
 |
| --- |

* * *

| Pbut(Input Curve*[[Curve](this-curve-class.md)]*, Frequency*[real]*, Order*[integer]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Pure Butterworth Filter |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Frequency (real)
 
Cut-off Frequency (Hz)

* Order (integer)
 
Filter order

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Filter curve m using a cut-off of 400Hz and order 2 and output as curve p. Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.Pbut(m,400.0,2,0.0001);
```
 |
| --- |

* * *

| Power(Input Curve*[[Curve](this-curve-class.md)]*, Power*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Raise to the power |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Power (real)
 
Power to raise Y axis values by

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Raise the Y axis values for curve m to the power 2.5 and store as curve p<br>
```
p = Operate.Power(m,2.5);
```
 |
| --- |

* * *

| Rave(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate rolling average of a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate rolling average of curve m and store as curve p<br>
```
p = Operate.Rave(m);
```
 |
| --- |

* * *

| Rec(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate reciprocal |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate receprocal of curve m and store as curve p<br>
```
p = Operate.Rec(m);
```
 |
| --- |

* * *

| Reg(Input Curve*[[Curve](this-curve-class.md)]*, X axis interval*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Regularise X axis intervals for a curve. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X axis interval (real)
 
New X axis interval

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Regularise curve m using a new X axis intreval of 0.0001.<br>
```
p = Operate.Reg(m,0.0001);
```
 |
| --- |

* * *

| Res(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Resultant of a group of curves |
| --- |

#### Arguments

* Curves (Array of Curve objects)
 
Array of [Curve](this-curve-class.md) objects

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Resultant of curves stored in curve array x<br>
```
p = Operate.Res(x);
```
 |
| --- |

* * *

| Rev(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Reverse X and Y axis values |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Reverse X and Y axis values of curve m and store as curve p<br>
```
p = Operate.Rev(m);
```
 |
| --- |

* * *

| Rs(Input Curve*[[Curve](this-curve-class.md)]*, Damping Factor*[real]*, Sampling Points*[int]*, X axis interval (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Generate a reponse spectrum from input accelerations |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Damping Factor (real)
 
Dammping factor

* Sampling Points (int)
 
Number of points to sample over (30 or 70)

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>Array of [Curve](this-curve-class.md) objects<br><br>1st curve : Relative displacement<br><br>2nd curve : Relative velocity<br><br>3th curve : Pseudo relative velocity<br><br>4th curve : Absolute acceleration<br><br>5th curve : Pseudo absolute acceleration<br>
Return type
<br>Array |
| --- |

| Example
<br>Generate a response spectrum using a factor of 0.05 and 70 sampling points. Regularise the input curve using an interval of 0.0001 first.<br>
```
p = Operate.Rs(m,0.05,70,0.0001);
```
 |
| --- |

* * *

| Sin(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Sine |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Sine() of curve m and store as curve p<br>
```
p = Operate.Sin(m);
```
 |
| --- |

* * *

| Smooth(Input Curve*[[Curve](this-curve-class.md)]*, Smoothing Factor*[integer]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Apply a smoothing factor to a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Smoothing Factor (integer)
 
Number of points to average over

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Smooth curve m using 7 points and store as curve p<br>
```
p = Operate.Smooth(m,7);
```
 |
| --- |

* * *

| Sqr(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Square root of a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Square root curve m and store as curve p<br>
```
p = Operate.Sqr(m);
```
 |
| --- |

* * *

| Stress(Input Curve*[[Curve](this-curve-class.md)]*, Convert to*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert between true and engineering stress |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Convert to (string)
 
Type to convert to (True or Engineering)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m from engineering to true strees and store as curve p<br>
```
p = Operate.Stress(m,"True");
```
 |
| --- |

* * *

| Sub(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Subtract Y axis values |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To subtract the Y axis values for curve n from m and store as curve p<br>
```
p = Operate.Sub(m,n);
```
<br><br>To subtract 20.0 from the Y axis values in curve m and store as curve p<br>
```
p = Operate.Sub(m,20.0);
```
 |
| --- |

* * *

| Sum(Curves*[Array of Curve objects]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Sum of a group of curves |
| --- |

#### Arguments

* Curves (Array of Curve objects)
 
Array of [Curve](this-curve-class.md) objects

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Sum of curves stored in curve array x<br>
```
p = Operate.Sum(x);
```
 |
| --- |

* * *

| Sux(First Curve*[[Curve](this-curve-class.md)]*, Second Curve or constant*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Subtract X axis values |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve or constant ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md) or constant

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>To subtract the X axis values for curve n from m and store as curve p<br>
```
p = Operate.Sux(m,n);
```
<br><br>To subtract 20.0 from the X axis values in curve m and store as curve p<br>
```
p = Operate.Sux(m,20.0);
```
 |
| --- |

* * *

| Tan(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Calculate Tangent |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate Tangent() of curve m and store as curve p<br>
```
p = Operate.Tan(m);
```
 |
| --- |

* * *

| Thiv(X Acceleration*[[Curve](this-curve-class.md)]*, Y Acceleration*[[Curve](this-curve-class.md)]*, Yaw Rate*[[Curve](this-curve-class.md)]*, Dx*[real]*, Dy*[real]*, X0*[real]*) [static]
Description<br>Theoretical Head Impact Velocity and the Post Impact Head Deceleration.<br>These values are used to assess the performance of road side crash barriers.<br><br>This function returns an array containing 2 curve objects. The 1st curve is the THIV<br>curve and the 2nd is the PHD curve. The peak values of these curves are the corresponding<br>THIV and PHD values and can be obtained using the [Curve.ymax](this-curve-class.md#ymax)<br>property. |
| --- |

#### Arguments

* X Acceleration ([Curve](this-curve-class.md))
 
X Acceleration [Curve](this-curve-class.md)

* Y Acceleration ([Curve](this-curve-class.md))
 
Y Acceleration [Curve](this-curve-class.md)

* Yaw Rate ([Curve](this-curve-class.md))
 
Yaw Rate [Curve](this-curve-class.md)

* Dx (real)
 
Horizontal distance between occupants head and vehicle

* Dy (real)
 
Lateral distance between occupants head and vehicle

* X0 (real)
 
Horizontal distance between occupants head and vehicle CofG

| Returns
<br>Array of [Curve](this-curve-class.md) objects.<br><br>1st curve : THIV curve<br><br>2nd curve : PHD curve<br>
Return type
<br>Array |
| --- |

| Example
<br>Calculate THIV and PHD curves x,y,z and distances Dx=0.6, Dy=0.3, X0=0.0.<br>
```
c_array = Operate.Thiv(x,y,z,0.6,0.3,0.0);
thiv = c_array[0].ymax;
phd = c_array[1].ymax;
```
 |
| --- |

* * *

| Ti(Axial Force*[[Curve](this-curve-class.md)]*, X Moment*[[Curve](this-curve-class.md)]*, Y Moment*[[Curve](this-curve-class.md)]*, Fzc*[real]*, Mrc*[real]*, X axis interval (optional)*[real]*, Filter Class (optional)*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Tibia Index is an injury criterion for the lower leg area used to predict leg injuries. |
| --- |

#### Arguments

* Axial Force ([Curve](this-curve-class.md))
 
Axial Force [Curve](this-curve-class.md)

* X Moment ([Curve](this-curve-class.md))
 
X Moment [Curve](this-curve-class.md)

* Y Moment ([Curve](this-curve-class.md))
 
Y Moment [Curve](this-curve-class.md)

* Fzc (real)
 
Critical Axial Force

* Mrc (real)
 
Critical Resultant Moment

* X axis interval (optional) (real)
 
If defined then T-HIS will automatically regularise the curve using this value first

* Filter Class (optional) (string)
 
If defined then T-HIS will automatically filter the input curve. The acceptable inputs for Filter class are 'C60', 'C180', 'C600', 'C1000'

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate TI Curve t using input curves x,y,z and constants Fzc=35.9 and Mrc=225.0<br>
```
t = Operate.Ti(x,y,z,35.9,225.0);
```
<br><br>Calculate TI curve t with additional arguments 0.0001 for X axis interval and C600 for Filter Class.<br>
```
t = Operate.Ti(x,y,z,,35.9,225.0,0.0001,'C600')
```
 |
| --- |

* * *

| Tms(Input Curve*[[Curve](this-curve-class.md)]*, Period*[real]*) [static]
Description<br>3ms Clip Calculation. After calculating the 3ms clip value for a curve the value can also be obtained<br>from the curve using the [Curve.tms](this-curve-class.md#tms) property. In addition to the 3ms clip value<br>the start and end time for the time window can also be obtained using the [Curve.tms_tmin](this-curve-class.md#tms_tmin)<br>and [Curve.tms_tmax](this-curve-class.md#tms_tmax) properties. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Period (real)
 
Clip period

| Returns
<br>3ms clip value<br>
Return type
<br>real |
| --- |

| Example
<br>Calculate 3ms clip for curve m, using a clip period of 0.003s.<br>
```
val = Operate.Tms(m,0.003);
```
 |
| --- |

* * *

| Translate(Input Curve*[[Curve](this-curve-class.md)]*, X value*[real]*, Y value*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Translate a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* X value (real)
 
X translation value

* Y value (real)
 
Y translation value

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Translate curve m by x=0.2, y=0.3 and store as curve p<br>
```
p = Operate.Translate(m,0.2,0.3);
```
 |
| --- |

* * *

| Tti(Upper Rib Acceleration*[[Curve](this-curve-class.md)]*, Lower Rib Acceleration*[[Curve](this-curve-class.md)]*, T12 Acceleration*[[Curve](this-curve-class.md)]*) [static]
Description<br>Thorax Trauma Index. |
| --- |

#### Arguments

* Upper Rib Acceleration ([Curve](this-curve-class.md))
 
Upper Rib Acceleration [Curve](this-curve-class.md)

* Lower Rib Acceleration ([Curve](this-curve-class.md))
 
Lower Rib Acceleration [Curve](this-curve-class.md)

* T12 Acceleration ([Curve](this-curve-class.md))
 
T12 Acceleration [Curve](this-curve-class.md)

| Returns
<br>TTI value<br>
Return type
<br>real |
| --- |

| Example
<br>Calculate TTI using curves x,y and z as inputs.<br>
```
val = Operate.TTi(x,y,z);
```
 |
| --- |

* * *

| Va(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert velocity spectrum to an acceleration spectrum |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m and store as curve p<br>
```
p = Operate.Va(m);
```
 |
| --- |

* * *

| Vc(Input Curve*[[Curve](this-curve-class.md)]*, A*[real]*, B*[real]*, Calculation method*[string]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Viscous Criteria calculate. The VC calculation can be done using 2 different calculation methods ECER95 and IIHS. |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* A (real)
 
Constant A

* B (real)
 
Constant B

* Calculation method (string)
 
Either ECER95 or IIHS.

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate VC for curve m, using A=1.3, B=0.229 and the ECER95 method<br>
```
p = Operate.Vc(m,1.3,0.229,"ECER95");
```
 |
| --- |

* * *

| Vd(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Convert velocity spectrum to a displacment spectrum |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m and store as curve p<br>
```
p = Operate.Vd(m);
```
 |
| --- |

* * *

| Vec(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Third Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Vector magnitude of 3 curves |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md)

* Third Curve ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate vector magnitude of curves m,n,o and store as curve p<br>
```
p = Operate.Vec(m,n,o);
```
 |
| --- |

* * *

| Vec2d(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md) or real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Vector magnitude of 2 curves |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md) or real)
 
Second [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Calculate vector magnitude of curves m and n and store as curve p<br>
```
p = Operate.Vec2d(m,n);
```
 |
| --- |

* * *

| Wif(First Curve*[[Curve](this-curve-class.md)]*, Second Curve*[[Curve](this-curve-class.md)]*) [static]
Description<br>Weigthed Integrated Factor (WIFAC) Correlation function. |
| --- |

#### Arguments

* First Curve ([Curve](this-curve-class.md))
 
First [Curve](this-curve-class.md)

* Second Curve ([Curve](this-curve-class.md))
 
Second [Curve](this-curve-class.md)

| Returns
<br>Correlation value<br>
Return type
<br>real |
| --- |

| Example
<br>Calculate the correlation between curves m and n.<br>
```
val = Operate.Wif(m,n);
```
 |
| --- |

* * *

| Window(Input Curve*[[Curve](this-curve-class.md)]*, Window Type*[string]*, percentage lead in (optional)*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Apply a smoothing window to a curve |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Window Type (string)
 
Window type to apply (Hanning, cosine or exponetial)

* percentage lead in (optional) (real)
 
percentage lead in for cosine window

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Apply a hanning window to curve m and store as curve p<br>
```
p = Operate.Window(m,"Hanning");
```
 |
| --- |

* * *

| Zero(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Translate curve to 0,0 |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Translate curve m to (0,0) and store as curve p<br>
```
p = Operate.Zero(m);
```
 |
| --- |

* * *

| ZeroX(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Translate curve to X=0.0 |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Translate curve m to X=0 and store as curve p<br>
```
p = Operate.ZeroX(m);
```
 |
| --- |

* * *

| ZeroY(Input Curve*[[Curve](this-curve-class.md)]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Translate curve to Y=0.0 |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Translate curve m to Y=0 and store as curve p<br>
```
p = Operate.ZeroY(m);
```
 |
| --- |

* * *

| dB(Input Curve*[[Curve](this-curve-class.md)]*, Reference Value*[real]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Converts a curve to dB (y = 20.0\*log(y/yref)) |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Reference Value (real)
 
Reference value

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Convert curve m to dB's using a reference value of 10.0 and store as curve p<br>
```
p = Operate.dB(m,10.0);
```
 |
| --- |

* * *

| dBA(Input Curve*[[Curve](this-curve-class.md)]*, Weighting Type*[String]*, Output Curve (optional)*[[Curve](this-curve-class.md)]*) [static]
Description<br>Applies A-weighting to a curve (convert from dB to dBA) |
| --- |

#### Arguments

* Input Curve ([Curve](this-curve-class.md))
 
Input [Curve](this-curve-class.md)

* Weighting Type (String)
 
Apply either Narrow band (narrow) or Octave band (octave) A weighting

* Output Curve (optional) ([Curve](this-curve-class.md))
 
[Curve](this-curve-class.md) to overwrite

| Returns
<br>[Curve](this-curve-class.md) object or NULL<br>
Return type
<br>Curve |
| --- |

| Example
<br>Apply narrow band A-weighting to convert curve m from dB to dBA and store as curve p<br>
```
p = Operate.dBA(m,"narrow");
```
 |
| --- |

* * *