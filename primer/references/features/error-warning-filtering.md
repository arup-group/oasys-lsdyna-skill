### Error/Warning filtering

If the preference **primer\*check\_tree\_category\_list** is active, a dropdown will be available at the top of the 'Error tree viewer' panel with the categories listed in the preference.

If only some categories are selected in the popup, only the errors/warnings with the categories selected will be visible in the treeview.

![](../Storage/primer-22-1/error-warning-filtering/error-warning-filtering-2025-02-27.png)

![](../Storage/primer-22-1/error-warning-filtering/error-warning-filtering-2025-02-27-1.png)

There are two possible ways to assign categories to error/warning messages:

* Manually edit the error configuration file ('**error.config**' - its location is specified in the **primer\*error\_configuration\_file** preference, by default the home area).

* Right-click on a message in the treeview &gt; Configure error &gt; EDIT CONFIG. FILE. This will open the configuration file in a text editor, where it can be manually edited. Some commented out instructions will be visible:

![](../Storage/primer-22-1/error-warning-filtering/error-warning-filtering-2025-04-14-5.png)

![](../Storage/primer-22-1/error-warning-filtering/error-warning-filtering-2025-04-14-4.png)

If, for example, you want to assign the CAN\_BE\_IGNORED category to the CON\_013 error message, we simply need to remove the $$$$ signs of the last two lines and save the changes to the file:

![](../Storage/primer-22-1/error-warning-filtering/error-warning-filtering-2025-04-14-6.png)

Now, after we 'Reread PRIMER Prefs', that message will be visible when selecting the CAN\_BE\_IGNORED category:

![](../Storage/primer-22-1/error-warning-filtering/error-warning-filtering-2025-04-14-7.png)

[Previous](checking-a-model.md)  |  [Next](checking-two-models.md)