###  General Rules

1. **Each line** in the input file defines **one** data extraction or plot request
2. Long lines can be split into shorter ones using a continuation character "\" at the end of each line
3. **Space characters** are used to **divide the line into 'words'**
4. The input script is NOT case-sensitive.
5. Unless detailed elsewhere in this manual, the first few (usually three) characters of the first word on the line discriminate the request of a particular entity, and the syntax which applies to reading in the remaining words on the line
6. If the first word on the line is not recognised, the program ignores it - it is treated as a comment
7. The last words on the data extraction request lines allow [options](performing-fast-tcf-curve-operations.md#opers) for filtering, Y-axis scaling, HIC, average and a short reference tag (The tags may be used for operation and plotting requests)
8. The last words on the plotting request line allow [options](setting-properties-for-curves.md#properties) for title, line style and axis changes
9. A successful data extraction always has a curve outputted, if there is no output (e.g. HIC, ERR) then a duplicate curve is outputted. This helps with tagging output curves

Previous: new-features  |  Next: running-fast-tcf