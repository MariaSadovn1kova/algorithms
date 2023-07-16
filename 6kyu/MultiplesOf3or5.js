//https://www.codewars.com/kata/514b92a657cdc65150000006

let readline = require("readline");
let a,
  sum = 0;
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let arrayNum = input.split(" ");
  a = Number(arrayNum[0]);
  for (let i = 1; i < a; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i;
    }
  }
  console.log(sum);
  rl.close();
});
