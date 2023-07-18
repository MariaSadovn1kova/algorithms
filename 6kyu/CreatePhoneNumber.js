// https://www.codewars.com/kata/525f50e3b73515a6db000b83

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let input_arr = input;

  let arr = input_arr.split("");

  console.log(createPhoneNumber(arr));

  rl.close();
});

function createPhoneNumber(arr) {
  return `(${String(arr.slice(0, 3)).replace(/[\s.,%]/g, "")}) ${String(
    arr.slice(3, 6)
  ).replace(/[\s.,%]/g, "")}-${String(arr.slice(6, 10)).replace(
    /[\s.,%]/g,
    ""
  )} `;
}
