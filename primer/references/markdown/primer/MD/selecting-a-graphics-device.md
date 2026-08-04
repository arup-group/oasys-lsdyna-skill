##  Selecting a Graphics Device

| **This panel is not normally mapped.**<br> <br>**If you see it when you start PRIMER it means that the command which launches the code, or the oa\_pref giving preferences, needs to be configured to define a default graphics device.** |
| --- |

| **On Windows** | This panel is not normally mapped, and PRIMER starts under OpenGL automatically |
| --- | --- |
| **On Unix / Linux** | When PRIMER starts it will normally be configured to use OpenGL graphics automatically. If, exceptionally, it is not you will see the device selection panel: |

![](../Storage/primer-22-1/primer_links/sect_1/images/primer.gif)

The actual devices available will depend on your machine type and the graphics options that have been installed. Most workstations will provide both X11 and OpenGL graphics, but older machines may have a more limited range of options.

| **OpenGL** | Selects the 3D OpenGL device, using hardware acceleration if available. This is the best choice of all if it is available on your system. |
| --- | --- |
| **X8** | Selects an X11 visual with 8 bit-planes. Shading will be limited, as only 256 colours will be available |
| **X24** | Selects an X11 visual with 24 bit-planes. Over 16 million colours will be available, so shading will be better - this is the recommended choice under X-Windows. |
| **XMENU** | Lets you choose from all the visuals available on your system. Use only if one of the standard options doesn't work - you may need to ask Oasys Ltd Support for advice. |
| **Note:** | If you always want to start PRIMER with the same graphics device you can do so by defining a " -d=&lt; *device* &gt; " command-line argument. This will bypass the device selection panel above. See [Command Line Arguments](command-line-arguments.md#CommandLineArgs)below for more details. The same effect can be obtained by setting the [preference](m-summary-of-oa-pref-command-line-and-environment-variable-settings.md#dialoguecommands) graphics\_type |

The other command options on this panel are:

| **FONTS** | Allows you to choose font typefaces, style and size. (May also be set interactively from the Options &gt;, Menu Attributes pulldown window.) |
| --- | --- |
| **TTY** | Invokes [text-only mode](running-primer-in-text-only-mode.md#RunCommandLine)with no graphics or menus |
| **HELP** | Gives online advice about using this panel |
| **STOP** | Stops the PRIMER session. |

There are also three settings that control the appearance of the screen menu interface (but not the graphical images of your model). These are:

| Scale | Controls the effective scale of the display used for the menu interface. <br><br>The menu system for PRIMER was designed for a high resolution (1280 x 1024) display of at least 17" size. On smaller screens and/or lower resolution displays it may be over-sized leading to some panels being too small for their contents. The "scale" value can be used to factor the physical size of the display: values greater than 1.0 will make it appear to be larger, so text and buttons will shrink making more of them fit into panels. <br><br>This variable may also be set using the environment variable **DISPLAY\_FACTOR** . Valid settings being a number in the range 0.5 to 2.0, or the word "automatic". For example: <br><br>>  <br>> **setenv DISPLAY\_FACTOR 1.2** ( C shell syntax)<br>>  <br>> **DISPLAY\_FACTOR=automatic; export DISPLAY\_FACTOR** (Bourne shell)<br>>  <br><br>The "automatic" setting calculates a factor based on your physical screen size: you can still overwrite it in this front panel. <br><br>(May also be set interactively from the Options &gt;, Menu Attributes pulldown window.) |
| --- | --- |
| Brightness | Controls screen menu colour brightness. <br><br>On some displays the colours in the screen menu come out garishly bright. This value may be set in the range 0.0 to 1.0 to control this brightness: 1.0 being light, 0.0 being dark. It too may be set as above with the environment variable **DISPLAY\_BRIGHTNESS** . |
| Saturation | Controls screen menu colour saturation. <br><br>As with brightness the colour saturation of the screen menu may be set in the range 0.0 to 1.0 (totally grey to fully saturated colours). Again there is an environment variable **DISPLAY\_SATURATION** which may be used to set this globally as described above. |

You may need to experiment a bit to find the right values for your particular display but, once found, the environment variables are probably the best way to set them. There is the additional advantage that they will also apply to T/HIS and D3PLOT.

| **NOTE** : | The Display Factor, Font attributes, and left-handedness may be set interactively using the Options &gt;, Menu Attributes pulldown menu. |
| --- | --- |
|  | A complete listing of all possible command line arguments, environment variables and "oa\_pref" file configuration options may be found in [Appendix M](m-summary-of-oa-pref-command-line-and-environment-variable-settings.md#dialoguecommands) |

[Previous](starting-the-code.md)  |  [Next](if-primer-will-not-start-in-screen-menu-mode-on-your-display.md)