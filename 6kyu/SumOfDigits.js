//https://www.codewars.com/kata/541c8630095125aba6000c00

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let num = input;
  let arr = num.split(""),
    sum = 0;
  while (num.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }
    num = String(sum);
    arr = num.split("");
    sum = 0;
  }
  console.log(num);
  rl.close();
});
