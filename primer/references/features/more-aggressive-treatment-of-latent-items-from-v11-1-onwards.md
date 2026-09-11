####  More Aggressive Treatment of Latent Items from V11.1 Onwards

Prior to release 11.1 the treatment of latent (referred to but not explicitly defined) items during cleanup was very conservative. Such items were not marked for deletion if anything explicitly defined referred to them, and this could lead to annoying situations. For example:

* Some latent \*NODE cards are found
* These exist only because they are referred to by some explicit \*LOAD\_NODE cards

By inspection both the NODE and LOAD cards are redundant in this example and should be cleaned up, but this would not happen.

Therefore from V11.1 onwards a more aggressive treatment of latent items has been implemented.

* Latent items are inspected as before.
* If all references to them are "junior" in the PRIMER hierarchy then this no longer locks them against deletion.
* In this situation both the latent item itself (NODE in the example above) and the referring items (LOAD in this example) are marked for cleanup.
* There is an exception to the "installed junior item no longer locks latent senior item" logic: if the junior item is "structural" then it still locks both the latent item and itself against cleanup.

"Junior"and "senior" refer to the standard PRIMER hierarchical order which, for example, makes \*PART senior to \*ELEMENT, and \*ELEMENT senior to \*NODE. More information about this can be found in [Operational Hierarchy](operational-hierarchy.md#61OperationalHierarchy) in PRIMER.

"Structural" items are, broadly, items that can usefully exist on their own (eg shells and solids); and also PARTs that contain such elements. A node is structural if attached to such an element, but non-structural if it has nothing useful attached to it. Consider the following two examples:

| **Examples of the new, more aggressive cleanup treatment of latent items** |
| --- |
| Example 1 | Some Latent \*NODE cards exist. | Only Installed \*LOAD\_NODEs refer to them | Both \*NODE and \*LOAD cards will now be marked for cleanup because LOAD is junior to NODE, and LOAD is non-structural |
| Example 2 | Some Latent \*PART cards exist. | These are referred to by Installed \*ELEMENT\_BEAM cards | Neither \*PART not \*ELEMENT cards will be marked for cleanup because while BEAM is junior to PART, it is "structural". |
| Example 3 | Some latent \*SECTION cards exist. | These are referred to by Installed \*PART cards | PART is junior to SECTION, however a PART containing elements is "structural". Therefore only empty parts with no elements will be marked for cleanup, and only section cards referred to solely by such empty parts will also be marked for cleanup. |
| Example 4 | Some latent \*ELEMENT\_SOLID cards exist. | These are not referred to by anything. | Because nothing refers to them these will be marked for cleanup. (This behaviour is unchanged.) |

[Previous](when-multiple-calls-to-cleanup-unused-may-be-required.md)  |  [Next](cleaning-up-a-subset-of-a-model.md)