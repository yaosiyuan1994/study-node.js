const path = require("path");

//这是文件的存放路径
const fpath = "/a/b/c/index.html";

const extName = path.extname(fpath);
console.log(extName);
