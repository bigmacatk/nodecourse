const path = require("path");

//returns path seperator
console.log(path.sep);

//returns joined file path
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

//Gives the file name at the end of the file path. In this case it text.txt
const base = path.basename(filePath);
console.log(base);

//This will give the entire path and directory of where the content is located
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
