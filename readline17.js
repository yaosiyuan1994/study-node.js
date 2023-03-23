process.stdin.resume();
process.stdin.setEncoding("utf8");
let n = 5;
const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  if (n === lines.length) {
    return;
  }
  lines.push(line.split(""));
});
reader.on("close", () => {
  output(lines);
});

function output() {}

function winLines(markLines) {
  markLines.filter((items) =>
    items === items ? console.log(items) : console.log("err")
  );
}
