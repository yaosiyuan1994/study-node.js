process.stdin.resume();
process.stdin.setEncoding("utf-8");

let n = -1;
const assets = [];

const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  if (n === -1) {
    n = parseInt(line);
    return;
  }

  if (n === assets.length) {
    return;
  }
  const d = line.split(" ");
  assets.push({
    g: parseInt(d[0]),
    s: parseInt(d[1]),
  });
  console.log(assets);
});

reader.on("close", () => {
  output(assets);
});

function output() {
  assets
    .sort((a1, a2) => {
      total_1 = a1.s * 100 + a1.g;
      total_2 = a2.s * 100 + a2.g;
      return total_1 > total_2 ? -1 : total_1 === total_2 ? 0 : 1;
    })
    .forEach(({ g, s }) => {
      console.log(`${g} ${s}`);
    });
}
