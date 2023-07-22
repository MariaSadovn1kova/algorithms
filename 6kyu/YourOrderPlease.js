// https://www.codewars.com/kata/55c45be3b2079eccff00010f

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let str = ("" + input).split(" ");
  // Сортировка пузырьком
  for (let j = str.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (foundNum(str[i]) > foundNum(str[i + 1])) {
        let temp = str[i];
        str[i] = str[i + 1];
        str[i + 1] = temp;
      }
    }
  }

  console.log(str);
  rl.close();
});

function foundNum(str) {
  let num;
  for (let char of str) {
    if (Number(char)) {
      num = char;
    }
  }
  return num;
}
