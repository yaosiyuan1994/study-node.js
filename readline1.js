process.stdin.resume();
process.stdin.setEncoding("utf-8");

//单行
var input_string = "";
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  input_string = line;
});
reader.on("close", () => {
  console.log("hello" + input_string);
});
