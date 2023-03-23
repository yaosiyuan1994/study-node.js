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
  var firstLinesNum = parseInt(lines[0]);
  var outputLine = lines[1].split(" ").map((strNum) => parseInt(strNum));
  var secondLineNum = parseInt(lines[2]);
  var lastLineNum = lines[3].split(" ").map((strNum) => parseInt(strNum));
  //   lastLineNum.forEach((num) => {
  //     console.log(outputLine[num]);
  //   });
  if (
    outputLine.length === firstLinesNum &&
    lastLineNum.length === secondLineNum
  ) {
    lastLineNum.forEach((num) => {
      console.log(outputLine[num - 1]);
    });
  } else {
    console.log("err");
  }
});
