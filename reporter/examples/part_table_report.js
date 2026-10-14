// REPORTER script: create a report page with a table of part IDs and part names.

var template = new Template();
var page = new Page(template, { name: "Part Table" });

// Table with default 2 columns and 2 rows; add rows as needed for data.
var table = new Item(page, Item.TABLE, "PartTable", 20, 190, 30, 160);

var partData = [
    { id: 1001, name: "Front Rail" },
    { id: 1002, name: "Cross Member" },
    { id: 1003, name: "Side Sill" },
    { id: 1004, name: "Floor Panel" }
];

var requiredRows = partData.length + 1; // header + data rows
while (table.rows < requiredRows) {
    table.InsertRow();
}

table.SetCellProperties({ text: "Part ID", fontStyle: Reporter.TEXT_BOLD }, 0, 0);
table.SetCellProperties({ text: "Part Name", fontStyle: Reporter.TEXT_BOLD }, 0, 1);

for (var i = 0; i < partData.length; i++) {
    table.SetCellProperties({ text: String(partData[i].id) }, i + 1, 0);
    table.SetCellProperties({ text: partData[i].name }, i + 1, 1);
}

template.Generate();
var outputReport = GetCurrentDirectory() + "/part_table_report.orr";
template.SaveAs(outputReport);

LogPrint("Created report: " + outputReport);