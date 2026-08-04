###  ECMAScript 6 Modules

PRIMER
22.1 supports ES6 modules. For more information on ES6 modules please refer to [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

Prior to support for ES6 modules, the only way to split up a script in PRIMER was to use the non-standard Use() functionality in the Oasys LS-DYNA Environment software. ES6 modules now give JavaScript built-in support for modular programming using the import and export keywords. PRIMER supports both static and dynamic imports for modules and this section gives a brief guide to how PRIMER locates modules.

To be able to support ES6 modules, PRIMER has to compile the script in a different way to a 'normal' script that does not use modules. So that PRIMER can tell how to compile the script we use a different extension .mjs for scripts that use modules. This follows the convention used by [V8](https://v8.dev/features/modules#mjs)and [Node.js](https://nodejs.org/api/esm.html#esm_enabling). Alternatively, if you prefer, you can put a special  [module](maintaining-a-library-of-javascripts.md#module_comment) comment at the top of the script and continue to use the extension .js (or whatever other extension you prefer).

When importing modules using import then if the module filename is an absolute filename PRIMER can locate the file directly. However if a relative filename is used PRIMER will search for the file in the following order.

1. Relative to the directory that the main script is in.
2. Relative to any parent module directory.
3. Relative to any script\_directory preference specified in a preference file given by a -pref=xxxx command line option.
4. Relative to any script\_directory preference specified in a preference file in the current directory.
5. Relative to the script directory specified in the HOME directory. By default this will be $HOME/primer\_library/scripts but this can be changed with the script\_directory preference in the HOME oa\_pref file.
6. Relative to the script directory specified in the OA\_INSTALL directory. By default this will be $OA\_INSTALL/primer\_library/scripts but this can be changed with the script\_directory preference in the OA\_INSTALL oa\_pref file.
7. Relative to the script directory specified in the OA\_ADMIN directory. By default this will be $OA\_ADMIN/primer\_library/scripts but this can be changed with the script\_directory preference in the OA\_ADMIN oa\_pref file.
8. Relative to any module\_directory preference specified in a preference file given by a -pref=xxxx command line option (unset by default).
9. Relative to any module\_directory preference specified in a preference file in the current directory (unset by default).
10. Relative to any module\_directory preference specified in the HOME oa\_pref file (unset by default).
11. Relative to any module\_directory preference specified in the OA\_INSTALL oa\_pref file (unset by default).
12. Relative to any module\_directory preference specified in the OA\_ADMIN oa\_pref file (unset by default).

Note that the non-standard Use() functionality and ES6 modules cannot both be used when compiling a script. You must use one or the other. Where possible you should now use ES6 modules in preference as they are now part of core JavaScript.

Individual module files can be encrypted if required so if you want to protect only some parts of your code/process and leave the rest of it open/visible this can easily be done.

One difference between using the non-standard Use() method and ES6 modules is that with the Use() method PRIMER could merge all of the individual files back into a single file using the Merge command which could then be encrypted if required to only have to give out a single file instead of a 'package'. For ES6 modules an external tool such as [rollup.js](https://rollupjs.org) or [Webpack](https://webpack.js.org/) is required to merge the files. Once combined to a single file, PRIMER can encrypt it.

[Previous](running-a-javascript-in-batch-mode.md)  |  [Next](scripts-using-guis.md)