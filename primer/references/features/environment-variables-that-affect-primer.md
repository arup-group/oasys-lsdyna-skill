###  Environment Variables That Affect PRIMER

Environment variables are set at the both at the operating system and user levels, and can be used to influence the behaviour of Oasys LS-DYNA Environment products. Generally they are better suited to site-wide customisation in the Shell when the software is installed, but users are free to make their own local settings.

| Unix/Linux systems running "C" shell (/bin/csh) or its derivatives such as /bin/tcsh:  <br>The format of the command is:<br> <br>setenv *&lt;parameter&gt;*  *&lt;argument list&gt;*<br> <br>For example:<br> <br>setenv DISPLAY my\_machine:0 <br>setenv SM\_USE\_VISUAL default <br>setenv DISPLAY\_FACTOR 1.2<br> <br>(Note that the " oasys\_xx " shell is written using C shell syntax, so if it is amended the format above should be used.) |
| --- |

| Unix/Linux systems running "Bourne" (/bin/sh) or "Korn" (/bin/ksh) shells  <br>The format of the command is:<br> <br>*&lt;parameter&gt;* = *&lt;argument list&gt;* ; export *&lt;parameter&gt;*<br> <br>For example:<br> <br>DISPLAY=my\_machine:0; export DISPLAY <br>SM\_USE\_VISUAL=default; export SM\_USE\_VISUAL <br>DISPLAY\_FACTOR=1.2; export DISPLAY\_FACTOR |
| --- |

####  Windows systems

| On Windows Vista / Windows 7:<br> <br><br>| ![](../Storage/primer-22-1/primer_links/appen_13/app_v_1.gif) | ==&gt; | Properties |<br>| --- | --- | --- |<br>|  | | <br>V |<br>|  |  | Advanced System setting |<br>|  |  | | <br>V |<br>|  |  | Environment variables | | ![](../Storage/primer-22-1/primer_links/appen_13/env.png) |
| --- | --- |
| On Windows XP / 2000<br> <br><br>| ![](../Storage/primer-22-1/primer_links/appen_13/app_v_1.gif) | ==&gt; | Properties |<br>| --- | --- | --- |<br>|  | | <br>V |<br>|  |  | Advanced |<br>|  |  | | <br>V |<br>|  |  | Environment | | ![](../Storage/primer-22-1/primer_links/appen_13/app_v_4.gif) |

Then insert the relevant Variable and Value strings into the User or System settings as desired.

In this example it can be seen that user Administrator has set the DISPLAY environment variable to 170.177.1.92:0 .

####  Environment variables that control the behaviour of PRIMER.

| Variable name | Description | Possible Values | Default |
| --- | --- | --- | --- |
| The following variables control the graphics and attributes of the display window and menu system. |
| DISPLAY | The X11 display id on which graphics will be drawn. <br> <br>If this is not defined (most systems initialise this to " :0 ") then no connection can be made to an X server, and no graphics will be drawn. | ( *&lt;machine name&gt;* ) :&lt; *server id* &gt; ( *&lt;.screen id&gt;* ) | :0 |
| DISPLAY\_SATURATION <br>DISPLAY\_BRIGHTNESS <br>DISPLAY\_FACTOR | Saturation controls the colour saturation (intensity) of menus <br>Brightness controls the colour brightness of menus <br>"Factor" sets the relative display scale, and can range from 0.5 (making menus larger) to 2.0 (making them smaller). It may also be set to " automatic " which derives a factor from the physical screen dimensions. | 0.0 to 1.0 <br>0.0 to 1.0 <br>0.5 to 2.0, or automatic | 1.0 <br>1.0 <br>1.0 |
| SM\_USE\_VISUAL | Sets the X11 "visual" id to be used for screen menus. Where a graphics display provides "overlay" planes these should normally be used, otherwise this should be left undefined or set to "default". Using an explicit visual id is possible, and this should be defined in hexadecimal (eg 0xf16). <br> <br>Experience has shown the on some Silicon Graphics systems using the "overlay" planes can result in very strange colours in other windows, in which case "default" should be used. <br> <br>Also on some W2000 and graphics board combinations problems may also arise with overlay planes and, again, "default" should be used. | overlay  <br> default  <br>&lt; *visual id* &gt; in hex | overlay |
| MENU\_AUTO\_CONFIRM | This variable is often used when replaying command files which, when recorded, paused and asked the user to confirm things. (For example HELP and Warning messages.) If the variable is set (true) then these will not pause and will behave as if the user had pressed "OK" - meaning that command files can play back without user intervention. | true or false | false |
| USE\_PIXMAPS | Controls whether or not the menus use "pixmaps" (off-screen memory) to produce smooth scrolling. Turning this off (false) will save memory, and may help memory problems on a display that has only limited memory available for the X server, but will give slightly jerky window scrolling. | true or false | true |
| PRIMER\_NO\_PIXMAP <br>PRIMER\_NO\_PBUFFER | [Controlling screen refresh](refresh-controlling-backing-store-redraws.md#refresh), shows a new method that has superseded these variables. <br> <br>May be used to suppress backing store redraws for the OpenGL graphics window. Should be used on OpenGL / X graphics combinations only if you receive errors starting "GLX ...", and then only after consultation with Oasys Ltd Support. | true or false | false |
| PRIMER\_NO\_VARRAY <br>PRIMER\_NO\_SHADER <br>PRIMER\_NO\_VBO <br>PRIMER\_NO\_MBR | These options turn off various aspects of graphics tuning, respectively vertex arrays, shaders, vertex buffer objects, and buffer range extensions. It should not normally be necessary to use these variables, and they are really for debugging purposes. <br> <br>More information about graphics tuning may be found in
[Accelerated Graphics](accelerated-graphics.md#accel_1) | &lt;Any value&gt; | *&lt;none&gt;* |
| SAVE\_UNDER | This flag was introduced to fix a specific bug on Compaq Alpha OSF4.x operating systems. Normally the window manager requests a redraw of windows that have been updated, even when they are currently obscured by something else. However the OSF4 window manager series failed to do this, leading to "bare" patches underneath popup menus when these were unmapped. <br> <br>Setting this flag to false results in more redraws on these systems since it suppresses the default "save under" property of X11 windows, but it does at least prevent windows getting bare areas. <br> <br>Compaq have fixed the bug in OSF5, and possibly in later releases of OSF4. | true or false | true |
| CP\_FILE\_FILTER | Used during checkpoint file replay to override any file and pathname stored in the checkpoint file, bringing up the file filter instead. This allows checkpoint files to be replayed on different systems. <br> <br>Though this will not work while replaying the checkpoint commands for the drag-drop of files into the PRIMER graphics area. | true or false | false |
| The following two variables apply on **Windows platforms only** , and should only be used if the menu system is clearly obtaining the wrong display size from the system, as evidenced by fonts and menus being very much the wrong size. |
| DISPLAY\_HEIGHT | Set an explicit display height in millimetres | &lt;height in mm&gt; | &lt;none&gt; |
| DISPLAY\_WIDTH | Set an explicit display width in millimetres | &lt;width in mm&gt; | &lt;none&gt; |
| The following variables affect the functioning of the code: |
| PRIMER\_FILE\_FORMAT | An alternative way of controlling the format of ASCII files written on Windows systems. <br> <br>Windows has the peculiarity that, by default, it writes both &lt;carriage return&gt; and &lt;line feed&gt; characters at the end of each line, whereas Unix and Linux platforms only write a &lt;line feed&gt;. <br> <br>The presence of the &lt;carriage return&gt; can confuse some software on Unix/Linux, and its absence can confuse some software on Windows, so in a mixed machine environment there is - unfortunately - no single answer that is "best". <br> <br> PRIMER offers the following options: | native or unix | native |
| native | Uses the default for the machine's architecture, which adds &lt;carriage return&gt; on Windows. |
| unix | Suppresses the &lt;carriage return&gt; (makes no difference on Unix/Linux machines.) |
| This setting has the same effect as the ascii\_file\_format preference above, and is provided for users who wish to set file output format on a "per machine" basis rather than globally with the oa\_pref file. <br> <br>If the oa\_pref option is used it will supersede this setting. |
| The following affect threading. The options they provide are available under Model, Utilities , and these variables just provide a way of setting different default values. |
| PRIMER\_NUM\_THREADS | Sets the number of threads on which PRIMER is to run parallelised operations. By default this is the number of cores in the processor, subject to a maximum of 4. <br> <br>Setting this to 1 will suppress threading. Setting it to more than the number of cores on your processor will work, but it will not give any speed improvements - and in fact may slow things down. | 1 to n | *&lt;none&gt;* |
| PRIMER\_THREAD\_DIAGNOSTICS | Turns on threading diagnostics. <br> <br>This may be a value in the range 0 to 4. 0 is off, and 1 to 4 give progressively more diagnostic information | 0 to 4 | 0 |
| The following controls the display of on-line manual pages on Unix systems only. (Windows systems use the default web browser.) |
| NETSTART | Command string to start Netscape on Unix/Linux hosts. This is used to fire up the Netscape browser in order to read manual pages from within PRIMER. | Any valid Unix command string. | *&lt;none&gt;* |
| The following variables are provided for debugging purposes only, and should not normally be used. |
| DB\_POINTER\_CHECK | Runs a check during every internal database allocation and return operation to scan for duplicated or erroneous pointers. This will result in very much (potentially 100x) slower operation of internal memory management, and is normally only used to track down internal errors. | false , 1 or 2<br> <br>(Turned off, level #1 or level #2 checking) | false |
| XSYNC | Runs the X server in "synchronised" (unbuffered) mode. This will give woefully slow graphics, and is used for debugging purposes only. | true or false | false |
| WARN\_REDEFINE | Makes the menu system issue a warning if a button is redefined. Again this is normally only used for debugging purposes. | true or false | false |
| PRIMER\_NO\_ERROR\_HANDLER | Suppresses the trapping of crashes and the associated logic that offers to save emergency keyout files. Error trapping replaces the current call stack so when running under a debugger it destroys information about the original stack, making it impossible to trace where errors occurred. Setting this variable turns off the special error handler and gives normal (system) handling of crashes. | Any value | *&lt;none&gt;* |

[Previous](command-line-arguments-to-primer.md)  |  [Next](n-automated-model-build-from-command-line.md)