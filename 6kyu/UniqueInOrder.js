// https://www.codewars.com/kata/54e6533c92449cc251001667

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let arr = input.split("");
  let unique = new Set(arr);
  console.log(Array.from(unique));
  rl.close();
});
