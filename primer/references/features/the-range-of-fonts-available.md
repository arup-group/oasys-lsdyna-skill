## The range of fonts available

The range of fonts you see on your system will depend on the version of Linux you are using and what fonts you have installed; the image above was captured from a CentOS 7 machine.

Oasys LS-DYNA Environment software interrogates the font server to extract all available fonts, then sorts them for presentation purposes by spacing (proportional or monospaced) and weight (normal, light, bold). The "recommended" fonts, as shown in the right hand popup menu above, are simply those which have been found by trial and error to give the best appearance. However this is a very subjective matter, and you may prefer something different: choose something that you like then use Save Settings to save it. If you change your mind later you can always come back to this panel to select something else.

Helvetica is provided as an option for backwards compatibility with the older user interface; it is not natively available on Linux so a different font is substituted, which tends not to look very good in Freetype.

### Monospaced font selection problems

We have observed that while proportional font selection works correctly on Linux, the selection of monospaced fonts seems to have some bugs:

* The default "courier" font works, but tends to produce a font that is too small in some situations and probably is not exactly courier, although it looks very similar.
* The "recommended" monospaced font on some systems comes out as "Courier 10 Pt Regular", which is a genuine courier font, however if you select that it will produce something completely different. Experiment shows that if you ask for "Courier 10 Pt" then you get what you expect, but appending "Regular" breaks the font selection somehow

This appears to be a "fontconfig" problem: the system's font server simply gets it wrong. This can be demonstrated by the command

fc-match "*font of your choice*"

for example fc-match "courier" on a RHEL 7 machine produces the result "Nimbus Mono PS" "Regular"

If you are happy with the monospaced font used for help texts and the like you don't need to take any action, however if you want to change it you may need to experiment a bit to find something that looks good on your system by typing different variations of names into the "Listing font: [.....]" text entry box. You can use the "fc-match" command in conjunction with this to see what the font server will map your request onto. Once you have found something satisfactory use Save Settings to save it in your oa\_pref file and it will be remembered for future use.

[Previous](fonts-on-linux.md)  |  [Next](plain-versus-anti-aliased-fonts.md)