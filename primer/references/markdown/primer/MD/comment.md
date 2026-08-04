###  COMMENT

PRIMER processes two sorts of comments:

1. "Embedded" comment lines, starting with a "$", as described in ["Embedded" Keyword Comments](embedded-keyword-comments.md#comments)
2. "Explicit" comments following the \*COMMENT keyword header, as described here.

From LS971R6 onwards Ansys LS-DYNA permits a \*COMMENT keyword followed by any number of comment lines (not starting with "$") to appear anywhere in the input deck. Any number of such keywords may exist, and while they play no part in the analysis they are echoed by Ansys LS-DYNA to "messag" and "d3hsp" output files.

####  The format of *COMMENT cards

Ansys LS-DYNA states that " *All input that falls between a \*COMMENT command and the subsequent line of input that has an asterisk in the first column thereby signaling the start of another keyword command, is not acted on by Ansys LS-DYNA.* " This leaves some latitude in the interpretation of \*COMMENT cards and their contents and in PRIMER this is implemented as follows:

| Contents of keyword file | Interpretation |
| --- | --- |
| \*COMMENT  *further data* | The 8 characters "\*COMMENT" are interpreted as a keyword header.<br> <br>Users have found that Ansys LS-DYNA ignores anything after \*COMMENT on the header line so they use this space to carry information. Therefore any *further data* on the header line is stored verbatim, including leading white space, and used as a header suffix in menus and labels. The length of *further data* is limited to 160 characters. |
| Line 1 <br>Line 2 <br>... <br>Line n | Any number of lines of data are read and stored, including blank lines. Line length is limited to 256 characters. |
| $ | Lines starting with "$" were ignored before PRIMER V19. <br>From V19 onwards they are included by default but this behaviour can be controlled, see Comment lines (starting "$...") within *COMMENT below |
| Line n+1 | Lines following a "$" line but before the next header are stored. |

####  Rules for locating *COMMENT definitions, "anchoring" them to items in the deck.

PRIMER reads, stores and writes out these cards and it also remembers their location in the input deck so that they are written out again in the correct place; this is referred to as "anchoring" the comment to its following keyword(s). This also means that inside PRIMER a comment "knows about" its following keyword(s), and the keyword(s) "know about" the comment. This allows meta-data to be associated with any item(s) in the deck, and by using the JavaScript interface this meta-data can be interrogated and changed.

Comments are anchored in one of three ways:

#####  (1) Single anchored: associated with only the single following item

Consider the following example. It uses the \*NODE keyword, but any keyword could be used instead.

| Example of a single anchored \*COMMENT card |
| --- |
| | 
```
*NODE
```
 |  |  |  |  |  |<br>| --- | --- | --- | --- | --- | --- |<br>| 
```
1
```
 | 
```
710.09998
```
 | 
```
100.00000
```
 | 
```
-150.000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
2
```
 | 
```
710.09998
```
 | 
```
75.000000
```
 | 
```
-150.000
```
 | 
```
0
```
 | 
```
0
```
 |<br>|  | 
```
etc
```
 |  |  |  |  |<br>| 
```
9
```
 | 
```
710.09998
```
 | 
```
75.000000
```
 | 
```
-150.000
```
 | 
```
0
```
 | 
```
0
```
 |<br><br> 
```
$$COMMENT
comment line 1
comment line 2
$

```
 <br><br>| 
```
*NODE
```
 |  |  |  |  |  |<br>| --- | --- | --- | --- | --- | --- |<br>| 
```
10
```
 | 
```
710.09998
```
 | 
```
-100.000
```
 | 
```
-125.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
11
```
 | 
```
710.09998
```
 | 
```
-100.000
```
 | 
```
-100.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
12
```
 | 
```
0.0
```
 | 
```
0.0
```
 | 
```
140.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
13
```
 | 
```
0.0
```
 | 
```
0.0
```
 | 
```
130.8051

```
 | 
```
0
```
 | 
```
0
```
 | | Items preceding that anchored to the comment are output in the normal way.<br> <br>The \*COMMENT plus its data are written<br> <br>A new keyword header, here \*NODE, precedes the single associated item - here node 10<br> <br>Then output continues in ascending label order as normal. However items after the associated one, so here nodes 11 onwards, are not associated with the preceding comment.. |

This is the default output method since, as the example above shows, it does not interrupt the normal ascending label order output sequence that PRIMER uses, meaning that its impact on the speed of keyword output is negligible.

#####  (2) Multiple anchored: associated with all items in the following block.

In the multiply anchored case the \*COMMENT is associated with all items in the following block, where a "block" means the items between the next two headers.

| \*keyword header <br> *one or more items*  <br>\*keyword header | for <br>example | 
```
*NODE
node i
node j
*NODE
```
 | The items between the two headers, here nodes i and j, form the block. |
| --- | --- | --- | --- |

The second header does not need to be the same as the first, any \*keyword card terminates the block.

Here is an example, again using \*NODEs.

| Example of a multiply anchored \*COMMENT card |
| --- |
| | 
```
*NODE
```
 |  |  |  |  |  |<br>| --- | --- | --- | --- | --- | --- |<br>| 
```
1
```
 | 
```
710.09998
```
 | 
```
100.00000
```
 | 
```
-150.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
2
```
 | 
```
710.09998
```
 | 
```
75.000000
```
 | 
```
-150.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br>|  | 
```
etc
```
 |  |  |  |  |<br>| 
```
9
```
 | 
```
710.09998
```
 | 
```
75.000000
```
 | 
```
-150.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br><br> 
```
$$COMMENT
comment line 1
comment line 2
$

```
 <br><br>| 
```
*NODE
```
 |  |  |  |  |  |<br>| --- | --- | --- | --- | --- | --- |<br>| 
```
10
```
 | 
```
710.09998
```
 | 
```
-100.0000
```
 | 
```
-125.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
12
```
 | 
```
710.09998
```
 | 
```
-100.0000
```
 | 
```
-100.0000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
14
```
 | 
```
0.0
```
 | 
```
0.0
```
 | 
```
140.00000
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
$
```
 |  |  |  |  |  |<br>| 
```
*NODE
```
 |  |  |  |  |  |<br>| 
```
11
```
 | 
```
0.0
```
 | 
```
0.0
```
 | 
```
130.80508
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
13
```
 | 
```
0.0
```
 | 
```
-1.106133
```
 | 
```
121.86359
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
15
```
 | 
```
0.0
```
 | 
```
-9.731972
```
 | 
```
120.00057
```
 | 
```
0
```
 | 
```
0
```
 |<br>| 
```
16
```
 | 
```
0.0
```
 | 
```
-18.92688
```
 | 
```
120.00091
```
 | 
```
0
```
 | 
```
0
```
 |<br>|  | 
```
etc
```
 |  |  |  |  | | Items preceding that anchored to the comment are output in the normal way.<br> <br>The \*COMMENT plus its data are written before the lowest labelled item in the anchored block, here node 10.<br> <br>A new keyword header, here \*NODE, precedes all the items in the block, which are written in ascending label order. Here the block is nodes 10, 12, 14 shown in red.<br> <br>A new keyword header, here \*NODE, is written to terminate the block and output continues in ascending label order. Obviously nodes written previously within the anchored block are not repeated. |

It will be clear from the example above that an anchored block may well interrupt PRIMER 's normal ascending label sequence order, making output of affected keywords a multiple pass operation. For this reason it can slow down keyword output slightly, although the effect is usually small.

PRIMER remembers the items within a block, but does not remember the sequence in which they were defined within that block. So for example if in the example above nodes were read in the order 14, 12, 10 they would still be output in ascending order 10, 12, 14.

#####  (3) Free-standing: not associated with any keyword item.

A \*COMMENT is free-standing inside PRIMER if:

* It was never followed by a keyword. In other words it was followed by \*END or by the "end of file".
* It was originally followed by one or more associated keywords, but these were subsequently deleted in the PRIMER session.

Free-standing \*COMMENT definitions are always written out immediately before the \*END card in their parent file.

#####  Setting the anchoring mode used for comments

During keyword input any \*COMMENT card encountered will be parsed according to the rules currently in force, which are set in the [\[Model\], Read "Options"](options-controls-many-aspects-of-reading-ls-dyna-files.md#opts_star_comment) panel:

![](../Storage/primer-22-1/primer_links/sect_5/comment/fig_2.png)

The default in PRIMER is for comments to be singly anchored, as shown here, but this may be changed dynamically or set by preference

primer\*anchored\_comment\_handling: single | multiple

The anchoring mode is stored separately for each comment and may be [changed in the comment editing panel as shown below](comment.md#anchor_mode).

#####  How comment anchoring works inside PRIMER

A \*COMMENT "knows about" all its associated items, and they "know" that they are associated with a comment. Inside PRIMER this is implemented as follows:

* A \*COMMENT maintains an internal list of all keywords associated with it.
* It also makes a cross-reference entry on each associated keyword, which this will show up in the cross-reference viewer.

However a cross-reference will not "lock" an associated item against deletion. If it is deleted it will be removed silently from the list of associated items on the \*COMMENT, and if that list then becomes empty the \*COMMENT definition will become "free-standing".

#####  Using *COMMENT to store for meta-data about items

Because items know via their cross-references that they are associated with a \*COMMENT it is possible to use these comments to store meta-data about items, and to read and write these data via the JavaScript interface.

#####  Associating multiple *COMMENT cards with an item

It is perfectly legal to have the following sequence


```
*COMMENT first
Line 1
Line 2
$ 
*COMMENT second
Line 1
Line 2
$
*keyword_header
<item>
```


In this situation both comments "first" and "second" will be associated with the item (or block of items in the multiple case), there is no limit to the number of \*COMMENT cards that can be associated with an item.

#####  *COMMENT and include files.

A \*COMMENT definition will always have a "parent" include file, which is that from which it was read or that to which it is subsequently moved inside PRIMER . Normally its associated keyword will be in the same include file, but it is possible to change this inside PRIMER with the result that the \*COMMENT definition and its associated keyword(s) are in different include files. In this situation the following rules are used:

* On keyword output the \*COMMENT definition will still be written out immediately before its associated keyword, in the include file of that keyword, regardless of its "parent" include file definition. Therefore the associated keyword"wins" in this sense if it is actually written out. This is also the case in the multiply anchored case where all associated items are in the same include file.
* In the multiple anchored case where associated items have moved to more than one include file the comment will be written in the include file of the first associated item encountered during keyout. Its output will not be repeated in subsequent include files.
* The "parent" include file of the \*COMMENT remains that from which it was read, regardless of the include file of any associated keyword. Editing panels for the \*COMMENT definition will show this correctly.
* If the \*COMMENT becomes free-standing, or on output its associated keyword is not written out but its parent include file is still written, then the \*COMMENT will be written immediately before \*END in its parent include file.

PRIMER 's check functions will warn you if the parent include file of a comment is different to that of its contents, offering to move it to the relevant include file.

| Creating and editing *COMMENTs interactively  <br>\*COMMENT definitions can be created, edited and deleted just like any other keyword in PRIMER |
| --- |
| ![](../Storage/primer-22-1/primer_links/sect_5/comment/fig_1.png)<br> <br>This example shows a Single Anchored comment associated with PART 3. |
| ![](../Storage/primer-22-1/primer_links/sect_5/comment/anchor.png) | Chooses whether this comment is associated with a [single keyword](comment.md#single_anchor) or a [block of keywords](comment.md#multiple_anchor). |
| Define/Change... | Defines or changes the associated item(s). Making a new selection deletes the old one, ie the effect is not "add" but rather "replace". |
| Detach | Detaches the comment from all associated keywords, making it free-standing. |
| List | Lists the current associated items |
| Edit comment | This launches the standard system editor (as in Text edit ) that allows the comment lines to be edited as text. |
| There is no limit to the number of comment lines that may be given under a \*COMMENT header, but it is recommended that the maximum line width be restricted to 80 characters for conformity with the standard input deck width. PRIMER will read up to 256 characters per line, but other software may truncate the file to 80 columns. (Ansys LS-DYNA ignores it, so that is not a limitation.) |

####  Sketching *COMMENT definitions

Obviously comments themselves can't be sketched! However it can be useful to know what they are associated with, so the Sketch functions draw their "associated keyword" item(s) where this is possible. Since it is possible to associate a comment with any keyword, including things like \*CONTROL, it may not always be possible to sketch them.

####  Visualising and editing *COMMENT via Text Edit on editing panels

\*COMMENT cards generally hold meta-data associated with the subsequent keyword(s) so it makes sense for this information to be readily available when a keyword is edited. Therefore the Text Edit button on an editing panel will be highlit if the keyword being edited has associated \*COMMENT cards, and hovering over that button will preview these in a popup window. Here is an example:

![](../Storage/primer-22-1/primer_links/sect_5/comment/fig_3.png)

This is in addition to the display of any embedded comments that may be present. See [Embedded Keyword Comments](embedded-keyword-comments.md#comments)for more information.

If Text Edit is used then the comment will be part of the "mini file" that is sent to the external editor. So in the example above:


```
*COMMENT on part 500001
[PR_CTAG 6] Do not delete or change this line, it will be removed after editing.
Comment line 1
Comment line 2
$
*PART
Example of part with associated comment

```


| 
```
$:
```
 | 
```
pid
```
 | 
```
secid
```
 | 
```
mid
```
 | 
```
eosid
```
 | 
```
hgid
```
 | 
```
grav
```
 | 
```
adpopt
```
 | 
```
tmid
```
 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 
```
500001
```
 | 
```
500001
```
 | 
```
500001
```
 | 
```
0
```
 | 
```
0
```
 | 
```
0
```
 | 
```
0
```
 | 
```
0
```
 |

In the same way that the keyword definition itself can be edited the \*COMMENT can be edited too, updating its internal definition inside PRIMER . You may also create a new \*COMMENT definition which will become associated with the keyword.

(The extra line starting [PR\_CTAG... is required since \*COMMENT cards do not have labels, so when this mini file is reread PRIMER needs some way of knowing which \*COMMENT card it should update. This line identifies it by internal label and is removed when the file is reread after editing. Do not add this line if you create a new comment.)

####  Comment lines (starting "$...") within *COMMENT

By default all lines starting "$..." within a \*COMMENT block are read and remembered verbatim. This behaviour can be modified via the [\[Model\] Read, Options](options-controls-many-aspects-of-reading-ls-dyna-files.md#comment_inside_comment)panel which allows reading of the following "comment within \*COMMENT" line combinations to be controlled separately:

>  
> 
> | "$" | Empty comment line |
> | --- | --- |
> | "$ " | Conventional comment starting "$ + white space" |
> | "$: " | PRIMER special comment starting "$ + colon" |
> | "$# " | LS PrePost special comment starting "$ + hash" |
> | "$..." | Comment starting "$ + &lt;any non white space&gt;" |
> 
> 

####  Using *COMMENT for meta-data using the JavaScript interface

Because \*COMMENT cards make a cross-reference entry inside PRIMER on every associated item these in turn "know" which comments refer to them. This makes it possible for the Comment class in JavaScript to read and write this data, in effect making it possible to have any amount of meta-data associated with any keyword.

So long as software which processes the input deck maintains the relative positions of the \*COMMENT card and its associated \*keyword(s) this meta-data should survive passage through a workflow.

[Previous](case.md)  |  [Next](constrained-imposed-constraints-joints-welds-etc.md)