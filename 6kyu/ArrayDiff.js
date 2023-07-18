// https://www.codewars.com/kata/523f5d21c841566fde000009

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let input_arr = input;

  let arrs = input_arr.split(" ");
  let first_arr = arrs[0].split("");
  let second_arr = arrs[1].split("");
  let result = [];

  result = findNums(first_arr, result);
  result = findNums(second_arr, result);
  console.log(result);

  rl.close();
});

function findNums(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    if (!result.find((item) => item == arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
