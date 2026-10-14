// REPORTER batch processing script
// Processes multiple result files using a template
// Usage: Load this script in REPORTER to generate reports for each file in the list

// Configuration
var TEMPLATE_PATH = "/data3/j26846700/SCRIPTS/P61A_PEDHEAD_003_UNIT.ort";
var LIST_FILE_PATH = "/data3/j26846700/SCRIPTS/list.lst";
var OUTPUT_DIR = "/data3/j26846700/SCRIPTS/reports";

// Create output directory if it doesn't exist
if (!File.IsDirectory(OUTPUT_DIR)) {
    File.Mkdir(OUTPUT_DIR);
}

// Read the list file
var listFile = new File(LIST_FILE_PATH, File.READ);
var resultFiles = [];
var line = "";

// Parse each line in the list file
while ((line = listFile.ReadLine()) !== File.EOF) {
    line = line.trim();
    
    // Skip empty lines and comments
    if (line.length === 0 || line.charAt(0) === "#") {
        continue;
    }
    
    resultFiles.push(line);
}

listFile.Close();

if (resultFiles.length === 0) {
    LogPrint("ERROR: No result files found in list file: " + LIST_FILE_PATH);
} else {
    LogPrint("Found " + resultFiles.length + " result files to process");
    LogPrint("Template: " + TEMPLATE_PATH);
    LogPrint("Output directory: " + OUTPUT_DIR);
    LogPrint("");
    
    // Load the template
    var template = new Template(TEMPLATE_PATH);
    
    if (!template) {
        LogPrint("ERROR: Failed to load template: " + TEMPLATE_PATH);
    } else {
        var successCount = 0;
        var errorCount = 0;
        
        // Process each result file
        for (var i = 0; i < resultFiles.length; i++) {
            var resultFile = resultFiles[i];
            var fileName = resultFile;
            
            LogPrint("Processing [" + (i + 1) + "/" + resultFiles.length + "]: " + fileName);
            
            try {
                // Set the result file as a variable in the template
                // The variable name should match what your template expects
                template.DeleteTemporaryVariables();
                
                // Generate the report with this result file
                template.Generate();
                
                // Create output filename based on input file
                var baseName = File.SimplifyName(resultFile);
                baseName = baseName.replace(/\.[^.]*$/, ""); // Remove extension
                var outputFile = OUTPUT_DIR + "/" + baseName + ".pdf";
                
                // Export as PDF
                template.Pdf(outputFile);
                LogPrint("  ✓ Generated: " + outputFile);
                
                successCount++;
                
            } catch (err) {
                LogPrint("  ✗ ERROR: " + err);
                errorCount++;
            }
        }
        
        template.Close();
        
        LogPrint("");
        LogPrint("===== BATCH PROCESSING COMPLETE =====");
        LogPrint("Successful: " + successCount);
        LogPrint("Failed: " + errorCount);
        LogPrint("Output directory: " + OUTPUT_DIR);
    }
}
