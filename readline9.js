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
  var firstLines = lines[0].split(" ").map((strNum) => parseInt(strNum));
  var secondLine = lines[1].split("");
  if (secondLine.length === firstLines[0] && firstLines[1] <= firstLines[0]) {
    console.log(secondLine[firstLines[1] - 1]);
  } else console.log("err");
});
