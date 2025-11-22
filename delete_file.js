const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "Thi is new temp file");
console.log("temp file cerated");

if (fs.existsSync("./output/temp.txt")) {
  console.log("file exists");
}

fs.unlinkSync("./output/temp.txt");
console.log("file deleted");

try {
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
} catch (err) {
  console.log("ERROR:", err.message);
}

// **********************Async*******************
fs.writeFile("./output/temp2.txt", "another file created", (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Another file created");
  }
});

fs.unlink("./output/temp2.txt", (error) => {
  if (error) {
    console.log("ERROR", error.message);
  } else {
    console.log("temp2 deleted");
  }
});
