## Plain versus Anti-aliased fonts

On some monitors, especially relatively low resolution ones, the anti-aliasing of fonts can result in quite fuzzy text. The quality of this will depend on the version of Freetype installed, and more recent Linuxes will tend to look better since they are more likely to use sub-pixel sampling.

Some users may prefer the cruder but sharper appearance of the original "core X11" legacy fonts, and these can be used by changing to Plain so long as you actually have these fonts loaded on your machine. On the CentOS 7 machine being used to create this manual page the equivalent "plain" font image of the above is:

![](../Storage/primer-22-1/project-common-topics/linux_fonts/fonts_2.png)

If you try this on your machine and it doesn't work then it means that you need to load the legacy font package(s), see below.

### Loading legacy Core X11 fonts

You don't need to load these, it is only necessary if you want the old-style "plain" appearance described in the section above.

You will need root privileges to install these, so unless you are familiar with working as root and using commands such as "rpm", "yum" or "yast" please seek help from your IT department, or alternatively contact Oasys Ltd for help.

The best fonts to install are the 75 dots per inch (dpi) ones, which can be obtained online for a range of common Linux operating systems from [https://pkgs.org/download/xorg-x11-fonts-75dpi](https://pkgs.org/download/xorg-x11-fonts-75dpi)

If that fails you may already have the relevant packages in your installation files, you should look for (in order)

#### RedHat/CentOS


```

  xorg-x11-fonts-75dpi
  xorg-x11-fonts-ISO8859-1-75dpi
  xorg-x11-fonts-Type1
  xorg-x11-fonts-misc
  xorg-x11-fonts-100dpi
  xorg-x11-fonts-ISO8859-1-100dpi
```


You don't have to install all of these.

The 75dpi and 100dpi font packages are the same typefaces at different resolutions. You should choose the one which gives the best looking results on your display, but in the author's experience the 75dpi one looks fine but the 100dpi one looks as if a spider was let loose with a leaky pen! Always try the 75dpi one first.

To manage fonts on RHEL/CentOS do the following:

* Log in as root
* To see the X11 fonts currently installed type "**yum list installed | grep xorg | grep font**"
* To see X11 fonts available but not installed "**yum list available | grep xorg | grep font**"
* To install something "**yum install** *package*", for example "**yum install xorg-x11-fonts-75dpi**"

You can list the range of "yum" commands available with "man yum".

#### SUSE


```

  xorg-x11-fonts-core
  xorg-x11-fonts

```

 [Previous](the-range-of-fonts-available.md)  |  [Next](a-standard-object-names-and-acronyms.md)