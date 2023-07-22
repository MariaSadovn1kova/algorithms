// https://www.codewars.com/kata/546f922b54af40e1e90001da

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  const r = /[^a-z]+/g;
  let str = input.replaceAll(r, "");
  let result = "";
  for (char in str) {
    result += getNumberOfLetter(str[char]) + " ";
  }
  console.log(result);
  rl.close();
});

function getNumberOfLetter(let) {
  // Работает только для латиницы
  return let.toLowerCase().charCodeAt(0) - 96;
}
