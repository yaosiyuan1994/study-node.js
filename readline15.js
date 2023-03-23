process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  const d = line.split(" ");
  lines.push(d);
});
reader.on("close", () => {
  const point = parseInt(lines[2]);
  console.log(point);
  for (var i = 1; i < lines.length; i++) {
    lines[i].forEach((items) =>
      console.log(items.filter((num) => num === point).length)
    );
  }
});
