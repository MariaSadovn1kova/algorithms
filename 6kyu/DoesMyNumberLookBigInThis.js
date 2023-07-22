// https://www.codewars.com/kata/5287e858c6b5a9678200083c

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let num = Number(input);
  let numArr = input.split("");
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    sum += Math.pow(numArr[i], numArr.length);
  }

  sum == num ? console.log(true) : console.log(false);
  rl.close();
});
