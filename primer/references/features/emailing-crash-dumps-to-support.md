# Emailing Crash Dumps to Support

***This feature is only available on Windows platforms***

Obviously we prefer our software not to crash, but if it does we want to know why, so that we can fix it in the future and – if possible – suggest workarounds for users. On Windows platforms, a crash will usually produce a small dump file which, if sent to Oasys Ltd Support, can sometimes be deconstructed to work out what went wrong.

Historically this relied on the user finding the dump file on their system, then sending it manually with a covering email. This was difficult and time-consuming, so Oasys LS-DYNA Environment software can now be configured to collect that file and create the email automatically. It must be stressed that this email is ***never*** sent automatically – that is always under the control of the user – and this feature can be turned off. This section describes the process in more detail and also explains how to customise the handling of crashes.

## What is a dump (.dmp) file?

This is a small file (usually around 50 kB), which contains information about the "stack frame" of the software at the time of the crash. It is produced by standard Windows utilities – in fact this is the file that would normally be sent to Microsoft following a crash if their standard crash post-mortem process were used.

It contains:

* A stack trace: the hierarchical list of "what function called what" i.e. where in the software the crash occurred.
* Very limited information about variables in use at the time of the crash.

It does ***not*** contain:

* Any significant information about the model being processed.
* Any information about historical operations – it is "instantaneous", containing only what was happening at the time of the crash.

There is absolutely no way that Oasys Ltd or anyone else could use it to reverse-engineer your model data in anything other than the most general terms. For example, we might be able to deduce that you were using a spot-weld tool at the time of the crash and therefore that your model contained connections, but we could not learn anything about its size, content, geometry, material properties or any quantitative information.

If you send us these files it helps us to help you. Sometimes we can diagnose the reason for a crash and suggest ways around it, this also allows us to fix problems in future releases. This isn't always possible, they can be very opaque at times, but they are by far the best tool we have for diagnosing problems.

## The default process for handling a crash in an interactive session

![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-12-2.png) This is not the default behaviour for users in Japan, see "[Special configuration in some geographies](emailing-crash-dumps-to-support.md#h2__782393160)" below.

Following a crash, you will see this message (*t**his example shows PRIMER; the behaviour is the same for all Oasys LS-DYNA Environment products*).

![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-1.png)

If you choose one of the Email options an email like the following will be created in your default email client. This example uses Microsoft Outlook but if different software is installed that will be used instead.

![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-2.png)

Note that the dump file is attached automatically to the email, and it may also contain a Stack trace containing information about the stack frame.

You can add any comments you like to the email, possibly add other attachments, then send it in the normal way using Send. This will send it to the normal [dyna.support@arup.com](mailto:dyna.support@arup.com) email address we use to handle support requests.

The email will never be sent automatically. If you close the email without sending it, it will remain in your drafts folder until deleted.

## Configuring the crash handler

All aspects of the crash handler can be configured via preferences stored in the oa\_pref file, but much the easiest way to do this is to use the interactive configuration GUI built into the software.

| In all programmes other than Oasys SHELL, selecting Help → Crash handler will launch the configuration panel:<br><br>![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-4.png)<br><br><br><br>In Oasys SHELL, this is launched from Utilities → Crash Handling: | ![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-12.png) |
| --- | --- |

Taking each section of this panel in turn:

###  Action to be taken after a crash
 
![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-5.png)

###  For interactive usage:

* The first option, “Minidump file and exit”, is usually the best option. If you choose to save your data then you have a reasonable chance of recovering some of your work, and the minidump file may provide evidence for Oasys Ltd Support to debug the problem and suggest workarounds.
* “Trap and continue” is a possible alternative, especially if you don’t want to save debugging information, but it may not work if the cause of the crash was mangled data and a subsequent crash may be terminal.
* “Trace and exit” and “No action” are not usually good choices for interactive use on the desktop. Tracebacks on Windows (unlike Linux) do not usually give much information.

#### For batch usage, where there is no interactive user:

* “Trace and exit” is usually the best choice since it will leave some evidence in the log file. If the software is run with the “-batch” command-line argument it will use this method regardless of the option set here.

The default if no explicit setting is defined is “Minidump file and exit”. The next sections will show how the minidump file’s configuration can be set when this option is used.

### Preference files to update

![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-6.png)

Preferences can be stored in oa\_pref files at three levels:

| OA\_ADMIN | Administration level, optional. (Not used in this example) |
| --- | --- |
| OA\_INSTALL | Installation level, where the software is installed |
| HOME | The user’s home directory |

If you wish to configure options for all users it is best to put them in the OA\_INSTALL or OA\_ADMIN levels since this will ensure uniformity. If these directories are write-protected, users will not be able to change them, and if you choose to “lock” the preferences stored within them users will not be able to override these with locally set preferences in the HOME directory.

Unlocked preferences use a “\*” between code name and preference, locked preferences use a “#”. For example:

oasys\*some\_preference: value is an unlocked preference
oasys#something\_else: value is a locked preference

###  Codes to configure
 
![](/resources/Storage/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-7.png)

It is possible that you will want the same crash handling behaviour for all programs. This is achieved using the “oasys” prefix – for example:

oasys\*some\_preference: value

You can set preferences for individual programs – for example:

primer\*some\_preference: value

by unticking “All Oasys LS-DYNA Environment products” and ticking only those programs you wish to configure.

### Minidump files

![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-8.png)

Minidump files contain debug information about the code when it crashed. They do not contain any information about the model and cannot be used to reverse-engineer models in any way. If you send them to Oasys Ltd Support they may be able to tell what caused the crash, but this is not guaranteed – sometimes they are very opaque. However, any information is useful when trying to debug crashes, so if you send them to us it helps us to help you.

You can choose whether or not to save them, also where to save them. The default location is the standard Windows temporary directory, typically C:\users\username\Appdata\local\temp. By default, Windows Explorer treats this as a “hidden” directory which can make it hard for users to find, so if you want to collect these files you can choose somewhere else.

If you do choose an alternative location, remember that it must be writeable by an unprivileged user. If you want to use a generic location for many different users you can use environment variables, for example %USERPROFILE%\crash\_dumps defines location c:\username\crash\_dumps.

###  Feedback email details
 
![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11.png)

Firstly you need to decide whether or not you want to compose emails automatically.

It may be corporate policy not to permit users to send emails containing sensitive information in which case if you untick “Compose emails” they will not be created and you can ignore the rest of this section. Following a crash, the user will not be shown the option to send an email.

If you do choose to send emails, you can configure the following:

* The “To:” address. This is required.

By default, this will be [dyna.support@arup.com](mailto:dyna.support@arup.com), but if you would rather collect emails internally, you can replace this with some other address. You can only have a single address in this data field.
* “Cc” address(es). These are optional.

If you want to send copies of the email to other addresses, enter them here. Multiple addresses should be separated by semi-colons, for example "mary.doe@wood.com; an.other@somewhere.com".
* The email sending method.

In order to give users the choice about whether or not to send an email, complete control over its contents and also the ability to add further information, Oasys LS-DYNA Environment software attempts to use the default email client on the user’s system. It does not send emails (or any other data) automatically.

The majority of Windows email clients conform to Microsoft’s internal protocols meaning that the default method should work, but this is not guaranteed. Therefore the software carries out the following process when using its default “Best effort” option:

(1) It tries using the standard Microsoft protocol to run the default email client
 *if that fails*
(2) It tries to use Microsoft Outlook if that is present on the system
 *if that fails*
(3) It tries to use URL mailto: (the way email links are processed from web pages).

The best approach is to the use the Test Email button to try the currently selected method. If, after a few seconds delay, you see the test email shown below then it is working correctly and configuration is complete. 

You can send the test email if you wish. If you want acknowledgement from Oasys Ltd that it has been received, please request this in the email body, otherwise it will be ignored.

![](../Storage/primer-22-1/project-common-topics/emailing-crash-dumps-to-support/emailing-crash-dumps-to-support-2025-06-11-9.png)

If you see this email but it takes about one minute to appear, and you are using the default “Best effort” method, this suggests that the default email client has failed to work. The delay is because this has a time-out period of about one minute and it will have fallen back to one of the Outlook or URL mailto: methods. You can tell which method by inspecting whether or not it has the file test\_attachment.txt attached: if it has then it has used Outlook, if not it has used URL mailto (the latter does not permit attachments). To avoid similar delays for users, please select the method it has actually used so that it will go directly to this.

If none of these methods work, please try to find out as much as possible about the email client installed on the machine and then contact Oasys Ltd for help.

## Save this configuration

Save to oa\_pref will save your selected configuration as preferences to the oa\_pref files selected in the second step above.

## Configuring Crash Handling manually using preferences

The GUI-based process in the previous section works by configuring and saving preferences. You can achieve the same results by setting the following preferences manually:

| **Preference** | **Purpose** | **Possible values (bold = default)** |
| --- | --- | --- |
| cd\_compose\_email | Whether or not to auto-compose and email | **true** or *false* |
| cd\_email\_address | The email “To” destination | **dyna.support@arup.com**<br>*name* *@* *address* |
| cd\_cc\_addresses | Optional “Cc” addresses for the email. | One or more name@address values, separated by “;” |
| cd\_email\_method | The mechanism used to send the email | **best\_effort**<br>*system\_default*<br>*outlook\_cli*<br>*url\_mailto* |
| cd\_minidump\_file | Whether or not to create a minidump file, and how it is processed. | *not\_used*<br>*saved\_only*<br>*emailed\_only*<br>**saved\_and\_emailed** |
| cd\_dump\_directory | Where to write the minidump file instead of the default. | Folder to which the user has write access |

Preferences take the form &lt;code\_name&gt; &lt;\* or #&gt; &lt;preference\_name&gt; : &lt;value&gt; where

| code\_name | Is oasys for all products<br>primer, this, d3plot, shell, reporter for individual products |
| --- | --- |
| \* or # | \* is an unlocked preference<br># is a locked preference |
| preference\_name | One of the names in the left hand column of the table above |
| value | One of the values in the right hand column of the table above |

Preferences are stored in oa\_pref files in any combination of the following locations

| OA\_ADMIN | Administration level |
| --- | --- |
| OA\_INSTALL | Installation level, where the software is installed |
| HOME | The user’s home directory |

They are read in the order OA\_ADMIN, OA\_INSTALL, HOME.

A preference that is locked at one of these levels cannot be superseded by a different one at a lower level. For example locking a preference at the OA\_INSTALL level (and write protecting that directory) means that a user cannot supersede it by defining it differently at the HOME level.

If, for example, you wanted to turn off and lock the composition of minidump emails for all users and all software you would define the preference

oasys#cd\_compose\_email: false

and save this in the OA\_ADMIN and/or OA\_INSTALL oa\_pref files.

## Special configuration in some geographies
 
The default configuration of crash handling depends on the geography as determined by the computer’s “locale”. In particular, email composition is turned off by default on computers with the Japanese “jp-JP” locale.

These defaults can be over-ridden by setting a different value; there is no restriction upon what can be set in a given locale.

[Previous](placement-of-master-window.md)  |  [Next](licences-used-in-software.md)