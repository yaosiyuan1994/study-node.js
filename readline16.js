process.stdin.resume();
process.stdin.setEncoding("utf-8");
let n = -1;
let m = -1;
let k = -1;
const rs = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  if (n === -1) {
    const d = line.split(" ");
    n = parseInt(d[0]);
    m = parseInt(d[1]);
    k = parseInt(d[2]);
    return;
  }
  if (n === rs.length) {
    return;
  }
  rs.push(line.split(" ").map((num) => parseInt(num)));
});
reader.on("close", () => {
  output();
});
function output() {
  rs.forEach((nums) => {
    console.log(nums.filter((num) => num === k).length);
  });
}
