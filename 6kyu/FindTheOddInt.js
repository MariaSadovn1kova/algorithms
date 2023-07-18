// https://www.codewars.com/kata/54da5a58ea159efa38000836

let readline = require("readline");
let result = {};
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let arrayNum = input.split(" ");
  for (let i = 0; i < arrayNum.length; ++i) {
    let a = arrayNum[i];
    if (result[a] != undefined) ++result[a];
    else result[a] = 1;
  }
  for (var key in result) {
    if (result[key] % 2) {
      console.log(key);
    }
  }
  rl.close();
});
