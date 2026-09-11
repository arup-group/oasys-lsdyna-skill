###  The Crash Handler

Normally when a piece of software crashes the operating system terminates the process there and then leaving no means of recovering data or determining what went wrong. This doesn't help you, the user, since you lose all your work; it doesn't help Oasys Ltd Support either since they don't have any evidence with which to debug the problem.

In an ideal world the following would happen when a programme detects an impending crash:

* It would save all your data.
* It would determine where the crash occurred and save this information for debugging.
* It would then allow you to continue execution as if nothing had gone wrong.

Sadly it is not possible to do all the above, but it  ***is***  possible to go some way towards it, and this is what the crash handler does. It works as follows:

* It starts PRIMER in a special mode which tells the operating system "if you detect a crash then don't just kill me, instead tell me what happened and let me deal with it".
* Control is passed to the "crash handler" which tries to deal with the problem as gracefully as possible.

Here is a typical crash handler panel as captured on a Windows platform:

![](../Storage/primer-22-1/primer_links/sect_2/images/fig_2_8_1.png)

You can control how the crash handler works using the preference primer\*error\_handler: *option*

| **Option** | **What it does** |
| --- | --- |
| mini\_dump<br> <br>( *only available on Windows* ) | Writes a traceback if possible <br>Gives you the option of saving all models in keyout files <br>Writes a special "mini dump" file that can be used by Oasys Ltd Support for debugging <br>Terminates execution |
| trap\_continue | Writes a traceback if possible <br>Gives you the option of saving all models in keyout files <br>Gives you the option of continuing, which may not always work <br>Alternatively you can terminate execution |
| trace\_exit | Writes a traceback if possible <br>Terminates execution |
| no\_action | The normal "immediate exit" action of the operating system |

The default settings are:

| Windows | mini\_dump |
| --- | --- |
| Linux | trap\_continue |

The summary below gives more information about crash handling. It is a bit technical and you don't have to understand it, so if you need more help please contact Oasys Ltd Support.

####  What is a "traceback"?

This is a summary listing of the "stack frame" of the programme. It gives a "tree" of the functions currently being called, and sometimes also line numbers and values passed to those functions.

This helps Oasys Ltd Support to debug the programme since while it may not tell us exactly what went wrong it can at least tell tell us more or less where, and sometimes also gives clues about why as well. Here is a typical example taken from a Linux machine:

Here is the stack trace (16 entries):

0: /home/dyna71/rhe5\_12/primer 22\_64.exe [0x78081a] 
1: /lib64/libc.so.6 [0x3fba230280] 
2: /home/dyna71/rhe5\_12/primer 22\_64.exe [0xc44eb9] 
3: /home/dyna71/rhe5\_12/primer 22\_64.exe(build\_off\_screen\_image\_og\_+0x5af) 
4: /home/dyna71/rhe5\_12/primer 22\_64.exe(generate\_image\_+0x384) [0x584914] 
5: /home/dyna71/rhe5\_12/primer 22\_64.exe(laser\_user\_+0xc51) [0x7e7ec1] 
6: /home/dyna71/rhe5\_12/primer 22\_64.exe(process\_sm\_+0xb9e) [0x6a5d4e] 
7: /home/dyna71/rhe5\_12/primer 22\_64.exe(us\_input\_+0x1c0) [0xf1b9c0] 
8: /home/dyna71/rhe5\_12/primer 22\_64.exe(getstr\_+0x26f) [0xf197d1] 
9: /home/dyna71/rhe5\_12/primer 22\_64.exe(comand\_+0x11) [0xf17e81] 
10: /home/dyna71/rhe5\_12/primer 22\_64.exe(manage\_+0x4ea) [0x57ddda] 
11: /home/dyna71/rhe5\_12/primer 22\_64.exe [0x780a07] 
12: /home/dyna71/rhe5\_12/primer 22\_64.exe(MAIN\_\_+0x142) [0x4e7872] 
13: /home/dyna71/rhe5\_12/primer 22\_64.exe(main+0x46) [0x4e7716] 
14: /lib64/libc.so.6(\_\_libc\_start\_main+0xf4) [0x3fba21d974] 
15: /home/dyna71/rhe5\_12/primer 22\_64.exe [0x4e7619]

You will see that this tells us what functions were called, and in this case it indicates that problems arose when building an off-screen image while capturing a plot for a laser printer.

####  What is a "mini-dump" file?

This is a special file, generated on Windows platforms only, that can be used to debug the process. It is typically about 50kBytes long and it contains enough information for code developers to be able to observe the full stack frame, much like the traceback above, but in rather more detail.

If you have ever encountered the normal Windows behaviour when a crash occurs that asks whether you want to send debugging information to Microsoft, and you have said "yes", then this mini-dump file is what you have sent.

This file will be placed in your home directory, typically under:

C:\users\  *yourname*  \local\appdata\temp\primer

and it will have the syntax

primer - *version-svn\_rev-date-time-pid-thread* . dmp.

####  What are the security implications of sending tracebacks or mini-dump files to Oasys Ltd Support?

Oasys Ltd Support may ask you to send us tracebacks or mini-dump files to help us to work out what went wrong.

If you are working on a model that is confidential you may be concerned that by sending this information to Oasys Ltd Support you may be giving us confidential information that you are not allowed to divulge for commercial reasons.

Quite apart from the fact that we always treat client data as being confidential, you should not be concerned that we can reverse-engineer your model in any way since these files do not contain enough information to do this.

| Tracebacks | Contain no model-specific information at all.<br> <br>As you will observe from the example above all they contain is a listing of the functions in which the crash occurred. There is absolutely no data from your model, and they are 100% secure in that respect. |
| --- | --- |
| Mini-dump files | May contain a tiny amount of information, typically about quantities of data.<br> <br>The data these contain is a "frozen" slice of what you were doing at the time, and this may include some scalar information. Typical examples might be:<br><ul> <li>The number of nodes or elements in your model. </li> <li>The coordinates of the node you were dealing with at the time </li> <li>The value of a variable </li> </ul> <br>It must be stressed that no lists of data will ever be available in these files, for example while we may get the coordinates of the single node being processed when the crash occurred we will  ***not***  be able to look at the coordinates of any other nodes. Nor can we recover what was on the screen or the contents of any windows in the user interface.<br> <br>The size of these files, typically 50kBytes, is an indication that they simply cannot contain much information! |

####  How can execution continue after a crash in "trap_continue" mode?

It sounds paradoxical that it is possible to continue execution after a fatal error has occurred, but this is possible if the following method is used:

* When PRIMER first starts make a copy of this initial "clean" stack frame.
* Create an error handler that intervenes during a fatal crash
* Allow this error handler to throw away the existing "corrupt" stack frame and revert to that initial "clean" one.

In non-technical terms you can think of this as having a spare set of clothes available to change into if you have fallen into the mud and made your existing clothes all dirty.

However there are some limitations to this process. If your database has become corrupt then attempting to continue will fail very quickly once again, and this time you will not be able to continue. To use the simple analogy: if you are stuck in the middle of a muddy field then putting on your spare clothes won't help much since as soon as you take a step you will get them muddy as well, and now you have no more spare clothes to change into.

Normally it is best to do the absolute minimum possible required to save your work when continuing execution, then to exit PRIMER and to start again with a fresh session.

####  Why can I not continue execution after writing a mini-dump file?

It would be wonderful if "mini\_dump" mode, the default on Windows, allowed you to continue execution once you had written the file, in the way that "trap\_continue" mode does.

Unfortunately because of the way Windows works this is not possible: if the ability to write a mini-dump file is enabled then, once it has been written, execution has to terminate. This is because control is passed to a special Windows handler and cannot be "retrieved" once it has entered this.

You can set "trap\_continue" mode to be your default on Windows, but the disadvantages of this are two-fold:

1. The stack trace, if it available, provides far less debugging information than a mini-dump file, so Oasys Ltd Support may not be able to work out from it what went wrong.
2. Continuing execution may often not work for the reasons given above.

Therefore we would encourage you to use the default "mini\_dump" mode on Windows, mainly because it makes it much easier for us to find the sources of crashes ... and therefore to fix them.

[Previous](dealing-with-crashes.md)  |  [Next](checkpointrecovery-files.md)