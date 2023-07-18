// https://www.codewars.com/kata/526571aae218b8ee490006f4

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let num = input;
  let binary = [],
    result = 0;
  while (num > 0) {
    binary.push(num % 2);
    num = Math.trunc(num / 2);
  }
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) {
      result++;
    }
  }
  console.log(result);
  rl.close();
});
