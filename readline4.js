process.stdin.resume();
process.stdin.setEncoding("utf-8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  if (
    !isNaN(lines[0]) &&
    lines.length === parseInt(lines[0]) &&
    1 <= parseInt(lines[0]) <= 10
  ) {
    for (var n = 1; n < lines.length; n++) {
      console.log(lines[n]);
    }
  } else console.log("err");
});
