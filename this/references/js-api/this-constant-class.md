# Constant class

The Constant class defines various constants. [More...](this-constant-class.md#Constant_details)

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

## Constant constants

### Constants for Surface

| **Name** | **Description** |
| --- | --- |
| Constant.BOTTOM | Bottom shell surface |
| Constant.MIDDLE | Middle shell surface |
| Constant.TOP | Top shell surface |

| Detailed Description<br>The Constant class gives you access to various constants that are used in the T/HIS API. They are defined in the Constant class so the global namespace is not polluted.<br>See the documentation below for more details. |
| --- |