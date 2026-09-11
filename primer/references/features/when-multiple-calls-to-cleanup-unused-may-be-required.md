####  When Multiple Calls to CLEANUP UNUSED May Be Required

Usually turning the "iterative" switch on will identify all items that are to be removed in a single operation, but if a large number of different item types are to be removed it may require multiple clean-ups to remove absolutely everything unwanted from a model.

The reason is that in iterative cleanup mode PRIMER has to ask the question "if I remove this then can I remove that?" to many levels of complexity, and if a lot of different entity types are removed there comes a stage at which this gets too difficult to resolve in a single operation.

Therefore if a long list of different item types is identified for removal it is usually worth repeating the CLEANUP UNUSED operation until the message " **No items found to delete** " is returned. This guarantees that no further unwanted items remain.

[Previous](switches-controlling-cleanup-unused.md)  |  [Next](more-aggressive-treatment-of-latent-items-from-v11-1-onwards.md)