console.log("my first node ");

const fs = require("fs");
fs.writeFile("output.txt","writing file", (err) =>{
  if (err) console.log("error");
  else console.log("file written successfully");
  
})