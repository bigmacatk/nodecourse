const { readFileSync, writeFileSync } = require("fs");

//ReadFileSync reads what is inside the file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//WriteFileSync will write a file. If the file is already created then it will overwrite the file that is currently there
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);
