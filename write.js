const fs = require("fs");
const content1 = "This is new content \n node.js is awesome!!";

try {
  fs.writeFileSync("./output/text-sync.txt", content1);
  console.log("fle written sync");
} catch (error) {
  console.error(error.message);
}

const content2 = "Ths is content 2 /n this is asynchrounus";
fs.writeFile("./output/text-async.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("file written aysnchronous");
  }
});
