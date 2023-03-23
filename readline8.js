process.stdin.resume();
process.stdin.setEncoding("utf-8");

var lines = "";

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
    // lines[1].length === parseInt(lines[0]) &&
    1 <= parseInt(lines[0]) <= 10
  ) {
    var newLine = lines[1].split(",");
    newLine.forEach((element) => {
      console.log(element);
    });
  } else console.log("err");
});
