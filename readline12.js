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
  bulidArr(lines);
});

function bulidArr(lines) {
  const getNumAct = (data) => data.split(" ").map((strNum) => parseInt(strNum));
  var firstLine = getNumAct(lines[0]);
  var lineNum = getNumAct(lines[1]);
  if (firstLine[0] === lineNum.length) {
    for (var i = 2; i <= firstLine[1] + 1; i++) {
      var newLines = getNumAct(lines[i]);
      if (newLines.length === 2 && newLines[0] === 0) {
        lineNum.push(newLines[1]);
      }
      if (lines[i] === "2") {
        console.log(lineNum.join(" "));
      }
      if (lines[i] === "1") {
        lineNum.pop();
      }
    }
  }
}
