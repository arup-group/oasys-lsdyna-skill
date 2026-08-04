###  Multiple Build from Template Panel

The Build Models button will take you to a panel which enables the build process for all the active templates. As this process reads files from disk, it is essential that the database and all templates have been saved.

Build. Activating this will mean that the model will be built and retained as a model in memory in PRIMER.

Write. Activating this without build will mean that the model will be built (if necessary), keyed out and then deleted from memory. If build is of simple mode and contains no [orientation](creating-and-editing-database-entries.md#orientincld), it is not necessary for primer to build the model. The filename and directory are automatically generated, based on the template name, the directory being appended to the keyout directory base. A listing file will also be written which can be read by the Shell to submit a set of Ansys LS-Dyna jobs.

Keyout Master Only. This is the default for build from templates. In this mode, the implemention of bolt connections (when an [xml connection file](connection-file-as-component-of-build.md#buildcon) is included as part of the build recipe) is run without applying the setting *use\_parent\_layer\_for\_bolt* ( irrespective of how this is defined) with the consequence that all created bolt FE will appear in the master file itself, thus obviating the requirement to additionally save includes.

![](../Storage/primer-22-1/primer_links/sect_3/images/template_build.gif)[Previous](editing-multiple-templates.md)  |  [Next](single-build-from-command-line.md)