const path = require("path");
console.log("Current file info:", "\n");
console.log("File name:", __filename);
console.log("Directory :", __dirname);
console.log("\n" + ">".repeat(100) + "\n");

const filePath = "sondip/document/webDev.pdf";
console.log("analyzing Path:", filePath, "\n");
console.log("Directory:", path.dirname(filePath));
console.log("Base Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
console.log("File Name:", path.basename(filePath, path.extname(filePath)));

console.log("\n" + ">".repeat(100) + "\n");
const parsed = path.parse(filePath);
console.log("Parsed Path object:", parsed);
console.log("\n" + ">".repeat(100) + "\n");
console.log("formatted path:", path.format(parsed));
