const path = require("path");
const fs = require("fs");

//注意: ../ 会抵消前面的路径
// const pathStar = path.join("/a", "/b/c", "../../", "./d", "e");
// console.log(pathStar);

fs.readFile(
  path.join(__dirname, "/files/1.txt"),
  "utf8",
  function (err, dataStr) {
    if (err) {
      console.log("worring" + err);
    }
    console.log("wellcome!!" + dataStr);
  }
);
