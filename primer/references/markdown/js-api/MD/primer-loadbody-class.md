# LoadBody class

The LoadBody class gives you access to \*LOAD\_BODY cards in PRIMER. [More...](primer-loadbody-class.md#LoadBody_details)

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

## LoadBody properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| parts | Object | [*LOAD_BODY_PARTS card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_PARTS_properties) |
| rx | Object | [*LOAD_BODY_RX card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_RX_properties) |
| ry | Object | [*LOAD_BODY_RY card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_RY_properties) |
| rz | Object | [*LOAD_BODY_RZ card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_RZ_properties) |
| vector | Object | [*LOAD_BODY_VECTOR card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_VECTOR_properties) |
| x | Object | [*LOAD_BODY_X card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_X_properties) |
| y | Object | [*LOAD_BODY_Y card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_Y_properties) |
| z | Object | [*LOAD_BODY_Z card](primer-loadbody-class.md#LoadBody_*LOAD_BODY_Z_properties) |

### Properties for \*LOAD\_BODY\_PARTS

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| psid | integer | [Part set](primer-set-class.md) id |

### Properties for \*LOAD\_BODY\_RX

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| lcid | integer | [Load curve](primer-curve-class.md) ID |
| lciddr | integer | [Load curve](primer-curve-class.md) ID for dynamic relaxation |
| sf | real | [Load curve](primer-curve-class.md) scale factor |
| xc | real | X centre of rotation |
| yc | real | Y centre of rotation |
| zc | real | Z centre of rotation |

### Properties for \*LOAD\_BODY\_RY

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| lcid | integer | [Load curve](primer-curve-class.md) ID |
| lciddr | integer | [Load curve](primer-curve-class.md) ID for dynamic relaxation |
| sf | real | [Load curve](primer-curve-class.md) scale factor |
| xc | real | X centre of rotation |
| yc | real | Y centre of rotation |
| zc | real | Z centre of rotation |

### Properties for \*LOAD\_BODY\_RZ

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| lcid | integer | [Load curve](primer-curve-class.md) ID |
| lciddr | integer | [Load curve](primer-curve-class.md) ID for dynamic relaxation |
| sf | real | [Load curve](primer-curve-class.md) scale factor |
| xc | real | X centre of rotation |
| yc | real | Y centre of rotation |
| zc | real | Z centre of rotation |

### Properties for \*LOAD\_BODY\_VECTOR

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| lcid | integer | [Load curve](primer-curve-class.md) ID |
| lciddr | integer | [Load curve](primer-curve-class.md) ID for dynamic relaxation |
| sf | real | [Load curve](primer-curve-class.md) scale factor |
| v1 | real | X-component of Vector |
| v2 | real | Y-component of Vector |
| v3 | real | Z-component of Vector |
| xc | real | X centre of rotation |
| yc | real | Y centre of rotation |
| zc | real | Z centre of rotation |

### Properties for \*LOAD\_BODY\_X

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| lcid | integer | [Load curve](primer-curve-class.md) ID |
| lciddr | integer | [Load curve](primer-curve-class.md) ID for dynamic relaxation |
| sf | real | [Load curve](primer-curve-class.md) scale factor |
| xc | real | X centre of rotation |
| yc | real | Y centre of rotation |
| zc | real | Z centre of rotation |

### Properties for \*LOAD\_BODY\_Y

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| lcid | integer | [Load curve](primer-curve-class.md) ID |
| lciddr | integer | [Load curve](primer-curve-class.md) ID for dynamic relaxation |
| sf | real | [Load curve](primer-curve-class.md) scale factor |
| xc | real | X centre of rotation |
| yc | real | Y centre of rotation |
| zc | real | Z centre of rotation |

### Properties for \*LOAD\_BODY\_Z

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| cid | integer | [Coordinate system](primer-coordinatesystem-class.md) |
| exists | logical | true if LoadBody card exists |
| include | integer | The [Include](primer-include-class.md) file number that the LoadBody card is in |
| lcid | integer | [Load curve](primer-curve-class.md) ID |
| lciddr | integer | [Load curve](primer-curve-class.md) ID for dynamic relaxation |
| sf | real | [Load curve](primer-curve-class.md) scale factor |
| xc | real | X centre of rotation |
| yc | real | Y centre of rotation |
| zc | real | Z centre of rotation |

| Detailed Description<br>The LoadBody class allows you to create, modify, edit and manipulate \*LOAD\_BODY cards.<br>Unlike other classes there is no constructor and there are no functions.<br>Instead a LoadBody object is available as the [loadBody](primer-model-class.md#loadBody)<br>property of a [Model](primer-model-class.md) object. This object allows you to access all of the \*LOAD\_BODY cards.<br><br>For example, to activate \*LOAD\_BODY\_X in model m and set lcid to 1. |
| --- |


```
m.loadBody.x.exists = true;
m.loadBody.x.lcid = 1;

```

See the properties for more details.