####  Changing the Table Columns

The connection table can show various properties of connections.

Set columns will activate the most commonly applicable fields for the connections that are currently on the table. For example, if they are all welds you won't see any bolt parameters.

To add or remove columns press the View... button which will bring the window shown below. The fields that are currently shown are marked with a tick symbol.

Unset All can be used to de-activate all settings but ID. Reset will return to the last selection. Save Settings will record your preferred defaults in the oa\_pref file.

The View... panel has various sub-headings to make it easier to find and turn on/off table columns. These sub-headings are:

[General](available-table-columns.md#table_column_general) - General connection properties not related to the other sub-headings.

[Layers](available-table-columns.md#table_column_layers) - Up to 10 layers can be specified per connection - this panel gives access to them on the table.

[Parts](available-table-columns.md#table_column_parts) - A different part ID can be specified for each layer of beam/solid elements in the connection - this panel gives access to them on the table.

[Spot remesh](available-table-columns.md#table_column_remesh) - Gives access to all columns relating to [remesh settings/properties](creating-spotwelds.md#spotweld_remeshing) for spotwelds.

[Settings saved](available-table-columns.md#table_column_settings_saved) - By default, all settings used during creation of a connection are saved with the connection entity. This means that when the connection is remade, the saved settings are used rather than the defaults. This panel gives you access to them on the table.

![](../Storage/primer-22-1/primer_links/sect_6/connection/connection_table21.gif)

The columns can be made wider or smaller by dragging the sides of them in the header. The column order can be changed by dragging a column to a new position.

By default the rows are sorted by connection ID. You can sort by a different column by pressing on the column header. Pressing once will sort in ascending order. Clicking the column again will sort by descending order. The column that is currently used for sorting has an arrow drawn on it. This also shows if the sort is ascending or descending.

The Set columns function will try to display those most relevant to the current selection of connections on the table and may be useful after one has applied the dynamic filters.
[Previous](connection-table.md)  |  [Next](available-table-columns.md)