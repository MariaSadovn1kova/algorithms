// https://www.codewars.com/kata/517abf86da9663f1d2000003

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  const r = /[^a-zA-Z]+/g;
  let str = input.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "-" || str[i] == "_") {
      str[i + 1] = str[i + 1].toUpperCase();
    }
  }
  console.log(String(str).replaceAll(r, ""));

  rl.close();
});
