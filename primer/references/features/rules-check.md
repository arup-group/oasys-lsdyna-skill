####  Rules Check

![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_9_1b.gif)

The CHECK &gt; RULES function applies a set of custom checks which can be controlled through the oa\_pref file or by the OPTIONS panel.

The standard model check and element quality checks are as described above. The model checking is always run without contact checks in this mode.

**Contact check** - if these are active, for example by the oa\_pref settings

* **primer\*contact\_penetration\_rule** : ON
* **primer\*contact\_penetration\_max\_allowable\_value** : 0.2

Rules check will run the contact checker directly and report penetration (above thresh-hold) and crossed edge count. In this case Details button will access PRIMER's penetration checker via an intermediate panel.

**Rigid-body separation check** - measures the distance between the centroids of merged rigid bodies and reports those that exceed the given value.

This check is now done as part of model checking if the option is active. For historic reasons, it is available as separate feature in rules check. Details will start a bespoke visualization panel. The oa\_pref settings are:

* **primer\*rigid\_body\_merge\_check:** ON
* **primer\*rigid\_body\_merge\_max\_separation:** 200.0

**Missing item check** is always done.  **** If, for example, an element references a part, but the part card is absent from the model, the missing item check will detect it.

For model check, the Details button will list take the user to the standard checking panel.

Whenever a custom check is made a summary is dumped to the text file **apply\_rules.txt** written in cwd.

[Previous](options-setting-model-check-options.md)  |  [Next](custom-oa-pref-file.md)