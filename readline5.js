// 標準入力からNと文字列の配列を取得する
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
let inputs = [];

readline.question("Nを入力してください：", (inputN) => {
  n = parseInt(inputN);

  // N行の文字列を配列に格納する
  for (let i = 0; i < n; i++) {
    readline.question(`${i + 1}行目の文字列を入力してください：`, (input) => {
      inputs.push(input);

      // N行すべての入力が完了した場合に、結果を出力する
      if (inputs.length === n) {
        for (let j = 0; j < n; j++) {
          console.log(`${j + 1}行目の文字列は「${inputs[j]}」です。`);
        }

        readline.close();
      }
    });
  }
});
