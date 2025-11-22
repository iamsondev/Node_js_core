const fs = require("fs");

console.log("no blockkiing");

fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("error happen");
  } else {
    console.log("file content :");
    console.log(data);
  }
});
console.log("finished");
