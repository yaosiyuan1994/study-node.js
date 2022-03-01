//1.导入 fs 文件整理模块
const fs = require("fs");

//2.使用 fs.readFile() 方法读取素材目录下的 成绩.txt 文件
fs.readFile("./files/成绩.txt", "utf8", function (err, dataStr) {
  //3.判断文件是否读取失败
  if (err) {
    return console.log("文件读取失败" + err.message);
  }
  //4.1 先把成绩的数据，按照空格进行分割
  const arrOld = dataStr.split(" ");
  //   console.log(arrOld);
  //4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
  const arrNew = [];
  arrOld.forEach((item) => {
    arrNew.push(item.replace("=", ":"));
  });
  //   console.log(arrNew);
  //4.3 把新数组中的每一项，进行合并，得到一个新的字符串
  const newStr = arrNew.join("\r\n");
  //   console.log(newStr);
  //5.调用 fs.writeFile() 方法，把处理完的成绩写入到新文件中
  fs.writeFile("./files/成绩-ok.txt", newStr, function (err) {
    if (err) {
      return;
    }
    console.log("文件写入成功");
  });
});
