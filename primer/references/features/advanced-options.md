#####  Advanced Options

| Specialised tuning of compressed and uncompressed i/o.
<br>***You don't need to understand this, in fact it is usually best left well alone!***<br>
<br>By default PRIMER threads (parallelises) both reading and writing of keyword files by using two separate threads:<br>
<ul style="font-size: 14.6667px;"> <li>The master thread is the main process which handles the database.</li> <li>The child thread handles the disk i/o operation, including (de)compression if that is being used.</li>
</ul>
<br>This allows the child thread to be busy handling disk i/o while the master process is concurrently busy dealing with the data to be written and read. There are obvious advantages to this when (de)compressing files, but a more subtle advantage also arises when dealing with a slow disk as the latency of the i/o process (ie its stop/start nature) is less likely to hold up the master thread.<br>
<br>Normally this "just works", but when synchronising child and master processes on a time-sharing operating system there are of necessity various compromises that have to be made, and tuning settings that have to be arrived at by trial and error. The settings here are quite complex, and changing them adversely could absolutely cripple i/o performance so it is strongly recommended that you leave them alone unless you encounter problems.<br>
<br>If you do encounter i/o problems please contact Oasys Ltd Support. In the first instance they will ask you to turn on the diagnostics, then depending on what that reveals they may ask you to change some of the tuning settings here. These settings can be saved in your oa\_pref file so hopefully if changes are required it will be possible to save the optimum values for your system once these have been determined. | ![](../Storage/primer-22-1/primer_links/sect_3/images/fig_3_3_2m.png) |
| --- | --- |

[Previous](write-binary-format.md)  |  [Next](declash-on-writing-a-model.md)