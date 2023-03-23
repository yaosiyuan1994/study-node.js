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
  var num = BigInt(lines);
  var max = BigInt("1000" + "0".repeat(997));
  var min = BigInt(0);
  if (min <= num <= max) {
    console.log(num);
  } else {
    console.log("err");
  }
});
