// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let num = Number(input);
  let array;
  let result = 0;

  while (num > 9) {
    array = ("" + num).split("").map(Number);
    num = multiplicationResult(array);
    result++;
  }

  console.log(result);

  rl.close();
});

function multiplicationResult(array) {
  let multiplication = 1;
  for (let i = 0; i < array.length; i++) {
    multiplication *= array[i];
  }
  return multiplication;
}
