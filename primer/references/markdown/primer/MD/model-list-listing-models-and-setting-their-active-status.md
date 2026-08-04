###  Model &gt; List: Listing Models and Setting Their "Active" Status

####  The "Model No:" column:

Model numbers are arbitrary in the range 1 to 255, and may be changed at will. Model #0 is reserved for internal use.

* Shows the ids of each model ( M  *nnn* ). Numbers are assigned automatically to models in PRIMER in ascending sequential order from #1 when they are read in, you can change these numbers at any time using [Model &gt; Renumber](model-renumber-renumbering-models-andor-their-contents.md#37MODELRENUMBER).
* If the "Model No:" entry button is selected (as they all are here, shown by the green colour) then that model is available for display. If de-selected (coloured red) then that model will not be drawn. This is the highest level of display control, and provides a quick and easy method of un-cluttering the display.

Deselection via Model &gt; List is the recommended method for suppressing models that are to remain in the database, but are not currently being worked on since it not only stops them being drawn, but also:

* Automatically deselects their M*n*  "tabs" in selection menus (see
[Filtering by Mnn Model "tabs"](filtering-by-mnn-model-tabs.md#mn_filtering)), meaning that their contents are not shown by default.
* If only one model is active (green) then PRIMER is able to assume that this is the one you want to work on, and it is able to eliminate a layer of "which model do you want?" questions in many selection contexts.

####  The "Title" column:

* Shows the title of all models, as read from their \*TITLE cards in the input deck.
* A model's title may be changed by typing a new string into its "title" button. (It can also be changed in the  [Keyword &gt; Control](control-defining-analysis-control-cards.md) editing panel)
* The [&lt;&gt;] button toggles between display of model title and model filename. (It has no effect on the actual title of the model written out after the \*TITLE keyword.)

[Previous](how-primer-treats-models.md)  |  [Next](model-create.md)