Rounding is always to the nearest value, but where there is a 'tie' exactly between upper and lower values (e.g. exactly 0.5) there are two possible ways of rounding defined in the IEEE 754 standard:

* **T****ie away from zero**: rounds to the nearest value above (for positive numbers) or below (for negative numbers).
* **Tie to even**: rounds to the nearest value with an even least significant digit.

The differences between these two methods are best illustrated by example:

| Value | Tie away from zero | Tie to even |
| --- | --- | --- |
| +2.5 | +3.0 | +2.0 |
| +3.5 | +4.0 | +4.0 |
| -2.5 | -3.0 | -2.0 |
| -3.5 | -4.0 | -4.0 |

The default in PRIMER is 'tie away from zero' since it is easily predictable and understandable to humans.

The IEEE 754 standard defaults to 'tie to even' for binary values, but only recommends it for decimal values, allowing 'tie away from zero' instead, so technically PRIMER is IEEE-compliant.

More information on precision and rounding can be found in the [Pre-out Options Tab](pre-out-options-tab.md) section.

[Previous](output-devices.md)  |  [Next](typefaces.md)