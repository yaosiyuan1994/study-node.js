process.stdin.resume();
process.stdin.setEncoding("utf-8");

var lines = "";

var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines = line;
});

reader.on("close", () => {
  var newLines = lines.split(" ");
  console.log(newLines);
  newLines.forEach((el) => {
    console.log(el);
  });
});
