# Damping class

The Damping class gives you access to damping cards in PRIMER. [More...](primer-damping-class.md#Damping_details)

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

## Damping properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| global | Object | [*DAMPING_GLOBAL card](primer-damping-class.md#Damping_DAMPING_GLOBAL_properties) |
| modal | Object | [*DAMPING_MODAL card](primer-damping-class.md#Damping_DAMPING_MODAL_properties) |
| structural | Object | [*DAMPING_STRUCTURAL card](primer-damping-class.md#Damping_DAMPING_STRUCTURAL_properties) |

### Properties for DAMPING\_GLOBAL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if damping card exists |
| include | integer | The [Include](primer-include-class.md) file number that the damping card is in. |
| lcid | integer | [Curve](primer-curve-class.md) ID specifying system damping constant |
| srx | real | Scale factor on global x rotational damping moments |
| sry | real | Scale factor on global y rotational damping moments |
| srz | real | Scale factor on global z rotational damping moments |
| stx | real | Scale factor on global x translational damping forces |
| sty | real | Scale factor on global y translational damping forces |
| stz | real | Scale factor on global z translational damping forces |
| valdmp | real | System damping constant |

### Properties for DAMPING\_MODAL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| calcdt | real | Calculation interval |
| exists | logical | true if damping card exists |
| f\_name | real | Filename |
| include | integer | The [Include](primer-include-class.md) file number that the damping card is in. |
| prflg | integer | Printout flag |

### Properties for DAMPING\_STRUCTURAL

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if damping card exists |
| g | real | Constant structural damping coefficient |
| include | integer | The [Include](primer-include-class.md) file number that the damping card is in. |
| lcid | integer | [Curve](primer-curve-class.md) ID Curve ID to define frequency dependent structural damping coefficients |
| lctyp | integer | Type of load curve defining structural damping coefficients |

| Detailed Description<br>The Damping class allows you to create, modify, edit and manipulate damping cards.<br>Unlike other classes there is no constructor and there are no functions.<br>Instead a Damping object is available as the [damping](primer-model-class.md#damping)<br>property of a [Model](primer-model-class.md) object. This object allows you to access<br>the damping cards.<br><br>For example,<br><br>To activate damping card \*DAMPING\_GLOBAL in model m and set valdmp to 0.001. |
| --- |


```
m.damping.global.exists = true;
m.damping.global.valdmp = 0.001;

```

To activate damping card \*DAMPING\_MODAL in model m and set prflg to 1.

```
m.damping.modal.exists = true;
m.damping.modal.prflg = 1;

```

To activate damping card \*DAMPING\_STRUCTURAL in model m and set g to 0.02.

```
m.damping.structural.exists = true;
m.damping.structural.g = 0.02;

```

See the properties for more details.