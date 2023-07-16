let readline = require("readline");
let x;
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let arrayStr = input.split(" ");
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i].length > 4) {
      x = arrayStr[i].split("");
      arrayStr[i] = x.reverse().join("");
    }
  }
  console.log(arrayStr.join(" "));
  rl.close();
});
