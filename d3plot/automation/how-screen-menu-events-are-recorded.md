###  How screen-menu events are recorded

In command-line mode the files are simple: they simply record and play back verbatim typed in commands. When screen-menu mode is in use it becomes necessary to record commands expressed as button clicks, slider motions, etc; so a different strategy is required.

D3PLOT stores these screen menu "events" in special codes in the file, and replays them as if they had been applied by the user.

Previous: introduction-to-command-files  |  Next: compatibility-with-files-from-earlier-releases-of-d3plot