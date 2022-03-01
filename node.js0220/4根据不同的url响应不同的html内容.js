const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //1.获取请求的 url 地址
  const url = req.url;
  //2.设置默认的相应内容为 404 not found
  let content = "404 not found!";
  //3.判断用户请求的是否为 / 或 /index.html 首页
  //4.判断用户请求的是否为 /about.html 关于页面
  if (url === "/" || url === "/index.html") {
    content = "<h1>homepage</h1>";
  } else if (url === "/about.html") {
    content = "<h1>aboutpage</h1>";
  }
  //5.设置 Content-Type 响应头，防止中文乱码
  res.setHeader("Content-Type", "text/html; charset=uft-8");
  //6.使用 res.end() 把内容相应给客户端
  res.end(content);
});
server.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
