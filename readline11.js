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
  let nuewLineNum = lines.split(" ").map((strNum) => parseInt(strNum));
  let max = nuewLineNum[0];
  let min = nuewLineNum[0];
  for (let i = 1; i < nuewLineNum.length; i++) {
    if (max < nuewLineNum[i]) {
      max = nuewLineNum[i];
    }
    if (min > nuewLineNum[i]) {
      min = nuewLineNum[i];
    }
  }
  console.log(max - min);
});
