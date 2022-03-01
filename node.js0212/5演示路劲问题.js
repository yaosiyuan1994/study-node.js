const fs = require("fs");

//出现路径拼接错误的问题，是因为提供了 ./或../ 开头的相对路径
//如果要解决这个问题，可以提供一个完整的文件存放路径
// fs.readFile("./files/1.txt", "utf8", function (err, dataStr) {
//   if (err) {
//     console.log("worring" + err);
//   }
//   console.log("act" + dataStr);
// });

//移植性非常差，不利于维护
// fs.readFile(
//   "C:\\Users\\yao\\study\\node.js\\node.js0212\\files\\1.txt",
//   "utf8",
//   function (err, dataStr) {
//     if (err) {
//       console.log("worring" + err);
//     }
//     console.log("act" + dataStr);
//   }
// );

// __dirname 表示当前文件所处的目录
// console.log(__dirname);
fs.readFile(__dirname + "/files/1.txt", function (err, dataStr) {
  if (err) {
    console.log("worring" + err);
  }
  console.log("act" + dataStr);
});
