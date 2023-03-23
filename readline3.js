process.stdin.resume();
process.stdin.setEncoding("utf-8");

//for
for (var seireki = 1926; seireki < 1988; seireki++) {
  let syouwa = seireki - 1925;
  console.log("西暦" + seireki + "年は昭和" + syouwa + "年です。");
}
