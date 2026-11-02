###  What happens when a checkpoint file runs

Each command in the file is repeated verbatim, as if you had typed or mouse clicked it, until either the end of the file or the "#commands to execute" value are reached. Thereafter the session returns to being interactive in the normal way. A new checkpoint file is written which, initially, will be a copy of the one being played back, but will then contain any further interactive commands.

Previous: selecting-a-checkpoint-file  |  Next: limitations-of-checkpoint-files