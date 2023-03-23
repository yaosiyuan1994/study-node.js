process.stdin.resume();
process.stdin.setEncoding("utf-8");

//多行
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  console.log("hello " + lines[0]);
  console.log("hello " + lines[1]);
  console.log("hello " + lines[2]);
});
